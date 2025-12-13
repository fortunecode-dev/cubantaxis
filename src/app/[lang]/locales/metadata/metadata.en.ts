import { customMetaData } from "@/seoUtils/metadata";
import { buildAlternatesMetadata } from "@/seoUtils/seo-builder";

export const metadata: Partial<customMetaData> = {
  landingPage: {
    title: "Cuba Taxi Transfers & Tour Booking | CubanTaxis",
    description:
      "Book Cuba taxi transfers and tours online. Fixed prices, fast booking, English-speaking drivers in Havana and Varadero with CubanTaxis.",
    alternates: buildAlternatesMetadata("", "en"),
  },

  blog: {
    self: {
      title: "Cuba Taxi Blog | Transfers, Tours & Booking Tips | CubanTaxi",
      description:
        "Guides and advice on Cuba taxi transfers, tours and booking. Learn how to move between Havana, Varadero and other destinations with CubanTaxis.",
      alternates: buildAlternatesMetadata("/blog", "en"),
    },
    howMuchIsATaxiInCuba: {
      title: "Cuba Taxi Prices 2025 | Havana & Varadero Trips",
      description:
        "2025 taxi fares in Cuba. Compare routes, transfers, and tours from Havana, Varadero, and other cities with CubanTaxis.",
      alternates: buildAlternatesMetadata(
        "/blog/how-much-is-a-taxi-in-cuba",
        "en"
      ),
    },
    privateTaxiOrCarRental: {
      title:
        "Private Taxi or Car Rental in Cuba 2025 | Comparison, Prices & Tips",
      description:
        "Compare private taxis vs car rentals in Cuba. Evaluate comfort, cost & flexibility for trips to Havana, Varadero, Trinidad.",
      alternates: buildAlternatesMetadata(
        "/blog/private-taxi-or-car-rental",
        "en"
      ),
    },
  },

  customBooking: {
    title: "Custom Cuba Taxi Booking | Private Transfers & Tours | Cuban",
    description:
      "Customize your Cuba taxi booking. Choose transfers, tours, cars and destinations across Havana and Varadero with CubanTaxis.",
    alternates: buildAlternatesMetadata("/private-transfer-booking", "en"),
  },

  fastBooking: {
    title: "Fast Cuba Taxi Booking | Airport Transfers & Tours | CubanTa",
    description:
      "Quick Cuba taxi booking for airport transfers and tours. Reliable drivers, fixed prices, Havana & Varadero routes with CubanTaxis.",
    alternates: buildAlternatesMetadata("/taxi", "en"),
  },

  destinationsInCuba: {
    title: "CubanTaxis Destinations in Cuba | Taxi Transfers, Tours & Ho",
    description:
      "CubanTaxis connects you with the top destinations in Cuba. Book taxi transfers, tours and hotel trips in Havana, Varadero and beyond.",
    alternates: buildAlternatesMetadata("/destinations-in-cuba", "en"),
  },

  taxiInCuba: {
    title: "CubanTaxis Guide 2025 | Taxi in Cuba, Transfers & Tours",
    description:
      "Discover Cuba in 2025 with CubanTaxis. Your trusted partner for taxi transfers, tours and booking in Havana, Varadero and across the island.",
    alternates: buildAlternatesMetadata("/taxi-in-cuba", "en"),
  },
  faqs: {
    title: "Cuba Taxi FAQs 2025 | Prices, Booking & Travel Tips",
    description:
      "Answers to the most common questions about taxi services in Cuba. Learn about prices, booking, routes, airports and travel tips with CubanTaxis.",
    alternates: buildAlternatesMetadata("/faqs", "en"),
  },

  interestingPlaces: {
    self: {
      title: "CubanTaxis | Interesting Places in Cuba, Hotels & Tours",
      description:
        "CubanTaxis takes you to the best hotels and places of interest in Cuba. Book taxi transfers, tours and stays in Havana and Varadero.",
      alternates: buildAlternatesMetadata("/interesting-places-in-cuba", "en"),
    },

    granHotelManzanaKempinski: {
      title: "CubanTaxis | Gran Hotel Manzana Kempinski Havana Taxi Transf",
      description:
        "Travel with CubanTaxis to Gran Hotel Manzana Kempinski in Havana. Book taxi transfers, hotel stays and guided tours with ease.",
      alternates: buildAlternatesMetadata(
        "/interesting-places-in-cuba/gran-hotel-manzana-kempinski",
        "en"
      ),
    },

    hotelMystiqueRegisHavana: {
      title: "CubanTaxis | Hotel Mystique Regis Havana Taxi Transfers & To",
      description:
        "Book CubanTaxis for your stay at Hotel Mystique Regis Havana. Reliable taxi transfers, tours and hotel booking available.",
      alternates: buildAlternatesMetadata(
        "/interesting-places-in-cuba/hotel-mystique-regis-habana",
        "en"
      ),
    },

    iberostarParqueCentral: {
      title: "CubanTaxis | Iberostar Parque Central Havana Taxi Transfers ",
      description:
        "CubanTaxis connects you to Iberostar Parque Central. Book Havana taxi transfers, hotel stays and tours quickly and easily.",
      alternates: buildAlternatesMetadata(
        "/interesting-places-in-cuba/iberostar-selection-parque-central",
        "en"
      ),
    },

    meliaInternacionalVaradero: {
      title: "CubanTaxis | Meliá Internacional Varadero Taxi Transfers, To",
      description:
        "CubanTaxis offers transfers and tours to Meliá Internacional Varadero. Book your hotel stay with reliable taxi services in Cuba.",
      alternates: buildAlternatesMetadata(
        "/interesting-places-in-cuba/melia-internacional-varadero",
        "en"
      ),
    },

    meliaLasAmericas: {
      title: "CubanTaxis | Meliá Las Américas Varadero Taxi Transfers & To",
      description:
        "Plan your trip with CubanTaxis to Meliá Las Américas Varadero. Taxi transfers, tours and hotel booking at your fingertips.",
      alternates: buildAlternatesMetadata(
        "/interesting-places-in-cuba/melia-las-americas",
        "en"
      ),
    },

    ocioClub: {
      title: "CubanTaxis | Ocio Club Havana Taxi Transfers, Nightlife & To",
      description:
        "Enjoy Havana nightlife at Ocio Club with CubanTaxis. Book your taxi transfers, tours and evening plans in Cuba easily.",
      alternates: buildAlternatesMetadata(
        "/interesting-places-in-cuba/ocio-club",
        "en"
      ),
    },
  },
};
