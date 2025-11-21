import { SeoMetadata } from "./metadataValidation";

const LOCALES = ["es", "fr", "de", "ru", "pt"] as const;
export type Locale = typeof LOCALES[number];
const urlBase = "https://cubantaxis.com";

// Construye alternates para Estrategia A: EN = neutra
export function buildAlternates(slugNoLang: `/${string}` | "") {
  const languages: Record<string, string> = {
    "en": `${urlBase}${slugNoLang}`,        // inglés = neutra
    "x-default": `${urlBase}${slugNoLang}`, // x-default = neutra
  };
  for (const l of LOCALES) {
    languages[l] = `${urlBase}/${l}${slugNoLang}`;
  }
  return {
    canonicalNeutral: `${urlBase}${slugNoLang}`, // canónica para inglés
    canonicalFor: (lang: Locale) => `${urlBase}/${lang}${slugNoLang}`, // canónica otros idiomas
    languages, // bloque hreflang completo y recíproco
  };
}

export function buildMetaTags(metadata: Partial<SeoMetadata>) {
  const { title, description, alternates, openGraph, twitter } = metadata
  return {
    title,
    description,
    alternates,
    openGraph:
    {
      url: alternates?.canonical,
      title,
      type: "website",
      images: "https://cubantaxis.com/icon.ico"
    },
    twitter:
    {
      card: "summary_large_image",
      title,
      description,
      site: alternates?.canonical,
      images: "https://cubantaxis.com/icon.ico"
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
      },
    },
  }
}

// seoUtils/seo-builder.ts (o donde tengas la función)
import type { Metadata } from "next";

type Lang = "en" | "es" | "fr" | "de" | "ru" | "pt";

const BASE = "https://cubantaxis.com";
const ALL: Lang[] = ["en", "es", "fr", "de", "ru", "pt"];

/** Normaliza el path: "", "blog", "/blog" -> "/blog" ; root -> "" */
function normPath(path?: string) {
  const raw = (path || "").trim();
  if (!raw || raw === "/") return ""; // raíz
  return raw.startsWith("/") ? raw : `/${raw}`;
}

/**
 * Regla:
 * - en (default) -> sin prefijo siempre (canonical y hreflang.en)
 * - otros idiomas -> con prefijo en canonical y hreflang.<lang>
 * - x-default -> sin prefijo (neutral)
 */
export function buildAlternatesMetadata(
  path: string,
  currentLang: Lang
): { canonical: string; languages: Record<string, string> } {
  const p = normPath(path);

  const canonical =
    currentLang === "en" ? `${BASE}${p}` : `${BASE}/${currentLang}${p}`;

  const languages: Record<string, string> = {
    "x-default": `${BASE}${p}`,
    en: `${BASE}${p}`,
  };

  for (const L of ALL) {
    if (L === "en") continue;
    languages[L] = `${BASE}/${L}${p}`;
  }

  return { canonical, languages };
}
