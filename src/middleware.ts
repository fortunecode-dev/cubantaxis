// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const SUPPORTED = ["en", "es", "fr", "de", "ru", "pt"] as const;
type Lang = (typeof SUPPORTED)[number];

export function middleware(req: NextRequest) {
  const { pathname, search } = req.nextUrl;

  // Detecta prefijo /en|/es|...
  const m = pathname.match(/^\/(en|es|fr|de|ru|pt)(?:\/|$)/);
  const lang: Lang = (m?.[1] as Lang) || "en";

  // Inyecta header en la **request**
  const requestHeaders = new Headers(req.headers);
  requestHeaders.set("x-lang", lang);

  if (!m) {
    // Sin prefijo => sirve /en/... (rewrite interno), manteniendo la URL
    const url = req.nextUrl.clone();
    url.pathname = `/en${pathname}`;
    url.search = search;

    const res = NextResponse.rewrite(url, { request: { headers: requestHeaders } });
    // Muy importante para CDNs: que la caché varíe por idioma
    res.headers.set("Vary", "x-lang, Accept-Language");
    return res;
  }

  const res = NextResponse.next({ request: { headers: requestHeaders } });
  res.headers.set("Vary", "x-lang, Accept-Language");
  return res;
}

export const config = {
  matcher: [
    "/((?!_next|api|.*\\.(?:png|jpg|jpeg|gif|svg|ico|webp|avif|css|js|map|txt|xml|json|webmanifest)).*)",
  ],
};
