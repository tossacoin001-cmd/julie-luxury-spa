"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const links = [
  { label: "Services", href: "/services" },
  { label: "Therapists", href: "/therapists" },
  { label: "Gallery", href: "/#gallery" },
  { label: "Packages", href: "/#packages" },
  { label: "About", href: "/#about" },
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
        "fixed top-0 inset-x-0 z-50 transition-all duration-400",
        scrolled
          ? "bg-[var(--color-spa-cream)]/95 backdrop-blur-md shadow-sm border-b border-[var(--color-spa-stone)]"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0 group">
            <div className="relative w-10 h-10 lg:w-12 lg:h-12">
              <Image
                src="/logo.svg"
                alt="Julie Luxury Spa"
                width={48}
                height={48}
                className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="leading-tight">
              <p
                className={cn(
                  "font-semibold text-lg lg:text-xl tracking-wide transition-colors",
                  scrolled ? "text-[var(--color-spa-green-dark)]" : "text-white"
                )}
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                JULIE
              </p>
              <p
                className={cn(
                  "text-[10px] lg:text-xs tracking-[0.2em] uppercase -mt-1 transition-colors",
                  scrolled ? "text-[var(--color-spa-muted)]" : "text-white/60"
                )}
                style={{ fontFamily: "var(--font-inter)" }}
              >
                Luxury Spa
              </p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-7">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm transition-colors tracking-wide relative group",
                  scrolled
                    ? "text-[var(--color-spa-muted)] hover:text-[var(--color-spa-green-dark)]"
                    : "text-white/80 hover:text-white"
                )}
                style={{ fontFamily: "var(--font-inter)" }}
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-[var(--color-spa-green)] group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Link
                href="/book"
                className={cn(
                  "px-6 py-2.5 text-sm font-medium rounded-full transition-all duration-200 tracking-wide",
                  scrolled
                    ? "bg-[var(--color-spa-green)] text-white hover:bg-[var(--color-spa-green-dark)]"
                    : "bg-white text-[var(--color-spa-green-dark)] hover:bg-[var(--color-spa-gold-light)]"
                )}
                style={{ fontFamily: "var(--font-inter)" }}
              >
                Book a Session
              </Link>
            </motion.div>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className={cn(
              "lg:hidden p-2 transition-colors",
              scrolled ? "text-[var(--color-spa-charcoal)]" : "text-white"
            )}
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-[var(--color-spa-cream)] border-t border-[var(--color-spa-stone)] overflow-hidden"
          >
            <div className="px-4 pb-6 pt-4">
              <nav className="flex flex-col gap-1 mb-5">
                {links.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="block text-base text-[var(--color-spa-charcoal)] py-3 border-b border-[var(--color-spa-stone)] hover:text-[var(--color-spa-green)] transition-colors"
                      style={{ fontFamily: "var(--font-inter)" }}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>
              <Link
                href="/book"
                onClick={() => setOpen(false)}
                className="block w-full text-center py-3.5 bg-[var(--color-spa-green)] text-white rounded-full font-medium hover:bg-[var(--color-spa-green-dark)] transition-colors"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                Book a Session
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
