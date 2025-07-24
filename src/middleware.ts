import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const locales = ["en", "es", "fr", "de", "ru", "pt"];
const defaultLocale = "en";

function getPreferredLocale(request: NextRequest): string {
  const acceptLang = request.headers.get("accept-language") || "";
  const preferredLanguages = acceptLang
    .split(",")
    .map((lang) => lang.split(";")[0].trim());

  // Busca el primer idioma soportado
  for (const lang of preferredLanguages) {
    const langCode = lang.split("-")[0]; // "es-ES" -> "es"
    if (locales.includes(langCode)) {
      return langCode;
    }
  }

  return defaultLocale; // Si ninguno coincide
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Si la ruta ya tiene un locale válido, continua
  if (locales.some((locale) => pathname.startsWith(`/${locale}`))) {
    return NextResponse.next();
  }

  // Detecta idioma del navegador
  const locale = getPreferredLocale(request);

  // Redirige si está en /
  if (pathname === "/") {
    return NextResponse.redirect(new URL(`/${locale}`, request.url));
  }

  return NextResponse.next();
}

// Aplica middleware a todas las rutas excepto _next y archivos estáticos
export const config = {
  matcher: ["/((?!_next|.*\\..*).*)"],
};
