import { ExternalLink, GitFork } from 'lucide-react';
import { projectsData } from '../data/portfolioData';

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-2 text-center text-3xl font-bold sm:text-4xl">
          Projects
        </h2>
        <div className="mx-auto mb-12 mt-2 h-1 w-20 rounded-full bg-gradient-to-r from-primary to-accent" />

        <div className="grid gap-6 sm:grid-cols-2">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="group flex flex-col rounded-2xl border border-text-muted/10 bg-surface-light p-6 transition-all hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5"
            >
              {/* Image placeholder */}
              <div className="mb-5 flex h-48 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-accent/20">
                <span className="text-4xl font-bold text-primary/40">
                  {project.title.charAt(0)}
                </span>
              </div>

              <h3 className="mb-2 text-xl font-semibold group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="mb-4 flex-1 text-text-muted">
                {project.description}
              </p>

              {/* Tech tags */}
              <div className="mb-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-3">
                <a
                  href={project.liveUrl}
                  className="inline-flex items-center gap-1.5 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-primary-dark"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink size={15} />
                  Live
                </a>
                <a
                  href={project.githubUrl}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-text-muted/20 px-4 py-2 text-sm font-medium text-text-muted transition-colors hover:border-primary hover:text-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GitFork size={15} />
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
