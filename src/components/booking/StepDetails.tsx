"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import type { BookingFormData } from "@/types/booking";
import { cn } from "@/lib/utils";

const schema = z.object({
  firstName: z.string().min(2, "First name required"),
  lastName: z.string().min(2, "Last name required"),
  email: z.string().email("Valid email required"),
  phone: z
    .string()
    .min(10, "Valid phone number required")
    .regex(/^[+\d\s\-()]{10,}$/, "Valid phone number required"),
  homeAddress: z.string().optional(),
  notes: z.string().optional(),
});

type FormValues = z.infer<typeof schema>;

interface Props {
  data: Partial<BookingFormData>;
  onNext: (data: Pick<BookingFormData, "firstName" | "lastName" | "email" | "phone" | "homeAddress" | "notes">) => void;
  onBack: () => void;
}

export function StepDetails({ data, onNext, onBack }: Props) {
  const isHomeService = data.sessionType === "home-service";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(
      isHomeService
        ? schema.extend({ homeAddress: z.string().min(10, "Please enter your full address") })
        : schema
    ),
    defaultValues: {
      firstName: data.firstName ?? "",
      lastName: data.lastName ?? "",
      email: data.email ?? "",
      phone: data.phone ?? "",
      homeAddress: data.homeAddress ?? "",
      notes: data.notes ?? "",
    },
  });

  return (
    <div className="p-6 sm:p-8">
      <h2
        className="text-2xl font-medium text-[var(--color-spa-green-dark)] mb-1"
        style={{ fontFamily: "var(--font-cormorant)" }}
      >
        Your details
      </h2>
      <p
        className="text-sm text-[var(--color-spa-muted)] mb-6"
        style={{ fontFamily: "var(--font-inter)" }}
      >
        We'll send your confirmation and reminders to these contacts.
      </p>

      {isHomeService && (
        <div className="mb-5 p-3 rounded-xl bg-[var(--color-spa-orange)]/8 border border-[var(--color-spa-orange)]/20 flex gap-2">
          <span className="text-base shrink-0">🏠</span>
          <p className="text-xs text-[var(--color-spa-charcoal)] leading-relaxed" style={{ fontFamily: "var(--font-inter)" }}>
            <strong>Home Service:</strong> Please include your full address so our therapist can find you easily. A ₦5,000 travel fee applies.
          </p>
        </div>
      )}

      <form onSubmit={handleSubmit(onNext)} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <Field label="First Name" error={errors.firstName?.message}>
            <input
              {...register("firstName")}
              placeholder="Adaeze"
              className={inputCls(!!errors.firstName)}
            />
          </Field>
          <Field label="Last Name" error={errors.lastName?.message}>
            <input
              {...register("lastName")}
              placeholder="Okafor"
              className={inputCls(!!errors.lastName)}
            />
          </Field>
        </div>

        <Field label="Email Address" error={errors.email?.message}>
          <input
            {...register("email")}
            type="email"
            placeholder="you@example.com"
            className={inputCls(!!errors.email)}
          />
        </Field>

        <Field
          label="WhatsApp / Phone Number"
          error={errors.phone?.message}
          hint="We'll send your booking confirmation here"
        >
          <input
            {...register("phone")}
            type="tel"
            placeholder="+234 800 000 0000"
            className={inputCls(!!errors.phone)}
          />
        </Field>

        {isHomeService && (
          <Field
            label="Home / Hotel / Office Address"
            error={errors.homeAddress?.message}
            hint="Include street, area, and any access notes (e.g. gate code)"
          >
            <textarea
              {...register("homeAddress")}
              rows={3}
              placeholder="e.g. 14 Admiralty Way, Lekki Phase 1, Lagos. Blue gate, 3rd floor."
              className={cn(inputCls(!!errors.homeAddress), "resize-none")}
            />
          </Field>
        )}

        <Field label="Special requests (optional)" error={errors.notes?.message}>
          <textarea
            {...register("notes")}
            rows={3}
            placeholder="Any skin concerns, allergies, or preferences we should know about..."
            className={cn(inputCls(false), "resize-none")}
          />
        </Field>

        <div className="flex gap-3 pt-2">
          <button
            type="button"
            onClick={onBack}
            className="flex-1 py-3 border border-[var(--color-spa-stone)] text-[var(--color-spa-charcoal)] text-sm rounded-full hover:bg-[var(--color-spa-cream-dark)] transition-colors"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Back
          </button>
          <button
            type="submit"
            className="flex-1 py-3 bg-[var(--color-spa-green)] text-white text-sm font-medium rounded-full hover:bg-[var(--color-spa-green-dark)] transition-colors"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Continue to Payment
          </button>
        </div>
      </form>
    </div>
  );
}

function Field({
  label,
  error,
  hint,
  children,
}: {
  label: string;
  error?: string;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        className="block text-xs font-medium text-[var(--color-spa-charcoal)] mb-1.5 tracking-wide"
        style={{ fontFamily: "var(--font-inter)" }}
      >
        {label}
      </label>
      {children}
      {hint && !error && (
        <p className="text-[10px] text-[var(--color-spa-muted)] mt-1" style={{ fontFamily: "var(--font-inter)" }}>
          {hint}
        </p>
      )}
      {error && (
        <p className="text-[10px] text-red-500 mt-1" style={{ fontFamily: "var(--font-inter)" }}>
          {error}
        </p>
      )}
    </div>
  );
}

function inputCls(hasError: boolean) {
  return cn(
    "w-full px-4 py-2.5 rounded-xl border text-sm text-[var(--color-spa-charcoal)] bg-[var(--color-spa-cream)] placeholder:text-[var(--color-spa-muted)]/50 outline-none transition-all focus:ring-2 focus:ring-[var(--color-spa-green)]/30 focus:border-[var(--color-spa-green)]",
    hasError
      ? "border-red-300 focus:ring-red-200 focus:border-red-400"
      : "border-[var(--color-spa-stone)]",
  );
}
