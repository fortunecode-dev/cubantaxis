import { prices } from "@/utils/constants";
import { SeoMetadata } from "./metadataValidation";

const LOCALES = ["es", "fr", "de", "ru", "pt"] as const;
export type Locale = (typeof LOCALES)[number];
const urlBase = "https://cubantaxis.com";

export function buildMetaTags(metadata: Partial<SeoMetadata>) {
  const { title, description, alternates, openGraph, twitter } = metadata;
  return {
    title,
    description,
    alternates,
    openGraph: {
      url: alternates?.canonical,
      title,
      type: "website",
      images: "https://cubantaxis.com/icon.ico",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      site: alternates?.canonical,
      images: "https://cubantaxis.com/icon.ico",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
      },
    },
  };
}

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

export function buildTaxiBookingJsonLd({
  from,
  to,
  lang,
  priceCurrency = "USD",
  translations,
}: {
  from: string;
  to: string;
  lang: string;
  priceCurrency?: string;
  translations: Record<string, string>;
}) {
  const baseUrl = "https://cubantaxis.com";
  const price = prices.find(
    (item) => item.from == from && item.to == to
  )?.classicModern;
  // 📌 Traducciones
  const fromName = translations[from] || from;
  const toName = translations[to] || to;

  const title =
    lang === "es"
      ? `Taxi Privado: ${fromName} → ${toName}`
      : `Private Taxi: ${fromName} → ${toName}`;

  const description =
    lang === "es"
      ? `Reserva un taxi privado desde ${fromName} hasta ${toName}. Conductores confiables, pago seguro y asistencia 24/7.`
      : `Book your private taxi from ${fromName} to ${toName}. Reliable drivers, fixed price and 24/7 assistance.`;

  const bookingUrl = `${baseUrl}/taxi?from=${from}&to=${to}`;

  // 📸 Imágenes recomendadas por Google (mínimo 1200 px)
  const image = `${baseUrl}/cuba-cabs.jpg`;
  if (!price) return null;
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: title,
    description,
    image,
    serviceType: "Taxi Booking",
    provider: {
      "@type": "LocalBusiness",
      name: "CubanTaxis",
      url: baseUrl,
      logo: `${baseUrl}/logo.png`,
      sameAs: [
        "https://facebook.com/cubantaxis",
        "https://instagram.com/cubantaxis",
        "https://t.me/cubantaxis",
      ],
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${baseUrl}/taxi?from=${from}&to=${to}`,
    },

    // ⭐ PRICE (Offer)
    offers: {
      "@type": "Offer",
      url: bookingUrl,
      price: price.toString(),
      priceCurrency,
      availability: "https://schema.org/InStock",
      validFrom: new Date().toISOString(),
      description:
        lang === "es"
          ? `Precio fijo por traslado privado ${fromName} → ${toName}.`
          : `Fixed price for private transfer ${fromName} → ${toName}.`,
    },

    // ⭐ AREA SERVED
    areaServed: [
      { "@type": "City", name: fromName },
      { "@type": "City", name: toName },
      { "@type": "Country", name: "Cuba" },
    ],

    // ⭐ SOCIAL PROOF — REVIEWS
    review: [
      {
        "@type": "Review",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
        },
        author: "John Peterson",
        reviewBody:
          lang === "es"
            ? "Excelente servicio de taxi desde el aeropuerto. Muy puntual."
            : "Excellent airport taxi service. Very punctual and reliable.",
      },
      {
        "@type": "Review",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
        },
        author: "Emily Carter",
        reviewBody:
          lang === "es"
            ? "Taxi muy cómodo y conductor amable. Repetiré."
            : "Very comfortable taxi and friendly driver. Will book again.",
      },
    ],

    // ⭐ RESERVE ACTION — CTA para Google
    potentialAction: {
      "@type": "ReserveAction",
      target: bookingUrl,
      result: {
        "@type": "TaxiReservation",
        name: `Taxi Booking: ${fromName} → ${toName}`,
      },
    },
  };
}
