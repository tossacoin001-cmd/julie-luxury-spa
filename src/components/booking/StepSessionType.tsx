"use client";

import { MapPin, Home } from "lucide-react";
import type { SessionType } from "@/types/booking";

interface Props {
  selected?: SessionType;
  onNext: (data: { sessionType: SessionType }) => void;
}

const options = [
  {
    id: "walk-in" as SessionType,
    icon: MapPin,
    title: "Visit the Spa",
    subtitle: "Walk-in session",
    description:
      "Come relax in our private luxury suites at Victoria Island / Lekki, Lagos. Full spa ambiance, refreshments, and premium facilities await you.",
    badge: null,
    perks: ["Private treatment suite", "Complimentary welcome drink", "Shower & changing facilities", "On-site parking"],
    accentClass: "border-[var(--color-spa-green)] bg-[var(--color-spa-cream)]",
    iconBg: "bg-[var(--color-spa-green)]/10 text-[var(--color-spa-green)]",
  },
  {
    id: "home-service" as SessionType,
    icon: Home,
    title: "We Come to You",
    subtitle: "Home service",
    description:
      "Our therapist brings the full spa experience to your home, hotel, or office in Lagos. All equipment and premium products included.",
    badge: "+₦5,000 travel fee",
    perks: ["Your own space", "Hotel & office friendly", "All equipment provided", "Lagos-wide coverage"],
    accentClass: "border-[var(--color-spa-orange)] bg-[var(--color-spa-cream)]",
    iconBg: "bg-[var(--color-spa-orange)]/10 text-[var(--color-spa-orange)]",
  },
] as const;

export function StepSessionType({ selected, onNext }: Props) {
  return (
    <div className="p-6 sm:p-8">
      <h2
        className="text-2xl font-medium text-[var(--color-spa-green-dark)] mb-1"
        style={{ fontFamily: "var(--font-cormorant)" }}
      >
        How would you like your session?
      </h2>
      <p
        className="text-sm text-[var(--color-spa-muted)] mb-6"
        style={{ fontFamily: "var(--font-inter)" }}
      >
        We offer both in-spa visits and home service across Lagos.
      </p>

      <div className="grid sm:grid-cols-2 gap-4">
        {options.map((opt) => {
          const Icon = opt.icon;
          const isSelected = selected === opt.id;
          return (
            <button
              key={opt.id}
              onClick={() => onNext({ sessionType: opt.id })}
              className={`relative text-left p-5 rounded-2xl border-2 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg ${
                isSelected ? opt.accentClass : "border-[var(--color-spa-stone)] hover:border-[var(--color-spa-stone-dark)]"
              }`}
            >
              {opt.badge && (
                <span
                  className="absolute top-3 right-3 text-[10px] font-medium px-2 py-0.5 rounded-full bg-[var(--color-spa-orange)]/10 text-[var(--color-spa-orange)] border border-[var(--color-spa-orange)]/20"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  {opt.badge}
                </span>
              )}

              <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 ${opt.iconBg}`}>
                <Icon size={20} />
              </div>

              <p
                className="text-[10px] tracking-widest uppercase mb-0.5"
                style={{ fontFamily: "var(--font-inter)", color: "var(--color-spa-muted)" }}
              >
                {opt.subtitle}
              </p>
              <h3
                className="text-xl font-medium text-[var(--color-spa-green-dark)] mb-2"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                {opt.title}
              </h3>
              <p
                className="text-xs text-[var(--color-spa-muted)] leading-relaxed mb-4"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                {opt.description}
              </p>

              <ul className="space-y-1.5">
                {opt.perks.map((perk) => (
                  <li
                    key={perk}
                    className="flex items-center gap-2 text-xs text-[var(--color-spa-charcoal)]"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    <span className="w-4 h-4 rounded-full bg-[var(--color-spa-green)]/15 flex items-center justify-center text-[var(--color-spa-green)] text-[9px] shrink-0">
                      ✓
                    </span>
                    {perk}
                  </li>
                ))}
              </ul>

              {isSelected && (
                <div className="mt-4 pt-3 border-t border-[var(--color-spa-stone)]">
                  <span
                    className="text-xs font-medium text-[var(--color-spa-green)]"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    Selected — tap to continue ↓
                  </span>
                </div>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
