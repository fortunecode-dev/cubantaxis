import { HeaderItems } from "@/types/common";

export const header: HeaderItems = [
  {
    key: "blog", label: "Blog", items: [
      { title: "Combien coûte un taxi à Cuba ?", href: `/fr/blog/how-much-is-a-taxi-in-cuba` },{ 
    title: "Taxi Privé ou Location de Voiture à Cuba", 
    href: `/fr/blog/private-taxi-or-car-rental` 
},
    ], allHref: `/fr/blog`, allLabel: "Tous les articles"
  },
  {
    key: "places", label: "Lieux intéressants", items: [
      { title: "Gran Hotel Manzana Kempinski", href: `/fr/interesting-places-in-cuba/gran-hotel-manzana-kempinski` },
      { title: "Hotel Mystique Regis La Havane", href: `/fr/interesting-places-in-cuba/hotel-mystique-regis-habana` },
      { title: "Iberostar Selection Parque Central", href: `/fr/interesting-places-in-cuba/iberostar-selection-parque-central` },
      { title: "Meliá Internacional Varadero", href: `/fr/interesting-places-in-cuba/melia-internacional-varadero` },
      { title: "Meliá Las Américas", href: `/fr/interesting-places-in-cuba/melia-las-americas` },
      { title: "Ocio Club", href: `/fr/interesting-places-in-cuba/ocio-club` },
    ], allHref: `/fr/interesting-places-in-cuba`, allLabel: "Voir tout"
  },
  {
    key: "destinations", label: "Destinations", href: `/fr/destinations-in-cuba`
  },
  {
    key: "faqs", label: "FAQs", href: `/fr#faq-title`
  }
];
