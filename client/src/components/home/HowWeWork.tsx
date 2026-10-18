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
  GitBranch,
  ShieldCheck,
  Gauge,
  Plug,
  ClipboardCheck,
  Sparkles,
  CircleDot,
  Layers3,
  Boxes,
  MessageSquare,
} from "lucide-react";

const C = {
  ivory: "#F4F0E8",
  sage: "#E4E8DF",
  green: "#004225",
  charcoal: "#24231F",
  gray: "#5F5B53",
  white: "#FFFFFF",
  border: "#DDD6C9",
};

const phases = [
  {
    number: "01",
    id: "discover",
    title: "Discover",
    label: "BUSINESS DISCOVERY",
    status: "Understand the business",
    description:
      "Before choosing technology, we understand how your business operates today, where work gets stuck, and what you want to improve.",
    outcome: "A clear understanding of the problem, workflow and priorities.",
    icon: Search,
    visualTitle: "Map the current workflow",
    visualDescription: "Understand how work moves today",
    nodes: [
      {
        icon: ClipboardCheck,
        title: "Current process",
        subtitle: "How work happens",
      },
      {
        icon: GitBranch,
        title: "Bottlenecks",
        subtitle: "Where work slows down",
      },
      {
        icon: Sparkles,
        title: "Opportunities",
        subtitle: "What could improve",
      },
    ],
    checklist: [
      "Understand the existing workflow",
      "Identify repetitive or disconnected tasks",
      "Prioritize the business problem",
    ],
  },
  {
    number: "02",
    id: "design",
    title: "Design",
    label: "SOLUTION BLUEPRINT",
    status: "Plan the right system",
    description:
      "We turn requirements into a practical solution blueprint, connecting the right workflows, software, business systems and automation.",
    outcome: "A solution structure aligned with your business requirements.",
    icon: Route,
    visualTitle: "Design connected systems",
    visualDescription: "Define components and relationships",
    nodes: [
      {
        icon: Database,
        title: "Business data",
        subtitle: "Information structure",
      },
      { icon: Workflow, title: "Workflow", subtitle: "Process logic" },
      {
        icon: Layers3,
        title: "System design",
        subtitle: "Connected components",
      },
    ],
    checklist: [
      "Organize the core requirements",
      "Define the system and workflow structure",
      "Agree priorities and implementation scope",
    ],
  },
  {
    number: "03",
    id: "deploy",
    title: "Deploy",
    label: "BUILD & IMPLEMENTATION",
    status: "Build the solution",
    description:
      "We develop the agreed solution, connect its relevant components, test the experience and prepare it for real-world use.",
    outcome: "A tested solution prepared for the agreed launch.",
    icon: Code2,
    visualTitle: "Build, connect and validate",
    visualDescription: "Implementation pipeline · Concept view",
    nodes: [
      { icon: Code2, title: "Implement", subtitle: "Build the solution" },
      { icon: Plug, title: "Integrate", subtitle: "Connect components" },
      { icon: ShieldCheck, title: "Validate", subtitle: "Test the experience" },
    ],
    checklist: [
      "Build against the agreed requirements",
      "Connect relevant tools and components",
      "Test the solution before launch",
    ],
  },
  {
    number: "04",
    id: "optimize",
    title: "Optimize",
    label: "CONTINUOUS IMPROVEMENT",
    status: "Evolve with the business",
    description:
      "As business requirements change, we identify opportunities to refine workflows, improve the solution and extend its capabilities according to the agreed scope.",
    outcome: "A clear path for improvements as your business evolves.",
    icon: Activity,
    visualTitle: "Identify the next improvement",
    visualDescription: "Feedback and improvement cycle · Concept view",
    nodes: [
      { icon: Gauge, title: "Review", subtitle: "Evaluate the process" },
      { icon: Search, title: "Identify", subtitle: "Find opportunities" },
      { icon: Route, title: "Refine", subtitle: "Prioritize changes" },
    ],
    checklist: [
      "Review the current workflow",
      "Identify new business requirements",
      "Plan relevant improvements within scope",
    ],
  },
] as const;

