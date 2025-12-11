// app/layout.tsx
import "./globals.css";
import { headers } from "next/headers";
import Script from "next/script";
import { Inter } from "next/font/google";
import Header from "@/modules/layout/Header";
import Footer from "@/modules/layout/Footer";
import FloatingContacts from "@/modules/layout/FloatingContacts";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import NextBreadcrumb from "@/components/BreadCumbs";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-inter",
  display: "swap",
});

type Lang = "en" | "es" | "fr" | "de" | "ru" | "pt";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // ✅ headers() es SÍNCRONA en Server Components
  const h = await headers();
  const lang = (h.get("x-lang") as Lang) || "en";
  const isProd = process.env.NODE_ENV === "production";

  return (
    <html lang={lang} className={inter.variable}>
      <head>
        {isProd && (
          <>
            <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
            <link
              rel="preconnect"
              href="https://www.googletagmanager.com"
              crossOrigin="anonymous"
            />

            <Script id="ga-loader" strategy="lazyOnload">
              {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        function loadGA() {
          const s = document.createElement("script");
          s.src = "https://www.googletagmanager.com/gtag/js?id=G-HB26WDN91W";
          s.async = true;
          document.head.appendChild(s);

          gtag('js', new Date());
          gtag('config', 'G-HB26WDN91W');
        }

        window.addEventListener("scroll", loadGA, { once: true });
      `}
            </Script>
          </>
        )}
      </head>
      <body className="font-sans antialiased min-h-screen scroll-smooth">
        <div id="top" />
        <main id="main">
          <Header lang={lang} />
          <NextBreadcrumb homeElement={"Home"} capitalizeLinks />

          {children}
        </main>
        <FloatingContacts lang={lang} />
        {isProd && (
          <>
            <SpeedInsights />
            <Analytics />
          </>
        )}
        <Footer lang={lang} />
      </body>
    </html>
  );
}
