
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
  title: "CUBANTAXIS | Traslados desde Aeropuertos, Excursiones y Tours",
  description: "Taxi en Cuba. Reservas, Traslados aeropuerto, excursiones privadas, autos clásicos con chofer, 24/7 en La Habana, Varadero, Cayo Coco, Trinidad.",
  keywords: [
    "taxi Cuba",
    "servicio de taxi Cuba",
    "traslados en Cuba",
    "reserva de taxi en Cuba",
    "transporte en Cuba",
    "taxi aeropuerto La Habana",
    "taxi aeropuerto Varadero",
    "taxi privado en Cuba",
    "alquiler de autos Cuba",
    "minivan Cuba",
    "auto clásico Cuba",
    "traslado desde aeropuerto Cuba",
    "taxis en La Habana",
    "traslados turísticos Cuba"
  ],
  icons: { icon: "/icon.ico" },
  openGraph: {
    title: "Taxi Cuba | Reserva traslados en La Habana y Varadero",
    description: "Traslados privados desde aeropuertos y destinos turísticos. Vehículos clásicos y modernos. Servicio 24/7.",
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
  } ,metadataBase:new URL("https://cubantaxis.com/"),
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
    <html lang={lang}>
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "TaxiService",
              "name": "Cuban Taxis",
              "image": "https://cubantaxis.com/icon.ico",
              "url": "https://cubantaxis.com",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "La Habana",
                "addressCountry": "CU"
              },
              "areaServed": ["La Habana", "Varadero", "Cayo Coco", "Trinidad"],
              "availableLanguage": ["Spanish", "English", "Russian", "French", "Portuguesse"],
            })
          }}
        />
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
        <Footer />
        <LanguageSuggestor/>
      </body>
    </html>
  );
}
