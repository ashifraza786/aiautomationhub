import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import ProjectCard from "@/components/work/ProjectCard";
import { featuredProjects } from "@/data/projectData";

export default function FeaturedWork() {
  return (
    <section
      id="work"
      className="relative overflow-hidden py-24 md:py-28 lg:py-32"
    >
      {/* Background atmosphere */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/5 blur-3xl"
      />

      <div className="container relative mx-auto max-w-[1280px] px-5 md:px-7 lg:px-8">
        {/* Section intro */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55 }}
          className="max-w-[700px]"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.12em] text-primary">
            Selected Work
          </span>

          <h2 className="mt-4 text-3xl font-bold tracking-[-0.025em] text-foreground md:text-4xl">
            Built to Solve Real Problems.
          </h2>

          <p className="mt-5 text-base leading-7 text-secondary-foreground md:text-[17px] md:leading-7">
            A selection of projects, systems and experiments that show how we
            approach software, AI and business technology.
          </p>
        </motion.div>

        {/* Projects */}
        {featuredProjects.length > 0 && (
          <div className="mt-12 space-y-6 md:mt-14">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={project.slug} project={project} index={index} />
            ))}
          </div>
        )}

        {/* Empty state */}
        {featuredProjects.length === 0 && (
          <div className="mt-12 rounded-2xl border border-border bg-surface p-8 text-center">
            <p className="text-sm text-muted-foreground">
              Selected projects will appear here.
            </p>
          </div>
        )}

        {/* Explore all work */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-10 flex justify-start"
        >
          <a
            href="/work"
            className="group inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-foreground transition-colors duration-200 hover:text-primary"
          >
            Explore All Work
            <ArrowRight
              size={16}
              strokeWidth={1.8}
              className="transition-transform duration-200 group-hover:translate-x-1"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
