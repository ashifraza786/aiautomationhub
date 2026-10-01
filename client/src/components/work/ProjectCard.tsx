import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { ProjectData } from "@/data/projectData";

interface ProjectCardProps {
  project: ProjectData;
  index?: number;
}

export default function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.55,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ y: -4 }}
      className="group relative overflow-hidden rounded-2xl border border-border bg-surface transition-colors duration-300 hover:border-primary/40"
    >
      {/* Top visual area */}
      <div className="relative min-h-[260px] overflow-hidden border-b border-border bg-background">
        {/* Ambient system glow */}
        <div
          aria-hidden="true"
          className="absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
        />

        {/* Abstract system visualization */}
        <div className="absolute inset-0 flex items-center justify-center px-8">
          <div className="relative w-full max-w-md">
            {/* Connection line */}
            <div
              aria-hidden="true"
              className="absolute left-[18%] right-[18%] top-1/2 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"
            />

            <div className="relative flex items-center justify-between">
              {/* Input */}
              <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-border bg-elevated shadow-lg shadow-black/20">
                <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/60" />
              </div>

              {/* Core */}
              <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl border border-primary/40 bg-elevated shadow-xl shadow-primary/10">
                <div className="absolute inset-2 rounded-xl border border-primary/20" />
                <div className="h-3 w-3 rounded-full bg-primary shadow-[0_0_20px_rgba(79,124,255,0.55)]" />
              </div>

              {/* Output */}
              <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-border bg-elevated shadow-lg shadow-black/20">
                <span className="h-2.5 w-2.5 rounded-full bg-mint/70" />
              </div>
            </div>

            {/* Secondary nodes */}
            <div className="absolute -bottom-10 left-1/2 flex -translate-x-1/2 items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-primary/50" />
              <span className="h-1.5 w-1.5 rounded-full bg-primary/30" />
              <span className="h-1.5 w-1.5 rounded-full bg-mint/40" />
            </div>
          </div>
        </div>

        {/* Project number */}
        <div className="absolute left-6 top-6">
          <span className="font-mono text-xs font-medium tracking-[0.16em] text-muted-foreground">
            {project.number}
          </span>
        </div>

        {/* Category */}
        <div className="absolute right-6 top-6">
          <span className="rounded-full border border-border bg-elevated/80 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.1em] text-secondary-foreground backdrop-blur-sm">
            {project.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-7">
        {/* Status */}
        <div className="mb-4 flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
            {project.status}
          </span>
        </div>

        {/* Title */}
        <h3 className="max-w-2xl text-2xl font-semibold tracking-[-0.015em] text-foreground">
          {project.title}
        </h3>

        {/* Description */}
        <p className="mt-4 max-w-2xl text-[15px] leading-7 text-secondary-foreground">
          {project.description}
        </p>

        {/* Problem → System → Technology */}
        <div className="mt-7 grid gap-5 border-t border-border pt-6 sm:grid-cols-3">
          <div>
            <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
              Problem
            </span>
            <p className="mt-2 line-clamp-3 text-sm leading-6 text-secondary-foreground">
              {project.problem}
            </p>
          </div>

          <div>
            <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
              System
            </span>
            <p className="mt-2 line-clamp-3 text-sm leading-6 text-secondary-foreground">
              {project.system}
            </p>
          </div>

          <div>
            <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
              Technology
            </span>
            <p className="mt-2 line-clamp-3 text-sm leading-6 text-secondary-foreground">
              {project.technology}
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-7 flex flex-col gap-5 border-t border-border pt-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-2">
            {project.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="rounded-md border border-border bg-elevated px-2.5 py-1 text-[11px] font-medium text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>

          {project.href && (
            <a
              href={project.href}
              className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-foreground transition-colors duration-200 hover:text-primary"
            >
              View Project
              <ArrowUpRight
                size={16}
                strokeWidth={1.8}
                className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}
