"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FormEvent, ReactNode, useEffect, useState } from "react";
import { projects } from "../data/projects";
import { services } from "../data/services";

const navItems = [
  { href: "#home", id: "home", label: "Home" },
  { href: "#about", id: "about", label: "About" },
  { href: "#services", id: "services", label: "Services" },
  { href: "#projects", id: "projects", label: "Projects" },
  { href: "#contact", id: "contact", label: "Contact" },
];

const logoSrc = "/images/na200/logo-no-line-hd.png";

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
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const routeSection = pathname === "/about"
    ? "about"
    : pathname === "/services"
      ? "services"
      : pathname.startsWith("/projects")
        ? "projects"
        : "home";
  const [activeScrollSection, setActiveScrollSection] = useState("home");
  const activeSection = pathname === "/" ? activeScrollSection : routeSection;

  useEffect(() => {
    if (pathname !== "/") {
      return;
    }

    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter((section): section is HTMLElement => section !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]) {
          setActiveScrollSection(visible[0].target.id);
        }
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: [0, 0.2, 0.5, 1] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [pathname, routeSection]);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link className="brand" href="/" aria-label="NA200 Enterprises home" onClick={() => setOpen(false)}>
          <Image src={logoSrc} alt="NA200 Enterprises" width={240} height={120} priority unoptimized />
        </Link>
        <button className="menu-toggle" type="button" aria-expanded={open} aria-controls="main-navigation" aria-label="Toggle navigation" onClick={() => setOpen((current) => !current)}>
          <span />
          <span />
        </button>
        <nav id="main-navigation" className={`main-nav ${open ? "is-open" : ""}`} aria-label="Main navigation">
          {navItems.map((item) => (
            <a key={item.href} className={`${item.id === "contact" ? "nav-cta" : ""} ${activeSection === item.id ? "active" : ""}`} aria-current={activeSection === item.id ? "page" : undefined} href={pathname === "/" ? item.href : `/${item.href}`} onClick={() => setOpen(false)}>{item.label}</a>
          ))}
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter() {
  const pathname = usePathname();

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
            {navItems.slice(1).map((item) => <a key={item.href} href={pathname === "/" ? item.href : `/${item.href}`}>{item.label}</a>)}
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
      <div className="service-thumb"><Image src={service.image} alt={`${service.title} work by NA200 Enterprises`} fill sizes="(max-width: 700px) 100vw, 50vw" /></div>
      <h3>{service.title}</h3>
      <p>{service.text}</p>
    </article>)}
  </div>;
}

export function ProjectGallery({ preview = false }: { preview?: boolean }) {
  const [filter, setFilter] = useState("All");
  const filters = ["All", "Scaffolding", "Fitout", "Housing", "Fire Protection", "Electrical", "Tower", "CCTV", "Waterproofing"];
  const visibleProjects = preview ? projects : projects.filter((project) => filter === "All" || project.category === filter);

  return <>
    {!preview && <div className="project-filters" role="group" aria-label="Filter projects">
      {filters.map((item) => <button key={item} type="button" className={filter === item ? "active" : ""} onClick={() => setFilter(item)}>{item}</button>)}
    </div>}
    <div className="project-grid">
      {visibleProjects.map((project, index) => <Link className={`project-card project-card-${(index % 4) + 1}`} href={`/projects/${project.slug}`} key={project.slug} aria-label={`View ${project.title} project gallery`}>
        <div className="project-image">
          <Image src={project.image} alt={project.title} fill sizes="(max-width: 768px) 100vw, 33vw" />
          <div className="project-caption">
            <span>{project.category}</span>
            <h3>{project.title}</h3>
            <span className="project-card-cta">View gallery</span>
          </div>
        </div>
      </Link>)}
    </div>
  </>;
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

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "fallback" | "error">("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const payload = Object.fromEntries(data.entries());
    setStatus("sending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = await response.json() as { ok?: boolean; fallback?: boolean };

      if (result.fallback) {
        const subject = encodeURIComponent(`Project inquiry from ${data.get("name") || "website visitor"}`);
        const body = encodeURIComponent(`Name: ${data.get("name")}\nEmail: ${data.get("email")}\nPhone: ${data.get("phone")}\nAddress: ${data.get("address")}\nSubject: ${data.get("subject")}\n\nProject details:\n${data.get("message")}`);
        window.location.href = `mailto:norman_aparis@yahoo.com?subject=${subject}&body=${body}`;
        setStatus("fallback");
        return;
      }

      if (!response.ok || !result.ok) {
        throw new Error("Contact request failed");
      }

      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return <form className="contact-form" onSubmit={handleSubmit}>
    <input className="contact-honeypot" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" />
    <div className="form-row">
      <label><span>Name</span><input name="name" required placeholder="Your name" /></label>
      <label><span>Email</span><input name="email" type="email" required placeholder="you@example.com" /></label>
    </div>
    <label><span>Phone</span><input name="phone" placeholder="Your contact number" /></label>
    <label><span>Address</span><input name="address" placeholder="Your address" /></label>
    <label><span>Subject</span><input name="subject" placeholder="Project inquiry subject" /></label>
    <label><span>Tell us about your project</span><textarea name="message" required rows={5} placeholder="A short description is enough to get started." /></label>
    <button className="button button-red" type="submit" disabled={status === "sending"}>{status === "sending" ? "Sending..." : "Send inquiry"}</button>
    {status === "success" && <p className="form-status form-status-success" aria-live="polite">Thank you. Your inquiry has been sent.</p>}
    {status === "fallback" && <p className="form-status" aria-live="polite">Your email app should open with the inquiry prepared.</p>}
    {status === "error" && <p className="form-status form-status-error" aria-live="polite">We could not send the form. Please email norman_aparis@yahoo.com directly.</p>}
  </form>;
}

export function HomePage() {
  return <PageFrame>
    <main>
      <section id="home" className="hero">
        <div className="hero-media"><Image src="/images/na200/projects/project-03-hd.png" alt="NA200 Enterprises housing and land development project" fill priority sizes="100vw" /></div>
        <div className="container hero-content">
          <div className="hero-panel">
            <h1><span className="hero-title-primary">ONE STOP SHOP</span><span className="hero-title-secondary">FOR DESIGN, BUILD &amp; ENGINEERING</span></h1>
            <p>Design &amp; Build · Engineering · Structural · Architectural · Telecommunication Tower Erection · FDAS · Sprinkler System · Plumbing · Electrical · CCTV</p>
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
        <div className="image-feature-media"><Image src="/images/na200/pdf/integrated-systems-hd.jpg" alt="Technician installing a security camera" fill sizes="100vw" /></div>
        <div className="container image-feature-content">
          <div className="image-feature-copy">
            <h2 id="integrated-systems-title">Integrated systems for complex projects</h2>
            <p>NA200 Enterprises provides integrated security, telecommunications, fire protection, and technology systems that work together for complex project environments.</p>
            <a className="button button-red" href="#contact">Contact NA200</a>
          </div>
        </div>
      </section>

      <section id="projects" className="section projects-preview"><div className="container"><div className="section-heading-row"><SectionHeading title="PROJECTS" text="Explore every project category and its full Wix gallery." /></div><ProjectGallery preview /></div></section>

      <section className="image-feature image-feature-projects" aria-labelledby="project-experience-title">
        <div className="image-feature-media"><Image src="/images/na200/pdf/tower-erection-experience-hd.png" alt="Telecommunication tower erection work" fill sizes="100vw" /></div>
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

