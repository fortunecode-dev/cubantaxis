// app/layout.tsx
import "./[lang]/globals.css";
import { headers } from "next/headers";
import Script from "next/script";
import { Inter } from "next/font/google";
import Header from "@/modules/layout/Header";
import Footer from "@/modules/layout/Footer";
import FloatingContacts from "@/modules/layout/FloatingContacts";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { getTranslation } from "./[lang]/locales";
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
  const idioma = getTranslation(lang);

  const heroSrc = "/hero/online-taxi-havana-classic.webp";

  return (
    <html lang={lang} className={inter.variable}>
      <head>
        {isProd && (
          <>
            <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
            <link rel="dns-prefetch" href="https://www.google-analytics.com" />
            <link
              rel="preconnect"
              href="https://www.googletagmanager.com"
              crossOrigin="anonymous"
            />
            <link
              rel="preconnect"
              href="https://www.google-analytics.com"
              crossOrigin="anonymous"
            />
            <Script id="deferred-3p" strategy="afterInteractive">
              {`
                (function(){
                  var loaded=false;
                  function load3p(){
                    if(loaded) return; loaded=true;
                    var s=document.createElement('script');
                    s.src='https://www.googletagmanager.com/gtag/js?id=G-HB26WDN91W';
                    s.async=true; document.head.appendChild(s);
                    window.dataLayer=window.dataLayer||[];
                    function gtag(){dataLayer.push(arguments);}
                    (window.requestIdleCallback||function(cb){setTimeout(cb,500)})(function(){
                      gtag('js', new Date());
                      gtag('config','G-HB26WDN91W',{send_page_view:true});
                    });
                    (window.requestIdleCallback||function(cb){setTimeout(cb,900)})(function(){
                      (function(c,l,a,r,i,t,y){
                        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                        t=l.createElement(r);t.defer=1;t.src="https://www.clarity.ms/tag/"+i;
                        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
                      })(window,document,"clarity","script","tgx0dtlprl");
                    });
                  }
                  var opts={once:true,passive:true,capture:true};
                  window.addEventListener('pointerdown',load3p,opts);
                  window.addEventListener('keydown',load3p,opts);
                  window.addEventListener('scroll',load3p,opts);
                  window.addEventListener('touchstart',load3p,opts);
                })();
              `}
            </Script>

          </>
        )}
      </head>
      <body className="font-sans antialiased min-h-screen scroll-smooth">
        <div id="top" />
        <main id="main">
          <Header lang={lang} />
           <NextBreadcrumb
            homeElement={'Home'}
            capitalizeLinks
          />

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
