"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { logoSrc, navItems } from "./navigation";

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
    if (pathname !== "/") return;

    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter((section): section is HTMLElement => section !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]) setActiveScrollSection(visible[0].target.id);
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: [0, 0.2, 0.5, 1] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [pathname]);

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
