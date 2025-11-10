// metadata.es.ts
// Palabras clave (ES): taxi en cuba, traslados, tours, reservas, hotel, varadero, la habana
import { customMetaData } from "@/seoUtils/metadata";
import { buildAlternates, buildAlternatesMetadata } from "@/seoUtils/seo-builder";

export const metadata: Partial<customMetaData> = {
  landingPage: {
    title: "Taxi en Cuba | Traslados y Reserva de Tours | CubanTaxis",
    description: "Reserva taxis en Cuba para traslados y tours online. Precios fijos, reserva rápida y conductores que hablan inglés en La Habana y Varadero con CubanTaxis.",
    alternates: buildAlternatesMetadata("", "es"),
  },

  blog: {
    self: {
      title: "Blog de Taxi en Cuba | Traslados, Tours y Consejos de Reserv",
      description: "Guías y consejos sobre taxis en Cuba: traslados, tours y reserva. Aprende a moverte entre La Habana, Varadero y otros destinos con CubanTaxis.",
      alternates: buildAlternatesMetadata("/blog", "es"),
    },privateTaxiOrCarRental:{
    title: "Precios de taxis en Cuba 2025 | Viajes y traslados",
  description: "Consulta tarifas 2025 de taxis en Cuba. Compara traslados, excursiones y rutas desde La Habana, Varadero y más con CubanTaxis.",
  alternates: buildAlternatesMetadata(
        "/blog/private-taxi-or-car-rental",
        "es"
    ),
},
    howMuchIsATaxiInCuba: {
      title:
        "Precios de Taxi en Cuba 2025 | Traslados y Reserva de Tours ",
      description: "Consulta precios de taxi en Cuba 2025. Compara traslados, tours y opciones de reserva entre La Habana, Varadero y más con CubanTaxis.",
      alternates: buildAlternatesMetadata("/blog/how-much-is-a-taxi-in-cuba", "es"),
    },
  },

  customBooking: {
    title: "Reserva Personalizada de Taxi en Cuba | Traslados Privados y",
    description: "Personaliza tu reserva de taxi en Cuba. Elige traslados, tours, coches y destinos en La Habana y Varadero con CubanTaxis.",
    alternates: buildAlternatesMetadata("/private-transfer-booking", "es"),
  },

  fastBooking: {
    title: "Reserva Rápida de Taxi en Cuba | Traslados de Aeropuerto y T",
    description: "Reserva rápida de taxi en Cuba para traslados de aeropuerto y tours. Conductores confiables, precios fijos, rutas La Habana y Varadero con CubanTaxis.",
    alternates: buildAlternatesMetadata("/cuba-taxi-booking", "es"),
  },

  destinationsInCuba: {
    title: "CubanTaxis Destinos en Cuba | Traslados en Taxi, Tours y Hot",
    description: "CubanTaxis te conecta con los mejores destinos de Cuba. Reserva traslados en taxi, tours y viajes a hoteles en La Habana, Varadero y más.",
    alternates: buildAlternatesMetadata("/destinations-in-cuba", "es"),
  },

  taxiInCuba: {
    title: "Guía 2025 de CubanTaxis | Taxi en Cuba, Traslados y Tours",
    description: "Descubre Cuba en 2025 con CubanTaxis: tu aliado para taxis, traslados, tours y reservas en La Habana, Varadero y toda la isla.",
    alternates: buildAlternatesMetadata("/taxi-in-cuba", "es"),
  },

  interestingPlaces: {
    self: {
      title: "CubanTaxis | Lugares de Interés en Cuba, Hoteles y Tours",
      description: "CubanTaxis te lleva a los mejores hoteles y puntos de interés en Cuba. Reserva traslados en taxi, tours y estancias en La Habana y Varadero.",
      alternates: buildAlternatesMetadata("/interesting-places-in-cuba", "es"),
    },

    granHotelManzanaKempinski: {
      title: "CubanTaxis | Gran Hotel Manzana Kempinski La Habana: Traslad",
      description: "Viaja con CubanTaxis al Gran Hotel Manzana Kempinski en La Habana. Reserva traslados en taxi, estancias y tours guiados sin complicaciones.",
      alternates: buildAlternatesMetadata("/interesting-places-in-cuba/gran-hotel-manzana-kempinski", "es"),
    },

    hotelMystiqueRegisHavana: {
      title: "CubanTaxis | Hotel Mystique Regis La Habana: Traslados en Ta",
      description: "Reserva con CubanTaxis tu estancia en Hotel Mystique Regis La Habana. Traslados en taxi confiables, tours y gestión de reserva.",
      alternates: buildAlternatesMetadata("/interesting-places-in-cuba/hotel-mystique-regis-habana", "es"),
    },

    iberostarParqueCentral: {
      title: "CubanTaxis | Iberostar Parque Central La Habana: Traslados y",
      description: "CubanTaxis te acerca a Iberostar Parque Central. Reserva traslados en taxi en La Habana, estancias de hotel y tours de forma fácil.",
      alternates: buildAlternatesMetadata("/interesting-places-in-cuba/iberostar-selection-parque-central", "es"),
    },

    meliaInternacionalVaradero: {
      title: "CubanTaxis | Meliá Internacional Varadero: Traslados, Tours ",
      description: "CubanTaxis ofrece traslados y tours a Meliá Internacional Varadero. Reserva tu estancia con un servicio de taxi confiable en Cuba.",
      alternates: buildAlternatesMetadata("/interesting-places-in-cuba/melia-internacional-varadero", "es"),
    },

    meliaLasAmericas: {
      title: "CubanTaxis | Meliá Las Américas Varadero: Traslados y Tours",
      description: "Planifica con CubanTaxis tu visita a Meliá Las Américas Varadero. Traslados en taxi, tours y reserva de hotel al instante.",
      alternates: buildAlternatesMetadata("/interesting-places-in-cuba/melia-las-americas", "es"),
    },

    ocioClub: {
      title: "CubanTaxis | Ocio Club La Habana: Traslados, Nocturnidad y T",
      description: "Disfruta la noche habanera en Ocio Club con CubanTaxis. Reserva traslados en taxi, tours y planes nocturnos en Cuba fácilmente.",
      alternates: buildAlternatesMetadata("/interesting-places-in-cuba/ocio-club", "es"),
    },
  },
};
