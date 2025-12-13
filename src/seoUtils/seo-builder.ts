import { prices } from "@/utils/constants";
import { SeoMetadata } from "./metadataValidation";

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
    (item) => item.from === from && item.to === to
  )?.classicModern;

  if (!price) return null;

  const fromName = translations[from] || from;
  const toName = translations[to] || to;

  const title =
    lang === "es"
      ? `Taxi Privado: ${fromName} → ${toName}`
      : `Private Taxi: ${fromName} → ${toName}`;

  const description =
    lang === "es"
      ? `Reserva un taxi privado desde ${fromName} hasta ${toName}. Precio fijo, conductores confiables y asistencia 24/7.`
      : `Book your private taxi from ${fromName} to ${toName}. Fixed price, reliable drivers and 24/7 assistance.`;

  const bookingUrl = `${baseUrl}/taxi/${from}/${to}`;
  const image = `${baseUrl}/cuba-cabs.jpg`;

  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: title,
    description,
    image,
    serviceType: "Taxi Booking",

    // Página canónica del servicio
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": bookingUrl,
    },

    // Proveedor (sin reviews → SAFE)
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
      address: {
        "@type": "PostalAddress",
        addressCountry: "CU",
        addressLocality: "Havana",
        addressRegion: "Havana",
      },
    },

    // Oferta clara (precio fijo)
    offers: {
      "@type": "Offer",
      url: bookingUrl,
      price: price.toString(),
      priceCurrency,
      availability: "https://schema.org/InStock",
      validFrom: new Date().toISOString(),
    },

    // Área de servicio
    areaServed: [
      { "@type": "City", name: fromName },
      { "@type": "City", name: toName },
      { "@type": "Country", name: "Cuba" },
    ],

    // CTA compatible con Google
    potentialAction: {
      "@type": "ReserveAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: bookingUrl,
        actionPlatform: [
          "https://schema.org/DesktopWebPlatform",
          "https://schema.org/MobileWebPlatform",
        ],
      },
      result: {
        "@type": "TaxiReservation",
        name:
          lang === "es"
            ? `Reserva Taxi: ${fromName} → ${toName}`
            : `Taxi Booking: ${fromName} → ${toName}`,
      },
    },
  };
}

export function buildTaxiProductJsonLd({
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
    (item) => item.from === from && item.to === to
  )?.classicModern;

  if (!price) return null;

  const fromName = translations[from] || from;
  const toName = translations[to] || to;

  const productName =
    lang === "es"
      ? `Taxi privado ${fromName} → ${toName}`
      : `Private Taxi ${fromName} to ${toName}`;

  const description =
    lang === "es"
      ? `Traslado en taxi privado desde ${fromName} hasta ${toName}. Precio fijo, conductores confiables y asistencia 24/7.`
      : `Private taxi transfer from ${fromName} to ${toName}. Fixed price, reliable drivers and 24/7 assistance.`;

  const productUrl = `${baseUrl}/taxi/${from}/${to}`;

  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: productName,
    description,
    image: `${baseUrl}/cuba-cabs.jpg`,
    brand: {
      "@type": "Brand",
      name: "CubanTaxis",
    },

    // Página canónica del producto
    url: productUrl,

    offers: {
      "@type": "Offer",
      url: productUrl,
      price: price.toString(),
      priceCurrency,
      availability: "https://schema.org/InStock",
      priceValidUntil: "2030-12-31", // evita warnings
    },
  };
}
export function textToHowToSteps(text: string) {
  return text
    .split(".")
    .map((s) => s.trim())
    .filter(Boolean)
    .map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      text: step,
    }));
}
interface BuildTaxiFaqParams {
  idioma: any;
}

interface FaqItem {
  question: string;
  answer: string;
}

export function buildTaxiFaqFromKey(idioma: any): FaqItem[] {
  console.log(idioma);
  const [
    qPrefix, // How much is a taxi from
    qMid, // to
    qSuffix, // ?
    aClassic, // A private classic car costs
    aMinivan, // a private minivan costs
    aSuffix, // , while prices are fixed per car, not per person.
  ] = idioma.priceFaq.split("|");

  return prices.map((item) => {
    const question = `${qPrefix} ${idioma[item.from]} ${qMid} ${
      idioma[item.to]
    }${qSuffix}`;
    const parts: string[] = [];
    if (item.classicModern) {
      parts.push(`${aClassic} $${item.classicModern} USD`);
    }

    if (item.to) {
      parts.push(`${aMinivan} $${item.minivan} USD`);
    }
    const answer = `${parts.join(", ")}${aSuffix}`;
    return {
      question: question.trim(),
      answer: answer.trim(),
    };
  });
}
