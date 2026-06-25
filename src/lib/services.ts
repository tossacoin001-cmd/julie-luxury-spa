import type { Service } from "@/types/booking";

export const SERVICES: Service[] = [
  {
    id: "signature-facial",
    name: "Signature Facial",
    duration: 75,
    price: 35000,
    description:
      "Bespoke facial using premium serums tailored to your skin type. Leaves you with a visible, lasting glow.",
    emoji: "✨",
  },
  {
    id: "deep-tissue-massage",
    name: "Deep Tissue Massage",
    duration: 90,
    price: 45000,
    description:
      "Targeted pressure to dissolve tension, improve circulation, and ease chronic muscle pain.",
    emoji: "🌿",
  },
  {
    id: "luxury-body-scrub",
    name: "Luxury Body Scrub",
    duration: 60,
    price: 28000,
    description:
      "Full-body exfoliation using botanical scrubs that reveal radiant, silky skin.",
    emoji: "🍃",
  },
  {
    id: "bridal-package",
    name: "Bridal Package",
    duration: 210,
    price: 120000,
    description:
      "3-session pre-wedding treatment plan covering face, body, and hands.",
    emoji: "💍",
  },
  {
    id: "mani-pedi-luxury",
    name: "Luxury Mani & Pedi",
    duration: 90,
    price: 22000,
    description:
      "Premium nail care with hot stone treatment, paraffin wrap, and long-lasting polish.",
    emoji: "💅",
  },
  {
    id: "couples-retreat",
    name: "Couples Retreat",
    duration: 120,
    price: 85000,
    description:
      "Side-by-side massages, aromatherapy soak, and champagne for two.",
    emoji: "🥂",
  },
];

export function getService(id: string) {
  return SERVICES.find((s) => s.id === id);
}

export const TIME_SLOTS = [
  "9:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "1:00 PM",
  "2:00 PM",
  "3:00 PM",
  "4:00 PM",
  "5:00 PM",
  "6:00 PM",
];

export const DEPOSIT_PERCENT = 0.3;
