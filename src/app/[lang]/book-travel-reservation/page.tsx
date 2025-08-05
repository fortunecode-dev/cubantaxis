import ExtendedBookingForm from "@/modules/booking/ExtendedBookingForm";
import Link from "next/link";
import Head from "next/head";
import { LocaleParams } from "@/types/common";

export default async function BookAReservationPage({
  params,
}: {
  params: LocaleParams;
}) {
  const lang = await params;

  const seo = {
    title: {
      es: "Reserva completa | Cuban Taxis",
      en: "Full Reservation | Cuban Taxis",
      fr: "Réservation complète | Cuban Taxis",
      de: "Komplette Reservierung | Cuban Taxis",
      ru: "Полное бронирование | Cuban Taxis",
      pt: "Reserva completa | Cuban Taxis",
    },
    description: {
      es: "Completa todos los datos de tu viaje para una reserva detallada. Servicio privado y personalizado en Cuba.",
      en: "Complete your travel details for a personalized reservation. Private taxi service in Cuba.",
      fr: "Complétez vos informations pour une réservation personnalisée. Service de taxi privé à Cuba.",
      de: "Füllen Sie Ihre Reisedaten für eine persönliche Reservierung aus. Privater Taxiservice in Kuba.",
      ru: "Заполните данные для персонализированного бронирования. Частный трансфер по Кубе.",
      pt: "Preencha os dados para uma reserva detalhada. Serviço de táxi privado em Cuba.",
    },
  };

  return (
    <>
      <Head>
        <title>{seo.title[lang.lang]}</title>
        <meta name="description" content={seo.description[lang.lang]} />
        <meta name="robots" content="noindex, follow" />
      </Head>

      <section
        className="min-h-screen px-4 py-16 md:py-24 bg-gradient-to-br from-amber-100 to-yellow-50"
        style={{
          backgroundImage:
            "radial-gradient(at 10% 90%, hsl(45.85deg 100% 48.24% / 23%) 0px, transparent 50%), radial-gradient(at 90% 10%, hsl(45.85deg 100% 48.24% / 23%) 0px, transparent 50%)",
        }}
      >
        <div className="max-w-3xl mx-auto bg-white/80 backdrop-blur-md p-6 md:p-10 rounded-3xl shadow-2xl">
          <h1 className="text-3xl md:text-4xl xl:text-5xl font-extrabold text-center text-amber-600 mb-6">
            {seo.title[lang.lang]}
          </h1>
          <ExtendedBookingForm />

          <div className="mt-10 text-center">
            <Link
              href="/"
              className="inline-block mt-6 px-6 py-3 bg-amber-500 text-white rounded-xl shadow hover:bg-amber-600 transition"
            >
              {lang.lang === "es" ? "Volver al inicio" : "Back to Home"}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
