// locales/types.ts
export interface AppTexts {
  hero: HeroLocale;
  bookingForm: BookingForm;
  quickBookingForm: QuickBookingForm
  destinationsCard: {
    title: string;
    subTitle: string;
    description: string;
  };
  excursionsCard: {
    title: string;
    places: string;
  };
  footer: {
    rights: string;
  };
  seeMore: string, header: {
    social: {
      facebook: string,
      instagram: string,
      whatsapp: string
    }
  },
  FAQs: FAQs
  locations: string[]
  vehicles: string[],
  clipboardTemplate: {
  copied: string,
  error: string,
}
howMuchIsATaxi:string
}
type HeroLocale = {
  h1: string;
  h2a:string
  h2b: string;
  transfer: string;
  shared: string;
  and: string;
  interCity: string;
  p: string
  buttons: {
    booking: string;
    fastBooking: string;
  };
  contents: {
    excursions: string;
    destinations: string;
    howTo: string;
  },
  services: string[]
}
type BookingForm = {
  title:string
  page: Page,
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
  luggaageExample:string,
  details: string;
  detailsExample: string;
  attachImages: string;
  reserveNow: string;
  subtitle:string
  example:string
  upload:string
}
type QuickBookingForm = {
  page: Page,
  phone: string;
  vehicleType: string;
  from: string;
  to: string;
  date: string;
  time: string;
  passengers: string;
  luggage: string;
  reserveNow: string;
  telegram:string
  whatsapp:string
  messageTitle:string
};
type Page = { title: string, description: string, backToHome: string }
type FAQs = { title: string, items: { question: string, answer: string }[] }