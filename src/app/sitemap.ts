import type { MetadataRoute } from "next";

const base = "https://www.cubantaxis.com";
const locales = ["es", "en",
  //  "fr", "de", "ru", "pt"
  ] as const;

// Si lo sacas de Supabase/archivos, cárgalo aquí:
const destinationSlugs = ["havana", "varadero", "vinales", "trinidad"];
const excursionSlugs = ["havana-city-tour", "vinales-day-trip"];

function withAlternates(path: string) {
  // Devuelve las variantes de idioma para <alternates.languages>
  const languages = Object.fromEntries(
    locales.map((l) => [l, `/${l}${path}`])
  ) as Record<string, string>;
  return { languages, canonical: path === "/" ? "/" : path };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const today = new Date().toISOString().slice(0, 10);

  const basics: MetadataRoute.Sitemap = [
    {
      url: `${base}/`,
      lastModified: today,
      changeFrequency: "daily",
      priority: 1,
      alternates: { languages: Object.fromEntries(locales.map(l => [l, `${base}/${l}`])) },
    },
    {
      url: `${base}/transfer-booking`,
      lastModified: today,
      changeFrequency: "weekly",
      priority: 0.9,
      alternates: {
        languages: Object.fromEntries(locales.map(l => [l, `${base}/${l}/transfer-booking`])),
      },
    }, {
      url: `${base}/taxi`,
      lastModified: today,
      changeFrequency: "weekly",
      priority: 0.9,
      alternates: {
        languages: Object.fromEntries(locales.map(l => [l, `${base}/${l}/taxi`])),
      },
    },
  ];

  // const destinations = destinationSlugs.flatMap((slug) => {
  //   const path = `/destinations/${slug}`;
  //   return [{
  //     url: `${base}${path}`,
  //     lastModified: today,
  //     changeFrequency: "weekly",
  //     priority: 0.8,
  //     alternates: {
  //       languages: Object.fromEntries(locales.map(l => [l, `${base}/${l}${path}`])),
  //     },
  //   }];
  // });

  // const excursions = excursionSlugs.flatMap((slug) => {
  //   const path = `/excursions/${slug}`;
  //   return [{
  //     url: `${base}${path}`,
  //     lastModified: today,
  //     changeFrequency: "weekly",
  //     priority: 0.8,
  //     alternates: {
  //       languages: Object.fromEntries(locales.map(l => [l, `${base}/${l}${path}`])),
  //     },
  //   }];
  // });

  return [...basics];
}
