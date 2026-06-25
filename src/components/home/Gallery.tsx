"use client";

const images = [
  { src: "/images/gallery-1.jpg", alt: "Luxury facial treatment", size: "tall" },
  { src: "/images/gallery-2.jpg", alt: "Massage therapy suite", size: "normal" },
  { src: "/images/gallery-3.jpg", alt: "Body scrub ritual", size: "normal" },
  { src: "/images/gallery-4.jpg", alt: "Private treatment room", size: "wide" },
  { src: "/images/gallery-5.jpg", alt: "Relaxation lounge", size: "normal" },
  { src: "/images/gallery-6.jpg", alt: "Signature products", size: "normal" },
];

export function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-[var(--color-spa-stone)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p
            className="text-xs tracking-[0.3em] uppercase text-[var(--color-spa-earth)] mb-3"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Inside Julie's
          </p>
          <h2
            className="text-4xl sm:text-5xl font-light text-[var(--color-spa-green-dark)]"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            A space built for{" "}
            <em className="italic text-[var(--color-spa-orange)]">you</em>
          </h2>
        </div>

        {/* Masonry-style grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {images.map((img, i) => (
            <div
              key={i}
              className={`relative overflow-hidden rounded-xl bg-[var(--color-spa-stone-dark)] ${
                img.size === "tall" ? "row-span-2" : ""
              } ${img.size === "wide" ? "col-span-2" : ""}`}
              style={{
                aspectRatio:
                  img.size === "tall"
                    ? "3/4"
                    : img.size === "wide"
                    ? "16/7"
                    : "4/3",
              }}
            >
              {/* Placeholder gradient until real images are added */}
              <div
                className="absolute inset-0"
                style={{
                  background: [
                    "linear-gradient(135deg, #2A5010 0%, #62B626 100%)",
                    "linear-gradient(135deg, #E8511A 0%, #C9A455 100%)",
                    "linear-gradient(135deg, #8B6F47 0%, #E8E2D5 100%)",
                    "linear-gradient(135deg, #2A5010 0%, #8B6F47 100%)",
                    "linear-gradient(135deg, #C9A455 0%, #E8511A 100%)",
                    "linear-gradient(135deg, #62B626 0%, #2A5010 100%)",
                  ][i],
                }}
              />
              {/* Real image layer - will show when images are added */}
              <img
                src={img.src}
                alt={img.alt}
                className="absolute inset-0 w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = "none";
                }}
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-[var(--color-spa-green-dark)]/0 hover:bg-[var(--color-spa-green-dark)]/30 transition-all duration-300 flex items-end">
                <p
                  className="text-white text-sm p-4 translate-y-full group-hover:translate-y-0 transition-transform"
                  style={{ fontFamily: "var(--font-cormorant)" }}
                >
                  {img.alt}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Instagram CTA */}
        <div className="mt-10 text-center">
          <a
            href="https://instagram.com/julieluxuryspa"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-[var(--color-spa-muted)] hover:text-[var(--color-spa-charcoal)] transition-colors"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            <svg
              viewBox="0 0 24 24"
              width="16"
              height="16"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="text-[var(--color-spa-orange)]"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
            </svg>
            Follow us @julieluxuryspa for daily inspiration
          </a>
        </div>
      </div>
    </section>
  );
}
