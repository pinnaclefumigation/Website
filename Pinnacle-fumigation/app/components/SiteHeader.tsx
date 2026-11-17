"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Areas We Serve", href: "/areas" },
  { label: "Blog", href: "/blog" },
  { label: "FAQ", href: "/#faq" },
  { label: "Reviews", href: "/#reviews" },
  { label: "Contact", href: "/#contact" },
];

export default function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-brand shadow-lg">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="flex items-center justify-between h-28">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/PinnacleFumigationLogo.jpeg"
              alt="Pinnacle Fumigation Services"
              width={220}
              height={68}
              className="object-contain rounded-sm"
              style={{ height: "auto" }}
              priority
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-mono text-xs uppercase tracking-[0.15em] text-paper/75 hover:text-hazard transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+27677595706"
              className="inline-flex items-center gap-2 bg-blue-600 text-white font-semibold text-sm px-6 py-3 rounded-sm hover:bg-blue-700 transition-colors uppercase tracking-wide"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h2.28a1 1 0 01.97.76l.92 3.68a1 1 0 01-.27.95l-1.6 1.6a12.04 12.04 0 005.66 5.66l1.6-1.6a1 1 0 01.95-.27l3.68.92a1 1 0 01.76.97V19a2 2 0 01-2 2h-1C8.82 21 3 15.18 3 8V6z" />
              </svg>
              Call 067 759 5706
            </a>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 bg-hazard text-brand-deep font-semibold text-sm px-6 py-3 rounded-sm hover:bg-paper transition-colors uppercase tracking-wide"
            >
              Get a Free Quote
            </Link>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-paper p-2"
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden bg-brand-deep px-4 pb-6 pt-2">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block py-3 font-mono text-xs uppercase tracking-[0.15em] text-paper/75 hover:text-hazard border-b border-paper/10 last:border-0"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="tel:+27677595706"
            className="mt-4 block text-center bg-blue-600 text-white font-semibold py-3 rounded-sm uppercase tracking-wide"
          >
            Call 067 759 5706
          </a>
          <Link
            href="/#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-3 block text-center bg-hazard text-brand-deep font-semibold py-3 rounded-sm uppercase tracking-wide"
          >
            Get a Free Quote
          </Link>
        </div>
      )}
    </header>
  );
}
