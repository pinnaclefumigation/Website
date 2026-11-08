"use client";

import Image from "next/image";
import { useState, type FormEvent } from "react";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Species", href: "#species" },
  { label: "About", href: "#about" },
  { label: "FAQ", href: "#faq" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

const PESTS = [
  "Cockroaches",
  "Ants",
  "Flies",
  "Termites",
  "Silverfish",
  "Fleas",
  "Ticks",
  "Bed Bugs",
  "Spiders",
  "Carpet & Furniture Beetles",
  "Earwigs",
  "Rodents",
  "Stored Product Pests",
];

const SPECIES = [
  {
    tag: "FIG. 01",
    name: "Cockroaches",
    latin: "Order Blattodea",
    note: "Nocturnal and resilient — spreads bacteria across kitchens and drains.",
    image: "/cockroaches.jpeg",
  },
  {
    tag: "FIG. 02",
    name: "Ants",
    latin: "Family Formicidae",
    note: "Colonises through the smallest gaps in search of food and moisture.",
    image: "/ants.jpeg",
  },
  {
    tag: "FIG. 03",
    name: "Termites",
    latin: "Infraorder Isoptera",
    note: "Silently damages timber structures from the inside out.",
    image: "/termites.jpeg",
  },
  {
    tag: "FIG. 04",
    name: "Bed Bugs",
    latin: "Cimex lectularius",
    note: "Hides in seams and crevices, active while you sleep.",
    image: "/bedbug.jpeg",
  },
  {
    tag: "FIG. 05",
    name: "Silverfish",
    latin: "Lepisma saccharinum",
    note: "Feeds on paper, glue and fabric in damp, dark spaces.",
    image: "/silverfish.jpeg",
  },
  {
    tag: "FIG. 06",
    name: "Ticks",
    latin: "Order Ixodida",
    note: "Latches onto skin and can carry disease indoors via pets.",
    image: "/ticks.jpeg",
  },
  {
    tag: "FIG. 07",
    name: "Rodents",
    latin: "Rattus spp.",
    note: "Gnaws through wiring and contaminates stored food.",
    image: "/rats.jpeg",
  },
  {
    tag: "FIG. 08",
    name: "Spiders",
    latin: "Order Araneae",
    note: "Builds webs in undisturbed corners, ceilings and voids.",
    image: "/spider.jpeg",
  },
];

const SPECIES_ADDENDUM = [
  "Flies",
  "Fleas",
  "Carpet & Furniture Beetles",
  "Earwigs",
  "Stored Product Pests",
];

const GALLERY_CLIPS = [
  {
    src: "/fogging-fumigation-2.mp4",
    title: "Spray Treatment",
    note: "Targeted surface application in an occupied space.",
  },
  {
    src: "/fogging-fumigation-5.mp4",
    title: "Fogging Application",
    note: "ULV fogging reaching ceilings, corners and voids.",
  },
  {
    src: "/fogging-fumigation-7.mp4",
    title: "Full-Room Coverage",
    note: "Complete room treatment from floor to ceiling.",
  },
];

const SERVICES = [
  {
    title: "Residential Fumigation",
    description:
      "Specialists customise their technique for residential properties to address each unique environment — from kitchens and bathrooms to crawl spaces, attics, and garages.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9.75L12 3l9 6.75V21a1 1 0 01-1 1H4a1 1 0 01-1-1V9.75z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 22V12h6v10" /></svg>
    ),
  },
  {
    title: "Commercial & Industrial",
    description:
      "Protect your business reputation and promote a pest-free environment, protecting revenue and supporting growth across offices, warehouses, and industrial facilities.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 21h18M3 7h18M3 14h18M6 3v4M12 3v4M18 3v4" /></svg>
    ),
  },
  {
    title: "Office Fumigation",
    description:
      "Office fumigation promotes a clean environment, adding to employee well-being and preventing damage to property and equipment.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7H4a2 2 0 00-2 2v10a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 3H8a2 2 0 00-2 2v2h12V5a2 2 0 00-2-2z" /></svg>
    ),
  },
  {
    title: "Hotels, Lodges & B&Bs",
    description:
      "Guests expect clean accommodations, and the presence of pests can lead to negative experiences and reviews. We keep your reputation intact.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M3 6h18M5 6V4a1 1 0 011-1h12a1 1 0 011 1v2M3 10v11h18V10" /></svg>
    ),
  },
  {
    title: "Churches & Schools",
    description:
      "Promote a healthy environment for large-scale pest control projects such as churches, schools, and community centres, reducing the risk of disease.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 2v4M8 6h8M6 10h12l2 11H4L6 10zM10 21v-6h4v6" /></svg>
    ),
  },
  {
    title: "Restaurants & Kitchens",
    description:
      "Food sources attract pests rapidly. Our targeted treatments protect your kitchen, storage areas, and dining spaces to keep your establishment compliant and clean.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6m0 0v6m0-6h6m-6 0H6" /><circle cx="12" cy="12" r="10" strokeWidth={1.5} stroke="currentColor" fill="none" /></svg>
    ),
  },
];

