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
  // experimental: { optimizePackageImports: ['react-icons','react'] },
  // images: { deviceSizes:[320,480,640,768,1024,1280,1536,1920], imageSizes:[16,32,48,64,96,128,256,384] },
  // reactStrictMode: true,
});


