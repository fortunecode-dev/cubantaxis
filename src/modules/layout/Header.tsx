// Server Component (sin "use client" y sin estado)
// app/components/Header.tsx
import Link from "next/link";
import { getTranslation } from "@/app/[lang]/locales";
import Image from "next/image";
import CloseMobileMenu from "./CloseMovileMenu";

export default function Header({ lang }: { lang: any }) {
  const idioma = getTranslation(lang);

  // Puedes mantener NEXT_PUBLIC_* si ya los usas en tu build
  const FACEBOOK = process.env.NEXT_PUBLIC_FACEBOOK || "https://www.facebook.com/CubanTaxis/";
  const INSTAGRAM = process.env.NEXT_PUBLIC_INSTAGRAM || "https://www.instagram.com/cubantaxis/";
  const LOGO = process.env.NEXT_PUBLIC_LOGO_URL || "/apple-touch-icon.png";

  // Truco: si quieres poner prioridad al logo SOLO en home, pásalo por prop desde layout y condiciona aquí.
  const isHome = false;

  return (
    <header
      className="fixed top-0 w-full z-50 border-b border-primary/20 bg-white"
      role="banner"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between gap-4">

          {/* Logo: tamaño fijo + sizes correcto => evita CLS y descarga sobredimensionada */}
          <div className="flex items-center gap-2">
            <Link
              href={lang == "en" ? "/" : `/${lang}`}
              className="flex items-center gap-2"
              aria-label="CubanTaxis Home"
              prefetch={false} // evita prefetch no necesario
            >
              <Image
                src={LOGO}
                alt="CubanTaxis"
                width={56}
                height={56}
                sizes="56px"
                priority={isHome}
                fetchPriority={isHome ? "high" : "auto"}
                className="rounded" // evita setear height con Tailwind para no pelear con width/height
              />
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
                    style={{ contentVisibility: "auto", containIntrinsicSize: "320px" }} // difiere pintura
                  >
                    <ul className="max-h-[60vh] overflow-auto p-2">
                      {dd.items.map((it: any) => (
                        <li key={it.href}>
                          <Link
                            href={it.href}
                            prefetch={false} // menos churn de red
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

          {/* Socials (desktop) — sin react-icons (menos JS). SVGs inline con aria-hidden */}
          <div className="hidden lg:flex items-center gap-4 text-xl">
            <a
              href={FACEBOOK}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              title="Facebook Page"
              className="text-primary hover:text-accent transition-colors"
            >
              <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5">
                <path fill="currentColor" d="M22 12a10 10 0 1 0-11.6 9.9v-7h-2.4V12h2.4V9.8c0-2.4 1.4-3.8 3.6-3.8 1 0 2 .2 2 .2v2.2h-1.1c-1.1 0-1.5.7-1.5 1.4V12h2.6l-.4 2.9h-2.2v7A10 10 0 0 0 22 12z"/>
              </svg>
            </a>
            <a
              href={INSTAGRAM}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              title="Instagram Profile"
              className="text-primary hover:text-accent transition-colors"
            >
              <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5">
                <path fill="currentColor" d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 2 .2 2.7.5.7.3 1.3.6 1.9 1.2.6.6.9 1.2 1.2 1.9.3.7.4 1.5.5 2.7.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.2 2-.5 2.7a4.6 4.6 0 0 1-3.1 3.1c-.7.3-1.5.4-2.7.5-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-2-.2-2.7-.5a4.6 4.6 0 0 1-3.1-3.1c-.3-.7-.4-1.5-.5-2.7C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.2-2 .5-2.7.3-.7.6-1.3 1.2-1.9.6-.6 1.2-.9 1.9-1.2.7-.3 1.5-.4 2.7-.5C8.4 2.2 8.8 2.2 12 2.2Zm0 1.8c-3.1 0-3.5 0-4.8.1-1 .1-1.6.2-2 .4-.5.2-.8.4-1.2.8-.4.4-.6.7-.8 1.2-.2.4-.3 1-.4 2 0 1.3-.1 1.7-.1 4.8s0 3.5.1 4.8c.1 1 .2 1.6.4 2 .2.5.4.8.8 1.2s.7.6 1.2.8c.4.2 1 .3 2 .4 1.3.1 1.7.1 4.8.1s3.5 0 4.8-.1c1-.1 1.6-.2 2-.4.5-.2.8-.4 1.2-.8.4-.4.6-.7.8-1.2.2-.4.3-1 .4-2 .1-1.3.1-1.7.1-4.8s0-3.5-.1-4.8c-.1-1-.2-1.6-.4-2-.2-.5-.4-.8-.8-1.2-.4-.4-.7-.6-1.2-.8-.4-.2-1-.3-2-.4-1.3-.1-1.7-.1-4.8-.1Zm0 3.3a6.7 6.7 0 1 1 0 13.4 6.7 6.7 0 0 1 0-13.4Zm0 1.8a4.9 4.9 0 1 0 0 9.8 4.9 4.9 0 0 0 0-9.8Zm5-2.3a1.6 1.6 0 1 1 0 3.2 1.6 1.6 0 0 1 0-3.2Z"/>
              </svg>
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
              id="mobile-menu"
              className="
                fixed inset-0 z-[60] bg-white/95 backdrop-blur
                opacity-0 invisible translate-y-1
                transition
                peer-checked:opacity-100 peer-checked:visible peer-checked:translate-y-0
              "
              style={{ contentVisibility: "auto", containIntrinsicSize: "640px" }} // difiere pintura hasta abrir
            >
              {/* Top bar del overlay: logo izq + cerrar der */}
              <div className="h-16 px-4 flex items-center justify-between border-b border-primary/20 bg-white/95">
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
                      className="rounded"
                    />
                  </Link>
                </div>

                {/* label que cierra el menú (toggle) */}
                <label
                  htmlFor="nav-open"
                  aria-label="Close menu"
                  className="rounded-md p-2 text-primary hover:bg-primary/10 cursor-pointer"
                >
                  <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
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

                {/* Socials (mobile) — igual que desktop, SVG inline */}
                <div className="flex items-center gap-4 pt-2">
                  <a
                    href={FACEBOOK}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    title="Facebook Page"
                    className="text-primary hover:text-accent transition-colors text-xl"
                  >
                    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5">
                      <path fill="currentColor" d="M22 12a10 10 0 1 0-11.6 9.9v-7h-2.4V12h2.4V9.8c0-2.4 1.4-3.8 3.6-3.8 1 0 2 .2 2 .2v2.2h-1.1c-1.1 0-1.5.7-1.5 1.4V12h2.6l-.4 2.9h-2.2v7A10 10 0 0 0 22 12z"/>
                    </svg>
                  </a>
                  <a
                    href={INSTAGRAM}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    title="Instagram Profile"
                    className="text-primary hover:text-accent transition-colors text-xl"
                  >
                    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5">
                      <path fill="currentColor" d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 2 .2 2.7.5.7.3 1.3.6 1.9 1.2.6.6.9 1.2 1.2 1.9.3.7.4 1.5.5 2.7.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.2 2-.5 2.7a4.6 4.6 0 0 1-3.1 3.1c-.7.3-1.5.4-2.7.5-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-2-.2-2.7-.5a4.6 4.6 0 0 1-3.1-3.1c-.3-.7-.4-1.5-.5-2.7C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.2-2 .5-2.7.3-.7.6-1.3 1.2-1.9.6-.6 1.2-.9 1.9-1.2.7-.3 1.5-.4 2.7-.5C8.4 2.2 8.8 2.2 12 2.2Zm0 1.8c-3.1 0-3.5 0-4.8.1-1 .1-1.6.2-2 .4-.5.2-.8.4-1.2.8-.4.4-.6.7-.8 1.2-.2.4-.3 1-.4 2 0 1.3-.1 1.7-.1 4.8s0 3.5.1 4.8c.1 1 .2 1.6.4 2 .2.5.4.8.8 1.2s.7.6 1.2.8c.4.2 1 .3 2 .4 1.3.1 1.7.1 4.8.1s3.5 0 4.8-.1c1-.1 1.6-.2 2-.4.5-.2.8-.4 1.2-.8.4-.4.6-.7.8-1.2.2-.4.3-1 .4-2 .1-1.3.1-1.7.1-4.8s0-3.5-.1-4.8c-.1-1-.2-1.6-.4-2-.2-.5-.4-.8-.8-1.2-.4-.4-.7-.6-1.2-.8-.4-.2-1-.3-2-.4-1.3-.1-1.7-.1-4.8-.1Zm0 3.3a6.7 6.7 0 1 1 0 13.4 6.7 6.7 0 0 1 0-13.4Zm0 1.8a4.9 4.9 0 1 0 0 9.8 4.9 4.9 0 0 0 0-9.8Zm5-2.3a1.6 1.6 0 1 1 0 3.2 1.6 1.6 0 0 1 0-3.2Z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Autocierre del menú en clic/navegación */}
            <CloseMobileMenu />
            {/* /Overlay */}
          </div>
          {/* /Mobile */}
        </div>
      </div>
    </header>
  );
}
