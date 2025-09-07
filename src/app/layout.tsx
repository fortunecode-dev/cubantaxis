
import "./[lang]/globals.css";
import Header from "@/modules/layout/Header";
import Footer from "@/modules/layout/Footer";
import FloatingContacts from "@/modules/layout/FloatingContacts";
import Script from "next/script";
import { LocaleParams } from "@/types/common";
import { Toaster } from "react-hot-toast";
export async function generateStaticParams() {
  const languages = ["en", "es", "fr", "de", "ru", "pt"];
  return languages.map((lang) => ({ lang }));
}

export default async function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: LocaleParams
}>) {
  const { lang } = await params;
  return (
    <html lang={lang ?? "en"}>
      <head>
        {["en"
          , "es"
          , "fr"
          , "de"
          , "ru"
          , "pt"].map((code) => (
            <link
              key={code}
              rel="alternate"
              hrefLang={code}
              href={`https://cubantaxis.com/${code}`}
            />
          ))}
        <link rel="alternate" hrefLang="x-default" href="https://cubantaxis.com/" />
        {/* Google Analytics Script */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=G-HB26WDN91W`}
          strategy="lazyOnload"
        />
        <Script id="google-analytics" strategy="lazyOnload">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-HB26WDN91W', {
            page_path: window.location.pathname,
          });
        `}
        </Script>
        <link rel="canonical" href={`https://cubantaxis.com`} />
        <Script id="ld-taxi" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TaxiService",
            "name": "CubanTaxis",
            "url": "https://www.cubantaxis.com",
            "areaServed": "Cuba",
            "telephone": "+53 5444 7931",
            "sameAs": [
              "https://www.facebook.com/CubanTaxis/",
              "https://www.instagram.com/cubantaxis/"
            ]
          })}
        </Script>

      </head>
      <body className="antialiased">
        <Toaster
          position="top-center"
          reverseOrder={false}
          toastOptions={{
            // base para todos
            className:
              "rounded-xl shadow-lg text-xl  ring-1 ring-amber-300/70 bg-white/95 text-neutral-800 px-4 py-3 backdrop-blur-sm",
            duration: 2600,
            // variantes
            success: {
              iconTheme: { primary: "#16a34a", secondary: "#fff" }, // verde
              className:
                "rounded-xl shadow-lg ring-1 ring-green-300/70 bg-white/95 text-neutral-800",
            },
            error: {
              iconTheme: { primary: "#dc2626", secondary: "#fff" }, // rojo
              className:
                "rounded-xl shadow-lg ring-1 ring-red-300/70 bg-white/95 text-neutral-800",
            },
          }}
        />
        <Header lang={lang} />
        {children}
        <FloatingContacts lang={lang} />
        <Footer lang={lang} />
        {/* <LanguageSuggestor/> */}
      </body>
    </html>
  );
}
