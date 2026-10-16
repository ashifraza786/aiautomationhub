import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowDownRight,
  ArrowUpRight,
  Boxes,
  Database,
  Globe2,
  Workflow,
} from "lucide-react";
import { Link } from "wouter";
import type { ProjectData } from "@/data/projectData";

interface ProjectCardProps {
  project: ProjectData;
  index?: number;
}

function ProjectVisual({ project }: { project: ProjectData }) {
  const [imageFailed, setImageFailed] = useState(false);

  const isERP = project.slug === "erp-management-system";
  const isWebsite = project.slug === "business-website-digital-store";
  const isAutomation = project.slug === "ai-automation-case-study";

  const Icon = isERP
    ? Database
    : isWebsite
      ? Globe2
      : isAutomation
        ? Workflow
        : Boxes;

  return (
    <div className="relative isolate aspect-[16/10] w-full overflow-hidden border-b border-border bg-background">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_45%,hsl(var(--primary)/0.15),transparent_65%)]"
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-30 [background-image:linear-gradient(hsl(var(--border)/0.45)_1px,transparent_1px),linear-gradient(90deg,hsl(var(--border)/0.45)_1px,transparent_1px)] [background-size:32px_32px]"
      />

      {project.image && !imageFailed ? (
        <img
          src={project.image}
          alt={`${project.title} conceptual preview`}
          loading="lazy"
          onError={() => {
            console.error("Project image failed to load:", project.image);
            setImageFailed(true);
          }}
          className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.035]"
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center p-6 sm:p-10">
          <div className="w-full max-w-md rounded-2xl border border-border bg-surface/95 p-4 shadow-2xl shadow-black/30 backdrop-blur sm:p-6">
            <div className="flex items-center justify-between border-b border-border pb-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-primary/30 bg-primary/10 text-primary">
                  <Icon size={20} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    {project.shortTitle || project.title}
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Concept preview
                  </p>
                </div>
              </div>
              <span className="h-2 w-2 rounded-full bg-primary shadow-[0_0_12px_rgba(79,124,255,0.8)]" />
            </div>

            <div className="mt-5 grid grid-cols-3 gap-2">
              {[0, 1, 2].map((item) => (
                <div
                  key={item}
                  className="rounded-lg border border-border bg-background/80 p-3"
                >
                  <div className="mb-3 h-1.5 w-8 rounded-full bg-primary/60" />
                  <div className="h-5 rounded bg-primary/10" />
                  <div className="mt-2 h-1 rounded-full bg-muted-foreground/20" />
                </div>
              ))}
            </div>

            <div className="mt-3 flex h-12 items-end gap-2 rounded-lg border border-border bg-background/80 p-3">
              {[35, 55, 42, 72, 60, 88, 68, 100, 78].map((height, item) => (
                <div
                  key={item}
                  className="flex-1 rounded-t-sm bg-primary/70"
                  style={{ height: `${height}%` }}
                />
              ))}
            </div>
          </div>
        </div>
      )}

      <div className="absolute left-4 top-4 rounded-full border border-white/15 bg-black/65 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-white backdrop-blur sm:left-5 sm:top-5">
        {project.status}
      </div>

      <div className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-black/65 text-white backdrop-blur transition-colors group-hover:border-primary group-hover:bg-primary sm:right-5 sm:top-5">
        <ArrowUpRight size={19} />
      </div>
    </div>
  );
}

export default function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  const href = project.href || `/work/${project.slug}`;

  return (
    <motion.article
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{
        duration: 0.5,
        delay: Math.min(index * 0.07, 0.28),
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ y: -4 }}
      className="group relative overflow-hidden rounded-2xl border border-border bg-surface transition-colors duration-300 hover:border-primary/50"
    >
      <Link
        href={href}
        className="block h-full outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary"
        aria-label={`View ${project.title}`}
      >
        <ProjectVisual project={project} />

        <div className="flex h-full flex-col p-5 sm:p-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <span className="inline-flex rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-muted-foreground">
              {project.category}
            </span>

            <span className="font-mono text-xs tracking-[0.18em] text-muted-foreground">
              {project.number.padStart(2, "0")}
            </span>
          </div>

          <h2 className="mt-5 max-w-xl text-xl font-semibold tracking-tight text-foreground transition-colors group-hover:text-primary sm:text-2xl">
            {project.title}
          </h2>

          <p className="mt-3 min-h-[5.25rem] max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">
            {project.description}
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {project.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="rounded-md border border-border/80 bg-background/70 px-2.5 py-1 text-xs text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-7 flex items-center justify-between border-t border-border pt-5">
            <span className="text-sm font-medium text-foreground transition-colors group-hover:text-primary">
              Explore case study
            </span>
            <ArrowDownRight
              size={19}
              className="text-primary transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1"
            />
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
