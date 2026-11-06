import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { PageFrame } from "../../components/site";
import { projects } from "../../data/projects";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return { title: "Project not found" };
  }

  return {
    title: project.title,
    description: `${project.title} project gallery from NA200 Enterprises in Mandaluyong City and Metro Manila.`,
  };
}

export default function ProjectDetailPage({ params }: ProjectPageProps) {
  return <PageFrame>
    <Suspense fallback={<ProjectDetailFallback />}>
      <ProjectDetailContent params={params} />
    </Suspense>
  </PageFrame>;
}

function ProjectDetailFallback() {
  return <main>
    <section className="section project-gallery-section" data-reveal>
      <div className="container project-detail-loading">Loading project gallery...</div>
    </section>
  </main>;
}

async function ProjectDetailContent({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return <main>
      <section className="section project-gallery-section" data-reveal>
        <div className="container">
          <Link className="button button-outline project-gallery-back" href="/#projects">Back to home</Link>
          <div className="project-gallery-heading">
            <p className="project-detail-category">{project.category}</p>
            <h1>{project.title}</h1>
            <p>{project.gallery.length} images from the NA200 project gallery.</p>
          </div>
          <div className="project-gallery">
            {project.gallery.map((item, index) => <div className="project-gallery-item-wrap" key={item.image}>
              <div className="project-gallery-item">
                <Image src={item.image} alt={`${project.title}, gallery image ${index + 1}`} fill sizes="(max-width: 700px) 100vw, (max-width: 1000px) 50vw, 33vw" />
              </div>
            </div>)}
          </div>
        </div>
      </section>
    </main>;
}
