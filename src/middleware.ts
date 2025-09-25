// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const SUPPORTED = ["en", "es", "fr", "de", "ru", "pt"] as const;
type Lang = (typeof SUPPORTED)[number];

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // ¿La ruta ya trae prefijo /en|/es|... ?
  const m = pathname.match(/^\/(en|es|fr|de|ru|pt)(?:\/|$)/);
  if (m) {
    const lang = m[1] as Lang;
    const res = NextResponse.next();
    res.headers.set("x-lang", lang);
    return res;
  }

  // Sin prefijo -> idioma por defecto EN, reescribe a /en + misma ruta
  const url = req.nextUrl.clone();
  url.pathname = `/en${pathname}`;
  const res = NextResponse.rewrite(url);
  res.headers.set("x-lang", "en");
  return res;
}

export const config = {
  // Excluir assets, API y archivos estáticos
  matcher: ["/((?!_next|api|.*\\.(?:png|jpg|jpeg|gif|svg|ico|webp|avif|css|js|map|txt|xml|json|webmanifest)).*)"],
};
