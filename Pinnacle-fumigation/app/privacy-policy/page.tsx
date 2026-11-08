import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Pinnacle Fumigation Services collects, uses, and protects your information, including our use of cookies and third-party advertising.",
  alternates: { canonical: "/privacy-policy" },
  openGraph: {
    title: "Privacy Policy | Pinnacle Fumigation Services",
    description:
      "How Pinnacle Fumigation Services collects, uses, and protects your information, including our use of cookies and third-party advertising.",
    url: "https://pinnaclefumigation.co.za/privacy-policy",
  },
  twitter: { title: "Privacy Policy | Pinnacle Fumigation Services" },
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-paper text-ink font-body">
      <header className="bg-brand py-8">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="font-mono text-xs uppercase tracking-[0.15em] text-paper/70 hover:text-hazard transition-colors"
          >
            ← Back to Pinnacle Fumigation Services
          </Link>
          <h1 className="font-display uppercase text-3xl sm:text-4xl font-semibold text-paper mt-4 tracking-tight">
            Privacy Policy
          </h1>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <p className="font-mono text-xs uppercase tracking-wide text-ink/40 mb-10">
          Last updated: 30 August 2026
        </p>

        <div className="flex flex-col gap-10 text-ink/75 leading-relaxed text-sm">
          <section>
            <h2 className="font-display uppercase text-brand-deep font-semibold text-xl mb-3 tracking-tight">
              Who We Are
            </h2>
            <p>
              Pinnacle Fumigation Services (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) provides
              fumigation and pest control services. This policy explains what
              information we collect through this website, how we use it, and
              the choices you have.
            </p>
          </section>

          <section>
            <h2 className="font-display uppercase text-brand-deep font-semibold text-xl mb-3 tracking-tight">
              Information We Collect
            </h2>
            <p>
              When you submit our quote request form, we collect your name,
              phone number, email address, property type, and any details you
              share about your pest problem. We use this information solely to
              respond to your enquiry, provide a quote, and arrange a
              treatment if you choose to proceed.
            </p>
          </section>

          <section>
            <h2 className="font-display uppercase text-brand-deep font-semibold text-xl mb-3 tracking-tight">
              How We Use Your Information
            </h2>
            <p>
              Your quote request is sent directly to our team by email. We do
              not sell, rent, or share your personal information with third
              parties for their own marketing purposes. We retain enquiry
              details only as long as needed to respond to you and, where you
              become a customer, to maintain a record of the service provided.
            </p>
          </section>

          <section>
            <h2 className="font-display uppercase text-brand-deep font-semibold text-xl mb-3 tracking-tight">
              Cookies & Advertising
            </h2>
            <p>
              This site may display advertisements served by third-party
              vendors, including Google. These vendors may use cookies to
              serve ads based on your prior visits to this or other websites.
              Google&apos;s use of advertising cookies enables it and its
              partners to serve ads based on your visit to this site and/or
              other sites on the Internet. You may opt out of personalised
              advertising by visiting{" "}
              <a
                href="https://adssettings.google.com"
                target="_blank"
                rel="noreferrer"
                className="text-brand-deep underline underline-offset-2 hover:text-hazard-deep"
              >
                Google Ads Settings
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="font-display uppercase text-brand-deep font-semibold text-xl mb-3 tracking-tight">
              Your Rights
            </h2>
            <p>
              You may ask us at any time to tell you what information we hold
              about you, to correct it, or to delete it. To make a request,
              contact us using the details below.
            </p>
          </section>

          <section>
            <h2 className="font-display uppercase text-brand-deep font-semibold text-xl mb-3 tracking-tight">
              Contact Us
            </h2>
            <p>
              For any questions about this policy or your information, reach
              us via WhatsApp or call at 067 759 5706, or by email at{" "}
              <a
                href="mailto:pinnaclefumigation@gmail.com"
                className="text-brand-deep underline underline-offset-2 hover:text-hazard-deep"
              >
                pinnaclefumigation@gmail.com
              </a>
              .
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
