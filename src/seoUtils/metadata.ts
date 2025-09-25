import { Metadata } from "next"
import { Locale } from "./seo-builder"
import { Table, MediaAsset, StatsBlock, ProsCons, Cta, HowToStep, FAQ, InternalLink, ExternalLink, AuthorBox } from "./types"
// asumiendo que ya tienes exportado SeoMetadataSchema (Zod)
import { z } from "zod";
import { SeoMetadataSchema } from "./metadataValidation";

// Tipo TS inferido desde el esquema Zod (el “oficial”)
export type SeoMetadata = z.infer<typeof SeoMetadataSchema>;

export type customMetaData={
    landingPage:SeoMetadata
    blog:{
        self:SeoMetadata,
        howMuchIsATaxiInCuba:SeoMetadata
    },
    fastBooking:SeoMetadata,
    customBooking:SeoMetadata,
    destinationsInCuba:SeoMetadata,
    interestingPlaces:{
        self:SeoMetadata
        granHotelManzanaKempinski:SeoMetadata
        hotelMystiqueRegisHavana:SeoMetadata
        iberostarParqueCentral:SeoMetadata
        meliaInternacionalVaradero:SeoMetadata
        meliaLasAmericas:SeoMetadata
        ocioClub:SeoMetadata
    },
    taxiInCuba:SeoMetadata
}

// Estructura principal del contenido
export interface OnPageContent {
  lang: Locale;

  // Intención de búsqueda y promesa de valor
  searchIntent: "informational" | "commercial" | "transactional" | "navigational";
  uniqueValuePromise: string; // 1–2 líneas claras

  // Estructura semántica
  h1: string;                     // único
  intro: string;                  // 80–160 palabras, incluye keyword principal
  sections: Array<{
    id: string;                   // para anchors
    h2: string;
    intro?: string;               // 30–80 palabras
    h3s?: Array<{ h3: string; body: string }>;
    paragraphs?: string[];        // 120–200 palabras c/u
    list?: { style: "ul" | "ol"; items: string[] };
    table?: Table;
    media?: MediaAsset[];
    stats?: StatsBlock;
    prosCons?: ProsCons;
    ctaInline?: Cta;
  }>;

  // Bloques de negocio
  pricing?: {
    currency: "USD" | "EUR" | "CUP";
    note?: string;
    table: Table;                 // p.ej., “Trayecto / Precio / Duración”
  };

  comparison?: {
    summary: string;
    table: Table;                 // p.ej., Taxi vs Bus vs Renta
  };

  howTo?: {
    title: string;                // “Cómo reservar un taxi en 3 pasos”
    steps: HowToStep[];
  };

  faqs?: FAQ[];                   // 5–10 preguntas típicas (FAQPage)

  // Enlaces y navegación
  breadcrumbs?: InternalLink[];   // home → categoría → página
  internalLinks?: InternalLink[]; // cluster y páginas de money intent
  externalLinks?: ExternalLink[]; // fuentes

  // Confianza (E-E-A-T)
  author?: AuthorBox;
  lastUpdatedISO: string;         // “2025-09-25”
  sourcesNote?: string;           // transparencia de datos

  // Conversión
  ctas: Cta[];                    // colocación top/middle/bottom

  // Apoyo a i18n (opcional)
  translations?: Partial<Record<Locale, { h1?: string; intro?: string }>>;

  // Reglas/objetivos editoriales
  editorial?: {
    targetWordCount: number;      // p.ej., 1200–1800
    primaryKeyword: string;
    secondaryKeywords?: string[];
    tone: "informative" | "friendly" | "direct" | "sales";
    readingLevel?: "basic" | "intermediate" | "advanced";
  };
}
