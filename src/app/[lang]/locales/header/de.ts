import { HeaderItems } from "@/types/common";

export const header: HeaderItems = [
  {
    key: "blog", label: "Blog", items: [
      { title: "Wie viel kostet ein Taxi in Kuba?", href: `/de/blog/how-much-is-a-taxi-in-cuba` },{ 
    title: "Privates Taxi oder Mietwagen in Kuba", 
    href: `/de/blog/private-taxi-or-car-rental` 
},
    ], allHref: `/de/blog`, allLabel: "Alle Artikel"
  },
  {
    key: "places", label: "Interessante Orte", items: [
      { title: "Gran Hotel Manzana Kempinski", href: `/de/interesting-places-in-cuba/gran-hotel-manzana-kempinski` },
      { title: "Hotel Mystique Regis Havanna", href: `/de/interesting-places-in-cuba/hotel-mystique-regis-habana` },
      { title: "Iberostar Selection Parque Central", href: `/de/interesting-places-in-cuba/iberostar-selection-parque-central` },
      { title: "Melia Internacional Varadero", href: `/de/interesting-places-in-cuba/melia-internacional-varadero` },
      { title: "Melia Las Americas", href: `/de/interesting-places-in-cuba/melia-las-americas` },
      { title: "Ocio Club", href: `/de/interesting-places-in-cuba/ocio-club` },
    ], allHref: `/de/interesting-places-in-cuba`, allLabel: "Alle ansehen"
  },
  {
    key: "destinations", label: "Reiseziele", href: `/de/destinations-in-cuba`
  },
  {
    key: "faqs", label: "Häufige Fragen", href: `/de#faq-title`
  }
];
