import Link from "next/link";
import { PROVINCES } from "../lib/areas";

export default function SiteFooter() {
  return (
    <footer className="bg-ink py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          <div className="lg:col-span-2">
            <p className="font-display uppercase text-paper font-semibold text-xl tracking-tight mb-4">
              Pinnacle Fumigation
            </p>
            <p className="text-paper/50 text-sm leading-relaxed max-w-sm">
              Professional fumigation and pest control for homes and
              businesses across Gauteng, KwaZulu-Natal and the Western Cape.
              Certified, reviewed, and committed to 100% customer
              satisfaction.
            </p>
          </div>

          <div>
            <h4 className="font-mono text-paper text-xs mb-4 uppercase tracking-[0.15em]">Services</h4>
            <ul className="flex flex-col gap-2">
              {[
                "Residential Fumigation",
                "Commercial Fumigation",
                "Office Fumigation",
                "Hotel & Lodge",
                "Termite Treatment",
                "Bed Bug Treatment",
              ].map((s) => (
                <li key={s}>
                  <Link href="/#services" className="text-paper/50 hover:text-hazard text-sm transition-colors">
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-paper text-xs mb-4 uppercase tracking-[0.15em]">Company</h4>
            <ul className="flex flex-col gap-2">
              {[
                { label: "Areas We Serve", href: "/areas" },
                { label: "Blog", href: "/blog" },
                { label: "FAQ", href: "/#faq" },
                { label: "Reviews", href: "/#reviews" },
                { label: "Contact Us", href: "/#contact" },
                { label: "Privacy Policy", href: "/privacy-policy" },
              ].map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="text-paper/50 hover:text-hazard text-sm transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-paper/10 pt-8 mb-8">
          <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-paper/40 mb-3">
            Areas We Serve
          </p>
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
            {PROVINCES.map((province) => (
              <Link
                key={province}
                href={`/areas#${province.toLowerCase().replace(/\s+/g, "-")}`}
                className="text-paper/50 hover:text-hazard text-xs transition-colors"
              >
                {province}
              </Link>
            ))}
            <Link
              href="/areas"
              className="text-hazard text-xs font-semibold hover:text-paper transition-colors"
            >
              View all serviced suburbs →
            </Link>
          </div>
        </div>

        <div className="border-t border-paper/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-paper/30 text-sm">
            © {new Date().getFullYear()} Pinnacle Fumigation Services. All rights reserved.
          </p>
          <p className="font-mono text-paper/30 text-xs uppercase tracking-wide">
            Professional Pest Control Solutions
          </p>
        </div>
      </div>
    </footer>
  );
}
