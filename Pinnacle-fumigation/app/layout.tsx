import type { Metadata } from "next";
import { Oswald, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
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
  metadataBase: new URL("https://pinnaclefumigation.co.za"),
  title: "Pinnacle Fumigation Services | Professional Pest Control",
  description:
    "Pinnacle Fumigation Services provides professional fumigation and pest control for residential, commercial, and industrial properties. Cockroaches, termites, bed bugs, rodents and more — certified technicians, 24/7 support, satisfaction guaranteed.",
  keywords: [
    "fumigation services",
    "pest control",
    "cockroach treatment",
    "termite treatment",
    "bed bug removal",
    "rodent control",
    "commercial fumigation",
    "residential pest control",
  ],
  openGraph: {
    title: "Pinnacle Fumigation Services | Professional Pest Control",
    description:
      "Certified fumigation and pest control for homes and businesses. Cockroaches, termites, bed bugs, rodents and more — guaranteed results.",
    siteName: "Pinnacle Fumigation Services",
    locale: "en_ZA",
    type: "website",
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
