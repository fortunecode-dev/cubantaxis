'use client'

import React, { ReactNode } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

type TBreadCrumbProps = {
  homeElement?: ReactNode
  capitalizeLinks?: boolean
  lang?: string
}

export default function NextBreadcrumb({
  homeElement = "Home",
  capitalizeLinks = true,
  lang = "en"
}: TBreadCrumbProps) {

  const pathname = usePathname()
  const segmentsRaw = pathname.split('/').filter(Boolean)

  // Si el primer segmento es el idioma y es igual a lang, ignorarlo como segmento
  const segments = segmentsRaw.filter((seg, i) => !(i === 0 && LANGS.includes(seg)))

  const prefix = lang === "en" ? "" : `/${lang}`

  const format = (str: string) =>
    capitalizeLinks
      ? str.replace(/-/g, " ").replace(/^\w/, c => c.toUpperCase())
      : str.replace(/-/g, " ")

  // No mostrar breadcrumbs en home
  if (pathname === "/" || pathname === `/${lang}`) return null

  return (
    <nav aria-label="Breadcrumb" className="mx-auto max-w-6xl px-4 pt-18">
      {segments.length > 0 && <ol className="flex items-center flex-wrap gap-1 text-xs font-medium tracking-tight">

        {/* HOME chip */}
        <li>
          <Link
            href={`${prefix}/`}
            className="
              inline-flex items-center rounded-full
              bg-primary/10 text-primary
              px-3 py-1.5
              transition hover:bg-primary/15
            "
          >
            {homeElement}
          </Link>
        </li>

        {segments.length > 0 && (
          <li className="px-1 text-gray-400 font-bold">›</li>
        )}

        {/* Dynamic chips */}
        {segments.map((seg, i) => {
          const href = `${prefix}/${segmentsRaw.slice(0, i + 1 + (segmentsRaw.length - segments.length)).join('/')}`
          const isLast = i === segments.length - 1
          const label = format(seg)

          return (
            <React.Fragment key={i}>
              <li>
                {isLast ? (
                  <span
                    className="
                      inline-flex items-center rounded-full
                      bg-accent/10 text-accent
                      px-3 py-1.5
                      font-bold
                    "
                  >
                    {label}
                  </span>
                ) : (
                  <Link
                    href={href}
                    className="
                      inline-flex items-center rounded-full
                      bg-primary/10 text-primary
                      px-3 py-1.5
                      transition hover:bg-primary/15
                    "
                  >
                    {label}
                  </Link>
                )}
              </li>

              {/* separator except last */}
              {!isLast && (
                <li className="px-1 text-gray-400 font-bold">›</li>
              )}
            </React.Fragment>
          )
        })}
      </ol>}
    </nav>
  )
}

// Lista de idiomas soportados
const LANGS = ["en", "es", "pt", "fr", "ru", "de"]
