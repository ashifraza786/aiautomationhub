import { useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowDown,
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Bot,
  BriefcaseBusiness,
  Check,
  Globe2,
  Layers3,
  Sparkles,
  Workflow,
  Zap,
} from "lucide-react";
import { Link } from "wouter";

const categories = [
  "All Solutions",
  "AI & Automation",
  "Business Systems",
  "Digital Solutions",
  "Business Growth",
] as const;

type Category = (typeof categories)[number];

const journey = [
  {
    number: "01",
    title: "Discover",
    description: "Find the area of your business you want to improve.",
  },
  {
    number: "02",
    title: "Choose",
    description: "Explore a solution that fits your requirements.",
  },
  {
    number: "03",
    title: "Understand",
    description: "See how the workflow could work for your business.",
  },
  {
    number: "04",
    title: "Discuss",
    description: "Tell us about your process and plan the next step.",
  },
];

const solutions = [
  {
    number: "01",
    category: "AI & Automation" as Category,
    icon: Bot,
    title: "AI Automation",
    subtitle: "Make repetitive work work for you.",
    description:
      "Connect everyday tasks and business workflows so your team can spend less time on repetitive work and more time on meaningful decisions.",
    capabilities: [
      "AI Agents & Assistants",
      "Workflow Automation",
      "Lead & Follow-up Automation",
      "WhatsApp Automation",
      "Document & Data Workflows",
    ],
    href: "/solutions/ai-automation",
    visual: "automation",
    featured: true,
  },
  {
    number: "02",
    category: "Business Systems" as Category,
    icon: BriefcaseBusiness,
    title: "Custom Business Software",
    subtitle: "Software shaped around your process.",
    description:
      "Create practical software, dashboards and internal tools around the way your business actually operates.",
    capabilities: [
      "Business Dashboards",
      "Internal Tools",
      "CRM & Management Systems",
      "Billing & Operations",
      "Custom Web Applications",
    ],
    href: "/solutions/custom-software",
    visual: "software",
    featured: false,
  },
  {
    number: "03",
    category: "Business Systems" as Category,
    icon: Layers3,
    title: "ERP & Business Systems",
    subtitle: "Bring important operations together.",
    description:
      "Organise business information and day-to-day operations through connected systems designed around your requirements.",
    capabilities: [
      "ERP Systems",
      "Sales & Inventory",
      "Customer Management",
      "Employee Operations",
      "Reporting & Administration",
    ],
    href: "/solutions/erp-business-systems",
    visual: "systems",
    featured: false,
  },
  {
    number: "04",
    category: "Digital Solutions" as Category,
    icon: Globe2,
    title: "Websites & Digital Solutions",
    subtitle: "Turn your digital presence into a useful business asset.",
    description:
      "Build customer-facing digital experiences that communicate your value and support the way customers interact with your business.",
    capabilities: [
      "Business Websites",
      "Landing Pages",
      "E-commerce",
      "Booking Systems",
      "Web Portals & Applications",
    ],
    href: "/solutions/websites-digital-solutions",
    visual: "digital",
    featured: false,
  },
  {
    number: "05",
    category: "Business Growth" as Category,
    icon: Workflow,
    title: "Business Growth",
    subtitle: "Connect attention with action.",
    description:
      "Improve the journey from digital discovery and lead capture to follow-up and customer conversion.",
    capabilities: [
      "Digital Advertising",
      "Product Promotion",
      "Lead Generation",
      "Conversion Experiences",
      "Growth & Campaign Support",
    ],
    href: "/solutions/business-growth",
    visual: "growth",
    featured: false,
  },
];

