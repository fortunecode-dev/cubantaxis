// locales/types.ts
export interface AppTexts {
  hero: {
    title: string;
    subtitle: string;
    buttons: {
      excursions: string;
      destinations: string;
      fastBooking: string;
    };
  };
  bookingForm: {
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
    attachImages: string;
    reserveNow: string;
  };
  quickBookingForm: {
    phone: string;
    vehicleType: string;
    from: string;
    to: string;
    date: string;
    time: string;
    passengers: string;
    luggage: string;
    reserveNow: string;
  };
  destinationsCard: {
    title: string;
    description: string;
  };
  excursionsCard: {
    title: string;
    places: string;
  };
  footer: {
    rights: string;
  };
  seeMore:string
}
