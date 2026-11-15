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

          <Link
            href="/#contact"
            className="hidden lg:inline-flex items-center gap-2 bg-hazard text-brand-deep font-semibold text-sm px-6 py-3 rounded-sm hover:bg-paper transition-colors uppercase tracking-wide"
          >
            Get a Free Quote
          </Link>

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
          <Link
            href="/#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-4 block text-center bg-hazard text-brand-deep font-semibold py-3 rounded-sm uppercase tracking-wide"
          >
            Get a Free Quote
          </Link>
        </div>
      )}
    </header>
  );
}
