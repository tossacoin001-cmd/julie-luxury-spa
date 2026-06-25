export type ServiceId =
  | "signature-facial"
  | "deep-tissue-massage"
  | "luxury-body-scrub"
  | "bridal-package"
  | "mani-pedi-luxury"
  | "couples-retreat";

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
  serviceId: ServiceId;
  date: string;
  time: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  notes?: string;
}

export type BookingStep = "service" | "datetime" | "details" | "payment" | "confirmation";