function ServiceVisual({
  visual,
  icon: Icon,
}: {
  visual: string;
  icon: typeof Bot;
}) {
  const steps =
    visual === "automation"
      ? ["New enquiry", "Process", "Follow-up"]
      : visual === "software"
        ? ["Business data", "Workspace", "Clear overview"]
        : visual === "systems"
          ? ["Sales", "Operations", "Reporting"]
          : visual === "digital"
            ? ["Discover", "Explore", "Connect"]
            : ["Reach", "Capture", "Convert"];

  return (
    <div className="group/visual relative flex min-h-[220px] items-center justify-center overflow-hidden rounded-2xl border border-white/[0.08] bg-[#10141D] p-5 sm:min-h-[265px] sm:p-7">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.055]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(129,148,255,.8) 1px,transparent 1px),linear-gradient(90deg,rgba(129,148,255,.8) 1px,transparent 1px)",
          backgroundSize: "34px 34px",
          maskImage: "radial-gradient(ellipse at center,black,transparent 78%)",
        }}
      />

      <div className="pointer-events-none absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/[0.10] blur-[75px] transition-opacity duration-500 group-hover/visual:opacity-100" />

      <div className="relative w-full max-w-[370px]">
        <div className="mb-5 flex items-center justify-between gap-3">
          <span className="text-[10px] font-medium uppercase tracking-[0.16em] text-slate-500">
            Workflow preview
          </span>
          <span className="flex items-center gap-1.5 text-[10px] text-slate-400">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Illustrative concept
          </span>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          {steps.map((step, index) => (
            <div key={step} className="flex min-w-0 flex-1 items-center gap-2">
              <div
                className={[
                  "flex min-h-[76px] min-w-0 flex-1 flex-col items-center justify-center gap-2 rounded-xl border px-1.5 py-3 text-center sm:min-h-[88px] sm:px-2",
                  index === 1
                    ? "border-primary/30 bg-primary/[0.10] text-white"
                    : "border-white/[0.08] bg-white/[0.025] text-slate-400",
                ].join(" ")}
              >
                {index === 1 ? (
                  <Icon className="h-5 w-5 text-primary" strokeWidth={1.6} />
                ) : (
                  <span className="flex h-5 w-5 items-center justify-center rounded-md border border-white/10 text-[9px]">
                    0{index + 1}
                  </span>
                )}
                <span className="text-[9px] leading-4 sm:text-[10px]">
                  {step}
                </span>
              </div>

              {index < steps.length - 1 && (
                <ArrowRight
                  className="h-3 w-3 shrink-0 text-primary/60"
                  aria-hidden="true"
                />
              )}
            </div>
          ))}
        </div>

        <div className="mt-4 flex items-center justify-center gap-2 rounded-lg border border-white/[0.07] bg-white/[0.025] px-3 py-2.5">
          <Zap className="h-3.5 w-3.5 text-primary" />
          <span className="text-[10px] text-slate-400">
            Designed around your business requirements
          </span>
        </div>
      </div>
    </div>
  );
}

