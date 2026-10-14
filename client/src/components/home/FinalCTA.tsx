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
    >
      {/* Premium ambient background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute left-1/2 top-[42%] h-[480px] w-[760px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/[0.075] blur-[130px]" />

        <div className="absolute -right-32 top-10 h-72 w-72 rounded-full bg-violet/[0.045] blur-[100px]" />

        <div className="absolute -left-40 bottom-0 h-72 w-72 rounded-full bg-blue-500/[0.035] blur-[110px]" />

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(148,163,184,.5) 1px,transparent 1px),linear-gradient(90deg,rgba(148,163,184,.5) 1px,transparent 1px)",
            backgroundSize: "58px 58px",
            maskImage:
              "radial-gradient(ellipse at center, black 0%, transparent 78%)",
          }}
        />
      </div>

      <div className="container relative">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 22 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.18 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-[28px] border border-white/[0.09] bg-gradient-to-br from-[#171B25] via-[#13161D] to-[#101319] px-5 py-12 shadow-[0_30px_100px_rgba(0,0,0,0.25)] sm:px-9 sm:py-16 lg:px-16 lg:py-[76px]"
        >
          {/* Top highlight */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-[12%] top-0 h-px bg-gradient-to-r from-transparent via-primary/70 to-transparent"
          />

          {/* Subtle inner glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-0 h-64 w-[75%] -translate-x-1/2 rounded-full bg-primary/[0.045] blur-[90px]"
          />

          <div className="relative mx-auto max-w-[850px] text-center">
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/[0.07] px-3.5 py-2">
              <Sparkles className="h-3.5 w-3.5 text-primary" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.17em] text-slate-300 sm:text-[11px]">
                Your next business improvement starts here
              </span>
            </div>

            {/* Headline */}
            <h2
              id="final-cta-heading"
              className="mx-auto mt-7 max-w-[800px] text-[clamp(36px,5.2vw,64px)] font-semibold leading-[1.07] tracking-[-0.055em] text-white"
            >
              Have a business idea
              <br className="hidden sm:block" />{" "}
              <span className="bg-gradient-to-r from-[#91A4FF] via-[#6F88FF] to-[#A8B5FF] bg-clip-text text-transparent">
                or a problem to solve?
              </span>
            </h2>

            {/* Outcome-led supporting copy */}
            <p className="mx-auto mt-6 max-w-[650px] text-[15px] leading-7 text-slate-400 sm:text-[17px] sm:leading-8">
              From a better digital experience to connected business systems and
              practical automation, let’s identify what will make the biggest
              difference to the way your business works.
            </p>

            {/* Capability strip */}
            <div className="mx-auto mt-8 flex max-w-[680px] flex-wrap items-center justify-center gap-2.5 sm:gap-3">
              {capabilities.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.025] px-3 py-2 text-[11px] text-slate-300 sm:px-3.5 sm:text-xs"
                >
                  <Icon className="h-3.5 w-3.5 text-primary" />
                  {label}
                </div>
              ))}
            </div>

            {/* Primary and secondary actions */}
            <div className="mt-9 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
              <a
                href="/start-project"
                className="group inline-flex min-h-[50px] items-center justify-center gap-2.5 rounded-xl bg-primary px-6 text-sm font-semibold text-primary-foreground shadow-[0_8px_30px_rgba(79,124,255,0.2)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_36px_rgba(79,124,255,0.3)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-[#13161D]"
              >
                Tell Us What You Need
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </a>

              <a
                href="/work"
                className="group inline-flex min-h-[50px] items-center justify-center gap-2.5 rounded-xl border border-white/[0.11] bg-white/[0.025] px-6 text-sm font-medium text-slate-200 transition-all duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.055] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-[#13161D]"
              >
                Explore Our Work
                <ArrowUpRight className="h-4 w-4 text-slate-400 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white" />
              </a>
            </div>

            {/* Reassurance */}
            <div className="mt-7 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-xs leading-5 text-slate-500">
              <MessageSquare className="h-3.5 w-3.5 text-primary/80" />
              <span>Start with your requirement.</span>
              <span className="hidden text-slate-700 sm:inline">•</span>
              <span>We’ll explore the right approach together.</span>
            </div>
          </div>

          {/* Decorative corner details */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute bottom-0 left-[8%] h-20 w-px bg-gradient-to-t from-primary/20 to-transparent"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute bottom-0 right-[8%] h-20 w-px bg-gradient-to-t from-primary/20 to-transparent"
          />
        </motion.div>
      </div>
    </section>
  );
}
