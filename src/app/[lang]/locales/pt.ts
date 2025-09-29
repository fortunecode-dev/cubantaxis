// pt.ts (pt-BR)
import type { AppTexts } from "./types";
import { metadata } from "./metadata/metadata.pt";
import { header } from "./header/pt";
import { content } from "./pageContent/pt";
import { articles } from "./blog/pt";
export const pt: AppTexts = {
  metadata,
  header,
  content,
  articles,
  taxiGuide: "Guia completo de táxis em Cuba",
  exploreDestinations: "Explorar destinos →",

  hero: {
    h1: "Reserve um táxi em Cuba com rapidez, segurança e confiabilidade",
    h2a: "A forma mais rápida de chamar um táxi para ",
    h2b: ": Havana, Varadero, Trinidad, Viñales e mais.",
    transfer: "traslados do aeroporto",
    shared: "corridas compartilhadas",
    and: " e ",
    interCity: "táxis intermunicipais",
    p: "Reserve seu táxi em Cuba sem complicação. Deixe seus dados e confirmaremos sua viagem em poucos minutos.",
    buttons: {
      booking: "Reservar táxi privado em Cuba",
      fastBooking: "Reserva rápida",
    },
    contents: {
      destinations: "Destinos",
      excursions: "Excursões",
      howTo: "Como funciona",
    },
    services: [
      "Traslados privados em Cuba",
      "Táxi para o aeroporto de Havana",
      "Reserva expressa de táxi",
      "City tours por Havana",
      "Excursões a partir de Varadero",
      "Táxis compartilhados em Cuba",
      "Viagens para as Praias do Leste",
      "Guias de turismo em Cuba",
    ],
  },
  destinationsCard: {
    title: "Destinos",
    subTitle: "Lugares para visitar em Cuba",
    description: "Explore nossas opções de destinos mais populares.",
  },
  excursionsCard: {
    title: "Excursões",
    places: "Lugares incluídos",
  },
  seeMore: "Ver mais",
  bookingForm: {
    page: {
      backToHome: "Voltar ao início",
      description:
        "Reserve sua viagem em detalhes aqui e cuidaremos de tudo para você",
      title: "Transfer personalizado",
    },
    fullName: "Nome completo",
    email: "Email",
    phone: "Telefone",
    vehicleType: "Tipo de veículo",
    from: "Origem",
    to: "Destino",
    date: "Data",
    time: "Hora",
    passengers: "Passageiros",
    luggage: "Bagagem",
    details: "Detalhes adicionais",
    detailsExample: "Qualquer informação específica sobre a viagem ou passageiros",
    attachImages: "Anexar imagens",
    reserveNow: "Reservar agora",
    subtitle: "Conte os detalhes para organizarmos sua viagem",
    example: "Ex.: número do voo, cadeirinha infantil, parada extra etc.",
    upload: "Enviar imagens",
    luggaageExample: "2 malas + 1 mochila",
    title: "Detalhes da reserva",
  },
  quickBookingForm: {
    page: {
      title: "Reserve um táxi em Cuba instantaneamente",
      backToHome: "Voltar ao início",
      description: "Reserve seu táxi em segundos",
    },
    phone: "Telefone",
    vehicleType: "Tipo de veículo",
    from: "Origem",
    to: "Destino",
    date: "Data",
    time: "Hora",
    passengers: "Passageiros",
    luggage: "Descrição da bagagem",
    reserveNow: "Reservar agora",
    telegram: "Reservar via Telegram",
    whatsapp: "Reservar via WhatsApp",
    messageTitle: "Detalhes da reserva",
  },
  footer: {
    rights: "© 2025 Cubantaxis. Todos os direitos reservados.",
  },
  underHeroTitle: "Páginas essenciais sobre táxis em Cuba",
  underHeroLinks: [
    {
      href: "/blog/how-much-is-a-taxi-in-cuba",
      title: "Quanto custa um táxi em Cuba?",
      description:
        "Conheça os preços reais de táxi em Cuba, de Havana a Varadero, incluindo traslados de aeroporto e rotas de longa distância.",
    },
    {
      href: "/destinations-in-cuba",
      title: "Destinos populares em Cuba",
      description:
        "Explore informações detalhadas sobre os principais destinos de Cuba: Havana, Varadero, Viñales e Trinidad.",
    },
    {
      href: "/interesting-places-in-cuba",
      title: "Atrações e pontos de interesse em Cuba",
      description:
        "Descubra as principais atrações de Cuba: resorts de Varadero, marcos de Havana, hotéis e atividades para famílias.",
    },
    {
      href: "/cuba-taxi-booking",
      title: "Reserva rápida de táxi",
      description:
        "Reserve uma corrida de táxi por Cuba com poucos cliques. Serviço rápido e confiável.",
    },
    {
      href: "/private-transfer-booking",
      title: "Reserva detalhada de transfer",
      description:
        "Planeje seu transfer com opções detalhadas de veículos, rotas e horários.",
    },
    {
      href: "/taxi-in-cuba",
      title: "Táxi em Cuba – Guia e FAQs",
      description:
        "Guia informativo sobre usar táxi em Cuba, com perguntas frequentes.",
    },
  ],
  FAQs: {
    title:
      "Quanto custa um táxi em Cuba, como conseguir um e outras perguntas...",
    items: [
      {
        question: "Como posso reservar um táxi em Cuba com antecedência?",
        answer:
          "Deixe seus dados no formulário e você receberá confirmação instantânea.",
      },
      {
        question: "Vocês fazem transfers privados do aeroporto de Havana?",
        answer:
          "Sim. Atendemos transfers privados do Aeroporto José Martí para qualquer destino em Cuba, incluindo Varadero, Viñales, Cayo Santa María e mais.",
      },
      {
        question:
          "Quanto custa um táxi do aeroporto de Varadero para Havana?",
        answer:
          "O preço do transfer privado começa em 100 USD por veículo. Veja a lista completa no nosso [blog](/blog/how-much-is-a-taxi-in-cuba).",
      },
      {
        question: "Os preços são por pessoa ou por carro?",
        answer:
          "Todos os preços no site são por veículo privado, independentemente do número de passageiros (até o limite de capacidade).",
      },
      {
        question:
          "Posso pagar em dólares, euros ou moeda local (CUP)?",
        answer:
          "Sim, aceitamos USD, EUR e CUP. Escolha a opção mais conveniente ao confirmar.",
      },
      {
        question: "O que acontece se meu voo atrasar?",
        answer:
          "Monitoramos a chegada do seu voo. Em caso de atraso, o motorista aguardará sem custo extra, desde que o número do voo esteja correto.",
      },
      {
        question:
          "Além de transfers, vocês oferecem excursões privadas?",
        answer:
          "Sim, você pode reservar excursões privadas como passeios a Viñales, Cienfuegos e Trinidad.",
      },
      {
        question: "Quais tipos de veículos vocês oferecem?",
        answer:
          "Você pode escolher entre carros clássicos, conversíveis, veículos modernos ou minivans, conforme sua preferência e número de passageiros.",
      },
      {
        question: "Posso solicitar transfer noturno?",
        answer:
          "Sim, atendemos 24/7. Transfers noturnos podem ter pequena taxa adicional.",
      },
      {
        question: "Como saberei que meu transfer está confirmado?",
        answer:
          "Você receberá confirmação via WhatsApp ou email com os detalhes e o nome do motorista.",
      },
    ],
  },
  locations: [
    "Aeroporto de Havana",
    "Aeroporto de Varadero",
    "Varadero",
    "Havana",
    "Cayo Coco",
    "Cienfuegos",
    "Santa Clara",
    "Trinidad",
    "Viñales",
    "Cayo Santa María",
    "Cayo Guillermo",
  ],
  vehicles: ["Carro clássico", "Tour", "Van"],
  clipboardTemplate: {
    copied: "✅ Modelo copiado. Cole no chat do Telegram",
    error: "❌ Ocorreu um erro ao preparar a reserva",
  },
  howMuchIsATaxi: "Quanto custa um táxi em Cuba em 2025?",
};

