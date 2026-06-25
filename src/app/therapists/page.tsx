import Link from "next/link";
import { ArrowLeft, Star, Award, Heart } from "lucide-react";

export const metadata = {
  title: "Meet Our Therapists — Julie Luxury Spa",
  description:
    "Meet the expert hands behind your glow. Our certified therapists bring passion, training, and care to every session at Julie Luxury Spa, Lagos.",
};

const therapists = [
  {
    initials: "AO",
    name: "Adaeze Okonkwo",
    title: "Lead Facial Therapist",
    years: 6,
    gradient: "from-[#62B626] to-[#2A5010]",
    rating: 4.9,
    reviews: 142,
    bio: "Trained in London and Lagos, Adaeze is our resident skin specialist. She reads your skin like a story — understanding its history, its current state, and where it needs to go. With a background in dermal therapy and clinical aesthetics, her facials are more than pampering; they're precision skincare. Whether you're battling hyperpigmentation, early aging, or just want that glass-skin glow, Adaeze has seen it and solved it.",
    specialties: ["Brightening Facials", "Anti-Aging Treatments", "Acne Therapy", "Skin Analysis", "Chemical Peels"],
    certifications: ["CIDESCO Certified", "SkinCeuticals Trained", "Advanced Aesthetics Diploma"],
    quote: "Your skin tells a story. My job is to give it a beautiful ending.",
  },
  {
    initials: "CE",
    name: "Chioma Eze",
    title: "Senior Massage Therapist",
    years: 8,
    gradient: "from-[#E8511A] to-[#C9A455]",
    rating: 5.0,
    reviews: 218,
    bio: "Chioma is the reason so many clients come back asking for her by name. With 8 years of hands-on experience across sports massage, deep tissue, and Swedish techniques, she has an almost intuitive ability to find where you hold tension — even before you point it out. She trained under a physiotherapy practice and brings clinical precision to every session, resulting in relief that lasts days, not hours.",
    specialties: ["Deep Tissue Massage", "Swedish Massage", "Hot Stone Therapy", "Sports Recovery", "Prenatal Massage"],
    certifications: ["ITEC Massage Diploma", "Sports Massage Certificate", "Prenatal Massage Certified"],
    quote: "Tension doesn't hide from me. I've learned all its favorite places.",
  },
  {
    initials: "FB",
    name: "Fatimah Bello",
    title: "Nail & Bridal Specialist",
    years: 5,
    gradient: "from-[#C9A455] to-[#8B6F47]",
    rating: 4.8,
    reviews: 96,
    bio: "Fatimah is the artist behind some of Lagos's most talked-about bridal looks. For her, nails are never just an afterthought — they're part of your complete look. She's obsessed with nail health, not just nail art, which is why her clients' nails grow stronger between visits. From intricate bridal designs to clean minimalist elegance, Fatimah brings precision and passion to every set.",
    specialties: ["Luxury Nail Art", "Bridal Packages", "Nail Health & Restoration", "Paraffin Wax Treatments", "Manicure & Pedicure"],
    certifications: ["CND Shellac Certified", "Creative Nail Design Pro", "Nail Anatomy & Health Certificate"],
    quote: "Your nails are the last thing you put on before you face the world. They should be perfect.",
  },
  {
    initials: "AN",
    name: "Amaka Nwosu",
    title: "Body Wellness Expert",
    years: 4,
    gradient: "from-[#2A5010] to-[#62B626]",
    rating: 4.9,
    reviews: 87,
    bio: "Amaka brings a deeply rooted philosophy to body wellness — blending traditional African body rituals with contemporary spa science. Her body scrubs use locally-sourced botanical ingredients that she's personally passionate about. She's the therapist who makes couples come in nervous and leave giggling, and the one clients request when they want an experience that feels spiritual as much as physical.",
    specialties: ["Body Scrubs & Exfoliation", "Aromatherapy", "Couples Retreat Sessions", "Full Body Wraps", "Relaxation Rituals"],
    certifications: ["Holistic Body Therapy Certificate", "Aromatherapy Practitioner", "Couple's Therapy Specialist"],
    quote: "Wellness isn't a destination. Every session is a step, and I'm here to walk it with you.",
  },
];

