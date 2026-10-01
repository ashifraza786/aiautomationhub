import { motion, useReducedMotion } from "framer-motion";
import {
  Search,
  Route,
  Hammer,
  Plug,
  Rocket,
  RefreshCw,
  ArrowDown,
  ArrowRight,
  Check,
} from "lucide-react";

type ProcessStep = {
  number: string;
  title: string;
  description: string;
  icon: typeof Search;
  accent: "blue" | "mint";
};

const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Discover",
    description:
      "We understand your business, current workflow, goals and the problems you want to solve.",
    icon: Search,
    accent: "blue",
  },
  {
    number: "02",
    title: "Plan",
    description:
      "We turn the requirement into a practical solution structure, priorities and implementation roadmap.",
    icon: Route,
    accent: "blue",
  },
  {
    number: "03",
    title: "Build",
    description:
      "We design and develop the right combination of websites, software, systems and automation.",
    icon: Hammer,
    accent: "blue",
  },
  {
    number: "04",
    title: "Integrate",
    description:
      "We connect the parts of the solution so information and workflows can move together smoothly.",
    icon: Plug,
    accent: "mint",
  },
  {
    number: "05",
    title: "Test & Launch",
    description:
      "We test the solution, refine the experience and prepare it for real-world use.",
    icon: Rocket,
    accent: "mint",
  },
  {
    number: "06",
    title: "Improve",
    description:
      "Once the system is running, we identify opportunities to improve, expand and evolve it with the business.",
    icon: RefreshCw,
    accent: "mint",
  },
];

