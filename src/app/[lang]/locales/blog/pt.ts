export const articles = {
  howMuchIsATaxiInCuba: {
    seo: {
      headline: "Preços de táxi em Cuba 2025",
      description:
        "Guia atualizado de tarifas de táxi e transfers em Cuba em 2025. Transfers dos aeroportos de Havana (HAV) e Varadero (VRA) e rotas entre cidades.",
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
  },privateTaxiOrCarRental: {
    seo: {
        headline: "Táxi Privado ou Aluguel de Carro — Qual é Melhor para Viajar em Cuba?",
        description:
            "Compare táxis privados vs. aluguel de carros em Cuba. Descubra qual opção combina com seu estilo de viagem, orçamento e conforto para trajetos desde Havana, Varadero, Trinidad ou Viñales.",
        image: "https://cubantaxis.com/blog/private-taxi-vs-car-rental.png",
        mainEntityOfPage: "https://cubantaxis.com/blog/private-taxi-vs-car-rental-cuba",
        authorName: "CubanTaxis",
        publisherName: "CubanTaxis",
        publisherLogo: "https://cubantaxis.com/logo.png",
    },
    ui: {
        heroSizes: "(min-width: 1024px) 900px, 100vw",
        comparisonNote:
            "Todos os preços são por carro (serviço privado). Baseados em traslados padrão em veículos modernos ou clássicos. Suplementos noturnos ou de longa distância podem ser aplicados.",
        ctaAltQuestion:
            "Precisa de um traslado privado ou quer combinar ambas opções no seu itinerário?",
    },
    breadcrumb: {
        homeLabel: "Início",
        blogLabel: "Blog",
        current: "Táxi Privado ou Aluguel de Carro — Qual é Melhor?",
    },
    badges: [
        { label: "Dicas de Viagem", tone: "accent" },
        { label: "Traslados em Cuba", tone: "primary" },
        { label: "Atualização 2025", tone: "neutral" },
    ],
    hero: {
        h1: "Táxi Privado ou Aluguel de Carro — Qual é Melhor para Viajar em Cuba?",
        introP1:
            "Está na dúvida entre reservar um táxi privado ou alugar um carro em Cuba? Aqui está um guia detalhado comparando conforto, custo, flexibilidade e conveniência para rotas como Havana–Varadero, Viñales e Trinidad.",
        ctaPrimary: { label: "Reservar táxi privado", href: "/cuba-taxi-booking" },
        ctaSecondary: { label: "Ver preços por rota", href: "#comparison" },
        subNotePrefix: "Atualizado 2025",
        subNoteSuffix: "· Preços por carro (clássico/moderno ou minivan)",
        heroImage: {
            src: "/private-taxi-vs-car-rental.png",
            alt: "Viajante escolhendo entre táxi privado e aluguel de carro em Cuba",
            width: 900,
            height: 630,
        },
    },
    valueProps: [
        {
            title: "Preços transparentes",
            desc: "Cotações confirmadas para aeroportos e rotas intermunicipais. Sem taxas ocultas.",
        },
        {
            title: "O veículo certo para você",
            desc: "Carros clássicos para passeios urbanos ou minivans confortáveis para famílias.",
        },
        {
            title: "Traslados confiáveis",
            desc: "Motoristas que falam inglês e monitoramento de voos para chegadas ao aeroporto.",
        },
    ],
    sections: {
        privateTaxi: {
            title: "Táxi Privado: Conforto Sem Estresse",
            paragraph1:
                "Um táxi privado em Cuba oferece o equilíbrio ideal entre conforto, confiabilidade e experiência local. É perfeito se você quer aproveitar sua viagem sem se preocupar com navegação ou condições das estradas.",
            advantages: [
                "Você não precisa dirigir — o motorista local cuida de tudo.",
                "Preços fixos por rota evitam custos ocultos ou surpresas com combustível.",
                "Flexibilidade para parar para fotos ou refeições pelo caminho.",
                "Motoristas bilíngues que conhecem os melhores lugares de Cuba.",
            ],
            samplePrices: [
                { route: "Havana → Varadero", price: "a partir de $100 (carro moderno) / $180 (minivan)" },
                { route: "Havana → Viñales", price: "$180–$200" },
                { route: "Havana → Cayo Santa María", price: "$350 (carro privado)" },
            ],
            bestFor:
                "Casais, famílias ou viajantes que buscam uma experiência relaxada com serviço porta a porta confiável.",
        },
        carRental: {
            title: "Aluguel de Carro: Liberdade com Responsabilidade",
            paragraph1:
                "Alugar um carro em Cuba oferece independência total para explorar no seu ritmo. No entanto, exige preparação e tolerância aos desafios únicos das estradas da ilha.",
            pros: [
                "Liberdade total para escolher sua rota e horários.",
                "Ideal para estadias longas ou destinos menos turísticos.",
                "Perfeito para viajantes aventureiros.",
            ],
            cons: [
                "Disponibilidade limitada de veículos, especialmente na alta temporada.",
                "Possíveis problemas de manutenção ou conforto em modelos antigos.",
                "Custos ocultos: seguro, depósitos e combustível.",
                "Dificuldades de navegação e sinal móvel fraco em áreas rurais.",
            ],
            estimatedCosts:
                "O aluguel de carros em Cuba geralmente custa $70–$120 por dia, mais seguro e combustível. Uma viagem de 5 dias pode superar $500, semelhante a contratar um motorista privado.",
        },
        comparison: {
            title: "Comparação de Custo & Conforto — Havana ↔ Varadero (Ida e Volta)",
            table: {
                columns: ["Opção", "Preço Total", "Conforto", "Flexibilidade", "Esforço"],
                rows: [
                    {
                        option: "Táxi Privado",
                        totalPrice: "$100–$180",
                        comfort: "★★★★★",
                        flexibility: "★★★★☆",
                        effort: "Mínimo",
                    },
                    {
                        option: "Aluguel de Carro",
                        totalPrice: "$150–$250",
                        comfort: "★★★☆☆",
                        flexibility: "★★★★★",
                        effort: "Alto",
                    },
                ],
            },
            verdict:
                "Para a maioria dos visitantes, táxis privados oferecem melhor custo-benefício e tranquilidade. O aluguel é ideal para quem prioriza independência acima da conveniência.",
        },
        hybridOption: {
            title: "Passeios Privados — O Melhor dos Dois Mundos",
            paragraph:
                "Se você quer explorar sem dirigir, os passeios privados são uma opção híbrida perfeita. Você obtém liberdade e flexibilidade com o conforto de um motorista local.",
            examples: [
                "City Tour Havana (3h): a partir de $75–$120 por carro",
                "Tour Vale de Viñales (10h): a partir de $280–$360 por carro",
            ],
            cta: { label: "Ver todos os passeios", href: "/destinations-in-cuba" },
        },
        conclusion: {
            title: "Conclusão — Qual Escolher?",
            paragraph1:
                "Tanto táxis privados quanto aluguel de carros têm seus méritos. A escolha depende da sua personalidade de viagem e objetivos.",
            bulletSummary: [
                "Escolha táxi privado se deseja segurança, conforto e conhecimento local.",
                "Escolha aluguel de carro se valoriza liberdade e não se importa com desafios.",
            ],
            closingNote:
                "Independentemente da sua escolha, cada estrada cubana conta uma história — dos conversíveis de Havana aos vales tranquilos de Viñales.",
        },
    },
    prices: {
        title: "Preços de Táxi em Cuba por Rota (2025)",
        intro:
            "Preços por carro (serviço privado). A cotação final depende do tipo de carro (clássico/moderno ou minivan), ponto de partida, suplementos noturnos e paradas opcionais.",
        columns: {
            route: "Rota",
            classicModern: "Clássico / Moderno",
            minivan: "Minivan",
            notes: "Notas",
        },
        rows: [
            { route: "Aeroporto de Havana (HAV) → Centro", classicModern: "$30", minivan: "$55", notes: "Traslado típico de chegada" },
            { route: "Havana → Varadero", classicModern: "$100", minivan: "$180", notes: "Ida e volta no mesmo dia disponível" },
            { route: "Havana → Viñales", classicModern: "$130", minivan: "$200", notes: "Ida e volta sob consulta" },
            { route: "Havana → Trinidad", classicModern: "$250", minivan: "$320", notes: "Via Cienfuegos opcional" },
            { route: "Varadero → Cienfuegos", classicModern: "$120", minivan: "$205" },
            { route: "Varadero → Trinidad", classicModern: "$250", minivan: "$270" },
            { route: "Aeroporto de Varadero (VRA) → Hotéis", classicModern: "$40", minivan: "$60–70" },
        ],
        footnote:
            "Os preços podem variar para pick-ups distantes do KM-0 (Capitólio) em Havana e para horários noturnos.",
        cta: { label: "Solicitar cotação", href: "/cuba-taxi-booking" },
    },
    tips: {
        whatAffects: {
            title: "O que influencia o preço?",
            items: [
                "Distância e tempo de viagem entre cidades",
                "Tipo de veículo: carro clássico/moderno ou minivan",
                "Horário do traslado (dia vs. noite), estacionamento e tempo de espera no aeroporto",
                "Transfer privado vs. compartilhado e paradas opcionais de passeio",
            ],
        },
        touristTips: {
            title: "Dicas para turistas",
            paragraphPrefix:
                "Reserve com antecedência para garantir tarifa fixa e compartilhe seu número de voo para chegadas ao aeroporto. Traslados privados são a opção mais prática e segura. Você pode",
            link: { label: "reservar seu táxi online", href: "/private-transfer-booking" },
            paragraphSuffix: "e pagar na chegada.",
        },
    },
    ctaFooter: {
        text: "Pronto para planejar sua próxima rota em Cuba?",
        primary: { label: "Reservar traslado", href: "/cuba-taxi-booking" },
        secondary: { label: "Explorar passeios privados", href: "/destinations-in-cuba" },
    },
}
}
