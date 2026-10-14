import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  BrainCircuit,
  CheckCircle2,
  Globe2,
  Layers3,
  Network,
  Sparkles,
  Workflow,
} from "lucide-react";

const stages = [
  {
    number: "01",
    title: "Digital Presence",
    description:
      "Create the digital foundation customers can discover and trust.",
    icon: Globe2,
    color: "blue",
  },
  {
    number: "02",
    title: "Business Systems",
    description: "Bring tools, information and everyday operations together.",
    icon: Layers3,
    color: "blue",
  },
  {
    number: "03",
    title: "Automation",
    description: "Connect lead response, follow-ups and repetitive workflows.",
    icon: Workflow,
    color: "violet",
  },
  {
    number: "04",
    title: "Intelligence",
    description:
      "Build toward AI-assisted insights and better-informed decisions.",
    icon: BrainCircuit,
    color: "violet",
  },
  {
    number: "05",
    title: "Intelligent Platform",
    description:
      "A connected ecosystem that brings systems, automation and intelligence together.",
    icon: Sparkles,
    color: "mint",
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

export default function FutureVision() {
  const reduceMotion = useReducedMotion();

  const reveal = (delay = 0) => ({
    initial: reduceMotion ? false : { opacity: 0, y: 20 },
    whileInView: reduceMotion ? undefined : { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.15 },
    transition: { duration: 0.65, delay, ease },
  });

  return (
    <section
      id="future-vision"
      aria-labelledby="future-vision-heading"
      className="section-feature section-fade-divider relative isolate overflow-hidden"
    >
      {/* Ambient background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute left-1/2 top-[15%] h-[520px] w-[720px] -translate-x-1/2 rounded-full bg-primary/[0.055] blur-[130px]" />
        <div className="absolute right-[-12%] top-[45%] h-[360px] w-[360px] rounded-full bg-violet/[0.045] blur-[110px]" />
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(150,165,190,.65) 1px,transparent 1px),linear-gradient(90deg,rgba(150,165,190,.65) 1px,transparent 1px)",
            backgroundSize: "48px 48px",
            maskImage:
              "linear-gradient(to bottom,transparent,black 15%,black 80%,transparent)",
          }}
        />
      </div>

      <div className="container relative">
        {/* Intro */}
        <motion.div {...reveal()} className="mx-auto max-w-[900px] text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/[0.055] px-3.5 py-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-40" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-primary">
              The bigger picture
            </span>
          </div>

          <h2
            id="future-vision-heading"
            className="text-balance text-4xl font-semibold leading-[1.08] tracking-[-0.045em] text-foreground sm:text-5xl lg:text-[64px]"
          >
            From digital solutions
            <span className="mt-1 block bg-gradient-to-r from-primary via-[#9AA9FF] to-violet bg-clip-text pb-2 text-transparent">
              to intelligent business.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-[660px] text-base leading-7 text-muted-foreground md:text-lg md:leading-8">
            We see a future where your digital presence, business systems,
            automation and AI work together — evolving around real business
            needs, one meaningful step at a time.
          </p>
        </motion.div>

        {/* Journey label */}
        <motion.div
          {...reveal(0.08)}
          className="mt-14 flex flex-wrap items-center justify-between gap-3 border-b border-border/70 pb-4 md:mt-16"
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-foreground">
              The evolution
            </p>
            <p className="mt-1 text-xs text-muted-foreground">
              Five stages. One connected direction.
            </p>
          </div>

          <span className="inline-flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.12em] text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Our long-term roadmap
          </span>
        </motion.div>

        {/* Five-stage journey */}
        <div className="relative mt-6">
          {/* Connected rail */}
          <div
            aria-hidden="true"
            className="absolute bottom-0 left-[21px] top-5 w-px bg-gradient-to-b from-primary/50 via-violet/40 to-mint/50 md:hidden"
          />

          <div className="grid gap-3 md:grid-cols-2 md:gap-4 xl:grid-cols-5">
            {stages.map((stage, index) => {
              const Icon = stage.icon;
              const isAutomation = index === 2;
              const isFuture = index === 4;

              const iconColor =
                stage.color === "mint"
                  ? "text-mint"
                  : stage.color === "violet"
                    ? "text-violet"
                    : "text-primary";

              const iconSurface =
                stage.color === "mint"
                  ? "border-mint/25 bg-mint/[0.07]"
                  : stage.color === "violet"
                    ? "border-violet/25 bg-violet/[0.07]"
                    : "border-primary/25 bg-primary/[0.07]";

              return (
                <motion.article
                  key={stage.number}
                  {...reveal(index * 0.07)}
                  className={[
                    "group relative min-w-0 rounded-2xl border p-5 transition-all duration-300 md:p-5",
                    isAutomation
                      ? "border-violet/35 bg-gradient-to-br from-violet/[0.12] via-surface to-surface shadow-[0_12px_55px_rgba(139,92,246,0.09)] hover:border-violet/55"
                      : isFuture
                        ? "border-mint/20 bg-gradient-to-br from-mint/[0.06] to-surface hover:border-mint/35"
                        : "border-border/80 bg-surface/65 hover:border-primary/25 hover:bg-elevated/80",
                  ].join(" ")}
                >
                  <div className="flex items-center justify-between">
                    <span
                      className={[
                        "font-mono text-[11px] tracking-[0.14em]",
                        isFuture
                          ? "text-mint"
                          : isAutomation
                            ? "text-violet"
                            : "text-muted-foreground",
                      ].join(" ")}
                    >
                      / {stage.number}
                    </span>

                    {isAutomation && (
                      <span className="rounded-full border border-violet/25 bg-violet/[0.08] px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.12em] text-violet">
                        Key enabler
                      </span>
                    )}

                    {isFuture && (
                      <span className="rounded-full border border-mint/20 px-2 py-1 text-[9px] font-medium uppercase tracking-[0.1em] text-mint">
                        Vision
                      </span>
                    )}
                  </div>

                  <div className="relative mt-7 flex items-center">
                    <div
                      className={[
                        "flex h-12 w-12 items-center justify-center rounded-xl border transition-transform duration-300 group-hover:scale-105",
                        iconSurface,
                      ].join(" ")}
                    >
                      <Icon
                        className={["h-5 w-5", iconColor].join(" ")}
                        strokeWidth={1.7}
                        aria-hidden="true"
                      />
                    </div>

                    {index < stages.length - 1 && (
                      <div
                        aria-hidden="true"
                        className="absolute left-[60px] right-[-20px] hidden h-px bg-gradient-to-r from-border to-transparent xl:block"
                      />
                    )}
                  </div>

                  <h3 className="mt-6 text-[17px] font-semibold leading-snug tracking-[-0.025em] text-foreground">
                    {stage.title}
                  </h3>

                  <p className="mt-3 text-[13px] leading-[1.8] text-muted-foreground">
                    {stage.description}
                  </p>

                  <div className="mt-6 flex items-center gap-2">
                    <span
                      className={[
                        "h-1 w-7 rounded-full transition-all duration-300 group-hover:w-11",
                        isFuture
                          ? "bg-mint/60"
                          : isAutomation
                            ? "bg-violet/70"
                            : "bg-primary/50",
                      ].join(" ")}
                    />
                    <span className="text-[9px] uppercase tracking-[0.13em] text-muted-foreground/70">
                      {isFuture
                        ? "Long-term direction"
                        : isAutomation
                          ? "Practical starting point"
                          : "Building block"}
                    </span>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>

        {/* Premium vision panel */}
        <motion.div
          {...reveal(0.12)}
          className="relative mt-8 overflow-hidden rounded-3xl border border-border/80 bg-[#11141B] p-6 sm:p-9 lg:mt-10 lg:p-12"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute right-[-70px] top-[-150px] h-[340px] w-[340px] rounded-full bg-primary/[0.10] blur-[100px]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute bottom-[-160px] left-[35%] h-[260px] w-[260px] rounded-full bg-violet/[0.07] blur-[90px]"
          />

          <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-12">
            <div className="max-w-[700px]">
              <div className="flex items-center gap-2 text-primary">
                <Sparkles className="h-4 w-4" strokeWidth={1.7} />
                <span className="text-[10px] font-semibold uppercase tracking-[0.18em]">
                  The vision ahead
                </span>
              </div>

              <h3 className="mt-4 text-2xl font-semibold leading-tight tracking-[-0.035em] text-white sm:text-3xl lg:text-[38px]">
                Technology should move your business forward.
              </h3>

              <p className="mt-4 max-w-[620px] text-sm leading-7 text-slate-400 sm:text-base">
                Start with a real challenge. Connect the right systems. Automate
                the repetitive work. Then build toward a more intelligent way of
                operating.
              </p>

              <div className="mt-6 flex flex-wrap gap-x-5 gap-y-3">
                {[
                  "Business-first thinking",
                  "Practical automation",
                  "A connected future",
                ].map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center gap-2 text-xs text-slate-300"
                  >
                    <CheckCircle2
                      className="h-3.5 w-3.5 text-mint"
                      strokeWidth={1.8}
                    />
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <a
              href="/solutions"
              className="group inline-flex min-h-12 items-center justify-center gap-3 self-start rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-white shadow-[0_8px_30px_rgba(88,112,255,0.20)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_38px_rgba(88,112,255,0.32)] focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-[#11141B] lg:self-center"
            >
              Explore Our Solutions
              <ArrowRight
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </a>
          </div>

          <div
            aria-hidden="true"
            className="absolute right-6 top-6 hidden h-7 w-7 border-r border-t border-white/10 sm:block"
          />
          <div
            aria-hidden="true"
            className="absolute bottom-6 left-6 hidden h-7 w-7 border-b border-l border-white/10 sm:block"
          />
        </motion.div>

        <p className="mx-auto mt-5 max-w-[650px] text-center text-[11px] leading-5 text-muted-foreground/75">
          This roadmap represents our long-term direction. Not every stage
          represents a currently available product or service.
        </p>
      </div>
    </section>
  );
}
