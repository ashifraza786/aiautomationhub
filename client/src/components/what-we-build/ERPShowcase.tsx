import { motion } from "framer-motion";
import {
  BarChart3,
  Building2,
  Check,
  CircleDollarSign,
  Package,
  ShoppingCart,
  Users,
} from "lucide-react";
import { useEffect, useState } from "react";

const departments = [
  {
    id: "sales",
    label: "Sales",
    icon: ShoppingCart,
    detail: "Order recorded",
  },
  {
    id: "inventory",
    label: "Inventory",
    icon: Package,
    detail: "Stock reserved",
  },
  {
    id: "billing",
    label: "Billing",
    icon: CircleDollarSign,
    detail: "Invoice generated",
  },
  {
    id: "hr",
    label: "HR",
    icon: Users,
    detail: "Team visibility",
  },
  {
    id: "reports",
    label: "Reports",
    icon: BarChart3,
    detail: "Data updated",
  },
];

export default function ERPShowcase() {
  const [activeStep, setActiveStep] = useState(-1);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const timer = window.setInterval(() => {
      setActiveStep((current) => {
        if (current >= departments.length) {
          return -1;
        }

        return current + 1;
      });
    }, 1050);

    return () => window.clearInterval(timer);
  }, [isPaused]);

  const systemActive = activeStep >= departments.length;

  const status =
    activeStep === -1
      ? "Ready"
      : systemActive
        ? "System active"
        : "Synchronizing";

  return (
    <div
      className="relative h-full min-h-[430px] overflow-hidden rounded-xl border border-border/80 bg-background/70 p-4 sm:p-5 lg:p-6"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Ambient system layer */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_72%_22%,rgba(109,92,255,0.11),transparent_36%),radial-gradient(circle_at_18%_88%,rgba(79,124,255,0.045),transparent_30%)]"
        aria-hidden="true"
      />

      <div className="relative flex h-full flex-col">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-border/70 pb-4">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-violet/25 bg-violet/10 text-violet">
              <Building2 className="h-4 w-4" />
            </div>

            <div>
              <span className="text-[9px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                Business Operations
              </span>

              <p className="mt-1 text-sm font-semibold text-foreground">
                Connected ERP
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
            className={[
              "inline-flex items-center gap-2 rounded-full border px-2.5 py-1 text-[9px] font-medium",
              systemActive
                ? "border-mint/15 bg-mint/5 text-mint"
                : "border-violet/20 bg-violet/5 text-violet",
            ].join(" ")}
          >
            <span
              className={[
                "h-1.5 w-1.5 rounded-full",
                systemActive ? "bg-mint" : "bg-violet",
              ].join(" ")}
            />

            {status}
          </motion.span>
        </div>

        {/* Main ERP visual */}
        <div className="flex flex-1 flex-col justify-center">
          {/* Event */}
          <div className="mb-5 flex items-center justify-between">
            <div>
              <span className="text-[9px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                Business event
              </span>

              <p className="mt-1 text-xs font-medium text-foreground">
                New Sale
              </p>
            </div>

            <span className="rounded-md border border-violet/20 bg-violet/5 px-2 py-1 text-[8px] font-semibold text-violet">
              {isPaused ? "PAUSED" : "ERP FLOW"}
            </span>
          </div>

          {/* Departments */}
          <div className="grid grid-cols-5 gap-2">
            {departments.map((department, index) => {
              const Icon = department.icon;

              const isActive = index === activeStep;
              const isComplete = index < activeStep;

              return (
                <div key={department.id} className="relative">
                  <motion.div
                    animate={{
                      y: isActive ? -3 : 0,
                      borderColor: isActive
                        ? "rgba(109,92,255,0.42)"
                        : isComplete
                          ? "rgba(109,92,255,0.22)"
                          : "rgba(32,41,54,0.70)",
                      backgroundColor: isActive
                        ? "rgba(109,92,255,0.08)"
                        : isComplete
                          ? "rgba(109,92,255,0.035)"
                          : "rgba(13,17,24,0.50)",
                    }}
                    transition={{ duration: 0.3 }}
                    className="relative rounded-xl border p-2.5 sm:p-3"
                  >
                    {isActive && (
                      <motion.div
                        className="pointer-events-none absolute inset-0 rounded-xl"
                        animate={{
                          opacity: [0.15, 0.4, 0.15],
                        }}
                        transition={{
                          duration: 1.1,
                          repeat: Infinity,
                        }}
                        style={{
                          boxShadow: "inset 0 0 25px rgba(109,92,255,0.12)",
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
                          ? "border-violet/35 bg-violet/10 text-violet"
                          : isComplete
                            ? "border-violet/20 bg-violet/5 text-violet"
                            : "border-border bg-elevated text-muted-foreground",
                      ].join(" ")}
                    >
                      <Icon className="h-3.5 w-3.5" />
                    </motion.div>

                    <p className="relative z-10 mt-2 truncate text-center text-[9px] font-semibold text-foreground">
                      {department.label}
                    </p>

                    <p className="relative z-10 mt-1 truncate text-center text-[7px] text-muted-foreground">
                      {department.detail}
                    </p>

                    <div className="mt-2 flex justify-center">
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
                          isComplete
                            ? "bg-violet"
                            : isActive
                              ? "bg-violet"
                              : "bg-border",
                        ].join(" ")}
                      />
                    </div>
                  </motion.div>

                  {/* Flow signal between departments */}
                  {index < departments.length - 1 && (
                    <div className="pointer-events-none absolute left-full top-1/2 z-20 hidden h-px w-2 -translate-y-1/2 bg-border sm:block">
                      {isActive && (
                        <motion.span
                          className="absolute left-0 top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-violet"
                          initial={{ x: -3, opacity: 0 }}
                          animate={{
                            x: [0, 8],
                            opacity: [0, 1, 0],
                          }}
                          transition={{
                            duration: 0.55,
                            ease: "easeInOut",
                            repeat: Infinity,
                          }}
                        />
                      )}

                      {isComplete && (
                        <span className="absolute inset-0 bg-violet/45" />
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Mobile connection */}
          <div className="mt-3 flex items-center justify-between sm:hidden">
            {departments.map((department, index) => {
              const isComplete = index < activeStep;

              return (
                <div
                  key={department.id}
                  className="flex flex-1 items-center last:flex-none"
                >
                  <span
                    className={[
                      "h-px flex-1",
                      isComplete ? "bg-violet/50" : "bg-border",
                    ].join(" ")}
                  />

                  {index < departments.length - 1 && (
                    <span
                      className={[
                        "mx-1 h-1 w-1 rounded-full",
                        isComplete ? "bg-violet" : "bg-border",
                      ].join(" ")}
                    />
                  )}
                </div>
              );
            })}
          </div>

          {/* Synchronization panel */}
          <div className="mt-5 rounded-xl border border-border/70 bg-surface/40 p-3 sm:p-4">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-[8px] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                  System synchronization
                </span>

                <p className="mt-1 text-xs font-semibold text-foreground">
                  One event. Multiple business functions.
                </p>
              </div>

              <span className="text-[8px] font-medium text-muted-foreground">
                {activeStep === -1
                  ? "READY"
                  : systemActive
                    ? "COMPLETE"
                    : `${activeStep}/${departments.length}`}
              </span>
            </div>

            <div className="mt-4 h-1 overflow-hidden rounded-full bg-border">
              <motion.div
                animate={{
                  width:
                    activeStep === -1
                      ? "0%"
                      : systemActive
                        ? "100%"
                        : `${(activeStep / departments.length) * 100}%`,
                }}
                transition={{ duration: 0.4 }}
                className="h-full rounded-full bg-violet"
              />
            </div>

            <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
              <StatusItem label="Sales" active={activeStep >= 1} />

              <StatusItem label="Inventory" active={activeStep >= 2} />

              <StatusItem label="Billing" active={activeStep >= 3} />

              <StatusItem label="Reports" active={activeStep >= 5} />
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-5 flex items-center justify-between border-t border-border/70 pt-4">
          <div className="flex items-center gap-2">
            <Check className="h-3.5 w-3.5 text-violet" />

            <span className="text-[9px] font-medium text-muted-foreground">
              Departments working as one system
            </span>
          </div>

          <span className="text-[9px] font-semibold tracking-[0.08em] text-muted-foreground">
            ERP SYSTEM
          </span>
        </div>
      </div>
    </div>
  );
}

function StatusItem({ label, active }: { label: string; active: boolean }) {
  return (
    <motion.div
      animate={{
        borderColor: active ? "rgba(109,92,255,0.25)" : "rgba(32,41,54,0.60)",
      }}
      className="flex items-center gap-2 rounded-md border bg-background/35 px-2 py-1.5"
    >
      <motion.span
        animate={{
          scale: active ? [1, 1.12, 1] : 1,
          opacity: active ? 1 : 0.55,
        }}
        transition={{
          duration: 0.8,
          repeat: active ? Infinity : 0,
        }}
        className={[
          "h-1.5 w-1.5 rounded-full",
          active ? "bg-violet" : "bg-border",
        ].join(" ")}
      />

      <span
        className={[
          "text-[8px]",
          active ? "text-foreground" : "text-muted-foreground",
        ].join(" ")}
      >
        {label}
      </span>
    </motion.div>
  );
}
