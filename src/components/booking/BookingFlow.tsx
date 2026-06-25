"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import type { BookingFormData, BookingStep } from "@/types/booking";
import { StepSessionType } from "./StepSessionType";
import { StepService } from "./StepService";
import { StepDateTime } from "./StepDateTime";
import { StepDetails } from "./StepDetails";
import { StepPayment } from "./StepPayment";
import { StepConfirmation } from "./StepConfirmation";

const STEP_ORDER: BookingStep[] = [
  "session-type",
  "service",
  "datetime",
  "details",
  "payment",
  "confirmation",
];

const STEP_LABELS: Record<BookingStep, string> = {
  "session-type": "Session Type",
  service: "Treatment",
  datetime: "Date & Time",
  details: "Your Details",
  payment: "Deposit",
  confirmation: "Confirmed",
};

export function BookingFlow() {
  const searchParams = useSearchParams();
  const [step, setStep] = useState<BookingStep>("session-type");
  const [data, setData] = useState<Partial<BookingFormData>>({});
  const [bookingRef, setBookingRef] = useState<string>("");

  useEffect(() => {
    const serviceParam = searchParams.get("service");
    if (serviceParam) {
      setData((prev) => ({ ...prev, serviceId: serviceParam as BookingFormData["serviceId"] }));
      setStep("datetime");
    }
  }, [searchParams]);

  const currentIndex = STEP_ORDER.indexOf(step);

  const next = (update?: Partial<BookingFormData>) => {
    if (update) setData((prev) => ({ ...prev, ...update }));
    const nextStep = STEP_ORDER[currentIndex + 1];
    if (nextStep) setStep(nextStep);
  };

  const prev = () => {
    const prevStep = STEP_ORDER[currentIndex - 1];
    if (prevStep) setStep(prevStep);
  };

  const visibleSteps = STEP_ORDER.filter((s) => s !== "confirmation");

  return (
    <div className="min-h-[calc(100vh-80px)] bg-[var(--color-spa-cream)] pt-20">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-12">
        {/* Header */}
        <div className="text-center mb-10">
          <p
            className="text-xs tracking-[0.3em] uppercase text-[var(--color-spa-green)] mb-2"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Book a Session
          </p>
          <h1
            className="text-4xl sm:text-5xl font-light text-[var(--color-spa-green-dark)]"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Reserve your{" "}
            <em className="italic text-[var(--color-spa-orange)]">luxury</em>
          </h1>
          {data.sessionType && (
            <p className="mt-2 text-xs text-[var(--color-spa-muted)]" style={{ fontFamily: "var(--font-inter)" }}>
              {data.sessionType === "home-service" ? "🏠 Home Service — we come to you" : "🏛️ In-Spa Visit — Victoria Island / Lekki"}
            </p>
          )}
        </div>

        {/* Progress steps */}
        {step !== "confirmation" && (
          <div className="flex items-center justify-between mb-10 relative">
            <div className="absolute top-4 left-0 right-0 h-px bg-[var(--color-spa-stone)] -z-0" />
            {visibleSteps.map((s, i) => {
              const idx = STEP_ORDER.indexOf(s);
              const done = currentIndex > idx;
              const active = step === s;
              return (
                <div key={s} className="flex flex-col items-center gap-2 z-10">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-medium transition-all ${
                      done
                        ? "bg-[var(--color-spa-green)] text-white"
                        : active
                        ? "bg-[var(--color-spa-green-dark)] text-white ring-4 ring-[var(--color-spa-green)]/20"
                        : "bg-[var(--color-spa-stone)] text-[var(--color-spa-muted)]"
                    }`}
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    {done ? "✓" : i + 1}
                  </div>
                  <span
                    className={`text-[10px] tracking-wide hidden sm:block ${
                      active
                        ? "text-[var(--color-spa-green-dark)] font-medium"
                        : "text-[var(--color-spa-muted)]"
                    }`}
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    {STEP_LABELS[s]}
                  </span>
                </div>
              );
            })}
          </div>
        )}

        {/* Step content */}
        <div className="bg-white rounded-2xl shadow-sm border border-[var(--color-spa-stone)] overflow-hidden">
          {step === "session-type" && (
            <StepSessionType selected={data.sessionType} onNext={next} />
          )}
          {step === "service" && (
            <StepService selectedId={data.serviceId} onNext={next} onBack={prev} />
          )}
          {step === "datetime" && (
            <StepDateTime
              serviceId={data.serviceId!}
              selectedDate={data.date}
              selectedTime={data.time}
              onNext={next}
              onBack={prev}
            />
          )}
          {step === "details" && (
            <StepDetails data={data} onNext={next} onBack={prev} />
          )}
          {step === "payment" && (
            <StepPayment
              data={data as BookingFormData}
              onNext={(ref) => {
                setBookingRef(ref);
                next();
              }}
              onBack={prev}
            />
          )}
          {step === "confirmation" && (
            <StepConfirmation data={data as BookingFormData} bookingRef={bookingRef} />
          )}
        </div>

        {/* Trust badges */}
        {step !== "confirmation" && (
          <div
            className="mt-8 flex flex-wrap gap-4 justify-center text-xs text-[var(--color-spa-muted)]"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            <span className="flex items-center gap-1.5">🔒 Secure payment via Paystack</span>
            <span className="flex items-center gap-1.5">📱 WhatsApp confirmation sent</span>
            <span className="flex items-center gap-1.5">🔄 Free reschedule 24h ahead</span>
          </div>
        )}
      </div>
    </div>
  );
}
