import { Metadata } from "next"
import { Locale } from "./seo-builder"
import { Table, MediaAsset, StatsBlock, ProsCons, Cta, HowToStep, FAQ, InternalLink, ExternalLink, AuthorBox } from "./types"
// asumiendo que ya tienes exportado SeoMetadataSchema (Zod)
import { z } from "zod";
import { SeoMetadataSchema } from "./metadataValidation";

// Tipo TS inferido desde el esquema Zod (el “oficial”)
export type SeoMetadata = z.infer<typeof SeoMetadataSchema>;

export type customMetaData={
    landingPage:Partial<SeoMetadata>
    blog:{
        self:Partial<SeoMetadata>,
        howMuchIsATaxiInCuba:Partial<SeoMetadata>
        privateTaxiOrCarRental:Partial<SeoMetadata>
    },
    fastBooking:Partial<SeoMetadata>,
    customBooking:Partial<SeoMetadata>,
    destinationsInCuba:Partial<SeoMetadata>,
    interestingPlaces:{
        self:Partial<SeoMetadata>
        granHotelManzanaKempinski:Partial<SeoMetadata>
        hotelMystiqueRegisHavana:Partial<SeoMetadata>
        iberostarParqueCentral:Partial<SeoMetadata>
        meliaInternacionalVaradero:Partial<SeoMetadata>
        meliaLasAmericas:Partial<SeoMetadata>
        ocioClub:Partial<SeoMetadata>
    },
    taxiInCuba:Partial<SeoMetadata>
}

// Estructura principal del contenido

export interface BlogArticle {
  h3: string;
  p: string;
  date: string;       // formato YYYY-MM-DD
  readMins: number;   // minutos de lectura
  href: string;
  image: string;
  location: string;
}

export interface BlogCTA {
  customBooking: string;
  fastBooking: string;
  customBookingHref: string;
  fastBookingHref: string;
}

export interface BlogSection {
  h1: string;
  h2: string;
  cta: BlogCTA;
  anchor: string;
  readArticle: string;
  listActions: { label: string; href: string }[];
  list: BlogArticle[];
  longIntro:string
  aboutTitle:string
  aboutText:string
}