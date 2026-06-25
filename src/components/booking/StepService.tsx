"use client";

import { Clock, Sparkles } from "lucide-react";
import { SERVICES } from "@/lib/services";
import { formatCurrency } from "@/lib/utils";
import type { ServiceId } from "@/types/booking";

interface Props {
  selectedId?: ServiceId;
  onNext: (data: { serviceId: ServiceId }) => void;
}

export function StepService({ selectedId, onNext }: Props) {
  return (
    <div className="p-6 sm:p-8">
      <h2
        className="text-2xl font-medium text-[var(--color-spa-green-dark)] mb-2"
        style={{ fontFamily: "var(--font-cormorant)" }}
      >
        Choose your treatment
      </h2>
      <p
        className="text-sm text-[var(--color-spa-muted)] mb-6"
        style={{ fontFamily: "var(--font-inter)" }}
      >
        Select the experience you'd like to book. You can always upgrade or add
        on when you arrive.
      </p>

      <div className="space-y-3">
        {SERVICES.map((service) => (
          <button
            key={service.id}
            onClick={() => onNext({ serviceId: service.id })}
            className={`w-full flex items-center gap-4 p-4 rounded-xl border-2 text-left transition-all hover:border-[var(--color-spa-green)] hover:bg-[var(--color-spa-cream)] group ${
              selectedId === service.id
                ? "border-[var(--color-spa-green)] bg-[var(--color-spa-cream)]"
                : "border-[var(--color-spa-stone)]"
            }`}
          >
            {/* Emoji */}
            <div className="w-12 h-12 rounded-xl bg-[var(--color-spa-cream-dark)] flex items-center justify-center text-xl shrink-0 group-hover:scale-110 transition-transform">
              {service.emoji}
            </div>

            {/* Info */}
            <div className="flex-1 min-w-0">
              <p
                className="text-base font-medium text-[var(--color-spa-green-dark)] group-hover:text-[var(--color-spa-green)] transition-colors"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                {service.name}
              </p>
              <p
                className="text-xs text-[var(--color-spa-muted)] truncate mt-0.5"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                {service.description}
              </p>
              <div
                className="flex items-center gap-3 mt-1.5 text-xs text-[var(--color-spa-muted)]"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                <span className="flex items-center gap-1">
                  <Clock size={11} />
                  {service.duration} min
                </span>
                <span className="flex items-center gap-1 text-[var(--color-spa-green)] font-medium">
                  <Sparkles size={11} />
                  {formatCurrency(service.price)}
                </span>
              </div>
            </div>

            {/* Arrow */}
            <div
              className={`shrink-0 w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${
                selectedId === service.id
                  ? "bg-[var(--color-spa-green)] border-[var(--color-spa-green)]"
                  : "border-[var(--color-spa-stone)] group-hover:border-[var(--color-spa-green)]"
              }`}
            >
              {selectedId === service.id && (
                <span className="text-white text-[10px]">✓</span>
              )}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
