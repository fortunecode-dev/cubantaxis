import QuickBookingForm from "@/modules/booking/QuickBookingForm";
import Link from "next/link";
import Head from "next/head";
import { getTranslation } from "../locales";
import { LocaleParams } from "@/types/common";

export default async function FastBookingPage({ params }: { params: LocaleParams }) {
  const lang = await params;
  const idioma = getTranslation((await params).lang)

  const seo = {
    title: {
      es: "Reserva rápida | Cuban Taxis",
      en: "Quick Booking | Cuban Taxis",
      fr: "Réservation rapide | Cuban Taxis",
      de: "Schnellbuchung | Cuban Taxis",
      ru: "Быстрая бронь | Cuban Taxis",
      pt: "Reserva rápida | Cuban Taxis"
    },
    description: {
      es: "Accede al formulario rápido para reservar tu traslado en Cuba con Cuban Taxis. Sin pasos innecesarios.",
      en: "Access the quick form to book your transfer in Cuba with Cuban Taxis. No unnecessary steps.",
      fr: "Réservez rapidement votre transfert à Cuba avec Cuban Taxis. Sans complications.",
      de: "Buchen Sie schnell Ihren Transfer in Kuba mit Cuban Taxis. Ohne Umwege.",
      ru: "Быстро забронируйте трансфер на Кубе с Cuban Taxis. Без лишних шагов.",
      pt: "Acesse o formulário rápido para reservar seu traslado em Cuba com a Cuban Taxis. Sem complicações."
    }
  };

  return (
    <>
      <Head>
        <title>{seo.title[lang.lang]}</title>
        <meta name="description" content={seo.description[lang.lang]} />
        <meta name="robots" content="noindex, follow" />
      </Head>

      <section className="min-h-screen px-4 py-16 md:py-24 bg-gradient-to-br from-amber-100 to-yellow-50">
        <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-6 md:p-10">
          <h1 className="text-2xl md:text-3xl font-bold text-center text-amber-600 mb-6">
            {seo.title[lang.lang]}
          </h1>
          <QuickBookingForm idioma={idioma} />

          <div className="mt-10 text-center">
            <Link href="/" className="inline-block px-6 py-3 bg-amber-500 text-white rounded-xl shadow hover:bg-amber-600 transition">
              {lang.lang === "es" ? "Volver al inicio" : "Return to Home"}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
