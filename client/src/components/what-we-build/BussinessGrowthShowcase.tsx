import { motion } from "framer-motion";
import {
  BarChart3,
  Check,
  Globe2,
  MousePointer2,
  Target,
  UserPlus,
} from "lucide-react";
import { useEffect, useState } from "react";

const growthSteps = [
  {
    id: "campaign",
    label: "Campaign",
    detail: "Reach the audience",
    icon: Target,
  },
  {
    id: "traffic",
    label: "Traffic",
    detail: "Visitors arrive",
    icon: MousePointer2,
  },
  {
    id: "website",
    label: "Website",
    detail: "Experience & engage",
    icon: Globe2,
  },
  {
    id: "lead",
    label: "Lead",
    detail: "Opportunity created",
    icon: UserPlus,
  },
  {
    id: "crm",
    label: "CRM",
    detail: "Lead organized",
    icon: Check,
  },
  {
    id: "conversion",
    label: "Conversion",
    detail: "Business action",
    icon: BarChart3,
  },
];

export default function BusinessGrowthShowcase() {
  const [activeStep, setActiveStep] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const timer = window.setInterval(() => {
      setActiveStep((current) => {
        if (current >= growthSteps.length - 1) {
          return 0;
        }

        return current + 1;
      });
    }, 1250);

    return () => window.clearInterval(timer);
  }, [isPaused]);

  const status =
    activeStep === 0
      ? "Campaign active"
      : activeStep === 1
        ? "Traffic building"
        : activeStep === 2
          ? "Visitors engaging"
          : activeStep === 3
            ? "Lead generated"
            : activeStep === 4
              ? "Lead organized"
              : "Conversion tracked";

  return (
    <div
      className="relative h-full min-h-[430px] overflow-hidden rounded-xl border border-border/80 bg-background/70 p-4 sm:p-5 lg:p-6"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Ambient growth layer */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_72%_20%,rgba(79,124,255,0.11),transparent_36%),radial-gradient(circle_at_20%_88%,rgba(56,217,197,0.055),transparent_32%)]"
        aria-hidden="true"
      />

      <div className="relative flex h-full flex-col">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-border/70 pb-4">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-primary/25 bg-primary/10 text-primary">
              <BarChart3 className="h-4 w-4" />
            </div>

            <div>
              <span className="text-[9px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                Growth System
              </span>

              <p className="mt-1 text-sm font-semibold text-foreground">
                Campaign → Conversion
              </p>
            </div>
          </div>

          <motion.span
            animate={{
              opacity: isPaused ? 0.65 : [0.65, 1, 0.65],
            }}
            transition={{
              duration: 1.2,
              repeat: isPaused ? 0 : Infinity,
            }}
            className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary/5 px-2.5 py-1 text-[9px] font-medium text-primary"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            {status}
          </motion.span>
        </div>

        {/* Main growth visual */}
        <div className="flex flex-1 flex-col justify-center">
          {/* Growth funnel */}
          <div className="mb-5">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-[9px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                  Digital growth journey
                </span>

                <p className="mt-1 text-xs font-medium text-foreground">
                  Attention → Opportunity → Business action
                </p>
              </div>

              <span className="text-[9px] font-medium text-muted-foreground">
                {isPaused ? "PAUSED" : "AUTO"}
              </span>
            </div>
          </div>

          {/* Journey */}
          <div className="relative">
            <div className="hidden sm:block absolute left-[7%] right-[7%] top-[31px] h-px bg-border" />

            <div className="grid grid-cols-2 gap-2 sm:grid-cols-6 sm:gap-2">
              {growthSteps.map((step, index) => {
                const Icon = step.icon;
                const isActive = index === activeStep;
                const isComplete = index < activeStep;

                return (
                  <div key={step.id} className="relative">
                    <motion.div
                      animate={{
                        y: isActive ? -3 : 0,
                        borderColor: isActive
                          ? "rgba(79,124,255,0.42)"
                          : isComplete
                            ? "rgba(79,124,255,0.20)"
                            : "rgba(32,41,54,0.70)",
                        backgroundColor: isActive
                          ? "rgba(79,124,255,0.07)"
                          : "rgba(13,17,24,0.50)",
                      }}
                      transition={{ duration: 0.3 }}
                      className="relative rounded-xl border p-3"
                    >
                      {isActive && (
                        <motion.div
                          className="pointer-events-none absolute inset-0 rounded-xl"
                          animate={{
                            opacity: [0.12, 0.4, 0.12],
                          }}
                          transition={{
                            duration: 1.1,
                            repeat: Infinity,
                          }}
                          style={{
                            boxShadow: "inset 0 0 28px rgba(79,124,255,0.12)",
                          }}
                        />
                      )}

                      <motion.div
                        animate={
                          isActive
                            ? {
                                scale: [1, 1.08, 1],
                              }
                            : {
                                scale: 1,
                              }
                        }
                        transition={{
                          duration: 0.9,
                          repeat: isActive ? Infinity : 0,
                        }}
                        className={[
                          "relative z-10 mx-auto flex h-8 w-8 items-center justify-center rounded-lg border",
                          isActive
                            ? "border-primary/35 bg-primary/10 text-primary"
                            : isComplete
                              ? "border-primary/20 bg-primary/5 text-primary"
                              : "border-border bg-elevated text-muted-foreground",
                        ].join(" ")}
                      >
                        <Icon className="h-3.5 w-3.5" />
                      </motion.div>

                      <p className="relative z-10 mt-2 truncate text-center text-[9px] font-semibold text-foreground">
                        {step.label}
                      </p>

                      <p className="relative z-10 mt-1 truncate text-center text-[7px] text-muted-foreground">
                        {step.detail}
                      </p>

                      <div className="relative z-10 mt-2 flex justify-center">
                        <motion.span
                          animate={
                            isActive
                              ? {
                                  opacity: [0.45, 1, 0.45],
                                  scale: [0.9, 1.15, 0.9],
                                }
                              : {
                                  opacity: 1,
                                  scale: 1,
                                }
                          }
                          transition={{
                            duration: 1.1,
                            repeat: isActive ? Infinity : 0,
                          }}
                          className={[
                            "h-1.5 w-1.5 rounded-full",
                            isComplete || isActive ? "bg-primary" : "bg-border",
                          ].join(" ")}
                        />
                      </div>
                    </motion.div>

                    {/* Mobile connector */}
                    {index < growthSteps.length - 1 && index % 2 === 0 && (
                      <div className="absolute left-full top-1/2 z-20 hidden h-px w-2 -translate-y-1/2 bg-border sm:hidden">
                        <span className="absolute inset-0 bg-primary/40" />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Moving journey signal */}
            <div className="pointer-events-none absolute left-[7%] right-[7%] top-[31px] hidden h-px sm:block">
              <motion.span
                animate={{
                  left: `${
                    Math.min(activeStep / (growthSteps.length - 1), 1) * 100
                  }%`,
                  opacity: [0, 1, 0],
                }}
                transition={{
                  left: {
                    duration: 0.45,
                    ease: "easeInOut",
                  },
                  opacity: {
                    duration: 0.8,
                    repeat: Infinity,
                  },
                }}
                className="absolute top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary shadow-[0_0_14px_rgba(79,124,255,0.35)]"
              />
            </div>
          </div>

          {/* Growth system panel */}
          <div className="mt-5 rounded-xl border border-border/70 bg-surface/40 p-3 sm:p-4">
            <div className="flex items-center justify-between gap-3">
              <div>
                <span className="text-[8px] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                  Growth visibility
                </span>

                <p className="mt-1 text-xs font-semibold text-foreground">
                  From attention to measurable opportunity.
                </p>
              </div>

              <span className="shrink-0 text-[8px] font-medium text-muted-foreground">
                {activeStep + 1}/{growthSteps.length}
              </span>
            </div>

            {/* Progress */}
            <div className="mt-4 h-1 overflow-hidden rounded-full bg-border">
              <motion.div
                animate={{
                  width: `${((activeStep + 1) / growthSteps.length) * 100}%`,
                }}
                transition={{
                  duration: 0.45,
                }}
                className="h-full rounded-full bg-primary"
              />
            </div>

            {/* Current stage */}
            <div className="mt-4 flex items-center justify-between rounded-lg border border-border/60 bg-background/35 px-3 py-2.5">
              <div className="flex min-w-0 items-center gap-2">
                <motion.span
                  animate={{
                    scale: [1, 1.15, 1],
                    opacity: [0.6, 1, 0.6],
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                  }}
                  className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                />

                <span className="truncate text-[9px] text-muted-foreground">
                  Current stage
                </span>
              </div>

              <motion.span
                key={growthSteps[activeStep].label}
                initial={{ opacity: 0, x: 5 }}
                animate={{ opacity: 1, x: 0 }}
                className="shrink-0 text-[9px] font-semibold text-foreground"
              >
                {growthSteps[activeStep].label}
              </motion.span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-5 flex items-center justify-between border-t border-border/70 pt-4">
          <div className="flex items-center gap-2">
            <Check className="h-3.5 w-3.5 text-primary" />

            <span className="text-[9px] font-medium text-muted-foreground">
              Marketing connected to business outcomes
            </span>
          </div>

          <span className="text-[9px] font-semibold tracking-[0.08em] text-muted-foreground">
            GROWTH SYSTEM
          </span>
        </div>
      </div>
    </div>
  );
}
