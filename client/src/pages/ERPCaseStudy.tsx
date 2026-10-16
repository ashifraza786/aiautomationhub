import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  CheckCircle2,
  ChevronRight,
  Package,
  Receipt,
  ShoppingCart,
  Users,
} from "lucide-react";
import { Link, useLocation } from "wouter";
import ERPShowcase from "@/components/what-we-build/ERPShowcase";

const capabilities = [
  {
    number: "01",
    title: "Sales Management",
    description:
      "Represent sales activity and order workflows within a connected business system.",
    icon: ShoppingCart,
  },
  {
    number: "02",
    title: "Inventory Management",
    description: "Bring stock information into the wider operational workflow.",
    icon: Package,
  },
  {
    number: "03",
    title: "Billing",
    description:
      "Include billing activities in the shared business system overview.",
    icon: Receipt,
  },
  {
    number: "04",
    title: "Human Resources",
    description:
      "Represent employee and team information alongside other business functions.",
    icon: Users,
  },
  {
    number: "05",
    title: "Reporting",
    description:
      "Bring operational information together in a clearer reporting view.",
    icon: BarChart3,
  },
];

const projectFacts = [
  { label: "Project type", value: "Concept / Prototype" },
  { label: "Project focus", value: "Connected business functions" },
  { label: "System areas", value: "5 represented functions" },
];

const solutionPoints = [
  "Core business functions represented in one system",
  "A shared view of connected operational areas",
  "Inventory and billing included in the workflow concept",
  "Reporting represented alongside core business activities",
];

const principles = [
  {
    number: "01",
    title: "Connected operations",
    description:
      "Show how different business functions relate instead of presenting them as isolated activities.",
  },
  {
    number: "02",
    title: "Clear visibility",
    description:
      "Present core functions through a consistent overview that is easier to understand.",
  },
  {
    number: "03",
    title: "Adaptable structure",
    description:
      "Use the concept as a starting point for workflows shaped around actual business needs.",
  },
];

