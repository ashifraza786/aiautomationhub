import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  Bot,
  BriefcaseBusiness,
  Globe2,
  Layers3,
  Settings2,
  Workflow,
  Zap,
} from "lucide-react";
import { Link } from "wouter";

const solutions = [
  {
    number: "01",
    icon: Bot,
    title: "AI Automation",
    description:
      "Turn repetitive business work into intelligent, connected workflows designed around how your team actually operates.",
    capabilities: [
      "AI Agents & Assistants",
      "Workflow Automation",
      "Lead & Follow-up Automation",
      "WhatsApp Automation",
      "Document & Data Workflows",
    ],
    href: "/solutions/ai-automation",
    featured: true,
  },
  {
    number: "02",
    icon: BriefcaseBusiness,
    title: "Custom Business Software",
    description:
      "Build software around your processes instead of forcing your business to adapt to generic tools.",
    capabilities: [
      "Business Dashboards",
      "Internal Tools",
      "CRM & Management Systems",
      "Billing & Operations",
      "Custom Web Applications",
    ],
    href: "/solutions/custom-software",
    featured: false,
  },
  {
    number: "03",
    icon: Layers3,
    title: "ERP & Business Systems",
    description:
      "Bring important business operations into connected systems that are easier to manage and grow.",
    capabilities: [
      "Business ERP Systems",
      "Sales & Inventory",
      "Customer Management",
      "Employee Operations",
      "Reporting & Administration",
    ],
    href: "/solutions/erp-business-systems",
    featured: false,
  },
  {
    number: "04",
    icon: Globe2,
    title: "Websites & Digital Solutions",
    description:
      "Create digital experiences that do more than look good — they connect your business with customers and operations.",
    capabilities: [
      "Business Websites",
      "Landing Pages",
      "E-commerce",
      "Booking Systems",
      "Web Portals & Applications",
    ],
    href: "/solutions/websites-digital-solutions",
    featured: false,
  },
  {
    number: "05",
    icon: Workflow,
    title: "Business Growth",
    description:
      "Connect your digital presence, promotion, lead capture and business systems into a more effective growth process.",
    capabilities: [
      "Digital Advertising",
      "Product Promotion",
      "Lead Generation",
      "Conversion Experiences",
      "Growth & Campaign Support",
    ],
    href: "/solutions/business-growth",
    featured: false,
  },
];

function SectionHeading() {
  return (
    <div className="section-intro-left">
      <p className="section-eyebrow">WHAT WE BUILD</p>

      <h1 className="section-title text-4xl font-bold leading-[1.08] tracking-[-0.03em] text-foreground md:text-5xl lg:text-[56px]">
        Technology Built Around
        <span className="block text-primary">Your Business.</span>
      </h1>

      <p className="section-description text-base leading-7 text-muted-foreground md:text-[17px]">
        From AI-powered automation to custom software, ERP systems and digital
        experiences — we build the technology your business actually needs.
      </p>
    </div>
  );
}

