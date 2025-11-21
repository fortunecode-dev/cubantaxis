// libs/i18n-nav.tsx
"use client";

import { usePathname, useRouter } from "next/navigation";
import Link, { LinkProps } from "next/link";
import { ComponentProps, PropsWithChildren, useMemo, useCallback } from "react";

const locales = ["en", "es", "fr", "de", "ru", "pt"] as const;
type Locale = (typeof locales)[number];

function extractLocale(pathname: string): Locale | null {
  const seg = pathname.split("/")[1];
  return locales.includes(seg as Locale) ? (seg as Locale) : null;
}

function ensureLeadingSlash(path: string) {
  return path.startsWith("/") ? path : `/${path}`;
}

function stripLeadingSlash(path: string) {
  return path.startsWith("/") ? path.slice(1) : path;
}

function stripLocalePrefix(path: string) {
  const clean = ensureLeadingSlash(path);
  for (const l of locales) {
    if (clean === `/${l}`) return "/";
    if (clean.startsWith(`/${l}/`)) return clean.replace(`/${l}`, "");
  }
  return clean;
}

type UseLocaleHrefOptions = {
  /** Fuerza enlace nativo, sin prefijo /en, /es, etc. */
  native?: boolean;
  /** Cualquier path que empiece por alguno de estos prefijos será nativo. Ej: ["/interesting-places"] */
  nativePaths?: string[];
};

/**
 * Devuelve el href final:
 * - Si el href YA trae /en o /es -> lo respeta.
 * - Si options.native === true -> devuelve SIN locale.
 * - Si el href matchea algún prefijo de options.nativePaths -> devuelve SIN locale.
 * - Si la URL actual tiene locale -> lo antepone al href.
 * - Si no hay locale actual -> deja el href "normal" (sin prefijo).
 */
function useLocaleHref(rawHref: string, options: UseLocaleHrefOptions = {}) {
  const pathname = usePathname();
  const currentLocale = extractLocale(pathname);
  const href = ensureLeadingSlash(rawHref);
  const { native = false, nativePaths = [] } = options;

  const hasLocaleInHref = useMemo(
    () => locales.some((l) => href === `/${l}` || href.startsWith(`/${l}/`)),
    [href]
  );

  const isNativeByList = useMemo(() => {
    if (!nativePaths.length) return false;
    const clean = ensureLeadingSlash(stripLocalePrefix(href));
    return nativePaths.some((p) => {
      const pref = ensureLeadingSlash(p);
      return clean === pref || clean.startsWith(`${pref}/`);
    });
  }, [href, nativePaths]);

  return useMemo(() => {
    // 1) Si el href ya trae locale, respétalo.
    if (hasLocaleInHref) return href;

    // 2) Modo nativo explícito o por lista -> sin locale
    if (native || isNativeByList) {
      // Asegura que no se “cuele” un locale accidental
      return ensureLeadingSlash(stripLocalePrefix(href));
    }

    // 3) Preserva locale actual si existe
    if (currentLocale) return `/${currentLocale}${href}`;

    // 4) Sin locale actual -> nativo
    return href;
  }, [hasLocaleInHref, href, native, isNativeByList, currentLocale]);
}

/** Link que preserva automáticamente el locale, con opción de forzar modo nativo */
export function LocaleLink(
  props: PropsWithChildren<
    LinkProps & { href: string; native?: boolean; nativePaths?: string[] } & ComponentProps<"a">
  >
) {
  const { children, native, nativePaths, ...rest } = props;
  const finalHref = useLocaleHref(String(props.href), { native, nativePaths });
  return (
    <Link {...rest} href={finalHref}>
      {children}
    </Link>
  );
}