function JourneySection({
  activeStep,
  onStepChange,
}: {
  activeStep: number;
  onStepChange: (step: number) => void;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <section className="border-y border-border/70 bg-surface/35 py-12 sm:py-16">
      <div className="container">
        <div className="mx-auto max-w-[700px] text-center">
          <p className="section-eyebrow">A CLEARER WAY FORWARD</p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.045em] sm:text-4xl">
            From business challenge
            <span className="block text-primary">
              to a practical next step.
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-[580px] text-sm leading-7 text-muted-foreground sm:text-base">
            Explore what you need, understand the possibilities and start a
            conversation when you are ready.
          </p>
        </div>

        <div className="relative mx-auto mt-10 grid max-w-[1040px] gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <div
            aria-hidden="true"
            className="absolute left-[12%] right-[12%] top-7 hidden h-px bg-gradient-to-r from-primary/10 via-primary/45 to-primary/10 lg:block"
          />

          {journey.map((step, index) => {
            const active = activeStep === index;

            return (
              <button
                key={step.number}
                type="button"
                aria-pressed={active}
                onClick={() => onStepChange(index)}
                className={[
                  "group relative rounded-2xl border p-5 text-left transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary sm:p-6",
                  active
                    ? "border-primary/40 bg-primary/[0.07]"
                    : "border-border bg-background/70 hover:border-primary/25",
                ].join(" ")}
              >
                <div className="relative flex items-center justify-between">
                  <span
                    className={[
                      "flex h-10 w-10 items-center justify-center rounded-xl border text-xs font-semibold transition-colors",
                      active
                        ? "border-primary/30 bg-primary/15 text-primary"
                        : "border-border bg-surface text-muted-foreground group-hover:text-primary",
                    ].join(" ")}
                  >
                    {step.number}
                  </span>

                  {index < journey.length - 1 && (
                    <ArrowRight
                      className="h-4 w-4 text-primary/60 lg:hidden"
                      aria-hidden="true"
                    />
                  )}

                  {active && (
                    <span className="text-[10px] font-medium text-primary">
                      Selected
                    </span>
                  )}
                </div>

                <h3 className="mt-5 text-lg font-semibold tracking-tight">
                  {step.title}
                </h3>
                <p className="mt-2 text-xs leading-6 text-muted-foreground sm:text-sm">
                  {step.description}
                </p>

                <div
                  className={[
                    "mt-5 h-1 rounded-full transition-all duration-300",
                    active ? "w-full bg-primary/70" : "w-8 bg-border",
                  ].join(" ")}
                />
              </button>
            );
          })}
        </div>

        <motion.div
          key={activeStep}
          initial={reduceMotion ? false : { opacity: 0, y: 8 }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
          aria-live="polite"
          className="mx-auto mt-5 flex max-w-[1040px] flex-col items-start justify-between gap-4 rounded-xl border border-primary/15 bg-primary/[0.035] px-5 py-4 sm:flex-row sm:items-center sm:px-6"
        >
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-primary">
              Your journey · {journey[activeStep].number}
            </p>
            <p className="mt-1 text-sm text-foreground">
              {journey[activeStep].description}
            </p>
          </div>

          {activeStep === 0 ? (
            <a
              href="#solution-discovery"
              className="inline-flex shrink-0 items-center gap-2 text-xs font-semibold text-primary hover:text-foreground"
            >
              Browse solutions <ArrowDown className="h-4 w-4" />
            </a>
          ) : activeStep === 1 || activeStep === 2 ? (
            <a
              href="#solution-discovery"
              className="inline-flex shrink-0 items-center gap-2 text-xs font-semibold text-primary hover:text-foreground"
            >
              Explore the options <ArrowDown className="h-4 w-4" />
            </a>
          ) : (
            <Link
              href="/start-project"
              className="inline-flex shrink-0 items-center gap-2 text-xs font-semibold text-primary hover:text-foreground"
            >
              Discuss your project <ArrowRight className="h-4 w-4" />
            </Link>
          )}
        </motion.div>
      </div>
    </section>
  );
}

