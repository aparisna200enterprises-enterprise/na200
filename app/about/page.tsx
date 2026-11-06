import type { Metadata } from "next";
import Link from "next/link";
import { PageFrame } from "../components/site";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about NA200 Enterprises, its history, technical expertise, company advantage, mission, vision, and core values in the Philippines.",
};

const coreValues = [
  { title: "Integrity", text: "Our business conduct includes the highest level of honesty, ethics, and moral correctness. We will not compromise our employees, customers, or company." },
  { title: "Teamwork", text: "Our culture of teamwork allows us to work together within the company and with our customers to deliver better solutions and collectively accomplish our goals." },
  { title: "Transparency", text: "Our actions must match our words. Each day we strive to earn our reputation rather than simply manage it, operating with integrity and authenticity." },
  { title: "Leadership", text: "Each employee is expected to give their best, strive constantly for quality, demonstrate professionalism, and lead by example." },
  { title: "Trust", text: "Relations within the company are based on trust, the cornerstone of autonomy, frankness, and authenticity. Each person is responsible for establishing and extending trust." },
  { title: "Quality", text: "We take pride in providing high-value products and services that we stand behind, supporting customer satisfaction, profitability, and the future of our employees and our growth." },
];

export default function AboutPage() {
  return <PageFrame>
    <main>
      <section className="page-intro" data-reveal>
        <div className="container">
          <h1>About Us</h1>
          <p className="about-page-lead">NA200 Enterprises is a growing company serving clients in the Philippines through security, fire protection, telecommunication, civil, structural, and technology solutions.</p>
          <Link className="button button-light" href="/">Back to home</Link>
        </div>
      </section>

      <section className="section about-page-section" data-reveal>
        <div className="container">
          <section className="about-page-block" data-reveal>
            <h2>Company Profile</h2>
            <div className="about-page-copy">
              <p>NA200 Enterprises is a growing company consisting of competent and highly trained professional consultants, industry practitioners, and IT-certified engineers experienced in rendering business consulting services in major industries in the Philippines.</p>
              <p>We chose #17 EDSA Cor. Pantaleon St., Mandaluyong City as our office so it is readily accessible to our ever-growing number of customers. Our expertise is not limited to specific applications; it extends to our customers&apos; unique needs and technological advancements.</p>
              <p>We specialize in surveillance and fire protection systems, telecommunication systems, and civil and structural works. This gives us the capacity to deliver world-class operations through leading-edge automated business application technology to clients in the Philippines. Whatever your project might be, our team of professionals is ready to bring your plans to life.</p>
            </div>
          </section>

          <section className="about-page-block" data-reveal>
            <h2>Early Beginning</h2>
            <div className="about-page-copy">
              <p>NA200 Enterprises pioneered as a major provider of sales and installation for security systems, communication gadgets, CCTV, and other personal protection devices in the Philippines.</p>
              <p>We were established in August 2001 and, within a span of four years, were awarded Most Outstanding CCTV Provider by the Philippine Marketing Excellence Awards and the Asian Institute of Management and Entrepreneurship.</p>
              <p>Today, we have expanded our services to include fire protection systems and telecommunication systems. This makes us a one-stop shop for fire, telecommunication, and security systems, as well as civil and structural works. This adds to our existing specialization in digital video surveillance systems and CCTV equipment installation.</p>
            </div>
          </section>

          <section className="about-page-block" data-reveal>
            <h2>Company Advantage</h2>
            <div className="about-page-copy">
              <p>NA200 Enterprises is known in the industry as an expert specialist in advanced digital video surveillance systems, telecommunication, fire protection, and civil and structural works.</p>
              <p>Our products are carefully sourced directly from manufacturers and customized according to our customers&apos; needs, enabling us to provide highly competitive product rates.</p>
              <p>We provide excellent pre-sales and post-sales support to corporate clients. Our sales representatives are not just order-takers; they assist dealers in choosing the right fire protection, telecommunication, and CCTV systems, including cameras, lenses, and accessories.</p>
            </div>
          </section>

          <section className="about-page-block" data-reveal>
            <h2>Our Mission</h2>
            <div className="about-page-copy">
              <p>To promote the best and affordable security safety for fire protection and telecommunication systems, as well as cabling systems, structural and civil works through the most recent technologies available in the world today.</p>
              <p>To become the customers&apos; most preferred choice by attaining excellence in quality and timely completed value-added projects.</p>
              <p>To provide the highest level of service in the construction industry and security safety while offering superior craftsmanship to every project we handle.</p>
              <p>To continually innovate, develop, and adopt state-of-the-art technology in methods and materials to enhance productivity and cost effectiveness.</p>
              <p>To continually improve the competence of our team and employ diverse, innovative, and result-oriented personnel motivated to deliver excellence.</p>
              <p>To build a safety culture aimed at continually reducing the frequency and severity rate toward achieving zero accidents.</p>
            </div>
          </section>

          <section className="about-page-block" data-reveal>
            <h2>Our Vision</h2>
            <div className="about-page-copy">
              <p>We aim to locally support and represent leading security solutions, fire protection, telecommunication and technology system manufacturers, together with structural and civil work innovations in the world.</p>
            </div>
          </section>

          <section className="about-page-block" data-reveal>
            <h2>Core Values</h2>
            <div className="value-grid">
              {coreValues.map((value) => <article className="value-item" key={value.title}>
                <h3>{value.title}</h3>
                <p>{value.text}</p>
              </article>)}
            </div>
          </section>

          <div className="about-actions">
            <Link className="button button-red" href="/#contact">Contact NA200</Link>
            <Link className="button button-outline" href="/">Back to home</Link>
          </div>
        </div>
      </section>
    </main>
  </PageFrame>;
}
