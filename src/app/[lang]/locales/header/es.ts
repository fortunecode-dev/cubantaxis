import { HeaderItems } from "@/types/common";

export const header: HeaderItems = [
  {
    key: "blog", label: "Blog", items: [
      { title: "¿Cuánto cuesta un taxi en Cuba?", href: `/es/blog/how-much-is-a-taxi-in-cuba` },
    ], allHref: `/es/blog`, allLabel: "Todos los artículos"
  },
  {
    key: "places", label: "Lugares interesantes", items: [
      { title: "Gran Hotel Manzana Kempinski", href: `/es/interesting-places-in-cuba/gran-hotel-manzana-kempinski` },
      { title: "Hotel Mystique Regis Habana", href: `/es/interesting-places-in-cuba/hotel-mystique-regis-habana` },
      { title: "Iberostar Selection Parque Central", href: `/es/interesting-places-in-cuba/iberostar-selection-parque-central` },
      { title: "Meliá Internacional Varadero", href: `/es/interesting-places-in-cuba/melia-internacional-varadero` },
      { title: "Meliá Las Américas", href: `/es/interesting-places-in-cuba/melia-las-americas` },
      { title: "Ocio Club", href: `/es/interesting-places-in-cuba/ocio-club` },
    ], allHref: `/es/interesting-places-in-cuba`, allLabel: "Ver todos"
  },
  {
    key: "destinations", label: "Destinos", href: `/es/destinations-in-cuba`
  },
  {
    key: "faqs", label: "Preguntas frecuentes", href: `/es#faq-title`
  }
];
