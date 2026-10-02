import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  Bot,
  Database,
  Globe2,
  Layers3,
  MessageSquare,
  Network,
  Play,
  Settings2,
  Sparkles,
  Workflow,
} from "lucide-react";
import { Link } from "wouter";

type HeroSlide = {
  id: string;
  eyebrow: string;
  title: string;
  accent: string;
  description: string;
  primaryLabel: string;
  secondaryLabel: string;
  systemLabel: string;
};

const slides: HeroSlide[] = [
  {
    id: "automation",
    eyebrow: "AI AUTOMATION",
    title: "Turn Repetitive Work Into",
    accent: "Intelligent Workflows.",
    description:
      "Connect leads, customer conversations, documents and repetitive business processes into workflows that work with your team.",
    primaryLabel: "Build an Automation",
    secondaryLabel: "Explore AI Automation",
    systemLabel: "Automation System",
  },
  {
    id: "software",
    eyebrow: "CUSTOM SOFTWARE",
    title: "Build Technology Around",
    accent: "How Your Business Works.",
    description:
      "From internal tools and dashboards to CRM, billing and operational software — we build systems around your actual workflow.",
    primaryLabel: "Build Custom Software",
    secondaryLabel: "Explore Solutions",
    systemLabel: "Business Software",
  },
  {
    id: "erp",
    eyebrow: "ERP & BUSINESS SYSTEMS",
    title: "Bring Your Business Into",
    accent: "One Connected System.",
    description:
      "Connect customers, sales, inventory, employees, billing and reporting into a business system designed for the way you operate.",
    primaryLabel: "Build Your System",
    secondaryLabel: "Explore ERP Systems",
    systemLabel: "Connected Operations",
  },
];

