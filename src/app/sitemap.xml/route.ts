import fs from "fs";
import path from "path";
import { NextRequest } from "next/server";

const BASE_URL = "https://cubantaxis.com";
const LANGS = ["", "es", "pt", "fr", "ru", "de"];
const APP_DIR = path.join(process.cwd(), "src/app/[lang]");

// Obtiene rutas base sin idioma
function getAllRoutes(dir: string, baseRoute = ""): string[] {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  let routes: string[] = [];

  for (const entry of entries) {
    if (entry.name.startsWith("_") || entry.name === "api" || entry.name === "locales") continue;

    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      routes.push(...getAllRoutes(fullPath, `${baseRoute}/${entry.name}`));
    } else if (entry.isFile()) {
      if (entry.name === "page.tsx" || entry.name === "page.ts") {
        routes.push(baseRoute || "/");
      }
    }
  }

  routes.sort(
    (a, b) =>
      a.split("/").filter(Boolean).length -
      b.split("/").filter(Boolean).length
  );

  return routes;
}


function generateSitemapWithHreflangs(routes: string[]) {
  const lastmod = new Date().toISOString().split("T")[0];

  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset 
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xhtml="http://www.w3.org/1999/xhtml">`;

  for (const route of routes) {
    const depth = route.split("/").filter(Boolean).length;
    let priority = 0.7;
    if (depth === 0) priority = 1.0;
    else if (depth === 1) priority = 0.9;
    else if (depth === 2) priority = 0.8;

    for (const lang of LANGS) {
      const langPrefix = lang ? `/${lang}` : "";
      const loc = `${BASE_URL}${langPrefix}${route === "/" ? "" : route}`;

      // Generar hreflangs para esta variante
      const hreflangs = LANGS.map((hlang) => {
        const href = `${BASE_URL}${hlang ? "/" + hlang : ""}${route === "/" ? "" : route}`;
        return `<xhtml:link rel="alternate" hreflang="${hlang || "en"}" href="${href}" />`;
      }).join("\n      ");

      // x-default siempre en inglés
      const xDefault = `<xhtml:link rel="alternate" hreflang="x-default" href="${BASE_URL}${route === "/" ? "" : route}" />`;

      xml += `
  <url>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
      ${hreflangs}
      ${xDefault}
    <changefreq>weekly</changefreq>
    <priority>${priority}</priority>
  </url>
`;
    }
  }

  xml += `</urlset>`;
  return xml;
}


export async function GET(req: NextRequest) {
  const routes = getAllRoutes(APP_DIR);
  const sitemap = generateSitemapWithHreflangs(routes);

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
