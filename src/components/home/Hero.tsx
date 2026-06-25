"use client";

import Link from "next/link";
import { ChevronDown, Star } from "lucide-react";
import { useEffect, useState } from "react";

const stats = [
  { value: "500+", label: "Happy Clients" },
  { value: "4.9★", label: "Google Rating" },
  { value: "< 30min", label: "Response Time" },
  { value: "5yrs", label: "Of Excellence" },
];

export function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/images/hero-spa.jpg')`,
        }}
      />
      {/* Layered overlays for luxury depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1A2A0F]/60 via-[#1A2A0F]/40 to-[#1A2A0F]/80" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#1A2A0F]/30 via-transparent to-transparent" />

      {/* Decorative botanical elements */}
      <div className="absolute top-20 right-0 w-64 h-64 opacity-10 pointer-events-none">
        <svg viewBox="0 0 200 200" className="w-full h-full text-[var(--color-spa-green-light)]" fill="currentColor">
          <path d="M100 10 Q130 40 120 80 Q150 60 180 80 Q150 100 130 120 Q160 140 140 180 Q110 150 100 120 Q90 150 60 180 Q40 140 70 120 Q50 100 20 80 Q50 60 80 80 Q70 40 100 10Z" opacity="0.5"/>
          <circle cx="100" cy="100" r="15" opacity="0.3"/>
        </svg>
      </div>
      <div className="absolute bottom-32 left-0 w-48 h-48 opacity-10 pointer-events-none rotate-180">
        <svg viewBox="0 0 200 200" className="w-full h-full text-[var(--color-spa-orange)]" fill="currentColor">
          <path d="M100 10 Q130 40 120 80 Q150 60 180 80 Q150 100 130 120 Q160 140 140 180 Q110 150 100 120 Q90 150 60 180 Q40 140 70 120 Q50 100 20 80 Q50 60 80 80 Q70 40 100 10Z" opacity="0.5"/>
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/80 text-xs tracking-widest uppercase mb-6 transition-all duration-700"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
            fontFamily: "var(--font-inter)",
          }}
        >
          <Star size={12} className="fill-[var(--color-spa-gold)] text-[var(--color-spa-gold)]" />
          Lagos's Premier Luxury Spa
          <Star size={12} className="fill-[var(--color-spa-gold)] text-[var(--color-spa-gold)]" />
        </div>

        {/* Headline */}
        <h1
          className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-light text-white leading-[1.05] mb-6 transition-all duration-700 delay-150"
          style={{
            fontFamily: "var(--font-cormorant)",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(30px)",
          }}
        >
          Step into
          <br />
          <em className="italic text-[var(--color-spa-gold-light)]">pure luxury</em>
        </h1>

        {/* Subheadline */}
        <p
          className="text-base sm:text-lg text-white/75 max-w-xl mx-auto mb-10 leading-relaxed transition-all duration-700 delay-300"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
            fontFamily: "var(--font-inter)",
          }}
        >
          Premium spa treatments crafted to restore your body, refresh your mind,
          and leave you glowing. Book in 60 seconds — same-week availability.
        </p>

        {/* CTAs */}
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16 transition-all duration-700 delay-500"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
          }}
        >
          <Link
            href="/book"
            className="inline-flex items-center justify-center px-8 py-4 bg-[var(--color-spa-green)] hover:bg-[var(--color-spa-green-dark)] text-white text-sm font-medium rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-green-900/30 tracking-wide"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Book Your Session
          </Link>
          <a
            href="#services"
            className="inline-flex items-center justify-center px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white text-sm font-medium rounded-full transition-all duration-200 tracking-wide"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Explore Treatments
          </a>
        </div>

        {/* Trust stats */}
        <div
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto transition-all duration-700 delay-700"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
          }}
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center gap-1 px-2 py-3 rounded-xl bg-white/8 backdrop-blur-sm border border-white/10"
            >
              <span
                className="text-xl sm:text-2xl font-medium text-[var(--color-spa-gold-light)]"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                {stat.value}
              </span>
              <span
                className="text-[10px] text-white/50 tracking-wider uppercase"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll cue */}
      <a
        href="#services"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40 hover:text-white/70 transition-colors animate-bounce"
        aria-label="Scroll to services"
      >
        <ChevronDown size={20} />
      </a>
    </section>
  );
}