const systemNodes = [
  {
    label: "Website",
    detail: "Digital presence",
    icon: Globe2,
    position: "left-[7%] top-[25%]",
  },
  {
    label: "CRM",
    detail: "Customer data",
    icon: Database,
    position: "left-[7%] bottom-[18%]",
  },
  {
    label: "AI Engine",
    detail: "Intelligence layer",
    icon: Bot,
    position: "left-1/2 top-1/2",
  },
  {
    label: "Automation",
    detail: "Workflow layer",
    icon: Workflow,
    position: "right-[7%] top-[25%]",
  },
  {
    label: "Business System",
    detail: "Operations",
    icon: Layers3,
    position: "right-[7%] bottom-[18%]",
  },
];

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  const slide = slides[activeSlide];

  const nextSlide = () => {
    setActiveSlide((current) => (current + 1) % slides.length);
  };

  const previousSlide = () => {
    setActiveSlide((current) => (current - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    if (shouldReduceMotion) return;

    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 6000);

    return () => {
      window.clearInterval(timer);
    };
  }, [shouldReduceMotion]);

  const progressWidth = useMemo(() => {
    return `${((activeSlide + 1) / slides.length) * 100}%`;
  }, [activeSlide]);

  return (
    <section
      className="relative isolate overflow-hidden border-b border-border/60 bg-background pt-[215px] md:pt-[220px] lg:pt-[225px]"
      aria-label="AI AutomationHub introduction"
    >
      {/* ============================================================
          BACKGROUND SYSTEM LAYER
         ============================================================ */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
        aria-hidden="true"
      >
        <div className="absolute left-[8%] top-[12%] h-[420px] w-[420px] rounded-full bg-[#4F7CFF]/[0.08] blur-[120px]" />

        <div className="absolute right-[8%] top-[22%] h-[360px] w-[360px] rounded-full bg-[#6D5CFF]/[0.07] blur-[120px]" />

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(167,176,191,0.35) 1px, transparent 1px), linear-gradient(90deg, rgba(167,176,191,0.35) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#4F7CFF]/20 to-transparent" />
      </div>

      <div className="container relative flex min-h-[calc(100svh-110px)] items-center py-12 md:py-16 lg:py-20">
        <div className="grid w-full translate-y-8 items-center gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:translate-y-10 lg:gap-20">
          {/* ==========================================================
              LEFT — HERO COPY
             ========================================================== */}
          <div className="max-w-[680px]">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface/70 px-3 py-1.5 backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-[#38D9C5] shadow-[0_0_8px_rgba(56,217,197,0.65)]" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-secondary-foreground">
                AI • SOFTWARE • AUTOMATION
              </span>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={slide.id}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={shouldReduceMotion ? undefined : { opacity: 0, y: -10 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
              >
                <p className="mb-4 text-[12px] font-semibold uppercase tracking-[0.16em] text-[#4F7CFF]">
                  {slide.eyebrow}
                </p>

                <h1 className="max-w-[720px] text-[42px] font-bold leading-[1.04] tracking-[-0.045em] text-[#F4F7FB] sm:text-[50px] md:text-[58px] lg:text-[64px]">
                  {slide.title}
                  <br />
                  <span className="bg-gradient-to-r from-[#4F7CFF] via-[#5F78FF] to-[#6D5CFF] bg-clip-text text-transparent">
                    {slide.accent}
                  </span>
                </h1>

                <p className="mt-6 max-w-[650px] text-[16px] leading-[1.7] text-[#A7B0BF] sm:text-[17px]">
                  {slide.description}
                </p>

                <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href="/start-project"
                    className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-[#4F7CFF] px-5 text-[14px] font-semibold text-white shadow-[0_0_28px_rgba(79,124,255,0.14)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#5B84FF] hover:shadow-[0_0_34px_rgba(79,124,255,0.24)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4F7CFF]"
                  >
                    <span>{slide.primaryLabel}</span>

                    <ArrowRight
                      className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </Link>

                  <Link
                    href="/solutions"
                    className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-[#263142] bg-[#0D1118]/70 px-5 text-[14px] font-semibold text-[#E8EDF5] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#4F7CFF]/35 hover:bg-[#121821] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4F7CFF]"
                  >
                    <Play className="h-3.5 w-3.5" aria-hidden="true" />
                    <span>{slide.secondaryLabel}</span>
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* ========================================================
                SLIDER CONTROLS
               ======================================================== */}
            <div className="mt-10 flex items-center gap-5">
              <div className="flex items-center gap-2">
                {slides.map((item, index) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setActiveSlide(index)}
                    className="group flex h-6 items-center"
                    aria-label={`Show hero slide ${index + 1}`}
                    aria-pressed={activeSlide === index}
                  >
                    <span
                      className={[
                        "h-1 rounded-full transition-all duration-300",
                        activeSlide === index
                          ? "w-8 bg-[#4F7CFF] shadow-[0_0_8px_rgba(79,124,255,0.45)]"
                          : "w-2 bg-[#354050] group-hover:bg-[#596576]",
                      ].join(" ")}
                    />
                  </button>
                ))}
              </div>

              <div className="hidden h-4 w-px bg-border sm:block" />

              <span className="text-[11px] font-medium uppercase tracking-[0.12em] text-[#6F7A8A]">
                0{activeSlide + 1} / 0{slides.length}
              </span>

              <button
                type="button"
                onClick={previousSlide}
                className="ml-auto hidden text-[11px] font-semibold uppercase tracking-[0.12em] text-[#7F8999] transition-colors hover:text-[#F4F7FB] sm:block"
                aria-label="Previous hero slide"
              >
                Prev
              </button>

              <button
                type="button"
                onClick={nextSlide}
                className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#7F8999] transition-colors hover:text-[#F4F7FB]"
                aria-label="Next hero slide"
              >
                Next
              </button>
            </div>
          </div>

          {/* ==========================================================
              RIGHT — BUSINESS TECHNOLOGY SYSTEM
             ========================================================== */}
          <div className="relative mx-auto w-full max-w-[700px] pt-2 lg:ml-auto lg:pt-4">
            {/* Ambient depth */}
            <div
              className="pointer-events-none absolute -inset-10 rounded-[40px] bg-[#4F7CFF]/[0.06] blur-[70px]"
              aria-hidden="true"
            />

            <motion.div
              className="relative overflow-hidden rounded-[24px] border border-[#263142] bg-[#0D1118]/90 p-3 shadow-[0_35px_90px_rgba(0,0,0,0.42),0_1px_0_rgba(255,255,255,0.035)_inset] backdrop-blur-xl"
              animate={
                shouldReduceMotion
                  ? undefined
                  : {
                      y: [0, -5, 0],
                    }
              }
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              {/* Top system bar */}
              <div className="relative flex items-center justify-between rounded-[18px] border border-[#202936] bg-[#121821] px-4 py-3">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-[#4F7CFF]/30 bg-[#4F7CFF]/[0.08]">
                    <Sparkles
                      className="h-4 w-4 text-[#4F7CFF]"
                      aria-hidden="true"
                    />
                  </div>

                  <div>
                    <p className="text-[13px] font-semibold text-[#F4F7FB]">
                      {slide.systemLabel}
                    </p>

                    <p className="text-[11px] text-[#6F7A8A]">
                      Connected business technology
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#38D9C5] shadow-[0_0_8px_rgba(56,217,197,0.7)]" />

                  <span className="text-[9px] font-semibold uppercase tracking-[0.15em] text-[#7F8999]">
                    System Active
                  </span>
                </div>
              </div>

              {/* System canvas */}
              <div className="relative mt-3 min-h-[390px] overflow-hidden rounded-[20px] border border-[#1D2632] bg-[#090D13]">
                {/* Grid */}
                <div
                  className="pointer-events-none absolute inset-0 opacity-[0.055]"
                  aria-hidden="true"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(167,176,191,0.45) 1px, transparent 1px), linear-gradient(90deg, rgba(167,176,191,0.45) 1px, transparent 1px)",
                    backgroundSize: "32px 32px",
                  }}
                />

                {/* Connection lines */}
                <svg
                  className="pointer-events-none absolute inset-0 h-full w-full"
                  viewBox="0 0 700 390"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <defs>
                    <linearGradient
                      id="hero-line-blue"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="0%"
                    >
                      <stop offset="0%" stopColor="#4F7CFF" stopOpacity="0" />
                      <stop
                        offset="50%"
                        stopColor="#4F7CFF"
                        stopOpacity="0.65"
                      />
                      <stop offset="100%" stopColor="#4F7CFF" stopOpacity="0" />
                    </linearGradient>

                    <linearGradient
                      id="hero-line-mint"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="0%"
                    >
                      <stop offset="0%" stopColor="#38D9C5" stopOpacity="0" />
                      <stop
                        offset="50%"
                        stopColor="#38D9C5"
                        stopOpacity="0.6"
                      />
                      <stop offset="100%" stopColor="#38D9C5" stopOpacity="0" />
                    </linearGradient>
                  </defs>

                  <path
                    d="M90 118 C210 118 235 190 350 195"
                    fill="none"
                    stroke="url(#hero-line-blue)"
                    strokeWidth="1.4"
                  />

                  <path
                    d="M90 300 C210 300 235 205 350 195"
                    fill="none"
                    stroke="url(#hero-line-blue)"
                    strokeWidth="1.4"
                  />

                  <path
                    d="M350 195 C465 195 490 118 610 118"
                    fill="none"
                    stroke="url(#hero-line-mint)"
                    strokeWidth="1.4"
                  />

                  <path
                    d="M350 195 C465 195 490 300 610 300"
                    fill="none"
                    stroke="url(#hero-line-mint)"
                    strokeWidth="1.4"
                  />

                  <motion.circle
                    cx="350"
                    cy="195"
                    r="4"
                    fill="#4F7CFF"
                    animate={
                      shouldReduceMotion
                        ? undefined
                        : {
                            opacity: [0.45, 1, 0.45],
                            r: [3, 5, 3],
                          }
                    }
                    transition={{
                      duration: 2.2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                </svg>

                {/* Nodes */}
                {systemNodes.map((node, index) => {
                  const Icon = node.icon;
                  const isCore = node.label === "AI Engine";

                  return (
                    <motion.div
                      key={node.label}
                      className={[
                        "absolute z-10 w-[150px] rounded-2xl border p-3 backdrop-blur-md",
                        node.position,
                        isCore
                          ? "left-1/2 top-1/2 w-[170px] -translate-x-1/2 -translate-y-1/2 border-[#4F7CFF]/35 bg-[#111827] shadow-[0_0_34px_rgba(79,124,255,0.16)]"
                          : "border-[#263142] bg-[#0F151E]/95 shadow-[0_14px_30px_rgba(0,0,0,0.28)]",
                      ].join(" ")}
                      animate={
                        shouldReduceMotion
                          ? undefined
                          : {
                              y: [0, index % 2 === 0 ? -4 : 4, 0],
                            }
                      }
                      transition={{
                        duration: 4 + index * 0.4,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      <div className="flex items-center gap-2.5">
                        <div
                          className={[
                            "flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border",
                            isCore
                              ? "border-[#4F7CFF]/35 bg-[#4F7CFF]/10"
                              : "border-[#263142] bg-[#121821]",
                          ].join(" ")}
                        >
                          <Icon
                            className={[
                              "h-4 w-4",
                              isCore ? "text-[#4F7CFF]" : "text-[#A7B0BF]",
                            ].join(" ")}
                            aria-hidden="true"
                          />
                        </div>

                        <div className="min-w-0">
                          <p className="truncate text-[11px] font-semibold text-[#E8EDF5]">
                            {node.label}
                          </p>

                          <p className="mt-0.5 truncate text-[9px] text-[#6F7A8A]">
                            {node.detail}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}

                {/* Live workflow strip */}
                <div className="absolute bottom-4 left-1/2 z-20 flex w-[calc(100%-32px)] -translate-x-1/2 items-center justify-between rounded-xl border border-[#202936] bg-[#0D1118]/90 px-3 py-2.5 shadow-[0_10px_30px_rgba(0,0,0,0.3)] backdrop-blur-xl">
                  <div className="flex items-center gap-2">
                    <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#38D9C5]/[0.08]">
                      <Network
                        className="h-3.5 w-3.5 text-[#38D9C5]"
                        aria-hidden="true"
                      />
                    </div>

                    <div>
                      <p className="text-[10px] font-semibold text-[#E8EDF5]">
                        Connected workflow
                      </p>

                      <p className="text-[8px] text-[#6F7A8A]">
                        Business data moving through the system
                      </p>
                    </div>
                  </div>

                  <div className="hidden items-center gap-1.5 sm:flex">
                    {[1, 2, 3, 4].map((item) => (
                      <motion.span
                        key={item}
                        className="h-1.5 w-1.5 rounded-full bg-[#4F7CFF]"
                        animate={
                          shouldReduceMotion
                            ? undefined
                            : {
                                opacity: [0.25, 1, 0.25],
                              }
                        }
                        transition={{
                          duration: 1.4,
                          repeat: Infinity,
                          delay: item * 0.18,
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom status row */}
              <div className="mt-3 grid grid-cols-3 gap-2">
                {[
                  {
                    icon: Settings2,
                    label: "Workflow",
                    value: "Connected",
                  },
                  {
                    icon: MessageSquare,
                    label: "Business",
                    value: "Context aware",
                  },
                  {
                    icon: Network,
                    label: "System",
                    value: "Integrated",
                  },
                ].map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.label}
                      className="rounded-xl border border-[#202936] bg-[#0F151E] px-3 py-2.5"
                    >
                      <div className="flex items-center gap-2">
                        <Icon
                          className="h-3.5 w-3.5 text-[#6F7A8A]"
                          aria-hidden="true"
                        />

                        <span className="text-[9px] font-medium uppercase tracking-[0.1em] text-[#6F7A8A]">
                          {item.label}
                        </span>
                      </div>

                      <p className="mt-1 text-[10px] font-semibold text-[#DCE3ED]">
                        {item.value}
                      </p>
                    </div>
                  );
                })}
              </div>
            </motion.div>

            {/* Floating peripheral cards */}
            <motion.div
              className="absolute -right-4 top-[17%] hidden rounded-xl border border-[#263142] bg-[#0D1118]/90 px-3 py-2 shadow-[0_14px_30px_rgba(0,0,0,0.32)] backdrop-blur-xl xl:block"
              animate={
                shouldReduceMotion
                  ? undefined
                  : {
                      y: [0, -5, 0],
                    }
              }
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <p className="text-[8px] font-semibold uppercase tracking-[0.12em] text-[#6F7A8A]">
                Intelligence
              </p>

              <p className="mt-1 text-[11px] font-semibold text-[#F4F7FB]">
                Business-aware
              </p>
            </motion.div>

            <motion.div
              className="absolute -left-4 bottom-[16%] hidden rounded-xl border border-[#263142] bg-[#0D1118]/90 px-3 py-2 shadow-[0_14px_30px_rgba(0,0,0,0.32)] backdrop-blur-xl xl:block"
              animate={
                shouldReduceMotion
                  ? undefined
                  : {
                      y: [0, 5, 0],
                    }
              }
              transition={{
                duration: 5.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <p className="text-[8px] font-semibold uppercase tracking-[0.12em] text-[#6F7A8A]">
                Operations
              </p>

              <p className="mt-1 text-[11px] font-semibold text-[#F4F7FB]">
                Connected
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ============================================================
          SLIDER PROGRESS
         ============================================================ */}
      <div
        className="absolute bottom-0 left-0 h-px bg-[#4F7CFF] shadow-[0_0_10px_rgba(79,124,255,0.5)] transition-all duration-500"
        style={{ width: progressWidth }}
        aria-hidden="true"
      />
    </section>
  );
}