const BENEFITS = [
  {
    title: "Comprehensive Pest Treatment",
    description:
      "Fumigation targets a wide range of pests across the treated space to address serious infestations thoroughly.",
  },
  {
    title: "Reaches Hidden Areas",
    description:
      "Treatment penetrates cracks, crevices, and enclosed spaces where pests are difficult to reach with standard methods.",
  },
  {
    title: "Suitable for Severe Infestations",
    description:
      "Used for more advanced infestations where standard methods may not be sufficient to fully eliminate the problem.",
  },
  {
    title: "Effective Across Structures",
    description:
      "Treatment reaches into structures, stored goods, and affected areas where pests may be present inside materials.",
  },
  {
    title: "Minimises Pesticide Use",
    description:
      "Uses controlled treatment approaches to reduce unnecessary pesticide use where possible, keeping your environment safer.",
  },
  {
    title: "Support from Booking to Completion",
    description:
      "Ongoing support throughout the entire service process for a smooth, reliable, and stress-free experience.",
  },
];

const HOW_IT_WORKS = [
  {
    step: "01",
    title: "Get a Quote",
    description:
      "Contact us to discuss your pest problem. We will assess the severity and affected areas to recommend the right treatment.",
  },
  {
    step: "02",
    title: "Targeted Treatment",
    description:
      "Our professionals select the most effective treatment methods after a thorough inspection of the severity and affected areas.",
  },
  {
    step: "03",
    title: "Full Property Coverage",
    description:
      "Treatment areas can include inside rooms, garages, ceilings, crawl spaces, and more — wherever pests may be hiding.",
  },
  {
    step: "04",
    title: "Ongoing Support",
    description:
      "We provide real-time customer support with a fast response. Reach out and get a quick answer at any stage.",
  },
];

const FAQS = [
  {
    question: "When is fumigation usually used?",
    answer:
      "Fumigation is used for infestations where this treatment approach is considered appropriate after a professional assessment. It is typically recommended for severe or widespread infestations.",
  },
  {
    question: "What types of infestations is fumigation used for?",
    answer:
      "Fumigation is effective against cockroaches, termites, bed bugs, ants, flies, fleas, ticks, silverfish, rodents, and stored product pests, among others.",
  },
  {
    question: "What is included in fumigation services?",
    answer:
      "Our fumigation services include a pre-treatment inspection, targeted treatment of all affected areas (inside rooms, ceilings, garages, crawl spaces), and a follow-up assessment to ensure effectiveness.",
  },
  {
    question: "What happens after I book a fumigation service?",
    answer:
      "After booking, a professional will contact you to confirm the appointment and provide preparation instructions. Treatment is carried out on the agreed date, with a post-treatment report provided.",
  },
  {
    question: "Is professional fumigation equipment used?",
    answer:
      "Yes. We use high-end professional products and equipment to ensure the most effective and safe fumigation results for your property.",
  },
  {
    question: "How do you ensure service quality?",
    answer:
      "We actively collect customer reviews after every service and hold our professionals accountable to strict quality standards. If you are not satisfied, we offer a callback at no additional cost.",
  },
];

const REVIEWS = [
  {
    quote: "Fast, Efficient and Friendly!",
    body: "A fabulous job! They first ran through the process and then got to work quickly. Great service overall — would definitely recommend!",
    author: "Belina M.",
  },
  {
    quote: "Excellent Service!",
    body: "Amazing service! Quick, easy and results exceed expectations. Staff are super friendly — I would definitely book again.",
    author: "Thato M.",
  },
  {
    quote: "Knowledgeable, Professional Service",
    body: "Knowledgeable staff who pay attention to detailed requests. Quick, professional and efficient service. Highly recommended!",
    author: "Marcel G.",
  },
];

