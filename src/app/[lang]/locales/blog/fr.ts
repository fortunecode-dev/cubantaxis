export const articles = {
  howMuchIsATaxiInCuba: {
    seo: {
      headline: "Tarifs des taxis à Cuba 2025",
      description:
        "Guide mis à jour des tarifs de taxi et des transferts à Cuba en 2025. Transferts aéroports La Havane (HAV) et Varadero (VRA) et liaisons interurbaines.",
      image: "https://cubantaxis.com/cuba-cabs.jpg",
      mainEntityOfPage: "https://cubantaxis.com/blog/taxi-cuba-2025",
      authorName: "CubanTaxis",
      publisherName: "CubanTaxis",
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
        { route: "Aéroport Varadero (VRA) → Hôtels", classicModern: "$40", minivan: "$70" },
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
  }, "privateTaxiOrCarRental": {
    "seo": {
      "headline": "Taxi privé ou location de voiture — Que choisir pour voyager à Cuba ?",
      "description": "Comparez les taxis privés et la location de voitures à Cuba. Découvrez quelle option convient à votre style de voyage, budget et confort pour des trajets depuis La Havane, Varadero, Trinidad ou Viñales.",
      "image": "https://cubantaxis.com/blog/private-taxi-vs-car-rental.png",
      "mainEntityOfPage": "https://cubantaxis.com/blog/private-taxi-vs-car-rental-cuba",
      "authorName": "Cuban Taxis",
      "publisherName": "Cuban Taxis",
      "publisherLogo": "https://cubantaxis.com/logo.png"
    },
    "ui": {
      "heroSizes": "(min-width: 1024px) 900px, 100vw",
      "comparisonNote": "Tous les prix sont par voiture (service privé). Basés sur des transferts standards en véhicules modernes ou classiques. Des suppléments de nuit ou longue distance peuvent s'appliquer.",
      "ctaAltQuestion": "Besoin d'un transfert privé ou souhaitez-vous combiner les deux options dans votre itinéraire ?"
    },
    "breadcrumb": {
      "homeLabel": "Accueil",
      "blogLabel": "Blog",
      "current": "Taxi privé ou location de voiture — Que choisir ?"
    },
    "badges": [
      { "label": "Conseils de voyage", "tone": "accent" },
      { "label": "Transferts Cuba", "tone": "primary" },
      { "label": "Mise à jour 2025", "tone": "neutral" }
    ],
    "hero": {
      "h1": "Taxi privé ou location de voiture — Que choisir pour voyager à Cuba ?",
      "introP1": "Vous hésitez entre réserver un taxi privé ou louer une voiture à Cuba ? Voici un guide détaillé comparant confort, coût, flexibilité et commodité pour des trajets comme La Havane–Varadero, Viñales et Trinidad.",
      "ctaPrimary": { "label": "Réserver un taxi privé", "href": "/cuba-taxi-booking" },
      "ctaSecondary": { "label": "Voir les prix par itinéraire", "href": "#comparison" },
      "subNotePrefix": "Mis à jour 2025",
      "subNoteSuffix": "· Prix par voiture (classique/moderne ou minivan)",
      "heroImage": {
        "src": "/private-taxi-vs-car-rental.png",
        "alt": "Voyageur choisissant entre taxi privé et location de voiture à Cuba",
        "width": 900,
        "height": 630
      }
    },
    "valueProps": [
      { "title": "Tarification transparente", "desc": "Devis confirmés pour aéroports et trajets interurbains. Aucuns frais cachés." },
      { "title": "Véhicule adapté", "desc": "Voitures classiques pour les visites urbaines ou minivans confortables pour les familles." },
      { "title": "Prises en charge fiables", "desc": "Chauffeurs anglophones et suivi des vols pour les arrivées à l'aéroport." }
    ],
    "sections": {
      "privateTaxi": {
        "title": "Taxi privé : confort sans stress",
        "paragraph1": "Un taxi privé à Cuba offre le parfait équilibre entre confort, fiabilité et expertise locale. Idéal si vous souhaitez profiter du voyage sans vous soucier de la navigation ou de l'état des routes.",
        "advantages": [
          "Pas besoin de conduire — votre chauffeur local s'occupe de tout.",
          "Prix fixes par trajet évitent les coûts cachés ou les surprises de carburant.",
          "Flexibilité pour s'arrêter pour des photos ou un repas en chemin.",
          "Chauffeurs bilingues connaissant les meilleurs endroits de Cuba."
        ],
        "samplePrices": [
          { "route": "La Havane → Varadero", "price": "à partir de $100 (voiture moderne) / $180 (minivan)" },
          { "route": "La Havane → Viñales", "price": "$180–$200" },
          { "route": "La Havane → Cayo Santa María", "price": "$350 (voiture privée)" }
        ],
        "bestFor": "Couples, familles ou voyageurs cherchant une expérience détendue avec un service porte-à-porte fiable."
      },
      "carRental": {
        "title": "Location de voiture : la liberté implique des responsabilités",
        "paragraph1": "Louer une voiture à Cuba offre une indépendance totale pour explorer à votre rythme. Cependant, cela nécessite préparation et tolérance face aux défis routiers de l'île.",
        "pros": [
          "Liberté totale pour choisir votre itinéraire et vos horaires.",
          "Idéal pour les longs séjours ou les destinations hors des sentiers battus.",
          "Parfait pour les voyageurs en quête d'aventure."
        ],
        "cons": [
          "Disponibilité limitée des véhicules, surtout en haute saison.",
          "Problèmes d'entretien ou de confort avec des modèles de location plus anciens.",
          "Coûts cachés : assurance, dépôts et carburant.",
          "Difficultés de navigation et faible couverture mobile en zones rurales."
        ],
        "estimatedCosts": "Les voitures de location à Cuba coûtent généralement $70–$120 par jour, plus l'assurance et le carburant. Un séjour de 5 jours peut dépasser $500, similaire à l'embauche d'un chauffeur privé."
      },
      "comparison": {
        "title": "Comparaison coûts & confort — Aller-retour La Havane ↔ Varadero",
        "table": {
          "columns": ["Option", "Prix total", "Confort", "Flexibilité", "Effort"],
          "rows": [
            { "option": "Taxi privé", "totalPrice": "$100–$180", "comfort": "★★★★★", "flexibility": "★★★★☆", "effort": "Minimal" },
            { "option": "Location de voiture", "totalPrice": "$150–$250", "comfort": "★★★☆☆", "flexibility": "★★★★★", "effort": "Élevé" }
          ]
        },
        "verdict": "Pour la plupart des visiteurs, les taxis privés offrent un meilleur rapport qualité-prix et la tranquillité d'esprit. Les locations conviennent à ceux qui privilégient l'indépendance."
      },
      "hybridOption": {
        "title": "Tours en taxi privé — Le meilleur des deux mondes",
        "paragraph": "Si vous voulez explorer sans conduire, les tours en taxi privé sont un hybride parfait. Vous gagnez en liberté et flexibilité avec le confort d'un chauffeur local.",
        "examples": [
          "Tour de La Havane (3h) : à partir de $75–$120 par voiture",
          "Vallée de Viñales (10h) : à partir de $280–$360 par voiture"
        ],
        "cta": { "label": "Voir tous les tours", "href": "/destinations-in-cuba" }
      },
      "conclusion": {
        "title": "Conclusion — Lequel choisir ?",
        "paragraph1": "Taxis privés et locations ont leurs mérites. Le bon choix dépend de votre personnalité de voyageur et de vos objectifs.",
        "bulletSummary": [
          "Choisissez un taxi privé pour sécurité, confort et connaissance locale.",
          "Choisissez une location si vous aimez la liberté et acceptez les défis."
        ],
        "closingNote": "Quel que soit votre choix, chaque route cubaine raconte une histoire — des convertibles rétro de La Havane aux paisibles vallées de Viñales."
      }
    },
    "prices": {
      "title": "Tarifs des taxis à Cuba par trajet (2025)",
      "intro": "Les prix sont par voiture (service privé). Le devis final dépend du type de véhicule (classique/moderne ou minivan), du point de prise en charge, des suppléments nocturnes et des arrêts optionnels.",
      "columns": { "route": "Trajet", "classicModern": "Classique / Moderne", "minivan": "Minivan", "notes": "Remarques" },
      "rows": [
        { "route": "Aéroport de La Havane (HAV) → Centre-ville", "classicModern": "$30", "minivan": "$55", "notes": "Transfert typique d'arrivée" },
        { "route": "La Havane → Varadero", "classicModern": "$100", "minivan": "$180", "notes": "Retour le même jour possible" },
        { "route": "La Havane → Viñales", "classicModern": "$130", "minivan": "$200", "notes": "Aller-retour sur demande" },
        { "route": "La Havane → Trinidad", "classicModern": "$250", "minivan": "$320", "notes": "Via Cienfuegos optionnel" },
        { "route": "Varadero → Cienfuegos", "classicModern": "$120", "minivan": "$205", "notes": "" },
        { "route": "Varadero → Trinidad", "classicModern": "$250", "minivan": "$270", "notes": "" },
        { "route": "Aéroport de Varadero (VRA) → Hôtels", "classicModern": "$40", "minivan": "$70", "notes": "" }
      ],
      "footnote": "Les prix peuvent varier pour les prises en charge loin du KM-0 de La Havane (Capitolio) et pour les heures nocturnes.",
      "cta": { "label": "Obtenir un devis", "href": "/cuba-taxi-booking" }
    },
    "tips": {
      "whatAffects": {
        "title": "Ce qui influence le prix",
        "items": [
          "Distance et durée du trajet entre les villes",
          "Type de véhicule : voiture classique/moderne ou minivan",
          "Prises en charge de jour vs. nuit, parking aéroportuaire et temps d'attente",
          "Transfert privé vs partagé et arrêts touristiques optionnels"
        ]
      },
      "touristTips": {
        "title": "Conseils pour les voyageurs",
        "paragraphPrefix": "Réservez à l'avance pour fixer un tarif et partagez votre numéro de vol pour les prises en charge à l'aéroport. Les transferts privés sont l'option la plus pratique et sûre. Vous pouvez",
        "link": { "label": "réserver votre taxi en ligne", "href": "/private-transfer-booking" },
        "paragraphSuffix": "et payer à l'arrivée."
      }
    },
    "ctaFooter": {
      "text": "Prêt à planifier votre prochaine route à Cuba ?",
      "primary": { "label": "Réserver un transfert", "href": "/cuba-taxi-booking" },
      "secondary": { "label": "Explorer les tours privés", "href": "/destinations-in-cuba" }
    }
  }
}
