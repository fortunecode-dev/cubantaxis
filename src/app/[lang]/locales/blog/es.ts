export const articles = {
  howMuchIsATaxiInCuba: {
    seo: {
      headline: "Precios de taxis en Cuba 2025",
      description:
        "Guía actualizada de tarifas de taxis y transfers en Cuba en 2025. Traslados desde los aeropuertos de La Habana (HAV) y Varadero (VRA), además de rutas interurbanas.",
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
  "privateTaxiOrCarRental": {
    "seo": {
      "headline": "Taxi privado o alquiler de coche — ¿Qué es mejor para viajar por Cuba?",
      "description": "Compara taxis privados vs. alquiler de coches en Cuba. Descubre qué opción se adapta a tu estilo de viaje, presupuesto y confort para trayectos desde La Habana, Varadero, Trinidad o Viñales.",
      "image": "https://cubantaxis.com/blog/private-taxi-vs-car-rental.png",
      "mainEntityOfPage": "https://cubantaxis.com/blog/private-taxi-vs-car-rental-cuba",
      "authorName": "Cuban Taxis",
      "publisherName": "Cuban Taxis",
      "publisherLogo": "https://cubantaxis.com/logo.png"
    },
    "ui": {
      "heroSizes": "(min-width: 1024px) 900px, 100vw",
      "comparisonNote": "Todos los precios son por coche (servicio privado). Basado en traslados estándar en vehículos modernos o clásicos. Pueden aplicarse suplementos nocturnos o por larga distancia.",
      "ctaAltQuestion": "¿Necesitas un traslado privado o quieres combinar ambas opciones en tu itinerario?"
    },
    "breadcrumb": {
      "homeLabel": "Inicio",
      "blogLabel": "Blog",
      "current": "Taxi privado o alquiler de coche — ¿Qué es mejor?"
    },
    "badges": [
      { "label": "Consejos de viaje", "tone": "accent" },
      { "label": "Traslados Cuba", "tone": "primary" },
      { "label": "Actualización 2025", "tone": "neutral" }
    ],
    "hero": {
      "h1": "Taxi privado o alquiler de coche — ¿Qué es mejor para viajar por Cuba?",
      "introP1": "¿Dudas entre reservar un taxi privado o alquilar un coche en Cuba? Aquí tienes una guía detallada que compara confort, coste, flexibilidad y conveniencia para rutas como La Habana–Varadero, Viñales y Trinidad.",
      "ctaPrimary": { "label": "Reservar un taxi privado", "href": "/cuba-taxi-booking" },
      "ctaSecondary": { "label": "Ver precios por ruta", "href": "#comparison" },
      "subNotePrefix": "Actualizado 2025",
      "subNoteSuffix": "· Precios por coche (clásico/moderno o minivan)",
      "heroImage": {
        "src": "/private-taxi-vs-car-rental.png",
        "alt": "Viajero eligiendo entre taxi privado y alquiler de coche en Cuba",
        "width": 900,
        "height": 630
      }
    },
    "valueProps": [
      { "title": "Precios transparentes", "desc": "Cotizaciones confirmadas para aeropuertos y rutas interurbanas. Sin cargos ocultos." },
      { "title": "El vehículo adecuado para ti", "desc": "Coches clásicos para tours urbanos o minivans cómodas para familias." },
      { "title": "Recogidas confiables", "desc": "Choferes que hablan inglés y monitoreo de vuelos para llegadas al aeropuerto." }
    ],
    "sections": {
      "privateTaxi": {
        "title": "Taxi privado: confort sin estrés",
        "paragraph1": "Un taxi privado en Cuba ofrece el equilibrio perfecto entre confort, fiabilidad y conocimiento local. Es ideal si quieres disfrutar del viaje sin preocuparte por la navegación o las condiciones de las carreteras.",
        "advantages": [
          "No necesitas conducir — tu chofer local se encarga de todo.",
          "Precios fijos por ruta evitan costos ocultos o sorpresas con el combustible.",
          "Flexibilidad para parar a tomar fotos o comer en el camino.",
          "Choferes bilingües que conocen los mejores sitios de Cuba."
        ],
        "samplePrices": [
          { "route": "La Habana → Varadero", "price": "desde $100 (coche moderno) / $180 (minivan)" },
          { "route": "La Habana → Viñales", "price": "$180–$200" },
          { "route": "La Habana → Cayo Santa María", "price": "$350 (coche privado)" }
        ],
        "bestFor": "Parejas, familias o viajeros que buscan una experiencia relajada con servicio puerta a puerta confiable."
      },
      "carRental": {
        "title": "Alquiler de coche: la libertad trae responsabilidad",
        "paragraph1": "Alquilar un coche en Cuba ofrece independencia total para explorar a tu ritmo. Sin embargo, requiere preparación y tolerancia ante los retos viales de la isla.",
        "pros": [
          "Libertad total para elegir tu ruta y horario.",
          "Ideal para estancias largas o destinos fuera de lo común.",
          "Perfecto para viajeros con espíritu de aventura."
        ],
        "cons": [
          "Disponibilidad limitada de vehículos, especialmente en temporada alta.",
          "Problemas de mantenimiento o confort en modelos de alquiler más antiguos.",
          "Costos ocultos: seguro, depósitos y combustible.",
          "Dificultades de navegación y señal móvil débil en zonas rurales."
        ],
        "estimatedCosts": "Los coches de alquiler en Cuba suelen costar $70–$120 por día, más seguro y combustible. Un viaje de 5 días puede superar los $500, similar a contratar un conductor privado."
      },
      "comparison": {
        "title": "Comparativa de coste y confort — Ida y vuelta La Habana ↔ Varadero",
        "table": {
          "columns": ["Opción", "Precio total", "Confort", "Flexibilidad", "Esfuerzo"],
          "rows": [
            { "option": "Taxi privado", "totalPrice": "$100–$180", "comfort": "★★★★★", "flexibility": "★★★★☆", "effort": "Mínimo" },
            { "option": "Alquiler de coche", "totalPrice": "$150–$250", "comfort": "★★★☆☆", "flexibility": "★★★★★", "effort": "Alto" }
          ]
        },
        "verdict": "Para la mayoría de visitantes, los taxis privados ofrecen mejor relación calidad-precio y tranquilidad. Los alquileres convienen a quienes priorizan independencia sobre conveniencia."
      },
      "hybridOption": {
        "title": "Tours en taxi privado — Lo mejor de ambos mundos",
        "paragraph": "Si quieres explorar sin conducir, los tours en taxi privado son un híbrido perfecto. Obtienes libertad y flexibilidad con el confort de un chofer local.",
        "examples": [
          "Tour por La Habana (3h): desde $75–$120 por coche",
          "Valle de Viñales (10h): desde $280–$360 por coche"
        ],
        "cta": { "label": "Ver todos los tours", "href": "/destinations-in-cuba" }
      },
      "conclusion": {
        "title": "Reflexión final — ¿Cuál elegir?",
        "paragraph1": "Tanto los taxis privados como los alquileres tienen sus ventajas. La elección correcta depende de tu personalidad viajera y tus objetivos.",
        "bulletSummary": [
          "Elige taxi privado si buscas seguridad, confort y conocimiento local.",
          "Elige alquiler si amas la libertad y no te importan los retos."
        ],
        "closingNote": "Cualquiera que elijas, cada carretera cubana cuenta una historia — desde los convertibles antiguos de La Habana hasta los tranquilos valles de Viñales."
      }
    },
    "prices": {
      "title": "Precios de taxis en Cuba por ruta (2025)",
      "intro": "Los precios son por coche (servicio privado). La cotización final depende del tipo de coche (clásico/moderno o minivan), punto de recogida, suplementos nocturnos y paradas opcionales.",
      "columns": { "route": "Ruta", "classicModern": "Clásico / Moderno", "minivan": "Minivan", "notes": "Notas" },
      "rows": [
        { "route": "Aeropuerto de La Habana (HAV) → Centro", "classicModern": "$30", "minivan": "$55", "notes": "Traslado típico de llegada" },
        { "route": "La Habana → Varadero", "classicModern": "$100", "minivan": "$180", "notes": "Retorno el mismo día disponible" },
        { "route": "La Habana → Viñales", "classicModern": "$130", "minivan": "$200", "notes": "Ida y vuelta a solicitud" },
        { "route": "La Habana → Trinidad", "classicModern": "$250", "minivan": "$320", "notes": "Vía Cienfuegos opcional" },
        { "route": "Varadero → Cienfuegos", "classicModern": "$120", "minivan": "$205", "notes": "" },
        { "route": "Varadero → Trinidad", "classicModern": "$250", "minivan": "$270", "notes": "" },
        { "route": "Aeropuerto de Varadero (VRA) → Hoteles", "classicModern": "$40", "minivan": "$60–70", "notes": "" }
      ],
      "footnote": "Los precios pueden variar para recogidas lejos del KM-0 de La Habana (Capitolio) y para horas nocturnas.",
      "cta": { "label": "Solicitar presupuesto", "href": "/cuba-taxi-booking" }
    },
    "tips": {
      "whatAffects": {
        "title": "¿Qué afecta el precio?",
        "items": [
          "Distancia y tiempo de viaje entre ciudades",
          "Tipo de vehículo: coche clásico/moderno o minivan",
          "Recogidas de día vs. noche, estacionamiento en aeropuerto y tiempo de espera",
          "Traslado privado vs. compartido y paradas opcionales para turismo"
        ]
      },
      "touristTips": {
        "title": "Consejos para turistas",
        "paragraphPrefix": "Reserva con antelación para fijar la tarifa y comparte tu número de vuelo para recogidas en el aeropuerto. Los traslados privados son la opción más conveniente y segura. Puedes",
        "link": { "label": "reservar tu taxi online", "href": "/private-transfer-booking" },
        "paragraphSuffix": "y pagar al llegar."
      }
    },
    "ctaFooter": {
      "text": "¿Listo para planear tu próxima ruta en Cuba?",
      "primary": { "label": "Reservar un traslado", "href": "/cuba-taxi-booking" },
      "secondary": { "label": "Explorar tours privados", "href": "/destinations-in-cuba" }
    }
  }
}
