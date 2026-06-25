"use client";

import Link from "next/link";
import { ChevronDown, Star, Users } from "lucide-react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

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
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
        style={{ backgroundImage: `url('/images/hero-spa.jpg')` }}
      />
      {/* Fallback gradient background when no image */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1A3A08] via-[#2A5010] to-[#1a1a0a]" />
      {/* Layered overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1A2A0F]/70 via-[#1A2A0F]/50 to-[#1A2A0F]/90" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#1A2A0F]/40 via-transparent to-transparent" />

      {/* Animated botanical elements */}
      <motion.div
        className="absolute top-20 right-0 w-80 h-80 opacity-10 pointer-events-none"
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      >
        <svg viewBox="0 0 200 200" className="w-full h-full text-[var(--color-spa-green-light)]" fill="currentColor">
          <path d="M100 10 Q130 40 120 80 Q150 60 180 80 Q150 100 130 120 Q160 140 140 180 Q110 150 100 120 Q90 150 60 180 Q40 140 70 120 Q50 100 20 80 Q50 60 80 80 Q70 40 100 10Z" opacity="0.5"/>
          <circle cx="100" cy="100" r="15" opacity="0.3"/>
        </svg>
      </motion.div>
      <motion.div
        className="absolute bottom-32 left-0 w-52 h-52 opacity-10 pointer-events-none"
        animate={{ rotate: -360 }}
        transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
      >
        <svg viewBox="0 0 200 200" className="w-full h-full text-[var(--color-spa-orange)]" fill="currentColor">
          <path d="M100 10 Q130 40 120 80 Q150 60 180 80 Q150 100 130 120 Q160 140 140 180 Q110 150 100 120 Q90 150 60 180 Q40 140 70 120 Q50 100 20 80 Q50 60 80 80 Q70 40 100 10Z" opacity="0.5"/>
        </svg>
      </motion.div>
      {/* Gold orbs */}
      <motion.div
        className="absolute top-1/3 left-1/4 w-64 h-64 rounded-full bg-[var(--color-spa-gold)]/5 blur-3xl pointer-events-none"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-48 h-48 rounded-full bg-[var(--color-spa-green)]/8 blur-2xl pointer-events-none"
        animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/80 text-xs tracking-widest uppercase mb-6"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          <Star size={12} className="fill-[var(--color-spa-gold)] text-[var(--color-spa-gold)]" />
          Lagos's Premier Luxury Spa
          <Star size={12} className="fill-[var(--color-spa-gold)] text-[var(--color-spa-gold)]" />
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-light text-white leading-[1.05] mb-6"
          style={{ fontFamily: "var(--font-cormorant)" }}
        >
          Step into
          <br />
          <em className="italic text-[var(--color-spa-gold-light)]">pure luxury</em>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="text-base sm:text-lg text-white/75 max-w-xl mx-auto mb-4 leading-relaxed"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          Premium spa treatments crafted to restore your body, refresh your mind,
          and leave you glowing. Book in 60 seconds — same-week availability.
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-sm text-[var(--color-spa-gold-light)]/80 mb-10 font-light"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          At our spa in Lagos · or we come to <em>you</em>
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          <Link
            href="/book"
            className="group inline-flex items-center justify-center px-8 py-4 bg-[var(--color-spa-green)] hover:bg-[var(--color-spa-green-dark)] text-white text-sm font-medium rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-green-900/40 hover:-translate-y-0.5 tracking-wide"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Book Your Session
          </Link>
          <Link
            href="/therapists"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white text-sm font-medium rounded-full transition-all duration-300 hover:-translate-y-0.5 tracking-wide"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            <Users size={15} />
            Meet Our Therapists
          </Link>
        </motion.div>

        {/* Trust stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.0 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl mx-auto"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 1.1 + i * 0.1 }}
              className="flex flex-col items-center gap-1 px-2 py-3 rounded-xl bg-white/8 backdrop-blur-sm border border-white/10 hover:bg-white/12 transition-colors"
            >
              <span
                className="text-xl sm:text-2xl font-medium text-[var(--color-spa-gold-light)]"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                {stat.value}
              </span>
              <span
                className="text-[10px] text-white/50 tracking-wider uppercase text-center"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                {stat.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.a
        href="#services"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40 hover:text-white/70 transition-colors"
        aria-label="Scroll to services"
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="text-[10px] tracking-widest uppercase" style={{ fontFamily: "var(--font-inter)" }}>Explore</span>
        <ChevronDown size={18} />
      </motion.a>
    </section>
  );
}
