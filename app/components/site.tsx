import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { services } from "../data/services";
import { ContactForm } from "./contact-form";
import { logoSrc, navItems } from "./navigation";
import { ProjectGallery } from "./project-gallery";
import { SiteHeader } from "./site-header";

const partnerLogos = [
  { name: "EST", src: "/images/na200/partners/est.png", width: 386, height: 162 },
  { name: "AVTECH", src: "/images/na200/partners/avtech.svg", width: 220, height: 42 },
  { name: "ZKTeco", src: "/images/na200/partners/zkteco.png", width: 278, height: 57 },
  { name: "Hikvision", src: "/images/na200/partners/hikvision.png", width: 2425, height: 306 },
  { name: "Longse", src: "/images/na200/partners/longse.png", width: 250, height: 73 },
  { name: "Anson", src: "/images/na200/partners/anson.png", width: 115, height: 51 },
  { name: "atrix", src: "/images/na200/partners/atrix.png", width: 178, height: 88 },
  { name: "Simplex", src: "/images/na200/partners/simplex.png", width: 288, height: 128 },
  { name: "Orena", src: "/images/na200/partners/orena.png", width: 375, height: 100 },
  { name: "Notifier by Honeywell", src: "/images/na200/partners/notifier.png", width: 474, height: 154 },
  { name: "Solis", src: "/images/na200/partners/solis.png", width: 166, height: 60 },
  { name: "LUTIAN", src: "/images/na200/partners/lutian.png", width: 1607, height: 444 },
  { name: "ERA Solar", src: "/images/na200/partners/era-solar.png", width: 1279, height: 442 },
];

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <Image src={logoSrc} alt="NA200 Enterprises" width={220} height={110} className="footer-logo" unoptimized />
          <p className="footer-intro">Design, build, engineering, structural, architectural, fire protection, telecommunication, and security solutions.</p>
        </div>
        <div>
          <p className="footer-kicker">Explore</p>
          <div className="footer-links">
            {navItems.slice(1).map((item) => <a key={item.href} href={`/${item.href}`}>{item.label}</a>)}
          </div>
        </div>
        <div>
          <p className="footer-kicker">Contact</p>
          <a href="mailto:norman_aparis@yahoo.com">norman_aparis@yahoo.com</a>
          <a href="tel:09062472464">0906 247 2464</a>
          <a href="tel:09080800022">0908 080 0022</a>
          <a href="tel:09334983174">0933 498 3174</a>
        </div>
        <div>
          <p className="footer-kicker">Visit</p>
          <address>#17 EDSA Cor. Pantaleon Ext.<br />Brgy. Ilaya, Barangka<br />Mandaluyong City</address>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© NA200 Enterprises</span>
        <span>Built for better project conversations.</span>
      </div>
    </footer>
  );
}

export function PageFrame({ children }: { children: ReactNode }) {
  return <><SiteHeader />{children}<SiteFooter /></>;
}

export function SectionHeading({ title, text, dark = false, as = "h2" }: { title: string; text?: string; dark?: boolean; as?: "h1" | "h2" }) {
  const Heading = as;
  return <div className={`section-heading ${dark ? "on-dark" : ""}`}>
    <Heading>{title}</Heading>
    {text && <p>{text}</p>}
  </div>;
}

export function ServiceCards({ limit }: { limit?: number } = {}) {
  const list = typeof limit === "number" ? services.slice(0, limit) : services;
  return <div className="service-list">
    {list.map((service) => <article className="service-row" key={service.number}>
      <div className="service-thumb"><Image src={service.image} alt={`${service.title} work by NA200 Enterprises`} fill sizes="(max-width: 580px) 100vw, (max-width: 900px) 50vw, 33vw" /></div>
      <h3>{service.title}</h3>
      <p>{service.text}</p>
    </article>)}
  </div>;
}

export function PartnerLogos() {
  return <section className="section partners-section" aria-labelledby="partners-title">
    <div className="container partners-layout">
      <div className="partners-copy">
        <h2 id="partners-title">Our Partners</h2>
        <p>Technology and systems partners listed in the NA200 company profile.</p>
      </div>
      <div className="partners-logo-grid" aria-label="NA200 Enterprises partners">
        {partnerLogos.map((partner) => <div className="partner-logo" key={partner.name}>
            <Image
              src={partner.src}
              alt={`${partner.name} partner logo`}
              width={partner.width}
              height={partner.height}
              sizes="(max-width: 580px) 38vw, 140px"
              quality={100}
              unoptimized
            />
        </div>)}
      </div>
    </div>
  </section>;
}

