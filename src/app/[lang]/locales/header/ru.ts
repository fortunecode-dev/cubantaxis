import { HeaderItems } from "@/types/common";

export const header: HeaderItems = [
  {
    key: "blog", label: "Блог", items: [
      { title: "Сколько стоит такси на Кубе?", href: `/ru/blog/how-much-is-a-taxi-in-cuba` },
    ], allHref: `/ru/blog`, allLabel: "Все статьи"
  },
  {
    key: "places", label: "Интересные места", items: [
      { title: "Gran Hotel Manzana Kempinski", href: `/ru/interesting-places-in-cuba/gran-hotel-manzana-kempinski` },
      { title: "Hotel Mystique Regis Havana", href: `/ru/interesting-places-in-cuba/hotel-mystique-regis-habana` },
      { title: "Iberostar Selection Parque Central", href: `/ru/interesting-places-in-cuba/iberostar-selection-parque-central` },
      { title: "Melia Internacional Varadero", href: `/ru/interesting-places-in-cuba/melia-internacional-varadero` },
      { title: "Melia Las Americas", href: `/ru/interesting-places-in-cuba/melia-las-americas` },
      { title: "Ocio Club", href: `/ru/interesting-places-in-cuba/ocio-club` },
    ], allHref: `/ru/interesting-places-in-cuba`, allLabel: "Посмотреть все"
  },
  {
    key: "destinations", label: "Направления", href: `/ru/destinations-in-cuba`
  },
  {
    key: "faqs", label: "Вопросы и ответы", href: `/#faq-title`
  }
];