export default function Solutions() {
  const [activeCategory, setActiveCategory] =
    useState<Category>("All Solutions");
  const [activeJourneyStep, setActiveJourneyStep] = useState(0);
  const reduceMotion = useReducedMotion();

  const visibleSolutions = useMemo(
    () =>
      activeCategory === "All Solutions"
        ? solutions
        : solutions.filter((solution) => solution.category === activeCategory),
    [activeCategory],
  );

  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      {/* HERO */}
      <section className="section-feature relative overflow-hidden border-b border-border/70">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
        >
          <div className="absolute left-[12%] top-[5%] h-72 w-72 rounded-full bg-primary/[0.07] blur-[110px]" />
          <div className="absolute right-[8%] top-[20%] h-64 w-64 rounded-full bg-violet/[0.045] blur-[100px]" />
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(148,163,184,.7) 1px,transparent 1px),linear-gradient(90deg,rgba(148,163,184,.7) 1px,transparent 1px)",
              backgroundSize: "56px 56px",
              maskImage: "linear-gradient(to bottom,black,transparent 90%)",
            }}
          />
        </div>

        <div className="container relative">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto max-w-[960px] text-center"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/[0.06] px-3.5 py-2">
              <Sparkles className="h-3.5 w-3.5 text-primary" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-300 sm:text-[11px]">
                Solutions built around your business
              </span>
            </div>

            <h1 className="mx-auto mt-7 max-w-[900px] text-[clamp(38px,6vw,72px)] font-semibold leading-[1.04] tracking-[-0.055em] text-foreground">
              The right systems.
              <span className="block bg-gradient-to-r from-[#91A4FF] via-primary to-[#B0BAFF] bg-clip-text text-transparent">
                Built for the way you work.
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-[690px] text-base leading-7 text-muted-foreground sm:text-[17px] sm:leading-8">
              Explore digital solutions, custom business software and automation
              designed around your real requirements—not technology for its own
              sake.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="#solution-discovery"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-primary px-5 text-sm font-semibold text-primary-foreground transition hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(79,124,255,0.2)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                Explore solutions
                <ArrowDownRight className="h-4 w-4" />
              </a>
              <Link
                href="/start-project"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-border bg-background/50 px-5 text-sm font-medium text-foreground transition hover:border-primary/30"
              >
                Discuss your requirement
                <ArrowUpRight className="h-4 w-4 text-primary" />
              </Link>
            </div>

            <p className="mt-5 text-xs text-slate-500">
              Start with the problem. Find the right next step.
            </p>
          </motion.div>
        </div>
      </section>

      {/* INTERACTIVE CUSTOMER JOURNEY */}
      <JourneySection
        activeStep={activeJourneyStep}
        onStepChange={setActiveJourneyStep}
      />

      {/* SOLUTION DISCOVERY */}
      <section
        id="solution-discovery"
        className="section-feature relative scroll-mt-24"
      >
        <div className="container">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div className="max-w-[650px]">
              <p className="section-eyebrow">FIND YOUR STARTING POINT</p>
              <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-[-0.04em] md:text-4xl">
                What does your business need?
              </h2>
              <p className="mt-4 max-w-[590px] text-sm leading-7 text-muted-foreground sm:text-base">
                Choose an area to explore relevant services, or browse
                everything together.
              </p>
            </div>

            <span className="text-xs text-slate-500" aria-live="polite">
              {visibleSolutions.length}{" "}
              {visibleSolutions.length === 1
                ? "solution area"
                : "solution areas"}
            </span>
          </div>

          <div
            aria-label="Filter solutions by category"
            className="mt-8 flex gap-2 overflow-x-auto pb-3"
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
                    "shrink-0 rounded-full border px-4 py-2.5 text-xs font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary sm:px-5 sm:text-[13px]",
                    selected
                      ? "border-primary/50 bg-primary text-primary-foreground shadow-[0_5px_24px_rgba(79,124,255,0.18)]"
                      : "border-border bg-surface text-muted-foreground hover:border-primary/30 hover:text-foreground",
                  ].join(" ")}
                >
                  {category}
                </button>
              );
            })}
          </div>

          <div className="mt-7 space-y-5">
            {visibleSolutions.map((solution, index) => {
              const Icon = solution.icon;

              return (
                <motion.article
                  key={solution.number}
                  initial={reduceMotion ? false : { opacity: 0, y: 18 }}
                  whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.08 }}
                  transition={{
                    duration: 0.45,
                    delay: Math.min(index * 0.05, 0.2),
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className={[
                    "group relative overflow-hidden rounded-2xl border bg-surface p-5 transition-colors duration-300 sm:p-7 lg:p-9",
                    solution.featured
                      ? "border-primary/25 shadow-[0_20px_70px_rgba(79,124,255,0.055)]"
                      : "border-border hover:border-primary/20",
                  ].join(" ")}
                >
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-primary/[0.035] blur-[90px] transition-colors group-hover:bg-primary/[0.07]"
                  />

                  <div className="relative grid gap-7 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-10">
                    <div>
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="text-[11px] font-semibold tracking-[0.15em] text-primary">
                          {solution.number}
                        </span>
                        <span className="h-px w-7 bg-border" />
                        <span className="rounded-full border border-white/[0.08] bg-white/[0.025] px-3 py-1.5 text-[10px] text-slate-400">
                          {solution.category}
                        </span>

                        {solution.featured && (
                          <span className="inline-flex items-center gap-1.5 text-[10px] font-medium text-emerald-300">
                            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                            Core focus
                          </span>
                        )}
                      </div>

                      <div className="mt-6 flex items-start gap-3">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-primary/20 bg-primary/[0.07]">
                          <Icon
                            className="h-5 w-5 text-primary"
                            strokeWidth={1.7}
                          />
                        </div>
                        <div className="min-w-0">
                          <h3 className="text-2xl font-semibold leading-tight tracking-[-0.035em] sm:text-3xl">
                            {solution.title}
                          </h3>
                          <p className="mt-2 text-sm font-medium text-slate-300">
                            {solution.subtitle}
                          </p>
                        </div>
                      </div>

                      <p className="mt-5 max-w-[570px] text-sm leading-7 text-muted-foreground sm:text-base">
                        {solution.description}
                      </p>

                      <div className="mt-6">
                        <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                          What we can build
                        </p>
                        <ul className="grid gap-x-4 gap-y-2.5 sm:grid-cols-2">
                          {solution.capabilities.map((capability) => (
                            <li
                              key={capability}
                              className="flex items-start gap-2 text-xs leading-5 text-slate-400"
                            >
                              <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary/80" />
                              {capability}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mt-7 flex flex-wrap items-center gap-4">
                        <Link
                          href={solution.href}
                          className="group/link inline-flex min-h-11 items-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-xs font-semibold text-primary-foreground transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(79,124,255,0.2)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                        >
                          Explore {solution.title}
                          <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                        </Link>
                        <Link
                          href="/start-project"
                          className="inline-flex min-h-10 items-center gap-1.5 text-xs font-medium text-slate-400 transition-colors hover:text-white"
                        >
                          Discuss your requirement
                          <ArrowUpRight className="h-3.5 w-3.5" />
                        </Link>
                      </div>
                    </div>

                    <ServiceVisual
                      visual={solution.visual}
                      icon={solution.icon}
                    />
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* LONG-TERM BUSINESS VISION */}
      <section className="section-feature relative overflow-hidden border-y border-border/70 bg-surface/35">
        <div className="container">
          <div className="mx-auto max-w-[780px] text-center">
            <p className="section-eyebrow">THE BIGGER PICTURE</p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.04em] sm:text-4xl lg:text-[48px]">
              Not just individual tools.
              <span className="block text-primary">
                A more connected business.
              </span>
            </h2>
            <p className="mx-auto mt-5 max-w-[680px] text-sm leading-7 text-muted-foreground sm:text-base sm:leading-8">
              Start with the need you have today. Over time, digital
              experiences, business systems and automation can be connected as
              your business requirements evolve. This is a direction to build
              towards—not a claim that every capability is already available.
            </p>
          </div>

          <div className="mx-auto mt-10 grid max-w-[1000px] gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {[
              { label: "Digital presence", icon: Globe2 },
              { label: "Business software", icon: BriefcaseBusiness },
              { label: "Connected systems", icon: Layers3 },
              { label: "Automation", icon: Workflow },
              { label: "Intelligence", icon: Sparkles },
            ].map(({ label, icon: Icon }, index) => (
              <div
                key={label}
                className="relative flex min-h-[108px] flex-col items-center justify-center gap-3 rounded-xl border border-border bg-background/60 px-4 py-5 text-center transition-colors hover:border-primary/25"
              >
                <Icon className="h-5 w-5 text-primary" strokeWidth={1.6} />
                <span className="text-xs font-medium text-slate-300">
                  {label}
                </span>

                {index < 4 && (
                  <ArrowRight
                    aria-hidden="true"
                    className="absolute -bottom-[11px] right-1/2 z-10 h-4 w-4 translate-x-1/2 rotate-90 text-primary/50 lg:-bottom-auto lg:-right-[11px] lg:top-1/2 lg:translate-x-0 lg:-translate-y-1/2 lg:rotate-0"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="section-feature">
        <div className="container">
          <div className="relative overflow-hidden rounded-3xl border border-primary/15 bg-gradient-to-br from-[#191E2B] via-surface to-[#12151D] px-5 py-12 text-center sm:px-10 sm:py-16 lg:px-16 lg:py-20">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute left-1/2 top-0 h-56 w-[70%] -translate-x-1/2 rounded-full bg-primary/[0.08] blur-[100px]"
            />

            <div className="relative mx-auto max-w-[720px]">
              <p className="section-eyebrow">START WITH YOUR REQUIREMENT</p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.04em] sm:text-4xl lg:text-[48px]">
                What would you like
                <span className="block text-primary">to work better?</span>
              </h2>
              <p className="mx-auto mt-5 max-w-[600px] text-sm leading-7 text-muted-foreground sm:text-base sm:leading-8">
                Tell us about your business, the challenge you want to solve or
                the process you want to improve. We’ll explore a practical
                starting point together.
              </p>
              <Link
                href="/start-project"
                className="mt-8 inline-flex min-h-12 items-center justify-center gap-2.5 rounded-xl bg-primary px-6 text-sm font-semibold text-primary-foreground shadow-[0_8px_30px_rgba(79,124,255,0.18)] transition-all hover:-translate-y-0.5 hover:shadow-[0_12px_36px_rgba(79,124,255,0.27)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                Tell Us What You Need
                <ArrowRight className="h-4 w-4" />
              </Link>
              <p className="mt-5 text-xs text-slate-500">
                Start with the problem. We’ll discuss the right approach.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
