// metadata.ru.ts
// Ключевые слова (RU): такси на кубе, трансферы, туры, бронирование, отель, варадеро, гавана
import { customMetaData } from "@/seoUtils/metadata";
import { buildAlternates, buildAlternatesMetadata } from "@/seoUtils/seo-builder";

export const metadata: Partial<customMetaData> = {
  landingPage: {
    title: "Такси на Кубе | Трансферы и Бронирование Туров | CubanTaxis",
    description:
      "Бронируйте такси на Кубе для трансферов и туров онлайн. Фиксированные цены, быстрая бронь, англоговорящие водители в Гаване и Варадеро с CubanTaxis.",
    alternates: buildAlternatesMetadata("", "ru"),
  },

  blog: {
    self: {
      title: "Блог о Такси на Кубе | Трансферы, Туры и Советы по Бронированию | CubanTaxis",
      description:
        "Гиды и советы по такси на Кубе: трансферы, туры и бронирование. Как добраться между Гаваной, Варадеро и другими направлениями с CubanTaxis.",
      alternates: buildAlternatesMetadata("/blog", "ru"),
    },
    howMuchIsATaxiInCuba: {
      title:
        "Цены на Такси на Кубе 2025 | Трансферы и Бронирование Туров Гавана и Варадеро | CubanTaxis",
      description:
        "Актуальные цены на такси на Кубе в 2025. Сравните трансферы, туры и варианты бронирования между Гаваной, Варадеро и другими городами с CubanTaxis.",
      alternates: buildAlternatesMetadata("/blog/how-much-is-a-taxi-in-cuba", "ru"),
    },
  },

  customBooking: {
    title: "Индивидуальное Бронирование Такси на Кубе | Частные Трансферы и Туры | CubanTaxis",
    description:
      "Настройте бронирование такси на Кубе: выберите трансферы, туры, авто и направления в Гаване и Варадеро вместе с CubanTaxis.",
    alternates: buildAlternatesMetadata("/private-transfer-booking", "ru"),
  },

  fastBooking: {
    title: "Быстрое Бронирование Такси на Кубе | Аэропортные Трансферы и Туры | CubanTaxis",
    description:
      "Мгновенное бронирование такси для аэропортных трансферов и туров. Фиксированные цены, надежные водители, маршруты Гавана и Варадеро с CubanTaxis.",
    alternates: buildAlternatesMetadata("/cuba-taxi-booking", "ru"),
  },

  destinationsInCuba: {
    title: "Направления CubanTaxis на Кубе | Такси-Трансферы, Туры и Отели",
    description:
      "CubanTaxis соединяет вас с лучшими направлениями Кубы. Бронируйте такси-трансферы, туры и поездки к отелям в Гаване, Варадеро и за их пределами.",
    alternates: buildAlternatesMetadata("/destinations-in-cuba", "ru"),
  },

  taxiInCuba: {
    title: "Путеводитель CubanTaxis 2025 | Такси на Кубе, Трансферы и Туры",
    description:
      "Откройте Кубу в 2025 с CubanTaxis: надежные такси, трансферы, туры и бронирование в Гаване, Варадеро и по всему острову.",
    alternates: buildAlternatesMetadata("/taxi-in-cuba", "ru"),
  },

  interestingPlaces: {
    self: {
      title: "CubanTaxis | Интересные Места на Кубе, Отели и Туры",
      description:
        "CubanTaxis доставит к лучшим отелям и достопримечательностям Кубы. Бронируйте такси-трансферы, туры и проживание в Гаване и Варадеро.",
      alternates: buildAlternatesMetadata("/interesting-places-in-cuba", "ru"),
    },

    granHotelManzanaKempinski: {
      title: "CubanTaxis | Gran Hotel Manzana Kempinski Гавана: Такси-Трансферы и Бронирование",
      description:
        "Путешествуйте с CubanTaxis в Gran Hotel Manzana Kempinski в Гаване. Легко бронируйте такси-трансферы, проживание и экскурсии.",
      alternates: buildAlternatesMetadata("/interesting-places-in-cuba/gran-hotel-manzana-kempinski", "ru"),
    },

    hotelMystiqueRegisHavana: {
      title: "CubanTaxis | Hotel Mystique Regis Гавана: Такси-Трансферы и Туры",
      description:
        "Забронируйте с CubanTaxis проживание в Hotel Mystique Regis Гавана. Надежные такси-трансферы, туры и бронирование отеля.",
      alternates: buildAlternatesMetadata("/interesting-places-in-cuba/hotel-mystique-regis-habana", "ru"),
    },

    iberostarParqueCentral: {
      title: "CubanTaxis | Iberostar Parque Central Гавана: Трансферы и Бронирование",
      description:
        "CubanTaxis поможет добраться до Iberostar Parque Central. Быстрое бронирование такси в Гаване, отеля и туров.",
      alternates: buildAlternatesMetadata("/interesting-places-in-cuba/iberostar-selection-parque-central", "ru"),
    },

    meliaInternacionalVaradero: {
      title: "CubanTaxis | Meliá Internacional Varadero: Трансферы, Туры и Бронирование",
      description:
        "CubanTaxis организует трансферы и туры в Meliá Internacional Varadero. Забронируйте отель с надежным такси-сервисом по Кубе.",
      alternates: buildAlternatesMetadata("/interesting-places-in-cuba/melia-internacional-varadero", "ru"),
    },

    meliaLasAmericas: {
      title: "CubanTaxis | Meliá Las Américas Varadero: Трансферы и Туры",
      description:
        "Планируйте поездку в Meliá Las Américas Varadero с CubanTaxis: такси-трансферы, туры и бронирование отеля.",
      alternates: buildAlternatesMetadata("/interesting-places-in-cuba/melia-las-americas", "ru"),
    },

    ocioClub: {
      title: "CubanTaxis | Ocio Club Гавана: Трансферы, Ночная Жизнь и Туры",
      description:
        "Насладитесь ночной Гаваной в Ocio Club с CubanTaxis. Легко бронируйте такси-трансферы, туры и вечерние программы.",
      alternates: buildAlternatesMetadata("/interesting-places-in-cuba/ocio-club", "ru"),
    },
  },
};
