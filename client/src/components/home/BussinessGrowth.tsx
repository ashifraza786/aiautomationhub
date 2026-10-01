import { motion, useReducedMotion } from "framer-motion";
import {
  BarChart3,
  Bot,
  Megaphone,
  MousePointerClick,
  RefreshCw,
  Settings2,
  TrendingUp,
  Wrench,
  ArrowRight,
} from "lucide-react";

const stages = [
  {
    number: "01",
    label: "Build",
    description: "Create the digital foundation.",
    items: ["Websites", "E-commerce", "Software", "ERP"],
    icon: Wrench,
    accent: "blue",
  },
  {
    number: "02",
    label: "Promote",
    description: "Reach the right customers.",
    items: ["Advertising", "Promotion", "Campaigns", "Leads"],
    icon: Megaphone,
    accent: "blue",
  },
  {
    number: "03",
    label: "Capture",
    description: "Turn attention into opportunities.",
    items: ["Search", "Social", "Website", "CRM"],
    icon: MousePointerClick,
    accent: "violet",
  },
  {
    number: "04",
    label: "Automate",
    description: "Reduce repetitive work.",
    items: ["Qualification", "Follow-ups", "WhatsApp", "Workflows"],
    icon: Bot,
    accent: "blue",
  },
  {
    number: "05",
    label: "Grow",
    description: "Improve business performance.",
    items: ["Qualified Leads", "Response", "Efficiency", "Decisions"],
    icon: TrendingUp,
    accent: "mint",
  },
  {
    number: "06",
    label: "Analyze",
    description: "Learn and improve continuously.",
    items: ["Visibility", "Signals", "Data", "Insights"],
    icon: BarChart3,
    accent: "mint",
  },
];

function accentClasses(accent: string) {
  switch (accent) {
    case "mint":
      return {
        icon: "border-mint/20 bg-mint/[0.05] text-mint",
        active: "bg-mint",
        text: "text-mint",
      };
    case "violet":
      return {
        icon: "border-violet/20 bg-violet/[0.05] text-violet",
        active: "bg-violet",
        text: "text-violet",
      };
    default:
      return {
        icon: "border-primary/20 bg-primary/[0.05] text-primary",
        active: "bg-primary",
        text: "text-primary",
      };
  }
}

function StageCard({
  stage,
  index,
  reduceMotion,
}: {
  stage: (typeof stages)[number];
  index: number;
  reduceMotion: boolean;
}) {
  const Icon = stage.icon;
  const accent = accentClasses(stage.accent);

  return (
    <motion.article
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
        amount: 0.15,
      }}
      transition={{
        duration: 0.5,
        delay: index * 0.06,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group relative overflow-hidden rounded-2xl border border-border/80 bg-surface/70 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/25 hover:bg-elevated/80 md:p-6"
    >
      {/* Top accent */}
      <div
        className={[
          "absolute left-0 top-0 h-px w-0 transition-all duration-500 group-hover:w-20",
          accent.active,
        ].join(" ")}
        aria-hidden="true"
      />

      <div className="flex items-start justify-between gap-4">
        <div
          className={[
            "flex h-10 w-10 items-center justify-center rounded-xl border transition-all duration-300 group-hover:scale-[1.03]",
            accent.icon,
          ].join(" ")}
        >
          <Icon
            className="h-[18px] w-[18px]"
            strokeWidth={1.7}
            aria-hidden="true"
          />
        </div>

        <span
          className={[
            "font-mono text-[10px] font-semibold tracking-[0.14em]",
            accent.text,
          ].join(" ")}
        >
          {stage.number}
        </span>
      </div>

      <h3 className="mt-6 text-[19px] font-semibold tracking-[-0.018em] text-[#E8EDF5]">
        {stage.label}
      </h3>

      <p className="mt-2 text-[13px] leading-6 text-muted-foreground">
        {stage.description}
      </p>

      <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2 border-t border-border/70 pt-4">
        {stage.items.map((item) => (
          <span
            key={item}
            className="flex items-center gap-2 text-[10px] text-muted-foreground"
          >
            <span
              className={[
                "h-1.5 w-1.5 rounded-full opacity-70",
                accent.active,
              ].join(" ")}
              aria-hidden="true"
            />
            {item}
          </span>
        ))}
      </div>
    </motion.article>
  );
}