export default function TherapistsPage() {
  return (
    <div className="min-h-screen bg-[var(--color-spa-cream)] pt-20">
      {/* Hero */}
      <div className="bg-[var(--color-spa-green-dark)] py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <svg viewBox="0 0 600 400" fill="white" className="w-full h-full">
            <path d="M300 20 Q400 100 360 240 Q450 180 540 240 Q450 300 390 360 Q480 420 420 540 Q330 450 300 360 Q270 450 180 540 Q120 420 210 360 Q150 300 60 240 Q150 180 240 240 Q200 100 300 20Z" opacity="0.3"/>
          </svg>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-white/50 hover:text-white text-xs mb-8 transition-colors"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            <ArrowLeft size={12} />
            Back to home
          </Link>
          <p
            className="text-xs tracking-[0.3em] uppercase text-[var(--color-spa-gold)] mb-3"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            The People Behind Your Experience
          </p>
          <h1
            className="text-5xl sm:text-6xl lg:text-7xl font-light text-white mb-5"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Our <em className="italic text-[var(--color-spa-gold)]">Therapists</em>
          </h1>
          <p
            className="text-white/60 text-base max-w-xl mx-auto leading-relaxed"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Every treatment is personal. Get to know the certified professionals
            who will be taking care of you.
          </p>
        </div>
      </div>

      {/* Stats bar */}
      <div className="bg-white border-b border-[var(--color-spa-stone)]">
        <div className="max-w-4xl mx-auto px-4 py-5 grid grid-cols-3 divide-x divide-[var(--color-spa-stone)]">
          {[
            { icon: Award, label: "Certified professionals", value: "4 therapists" },
            { icon: Star, label: "Average rating", value: "4.9 ★" },
            { icon: Heart, label: "Sessions delivered", value: "500+ happy clients" },
          ].map((s) => {
            const Icon = s.icon;
            return (
              <div key={s.label} className="px-4 sm:px-8 flex flex-col sm:flex-row items-center sm:items-start gap-2">
                <Icon size={16} className="text-[var(--color-spa-green)] shrink-0 mt-0.5" />
                <div>
                  <p
                    className="text-base font-medium text-[var(--color-spa-green-dark)]"
                    style={{ fontFamily: "var(--font-cormorant)" }}
                  >
                    {s.value}
                  </p>
                  <p
                    className="text-[10px] text-[var(--color-spa-muted)] hidden sm:block"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    {s.label}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Therapist profiles */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 space-y-12">
        {therapists.map((t, i) => (
          <div
            key={t.name}
            className={`grid lg:grid-cols-3 gap-8 items-start ${i % 2 === 0 ? "" : "lg:grid-flow-col"}`}
          >
            {/* Avatar + quick facts */}
            <div className="lg:col-span-1">
              <div className={`w-32 h-32 rounded-full bg-gradient-to-br ${t.gradient} flex items-center justify-center mb-5`}>
                <span
                  className="text-4xl font-medium text-white"
                  style={{ fontFamily: "var(--font-cormorant)" }}
                >
                  {t.initials}
                </span>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1.5 mb-1">
                {[...Array(5)].map((_, j) => (
                  <Star
                    key={j}
                    size={12}
                    className={j < Math.floor(t.rating) ? "fill-[var(--color-spa-gold)] text-[var(--color-spa-gold)]" : "text-[var(--color-spa-stone)]"}
                  />
                ))}
                <span className="text-xs text-[var(--color-spa-muted)] ml-1" style={{ fontFamily: "var(--font-inter)" }}>
                  {t.rating} ({t.reviews} reviews)
                </span>
              </div>
              <p
                className="text-xs text-[var(--color-spa-muted)] mb-4"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                {t.years} years of experience
              </p>

              {/* Certifications */}
              <div className="space-y-1.5">
                {t.certifications.map((c) => (
                  <div
                    key={c}
                    className="flex items-center gap-2 text-xs text-[var(--color-spa-charcoal)]"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    <Award size={11} className="text-[var(--color-spa-green)] shrink-0" />
                    {c}
                  </div>
                ))}
              </div>
            </div>

            {/* Bio + specialties */}
            <div className="lg:col-span-2">
              <p
                className="text-xs tracking-[0.2em] uppercase text-[var(--color-spa-orange)] mb-1"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                {t.title}
              </p>
              <h2
                className="text-3xl sm:text-4xl font-light text-[var(--color-spa-green-dark)] mb-4"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                {t.name}
              </h2>

              <blockquote
                className="text-lg font-light italic text-[var(--color-spa-earth)] border-l-2 border-[var(--color-spa-gold)] pl-4 mb-5"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                "{t.quote}"
              </blockquote>

              <p
                className="text-sm text-[var(--color-spa-muted)] leading-relaxed mb-6"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                {t.bio}
              </p>

              {/* Specialties */}
              <div className="mb-6">
                <p
                  className="text-xs font-medium text-[var(--color-spa-charcoal)] mb-2 tracking-wide"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  Specialties
                </p>
                <div className="flex flex-wrap gap-2">
                  {t.specialties.map((s) => (
                    <span
                      key={s}
                      className="text-xs px-3 py-1 rounded-full bg-[var(--color-spa-cream-dark)] text-[var(--color-spa-charcoal)] border border-[var(--color-spa-stone)]"
                      style={{ fontFamily: "var(--font-inter)" }}
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <Link
                href="/book"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--color-spa-green)] text-white text-sm font-medium rounded-full hover:bg-[var(--color-spa-green-dark)] transition-colors"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                Book a session
              </Link>
            </div>

            {i < therapists.length - 1 && (
              <div className="lg:col-span-3 h-px bg-[var(--color-spa-stone)]" />
            )}
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="bg-[var(--color-spa-cream-dark)] py-16 border-t border-[var(--color-spa-stone)]">
        <div className="max-w-xl mx-auto px-4 text-center">
          <h2
            className="text-3xl sm:text-4xl font-light text-[var(--color-spa-green-dark)] mb-4"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Ready to be looked after?
          </h2>
          <p
            className="text-sm text-[var(--color-spa-muted)] mb-8 leading-relaxed"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Book a session and let one of our therapists take care of you —
            in the spa, or from the comfort of your home.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/book"
              className="inline-flex items-center justify-center px-8 py-4 bg-[var(--color-spa-green)] text-white text-sm font-medium rounded-full hover:bg-[var(--color-spa-green-dark)] transition-colors tracking-wide"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Book a Session
            </Link>
            <Link
              href="/"
              className="inline-flex items-center justify-center px-8 py-4 border border-[var(--color-spa-stone-dark)] text-[var(--color-spa-charcoal)] text-sm rounded-full hover:border-[var(--color-spa-green)] hover:text-[var(--color-spa-green)] transition-colors"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
