import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import SiteHeader from "../../components/SiteHeader";
import SiteFooter from "../../components/SiteFooter";
import WhatsAppButton from "../../components/WhatsAppButton";
import QuoteForm from "../../components/QuoteForm";
import { BLOG_POSTS, getPostBySlug, getRelatedPosts } from "../../lib/blog";
import { SITE_URL } from "../../site-config";

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.metaDescription,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: `${post.title} | Pinnacle Fumigation Services`,
      description: post.metaDescription,
      url: `/blog/${post.slug}`,
      type: "article",
      publishedTime: post.publishedDate,
      modifiedTime: post.updatedDate,
      images: post.heroImage ? [post.heroImage] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: `${post.title} | Pinnacle Fumigation Services`,
      description: post.metaDescription,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const related = getRelatedPosts(post);
  const pageUrl = `${SITE_URL}/blog/${post.slug}`;

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        headline: post.title,
        description: post.metaDescription,
        image: post.heroImage ? `${SITE_URL}${post.heroImage}` : undefined,
        datePublished: post.publishedDate,
        dateModified: post.updatedDate,
        url: pageUrl,
        author: { "@type": "Organization", name: "Pinnacle Fumigation Services" },
        publisher: {
          "@type": "Organization",
          name: "Pinnacle Fumigation Services",
          logo: { "@type": "ImageObject", url: `${SITE_URL}/PinnacleFumigationLogo.jpeg` },
        },
        mainEntityOfPage: pageUrl,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
          { "@type": "ListItem", position: 3, name: post.title, item: pageUrl },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: post.faqs.map((faq) => ({
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
      <section className="relative bg-brand-deep pt-28 pb-14 overflow-hidden">
        <div className="absolute inset-0 paper-grain opacity-10" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex flex-wrap items-center gap-2 font-mono text-[10px] uppercase tracking-wide text-paper/50">
              <li>
                <Link href="/" className="hover:text-hazard transition-colors">Home</Link>
              </li>
              <li>/</li>
              <li>
                <Link href="/blog" className="hover:text-hazard transition-colors">Blog</Link>
              </li>
              <li>/</li>
              <li className="text-hazard">{post.category}</li>
            </ol>
          </nav>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-hazard mb-4">{"// " + post.category}</p>
          <h1 className="font-display uppercase text-3xl sm:text-4xl font-semibold text-paper leading-[1.1] mb-6 tracking-tight">
            {post.title}
          </h1>
          <div className="flex items-center gap-4 font-mono text-[10px] uppercase tracking-wide text-paper/50">
            <span>{post.readingTime}</span>
            <span>·</span>
            <span>Updated {new Date(post.updatedDate).toLocaleDateString("en-ZA", { year: "numeric", month: "long", day: "numeric" })}</span>
          </div>
        </div>
      </section>

      {/* ── BODY ── */}
      <article className="py-16 bg-paper">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {post.heroImage && (
            <div className="relative aspect-[16/9] mb-10 overflow-hidden bg-paper-dim">
              <Image
                src={post.heroImage}
                alt={post.title}
                fill
                sizes="(max-width: 768px) 100vw, 768px"
                className="object-cover"
                priority
              />
            </div>
          )}

          <div className="flex flex-col gap-5 text-ink/70 leading-relaxed mb-12">
            {post.intro.map((paragraph, i) => (
              <p key={i} className="text-base">{paragraph}</p>
            ))}
          </div>

          <div className="flex flex-col gap-12">
            {post.sections.map((section) => (
              <div key={section.heading}>
                <h2 className="font-display uppercase text-brand-deep font-semibold text-2xl tracking-tight mb-4">
                  {section.heading}
                </h2>
                {section.paragraphs?.map((paragraph, i) => (
                  <p key={i} className="text-ink/70 leading-relaxed mb-4">
                    {paragraph}
                  </p>
                ))}
                {section.list && (
                  <ul className="flex flex-col gap-3 mt-2">
                    {section.list.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 bg-hazard-deep rounded-full shrink-0 mt-2" />
                        <span className="text-ink/70 leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {section.orderedList && (
                  <ol className="flex flex-col gap-4 mt-2">
                    {section.orderedList.map((item, i) => (
                      <li key={i} className="flex items-start gap-4">
                        <span className="font-mono text-xs text-hazard-deep shrink-0 pt-0.5">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="text-ink/70 leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ol>
                )}
              </div>
            ))}
          </div>

          {/* ── FAQ ── */}
          <div className="mt-16 pt-12 border-t border-ink/10">
            <h2 className="font-display uppercase text-brand-deep font-semibold text-2xl tracking-tight mb-6">
              Frequently Asked Questions
            </h2>
            <div className="flex flex-col gap-6">
              {post.faqs.map((faq) => (
                <div key={faq.question}>
                  <h3 className="font-semibold text-brand-deep mb-2">{faq.question}</h3>
                  <p className="text-ink/60 leading-relaxed text-sm">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 pt-10 border-t border-ink/10">
            <Link
              href="/areas"
              className="font-mono text-xs uppercase tracking-wide text-hazard-deep underline underline-offset-4"
            >
              Find pest control in your area →
            </Link>
          </div>
        </div>
      </article>

      {/* ── RELATED ── */}
      {related.length > 0 && (
        <section className="py-16 bg-paper-dim">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-hazard-deep mb-3">{"// Keep Reading"}</p>
            <h2 className="font-display uppercase text-2xl sm:text-3xl font-semibold text-brand-deep tracking-tight mb-8">
              Related Guides
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {related.map((r) => (
                <Link key={r.slug} href={`/blog/${r.slug}`} className="group bg-paper border border-ink/10 p-6">
                  <p className="font-mono text-[10px] uppercase tracking-wide text-hazard-deep mb-2">{r.category}</p>
                  <h3 className="font-display uppercase text-brand-deep font-semibold text-base tracking-tight mb-2 group-hover:text-hazard-deep transition-colors">
                    {r.title}
                  </h3>
                  <p className="text-ink/60 text-sm leading-relaxed">{r.excerpt}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── CONTACT / QUOTE ── */}
      <section id="quote" className="py-20 bg-brand-deep">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-hazard mb-3">{"// Get In Touch"}</p>
              <h2 className="font-display uppercase text-3xl sm:text-4xl font-semibold text-paper mb-6 tracking-tight">
                Dealing With {post.category}?
              </h2>
              <p className="text-paper/70 leading-relaxed mb-8">
                Get a free, no-obligation quote from a certified technician.
                We treat {post.category.toLowerCase()} and all common
                household pests across Gauteng, KwaZulu-Natal and the
                Western Cape.
              </p>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-hazard flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-brand-deep" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16.72 12.93l-2.06-.29a1 1 0 00-.91.27l-1.13 1.13a15.05 15.05 0 01-6.6-6.6l1.13-1.13a1 1 0 00.27-.91l-.29-2.06A1 1 0 006.07 3H4.5A1.5 1.5 0 003 4.5C3 15.03 8.97 21 19.5 21a1.5 1.5 0 001.5-1.5v-1.57a1 1 0 00-.93-.99z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-wide text-paper/50">WhatsApp or Call</p>
                    <p className="text-paper font-semibold">067 759 5706</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-paper p-8">
              <QuoteForm area={`Blog — ${post.title}`} />
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
      <WhatsAppButton />
    </div>
  );
}
