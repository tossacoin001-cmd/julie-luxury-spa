import Link from "next/link";

export function FinalCTA() {
  const waNumber = "2348000000000";
  const waMessage = encodeURIComponent(
    "Hi Julie! I'd like to book a spa session. Can you help me?"
  );

  return (
    <section className="py-28 bg-[var(--color-spa-cream-dark)] relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-[var(--color-spa-green)]/8 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-[var(--color-spa-orange)]/8 blur-3xl pointer-events-none" />

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <p
          className="text-xs tracking-[0.3em] uppercase text-[var(--color-spa-gold)] mb-4"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          Ready When You Are
        </p>
        <h2
          className="text-4xl sm:text-5xl lg:text-6xl font-light text-[var(--color-spa-green-dark)] mb-6 leading-tight"
          style={{ fontFamily: "var(--font-cormorant)" }}
        >
          Your body has been{" "}
          <em className="italic text-[var(--color-spa-orange)]">waiting</em>
          <br />
          for this.
        </h2>
        <p
          className="text-sm text-[var(--color-spa-muted)] mb-10 max-w-md mx-auto leading-relaxed"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          Same-week appointments available. Book in under 60 seconds. No phone
          calls needed — just choose your treatment and we'll handle the rest.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link
            href="/book"
            className="inline-flex items-center justify-center px-8 py-4 bg-[var(--color-spa-green)] hover:bg-[var(--color-spa-green-dark)] text-white text-sm font-medium rounded-full transition-all duration-200 hover:shadow-lg tracking-wide"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Book a Session Now
          </Link>
          <a
            href={`https://wa.me/${waNumber}?text=${waMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-[var(--color-spa-stone-dark)] text-[var(--color-spa-charcoal)] text-sm font-medium rounded-full hover:border-[#25D366] hover:text-[#25D366] transition-colors tracking-wide"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-[#25D366]">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Chat on WhatsApp
          </a>
        </div>

        {/* Trust micro-copy */}
        <div
          className="flex flex-wrap items-center justify-center gap-6 text-xs text-[var(--color-spa-muted)]"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          <span className="flex items-center gap-1.5">
            <span className="w-4 h-4 rounded-full bg-[var(--color-spa-green)]/20 flex items-center justify-center text-[var(--color-spa-green)] text-[10px]">✓</span>
            Free rescheduling 24h+ ahead
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-4 h-4 rounded-full bg-[var(--color-spa-green)]/20 flex items-center justify-center text-[var(--color-spa-green)] text-[10px]">✓</span>
            Secure 30% deposit
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-4 h-4 rounded-full bg-[var(--color-spa-green)]/20 flex items-center justify-center text-[var(--color-spa-green)] text-[10px]">✓</span>
            Confirmation via WhatsApp
          </span>
        </div>
      </div>
    </section>
  );
}
