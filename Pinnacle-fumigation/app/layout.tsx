import type { Metadata } from "next";
import { Oswald, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SERVICE_AREAS } from "./content";
import {
  BUSINESS_EMAIL,
  BUSINESS_NAME,
  BUSINESS_PHONE,
  SITE_DESCRIPTION,
  SITE_URL,
} from "./site-config";
import "./globals.css";

const oswald = Oswald({
  variable: "--font-display",
  subsets: ["latin"],
});

const plexSans = IBM_Plex_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Pest Control & Fumigation in Gauteng | Pinnacle",
    template: "%s | Pinnacle Fumigation",
  },
  description: SITE_DESCRIPTION,
  alternates: { canonical: "/" },
  openGraph: {
    title: "Pest Control & Fumigation in Gauteng | Pinnacle",
    description: SITE_DESCRIPTION,
    siteName: BUSINESS_NAME,
    locale: "en_ZA",
    type: "website",
    url: SITE_URL,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Pinnacle Fumigation Services in Johannesburg, Pretoria and Gauteng",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pest Control & Fumigation in Gauteng | Pinnacle",
    description: SITE_DESCRIPTION,
    images: ["/twitter-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: BUSINESS_NAME,
      url: SITE_URL,
      logo: `${SITE_URL}/PinnacleFumigationLogo.jpeg`,
      image: `${SITE_URL}/opengraph-image`,
      telephone: BUSINESS_PHONE,
      email: BUSINESS_EMAIL,
      contactPoint: {
        "@type": "ContactPoint",
        telephone: BUSINESS_PHONE,
        email: BUSINESS_EMAIL,
        contactType: "customer service",
        availableLanguage: "English",
      },
    },
    {
      "@type": "Service",
      "@id": `${SITE_URL}/#pest-control-service`,
      name: "Pest control and fumigation",
      serviceType: [
        "Pest control",
        "Fumigation",
        "Termite treatment",
        "Bed bug treatment",
        "Rodent control",
      ],
      provider: { "@id": `${SITE_URL}/#organization` },
      areaServed: SERVICE_AREAS.map((area) => ({
        "@type": "Place",
        name: `${area}, Gauteng, South Africa`,
      })),
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${oswald.variable} ${plexSans.variable} ${plexMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-body">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
          }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
