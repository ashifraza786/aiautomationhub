import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  Blocks,
  BrainCircuit,
  CircleCheck,
  Workflow,
} from "lucide-react";

const differentiators = [
  {
    number: "01",
    title: "Business-First Thinking",
    description: "We Start With the Problem.",
    detail:
      "Before choosing a technology, we understand the business requirement, workflow and outcome that actually matters.",
    icon: Blocks,
    accent: "blue",
  },
  {
    number: "02",
    title: "Built Around Your Workflow",
    description: "Your Business Doesn't Have to Fit the Software.",
    detail:
      "The solution is shaped around how your team works instead of forcing your business into a fixed process.",
    icon: Workflow,
    accent: "blue",
  },
  {
    number: "03",
    title: "AI With a Purpose",
    description: "AI Should Do Something Useful.",
    detail:
      "We look for practical opportunities where AI can reduce repetitive work, improve workflows or support better decisions.",
    icon: BrainCircuit,
    accent: "violet",
  },
  {
    number: "04",
    title: "Connected Technology",
    description: "Your Tools Should Work Together.",
    detail:
      "Websites, software, business systems and automation should contribute to one connected operational experience.",
    icon: CircleCheck,
    accent: "mint",
  },
  {
    number: "05",
    title: "Built to Grow",
    description: "Start With What You Need. Build Toward What's Next.",
    detail:
      "Start with the immediate requirement while keeping the solution ready to evolve as the business grows.",
    icon: ArrowRight,
    accent: "mint",
  },
];

function getAccentClasses(accent: string) {
  if (accent === "mint") {
    return {
      icon: "border-mint/20 bg-mint/[0.05] text-mint group-hover:border-mint/40 group-hover:bg-mint/[0.08]",
      number: "text-mint",
      line: "bg-mint/50",
    };
  }

  if (accent === "violet") {
    return {
      icon: "border-violet/20 bg-violet/[0.05] text-violet group-hover:border-violet/40 group-hover:bg-violet/[0.08]",
      number: "text-violet",
      line: "bg-violet/50",
    };
  }

  return {
    icon: "border-primary/20 bg-primary/[0.05] text-primary group-hover:border-primary/40 group-hover:bg-primary/[0.08]",
    number: "text-primary",
    line: "bg-primary/50",
  };
}

export default function WhyAIHub() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="why-ai-automationhub"
      aria-labelledby="why-ai-automationhub-heading"
      className="section-feature section-fade-divider relative overflow-hidden"
    >
      {/* ================================================================
          BACKGROUND ATMOSPHERE
         ================================================================ */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute right-[-120px] top-[20%] h-80 w-80 rounded-full bg-primary/[0.035] blur-3xl" />
        <div className="absolute left-[-120px] bottom-[8%] h-72 w-72 rounded-full bg-violet/[0.025] blur-3xl" />

        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(32,41,54,0.35) 1px, transparent 1px), linear-gradient(90deg, rgba(32,41,54,0.35) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
            maskImage:
              "linear-gradient(to bottom, transparent, black 18%, black 82%, transparent)",
          }}
        />
      </div>

      <div className="container relative">
        {/* ================================================================
            INTRO
           ================================================================ */}
        <motion.div
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
            amount: 0.25,
          }}
          transition={{
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="section-intro-left"
        >
          <p className="section-eyebrow type-eyebrow">WHY AI AUTOMATIONHUB</p>

          <h2
            id="why-ai-automationhub-heading"
            className="section-title type-section-title max-w-[800px]"
          >
            Technology Should Solve Problems —
            <span className="block text-primary">Not Create More.</span>
          </h2>

          <p className="section-description type-body-large max-w-[700px]">
            We don't start with a technology. We start with your business,
            understand how it works, and build the right solution around it.
          </p>
        </motion.div>

        {/* ================================================================
            DIFFERENTIATORS
         ================================================================ */}
        <div className="mt-14 grid gap-4 lg:grid-cols-2 lg:gap-5">
          {differentiators.map((item, index) => {
            const Icon = item.icon;
            const accent = getAccentClasses(item.accent);
            const isLast = index === differentiators.length - 1;

            return (
              <motion.article
                key={item.number}
                initial={
                  reduceMotion
                    ? false
                    : {
                        opacity: 0,
                        y: 22,
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
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.07,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={[
                  "group relative overflow-hidden rounded-2xl border border-border/80 bg-surface/70 p-6 transition-all duration-300",
                  "hover:-translate-y-1 hover:border-primary/25 hover:bg-elevated/80",
                  "md:p-7",
                  isLast ? "lg:col-span-2" : "",
                ].join(" ")}
              >
                {/* Accent line */}
                <div
                  className={[
                    "absolute left-0 top-0 h-px w-0 transition-all duration-500 group-hover:w-24",
                    accent.line,
                  ].join(" ")}
                  aria-hidden="true"
                />

                <div className="flex items-start gap-5">
                  {/* Icon */}
                  <motion.div
                    whileHover={
                      reduceMotion
                        ? undefined
                        : {
                            scale: 1.04,
                          }
                    }
                    className={[
                      "flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border transition-all duration-300",
                      accent.icon,
                    ].join(" ")}
                  >
                    <Icon
                      className="h-5 w-5"
                      strokeWidth={1.7}
                      aria-hidden="true"
                    />
                  </motion.div>

                  {/* Content */}
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                      <span
                        className={[
                          "font-mono text-[10px] font-semibold tracking-[0.14em]",
                          accent.number,
                        ].join(" ")}
                      >
                        {item.number}
                      </span>

                      <span className="h-1 w-1 rounded-full bg-border" />

                      <span className="text-[9px] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                        Principle
                      </span>
                    </div>

                    <h3 className="mt-3 text-[19px] font-semibold leading-[1.25] tracking-[-0.018em] text-[#E8EDF5] md:text-xl">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm font-medium leading-6 text-foreground/90 md:text-[15px]">
                      {item.description}
                    </p>

                    <p className="mt-3 max-w-[640px] text-[13px] leading-[1.65] text-muted-foreground">
                      {item.detail}
                    </p>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* ================================================================
            CLOSING STATEMENT
           ================================================================ */}
        <motion.div
          initial={
            reduceMotion
              ? false
              : {
                  opacity: 0,
                  y: 18,
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
            amount: 0.25,
          }}
          transition={{
            duration: 0.55,
            delay: 0.1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-12 border-t border-border/70 pt-9 md:mt-16 md:pt-11"
        >
          <div className="flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                OUR APPROACH
              </p>

              <p className="mt-3 text-xl font-semibold tracking-[-0.02em] text-foreground md:text-2xl">
                We Don't Just Build Software.
              </p>

              <p className="mt-1.5 text-xl font-semibold tracking-[-0.02em] text-primary md:text-2xl">
                We Build Better Ways of Working.
              </p>
            </div>

            <a
              href="#process"
              className="group inline-flex h-11 shrink-0 items-center justify-center gap-2 rounded-lg border border-border bg-surface px-5 text-sm font-semibold text-foreground transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/35 hover:bg-elevated hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              See How We Work
              <ArrowRight
                className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
                strokeWidth={1.8}
                aria-hidden="true"
              />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
