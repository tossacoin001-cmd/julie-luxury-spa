"use client";

import Link from "next/link";
import { ArrowRight, Clock, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { formatCurrency } from "@/lib/utils";

const services = [
  {
    id: "signature-facial",
    name: "Signature Facial",
    tagline: "Glow that speaks for itself",
    description: "A bespoke facial using premium-grade serums and techniques tailored to your skin type. Leave with a visible glow.",
    duration: 75,
    price: 35000,
    badge: "Most Popular",
    badgeColor: "bg-[var(--color-spa-green)] text-white",
    accent: "#62B626",
    emoji: "✨",
  },
  {
    id: "deep-tissue-massage",
    name: "Deep Tissue Massage",
    tagline: "Release. Reset. Restore.",
    description: "Targeted pressure techniques to dissolve tension, improve circulation, and ease chronic muscle pain.",
    duration: 90,
    price: 45000,
    badge: null,
    accent: "#8B6F47",
    emoji: "🌿",
  },
  {
    id: "luxury-body-scrub",
    name: "Luxury Body Scrub",
    tagline: "Skin so soft, you'll feel reborn",
    description: "A full-body exfoliation ritual using natural botanical scrubs that buff away dullness and reveal radiant skin.",
    duration: 60,
    price: 28000,
    badge: null,
    accent: "#E8511A",
    emoji: "🍃",
  },
  {
    id: "bridal-package",
    name: "Bridal Package",
    tagline: "Your wedding glow, perfected",
    description: "A 3-session pre-wedding treatment plan covering face, body, and hands — so you walk down the aisle radiant.",
    duration: 210,
    price: 120000,
    badge: "Premium",
    badgeColor: "bg-[var(--color-spa-gold)] text-[var(--color-spa-green-dark)]",
    accent: "#C9A455",
    emoji: "💍",
  },
  {
    id: "mani-pedi-luxury",
    name: "Luxury Mani & Pedi",
    tagline: "Details that make the difference",
    description: "Premium nail care with hot stone treatment, paraffin wrap, and your choice of long-lasting polish.",
    duration: 90,
    price: 22000,
    badge: null,
    accent: "#F07040",
    emoji: "💅",
  },
  {
    id: "couples-retreat",
    name: "Couples Retreat",
    tagline: "Unwind together",
    description: "Side-by-side massages, a shared aromatherapy soak, and champagne — the perfect experience for two.",
    duration: 120,
    price: 85000,
    badge: "Gift Favorite",
    badgeColor: "bg-[var(--color-spa-orange)] text-white",
    accent: "#E8511A",
    emoji: "🥂",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function Services() {
  return (
    <section id="services" className="py-24 bg-[var(--color-spa-cream)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <p
            className="text-xs tracking-[0.3em] uppercase text-[var(--color-spa-green)] mb-3"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Our Treatments
          </p>
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-light text-[var(--color-spa-green-dark)] mb-5"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Every treatment, a{" "}
            <em className="italic text-[var(--color-spa-orange)]">ritual</em>
          </h2>
          <p
            className="max-w-xl mx-auto text-[var(--color-spa-muted)] text-sm leading-relaxed"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Each service is crafted to deliver more than relaxation — it's a
            reset for your body, skin, and mind. Available in-spa or at your location.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={item}
              className="group relative bg-white rounded-2xl overflow-hidden border border-[var(--color-spa-stone)] hover:shadow-xl transition-shadow duration-300"
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              {/* Colored top border */}
              <div
                className="h-1 w-full"
                style={{ background: service.accent }}
              />

              <div className="p-6">
                {/* Badge */}
                {service.badge && (
                  <span
                    className={`absolute top-5 right-5 text-[10px] font-medium px-2.5 py-1 rounded-full tracking-wide ${service.badgeColor}`}
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    {service.badge}
                  </span>
                )}

                {/* Emoji icon */}
                <motion.div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-4"
                  style={{ backgroundColor: `${service.accent}18` }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  {service.emoji}
                </motion.div>

                {/* Content */}
                <h3
                  className="text-2xl font-medium text-[var(--color-spa-green-dark)] mb-1"
                  style={{ fontFamily: "var(--font-cormorant)" }}
                >
                  {service.name}
                </h3>
                <p
                  className="text-xs text-[var(--color-spa-earth)] mb-3 italic"
                  style={{ fontFamily: "var(--font-cormorant)" }}
                >
                  {service.tagline}
                </p>
                <p
                  className="text-sm text-[var(--color-spa-muted)] leading-relaxed mb-5"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  {service.description}
                </p>

                {/* Meta */}
                <div className="flex items-center gap-4 mb-5 text-xs text-[var(--color-spa-muted)]" style={{ fontFamily: "var(--font-inter)" }}>
                  <span className="flex items-center gap-1">
                    <Clock size={12} />
                    {service.duration} min
                  </span>
                  <span className="flex items-center gap-1" style={{ color: service.accent }}>
                    <Sparkles size={12} />
                    From {formatCurrency(service.price)}
                  </span>
                </div>

                {/* CTA */}
                <Link
                  href={`/book?service=${service.id}`}
                  className="group/btn inline-flex items-center gap-2 text-sm font-medium transition-colors"
                  style={{ fontFamily: "var(--font-inter)", color: service.accent }}
                >
                  Book This Treatment
                  <ArrowRight size={14} className="transition-transform group-hover/btn:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom links */}
        <motion.div
          className="text-center mt-14 flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--color-spa-green-dark)] text-white text-sm rounded-full hover:bg-[var(--color-spa-green)] transition-colors"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            View All Services <ArrowRight size={14} />
          </Link>
          <a
            href={`https://wa.me/2348000000000?text=${encodeURIComponent("Hi! I'd love some help choosing the right spa treatment for me.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-[var(--color-spa-stone-dark)] text-[var(--color-spa-charcoal)] text-sm rounded-full hover:border-[var(--color-spa-green)] hover:text-[var(--color-spa-green)] transition-colors"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-[#25D366]">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Ask us on WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
}
