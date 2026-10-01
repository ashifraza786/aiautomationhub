import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  BrainCircuit,
  Globe2,
  Layers3,
  Network,
  Sparkles,
} from "lucide-react";

const evolution = [
  {
    number: "01",
    title: "Digital Presence",
    description: "Websites and digital experiences.",
    icon: Globe2,
    accent: "blue",
  },
  {
    number: "02",
    title: "Business Systems",
    description: "Software and connected business operations.",
    icon: Layers3,
    accent: "blue",
  },
  {
    number: "03",
    title: "Automation",
    description: "Workflows that reduce repetitive work.",
    icon: Network,
    accent: "violet",
  },
  {
    number: "04",
    title: "Intelligence",
    description: "AI that helps systems make better decisions.",
    icon: BrainCircuit,
    accent: "violet",
  },
  {
    number: "05",
    title: "Intelligent Business Platform",
    description: "A future connected ecosystem around the business.",
    icon: Sparkles,
    accent: "mint",
  },
];

function getAccent(accent: string) {
  if (accent === "mint") {
    return {
      icon: "border-mint/25 bg-mint/[0.06] text-mint",
      line: "bg-mint/50",
      number: "text-mint",
    };
  }

  if (accent === "violet") {
    return {
      icon: "border-violet/25 bg-violet/[0.06] text-violet",
      line: "bg-violet/50",
      number: "text-violet",
    };
  }

  return {
    icon: "border-primary/25 bg-primary/[0.06] text-primary",
    line: "bg-primary/50",
    number: "text-primary",
  };
}

