import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  MessageSquare,
  Sparkles,
  Workflow,
  BrainCircuit,
  Globe2,
} from "lucide-react";

const palette = {
  ivory: "#F4F0E8",
  sage: "#E4E8DF",
  green: "#004225",
  charcoal: "#24231F",
  gray: "#5F5B53",
  white: "#FFFFFF",
  border: "#D7DCCF",
};

const capabilities = [
  {
    icon: Globe2,
    label: "Digital presence",
  },
  {
    icon: Workflow,
    label: "Business systems",
  },
  {
    icon: BrainCircuit,
    label: "Intelligent automation",
  },
];

export default function FinalCTA() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="final-cta"
      aria-labelledby="final-cta-heading"
      className="section-feature section-fade-divider relative overflow-hidden"
      style={{
        backgroundColor: palette.ivory,
        color: palette.charcoal,
        fontFamily: '"Geist", sans-serif',
      }}
    >
      {/* Soft, neutral background detail */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div
          className="absolute left-1/2 top-1/2 h-[420px] w-[720px] max-w-[100vw] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[100px]"
          style={{ backgroundColor: "rgba(0,66,37,0.045)" }}
        />

        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "linear-gradient(rgba(95,91,83,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(95,91,83,0.045) 1px, transparent 1px)",
            backgroundSize: "54px 54px",
            maskImage:
              "radial-gradient(ellipse at center, black 0%, transparent 76%)",
          }}
        />
      </div>

      <div className="container relative">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.18 }}
          transition={{
            duration: 0.65,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative overflow-hidden rounded-[24px] border px-5 py-12 sm:px-9 sm:py-16 lg:px-16 lg:py-[76px]"
          style={{
            backgroundColor: palette.sage,
            borderColor: palette.border,
            boxShadow: "0 18px 55px rgba(36,35,31,0.055)",
          }}
        >
          {/* Restrained top accent */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-[14%] top-0 h-px"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(0,66,37,0.35), transparent)",
            }}
          />

          {/* Subtle green ambient detail */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -top-28 h-64 w-64 rounded-full blur-[90px]"
            style={{ backgroundColor: "rgba(0,66,37,0.055)" }}
          />

          <div className="relative mx-auto max-w-[850px] text-center">
            {/* Eyebrow */}
            <div
              className="inline-flex max-w-full items-center justify-center gap-2 rounded-full border px-3.5 py-2"
              style={{
                borderColor: "rgba(0,66,37,0.16)",
                backgroundColor: "rgba(255,255,255,0.68)",
              }}
            >
              <Sparkles
                className="h-3.5 w-3.5 shrink-0"
                style={{ color: palette.green }}
                aria-hidden="true"
              />

              <span
                className="text-[10px] font-semibold uppercase tracking-[0.13em] sm:text-[11px]"
                style={{ color: palette.green }}
              >
                Your next business improvement starts here
              </span>
            </div>

            {/* Headline */}
            <h2
              id="final-cta-heading"
              className="mx-auto mt-7 max-w-[800px] text-[clamp(36px,5.2vw,64px)] font-semibold leading-[1.08] tracking-[-0.045em]"
              style={{ color: palette.charcoal }}
            >
              Have a business idea
              <br className="hidden sm:block" />{" "}
              <span style={{ color: palette.green }}>
                or a problem to solve?
              </span>
            </h2>

            {/* Supporting copy */}
            <p
              className="mx-auto mt-6 max-w-[650px] text-[15px] leading-7 sm:text-[17px] sm:leading-8"
              style={{ color: palette.gray }}
            >
              From a better digital experience to connected business systems and
              practical automation, let’s identify what will make the biggest
              difference to the way your business works.
            </p>

            {/* Capability chips */}
            <div className="mx-auto mt-8 flex max-w-[680px] flex-wrap items-center justify-center gap-2.5 sm:gap-3">
              {capabilities.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="inline-flex items-center gap-2 rounded-full border px-3 py-2 text-[11px] sm:px-3.5 sm:text-xs"
                  style={{
                    borderColor: palette.border,
                    backgroundColor: "rgba(255,255,255,0.76)",
                    color: palette.charcoal,
                  }}
                >
                  <Icon
                    className="h-3.5 w-3.5 shrink-0"
                    style={{ color: palette.green }}
                    aria-hidden="true"
                  />
                  {label}
                </div>
              ))}
            </div>

            {/* Primary and secondary actions */}
            <div className="mt-9 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
              <a
                href="/start-project"
                className="group inline-flex min-h-[50px] items-center justify-center gap-2.5 rounded-xl border px-6 text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#004225] focus-visible:ring-offset-2"
                style={{
                  backgroundColor: palette.green,
                  borderColor: palette.green,
                  color: palette.white,
                  boxShadow: "0 6px 18px rgba(0,66,37,0.14)",
                }}
              >
                Tell Us What You Need
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </a>

              <a
                href="/work"
                className="group inline-flex min-h-[50px] items-center justify-center gap-2.5 rounded-xl border bg-white px-6 text-sm font-medium transition-all duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#004225] focus-visible:ring-offset-2"
                style={{
                  borderColor: palette.border,
                  color: palette.charcoal,
                }}
              >
                Explore Our Work
                <ArrowUpRight
                  className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  style={{ color: palette.green }}
                  aria-hidden="true"
                />
              </a>
            </div>

            {/* Reassurance */}
            <div
              className="mt-7 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-xs leading-5"
              style={{ color: palette.gray }}
            >
              <MessageSquare
                className="h-3.5 w-3.5"
                style={{ color: palette.green }}
                aria-hidden="true"
              />
              <span>Start with your requirement.</span>
              <span
                className="hidden sm:inline"
                style={{ color: palette.border }}
                aria-hidden="true"
              >
                •
              </span>
              <span>We’ll explore the right approach together.</span>
            </div>
          </div>

          {/* Minimal corner details */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute bottom-0 left-[8%] h-16 w-px"
            style={{
              background:
                "linear-gradient(to top, rgba(0,66,37,0.16), transparent)",
            }}
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute bottom-0 right-[8%] h-16 w-px"
            style={{
              background:
                "linear-gradient(to top, rgba(0,66,37,0.16), transparent)",
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}