const HERO_SPECIMENS = [
  { image: "/ants.jpeg", label: "Ants", rotate: "-rotate-3" },
  { image: "/cockroaches.jpeg", label: "Cockroaches", rotate: "rotate-2" },
  { image: "/rats.jpeg", label: "Rodents", rotate: "rotate-3" },
  { image: "/termites.jpeg", label: "Termites", rotate: "-rotate-2" },
  { image: "/bedbug.jpeg", label: "Bed Bugs", rotate: "rotate-1" },
  { image: "/spider.jpeg", label: "Spiders", rotate: "-rotate-1" },
];

type FormStatus = "idle" | "sending" | "success" | "error";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formStatus, setFormStatus] = useState<FormStatus>("idle");
  const [formError, setFormError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    propertyType: "",
    message: "",
  });

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormStatus("sending");
    setFormError(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong.");
      }

      setFormStatus("success");
      setFormData({ name: "", phone: "", email: "", propertyType: "", message: "" });
    } catch (err) {
      setFormStatus("error");
      setFormError(
        err instanceof Error ? err.message : "We couldn't send your request. Please call or WhatsApp us instead."
      );
    }
  }

  return (
    <div className="min-h-screen bg-paper text-ink font-body">
      {/* ── NAVBAR ── */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-brand shadow-lg">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="flex items-center justify-between h-28">
            <a href="#home" className="flex items-center gap-3">
              <Image
                src="/PinnacleFumigationLogo.jpeg"
                alt="Pinnacle Fumigation Services"
                width={220}
                height={68}
                className="object-contain rounded-sm"
                style={{ height: "auto" }}
                priority
              />
            </a>

            <nav className="hidden lg:flex items-center gap-6">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="font-mono text-xs uppercase tracking-[0.15em] text-paper/75 hover:text-hazard transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <a
              href="#contact"
              className="hidden lg:inline-flex items-center gap-2 bg-hazard text-brand-deep font-semibold text-sm px-6 py-3 rounded-sm hover:bg-paper transition-colors uppercase tracking-wide"
            >
              Get a Free Quote
            </a>

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
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block py-3 font-mono text-xs uppercase tracking-[0.15em] text-paper/75 hover:text-hazard border-b border-paper/10 last:border-0"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-4 block text-center bg-hazard text-brand-deep font-semibold py-3 rounded-sm uppercase tracking-wide"
            >
              Get a Free Quote
            </a>
          </div>
        )}
      </header>

      {/* ── HERO ── */}
      <section id="home" className="relative bg-brand-deep min-h-screen flex items-center pt-28 overflow-hidden">
        <div className="absolute inset-0 paper-grain opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-br from-brand/40 via-transparent to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 border border-hazard/40 text-hazard font-mono text-xs uppercase tracking-[0.2em] px-4 py-2 mb-6">
                <span className="w-2 h-2 bg-hazard rounded-full animate-pulse" />
                Professional Fumigation Services
              </div>
              <h1 className="font-display uppercase text-4xl sm:text-5xl lg:text-6xl font-semibold text-paper leading-[1.05] mb-6 tracking-tight">
                Eliminate Pests.
                <br />
                <span className="text-paper/60">Protect Your Space.</span>
              </h1>
              <p className="text-lg text-paper/70 leading-relaxed mb-8 max-w-xl">
                Pinnacle Fumigation Services provides high-end, professional pest
                control for homes and businesses. We target cockroaches,
                termites, bed bugs, rodents and more — with guaranteed results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 bg-hazard text-brand-deep font-semibold text-base px-8 py-4 rounded-sm hover:bg-paper transition-colors uppercase tracking-wide"
                >
                  Get a Free Quote
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                <a
                  href="#services"
                  className="inline-flex items-center justify-center gap-2 border border-paper/30 text-paper font-semibold text-base px-8 py-4 rounded-sm hover:border-hazard hover:text-hazard transition-colors uppercase tracking-wide"
                >
                  Our Services
                </a>
              </div>

              <div className="grid grid-cols-3 mt-14 pt-8 border-t border-paper/10 divide-x divide-paper/10">
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

            {/* Specimen board */}
            <div className="hidden lg:flex justify-center">
              <div className="relative w-full max-w-md">
                <div className="bg-paper rounded-sm p-6 border border-ink/10 shadow-2xl -rotate-1">
                  <div className="flex items-center justify-between mb-5 pb-3 border-b border-ink/10">
                    <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink/50">
                      Field Notes — Specimen Log
                    </p>
                    <p className="font-mono text-[10px] text-ink/40">08 / 13</p>
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    {HERO_SPECIMENS.map((specimen) => (
                      <div key={specimen.label} className={`${specimen.rotate}`}>
                        <div className="relative aspect-square overflow-hidden border-2 border-paper shadow-md ring-1 ring-ink/10">
                          <Image
                            src={specimen.image}
                            alt={specimen.label}
                            fill
                            sizes="120px"
                            className="object-cover grayscale-[15%]"
                          />
                        </div>
                        <p className="font-mono text-[9px] uppercase tracking-wide text-ink/60 mt-1.5 text-center">
                          {specimen.label}
                        </p>
                      </div>
                    ))}
                  </div>
                  <a
                    href="#species"
                    className="mt-5 flex items-center gap-2 bg-brand/5 hover:bg-brand/10 transition-colors p-3 font-mono text-xs text-brand-deep"
                  >
                    <svg className="w-4 h-4 text-brand shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    + 5 more species treated
                  </a>
                </div>

                {/* Signature stamp */}
                <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full border-2 border-dashed border-hazard bg-brand-deep flex items-center justify-center rotate-12 shadow-xl">
                  <p className="font-mono text-[9px] uppercase tracking-wide text-hazard text-center leading-tight">
                    100%
                    <br />
                    Guaranteed
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="hazard-stripes h-2 w-full" role="presentation" />

      {/* ── HOW IT WORKS ── */}
      <section className="py-20 bg-paper">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-hazard-deep mb-3">{"// Simple Process"}</p>
            <h2 className="font-display uppercase text-3xl sm:text-4xl font-semibold text-brand-deep tracking-tight">
              How It Works
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-ink/10 border border-ink/10">
            {HOW_IT_WORKS.map((item) => (
              <div key={item.step} className="bg-paper p-7">
                <div className="font-mono text-sm text-hazard-deep mb-4">{item.step}</div>
                <h3 className="font-display uppercase text-brand-deep font-semibold text-lg mb-3 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-ink/60 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section id="services" className="py-20 bg-paper-dim">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-hazard-deep mb-3">{"// What We Do"}</p>
            <h2 className="font-display uppercase text-3xl sm:text-4xl font-semibold text-brand-deep tracking-tight">
              Fumigation & Treatment Services
            </h2>
            <p className="mt-4 text-ink/60 max-w-2xl mx-auto">
              From homes to large-scale commercial operations, our specialists
              employ integrated pest management techniques tailored to every
              environment.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service) => (
              <div
                key={service.title}
                className="bg-paper p-7 border border-ink/10 hover:border-hazard transition-colors group"
              >
                <div className="w-14 h-14 border-2 border-brand text-brand flex items-center justify-center mb-5 group-hover:border-hazard group-hover:text-hazard-deep transition-colors">
                  {service.icon}
                </div>
                <h3 className="font-display uppercase text-brand-deep font-semibold text-lg mb-3 tracking-tight">
                  {service.title}
                </h3>
                <p className="text-ink/60 text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SPECIES FIELD GUIDE ── */}
      <section id="species" className="py-20 bg-brand-deep">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-hazard mb-3">{"// Field Guide"}</p>
            <h2 className="font-display uppercase text-3xl sm:text-4xl font-semibold text-paper tracking-tight">
              Species We Treat
            </h2>
            <p className="mt-4 text-paper/60 max-w-2xl mx-auto">
              A working reference of the pests our technicians identify and
              eliminate most often, drawn from real inspection reports.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
            {SPECIES.map((species) => (
              <div key={species.name} className="bg-paper group">
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
            ))}
          </div>

          <div className="mt-8 border-t border-paper/10 pt-8 flex flex-wrap items-center gap-3">
            <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-paper/40 mr-2">Also treated —</p>
            {SPECIES_ADDENDUM.map((pest) => (
              <span
                key={pest}
                className="font-mono text-[10px] uppercase tracking-wide text-paper/70 border border-paper/20 px-3 py-1.5"
              >
                {pest}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── PESTS BANNER ── */}
      <section className="py-12 bg-brand">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {PESTS.map((pest) => (
              <div
                key={pest}
                className="flex items-center gap-2 border border-paper/20 hover:border-hazard transition-colors text-paper px-4 py-2 text-xs font-mono uppercase tracking-wide"
              >
                {pest}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BENEFITS ── */}
      <section id="benefits" className="py-20 bg-paper">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-hazard-deep mb-3">{"// Why Fumigation"}</p>
              <h2 className="font-display uppercase text-3xl sm:text-4xl font-semibold text-brand-deep mb-6 tracking-tight">
                Benefits of Professional Fumigation
              </h2>
              <p className="text-ink/60 leading-relaxed mb-8">
                Professional fumigation goes beyond surface-level pest control.
                It reaches deep into structures and hard-to-access areas to
                eliminate pests at every stage of their lifecycle — delivering
                results that last.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-brand text-paper font-semibold px-8 py-4 rounded-sm hover:bg-brand-deep transition-colors uppercase tracking-wide text-sm"
              >
                Book a Treatment
              </a>
            </div>
            <div className="grid sm:grid-cols-2 gap-px bg-ink/10 border border-ink/10">
              {BENEFITS.map((benefit) => (
                <div key={benefit.title} className="bg-paper p-5">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-hazard flex items-center justify-center shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-brand-deep" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-display uppercase text-brand-deep font-semibold text-sm mb-1 tracking-tight">
                        {benefit.title}
                      </h4>
                      <p className="text-ink/50 text-xs leading-relaxed">{benefit.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── GALLERY ── */}
      <section id="gallery" className="py-20 bg-paper-dim">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-hazard-deep mb-3">{"// On Site"}</p>
            <h2 className="font-display uppercase text-3xl sm:text-4xl font-semibold text-brand-deep tracking-tight">
              Watch a Treatment
            </h2>
            <p className="mt-4 text-ink/60 max-w-2xl mx-auto">
              Footage from real fumigation callouts — press play to see the
              equipment and technique in action.
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {GALLERY_CLIPS.map((clip) => (
              <div key={clip.src} className="bg-paper border border-ink/10">
                <video
                  src={clip.src}
                  controls
                  preload="metadata"
                  playsInline
                  className="w-full aspect-[9/16] bg-brand-deep object-cover"
                >
                  Your browser does not support the video tag.
                </video>
                <div className="p-4">
                  <h3 className="font-display uppercase text-brand-deep font-semibold text-sm tracking-tight">
                    {clip.title}
                  </h3>
                  <p className="text-ink/50 text-xs mt-1">{clip.note}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" className="py-20 bg-brand-deep">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-hazard mb-3">{"// About Us"}</p>
              <h2 className="font-display uppercase text-3xl sm:text-4xl font-semibold text-paper mb-6 tracking-tight">
                Trusted Fumigation Experts with Guaranteed Results
              </h2>
              <p className="text-paper/70 leading-relaxed mb-5">
                At Pinnacle Fumigation Services, we understand the importance of
                maintaining a pest-free environment. Our professionals provide
                specialised fumigation services that cater to your specific
                needs — whether it be insects, cockroaches, rodents, termites,
                bed bugs, or stored product pests.
              </p>
              <p className="text-paper/70 leading-relaxed mb-8">
                We are committed to ensuring your satisfaction with a wide
                selection of fumigation procedures and methods. If for any
                reason you are not satisfied with the results, we offer the
                flexibility to schedule a callback at no additional cost to you.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  "Residential Properties",
                  "Commercial Buildings",
                  "Industrial Facilities",
                  "Hotels & Lodges",
                  "Schools & Churches",
                  "Restaurants & Kitchens",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-hazard shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-paper/70 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-4">
              {[
                {
                  icon: (<svg className="w-5 h-5 text-brand-deep" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" /></svg>),
                  title: "Integrated Pest Management",
                  desc: "We use IPM — the most effective evidence-based approach to pest control that minimises environmental impact.",
                },
                {
                  icon: (<svg className="w-5 h-5 text-brand-deep" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>),
                  title: "Certified & Vetted Professionals",
                  desc: "All our technicians are certified, vetted, and reviewed by customers to meet strict quality standards.",
                },
                {
                  icon: (<svg className="w-5 h-5 text-brand-deep" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>),
                  title: "100% Satisfaction Guarantee",
                  desc: "Not happy? We'll come back. Free callback service for any treatment that doesn't fully meet your expectations.",
                },
              ].map((card) => (
                <div key={card.title} className="flex gap-5 bg-paper/5 border border-paper/10 p-6 hover:bg-paper/10 transition-colors">
                  <div className="w-10 h-10 bg-hazard flex items-center justify-center shrink-0">{card.icon}</div>
                  <div>
                    <h4 className="font-display uppercase text-paper font-semibold mb-1 tracking-tight">{card.title}</h4>
                    <p className="text-paper/60 text-sm leading-relaxed">{card.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" className="py-20 bg-paper">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-hazard-deep mb-3">{"// FAQ"}</p>
            <h2 className="font-display uppercase text-3xl sm:text-4xl font-semibold text-brand-deep tracking-tight">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="flex flex-col gap-3">
            {FAQS.map((faq, i) => (
              <div key={i} className="bg-paper-dim border border-ink/10">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center gap-4 px-6 py-5 text-left"
                  aria-expanded={openFaq === i}
                >
                  <span className="font-mono text-xs text-hazard-deep shrink-0">
                    Q{String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-semibold text-brand-deep pr-4 flex-1">{faq.question}</span>
                  <svg
                    className={`w-5 h-5 text-brand-deep shrink-0 transition-transform ${
                      openFaq === i ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5 pl-16">
                    <p className="text-ink/60 leading-relaxed text-sm">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── REVIEWS ── */}
      <section id="reviews" className="py-20 bg-paper-dim">
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

      {/* ── CONTACT / CTA ── */}
      <section id="contact" className="py-20 bg-brand-deep">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-hazard mb-3">{"// Get In Touch"}</p>
              <h2 className="font-display uppercase text-3xl sm:text-4xl font-semibold text-paper mb-6 tracking-tight">
                Get a Free Quote Today
              </h2>
              <p className="text-paper/70 leading-relaxed mb-8">
                Contact us today and one of our specialists will assess your
                pest problem, recommend the right treatment, and provide a
                comprehensive quote with no obligation.
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

            {/* Form */}
            <div className="bg-paper p-8">
              {formStatus === "success" ? (
                <div className="flex flex-col items-center justify-center text-center gap-4 py-12">
                  <div className="w-14 h-14 bg-hazard flex items-center justify-center">
                    <svg className="w-7 h-7 text-brand-deep" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="font-display uppercase text-brand-deep font-semibold text-xl tracking-tight">
                    Request Sent
                  </h3>
                  <p className="text-ink/60 text-sm max-w-xs">
                    Thanks — we&apos;ve received your details and will be in touch
                    shortly to confirm your quote.
                  </p>
                  <button
                    onClick={() => setFormStatus("idle")}
                    className="font-mono text-xs uppercase tracking-wide text-hazard-deep underline underline-offset-4"
                  >
                    Send another request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="font-mono text-[10px] uppercase tracking-wide text-ink/50 mb-1 block">
                        Full Name
                      </label>
                      <input
                        type="text"
                        placeholder="John Doe"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-paper-dim border border-ink/15 text-ink placeholder-ink/30 rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-hazard transition-colors"
                      />
                    </div>
                    <div>
                      <label className="font-mono text-[10px] uppercase tracking-wide text-ink/50 mb-1 block">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        placeholder="+27 00 000 0000"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-paper-dim border border-ink/15 text-ink placeholder-ink/30 rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-hazard transition-colors"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="font-mono text-[10px] uppercase tracking-wide text-ink/50 mb-1 block">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="you@example.com"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-paper-dim border border-ink/15 text-ink placeholder-ink/30 rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-hazard transition-colors"
                    />
                  </div>
                  <div>
                    <label className="font-mono text-[10px] uppercase tracking-wide text-ink/50 mb-1 block">
                      Property Type
                    </label>
                    <select
                      required
                      value={formData.propertyType}
                      onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                      className="w-full bg-paper-dim border border-ink/15 text-ink rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-hazard transition-colors appearance-none"
                    >
                      <option value="">Select property type</option>
                      <option value="residential">Residential</option>
                      <option value="commercial">Commercial</option>
                      <option value="industrial">Industrial</option>
                      <option value="hotel">Hotel / Lodge</option>
                      <option value="office">Office</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="font-mono text-[10px] uppercase tracking-wide text-ink/50 mb-1 block">
                      Pest Problem / Message
                    </label>
                    <textarea
                      placeholder="Describe the pest problem or any specific requirements..."
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-paper-dim border border-ink/15 text-ink placeholder-ink/30 rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-hazard transition-colors resize-none"
                    />
                  </div>

                  {formStatus === "error" && (
                    <p className="text-rust text-sm font-medium" role="alert">
                      {formError}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={formStatus === "sending"}
                    className="w-full bg-hazard text-brand-deep font-semibold py-4 rounded-sm hover:bg-hazard-deep hover:text-paper transition-colors mt-2 text-base uppercase tracking-wide disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {formStatus === "sending" ? "Sending…" : "Send Message & Get Quote"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-ink py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
            <div className="lg:col-span-2">
              <p className="font-display uppercase text-paper font-semibold text-xl tracking-tight mb-4">
                Pinnacle Fumigation
              </p>
              <p className="text-paper/50 text-sm leading-relaxed max-w-sm">
                Professional fumigation services for homes and businesses.
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
                    <a href="#services" className="text-paper/50 hover:text-hazard text-sm transition-colors">
                      {s}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-mono text-paper text-xs mb-4 uppercase tracking-[0.15em]">Company</h4>
              <ul className="flex flex-col gap-2">
                {[
                  { label: "About Us", href: "#about" },
                  { label: "Species Guide", href: "#species" },
                  { label: "FAQ", href: "#faq" },
                  { label: "Reviews", href: "#reviews" },
                  { label: "Contact Us", href: "#contact" },
                  { label: "Privacy Policy", href: "/privacy-policy" },
                ].map((l) => (
                  <li key={l.label}>
                    <a href={l.href} className="text-paper/50 hover:text-hazard text-sm transition-colors">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
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

      <a
        href="https://wa.me/27677595706"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl shadow-black/20 transition-transform hover:-translate-y-1"
        aria-label="Chat on WhatsApp"
      >
        <svg viewBox="0 0 24 24" className="h-7 w-7" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M20.52 3.48A11.86 11.86 0 0 0 12 0C5.37 0 0 5.38 0 12a11.9 11.9 0 0 0 2.06 6.56L0 24l5.55-1.46A11.96 11.96 0 0 0 12 24c6.63 0 12-5.38 12-12 0-3.2-1.18-6.2-3.48-8.52Zm-8.3 18.12a9.69 9.69 0 0 1-5.14-1.38l-.37-.22-3.29.86.88-3.21-.24-.35A9.65 9.65 0 0 1 2.34 12c0-5.33 4.34-9.67 9.66-9.67 2.58 0 5 1 6.84 2.74a9.59 9.59 0 0 1 2.83 6.93c0 5.33-4.34 9.67-9.66 9.67Zm5.28-6.6c-.28-.14-1.66-.82-1.92-.92-.26-.1-.45-.14-.64.14-.19.28-.72.92-.88 1.11-.16.19-.32.21-.6.07-.28-.14-1.18-.43-2.25-1.38-.83-.74-1.39-1.66-1.55-1.94-.16-.28-.02-.43.12-.57.12-.12.28-.33.42-.5.14-.17.18-.28.28-.47.1-.19.05-.36-.02-.5-.07-.14-.64-1.54-.88-2.1-.23-.55-.47-.48-.64-.49h-.55c-.19 0-.5.07-.76.36-.26.28-1 1-1 2.45s1.03 2.84 1.17 3.04c.14.19 2.02 3.1 4.9 4.34.68.29 1.21.46 1.62.59.68.22 1.3.19 1.79.12.55-.08 1.66-.68 1.9-1.33.24-.65.24-1.2.17-1.33-.06-.13-.24-.19-.52-.33Z"/>
        </svg>
      </a>
    </div>
  );
}