export default function FutureVision() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="future-vision"
      aria-labelledby="future-vision-heading"
      className="section-feature section-fade-divider relative overflow-hidden"
    >
      {/* ================================================================
          BACKGROUND ATMOSPHERE
         ================================================================ */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute left-1/2 top-[42%] h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-primary/[0.035] blur-3xl" />

        <div className="absolute right-[-140px] top-[10%] h-80 w-80 rounded-full bg-violet/[0.025] blur-3xl" />

        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(32,41,54,0.45) 1px, transparent 1px), linear-gradient(90deg, rgba(32,41,54,0.45) 1px, transparent 1px)",
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
          className="section-intro-centered"
        >
          <p className="section-eyebrow type-eyebrow">WHERE WE'RE GOING</p>

          <h2
            id="future-vision-heading"
            className="section-title type-section-title max-w-[850px]"
          >
            From Digital Solutions to
            <span className="block text-primary">
              Intelligent Business Systems.
            </span>
          </h2>

          <p className="section-description type-body-large max-w-[700px]">
            We’re building toward a future where websites, business software,
            ERP, automation and AI work together as one connected business
            ecosystem.
          </p>
        </motion.div>

        {/* ================================================================
            EVOLUTION PATH
           ================================================================ */}
        <div className="relative mt-16 lg:mt-20">
          {/* Desktop progression rail */}
          <div
            className="absolute left-[8%] right-[8%] top-[25px] hidden h-px bg-border/80 lg:block"
            aria-hidden="true"
          >
            <motion.div
              initial={reduceMotion ? { scaleX: 1 } : { scaleX: 0 }}
              whileInView={
                reduceMotion
                  ? undefined
                  : {
                      scaleX: 1,
                    }
              }
              viewport={{
                once: true,
                amount: 0.35,
              }}
              transition={{
                duration: 1.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="h-full origin-left bg-gradient-to-r from-primary/50 via-violet/40 to-mint/50"
            />
          </div>

          <div className="grid gap-4 lg:grid-cols-5 lg:gap-3">
            {evolution.map((item, index) => {
              const Icon = item.icon;
              const accent = getAccent(item.accent);
              const isFinal = index === evolution.length - 1;

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
                    delay: index * 0.09,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="relative"
                >
                  {/* Progress node */}
                  <div
                    className={[
                      "relative z-10 mx-auto flex h-[50px] w-[50px] items-center justify-center rounded-full border bg-background shadow-[0_0_0_6px_rgba(8,10,15,0.9)]",
                      isFinal
                        ? "border-mint/40 bg-mint/[0.06]"
                        : "border-border",
                    ].join(" ")}
                  >
                    <Icon
                      className={[
                        "h-5 w-5 transition-colors duration-300",
                        isFinal ? "text-mint" : accent.number,
                      ].join(" ")}
                      strokeWidth={1.6}
                      aria-hidden="true"
                    />
                  </div>

                  {/* Card */}
                  <div
                    className={[
                      "group mt-5 h-full rounded-2xl border p-5 transition-all duration-300",
                      isFinal
                        ? "border-mint/25 bg-elevated shadow-[0_0_45px_rgba(56,217,197,0.06)] hover:-translate-y-1 hover:border-mint/40"
                        : "border-border/80 bg-surface/70 hover:-translate-y-1 hover:border-primary/25 hover:bg-elevated/80",
                    ].join(" ")}
                  >
                    <div className="flex items-center justify-between gap-3">
                      <span
                        className={[
                          "font-mono text-[10px] font-semibold tracking-[0.14em]",
                          isFinal ? "text-mint" : accent.number,
                        ].join(" ")}
                      >
                        {item.number}
                      </span>

                      {isFinal && (
                        <span className="rounded-full border border-mint/20 bg-mint/[0.05] px-2 py-1 text-[8px] font-semibold uppercase tracking-[0.1em] text-mint">
                          Future Direction
                        </span>
                      )}
                    </div>

                    <h3 className="mt-5 text-[16px] font-semibold leading-5 tracking-[-0.01em] text-[#E8EDF5]">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-[12px] leading-5 text-muted-foreground">
                      {item.description}
                    </p>
                  </div>

                  {/* Mobile progression */}
                  {!isFinal && (
                    <div
                      className="mx-auto h-5 w-px bg-gradient-to-b from-primary/40 to-border lg:hidden"
                      aria-hidden="true"
                    />
                  )}
                </motion.article>
              );
            })}
          </div>
        </div>

        {/* ================================================================
            VISION STATEMENT
           ================================================================ */}
        <motion.div
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
            amount: 0.2,
          }}
          transition={{
            duration: 0.6,
            delay: 0.1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative mt-16 overflow-hidden rounded-3xl border border-border/80 bg-surface/70 p-7 md:p-10 lg:mt-20 lg:p-14"
        >
          {/* System glow */}
          <div
            className="pointer-events-none absolute right-[-10%] top-[-30%] h-[420px] w-[420px] rounded-full bg-primary/[0.07] blur-3xl"
            aria-hidden="true"
          />

          <div
            className="pointer-events-none absolute bottom-[-35%] right-[15%] h-[280px] w-[280px] rounded-full bg-violet/[0.035] blur-3xl"
            aria-hidden="true"
          />

          {/* Decorative system lines */}
          <div
            className="pointer-events-none absolute right-10 top-10 hidden h-32 w-52 opacity-30 lg:block"
            aria-hidden="true"
          >
            <div className="absolute right-0 top-0 h-px w-full bg-gradient-to-l from-primary/50 to-transparent" />
            <div className="absolute right-0 top-0 h-full w-px bg-gradient-to-b from-primary/40 to-transparent" />
            <div className="absolute right-12 top-12 h-px w-28 bg-gradient-to-l from-violet/40 to-transparent" />
            <div className="absolute right-12 top-12 h-16 w-px bg-gradient-to-b from-violet/30 to-transparent" />
            <span className="absolute right-[-2px] top-[-2px] h-1.5 w-1.5 rounded-full bg-primary" />
            <span className="absolute right-[42px] top-[42px] h-1.5 w-1.5 rounded-full bg-violet" />
          </div>

          <div className="relative max-w-[800px]">
            <p className="section-eyebrow type-eyebrow">OUR DIRECTION</p>

            <h3 className="mt-4 text-2xl font-bold tracking-[-0.025em] text-foreground md:text-3xl lg:text-4xl">
              Technology Should Evolve With Your Business.
            </h3>

            <p className="mt-5 max-w-[680px] text-base leading-7 text-muted-foreground md:text-[17px]">
              Start with what you need today. Build toward what your business
              can become tomorrow.
            </p>

            <a
              href="/solutions"
              className="group mt-8 inline-flex h-11 items-center gap-2 rounded-lg border border-border bg-background px-5 text-sm font-semibold text-foreground transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/35 hover:bg-elevated hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              Explore What We Build
              <ArrowRight
                className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
                strokeWidth={1.8}
                aria-hidden="true"
              />
            </a>
          </div>
        </motion.div>

        {/* ================================================================
            CREDIBILITY NOTE
           ================================================================ */}
        <motion.p
          initial={
            reduceMotion
              ? false
              : {
                  opacity: 0,
                }
          }
          whileInView={
            reduceMotion
              ? undefined
              : {
                  opacity: 1,
                }
          }
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.5,
            delay: 0.15,
          }}
          className="mx-auto mt-7 max-w-[650px] text-center text-xs leading-5 text-muted-foreground"
        >
          This is our long-term direction — not a claim about a currently
          available product.
        </motion.p>
      </div>
    </section>
  );
}
