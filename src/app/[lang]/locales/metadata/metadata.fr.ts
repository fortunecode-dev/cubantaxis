// metadata.fr.ts
// Mots-clés (FR): taxi à cuba, transferts, excursions (tours), réservation, hôtel, varadero, la havane
import { customMetaData } from "@/seoUtils/metadata";
import { buildAlternates, buildAlternatesMetadata } from "@/seoUtils/seo-builder";

export const metadata: Partial<customMetaData> = {
    landingPage: {
        title: "Taxi à Cuba | Transferts & Réservation d’Excursions | CubanT",
        description: "Réservez vos taxis à Cuba pour transferts, excursions en ligne. Tarifs fixes, réservation rapide, chauffeurs anglophones à La Havane & Varadero avec CubanTaxis.",
        alternates: buildAlternatesMetadata("", "fr"),
    },

    blog: {
        self: {
            title: "Blog Taxi à Cuba | Transferts, Excursions & Conseils Réserva",
            description: "Guides et conseils sur le taxi à Cuba : transferts, excursions et réservation. Déplacez-vous entre La Havane, Varadero et plus avec CubanTaxis.",
            alternates: buildAlternatesMetadata("/blog", "fr"),
        },
        howMuchIsATaxiInCuba: {
            title:
                "Prix Taxi à Cuba 2025 | Transferts & Réservation d’Excursion",
            description: "Découvrez les prix du taxi à Cuba 2025. Comparez transferts, excursions et options de réservation entre La Havane, Varadero et au-delà avec CubanTaxis.",
            alternates: buildAlternatesMetadata("/blog/how-much-is-a-taxi-in-cuba", "fr"),
        }, privateTaxiOrCarRental: {
            title: "Taxi Privé ou Location de Voiture à Cuba 2025 | Comparaison, Tarifs & Conseils",
            description:
                "Découvrez si un taxi privé ou une location de voiture est meilleur pour votre voyage à Cuba. Comparez confort, coût et flexibilité pour des trajets comme La Havane, Varadero, Trinidad ou Viñales.",
            alternates: buildAlternatesMetadata(
                "/blog/private-taxi-or-car-rental",
                "fr"
            ),
        }
    },

    customBooking: {
        title: "Réservation Personnalisée Taxi à Cuba | Transferts Privés & ",
        description: "Personnalisez votre réservation de taxi à Cuba. Choisissez transferts, excursions, véhicules et destinations à La Havane et Varadero avec CubanTaxis.",
        alternates: buildAlternatesMetadata("/private-transfer-booking", "fr"),
    },

    fastBooking: {
        title: "Réservation Rapide Taxi à Cuba | Transferts Aéroport & Excur",
        description: "Réservation express de taxi à Cuba pour transferts aéroport et excursions. Chauffeurs fiables, tarifs fixes, routes La Havane & Varadero avec CubanTaxis.",
        alternates: buildAlternatesMetadata("/cuba-taxi-booking", "fr"),
    },

    destinationsInCuba: {
        title: "Destinations CubanTaxis à Cuba | Transferts Taxi, Excursions",
        description: "CubanTaxis vous connecte aux meilleures destinations de Cuba. Réservez transferts taxi, excursions et séjours à l’hôtel à La Havane, Varadero et plus.",
        alternates: buildAlternatesMetadata("/destinations-in-cuba", "fr"),
    },

    taxiInCuba: {
        title: "Guide 2025 CubanTaxis | Taxi à Cuba, Transferts & Excursions",
        description: "Découvrez Cuba en 2025 avec CubanTaxis : taxis fiables, transferts, excursions et réservation à La Havane, Varadero et dans toute l’île.",
        alternates: buildAlternatesMetadata("/taxi-in-cuba", "fr"),
    },

    interestingPlaces: {
        self: {
            title: "CubanTaxis | Lieux d’Intérêt à Cuba, Hôtels & Excursions",
            description: "CubanTaxis vous emmène vers les meilleurs hôtels et lieux d’intérêt de Cuba. Réservez transferts taxi, excursions et séjours à La Havane et Varadero.",
            alternates: buildAlternatesMetadata("/interesting-places-in-cuba", "fr"),
        },

        granHotelManzanaKempinski: {
            title: "CubanTaxis | Gran Hotel Manzana Kempinski La Havane : Transf",
            description: "Voyagez avec CubanTaxis au Gran Hotel Manzana Kempinski à La Havane. Réservez transferts taxi, séjours et excursions guidées facilement.",
            alternates: buildAlternatesMetadata("/interesting-places-in-cuba/gran-hotel-manzana-kempinski", "fr"),
        },

        hotelMystiqueRegisHavana: {
            title: "CubanTaxis | Hotel Mystique Regis La Havane : Transferts Tax",
            description: "Réservez avec CubanTaxis votre séjour à l’Hotel Mystique Regis La Havane. Transferts taxi fiables, excursions et réservation d’hôtel.",
            alternates: buildAlternatesMetadata("/interesting-places-in-cuba/hotel-mystique-regis-habana", "fr"),
        },

        iberostarParqueCentral: {
            title: "CubanTaxis | Iberostar Parque Central La Havane : Transferts",
            description: "CubanTaxis vous conduit à l’Iberostar Parque Central. Réservez rapidement transferts taxi à La Havane, séjours d’hôtel et excursions.",
            alternates: buildAlternatesMetadata("/interesting-places-in-cuba/iberostar-selection-parque-central", "fr"),
        },

        meliaInternacionalVaradero: {
            title: "CubanTaxis | Meliá Internacional Varadero : Transferts, Excu",
            description: "CubanTaxis propose des transferts et excursions vers le Meliá Internacional Varadero. Réservez votre séjour avec un service taxi fiable à Cuba.",
            alternates: buildAlternatesMetadata("/interesting-places-in-cuba/melia-internacional-varadero", "fr"),
        },

        meliaLasAmericas: {
            title: "CubanTaxis | Meliá Las Américas Varadero : Transferts & Excu",
            description: "Planifiez votre visite au Meliá Las Américas Varadero avec CubanTaxis : transferts taxi, excursions et réservation d’hôtel en un clin d’œil.",
            alternates: buildAlternatesMetadata("/interesting-places-in-cuba/melia-las-americas", "fr"),
        },

        ocioClub: {
            title: "CubanTaxis | Ocio Club La Havane : Transferts, Vie Nocturne ",
            description: "Profitez de la nuit havanaise à l’Ocio Club avec CubanTaxis. Réservez facilement transferts taxi, excursions et sorties du soir à Cuba.",
            alternates: buildAlternatesMetadata("/interesting-places-in-cuba/ocio-club", "fr"),
        },
    },
};
