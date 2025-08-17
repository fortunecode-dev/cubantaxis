// src/app/sitemap.ts
import type { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap {
  const langs = ["en","es",
    // "fr",
    // "de",
    // "ru",
    // "pt"
];
  return langs.map((l)=>({ url: `https://cubantaxis.com/${l}`, changeFrequency:"weekly", priority: 0.9 }));
}