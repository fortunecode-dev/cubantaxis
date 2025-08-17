import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const base = "https://www.cubantaxis.com";
  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/"],
        disallow: ["/api/", "/admin/", "/draft/", "/preview/"],
      },
    ],
    sitemap: `${base}/sitemap.xml`,
    host: base,
  };
}
