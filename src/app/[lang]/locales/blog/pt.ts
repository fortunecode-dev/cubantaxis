export const articles = {
  howMuchIsATaxiInCuba: {
    seo: {
      headline: "Preços de táxi em Cuba 2025",
      description:
        "Guia atualizado de tarifas de táxi e transfers em Cuba em 2025. Transfers dos aeroportos de Havana (HAV) e Varadero (VRA) e rotas entre cidades.",
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
        "Os preços são por carro (serviço privado). A cotação final depende do tipo de veículo (clássico/moderno ou minivan), ponto de pick-up, adicionais noturnos e paradas opcionais.",
      ctaAltQuestion:
        "Precisa de outra rota ou de um conversível clássico para um city tour?",
    },
    breadcrumb: {
      homeLabel: "Início",
      blogLabel: "Blog",
      current: "Preços de táxi em Cuba 2025",
    },
    badges: [
      { label: "Preços 2025", tone: "accent" },
      { label: "Transfers privados", tone: "primary" },
      { label: "Motoristas que falam inglês", tone: "primary" },
    ],
    hero: {
      h1: "Quanto custa um táxi em Cuba em 2025?",
      introP1:
        "Guia atualizado de preços de táxi e transfers em Cuba. Tarifas reais desde Havana (HAV / José Martí) e Varadero (VRA) para Varadero, Viñales, Trinidad, Cienfuegos e mais. Tarifas fixas por carro, não por pessoa.",
      ctaPrimary: { label: "Reservar transfer privado", href: "/cuba-taxi-booking" },
      ctaSecondary: { label: "Ver tabela de preços", href: "#prices" },
      subNotePrefix: "Atualizado",
      subNoteSuffix: "· Preços por carro (clássico/moderno ou minivan)",
      heroImage: {
        src: "/cuba-cabs.jpg",
        alt: "Táxi clássico em Havana, Cuba",
        width: 900,
        height: 630,
      },
    },
    valueProps: [
      { title: "Preços transparentes", desc: "Cotações confirmadas para aeroportos e rotas interurbanas. Nada de taxas escondidas." },
      { title: "O veículo certo para você", desc: "Carros clássicos para passeios na cidade ou minivans confortáveis para famílias." },
      { title: "Pick-ups confiáveis", desc: "Motoristas que falam inglês e monitoramento de voos para chegadas no aeroporto." },
    ],
    prices: {
      title: "Preços de táxi por rota em Cuba (2025)",
      intro:
        "Os preços são por carro (serviço privado). O valor final depende do tipo de veículo, ponto de pick-up, adicionais noturnos e paradas opcionais.",
      columns: { route: "Rota", classicModern: "Clássico / Moderno", minivan: "Minivan", notes: "Observações" },
      rows: [
        { route: "Aeroporto de Havana (HAV) → Centro", classicModern: "$30", minivan: "$55", notes: "Transfer típico de chegada" },
        { route: "Havana → Varadero", classicModern: "$100", minivan: "$180", notes: "Ida e volta no mesmo dia disponível" },
        { route: "Havana → Viñales", classicModern: "$130", minivan: "$200", notes: "Ida e volta sob consulta" },
        { route: "Havana → Trinidad", classicModern: "$250", minivan: "$320", notes: "Opção via Cienfuegos" },
        { route: "Varadero → Cienfuegos", classicModern: "$120", minivan: "$205" },
        { route: "Varadero → Trinidad", classicModern: "$250", minivan: "$270" },
        { route: "Aeroporto de Varadero (VRA) → Hotéis", classicModern: "$40", minivan: "$60–70" },
      ],
      footnote:
        "Os preços podem variar para pick-ups longe do KM-0 de Havana (Capitólio) e em horário noturno.",
      cta: { label: "Pedir cotação", href: "/cuba-taxi-booking" },
    },
    tips: {
      whatAffects: {
        title: "O que influencia o preço?",
        items: [
          "Distância e tempo de viagem entre cidades",
          "Tipo de veículo: carro clássico/moderno ou minivan",
          "Pick-ups de dia vs. noite, estacionamento no aeroporto e tempo de espera",
          "Transfer privado vs. compartilhado e paradas turísticas opcionais",
        ],
      },
      touristTips: {
        title: "Dicas para turistas",
        paragraphPrefix:
          "Reserve com antecedência para garantir tarifa fixa e informe o número do voo para pick-ups no aeroporto. Transfers privados são a opção mais prática e segura. Você pode",
        link: { label: "reservar seu táxi online", href: "/private-transfer-booking" },
        paragraphSuffix: "e pagar na chegada.",
      },
    },
  },
}
