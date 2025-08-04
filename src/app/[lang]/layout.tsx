import "./globals.css";
import type { Metadata } from "next";
import Header from "@/modules/layout/Header";
import Footer from "@/modules/layout/Footer";
import FloatingContacts from "@/modules/layout/FloatingContacts";
import Head from "next/head";
export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "es" }, { lang: "fr" }, { lang: "de" }, { lang: "ru" }, { lang: "pt" }]
}

export const metadata: Metadata = {
  title: "Taxi Cuba | Traslados Aeropuerto, Excursiones y Autos Clásicos",
  description: "Taxi en Cuba. Traslados aeropuerto, excursiones privadas, autos clásicos con chofer. Servicio en La Habana, Varadero, Cayo Coco, Trinidad y más.",
  icons: { icon: "/icon.ico" },
  keywords:[
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
]

};

export default async function RootLayout({
  children, params
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: "en" | "es" | "fr" | "de" | "ru" | "pt" }>
}>) {
  const {lang}=await params
  return (
    <html lang={lang}>
      <Head>
        <title>Traslados en Cuba | Taxi desde Aeropuerto, Varadero, Viñales y más</title>
        <meta name="description" content="Reserva traslados privados desde el Aeropuerto de La Habana, Varadero, Viñales y más destinos turísticos en Cuba. Viaja cómodo y seguro con nosotros." />
        <meta name="keywords" content="traslados cuba, taxi aeropuerto la habana, viajes varadero, excursiones viñales, traslados privados cuba" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://tusitio.com/" />
      </Head>
      <body
        className={`antialiased`}
      >
        <Header />
        {children}
        <FloatingContacts />
        <Footer />
      </body>
    </html>
  );
}
