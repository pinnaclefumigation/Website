import type { Metadata } from "next";
import { Oswald, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SITE_URL } from "./site-config";
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
    default:
      "Pinnacle Fumigation Services | Pest Control in South Africa",
    template: "%s | Pinnacle Fumigation Services",
  },
  description:
    "Pinnacle Fumigation Services provides professional fumigation and pest control across Gauteng, KwaZulu-Natal and the Western Cape — Johannesburg, Pretoria, Durban and Cape Town and surrounding suburbs. Cockroaches, termites, bed bugs, rodents and more — certified technicians, 24/7 support, satisfaction guaranteed.",
  keywords: [
    "fumigation services",
    "pest control",
    "cockroach treatment",
    "termite treatment",
    "bed bug removal",
    "rodent control",
    "commercial fumigation",
    "residential pest control",
    "fumigation services Gauteng",
    "pest control Johannesburg",
    "pest control Pretoria",
    "pest control Centurion",
    "pest control Durban",
    "pest control KwaZulu-Natal",
    "pest control Cape Town",
    "pest control Western Cape",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Pinnacle Fumigation Services | Pest Control in South Africa",
    description:
      "Certified fumigation and pest control for homes and businesses across Gauteng, KwaZulu-Natal and the Western Cape. Cockroaches, termites, bed bugs, rodents and more — guaranteed results.",
    url: SITE_URL,
    siteName: "Pinnacle Fumigation Services",
    locale: "en_ZA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pinnacle Fumigation Services | Pest Control in South Africa",
    description:
      "Certified fumigation and pest control for homes and businesses across Gauteng, KwaZulu-Natal and the Western Cape. Cockroaches, termites, bed bugs, rodents and more — guaranteed results.",
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
        {children}
        <Analytics />
      </body>
    </html>
  );
}
