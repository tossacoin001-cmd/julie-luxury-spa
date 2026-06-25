"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    name: "Adaeze O.",
    role: "Business Executive, VI",
    rating: 5,
    text: "I've been to spas all over Lagos and Julie's is in a completely different league. The signature facial left my skin glowing for two weeks. I booked the next session before I even left.",
    avatar: "AO",
    color: "bg-[var(--color-spa-green)]",
  },
  {
    name: "Fatima K.",
    role: "Bride, Lekki",
    rating: 5,
    text: "I did the bridal package for my wedding and every single person at my ceremony asked about my skin. My photographer said I was the easiest bride she'd ever shot. Worth every naira.",
    avatar: "FK",
    color: "bg-[var(--color-spa-orange)]",
  },
  {
    name: "Ngozi A.",
    role: "Doctor, Island",
    rating: 5,
    text: "After a brutal 72-hour shift I booked a deep tissue massage. I genuinely cried when I got on the table — in the best way. The therapist knew exactly where to work. I left a different person.",
    avatar: "NA",
    color: "bg-[var(--color-spa-gold)]",
  },
  {
    name: "Tunde B.",
    role: "Entrepreneur, Ikoyi",
    rating: 5,
    text: "My wife got me a gift card and I was sceptical. Now I'm the one buying her gift cards. The couples package was an incredible experience — peaceful, luxurious, and genuinely therapeutic.",
    avatar: "TB",
    color: "bg-[var(--color-spa-earth)]",
  },
  {
    name: "Chisom E.",
    role: "Content Creator, Ajah",
    rating: 5,
    text: "The booking was seamless, the WhatsApp reminder was perfect, and the body scrub was divine. My skin was glowing on camera for a full week. Julie's has a client for life.",
    avatar: "CE",
    color: "bg-[var(--color-spa-green-light)]",
  },
];

export function Testimonials() {
  const [active, setActive] = useState(0);

  const prev = () => setActive((a) => (a === 0 ? testimonials.length - 1 : a - 1));
  const next = () => setActive((a) => (a === testimonials.length - 1 ? 0 : a + 1));

  const t = testimonials[active];

  return (
    <section className="py-24 bg-[var(--color-spa-green-dark)] relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute -top-20 -left-20 w-80 h-80 rounded-full bg-[var(--color-spa-green-light)]" />
        <div className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-[var(--color-spa-orange)]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <p
            className="text-xs tracking-[0.3em] uppercase text-[var(--color-spa-gold)] mb-3"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Client Love
          </p>
          <h2
            className="text-4xl sm:text-5xl font-light text-white"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            They came once.
            <br />
            <em className="italic text-[var(--color-spa-gold-light)]">They keep coming back.</em>
          </h2>
        </div>

        {/* Stars */}
        <div className="flex justify-center gap-1 mb-8">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={20} className="fill-[var(--color-spa-gold)] text-[var(--color-spa-gold)]" />
          ))}
        </div>

        {/* Card */}
        <div className="bg-white/8 backdrop-blur-sm border border-white/10 rounded-2xl p-8 sm:p-10 text-center mb-8">
          <p
            className="text-xl sm:text-2xl lg:text-3xl font-light text-white leading-relaxed mb-8 italic"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            &ldquo;{t.text}&rdquo;
          </p>
          <div className="flex items-center justify-center gap-3">
            <div
              className={`w-10 h-10 rounded-full ${t.color} flex items-center justify-center text-white text-xs font-bold`}
            >
              {t.avatar}
            </div>
            <div className="text-left">
              <p className="text-white text-sm font-medium" style={{ fontFamily: "var(--font-inter)" }}>
                {t.name}
              </p>
              <p className="text-white/50 text-xs" style={{ fontFamily: "var(--font-inter)" }}>
                {t.role}
              </p>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-6">
          <button
            onClick={prev}
            className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white/40 transition-colors"
            aria-label="Previous"
          >
            <ChevronLeft size={18} />
          </button>
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={cn(
                  "w-2 h-2 rounded-full transition-all duration-300",
                  i === active
                    ? "w-6 bg-[var(--color-spa-gold)]"
                    : "bg-white/25 hover:bg-white/40"
                )}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
          <button
            onClick={next}
            className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white/40 transition-colors"
            aria-label="Next"
          >
            <ChevronRight size={18} />
          </button>
        </div>

        {/* Google rating badge */}
        <div className="mt-12 flex justify-center">
          <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-white/8 border border-white/10">
            <svg viewBox="0 0 24 24" width="18" height="18">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            <div>
              <p className="text-white text-xs font-medium" style={{ fontFamily: "var(--font-inter)" }}>
                4.9/5 on Google Reviews
              </p>
              <div className="flex gap-0.5 mt-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={10} className="fill-[var(--color-spa-gold)] text-[var(--color-spa-gold)]" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
