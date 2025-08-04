import ExtendedBookingForm from "@/modules/booking/ExtendedBookingForm";
import QuickBookingForm from "@/modules/booking/QuickBookingForm";
import DestinationsCard from "@/modules/catalog/DestinationsCard";
import ExcursionsCard from "@/modules/catalog/ExcursionCard";
import Footer from "@/modules/layout/Footer";
import { FaFacebookF, FaInstagram, FaTelegram, FaWhatsapp } from "react-icons/fa";
import { getTranslation } from "./locales";
import { destinos, excursiones } from "@/content";
import Header from "@/modules/layout/Header";
import Hero from "@/modules/layout/Hero";
import FloatingContacts from "@/modules/layout/FloatingContacts";

export default async function Home({ params }: { params: Promise<{ lang: "en" | "es" | "fr" | "de" | "ru" | "pt" }> }) {
  const idioma = getTranslation((await params).lang)

  return (
    <div className="font-sans">
      <Header />
      <Hero idioma={idioma} />
      <DestinationsCard name={"destinations"} destinations={destinos[(await params).lang]?.destinations} idioma={idioma} />
      <DestinationsCard name={"excursions"} destinations={excursiones[(await params).lang]?.excursions} idioma={idioma} />
      <QuickBookingForm />
      <ExtendedBookingForm />
      <FloatingContacts/>
      <Footer />
    </div>
  );
}
