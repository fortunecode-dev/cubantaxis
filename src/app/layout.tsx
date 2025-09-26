// app/layout.tsx
import "./[lang]/globals.css"
// app/layout.tsx
import type { ReactNode } from "react";
import { headers } from "next/headers";
import Header from "@/modules/layout/Header";
import Footer from "@/modules/layout/Footer";
import FloatingContacts from "@/modules/layout/FloatingContacts";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

// 👇 fuerza ejecución en servidor (nada de HTML pre-generado ambiguo)
export const dynamic = "force-dynamic";
export const revalidate = 0;

type Lang = "en" | "es" | "fr" | "de" | "ru" | "pt";

export default async function RootLayout({ children }: { children: ReactNode }) {
  const h = await headers();
  const lang = (h.get("x-lang") as Lang) || "en";

  return (
    <html lang={lang}>
      <head>
        <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.google-analytics.com" crossOrigin="anonymous" />
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
        <Script type="text/javascript">
          {`(function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "tgx0dtlprl");`}
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
