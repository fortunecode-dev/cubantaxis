// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const SUPPORTED = ["en", "es", "fr", "de", "ru", "pt"] as const;
type Lang = (typeof SUPPORTED)[number];

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const m = pathname.match(/^\/(en|es|fr|de|ru|pt)(?:\/|$)/);
  const lang: Lang = (m?.[1] as Lang) || "en";

  const res = NextResponse.next();
  res.headers.set("x-lang", lang);
  return res;
}

export const config = {
  // Excluye assets estáticos y API
  matcher: ["/((?!_next|.*\\..*|api).*)"],
};
