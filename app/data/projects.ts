export type GalleryImage = {
  image: string;
};

export type Project = {
  number: string;
  slug: string;
  title: string;
  category: string;
  image: string;
  gallery: GalleryImage[];
};

function wixGallery(slug: string, count: number): GalleryImage[] {
  return Array.from({ length: count }, (_, index) => {
    const number = index + 1;
    const paddedNumber = String(number).padStart(2, "0");
    return { image: `/images/na200/projects/galleries/${slug}/${paddedNumber}.webp` };
  });
}

export const projects: Project[] = [
  {
    number: "01",
    slug: "scaffolding-erection",
    title: "Scaffolding Erection",
    category: "Scaffolding",
    image: "/images/na200/projects/project-01-hd.webp",
    gallery: wixGallery("scaffolding-erection", 12),
  },
  {
    number: "02",
    slug: "fitout-painting",
    title: "Fitout Painting",
    category: "Fitout",
    image: "/images/na200/projects/project-02-hd.webp",
    gallery: wixGallery("fitout-painting", 10),
  },
  {
    number: "03",
    slug: "housing-land-development",
    title: "Housing Projects & Land Development",
    category: "Housing",
    image: "/images/na200/projects/project-03-hd.webp",
    gallery: wixGallery("housing-land-development", 12),
  },
  {
    number: "04",
    slug: "cctv-installation",
    title: "CCTV Installation",
    category: "CCTV",
    image: "/images/na200/projects/project-04-hd.webp",
    gallery: wixGallery("cctv-installation", 10),
  },
  {
    number: "05",
    slug: "fdas",
    title: "Fire Detection and Alarm System",
    category: "Fire Protection",
    image: "/images/na200/projects/project-05-hd.webp",
    gallery: wixGallery("fdas", 12),
  },
  {
    number: "06",
    slug: "sprinkler-system",
    title: "Sprinkler System",
    category: "Fire Protection",
    image: "/images/na200/projects/project-06-hd.webp",
    gallery: wixGallery("sprinkler-system", 14),
  },
  {
    number: "07",
    slug: "electrical-cabling",
    title: "Electrical Cabling",
    category: "Electrical",
    image: "/images/na200/projects/project-07-hd.webp",
    gallery: wixGallery("electrical-cabling", 14),
  },
  {
    number: "08",
    slug: "tower-erection",
    title: "Tower Erection",
    category: "Tower",
    image: "/images/na200/projects/project-08-hd.webp",
    gallery: wixGallery("tower-erection", 12),
  },
  {
    number: "09",
    slug: "waterproofing",
    title: "Painting & Waterproofing",
    category: "Waterproofing",
    image: "/images/na200/projects/project-09-hd.webp",
    gallery: wixGallery("waterproofing", 14),
  },
];
