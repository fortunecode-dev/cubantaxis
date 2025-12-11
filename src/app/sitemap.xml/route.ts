import fs from "fs";
import path from "path";
import { gzipSync } from "zlib";
import { NextRequest } from "next/server";
import { prices } from "@/utils/constants";

const BASE_URL = "https://cubantaxis.com";

// idiomas (en = raíz)
const LANGS = [
  { code: "en", prefix: "" },
  { code: "es", prefix: "/es" },
  { code: "pt", prefix: "/pt" },
  { code: "fr", prefix: "/fr" },
  { code: "ru", prefix: "/ru" },
  { code: "de", prefix: "/de" },
];

// carpeta donde están tus rutas estáticas reales
const APP_DIR = path.join(process.cwd(), "src/app/[lang]");

/* ----------------------------------------------------
   1) RUTAS ESTÁTICAS
---------------------------------------------------- */
function getStaticRoutes(dir: string, baseRoute = ""): string[] {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  let routes: string[] = [];

  for (const entry of entries) {
    if (
      entry.name.startsWith("_") ||
      entry.name === "api" ||
      entry.name === "locales"
    ) {
      continue;
    }

    const full = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      routes.push(...getStaticRoutes(full, `${baseRoute}/${entry.name}`));
    } else if (entry.isFile()) {
      if (entry.name === "page.ts" || entry.name === "page.tsx") {
        routes.push(baseRoute || "/");
      }
    }
  }

  return [...new Set(routes)];
}

/* ----------------------------------------------------
   2) RUTAS DINÁMICAS DE TAXI
---------------------------------------------------- */
function getTaxiRoutes() {
  const dynamic: string[] = [];

  prices.forEach((p: any) => {
    dynamic.push(`/taxi/${p.from}/${p.to}`);
  });

  return [...new Set(dynamic)];
}

/* ----------------------------------------------------
   3) PRIORIDAD DINÁMICA
---------------------------------------------------- */
function getPriority(route: string) {
  const depth = route.split("/").filter(Boolean).length;

  if (depth === 0) return 1.0; // "/"
  if (depth === 1) return 0.9; // "/taxi"
  if (depth === 2) return 0.8; // "/taxi/from"
  if (depth === 3) return 0.7; // "/taxi/from/to"
  return 0.5;
}

/* ----------------------------------------------------
   4) CHANGE FREQ DINÁMICO
---------------------------------------------------- */
function getChangeFreq(route: string) {
  if (route === "/") return "daily";
  if (route.startsWith("/taxi") && route.split("/").length === 3)
    return "weekly";
  if (route.startsWith("/taxi")) return "monthly";

  return "monthly";
}

/* ----------------------------------------------------
   5) BUILD XML
---------------------------------------------------- */
function buildSitemapXML(routes: string[]) {
  const lastmod = new Date().toISOString().split("T")[0];

  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  xml += `<urlset 
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xhtml="http://www.w3.org/1999/xhtml">\n`;

  for (const route of routes) {
    const priority = getPriority(route);
    const freq = getChangeFreq(route);

    for (const lang of LANGS) {
      const loc = `${BASE_URL}${lang.prefix}${route === "/" ? "" : route}`;

      xml += `  <url>\n`;
      xml += `    <loc>${loc}</loc>\n`;
      xml += `    <lastmod>${lastmod}</lastmod>\n`;
      xml += `    <changefreq>${freq}</changefreq>\n`;
      xml += `    <priority>${priority}</priority>\n`;

      // hreflang alternates
      for (const alt of LANGS) {
        const href = `${BASE_URL}${alt.prefix}${route === "/" ? "" : route}`;
        xml += `    <xhtml:link rel="alternate" hreflang="${alt.code}" href="${href}" />\n`;
      }

      // x-default → inglés sin prefijo
      xml += `    <xhtml:link rel="alternate" hreflang="x-default" href="${BASE_URL}${
        route === "/" ? "" : route
      }" />\n`;

      xml += `  </url>\n`;
    }
  }

  xml += `</urlset>`;
  return xml;
}

/* ----------------------------------------------------
   6) API ROUTE
---------------------------------------------------- */
export async function GET(req: NextRequest) {
  const staticRoutes = getStaticRoutes(APP_DIR);
  const taxiRoutes = getTaxiRoutes();

  // NO indexar rutas /taxi/[from] (solo origen)
  const cleanTaxiRoutes = taxiRoutes.filter((r) => r.split("/").length === 4);

  const finalRoutes = [...new Set([...staticRoutes, ...cleanTaxiRoutes])];

  const xml = buildSitemapXML(finalRoutes);
  const gzipped = gzipSync(xml);

  return new Response(gzipped, {
    headers: {
      "Content-Type": "application/xml",
      "Content-Encoding": "gzip",
      "Cache-Control": "max-age=3600",
    },
  });
}