export function HomePage() {
  return <PageFrame>
    <main>
      <section id="home" className="hero">
        <div className="hero-media"><Image src="/images/na200/projects/project-03-hd.webp" alt="NA200 Enterprises housing and land development project" fill priority sizes="100vw" /></div>
        <div className="container hero-content">
          <div className="hero-panel">
            <h1><span className="hero-title-primary">ONE STOP SHOP</span><span className="hero-title-secondary">FOR DESIGN, BUILD &amp; ENGINEERING</span></h1>
            <p>Design &amp; Build · Engineering · Structural · Architectural · Telecommunication Tower Erection · Fire Protection / FDAS · Plumbing / AFSS · Electrical · CCTV · Renewable Energy / Solar Systems · Kitchen Fire Suppression · Elevator Installation · Scaffolding Erection</p>
            <div className="hero-actions"><a className="button button-light" href="#contact">Contact us</a><a className="button button-hero-outline" href="#projects">View projects</a></div>
          </div>
        </div>
      </section>

      <div className="container page-rule"><span>NA200 ENTERPRISES</span><span>DESIGN & BUILD / ENGINEERING / STRUCTURAL / ARCHITECTURAL</span></div>

      <PartnerLogos />

      <section id="about" className="section about-preview">
        <div className="container about-editorial">
          <div className="about-overview">
            <h2>About Us</h2>
            <p>NA200 Enterprises brings together design, build, engineering, structural, architectural, fire protection, telecommunication, and security solutions.</p>
            <Link className="button button-outline" href="/about">Learn more</Link>
          </div>
          <div className="about-statement"><p className="large-quote">“We aim to locally support and represent leading security solutions, fire protection, telecommunication and technology system manufacturers, together with structural and civil work innovations in the world.”</p></div>
        </div>
        <div className="container mission-vision" aria-label="Mission and vision">
          <article className="mission-vision-item">
            <h3>Mission</h3>
            <p>To promote the best and affordable security safety for fire protection and telecommunication systems, as well as cabling systems, structural and civil works through the most recent technologies available in the world today.</p>
          </article>
          <article className="mission-vision-item">
            <h3>Vision</h3>
            <p>We aim to locally support and represent leading security solutions, fire protection, telecommunication and technology system manufacturers, together with structural and civil work innovations in the world.</p>
          </article>
        </div>
      </section>

      <section id="services" className="section section-dark services-section"><div className="container"><SectionHeading title="SERVICES" text="One stop shop." dark /><ServiceCards /></div></section>

      <section className="image-feature image-feature-integrated" aria-labelledby="integrated-systems-title">
        <div className="image-feature-media"><Image src="/images/na200/pdf/integrated-systems-hd.webp" alt="Technician installing a security camera" fill sizes="100vw" /></div>
        <div className="container image-feature-content">
          <div className="image-feature-copy">
            <h2 id="integrated-systems-title">Integrated systems for complex projects</h2>
            <p>NA200 Enterprises provides integrated security, telecommunications, fire protection, and technology systems that work together for complex project environments.</p>
            <a className="button button-red" href="#contact">Contact NA200</a>
          </div>
        </div>
      </section>

      <section id="projects" className="section projects-preview"><div className="container"><div className="section-heading-row"><SectionHeading title="PROJECTS" text="Explore every project category and its full Wix gallery." /></div><ProjectGallery /></div></section>

      <section className="image-feature image-feature-projects" aria-labelledby="project-experience-title">
        <div className="image-feature-media"><Image src="/images/na200/pdf/tower-erection-experience-hd.webp" alt="Telecommunication tower erection work" fill sizes="100vw" /></div>
        <div className="container image-feature-content">
          <div className="image-feature-copy">
            <h2 id="project-experience-title">Selected project experience</h2>
            <p className="image-feature-subtitle">Telecommunication / Tower Erection</p>
            <p>A selection of tower erection and telecommunication work documented in the NA200 company profile.</p>
            <a className="button button-hero-outline" href="#contact">Contact NA200</a>
          </div>
        </div>
      </section>

      <section id="contact" className="section contact-section"><div className="container contact-grid"><div className="contact-details"><h2>CONTACT US!</h2><p>Do you have a project in mind? Get in touch today and let our licensed experts help get the job done right!</p><p className="contact-note">For job application, kindly submit a cover letter together with your C.V. to this email.</p><a className="contact-email" href="mailto:norman_aparis@yahoo.com">norman_aparis@yahoo.com</a><div className="contact-list"><a href="tel:09062472464">0906 247 2464</a><a href="tel:09080800022">0908 080 0022</a><a href="tel:09334983174">0933 498 3174</a><address>#17 EDSA Cor. Pantaleon Ext.<br />Brgy. Ilaya, Barangka<br />Mandaluyong City</address></div></div><ContactForm /></div></section>
    </main>
  </PageFrame>;
}

