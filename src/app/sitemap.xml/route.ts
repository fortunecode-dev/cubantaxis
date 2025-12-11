import fs from "fs";
import path from "path";
import { gzipSync } from "zlib";
import { NextRequest } from "next/server";
import { prices } from "@/utils/constants";

const BASE_URL = "https://cubantaxis.com";

// idiomas: en = raíz
const LANGS = [
  { code: "en", prefix: "" },
  { code: "es", prefix: "/es" },
  { code: "pt", prefix: "/pt" },
  { code: "fr", prefix: "/fr" },
  { code: "ru", prefix: "/ru" },
  { code: "de", prefix: "/de" },
];

// Carpeta base de rutas
const APP_DIR = path.join(process.cwd(), "src/app/[lang]");

// ===============================
// GET STATIC ROUTES
// ===============================
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
      if (entry.name === "page.tsx" || entry.name === "page.ts") {
        routes.push(baseRoute || "/");
      }
    }
  }

  return [...new Set(routes)].sort();
}

// ===============================
// GET TAXI DYNAMIC ROUTES
// ===============================
// example file: seoUtils/prices.json or your prices array
function getTaxiRoutes() {
  const dynamic = new Set<string>();

  prices.forEach((r: any) => {
    dynamic.add(`/taxi/${r.from}/${r.to}`);
  });

  return [...dynamic];
}

// ===============================
// PRIORITY BASED ON DEPTH
// ===============================
function getPriority(route: string) {
  const depth = route.split("/").filter(Boolean).length;

  if (depth === 0) return 1.0; // home
  if (depth === 1) return 0.9; // sections
  if (depth === 2) return 0.8; // category / taxi / blog
  if (depth === 3) return 0.7; // taxi/from
  if (depth === 4) return 0.6; // taxi/from/to
  return 0.5;
}

// ===============================
// CHANGEFREQ LOGIC
// ===============================
function getChangeFreq(route: string) {
  if (route === "/") return "daily";
  if (route.startsWith("/taxi") && route.split("/").length === 2)
    return "weekly";
  if (route.startsWith("/taxi")) return "monthly";

  return "monthly";
}

// ===============================
// BUILD SITEMAP XML
// ===============================
function buildSitemapXML(routes: string[]) {
  const lastmod = new Date().toISOString().split("T")[0];

  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset 
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xhtml="http://www.w3.org/1999/xhtml">`;

  for (const route of routes) {
    const priority = getPriority(route);
    const freq = getChangeFreq(route);

    for (const lang of LANGS) {
      const loc = `${BASE_URL}${lang.prefix}${route === "/" ? "" : route}`;

      xml += `
  <url>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${freq}</changefreq>
    <priority>${priority}</priority>
`;

      // hreflang for all languages
      for (const alt of LANGS) {
        const href = `${BASE_URL}${alt.prefix}${route === "/" ? "" : route}`;
        xml += `    <xhtml:link rel="alternate" hreflang="${alt.code}" href="${href}" />\n`;
      }

      // x-default
      xml += `    <xhtml:link rel="alternate" hreflang="x-default" href="${BASE_URL}${
        route === "/" ? "" : route
      }" />\n`;

      xml += "  </url>\n";
    }
  }

  xml += "</urlset>";
  return xml;
}

// ===============================
// API ROUTE
// ===============================
export async function GET(req: NextRequest) {
  const staticRoutes = getStaticRoutes(APP_DIR);
  const taxiRoutes = getTaxiRoutes();

  const routes = [...new Set([...staticRoutes, ...taxiRoutes])];

  const xml = buildSitemapXML(routes);

  // COMPRESS HERE
  const gzipped = gzipSync(xml);

  return new Response(gzipped, {
    headers: {
      "Content-Type": "application/xml",
      "Content-Encoding": "gzip",
    },
  });
}
