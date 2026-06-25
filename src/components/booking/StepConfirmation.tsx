"use client";

import Link from "next/link";
import { format } from "date-fns";
import { CheckCircle, CalendarCheck, MessageCircle } from "lucide-react";
import { getService } from "@/lib/services";
import { formatCurrency } from "@/lib/utils";
import type { BookingFormData } from "@/types/booking";

interface Props {
  data: BookingFormData;
  bookingRef: string;
}

export function StepConfirmation({ data, bookingRef }: Props) {
  const service = getService(data.serviceId);
  const dateLabel = data.date
    ? format(new Date(data.date), "EEEE, MMMM d, yyyy")
    : "";

  const waMessage = encodeURIComponent(
    `Hi Julie! My booking is confirmed 🎉\n\nRef: ${bookingRef}\nTreatment: ${service?.name}\nDate: ${dateLabel}\nTime: ${data.time}\n\nLooking forward to my session!`
  );

  return (
    <div className="p-6 sm:p-8 text-center">
      {/* Success icon */}
      <div className="flex justify-center mb-5">
        <div className="w-20 h-20 rounded-full bg-[var(--color-spa-green)]/10 flex items-center justify-center">
          <CheckCircle size={44} className="text-[var(--color-spa-green)]" strokeWidth={1.5} />
        </div>
      </div>

      <h2
        className="text-3xl font-light text-[var(--color-spa-green-dark)] mb-2"
        style={{ fontFamily: "var(--font-cormorant)" }}
      >
        You&rsquo;re booked,{" "}
        <em className="italic">{data.firstName}!</em>
      </h2>
      <p
        className="text-sm text-[var(--color-spa-muted)] mb-1"
        style={{ fontFamily: "var(--font-inter)" }}
      >
        Your luxury session is confirmed. We&rsquo;re looking forward to seeing you.
      </p>
      <p
        className="text-xs text-[var(--color-spa-green)] font-medium tracking-wide mb-8"
        style={{ fontFamily: "var(--font-inter)" }}
      >
        Booking Ref: {bookingRef}
      </p>

      {/* Summary card */}
      <div className="bg-[var(--color-spa-cream-dark)] rounded-xl p-5 text-left mb-6 space-y-2.5">
        <div className="flex justify-between text-sm">
          <span className="text-[var(--color-spa-muted)]" style={{ fontFamily: "var(--font-inter)" }}>Treatment</span>
          <span className="font-medium text-[var(--color-spa-green-dark)]" style={{ fontFamily: "var(--font-cormorant)" }}>
            {service?.name}
          </span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-[var(--color-spa-muted)]" style={{ fontFamily: "var(--font-inter)" }}>Date</span>
          <span className="text-[var(--color-spa-charcoal)] text-xs" style={{ fontFamily: "var(--font-inter)" }}>
            {dateLabel}
          </span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-[var(--color-spa-muted)]" style={{ fontFamily: "var(--font-inter)" }}>Time</span>
          <span className="text-[var(--color-spa-charcoal)] text-xs" style={{ fontFamily: "var(--font-inter)" }}>
            {data.time}
          </span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-[var(--color-spa-muted)]" style={{ fontFamily: "var(--font-inter)" }}>Balance due</span>
          <span className="text-[var(--color-spa-charcoal)] text-xs font-medium" style={{ fontFamily: "var(--font-inter)" }}>
            {service && formatCurrency(service.price * 0.7)} on the day
          </span>
        </div>
      </div>

      {/* What's next */}
      <div className="space-y-3 mb-8">
        <div className="flex items-start gap-3 text-left p-3 rounded-xl bg-[var(--color-spa-green)]/5 border border-[var(--color-spa-green)]/15">
          <MessageCircle size={16} className="text-[var(--color-spa-green)] mt-0.5 shrink-0" />
          <p className="text-xs text-[var(--color-spa-charcoal)]" style={{ fontFamily: "var(--font-inter)" }}>
            A confirmation has been sent to <strong>{data.phone}</strong> on
            WhatsApp. You&rsquo;ll also receive a reminder 24 hours before your session.
          </p>
        </div>
        <div className="flex items-start gap-3 text-left p-3 rounded-xl bg-[var(--color-spa-gold)]/5 border border-[var(--color-spa-gold)]/15">
          <CalendarCheck size={16} className="text-[var(--color-spa-gold)] mt-0.5 shrink-0" />
          <p className="text-xs text-[var(--color-spa-charcoal)]" style={{ fontFamily: "var(--font-inter)" }}>
            Arrive 10 minutes early to settle in, change, and enjoy our welcome
            herbal tea before your treatment begins.
          </p>
        </div>
      </div>

      {/* Actions */}
      <div className="flex flex-col gap-3">
        <a
          href={`https://wa.me/2348000000000?text=${waMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 py-3 bg-[#25D366] text-white text-sm font-medium rounded-full transition-opacity hover:opacity-90"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          Confirm on WhatsApp
        </a>
        <Link
          href="/"
          className="py-3 border border-[var(--color-spa-stone)] text-[var(--color-spa-muted)] text-sm rounded-full hover:bg-[var(--color-spa-cream-dark)] transition-colors"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
