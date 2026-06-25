"use client";

import Link from "next/link";
import { ArrowLeft, Clock, Sparkles, Home, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { formatCurrency } from "@/lib/utils";

const services = [
  {
    id: "signature-facial",
    name: "Signature Facial",
    tagline: "Glow that speaks for itself",
    description: "A bespoke facial experience using premium-grade serums and techniques tailored to your skin type. Our therapist begins with a detailed skin analysis before crafting a treatment that targets your specific concerns — whether that's brightening, hydration, firming, or clarity.",
    duration: 75,
    price: 35000,
    badge: "Most Popular",
    badgeColor: "bg-[var(--color-spa-green)] text-white",
    accent: "#62B626",
    emoji: "✨",
    includes: ["Skin analysis & consultation", "Double cleanse & steam", "Custom serum application", "Facial massage", "SPF moisturiser"],
    homeService: true,
  },
  {
    id: "deep-tissue-massage",
    name: "Deep Tissue Massage",
    tagline: "Release. Reset. Restore.",
    description: "Targeted pressure techniques to dissolve tension, improve circulation, and ease chronic muscle pain. Full-body transformation. Our therapists are trained to identify knots and tension patterns, applying firm, sustained pressure to release the deep layers of muscle and connective tissue.",
    duration: 90,
    price: 45000,
    badge: null,
    accent: "#8B6F47",
    emoji: "🌿",
    includes: ["Full body assessment", "Hot towel preparation", "Deep tissue technique", "Aromatherapy oil", "Post-massage stretch"],
    homeService: true,
  },
  {
    id: "luxury-body-scrub",
    name: "Luxury Body Scrub",
    tagline: "Skin so soft, you'll feel reborn",
    description: "A full-body exfoliation ritual using natural botanical scrubs that buff away dullness and reveal radiant, silky skin. We use a blend of natural sugars, shea butter, and botanical extracts sourced for their skin-renewing properties.",
    duration: 60,
    price: 28000,
    badge: null,
    accent: "#E8511A",
    emoji: "🍃",
    includes: ["Dry brushing", "Botanical scrub application", "Warm rinse", "Nourishing body butter", "Hydration mask"],
    homeService: true,
  },
  {
    id: "bridal-package",
    name: "Bridal Package",
    tagline: "Your wedding glow, perfected",
    description: "A 3-session pre-wedding treatment plan covering face, body, and hands — so you walk down the aisle absolutely radiant. Scheduled across 3 weeks leading up to your wedding day, each session is designed to build on the last.",
    duration: 210,
    price: 120000,
    badge: "Premium",
    badgeColor: "bg-[var(--color-spa-gold)] text-[var(--color-spa-green-dark)]",
    accent: "#C9A455",
    emoji: "💍",
    includes: ["3 full treatment sessions", "Pre-bridal skin consultation", "Brightening facial", "Full body scrub & wrap", "Luxury mani & pedi", "Touch-up kit on your day"],
    homeService: true,
  },
  {
    id: "mani-pedi-luxury",
    name: "Luxury Mani & Pedi",
    tagline: "Details that make the difference",
    description: "Premium nail care with hot stone treatment, paraffin wrap, and your choice of long-lasting polish. Pure indulgence for your hands and feet, from shaping and cuticle care through to the perfect finish.",
    duration: 90,
    price: 22000,
    badge: null,
    accent: "#F07040",
    emoji: "💅",
    includes: ["Shape & file", "Cuticle treatment", "Hot stone massage", "Paraffin wax dip", "Long-lasting gel polish", "Nail art optional"],
    homeService: true,
  },
  {
    id: "couples-retreat",
    name: "Couples Retreat",
    tagline: "Unwind together",
    description: "Side-by-side massages, a shared aromatherapy soak, and champagne — the perfect experience for two. Whether it's a birthday, anniversary, or just because you both deserve it — this session is designed to be unforgettable.",
    duration: 120,
    price: 85000,
    badge: "Gift Favorite",
    badgeColor: "bg-[var(--color-spa-orange)] text-white",
    accent: "#E8511A",
    emoji: "🥂",
    includes: ["Private couples suite", "Side-by-side massage", "Aromatherapy soak", "Welcome champagne", "Chocolate & fruit platter", "Gift wrap on request"],
    homeService: false,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[var(--color-spa-cream)] pt-20">
      {/* Hero */}
      <div className="bg-[var(--color-spa-green-dark)] py-20 relative overflow-hidden">
        <motion.div
          className="absolute inset-0 opacity-5"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 10, repeat: Infinity }}
        >
          <svg viewBox="0 0 800 400" fill="white" className="w-full h-full">
            <path d="M400 40 Q520 160 480 320 Q600 240 720 320 Q600 400 520 480 Q640 560 560 720 Q440 600 400 480 Q360 600 240 720 Q160 560 280 480 Q200 400 80 320 Q200 240 320 320 Q280 160 400 40Z" opacity="0.2"/>
          </svg>
        </motion.div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-white/50 hover:text-white text-xs mb-8 transition-colors"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            <ArrowLeft size={12} /> Back to home
          </Link>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xs tracking-[0.3em] uppercase text-[var(--color-spa-gold)] mb-3"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Our Treatments
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-light text-white mb-5"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Every service, a{" "}
            <em className="italic text-[var(--color-spa-gold)]">ritual</em>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-white/60 text-sm max-w-xl mx-auto leading-relaxed"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            All treatments available in-spa or as home service across Lagos.
            Each session is curated for visible, lasting results.
          </motion.p>
        </div>
      </div>

      {/* Service type legend */}
      <div className="bg-white border-b border-[var(--color-spa-stone)]">
        <div className="max-w-5xl mx-auto px-4 py-4 flex flex-wrap gap-6">
          {[
            { icon: MapPin, label: "In-Spa Visit", color: "text-[var(--color-spa-green)]" },
            { icon: Home, label: "Home Service Available", color: "text-[var(--color-spa-orange)]" },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <span key={item.label} className={`flex items-center gap-2 text-xs ${item.color}`} style={{ fontFamily: "var(--font-inter)" }}>
                <Icon size={14} />
                {item.label}
              </span>
            );
          })}
        </div>
      </div>

      {/* Services list */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16 space-y-8">
        {services.map((service, i) => (
          <motion.div
            key={service.id}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="bg-white rounded-2xl border border-[var(--color-spa-stone)] overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            {/* Top accent bar */}
            <div className="h-1" style={{ background: service.accent }} />

            <div className="p-6 sm:p-8 grid sm:grid-cols-3 gap-6">
              {/* Left */}
              <div className="sm:col-span-2">
                <div className="flex items-start gap-4 mb-4">
                  <motion.div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl shrink-0"
                    style={{ backgroundColor: `${service.accent}18` }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    {service.emoji}
                  </motion.div>
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <h2
                        className="text-2xl sm:text-3xl font-medium text-[var(--color-spa-green-dark)]"
                        style={{ fontFamily: "var(--font-cormorant)" }}
                      >
                        {service.name}
                      </h2>
                      {service.badge && (
                        <span
                          className={`text-[10px] font-medium px-2.5 py-1 rounded-full tracking-wide ${service.badgeColor}`}
                          style={{ fontFamily: "var(--font-inter)" }}
                        >
                          {service.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-sm italic text-[var(--color-spa-earth)]" style={{ fontFamily: "var(--font-cormorant)" }}>
                      {service.tagline}
                    </p>
                  </div>
                </div>

                <p
                  className="text-sm text-[var(--color-spa-muted)] leading-relaxed mb-5"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  {service.description}
                </p>

                {/* What's included */}
                <div>
                  <p className="text-xs font-medium text-[var(--color-spa-charcoal)] mb-2 tracking-wide" style={{ fontFamily: "var(--font-inter)" }}>
                    What's included
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {service.includes.map((inc) => (
                      <span
                        key={inc}
                        className="inline-flex items-center gap-1 text-xs text-[var(--color-spa-charcoal)] bg-[var(--color-spa-cream-dark)] px-3 py-1 rounded-full border border-[var(--color-spa-stone)]"
                        style={{ fontFamily: "var(--font-inter)" }}
                      >
                        <span className="text-[var(--color-spa-green)] text-[9px]">✓</span>
                        {inc}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right — price + booking */}
              <div className="flex flex-col justify-between">
                <div className="p-4 rounded-xl bg-[var(--color-spa-cream-dark)] border border-[var(--color-spa-stone)] mb-4">
                  <div className="flex items-center gap-1.5 text-xs text-[var(--color-spa-muted)] mb-1" style={{ fontFamily: "var(--font-inter)" }}>
                    <Clock size={11} />
                    {service.duration} minutes
                  </div>
                  <p
                    className="text-2xl font-medium text-[var(--color-spa-green-dark)] mb-0.5"
                    style={{ fontFamily: "var(--font-cormorant)", color: service.accent }}
                  >
                    {formatCurrency(service.price)}
                  </p>
                  <p className="text-[10px] text-[var(--color-spa-muted)]" style={{ fontFamily: "var(--font-inter)" }}>
                    30% deposit to book
                  </p>

                  {/* Available for home service? */}
                  <div className="mt-3 pt-3 border-t border-[var(--color-spa-stone)] flex items-center gap-1.5">
                    {service.homeService ? (
                      <>
                        <Home size={11} className="text-[var(--color-spa-orange)]" />
                        <span className="text-[10px] text-[var(--color-spa-muted)]" style={{ fontFamily: "var(--font-inter)" }}>
                          Home service available
                        </span>
                      </>
                    ) : (
                      <>
                        <MapPin size={11} className="text-[var(--color-spa-green)]" />
                        <span className="text-[10px] text-[var(--color-spa-muted)]" style={{ fontFamily: "var(--font-inter)" }}>
                          In-spa only
                        </span>
                      </>
                    )}
                  </div>
                </div>

                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Link
                    href={`/book?service=${service.id}`}
                    className="flex items-center justify-center gap-2 w-full py-3 text-sm font-medium text-white rounded-full transition-colors"
                    style={{ backgroundColor: service.accent, fontFamily: "var(--font-inter)" }}
                  >
                    <Sparkles size={14} />
                    Book This Treatment
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="bg-[var(--color-spa-green-dark)] py-16">
        <div className="max-w-xl mx-auto px-4 text-center">
          <h2
            className="text-3xl sm:text-4xl font-light text-white mb-4"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Not sure which to choose?
          </h2>
          <p
            className="text-white/60 text-sm mb-8 leading-relaxed"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Message us on WhatsApp and we'll help you find the perfect treatment for your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/book"
              className="inline-flex items-center justify-center px-8 py-4 bg-[var(--color-spa-gold)] text-[var(--color-spa-green-dark)] text-sm font-bold rounded-full hover:bg-[var(--color-spa-gold-light)] transition-colors"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Book a Session
            </Link>
            <a
              href="https://wa.me/2348000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/25 text-white text-sm rounded-full hover:bg-white/10 transition-colors"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-[#25D366]">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Ask on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
