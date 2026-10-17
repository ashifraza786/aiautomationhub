import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Package,
  Receipt,
  ShoppingCart,
  Users,
} from "lucide-react";
import { Link, useLocation } from "wouter";
import ERPShowcase from "@/components/what-we-build/ERPShowcase";

const capabilities = [
  {
    icon: ShoppingCart,
    title: "Sales",
    description: "Represent sales activity and order workflows.",
  },
  {
    icon: Package,
    title: "Inventory",
    description: "Bring stock information into the operational overview.",
  },
  {
    icon: Receipt,
    title: "Billing",
    description: "Include billing within the wider business workflow.",
  },
  {
    icon: Users,
    title: "Human resources",
    description: "Represent employee and team information.",
  },
  {
    icon: BarChart3,
    title: "Reporting",
    description: "Bring operational information into a clearer overview.",
  },
];

const benefits = [
  "Core business functions represented within one system.",
  "A clearer view of sales, inventory and billing workflows.",
  "Team information and reporting included in the same concept.",
  "A structure that can be adapted to actual business requirements.",
];

const reveal = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

const revealTransition = {
  duration: 0.5,
  ease: "easeOut" as const,
};

export default function ERPCaseStudy() {
  const [, setLocation] = useLocation();

  const handleBack = () => {
    if (window.history.length > 1) {
      window.history.back();
    } else {
      setLocation("/work");
    }
  };

  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      {/* 01 — EDITORIAL HERO */}
      <section className="relative px-5 pb-12 pt-8 sm:pb-16 md:px-8 md:pt-10 lg:pb-20">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-32 top-24 h-96 w-96 rounded-full bg-primary/[0.08] blur-[130px]"
        />

        <div className="relative mx-auto max-w-7xl">
          <div className="mb-10 flex flex-wrap items-center justify-between gap-4">
            <button
              type="button"
              onClick={handleBack}
              className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              <ArrowLeft size={16} />
              Back to work
            </button>

            <nav
              aria-label="Breadcrumb"
              className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground sm:text-sm"
            >
              <Link href="/" className="transition-colors hover:text-primary">
                Home
              </Link>
              <span>/</span>
              <Link
                href="/work"
                className="transition-colors hover:text-primary"
              >
                Work
              </Link>
              <span>/</span>
              <span className="text-foreground">ERP Management System</span>
            </nav>
          </div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={reveal}
            transition={revealTransition}
            className="max-w-5xl"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              ERP · Business Systems · Workflow Design
            </p>

            <h1 className="mt-6 max-w-5xl text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              One connected system for{" "}
              <span className="text-primary">business operations.</span>
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-7 text-secondary-foreground sm:text-lg sm:leading-8">
              An ERP concept exploring how sales, inventory, billing, human
              resources and reporting can come together in one coordinated
              business overview.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-medium uppercase tracking-[0.12em] text-muted-foreground sm:text-sm">
              <span>Concept / Prototype</span>
              <span aria-hidden="true" className="text-primary">
                •
              </span>
              <span>5 business functions</span>
              <span aria-hidden="true" className="text-primary">
                •
              </span>
              <span>Connected workflows</span>
            </div>
          </motion.div>

          {/* Keep the existing showcase and its animation unchanged. */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="mt-10 min-w-0 sm:mt-14 lg:mt-16"
          >
            <ERPShowcase />
          </motion.div>

          <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-b border-border pb-5 text-xs text-muted-foreground sm:text-sm">
            <span>ERP Management System</span>
            <span>Sales · Inventory · Billing · HR · Reporting</span>
          </div>
        </div>
      </section>

      {/* 02 — CHALLENGE */}
      <section
        id="challenge"
        className="scroll-mt-32 border-t border-border px-5 py-14 sm:py-16 md:px-8 lg:py-20"
      >
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-[0.9fr_1.1fr] md:gap-16 lg:gap-24">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={reveal}
            viewport={{ once: true, amount: 0.15 }}
            transition={revealTransition}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              01 / The Challenge
            </p>

            <h2 className="mt-5 max-w-xl text-3xl font-semibold leading-tight tracking-tight sm:text-4xl md:text-5xl">
              Business operations need a connected view.
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={reveal}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ ...revealTransition, delay: 0.06 }}
            className="space-y-5 text-base leading-7 text-secondary-foreground sm:text-lg sm:leading-8"
          >
            <p>
              Sales, stock, billing, team information and reporting each
              represent a different part of a business. When these areas are
              viewed separately, it can be harder to understand how information
              relates across everyday operations.
            </p>

            <p>
              The design challenge is to bring these functions into one
              understandable overview without making the experience feel
              complicated or crowded.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 03 — SOLUTION */}
      <section className="border-t border-border bg-surface/30 px-5 py-14 sm:py-16 md:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={reveal}
            viewport={{ once: true, amount: 0.15 }}
            transition={revealTransition}
            className="max-w-4xl"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              02 / The Solution
            </p>

            <h2 className="mt-5 max-w-3xl text-3xl font-semibold leading-tight tracking-tight sm:text-4xl md:text-5xl">
              Different business functions. One shared overview.
            </h2>

            <p className="mt-6 max-w-3xl text-base leading-7 text-secondary-foreground sm:text-lg sm:leading-8">
              The ERP concept presents five essential operational areas
              together. Instead of treating each function as a separate
              destination, the design gives them a consistent visual structure
              and shows how they can relate within a wider business system.
              Actual integrations and automated workflows would depend on
              implementation requirements.
            </p>
          </motion.div>

          <div className="mt-10 grid gap-x-8 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.article
                  key={item.title}
                  initial="hidden"
                  whileInView="visible"
                  variants={reveal}
                  viewport={{ once: true, amount: 0.12 }}
                  transition={{
                    ...revealTransition,
                    delay: index * 0.04,
                  }}
                  className="border-t border-border py-5 sm:py-6"
                >
                  <div className="flex items-start justify-between gap-4">
                    <Icon
                      size={21}
                      strokeWidth={1.6}
                      className="text-primary"
                    />
                    <span className="font-mono text-xs text-muted-foreground">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="mt-5 text-lg font-semibold tracking-tight">
                    {item.title}
                  </h3>

                  <p className="mt-2 max-w-sm text-sm leading-6 text-secondary-foreground">
                    {item.description}
                  </p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Large ERP UI Showcase */}
      <section className="px-5 py-12 md:px-8 md:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 max-w-3xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-primary">
              Inside the system
            </p>

            <h2 className="text-3xl font-semibold leading-tight tracking-tight text-foreground md:text-5xl">
              A clearer view of everyday operations.
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground md:text-lg">
              Explore how sales, inventory, billing and reporting can come
              together in one connected business interface.
            </p>
          </div>

          <figure className="overflow-hidden rounded-xl border border-border bg-surface">
            <img
              src="/images/erp-system.png"
              alt="ERP dashboard interface showing connected business operations"
              className="block h-auto w-full object-contain"
              loading="lazy"
            />
          </figure>
        </div>
      </section>

      {/* 04 — WHY IT WORKS */}
      <section className="border-t border-border px-5 py-14 sm:py-16 md:px-8 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[0.9fr_1.1fr] md:gap-16 lg:gap-24">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={reveal}
            viewport={{ once: true, amount: 0.15 }}
            transition={revealTransition}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              03 / Intended Benefits
            </p>

            <h2 className="mt-5 max-w-xl text-3xl font-semibold leading-tight tracking-tight sm:text-4xl md:text-5xl">
              Designed to make the bigger picture easier to see.
            </h2>
          </motion.div>

          <div>
            <div className="divide-y divide-border border-t border-border">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  initial="hidden"
                  whileInView="visible"
                  variants={reveal}
                  viewport={{ once: true, amount: 0.12 }}
                  transition={{
                    ...revealTransition,
                    delay: index * 0.04,
                  }}
                  className="grid grid-cols-[36px_1fr] gap-3 py-5 sm:gap-5"
                >
                  <span className="pt-1 font-mono text-xs text-primary">
                    0{index + 1}
                  </span>

                  <p className="text-base leading-7 text-secondary-foreground sm:text-lg">
                    {benefit}
                  </p>
                </motion.div>
              ))}
            </div>

            <p className="mt-6 text-sm leading-6 text-muted-foreground">
              These are intended design benefits of the concept, not verified
              results from a deployed ERP implementation.
            </p>
          </div>
        </div>
      </section>

      {/* 05 — FINAL CTA */}
      <section className="border-t border-border px-5 py-16 sm:py-20 md:px-8 lg:py-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={reveal}
          viewport={{ once: true, amount: 0.15 }}
          transition={revealTransition}
          className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 sm:flex-row sm:items-end"
        >
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Have a project in mind?
            </p>

            <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl md:text-5xl">
              Let’s build a system around your business.
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-7 text-secondary-foreground">
              Explore a solution shaped around your workflows, operational needs
              and business goals.
            </p>
          </div>

          <div className="flex shrink-0 flex-wrap gap-3">
            <a
              href="/#contact"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              Discuss your project
              <ArrowRight size={16} />
            </a>

            <Link
              href="/work"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-border px-5 py-3 text-sm font-semibold transition-colors hover:border-primary/50 hover:text-primary"
            >
              All projects
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