const reveal = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
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
      {/* HERO */}
      <section className="relative px-5 pb-16 pt-24 sm:pb-20 md:px-8 md:pt-28 lg:pb-24">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 top-20 h-80 w-80 rounded-full bg-primary/10 blur-[120px]"
        />

        <div className="relative mx-auto max-w-7xl">
          <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
            <button
              type="button"
              onClick={handleBack}
              className="inline-flex min-h-10 items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              <ArrowLeft size={16} />
              Back to previous page
            </button>

            <nav
              aria-label="Breadcrumb"
              className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground sm:text-sm"
            >
              <Link href="/" className="transition-colors hover:text-primary">
                Home
              </Link>
              <ChevronRight size={14} />
              <Link
                href="/work"
                className="transition-colors hover:text-primary"
              >
                Work
              </Link>
              <ChevronRight size={14} />
              <span className="text-foreground">ERP Management System</span>
            </nav>
          </div>

          <div className="grid items-center gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-14">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={reveal}
              transition={{ duration: 0.55 }}
              className="min-w-0"
            >
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/5 px-3 py-1.5 text-xs font-semibold text-primary">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                Concept / Prototype
              </div>

              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary sm:text-sm">
                ERP · Business Systems · Workflow Design
              </p>

              <h1 className="mt-5 max-w-2xl text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
                One connected system for{" "}
                <span className="text-primary">business operations.</span>
              </h1>

              <p className="mt-6 max-w-xl text-base leading-7 text-secondary-foreground sm:text-lg sm:leading-8">
                An ERP system concept bringing sales, inventory, billing, HR,
                and reporting into one connected operational overview.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {["Sales", "Inventory", "Billing", "HR", "Reports"].map(
                  (item) => (
                    <span
                      key={item}
                      className="rounded-full border border-border px-3 py-1.5 text-xs font-medium text-secondary-foreground"
                    >
                      {item}
                    </span>
                  ),
                )}
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-5">
                <a
                  href="#challenge"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition hover:-translate-y-0.5 hover:opacity-90"
                >
                  Explore the Case Study
                  <ArrowRight size={16} />
                </a>

                <Link
                  href="/work"
                  className="inline-flex min-h-12 items-center gap-2 text-sm font-semibold text-secondary-foreground transition-colors hover:text-primary"
                >
                  All Projects
                  <ArrowUpRight size={16} />
                </Link>
              </div>

              <p className="mt-5 max-w-lg text-xs leading-6 text-muted-foreground">
                This page presents a system concept. Deployment, integrations,
                and business outcomes have not been independently verified.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="min-w-0"
            >
              <ERPShowcase />
            </motion.div>
          </div>
        </div>
      </section>

      {/* PROJECT SNAPSHOT */}
      <section className="border-y border-border bg-surface/40">
        <div className="mx-auto grid max-w-7xl gap-6 px-5 py-7 sm:grid-cols-3 sm:px-8 lg:px-12">
          {projectFacts.map((item, index) => (
            <div
              key={item.label}
              className={
                index > 0
                  ? "border-t border-border pt-5 sm:border-l sm:border-t-0 sm:pl-6 sm:pt-0"
                  : ""
              }
            >
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground">
                {item.label}
              </p>
              <p className="mt-2 text-sm font-semibold sm:text-base">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* KEY CAPABILITIES */}
      <section className="px-5 py-16 sm:py-20 md:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={reveal}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45 }}
            className="max-w-3xl"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              01 / Key Capabilities
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
              Core functions, brought into one view.
            </h2>

            <p className="mt-4 max-w-2xl text-base leading-7 text-secondary-foreground">
              The concept illustrates how essential operational areas can be
              represented within a shared business platform.
            </p>
          </motion.div>

          <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.article
                  key={item.number}
                  initial="hidden"
                  whileInView="visible"
                  variants={reveal}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.4, delay: index * 0.04 }}
                  className="group border-t border-border py-5 transition-colors hover:border-primary/50"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Icon size={20} strokeWidth={1.8} />
                    </div>
                    <span className="font-mono text-xs text-muted-foreground">
                      {item.number}
                    </span>
                  </div>

                  <h3 className="mt-5 text-lg font-semibold">{item.title}</h3>

                  <p className="mt-2 max-w-sm text-sm leading-6 text-secondary-foreground">
                    {item.description}
                  </p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* CHALLENGE */}
      <section
        id="challenge"
        className="scroll-mt-28 border-y border-border bg-surface/40 px-5 py-16 sm:py-20 md:px-8"
      >
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2 md:gap-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={reveal}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45 }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              02 / The Challenge
            </p>

            <h2 className="mt-4 max-w-xl text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
              Business operations need a connected view.
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={reveal}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: 0.06 }}
            className="space-y-4 text-base leading-7 text-secondary-foreground"
          >
            <p>
              Sales, stock, billing, team information, and reporting each
              represent different parts of business operations. When workflows
              are disconnected, it can be harder to see how information moves
              between them.
            </p>

            <p>
              An ERP approach offers a way to represent these functions within
              one coordinated system instead of treating each area in isolation.
            </p>

            <div className="border-l-2 border-primary py-1 pl-4">
              <p className="text-sm font-semibold text-foreground">
                Design objective
              </p>
              <p className="mt-1 text-sm leading-6">
                Make the relationships between core business functions easier to
                understand and evaluate.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SOLUTION */}
      <section className="px-5 py-16 sm:py-20 md:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            03 / The Solution
          </p>

          <div className="mt-4 grid gap-8 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="max-w-xl text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
                One coordinated view of essential business functions.
              </h2>

              <p className="mt-5 max-w-xl text-base leading-7 text-secondary-foreground">
                The ERP showcase represents sales, inventory, billing, HR, and
                reporting together. Specific integrations and automated actions
                would depend on the final implementation scope.
              </p>
            </div>

            <div className="divide-y divide-border border-y border-border">
              {solutionPoints.map((point, index) => (
                <div key={point} className="flex items-start gap-3 py-4">
                  <CheckCircle2
                    size={18}
                    className="mt-0.5 shrink-0 text-primary"
                  />
                  <p className="text-sm leading-6 text-secondary-foreground">
                    {point}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* DESIGN PRINCIPLES */}
      <section className="border-y border-border bg-surface/40 px-5 py-16 sm:py-20 md:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            04 / Design Principles
          </p>

          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
            Designed to make connected operations easier to understand.
          </h2>

          <div className="mt-9 grid gap-7 md:grid-cols-3 md:gap-8">
            {principles.map((item) => (
              <article
                key={item.number}
                className="border-t border-border pt-5"
              >
                <span className="font-mono text-xs text-primary">
                  {item.number}
                </span>
                <h3 className="mt-3 text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-secondary-foreground">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECT SCOPE */}
      <section className="px-5 py-16 sm:py-20 md:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              05 / Project Scope
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
              A concept shaped around business needs.
            </h2>
          </div>

          <div className="max-w-2xl">
            <p className="text-base leading-7 text-secondary-foreground">
              This showcase communicates the intended relationships between the
              represented business functions. It should be treated as a concept
              or prototype unless a deployed implementation is confirmed.
            </p>

            <p className="mt-4 text-base leading-7 text-secondary-foreground">
              Implemented modules, actual integrations, product screenshots, and
              measured outcomes can be added when supporting project evidence is
              available.
            </p>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-5 pb-16 sm:pb-20 md:px-8 md:pb-24">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-2xl border border-border bg-surface px-6 py-10 sm:px-10 sm:py-12 md:px-14 md:py-16">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full bg-primary/10 blur-[110px]"
          />

          <div className="relative max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              Have a Similar Challenge?
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
              Let’s build a system around your business.
            </h2>

            <p className="mt-4 max-w-2xl text-base leading-7 text-secondary-foreground">
              Explore how connected software can represent your workflows and
              support the way your business operates.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-4">
              <a
                href="/#contact"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition hover:-translate-y-0.5 hover:opacity-90"
              >
                Get in Touch
                <ArrowUpRight size={17} />
              </a>

              <Link
                href="/work"
                className="inline-flex min-h-12 items-center gap-2 text-sm font-semibold text-secondary-foreground transition-colors hover:text-primary"
              >
                Explore Other Projects
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
