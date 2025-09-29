export const articles = {
  howMuchIsATaxiInCuba: {
    seo: {
      headline: "Taxipreise in Kuba 2025",
      description:
        "Aktueller Leitfaden zu Taxitarifen und Transfers in Kuba 2025. Flughafentransfers Havanna (HAV) und Varadero (VRA) sowie Verbindungen zwischen Städten.",
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
        "Preise gelten pro Auto (Privatservice). Der Endpreis hängt vom Fahrzeugtyp (klassisch/modern oder Minivan), Abholpunkt, Nachtzuschlägen und optionalen Stopps ab.",
      ctaAltQuestion:
        "Andere Strecke oder ein klassisches Cabrio für eine Stadtrundfahrt nötig?",
    },
    breadcrumb: {
      homeLabel: "Start",
      blogLabel: "Blog",
      current: "Taxipreise in Kuba 2025",
    },
    badges: [
      { label: "Preise 2025", tone: "accent" },
      { label: "Private Transfers", tone: "primary" },
      { label: "Englischsprachige Fahrer", tone: "primary" },
    ],
    hero: {
      h1: "Wie viel kostet ein Taxi in Kuba 2025?",
      introP1:
        "Aktualisierter Leitfaden zu Taxipreisen und Transfers in Kuba. Reale Tarife ab Havanna (HAV / José Martí) und Varadero (VRA) nach Varadero, Viñales, Trinidad, Cienfuegos u. a. Feste Preise pro Auto, nicht pro Person.",
      ctaPrimary: { label: "Privattransfer buchen", href: "/cuba-taxi-booking" },
      ctaSecondary: { label: "Preistabelle ansehen", href: "#prices" },
      subNotePrefix: "Aktualisiert",
      subNoteSuffix: "· Preise pro Auto (klassisch/modern oder Minivan)",
      heroImage: {
        src: "/cuba-cabs.jpg",
        alt: "Klassisches Taxi in Havanna, Kuba",
        width: 900,
        height: 630,
      },
    },
    valueProps: [
      { title: "Transparente Preise", desc: "Bestätigte Angebote für Flughäfen und Stadt-zu-Stadt-Routen. Keine versteckten Gebühren." },
      { title: "Das passende Fahrzeug", desc: "Klassische Wagen für Stadttouren oder komfortable Minivans für Familien." },
      { title: "Zuverlässige Abholungen", desc: "Englischsprachige Fahrer und Flugüberwachung bei Ankünften." },
    ],
    prices: {
      title: "Taxipreise in Kuba nach Strecke (2025)",
      intro:
        "Preise pro Auto (Privatservice). Endpreis je nach Fahrzeugtyp, Abholpunkt, Nachtzuschlägen und optionalen Stopps.",
      columns: { route: "Strecke", classicModern: "Klassisch / Modern", minivan: "Minivan", notes: "Hinweise" },
      rows: [
        { route: "Flughafen Havanna (HAV) → Zentrum", classicModern: "$30", minivan: "$55", notes: "Typischer Ankunftstransfer" },
        { route: "Havanna → Varadero", classicModern: "$100", minivan: "$180", notes: "Tages-Hin-&-Rückfahrt möglich" },
        { route: "Havanna → Viñales", classicModern: "$130", minivan: "$200", notes: "Hin-&-Rück auf Anfrage" },
        { route: "Havanna → Trinidad", classicModern: "$250", minivan: "$320", notes: "Optional via Cienfuegos" },
        { route: "Varadero → Cienfuegos", classicModern: "$120", minivan: "$205" },
        { route: "Varadero → Trinidad", classicModern: "$250", minivan: "$270" },
        { route: "Flughafen Varadero (VRA) → Hotels", classicModern: "$40", minivan: "$60–70" },
      ],
      footnote:
        "Preise können abweichen bei Abholungen weit vom KM-0 Havannas (Capitol) und in Nachtstunden.",
      cta: { label: "Angebot anfordern", href: "/cuba-taxi-booking" },
    },
    tips: {
      whatAffects: {
        title: "Was beeinflusst den Preis?",
        items: [
          "Distanz und Fahrzeit zwischen Städten",
          "Fahrzeugtyp: klassisch/modern oder Minivan",
          "Tag vs. Nacht, Flughafenparkgebühren und Wartezeit",
          "Privat- vs. Sammeltransfer und optionale Sightseeing-Stopps",
        ],
      },
      touristTips: {
        title: "Tipps für Reisende",
        paragraphPrefix:
          "Im Voraus buchen, um einen Festpreis zu sichern, und die Flugnummer für Flughafenabholungen mitteilen. Private Transfers sind die bequemste und sicherste Option. Sie können",
        link: { label: "Ihren Taxi-Transfer online buchen", href: "/private-transfer-booking" },
        paragraphSuffix: "und bei Ankunft bezahlen.",
      },
    },
  },
}
