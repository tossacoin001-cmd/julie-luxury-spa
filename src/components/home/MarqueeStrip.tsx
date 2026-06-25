const items = [
  "Luxury Spa",
  "Home Service",
  "Walk-In Sessions",
  "Lagos",
  "Expert Therapists",
  "Bridal Packages",
  "Deep Tissue",
  "Glowing Skin",
  "Pure Relaxation",
  "Victoria Island",
];

export function MarqueeStrip() {
  const doubled = [...items, ...items];

  return (
    <div className="bg-[var(--color-spa-green-dark)] py-3.5 overflow-hidden border-y border-[var(--color-spa-green-dark)]">
      <div className="flex animate-marquee whitespace-nowrap">
        {doubled.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-4 mx-4" style={{ fontFamily: "var(--font-inter)" }}>
            <span className="text-xs tracking-[0.2em] uppercase text-white/80 font-light">
              {item}
            </span>
            <span className="w-1 h-1 rounded-full bg-[var(--color-spa-gold)] opacity-60 shrink-0" />
          </span>
        ))}
      </div>
    </div>
  );
}
