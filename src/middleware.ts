// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const SUPPORTED = ["en", "es", "fr", "de", "ru", "pt"] as const;
type Lang = (typeof SUPPORTED)[number];

// 410 exactas (sin reemplazo)
const GONE_EXACT = new Set<string>([
  "/about-us",
  "/interesting-place/3863-2",
  "/interesting-place/3870-2",
]);

// 410 por familias legacy (WP taxonomías, etc.)
const GONE_PREFIXES: RegExp[] = [
  /^\/categoria(\/|$)/,
  /^\/destino(\/|$)/,
  /^\/facilidades(\/|$)/,
  /^\/facilidades-viajes(\/|$)/,
  /^\/tipo-destino(\/|$)/,
];

export function middleware(req: NextRequest) {
  const url = req.nextUrl;
  const { pathname, search } = url;

  // 1) https forzado
  // if (url.protocol === "http:") {
  //   url.protocol = "https:";
  //   return NextResponse.redirect(url, { status: 301 });
  // }

  // 2) quitar www
  if (url.hostname.startsWith("www.")) {
    url.hostname = url.hostname.replace(/^www\./, "");
    return NextResponse.redirect(url, { status: 301 });
  }

  // 3) normalizar slash final:
  // - Mantener slash SOLO en raíz "/"
  // - Quitar slash al final del resto (excepto si es sólo "/")
  if (pathname.length > 1 && pathname.endsWith("/")) {
    url.pathname = pathname.replace(/\/+$/, "");
    return NextResponse.redirect(url, { status: 301 });
  }

  // 1) Canonicalizar host: www -> apex (301)
  if (url.hostname === "www.cubantaxis.com") {
    const to = url.clone();
    to.hostname = "cubantaxis.com";
    return NextResponse.redirect(to, 301);
  }

  // Normaliza trailing slash para matching
  const norm =
    pathname !== "/" && pathname.endsWith("/") ? pathname.slice(0, -1) : pathname;

  // 2) 410 Gone para URLs sin reemplazo
  if (GONE_EXACT.has(norm) || GONE_PREFIXES.some((re) => re.test(norm))) {
    return new NextResponse(
      `<!doctype html><html lang="en"><head><meta charset="utf-8" />
<title>410 Gone</title><meta name="robots" content="noindex, nofollow" /></head>
<body><h1>410 Gone</h1><p>This page has been removed.</p></body></html>`,
      { status: 410, headers: { "content-type": "text/html; charset=utf-8" } }
    );
  }

  // 3) Idioma por prefijo y header para SSR; sin prefijo => rewrite a /en
  const m = pathname.match(/^\/(en|es|fr|de|ru|pt)(?:\/|$)/);
  const lang: Lang = (m?.[1] as Lang) || "en";

  const requestHeaders = new Headers(req.headers);
  requestHeaders.set("x-lang", lang);

  if (!m) {
    // Sin prefijo: sirve /en + misma ruta (URL pública se mantiene sin /en)
    const rewrite = url.clone();
    rewrite.pathname = `/en${pathname}`;
    rewrite.search = search;

    const res = NextResponse.rewrite(rewrite, { request: { headers: requestHeaders } });
    res.headers.set("Vary", "x-lang, Accept-Language");
    return res;
  }

  // Con prefijo: deja pasar con header inyectado
  const res = NextResponse.next({ request: { headers: requestHeaders } });
  res.headers.set("Vary", "x-lang, Accept-Language");
  return res;
}

export const config = {
  matcher: [
    // Excluye assets y API
    "/((?!_next|api|.*\\.(?:png|jpg|jpeg|gif|svg|ico|webp|avif|css|js|map|txt|xml|json|webmanifest)).*)",
  ],
};
