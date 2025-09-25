// app/layout.tsx
import "./[lang]/globals.css"
import type { ReactNode } from "react";
import { headers } from "next/headers";
import Header from "@/modules/layout/Header";
import Footer from "@/modules/layout/Footer";
import FloatingContacts from "@/modules/layout/FloatingContacts";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

type Lang = "en" | "es" | "fr" | "de" | "ru" | "pt";

export default async function RootLayout({ children }: { children: ReactNode }) {
  const h = await headers();
  const lang = (h.get("x-lang") as Lang) || "en";

  return (
    <html lang={lang}>
      <head>
        <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.google-analytics.com" crossOrigin="anonymous" />
        <Script src="https://analytics.ahrefs.com/analytics.js" data-key="2SbRzTgOCNAsv5VGplgR3w" async />
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-HB26WDN91W" strategy="lazyOnload" />
        <Script id="ga4-init" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            window.addEventListener('load', () => {
              (window.requestIdleCallback || setTimeout)(() => {
                gtag('js', new Date());
                gtag('config', 'G-HB26WDN91W', { send_page_view: true });
              }, 800);
            });
          `}
        </Script>
      </head>
      <body className="antialiased">
        <Header lang={lang} />
        {children}
        <FloatingContacts lang={lang} />
        <Footer lang={lang} />
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
