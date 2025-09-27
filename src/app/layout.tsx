import "./globals.css";
import type { ReactNode } from "react";
import { headers } from "next/headers";
import Script from "next/script";
import { Inter } from "next/font/google";
import Header from "@/modules/layout/Header";
import Footer from "@/modules/layout/Footer";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import FloatingContacts from "@/modules/layout/FloatingContacts";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-inter",
  display: "swap",
});

type Lang = "en" | "es" | "fr" | "de" | "ru" | "pt";

export default async function RootLayout({ children }: { children: ReactNode }) {
  const h = await headers();
  const lang = (h.get("x-lang") as Lang) || "en";

  return (
    <html lang={lang} className={inter.variable}>
      <head>
        <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.google-analytics.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />

        <Script src="https://www.googletagmanager.com/gtag/js?id=G-HB26WDN91W" strategy="afterInteractive" />
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
        <Script id="ms-clarity" strategy="afterInteractive">
          {`(function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.defer=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "tgx0dtlprl");`}
        </Script>
      </head>

      <body className="font-sans antialiased">
        <Header lang={lang} />
        {children}
        {/* cliente diferido, sin SSR */}
        <FloatingContacts lang={lang} />
        <Footer lang={lang} />
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
