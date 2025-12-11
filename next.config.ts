import type { NextConfig } from "next";
import withBundleAnalyzer from "@next/bundle-analyzer";

const nextConfig: NextConfig = {
  /* config options here */
};
export default withBundleAnalyzer({ enabled: process.env.ANALYZE === "true" })({
  ...nextConfig,
  images: {
    deviceSizes: [320, 480, 640, 768, 1024, 1280, 1536, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // remotePatterns: [{ protocol: "https", hostname: "tudominio-o-cdn.com" }],
  },
  modularizeImports: {
    "react-icons/?(((\\w*)?/?)*)": {
      transform: "react-icons/{{ matches.[1] }}/{{ member }}",
      skipDefaultConversion: true,
    },
    lodash: { transform: "lodash/{{ member }}" },
    "date-fns": { transform: "date-fns/{{ member }}" },
  },
  experimental: {
    optimizeCss: true,
  },
  async redirects() {
    return [
      // ──────────────────────────────────────────────────────────────
      // TYPO: "intresting" -> "interesting" (con y sin prefijo idioma)
      // ──────────────────────────────────────────────────────────────
      {
        source: "/intresting-places-in-cuba/:slug*",
        destination: "/interesting-places-in-cuba/:slug*",
        permanent: true,
      },
      {
        source: "/:lang(en|es|fr|de|ru|pt)/intresting-places-in-cuba/:slug*",
        destination: "/:lang/interesting-places-in-cuba/:slug*",
        permanent: true,
      },

      // ──────────────────────────────────────────────────────────────
      // LEGACY singular -> sección actual
      // ──────────────────────────────────────────────────────────────
      {
        source: "/interesting-place/:slug*",
        destination: "/interesting-places-in-cuba/:slug*",
        permanent: true,
      },
      {
        source: "/:lang(en|es|fr|de|ru|pt)/interesting-place/:slug*",
        destination: "/:lang/interesting-places-in-cuba/:slug*",
        permanent: true,
      },

      // ──────────────────────────────────────────────────────────────
      // Alias español legacy -> sección ES actual
      // ──────────────────────────────────────────────────────────────
      {
        source: "/lugares-interes/:slug*",
        destination: "/es/interesting-places-in-cuba/:slug*",
        permanent: true,
      },

      // ──────────────────────────────────────────────────────────────
      // Booking legacy -> ruta actual
      // ──────────────────────────────────────────────────────────────
      {
        source: "/transfer-booking",
        destination: "/taxi",
        permanent: true,
      },
      {
        source: "/:lang(en|es|fr|de|ru|pt)/transfer-booking",
        destination: "/:lang/taxi",
        permanent: true,
      },
      {
        source: "/:lang(en|es|fr|de|ru|pt)/private-transfer-booking",
        destination: "/:lang/taxi",
        permanent: true,
      },

      // ──────────────────────────────────────────────────────────────
      // Short alias -> guía
      // ──────────────────────────────────────────────────────────────
      {
        source: "/:lang(en|es|fr|de|ru|pt)/taxi",
        destination: "/:lang/taxi-in-cuba",
        permanent: true,
      },

      // ──────────────────────────────────────────────────────────────
      // Blog post legacy -> índice del blog (mejor que 410 para equity)
      // ──────────────────────────────────────────────────────────────
      {
        source: "/blog/book-travel-reservation",
        destination: "/blog",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/:all*(svg|jpg|jpeg|png|webp|avif|gif|ico|css|js|woff2)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/:all",
        headers: [{ key: "X-Robots-Tag", value: "index, follow" }],
      },
      {
        source: "/_next/static/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },

      {
        source: "/fonts/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
  // experimental: { optimizePackageImports: ['react-icons','react'] },
  // images: { deviceSizes:[320,480,640,768,1024,1280,1536,1920], imageSizes:[16,32,48,64,96,128,256,384] },
  // reactStrictMode: true,
});