function StepCard({
  step,
  index,
  reduceMotion,
}: {
  step: ProcessStep;
  index: number;
  reduceMotion: boolean;
}) {
  const Icon = step.icon;

  const isMint = step.accent === "mint";

  return (
    <motion.article
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
        amount: 0.25,
      }}
      transition={{
        duration: 0.55,
        delay: index * 0.06,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group relative min-w-0"
    >
      {/* Desktop connector */}
      {index < processSteps.length - 1 && (
        <div
          className="absolute left-[calc(100%+1px)] top-[23px] hidden h-px w-[calc(100%-8px)] lg:block"
          aria-hidden="true"
        >
          <div className="relative h-full w-full overflow-hidden bg-border">
            <motion.div
              initial={reduceMotion ? { scaleX: 1 } : { scaleX: 0 }}
              whileInView={reduceMotion ? undefined : { scaleX: 1 }}
              viewport={{
                once: true,
                amount: 0.5,
              }}
              transition={{
                duration: 0.7,
                delay: index * 0.08 + 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="h-full origin-left bg-gradient-to-r from-primary/70 to-primary/15"
            />
          </div>

          <ArrowRight
            className="absolute -right-1 -top-[7px] h-3.5 w-3.5 text-primary/50"
            strokeWidth={1.5}
          />
        </div>
      )}

      {/* Mobile connector */}
      {index < processSteps.length - 1 && (
        <div
          className="absolute left-[23px] top-[64px] h-[calc(100%-28px)] w-px bg-border lg:hidden"
          aria-hidden="true"
        >
          <motion.div
            initial={reduceMotion ? { scaleY: 1 } : { scaleY: 0 }}
            whileInView={reduceMotion ? undefined : { scaleY: 1 }}
            viewport={{
              once: true,
              amount: 0.5,
            }}
            transition={{
              duration: 0.55,
              delay: index * 0.06 + 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="h-full origin-top bg-gradient-to-b from-primary/60 to-primary/10"
          />
        </div>
      )}

      <div className="relative z-10">
        {/* Number / icon node */}
        <div className="flex items-start gap-4 lg:block">
          <div
            className={[
              "relative flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border transition-all duration-300",
              isMint
                ? "border-mint/20 bg-mint/[0.06] text-mint group-hover:border-mint/35 group-hover:bg-mint/[0.09]"
                : "border-primary/20 bg-primary/[0.06] text-primary group-hover:border-primary/35 group-hover:bg-primary/[0.09]",
            ].join(" ")}
          >
            <Icon className="h-5 w-5" strokeWidth={1.7} aria-hidden="true" />

            <span
              className={[
                "absolute -right-1.5 -top-1.5 flex h-4 min-w-4 items-center justify-center rounded-full border px-1 text-[8px] font-semibold leading-none",
                isMint
                  ? "border-mint/20 bg-[#0D1118] text-mint"
                  : "border-primary/20 bg-[#0D1118] text-primary",
              ].join(" ")}
            >
              {step.number}
            </span>
          </div>

          {/* Content */}
          <div className="min-w-0 pb-10 lg:mt-6 lg:pb-0">
            <div className="mb-2 flex items-center gap-2">
              <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                Step {step.number}
              </span>

              {index === 0 && (
                <span className="h-1 w-1 rounded-full bg-primary/60" />
              )}

              {index === processSteps.length - 1 && (
                <span className="h-1 w-1 rounded-full bg-mint/70" />
              )}
            </div>

            <h3 className="text-[20px] font-semibold tracking-[-0.015em] text-[#E8EDF5]">
              {step.title}
            </h3>

            <p className="mt-2 max-w-[190px] text-[13px] leading-[1.6] text-muted-foreground">
              {step.description}
            </p>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export default function HowWeWork() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="process"
      aria-labelledby="how-we-work-heading"
      className="relative overflow-hidden border-t border-border/60 bg-background"
    >
      {/* Background atmosphere */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute left-[10%] top-[22%] h-72 w-72 rounded-full bg-primary/[0.035] blur-3xl" />
        <div className="absolute right-[8%] bottom-[12%] h-72 w-72 rounded-full bg-mint/[0.025] blur-3xl" />

        <div
          className="absolute inset-0 opacity-[0.16]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(32,41,54,0.28) 1px, transparent 1px), linear-gradient(90deg, rgba(32,41,54,0.28) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
            maskImage:
              "linear-gradient(to bottom, transparent, black 18%, black 82%, transparent)",
          }}
        />
      </div>

      <div className="container relative py-[72px] md:py-24 lg:py-[120px]">
        {/* Section intro */}
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
            amount: 0.3,
          }}
          transition={{
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mx-auto max-w-[700px] text-center"
        >
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.12em] text-primary">
            HOW WE WORK
          </p>

          <h2
            id="how-we-work-heading"
            className="text-[32px] font-bold leading-[1.15] tracking-[-0.025em] text-foreground md:text-[38px] lg:text-[44px]"
          >
            From Business Problem to{" "}
            <span className="text-primary">Working Solution.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-[680px] text-base leading-[1.65] text-muted-foreground md:text-[17px]">
            We start with how your business works, identify what needs to
            improve, and then build the right combination of software, systems
            and automation.
          </p>
        </motion.div>

        {/* Process timeline */}
        <div className="mt-16 lg:mt-20">
          <div className="grid grid-cols-1 lg:grid-cols-6 lg:gap-5">
            {processSteps.map((step, index) => (
              <StepCard
                key={step.number}
                step={step}
                index={index}
                reduceMotion={Boolean(reduceMotion)}
              />
            ))}
          </div>
        </div>

        {/* Bottom message */}
        <motion.div
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
            amount: 0.35,
          }}
          transition={{
            duration: 0.6,
            delay: 0.15,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-12 flex flex-col gap-6 border-t border-border pt-8 md:mt-16 md:flex-row md:items-center md:justify-between md:pt-10"
        >
          <div className="flex min-w-0 items-start gap-4">
            <div
              className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-mint/20 bg-mint/[0.05]"
              aria-hidden="true"
            >
              <Check className="h-4 w-4 text-mint" strokeWidth={2} />
            </div>

            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                BUILT AROUND YOU
              </p>

              <h3 className="mt-1.5 text-[18px] font-semibold tracking-[-0.015em] text-[#E8EDF5]">
                You Don't Need to Know the Technology.
              </h3>

              <p className="mt-1 max-w-[620px] text-sm leading-[1.55] text-muted-foreground">
                Tell us what you are trying to build, improve or automate. We
                will help shape the technology around the requirement.
              </p>
            </div>
          </div>

          <a
            href="/start-project"
            className="inline-flex h-11 shrink-0 items-center justify-center gap-2 rounded-lg bg-primary px-5 text-sm font-semibold text-primary-foreground shadow-[0_0_28px_rgba(79,124,255,0.12)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary/95 hover:shadow-[0_0_34px_rgba(79,124,255,0.2)] focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            Tell Us What You Need
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </motion.div>
      </div>

      {/* Mobile bottom fade */}
      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent"
        aria-hidden="true"
      />
    </section>
  );
}
