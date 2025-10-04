import {  BlogSection, customMetaData, OnPageContent } from "@/seoUtils/metadata";

export interface AppTexts {
  metadata: Partial<customMetaData>
  header: any,
  content: { hero: HeroSection, blog: BlogSection },
  articles:any,
  booking:any,
  taxiGuide: string;
  backToHome:string,
  exploreDestinations: string;
  hero: {
    h1: string;
    h2a: string;
    h2b: string;
    transfer: string;
    shared: string;
    and: string;
    interCity: string;
    p: string;
    buttons: {
      booking: string;
      fastBooking: string;
    };
    contents: {
      destinations: string;
      excursions: string;
      howTo: string;
    };
    services: string[];
  };
  destinationsCard: {
    title: string;
    subTitle: string;
    description: string;
  };
  excursionsCard: {
    title: string;
    places: string;
  };
  seeMore: string;
  bookingForm: {
    page: {
      backToHome: string;
      description: string;
      title: string;
    };
    fullName: string;
    email: string;
    phone: string;
    vehicleType: string;
    from: string;
    to: string;
    date: string;
    time: string;
    passengers: string;
    luggage: string;
    details: string;
    detailsExample: string;
    attachImages: string;
    reserveNow: string;
    subtitle: string;
    example: string;
    upload: string;
    luggaageExample: string; // (sic) mantener la llave original
    title: string;
  };
  quickBookingForm: {
    page: {
      title: string;
      backToHome: string;
      description: string;
    };
    phone: string;
    vehicleType: string;
    from: string;
    to: string;
    date: string;
    time: string;
    passengers: string;
    luggage: string;
    reserveNow: string;
    telegram: string;
    whatsapp: string;
    messageTitle: string;
  };
  footer: {
    rights: string;
  };
  underHeroTitle: string;
  underHeroLinks: Array<{
    href: string;
    title: string;
    description: string;
  }>;
  FAQs: {
    title: string;
    items: Array<{
      question: string;
      answer: string;
    }>;
  };
  locations: string[];
  vehicles: string[];
  clipboardTemplate: {
    copied: string;
    error: string;
  };
  howMuchIsATaxi: string;
}
export interface HeroList {
  id: string;
  h2: string;
  items: string[];
}

export interface HeroLink {
  label: string;
  href: string;
}

export interface HeroCTA {
  customBooking: string;
  fastBooking: string;
  customBookingHref: string;
  fastBookingHref: string;
}

export interface HeroSection {
  h1Title: string;
  h2SubTitle: string;
  introParagraph: string;
  list: HeroList;
  link: HeroLink;
  cta: HeroCTA;
  emphasis: string[];  // frases que deben resaltarse en color
}
