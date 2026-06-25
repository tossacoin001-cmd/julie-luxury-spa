"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Phone, MapPin, Home } from "lucide-react";

export function FinalCTA() {
  const waNumber = "2348000000000";
  const waMessage = encodeURIComponent("Hi Julie! I'd like to book a spa session. Can you help me?");

  return (
    <section className="relative bg-[var(--color-spa-green-dark)] overflow-hidden">
      {/* Top wave separator */}
      <div className="absolute top-0 left-0 right-0 overflow-hidden leading-none">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 60 C360 0 1080 0 1440 60 L1440 0 L0 0 Z" fill="var(--color-spa-cream-dark)"/>
        </svg>
      </div>

      {/* Background decoration */}
      <motion.div
        className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-[var(--color-spa-gold)]/8 blur-3xl pointer-events-none"
        animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-[var(--color-spa-green)]/15 blur-3xl pointer-events-none"
        animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 3 }}
      />
      <div className="absolute inset-0 opacity-5">
        <svg viewBox="0 0 800 600" fill="white" className="w-full h-full">
          <path d="M400 40 Q520 160 480 320 Q600 240 720 320 Q600 400 520 480 Q640 560 560 720 Q440 600 400 480 Q360 600 240 720 Q160 560 280 480 Q200 400 80 320 Q200 240 320 320 Q280 160 400 40Z" opacity="0.15"/>
        </svg>
      </div>

      <div className="relative pt-20 pb-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left — copy */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7 }}
            >
              <p
                className="text-xs tracking-[0.3em] uppercase text-[var(--color-spa-gold)] mb-4"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                Ready When You Are
              </p>
              <h2
                className="text-4xl sm:text-5xl lg:text-6xl font-light text-white mb-6 leading-tight"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                Your body has been{" "}
                <em className="italic text-[var(--color-spa-gold)]">waiting</em>
                <br />
                for this.
              </h2>
              <p
                className="text-white/60 text-sm leading-relaxed mb-8"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                Same-week appointments available. Book in under 60 seconds.
                No phone calls needed — choose your treatment and we'll handle the rest.
                Come to us, or let us come to you.
              </p>

              {/* Service type badges */}
              <div className="flex gap-3 mb-8 flex-wrap">
                {[
                  { icon: MapPin, label: "In-Spa Visit", sub: "Victoria Island / Lekki" },
                  { icon: Home, label: "Home Service", sub: "We come to you · +₦5k" },
                ].map((opt) => {
                  const Icon = opt.icon;
                  return (
                    <div
                      key={opt.label}
                      className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/8 border border-white/15"
                    >
                      <Icon size={14} className="text-[var(--color-spa-gold)]" />
                      <div>
                        <p className="text-xs font-medium text-white" style={{ fontFamily: "var(--font-inter)" }}>{opt.label}</p>
                        <p className="text-[10px] text-white/40" style={{ fontFamily: "var(--font-inter)" }}>{opt.sub}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-3">
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Link
                    href="/book"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[var(--color-spa-gold)] hover:bg-[var(--color-spa-gold-light)] text-[var(--color-spa-green-dark)] text-sm font-bold rounded-full transition-all duration-200 hover:shadow-lg tracking-wide w-full sm:w-auto"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    Book a Session
                    <ArrowRight size={14} />
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <a
                    href={`https://wa.me/${waNumber}?text=${waMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/25 text-white text-sm font-medium rounded-full hover:bg-white/10 transition-colors tracking-wide w-full sm:w-auto"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-[#25D366]">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    Chat on WhatsApp
                  </a>
                </motion.div>
              </div>
            </motion.div>

            {/* Right — trust card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="space-y-4"
            >
              {/* Contact card */}
              <div className="bg-white/8 backdrop-blur-sm border border-white/15 rounded-2xl p-6">
                <p
                  className="text-xs tracking-widest uppercase text-[var(--color-spa-gold)] mb-4"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  Contact Us
                </p>
                <div className="space-y-4">
                  <a
                    href="tel:+2348000000000"
                    className="flex items-center gap-3 text-white/70 hover:text-white transition-colors group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-[var(--color-spa-gold)]/15 flex items-center justify-center">
                      <Phone size={14} className="text-[var(--color-spa-gold)]" />
                    </div>
                    <div>
                      <p className="text-xs text-white/40 mb-0.5" style={{ fontFamily: "var(--font-inter)" }}>Call us</p>
                      <p className="text-sm font-medium" style={{ fontFamily: "var(--font-inter)" }}>+234 800 000 0000</p>
                    </div>
                  </a>
                  <div className="flex items-start gap-3 text-white/70">
                    <div className="w-8 h-8 rounded-lg bg-[var(--color-spa-gold)]/15 flex items-center justify-center shrink-0">
                      <MapPin size={14} className="text-[var(--color-spa-gold)]" />
                    </div>
                    <div>
                      <p className="text-xs text-white/40 mb-0.5" style={{ fontFamily: "var(--font-inter)" }}>Find us</p>
                      <p className="text-sm" style={{ fontFamily: "var(--font-inter)" }}>Victoria Island / Lekki, Lagos</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Hours card */}
              <div className="bg-white/8 backdrop-blur-sm border border-white/15 rounded-2xl p-6">
                <p
                  className="text-xs tracking-widest uppercase text-[var(--color-spa-gold)] mb-3"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  Opening Hours
                </p>
                <div className="space-y-2 text-sm" style={{ fontFamily: "var(--font-inter)" }}>
                  <div className="flex justify-between">
                    <span className="text-white/50">Monday – Friday</span>
                    <span className="text-white font-medium">9am – 8pm</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/50">Saturday</span>
                    <span className="text-white font-medium">9am – 7pm</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/50">Sunday</span>
                    <span className="text-white font-medium">11am – 6pm</span>
                  </div>
                </div>
              </div>

              {/* Trust micro-copy */}
              <div className="flex flex-wrap gap-3" style={{ fontFamily: "var(--font-inter)" }}>
                {["Free rescheduling 24h ahead", "Secure 30% deposit", "WhatsApp confirmation"].map((t) => (
                  <span
                    key={t}
                    className="flex items-center gap-1.5 text-xs text-white/50"
                  >
                    <span className="w-4 h-4 rounded-full bg-[var(--color-spa-gold)]/20 flex items-center justify-center text-[var(--color-spa-gold)] text-[9px]">✓</span>
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
