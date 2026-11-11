import type { Metadata } from "next";

const fallbackSiteUrl = "https://na200enterprises.com";

function normalizeSiteUrl(value: string | undefined) {
  if (!value) return fallbackSiteUrl;

  try {
    return new URL(value).origin;
  } catch {
    return fallbackSiteUrl;
  }
}

export const siteUrl = normalizeSiteUrl(process.env.NEXT_PUBLIC_SITE_URL?.trim());
export const siteName = "NA200 Enterprises";
export const siteTitle = "NA200 Enterprises | Design-Build & Engineering in Metro Manila";
export const siteDescription = "NA200 Enterprises is a Mandaluyong design-build and engineering contractor providing structural, fire protection, CCTV, electrical, plumbing, telecom, and solar solutions.";
export const siteLogo = "/images/na200/logo-no-line-hd.webp";
export const siteImage = "/images/na200/hero-hd.webp";
export const siteEmail = "norman_aparis@yahoo.com";
export const sitePhone = "+63 906 247 2464";

export function absoluteUrl(path: string) {
  return new URL(path, siteUrl).toString();
}

type PageMetadataOptions = {
  title: string;
  description: string;
  path: string;
  image?: string;
  imageAlt?: string;
};

export function createPageMetadata({ title, description, path, image = siteImage, imageAlt }: PageMetadataOptions): Metadata {
  const fullTitle = `${title} | ${siteName}`;
  const imageUrl = absoluteUrl(image);

  return {
    title: { absolute: fullTitle },
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "en_PH",
      siteName,
      url: absoluteUrl(path),
      title: fullTitle,
      description,
      images: [{ url: imageUrl, alt: imageAlt ?? fullTitle }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [imageUrl],
    },
  };
}

export const homeMetadata: Metadata = {
  title: { absolute: siteTitle },
  description: siteDescription,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_PH",
    siteName,
    url: siteUrl,
    title: siteTitle,
    description: siteDescription,
    images: [{ url: absoluteUrl(siteImage), alt: siteTitle }],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: [absoluteUrl(siteImage)],
  },
};
