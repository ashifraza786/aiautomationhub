import { useMemo, useState } from "react";
import { Link } from "wouter";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Bot,
  Database,
  Globe,
  Search,
  Workflow,
} from "lucide-react";
import { motion } from "framer-motion";

import ProjectCard from "@/components/work/ProjectCard";
import { featuredProjects, projectData } from "@/data/projectData";

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

const featuredCaseStudies = [
  {
    number: "01",
    title: "ERP Management System",
    category: "Business Systems",
    description:
      "Explore a business management system focused on organizing operational workflows and business information.",
    href: "/work/erp-management-system",
    image: "/images/erp-system.png",
    tags: ["ERP", "Business Operations", "Software"],
    concept: false,
  },
  {
    number: "02",
    title: "Business Website & Digital Store",
    category: "Web Development",
    description:
      "Explore a digital experience designed around business presence, website usability, and customer journeys.",
    href: "/work/business-website-digital-store",
    image: "/images/bussiness-system.png",
    tags: ["Website", "Digital Experience", "Web"],
    concept: false,
  },
  {
    number: "03",
    title: "AI Automation Workflow",
    category: "AI & Automation",
    description:
      "An illustrative concept for connecting AI-assisted tasks, business rules, and everyday tools in one workflow.",
    href: "/work/ai-automation-case-study",
    image: "/images/ai-automation.png",
    tags: ["AI", "Automation", "Integrations"],
    concept: true,
  },
];

export default function Work() {
  const [activeCategory, setActiveCategory] = useState<Category>("All Work");
  const [searchQuery, setSearchQuery] = useState("");
  const projects = useMemo(() => {
    if (activeCategory === "All Work") {
      return projectData;
    }

    return projectData.filter((project) => project.category === activeCategory);
  }, [activeCategory]);
  const filteredProjects = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    if (!query) return projects;

    return projects.filter((project) =>
      [
        project.title,
        project.shortTitle,
        project.description,
        project.category,
        ...project.tags,
      ]
        .filter(Boolean)
        .some((value) => value!.toLowerCase().includes(query)),
    );
  }, [projects, searchQuery]);
  return (
    <main className="min-h-screen bg-background pb-24 pt-36 text-foreground">
      {/* HERO */}
      <section className="mx-auto max-w-[1536px] px-5 pt-8 sm:px-8 lg:px-12">
        <div className="flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-5xl">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Case Studies
            </p>

            <h1 className="mt-5 text-4xl font-bold leading-[1.08] tracking-[-0.04em] text-foreground sm:text-5xl lg:text-7xl">
              Every system we&apos;ve shipped.
            </h1>
          </div>

          <label className="relative block w-full shrink-0 lg:mb-1 lg:max-w-[355px]">
            <span className="sr-only">Search case studies</span>
            <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
            <input
              type="search"
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              placeholder="Search case studies"
              className="h-[58px] w-full rounded-xl border border-border bg-surface pl-12 pr-4 text-base text-foreground outline-none transition placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20"
            />
          </label>
        </div>
      </section>

      {/* FEATURED CASE STUDIES */}
      <section
        id="featured-case-studies"
        className="container mx-auto mt-16 max-w-[1280px] scroll-mt-32 px-5 md:mt-20 md:px-7 lg:px-8"
      >
        <div className="mb-9 max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-primary">
            Featured Work
          </p>

          <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
            Explore our case studies
          </h2>

          <p className="mt-3 text-sm leading-6 text-muted-foreground sm:text-base">
            Take a closer look at business systems, digital experiences, and
            automation concepts.
          </p>
        </div>

        <div className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-2 lg:gap-8">
          {featuredProjects.map((study, index) => {
            return (
              <motion.article
                key={study.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.08,
                }}
                className={[index === 2 ? "lg:col-span-2" : ""].join(" ")}
              >
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-primary/[0.07] blur-3xl transition group-hover:bg-primary/[0.12]"
                />

                <div className="relative mb-2">
                  <div className="relative w-full aspect-[16/9] min-h-[220px] overflow-hidden rounded-xl border border-border bg-background">
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_45%,hsl(var(--primary)/0.18),transparent_65%)]"
                    />

                    <div
                      aria-hidden="true"
                      className="absolute inset-0 opacity-30 [background-image:linear-gradient(hsl(var(--border)/0.45)_1px,transparent_1px),linear-gradient(90deg,hsl(var(--border)/0.45)_1px,transparent_1px)] [background-size:32px_32px]"
                    />

                    <img
                      src={study.image}
                      alt={`${study.title} conceptual preview`}
                      loading="lazy"
                      className="absolute inset-0 block h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"
                    />

                    <span className="absolute right-3 top-3 rounded-full border border-white/15 bg-black/65 px-3 py-1.5 font-mono text-xs text-white backdrop-blur">
                      {study.number}
                    </span>
                  </div>
                </div>
                <div className="relative mt-7 flex flex-wrap items-center gap-2">
                  <span className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground">
                    {study.category}
                  </span>

                  {study.concept && (
                    <span className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                      Concept Project
                    </span>
                  )}
                </div>

                <h3 className="relative mt-4 text-xl font-semibold tracking-tight sm:text-2xl">
                  {study.title}
                </h3>

                <p className="relative mt-3 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">
                  {study.description}
                </p>

                <div className="relative mt-6 flex flex-wrap gap-2">
                  {study.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-lg bg-background px-3 py-1.5 text-xs text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="relative mt-8 border-t border-border pt-5">
                  <Link
                    href={study.href || `/work/${study.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition hover:gap-3"
                  >
                    Explore Case Study
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
              </motion.article>
            );
          })}
        </div>
      </section>

      {/* ALL PROJECTS AND FILTERS */}
      <section
        id="project-list"
        className="container mx-auto mt-20 max-w-[1280px] scroll-mt-32 px-5 md:mt-24 md:px-7 lg:px-8"
      >
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-primary">
              The Portfolio
            </p>

            <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
              All projects
            </h2>

            <p className="mt-3 max-w-xl text-sm leading-6 text-muted-foreground sm:text-base">
              Filter projects by type to find work relevant to you.
            </p>
          </div>

          <p className="text-sm text-muted-foreground">
            <span className="font-semibold text-foreground">
              {filteredProjects.length}
            </span>{" "}
            {filteredProjects.length === 1 ? "project" : "projects"}
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

        {filteredProjects.length > 0 ? (
          <div className="mt-6 space-y-6">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.slug} project={project} index={index} />
            ))}
          </div>
        ) : (
          <div className="mt-6 rounded-2xl border border-border bg-surface px-6 py-14 text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-background">
              <Bot className="h-5 w-5 text-primary" />
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

      {/* CONTACT CTA */}
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
                Let&apos;s build something useful.
              </h2>

              <p className="mt-3 text-sm leading-6 text-muted-foreground sm:text-base">
                Tell us what you want to build, improve, or automate.
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
