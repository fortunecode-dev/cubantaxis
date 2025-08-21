
import "./[lang]/globals.css";
import type { Metadata } from "next";
import Header from "@/modules/layout/Header";
import Footer from "@/modules/layout/Footer";
import FloatingContacts from "@/modules/layout/FloatingContacts";
import Script from "next/script";
import LanguageSuggestor from "@/components/LanguageSuggestor";
import { LocaleParams } from "@/types/common";
import { Toaster } from "react-hot-toast";
export async function generateStaticParams() {
  return [
    { lang: "en" },
     { lang: "es" },
      { lang: "fr" },
       { lang: "de" }, 
       { lang: "ru" }, 
       { lang: "pt" }]
}

export const metadata: Metadata = {
  title: "CubanTaxis: Book Your taxi, Tours And Transfers",
  description: "Book reliable Cuba taxi and transfer services from Havana International Airport (MUHA – José Martí), Varadero Airport (VRA), and major destinations. Fixed prices for Havana–Varadero, Viñales, Cienfuegos, Trinidad, and more. Discover Cuban taxis, Cuba cab options, and excursions from Havana.",
  keywords: ["taxis cuba", "cuban taxis","taxi cuba","cuba cab","urban taxi in cuba", "meila", "havana international airport", "jose marti international airport", "muha airport", "hav airport", "vra airport", "varadero airport", "cuba excursions from havana", "cuba map", "taxis en cuba"
  ],
  icons: { icon: "/icon.ico" },
  openGraph: {
    title: "CubanTaxis: Book Your taxi, Tours And Transfers",
    description: "Reliable Cuban taxi services from Havana & Varadero airports. Private transfers to Viñales, Trinidad, Cienfuegos & more. Fixed prices, modern & classic cars.",
    url: "https://cubantaxis.com",
    siteName: "Cuban Taxis",
    images: [
      {
        url: "icon.ico",
        width: 1200,
        height: 630,
        alt: "Taxi clásico en La Habana"
      }
    ],
    locale: "es_CU",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Taxi Cuba | Traslados, Excursiones y Traslados de Aeropuertos",
    description: "Reserva tu taxi en Cuba con chofer privado. La Habana, Varadero, Viñales y más.",
    images: ["icon.ico"]
  } ,metadataBase:new URL("https://cubantaxis.com/"), alternates: {
    canonical: "/",
    languages: {
      "es-ES": "/es",
      "en-US": "/en",
      "fr-FR": "/fr",
      "de-DE": "/de",
      "ru-RU": "/ru",
      "pt-PT": "/pt",
    },}
};

export default async function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params:LocaleParams
}>) {
  const { lang } = await params;
  return (
    <html lang={lang??"en"}>
      <head>
        {["en", "es", "fr", "de", "ru", "pt"].map((code) => (
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
            "rounded-xl shadow-lg ring-1 ring-amber-300/70 bg-white/95 text-neutral-800 px-4 py-3 backdrop-blur-sm",
          style: { fontSize: 14, lineHeight: "20px" },
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