type PhaseId = (typeof phases)[number]["id"];

const reveal = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

export default function HowWeWork() {
  const [activeId, setActiveId] = useState<PhaseId>("discover");
  const reduceMotion = useReducedMotion();
  const activeIndex = phases.findIndex((phase) => phase.id === activeId);
  const activePhase = phases[activeIndex];
  const ActiveIcon = activePhase.icon;

  return (
    <section
      id="process"
      aria-labelledby="how-we-work-heading"
      className="relative overflow-hidden border-y py-20 sm:py-24 lg:py-28"
      style={{
        backgroundColor: C.ivory,
        borderColor: C.border,
        color: C.charcoal,
      }}
    >
      {/* Restrained background texture */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          backgroundImage:
            "linear-gradient(rgba(95,91,83,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(95,91,83,0.045) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage:
            "linear-gradient(to bottom, transparent, black 14%, black 86%, transparent)",
        }}
      />
      <div
        className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full blur-3xl"
        style={{ backgroundColor: "rgba(0,66,37,0.055)" }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-28 bottom-12 h-80 w-80 rounded-full blur-3xl"
        style={{ backgroundColor: "rgba(228,232,223,0.8)" }}
        aria-hidden="true"
      />

      <div className="container relative mx-auto px-5 sm:px-6 lg:px-8">
        {/* Section intro */}
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-3xl text-center"
        >
          <p
            className="mb-4 text-xs font-semibold uppercase tracking-[0.18em]"
            style={{ color: C.green }}
          >
            HOW WE WORK
          </p>

          <h2
            id="how-we-work-heading"
            className="text-3xl font-semibold leading-[1.12] tracking-[-0.04em] sm:text-4xl lg:text-5xl"
            style={{ color: C.charcoal }}
          >
            From Business Problem to{" "}
            <span style={{ color: C.green }}>Working Solution.</span>
          </h2>

          <p
            className="mx-auto mt-5 max-w-2xl text-sm leading-7 sm:text-base"
            style={{ color: C.gray }}
          >
            We understand the business first, design the right solution, bring
            it to life and identify opportunities to improve it as your needs
            evolve.
          </p>
        </motion.div>

        {/* Interactive process workspace */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 22 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.12 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 overflow-hidden rounded-2xl border bg-white shadow-[0_22px_65px_rgba(36,35,31,0.07)] md:mt-16 md:rounded-3xl"
          style={{ borderColor: C.border }}
        >
          {/* Workspace header */}
          <div
            className="flex flex-wrap items-center justify-between gap-4 border-b px-4 py-4 sm:px-6 lg:px-8"
            style={{ backgroundColor: C.sage, borderColor: C.border }}
          >
            <div className="flex min-w-0 items-center gap-3">
              <div
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border bg-white"
                style={{ borderColor: C.border, color: C.green }}
              >
                <Workflow className="h-5 w-5" aria-hidden="true" />
              </div>
              <div className="min-w-0">
                <p
                  className="truncate text-sm font-semibold"
                  style={{ color: C.charcoal }}
                >
                  AI AutomationHub · Solution Process
                </p>
                <p className="mt-1 text-xs" style={{ color: C.gray }}>
                  Business technology workflow
                </p>
              </div>
            </div>

            <div
              className="inline-flex items-center gap-2 rounded-full border bg-white px-3 py-2"
              style={{ borderColor: C.border }}
            >
              <span
                className="h-2 w-2 rounded-full"
                style={{ backgroundColor: C.green }}
              />
              <span
                className="text-[10px] font-semibold uppercase tracking-[0.12em]"
                style={{ color: C.gray }}
              >
                Phase {activePhase.number} of 04
              </span>
            </div>
          </div>

          <div className="grid min-w-0 lg:grid-cols-[220px_minmax(0,0.88fr)_minmax(0,1.12fr)]">
            {/* Phase navigation */}
            <nav
              aria-label="How we work phases"
              className="border-b p-3 sm:p-4 lg:border-b-0 lg:border-r lg:p-5"
              style={{ borderColor: C.border, backgroundColor: C.ivory }}
            >
              <p
                className="px-3 pb-3 pt-2 text-[10px] font-semibold uppercase tracking-[0.16em]"
                style={{ color: C.gray }}
              >
                The process
              </p>

              <div className="grid grid-cols-2 gap-2 lg:grid-cols-1">
                {phases.map((phase) => {
                  const Icon = phase.icon;
                  const isActive = phase.id === activeId;

                  return (
                    <button
                      key={phase.id}
                      type="button"
                      onClick={() => setActiveId(phase.id)}
                      aria-pressed={isActive}
                      aria-controls="process-phase-content"
                      className="group flex min-w-0 items-center gap-2.5 rounded-xl border p-3 text-left transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#004225] focus-visible:ring-offset-2"
                      style={{
                        borderColor: isActive
                          ? "rgba(0,66,37,0.28)"
                          : "transparent",
                        backgroundColor: isActive ? C.white : "transparent",
                        boxShadow: isActive
                          ? "0 5px 18px rgba(36,35,31,0.045)"
                          : "none",
                      }}
                    >
                      <span
                        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border transition-colors"
                        style={{
                          borderColor: isActive
                            ? "rgba(0,66,37,0.2)"
                            : C.border,
                          backgroundColor: isActive ? C.sage : C.white,
                          color: isActive ? C.green : C.gray,
                        }}
                      >
                        <Icon className="h-4 w-4" aria-hidden="true" />
                      </span>

                      <span className="min-w-0 flex-1">
                        <span
                          className="block text-[10px] font-medium tracking-[0.1em]"
                          style={{ color: C.gray }}
                        >
                          {phase.number}
                        </span>
                        <span
                          className="mt-1 block truncate text-xs font-semibold sm:text-sm"
                          style={{ color: isActive ? C.green : C.charcoal }}
                        >
                          {phase.title}
                        </span>
                      </span>

                      {isActive && (
                        <span
                          className="hidden h-1.5 w-1.5 shrink-0 rounded-full sm:block"
                          style={{ backgroundColor: C.green }}
                        />
                      )}
                    </button>
                  );
                })}
              </div>

              <div
                className="mt-5 hidden rounded-xl border bg-white p-4 lg:block"
                style={{ borderColor: C.border }}
              >
                <p
                  className="text-[10px] font-semibold uppercase tracking-[0.13em]"
                  style={{ color: C.green }}
                >
                  Our approach
                </p>
                <p className="mt-2 text-xs leading-5" style={{ color: C.gray }}>
                  Start with the business problem. The technology follows.
                </p>
              </div>
            </nav>

            {/* Phase explanation */}
            <div
              id="process-phase-content"
              aria-live="polite"
              className="min-w-0 border-b p-5 sm:p-7 lg:border-b-0 lg:border-r lg:p-8"
              style={{ borderColor: C.border }}
            >
              <motion.div
                key={activePhase.id}
                initial={reduceMotion ? false : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <div
                  className="flex h-11 w-11 items-center justify-center rounded-xl border"
                  style={{
                    borderColor: "rgba(0,66,37,0.16)",
                    backgroundColor: C.sage,
                    color: C.green,
                  }}
                >
                  <ActiveIcon className="h-5 w-5" aria-hidden="true" />
                </div>

                <p
                  className="mt-6 text-[10px] font-semibold uppercase tracking-[0.16em]"
                  style={{ color: C.green }}
                >
                  {activePhase.label}
                </p>

                <h3
                  className="mt-3 text-2xl font-semibold leading-tight tracking-[-0.035em] sm:text-3xl"
                  style={{ color: C.charcoal }}
                >
                  {activePhase.status}
                </h3>

                <p className="mt-4 text-sm leading-7" style={{ color: C.gray }}>
                  {activePhase.description}
                </p>

                <div
                  className="mt-6 rounded-xl border p-4"
                  style={{
                    borderColor: C.border,
                    backgroundColor: C.sage,
                  }}
                >
                  <div className="flex items-start gap-3">
                    <Check
                      className="mt-0.5 h-4 w-4 shrink-0"
                      style={{ color: C.green }}
                      aria-hidden="true"
                    />
                    <div>
                      <p
                        className="text-[10px] font-semibold uppercase tracking-[0.12em]"
                        style={{ color: C.green }}
                      >
                        Intended outcome
                      </p>
                      <p
                        className="mt-2 text-sm leading-6"
                        style={{ color: C.charcoal }}
                      >
                        {activePhase.outcome}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-7 flex items-center gap-3">
                  <span
                    className="text-xs font-semibold"
                    style={{ color: C.gray }}
                  >
                    {activePhase.number}
                  </span>
                  <div
                    className="h-px flex-1"
                    style={{ backgroundColor: C.border }}
                  />
                  <button
                    type="button"
                    onClick={() =>
                      setActiveId(phases[(activeIndex + 1) % phases.length].id)
                    }
                    className="inline-flex items-center gap-2 text-xs font-semibold transition-colors hover:opacity-70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#004225] focus-visible:ring-offset-4"
                    style={{ color: C.green }}
                  >
                    Next phase
                    <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </button>
                </div>
              </motion.div>
            </div>

            {/* Dynamic workflow visual */}
            <div className="min-w-0 p-4 sm:p-6 lg:p-7">
              <motion.div
                key={`${activePhase.id}-visual`}
                initial={reduceMotion ? false : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
              >
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <p
                      className="text-sm font-semibold"
                      style={{ color: C.charcoal }}
                    >
                      {activePhase.visualTitle}
                    </p>
                    <p className="mt-1 text-xs" style={{ color: C.gray }}>
                      {activePhase.visualDescription}
                    </p>
                  </div>
                  <span
                    className="rounded-full border px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.1em]"
                    style={{
                      borderColor: C.border,
                      backgroundColor: C.sage,
                      color: C.green,
                    }}
                  >
                    Concept view
                  </span>
                </div>

                {/* Concept diagram */}
                <div
                  className="relative mt-5 overflow-hidden rounded-2xl border p-4 sm:p-5"
                  style={{
                    borderColor: C.border,
                    backgroundColor: C.sage,
                  }}
                >
                  <div
                    className="pointer-events-none absolute inset-0 opacity-70"
                    aria-hidden="true"
                    style={{
                      backgroundImage:
                        "linear-gradient(rgba(95,91,83,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(95,91,83,0.07) 1px, transparent 1px)",
                      backgroundSize: "28px 28px",
                    }}
                  />

                  <div className="relative mx-auto max-w-[340px]">
                    <div
                      className="mx-auto flex min-h-[74px] max-w-[235px] items-center justify-center gap-3 rounded-xl border bg-white p-3 shadow-sm"
                      style={{ borderColor: "rgba(0,66,37,0.25)" }}
                    >
                      <div
                        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg"
                        style={{ backgroundColor: C.sage, color: C.green }}
                      >
                        <Layers3 className="h-4 w-4" aria-hidden="true" />
                      </div>
                      <div className="min-w-0">
                        <p
                          className="text-xs font-semibold"
                          style={{ color: C.charcoal }}
                        >
                          {activePhase.visualTitle}
                        </p>
                        <p
                          className="mt-1 text-[10px]"
                          style={{ color: C.gray }}
                        >
                          Business-led process
                        </p>
                      </div>
                    </div>

                    <div
                      className="mx-auto flex h-8 justify-center"
                      aria-hidden="true"
                    >
                      <div
                        className="h-full w-px"
                        style={{ backgroundColor: "rgba(0,66,37,0.4)" }}
                      />
                    </div>

                    <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
                      {activePhase.nodes.map((node, index) => {
                        const NodeIcon = node.icon;
                        const highlighted = index === 1;

                        return (
                          <div key={node.title} className="relative min-w-0">
                            <div
                              className="mb-2 flex justify-center"
                              aria-hidden="true"
                            >
                              <div
                                className="h-px w-full"
                                style={{
                                  backgroundColor: "rgba(0,66,37,0.28)",
                                }}
                              />
                            </div>
                            <div
                              className="flex min-h-[94px] flex-col items-center justify-center rounded-xl border bg-white px-2 py-3 text-center shadow-sm"
                              style={{
                                borderColor: highlighted
                                  ? "rgba(0,66,37,0.28)"
                                  : C.border,
                              }}
                            >
                              <span
                                className="mb-2 flex h-8 w-8 items-center justify-center rounded-lg"
                                style={{
                                  backgroundColor: highlighted
                                    ? C.sage
                                    : C.ivory,
                                  color: C.green,
                                }}
                              >
                                <NodeIcon
                                  className="h-4 w-4"
                                  aria-hidden="true"
                                />
                              </span>
                              <p
                                className="text-[11px] font-semibold"
                                style={{ color: C.charcoal }}
                              >
                                {node.title}
                              </p>
                              <p
                                className="mt-1 text-[9px] leading-4"
                                style={{ color: C.gray }}
                              >
                                {node.subtitle}
                              </p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* Checklist */}
                <div
                  className="mt-4 rounded-xl border bg-white p-4 sm:p-5"
                  style={{ borderColor: C.border }}
                >
                  <div className="flex items-center gap-2">
                    <CircleDot
                      className="h-4 w-4"
                      style={{ color: C.green }}
                      aria-hidden="true"
                    />
                    <p
                      className="text-xs font-semibold"
                      style={{ color: C.charcoal }}
                    >
                      {activePhase.id === "discover"
                        ? "Discovery focus"
                        : activePhase.id === "design"
                          ? "Planning priorities"
                          : activePhase.id === "deploy"
                            ? "Implementation priorities"
                            : "Improvement priorities"}
                    </p>
                  </div>

                  <div className="mt-4 space-y-3">
                    {activePhase.checklist.map((item, index) => (
                      <div key={item} className="flex items-start gap-3">
                        <span
                          className="mt-0.5 text-[10px] font-semibold"
                          style={{ color: C.green }}
                        >
                          0{index + 1}
                        </span>
                        <span
                          className="text-xs leading-5"
                          style={{ color: C.gray }}
                        >
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <p
                  className="mt-3 text-[10px] leading-5"
                  style={{ color: C.gray }}
                >
                  The visual illustrates a process concept, not a live connected
                  system or a guaranteed business result.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Closing message and CTA */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 14 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mt-10 flex flex-col gap-6 border-t pt-8 md:mt-14 md:flex-row md:items-center md:justify-between md:pt-10"
          style={{ borderColor: C.border }}
        >
          <div className="flex min-w-0 items-start gap-4">
            <div
              className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border bg-white"
              style={{ borderColor: C.border, color: C.green }}
              aria-hidden="true"
            >
              <Check className="h-4 w-4" strokeWidth={2} />
            </div>

            <div>
              <p
                className="text-[10px] font-semibold uppercase tracking-[0.14em]"
                style={{ color: C.green }}
              >
                BUILT AROUND YOU
              </p>

              <h3
                className="mt-1.5 text-lg font-semibold tracking-[-0.02em] sm:text-xl"
                style={{ color: C.charcoal }}
              >
                You Don't Need to Know the Technology.
              </h3>

              <p
                className="mt-2 max-w-[620px] text-sm leading-6"
                style={{ color: C.gray }}
              >
                Tell us what you are trying to build, improve or automate. We
                will help shape the technology around the requirement.
              </p>
            </div>
          </div>

          <a
            href="/start-project"
            className="inline-flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-lg px-5 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#004225] focus-visible:ring-offset-2"
            style={{
              backgroundColor: C.green,
              boxShadow: "0 8px 22px rgba(0,66,37,0.12)",
            }}
          >
            Tell Us What You Need
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
