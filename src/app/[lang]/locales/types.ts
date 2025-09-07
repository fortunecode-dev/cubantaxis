export interface AppTexts {
  taxiGuide: string;
  exploreDestinations: string;
  header: {
    social: {
      facebook: string;
      instagram: string;
      whatsapp: string;
    };
  };
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
