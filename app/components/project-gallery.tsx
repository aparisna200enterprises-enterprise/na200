import Image from "next/image";
import Link from "next/link";
import { projects } from "../data/projects";

export function ProjectGallery() {
  const visibleProjects = projects;

  return <>
    <div className="project-grid">
      {visibleProjects.map((project, index) => <Link className={`project-card project-card-${(index % 4) + 1}`} data-reveal href={`/projects/${project.slug}`} key={project.slug} aria-label={`View ${project.title} project gallery`}>
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
