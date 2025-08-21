import { title } from "process";
import { AppTexts } from "./types";

export const es: AppTexts = {
  header: {
    social: {
      facebook: "Síguenos en Facebook",
      instagram: "Síguenos en Instagram",
      whatsapp: "Contáctanos en WhatsApp"
    }
  },
  hero: {
    h1: "Reserva un Taxi en Cuba rápido, seguro y confiable",
    h2a: "La forma más rápida de conseguir un taxi para ",
    h2b: ": La Habana, Varadero, Trinidad, Viñales y más.",
    transfer: "airport transfers",
    shared: "taxis compartidos",
    and: " y ",
    interCity: "taxis interprovinciales",
    p: "Reserva tu taxi en Cuba sin complicaciones. Déjanos tus datos y tu viaje quedará confirmado en minutos. Así de fácil.",
    buttons: {
      booking: "Reservar un taxi privado en Cuba",
      fastBooking: "Reserva rápida"
    },
    contents: {
      destinations: "Destinos",
      excursions: "Excursiones",
      howTo: "Cómo funciona"
    },
    services: [
      "Traslados privados en Cuba",
      "Taxi al aeropuerto de La Habana",
      "Reserva de taxi exprés",
      "City tours en La Habana",
      "Excursiones desde Varadero",
      "Taxis compartidos en Cuba",
      "Viajes a las Playas del Este",
      "Guías turísticos en Cuba"
    ]
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
      description: "Reserva aquí tu viaje en detalle y nosotros nos encargamos de todo",
      title: "Traslado personalizado"
    },
    fullName: "Nombre completo",
    email: "Correo electrónico",
    phone: "Teléfono",
    vehicleType: "Tipo de vehículo",
    from: "Desde",
    to: "Hasta",
    date: "Fecha",
    time: "Hora",
    passengers: "Pasajeros",
    luggage: "Equipaje",
    details: "Detalles adicionales",
    detailsExample: "Cualquier información específica sobre el viaje o los pasajeros",
    attachImages: "Adjuntar imágenes",
    reserveNow: "Reservar ahora",
    subtitle: "Cuéntanos los detalles para organizar tu viaje",
    example: "Ejemplo: número de vuelo, asiento para niño, parada extra, etc.",
    upload: "Subir imágenes",
    luggaageExample: "2 maletas + 1 mochila",
    title: "Detalles de la reserva"
  },
  quickBookingForm: {
    page: {
      title: "Reserva un taxi en Cuba al instante",
      backToHome: "Volver al inicio",
      description: "Reserva tu taxi en segundos"
    },
    phone: "Teléfono",
    vehicleType: "Tipo de vehículo",
    from: "Desde",
    to: "Hasta",
    date: "Fecha",
    time: "Hora",
    passengers: "Pasajeros",
    luggage: "Descripción del equipaje",
    reserveNow: "Reservar ahora",
    telegram: "Reservar vía Telegram",
    whatsapp: "Reservar vía WhatsApp",
    messageTitle: "Detalles de la reserva"
  },
  footer: {
    rights: "© 2025 Cubantaxis. Todos los derechos reservados.",
  },
  FAQs: {
    title: "¿Cuánto cuesta un taxi en Cuba, cómo conseguir uno y otras preguntas…?",
    items: [
      {
        question: "¿Cómo puedo reservar un taxi en Cuba con antelación?",
        answer: "Puedes dejarnos tus datos en el formulario y recibirás confirmación inmediata. También puedes ver todas las rutas disponibles en la [página de traslados](/traslados)."
      },
      {
        question: "¿Ofrecen traslados privados desde el aeropuerto de La Habana?",
        answer: "Sí, ofrecemos traslados privados desde el Aeropuerto Internacional José Martí a cualquier destino en Cuba, incluyendo Varadero, Viñales, Cayo Santa María y más."
      },
      {
        question: "¿Cuánto cuesta un taxi desde el aeropuerto de Varadero a La Habana?",
        answer: "El precio de un traslado privado desde el aeropuerto de Varadero a La Habana comienza en 100 USD por vehículo. Consulta la lista completa en nuestra [sección de precios](/traslados)."
      },
      {
        question: "¿Los precios son por persona o por coche?",
        answer: "Todos los precios mostrados en el sitio son por vehículo privado, independientemente de si viaja 1 o más pasajeros (hasta la capacidad máxima permitida)."
      },
      {
        question: "¿Puedo pagar el taxi en dólares, euros o moneda local (CUP)?",
        answer: "Sí, aceptamos pagos en USD, EUR y CUP. Elige la opción más conveniente al confirmar tu traslado."
      },
      {
        question: "¿Qué pasa si mi vuelo se retrasa?",
        answer: "Monitoreamos la llegada de tu vuelo. Si hay retrasos, tu chofer te esperará sin costo adicional, siempre que nos hayas proporcionado correctamente el número de vuelo."
      },
      {
        question: "¿Ofrecen excursiones privadas además de traslados?",
        answer: "Sí, puedes reservar excursiones privadas como tours a Viñales, Cienfuegos y Trinidad. Mira todas las opciones en la [página de excursiones](/excursiones)."
      },
      {
        question: "¿Qué tipos de vehículos ofrecen para los traslados?",
        answer: "Puedes elegir entre autos clásicos, convertibles, vehículos modernos o minivans según tus preferencias y el número de pasajeros."
      },
      {
        question: "¿Puedo solicitar un traslado nocturno?",
        answer: "Sí, ofrecemos servicio de taxi 24/7. Ten en cuenta que los traslados nocturnos pueden tener un pequeño recargo adicional."
      },
      {
        question: "¿Cómo sé si mi traslado está confirmado?",
        answer: "Recibirás un mensaje de confirmación directa vía WhatsApp o correo electrónico con los detalles del viaje y el nombre del chofer asignado."
      }
    ]
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
    "Cayo Guillermo"
  ],
  vehicles: ["Auto clásico", "Tour", "Van"],
  clipboardTemplate: {
    copied: "✅ Plantilla copiada. Pégala en el chat de Telegram",
    error: "❌ Hubo un error al preparar la reserva"
  },
  howMuchIsATaxi:"¿Cuanto cuesta un taxi en cuba?"
};
