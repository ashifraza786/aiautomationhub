import { motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  Globe2,
  MousePointer2,
  UserPlus,
} from "lucide-react";
import { useEffect, useState } from "react";

const journeySteps = [
  {
    id: "visitor",
    label: "Visitor",
    detail: "Arrives on website",
  },
  {
    id: "interaction",
    label: "Interaction",
    detail: "Explores & engages",
  },
  {
    id: "lead",
    label: "New Lead",
    detail: "Form submitted",
  },
  {
    id: "crm",
    label: "CRM",
    detail: "Lead captured",
  },
];

export default function WebsitesShowcase() {
  const [activeStep, setActiveStep] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const step = journeySteps[activeStep];

  useEffect(() => {
    if (isPaused) return;

    const timer = window.setInterval(() => {
      setActiveStep((current) => {
        if (current >= journeySteps.length - 1) {
          return 0;
        }

        return current + 1;
      });
    }, 1500);

    return () => window.clearInterval(timer);
  }, [isPaused]);

  const status =
    activeStep === 0
      ? "Visitor arrives"
      : activeStep === 1
        ? "Interaction detected"
        : activeStep === 2
          ? "Lead captured"
          : "Connected to CRM";

  return (
    <div
      className="relative h-full min-h-[430px] overflow-hidden rounded-xl border border-border/80 bg-background/70 p-4 sm:p-5 lg:p-6"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Ambient digital experience glow */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_22%,rgba(56,217,197,0.09),transparent_36%),radial-gradient(circle_at_18%_82%,rgba(79,124,255,0.055),transparent_32%)]"
        aria-hidden="true"
      />

      <div className="relative flex h-full flex-col">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-border/70 pb-4">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-mint/25 bg-mint/10 text-mint">
              <Globe2 className="h-4 w-4" />
            </div>

            <div>
              <span className="text-[9px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                Digital Experience
              </span>

              <p className="mt-1 text-sm font-semibold text-foreground">
                Business Website
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
            className="inline-flex items-center gap-2 rounded-full border border-mint/15 bg-mint/5 px-2.5 py-1 text-[9px] font-medium text-mint"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-mint" />
            {status}
          </motion.span>
        </div>

        {/* Main website experience */}
        <div className="flex flex-1 flex-col justify-center">
          {/* Browser / website preview */}
          <div className="rounded-xl border border-border/70 bg-surface/45 p-2.5">
            {/* Browser chrome */}
            <div className="flex items-center gap-2 border-b border-border/60 pb-2.5">
              <span className="h-1.5 w-1.5 rounded-full bg-border" />
              <span className="h-1.5 w-1.5 rounded-full bg-border" />
              <span className="h-1.5 w-1.5 rounded-full bg-border" />

              <div className="ml-2 flex h-5 flex-1 items-center rounded-md border border-border/60 bg-background/50 px-2">
                <span className="truncate text-[7px] text-muted-foreground">
                  yourbusiness.com
                </span>
              </div>
            </div>

            {/* Website content */}
            <div className="mt-2 overflow-hidden rounded-lg border border-border/60 bg-background/70">
              {/* Website nav */}
              <div className="flex items-center justify-between border-b border-border/50 px-3 py-2.5">
                <div className="h-2 w-16 rounded-full bg-foreground/15" />

                <div className="hidden items-center gap-3 sm:flex">
                  <span className="h-1.5 w-8 rounded-full bg-border" />
                  <span className="h-1.5 w-8 rounded-full bg-border" />
                  <span className="h-1.5 w-8 rounded-full bg-border" />

                  <span className="h-5 w-12 rounded-md bg-primary/15" />
                </div>
              </div>

              {/* Website hero */}
              <div className="grid grid-cols-[1.1fr_0.9fr] gap-3 p-3 sm:p-4">
                <div className="flex flex-col justify-center">
                  <span className="text-[7px] font-semibold uppercase tracking-[0.14em] text-primary">
                    Business solution
                  </span>

                  <div className="mt-2 space-y-1.5">
                    <div className="h-3 w-[85%] rounded-sm bg-foreground/15" />
                    <div className="h-3 w-[65%] rounded-sm bg-foreground/10" />
                  </div>

                  <div className="mt-3 h-2 w-[78%] rounded-sm bg-border" />
                  <div className="mt-1.5 h-2 w-[62%] rounded-sm bg-border/70" />

                  <motion.div
                    animate={
                      activeStep === 1
                        ? {
                            y: [0, -1, 0],
                            boxShadow: [
                              "0 0 0 rgba(79,124,255,0)",
                              "0 0 18px rgba(79,124,255,0.12)",
                              "0 0 0 rgba(79,124,255,0)",
                            ],
                          }
                        : {}
                    }
                    transition={{
                      duration: 1,
                      repeat: activeStep === 1 ? Infinity : 0,
                    }}
                    className="mt-4 flex h-7 w-20 items-center justify-center rounded-md bg-primary/15 text-[7px] font-semibold text-primary"
                  >
                    Get Started
                  </motion.div>
                </div>

                {/* Website visual */}
                <div className="relative min-h-[110px] overflow-hidden rounded-lg border border-border/60 bg-surface/70">
                  <div className="absolute inset-3 rounded-md border border-border/60 bg-background/60" />

                  <div className="absolute left-5 right-5 top-6 h-2 rounded-full bg-primary/10" />
                  <div className="absolute left-5 top-10 h-2 w-1/2 rounded-full bg-border" />
                  <div className="absolute left-5 top-14 h-1.5 w-2/3 rounded-full bg-border/60" />

                  <motion.div
                    animate={
                      activeStep === 0
                        ? {
                            opacity: [0.35, 0.8, 0.35],
                            scale: [0.96, 1, 0.96],
                          }
                        : {
                            opacity: 0.3,
                            scale: 1,
                          }
                    }
                    transition={{
                      duration: 1.3,
                      repeat: activeStep === 0 ? Infinity : 0,
                    }}
                    className="absolute bottom-5 right-5 flex h-7 w-7 items-center justify-center rounded-full border border-mint/20 bg-mint/5 text-mint"
                  >
                    <MousePointer2 className="h-3 w-3" />
                  </motion.div>
                </div>
              </div>

              {/* Lead interaction */}
              <div className="border-t border-border/50 px-3 py-2.5">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex min-w-0 items-center gap-2">
                    <UserPlus className="h-3 w-3 shrink-0 text-mint" />

                    <span className="truncate text-[8px] text-muted-foreground">
                      Business enquiry form
                    </span>
                  </div>

                  <motion.span
                    animate={{
                      opacity: activeStep >= 2 ? 1 : 0.5,
                    }}
                    className={[
                      "shrink-0 rounded-full border px-2 py-0.5 text-[7px] font-semibold",
                      activeStep >= 2
                        ? "border-mint/20 bg-mint/5 text-mint"
                        : "border-border bg-surface text-muted-foreground",
                    ].join(" ")}
                  >
                    {activeStep >= 2 ? "SUBMITTED" : "READY"}
                  </motion.span>
                </div>
              </div>
            </div>
          </div>

          {/* Connection journey */}
          <div className="mt-5">
            <div className="mb-3 flex items-center justify-between">
              <div>
                <span className="text-[9px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                  Business connection
                </span>

                <p className="mt-1 text-xs font-medium text-foreground">
                  Website → Lead → CRM
                </p>
              </div>

              <span className="text-[9px] font-medium text-muted-foreground">
                {isPaused ? "PAUSED" : "AUTO"}
              </span>
            </div>

            <div className="grid grid-cols-4 gap-2">
              {journeySteps.map((step, index) => {
                const Icon = step.icon ?? Globe2;
                const isActive = index === activeStep;
                const isComplete = index < activeStep;

                return (
                  <div key={step.id} className="relative">
                    <motion.div
                      animate={{
                        y: isActive ? -2 : 0,
                        borderColor: isActive
                          ? "rgba(56,217,197,0.38)"
                          : isComplete
                            ? "rgba(56,217,197,0.20)"
                            : "rgba(32,41,54,0.70)",
                        backgroundColor: isActive
                          ? "rgba(56,217,197,0.06)"
                          : "rgba(13,17,24,0.50)",
                      }}
                      transition={{ duration: 0.3 }}
                      className="rounded-lg border p-2.5"
                    >
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
                          "mx-auto flex h-7 w-7 items-center justify-center rounded-md border",
                          isActive
                            ? "border-mint/30 bg-mint/10 text-mint"
                            : isComplete
                              ? "border-mint/20 bg-mint/5 text-mint"
                              : "border-border bg-elevated text-muted-foreground",
                        ].join(" ")}
                      >
                        <Icon className="h-3 w-3" />
                      </motion.div>

                      <p className="mt-2 truncate text-center text-[8px] font-semibold text-foreground">
                        {step.label}
                      </p>

                      <p className="mt-1 truncate text-center text-[7px] text-muted-foreground">
                        {step.detail}
                      </p>
                    </motion.div>

                    {index < journeySteps.length - 1 && (
                      <div className="absolute left-full top-1/2 z-10 hidden h-px w-2 -translate-y-1/2 bg-border sm:block">
                        {isActive && (
                          <motion.span
                            className="absolute left-0 top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-mint"
                            initial={{ x: -2, opacity: 0 }}
                            animate={{
                              x: [0, 8],
                              opacity: [0, 1, 0],
                            }}
                            transition={{
                              duration: 0.55,
                              repeat: Infinity,
                            }}
                          />
                        )}

                        {isComplete && (
                          <span className="absolute inset-0 bg-mint/40" />
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-5 flex items-center justify-between border-t border-border/70 pt-4">
          <div className="flex items-center gap-2">
            <Check className="h-3.5 w-3.5 text-mint" />

            <span className="text-[9px] font-medium text-muted-foreground">
              Digital experience connected to business
            </span>
          </div>

          <span className="text-[9px] font-semibold tracking-[0.08em] text-muted-foreground">
            DIGITAL FRONT DOOR
          </span>
        </div>
      </div>
    </div>
  );
}
