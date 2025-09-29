// fr.ts
import type { AppTexts } from "./types";
import { metadata } from "./metadata/metadata.fr";
import { header } from "./header/fr";
import { content } from "./pageContent/fr";
import { articles } from "./blog/fr";
export const fr: AppTexts = {
  metadata,
  header,
  content,
  articles,
  taxiGuide: "Guide complet des taxis à Cuba",
  exploreDestinations: "Explorer les destinations →",
  hero: {
    h1: "Réservez un taxi à Cuba rapidement, en toute sécurité et fiabilité",
    h2a: "La façon la plus rapide d’obtenir un taxi pour ",
    h2b: " : La Havane, Varadero, Trinidad, Viñales, et plus.",
    transfer: "transferts aéroport",
    shared: "trajets partagés",
    and: " et ",
    interCity: "taxis interurbains",
    p: "Réservez votre taxi à Cuba sans prise de tête. Laissez vos coordonnées et votre trajet sera confirmé en quelques minutes.",
    buttons: {
      booking: "Réserver un taxi privé à Cuba",
      fastBooking: "Réservation rapide",
    },
    contents: {
      destinations: "Destinations",
      excursions: "Excursions",
      howTo: "Comment ça marche",
    },
    services: [
      "Transferts privés à Cuba",
      "Taxi pour l’aéroport de La Havane",
      "Réservation express de taxi",
      "Visites de la ville de La Havane",
      "Excursions depuis Varadero",
      "Taxis partagés à Cuba",
      "Excursions vers les Plages de l’Est",
      "Guides touristiques à Cuba",
    ],
  },
  destinationsCard: {
    title: "Destinations",
    subTitle: "Lieux à visiter à Cuba",
    description:
      "Découvrez nos options de destinations les plus populaires.",
  },
  excursionsCard: {
    title: "Excursions",
    places: "Lieux inclus",
  },
  seeMore: "Voir plus",
  bookingForm: {
    page: {
      backToHome: "Retour à l’accueil",
      description:
        "Réservez ici votre trajet en détail et nous nous occupons du reste",
      title: "Transfert personnalisé",
    },
    fullName: "Nom complet",
    email: "Email",
    phone: "Téléphone",
    vehicleType: "Type de véhicule",
    from: "De",
    to: "À",
    date: "Date",
    time: "Heure",
    passengers: "Passagers",
    luggage: "Bagages",
    details: "Détails supplémentaires",
    detailsExample:
      "Toute information spécifique sur le trajet ou les passagers",
    attachImages: "Joindre des images",
    reserveNow: "Réserver maintenant",
    subtitle:
      "Indiquez-nous les détails pour organiser votre trajet",
    example:
      "Ex. : numéro de vol, siège enfant, arrêt supplémentaire, etc.",
    upload: "Téléverser des images",
    luggaageExample: "2 valises + 1 sac à dos",
    title: "Détails de la réservation",
  },
  quickBookingForm: {
    page: {
      title: "Réserver un taxi à Cuba instantanément",
      backToHome: "Retour à l’accueil",
      description: "Réservez votre taxi en quelques secondes",
    },
    phone: "Téléphone",
    vehicleType: "Type de véhicule",
    from: "De",
    to: "À",
    date: "Date",
    time: "Heure",
    passengers: "Passagers",
    luggage: "Description des bagages",
    reserveNow: "Réserver maintenant",
    telegram: "Réserver via Telegram",
    whatsapp: "Réserver via WhatsApp",
    messageTitle: "Détails de la réservation",
  },
  footer: {
    rights: "© 2025 Cubantaxis. Tous droits réservés.",
  },
  underHeroTitle:
    "Pages clés sur les taxis à Cuba",
  underHeroLinks: [
    {
      href: "/blog/how-much-is-a-taxi-in-cuba",
      title: "Combien coûte un taxi à Cuba ?",
      description:
        "Découvrez les prix réels des taxis à Cuba, de La Havane à Varadero, y compris les transferts aéroport et les longues distances.",
    },
    {
      href: "/destinations-in-cuba",
      title: "Destinations populaires à Cuba",
      description:
        "Explorez les informations détaillées sur les principales destinations : La Havane, Varadero, Viñales et Trinidad.",
    },
    {
      href: "/interesting-places-in-cuba",
      title:
        "Attractions et lieux d’intérêt à Cuba",
      description:
        "Découvrez les meilleures attractions de Cuba : resorts de Varadero, monuments de La Havane, hôtels et activités familiales.",
    },
    {
      href: "/cuba-taxi-booking",
      title: "Réservation rapide de taxi",
      description:
        "Réservez un trajet à Cuba en quelques clics. Service rapide et fiable.",
    },
    {
      href: "/private-transfer-booking",
      title: "Réservation détaillée de transfert",
      description:
        "Planifiez votre transfert avec des options de véhicules, d’itinéraires et d’horaires.",
    },
    {
      href: "/taxi-in-cuba",
      title: "Taxi à Cuba – Guide & FAQs",
      description:
        "Guide informatif sur l’utilisation du taxi à Cuba avec une FAQ complète.",
    },
  ],
  FAQs: {
    title:
      "Combien coûte un taxi à Cuba, comment en obtenir un, et autres questions…",
    items: [
      {
        question:
          "Comment réserver un taxi à Cuba à l’avance ?",
        answer:
          "Laissez-nous vos coordonnées via le formulaire et vous recevrez une confirmation instantanée.",
      },
      {
        question:
          "Proposez-vous des transferts privés depuis l’aéroport de La Havane ?",
        answer:
          "Oui, nous assurons des transferts privés depuis l’aéroport José Martí vers toute destination à Cuba, dont Varadero, Viñales, Cayo Santa María, etc.",
      },
      {
        question:
          "Combien coûte un taxi de l’aéroport de Varadero à La Havane ?",
        answer:
          "Le prix d’un transfert privé commence à 100 USD par véhicule. Consultez la liste complète sur notre [blog](/blog/how-much-is-a-taxi-in-cuba).",
      },
      {
        question: "Les prix sont-ils par personne ou par véhicule ?",
        answer:
          "Tous les prix affichés sont par véhicule privé, quel que soit le nombre de passagers (dans la limite de capacité).",
      },
      {
        question:
          "Puis-je payer en dollars, euros ou en monnaie locale (CUP) ?",
        answer:
          "Oui, nous acceptons USD, EUR et CUP. Choisissez l’option la plus pratique lors de la confirmation.",
      },
      {
        question: "Que se passe-t-il si mon vol est retardé ?",
        answer:
          "Nous suivons votre arrivée. En cas de retard, votre chauffeur vous attendra sans frais supplémentaires, si le numéro de vol est correct.",
      },
      {
        question:
          "Proposez-vous des excursions privées en plus des transferts ?",
        answer:
          "Oui, vous pouvez réserver des excursions privées, par exemple à Viñales, Cienfuegos et Trinidad.",
      },
      {
        question:
          "Quels types de véhicules proposez-vous pour les transferts ?",
        answer:
          "Vous pouvez choisir des voitures classiques, des cabriolets, des véhicules modernes ou des minivans selon vos préférences et le nombre de passagers.",
      },
      {
        question:
          "Puis-je demander un transfert de nuit ?",
        answer:
          "Oui, service taxi 24/7. Les transferts de nuit peuvent inclure un léger supplément.",
      },
      {
        question:
          "Comment savoir si mon transfert est confirmé ?",
        answer:
          "Vous recevrez une confirmation via WhatsApp ou email avec les détails du trajet et le nom du chauffeur.",
      },
    ],
  },
  locations: [
    "Aéroport de La Havane",
    "Aéroport de Varadero",
    "Varadero",
    "La Havane",
    "Cayo Coco",
    "Cienfuegos",
    "Santa Clara",
    "Trinidad",
    "Viñales",
    "Cayo Santa María",
    "Cayo Guillermo",
  ],
  vehicles: ["Voiture classique", "Tour", "Van"],
  clipboardTemplate: {
    copied:
      "✅ Modèle copié. Collez-le dans le chat Telegram",
    error:
      "❌ Une erreur est survenue lors de la préparation de la réservation",
  },
  howMuchIsATaxi:
    "Combien coûte un taxi à Cuba en 2025 ?",
};
