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
  }, privateTaxiOrCarRental: {
    seo: {
      headline: "Privates Taxi oder Mietwagen — Was ist besser für Reisen in Kuba?",
      description:
        "Vergleichen Sie private Taxis und Mietwagen in Kuba. Finden Sie heraus, welche Option besser zu Ihrem Reisestil, Budget und Komfort für Strecken wie Havanna, Varadero, Trinidad oder Viñales passt.",
      image: "https://cubantaxis.com/blog/private-taxi-vs-car-rental.png",
      mainEntityOfPage: "https://cubantaxis.com/blog/private-taxi-vs-car-rental-cuba",
      authorName: "Cuban Taxis",
      publisherName: "Cuban Taxis",
      publisherLogo: "https://cubantaxis.com/logo.png",
    },
    ui: {
      heroSizes: "(min-width: 1024px) 900px, 100vw",
      comparisonNote:
        "Alle Preise gelten pro Fahrzeug (privater Service). Basierend auf Standardtransfers in modernen oder klassischen Autos. Zuschläge für Nacht- oder Langstrecken können anfallen.",
      ctaAltQuestion:
        "Benötigen Sie einen privaten Transfer oder möchten Sie beide Optionen in Ihrer Reiseroute kombinieren?",
    },
    breadcrumb: {
      homeLabel: "Startseite",
      blogLabel: "Blog",
      current: "Privates Taxi oder Mietwagen — Was ist besser?",
    },
    badges: [
      { label: "Reisetipps", tone: "accent" },
      { label: "Kuba Transfers", tone: "primary" },
      { label: "2025 Aktualisiert", tone: "neutral" },
    ],
    hero: {
      h1: "Privates Taxi oder Mietwagen — Was ist besser für Reisen in Kuba?",
      introP1:
        "Sie fragen sich, ob Sie ein privates Taxi buchen oder ein Auto in Kuba mieten sollten? Hier ist ein ausführlicher Vergleich von Komfort, Kosten, Flexibilität und Bequemlichkeit für Strecken wie Havanna–Varadero, Viñales und Trinidad.",
      ctaPrimary: { label: "Privates Taxi buchen", href: "/cuba-taxi-booking" },
      ctaSecondary: { label: "Routenpreise ansehen", href: "#comparison" },
      subNotePrefix: "Aktualisiert 2025",
      subNoteSuffix: "· Preise pro Fahrzeug (klassisch/modern oder Minivan)",
      heroImage: {
        src: "/private-taxi-vs-car-rental.png",
        alt: "Reisender, der zwischen privatem Taxi und Mietwagen in Kuba wählt",
        width: 900,
        height: 630,
      },
    },
    valueProps: [
      {
        title: "Transparente Preise",
        desc: "Bestätigte Angebote für Flughäfen und Stadtstrecken. Keine versteckten Gebühren.",
      },
      {
        title: "Das richtige Fahrzeug für Sie",
        desc: "Klassische Autos für Stadttouren oder komfortable Minivans für Familien.",
      },
      {
        title: "Zuverlässige Abholungen",
        desc: "Englischsprachige Fahrer und Flugüberwachung bei Flughafenankünften.",
      },
    ],
    sections: {
      privateTaxi: {
        title: "Privates Taxi: Komfort ohne Stress",
        paragraph1:
          "Ein privates Taxi in Kuba bietet die ideale Kombination aus Komfort, Zuverlässigkeit und lokalem Wissen. Perfekt, wenn Sie entspannen möchten, ohne sich um Navigation oder Straßenbedingungen zu kümmern.",
        advantages: [
          "Sie müssen nicht fahren — Ihr lokaler Fahrer übernimmt alles.",
          "Festgelegte Routenpreise vermeiden versteckte Kosten oder Überraschungen beim Kraftstoff.",
          "Flexibilität für Fotostopps oder Mahlzeiten entlang der Strecke.",
          "Zweisprachige Fahrer, die die besten Orte Kubas kennen.",
        ],
        samplePrices: [
          { route: "Havanna → Varadero", price: "ab $100 (modernes Auto) / $180 (Minivan)" },
          { route: "Havanna → Viñales", price: "$180–$200" },
          { route: "Havanna → Cayo Santa María", price: "$350 (Privatauto)" },
        ],
        bestFor:
          "Paare, Familien oder Reisende, die eine entspannte Erfahrung mit zuverlässigem Tür-zu-Tür-Service suchen.",
      },
      carRental: {
        title: "Mietwagen: Freiheit mit Verantwortung",
        paragraph1:
          "Ein Mietwagen in Kuba bietet volle Unabhängigkeit, um in Ihrem eigenen Tempo zu erkunden. Allerdings erfordert es Vorbereitung und die Bereitschaft, sich auf die besonderen Straßenverhältnisse des Landes einzustellen.",
        pros: [
          "Volle Freiheit bei Route und Zeitplan.",
          "Ideal für lange Aufenthalte oder abgelegenere Ziele.",
          "Perfekt für abenteuerlustige Reisende.",
        ],
        cons: [
          "Begrenzte Fahrzeugverfügbarkeit, besonders in der Hochsaison.",
          "Mögliche Wartungs- oder Komfortprobleme bei älteren Modellen.",
          "Versteckte Kosten: Versicherung, Kaution und Kraftstoff.",
          "Navigationsschwierigkeiten und schwaches mobiles Signal in ländlichen Gebieten.",
        ],
        estimatedCosts:
          "Mietwagen in Kuba kosten normalerweise $70–$120 pro Tag, zuzüglich Versicherung und Kraftstoff. Eine 5-tägige Reise kann über $500 kosten — ähnlich wie die Anmietung eines privaten Fahrers.",
      },
      comparison: {
        title: "Kosten- & Komfortvergleich — Havanna ↔ Varadero Rundreise",
        table: {
          columns: ["Option", "Gesamtpreis", "Komfort", "Flexibilität", "Aufwand"],
          rows: [
            {
              option: "Privates Taxi",
              totalPrice: "$100–$180",
              comfort: "★★★★★",
              flexibility: "★★★★☆",
              effort: "Minimal",
            },
            {
              option: "Mietwagen",
              totalPrice: "$150–$250",
              comfort: "★★★☆☆",
              flexibility: "★★★★★",
              effort: "Hoch",
            },
          ],
        },
        verdict:
          "Für die meisten Besucher bieten private Taxis ein besseres Preis-Leistungs-Verhältnis und mehr Ruhe. Mietwagen eignen sich für jene, die Unabhängigkeit über Bequemlichkeit stellen.",
      },
      hybridOption: {
        title: "Private Taxitouren — Das Beste aus beiden Welten",
        paragraph:
          "Wenn Sie erkunden möchten, ohne selbst zu fahren, sind private Taxitouren die perfekte Zwischenlösung. Sie erhalten Freiheit und Flexibilität mit dem Komfort eines lokalen Fahrers.",
        examples: [
          "Havanna Stadtrundfahrt (3h): ab $75–$120 pro Auto",
          "Viñales Tal Tour (10h): ab $280–$360 pro Auto",
        ],
        cta: { label: "Alle Touren ansehen", href: "/destinations-in-cuba" },
      },
      conclusion: {
        title: "Fazit — Welche Option sollten Sie wählen?",
        paragraph1:
          "Sowohl private Taxis als auch Mietwagen haben ihre Vorteile. Die richtige Wahl hängt von Ihrem Reisestil und Ihren Erwartungen ab.",
        bulletSummary: [
          "Wählen Sie ein privates Taxi, wenn Sicherheit, Komfort und lokales Wissen Priorität haben.",
          "Wählen Sie einen Mietwagen, wenn Freiheit und Abenteuer für Sie wichtiger sind als Bequemlichkeit.",
        ],
        closingNote:
          "Welche Wahl Sie auch treffen — jede kubanische Straße erzählt eine Geschichte, von den Oldtimern Havannas bis zu den ruhigen Tälern von Viñales.",
      },
    },
    prices: {
      title: "Taxipreise in Kuba nach Route (2025)",
      intro:
        "Preise gelten pro Fahrzeug (privater Service). Der endgültige Preis hängt vom Fahrzeugtyp (klassisch/modern oder Minivan), Abholort, Nachtzuschlägen und optionalen Stopps ab.",
      columns: {
        route: "Route",
        classicModern: "Klassisch / Modern",
        minivan: "Minivan",
        notes: "Hinweise",
      },
      rows: [
        { route: "Havanna Flughafen (HAV) → Zentrum", classicModern: "$30", minivan: "$55", notes: "Typischer Ankunftstransfer" },
        { route: "Havanna → Varadero", classicModern: "$100", minivan: "$180", notes: "Rückfahrt am selben Tag möglich" },
        { route: "Havanna → Viñales", classicModern: "$130", minivan: "$200", notes: "Hin- und Rückfahrt auf Anfrage" },
        { route: "Havanna → Trinidad", classicModern: "$250", minivan: "$320", notes: "Optional über Cienfuegos" },
        { route: "Varadero → Cienfuegos", classicModern: "$120", minivan: "$205" },
        { route: "Varadero → Trinidad", classicModern: "$250", minivan: "$270" },
        { route: "Varadero Flughafen (VRA) → Hotels", classicModern: "$40", minivan: "$60–70" },
      ],
      footnote:
        "Preise können für Abholungen weit außerhalb von Havannas Zentrum sowie für Nachtzeiten variieren.",
      cta: { label: "Preis anfragen", href: "/cuba-taxi-booking" },
    },
    tips: {
      whatAffects: {
        title: "Was beeinflusst den Preis?",
        items: [
          "Entfernung und Fahrzeit zwischen Städten",
          "Fahrzeugtyp: klassisches/modernes Auto oder Minivan",
          "Tag- vs. Nachtabholungen, Flughafenparkgebühren und Wartezeiten",
          "Privater vs. gemeinsamer Transfer sowie optionale Sightseeing-Stopps",
        ],
      },
      touristTips: {
        title: "Tipps für Reisende",
        paragraphPrefix:
          "Buchen Sie im Voraus, um einen Festpreis zu sichern, und teilen Sie Ihre Flugnummer für Flughafenabholungen mit. Private Transfers sind die bequemste und sicherste Option. Sie können",
        link: { label: "Ihr Taxi online buchen", href: "/private-transfer-booking" },
        paragraphSuffix: "und bei der Ankunft bezahlen.",
      },
    },
    ctaFooter: {
      text: "Bereit, Ihre nächste Route in Kuba zu planen?",
      primary: { label: "Transfer buchen", href: "/cuba-taxi-booking" },
      secondary: { label: "Private Touren entdecken", href: "/destinations-in-cuba" },
    },
  }

}