function SolutionVisual({
  solution,
}: {
  solution: (typeof solutions)[number];
}) {
  const Icon = solution.icon;

  if (solution.featured) {
    return (
      <div className="relative min-h-[300px] overflow-hidden rounded-2xl border border-primary/20 bg-background/70 p-5 md:min-h-[340px] md:p-6">
        {/* Ambient glow */}
        <div
          className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-primary/[0.08] blur-3xl"
          aria-hidden="true"
        />

        {/* Workflow grid */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.045]"
          aria-hidden="true"
          style={{
            backgroundImage:
              "linear-gradient(rgba(79,124,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(79,124,255,0.8) 1px, transparent 1px)",
            backgroundSize: "44px 44px",
            maskImage:
              "radial-gradient(circle at center, black, transparent 75%)",
          }}
        />

        <div className="relative flex h-full flex-col justify-between">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-mint shadow-[0_0_10px_rgba(56,217,197,0.5)]" />
              Intelligent Workflow
            </div>

            <Zap
              className="h-4 w-4 text-primary"
              strokeWidth={1.7}
              aria-hidden="true"
            />
          </div>

          <div className="mx-auto w-full max-w-[430px]">
            <div className="grid grid-cols-[1fr_56px_1fr] items-center gap-2">
              <div className="space-y-2">
                <WorkflowNode label="Lead" />
                <WorkflowNode label="Customer Data" />
              </div>

              <div className="relative flex h-24 items-center justify-center">
                <div className="absolute h-px w-full bg-gradient-to-r from-primary/20 via-primary/60 to-mint/30" />

                <div className="relative z-10 flex h-11 w-11 items-center justify-center rounded-xl border border-primary/30 bg-elevated shadow-[0_0_24px_rgba(79,124,255,0.14)]">
                  <Icon
                    className="h-5 w-5 text-primary"
                    strokeWidth={1.7}
                    aria-hidden="true"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <WorkflowNode label="CRM" accent />
                <WorkflowNode label="Action" accent />
              </div>
            </div>

            <div className="mt-4 flex justify-center">
              <div className="rounded-full border border-mint/20 bg-mint/[0.06] px-3 py-1.5 text-[10px] font-medium text-mint">
                Automated business flow
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative flex min-h-[220px] items-center justify-center overflow-hidden rounded-2xl border border-border bg-background/60 p-6">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        aria-hidden="true"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.7) 1px, transparent 1px)",
          backgroundSize: "42px 42px",
          maskImage:
            "radial-gradient(circle at center, black, transparent 72%)",
        }}
      />

      <div className="relative flex w-full max-w-[360px] items-center justify-center">
        <div className="absolute h-px w-full bg-gradient-to-r from-transparent via-border to-transparent" />

        <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl border border-border bg-elevated shadow-[0_0_32px_rgba(0,0,0,0.2)]">
          <Icon
            className="h-7 w-7 text-primary"
            strokeWidth={1.6}
            aria-hidden="true"
          />
        </div>
      </div>
    </div>
  );
}

function WorkflowNode({
  label,
  accent = false,
}: {
  label: string;
  accent?: boolean;
}) {
  return (
    <div
      className={[
        "rounded-lg border px-3 py-2 text-center text-[10px] font-medium",
        accent
          ? "border-mint/20 bg-mint/[0.04] text-mint"
          : "border-border/80 bg-surface text-muted-foreground",
      ].join(" ")}
    >
      {label}
    </div>
  );
}

