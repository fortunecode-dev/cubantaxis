// src/seo/metadata.schema.ts
import { z } from "zod";

/* ---------- Utilidades SEO ---------- */
const ABS_URL = z.string().url().regex(/^https?:\/\//, "URL debe ser absoluta (http/https)");
const REL_OR_ABS_URL = z.string().refine(
  (u) => u.startsWith("/") || /^https?:\/\//.test(u),
  "Debe ser ruta relativa o URL absoluta"
);

const normalize = (s: string) =>
  s.replace(/<[^>]+>/g, "") // sin HTML
   .replace(/\s+/g, " ")
   .trim();

const charCount = (s: string) => normalize(s).length;

const noHTML = (s: string) => !/<[^>]+>/.test(s);
const noEmoji = (s: string) => !/[\p{Emoji}\uFE0F]/u.test(s);
const noAllCaps = (s: string) => {
  const letters = s.replace(/[^A-Za-zÁÉÍÓÚÑáéíóúñ]/g, "");
  if (!letters) return true;
  const upper = letters.replace(/[a-záéíóúñ]/g, "");
  return upper.length / letters.length <= 0.8;
};
const noURLInDescription = (s: string) => !/https?:\/\//i.test(s);
const limitedPipes = (s: string) => (s.match(/\|/g) || []).length <= 1;
const noTrailingPunct = (s: string) => !/[.:;,\-–—]$/.test(s);

/* ---------- Subschemas ---------- */
const RobotsSchema = z
  .union([
    z.string().toLowerCase().refine(
      (v) => /(index|noindex)/.test(v) && /(follow|nofollow)/.test(v),
      "Debe contener 'index|noindex' y 'follow|nofollow'"
    ),
    z.object({
      index: z.boolean().default(true),
      follow: z.boolean().default(true),
      nocache: z.boolean().optional(),
      noimageindex: z.boolean().optional(),
      nosnippet: z.boolean().optional(),
      "max-snippet": z.number().int().min(0).optional(),
      "max-image-preview": z.enum(["none", "standard", "large"]).optional(),
      "max-video-preview": z.number().int().min(0).optional(),
    }),
  ])
  .refine(
    (v) =>
      typeof v === "string"
        ? /index/.test(v) && /follow/.test(v)
        : v.index !== false && v.follow !== false,
    "Para SEO público, usa index: true y follow: true"
  );

const HreflangCode = z
  .string()
  .regex(/^[a-z]{2}(-[A-Z]{2})?$|^x-default$/, "Código hreflang inválido (ej: es, en-US, x-default)");

const AlternatesSchema = z.object({
  canonical: ABS_URL,
  languages: z
    .record(HreflangCode, ABS_URL)
    .refine(
      (obj) => Object.keys(obj).length >= 1,
      "Define al menos un hreflang"
    )
    .refine(
      (obj) => Object.keys(obj).includes("x-default"),
      "Incluye 'x-default' en alternates.languages"
    ),
});

const OpenGraphImage = z.object({
  url: REL_OR_ABS_URL,
  width: z.number().int().positive().optional(),
  height: z.number().int().positive().optional(),
  alt: z.string().max(120).optional(),
});

const OpenGraphSchema = z.object({
  type: z.enum(["website", "article", "product"]).default("website"),
  url: ABS_URL,
  title: z.string(),
  description: z.string(),
  siteName: z.string().optional(),
  images: z.array(OpenGraphImage).min(1, "Incluye al menos una imagen OG"),
});

const TwitterSchema = z.object({
  card: z.enum(["summary", "summary_large_image"]).default("summary_large_image"),
  site: z.string().optional(),
  creator: z.string().optional(),
  title: z.string(),
  description: z.string(),
  images: z.array(REL_OR_ABS_URL).min(1, "Incluye al menos una imagen para Twitter"),
});

const AuthorSchema = z.object({
  name: z.string().min(2).max(100),
  url: ABS_URL.optional(),
});

/* ---------- Reglas de contenido (SEO) ---------- */
const TitleSEO = z
  .string()
  .refine(noHTML, "El título no debe contener HTML")
  .refine(noEmoji, "Evita emojis en el título")
  .refine(noAllCaps, "Evita MAYÚSCULAS excesivas")
  .refine(limitedPipes, "Evita más de un '|' en el título")
  .refine(noTrailingPunct, "Evita terminar con puntuación (.,;:-)")
  .refine((s) => {
    const n = charCount(s);
    return n >= 40 && n <= 60;
  }, "El título debe tener entre 40 y 60 caracteres (limpios)");

const DescriptionSEO = z
  .string()
  .refine(noHTML, "La descripción no debe contener HTML")
  .refine(noEmoji, "Evita emojis en la descripción")
  .refine(noURLInDescription, "Evita incluir URLs en la descripción")
  .refine((s) => {
    const n = charCount(s);
    return n >= 80 && n <= 160;
  }, "La descripción debe tener entre 80 y 160 caracteres (limpios)");

/* ---------- Esquema principal ---------- */
export const SeoMetadataSchema = z
  .object({
    // Impacto 1
    title: TitleSEO,
    description: DescriptionSEO,
    robots: RobotsSchema,
    alternates: AlternatesSchema,

    // Impacto 2
    //metadataBase: z.instanceof(URL),//poner en la funcion de generar
    openGraph: OpenGraphSchema,
    twitter: TwitterSchema,
    verification: z
      .object({
        google: z.string().optional(),
        yandex: z.string().optional(),
        me: z.string().optional(),
        other: z.record(z.string(),z.string()).optional(),
      })
      .optional(),
    authors: z.array(AuthorSchema).max(5).optional(),
    publisher: z.string().min(2).max(100).optional(),
  })
  // Coherencia entre title/description y OG/Twitter
  .superRefine((val, ctx) => {
    const t = normalize(val.title);
    const d = normalize(val.description);
    const ogT = normalize(val.openGraph.title);
    const ogD = normalize(val.openGraph.description);
    const twT = normalize(val.twitter.title);
    const twD = normalize(val.twitter.description);

    // 1) Evita que description repita demasiado el title
    const overlap = (() => {
      const a = new Set(t.toLowerCase().split(/\s+/));
      const b = new Set(d.toLowerCase().split(/\s+/));
      let inter = 0;
      a.forEach((w) => b.has(w) && (inter += 1));
      return a.size ? inter / a.size : 0;
    })();
    if (overlap > 0.8) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["description"],
        message: "La description repite demasiado el título (>80%). Redáctala distinta para mejorar CTR.",
      });
    }

    // 2) OG/Twitter: longitudes recomendadas
    const ogTLen = charCount(ogT);
    if (ogTLen > 60) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["openGraph", "title"],
        message: `OG title ideal ≤ 60 chars (actual: ${ogTLen})`,
      });
    }
    const ogDLen = charCount(ogD);
    if (ogDLen > 110) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["openGraph", "description"],
        message: `OG description ideal ≤ 110 chars (actual: ${ogDLen})`,
      });
    }
    const twTLen = charCount(twT);
    if (twTLen > 70) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["twitter", "title"],
        message: `Twitter title ideal ≤ 70 chars (actual: ${twTLen})`,
      });
    }
    const twDLen = charCount(twD);
    if (twDLen > 200) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["twitter", "description"],
        message: `Twitter description ideal ≤ 200 chars (actual: ${twDLen})`,
      });
    }

    // 3) OG image: tamaño recomendado
    const img = val.openGraph.images?.[0];
    if (img) {
      const w = img.width ?? 0;
      const h = img.height ?? 0;
      if (w && h) {
        const ratio = Math.abs(w / h - 1200 / 630);
        if (ratio > 0.1) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            path: ["openGraph", "images", 0],
            message: "OG image debería aproximarse a 1200x630 (ratio ~1.91:1).",
          });
        }
        if (w < 600 || h < 315) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            path: ["openGraph", "images", 0],
            message: "OG image pequeña. Recomendado ≥ 1200x630 (mínimo 600x315).",
          });
        }
      }
    }

    // 4) Hreflang: canonical debe coincidir con al menos un idioma o con x-default
    const langURLs = Object.values(val.alternates.languages);
    if (!langURLs.includes(val.alternates.canonical)) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["alternates", "canonical"],
        message: "La canonical no coincide con ninguna URL en languages (incluye la propia o ajusta el mapeo).",
      });
    }
  });

export type SeoMetadata = z.infer<typeof SeoMetadataSchema>;