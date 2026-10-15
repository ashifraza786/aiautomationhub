import { useMemo, useState } from "react";
import { Link } from "wouter";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

import ProjectCard from "@/components/work/ProjectCard";
import { projectData } from "@/data/projectData";

const categories = [
  "All Work",
  "Client Project",
  "Academic Project",
  "Prototype",
  "Concept",
  "Internal Build",
  "Experimental",
] as const;

type Category = (typeof categories)[number];

export default function Work() {
  const [activeCategory, setActiveCategory] = useState<Category>("All Work");

  const projects = useMemo(() => {
    if (activeCategory === "All Work") {
      return projectData;
    }

    return projectData.filter((project) => project.category === activeCategory);
  }, [activeCategory]);

  return (
    <main className="min-h-screen bg-background pb-24 pt-36 text-foreground">
      {/* Hero */}
      <section className="container mx-auto max-w-[1280px] px-5 md:px-7 lg:px-8">
        <Link
          href="/#work"
          className="mb-10 inline-flex items-center gap-2 text-sm text-muted-foreground transition hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to homepage
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="relative overflow-hidden rounded-3xl border border-border bg-surface px-6 py-12 sm:px-10 sm:py-16 lg:px-14 lg:py-20"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 -top-24 h-80 w-80 rounded-full bg-primary/10 blur-3xl"
          />

          <div className="relative max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-primary">
                Work & Case Studies
              </span>
            </div>

            <h1 className="mt-6 text-4xl font-semibold leading-[1.1] tracking-[-0.05em] sm:text-5xl lg:text-7xl">
              Work built around
              <span className="block text-primary">real problems.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
              Explore our projects across AI, software and business technology.
              Each project is labelled by its actual category and status,
              keeping academic work, prototypes and client projects clearly
              distinguished.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#project-list"
                className="inline-flex min-h-11 items-center gap-2 rounded-xl bg-primary px-5 text-sm font-semibold text-primary-foreground transition hover:-translate-y-0.5"
              >
                Explore Projects
                <ArrowRight className="h-4 w-4" />
              </a>

              <Link
                href="/start-project"
                className="inline-flex min-h-11 items-center gap-2 rounded-xl border border-border bg-background px-5 text-sm font-semibold transition hover:border-primary/40"
              >
                Start a Project
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Projects and filters */}
      <section
        id="project-list"
        className="container mx-auto mt-16 max-w-[1280px] scroll-mt-32 px-5 md:mt-20 md:px-7 lg:px-8"
      >
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-primary">
              The Portfolio
            </p>

            <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
              Explore our work
            </h2>

            <p className="mt-3 max-w-xl text-sm leading-6 text-muted-foreground sm:text-base">
              Filter projects by type to find the work most relevant to you.
            </p>
          </div>

          <p className="text-sm text-muted-foreground">
            <span className="font-semibold text-foreground">
              {projects.length}
            </span>{" "}
            {projects.length === 1 ? "project" : "projects"}
          </p>
        </div>

        <div
          className="mt-8 flex gap-2 overflow-x-auto pb-3"
          aria-label="Filter projects by category"
        >
          {categories.map((category) => {
            const selected = activeCategory === category;

            return (
              <button
                key={category}
                type="button"
                aria-pressed={selected}
                onClick={() => setActiveCategory(category)}
                className={[
                  "shrink-0 rounded-full border px-4 py-2.5 text-xs font-medium transition",
                  selected
                    ? "border-primary/40 bg-primary text-primary-foreground"
                    : "border-border bg-surface text-muted-foreground hover:border-primary/30 hover:text-foreground",
                ].join(" ")}
              >
                {category}
              </button>
            );
          })}
        </div>

        {projects.length > 0 ? (
          <div className="mt-6 space-y-6">
            {projects.map((project, index) => (
              <ProjectCard key={project.slug} project={project} index={index} />
            ))}
          </div>
        ) : (
          <div className="mt-6 rounded-2xl border border-border bg-surface px-6 py-14 text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-background">
              <ArrowRight className="h-5 w-5 text-primary" />
            </div>

            <h3 className="mt-5 text-lg font-semibold">
              No projects in this category yet
            </h3>

            <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-muted-foreground">
              Choose another category to explore the projects currently listed
              in our portfolio.
            </p>

            <button
              type="button"
              onClick={() => setActiveCategory("All Work")}
              className="mt-5 text-sm font-semibold text-primary hover:underline"
            >
              View all work
            </button>
          </div>
        )}
      </section>

      {/* Contact CTA */}
      <section className="container mx-auto mt-20 max-w-[1280px] px-5 md:px-7 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl border border-border bg-surface p-6 sm:p-10">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-16 -top-24 h-64 w-64 rounded-full bg-primary/10 blur-3xl"
          />

          <div className="relative flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">
                Have an idea?
              </p>

              <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
                Let's build something useful.
              </h2>

              <p className="mt-3 text-sm leading-6 text-muted-foreground sm:text-base">
                Tell us what you want to build, improve or automate.
              </p>
            </div>

            <Link
              href="/start-project"
              className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-xl bg-primary px-5 text-sm font-semibold text-primary-foreground transition hover:-translate-y-0.5"
            >
              Discuss a Project
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
