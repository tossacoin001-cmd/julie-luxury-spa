"use client";

import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";
import { motion } from "framer-motion";

const therapists = [
  {
    initials: "AO",
    name: "Adaeze Okonkwo",
    title: "Lead Facial Therapist",
    years: 6,
    bio: "Trained in London and Lagos, Adaeze crafts treatments that deliver visible, lasting results. She reads your skin like a story.",
    specialties: ["Brightening Facials", "Anti-Aging", "Acne Therapy"],
    gradient: "from-[#62B626] to-[#2A5010]",
    rating: 4.9,
  },
  {
    initials: "CE",
    name: "Chioma Eze",
    title: "Senior Massage Therapist",
    years: 8,
    bio: "With 8 years of mastery, Chioma transforms muscle tension into pure relief. Her deep tissue technique is legendary.",
    specialties: ["Deep Tissue", "Swedish Massage", "Hot Stone"],
    gradient: "from-[#E8511A] to-[#C9A455]",
    rating: 5.0,
  },
  {
    initials: "FB",
    name: "Fatimah Bello",
    title: "Nail & Bridal Specialist",
    years: 5,
    bio: "Fatimah is the artist behind Lagos's most talked-about bridal nail looks. Every detail matters to her.",
    specialties: ["Bridal Packages", "Luxury Nail Art", "Nail Health"],
    gradient: "from-[#C9A455] to-[#8B6F47]",
    rating: 4.8,
  },
  {
    initials: "AN",
    name: "Amaka Nwosu",
    title: "Body Wellness Expert",
    years: 4,
    bio: "Amaka blends African body rituals with modern spa science. Her aromatherapy sessions leave clients glowing.",
    specialties: ["Body Scrubs", "Aromatherapy", "Couples Retreats"],
    gradient: "from-[#2A5010] to-[#62B626]",
    rating: 4.9,
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const card = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function Therapists() {
  return (
    <section id="therapists" className="py-24 bg-[var(--color-spa-green-dark)] relative overflow-hidden">
      {/* Botanical SVG decor */}
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 opacity-5 pointer-events-none"
        animate={{ rotate: 360 }}
        transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
      >
        <svg viewBox="0 0 400 400" fill="white">
          <path d="M200 20 Q260 80 240 160 Q300 120 360 160 Q300 200 260 240 Q320 280 280 360 Q220 300 200 240 Q180 300 120 360 Q80 280 140 240 Q100 200 40 160 Q100 120 160 160 Q140 80 200 20Z"/>
          <circle cx="200" cy="200" r="30" opacity="0.5"/>
        </svg>
      </motion.div>
      <div className="absolute bottom-0 left-0 w-72 h-72 opacity-5 pointer-events-none rotate-180">
        <svg viewBox="0 0 400 400" fill="white">
          <path d="M200 20 Q260 80 240 160 Q300 120 360 160 Q300 200 260 240 Q320 280 280 360 Q220 300 200 240 Q180 300 120 360 Q80 280 140 240 Q100 200 40 160 Q100 120 160 160 Q140 80 200 20Z"/>
        </svg>
      </div>
      {/* Gold glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-[var(--color-spa-gold)]/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <p
              className="text-xs tracking-[0.3em] uppercase text-[var(--color-spa-gold)] mb-3"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              The Hands Behind Your Glow
            </p>
            <h2
              className="text-4xl sm:text-5xl lg:text-6xl font-light text-white leading-tight"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              Meet our{" "}
              <em className="italic text-[var(--color-spa-gold)]">therapists</em>
            </h2>
            <p
              className="mt-4 text-white/60 text-sm max-w-md leading-relaxed"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Every treatment is delivered by certified, passionate professionals
              who treat your skin and body with genuine care.
            </p>
          </div>
          <Link
            href="/therapists"
            className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-white text-sm rounded-full hover:bg-white/10 transition-all duration-200 group shrink-0"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Meet all therapists
            <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>

        {/* Cards */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          {therapists.map((t) => (
            <motion.div
              key={t.name}
              variants={card}
              className="group bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-white/10 hover:border-white/25 transition-all duration-300 cursor-default"
              whileHover={{ y: -6, scale: 1.01 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              {/* Avatar */}
              <div className="relative mb-4 inline-block">
                <motion.div
                  className={`w-20 h-20 rounded-full bg-gradient-to-br ${t.gradient} flex items-center justify-center`}
                  whileHover={{ scale: 1.08 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <span
                    className="text-2xl font-medium text-white"
                    style={{ fontFamily: "var(--font-cormorant)" }}
                  >
                    {t.initials}
                  </span>
                </motion.div>
                <div className="absolute -bottom-1 -right-1 flex items-center gap-0.5 bg-[var(--color-spa-gold)] text-[var(--color-spa-green-dark)] text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                  <Star size={8} className="fill-current" />
                  {t.rating}
                </div>
              </div>

              <p
                className="text-[10px] tracking-widest uppercase text-[var(--color-spa-gold)] mb-0.5"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                {t.years} yrs · {t.title}
              </p>
              <h3
                className="text-lg font-medium text-white mb-2"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                {t.name}
              </h3>
              <p
                className="text-xs text-white/55 leading-relaxed mb-4"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                {t.bio}
              </p>

              <div className="flex flex-wrap gap-1.5">
                {t.specialties.map((s) => (
                  <span
                    key={s}
                    className="text-[10px] px-2 py-0.5 rounded-full bg-white/8 text-white/50 border border-white/10"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Link
            href="/book"
            className="inline-flex items-center justify-center px-8 py-4 bg-[var(--color-spa-gold)] hover:bg-[var(--color-spa-gold-light)] text-[var(--color-spa-green-dark)] text-sm font-semibold rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-yellow-900/20 tracking-wide"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Book with a Therapist
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
