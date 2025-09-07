// libs/i18n-nav.tsx
"use client";

import { usePathname, useRouter } from "next/navigation";
import Link, { LinkProps } from "next/link";
import { ComponentProps, PropsWithChildren, useMemo } from "react";

const locales = ["en", "es"
  , "fr"
  , "de"
  , "ru"
  , "pt"] as const;
type Locale = (typeof locales)[number];

function extractLocale(pathname: string): Locale | null {
  const seg = pathname.split("/")[1];
  return locales.includes(seg as Locale) ? (seg as Locale) : null;
}

function ensureLeadingSlash(path: string) {
  return path.startsWith("/") ? path : `/${path}`;
}

/** Devuelve el href final:
 * - Si el href YA trae /en o /es -> lo respeta.
 * - Si la URL actual tiene locale -> lo antepone al href.
 * - Si no hay locale actual -> deja el href "normal".
 */
export function useLocaleHref(rawHref: string) {
  const pathname = usePathname();
  const currentLocale = extractLocale(pathname);
  const href = ensureLeadingSlash(rawHref);

  const hasLocaleInHref = locales.some(
    (l) => href === `/${l}` || href.startsWith(`/${l}/`)
  );

  return useMemo(() => {
    if (hasLocaleInHref) return href; // ya viene con /en o /es
    if (currentLocale) return `/${currentLocale}${href}`; // conserva el locale actual
    return href; // navega "normal" (sin prefijo)
  }, [hasLocaleInHref, href, currentLocale]);
}

/** Link que preserva automáticamente el locale si existe en la URL actual */
export function LocaleLink(
  props: PropsWithChildren<LinkProps & { href: string } & ComponentProps<"a">>
) {
  const finalHref = useLocaleHref(String(props.href));
  const { children, ...rest } = props;
  return (
    <Link {...rest} href={finalHref}>
      {children}
    </Link>
  );
}

/** Router que preserva automáticamente el locale en push/replace */
export function useLocaleRouter() {
  const router = useRouter();
  const localeHref = useLocaleHref;

  return {
    push: (href: string) => router.push(localeHref(href)),
    replace: (href: string) => router.replace(localeHref(href)),
    prefetch: (href: string) => router.prefetch(localeHref(href)),
    // también exponemos el router original por si necesitas otras APIs
    router,
  };
}
