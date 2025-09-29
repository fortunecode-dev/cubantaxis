export const articles = {
  howMuchIsATaxiInCuba: {
    seo: {
      headline: "Precios de taxis en Cuba 2025",
      description:
        "Guía actualizada de tarifas de taxis y transfers en Cuba en 2025. Traslados desde los aeropuertos de La Habana (HAV) y Varadero (VRA), además de rutas interurbanas.",
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
        "Los precios son por coche (servicio privado). La cotización final depende del tipo de vehículo (clásico/moderno o minivan), punto de recogida, suplementos nocturnos y paradas opcionales.",
      ctaAltQuestion:
        "¿Necesitas otra ruta o un descapotable clásico para un tour por la ciudad?",
    },
    breadcrumb: {
      homeLabel: "Inicio",
      blogLabel: "Blog",
      current: "Precios de taxis en Cuba 2025",
    },
    badges: [
      { label: "Precios 2025", tone: "accent" },
      { label: "Transfers privados", tone: "primary" },
      { label: "Choferes que hablan inglés", tone: "primary" },
    ],
    hero: {
      h1: "¿Cuánto cuesta un taxi en Cuba en 2025?",
      introP1:
        "Guía actualizada de precios de taxis y transfers en Cuba. Tarifas reales desde La Habana (HAV / José Martí) y Varadero (VRA) hacia Varadero, Viñales, Trinidad, Cienfuegos y más. Tarifas fijas por coche, no por persona.",
      ctaPrimary: { label: "Reservar un transfer privado", href: "/cuba-taxi-booking" },
      ctaSecondary: { label: "Ver tabla de precios", href: "#prices" },
      subNotePrefix: "Actualizado",
      subNoteSuffix: "· Precios por coche (clásico/moderno o minivan)",
      heroImage: {
        src: "/cuba-cabs.jpg",
        alt: "Taxi clásico en La Habana, Cuba",
        width: 900,
        height: 630,
      },
    },
    valueProps: [
      {
        title: "Precios transparentes",
        desc: "Cotizaciones confirmadas para aeropuertos y rutas interurbanas. Sin cargos ocultos.",
      },
      {
        title: "El vehículo adecuado para ti",
        desc: "Autos clásicos para tours en ciudad o minivans cómodas para familias.",
      },
      {
        title: "Recogidas confiables",
        desc: "Choferes que hablan inglés y monitoreo de vuelos para llegadas al aeropuerto.",
      },
    ],
    prices: {
      title: "Precios de taxis en Cuba por ruta (2025)",
      intro:
        "Los precios son por coche (servicio privado). La cotización final depende del tipo de vehículo (clásico/moderno o minivan), punto de recogida, suplementos nocturnos y paradas opcionales.",
      columns: {
        route: "Ruta",
        classicModern: "Clásico / Moderno",
        minivan: "Minivan",
        notes: "Notas",
      },
      rows: [
        { route: "Aeropuerto de La Habana (HAV) → Centro", classicModern: "$30", minivan: "$55", notes: "Transfer típico de llegada" },
        { route: "La Habana → Varadero", classicModern: "$100", minivan: "$180", notes: "Disponible ida y vuelta en el día" },
        { route: "La Habana → Viñales", classicModern: "$130", minivan: "$200", notes: "Ida y vuelta a solicitud" },
        { route: "La Habana → Trinidad", classicModern: "$250", minivan: "$320", notes: "Opción vía Cienfuegos" },
        { route: "Varadero → Cienfuegos", classicModern: "$120", minivan: "$205" },
        { route: "Varadero → Trinidad", classicModern: "$250", minivan: "$270" },
        { route: "Aeropuerto de Varadero (VRA) → Hoteles", classicModern: "$40", minivan: "$60–70" },
      ],
      footnote:
        "Los precios pueden variar para recogidas lejos del KM-0 de La Habana (Capitolio) y en horario nocturno.",
      cta: { label: "Solicitar cotización", href: "/cuba-taxi-booking" },
    },
    tips: {
      whatAffects: {
        title: "¿Qué influye en el precio?",
        items: [
          "Distancia y tiempo de viaje entre ciudades",
          "Tipo de vehículo: auto clásico/moderno o minivan",
          "Recogidas de día vs. noche, parqueo en aeropuerto y tiempo de espera",
          "Transfer privado vs. compartido y paradas turísticas opcionales",
        ],
      },
      touristTips: {
        title: "Consejos para turistas",
        paragraphPrefix:
          "Reserva con antelación para asegurar una tarifa fija y comparte tu número de vuelo para las recogidas en el aeropuerto. Los transfers privados son la opción más cómoda y segura. Puedes",
        link: { label: "reservar tu taxi online", href: "/private-transfer-booking" },
        paragraphSuffix: "y pagar a la llegada.",
      },
    },
  },
}
