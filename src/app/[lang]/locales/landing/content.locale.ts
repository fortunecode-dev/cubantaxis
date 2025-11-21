export const mainSeo = {
  en: {
    container: "mx-auto max-w-7xl px-4 py-10 md:py-14",
    sections: [
      {
        id: "online-taxi",
        headingLevel: "h2",
        title: "Book Taxi Online in Cuba: Fast, Safe, Transparent",
        text: `Booking a taxi in Cuba used to be complicated—until now. With CubanTaxis you see the price before you ride, get confirmations via WhatsApp/Telegram, and choose modern sedans, classic cars, or minivans. English-speaking support makes planning easy.`,
        bullets: [
          "Upfront pricing, no surprises.",
          "Door-to-door pickups and airport meet & greet.",
          "Pay online or upon pickup—your choice.",
        ],

        // TODO placeholders for links you will add later
        media: {
          src: "/online-taxi-havana-classic.jpg",
          alt: "Online taxi booking in Cuba with a classic car ready in Old Havana",
        },
        reverse: false as const,
      },
      {
        id: "car-rental-vs-taxi",
        headingLevel: "h3",
        title: "Private Taxi or Car Rental—What’s Better?",
        text: `For most trips, private taxis win on convenience and price: no deposit, fuel lines, or hidden costs. For long multi-day driving, a rental can make sense—but for airport transfers and intercity rides, taxis are simpler and often cheaper. Get a professional driver who knows the best way to travel in Cuba. Come to enjoy, not to drive.`,
        table: {
          headers: ["Route", "Car Rental (avg)", "CubanTaxis"],
          rows: [
            ["Havana → Varadero", "$110/day", "$80 one-way"],
            ["Havana → Cayo Coco", "$280/day", "$250 one-way"],
          ],
          note: "Example estimates (per car). Actual price varies by vehicle and schedule.",
        },
        todos: [
          {
            label: "Car rental vs taxi",
            href: "/blog/private-taxi-or-car-rental",
          }, {
            label: "How much is a taxi in Cuba",
            href: "/blog/how-much-is-a-taxi-in-cuba",
            lang: "en",
          },
        ],

        media: {
          src: "/car-rental-vs-taxi.jpg",
          alt: "Comparing private taxi vs car rental in Cuba",
        },
        reverse: true as const,
      },
      {
        id: "landmarks",
        headingLevel: "h2",
        title: "Top Landmarks to Visit by Taxi",
        text: `Cuba is more than beaches—it’s music, colonial architecture, and sweeping valleys. Taxis let you stitch must-see spots into a single day without juggling public transport or tours with fixed schedules.`,
        bulletsGrid: [
          "Old Havana (Habana Vieja)",
          "Viñales Valley",
          "Varadero Beach",
          "Trinidad",
          "Cienfuegos",
          "El Capitolio, Havana",
        ],
        media: {
          src: "/landmarks-vinales-trinidad.webp",
          alt: "Viñales Valley and Trinidad colonial streets, landmark taxi day trip",
        },
        reverse: false as const,
        todos: [
          {
            label: "Destinations in Cuba",
            href: "/destinations-in-cuba"
          },
          {
            label: "Interesting places in Cuba",
            href: "/interesting-places-in-cuba"
          }
        ],
      },
      {
        id: "cities",
        headingLevel: "h3",
        title: "Major Cities & Easiest Ways to Travel",
        text: `From cosmopolitan Havana to calm Cienfuegos, intercity taxis are the easiest way to hop between Cuba’s big cities—on your schedule, with luggage help, and fewer transfers.`,
        ordered: [
          "Havana – Capital & cultural hub",
          "Santiago de Cuba – Music & history",
          "Holguín – Eastern tourism center",
          "Santa Clara – Historic heartland",
          "Cienfuegos – Elegant southern city",
        ],
        media: {
          src: "/cities-havana-cienfuegos.webp",
          alt: "Havana and Cienfuegos cityscapes connected by private taxi",
        },
        reverse: true as const,
      },
      {
        id: "airports",
        headingLevel: "h2",
        title: "From the Airport to Your Hotel—Made Easy",
        text: `New visitors often ask how to get from the airport to the hotel. Our drivers wait at arrivals, help with luggage, and drive you straight to your door. You’ll see the price before you ride.`,
        list: [
          "Havana (HAV) → Old Havana, Vedado, Miramar",
          "Varadero (VRA) → Resorts and Airbnb stays",
          "Santa Clara (SNU) → Gateway to Cayo Santa María",
          "Cayo Coco (CYO) → All-inclusive resorts",
        ],
        table: {
          headers: ["Route", "From (USD)", "Duration"],
          rows: [
            ["HAV → Old Havana", "$30", "~30 min"],
            ["HAV → Varadero", "$80", "~2–2.5 h"],
            ["VRA → Varadero hotels", "$40–70", "~30–45 min"],
            ["CYO → Trinidad", "$180", "~3 h 30 m"],
          ],
          note: "Per-car estimates; exact prices depend on vehicle and schedule.",
        },
        media: {
          src: "/airport-arrivals-cuba.jpg",
          alt: "Driver meeting passengers at airport arrivals in Cuba",
        },
        reverse: false as const,
      },
      {
        id: "best-time",
        headingLevel: "h2",
        title: "Best Time to Visit Cuba",
        text: `Cuba shines all year. High season (Nov–Apr) brings perfect beach weather and higher demand; low season (May–Oct) has occasional rain but better prices and fewer crowds. Book taxis early for smooth travel.`,
        media: {
          src: "/best-time-to-visit.jpg",
          alt: "Sunny season in Cuba great for beaches and sightseeing",
        },
        reverse: true as const,
      },
      {
        id: "tours",
        headingLevel: "h2",
        title: "Private Taxi Tours: Landmarks at Your Pace",
        text: `Make the most of one day with flexible stops and local insight. Popular choices: Viñales (tobacco farms, horseback riding), East-Beaches loop from Havana, and landmark-rich Trinidad & Cienfuegos.`,
        bullets: [
          "Viñales Valley full-day (approx. 10–11 h; optional horseback riding, museum stops).",
          "Havana → Playas del Este → Havana (approx. 5–6 h; flexible beach choice).",
          "Trinidad & Cienfuegos photo tour (colonial plazas, seaside boulevards).",
        ],
        smallNote: "Tours are priced per car; guide available on request.",
        media: {
          src: "/taxi-tours-vinales.jpg",
          alt: "Private taxi tour through Viñales Valley tobacco farms",
        },
        reverse: false as const,
      },
    ],
    priceSnapshot: {
      title: "Popular Private Transfer Estimates (per car)",
      headers: ["From", "To", "Modern / Classic", "Minivan", "Approx. Time"],
      rows: [
        ["Havana Airport", "Old Havana", "$30–55", "—", "~30 min"],
        ["Havana Airport", "Varadero", "$80–100", "$170–180", "~2–2.5 h"],
        ["Varadero Airport", "Varadero Hotels", "$40", "$75", "~30–45 min"],
        ["Havana", "Cienfuegos / Trinidad", "$155–250", "$220–325", "~3–4.5 h"],
      ],
      note: "Exact price depends on schedule and vehicle. Ask for a fixed quote before booking.",
    },
  },
  es: {
    container: "mx-auto max-w-7xl px-4 py-10 md:py-14",
    sections: [
      {
        id: "online-taxi",
        headingLevel: "h2",
        title: "Reserva taxi online en Cuba: rápido, seguro y transparente",
        text: `Reservar un taxi en Cuba solía ser complicado… hasta ahora. Con CubanTaxis ves el precio antes de viajar, recibes confirmaciones por WhatsApp o Telegram y eliges entre autos modernos, clásicos o minivanes. Soporte en inglés y español que facilita la planificación.`,
        bullets: [
          "Precios claros, sin sorpresas.",
          "Recogida puerta a puerta y bienvenida en el aeropuerto.",
          "Paga online o al recoger el taxi: tú eliges.",
        ],

        media: {
          src: "/online-taxi-havana-classic.jpg",
          alt: "Reserva de taxi online en Cuba con auto clásico en La Habana Vieja",
        },
        reverse: false as const,
      },
      {
        id: "car-rental-vs-taxi",
        headingLevel: "h3",
        title: "Taxi privado o coche de alquiler: ¿qué conviene más?",
        text: `Para la mayoría de los viajes, los taxis privados ganan por comodidad y precio: sin depósitos, sin colas de combustible ni costos ocultos. Para recorridos largos de varios días, puede convenir un alquiler, pero para traslados de aeropuerto y viajes entre ciudades, el taxi es más simple y económico. Obtén un chofer profesional que conoce las mejores rutas de Cuba. Ven a disfrutar, no a manejar.`,
        table: {
          headers: ["Ruta", "Alquiler (prom.)", "CubanTaxis"],
          rows: [
            ["La Habana → Varadero", "$110/día", "$80 ida"],
            ["La Habana → Cayo Coco", "$280/día", "$250 ida"],
          ],
          note: "Precios de ejemplo (por coche). El costo real varía según vehículo y horario.",
        },
        todos: [
          {
            label: "Alquiler de coche vs taxi",
            href: "/es/blog/private-taxi-or-car-rental",
          }, {
            label: "¿Cuánto cuesta un taxi en Cuba?",
            href: "/es/blog/how-much-is-a-taxi-in-cuba",
            lang: "es",
          },

        ],
        media: {
          src: "/car-rental-vs-taxi.jpg",
          alt: "Comparación entre taxi privado y coche de alquiler en Cuba",
        },
        reverse: true as const,
      },
      {
        id: "landmarks", todos: [
          {
            label: "Destinos en Cuba",
            href: "/es/destinos-en-cuba"
          },
          {
            label: "Lugares interesantes en Cuba",
            href: "/es/lugares-interesantes-en-cuba"
          }
        ],
        headingLevel: "h2",
        title: "Lugares imprescindibles para visitar en taxi",
        text: `Cuba es mucho más que playas: es música, arquitectura colonial y valles espectaculares. Los taxis te permiten unir varios destinos icónicos en un solo día sin depender del transporte público o tours con horarios fijos.`,
        bulletsGrid: [
          "La Habana Vieja",
          "Valle de Viñales",
          "Playa de Varadero",
          "Trinidad",
          "Cienfuegos",
          "El Capitolio, La Habana",
        ],

        media: {
          src: "/landmarks-vinales-trinidad.webp",
          alt: "Valle de Viñales y calles coloniales de Trinidad, recorrido en taxi",
        },
        reverse: false as const,
      },
      {
        id: "cities",
        headingLevel: "h3",
        title: "Principales ciudades y cómo viajar entre ellas",
        text: `Desde la cosmopolita La Habana hasta la tranquila Cienfuegos, los taxis interprovinciales son la forma más cómoda de moverse entre las grandes ciudades de Cuba: con tu propio horario, ayuda con el equipaje y sin transbordos.`,
        ordered: [
          "La Habana – Capital y centro cultural",
          "Santiago de Cuba – Música e historia",
          "Holguín – Centro turístico del oriente",
          "Santa Clara – Corazón histórico",
          "Cienfuegos – Ciudad elegante del sur",
        ],

        media: {
          src: "/cities-havana-cienfuegos.webp",
          alt: "Paisajes urbanos de La Habana y Cienfuegos conectadas por taxi privado",
        },
        reverse: true as const,
      },
      {
        id: "airports",
        headingLevel: "h2",
        title: "Del aeropuerto al hotel — fácil y directo",
        text: `Muchos visitantes se preguntan cómo llegar del aeropuerto al alojamiento. Nuestros choferes te esperan en llegadas, ayudan con el equipaje y te llevan directo a tu destino. Siempre verás el precio antes de subir.`,
        list: [
          "La Habana (HAV) → Habana Vieja, Vedado, Miramar",
          "Varadero (VRA) → Resorts y casas particulares",
          "Santa Clara (SNU) → Acceso a Cayo Santa María",
          "Cayo Coco (CYO) → Resorts todo incluido",
        ],
        table: {
          headers: ["Ruta", "Desde (USD)", "Duración"],
          rows: [
            ["HAV → Habana Vieja", "$30", "~30 min"],
            ["HAV → Varadero", "$80", "~2–2.5 h"],
            ["VRA → Hoteles Varadero", "$40–70", "~30–45 min"],
            ["CYO → Trinidad", "$180", "~3 h 30 min"],
          ],
          note: "Precios por coche; dependen del vehículo y el horario.",
        },

        media: {
          src: "/airport-arrivals-cuba.jpg",
          alt: "Chofer esperando pasajeros en el aeropuerto de Cuba",
        },
        reverse: false as const,
      },
      {
        id: "best-time",
        headingLevel: "h2",
        title: "Mejor época para visitar Cuba",
        text: `Cuba brilla todo el año. La temporada alta (nov–abr) ofrece clima perfecto de playa y más demanda; la baja (may–oct) tiene lluvias ocasionales pero mejores precios y menos turistas. Reserva tu taxi con antelación para viajar sin contratiempos.`,

        media: {
          src: "/best-time-to-visit.jpg",
          alt: "Temporada soleada ideal para playas y excursiones en Cuba",
        },
        reverse: true as const,
      },
      {
        id: "tours",
        headingLevel: "h2",
        title: "Tours privados en taxi: conoce Cuba a tu ritmo",
        text: `Aprovecha el día al máximo con paradas flexibles y guía local. Los más populares: Viñales (fincas de tabaco y paseo a caballo), circuito Playas del Este desde La Habana y recorrido fotográfico por Trinidad y Cienfuegos.`,
        bullets: [
          "Excursión completa a Viñales (10–11 h; paseo a caballo opcional, paradas en museos).",
          "La Habana → Playas del Este → La Habana (5–6 h; playa a elección).",
          "Tour fotográfico Trinidad & Cienfuegos (plazas coloniales, paseos marítimos).",
        ],
        smallNote:
          "Los tours se cotizan por coche; guía disponible bajo solicitud.",

        media: {
          src: "/taxi-tours-vinales.jpg",
          alt: "Tour privado en taxi por el Valle de Viñales y sus plantaciones de tabaco",
        },
        reverse: false as const,
      },
    ],
    priceSnapshot: {
      title: "Precios estimados de traslados privados (por coche)",
      headers: [
        "Desde",
        "Hasta",
        "Moderno / Clásico",
        "Minivan",
        "Tiempo aprox.",
      ],
      rows: [
        ["Aeropuerto de La Habana", "Habana Vieja", "$30–55", "—", "~30 min"],
        [
          "Aeropuerto de La Habana",
          "Varadero",
          "$80–100",
          "$170–180",
          "~2–2.5 h",
        ],
        [
          "Aeropuerto de Varadero",
          "Hoteles Varadero",
          "$40",
          "$75",
          "~30–45 min",
        ],
        [
          "La Habana",
          "Cienfuegos / Trinidad",
          "$155–250",
          "$220–325",
          "~3–4.5 h",
        ],
      ],
      note: "El precio exacto depende del horario y del vehículo. Solicita una cotización fija antes de reservar.",
    },
  },
  fr: {
    container: "mx-auto max-w-7xl px-4 py-10 md:py-14",
    sections: [
      {
        id: "online-taxi",
        headingLevel: "h2",
        title: "Réservez un taxi en ligne à Cuba : rapide, sûr et transparent",
        text: `Réserver un taxi à Cuba était autrefois compliqué… jusqu’à aujourd’hui. Avec CubanTaxis, vous voyez le prix avant le trajet, recevez la confirmation par WhatsApp ou Telegram et choisissez entre voitures modernes, voitures classiques ou minivans. Un service client anglophone et francophone facilite vos plans.`,
        bullets: [
          "Tarifs clairs, pas de mauvaises surprises.",
          "Prise en charge porte à porte et accueil à l’aéroport.",
          "Payez en ligne ou à la prise en charge — à votre convenance.",
        ],

        media: {
          src: "/online-taxi-havana-classic.jpg",
          alt: "Réservation de taxi en ligne à Cuba avec voiture classique à La Havane",
        },
        reverse: false as const,
      },
      {
        id: "car-rental-vs-taxi",
        headingLevel: "h3",
        title: "Taxi privé ou voiture de location : que choisir ?",
        text: `Pour la plupart des trajets, le taxi privé l’emporte sur la location : pas de dépôt, pas de file d’attente pour l’essence, ni de frais cachés. Pour les longs trajets sur plusieurs jours, la location peut être utile, mais pour les transferts aéroport et les trajets interurbains, le taxi est plus simple et souvent moins cher. Voyagez avec un chauffeur professionnel qui connaît les meilleures routes de Cuba.`,
        table: {
          headers: ["Trajet", "Location (moyenne)", "CubanTaxis"],
          rows: [
            ["La Havane → Varadero", "$110/jour", "$80 aller simple"],
            ["La Havane → Cayo Coco", "$280/jour", "$250 aller simple"],
          ],
          note: "Estimations par voiture. Les prix réels varient selon le véhicule et l’horaire.",
        },
        todos: [
          {
            label: "Location de voiture vs taxi",
            href: "/fr/blog/private-taxi-or-car-rental",
          }, {
            label: "Combien coûte un taxi à Cuba ?",
            href: "/fr/blog/how-much-is-a-taxi-in-cuba",
            lang: "fr",
          },
        ],
        media: {
          src: "/car-rental-vs-taxi.jpg",
          alt: "Comparaison taxi privé vs voiture de location à Cuba",
        },
        reverse: true as const,
      },
      {
        id: "landmarks",
        todos: [
          {
            label: "Destinations à Cuba",
            href: "/fr/destinations-a-cuba"
          },
          {
            label: "Lieux intéressants à Cuba",
            href: "/fr/lieux-interessants-a-cuba"
          }
        ],
        headingLevel: "h2",
        title: "Lieux incontournables à visiter en taxi",
        text: `Cuba, ce n’est pas seulement les plages : c’est aussi la musique, l’architecture coloniale et les vallées spectaculaires. En taxi, vous pouvez combiner plusieurs sites emblématiques en une seule journée, sans contraintes de transports ni d’horaires fixes.`,
        bulletsGrid: [
          "Vieille Havane (Habana Vieja)",
          "Vallée de Viñales",
          "Plage de Varadero",
          "Trinidad",
          "Cienfuegos",
          "Le Capitole, La Havane",
        ],

        media: {
          src: "/landmarks-vinales-trinidad.webp",
          alt: "Vallée de Viñales et rues coloniales de Trinidad",
        },
        reverse: false as const,
      },
      {
        id: "cities",
        headingLevel: "h3",
        title: "Grandes villes et meilleures façons de voyager",
        text: `De La Havane cosmopolite à Cienfuegos tranquille, les taxis interurbains sont le moyen le plus pratique pour voyager entre les principales villes de Cuba — à votre rythme, avec aide pour les bagages et sans correspondances.`,
        ordered: [
          "La Havane – Capitale et centre culturel",
          "Santiago de Cuba – Musique et histoire",
          "Holguín – Centre touristique de l’Est",
          "Santa Clara – Cœur historique",
          "Cienfuegos – Élégante ville du sud",
        ],

        media: {
          src: "/cities-havana-cienfuegos.webp",
          alt: "Vues urbaines de La Havane et Cienfuegos reliées par taxi privé",
        },
        reverse: true as const,
      },
      {
        id: "airports",
        headingLevel: "h2",
        title: "De l’aéroport à votre hôtel — sans stress",
        text: `Les nouveaux visiteurs se demandent souvent comment aller de l’aéroport à l’hôtel. Nos chauffeurs vous attendent à l’arrivée, aident avec les bagages et vous conduisent directement à votre hébergement. Vous connaissez le prix à l’avance.`,
        list: [
          "La Havane (HAV) → Vieille Havane, Vedado, Miramar",
          "Varadero (VRA) → Hôtels et Airbnb",
          "Santa Clara (SNU) → Accès à Cayo Santa María",
          "Cayo Coco (CYO) → Resorts tout compris",
        ],
        table: {
          headers: ["Trajet", "À partir de (USD)", "Durée"],
          rows: [
            ["HAV → Vieille Havane", "$30", "~30 min"],
            ["HAV → Varadero", "$80", "~2–2.5 h"],
            ["VRA → Hôtels Varadero", "$40–70", "~30–45 min"],
            ["CYO → Trinidad", "$180", "~3 h 30"],
          ],
          note: "Prix estimés par voiture ; varient selon le véhicule et l’horaire.",
        },

        media: {
          src: "/airport-arrivals-cuba.jpg",
          alt: "Chauffeur accueillant des voyageurs à l’aéroport de Cuba",
        },
        reverse: false as const,
      },
      {
        id: "best-time",
        headingLevel: "h2",
        title: "Meilleure période pour visiter Cuba",
        text: `Cuba est agréable toute l’année. La haute saison (nov–avr) offre un temps parfait et plus d’affluence ; la basse saison (mai–oct) apporte quelques pluies, mais aussi des prix plus bas et moins de touristes. Réservez tôt vos taxis pour voyager sereinement.`,

        media: {
          src: "/best-time-to-visit.jpg",
          alt: "Saison ensoleillée idéale pour les plages et les visites à Cuba",
        },
        reverse: true as const,
      },
      {
        id: "tours",
        headingLevel: "h2",
        title: "Visites privées en taxi : découvrez Cuba à votre rythme",
        text: `Profitez au maximum de votre journée avec des arrêts flexibles et des conseils locaux. Options populaires : Viñales (fermes de tabac, cheval), circuit des plages de l’Est depuis La Havane, ou encore Trinidad & Cienfuegos.`,
        bullets: [
          "Excursion Viñales journée complète (10–11 h ; balade à cheval et musées en option).",
          "La Havane → Plages de l’Est → retour (5–6 h ; plage au choix).",
          "Tour photo Trinidad & Cienfuegos (places coloniales, front de mer).",
        ],
        smallNote: "Tarifs par voiture ; guide disponible sur demande.",

        media: {
          src: "/taxi-tours-vinales.jpg",
          alt: "Excursion en taxi à travers la vallée de Viñales",
        },
        reverse: false as const,
      },
    ],
    priceSnapshot: {
      title: "Tarifs estimés des transferts privés (par voiture)",
      headers: ["De", "À", "Moderne / Classique", "Minivan", "Durée approx."],
      rows: [
        ["Aéroport La Havane", "Vieille Havane", "$30–55", "—", "~30 min"],
        ["Aéroport La Havane", "Varadero", "$80–100", "$170–180", "~2–2.5 h"],
        ["Aéroport Varadero", "Hôtels Varadero", "$40", "$75", "~30–45 min"],
        [
          "La Havane",
          "Cienfuegos / Trinidad",
          "$155–250",
          "$220–325",
          "~3–4.5 h",
        ],
      ],
      note: "Prix exact selon horaire et véhicule. Demandez un devis avant la réservation.",
    },
  },
  de: {
    container: "mx-auto max-w-7xl px-4 py-10 md:py-14",
    sections: [
      {
        id: "online-taxi",
        headingLevel: "h2",
        title: "Taxi online in Kuba buchen: schnell, sicher, transparent",
        text: `Ein Taxi in Kuba zu buchen war früher kompliziert – bis jetzt. Mit CubanTaxis siehst du den Preis vor der Fahrt, erhältst Bestätigungen per WhatsApp/Telegram und wählst zwischen modernen Limousinen, Oldtimern oder Minivans. Englischsprachiger Support macht die Planung einfach.`,
        bullets: [
          "Klare Festpreise, keine Überraschungen.",
          "Abholung von Tür zu Tür und Begrüßung am Flughafen.",
          "Bezahlen online oder bei Abholung – du entscheidest.",
        ],

        media: {
          src: "/online-taxi-havana-classic.jpg",
          alt: "Online-Taxibuchung in Kuba mit Oldtimer in Alt-Havanna",
        },
        reverse: false as const,
      },
      {
        id: "car-rental-vs-taxi",
        headingLevel: "h3",
        title: "Privattaxi oder Mietwagen – was ist besser?",
        text: `Für die meisten Strecken punkten Privattaxis bei Komfort und Preis: keine Kaution, keine Benzinschlange, keine versteckten Kosten. Für lange Mehrtagesfahrten kann ein Mietwagen sinnvoll sein – aber für Flughafen-Transfers und Fahrten zwischen Städten sind Taxis einfacher und oft günstiger. Fahr mit Profi-Fahrern, die die besten Routen in Kuba kennen. Komm, um zu genießen – nicht um zu fahren.`,
        table: {
          headers: ["Route", "Mietwagen (Ø)", "CubanTaxis"],
          rows: [
            ["Havanna → Varadero", "$110/Tag", "$80 einfache Fahrt"],
            ["Havanna → Cayo Coco", "$280/Tag", "$250 einfache Fahrt"],
          ],
          note: "Beispielwerte (pro Auto). Der tatsächliche Preis hängt von Fahrzeug und Uhrzeit ab.",
        },
        todos: [
          {
            label: "Autovermietung vs Taxi",
            href: "/de/blog/private-taxi-or-car-rental",
          }, {
            label: "Wie viel kostet ein Taxi in Kuba?",
            href: "/de/blog/how-much-is-a-taxi-in-cuba",
            lang: "de",
          },
        ],
        media: {
          src: "/car-rental-vs-taxi.jpg",
          alt: "Vergleich Privattaxi vs. Mietwagen in Kuba",
        },
        reverse: true as const,
      },
      {
        id: "landmarks", todos: [
          {
            label: "Reiseziele in Kuba",
            href: "/de/reiseziele-in-kuba"
          },
          {
            label: "Interessante Orte in Kuba",
            href: "/de/interessante-orte-in-kuba"
          }
        ],
        headingLevel: "h2",
        title: "Top-Sehenswürdigkeiten per Taxi",
        text: `Kuba ist mehr als Strände – es ist Musik, Kolonialarchitektur und weite Täler. Mit dem Taxi kombinierst du Must-see-Spots an einem Tag, ganz ohne ÖPNV-Stress oder starre Tourzeiten.`,
        bulletsGrid: [
          "Alt-Havanna (Habana Vieja)",
          "Tal von Viñales",
          "Strand von Varadero",
          "Trinidad",
          "Cienfuegos",
          "El Capitolio, Havanna",
        ],

        media: {
          src: "/landmarks-vinales-trinidad.webp",
          alt: "Viñales-Tal und koloniale Straßen in Trinidad",
        },
        reverse: false as const,
      },
      {
        id: "cities",
        headingLevel: "h3",
        title: "Wichtige Städte & die einfachste Art zu reisen",
        text: `Von der kosmopolitischen Hauptstadt Havanna bis zum ruhigen Cienfuegos – Fern-Taxis sind der bequemste Weg zwischen Kubas großen Städten: eigener Zeitplan, Hilfe mit Gepäck, keine Umstiege.`,
        ordered: [
          "Havanna – Hauptstadt & Kulturzentrum",
          "Santiago de Cuba – Musik & Geschichte",
          "Holguín – Tourismuszentrum des Ostens",
          "Santa Clara – Historisches Herz",
          "Cienfuegos – Elegante Stadt im Süden",
        ],

        media: {
          src: "/cities-havana-cienfuegos.webp",
          alt: "Skyline von Havanna und Cienfuegos, verbunden per Privattaxi",
        },
        reverse: true as const,
      },
      {
        id: "airports",
        headingLevel: "h2",
        title: "Vom Flughafen ins Hotel — ganz entspannt",
        text: `Neu in Kuba? Unsere Fahrer warten in der Ankunftshalle, helfen mit Gepäck und bringen dich direkt zur Tür. Den Preis siehst du vorab.`,
        list: [
          "Havanna (HAV) → Alt-Havanna, Vedado, Miramar",
          "Varadero (VRA) → Resorts und Ferienwohnungen",
          "Santa Clara (SNU) → Tor zu Cayo Santa María",
          "Cayo Coco (CYO) → All-Inclusive-Resorts",
        ],
        table: {
          headers: ["Route", "Ab (USD)", "Dauer"],
          rows: [
            ["HAV → Alt-Havanna", "$30", "~30 Min"],
            ["HAV → Varadero", "$80", "~2–2,5 Std"],
            ["VRA → Varadero-Hotels", "$40–70", "~30–45 Min"],
            ["CYO → Trinidad", "$180", "~3 Std 30 Min"],
          ],
          note: "Schätzungen pro Auto; abhängig von Fahrzeug und Uhrzeit.",
        },

        media: {
          src: "/airport-arrivals-cuba.jpg",
          alt: "Fahrer begrüßt Reisende in einem kubanischen Flughafen",
        },
        reverse: false as const,
      },
      {
        id: "best-time",
        headingLevel: "h2",
        title: "Beste Reisezeit für Kuba",
        text: `Kuba ist das ganze Jahr über reizvoll. Hochsaison (Nov–Apr): perfektes Strandwetter, höhere Nachfrage. Nebensaison (Mai–Okt): gelegentliche Schauer, dafür bessere Preise und weniger Menschen. Taxis früh buchen für reibungslose Trips.`,

        media: {
          src: "/best-time-to-visit.jpg",
          alt: "Sonnige Saison in Kuba, ideal zum Baden und Sightseeing",
        },
        reverse: true as const,
      },
      {
        id: "tours",
        headingLevel: "h2",
        title: "Private Taxi-Touren: Sehenswürdigkeiten in deinem Tempo",
        text: `Hol mehr aus einem Tag heraus – mit flexiblen Stopps und lokalem Insight. Beliebt: Viñales (Tabakfarmen, Reiten), Ost-Strände ab Havanna sowie Trinidad & Cienfuegos mit vielen Highlights.`,
        bullets: [
          "Viñales Ganztag (ca. 10–11 Std; optional Reiten, Museumsstopps).",
          "Havanna → Playas del Este → zurück (ca. 5–6 Std; Strand frei wählbar).",
          "Foto-Tour Trinidad & Cienfuegos (Kolonialplätze, Uferpromenaden).",
        ],
        smallNote: "Preise pro Auto; Guide auf Anfrage.",

        media: {
          src: "/taxi-tours-vinales.jpg",
          alt: "Private Taxi-Tour durch das Viñales-Tal",
        },
        reverse: false as const,
      },
    ],
    priceSnapshot: {
      title: "Beliebte Transfer-Schätzungen (pro Auto)",
      headers: ["Von", "Nach", "Modern / Oldtimer", "Minivan", "Ca. Zeit"],
      rows: [
        ["Flughafen Havanna", "Alt-Havanna", "$30–55", "—", "~30 Min"],
        ["Flughafen Havanna", "Varadero", "$80–100", "$170–180", "~2–2,5 Std"],
        ["Flughafen Varadero", "Hotels Varadero", "$40", "$75", "~30–45 Min"],
        [
          "Havanna",
          "Cienfuegos / Trinidad",
          "$155–250",
          "$220–325",
          "~3–4,5 Std",
        ],
      ],
      note: "Exakter Preis abhängig von Uhrzeit und Fahrzeug. Vor Buchung Festpreis anfragen.",
    },
  },
  ru: {
    container: "mx-auto max-w-7xl px-4 py-10 md:py-14",
    sections: [
      {
        id: "online-taxi",
        headingLevel: "h2",
        title: "Онлайн-заказ такси на Кубе: быстро, безопасно и прозрачно",
        text: `Раньше заказать такси на Кубе было непросто — теперь это легко. С CubanTaxis вы видите цену до поездки, получаете подтверждение в WhatsApp/Telegram и выбираете авто: современное, ретро или минивэн. Англоязычная поддержка упрощает планирование.`,
        bullets: [
          "Фиксированные цены без сюрпризов.",
          "Встреча в аэропорту и трансфер «от двери до двери».",
          "Оплата онлайн или при посадке — на ваш выбор.",
        ],

        media: {
          src: "/online-taxi-havana-classic.jpg",
          alt: "Онлайн-заказ такси на Кубе, ретро-авто в Старой Гаване",
        },
        reverse: false as const,
      },
      {
        id: "car-rental-vs-taxi",
        headingLevel: "h3",
        title: "Частное такси или аренда авто — что выгоднее?",
        text: `В большинстве случаев частное такси выигрывает по удобству и цене: без залога, очередей за топливом и скрытых платежей. Для длительных многодневных поездок прокат может подойти, но для трансферов и междугородних маршрутов такси проще и часто дешевле. Профессиональный водитель знает лучшие дороги Кубы. Приезжайте отдыхать, а не рулить.`,
        table: {
          headers: ["Маршрут", "Прокат (сред.)", "CubanTaxis"],
          rows: [
            ["Гавана → Варадеро", "$110/день", "$80 в одну сторону"],
            ["Гавана → Кайо Коко", "$280/день", "$250 в одну сторону"],
          ],
          note: "Примеры (за машину). Фактическая стоимость зависит от авто и времени.",
        },
        todos: [
          {
            label: "Аренда автомобиля vs такси",
            href: "/ru/blog/private-taxi-or-car-rental",
          }, {
            label: "Сколько стоит такси на Кубе",
            href: "/ru/blog/how-much-is-a-taxi-in-cuba",
            lang: "ru",
          },
        ],
        media: {
          src: "/car-rental-vs-taxi.jpg",
          alt: "Сравнение частного такси и проката авто на Кубе",
        },
        reverse: true as const,
      },
      {
        id: "landmarks",
        todos: [
          {
            label: "Направления на Кубе",
            href: "/ru/napravleniya-na-kube"
          },
          {
            label: "Интересные места на Кубе",
            href: "/ru/interesnye-mesta-na-kube"
          }
        ],
        headingLevel: "h2",
        title: "Главные достопримечательности на такси",
        text: `Куба — это не только пляжи, но и музыка, колониальная архитектура и живописные долины. Такси позволяет объединить «маст-си» места в один день, без привязки к общественному транспорту и жёстким экскурсионным графикам.`,
        bulletsGrid: [
          "Старая Гавана (Habana Vieja)",
          "Долина Виньялес",
          "Пляж Варадеро",
          "Тринидад",
          "Сьенфуэгос",
          "Капитолий, Гавана",
        ],

        media: {
          src: "/landmarks-vinales-trinidad.webp",
          alt: "Долина Виньялес и колониальные улицы Тринидада",
        },
        reverse: false as const,
      },
      {
        id: "cities",
        headingLevel: "h3",
        title: "Крупные города и удобные способы передвижения",
        text: `От космополитичной Гаваны до спокойного Сьенфуэгоса — междугородние такси это самый простой способ перемещаться между крупными городами Кубы: по вашему расписанию, с помощью с багажом и без пересадок.`,
        ordered: [
          "Гавана — столица и культурный центр",
          "Сантьяго-де-Куба — музыка и история",
          "Ольгин — туристический центр востока",
          "Санта-Клара — историческое сердце",
          "Сьенфуэгос — элегантный город на юге",
        ],

        media: {
          src: "/cities-havana-cienfuegos.webp",
          alt: "Гавана и Сьенфуэгос, соединённые частным такси",
        },
        reverse: true as const,
      },
      {
        id: "airports",
        headingLevel: "h2",
        title: "Из аэропорта в отель — без хлопот",
        text: `Частый вопрос — как добраться из аэропорта до отеля. Наши водители встречают в зоне прилёта, помогают с багажом и довозят прямо до двери. Цена известна заранее.`,
        list: [
          "Гавана (HAV) → Старая Гавана, Ведадо, Мирамар",
          "Варадеро (VRA) → Отели и апартаменты",
          "Санта-Клара (SNU) → Кайо-Санта-Мария",
          "Кайо-Коко (CYO) → Все включено",
        ],
        table: {
          headers: ["Маршрут", "От (USD)", "Время"],
          rows: [
            ["HAV → Старая Гавана", "$30", "~30 мин"],
            ["HAV → Варадеро", "$80", "~2–2,5 ч"],
            ["VRA → Отели Варадеро", "$40–70", "~30–45 мин"],
            ["CYO → Тринидад", "$180", "~3 ч 30 мин"],
          ],
          note: "Оценка на машину; зависит от авто и времени.",
        },

        media: {
          src: "/airport-arrivals-cuba.jpg",
          alt: "Водитель встречает пассажиров в аэропорту на Кубе",
        },
        reverse: false as const,
      },
      {
        id: "best-time",
        headingLevel: "h2",
        title: "Лучшее время для поездки на Кубу",
        text: `Куба хороша круглый год. Высокий сезон (ноя–апр) — идеальная погода для пляжа и больший спрос; низкий сезон (май–окт) — иногда дожди, зато ниже цены и меньше людей. Бронируйте такси заранее для спокойного путешествия.`,

        media: {
          src: "/best-time-to-visit.jpg",
          alt: "Солнечный сезон на Кубе для пляжей и экскурсий",
        },
        reverse: true as const,
      },
      {
        id: "tours",
        headingLevel: "h2",
        title: "Частные туры на такси: достопримечательности в вашем темпе",
        text: `Максимум за день — с гибкими остановками и советами местных. Популярно: Виньялес (табачные фермы, верховая езда), кольцо Восточных пляжей из Гаваны и фототур Тринидад & Сьенфуэгос.`,
        bullets: [
          "Виньялес на весь день (10–11 ч; верховая езда и музеи по желанию).",
          "Гавана → Пляжи Востока → Гавана (5–6 ч; пляж на выбор).",
          "Фототур Тринидад и Сьенфуэгос (колониальные площади, набережные).",
        ],
        smallNote: "Цена за машину; гид по запросу.",

        media: {
          src: "/taxi-tours-vinales.jpg",
          alt: "Частный тур на такси по долине Виньялес",
        },
        reverse: false as const,
      },
    ],
    priceSnapshot: {
      title: "Популярные частные трансферы (за машину)",
      headers: ["Откуда", "Куда", "Современная / Классика", "Минивэн", "Время"],
      rows: [
        ["Аэропорт Гавана", "Старая Гавана", "$30–55", "—", "~30 мин"],
        ["Аэропорт Гавана", "Варадеро", "$80–100", "$170–180", "~2–2,5 ч"],
        ["Аэропорт Варадеро", "Отели Варадеро", "$40", "$75", "~30–45 мин"],
        ["Гавана", "Сьенфуэгос / Тринидад", "$155–250", "$220–325", "~3–4,5 ч"],
      ],
      note: "Точная цена зависит от времени и типа авто. Запросите фиксированную смету перед бронированием.",
    },
  }, // =============== 🇵🇹 Português ===============
  pt: {
    container: "mx-auto max-w-7xl px-4 py-10 md:py-14",
    sections: [
      {
        id: "online-taxi",
        headingLevel: "h2",
        title: "Reserve táxi online em Cuba: rápido, seguro e transparente",
        text: `Reservar um táxi em Cuba costumava ser complicado — até agora. Com a CubanTaxis você vê o preço antes da viagem, recebe confirmações por WhatsApp/Telegram e escolhe entre sedãs modernos, carros clássicos ou minivans. O suporte em inglês facilita o planejamento.`,
        bullets: [
          "Preço antecipado, sem surpresas.",
          "Transporte porta a porta e recepção no aeroporto.",
          "Pague online ou na retirada — você decide.",
        ],

        media: {
          src: "/online-taxi-havana-classic.jpg",
          alt: "Reserva de táxi online em Cuba com carro clássico em Habana Vieja",
        },
        reverse: false as const,
      },
      {
        id: "car-rental-vs-taxi",
        headingLevel: "h3",
        title: "Táxi privado ou aluguel de carro — qual é melhor?",
        text: `Para a maioria das viagens, o táxi privado ganha em conveniência e preço: sem depósito, sem filas para combustível e sem custos ocultos. Para viagens longas de vários dias, o aluguel pode fazer sentido — mas para transfers de aeroporto e deslocamentos entre cidades, o táxi é mais simples e geralmente mais econômico. Vá com um motorista profissional que conhece as melhores rotas de Cuba. Venha curtir, não dirigir.`,
        table: {
          headers: ["Rota", "Aluguel (média)", "CubanTaxis"],
          rows: [
            ["Havana → Varadero", "$110/dia", "$80 só ida"],
            ["Havana → Cayo Coco", "$280/dia", "$250 só ida"],
          ],
          note: "Estimativas por carro. O preço real varia conforme o veículo e o horário.",
        },
        todos: [
          {
            label: "Aluguel de carro vs táxi",
            href: "/pt/blog/private-taxi-or-car-rental",
          }, {
            label: "Quanto custa um táxi em Cuba?",
            href: "/pt/blog/how-much-is-a-taxi-in-cuba",
            lang: "pt",
          },

        ],
        media: {
          src: "/car-rental-vs-taxi.jpg",
          alt: "Comparação táxi privado vs aluguel de carro em Cuba",
        },
        reverse: true as const,
      },
      {
        id: "landmarks",
        todos: [
          {
            label: "Destinos em Cuba",
            href: "/pt/destinos-em-cuba"
          },
          {
            label: "Lugares interessantes em Cuba",
            href: "/pt/lugares-interessantes-em-cuba"
          }
        ],
        headingLevel: "h2",
        title: "Principais pontos turísticos para visitar de táxi",
        text: `Cuba é mais do que praias — é música, arquitetura colonial e vales exuberantes. De táxi, você pode conhecer vários pontos imperdíveis em um único dia, sem depender de transporte público ou excursões com horários fixos.`,
        bulletsGrid: [
          "Habana Vieja (Velha Havana)",
          "Vale de Viñales",
          "Praia de Varadero",
          "Trinidad",
          "Cienfuegos",
          "El Capitolio, Havana",
        ],

        media: {
          src: "/landmarks-vinales-trinidad.webp",
          alt: "Vale de Viñales e ruas coloniais de Trinidad",
        },
        reverse: false as const,
      },
      {
        id: "cities",
        headingLevel: "h3",
        title: "Grandes cidades e formas mais fáceis de viajar",
        text: `De Havana cosmopolita a Cienfuegos tranquila, os táxis intermunicipais são a maneira mais prática de viajar entre as grandes cidades de Cuba — no seu horário, com ajuda para bagagens e sem trocas.`,
        ordered: [
          "Havana — Capital e centro cultural",
          "Santiago de Cuba — Música e história",
          "Holguín — Polo turístico do leste",
          "Santa Clara — Coração histórico",
          "Cienfuegos — Elegante cidade do sul",
        ],

        media: {
          src: "/cities-havana-cienfuegos.webp",
          alt: "Havana e Cienfuegos conectadas por táxi privado",
        },
        reverse: true as const,
      },
      {
        id: "airports",
        headingLevel: "h2",
        title: "Do aeroporto ao hotel — sem complicações",
        text: `Visitantes de primeira viagem costumam perguntar como sair do aeroporto até o hotel. Nossos motoristas aguardam na chegada, ajudam com a bagagem e levam você diretamente ao destino. O preço aparece antes da corrida.`,
        list: [
          "Havana (HAV) → Habana Vieja, Vedado, Miramar",
          "Varadero (VRA) → Resorts e Airbnb",
          "Santa Clara (SNU) → Acesso a Cayo Santa María",
          "Cayo Coco (CYO) → Resorts all-inclusive",
        ],
        table: {
          headers: ["Rota", "A partir de (USD)", "Duração"],
          rows: [
            ["HAV → Habana Vieja", "$30", "~30 min"],
            ["HAV → Varadero", "$80", "~2–2,5 h"],
            ["VRA → Hotéis em Varadero", "$40–70", "~30–45 min"],
            ["CYO → Trinidad", "$180", "~3 h 30 min"],
          ],
          note: "Estimativas por carro; variam conforme veículo e horário.",
        },

        media: {
          src: "/airport-arrivals-cuba.jpg",
          alt: "Motorista recepcionando passageiros no aeroporto em Cuba",
        },
        reverse: false as const,
      },
      {
        id: "best-time",
        headingLevel: "h2",
        title: "Melhor época para visitar Cuba",
        text: `Cuba brilha o ano inteiro. Alta temporada (nov–abr) traz clima de praia perfeito e alta demanda; baixa temporada (mai–out) tem chuvas ocasionais, mas melhores preços e menos turistas. Reserve seu táxi com antecedência para uma viagem tranquila.`,

        media: {
          src: "/best-time-to-visit.jpg",
          alt: "Estação ensolarada em Cuba ideal para praias e passeios",
        },
        reverse: true as const,
      },
      {
        id: "tours",
        headingLevel: "h2",
        title: "Passeios privados de táxi: pontos turísticos no seu ritmo",
        text: `Aproveite o máximo de um dia com paradas flexíveis e dicas locais. Populares: Viñales (fazendas de tabaco, cavalgada), circuito Playas del Este saindo de Havana e tour fotográfico por Trinidad & Cienfuegos.`,
        bullets: [
          "Viñales dia inteiro (10–11 h; cavalgada opcional, paradas em museus).",
          "Havana → Playas del Este → Havana (5–6 h; praia à escolha).",
          "Tour fotográfico Trinidad & Cienfuegos (praças coloniais, orlas).",
        ],
        smallNote: "Valores por carro; guia disponível sob solicitação.",

        media: {
          src: "/taxi-tours-vinales.jpg",
          alt: "Passeio privado de táxi pelo Vale de Viñales",
        },
        reverse: false as const,
      },
    ],
    priceSnapshot: {
      title: "Estimativas de transfers privados (por carro)",
      headers: ["De", "Para", "Moderno / Clássico", "Minivan", "Tempo aprox."],
      rows: [
        ["Aeroporto de Havana", "Habana Vieja", "$30–55", "—", "~30 min"],
        ["Aeroporto de Havana", "Varadero", "$80–100", "$170–180", "~2–2,5 h"],
        [
          "Aeroporto de Varadero",
          "Hotéis Varadero",
          "$40",
          "$75",
          "~30–45 min",
        ],
        ["Havana", "Cienfuegos / Trinidad", "$155–250", "$220–325", "~3–4,5 h"],
      ],
      note: "O preço final depende do horário e do veículo. Solicite um valor fixo antes de reservar.",
    },
  },
};
