import { AppTexts } from "./types";
import { metadata } from "./metadata/metadata.es";
import { header } from "./header/es";
import { content } from "./pageContent/es";
import { articles } from "./blog/es";
import { booking } from "./booking/es";
import { confirmationTexts } from "./others/confirmation.locale";
import { mainSeo } from "./landing/content.locale";
import { navLocales } from "./others/nav.locale";
export const es: AppTexts = {
  metadata,
  header,
  content,
  articles,
  booking,
  backToHome: "Volver al inicio",
  taxiGuide: "Guía completa de taxis en Cuba",
  exploreDestinations: "Explorar destinos →",
  nav: navLocales.es,

  hero: {
    h1: "Reserva un taxi en Cuba rápido, seguro y confiable",
    h2a: "La forma más rápida de conseguir un taxi para ",
    h2b: ": La Habana, Varadero, Trinidad, Viñales y más.",
    transfer: "traslados de aeropuerto",
    shared: "viajes compartidos",
    and: " y ",
    interCity: "taxis interurbanos",
    p: "Reserva tu taxi en Cuba sin complicaciones. Déjanos tus datos y confirmaremos tu viaje en minutos. Así de fácil.",
    buttons: {
      booking: "Reservar un taxi privado en Cuba",
      fastBooking: "Reserva rápida",
    },
    contents: {
      destinations: "Destinos",
      excursions: "Excursiones",
      howTo: "Cómo funciona",
    },
    services: [
      "Traslados privados en Cuba",
      "Taxi al aeropuerto de La Habana",
      "Reserva exprés de taxi",
      "City tours por La Habana",
      "Excursiones desde Varadero",
      "Taxis compartidos en Cuba",
      "Viajes a las Playas del Este",
      "Guías turísticos en Cuba",
    ],
  },
  destinationsCard: {
    title: "Destinos",
    subTitle: "Lugares para visitar en Cuba",
    description: "Explora nuestras opciones de destinos más populares.",
  },
  excursionsCard: {
    title: "Excursiones",
    places: "Lugares incluidos",
  },

  seeMore: "Ver más",
  bookingForm: {
    page: {
      backToHome: "Volver al inicio",
      description:
        "Reserva tu viaje en detalle aquí y nosotros nos encargamos del resto",
      title: "Traslado personalizado",
    },
    fullName: "Nombre completo",
    email: "Correo electrónico",
    phone: "Teléfono",
    vehicleType: "Tipo de vehículo",
    from: "Desde",
    to: "Hacia",
    date: "Fecha",
    time: "Hora",
    passengers: "Pasajeros",
    luggage: "Equipaje",
    details: "Detalles adicionales",
    detailsExample:
      "Cualquier información específica sobre el viaje o los pasajeros",
    attachImages: "Adjuntar imágenes",
    reserveNow: "Reservar ahora",
    subtitle: "Cuéntanos los detalles para organizar tu viaje",
    example: "Ejemplo: número de vuelo, silla para niño, parada extra, etc.",
    upload: "Subir imágenes",
    luggaageExample: "2 maletas + 1 mochila",
    title: "Detalles de la reserva",
  },
  quickBookingForm: {
    page: {
      title: "Reserva un taxi en Cuba al instante",
      backToHome: "Volver al inicio",
      description: "Reserva tu taxi en segundos",
    },
    phone: "Teléfono",
    vehicleType: "Tipo de vehículo",
    from: "Desde",
    to: "Hacia",
    date: "Fecha",
    time: "Hora",
    passengers: "Pasajeros",
    luggage: "Descripción del equipaje",
    reserveNow: "Reservar ahora",
    telegram: "Reservar por Telegram",
    whatsapp: "Reservar por WhatsApp",
    messageTitle: "Detalles de la reserva",
  },
  footer: {
    rights: "© 2025 Cubantaxis. Todos los derechos reservados.",
  },
  underHeroTitle: "Páginas clave sobre taxis en Cuba",
  underHeroLinks: [
    {
      href: "/blog/how-much-is-a-taxi-in-cuba",
      title: "¿Cuánto cuesta un taxi en Cuba?",
      description:
        "Conoce precios reales de taxis en Cuba, desde La Habana hasta Varadero, incluyendo traslados de aeropuerto y rutas largas.",
    },
    {
      href: "/destinations-in-cuba",
      title: "Destinos populares en Cuba",
      description:
        "Explora información detallada sobre los principales destinos de Cuba como La Habana, Varadero, Viñales y Trinidad.",
    },
    {
      href: "/interesting-places-in-cuba",
      title: "Atracciones y sitios de interés en Cuba",
      description:
        "Descubre las principales atracciones de Cuba: resorts de Varadero, lugares emblemáticos de La Habana, hoteles y actividades familiares con detalles completos.",
    },
    {
      href: "/cuba-taxi-booking",
      title: "Reserva rápida de taxi",
      description:
        "Reserva un viaje en taxi por Cuba con pocos clics. Servicio rápido y confiable.",
    },
    {
      href: "/private-transfer-booking",
      title: "Reserva detallada de traslado",
      description:
        "Planifica tu traslado con opciones detalladas de vehículos, rutas y horarios.",
    },
    {
      href: "/taxi-in-cuba",
      title: "Taxi en Cuba – Guía y FAQs",
      description:
        "Guía informativa sobre tomar un taxi en Cuba, incluyendo preguntas frecuentes.",
    },
  ],
  FAQs: {
    title:
      "¿Cuánto cuesta un taxi en Cuba, cómo conseguir uno y otras preguntas…?",
    items: [
      {
        question: "¿Cómo puedo reservar un taxi en Cuba con antelación?",
        answer:
          "Puedes dejarnos tus datos en el formulario y recibirás confirmación al instante.",
      },
      {
        question:
          "¿Ofrecen traslados privados desde el aeropuerto de La Habana?",
        answer:
          "Sí, ofrecemos traslados privados desde el Aeropuerto Internacional José Martí a cualquier destino de Cuba, incluyendo Varadero, Viñales, Cayo Santa María y más.",
      },
      {
        question:
          "¿Cuánto cuesta un taxi del aeropuerto de Varadero a La Habana?",
        answer:
          "El precio de un traslado privado desde el aeropuerto de Varadero a La Habana comienza en 100 USD por vehículo. Consulta la lista completa en nuestro [blog](/blog/how-much-is-a-taxi-in-cuba).",
      },
      {
        question: "¿Los precios son por persona o por coche?",
        answer:
          "Todos los precios mostrados en el sitio son por vehículo privado, independientemente de si viaja 1 o más pasajeros (hasta la capacidad máxima permitida).",
      },
      {
        question:
          "¿Puedo pagar el taxi en dólares, euros o moneda local (CUP)?",
        answer:
          "Sí, aceptamos pagos en USD, EUR y CUP. Elige la opción más conveniente al confirmar tu traslado.",
      },
      {
        question: "¿Qué pasa si mi vuelo se retrasa?",
        answer:
          "Monitoreamos la llegada de tu vuelo. Si hay retrasos, tu chofer te esperará sin costo adicional, siempre que nos hayas proporcionado correctamente tu número de vuelo.",
      },
      {
        question: "¿Ofrecen excursiones privadas además de los traslados?",
        answer:
          "Sí, puedes reservar excursiones privadas como tours a Viñales, Cienfuegos y Trinidad.",
      },
      {
        question: "¿Qué tipos de vehículos ofrecen para los traslados?",
        answer:
          "Puedes elegir entre autos clásicos, convertibles, vehículos modernos o minivanes según tus preferencias y el número de pasajeros.",
      },
      {
        question: "¿Puedo solicitar un traslado nocturno?",
        answer:
          "Sí, ofrecemos servicio de taxi 24/7. Ten en cuenta que los traslados nocturnos pueden tener un pequeño recargo adicional.",
      },
      {
        question: "¿Cómo sé si mi traslado está confirmado?",
        answer:
          "Recibirás un mensaje de confirmación directo por WhatsApp o correo con los detalles del viaje y el nombre del chofer asignado.",
      },
    ],
  },
  locations: [
    "Aeropuerto de La Habana",
    "Aeropuerto de Varadero",
    "Varadero",
    "La Habana",
    "Cayo Coco",
    "Cienfuegos",
    "Santa Clara",
    "Trinidad",
    "Viñales",
    "Cayo Santa María",
    "Cayo Guillermo",
  ],
  vehicles: ["Auto clásico", "Tour", "Furgoneta"],
  clipboardTemplate: {
    copied: "✅ Plantilla copiada. Pégala en el chat de Telegram",
    error: "❌ Hubo un error al preparar la reserva",
  },
  howMuchIsATaxi: "¿Cuánto cuesta un taxi en Cuba en 2025?",
  mainSeo: mainSeo.es,
  confirmationTexts: confirmationTexts.es,
};
