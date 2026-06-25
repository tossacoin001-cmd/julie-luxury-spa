"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { label: "Services", href: "/#services" },
  { label: "Gallery", href: "/#gallery" },
  { label: "Packages", href: "/#packages" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-[var(--color-spa-cream)]/95 backdrop-blur-md shadow-sm border-b border-[var(--color-spa-stone)]"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <Image
              src="/logo.png"
              alt="Julie Luxury Spa"
              width={48}
              height={48}
              className="w-10 h-10 lg:w-12 lg:h-12 object-contain"
            />
            <div className="leading-tight">
              <p
                className="font-[var(--font-cormorant)] font-700 text-lg lg:text-xl text-[var(--color-spa-charcoal)] tracking-wide"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                JULIE
              </p>
              <p
                className="text-[10px] lg:text-xs tracking-[0.2em] text-[var(--color-spa-muted)] uppercase -mt-1"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                Luxury Spa
              </p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-[var(--color-spa-muted)] hover:text-[var(--color-spa-green-dark)] transition-colors tracking-wide"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="/book"
              className="px-6 py-2.5 bg-[var(--color-spa-green)] text-white text-sm font-medium rounded-full hover:bg-[var(--color-spa-green-dark)] transition-colors tracking-wide"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Book a Session
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 text-[var(--color-spa-charcoal)]"
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="lg:hidden bg-[var(--color-spa-cream)] border-t border-[var(--color-spa-stone)] px-4 pb-6 pt-4">
          <nav className="flex flex-col gap-4 mb-6">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-base text-[var(--color-spa-charcoal)] py-1 border-b border-[var(--color-spa-stone)]"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <Link
            href="/book"
            onClick={() => setOpen(false)}
            className="block w-full text-center py-3 bg-[var(--color-spa-green)] text-white rounded-full font-medium"
          >
            Book a Session
          </Link>
        </div>
      )}
    </header>
  );
}
