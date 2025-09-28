// metadata.pt.ts
// Palavras-chave (PT): táxi em cuba, transfer, passeios (tours), reserva, hotel, varadero, havana
import { customMetaData } from "@/seoUtils/metadata";
import { buildAlternates, buildAlternatesMetadata } from "@/seoUtils/seo-builder";

export const metadata: Partial<customMetaData> = {
  landingPage: {
    title: "Táxi em Cuba | Transfers & Reserva de Passeios | CubanTaxis",
    description: "Reserve táxis em Cuba para transfers e passeios online. Preços fixos, reserva rápida e motoristas que falam inglês em Havana e Varadero com a CubanTaxis.",
    alternates: buildAlternatesMetadata("", "pt"),
  },

  blog: {
    self: {
      title: "Blog de Táxi em Cuba | Transfers, Passeios & Dicas de Reserv",
      description: "Guias e dicas sobre táxi em Cuba: transfers, passeios e reserva. Saiba como viajar entre Havana, Varadero e outros destinos com a CubanTaxis.",
      alternates: buildAlternatesMetadata("/blog", "pt"),
    },
    howMuchIsATaxiInCuba: {
      title:
        "Preços de Táxi em Cuba 2025 | Transfers & Reserva de Passeio",
      description: "Confira os preços de táxi em Cuba 2025. Compare transfers, passeios e opções de reserva entre Havana, Varadero e mais com a CubanTaxis.",
      alternates: buildAlternatesMetadata("/blog/how-much-is-a-taxi-in-cuba", "pt"),
    },
  },

  customBooking: {
    title: "Reserva Personalizada de Táxi em Cuba | Transfers Privados &",
    description: "Personalize sua reserva de táxi em Cuba. Escolha transfers, passeios, carros e destinos em Havana e Varadero com a CubanTaxis.",
    alternates: buildAlternatesMetadata("/private-transfer-booking", "pt"),
  },

  fastBooking: {
    title: "Reserva Rápida de Táxi em Cuba | Transfers de Aeroporto & Pa",
    description: "Reserva rápida de táxi para transfers de aeroporto e passeios. Motoristas confiáveis, preços fixos, rotas Havana & Varadero com a CubanTaxis.",
    alternates: buildAlternatesMetadata("/cuba-taxi-booking", "pt"),
  },

  destinationsInCuba: {
    title: "CubanTaxis Destinos em Cuba | Transfers de Táxi, Passeios & ",
    description: "A CubanTaxis conecta você aos melhores destinos de Cuba. Reserve transfers de táxi, passeios e viagens a hotéis em Havana, Varadero e além.",
    alternates: buildAlternatesMetadata("/destinations-in-cuba", "pt"),
  },

  taxiInCuba: {
    title: "Guia 2025 da CubanTaxis | Táxi em Cuba, Transfers & Passeios",
    description: "Descubra Cuba em 2025 com a CubanTaxis: seu parceiro para táxis, transfers, passeios e reservas em Havana, Varadero e por toda a ilha.",
    alternates: buildAlternatesMetadata("/taxi-in-cuba", "pt"),
  },

  interestingPlaces: {
    self: {
      title: "CubanTaxis | Lugares de Interesse em Cuba, Hotéis & Passeios",
      description: "A CubanTaxis leva você aos melhores hotéis e pontos de interesse em Cuba. Reserve transfers de táxi, passeios e estadias em Havana e Varadero.",
      alternates: buildAlternatesMetadata("/interesting-places-in-cuba", "pt"),
    },

    granHotelManzanaKempinski: {
      title: "CubanTaxis | Gran Hotel Manzana Kempinski Havana: Transfers ",
      description: "Viaje com a CubanTaxis ao Gran Hotel Manzana Kempinski em Havana. Reserve transfers de táxi, estadias e passeios guiados com facilidade.",
      alternates: buildAlternatesMetadata("/interesting-places-in-cuba/gran-hotel-manzana-kempinski", "pt"),
    },

    hotelMystiqueRegisHavana: {
      title: "CubanTaxis | Hotel Mystique Regis Havana: Transfers de Táxi ",
      description: "Reserve com a CubanTaxis sua estadia no Hotel Mystique Regis Havana. Transfers de táxi confiáveis, passeios e reserva de hotel.",
      alternates: buildAlternatesMetadata("/interesting-places-in-cuba/hotel-mystique-regis-habana", "pt"),
    },

    iberostarParqueCentral: {
      title: "CubanTaxis | Iberostar Parque Central Havana: Transfers & Re",
      description: "A CubanTaxis leva você ao Iberostar Parque Central. Reserve transfers de táxi em Havana, estadias de hotel e passeios rapidamente.",
      alternates: buildAlternatesMetadata("/interesting-places-in-cuba/iberostar-selection-parque-central", "pt"),
    },

    meliaInternacionalVaradero: {
      title: "CubanTaxis | Meliá Internacional Varadero: Transfers, Passei",
      description: "A CubanTaxis oferece transfers e passeios para o Meliá Internacional Varadero. Reserve sua estadia com serviço de táxi confiável em Cuba.",
      alternates: buildAlternatesMetadata("/interesting-places-in-cuba/melia-internacional-varadero", "pt"),
    },

    meliaLasAmericas: {
      title: "CubanTaxis | Meliá Las Américas Varadero: Transfers & Passei",
      description: "Planeje com a CubanTaxis sua visita ao Meliá Las Américas Varadero. Transfers de táxi, passeios e reserva de hotel na hora.",
      alternates: buildAlternatesMetadata("/interesting-places-in-cuba/melia-las-americas", "pt"),
    },

    ocioClub: {
      title: "CubanTaxis | Ocio Club Havana: Transfers, Vida Noturna & Pas",
      description: "Aproveite a noite de Havana no Ocio Club com a CubanTaxis. Reserve transfers de táxi, passeios e programas noturnos em Cuba facilmente.",
      alternates: buildAlternatesMetadata("/interesting-places-in-cuba/ocio-club", "pt"),
    },
  },
};
