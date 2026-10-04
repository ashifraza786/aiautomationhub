import { motion } from "framer-motion";
import {
  Bot,
  Check,
  Globe2,
  Layers3,
  MessageCircle,
  Workflow,
} from "lucide-react";
import { useEffect, useState } from "react";

const workflowSteps = [
  {
    id: "lead",
    icon: Globe2,
    label: "New Lead",
    detail: "Website / Campaign",
  },
  {
    id: "ai",
    icon: Bot,
    label: "AI Agent",
    detail: "Understand & qualify",
  },
  {
    id: "crm",
    icon: Layers3,
    label: "CRM",
    detail: "Store & organize",
  },
  {
    id: "action",
    icon: MessageCircle,
    label: "Action",
    detail: "Follow-up",
  },
];

const capabilities = [
  "AI Agents",
  "AI Assistants",
  "Workflow Automation",
  "WhatsApp Automation",
  "OCR & Document Intelligence",
  "API & Business Integrations",
  "Lead Automation",
];

export default function AIAutomationShowcase() {
  const [activeStep, setActiveStep] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const timer = window.setInterval(() => {
      setActiveStep((current) => (current + 1) % workflowSteps.length);
    }, 1350);

    return () => window.clearInterval(timer);
  }, [isPaused]);

  const status =
    activeStep === 0
      ? "Workflow ready"
      : activeStep === workflowSteps.length - 1
        ? "Workflow connected"
        : "Processing workflow";

  return (
    <div
      className="relative h-full min-h-[430px] overflow-hidden rounded-xl border border-border/80 bg-background/70 p-4 sm:p-5 lg:p-6"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Ambient visual */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_25%,rgba(79,124,255,0.11),transparent_36%),radial-gradient(circle_at_20%_85%,rgba(56,217,197,0.045),transparent_30%)]"
        aria-hidden="true"
      />

      <div className="relative flex h-full flex-col">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-border/70 pb-4">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-primary/25 bg-primary/10 text-primary">
              <Bot className="h-4 w-4" />
            </div>

            <div>
              <span className="text-[9px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                Workflow Builder
              </span>

              <p className="mt-1 text-sm font-semibold text-foreground">
                Lead Automation
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

        {/* Workflow */}
        <div className="flex flex-1 flex-col justify-center">
          <div className="mb-5 flex items-center justify-between">
            <div>
              <span className="text-[9px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                Intelligent workflow
              </span>

              <p className="mt-1 text-xs font-medium text-foreground">
                Lead → Intelligence → System → Action
              </p>
            </div>

            <span className="text-[9px] font-medium text-muted-foreground">
              {isPaused ? "PAUSED" : "AUTO"}
            </span>
          </div>

          <div className="space-y-0">
            {workflowSteps.map((step, index) => {
              const Icon = step.icon;
              const isActive = index === activeStep;
              const isComplete = index < activeStep;
              const isLast = index === workflowSteps.length - 1;

              return (
                <div key={step.id}>
                  {/* Node */}
                  <motion.div
                    animate={{
                      x: isActive ? 2 : 0,
                      borderColor: isActive
                        ? "rgba(79,124,255,0.42)"
                        : isComplete
                          ? "rgba(79,124,255,0.20)"
                          : "rgba(32,41,54,0.70)",
                      backgroundColor: isActive
                        ? "rgba(79,124,255,0.07)"
                        : isComplete
                          ? "rgba(79,124,255,0.025)"
                          : "rgba(13,17,24,0.50)",
                    }}
                    transition={{ duration: 0.3 }}
                    className="relative flex items-center gap-3 rounded-xl border px-3.5 py-3"
                  >
                    {/* Active glow */}
                    {isActive && (
                      <motion.div
                        className="pointer-events-none absolute inset-0 rounded-xl"
                        animate={{
                          opacity: [0.15, 0.42, 0.15],
                        }}
                        transition={{
                          duration: 1.15,
                          repeat: Infinity,
                        }}
                        style={{
                          boxShadow: "inset 0 0 30px rgba(79,124,255,0.13)",
                        }}
                      />
                    )}

                    {/* Icon */}
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
                        "relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border",
                        isActive
                          ? "border-primary/35 bg-primary/10 text-primary"
                          : isComplete
                            ? "border-primary/20 bg-primary/5 text-primary"
                            : isLast
                              ? "border-mint/20 bg-mint/5 text-mint"
                              : "border-border bg-elevated text-muted-foreground",
                      ].join(" ")}
                    >
                      <Icon className="h-4 w-4" />
                    </motion.div>

                    {/* Content */}
                    <div className="relative z-10 min-w-0 flex-1">
                      <p className="text-xs font-semibold text-foreground">
                        {step.label}
                      </p>

                      <p className="mt-0.5 text-[10px] text-muted-foreground">
                        {step.detail}
                      </p>
                    </div>

                    {/* Status dot */}
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
                        "relative z-10 h-1.5 w-1.5 shrink-0 rounded-full",
                        isLast
                          ? "bg-mint"
                          : isActive || isComplete
                            ? "bg-primary"
                            : "bg-border",
                      ].join(" ")}
                    />
                  </motion.div>

                  {/* Connection */}
                  {!isLast && (
                    <div className="relative flex h-9 justify-center">
                      <div className="relative h-full w-px overflow-hidden bg-border">
                        {/* Completed connection */}
                        {isComplete && (
                          <motion.span
                            initial={{ scaleY: 0 }}
                            animate={{ scaleY: 1 }}
                            transition={{ duration: 0.3 }}
                            className="absolute inset-x-0 top-0 h-full origin-top bg-primary/50"
                          />
                        )}

                        {/* Moving signal */}
                        {isActive && (
                          <motion.span
                            className="absolute left-0 top-0 h-3 w-px bg-primary"
                            initial={{ y: -12, opacity: 0 }}
                            animate={{
                              y: [0, 36],
                              opacity: [0, 1, 0],
                            }}
                            transition={{
                              duration: 0.65,
                              ease: "easeInOut",
                              repeat: Infinity,
                            }}
                          />
                        )}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Capability strip */}
        <div className="mt-5 border-t border-border/70 pt-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Workflow className="h-3.5 w-3.5 text-primary" />

              <span className="text-[9px] font-medium text-muted-foreground">
                Automation capabilities
              </span>
            </div>

            <span className="text-[9px] font-semibold tracking-[0.08em] text-muted-foreground">
              AI → SYSTEM → ACTION
            </span>
          </div>

          <div className="mt-3 flex flex-wrap gap-2">
            {capabilities.slice(0, 4).map((item, index) => {
              const highlight =
                (activeStep === 1 && index === 0) ||
                (activeStep === 2 && index === 2) ||
                (activeStep === 3 && index === 3);

              return (
                <motion.div
                  key={item}
                  animate={{
                    opacity: highlight ? 1 : 0.72,
                    borderColor: highlight
                      ? "rgba(79,124,255,0.35)"
                      : "rgba(32,41,54,0.70)",
                  }}
                  transition={{ duration: 0.3 }}
                  className="inline-flex items-center gap-1.5 rounded-md border bg-surface/50 px-2 py-1"
                >
                  <Check
                    className={[
                      "h-2.5 w-2.5",
                      highlight ? "text-primary" : "text-muted-foreground",
                    ].join(" ")}
                  />

                  <span className="text-[9px] text-muted-foreground">
                    {item}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
