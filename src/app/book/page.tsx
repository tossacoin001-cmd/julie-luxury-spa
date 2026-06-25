import { Suspense } from "react";
import { BookingFlow } from "@/components/booking/BookingFlow";

export const metadata = {
  title: "Book a Session — Julie Luxury Spa",
  description:
    "Book your luxury spa session in Lagos. Choose your treatment, pick a time, and pay a 30% deposit to confirm. Takes under 60 seconds.",
};

export default function BookPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[var(--color-spa-cream)] flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-[var(--color-spa-green)]/30 border-t-[var(--color-spa-green)] rounded-full animate-spin" />
        </div>
      }
    >
      <BookingFlow />
    </Suspense>
  );
}
