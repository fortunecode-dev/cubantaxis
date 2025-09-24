import Head from "next/head";
import { getTranslation } from "../locales";
import { LocaleParams } from "@/types/common";
import { LocaleLink } from "@/libs/i18n-nav";
import ExtendedBookingForm from "@/modules/booking/ExtendedBookingForm";
import type { Metadata } from "next";


type Params = {
  params: Promise<{
    lang: "en" 
    | "es"
    | "fr"
    | "de"
    | "ru"
    | "pt"
  }>
};

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const base = "https://cubantaxis.com";
  const { lang } = await params;
  const path = `/${lang}/private-transfer-booking`;
  const url = `${base}${path}`;

  const title =
    lang === "es"
      ? "Reserva Un Taxi En Cuba | Reservas Personalizadas, Transfers (HAV & VRA)"
      : "Book A Taxi In Cuba | Custom Booking & Airport Transfers (HAV & VRA)";

  const description =
    lang === "es"
      ? "Guía 2025 de taxis en Cuba: precios fijos, taxis privados/compartidos y traslados de aeropuerto desde La Habana (HAV) y Varadero (VRA). Reserva rápida."
      : "Best way to book a taxi in cuba, send your info an customize your trip, chose your prefer car and destinations";

  const ogImage = `${base}/og/cubantaxis-1200x630.jpg`; // Asegúrate de que exista 1200×630

  return {
    alternates: {
      canonical: url,
        languages: {
        "x-default": `${base}/private-transfer-booking`,
        en: `${base}/en/private-transfer-booking`,
        es: `${base}/es/private-transfer-booking`,
        fr: `${base}/fr/private-transfer-booking`,
        de: `${base}/de/private-transfer-booking`,
        ru: `${base}/ru/private-transfer-booking`,
        pt: `${base}/pt/private-transfer-booking`,
      },
    },
     robots: {
    index: true,   // Permite indexar (por defecto ya es true)
    follow: true,  // Permite seguir enlaces (por defecto ya es true)
  },
    openGraph: {
      url,
      type: "article",
      title,
      description,
      images: [{ url: ogImage, width: 1200, height: 630, alt: "Classic taxi in Havana, Cuba" }],
      locale: lang === "es" ? "es_ES" : "en_US",
      siteName: "CubanTaxis",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}
export default async function BookAReservationPage({
  params,
}: {
  params: LocaleParams;
}) {
  const { lang } = await params;
  const idioma = getTranslation(lang)
  return (
    <>
      <Head>
        <title>{idioma.bookingForm.page.title}</title>
        <meta name="description" content={idioma.bookingForm.page.description} />
      </Head>

      <section className="min-h-screen px-2 py-13 md:py-24 m-auto bg-gradient-to-br from-amber-100 to-yellow-50">
        <div className="max-w-2xl bg-white rounded-2xl shadow-xl m-auto">
          <h1 className="text-2xl md:text-3xl pt-5 font-bold text-center text-amber-600 mb-0">
            {idioma.bookingForm.page.title}
          </h1>
          <ExtendedBookingForm idioma={idioma} />

          <div className="p-3 px-4 pt-2 text-center">
            <LocaleLink href="/" className="w-full inline-block px-6 py-3 bg-amber-500 text-white rounded-xl shadow hover:bg-amber-600 transition">
              {idioma.bookingForm.page.backToHome}
            </LocaleLink>
          </div>
        </div>
      </section>
    </>
  );
}
