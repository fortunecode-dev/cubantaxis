import { SeoMetadata } from "./metadataValidation";

export const LOCALES = ["es", "fr", "de", "ru", "pt"] as const;
export type Locale = typeof LOCALES[number];
export const urlBase = "https://cubantaxis.com";

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

export function buildAlternatesMetadata(slugNoLang: `/${string}` | "", lang: string) {
  const languages: Record<string, string> = {
    "en": `${urlBase}${slugNoLang}`,        // inglés = neutra
    "x-default": `${urlBase}${slugNoLang}`, // x-default = neutra
  };
  for (const l of LOCALES) {
    languages[l] = `${urlBase}/${l}${slugNoLang}`;
  }
  return {
    canonical: `${urlBase}/${lang}${slugNoLang}`, // canónica otros idiomas
    languages, // bloque hreflang completo y recíproco
  };
}

