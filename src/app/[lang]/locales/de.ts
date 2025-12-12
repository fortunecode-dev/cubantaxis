// de.ts
import type { AppTexts } from "./types";
import { metadata } from "./metadata/metadata.de";
import { header } from "./header/de";
import { content } from "./pageContent/de";
import { articles } from "./blog/de";
import { booking } from "./booking/de";
import { confirmationTexts } from "./others/confirmation.locale";
import { mainSeo } from "./landing/content.locale";
import { navLocales } from "./others/nav.locale";
export const de: AppTexts = {
  priceFaq:
    "Wie viel kostet ein Taxi von | nach | ?|Ein privates klassisches Auto kostet | ein privater Minivan kostet | , und die Preise gelten pro Fahrzeug, nicht pro Person.",
  metadata,
  header,
  content,
  articles,
  booking,
  backToHome: "Zurück zur Startseite",
  taxiGuide: "Umfassender Kuba-Taxi-Leitfaden",
  exploreDestinations: "Ziele entdecken →",
  nav: navLocales.de,

  hero: {
    h1: "Buchen Sie ein Taxi in Kuba – schnell, sicher und zuverlässig",
    h2a: "Der schnellste Weg zu einem Taxi für ",
    h2b: ": Havanna, Varadero, Trinidad, Viñales und mehr.",
    transfer: "Flughafentransfers",
    shared: "Sammelfahrten",
    and: " und ",
    interCity: "Fern- & Intercity-Taxis",
    p: "Buchen Sie Ihr Taxi in Kuba ohne Aufwand. Hinterlassen Sie Ihre Daten und wir bestätigen die Fahrt innerhalb weniger Minuten.",
    buttons: {
      booking: "Privates Taxi in Kuba buchen",
      fastBooking: "Schnellbuchung",
    },
    contents: {
      destinations: "Reiseziele",
      excursions: "Ausflüge",
      howTo: "So funktioniert’s",
    },
    services: [
      "Private Transfers in Kuba",
      "Taxi zum Flughafen Havanna",
      "Express-Taxibuchung",
      "Stadtrundfahrten in Havanna",
      "Ausflüge ab Varadero",
      "Sammeltaxis in Kuba",
      "Fahrten zu den Oststränden",
      "Reiseführer in Kuba",
    ],
  },
  destinationsCard: {
    title: "Reiseziele",
    subTitle: "Sehenswerte Orte in Kuba",
    description: "Entdecken Sie unsere beliebtesten Zieloptionen.",
  },
  excursionsCard: {
    title: "Ausflüge",
    places: "Enthaltene Orte",
  },
  seeMore: "Mehr anzeigen",
  bookingForm: {
    page: {
      backToHome: "Zurück zur Startseite",
      description:
        "Buchen Sie Ihre Fahrt hier im Detail – wir kümmern uns um den Rest",
      title: "Individueller Transfer",
    },
    fullName: "Vollständiger Name",
    email: "E-Mail",
    phone: "Telefon",
    vehicleType: "Fahrzeugtyp",
    from: "Von",
    to: "Nach",
    date: "Datum",
    time: "Uhrzeit",
    passengers: "Passagiere",
    luggage: "Gepäck",
    details: "Zusätzliche Details",
    detailsExample:
      "Alle spezifischen Informationen zur Fahrt oder zu den Passagieren",
    attachImages: "Bilder anhängen",
    reserveNow: "Jetzt buchen",
    subtitle:
      "Teilen Sie uns die Details mit, damit wir Ihre Reise organisieren",
    example: "Beispiel: Flugnummer, Kindersitz, zusätzlicher Stopp usw.",
    upload: "Bilder hochladen",
    luggaageExample: "2 Koffer + 1 Rucksack",
    title: "Buchungsdetails",
  },
  quickBookingForm: {
    page: {
      title: "Taxi in Kuba sofort buchen",
      backToHome: "Zurück zur Startseite",
      description: "Buchen Sie Ihr Taxi in Sekunden",
    },
    phone: "Telefon",
    vehicleType: "Fahrzeugtyp",
    from: "Von",
    to: "Nach",
    date: "Datum",
    time: "Uhrzeit",
    passengers: "Passagiere",
    luggage: "Gepäckbeschreibung",
    reserveNow: "Jetzt buchen",
    telegram: "Über Telegram buchen",
    whatsapp: "Über WhatsApp buchen",
    messageTitle: "Buchungsdetails",
  },
  footer: {
    rights: "© 2025 Cubantaxis. Alle Rechte vorbehalten.",
  },
  underHeroTitle: "Wichtige Seiten über Taxis in Kuba",
  underHeroLinks: [
    {
      href: "/blog/how-much-is-a-taxi-in-cuba",
      title: "Wie viel kostet ein Taxi in Kuba?",
      description:
        "Erfahren Sie echte Taxipreise in Kuba – von Havanna bis Varadero, inklusive Flughafentransfers und Langstrecken.",
    },
    {
      href: "/destinations-in-cuba",
      title: "Beliebte Reiseziele in Kuba",
      description:
        "Detaillierte Infos zu den wichtigsten Zielen: Havanna, Varadero, Viñales und Trinidad.",
    },
    {
      href: "/interesting-places-in-cuba",
      title: "Attraktionen & Sehenswürdigkeiten in Kuba",
      description:
        "Entdecken Sie Top-Attraktionen: Varadero-Resorts, Wahrzeichen Havannas, Hotels und Familienaktivitäten.",
    },
    {
      href: "/taxi",
      title: "Schnelle Taxireservierung",
      description:
        "Buchen Sie eine Taxifahrt in Kuba mit wenigen Klicks. Schnell und zuverlässig.",
    },
    {
      href: "/private-transfer-booking",
      title: "Detaillierte Transferbuchung",
      description:
        "Planen Sie Ihren Transfer mit Fahrzeug-, Routen- und Zeitwahl.",
    },
    {
      href: "/taxi-in-cuba",
      title: "Taxi in Kuba – Leitfaden & FAQs",
      description:
        "Informative Anleitung zum Taxifahren in Kuba mit häufigen Fragen.",
    },
  ],
  FAQs: {
    title: "Wie viel kostet ein Taxi in Kuba, wie buche ich es und mehr …",
    items: [
      {
        question: "Wie kann ich ein Taxi in Kuba im Voraus buchen?",
        answer:
          "Hinterlassen Sie uns Ihre Daten im Formular – Sie erhalten sofort eine Bestätigung.",
      },
      {
        question: "Bieten Sie private Transfers vom Flughafen Havanna an?",
        answer:
          "Ja. Wir bieten private Transfers vom Flughafen José Martí zu jedem Ziel in Kuba, u. a. Varadero, Viñales, Cayo Santa María.",
      },
      {
        question:
          "Wie viel kostet ein Taxi vom Flughafen Varadero nach Havanna?",
        answer:
          "Der Preis für einen privaten Transfer beginnt ab 80 USD pro Fahrzeug. Die vollständige Liste finden Sie in unserem [Blog](/blog/how-much-is-a-taxi-in-cuba).",
      },
      {
        question: "Sind die Preise pro Person oder pro Fahrzeug?",
        answer:
          "Alle Preise auf der Website gelten pro Privatfahrzeug – unabhängig von der Personenzahl (bis zur max. Kapazität).",
      },
      {
        question: "Kann ich in USD, EUR oder in CUP (Landeswährung) bezahlen?",
        answer:
          "Ja, wir akzeptieren USD, EUR und CUP. Wählen Sie die passende Option bei der Bestätigung.",
      },
      {
        question: "Was passiert, wenn mein Flug verspätet ist?",
        answer:
          "Wir verfolgen Ihre Flugankunft. Bei Verspätungen wartet der Fahrer ohne Aufpreis, sofern die Flugnummer korrekt angegeben wurde.",
      },
      {
        question: "Bieten Sie neben Transfers auch private Ausflüge an?",
        answer: "Ja, z. B. Touren nach Viñales, Cienfuegos und Trinidad.",
      },
      {
        question: "Welche Fahrzeugtypen stehen zur Auswahl?",
        answer:
          "Sie können zwischen Oldtimern, Cabrios, modernen Fahrzeugen oder Minivans wählen – je nach Vorlieben und Personenzahl.",
      },
      {
        question: "Kann ich einen Nachttransfer anfragen?",
        answer:
          "Ja, 24/7-Service. Nachtransfers können einen kleinen Zuschlag haben.",
      },
      {
        question: "Woran erkenne ich, dass mein Transfer bestätigt ist?",
        answer:
          "Sie erhalten eine Bestätigung per WhatsApp oder E-Mail mit Reisedetails und Fahrername.",
      },
    ],
  },
  locations: [
    "Flughafen Havanna",
    "Flughafen Varadero",
    "Varadero",
    "Havanna",
    "Cayo Coco",
    "Cienfuegos",
    "Santa Clara",
    "Trinidad",
    "Viñales",
    "Cayo Santa María",
    "Cayo Guillermo",
  ],
  vehicles: ["Klassischer Wagen", "Tour", "Van"],
  clipboardTemplate: {
    copied: "✅ Vorlage kopiert. Fügen Sie sie im Telegram-Chat ein",
    error: "❌ Beim Vorbereiten der Buchung ist ein Fehler aufgetreten",
  },
  howMuchIsATaxi: "Wie viel kostet ein Taxi in Kuba im Jahr 2025?",
  mainSeo: mainSeo.de,
  confirmationTexts: confirmationTexts.de,
};
