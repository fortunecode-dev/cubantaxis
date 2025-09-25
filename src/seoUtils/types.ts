// Bloques base reutilizables
type Locale = "en" | "es" | "fr" | "de" | "ru" | "pt";

export interface AuthorBox {
  name: string;
  role: string;          // p.ej. "Guía local", "Conductor", "Editor"
  bio: string;           // credenciales, experiencia (E-E-A-T)
  avatarUrl?: string;
  links?: { label: string; url: string }[];
}

export interface Cta {
  id: string;
  label: string;         // "Reserva tu taxi"
  href: string;          // URL interna/externa
  intent: "primary" | "secondary" | "whatsapp" | "phone";
  badge?: string;        // "24/7", "Precio fijo"
  placement: ("top" | "middle" | "bottom")[];
  trackingId?: string;   // para analytics
}

export interface MediaAsset {
  src: string;
  alt: string;
  caption?: string;
  width?: number;
  height?: number;
  lazy?: boolean;
}

export interface Table {
  caption?: string;
  headers: string[];
  rows: (string | number)[][];
  note?: string;
}

export interface InternalLink {
  text: string;
  href: string;           // ruta interna
  anchor?: string;        // #id
  reason: "topic_cluster" | "conversion" | "supporting" | "breadcrumbs";
}

export interface ExternalLink {
  text: string;
  href: string;
  rel?: "nofollow" | "sponsored" | "ugc";
  reason: "source" | "partner" | "further_reading";
}

export interface FAQ {
  q: string;
  a: string;
}

export interface HowToStep {
  title: string;
  description: string;
  media?: MediaAsset[];
}

export interface ProsCons {
  pros: string[];
  cons: string[];
}

export interface StatsBlock {
  items: { label: string; value: string | number; hint?: string }[];
}
