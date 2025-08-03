import ExtendedBookingForm from "@/modules/booking/ExtendedBookingForm";
import QuickBookingForm from "@/modules/booking/QuickBookingForm";
import DestinationsCard from "@/modules/catalog/DestinationsCard";
import ExcursionsCard from "@/modules/catalog/ExcursionCard";
import Footer from "@/modules/layout/Footer";
import { FaFacebookF, FaInstagram, FaTelegram, FaWhatsapp } from "react-icons/fa";
import { getTranslation } from "./locales";
import { destinos, excursiones } from "@/content";
import Header from "@/modules/layout/Header";

export default async function Home({ params }: { params: Promise<{ lang: "en" | "es" | "fr" | "de" | "ru" | "pt" }> }) {
  const idioma = getTranslation((await params).lang)

  return (
    <div className="font-sans">
      {/* Hero Section */}
    <Header/>
      {/* Espaciador del alto del header */}
      {/* Hero Section con fondo tipo masonry */}
      <section className="relative bg-black overflow-hidden mt-[25px] pt-5 rounded-b-lg">
        {/* Fondo Masonry */}
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
          <div className="hero-background grid grid-cols-3 md:grid-cols-6 gap-2 p-1 pt-5">
            {[
              "/images/cienfuegos.jpg", "/images/cayo-coco.jpg", "/images/havana-capitol.jpg",
              "/images/trinidad.jpg", "/images/varadero-view.jpg", "/images/cayo-santa-maria.webp",
              "/images/viñales.jpg", "/images/santa-clara.jpeg", "/images/havana-tour.jpg",
              "/images/playa-del-este.jpg", "/images/cayo-guillermo.png", "/images/varadero.jpg"
            ].map((src, i) => (
              <div key={i}>
                <img className="h-auto max-w-full rounded-lg" src={src} alt="" />
              </div>
            ))}
          </div>
        </div>

        <div className="relative z-10 grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-24 lg:grid-cols-12 ">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-white">
              {idioma.hero.title}
            </h1>
            <p className="max-w-2xl mb-6 font-light lg:mb-8 md:text-lg lg:text-xl text-gray-300">
              {idioma.hero.subtitle}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="text-amber-400 font-semibold hover:underline">
                {idioma.hero.buttons.excursions}
              </button>
              <button className="border border-amber-400 text-yellow-500 hover:bg-amber-400 hover:text-black px-6 py-3 rounded-xl font-semibold transition">
                {idioma.hero.buttons.destinations}
              </button>
              <button className="bg-amber-400 hover:bg-yellow-300 text-black px-6 py-3 rounded-xl font-semibold transition">
                {idioma.hero.buttons.fastBooking}
              </button>
            </div>
          </div>
        </div>
      </section>

      <DestinationsCard destinations={destinos[(await params).lang]?.destinations} idioma={idioma} />
      <DestinationsCard destinations={excursiones[(await params).lang]?.excursions} idioma={idioma} />
      <QuickBookingForm />
      <ExtendedBookingForm />
      <Footer />
    </div>
  );
}
