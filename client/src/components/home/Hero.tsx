import {
  ArrowRight,
  Bot,
  Database,
  Globe2,
  Layers3,
  Workflow,
} from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";

const inputSystems = [
  {
    label: "Website",
    icon: Globe2,
    status: "Digital",
  },
  {
    label: "CRM",
    icon: Layers3,
    status: "Business",
  },
  {
    label: "ERP / Data",
    icon: Database,
    status: "Operations",
  },
];

const outputSystems = [
  {
    label: "Automation",
    icon: Workflow,
    status: "Workflow",
  },
  {
    label: "AI Actions",
    icon: Bot,
    status: "Intelligence",
  },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative isolate overflow-hidden border-b border-border/70 pt-16 md:pt-[72px]"
      aria-label="AI AutomationHub"
    >
      {/* Background system environment */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.16]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(167,176,191,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(167,176,191,0.08) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage:
            "radial-gradient(circle at 72% 50%, black 0%, transparent 72%)",
          WebkitMaskImage:
            "radial-gradient(circle at 72% 50%, black 0%, transparent 72%)",
        }}
        aria-hidden="true"
      />

      {/* Ambient glow */}
      <div
        className="pointer-events-none absolute -right-32 top-24 -z-10 h-[420px] w-[420px] rounded-full bg-primary/10 blur-[120px]"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute -left-40 bottom-0 -z-10 h-[300px] w-[300px] rounded-full bg-violet/5 blur-[110px]"
        aria-hidden="true"
      />

      <div className="container grid min-h-[700px] grid-cols-1 items-center gap-14 py-16 sm:min-h-[740px] sm:py-20 lg:min-h-[780px] lg:grid-cols-[5fr_7fr] lg:gap-10 lg:py-20">
        {/* ================================================================
            HERO COPY
           ================================================================ */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative z-10 max-w-[650px]"
        >
          {/* Eyebrow */}
          <div className="mb-6 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.12em] text-primary">
            <span className="relative flex h-1.5 w-1.5" aria-hidden="true">
              <span className="absolute inset-0 animate-ping rounded-full bg-primary/50" />
              <span className="relative h-1.5 w-1.5 rounded-full bg-primary" />
            </span>

            <span>AI • SOFTWARE • AUTOMATION</span>
          </div>

          {/* Main heading */}
          <h1 className="max-w-[680px] text-[40px] font-bold leading-[1.05] tracking-[-0.035em] text-foreground sm:text-[48px] md:text-[56px] lg:text-[64px]">
            We Build Technology
            <span className="block text-primary">Around Your Business.</span>
          </h1>

          {/* Supporting copy */}
          <p className="mt-6 max-w-[650px] text-base leading-[1.6] text-muted-foreground md:text-[19px]">
            From powerful business websites to custom software, ERP systems and
            AI-powered automation — we build digital solutions designed around
            the way your business actually works.
          </p>

          {/* CTAs */}
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/start-project"
              className="group inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-primary px-5 text-sm font-semibold text-primary-foreground shadow-[0_0_30px_rgba(79,124,255,0.14)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary/95 hover:shadow-[0_0_36px_rgba(79,124,255,0.24)] focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              Start Your Project
              <ArrowRight
                className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </Link>

            <Link
              href="/work"
              className="group inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-border bg-surface px-5 text-sm font-semibold text-foreground transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/40 hover:bg-elevated focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              Explore Our Work
              <ArrowRight
                className="h-4 w-4 text-muted-foreground transition-transform duration-200 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </Link>
          </div>

          {/* Small positioning line */}
          <div className="mt-8 flex items-center gap-3 text-xs text-muted-foreground">
            <span className="h-px w-8 bg-border" />
            <span>Built around the way your business works.</span>
          </div>
        </motion.div>

        {/* ================================================================
            BUSINESS TECHNOLOGY SYSTEM
           ================================================================ */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.12, ease: "easeOut" }}
          className="relative z-10 mx-auto w-full max-w-[680px] lg:ml-auto"
        >
          <div className="relative">
            {/* Outer glow */}
            <div
              className="pointer-events-none absolute -inset-5 rounded-[28px] bg-primary/5 blur-2xl"
              aria-hidden="true"
            />

            {/* Main system frame */}
            <div className="relative overflow-hidden rounded-2xl border border-border/90 bg-surface/90 p-2.5 shadow-[0_24px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:p-3">
              {/* Header */}
              <div className="flex items-center justify-between rounded-xl border border-border/80 bg-background/70 px-4 py-3 sm:px-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-primary/25 bg-primary/10">
                    <span className="text-[10px] font-bold text-primary">
                      AI
                    </span>
                  </div>

                  <div>
                    <p className="text-xs font-semibold text-foreground">
                      Business Operations
                    </p>
                    <p className="mt-0.5 text-[10px] text-muted-foreground">
                      Connected technology system
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-[9px] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inset-0 animate-ping rounded-full bg-mint/50" />
                    <span className="relative h-1.5 w-1.5 rounded-full bg-mint" />
                  </span>
                  System View
                </div>
              </div>

              {/* System canvas */}
              <div className="relative mt-2.5 min-h-[430px] overflow-hidden rounded-xl border border-border/70 bg-background/55 p-4 sm:min-h-[470px] sm:p-5">
                {/* Technical grid */}
                <div
                  className="pointer-events-none absolute inset-0 opacity-30"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(167,176,191,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(167,176,191,0.05) 1px, transparent 1px)",
                    backgroundSize: "32px 32px",
                  }}
                  aria-hidden="true"
                />

                {/* ========================================================
                    CONNECTION LINES
                   ======================================================== */}
                <svg
                  className="pointer-events-none absolute inset-0 h-full w-full"
                  viewBox="0 0 680 470"
                  preserveAspectRatio="none"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M150 115 C220 115 245 205 315 225"
                    stroke="rgba(79,124,255,0.35)"
                    strokeWidth="1"
                  />

                  <path
                    d="M150 235 C220 235 250 235 315 235"
                    stroke="rgba(79,124,255,0.45)"
                    strokeWidth="1"
                  />

                  <path
                    d="M150 355 C220 355 245 270 315 250"
                    stroke="rgba(56,217,197,0.30)"
                    strokeWidth="1"
                  />

                  <path
                    d="M365 235 C435 235 455 140 530 140"
                    stroke="rgba(109,92,255,0.35)"
                    strokeWidth="1"
                  />

                  <path
                    d="M365 235 C435 235 465 235 530 235"
                    stroke="rgba(79,124,255,0.45)"
                    strokeWidth="1"
                  />

                  <path
                    d="M365 235 C435 235 455 330 530 330"
                    stroke="rgba(56,217,197,0.35)"
                    strokeWidth="1"
                  />

                  {/* Data flow */}
                  <circle r="3" fill="#4F7CFF">
                    <animateMotion
                      dur="3.8s"
                      repeatCount="indefinite"
                      path="M150 115 C220 115 245 205 315 225"
                    />
                  </circle>

                  <circle r="3" fill="#38D9C5">
                    <animateMotion
                      dur="4.4s"
                      repeatCount="indefinite"
                      path="M150 355 C220 355 245 270 315 250"
                    />
                  </circle>

                  <circle r="3" fill="#6D5CFF">
                    <animateMotion
                      dur="4.1s"
                      repeatCount="indefinite"
                      path="M365 235 C435 235 455 140 530 140"
                    />
                  </circle>
                </svg>

                {/* ========================================================
                    INPUT SYSTEMS
                   ======================================================== */}
                <div className="absolute left-4 top-10 w-[145px] sm:left-5 sm:top-12">
                  <div className="mb-2 px-1 text-[9px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                    Business Inputs
                  </div>

                  <div className="space-y-2">
                    {inputSystems.map((item, index) => {
                      const Icon = item.icon;

                      return (
                        <motion.div
                          key={item.label}
                          initial={{ opacity: 0, x: -8 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{
                            duration: 0.45,
                            delay: 0.35 + index * 0.08,
                          }}
                          className="rounded-xl border border-border/90 bg-surface/90 p-3 backdrop-blur-md"
                        >
                          <div className="flex items-center gap-2.5">
                            <div className="flex h-7 w-7 items-center justify-center rounded-md border border-border bg-elevated">
                              <Icon
                                className="h-3.5 w-3.5 text-primary"
                                aria-hidden="true"
                              />
                            </div>

                            <div className="min-w-0">
                              <p className="truncate text-[11px] font-medium text-foreground">
                                {item.label}
                              </p>
                              <p className="text-[9px] text-muted-foreground">
                                {item.status}
                              </p>
                            </div>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>

                {/* ========================================================
                    CENTRAL INTELLIGENCE
                   ======================================================== */}
                <div className="absolute left-1/2 top-1/2 w-[190px] -translate-x-1/2 -translate-y-1/2 sm:w-[205px]">
                  <div className="relative rounded-2xl border border-primary/35 bg-elevated/95 p-5 shadow-[0_0_55px_rgba(79,124,255,0.14)] backdrop-blur-xl">
                    <div
                      className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/10 via-transparent to-violet/10"
                      aria-hidden="true"
                    />

                    <div className="relative">
                      <div className="mb-4 flex items-center justify-between">
                        <span className="text-[9px] font-semibold uppercase tracking-[0.14em] text-primary">
                          Intelligence Layer
                        </span>

                        <span className="flex items-center gap-1.5">
                          <span className="h-1.5 w-1.5 rounded-full bg-mint" />
                          <span className="text-[9px] text-mint">Ready</span>
                        </span>
                      </div>

                      <div className="flex items-center gap-3">
                        <div className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-primary/30 bg-primary/10">
                          <div className="absolute h-5 w-5 rounded-full border border-primary/40" />
                          <div className="h-2 w-2 rounded-full bg-primary shadow-[0_0_14px_rgba(79,124,255,0.7)]" />
                        </div>

                        <div>
                          <p className="text-sm font-semibold text-foreground">
                            AI Layer
                          </p>
                          <p className="mt-1 text-[9px] leading-4 text-muted-foreground">
                            Intelligence connected to business workflows.
                          </p>
                        </div>
                      </div>

                      <div className="my-4 h-px bg-border" />

                      <div className="space-y-2">
                        {["Understand", "Decide", "Trigger"].map(
                          (item, index) => (
                            <div
                              key={item}
                              className="flex items-center justify-between"
                            >
                              <span className="text-[9px] text-muted-foreground">
                                {item}
                              </span>

                              <span
                                className={
                                  index === 2
                                    ? "text-[9px] font-medium text-mint"
                                    : "text-[9px] font-medium text-primary"
                                }
                              >
                                {index === 2 ? "Ready" : "Active"}
                              </span>
                            </div>
                          ),
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* ========================================================
                    OUTPUT SYSTEMS
                   ======================================================== */}
                <div className="absolute right-4 top-10 w-[145px] sm:right-5 sm:top-12">
                  <div className="mb-2 px-1 text-right text-[9px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                    Business Actions
                  </div>

                  <div className="space-y-2">
                    {outputSystems.map((item, index) => {
                      const Icon = item.icon;

                      return (
                        <motion.div
                          key={item.label}
                          initial={{ opacity: 0, x: 8 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{
                            duration: 0.45,
                            delay: 0.55 + index * 0.08,
                          }}
                          className="rounded-xl border border-border/90 bg-surface/90 p-3 backdrop-blur-md"
                        >
                          <div className="flex items-center gap-2.5">
                            <div className="flex h-7 w-7 items-center justify-center rounded-md border border-border bg-elevated">
                              <Icon
                                className={
                                  index === 0
                                    ? "h-3.5 w-3.5 text-mint"
                                    : "h-3.5 w-3.5 text-violet"
                                }
                                aria-hidden="true"
                              />
                            </div>

                            <div className="min-w-0">
                              <p className="truncate text-[11px] font-medium text-foreground">
                                {item.label}
                              </p>
                              <p className="text-[9px] text-muted-foreground">
                                {item.status}
                              </p>
                            </div>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>

                {/* Bottom system status */}
                <div className="absolute bottom-4 left-4 right-4 sm:bottom-5 sm:left-5 sm:right-5">
                  <div className="flex items-center justify-between gap-4 rounded-lg border border-border/70 bg-surface/75 px-3 py-2.5">
                    <div className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-mint" />
                      <span className="text-[9px] font-medium text-muted-foreground">
                        Connected workflow
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5">
                      <span className="h-1 w-7 rounded-full bg-primary/40" />
                      <span className="h-1 w-10 rounded-full bg-primary/60" />
                      <span className="h-1 w-5 rounded-full bg-mint/50" />
                      <span className="h-1 w-8 rounded-full bg-violet/50" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating status */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="absolute -bottom-4 left-4 hidden rounded-lg border border-border bg-elevated/95 px-3 py-2 shadow-xl sm:block"
            >
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-mint" />
                <span className="text-[10px] font-medium text-muted-foreground">
                  Business-first technology
                </span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
