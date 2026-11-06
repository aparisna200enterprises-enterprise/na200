import "./globals.css";

import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { PageLoader } from "./components/page-loader";
import { ScrollReveal } from "./components/scroll-reveal";

const deploymentUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL ?? process.env.VERCEL_URL;
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? (deploymentUrl ? `https://${deploymentUrl}` : "http://localhost:3000");
const siteTitle = "NA200 Enterprises | Design, Build & Engineering";
const siteDescription = "NA200 Enterprises provides design and build, engineering, structural, architectural, fire protection, telecommunication, plumbing, electrical, and CCTV solutions.";

const inter = Inter({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-inter",
  weight: "variable",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  alternates: { canonical: "/" },
  title: {
    default: siteTitle,
    template: "%s | NA200 Enterprises",
  },
  description: siteDescription,
  openGraph: {
    type: "website",
    locale: "en_PH",
    siteName: "NA200 Enterprises",
    title: siteTitle,
    description: siteDescription,
    images: [{ url: "/images/na200/hero-hd.webp", alt: "Construction and engineering work by NA200 Enterprises" }],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/images/na200/hero-hd.webp"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${siteUrl}/#organization`,
  name: "NA200 Enterprises",
  url: siteUrl,
  logo: `${siteUrl}/images/na200/logo-no-line-hd.webp`,
  image: `${siteUrl}/images/na200/hero-hd.webp`,
  description: siteDescription,
  email: "norman_aparis@yahoo.com",
  telephone: "+63 906 247 2464",
  address: {
    "@type": "PostalAddress",
    streetAddress: "#17 EDSA Cor. Pantaleon Ext., Brgy. Ilaya, Barangka",
    addressLocality: "Mandaluyong City",
    addressRegion: "Metro Manila",
    addressCountry: "PH",
  },
  areaServed: "Mandaluyong City, Metro Manila, Philippines",
  knowsAbout: ["Design and build", "Engineering", "Structural work", "Architectural work", "Fire protection", "Telecommunication tower erection", "Plumbing", "Electrical", "CCTV"],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }} />
        <PageLoader />
        <ScrollReveal />
        {children}
      </body>
    </html>
  );
}
