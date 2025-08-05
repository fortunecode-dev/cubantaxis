import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const locales = [
  "en",
  "es",
  // "fr",
  // "de",
  // "ru",
  // "pt"
];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Si la ruta ya tiene un locale válido, continúa normal
  if (locales.some((locale) => pathname.startsWith(`/${locale}`))) {
    return NextResponse.next();
  }

  // Permite que "/" se maneje como ruta sin redirección
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next|.*\\..*).*)"],
};
