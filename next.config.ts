import type { NextConfig } from "next";
import withBundleAnalyzer from '@next/bundle-analyzer';

const nextConfig: NextConfig = {

  /* config options here */
};
export default withBundleAnalyzer({ enabled: process.env.ANALYZE === 'true' })({...nextConfig,
  images: {
    deviceSizes: [320, 480, 640, 768, 1024, 1280, 1536, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // remotePatterns: [{ protocol: "https", hostname: "tudominio-o-cdn.com" }],
  },
  async headers() {
    return [
      {
        source: "/:all*(svg|jpg|jpeg|png|webp|avif|gif|ico|css|js)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
       {
        source: "/:all",
        headers: [
          { key: "X-Robots-Tag", value: "noindex, nofollow" },
        ],
      },
    ];
  },
  // experimental: { optimizePackageImports: ['react-icons','react'] },
  // images: { deviceSizes:[320,480,640,768,1024,1280,1536,1920], imageSizes:[16,32,48,64,96,128,256,384] },
  // reactStrictMode: true,
});