export default function BusinessGrowth() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="business-growth"
      aria-labelledby="business-growth-heading"
      className="section-feature section-fade-divider relative overflow-hidden"
    >
      {/* ================================================================
          BACKGROUND
         ================================================================ */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute right-[-140px] top-[18%] h-96 w-96 rounded-full bg-primary/[0.035] blur-3xl" />
        <div className="absolute bottom-[-140px] left-[-120px] h-80 w-80 rounded-full bg-mint/[0.025] blur-3xl" />

        <div
          className="absolute inset-0 opacity-[0.07]"
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
          <p className="section-eyebrow type-eyebrow">
            BUILD • PROMOTE • AUTOMATE • GROW
          </p>

          <h2
            id="business-growth-heading"
            className="section-title type-section-title max-w-[800px]"
          >
            Build the Right System.
            <span className="block text-primary">Then Grow With It.</span>
          </h2>

          <p className="section-description type-body-large max-w-[700px]">
            Your digital presence is only the beginning. We help businesses
            build the right technology, reach the right customers, automate
            operations and use data to make better decisions.
          </p>
        </motion.div>

        {/* ================================================================
            DESKTOP GROWTH SYSTEM
           ================================================================ */}
        <div className="relative mx-auto mt-16 hidden max-w-[1080px] lg:block lg:mt-20">
          <div className="relative min-h-[660px]">
            {/* Main system ring */}
            <div
              className="absolute left-1/2 top-1/2 h-[570px] w-[570px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-border/70"
              aria-hidden="true"
            />

            {/* Inner ring */}
            <div
              className="absolute left-1/2 top-1/2 h-[390px] w-[390px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/[0.08]"
              aria-hidden="true"
            />

            {/* Animated system path */}
            {!reduceMotion && (
              <motion.div
                className="absolute left-1/2 top-1/2 h-[570px] w-[570px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-transparent border-t-primary/50 border-r-primary/10"
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 18,
                  repeat: Infinity,
                  ease: "linear",
                }}
                aria-hidden="true"
              />
            )}

            {/* Center system */}
            <motion.div
              initial={
                reduceMotion
                  ? false
                  : {
                      opacity: 0,
                      scale: 0.94,
                    }
              }
              whileInView={
                reduceMotion
                  ? undefined
                  : {
                      opacity: 1,
                      scale: 1,
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
              className="absolute left-1/2 top-1/2 z-10 flex h-40 w-40 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-primary/25 bg-elevated shadow-[0_0_70px_rgba(79,124,255,0.10)]"
            >
              <RefreshCw
                className="h-6 w-6 text-primary"
                strokeWidth={1.6}
                aria-hidden="true"
              />

              <span className="mt-3 text-[10px] font-semibold uppercase tracking-[0.14em] text-primary">
                Business Growth
              </span>

              <span className="mt-2 text-center text-[10px] leading-4 text-muted-foreground">
                One connected
                <br />
                growth system
              </span>
            </motion.div>

            {/* Stage positions */}
            <div className="absolute inset-0">
              {/* Build */}
              <div className="absolute left-0 top-0 w-[330px]">
                <StageCard
                  stage={stages[0]}
                  index={0}
                  reduceMotion={Boolean(reduceMotion)}
                />
              </div>

              {/* Promote */}
              <div className="absolute right-0 top-0 w-[330px]">
                <StageCard
                  stage={stages[1]}
                  index={1}
                  reduceMotion={Boolean(reduceMotion)}
                />
              </div>

              {/* Capture */}
              <div className="absolute right-0 top-1/2 w-[330px] -translate-y-1/2">
                <StageCard
                  stage={stages[2]}
                  index={2}
                  reduceMotion={Boolean(reduceMotion)}
                />
              </div>

              {/* Automate */}
              <div className="absolute bottom-0 right-0 w-[330px]">
                <StageCard
                  stage={stages[3]}
                  index={3}
                  reduceMotion={Boolean(reduceMotion)}
                />
              </div>

              {/* Grow */}
              <div className="absolute bottom-0 left-0 w-[330px]">
                <StageCard
                  stage={stages[4]}
                  index={4}
                  reduceMotion={Boolean(reduceMotion)}
                />
              </div>

              {/* Analyze */}
              <div className="absolute left-0 top-1/2 w-[330px] -translate-y-1/2">
                <StageCard
                  stage={stages[5]}
                  index={5}
                  reduceMotion={Boolean(reduceMotion)}
                />
              </div>
            </div>
          </div>
        </div>

        {/* ================================================================
            MOBILE / TABLET FLOW
           ================================================================ */}
        <div className="mt-12 lg:hidden">
          <div className="relative">
            {/* Vertical system rail */}
            <div
              className="absolute bottom-8 left-5 top-8 w-px bg-border/80"
              aria-hidden="true"
            >
              {!reduceMotion && (
                <motion.div
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  viewport={{
                    once: true,
                    amount: 0.15,
                  }}
                  transition={{
                    duration: 1.2,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="h-full origin-top bg-gradient-to-b from-primary/60 via-primary/30 to-mint/50"
                />
              )}
            </div>

            <div className="space-y-4">
              {stages.map((stage, index) => (
                <div key={stage.number} className="relative pl-12">
                  <div className="absolute left-0 top-5 z-10 flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-background">
                    <span className="font-mono text-[9px] font-semibold text-primary">
                      {stage.number}
                    </span>
                  </div>

                  <StageCard
                    stage={stage}
                    index={index}
                    reduceMotion={Boolean(reduceMotion)}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ================================================================
            GROWTH PRINCIPLE
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
          }}
          className="mt-12 flex flex-col gap-5 border-t border-border/70 pt-8 md:mt-16 md:flex-row md:items-center md:justify-between md:pt-10"
        >
          <div className="flex items-start gap-3">
            <Settings2
              className="mt-0.5 h-5 w-5 shrink-0 text-primary"
              strokeWidth={1.7}
              aria-hidden="true"
            />

            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                THE GROWTH LOOP
              </p>

              <p className="mt-1.5 max-w-[700px] text-sm leading-6 text-muted-foreground">
                Build what your business needs today. Connect it to what your
                business will need tomorrow.
              </p>
            </div>
          </div>

          <a
            href="/start-project"
            className="group inline-flex h-11 shrink-0 items-center justify-center gap-2 rounded-lg bg-primary px-5 text-sm font-semibold text-primary-foreground shadow-[0_0_28px_rgba(79,124,255,0.10)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary/95 hover:shadow-[0_0_34px_rgba(79,124,255,0.18)] focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            Start Your Project
            <ArrowRight
              className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
