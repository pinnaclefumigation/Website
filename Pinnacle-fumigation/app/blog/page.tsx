import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import WhatsAppButton from "../components/WhatsAppButton";
import { BLOG_POSTS } from "../lib/blog";
import { SITE_URL } from "../site-config";

export const metadata: Metadata = {
  title: "Pest Control Blog & Guides",
  description:
    "Practical, expert guides on identifying and getting rid of common household pests — cockroaches, bed bugs, ants, flies, rodents and termites.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Pest Control Blog & Guides | Pinnacle Fumigation Services",
    description:
      "Practical, expert guides on identifying and getting rid of common household pests — cockroaches, bed bugs, ants, flies, rodents and termites.",
    url: "/blog",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pest Control Blog & Guides | Pinnacle Fumigation Services",
    description:
      "Practical, expert guides on identifying and getting rid of common household pests — cockroaches, bed bugs, ants, flies, rodents and termites.",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
      ],
    },
    {
      "@type": "Blog",
      name: "Pinnacle Fumigation Services Blog",
      url: `${SITE_URL}/blog`,
      blogPost: BLOG_POSTS.map((post) => ({
        "@type": "BlogPosting",
        headline: post.title,
        url: `${SITE_URL}/blog/${post.slug}`,
        datePublished: post.publishedDate,
        dateModified: post.updatedDate,
      })),
    },
  ],
};

export default function BlogIndexPage() {
  return (
    <div className="min-h-screen bg-paper text-ink font-body">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <SiteHeader />

      <section className="relative bg-brand-deep pt-28 pb-16 overflow-hidden">
        <div className="absolute inset-0 paper-grain opacity-10" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-hazard mb-4">{"// Pest Control Guides"}</p>
          <h1 className="font-display uppercase text-4xl sm:text-5xl font-semibold text-paper leading-[1.05] mb-6 tracking-tight">
            Pest Control Blog
          </h1>
          <p className="text-lg text-paper/70 leading-relaxed max-w-2xl">
            Practical, expert guides on identifying pests early and getting
            rid of them for good — written by the team that treats them
            every day across Gauteng, KwaZulu-Natal and the Western Cape.
          </p>
        </div>
      </section>

      <section className="py-20 bg-paper">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {BLOG_POSTS.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group bg-paper-dim border border-ink/10 flex flex-col">
                {post.heroImage && (
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={post.heroImage}
                      alt={post.title}
                      fill
                      sizes="(max-width: 1024px) 90vw, 32vw"
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute top-2 left-2 bg-hazard text-brand-deep font-mono text-[9px] font-semibold uppercase tracking-wide px-2 py-1">
                      {post.category}
                    </div>
                  </div>
                )}
                <div className="p-6 flex flex-col flex-1">
                  {!post.heroImage && (
                    <p className="font-mono text-[10px] uppercase tracking-wide text-hazard-deep mb-2">
                      {post.category}
                    </p>
                  )}
                  <h2 className="font-display uppercase text-brand-deep font-semibold text-lg tracking-tight mb-2 group-hover:text-hazard-deep transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-ink/60 text-sm leading-relaxed flex-1">{post.excerpt}</p>
                  <p className="font-mono text-[10px] uppercase tracking-wide text-ink/40 mt-4">
                    {post.readingTime}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-brand-deep">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display uppercase text-2xl sm:text-3xl font-semibold text-paper tracking-tight mb-4">
            Dealing With an Infestation Right Now?
          </h2>
          <p className="text-paper/70 leading-relaxed mb-8">
            Skip straight to a technician — get a free quote for your property.
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
