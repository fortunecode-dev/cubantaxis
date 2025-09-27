import { HeaderItems } from "@/types/common";

export const header: HeaderItems = [
  {
    key: "blog", label: "Blog", items: [
      { title: "How much is a taxi in Cuba?", href: `/blog/how-much-is-a-taxi-in-cuba` },
    ], allHref: `/blog`, allLabel: "All articles"
  },
  {
    key: "places", label: "Interesting Places", items: [
      { title: "Gran Hotel Manzana Kempinski", href: `/interesting-places-in-cuba/gran-hotel-manzana-kempinski` },
      { title: "Hotel Mystique Regis Havana", href: `/interesting-places-in-cuba/hotel-mystique-regis-habana` },
      { title: "Iberostar Selection Parque Central", href: `/interesting-places-in-cuba/iberostar-selection-parque-central` },
      { title: "Melia Internacional Varadero", href: `/interesting-places-in-cuba/melia-internacional-varadero` },
      { title: "Melia Las Americas", href: `/interesting-places-in-cuba/melia-las-americas` },
      { title: "Ocio Club", href: `/interesting-places-in-cuba/ocio-club` },
    ], allHref: `/interesting-places-in-cuba`, allLabel: "View all"
  },
  {
    key: "destinations", label: "Destinations", href: `/destinations-in-cuba`
  },
  {
    key: "faqs", label: "FAQs", href: `/#faq-title`
  }
]
