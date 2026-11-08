import type { Metadata } from "next";
import Link from "next/link";
import { PageFrame, SectionHeading, ServiceCards } from "../components/site";

export const metadata: Metadata = {
  title: "Services",
  description: "Explore the full NA200 Enterprises service offering, including design and build, engineering, structural, architectural, fire protection, tower erection, plumbing, electrical, CCTV, renewable energy, kitchen fire suppression, elevator installation, and scaffolding erection.",
};

export default function ServicesPage() {
  return <PageFrame>
    <main>
      <section className="page-intro">
        <div className="container">
          <SectionHeading as="h1" title="SERVICES" text="Explore the complete NA200 Enterprises service offering." />
          <Link className="button button-light" href="/">Back to home</Link>
        </div>
      </section>
      <section className="section services-page-section">
        <div className="container">
          <ServiceCards />
          <article className="service-source-detail">
            <h2>Design &amp; Build</h2>
            <p>Build is a method of project delivery in which one entity—the design-build team—works under a single contract with the project owner to provide design and construction services. One entity, one contract, and one unified flow of work from initial concept through completion.</p>
            <p>Design-build is also known as design/construct and single-source responsibility. Across the country and around the world, design-build successfully delivers office buildings, schools, stadiums, transportation, and water infrastructure projects with superior results.</p>
            <p>Design-build is an alternative to design-bid-build. Under the latter approach, design and construction are split: separate entities and separate contracts.</p>
          </article>
        </div>
      </section>
    </main>
  </PageFrame>;
}
