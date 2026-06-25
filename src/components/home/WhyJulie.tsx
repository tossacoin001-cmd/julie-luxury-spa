"use client";

import { motion } from "framer-motion";

const pillars = [
  { icon: "🌿", title: "All-Natural Products", body: "We use only premium, nature-derived formulations — no harsh chemicals on your skin. Every product is curated for results and safety." },
  { icon: "👩‍⚕️", title: "Expert Therapists", body: "Our team is trained, certified, and genuinely passionate about their craft. Every touch is purposeful, every session is intentional." },
  { icon: "🏛️", title: "Private, Peaceful Suites", body: "Each treatment happens in your own private suite — no noise, no rush. Just you, calm lighting, and the scent of nature around you." },
  { icon: "⚡", title: "Book in 60 Seconds", body: "Our online booking system is built for ease. Pick your service, choose a time, pay a deposit — done. Confirmation hits your WhatsApp instantly." },
  { icon: "✅", title: "Results You Can See", body: "Every treatment is engineered for visible, lasting results — not just a nice hour of relaxation but real change your skin and body will thank you for." },
  { icon: "💬", title: "We Follow Up", body: "Your journey doesn't end when you leave. We check in, send reminders, and personalize recommendations so every visit builds on the last." },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function WhyJulie() {
  return (
    <section className="py-24 bg-[var(--color-spa-cream-dark)]" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left — copy */}
          <div className="lg:sticky lg:top-28">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7 }}
            >
              <p
                className="text-xs tracking-[0.3em] uppercase text-[var(--color-spa-orange)] mb-3"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                Why Julie's
              </p>
              <h2
                className="text-4xl sm:text-5xl lg:text-6xl font-light text-[var(--color-spa-green-dark)] leading-tight mb-6"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                Not just a spa.
                <br />
                <em className="italic">An experience.</em>
              </h2>
              <p
                className="text-[var(--color-spa-muted)] leading-relaxed mb-8 text-sm"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                In Lagos, time is precious and your body deserves the best. We
                built Julie Luxury Spa around one promise — that every single
                client leaves feeling noticeably better than when they walked in.
              </p>

              <div className="flex items-center gap-3 mb-8">
                <div className="h-px flex-1 bg-gradient-to-r from-[var(--color-spa-green)] via-[var(--color-spa-gold)] to-transparent" />
                <span className="text-2xl">🌺</span>
              </div>

              <motion.blockquote
                initial={{ opacity: 0, scale: 0.97 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-xl sm:text-2xl font-light italic text-[var(--color-spa-green-dark)] leading-relaxed border-l-2 border-[var(--color-spa-green)] pl-5"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                "You deserve more than just a massage. You deserve to feel like
                yourself again — only better."
              </motion.blockquote>
              <p
                className="mt-3 text-xs text-[var(--color-spa-muted)] tracking-wide"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                — Julie, Founder
              </p>
            </motion.div>
          </div>

          {/* Right — pillars */}
          <motion.div
            className="grid sm:grid-cols-2 gap-5"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
          >
            {pillars.map((p) => (
              <motion.div
                key={p.title}
                variants={item}
                className="bg-white rounded-xl p-5 border border-[var(--color-spa-stone)] hover:border-[var(--color-spa-green)] transition-colors group"
                whileHover={{ y: -3, boxShadow: "0 8px 30px rgba(0,0,0,0.06)" }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div
                  className="text-2xl mb-3 inline-block"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  {p.icon}
                </motion.div>
                <h3
                  className="text-lg font-medium text-[var(--color-spa-green-dark)] mb-2 group-hover:text-[var(--color-spa-green)] transition-colors"
                  style={{ fontFamily: "var(--font-cormorant)" }}
                >
                  {p.title}
                </h3>
                <p
                  className="text-sm text-[var(--color-spa-muted)] leading-relaxed"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  {p.body}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
