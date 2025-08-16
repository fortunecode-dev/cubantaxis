import ExtendedBookingForm from "@/modules/booking/ExtendedBookingForm";
import Link from "next/link";
import Head from "next/head";
import { LocaleParams } from "@/types/common";
import { getTranslation } from "../locales";
import { LocaleLink } from "@/libs/i18n-nav";

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
            {idioma.bookingForm.page.title}
          </h1>
          <ExtendedBookingForm idioma={idioma} />

          <div className="mt-10 text-center">
            <LocaleLink
              href="/"
              className="inline-block mt-6 px-6 py-3 bg-amber-500 text-white rounded-xl shadow hover:bg-amber-600 transition"
            >
              {idioma.bookingForm.page.backToHome}
            </LocaleLink>
          </div>
        </div>
      </section>
    </>
  );
}
