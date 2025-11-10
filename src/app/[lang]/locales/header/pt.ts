import { HeaderItems } from "@/types/common";

export const header: HeaderItems = [
    {
        key: "blog", label: "Blog", items: [
            { title: "Quanto custa um táxi em Cuba?", href: `/pt/blog/how-much-is-a-taxi-in-cuba` },{ 
    title: "Táxi Privado ou Aluguel de Carro em Cuba", 
    href: `/blog/private-taxi-or-car-rental` 
},
        ], allHref: `/pt/blog`, allLabel: "Todos os artigos"
    },
    {
        key: "places", label: "Lugares interessantes", items: [
            { title: "Gran Hotel Manzana Kempinski", href: `/pt/interesting-places-in-cuba/gran-hotel-manzana-kempinski` },
            { title: "Hotel Mystique Regis Havana", href: `/pt/interesting-places-in-cuba/hotel-mystique-regis-habana` },
            { title: "Iberostar Selection Parque Central", href: `/pt/interesting-places-in-cuba/iberostar-selection-parque-central` },
            { title: "Meliá Internacional Varadero", href: `/pt/interesting-places-in-cuba/melia-internacional-varadero` },
            { title: "Meliá Las Américas", href: `/pt/interesting-places-in-cuba/melia-las-americas` },
            { title: "Ocio Club", href: `/pt/interesting-places-in-cuba/ocio-club` },
        ], allHref: `/pt/interesting-places-in-cuba`, allLabel: "Ver todos"
    },
    {
        key: "destinations", label: "Destinos", href: `/pt/destinations-in-cuba`
    },
    {
        key: "faqs", label: "Perguntas frequentes", href: `/pt#faq-title`
    }
];
