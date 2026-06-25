"use client";

import { useState } from "react";
import { format } from "date-fns";
import { Shield, Clock } from "lucide-react";
import { getService, DEPOSIT_PERCENT } from "@/lib/services";
import { formatCurrency } from "@/lib/utils";
import type { BookingFormData } from "@/types/booking";
import { toast } from "sonner";

interface Props {
  data: BookingFormData;
  onNext: (bookingRef: string) => void;
  onBack: () => void;
}

export function StepPayment({ data, onNext, onBack }: Props) {
  const [loading, setLoading] = useState(false);
  const service = getService(data.serviceId);
  const deposit = Math.round((service?.price ?? 0) * DEPOSIT_PERCENT);

  const handlePay = async () => {
    setLoading(true);
    try {
      const ref = `JLS-${Date.now().toString(36).toUpperCase()}`;

      /*
        TODO: Initialize Paystack payment here.
        When NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY is set, load Paystack inline:

        const handler = PaystackPop.setup({
          key: process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY,
          email: data.email,
          amount: deposit * 100, // kobo
          currency: 'NGN',
          ref,
          metadata: { serviceId: data.serviceId, date: data.date, time: data.time },
          callback: (response) => { onNext(response.reference); },
          onClose: () => { setLoading(false); }
        });
        handler.openIframe();
      */

      // For now: simulate a successful payment
      await new Promise((r) => setTimeout(r, 1500));
      toast.success("Deposit confirmed!");
      onNext(ref);
    } catch {
      toast.error("Payment failed. Please try again.");
      setLoading(false);
    }
  };

  if (!service) return null;

  const dateLabel = data.date
    ? format(new Date(data.date), "EEEE, MMMM d, yyyy")
    : "";

  return (
    <div className="p-6 sm:p-8">
      <h2
        className="text-2xl font-medium text-[var(--color-spa-green-dark)] mb-1"
        style={{ fontFamily: "var(--font-cormorant)" }}
      >
        Pay deposit to confirm
      </h2>
      <p
        className="text-sm text-[var(--color-spa-muted)] mb-6"
        style={{ fontFamily: "var(--font-inter)" }}
      >
        A 30% deposit secures your booking. The balance is paid on the day of
        your session.
      </p>

      {/* Booking summary */}
      <div className="bg-[var(--color-spa-cream-dark)] rounded-xl p-5 mb-6 space-y-3">
        <h3
          className="text-xs tracking-widest uppercase text-[var(--color-spa-muted)] mb-4"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          Booking Summary
        </h3>
        <Row label="Treatment" value={service.name} />
        <Row label="Date" value={dateLabel} />
        <Row label="Time" value={data.time} />
        <Row label="Name" value={`${data.firstName} ${data.lastName}`} />
        <Row label="WhatsApp" value={data.phone} />
        <div className="border-t border-[var(--color-spa-stone)] pt-3 mt-3">
          <Row
            label="Total Session"
            value={formatCurrency(service.price)}
            muted={false}
          />
          <Row
            label={`Deposit Due (30%)`}
            value={formatCurrency(deposit)}
            muted={false}
            highlight
          />
          <Row
            label="Balance on the day"
            value={formatCurrency(service.price - deposit)}
            muted
          />
        </div>
      </div>

      {/* Trust signals */}
      <div className="flex flex-col gap-2 mb-6">
        <div className="flex items-center gap-2 text-xs text-[var(--color-spa-muted)]" style={{ fontFamily: "var(--font-inter)" }}>
          <Shield size={13} className="text-[var(--color-spa-green)] shrink-0" />
          Secure payment powered by Paystack
        </div>
        <div className="flex items-center gap-2 text-xs text-[var(--color-spa-muted)]" style={{ fontFamily: "var(--font-inter)" }}>
          <Clock size={13} className="text-[var(--color-spa-green)] shrink-0" />
          Free rescheduling up to 24 hours before your session
        </div>
      </div>

      {/* Buttons */}
      <div className="flex gap-3">
        <button
          onClick={onBack}
          disabled={loading}
          className="flex-1 py-3 border border-[var(--color-spa-stone)] text-[var(--color-spa-charcoal)] text-sm rounded-full hover:bg-[var(--color-spa-cream-dark)] transition-colors disabled:opacity-50"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          Back
        </button>
        <button
          onClick={handlePay}
          disabled={loading}
          className="flex-1 py-3 bg-[var(--color-spa-green)] text-white text-sm font-medium rounded-full hover:bg-[var(--color-spa-green-dark)] transition-colors disabled:opacity-70 flex items-center justify-center gap-2"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          {loading ? (
            <>
              <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              Processing…
            </>
          ) : (
            `Pay ${formatCurrency(deposit)}`
          )}
        </button>
      </div>
    </div>
  );
}

function Row({
  label,
  value,
  muted = true,
  highlight = false,
}: {
  label: string;
  value: string;
  muted?: boolean;
  highlight?: boolean;
}) {
  return (
    <div className="flex justify-between items-start gap-3">
      <span
        className="text-xs text-[var(--color-spa-muted)]"
        style={{ fontFamily: "var(--font-inter)" }}
      >
        {label}
      </span>
      <span
        className={`text-xs font-medium text-right ${
          highlight
            ? "text-[var(--color-spa-green)] text-sm"
            : muted
            ? "text-[var(--color-spa-muted)]"
            : "text-[var(--color-spa-charcoal)]"
        }`}
        style={{ fontFamily: "var(--font-inter)" }}
      >
        {value}
      </span>
    </div>
  );
}
