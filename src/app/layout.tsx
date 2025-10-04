// app/layout.tsx
import "./[lang]/globals.css";
import type { ReactNode } from "react";
import { headers } from "next/headers";
import Script from "next/script";
import { Inter } from "next/font/google";
import Header from "@/modules/layout/Header";
import Footer from "@/modules/layout/Footer";
import FloatingContacts from "@/modules/layout/FloatingContacts";
// Cárgalos solo si estás en Vercel y en prod (debajo verás el condicional)
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-inter",
  display: "swap",
});

type Lang = "en" | "es" | "fr" | "de" | "ru" | "pt";

export default async function RootLayout({ children }: { children: ReactNode }) {
  const h = await headers(); // no es async
  const lang = (h.get("x-lang") as Lang) || "en";
  const isProd = process.env.NODE_ENV === "production";

  return (
    <html lang={lang} className={inter.variable}>
      <head>
        {/* Solo en producción: pistas de red y analytics */}
        {isProd && (
          <>
            {/* Mantén dns-prefetch (barato). Usa preconnect solo si notas ganancia real. */}
            <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
            <link rel="dns-prefetch" href="https://www.google-analytics.com" />

            {/* Preconnect opcional; útil si GA es crítico. Si tu LCP no depende, puedes quitarlo. */}
            <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="anonymous" />
            <link rel="preconnect" href="https://www.google-analytics.com" crossOrigin="anonymous" />

            {/* GA4: carga afterInteractive y configura en idle para no competir con LCP */}
            <Script
              src="https://www.googletagmanager.com/gtag/js?id=G-HB26WDN91W"
              strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                (window.requestIdleCallback || function(cb){setTimeout(cb,800)})(function(){
                  gtag('js', new Date());
                  gtag('config', 'G-HB26WDN91W', { send_page_view: true });
                });
              `}
            </Script>

            {/* Microsoft Clarity en idle */}
            <Script id="ms-clarity" strategy="afterInteractive">
              {`
                (window.requestIdleCallback || function(cb){setTimeout(cb,1200)})(function(){
                  (function(c,l,a,r,i,t,y){
                    c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                    t=l.createElement(r);t.defer=1;t.src="https://www.clarity.ms/tag/"+i;
                    y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
                  })(window, document, "clarity", "script", "tgx0dtlprl");
                });
              `}
            </Script>
          </>
        )}
      </head>

      <body className="font-sans antialiased min-h-screen scroll-smooth">
        {/* Accesibilidad: salto directo al contenido */}
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:rounded focus:bg-white focus:px-3 focus:py-2 focus:ring-2 focus:ring-accent"
        >
          Skip to content
        </a>
        {/* Ancla para “Back to top” del footer */}
        <div id="top" />
        <Header lang={lang} />
        <main id="main">{children}</main>
        {/* Cliente diferido, fuera del flujo crítico */}
        <FloatingContacts lang={lang} />
        <Footer lang={lang} />
        {/* Solo en producción: evita JS extra en dev */}
        {isProd && (
          <>
            <SpeedInsights />
            <Analytics />
          </>
        )}
      </body>
    </html>
  );
}
