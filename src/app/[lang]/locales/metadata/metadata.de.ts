// metadata.de.ts
// Schlüsselwörter (DE): taxi in kuba, transfers, touren, buchung, hotel, varadero, havanna
import { customMetaData } from "@/seoUtils/metadata";
import { buildAlternates, buildAlternatesMetadata } from "@/seoUtils/seo-builder";

export const metadata: Partial<customMetaData> = {
  landingPage: {
    title: "Taxi in Kuba | Transfers & Tour-Buchung | CubanTaxis",
    description:
      "Buchen Sie Taxi-Transfers und Touren in Kuba online. Festpreise, schnelle Buchung, englischsprachige Fahrer in Havanna & Varadero mit CubanTaxis.",
    alternates: buildAlternatesMetadata("", "de"),
  },

  blog: {
    self: {
      title: "Kuba-Taxi Blog | Transfers, Touren & Buchungs-Tipps | CubanTaxis",
      description:
        "Guides und Tipps zu Taxis in Kuba: Transfers, Touren und Buchung. So reisen Sie zwischen Havanna, Varadero und weiteren Zielen mit CubanTaxis.",
      alternates: buildAlternatesMetadata("/blog", "de"),
    },
    howMuchIsATaxiInCuba: {
      title:
        "Kuba-Taxi Preise 2025 | Transfers & Tour-Buchung Havanna & Varadero | CubanTaxis",
      description:
        "Aktuelle Kuba-Taxi Preise 2025. Vergleichen Sie Transfers, Touren und Buchungsoptionen zwischen Havanna, Varadero und mehr mit CubanTaxis.",
      alternates: buildAlternatesMetadata("/blog/how-much-is-a-taxi-in-cuba", "de"),
    },
  },

  customBooking: {
    title: "Individuelle Kuba-Taxi Buchung | Private Transfers & Touren | CubanTaxis",
    description:
      "Stellen Sie Ihre Kuba-Taxi Buchung zusammen: Transfers, Touren, Fahrzeuge und Ziele in Havanna & Varadero – mit CubanTaxis.",
    alternates: buildAlternatesMetadata("/private-transfer-booking", "de"),
  },

  fastBooking: {
    title: "Schnelle Kuba-Taxi Buchung | Flughafen-Transfers & Touren | CubanTaxis",
    description:
      "Schnelle Taxi-Buchung für Flughafen-Transfers und Touren. Zuverlässige Fahrer, Festpreise, Routen Havanna & Varadero mit CubanTaxis.",
    alternates: buildAlternatesMetadata("/cuba-taxi-booking", "de"),
  },

  destinationsInCuba: {
    title: "CubanTaxis Reiseziele in Kuba | Taxi-Transfers, Touren & Hotels",
    description:
      "CubanTaxis verbindet Sie mit den Top-Reisezielen Kubas. Buchen Sie Taxi-Transfers, Touren und Hotelaufenthalte in Havanna, Varadero und darüber hinaus.",
    alternates: buildAlternatesMetadata("/destinations-in-cuba", "de"),
  },

  taxiInCuba: {
    title: "CubanTaxis Guide 2025 | Taxi in Kuba, Transfers & Touren",
    description:
      "Entdecken Sie Kuba 2025 mit CubanTaxis: Ihr Partner für Taxis, Transfers, Touren und Buchung in Havanna, Varadero und auf der ganzen Insel.",
    alternates: buildAlternatesMetadata("/taxi-in-cuba", "de"),
  },

  interestingPlaces: {
    self: {
      title: "CubanTaxis | Sehenswürdigkeiten in Kuba, Hotels & Touren",
      description:
        "CubanTaxis bringt Sie zu den besten Hotels und Sehenswürdigkeiten Kubas. Buchen Sie Taxi-Transfers, Touren und Aufenthalte in Havanna & Varadero.",
      alternates: buildAlternatesMetadata("/interesting-places-in-cuba", "de"),
    },

    granHotelManzanaKempinski: {
      title: "CubanTaxis | Gran Hotel Manzana Kempinski Havanna: Taxi-Transfers & Buchung",
      description:
        "Reisen Sie mit CubanTaxis zum Gran Hotel Manzana Kempinski in Havanna. Einfach Taxi-Transfers, Hotel & geführte Touren buchen.",
      alternates: buildAlternatesMetadata("/interesting-places-in-cuba/gran-hotel-manzana-kempinski", "de"),
    },

    hotelMystiqueRegisHavana: {
      title: "CubanTaxis | Hotel Mystique Regis Havanna: Taxi-Transfers & Touren",
      description:
        "Buchen Sie mit CubanTaxis Ihren Aufenthalt im Hotel Mystique Regis Havanna. Zuverlässige Taxi-Transfers, Touren und Hotelbuchung.",
      alternates: buildAlternatesMetadata("/interesting-places-in-cuba/hotel-mystique-regis-habana", "de"),
    },

    iberostarParqueCentral: {
      title: "CubanTaxis | Iberostar Parque Central Havanna: Transfers & Buchung",
      description:
        "CubanTaxis bringt Sie zum Iberostar Parque Central. Schnell Taxi-Transfers in Havanna, Hotelaufenthalte und Touren buchen.",
      alternates: buildAlternatesMetadata("/interesting-places-in-cuba/iberostar-selection-parque-central", "de"),
    },

    meliaInternacionalVaradero: {
      title: "CubanTaxis | Meliá Internacional Varadero: Transfers, Touren & Buchung",
      description:
        "CubanTaxis organisiert Transfers und Touren zum Meliá Internacional Varadero. Buchen Sie Ihren Aufenthalt mit zuverlässigem Taxi-Service in Kuba.",
      alternates: buildAlternatesMetadata("/interesting-places-in-cuba/melia-internacional-varadero", "de"),
    },

    meliaLasAmericas: {
      title: "CubanTaxis | Meliá Las Américas Varadero: Transfers & Touren",
      description:
        "Planen Sie mit CubanTaxis Ihren Besuch im Meliá Las Américas Varadero. Taxi-Transfers, Touren und Hotelbuchung auf einen Klick.",
      alternates: buildAlternatesMetadata("/interesting-places-in-cuba/melia-las-americas", "de"),
    },

    ocioClub: {
      title: "CubanTaxis | Ocio Club Havanna: Transfers, Nightlife & Touren",
      description:
        "Genießen Sie das Nachtleben Havannas im Ocio Club mit CubanTaxis. Einfach Taxi-Transfers, Touren und Abendpläne in Kuba buchen.",
      alternates: buildAlternatesMetadata("/interesting-places-in-cuba/ocio-club", "de"),
    },
  },
};
