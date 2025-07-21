import ExtendedBookingForm from "@/modules/booking/ExtendedBookingForm";
import QuickBookingForm from "@/modules/booking/QuickBookingForm";
import DestinationsCard from "@/modules/catalog/DestinationsCard";
import ExcursionsCard from "@/modules/catalog/ExcursionCard";
import Footer from "@/modules/layout/Footer";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

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
    { id: 1, title: "Havana Tour", image: "/images/havana.jpg", places: ["Old Havana", "Malecon", "Revolution Square"] },
    { id: 2, title: "Viñales Excursion", image: "/images/havana.jpg", places: ["Tobacco Farms", "Caves", "Mural de la Prehistoria"] },
    { id: 3, title: "Trinidad Tour", image: "/images/havana.jpg", places: ["Historic Center", "Museums", "Ancon Beach"] },
  ];

  return { destinations, excursions };
}

export default async function Home() {
  const { destinations, excursions } = await getData();

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
    <h1 className="text-5xl font-bold mb-4">CUBANTAXIS</h1>
    <p className="text-lg max-w-2xl mb-6">
      Safe and reliable transfers, city tours, and excursions across Cuba. Quick booking and personalized service.
    </p>

    <div className="flex flex-wrap justify-center gap-4">
      {/* Excursions - text button */}
      <button className="text-white font-semibold hover:underline">
        Excursions
      </button>

      {/* Destinations - outlined button */}
      <button className="border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-white px-6 py-3 rounded-xl font-semibold transition">
        Destinations
      </button>

      {/* Fast Booking - contained button */}
      <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-xl font-semibold transition">
        Fast Booking
      </button>
    </div>
  </div>
</section>


      <QuickBookingForm />
      <DestinationsCard destinations={destinations} />
      <ExcursionsCard excursions={excursions} />
      <ExtendedBookingForm />
      <Footer/>
    </div>
  );
}
