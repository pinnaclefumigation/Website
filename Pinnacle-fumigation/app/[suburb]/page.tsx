import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import WhatsAppButton from "../components/WhatsAppButton";
import Faq from "../components/Faq";
import QuoteForm from "../components/QuoteForm";
import {
  ALL_SUBURBS,
  PROVINCE_NOTES,
  getSuburbBySlug,
  getNearbySuburbs,
  type Suburb,
} from "../lib/areas";
import { FAQS, REVIEWS, CORE_SERVICES, PEST_LIBRARY, PEST_ADDENDUM, HOW_IT_WORKS } from "../content";
import { SITE_URL } from "../site-config";

export async function generateStaticParams() {
  return ALL_SUBURBS.map((s) => ({ suburb: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ suburb: string }>;
}): Promise<Metadata> {
  const { suburb: slug } = await params;
  const suburb = getSuburbBySlug(slug);
  if (!suburb) return {};

  const title = `Fumigation & Pest Control in ${suburb.name}`;
  const description = `Professional fumigation and pest control in ${suburb.name}, ${suburb.province}. Cockroaches, termites, bed bugs, ants and rodents treated by certified technicians — free quotes, 24/7 support.`;

  return {
    title,
    description,
    alternates: { canonical: `/${suburb.slug}` },
    openGraph: {
      title: `${title} | Pinnacle Fumigation Services`,
      description,
      url: `/${suburb.slug}`,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | Pinnacle Fumigation Services`,
      description,
    },
  };
}

function buildIntro(suburb: Suburb): string {
  const climate = PROVINCE_NOTES[suburb.province].climate;
  const siblingCount = ALL_SUBURBS.filter((s) => s.regionSlug === suburb.regionSlug).length;
  const templates = [
    `Pinnacle Fumigation Services provides professional fumigation and pest control in ${suburb.name}, part of our ${suburb.region} coverage area in ${suburb.province}. ${climate}`,
    `Looking for reliable pest control in ${suburb.name}? Pinnacle Fumigation Services treats homes and businesses throughout ${suburb.region} — ${suburb.blurb} — with certified technicians and guaranteed results. ${climate}`,
    `${suburb.name} is one of ${siblingCount} ${suburb.region} suburbs we service in ${suburb.province}, ${suburb.blurb}. ${climate}`,
  ];
  return templates[suburb.name.length % templates.length];
}

export default async function SuburbPage({
  params,
}: {
  params: Promise<{ suburb: string }>;
}) {
  const { suburb: slug } = await params;
  const suburb = getSuburbBySlug(slug);
  if (!suburb) notFound();

  const nearby = getNearbySuburbs(suburb, 6);
  const provinceNote = PROVINCE_NOTES[suburb.province];
  const intro = buildIntro(suburb);
  const pageUrl = `${SITE_URL}/${suburb.slug}`;

  const suburbFaqs = [
    {
      question: `Do you provide fumigation and pest control in ${suburb.name}?`,
      answer: `Yes — Pinnacle Fumigation Services provides full fumigation and pest control coverage in ${suburb.name} and throughout ${suburb.region}, including ${nearby
        .slice(0, 4)
        .map((n) => n.name)
        .join(", ")}. Contact us for a free quote and we'll schedule a technician.`,
    },
    ...FAQS,
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": `${SITE_URL}/#business`,
        name: "Pinnacle Fumigation Services",
        image: `${SITE_URL}/PinnacleFumigationLogo.jpeg`,
        url: pageUrl,
        telephone: "+27677595706",
        email: "pinnaclefumigation@gmail.com",
        priceRange: "$$",
        areaServed: {
          "@type": "City",
          name: suburb.name,
          containedInPlace: {
            "@type": "State",
            name: suburb.province,
            containedInPlace: { "@type": "Country", name: "South Africa" },
          },
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "5",
          reviewCount: String(REVIEWS.length),
        },
      },
      {
        "@type": "Service",
        serviceType: "Fumigation and Pest Control",
        provider: { "@id": `${SITE_URL}/#business` },
        areaServed: { "@type": "City", name: suburb.name },
        url: pageUrl,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: "Areas We Serve", item: `${SITE_URL}/areas` },
          { "@type": "ListItem", position: 3, name: suburb.region, item: `${SITE_URL}/areas#${suburb.regionSlug}` },
          { "@type": "ListItem", position: 4, name: suburb.name, item: pageUrl },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: suburbFaqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer },
        })),
      },
    ],
  };

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
        <div className="absolute inset-0 bg-gradient-to-br from-brand/40 via-transparent to-transparent" />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex flex-wrap items-center gap-2 font-mono text-[10px] uppercase tracking-wide text-paper/50">
              <li>
                <Link href="/" className="hover:text-hazard transition-colors">Home</Link>
              </li>
              <li>/</li>
              <li>
                <Link href="/areas" className="hover:text-hazard transition-colors">Areas We Serve</Link>
              </li>
              <li>/</li>
              <li>
                <Link href={`/areas#${suburb.regionSlug}`} className="hover:text-hazard transition-colors">
                  {suburb.region}
                </Link>
              </li>
              <li>/</li>
              <li className="text-hazard">{suburb.name}</li>
            </ol>
          </nav>

          <div className="inline-flex items-center gap-2 border border-hazard/40 text-hazard font-mono text-xs uppercase tracking-[0.2em] px-4 py-2 mb-6">
            <span className="w-2 h-2 bg-hazard rounded-full animate-pulse" />
            {suburb.province} · {suburb.region}
          </div>
          <h1 className="font-display uppercase text-4xl sm:text-5xl font-semibold text-paper leading-[1.05] mb-6 tracking-tight">
            Fumigation &amp; Pest Control
            <br />
            <span className="text-paper/60">in {suburb.name}</span>
          </h1>
          <p className="text-lg text-paper/70 leading-relaxed mb-8 max-w-2xl">{intro}</p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="#quote"
              className="inline-flex items-center justify-center gap-2 bg-hazard text-brand-deep font-semibold text-base px-8 py-4 rounded-sm hover:bg-paper transition-colors uppercase tracking-wide"
            >
              Get a Free Quote in {suburb.name}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <a
              href="https://wa.me/27677595706"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-paper/30 text-paper font-semibold text-base px-8 py-4 rounded-sm hover:border-hazard hover:text-hazard transition-colors uppercase tracking-wide"
            >
              WhatsApp Us
            </a>
          </div>

          <div className="grid grid-cols-3 mt-14 pt-8 border-t border-paper/10 divide-x divide-paper/10 max-w-xl">
            {[
              { value: "500+", label: "Properties Treated" },
              { value: "100%", label: "Satisfaction Goal" },
              { value: "24/7", label: "Support Available" },
            ].map((stat) => (
              <div key={stat.label} className="px-4 first:pl-0">
                <p className="font-mono text-2xl sm:text-3xl font-semibold text-hazard">{stat.value}</p>
                <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-paper/50 mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LOCAL PEST PRESSURE ── */}
      <section className="py-20 bg-paper">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-hazard-deep mb-3">{"// Local Conditions"}</p>
          <h2 className="font-display uppercase text-3xl sm:text-4xl font-semibold text-brand-deep tracking-tight mb-6">
            Why {suburb.name} Needs Professional Pest Control
          </h2>
          <p className="text-ink/60 leading-relaxed mb-8 max-w-3xl">{provinceNote.climate}</p>
          <div className="flex flex-wrap gap-3">
            <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-ink/40 self-center mr-1">
              Most reported in {suburb.region} —
            </span>
            {provinceNote.pestFocus.map((pest) => (
              <span
                key={pest}
                className="font-mono text-[10px] uppercase tracking-wide text-brand-deep border border-ink/15 px-3 py-1.5"
              >
                {pest}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="py-20 bg-paper-dim">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-hazard-deep mb-3">{"// Our Services"}</p>
            <h2 className="font-display uppercase text-3xl sm:text-4xl font-semibold text-brand-deep tracking-tight">
              Pest Control Services in {suburb.name}
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-ink/10 border border-ink/10">
            {CORE_SERVICES.map((service) => (
              <div key={service.title} className="bg-paper p-6">
                <h3 className="font-display uppercase text-brand-deep font-semibold text-base mb-2 tracking-tight">
                  {service.title}
                </h3>
                <p className="text-ink/60 text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PESTS WE TREAT ── */}
      <section className="py-20 bg-brand-deep">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-hazard mb-3">{"// Field Guide"}</p>
            <h2 className="font-display uppercase text-3xl sm:text-4xl font-semibold text-paper tracking-tight">
              Pests We Treat in {suburb.name}
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
            {PEST_LIBRARY.map((species) => {
              const card = (
                <div className="bg-paper group h-full">
                  <div className="relative aspect-square overflow-hidden">
                    <Image
                      src={species.image}
                      alt={`${species.name} — pest identification photo`}
                      fill
                      sizes="(max-width: 640px) 45vw, (max-width: 1024px) 28vw, 22vw"
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute top-2 left-2 bg-hazard text-brand-deep font-mono text-[9px] font-semibold uppercase tracking-wide px-2 py-1">
                      {species.tag}
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-display uppercase text-brand-deep font-semibold text-base tracking-tight">
                      {species.name}
                    </h3>
                    <p className="font-mono text-[10px] uppercase tracking-wide text-rust mb-2">{species.latin}</p>
                    <p className="text-ink/60 text-xs leading-relaxed">{species.note}</p>
                  </div>
                </div>
              );
              return species.blogSlug ? (
                <Link key={species.name} href={`/blog/${species.blogSlug}`}>
                  {card}
                </Link>
              ) : (
                <div key={species.name}>{card}</div>
              );
            })}
          </div>

          <div className="mt-8 border-t border-paper/10 pt-8 flex flex-wrap items-center gap-3">
            <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-paper/40 mr-2">Also treated —</p>
            {PEST_ADDENDUM.map((pest) =>
              pest.blogSlug ? (
                <Link
                  key={pest.name}
                  href={`/blog/${pest.blogSlug}`}
                  className="font-mono text-[10px] uppercase tracking-wide text-paper/70 border border-paper/20 px-3 py-1.5 hover:border-hazard hover:text-hazard transition-colors"
                >
                  {pest.name}
                </Link>
              ) : (
                <span
                  key={pest.name}
                  className="font-mono text-[10px] uppercase tracking-wide text-paper/70 border border-paper/20 px-3 py-1.5"
                >
                  {pest.name}
                </span>
              )
            )}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="py-20 bg-paper">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-hazard-deep mb-3">{"// Process"}</p>
            <h2 className="font-display uppercase text-3xl sm:text-4xl font-semibold text-brand-deep tracking-tight">
              How It Works in {suburb.name}
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {HOW_IT_WORKS.map((step) => (
              <div key={step.step}>
                <p className="font-mono text-3xl font-semibold text-hazard-deep mb-2">{step.step}</p>
                <h3 className="font-display uppercase text-brand-deep font-semibold text-base mb-2 tracking-tight">
                  {step.title}
                </h3>
                <p className="text-ink/60 text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-20 bg-paper-dim">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-hazard-deep mb-3">{"// FAQ"}</p>
            <h2 className="font-display uppercase text-3xl sm:text-4xl font-semibold text-brand-deep tracking-tight">
              Frequently Asked Questions — {suburb.name}
            </h2>
          </div>
          <Faq items={suburbFaqs} />
        </div>
      </section>

      {/* ── REVIEWS ── */}
      <section className="py-20 bg-paper">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-hazard-deep mb-3">{"// Testimonials"}</p>
            <h2 className="font-display uppercase text-3xl sm:text-4xl font-semibold text-brand-deep tracking-tight">
              What Our Clients Say
            </h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {REVIEWS.map((review) => (
              <div key={review.author} className="bg-brand-deep p-7 flex flex-col gap-4">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-hazard fill-hazard" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-paper font-semibold text-base">{`"${review.quote}"`}</p>
                <p className="text-paper/60 text-sm leading-relaxed flex-1">{review.body}</p>
                <p className="text-paper/40 text-xs font-mono uppercase tracking-wide">— {review.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── NEARBY AREAS ── */}
      <section className="py-20 bg-paper-dim">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-hazard-deep mb-3">{"// Nearby"}</p>
          <h2 className="font-display uppercase text-3xl sm:text-4xl font-semibold text-brand-deep tracking-tight mb-8">
            We Also Serve Nearby
          </h2>
          <div className="flex flex-wrap gap-3">
            {nearby.map((n) => (
              <Link
                key={n.slug}
                href={`/${n.slug}`}
                className="font-mono text-xs uppercase tracking-wide text-brand-deep border border-ink/15 bg-paper px-4 py-2.5 hover:border-hazard-deep hover:bg-hazard/10 transition-colors"
              >
                {n.name}
              </Link>
            ))}
            <Link
              href={`/areas#${suburb.regionSlug}`}
              className="font-mono text-xs uppercase tracking-wide text-hazard-deep px-4 py-2.5 underline underline-offset-4"
            >
              View all of {suburb.region} →
            </Link>
          </div>
        </div>
      </section>

      {/* ── CONTACT / QUOTE ── */}
      <section id="quote" className="py-20 bg-brand-deep">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-hazard mb-3">{"// Get In Touch"}</p>
              <h2 className="font-display uppercase text-3xl sm:text-4xl font-semibold text-paper mb-6 tracking-tight">
                Get a Free Quote in {suburb.name}
              </h2>
              <p className="text-paper/70 leading-relaxed mb-8">
                Contact us today and one of our specialists will assess your
                pest problem in {suburb.name}, recommend the right treatment,
                and provide a comprehensive quote with no obligation.
              </p>

              <div className="flex flex-col gap-4">
                {[
                  {
                    icon: (
                      <svg className="w-5 h-5 text-brand-deep" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16.72 12.93l-2.06-.29a1 1 0 00-.91.27l-1.13 1.13a15.05 15.05 0 01-6.6-6.6l1.13-1.13a1 1 0 00.27-.91l-.29-2.06A1 1 0 006.07 3H4.5A1.5 1.5 0 003 4.5C3 15.03 8.97 21 19.5 21a1.5 1.5 0 001.5-1.5v-1.57a1 1 0 00-.93-.99z" />
                      </svg>
                    ),
                    label: "WhatsApp or Call",
                    value: "067 759 5706",
                  },
                  {
                    icon: (
                      <svg className="w-5 h-5 text-brand-deep" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    ),
                    label: "Working Hours",
                    value: "24/7",
                  },
                  {
                    icon: (
                      <svg className="w-5 h-5 text-brand-deep" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    ),
                    label: "Email",
                    value: "pinnaclefumigation@gmail.com",
                  },
                ].map((contact) => (
                  <div key={contact.label} className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-hazard flex items-center justify-center shrink-0">{contact.icon}</div>
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-wide text-paper/50">{contact.label}</p>
                      <p className="text-paper font-semibold">{contact.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-paper p-8">
              <QuoteForm area={`${suburb.name}, ${suburb.province}`} />
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
      <WhatsAppButton />
    </div>
  );
}
