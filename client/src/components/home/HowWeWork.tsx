import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  Search,
  Route,
  Code2,
  Activity,
  ArrowRight,
  Check,
  Workflow,
  Database,
  Boxes,
  GitBranch,
  ShieldCheck,
  Gauge,
  Plug,
  ClipboardCheck,
  Sparkles,
  CircleDot,
  Layers3,
} from "lucide-react";

const phases = [
  {
    number: "01",
    id: "discover",
    title: "Discover",
    label: "BUSINESS DISCOVERY",
    status: "Understanding the business",
    description:
      "Before choosing technology, we understand how your business operates today, where work gets stuck, and what you want to improve.",
    outcome: "A clear understanding of the problem, workflow and priorities.",
    icon: Search,
    accent: "blue",
    visualTitle: "Map the current workflow",
    visualDescription: "Understand how work moves today",
  },
  {
    number: "02",
    id: "design",
    title: "Design",
    label: "SOLUTION BLUEPRINT",
    status: "Planning the right system",
    description:
      "We turn the requirements into a practical solution blueprint, connecting the right workflows, software, business systems and automation.",
    outcome: "A solution structure aligned with your business requirements.",
    icon: Route,
    accent: "blue",
    visualTitle: "Design connected systems",
    visualDescription: "Define components and relationships",
  },
  {
    number: "03",
    id: "deploy",
    title: "Deploy",
    label: "BUILD & IMPLEMENTATION",
    status: "Building the solution",
    description:
      "We develop the agreed solution, connect its relevant components, test the experience and prepare it for real-world use.",
    outcome: "A tested solution prepared for the agreed launch.",
    icon: Code2,
    accent: "mint",
    visualTitle: "Build, connect and validate",
    visualDescription: "Implementation pipeline · Concept view",
  },
  {
    number: "04",
    id: "optimize",
    title: "Optimize",
    label: "CONTINUOUS IMPROVEMENT",
    status: "Evolving with the business",
    description:
      "As business requirements change, we identify opportunities to refine workflows, improve the solution and extend its capabilities according to the agreed scope.",
    outcome: "A clear path for improvements as your business evolves.",
    icon: Activity,
    accent: "mint",
    visualTitle: "Identify the next improvement",
    visualDescription: "Feedback and improvement cycle · Concept view",
  },
] as const;

type PhaseId = (typeof phases)[number]["id"];

function WorkflowNode({
  icon: Icon,
  title,
  subtitle,
  active = false,
}: {
  icon: typeof Search;
  title: string;
  subtitle: string;
  active?: boolean;
}) {
  return (
    <div
      className={[
        "relative z-10 flex min-w-0 items-center gap-3 rounded-xl border p-3 sm:p-4",
        active
          ? "border-primary/40 bg-primary/[0.09] shadow-[0_0_28px_rgba(79,124,255,0.08)]"
          : "border-border/80 bg-[#121821]/90",
      ].join(" ")}
    >
      <div
        className={[
          "flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border",
          active
            ? "border-primary/30 bg-primary/10 text-primary"
            : "border-border bg-background/70 text-muted-foreground",
        ].join(" ")}
      >
        <Icon className="h-4 w-4" strokeWidth={1.7} aria-hidden="true" />
      </div>
      <div className="min-w-0">
        <p className="truncate text-xs font-semibold text-foreground sm:text-sm">
          {title}
        </p>
        <p className="mt-1 text-[10px] leading-4 text-muted-foreground sm:text-xs">
          {subtitle}
        </p>
      </div>
    </div>
  );
}

