// Server Component (sin "use client")
// app/components/Header.tsx
import Link from "next/link";
import { getTranslation } from "@/app/[lang]/locales";
import Image from "next/image";
import CloseMobileMenu from "./CloseMovileMenu";
import LanguageSelect from "@/components/LanguageSelect";
import { Facebook, Instagram } from "@deemlol/next-icons";
export default function Header({ lang }: { lang: any }) {
  const idioma = getTranslation(lang);

  const FACEBOOK = process.env.NEXT_PUBLIC_FACEBOOK || "https://www.facebook.com/CubanTaxis/";
  const INSTAGRAM = process.env.NEXT_PUBLIC_INSTAGRAM || "https://www.instagram.com/cubantaxis/";
  const LOGO = process.env.NEXT_PUBLIC_LOGO_URL || "/apple-touch-icon.png";

  const isHome = false;

  return (
    <header
      className="fixed top-0 w-full z-50 border-b border-primary/20 bg-white"
      role="banner"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between gap-4">

          {/* Logo */}
          <div className="flex items-center gap-2">
            <Link
              href={lang == "en" ? "/" : `/${lang}`}
              className="flex items-center gap-2"
              aria-label="CubanTaxis Home"
              prefetch={false}
            >
              <Image
                src={LOGO}
                alt="CubanTaxis"
                width={56}
                height={56}
                sizes="56px"
                priority={isHome}
                fetchPriority={isHome ? "high" : "auto"}
                className="rounded"
              />
            </Link>
          </div>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-2" aria-label="Primary">
            {idioma.header.map((dd: any) =>
              dd.items ? (
                <div key={dd.key} className="relative group">
                  <button
                    className="px-3 py-2 text-sm font-medium text-primary hover:text-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 rounded-md"
                    type="button"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    {dd.label}
                  </button>

                  <div
                    className="
                      invisible group-hover:visible opacity-0 group-hover:opacity-100
                      transition-all duration-150
                      absolute left-1/2 -translate-x-1/2 mt-2
                      min-w-[260px] rounded-xl border border-primary/15 bg-white shadow-lg
                    "
                    role="menu"
                    style={{ contentVisibility: "auto", containIntrinsicSize: "320px" }}
                  >
                    <ul className="max-h-[60vh] overflow-auto p-2">
                      {dd.items.map((it: any) => (
                        <li key={it.href}>
                          <Link
                            href={it.href}
                            prefetch={false}
                            className="flex items-center justify-between rounded-lg px-3 py-2 text-sm text-primary hover:bg-primary/5 hover:text-primary"
                            role="menuitem"
                          >
                            <span>{it.title}</span>
                          </Link>
                        </li>
                      ))}

                      <li className="my-2 border-t border-primary/10" />

                      {dd.allHref && dd.allLabel && (
                        <li>
                          <Link
                            href={dd.allHref}
                            prefetch={false}
                            className="block rounded-lg px-3 py-2 text-sm font-semibold text-accent hover:bg-accent/10"
                            role="menuitem"
                          >
                            {dd.allLabel}
                          </Link>
                        </li>
                      )}
                    </ul>
                  </div>
                </div>
              ) : (
                dd.href && (
                  <Link
                    key={dd.href}
                    href={dd.href}
                    prefetch={false}
                    className="ml-2 rounded-lg px-3 py-2 text-sm font-medium text-primary hover:text-accent hover:bg-primary/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
                  >
                    {dd.label}
                  </Link>
                )
              )
            )}
          </nav>

          {/* Desktop: Redes + Idioma */}
          <div className="hidden lg:flex items-center gap-4 text-xl">

            <LanguageSelect currentLang={lang}/>
            {/* Redes */}
            <a
              href={FACEBOOK}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-primary hover:text-accent transition-colors"
            >
           <Facebook size={24} color="#41517c" /></a>

            <a
              href={INSTAGRAM}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-primary hover:text-accent transition-colors"
            >
            <Instagram size={24} color="#41517c" /></a>

            {/* Idioma al lado de las redes */}
          </div>

          {/* Mobile */}
          <div className="lg:hidden relative flex items-center gap-3">

            {/* Idioma al lado del menú */}
            <LanguageSelect currentLang={lang}/>

            {/* Toggle del menú */}
            <input id="nav-open" type="checkbox" className="peer hidden" />

            <label
              htmlFor="nav-open"
              className="inline-flex items-center justify-center rounded-md p-2 text-primary hover:bg-primary/10 cursor-pointer"
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none">
                <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" />
              </svg>
            </label>

            {/* Overlay del menú mobile */}
            <div
              id="mobile-menu"
              className="
                fixed inset-0 z-[60] bg-white/95 backdrop-blur
                opacity-0 invisible translate-y-1
                transition
                peer-checked:opacity-100 peer-checked:visible peer-checked:translate-y-0
              "
              style={{ contentVisibility: "auto", containIntrinsicSize: "640px" }}
            >
              <div className="h-16 px-4 flex items-center justify-between border-b border-primary/20 bg-white/95">
                <div className="flex items-center gap-2">
                  <Link
                    href={lang == "en" ? "/" : `/${lang}`}
                    className="flex items-center gap-2"
                    aria-label="CubanTaxis Home"
                    prefetch={false}
                  >
                    <Image src={LOGO} alt="CubanTaxis" width={56} height={56} sizes="56px" className="rounded" />
                  </Link>
                </div>

                <label
                  htmlFor="nav-open"
                  aria-label="Close menu"
                  className="rounded-md p-2 text-primary hover:bg-primary/10 cursor-pointer"
                >
                  <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none">
                    <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" />
                  </svg>
                </label>
              </div>

              <div className="px-4 py-3 space-y-1 overflow-y-auto h-auto bg-white/95">
                {idioma.header.map((dd: any) =>
                  dd.items ? (
                    <details key={dd.key} className="group rounded-lg border border-primary/20">
                      <summary className="list-none w-full flex items-center justify-between px-3 py-3 text-sm font-medium text-primary cursor-pointer">
                        <span>{dd.label}</span>
                        <svg className="h-5 w-5 transition-transform group-open:rotate-180" viewBox="0 0 24 24">
                          <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth={1.8} />
                        </svg>
                      </summary>

                      <div className="border-t border-primary/15">
                        <ul className="max-h-[50vh] overflow-auto py-1">
                          {dd.items.map((it: any) => (
                            <li key={it.href}>
                              <Link
                                href={it.href}
                                prefetch={false}
                                className="block px-4 py-2 text-sm text-primary hover:bg-primary/5"
                              >
                                {it.title}
                              </Link>
                            </li>
                          ))}
                        </ul>

                        {dd.allHref && (
                          <div className="border-t border-primary/15">
                            <Link
                              href={dd.allHref}
                              prefetch={false}
                              className="block px-4 py-2 text-sm font-semibold text-accent hover:bg-accent/10"
                            >
                              {dd.allLabel}
                            </Link>
                          </div>
                        )}
                      </div>
                    </details>
                  ) : (
                    dd.href && (
                      <Link
                        href={dd.href}
                        key={dd.href}
                        prefetch={false}
                        className="block px-4 py-2 text-sm font-semibold rounded-lg text-accent hover:bg-accent/10"
                      >
                        {dd.label}
                      </Link>
                    )
                  )
                )}

                {/* Socials mobile */}
                <div className="flex items-center gap-4 pt-2">
                  <a className="text-primary hover:text-accent transition-colors text-xl" href={FACEBOOK}>
                 <Facebook size={24} color="#41517c" />      </a>
                  <a className="text-primary hover:text-accent transition-colors text-xl" href={INSTAGRAM}>
                  <Instagram size={24} color="#41517c" />      </a>
                </div>
              </div>
            </div>

            {/* autocierre */}
            <CloseMobileMenu />
          </div>
        </div>
      </div>
    </header>
  );
}
