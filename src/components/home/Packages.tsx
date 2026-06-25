import Link from "next/link";
import { Check, Gift } from "lucide-react";
import { formatCurrency } from "@/lib/utils";
import { cn } from "@/lib/utils";

const packages = [
  {
    name: "The Reset",
    tagline: "For when life hits hard",
    price: 65000,
    duration: "3 hrs",
    popular: false,
    color: "border-[var(--color-spa-stone)]",
    accentColor: "text-[var(--color-spa-green)]",
    features: [
      "60-min Deep Tissue Massage",
      "45-min Signature Facial",
      "30-min Head & Scalp Treatment",
      "Welcome Herbal Tea",
      "Post-treatment skin consultation",
    ],
  },
  {
    name: "Glow Day",
    tagline: "The full luxury experience",
    price: 95000,
    duration: "4.5 hrs",
    popular: true,
    color: "border-[var(--color-spa-green)]",
    accentColor: "text-[var(--color-spa-green)]",
    features: [
      "90-min Premium Facial",
      "60-min Full Body Massage",
      "Luxury Body Scrub",
      "Manicure & Pedicure",
      "Welcome Champagne & Snacks",
      "Priority scheduling",
    ],
  },
  {
    name: "Monthly Membership",
    tagline: "Your skin deserves consistency",
    price: 75000,
    duration: "Per month",
    popular: false,
    color: "border-[var(--color-spa-gold)]",
    accentColor: "text-[var(--color-spa-gold)]",
    features: [
      "2 signature treatments/month",
      "15% off all add-ons",
      "Priority booking access",
      "Personal therapist matching",
      "Monthly skin progress report",
      "Birthday bonus treatment",
    ],
  },
];

export function Packages() {
  return (
    <section id="packages" className="py-24 bg-[var(--color-spa-cream)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p
            className="text-xs tracking-[0.3em] uppercase text-[var(--color-spa-orange)] mb-3"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Packages & Memberships
          </p>
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-light text-[var(--color-spa-green-dark)] mb-5"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            More value,{" "}
            <em className="italic">more you</em>
          </h2>
          <p
            className="max-w-lg mx-auto text-[var(--color-spa-muted)] text-sm leading-relaxed"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Bundle services for the full experience or commit to monthly
            self-care and save while your results compound.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={cn(
                "relative rounded-2xl border-2 p-7 bg-white transition-shadow hover:shadow-xl",
                pkg.color,
                pkg.popular && "shadow-lg shadow-green-900/10"
              )}
            >
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span
                    className="px-4 py-1 bg-[var(--color-spa-green)] text-white text-[10px] font-medium rounded-full tracking-widest uppercase whitespace-nowrap"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-5">
                <h3
                  className="text-2xl font-medium text-[var(--color-spa-green-dark)] mb-1"
                  style={{ fontFamily: "var(--font-cormorant)" }}
                >
                  {pkg.name}
                </h3>
                <p
                  className="text-xs italic text-[var(--color-spa-muted)]"
                  style={{ fontFamily: "var(--font-cormorant)" }}
                >
                  {pkg.tagline}
                </p>
              </div>

              <div className="mb-6">
                <span
                  className={`text-4xl font-light ${pkg.accentColor}`}
                  style={{ fontFamily: "var(--font-cormorant)" }}
                >
                  {formatCurrency(pkg.price)}
                </span>
                <span
                  className="text-xs text-[var(--color-spa-muted)] ml-1"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  / {pkg.duration}
                </span>
              </div>

              <ul className="space-y-2.5 mb-8">
                {pkg.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-2.5 text-sm text-[var(--color-spa-charcoal)]"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    <Check
                      size={14}
                      className={`shrink-0 mt-0.5 ${pkg.accentColor}`}
                    />
                    {f}
                  </li>
                ))}
              </ul>

              <Link
                href={`/book?package=${pkg.name.toLowerCase().replace(/ /g, "-")}`}
                className={cn(
                  "block w-full text-center py-3 rounded-full text-sm font-medium transition-all",
                  pkg.popular
                    ? "bg-[var(--color-spa-green)] text-white hover:bg-[var(--color-spa-green-dark)]"
                    : "border border-current text-[var(--color-spa-charcoal)] hover:bg-[var(--color-spa-cream-dark)]"
                )}
                style={{ fontFamily: "var(--font-inter)" }}
              >
                Choose {pkg.name}
              </Link>
            </div>
          ))}
        </div>

        {/* Gift Card Banner */}
        <div className="rounded-2xl bg-gradient-to-r from-[var(--color-spa-green-dark)] via-[#2D5A12] to-[var(--color-spa-green-dark)] p-8 sm:p-10 flex flex-col sm:flex-row items-center gap-6">
          <div className="w-14 h-14 rounded-xl bg-[var(--color-spa-gold)]/20 border border-[var(--color-spa-gold)]/30 flex items-center justify-center shrink-0">
            <Gift size={28} className="text-[var(--color-spa-gold-light)]" />
          </div>
          <div className="flex-1 text-center sm:text-left">
            <h3
              className="text-2xl font-light text-white mb-1"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              Give the gift of luxury
            </h3>
            <p
              className="text-white/60 text-sm"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Digital gift cards from ₦20,000. Delivered instantly to their
              WhatsApp or email. Perfect for any occasion.
            </p>
          </div>
          <a
            href={`https://wa.me/2348000000000?text=${encodeURIComponent("Hi! I'd like to purchase a gift card for Julie Luxury Spa.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-6 py-3 bg-[var(--color-spa-gold)] hover:bg-[var(--color-spa-gold-light)] text-[var(--color-spa-green-dark)] text-sm font-semibold rounded-full transition-colors whitespace-nowrap"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Get a Gift Card
          </a>
        </div>
      </div>
    </section>
  );
}