function DiscoverVisual() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between gap-3">
        <span className="text-xs font-medium text-foreground">
          Workflow discovery
        </span>
        <span className="rounded-full border border-primary/20 bg-primary/[0.07] px-2.5 py-1 text-[9px] uppercase tracking-wider text-primary">
          Concept view
        </span>
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
        <WorkflowNode
          icon={ClipboardCheck}
          title="Current process"
          subtitle="How work happens"
        />
        <WorkflowNode
          icon={GitBranch}
          title="Bottlenecks"
          subtitle="Where work slows down"
          active
        />
        <WorkflowNode
          icon={Sparkles}
          title="Opportunities"
          subtitle="What could improve"
        />
      </div>

      <div className="rounded-xl border border-border/80 bg-background/40 p-4">
        <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-muted-foreground">
          Discovery focus
        </p>
        <div className="mt-4 space-y-3">
          {[
            ["01", "Understand the existing workflow"],
            ["02", "Identify repetitive or disconnected tasks"],
            ["03", "Prioritize the business problem"],
          ].map(([number, text]) => (
            <div key={number} className="flex items-center gap-3">
              <span className="text-[10px] font-semibold text-primary">
                {number}
              </span>
              <span className="text-xs text-secondary-foreground">{text}</span>
              <div className="ml-auto h-1.5 w-1.5 shrink-0 rounded-full bg-mint/70" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function DesignVisual() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between gap-3">
        <span className="text-xs font-medium text-foreground">
          Connected system blueprint
        </span>
        <span className="rounded-full border border-primary/20 bg-primary/[0.07] px-2.5 py-1 text-[9px] uppercase tracking-wider text-primary">
          Concept view
        </span>
      </div>

      <div className="relative overflow-hidden rounded-xl border border-border/80 bg-background/40 p-4 sm:p-6">
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          aria-hidden="true"
          style={{
            backgroundImage:
              "linear-gradient(rgba(79,124,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(79,124,255,0.08) 1px, transparent 1px)",
            backgroundSize: "26px 26px",
          }}
        />

        <div className="relative mx-auto max-w-[240px]">
          <WorkflowNode
            icon={Layers3}
            title="Business system"
            subtitle="Solution blueprint"
            active
          />
          <div className="mx-auto h-7 w-px bg-gradient-to-b from-primary/60 to-mint/50" />
          <div className="grid grid-cols-2 gap-3">
            <div className="flex flex-col items-center">
              <div className="mb-2 h-3 w-px bg-primary/50" />
              <WorkflowNode
                icon={Database}
                title="Data"
                subtitle="Information"
              />
            </div>
            <div className="flex flex-col items-center">
              <div className="mb-2 h-3 w-px bg-mint/50" />
              <WorkflowNode
                icon={Workflow}
                title="Workflow"
                subtitle="Process logic"
              />
            </div>
          </div>
        </div>

        <div className="relative mt-5 flex flex-wrap justify-center gap-2">
          {["Requirements", "System structure", "Implementation plan"].map(
            (item) => (
              <span
                key={item}
                className="rounded-full border border-border bg-surface px-2.5 py-1.5 text-[10px] text-muted-foreground"
              >
                {item}
              </span>
            ),
          )}
        </div>
      </div>
    </div>
  );
}

function DeployVisual() {
  const steps = [
    { icon: Code2, title: "Implement", subtitle: "Build the solution" },
    { icon: Plug, title: "Integrate", subtitle: "Connect components" },
    { icon: ShieldCheck, title: "Validate", subtitle: "Test the experience" },
  ];

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between gap-3">
        <span className="text-xs font-medium text-foreground">
          Implementation pipeline
        </span>
        <span className="rounded-full border border-mint/20 bg-mint/[0.06] px-2.5 py-1 text-[9px] uppercase tracking-wider text-mint">
          Concept view
        </span>
      </div>

      <div className="space-y-0 rounded-xl border border-border/80 bg-background/40 p-4 sm:p-5">
        {steps.map((step, index) => (
          <div key={step.title}>
            <WorkflowNode
              icon={step.icon}
              title={step.title}
              subtitle={step.subtitle}
              active={index === 1}
            />
            {index < steps.length - 1 && (
              <div className="ml-[30px] flex h-8 items-center">
                <div className="h-full w-px bg-gradient-to-b from-primary/40 to-mint/50" />
                <ArrowRight
                  className="ml-2 h-3.5 w-3.5 rotate-90 text-mint/70"
                  aria-hidden="true"
                />
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="flex items-start gap-2 rounded-xl border border-mint/15 bg-mint/[0.04] p-3">
        <Check
          className="mt-0.5 h-4 w-4 shrink-0 text-mint"
          aria-hidden="true"
        />
        <p className="text-xs leading-5 text-muted-foreground">
          Scope, testing and launch readiness are aligned with the agreed
          solution.
        </p>
      </div>
    </div>
  );
}

function OptimizeVisual() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between gap-3">
        <span className="text-xs font-medium text-foreground">
          Improvement cycle
        </span>
        <span className="rounded-full border border-mint/20 bg-mint/[0.06] px-2.5 py-1 text-[9px] uppercase tracking-wider text-mint">
          Concept view
        </span>
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <WorkflowNode
          icon={Gauge}
          title="Review"
          subtitle="Evaluate the current process"
        />
        <WorkflowNode
          icon={Search}
          title="Identify"
          subtitle="Find improvement opportunities"
          active
        />
        <WorkflowNode
          icon={Route}
          title="Refine"
          subtitle="Prioritize changes"
        />
        <WorkflowNode
          icon={Activity}
          title="Evolve"
          subtitle="Adapt to new requirements"
        />
      </div>

      <div className="rounded-xl border border-border/80 bg-background/40 p-4">
        <div className="flex items-center gap-2">
          <CircleDot className="h-4 w-4 text-mint" aria-hidden="true" />
          <p className="text-xs font-semibold text-foreground">
            Improvement priorities
          </p>
        </div>
        <div className="mt-4 space-y-3">
          {[
            "Workflow refinements",
            "New business requirements",
            "Potential system extensions",
          ].map((item) => (
            <div key={item} className="flex items-center gap-3">
              <div className="h-1.5 w-1.5 rounded-full bg-mint" />
              <span className="text-xs text-muted-foreground">{item}</span>
            </div>
          ))}
        </div>
        <p className="mt-4 border-t border-border pt-3 text-[10px] leading-4 text-muted-foreground">
          Improvements depend on business priorities and the agreed support
          scope.
        </p>
      </div>
    </div>
  );
}

function PhaseVisual({ phase }: { phase: PhaseId }) {
  switch (phase) {
    case "discover":
      return <DiscoverVisual />;
    case "design":
      return <DesignVisual />;
    case "deploy":
      return <DeployVisual />;
    case "optimize":
      return <OptimizeVisual />;
  }
}

export default function HowWeWork() {
  const [activeId, setActiveId] = useState<PhaseId>("discover");
  const reduceMotion = useReducedMotion();
  const activeIndex = phases.findIndex((phase) => phase.id === activeId);
  const activePhase = phases[activeIndex];
  const ActiveIcon = activePhase.icon;

  const changePhase = (id: PhaseId) => {
    setActiveId(id);
  };

  return (
    <section
      id="process"
      aria-labelledby="how-we-work-heading"
      className="relative overflow-hidden border-t border-border/60 bg-background"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute left-[5%] top-[20%] h-72 w-72 rounded-full bg-primary/[0.045] blur-3xl" />
        <div className="absolute bottom-[8%] right-[4%] h-72 w-72 rounded-full bg-mint/[0.035] blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(32,41,54,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(32,41,54,0.4) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
            maskImage:
              "linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)",
          }}
        />
      </div>

      <div className="container relative pt-8 pb-16 md:pt-12 md:pb-20 lg:pt-14 lg:pb-24">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mb-12 max-w-3xl text-center md:mb-16"
        >
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
            HOW WE WORK
          </p>
          <h2
            id="how-we-work-heading"
            className="text-3xl font-bold leading-tight tracking-[-0.035em] text-foreground sm:text-4xl lg:text-5xl"
          >
            From Business Problem to{" "}
            <span className="text-primary">Working Solution.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">
            We understand the business first, design the right solution, bring
            it to life and identify opportunities to improve it as your needs
            evolve.
          </p>
        </motion.div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 22 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.12 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="overflow-hidden rounded-2xl border border-border bg-[#0D1118] shadow-[0_24px_100px_rgba(0,0,0,0.24)] md:rounded-3xl"
        >
          {/* System bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border bg-[#121821]/80 px-4 py-4 sm:px-6 lg:px-8">
            <div className="flex min-w-0 items-center gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-primary/25 bg-primary/[0.08] text-primary">
                <Workflow className="h-4 w-4" aria-hidden="true" />
              </div>
              <div className="min-w-0">
                <p className="truncate text-xs font-semibold text-foreground sm:text-sm">
                  AI AutomationHub · Solution Process
                </p>
                <p className="mt-1 text-[10px] text-muted-foreground">
                  Business technology workflow
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 rounded-full border border-border bg-background/60 px-3 py-2">
              <span className="h-1.5 w-1.5 rounded-full bg-mint" />
              <span className="text-[9px] font-semibold uppercase tracking-[0.12em] text-muted-foreground sm:text-[10px]">
                Phase {activePhase.number} of 04
              </span>
            </div>
          </div>

          <div className="grid min-w-0 lg:grid-cols-[220px_minmax(0,0.88fr)_minmax(0,1.12fr)]">
            {/* Phase navigation */}
            <nav
              aria-label="How we work phases"
              className="border-b border-border p-3 sm:p-4 lg:border-b-0 lg:border-r lg:p-5"
            >
              <p className="px-3 pb-3 pt-2 text-[9px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                The process
              </p>

              <div className="grid grid-cols-2 gap-2 lg:grid-cols-1 lg:gap-2">
                {phases.map((phase, index) => {
                  const Icon = phase.icon;
                  const isActive = phase.id === activeId;

                  return (
                    <button
                      key={phase.id}
                      type="button"
                      onClick={() => changePhase(phase.id)}
                      aria-pressed={isActive}
                      aria-controls="process-phase-content"
                      className={[
                        "group flex min-w-0 items-center gap-3 rounded-xl border p-3 text-left transition-colors duration-200",
                        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-[#0D1118]",
                        isActive
                          ? "border-primary/35 bg-primary/[0.09]"
                          : "border-transparent bg-transparent hover:border-border hover:bg-background/60",
                      ].join(" ")}
                    >
                      <span
                        className={[
                          "flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border transition-colors",
                          isActive
                            ? "border-primary/30 bg-primary/10 text-primary"
                            : "border-border bg-background/60 text-muted-foreground group-hover:text-foreground",
                        ].join(" ")}
                      >
                        <Icon className="h-4 w-4" aria-hidden="true" />
                      </span>

                      <span className="min-w-0 flex-1">
                        <span className="block text-[9px] font-medium tracking-[0.1em] text-muted-foreground">
                          {phase.number}
                        </span>
                        <span
                          className={[
                            "mt-1 block truncate text-xs font-semibold sm:text-sm",
                            isActive
                              ? "text-foreground"
                              : "text-muted-foreground",
                          ].join(" ")}
                        >
                          {phase.title}
                        </span>
                      </span>

                      {isActive && (
                        <span className="hidden h-1.5 w-1.5 shrink-0 rounded-full bg-primary sm:block" />
                      )}
                    </button>
                  );
                })}
              </div>

              <div className="mt-5 hidden rounded-xl border border-border/80 bg-background/40 p-4 lg:block">
                <p className="text-[9px] font-semibold uppercase tracking-[0.13em] text-muted-foreground">
                  Our approach
                </p>
                <p className="mt-2 text-xs leading-5 text-muted-foreground">
                  Start with the business problem. The technology follows.
                </p>
              </div>
            </nav>

            {/* Active phase content */}
            <div
              id="process-phase-content"
              aria-live="polite"
              aria-atomic="true"
              className="relative flex min-w-0 flex-col justify-center overflow-hidden border-b border-border p-5 sm:p-7 lg:border-b-0 lg:border-r lg:p-8 xl:p-10"
            >
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -right-2 top-0 select-none text-[150px] font-bold leading-none tracking-[-0.09em] text-foreground/[0.025] sm:text-[190px] lg:-right-4 lg:text-[220px]"
              >
                {activePhase.number}
              </span>

              <motion.div
                key={activePhase.id}
                initial={reduceMotion ? false : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: reduceMotion ? 0 : 0.3 }}
                className="relative z-10"
              >
                <div className="mb-7 flex items-center gap-2">
                  <span
                    className={[
                      "flex h-9 w-9 items-center justify-center rounded-lg border",
                      activePhase.accent === "mint"
                        ? "border-mint/20 bg-mint/[0.06] text-mint"
                        : "border-primary/20 bg-primary/[0.06] text-primary",
                    ].join(" ")}
                  >
                    <ActiveIcon className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <span className="text-[9px] font-semibold uppercase tracking-[0.13em] text-muted-foreground sm:text-[10px]">
                    {activePhase.label}
                  </span>
                </div>

                <p className="mb-3 text-xs font-medium text-primary">
                  PHASE {activePhase.number}
                </p>

                <h3 className="max-w-sm text-3xl font-bold tracking-[-0.04em] text-foreground sm:text-4xl lg:text-[42px] lg:leading-[1.08]">
                  {activePhase.title}
                  <span className="text-primary">.</span>
                </h3>

                <p className="mt-5 max-w-md text-sm leading-7 text-muted-foreground sm:text-base">
                  {activePhase.description}
                </p>

                <div className="mt-7 rounded-xl border border-border bg-background/40 p-4">
                  <p className="text-[9px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                    What this phase delivers
                  </p>
                  <p className="mt-2 text-xs leading-6 text-foreground/90 sm:text-sm">
                    {activePhase.outcome}
                  </p>
                </div>

                <div className="mt-7 flex items-center justify-between gap-3 border-t border-border pt-5">
                  <span className="text-[10px] text-muted-foreground">
                    {activePhase.status}
                  </span>

                  <div className="flex gap-1.5">
                    {phases.map((phase) => (
                      <span
                        key={phase.id}
                        className={[
                          "h-1.5 rounded-full transition-all duration-200",
                          phase.id === activeId
                            ? "w-6 bg-primary"
                            : "w-1.5 bg-border",
                        ].join(" ")}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Active conceptual visualization */}
            <div className="min-w-0 p-4 sm:p-6 lg:p-7 xl:p-8">
              <div className="mb-5 flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <p className="text-[9px] font-semibold uppercase tracking-[0.15em] text-muted-foreground">
                    System visualization
                  </p>
                  <h4 className="mt-2 text-sm font-semibold text-foreground sm:text-base">
                    {activePhase.visualTitle}
                  </h4>
                  <p className="mt-1 text-xs leading-5 text-muted-foreground">
                    {activePhase.visualDescription}
                  </p>
                </div>
                <span className="shrink-0 rounded-md border border-border bg-background/70 px-2 py-1 text-[9px] text-muted-foreground">
                  {activePhase.number} / 04
                </span>
              </div>

              <motion.div
                key={`visual-${activePhase.id}`}
                initial={reduceMotion ? false : { opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: reduceMotion ? 0 : 0.3,
                  delay: reduceMotion ? 0 : 0.04,
                }}
              >
                <PhaseVisual phase={activePhase.id} />
              </motion.div>

              <div className="mt-5 flex items-center gap-2 border-t border-border pt-4">
                <span className="h-1.5 w-1.5 rounded-full bg-mint" />
                <p className="text-[10px] leading-5 text-muted-foreground">
                  Illustrative workflow · Tailored to the agreed requirements
                </p>
              </div>
            </div>
          </div>

          {/* Panel footer */}
          <div className="flex flex-col gap-4 border-t border-border bg-[#121821]/50 px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-7 lg:px-8">
            <div className="flex min-w-0 items-start gap-3">
              <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-mint/20 bg-mint/[0.05] text-mint">
                <Check className="h-4 w-4" aria-hidden="true" />
              </div>
              <div>
                <p className="text-xs font-semibold text-foreground">
                  Built around your business
                </p>
                <p className="mt-1 max-w-lg text-xs leading-5 text-muted-foreground">
                  You do not need to know which technology to choose. Start by
                  telling us what you want to improve.
                </p>
              </div>
            </div>

            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center">
              <a
                href="/#work"
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-[0_0_28px_rgba(79,124,255,0.12)] transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-[#0D1118]"
              >
                Explore Our Work
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>

              <a
                href="/#solutions"
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-border bg-background/50 px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary/40 hover:bg-primary/[0.06] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-[#0D1118]"
              >
                Explore Our Solutions
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </motion.div>

        <p className="mt-5 text-center text-[10px] leading-5 text-muted-foreground">
          Each project follows a process shaped around its requirements, scope
          and business goals.
        </p>
      </div>
    </section>
  );
}