export default function Solutions() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="min-h-screen overflow-hidden bg-background text-foreground">
      {/* ================================================================
          HERO
         ================================================================ */}
      <section className="section-feature relative overflow-hidden border-b border-border/70">
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden="true"
        >
          <div className="absolute left-[15%] top-[10%] h-72 w-72 rounded-full bg-primary/[0.045] blur-3xl" />

          <div className="absolute right-[10%] top-[25%] h-64 w-64 rounded-full bg-violet/[0.035] blur-3xl" />

          <div
            className="absolute inset-0 opacity-[0.045]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(32,41,54,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(32,41,54,0.7) 1px, transparent 1px)",
              backgroundSize: "64px 64px",
              maskImage: "linear-gradient(to bottom, black, transparent 90%)",
            }}
          />
        </div>

        <div className="container relative">
          <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <motion.div
              initial={
                reduceMotion
                  ? false
                  : {
                      opacity: 0,
                      y: 20,
                    }
              }
              animate={
                reduceMotion
                  ? undefined
                  : {
                      opacity: 1,
                      y: 0,
                    }
              }
              transition={{
                duration: 0.65,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <p className="section-eyebrow">
                AI • SOFTWARE • BUSINESS SYSTEMS
              </p>

              <h1 className="max-w-[680px] text-4xl font-bold leading-[1.06] tracking-[-0.035em] text-foreground md:text-5xl lg:text-[60px]">
                Build the right technology
                <span className="block text-primary">
                  for the way you work.
                </span>
              </h1>

              <p className="mt-6 max-w-[650px] text-base leading-7 text-muted-foreground md:text-[18px] md:leading-8">
                Your business doesn't need more disconnected tools. It needs
                technology that fits the way your team works, your customers
                buy, and your operations run.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/start-project"
                  className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-primary px-6 text-sm font-semibold text-primary-foreground shadow-[0_0_30px_rgba(79,124,255,0.12)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary/95 hover:shadow-[0_0_36px_rgba(79,124,255,0.2)] focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  Tell Us What You Need
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>

                <a
                  href="#solutions"
                  className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-border bg-surface px-6 text-sm font-semibold text-foreground transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/35 hover:bg-elevated focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  Explore Solutions
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={
                reduceMotion
                  ? false
                  : {
                      opacity: 0,
                      x: 24,
                    }
              }
              animate={
                reduceMotion
                  ? undefined
                  : {
                      opacity: 1,
                      x: 0,
                    }
              }
              transition={{
                duration: 0.7,
                delay: 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-3xl border border-border bg-surface p-5 shadow-[0_30px_100px_rgba(0,0,0,0.24)] md:p-6">
                <div
                  className="pointer-events-none absolute inset-0 opacity-[0.04]"
                  aria-hidden="true"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(79,124,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(79,124,255,0.8) 1px, transparent 1px)",
                    backgroundSize: "48px 48px",
                    maskImage:
                      "radial-gradient(circle at center, black, transparent 76%)",
                  }}
                />

                <div className="relative">
                  <div className="flex items-center justify-between border-b border-border pb-4">
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                        Business Technology
                      </p>
                      <p className="mt-1 text-sm font-semibold text-foreground">
                        Connected Solution Layer
                      </p>
                    </div>

                    <div className="flex items-center gap-2 text-[10px] text-muted-foreground">
                      <span className="h-1.5 w-1.5 rounded-full bg-mint" />
                      Connected
                    </div>
                  </div>

                  <div className="mt-5 grid gap-3 sm:grid-cols-2">
                    {[
                      {
                        icon: Bot,
                        label: "AI Automation",
                        text: "Intelligent workflows",
                      },
                      {
                        icon: Settings2,
                        label: "Business Software",
                        text: "Custom operations",
                      },
                      {
                        icon: Layers3,
                        label: "ERP Systems",
                        text: "Connected processes",
                      },
                      {
                        icon: Globe2,
                        label: "Digital Solutions",
                        text: "Customer experience",
                      },
                    ].map((item) => {
                      const Icon = item.icon;

                      return (
                        <div
                          key={item.label}
                          className="rounded-xl border border-border/80 bg-background/70 p-4"
                        >
                          <div className="flex items-start gap-3">
                            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-primary/15 bg-primary/[0.06]">
                              <Icon
                                className="h-4 w-4 text-primary"
                                strokeWidth={1.7}
                                aria-hidden="true"
                              />
                            </div>

                            <div className="min-w-0">
                              <p className="text-xs font-semibold text-foreground">
                                {item.label}
                              </p>
                              <p className="mt-1 text-[11px] leading-5 text-muted-foreground">
                                {item.text}
                              </p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <div className="mt-4 rounded-xl border border-mint/15 bg-mint/[0.035] p-4">
                    <div className="flex items-center gap-3">
                      <div className="h-2 w-2 rounded-full bg-mint shadow-[0_0_12px_rgba(56,217,197,0.4)]" />
                      <span className="text-xs font-medium text-mint">
                        Designed around your business workflow
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================================================================
          SOLUTIONS
         ================================================================ */}
      <section
        id="solutions"
        className="section-feature relative"
        aria-labelledby="solutions-heading"
      >
        <div className="container">
          <SectionHeading />

          <div id="solutions-grid" className="space-y-5">
            {solutions.map((solution, index) => {
              const Icon = solution.icon;

              return (
                <motion.article
                  key={solution.number}
                  initial={
                    reduceMotion
                      ? false
                      : {
                          opacity: 0,
                          y: 24,
                        }
                  }
                  whileInView={
                    reduceMotion
                      ? undefined
                      : {
                          opacity: 1,
                          y: 0,
                        }
                  }
                  viewport={{
                    once: true,
                    amount: 0.12,
                  }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.04,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className={[
                    "relative overflow-hidden rounded-2xl border bg-surface p-5 md:p-6 lg:p-7",
                    solution.featured
                      ? "border-primary/25 shadow-[0_24px_80px_rgba(79,124,255,0.07)]"
                      : "border-border",
                  ].join(" ")}
                >
                  <div className="grid gap-7 lg:grid-cols-[1fr_0.95fr] lg:items-center lg:gap-10">
                    <div>
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-semibold tracking-[0.12em] text-primary">
                          {solution.number}
                        </span>

                        <span className="h-px w-8 bg-border" />

                        <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-elevated">
                          <Icon
                            className="h-4 w-4 text-primary"
                            strokeWidth={1.7}
                            aria-hidden="true"
                          />
                        </div>
                      </div>

                      <h2 className="mt-5 text-2xl font-semibold leading-tight tracking-[-0.02em] text-foreground md:text-3xl">
                        {solution.title}
                      </h2>

                      <p className="mt-4 max-w-[600px] text-base leading-7 text-muted-foreground">
                        {solution.description}
                      </p>

                      <div className="mt-6 flex flex-wrap gap-2">
                        {solution.capabilities.map((capability) => (
                          <span
                            key={capability}
                            className="rounded-full border border-border bg-background/60 px-3 py-1.5 text-[11px] font-medium text-muted-foreground"
                          >
                            {capability}
                          </span>
                        ))}
                      </div>

                      <div className="mt-7">
                        <Link
                          href={solution.href}
                          className="group inline-flex min-h-10 items-center gap-2 text-sm font-semibold text-foreground transition-colors hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                        >
                          Explore {solution.title}
                          <ArrowRight
                            className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                            aria-hidden="true"
                          />
                        </Link>
                      </div>
                    </div>

                    <SolutionVisual solution={solution} />
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================================================================
          CONNECTED SYSTEM
         ================================================================ */}
      <section className="section-feature relative overflow-hidden border-y border-border/70 bg-surface/40">
        <div className="container">
          <div className="mx-auto max-w-[780px] text-center">
            <p className="section-eyebrow">ONE CONNECTED APPROACH</p>

            <h2 className="text-3xl font-bold leading-[1.1] tracking-[-0.025em] text-foreground md:text-4xl lg:text-[44px]">
              Your business doesn't need
              <span className="block text-primary">
                disconnected technology.
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-[680px] text-base leading-7 text-muted-foreground md:text-[17px]">
              A website can generate leads. Business software can manage
              operations. ERP can connect teams. Automation can reduce
              repetitive work. The real value comes when those systems work
              together around the business.
            </p>
          </div>

          <div className="mx-auto mt-12 grid max-w-[960px] gap-3 md:grid-cols-5">
            {[
              "Digital Presence",
              "Business Software",
              "ERP",
              "Automation",
              "Growth",
            ].map((item, index) => (
              <div
                key={item}
                className="relative flex min-h-20 items-center justify-center rounded-xl border border-border bg-background/60 px-4 text-center"
              >
                <span className="text-xs font-semibold text-foreground">
                  {item}
                </span>

                {index < 4 && (
                  <ArrowRight
                    className="absolute -bottom-6 left-1/2 h-4 w-4 translate-x-[-50%] rotate-90 text-primary/60 md:bottom-auto md:left-auto md:right-[-12px] md:top-1/2 md:translate-x-0 md:translate-y-[-50%] md:rotate-0"
                    aria-hidden="true"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================
          FINAL CTA
         ================================================================ */}
      <section className="section-feature">
        <div className="container">
          <div className="relative overflow-hidden rounded-3xl border border-border bg-surface px-6 py-12 text-center shadow-[0_24px_90px_rgba(0,0,0,0.2)] md:px-12 md:py-16 lg:px-20 lg:py-20">
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.04]"
              aria-hidden="true"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(79,124,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(79,124,255,0.8) 1px, transparent 1px)",
                backgroundSize: "56px 56px",
                maskImage:
                  "radial-gradient(circle at center, black, transparent 72%)",
              }}
            />

            <div className="relative mx-auto max-w-[700px]">
              <p className="section-eyebrow">DON'T KNOW WHERE TO START?</p>

              <h2 className="text-3xl font-bold leading-[1.1] tracking-[-0.025em] text-foreground md:text-4xl lg:text-[44px]">
                Tell us what your business
                <span className="block text-primary">
                  needs to work better.
                </span>
              </h2>

              <p className="mx-auto mt-5 max-w-[620px] text-base leading-7 text-muted-foreground md:text-[17px]">
                Start with the problem. We'll help identify the right
                combination of digital solutions, business systems and
                automation.
              </p>

              <div className="mt-8">
                <Link
                  href="/start-project"
                  className="group inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-primary px-6 text-sm font-semibold text-primary-foreground shadow-[0_0_30px_rgba(79,124,255,0.12)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary/95 hover:shadow-[0_0_38px_rgba(79,124,255,0.2)] focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
                >
                  Start Your Project
                  <ArrowRight
                    className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
