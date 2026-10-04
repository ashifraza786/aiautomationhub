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
import { useEffect, useState } from "react";
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

function AutomationHeroVisual({
  reduceMotion,
}: {
  reduceMotion: boolean | null;
}) {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      label: "Business Trigger",
      detail: "New lead arrives",
      icon: Zap,
    },
    {
      label: "AI Understands",
      detail: "Information is processed",
      icon: Bot,
    },
    {
      label: "Decision",
      detail: "Next action is determined",
      icon: GitBranch,
    },
    {
      label: "Business Action",
      detail: "Workflow continues",
      icon: Workflow,
    },
  ];

  useEffect(() => {
    if (reduceMotion) return;

    const timer = window.setInterval(() => {
      setActiveStep((current) => (current + 1) % steps.length);
    }, 1700);

    return () => window.clearInterval(timer);
  }, [reduceMotion, steps.length]);

  return (
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
      <div className="relative overflow-hidden rounded-2xl border border-border bg-surface p-4 shadow-[0_30px_100px_rgba(0,0,0,0.24)] sm:p-6">
        {/* ambient system glow */}
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden="true"
        >
          <div className="absolute left-[18%] top-[20%] h-32 w-32 rounded-full bg-primary/[0.06] blur-3xl" />
          <div className="absolute right-[12%] bottom-[15%] h-28 w-28 rounded-full bg-mint/[0.04] blur-3xl" />
        </div>

        <div className="relative">
          {/* System header */}
          <div className="flex items-center justify-between border-b border-border pb-4">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                Automation System
              </p>

              <p className="mt-1 text-sm font-semibold text-foreground">
                Intelligent Workflow
              </p>
            </div>

            <div className="flex items-center gap-2 rounded-full border border-mint/15 bg-mint/5 px-2.5 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-mint shadow-[0_0_10px_rgba(56,217,197,0.45)]" />

              <span className="text-[9px] font-medium text-mint">
                System Ready
              </span>
            </div>
          </div>

          {/* workflow */}
          <div className="mt-7">
            <div className="space-y-3">
              {steps.map((step, index) => {
                const Icon = step.icon;
                const isActive = activeStep === index;
                const isComplete = index < activeStep;

                return (
                  <div key={step.label}>
                    <motion.div
                      animate={{
                        borderColor: isActive
                          ? "rgba(79,124,255,0.42)"
                          : "rgba(32,41,54,0.9)",
                        backgroundColor: isActive
                          ? "rgba(79,124,255,0.07)"
                          : "rgba(13,17,24,0.72)",
                        y: isActive && !reduceMotion ? -1 : 0,
                      }}
                      transition={{
                        duration: 0.3,
                        ease: "easeOut",
                      }}
                      className="relative flex items-center gap-3 rounded-xl border px-4 py-3.5"
                    >
                      <motion.div
                        animate={{
                          scale: isActive && !reduceMotion ? [1, 1.05, 1] : 1,
                        }}
                        transition={{
                          duration: 0.9,
                          repeat: isActive && !reduceMotion ? Infinity : 0,
                          ease: "easeInOut",
                        }}
                        className={[
                          "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border",
                          isActive
                            ? "border-primary/25 bg-primary/[0.08]"
                            : "border-border bg-elevated",
                        ].join(" ")}
                      >
                        <Icon
                          className={
                            isActive
                              ? "h-4 w-4 text-primary"
                              : isComplete
                                ? "h-4 w-4 text-mint"
                                : "h-4 w-4 text-muted-foreground"
                          }
                          strokeWidth={1.7}
                          aria-hidden="true"
                        />
                      </motion.div>

                      <div className="min-w-0 flex-1">
                        <div className="flex items-center justify-between gap-3">
                          <p
                            className={[
                              "text-xs font-semibold",
                              isActive
                                ? "text-foreground"
                                : "text-muted-foreground",
                            ].join(" ")}
                          >
                            {step.label}
                          </p>

                          <span className="text-[9px] font-medium uppercase tracking-[0.1em] text-muted-foreground">
                            0{index + 1}
                          </span>
                        </div>

                        <p className="mt-1 text-[10px] leading-4 text-muted-foreground">
                          {step.detail}
                        </p>
                      </div>

                      <motion.span
                        animate={{
                          opacity: isActive ? 1 : 0.25,
                          scale: isActive ? 1 : 0.85,
                        }}
                        className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                      />
                    </motion.div>

                    {index < steps.length - 1 && (
                      <div className="relative ml-5 h-4">
                        <div className="absolute left-0 top-0 h-full w-px bg-border" />

                        <motion.div
                          animate={{
                            height:
                              activeStep > index
                                ? "100%"
                                : activeStep === index
                                  ? "55%"
                                  : "0%",
                          }}
                          transition={{
                            duration: 0.45,
                            ease: "easeOut",
                          }}
                          className="absolute left-0 top-0 w-px bg-primary"
                        />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* active state */}
          <motion.div
            layout
            className="mt-5 rounded-xl border border-primary/15 bg-primary/[0.035] p-4"
          >
            <div className="flex items-start gap-3">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-primary/20 bg-primary/[0.06]">
                <Sparkles
                  className="h-4 w-4 text-primary"
                  strokeWidth={1.7}
                  aria-hidden="true"
                />
              </div>

              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <p className="text-xs font-semibold text-foreground">
                    {steps[activeStep].label}
                  </p>

                  <span className="h-1 w-1 rounded-full bg-primary/60" />

                  <span className="text-[9px] uppercase tracking-[0.1em] text-primary">
                    Active
                  </span>
                </div>

                <p className="mt-1 text-[11px] leading-5 text-muted-foreground">
                  {steps[activeStep].detail}. The next stage continues
                  automatically through the workflow.
                </p>
              </div>
            </div>
          </motion.div>

          {/* system footer */}
          <div className="mt-5 flex items-center justify-between border-t border-border pt-4">
            <div className="flex items-center gap-2">
              <Workflow className="h-3.5 w-3.5 text-primary" />

              <span className="text-[9px] font-medium text-muted-foreground">
                Workflow-first automation
              </span>
            </div>

            <span className="text-[9px] font-semibold tracking-[0.08em] text-muted-foreground">
              CONCEPT VIEW
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
export default function AIAutomation() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="min-h-screen overflow-hidden bg-background text-foreground">
      {/* ================================================================
    HERO — AI AUTOMATION SYSTEM EXPERIENCE
   ================================================================ */}
      <section className="relative overflow-hidden border-b border-border/70">
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden="true"
        >
          <div className="absolute left-[4%] top-[8%] h-80 w-80 rounded-full bg-primary/[0.055] blur-3xl" />
          <div className="absolute right-[8%] top-[22%] h-72 w-72 rounded-full bg-violet/[0.045] blur-3xl" />

          <div
            className="absolute inset-0 opacity-[0.035]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(32,41,54,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(32,41,54,0.8) 1px, transparent 1px)",
              backgroundSize: "64px 64px",
              maskImage: "linear-gradient(to bottom, black, transparent 88%)",
            }}
          />
        </div>

        <div className="container relative">
          <div className="grid min-h-[720px] items-center gap-12 py-24 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16 lg:py-28">
            {/* ============================================================
          LEFT — POSITIONING
         ============================================================ */}
            <motion.div
              initial={
                reduceMotion
                  ? false
                  : {
                      opacity: 0,
                      y: 18,
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
              className="max-w-[650px]"
            >
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface/80 px-3 py-2">
                <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_10px_rgba(79,124,255,0.5)]" />

                <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                  AI AUTOMATION
                </span>
              </div>

              <h1 className="max-w-[680px] text-4xl font-bold leading-[1.04] tracking-[-0.035em] text-foreground sm:text-5xl lg:text-[62px]">
                Turn repetitive work into
                <span className="block text-primary">
                  intelligent workflows.
                </span>
              </h1>

              <p className="mt-6 max-w-[630px] text-base leading-7 text-muted-foreground md:text-[18px] md:leading-8">
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

              <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-[11px] text-muted-foreground">
                <span className="flex items-center gap-2">
                  <Check className="h-3.5 w-3.5 text-mint" />
                  Workflow-first
                </span>

                <span className="flex items-center gap-2">
                  <Check className="h-3.5 w-3.5 text-mint" />
                  AI where useful
                </span>

                <span className="flex items-center gap-2">
                  <Check className="h-3.5 w-3.5 text-mint" />
                  Built around your process
                </span>
              </div>
            </motion.div>

            {/* ============================================================
          RIGHT — INTERACTIVE AUTOMATION SYSTEM
         ============================================================ */}
            <AutomationHeroVisual reduceMotion={reduceMotion} />
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
