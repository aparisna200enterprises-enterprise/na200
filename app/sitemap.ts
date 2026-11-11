import type { MetadataRoute } from "next";
import { projects } from "./data/projects";
import { absoluteUrl } from "./site-config";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: absoluteUrl("/"), changeFrequency: "monthly", priority: 1, images: [absoluteUrl("/images/na200/hero-hd.webp")] },
    { url: absoluteUrl("/about"), changeFrequency: "monthly", priority: 0.8, images: [absoluteUrl("/images/na200/logo-no-line-hd.webp")] },
    { url: absoluteUrl("/services"), changeFrequency: "monthly", priority: 0.8, images: [absoluteUrl("/images/na200/services/wix-services.jpg")] },
    ...projects.map((project) => ({
      url: absoluteUrl(`/projects/${project.slug}`),
      changeFrequency: "monthly" as const,
      priority: 0.7,
      images: [project.image, ...project.gallery.map((item) => item.image)].map(absoluteUrl),
    })),
  ];
}
