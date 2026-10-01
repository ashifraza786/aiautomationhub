import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  Bot,
  Check,
  FileText,
  GitBranch,
  MessageSquare,
  Settings2,
  Sparkles,
  Workflow,
  Zap,
} from "lucide-react";
import { Link } from "wouter";

const automationAreas = [
  {
    icon: Workflow,
    title: "Business Workflows",
    description:
      "Turn repetitive multi-step processes into structured digital workflows.",
  },
  {
    icon: MessageSquare,
    title: "Customer Communication",
    description:
      "Support faster communication, follow-ups and customer handling across your workflow.",
  },
  {
    icon: Bot,
    title: "AI Assistants & Agents",
    description:
      "Use AI where it can meaningfully support information handling and business tasks.",
  },
  {
    icon: FileText,
    title: "Document & Data Work",
    description:
      "Reduce repetitive document and data handling through structured automation.",
  },
  {
    icon: GitBranch,
    title: "Lead Processes",
    description:
      "Create clearer journeys from incoming enquiries to follow-up and sales action.",
  },
  {
    icon: Settings2,
    title: "Internal Operations",
    description:
      "Automate repetitive operational steps so teams can spend more time on useful work.",
  },
];

const approachSteps = [
  {
    number: "01",
    title: "Understand",
    description:
      "We first understand the business process, people involved, tools being used and where manual work happens.",
  },
  {
    number: "02",
    title: "Map",
    description:
      "We break the process into inputs, decisions, actions and outcomes to identify useful automation opportunities.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "We design the appropriate combination of workflow logic, software and AI capabilities around the requirement.",
  },
  {
    number: "04",
    title: "Improve",
    description:
      "The system can evolve as the business learns what works and what should be improved next.",
  },
];

function FlowNode({
  label,
  icon: Icon,
  accent = false,
}: {
  label: string;
  icon: typeof Workflow;
  accent?: boolean;
}) {
  return (
    <div
      className={[
        "flex min-h-[74px] items-center gap-3 rounded-xl border px-4",
        accent
          ? "border-primary/25 bg-primary/[0.06]"
          : "border-border bg-background/70",
      ].join(" ")}
    >
      <div
        className={[
          "flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border",
          accent
            ? "border-primary/20 bg-primary/[0.08]"
            : "border-border bg-elevated",
        ].join(" ")}
      >
        <Icon
          className={
            accent ? "h-4 w-4 text-primary" : "h-4 w-4 text-muted-foreground"
          }
          strokeWidth={1.7}
          aria-hidden="true"
        />
      </div>

      <span className="text-xs font-semibold text-foreground">{label}</span>
    </div>
  );
}

function FlowArrow() {
  return (
    <div className="flex items-center justify-center py-2 md:px-1 md:py-0">
      <ArrowRight
        className="h-4 w-4 text-primary/60 md:block"
        aria-hidden="true"
      />
      <ArrowDown
        className="h-4 w-4 text-primary/60 md:hidden"
        aria-hidden="true"
      />
    </div>
  );
}

