// Server Component (sin "use client" y sin estado)
import Link from "next/link";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { getTranslation } from "@/app/[lang]/locales";

export default function Header({ lang }: { lang: any }) {
  const idioma = getTranslation(lang);
  // Puedes mantener NEXT_PUBLIC_* si ya los usas en tu build
  const FACEBOOK = process.env.NEXT_PUBLIC_FACEBOOK || "https://www.facebook.com/CubanTaxis/";
  const INSTAGRAM = process.env.NEXT_PUBLIC_INSTAGRAM || "https://www.instagram.com/cubantaxis/";
  const LOGO = process.env.NEXT_PUBLIC_LOGO_URL; // opcional: /logo.svg

  return (
    <header
      className="
        fixed top-0 w-full z-50 border-b border-primary/20
        bg-white
      "
      role="banner"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Link href={lang=="en"?"/":`/${lang}`} className="flex items-center gap-2" aria-label="CubanTaxis Home">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={LOGO || "/icon.png"} alt="CubanTaxis" className="h-14 w-auto" />
            </Link>
          </div>

          {/* Desktop nav (hover CSS, sin JS) */}
          <nav className="hidden lg:flex items-center gap-2" aria-label="Primary">
            {idioma.header.map((dd: any) =>
              dd.items ? (
                <div key={dd.key} className="relative group">
                  <button
                    className="px-3 py-2 text-sm font-medium text-primary hover:text-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 rounded-md"
                    aria-haspopup="true"
                    aria-expanded="false"
                    type="button"
                  >
                    {dd.label}
                  </button>
                  {/* Dropdown panel */}
                  <div
                    className="
                      invisible group-hover:visible opacity-0 group-hover:opacity-100
                      transition-all duration-150
                      absolute left-1/2 -translate-x-1/2 mt-2
                      min-w-[260px] rounded-xl border border-primary/15 bg-white shadow-lg
                    "
                    role="menu"
                  >
                    <ul className="max-h-[60vh] overflow-auto p-2">
                      {dd.items.map((it: any) => (
                        <li key={it.href}>
                          <Link
                            href={it.href}
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
                    className="ml-2 rounded-lg px-3 py-2 text-sm font-medium text-primary hover:text-accent hover:bg-primary/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
                  >
                    {dd.label}
                  </Link>
                )
              )
            )}
          </nav>

          {/* Socials (desktop) */}
          <div className="hidden lg:flex items-center gap-4 text-xl">
            <a
              href={FACEBOOK}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              title="Facebook Page"
              className="text-primary hover:text-accent transition-colors"
            >
              <FaFacebookF />
            </a>
            <a
              href={INSTAGRAM}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              title="Instagram Profile"
              className="text-primary hover:text-accent transition-colors"
            >
              <FaInstagram />
            </a>
          </div>

          {/* Mobile: overlay full-screen sin JS (checkbox hack) */}
          <div className="lg:hidden relative">
            {/* 1) Switch oculto */}
            <input id="nav-open" type="checkbox" className="peer hidden" />

            {/* 2) Botón hamburguesa (label) */}
            <label
              htmlFor="nav-open"
              className="inline-flex items-center justify-center rounded-md p-2 text-primary hover:bg-primary/10 cursor-pointer"
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" />
              </svg>
            </label>

            {/* 3) Overlay */}
            <div
              className="
                fixed inset-0 z-[60] bg-white/95 backdrop-blur
                opacity-0 invisible translate-y-1
                transition
                peer-checked:opacity-100 peer-checked:visible peer-checked:translate-y-0
              "
            >
              {/* Top bar del overlay: logo izq + cerrar der */}
              <div className="h-16 px-4 flex items-center justify-between border-b border-primary/20 bg-white/95">
                <div className="flex items-center gap-2">
                  <Link href={lang=="en"?"/":`/${lang}`} className="flex items-center gap-2" aria-label="CubanTaxis Home">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={LOGO || "/icon.png"} alt="CubanTaxis" className="h-14 w-auto" />
                  </Link>
                </div>

                {/* label que cierra el menú (toggle) */}
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

              {/* Contenido scrollable */}
              <div className="px-4 py-3 space-y-1 overflow-y-auto h-auto bg-white/95">
                {idioma.header.map((dd: any) =>
                  dd.items ? (
                    <details key={dd.key} className="group rounded-lg border border-primary/20">
                      <summary className="list-none w-full flex items-center justify-between px-3 py-3 text-sm font-medium text-primary cursor-pointer">
                        <span>{dd.label}</span>
                        <svg
                          className="h-5 w-5 transition-transform group-open:rotate-180"
                          viewBox="0 0 24 24"
                          fill="none"
                          aria-hidden="true"
                        >
                          <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" />
                        </svg>
                      </summary>
                      <div className="border-t border-primary/15">
                        <ul className="max-h-[50vh] overflow-auto py-1">
                          {dd.items.map((it: any) => (
                            <li key={it.href}>
                              <Link href={it.href} className="block px-4 py-2 text-sm text-primary hover:bg-primary/5">
                                {it.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                        {dd.allHref && (
                          <div className="border-t border-primary/15">
                            <Link
                              href={dd.allHref}
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
                        className="block px-4 py-2 text-sm font-semibold rounded-lg text-accent hover:bg-accent/10"
                      >
                        {dd.label}
                      </Link>
                    )
                  )
                )}

                {/* Socials (mobile) */}
                <div className="flex items-center gap-4 pt-2">
                  <a
                    href={FACEBOOK}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    title="Facebook Page"
                    className="text-primary hover:text-accent transition-colors text-xl"
                  >
                    <FaFacebookF />
                  </a>
                  <a
                    href={INSTAGRAM}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    title="Instagram Profile"
                    className="text-primary hover:text-accent transition-colors text-xl"
                  >
                    <FaInstagram />
                  </a>
                </div>
              </div>
            </div>
            {/* /Overlay */}
          </div>
          {/* /Mobile */}
        </div>
      </div>
    </header>
  );
}
