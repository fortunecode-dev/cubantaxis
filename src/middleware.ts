import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const locales = [
  "en",
  "es",
  "fr",
  "de",
  "ru",
  "pt"
];
const defaultLocale = "en";

// Si quieres detectar por cookie/Accept-Language, usa esta función en lugar de defaultLocale.
function resolveLocale(req: NextRequest) {
  const cookie = req.cookies.get("NEXT_LOCALE")?.value;
  if (cookie && locales.includes(cookie as any)) return cookie;

  const accept = req.headers.get("accept-language") ?? "";
  const found = accept.split(",").map(s => s.trim().slice(0, 2)).find(c => locales.includes(c as any));
  return found ?? defaultLocale;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // 1) Deja pasar assets y archivos
  if (pathname.startsWith("/_next") || /\.\w+$/.test(pathname)) {
    return NextResponse.next();
  }

  // 2) Si ya viene con locale (/es, /en), sigue normal
  if (locales.some(l => pathname === `/${l}` || pathname.startsWith(`/${l}/`))) {
    return NextResponse.next();
  }
  // 3) Si es una llamada al api
  if (pathname.startsWith(`/api/`)) {
    return NextResponse.next();
  }

  // 3) Reescribe TODO lo demás a locale por defecto (o detectado)
  const url = request.nextUrl.clone();
  const loc = defaultLocale; // o usa directamente defaultLocale
  url.pathname = `/${loc}${pathname}`;
  return NextResponse.rewrite(url);
}

export const config = {
  matcher: ["/((?!_next|.*\\..*).*)"],
};
