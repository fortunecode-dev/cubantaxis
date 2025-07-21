// app/page.tsx
import QuickBookingForm from "@/modules/booking/QuickBookingForm";
import Image from "next/image";
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
  // Aquí podrías hacer fetch a una API si lo deseas.
  const destinations: Destination[] = [
    {
      id: 1,
      title: "Havana City",
      description: "Explore the culture and history of Havana.",
      image: "/images/havana.jpg",
    },
    {
      id: 2,
      title: "Varadero Beach",
      description: "Enjoy one of Cuba's most famous beaches.",
      image: "/images/havana.jpg",
    },
    {
      id: 3,
      title: "Viñales Valley",
      description: "Discover the natural beauty of Viñales.",
      image: "/images/havana.jpg",
    },
  ];

  const excursions: Excursion[] = [
    {
      id: 1,
      title: "Havana Tour",
      image: "/images/havana.jpg",
      places: ["Old Havana", "Malecon", "Revolution Square"],
    },
    {
      id: 2,
      title: "Viñales Excursion",
      image: "/images/havana.jpg",
      places: ["Tobacco Farms", "Caves", "Mural de la Prehistoria"],
    },
    {
      id: 3,
      title: "Trinidad Tour",
      image: "/images/havana.jpg",
      places: ["Historic Center", "Museums", "Ancon Beach"],
    },
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
        <div className="flex flex-col items-center justify-center h-full text-center text-white bg-black bg-opacity-50">
          <h1 className="text-5xl font-bold mb-4">Cuba Travel Services</h1>
          <p className="text-lg max-w-2xl mb-6">
            Safe and reliable transfers, city tours, and excursions across Cuba. Quick booking and personalized service.
          </p>
          <div className="flex gap-4">
            <button className="bg-yellow-500 hover:bg-yellow-600 px-6 py-3 rounded-xl font-semibold">Book Now</button>
            <button className="bg-white text-black hover:bg-gray-100 px-6 py-3 rounded-xl font-semibold">View Tours</button>
            <button className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-xl font-semibold">Contact Us</button>
          </div>
        </div>
      </section>

      <QuickBookingForm />


      {/* Destinations */}
      <section className="py-12 bg-white">
        <h2 className="text-3xl font-bold text-center mb-8">Top Destinations</h2>
        <div className="flex overflow-x-auto gap-6 px-4">
          {destinations.map((dest) => (
            <div key={dest.id} className="min-w-[300px] bg-gray-100 rounded-xl shadow-md overflow-hidden">
              <Image src={dest.image} alt={dest.title} width={400} height={250} className="object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">{dest.title}</h3>
                <p className="text-gray-700 text-sm">{dest.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Excursions */}
      <section className="py-12 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-8">Excursions</h2>
        <div className="flex overflow-x-auto gap-6 px-4">
          {excursions.map((exc) => (
            <div key={exc.id} className="min-w-[300px] bg-gray-100 rounded-xl shadow-md overflow-hidden">
              <Image src={exc.image} alt={exc.title} width={400} height={250} className="object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">{exc.title}</h3>
                <ul className="list-disc list-inside text-gray-700 text-sm">
                  {exc.places.map((place, index) => (
                    <li key={index}>{place}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Full Booking Form */}
      <section className="py-12 bg-white">
        <h2 className="text-3xl font-bold text-center mb-6">Full Booking Form</h2>
        <form className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
          <input className="p-3 border rounded-lg" type="text" placeholder="Full Name" />
          <input className="p-3 border rounded-lg" type="email" placeholder="Email" />
          <input className="p-3 border rounded-lg" type="text" placeholder="Phone" />
          <input className="p-3 border rounded-lg" type="text" placeholder="Pick-up Location" />
          <input className="p-3 border rounded-lg" type="text" placeholder="Drop-off Location" />
          <input className="p-3 border rounded-lg" type="date" />
          <textarea className="p-3 border rounded-lg md:col-span-2" placeholder="Additional Details"></textarea>
          <button className="bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg font-semibold md:col-span-2">Submit Reservation</button>
        </form>
      </section>
    </div>
  );
}
