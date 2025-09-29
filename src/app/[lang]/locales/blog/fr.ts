export const articles = {
  howMuchIsATaxiInCuba: {
    seo: {
      headline: "Tarifs des taxis à Cuba 2025",
      description:
        "Guide mis à jour des tarifs de taxi et des transferts à Cuba en 2025. Transferts aéroports La Havane (HAV) et Varadero (VRA) et liaisons interurbaines.",
      image: "https://cubantaxis.com/cuba-cabs.jpg",
      mainEntityOfPage: "https://cubantaxis.com/blog/taxi-cuba-2025",
      authorName: "Cuban Taxis",
      publisherName: "Cuban Taxis",
      publisherLogo: "https://cubantaxis.com/logo.png",
    },
    ui: {
      heroSizes: "(min-width: 1024px) 900px, 100vw",
      bgGradientClass: "bg-gradient-to-b",
      tableNote:
        "Les prix sont par voiture (service privé). Le tarif final dépend du type de véhicule (classique/moderne ou minivan), du point de prise en charge, des suppléments de nuit et des arrêts optionnels.",
      ctaAltQuestion:
        "Besoin d’un autre trajet ou d’un cabriolet classique pour un tour de ville ?",
    },
    breadcrumb: {
      homeLabel: "Accueil",
      blogLabel: "Blog",
      current: "Tarifs des taxis à Cuba 2025",
    },
    badges: [
      { label: "Tarifs 2025", tone: "accent" },
      { label: "Transferts privés", tone: "primary" },
      { label: "Chauffeurs anglophones", tone: "primary" },
    ],
    hero: {
      h1: "Combien coûte un taxi à Cuba en 2025 ?",
      introP1:
        "Guide actualisé des prix des taxis et transferts à Cuba. Tarifs réels depuis La Havane (HAV / José Martí) et Varadero (VRA) vers Varadero, Viñales, Trinidad, Cienfuegos et plus. Prix fixes par voiture, pas par personne.",
      ctaPrimary: { label: "Réserver un transfert privé", href: "/cuba-taxi-booking" },
      ctaSecondary: { label: "Voir le tableau des prix", href: "#prices" },
      subNotePrefix: "Mis à jour",
      subNoteSuffix: "· Prix par voiture (classique/moderne ou minivan)",
      heroImage: {
        src: "/cuba-cabs.jpg",
        alt: "Taxi classique à La Havane, Cuba",
        width: 900,
        height: 630,
      },
    },
    valueProps: [
      { title: "Tarification transparente", desc: "Devis confirmés pour aéroports et trajets interurbains. Pas de frais cachés." },
      { title: "Le bon véhicule pour vous", desc: "Voitures classiques pour les visites ou minivans confortables pour les familles." },
      { title: "Prises en charge fiables", desc: "Chauffeurs anglophones et suivi des vols pour les arrivées." },
    ],
    prices: {
      title: "Tarifs taxi à Cuba par trajet (2025)",
      intro:
        "Les prix sont par voiture (service privé). Le tarif final dépend du type de véhicule, du point de prise en charge, des suppléments de nuit et des arrêts optionnels.",
      columns: { route: "Trajet", classicModern: "Classique / Moderne", minivan: "Minivan", notes: "Notes" },
      rows: [
        { route: "Aéroport La Havane (HAV) → Centre-ville", classicModern: "$30", minivan: "$55", notes: "Transfert d’arrivée typique" },
        { route: "La Havane → Varadero", classicModern: "$100", minivan: "$180", notes: "Aller-retour le jour même possible" },
        { route: "La Havane → Viñales", classicModern: "$130", minivan: "$200", notes: "Aller-retour sur demande" },
        { route: "La Havane → Trinidad", classicModern: "$250", minivan: "$320", notes: "Option via Cienfuegos" },
        { route: "Varadero → Cienfuegos", classicModern: "$120", minivan: "$205" },
        { route: "Varadero → Trinidad", classicModern: "$250", minivan: "$270" },
        { route: "Aéroport Varadero (VRA) → Hôtels", classicModern: "$40", minivan: "$60–70" },
      ],
      footnote:
        "Les prix peuvent varier pour les prises en charge éloignées du KM-0 de La Havane (Capitole) et en horaires de nuit.",
      cta: { label: "Demander un devis", href: "/cuba-taxi-booking" },
    },
    tips: {
      whatAffects: {
        title: "Ce qui influence le prix",
        items: [
          "Distance et temps de trajet entre villes",
          "Type de véhicule : voiture classique/moderne ou minivan",
          "Jour vs nuit, parking aéroport et temps d’attente",
          "Transfert privé vs partagé et arrêts touristiques optionnels",
        ],
      },
      touristTips: {
        title: "Conseils aux voyageurs",
        paragraphPrefix:
          "Réservez à l’avance pour verrouiller un tarif fixe et communiquez votre numéro de vol pour les prises en charge à l’aéroport. Les transferts privés sont l’option la plus pratique et sûre. Vous pouvez",
        link: { label: "réserver votre taxi en ligne", href: "/private-transfer-booking" },
        paragraphSuffix: "et payer à l’arrivée.",
      },
    },
  },
}
