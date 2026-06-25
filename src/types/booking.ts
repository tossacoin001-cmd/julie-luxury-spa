export type ServiceId =
  | "signature-facial"
  | "deep-tissue-massage"
  | "luxury-body-scrub"
  | "bridal-package"
  | "mani-pedi-luxury"
  | "couples-retreat";

export type SessionType = "walk-in" | "home-service";

export interface Service {
  id: ServiceId;
  name: string;
  duration: number;
  price: number;
  description: string;
  emoji: string;
}

export interface TimeSlot {
  time: string;
  available: boolean;
}

export interface BookingFormData {
  sessionType: SessionType;
  serviceId: ServiceId;
  date: string;
  time: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  homeAddress?: string;
  notes?: string;
}

export type BookingStep = "session-type" | "service" | "datetime" | "details" | "payment" | "confirmation";
