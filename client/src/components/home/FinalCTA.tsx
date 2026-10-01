import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, MessageSquare } from "lucide-react";

export default function FinalCTA() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="final-cta"
      aria-labelledby="final-cta-heading"
      className="section-feature section-fade-divider relative overflow-hidden"
    >
      {/* ================================================================
          BACKGROUND ATMOSPHERE
         ================================================================ */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute left-1/2 top-1/2 h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/[0.035] blur-3xl" />

        <div className="absolute right-[-140px] top-[15%] h-72 w-72 rounded-full bg-violet/[0.025] blur-3xl" />

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
            duration: 0.65,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative overflow-hidden rounded-3xl border border-border/80 bg-surface/80 px-6 py-12 text-center shadow-[0_24px_90px_rgba(0,0,0,0.22)] md:px-12 md:py-16 lg:px-20 lg:py-20"
        >
          {/* ============================================================
              SYSTEM GRID
             ============================================================ */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.05]"
            aria-hidden="true"
            style={{
              backgroundImage:
                "linear-gradient(rgba(32,41,54,0.55) 1px, transparent 1px), linear-gradient(90deg, rgba(32,41,54,0.55) 1px, transparent 1px)",
              backgroundSize: "56px 56px",
              maskImage:
                "radial-gradient(circle at center, black 0%, transparent 72%)",
            }}
          />

          {/* ============================================================
              TOP SYSTEM LINE
             ============================================================ */}
          <div
            className="pointer-events-none absolute left-1/2 top-0 h-px w-[70%] -translate-x-1/2 bg-gradient-to-r from-transparent via-primary/50 to-transparent"
            aria-hidden="true"
          />

          {/* ============================================================
              AMBIENT GLOW
             ============================================================ */}
          <div
            className="pointer-events-none absolute left-1/2 top-[-100px] h-64 w-64 -translate-x-1/2 rounded-full bg-primary/[0.08] blur-3xl"
            aria-hidden="true"
          />

          <div className="relative mx-auto max-w-[760px]">
            {/* Icon */}
            <motion.div
              initial={
                reduceMotion
                  ? false
                  : {
                      opacity: 0,
                      scale: 0.9,
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
                amount: 0.3,
              }}
              transition={{
                duration: 0.45,
                delay: 0.1,
              }}
              className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl border border-primary/25 bg-primary/[0.08] text-primary shadow-[0_0_28px_rgba(79,124,255,0.08)]"
            >
              <MessageSquare
                className="h-5 w-5"
                strokeWidth={1.7}
                aria-hidden="true"
              />
            </motion.div>

            {/* Eyebrow */}
            <p className="mt-6 text-xs font-semibold uppercase tracking-[0.14em] text-primary">
              LET'S BUILD SOMETHING USEFUL
            </p>

            {/* Heading */}
            <h2
              id="final-cta-heading"
              className="mt-4 text-3xl font-bold leading-[1.08] tracking-[-0.03em] text-foreground md:text-4xl lg:text-[50px]"
            >
              Have a Business Idea
              <span className="block text-primary">or Problem?</span>
            </h2>

            {/* Supporting copy */}
            <p className="mx-auto mt-5 max-w-[650px] text-base leading-7 text-muted-foreground md:text-[17px]">
              Tell us what you're trying to build, improve or automate. We'll
              help you turn the requirement into the right digital solution.
            </p>

            {/* ============================================================
                ACTIONS
               ============================================================ */}
            <div className="mt-9 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
              <a
                href="/start-project"
                className="group inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-primary px-6 text-sm font-semibold text-primary-foreground shadow-[0_0_30px_rgba(79,124,255,0.13)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary/95 hover:shadow-[0_0_38px_rgba(79,124,255,0.22)] focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
              >
                Tell Us What You Need
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
                  strokeWidth={1.8}
                  aria-hidden="true"
                />
              </a>

              <a
                href="/work"
                className="group inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-border bg-background px-6 text-sm font-semibold text-foreground transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/35 hover:bg-elevated hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
              >
                Explore Our Work
                <ArrowRight
                  className="h-4 w-4 text-muted-foreground transition-transform duration-200 group-hover:translate-x-0.5 group-hover:text-primary"
                  strokeWidth={1.8}
                  aria-hidden="true"
                />
              </a>
            </div>

            {/* Small reassurance */}
            <div className="mt-8 flex items-center justify-center gap-2">
              <span
                className="h-1.5 w-1.5 rounded-full bg-mint"
                aria-hidden="true"
              />

              <p className="text-xs leading-5 text-muted-foreground">
                Start by telling us what you need.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
