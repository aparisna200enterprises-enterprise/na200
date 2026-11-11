import "./globals.css";

import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { PageLoader } from "./components/page-loader";
import { absoluteUrl, siteDescription, siteEmail, siteImage, siteLogo, siteName, sitePhone, siteTitle, siteUrl } from "./site-config";

const inter = Inter({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-inter",
  weight: "variable",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: "%s | NA200 Enterprises",
  },
  description: siteDescription,
  applicationName: siteName,
  category: "business",
  openGraph: {
    type: "website",
    locale: "en_PH",
    siteName,
    url: siteUrl,
    title: siteTitle,
    description: siteDescription,
    images: [{ url: absoluteUrl(siteImage), alt: "Construction and engineering work by NA200 Enterprises" }],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: [absoluteUrl(siteImage)],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": absoluteUrl("/#organization"),
      name: siteName,
      url: siteUrl,
      logo: absoluteUrl(siteLogo),
      image: absoluteUrl(siteImage),
      description: siteDescription,
      foundingDate: "2001",
      email: siteEmail,
      telephone: sitePhone,
      address: {
        "@type": "PostalAddress",
        streetAddress: "#17 EDSA Cor. Pantaleon Ext., Brgy. Ilaya, Barangka",
        addressLocality: "Mandaluyong City",
        addressRegion: "Metro Manila",
        addressCountry: "PH",
      },
      areaServed: ["Mandaluyong City", "Metro Manila", "Philippines"],
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer service",
        telephone: sitePhone,
        email: siteEmail,
        areaServed: "PH",
        availableLanguage: "English",
      },
      knowsAbout: ["Design and build", "Engineering", "Structural work", "Architectural work", "Fire protection / FDAS", "Telecommunication tower erection", "Plumbing / AFSS", "Electrical", "CCTV", "Renewable energy and solar systems", "Kitchen fire suppression", "Elevator installation", "Scaffolding erection"],
    },
    {
      "@type": "WebSite",
      "@id": absoluteUrl("/#website"),
      url: siteUrl,
      name: siteName,
      description: siteDescription,
      inLanguage: "en-PH",
      publisher: { "@id": absoluteUrl("/#organization") },
    },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }} />
        <PageLoader />
        {children}
      </body>
    </html>
  );
}
