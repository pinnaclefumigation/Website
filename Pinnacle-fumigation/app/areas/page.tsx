import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import WhatsAppButton from "../components/WhatsAppButton";
import { PROVINCES, REGIONS, ALL_SUBURBS, slugify } from "../lib/areas";
import { SITE_URL } from "../site-config";

export const metadata: Metadata = {
  title: "Areas We Serve",
  description: `Pinnacle Fumigation Services provides fumigation and pest control across ${ALL_SUBURBS.length}+ suburbs in Gauteng, KwaZulu-Natal and the Western Cape. Find your area and get a free quote.`,
  alternates: { canonical: "/areas" },
  openGraph: {
    title: "Areas We Serve | Pinnacle Fumigation Services",
    description: `Fumigation and pest control across ${ALL_SUBURBS.length}+ suburbs in Gauteng, KwaZulu-Natal and the Western Cape.`,
    url: "/areas",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Areas We Serve | Pinnacle Fumigation Services",
    description: `Fumigation and pest control across ${ALL_SUBURBS.length}+ suburbs in Gauteng, KwaZulu-Natal and the Western Cape.`,
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Areas We Serve", item: `${SITE_URL}/areas` },
  ],
};

export default function AreasPage() {
  return (
    <div className="min-h-screen bg-paper text-ink font-body">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <SiteHeader />

      {/* ── HERO ── */}
      <section className="relative bg-brand-deep pt-28 pb-16 overflow-hidden">
        <div className="absolute inset-0 paper-grain opacity-10" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-hazard mb-4">{"// Nationwide Coverage"}</p>
          <h1 className="font-display uppercase text-4xl sm:text-5xl font-semibold text-paper leading-[1.05] mb-6 tracking-tight">
            Areas We Serve
          </h1>
          <p className="text-lg text-paper/70 leading-relaxed max-w-2xl mb-8">
            Pinnacle Fumigation Services treats homes and businesses in{" "}
            {ALL_SUBURBS.length}+ suburbs across Gauteng, KwaZulu-Natal and the
            Western Cape. Find your suburb below, or contact us if you
            don&apos;t see it listed — we service the surrounding areas too.
          </p>
          <nav aria-label="Jump to province" className="flex flex-wrap gap-3">
            {PROVINCES.map((province) => (
              <a
                key={province}
                href={`#${slugify(province)}`}
                className="font-mono text-xs uppercase tracking-wide text-paper border border-paper/30 px-4 py-2.5 hover:border-hazard hover:text-hazard transition-colors"
              >
                {province}
              </a>
            ))}
          </nav>
        </div>
      </section>

      {/* ── PROVINCES ── */}
      {PROVINCES.map((province, provinceIndex) => {
        const provinceRegions = REGIONS.filter((r) => r.province === province);
        const provinceSuburbCount = ALL_SUBURBS.filter((s) => s.province === province).length;
        return (
          <section
            key={province}
            id={slugify(province)}
            className={`py-20 ${provinceIndex % 2 === 0 ? "bg-paper" : "bg-paper-dim"}`}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="mb-14">
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-hazard-deep mb-3">
                  {"// " + provinceSuburbCount + " Suburbs Serviced"}
                </p>
                <h2 className="font-display uppercase text-3xl sm:text-4xl font-semibold text-brand-deep tracking-tight">
                  {province}
                </h2>
              </div>

              <div className="flex flex-col gap-12">
                {provinceRegions.map((region) => (
                  <div key={region.slug} id={region.slug}>
                    <h3 className="font-display uppercase text-brand-deep font-semibold text-xl tracking-tight mb-1">
                      {region.name}
                    </h3>
                    <p className="text-ink/50 text-sm mb-5 max-w-2xl">
                      Covering {region.blurb}.
                    </p>
                    <div className="flex flex-wrap gap-3">
                      {ALL_SUBURBS.filter((s) => s.regionSlug === region.slug).map((suburb) => (
                        <Link
                          key={suburb.slug}
                          href={`/${suburb.service}/${suburb.slug}`}
                          className="font-mono text-xs uppercase tracking-wide text-brand-deep border border-ink/15 bg-paper px-4 py-2.5 hover:border-hazard-deep hover:bg-hazard/10 transition-colors"
                        >
                          {suburb.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      {/* ── CTA ── */}
      <section className="py-20 bg-brand-deep">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display uppercase text-3xl sm:text-4xl font-semibold text-paper tracking-tight mb-6">
            Don&apos;t See Your Suburb?
          </h2>
          <p className="text-paper/70 leading-relaxed mb-8">
            We&apos;re always expanding our coverage. Contact us with your
            location and pest problem — in most cases, we can still schedule
            a technician to assist.
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center justify-center gap-2 bg-hazard text-brand-deep font-semibold text-base px-8 py-4 rounded-sm hover:bg-paper transition-colors uppercase tracking-wide"
          >
            Get a Free Quote
          </Link>
        </div>
      </section>

      <SiteFooter />
      <WhatsAppButton />
    </div>
  );
}
