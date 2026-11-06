export type Service = {
  number: string;
  slug: string;
  title: string;
  text: string;
  image: string;
};

export const services: Service[] = [
  { number: "01", slug: "design-and-build", title: "Design & Build", text: "From project definition through construction, NA200 brings the work together under one dependable partner.", image: "/images/na200/services/wix-design-build-hd.webp" },
  { number: "02", slug: "engineering", title: "Engineering", text: "Practical engineering support shaped around the project’s requirements and the client’s goals.", image: "/images/na200/services/wix-engineering-hd.webp" },
  { number: "03", slug: "structural", title: "Structural", text: "Structural work delivered with a clear focus on safety, coordination, and quality.", image: "/images/na200/services/wix-structural-hd.webp" },
  { number: "04", slug: "architectural", title: "Architectural", text: "Architectural thinking that connects the design intent with the realities of construction.", image: "/images/na200/services/wix-architecture-hd.webp" },
  { number: "05", slug: "tower-erection", title: "Tower Erection", text: "Telecommunication tower erection and related site work for connected infrastructure.", image: "/images/na200/services/wix-tower-erection-hd.webp" },
  { number: "06", slug: "fire-protection", title: "Fire Protection", text: "FDAS and sprinkler system work supported by a safety-first approach.", image: "/images/na200/services/wix-fdas-hd.webp" },
  { number: "07", slug: "plumbing", title: "Plumbing", text: "Plumbing systems coordinated as part of a complete building solution.", image: "/images/na200/services/wix-sprinkler-plumbing-hd.webp" },
  { number: "08", slug: "electrical", title: "Electrical", text: "Electrical cabling and installation work integrated into the wider project.", image: "/images/na200/projects/project-07-hd.webp" },
  { number: "09", slug: "cctv", title: "CCTV", text: "CCTV installation for security-focused environments and operations.", image: "/images/na200/services/wix-cctv-hd.webp" },
];
