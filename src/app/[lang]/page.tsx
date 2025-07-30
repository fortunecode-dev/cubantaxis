import ExtendedBookingForm from "@/modules/booking/ExtendedBookingForm";
import QuickBookingForm from "@/modules/booking/QuickBookingForm";
import DestinationsCard from "@/modules/catalog/DestinationsCard";
import ExcursionsCard from "@/modules/catalog/ExcursionCard";
import Footer from "@/modules/layout/Footer";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { getTranslation } from "./locales";
import { content, destinos, excursiones } from "@/content";

interface Destination {
  id: number;
  title: string;
  description: string;
  image: string;
}

interface Excursion {
  id: number;
  title: string;
  image: string;
  places: string[];
}

async function getData() {
  const destinations: Destination[] = [
    { id: 1, title: "Havana City", description: "Explore the culture and history of Havana.", image: "/images/havana.jpg" },
    { id: 2, title: "Varadero Beach", description: "Enjoy one of Cuba's most famous beaches.", image: "/images/havana.jpg" },
    { id: 3, title: "Viñales Valley", description: "Discover the natural beauty of Viñales.", image: "/images/havana.jpg" },
  ];

  const excursions: Excursion[] = [
    {
      id: 1, title: "Havana Tour", image: "/images/havana.jpg", places:

        ["El Morro",
          "Plaza de la Catedral",
          "Plaza de la Revolución",
          "Bar Floridita y Bodeguita del medio",
          "El Capitolio",
          "Otros sitios...",
        ]
    },
    {
      id: 2, title: "La Habana - Viñales", image: "/images/viñales.jpg", places:
        ["Miramar",
          "Valle de Viñales",
          "Mirador de Los Jazmines",
          "Cueva del Indio",
          "Plantación de tabaco",
          "Subida a la loma del Mural de Prehistoria",]
    },
    {
      id: 3, title: "La Habana - Playas del Este", image: "/images/playa_del_este.jpg",
      places: [
        "Túnel de La Habana", "Castillo del Morro", "Estadio Panamericano", "Alamar", "Parada opcional para realizar", "Playas: Santa María, Mégano, Mi Cayito"
      ]
    },

  ];

  return { destinations, excursions };
}

export default async function Home({ params }: { params: Promise<{ lang: "en" | "es" | "fr" | "de" | "ru" | "pt" }> }) {
  const { destinations, excursions } = await getData();
  const idioma = getTranslation((await params).lang)

  return (
    <div className="font-sans">
      {/* Hero Section */}
      <section
        className="relative h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('/images/background.jpg')" }}
      >
        <div className="absolute top-4 right-4 flex gap-4 text-white text-2xl">
          <a href="#" aria-label="Facebook"><FaFacebookF /></a>
          <a href="#" aria-label="Instagram"><FaInstagram /></a>
          <a href="#" aria-label="WhatsApp"><FaWhatsapp /></a>
        </div>

        <div className="flex flex-col items-center justify-center h-full text-center text-white bg-black bg-opacity-50 px-4">
          <h1 className="text-5xl font-bold mb-4">{idioma.hero.title}</h1>
          <p className="text-lg max-w-2xl mb-6">
            {idioma.hero.subtitle}
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            {/* Excursions - text button */}
            <button className="text-white font-semibold hover:underline">
              {idioma.hero.buttons.excursions}
            </button>

            {/* Destinations - outlined button */}
            <button className="border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-white px-6 py-3 rounded-xl font-semibold transition">
              {idioma.hero.buttons.destinations}

            </button>

            {/* Fast Booking - contained button */}
            <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-xl font-semibold transition">
              {idioma.hero.buttons.fastBooking}

            </button>
          </div>
        </div>
      </section>


      <QuickBookingForm />
      <DestinationsCard destinations={destinos[(await params).lang]?.destinations} idioma={idioma} />
      <ExcursionsCard excursions={excursiones[(await params).lang]?.excursions} idioma={idioma} />
      <ExtendedBookingForm />
      <Footer />
    </div>
  );
}