export default function AIAutomation() {
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
          <div className="absolute left-[8%] top-[15%] h-72 w-72 rounded-full bg-primary/[0.045] blur-3xl" />
          <div className="absolute right-[8%] top-[30%] h-64 w-64 rounded-full bg-violet/[0.035] blur-3xl" />

          <div
            className="absolute inset-0 opacity-[0.045]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(32,41,54,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(32,41,54,0.7) 1px, transparent 1px)",
              backgroundSize: "64px 64px",
              maskImage: "linear-gradient(to bottom, black, transparent 92%)",
            }}
          />
        </div>

        <div className="container relative">
          <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
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
              <p className="section-eyebrow">AI AUTOMATION</p>

              <h1 className="max-w-[680px] text-4xl font-bold leading-[1.06] tracking-[-0.035em] text-foreground md:text-5xl lg:text-[60px]">
                Turn repetitive work into
                <span className="block text-primary">
                  intelligent workflows.
                </span>
              </h1>

              <p className="mt-6 max-w-[650px] text-base leading-7 text-muted-foreground md:text-[18px] md:leading-8">
                We design automation around the way your business actually works
                — connecting repetitive tasks, business processes and useful AI
                capabilities into clearer workflows.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/start-project"
                  className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-primary px-6 text-sm font-semibold text-primary-foreground shadow-[0_0_30px_rgba(79,124,255,0.12)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary/95 hover:shadow-[0_0_36px_rgba(79,124,255,0.2)] focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  Automate a Process
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>

                <a
                  href="#automation-areas"
                  className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-border bg-surface px-6 text-sm font-semibold text-foreground transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/35 hover:bg-elevated focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  Explore Automation
                  <ArrowDown className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </motion.div>

            {/* Hero workflow visual */}
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
                        Automation Layer
                      </p>

                      <p className="mt-1 text-sm font-semibold text-foreground">
                        Business Workflow
                      </p>
                    </div>

                    <div className="flex items-center gap-2 text-[10px] text-muted-foreground">
                      <span className="h-1.5 w-1.5 rounded-full bg-mint shadow-[0_0_10px_rgba(56,217,197,0.45)]" />
                      Active Flow
                    </div>
                  </div>

                  <div className="mt-6 grid gap-2 md:grid-cols-[1fr_auto_1fr_auto_1fr] md:items-center">
                    <FlowNode label="Business Input" icon={Zap} />

                    <FlowArrow />

                    <FlowNode label="AI / Logic" icon={Bot} accent />

                    <FlowArrow />

                    <FlowNode label="Business Action" icon={Workflow} />
                  </div>

                  <div className="mt-5 rounded-xl border border-primary/15 bg-primary/[0.035] p-4">
                    <div className="flex items-start gap-3">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-primary/20 bg-primary/[0.06]">
                        <Sparkles
                          className="h-4 w-4 text-primary"
                          strokeWidth={1.7}
                          aria-hidden="true"
                        />
                      </div>

                      <div>
                        <p className="text-xs font-semibold text-foreground">
                          Designed around the process
                        </p>

                        <p className="mt-1 text-[11px] leading-5 text-muted-foreground">
                          Automation starts with the business workflow — not the
                          technology.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================================================================
          PROBLEM
         ================================================================ */}
      <section className="section-feature" aria-labelledby="problem-heading">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-20">
            <div>
              <p className="section-eyebrow">THE PROBLEM</p>

              <h2
                id="problem-heading"
                className="text-3xl font-bold leading-[1.1] tracking-[-0.025em] text-foreground md:text-4xl"
              >
                Manual work quietly
                <span className="block text-primary">
                  slows businesses down.
                </span>
              </h2>

              <p className="mt-5 max-w-[600px] text-base leading-7 text-muted-foreground md:text-[17px]">
                Repetitive data entry, follow-ups, customer messages and
                disconnected processes can consume time that teams could spend
                on higher-value work.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {[
                "Repeated manual tasks",
                "Delayed follow-ups",
                "Scattered information",
                "Disconnected tools",
                "Slow customer response",
                "Unclear process ownership",
              ].map((item, index) => (
                <motion.div
                  key={item}
                  initial={
                    reduceMotion
                      ? false
                      : {
                          opacity: 0,
                          y: 16,
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
                    amount: 0.2,
                  }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.04,
                  }}
                  className="flex min-h-[72px] items-center gap-3 rounded-xl border border-border bg-surface px-4"
                >
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary/70" />

                  <span className="text-sm font-medium text-muted-foreground">
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================
          AUTOMATION AREAS
         ================================================================ */}
      <section
        id="automation-areas"
        className="section-feature border-y border-border/70 bg-surface/40"
        aria-labelledby="automation-areas-heading"
      >
        <div className="container">
          <div className="section-intro-left">
            <p className="section-eyebrow">WHAT WE CAN AUTOMATE</p>

            <h2
              id="automation-areas-heading"
              className="section-title text-3xl font-bold leading-[1.1] tracking-[-0.025em] text-foreground md:text-4xl lg:text-[44px]"
            >
              Automation should solve
              <span className="block text-primary">
                useful business problems.
              </span>
            </h2>

            <p className="section-description text-base leading-7 text-muted-foreground md:text-[17px]">
              The right automation depends on your process. We focus on areas
              where reducing repetitive work or improving response can create
              practical value.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {automationAreas.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.article
                  key={item.title}
                  initial={
                    reduceMotion
                      ? false
                      : {
                          opacity: 0,
                          y: 20,
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
                    duration: 0.5,
                    delay: index * 0.04,
                  }}
                  className="rounded-2xl border border-border bg-surface p-6 transition-colors duration-200 hover:border-primary/25"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-primary/15 bg-primary/[0.06]">
                    <Icon
                      className="h-5 w-5 text-primary"
                      strokeWidth={1.7}
                      aria-hidden="true"
                    />
                  </div>

                  <h3 className="mt-5 text-lg font-semibold tracking-[-0.015em] text-foreground">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-muted-foreground">
                    {item.description}
                  </p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================================================================
          SYSTEM APPROACH
         ================================================================ */}
      <section className="section-feature" aria-labelledby="approach-heading">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start lg:gap-20">
            <div className="lg:sticky lg:top-28">
              <p className="section-eyebrow">OUR APPROACH</p>

              <h2
                id="approach-heading"
                className="text-3xl font-bold leading-[1.1] tracking-[-0.025em] text-foreground md:text-4xl"
              >
                Start with the workflow.
                <span className="block text-primary">
                  Then choose the technology.
                </span>
              </h2>

              <p className="mt-5 max-w-[560px] text-base leading-7 text-muted-foreground md:text-[17px]">
                Good automation isn't about adding AI everywhere. It's about
                understanding where technology can make a business process
                simpler, faster or more consistent.
              </p>
            </div>

            <div className="space-y-3">
              {approachSteps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={
                    reduceMotion
                      ? false
                      : {
                          opacity: 0,
                          x: 20,
                        }
                  }
                  whileInView={
                    reduceMotion
                      ? undefined
                      : {
                          opacity: 1,
                          x: 0,
                        }
                  }
                  viewport={{
                    once: true,
                    amount: 0.2,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.05,
                  }}
                  className="relative rounded-2xl border border-border bg-surface p-6 md:p-7"
                >
                  <div className="flex gap-5">
                    <span className="shrink-0 text-xs font-semibold tracking-[0.12em] text-primary">
                      {step.number}
                    </span>

                    <div>
                      <h3 className="text-xl font-semibold tracking-[-0.015em] text-foreground">
                        {step.title}
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-muted-foreground md:text-[15px]">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================
          WHY THIS MATTERS
         ================================================================ */}
      <section className="section-feature border-y border-border/70 bg-surface/40">
        <div className="container">
          <div className="mx-auto max-w-[760px] text-center">
            <p className="section-eyebrow">THE PRINCIPLE</p>

            <h2 className="text-3xl font-bold leading-[1.1] tracking-[-0.025em] text-foreground md:text-4xl lg:text-[44px]">
              AI should do something
              <span className="block text-primary">useful.</span>
            </h2>

            <p className="mx-auto mt-5 max-w-[680px] text-base leading-7 text-muted-foreground md:text-[17px]">
              We don't add AI simply because it is available. The goal is to
              identify meaningful business tasks where intelligent systems can
              support the workflow and make the overall process better.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-2">
              {[
                "Less repetitive work",
                "Faster workflows",
                "Better process visibility",
                "More consistent execution",
              ].map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-background/70 px-4 py-2 text-xs font-medium text-muted-foreground"
                >
                  <Check
                    className="h-3.5 w-3.5 text-mint"
                    strokeWidth={2}
                    aria-hidden="true"
                  />
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================
          CTA
         ================================================================ */}
      <section className="section-feature">
        <div className="container">
          <div className="relative overflow-hidden rounded-3xl border border-primary/20 bg-surface px-6 py-12 text-center shadow-[0_24px_90px_rgba(0,0,0,0.2)] md:px-12 md:py-16 lg:px-20 lg:py-20">
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
              <p className="section-eyebrow">READY TO AUTOMATE?</p>

              <h2 className="text-3xl font-bold leading-[1.1] tracking-[-0.025em] text-foreground md:text-4xl lg:text-[44px]">
                Tell us what is slowing
                <span className="block text-primary">your business down.</span>
              </h2>

              <p className="mx-auto mt-5 max-w-[620px] text-base leading-7 text-muted-foreground md:text-[17px]">
                Start with the process, problem or repetitive task. We'll help
                you explore whether automation is the right solution.
              </p>

              <div className="mt-8">
                <Link
                  href="/start-project"
                  className="group inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-primary px-6 text-sm font-semibold text-primary-foreground shadow-[0_0_30px_rgba(79,124,255,0.12)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary/95 hover:shadow-[0_0_38px_rgba(79,124,255,0.2)] focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
                >
                  Tell Us What You Need
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
