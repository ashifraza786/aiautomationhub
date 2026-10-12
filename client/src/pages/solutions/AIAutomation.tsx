import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  Bot,
  Check,
  FileText,
  GitBranch,
  MessageSquare,
  Settings2,
  Sparkles,
  Workflow,
  Zap,
} from "lucide-react";
import { Link } from "wouter";
import { useEffect, useState } from "react";
import AIAutomationShowcase from "../../components/what-we-build/AIAutomationShowcase";
const challenges = [
  "Repeated manual tasks",
  "Delayed follow-ups",
  "Scattered information",
  "Duplicate data entry",
  "Slow customer response",
  "Manual status updates",
];

const automationAreas = [
  {
    icon: Workflow,
    title: "Business Workflows",
    description:
      "Turn repetitive multi-step processes into structured digital workflows.",
  },
  {
    icon: MessageSquare,
    title: "Customer Communication",
    description:
      "Support faster communication, follow-ups and customer handling across your workflow.",
  },
  {
    icon: Bot,
    title: "AI Assistants & Agents",
    description:
      "Use AI where it can meaningfully support information handling and business tasks.",
  },
  {
    icon: FileText,
    title: "Document & Data Work",
    description:
      "Reduce repetitive document and data handling through structured automation.",
  },
  {
    icon: GitBranch,
    title: "Lead Processes",
    description:
      "Create clearer journeys from incoming enquiries to follow-up and sales action.",
  },
  {
    icon: Settings2,
    title: "Internal Operations",
    description:
      "Automate repetitive operational steps so teams can spend more time on useful work.",
  },
];
function AutomationBuildProcess({
  reduceMotion,
}: {
  reduceMotion: boolean | null;
}) {
  const [activeStep, setActiveStep] = useState(0);

  const processSteps = [
    {
      number: "01",
      title: "Understand",
      eyebrow: "DISCOVER",
      icon: MessageSquare,
      summary: "Understand how the business actually works.",
      description:
        "We look at the people involved, the tools being used, the information moving through the process and where repetitive work is happening.",
      points: [
        "Business process",
        "People & responsibilities",
        "Current tools",
        "Manual friction",
      ],
      output: "Clear picture of the current workflow",
    },
    {
      number: "02",
      title: "Map",
      eyebrow: "STRUCTURE",
      icon: GitBranch,
      summary: "Break the workflow into useful stages.",
      description:
        "We map inputs, decisions, actions and outcomes so we can identify what should stay human, what can be automated and where AI can help.",
      points: [
        "Inputs & triggers",
        "Decisions",
        "Automation opportunities",
        "System connections",
      ],
      output: "A structured automation blueprint",
    },
    {
      number: "03",
      title: "Build",
      eyebrow: "IMPLEMENT",
      icon: Workflow,
      summary: "Build the technology around the process.",
      description:
        "We design the appropriate combination of workflow logic, software and AI capabilities around the requirement.",
      points: [
        "Workflow logic",
        "AI capabilities",
        "Business systems",
        "User experience",
      ],
      output: "A working business workflow",
    },
    {
      number: "04",
      title: "Improve",
      eyebrow: "EVOLVE",
      icon: Sparkles,
      summary: "Improve the system as the business learns.",
      description:
        "Once the workflow is being used, the next improvements become clearer. The system can evolve as requirements change.",
      points: [
        "Observe usage",
        "Find friction",
        "Refine workflow",
        "Expand capability",
      ],
      output: "A system that can keep evolving",
    },
  ];

  useEffect(() => {
    if (reduceMotion) return;

    const timer = window.setInterval(() => {
      setActiveStep((current) => (current + 1) % processSteps.length);
    }, 4200);

    return () => window.clearInterval(timer);
  }, [reduceMotion, processSteps.length]);

  const activeProcess = processSteps[activeStep];
  const ActiveIcon = activeProcess.icon;

  return (
    <div className="overflow-hidden rounded-[24px] border border-[#202936] bg-[#0D1118] shadow-[0_30px_100px_rgba(0,0,0,0.2)]">
      {/* ============================================================
          PROCESS HEADER
      ============================================================ */}

      <div className="flex flex-col gap-4 border-b border-[#202936] px-5 py-5 sm:px-7 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#6F7A8A]">
            AI AutomationHub Process
          </p>

          <p className="mt-1 text-sm font-semibold text-[#F4F7FB]">
            From business problem to working system
          </p>
        </div>

        <div className="flex items-center gap-2 self-start rounded-full border border-[#202936] bg-[#080A0F] px-3 py-1.5 md:self-auto">
          <span className="text-[9px] font-medium uppercase tracking-[0.1em] text-[#6F7A8A]">
            Stage
          </span>

          <span className="text-[10px] font-semibold text-[#4F7CFF]">
            {activeProcess.number} / 04
          </span>
        </div>
      </div>

      <div className="grid lg:grid-cols-[0.72fr_1.28fr]">
        {/* ==========================================================
            LEFT — PROCESS NAVIGATION
        ========================================================== */}

        <div className="border-b border-[#202936] p-5 sm:p-7 lg:border-b-0 lg:border-r lg:p-8">
          <div className="relative">
            {/* vertical rail */}
            <div
              className="absolute bottom-6 left-[19px] top-6 w-px bg-[#202936]"
              aria-hidden="true"
            />

            <motion.div
              animate={{
                height: `${((activeStep + 1) / processSteps.length) * 88}%`,
              }}
              transition={{
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="absolute left-[19px] top-6 w-px bg-[#4F7CFF]"
              aria-hidden="true"
            />

            <div className="space-y-2">
              {processSteps.map((step, index) => {
                const Icon = step.icon;
                const isActive = index === activeStep;
                const isComplete = index < activeStep;

                return (
                  <button
                    key={step.number}
                    type="button"
                    onClick={() => setActiveStep(index)}
                    aria-label={`View ${step.title} process stage`}
                    aria-pressed={isActive}
                    className="group relative z-10 flex w-full items-center gap-4 rounded-xl p-2 text-left transition-colors duration-200 focus:outline-none"
                  >
                    <motion.div
                      animate={{
                        scale: isActive && !reduceMotion ? 1.05 : 1,
                      }}
                      className={[
                        "flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border",
                        isActive
                          ? "border-[#4F7CFF]/30 bg-[#4F7CFF]/[0.08]"
                          : "border-[#202936] bg-[#121821]",
                      ].join(" ")}
                    >
                      <Icon
                        className={
                          isActive
                            ? "h-4 w-4 text-[#4F7CFF]"
                            : isComplete
                              ? "h-4 w-4 text-[#38D9C5]"
                              : "h-4 w-4 text-[#6F7A8A]"
                        }
                        strokeWidth={1.7}
                      />
                    </motion.div>

                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between gap-3">
                        <p
                          className={[
                            "text-sm font-semibold",
                            isActive
                              ? "text-[#F4F7FB]"
                              : "text-[#A7B0BF] group-hover:text-[#F4F7FB]",
                          ].join(" ")}
                        >
                          {step.title}
                        </p>

                        <span className="text-[9px] font-semibold tracking-[0.1em] text-[#6F7A8A]">
                          {step.number}
                        </span>
                      </div>

                      <p className="mt-1 text-[9px] font-semibold uppercase tracking-[0.1em] text-[#6F7A8A]">
                        {step.eyebrow}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* progress */}
          <div className="mt-7 border-t border-[#202936] pt-5">
            <div className="flex items-center justify-between">
              <span className="text-[9px] font-medium uppercase tracking-[0.1em] text-[#6F7A8A]">
                Build progression
              </span>

              <span className="text-[9px] font-semibold text-[#4F7CFF]">
                {Math.round(((activeStep + 1) / processSteps.length) * 100)}%
              </span>
            </div>

            <div className="mt-2 h-1 overflow-hidden rounded-full bg-[#202936]">
              <motion.div
                animate={{
                  width: `${((activeStep + 1) / processSteps.length) * 100}%`,
                }}
                transition={{
                  duration: 0.5,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="h-full rounded-full bg-[#4F7CFF]"
              />
            </div>
          </div>
        </div>

        {/* ==========================================================
            RIGHT — ACTIVE PROCESS DETAIL
        ========================================================== */}

        <div className="relative min-h-[430px] p-5 sm:p-7 lg:p-8">
          {/* ambient glow */}
          <div
            className="pointer-events-none absolute right-0 top-0 h-64 w-64 rounded-full bg-[#4F7CFF]/[0.035] blur-3xl"
            aria-hidden="true"
          />

          <motion.div
            key={activeProcess.number}
            initial={
              reduceMotion
                ? false
                : {
                    opacity: 0,
                    x: 18,
                  }
            }
            animate={
              reduceMotion
                ? undefined
                : {
                    opacity: 1,
                    x: 0,
                  }
            }
            transition={{
              duration: 0.4,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative"
          >
            <div className="flex items-start justify-between gap-5">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#4F7CFF]">
                  {activeProcess.eyebrow}
                </p>

                <h3 className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-[#F4F7FB] sm:text-4xl">
                  {activeProcess.title}
                </h3>
              </div>

              <div className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#4F7CFF]/20 bg-[#4F7CFF]/[0.06] sm:flex">
                <ActiveIcon
                  className="h-5 w-5 text-[#4F7CFF]"
                  strokeWidth={1.7}
                />
              </div>
            </div>

            <p className="mt-5 max-w-[620px] text-base font-medium leading-7 text-[#DCE3ED]">
              {activeProcess.summary}
            </p>

            <p className="mt-3 max-w-[650px] text-sm leading-6 text-[#6F7A8A]">
              {activeProcess.description}
            </p>

            {/* capability / activity list */}
            <div className="mt-8 grid gap-2 sm:grid-cols-2">
              {activeProcess.points.map((point, index) => (
                <motion.div
                  key={point}
                  initial={
                    reduceMotion
                      ? false
                      : {
                          opacity: 0,
                          y: 8,
                        }
                  }
                  animate={
                    reduceMotion
                      ? undefined
                      : {
                          opacity: 1,
                          y: 0,
                        }
                  }
                  transition={{
                    duration: 0.3,
                    delay: index * 0.05,
                  }}
                  className="flex items-center gap-3 rounded-xl border border-[#202936] bg-[#080A0F] px-4 py-3"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md border border-[#4F7CFF]/15 bg-[#4F7CFF]/[0.05]">
                    <Check className="h-3 w-3 text-[#4F7CFF]" strokeWidth={2} />
                  </span>

                  <span className="text-xs font-medium text-[#A7B0BF]">
                    {point}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* output */}
            <div className="mt-8 rounded-2xl border border-[#4F7CFF]/15 bg-[#4F7CFF]/[0.025] p-5">
              <div className="flex items-start gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-[#4F7CFF]/20 bg-[#4F7CFF]/[0.06]">
                  <Sparkles
                    className="h-4 w-4 text-[#4F7CFF]"
                    strokeWidth={1.7}
                  />
                </div>

                <div>
                  <p className="text-[9px] font-semibold uppercase tracking-[0.12em] text-[#4F7CFF]">
                    Stage output
                  </p>

                  <p className="mt-1 text-sm font-semibold text-[#F4F7FB]">
                    {activeProcess.output}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* stage navigation */}
          <div className="relative mt-8 flex items-center justify-between border-t border-[#202936] pt-5">
            <button
              type="button"
              onClick={() =>
                setActiveStep(
                  activeStep === 0 ? processSteps.length - 1 : activeStep - 1,
                )
              }
              className="text-[10px] font-semibold uppercase tracking-[0.1em] text-[#6F7A8A] transition hover:text-[#F4F7FB]"
            >
              Previous
            </button>

            <div className="flex items-center gap-1.5">
              {processSteps.map((step, index) => (
                <button
                  key={step.number}
                  type="button"
                  onClick={() => setActiveStep(index)}
                  aria-label={`Go to stage ${step.number}`}
                  className={[
                    "h-1.5 rounded-full transition-all duration-300",
                    index === activeStep
                      ? "w-6 bg-[#4F7CFF]"
                      : "w-1.5 bg-[#202936] hover:bg-[#4F7CFF]/50",
                  ].join(" ")}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={() =>
                setActiveStep((activeStep + 1) % processSteps.length)
              }
              className="text-[10px] font-semibold uppercase tracking-[0.1em] text-[#6F7A8A] transition hover:text-[#F4F7FB]"
            >
              Next
            </button>
          </div>
        </div>
      </div>

      {/* ============================================================
          PROCESS PRINCIPLE
      ============================================================ */}

      <div className="border-t border-[#202936] px-5 py-5 sm:px-7">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#38D9C5]" />

            <span className="text-[9px] font-medium text-[#6F7A8A]">
              Business problem first. Technology second.
            </span>
          </div>

          <span className="text-[9px] font-semibold tracking-[0.1em] text-[#6F7A8A]">
            UNDERSTAND • MAP • BUILD • IMPROVE
          </span>
        </div>
      </div>
    </div>
  );
}

const workflowSteps = [
  {
    number: "01",
    title: "Input",
    description:
      "A lead, message, document, request or business event enters the workflow.",
    icon: Zap,
  },
  {
    number: "02",
    title: "Intelligence",
    description:
      "AI can understand, classify or extract information where it is useful.",
    icon: Bot,
  },
  {
    number: "03",
    title: "Decision",
    description: "Rules and workflow logic determine what should happen next.",
    icon: GitBranch,
  },
  {
    number: "04",
    title: "Action",
    description:
      "The system moves information into the right tool, person or next business step.",
    icon: Workflow,
  },
];

const principles = [
  "Automate useful work",
  "Use AI where it adds value",
  "Keep the workflow understandable",
  "Build around the existing business process",
];

const outcomes = [
  {
    title: "Less Manual Work",
    description:
      "Reduce repetitive operational tasks and unnecessary data handling.",
  },
  {
    title: "Faster Response",
    description:
      "Help important inputs move through the workflow without avoidable delay.",
  },
  {
    title: "Better Visibility",
    description:
      "Keep information and process states clearer across the workflow.",
  },
  {
    title: "More Consistent Follow-up",
    description:
      "Create structured next steps instead of relying entirely on manual reminders.",
  },
];
function AutomationSystemExperience({
  reduceMotion,
}: {
  reduceMotion: boolean | null;
}) {
  const [activeStep, setActiveStep] = useState(0);

  const stages = [
    {
      number: "01",
      label: "New Lead",
      shortLabel: "INPUT",
      detail: "A new enquiry enters the workflow.",
      description:
        "Information can arrive through a website, message, form or another business channel.",
      icon: Zap,
    },
    {
      number: "02",
      label: "AI Agent",
      shortLabel: "INTELLIGENCE",
      detail: "AI understands the incoming information.",
      description:
        "The system can classify, extract, summarize or interpret information where AI adds value.",
      icon: Bot,
    },
    {
      number: "03",
      label: "Decision",
      shortLabel: "LOGIC",
      detail: "The workflow determines what should happen next.",
      description:
        "Business rules and workflow logic decide the next step instead of relying entirely on manual handling.",
      icon: GitBranch,
    },
    {
      number: "04",
      label: "CRM",
      shortLabel: "SYSTEM",
      detail: "The relevant business system is updated.",
      description:
        "Information can move into the appropriate CRM, ERP, database or internal business system.",
      icon: Settings2,
    },
    {
      number: "05",
      label: "Business Action",
      shortLabel: "ACTION",
      detail: "The next business step continues.",
      description:
        "The workflow can trigger a follow-up, notification, task, update or another defined business action.",
      icon: Workflow,
    },
  ];

  useEffect(() => {
    if (reduceMotion) return;

    const timer = window.setInterval(() => {
      setActiveStep((current) => (current + 1) % stages.length);
    }, 1900);

    return () => window.clearInterval(timer);
  }, [reduceMotion, stages.length]);

  const activeStage = stages[activeStep];
  const ActiveIcon = activeStage.icon;

  return (
    <div className="overflow-hidden rounded-[24px] border border-[#202936] bg-[#080A0F] shadow-[0_30px_100px_rgba(0,0,0,0.22)]">
      {/* ============================================================
          SYSTEM HEADER
      ============================================================ */}

      <div className="flex flex-col gap-4 border-b border-[#202936] px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-7">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#4F7CFF]/20 bg-[#4F7CFF]/[0.07]">
            <Workflow className="h-4 w-4 text-[#4F7CFF]" strokeWidth={1.7} />
          </div>

          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#6F7A8A]">
              Automation Architecture
            </p>

            <p className="mt-1 text-sm font-semibold text-[#F4F7FB]">
              Intelligent Business Workflow
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 self-start rounded-full border border-[#38D9C5]/15 bg-[#38D9C5]/[0.04] px-3 py-1.5 sm:self-auto">
          <span className="h-1.5 w-1.5 rounded-full bg-[#38D9C5] shadow-[0_0_10px_rgba(56,217,197,0.4)]" />

          <span className="text-[9px] font-medium uppercase tracking-[0.1em] text-[#38D9C5]">
            Workflow Ready
          </span>
        </div>
      </div>

      <div className="p-5 sm:p-7 lg:p-8">
        {/* ============================================================
            DESKTOP PIPELINE
        ============================================================ */}

        <div className="hidden md:block">
          <div className="relative">
            {/* connection rail */}
            <div
              className="absolute left-[8%] right-[8%] top-[48px] h-px bg-[#202936]"
              aria-hidden="true"
            />

            {/* active connection */}
            <motion.div
              animate={{
                width:
                  activeStep === 0
                    ? "0%"
                    : `${(activeStep / (stages.length - 1)) * 84}%`,
              }}
              transition={{
                duration: 0.55,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="absolute left-[8%] top-[47px] h-px bg-[#4F7CFF]"
              aria-hidden="true"
            />

            {/* moving signal */}
            {!reduceMotion && (
              <motion.div
                animate={{
                  left: `${8 + (activeStep / (stages.length - 1)) * 84}%`,
                }}
                transition={{
                  duration: 0.55,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="absolute top-[44px] h-[7px] w-[7px] -translate-x-1/2 rounded-full bg-[#4F7CFF] shadow-[0_0_14px_rgba(79,124,255,0.8)]"
                aria-hidden="true"
              />
            )}

            <div className="grid grid-cols-5 gap-3">
              {stages.map((stage, index) => {
                const Icon = stage.icon;
                const isActive = index === activeStep;
                const isComplete = index < activeStep;

                return (
                  <button
                    key={stage.number}
                    type="button"
                    onClick={() => setActiveStep(index)}
                    aria-label={`Show ${stage.label} stage`}
                    aria-pressed={isActive}
                    className="group relative z-10 text-left focus:outline-none"
                  >
                    <motion.div
                      animate={{
                        y: isActive && !reduceMotion ? -4 : 0,
                      }}
                      transition={{
                        duration: 0.3,
                        ease: "easeOut",
                      }}
                      className={[
                        "rounded-2xl border p-4 transition-colors duration-300",
                        isActive
                          ? "border-[#4F7CFF]/35 bg-[#4F7CFF]/[0.055] shadow-[0_0_35px_rgba(79,124,255,0.07)]"
                          : "border-[#202936] bg-[#0D1118] group-hover:border-[#4F7CFF]/20",
                      ].join(" ")}
                    >
                      <div className="flex items-center justify-between gap-2">
                        <motion.div
                          animate={{
                            scale: isActive && !reduceMotion ? [1, 1.06, 1] : 1,
                          }}
                          transition={{
                            duration: 1,
                            repeat: isActive && !reduceMotion ? Infinity : 0,
                            ease: "easeInOut",
                          }}
                          className={[
                            "flex h-10 w-10 items-center justify-center rounded-lg border",
                            isActive
                              ? "border-[#4F7CFF]/25 bg-[#4F7CFF]/[0.08]"
                              : "border-[#202936] bg-[#121821]",
                          ].join(" ")}
                        >
                          <Icon
                            className={
                              isActive
                                ? "h-4 w-4 text-[#4F7CFF]"
                                : isComplete
                                  ? "h-4 w-4 text-[#38D9C5]"
                                  : "h-4 w-4 text-[#6F7A8A]"
                            }
                            strokeWidth={1.7}
                          />
                        </motion.div>

                        <span className="text-[9px] font-semibold tracking-[0.1em] text-[#6F7A8A]">
                          {stage.number}
                        </span>
                      </div>

                      <p
                        className={[
                          "mt-5 text-xs font-semibold",
                          isActive ? "text-[#F4F7FB]" : "text-[#A7B0BF]",
                        ].join(" ")}
                      >
                        {stage.label}
                      </p>

                      <p className="mt-1 text-[9px] font-semibold uppercase tracking-[0.1em] text-[#6F7A8A]">
                        {stage.shortLabel}
                      </p>

                      <div className="mt-4 border-t border-[#202936] pt-3">
                        <span
                          className={[
                            "text-[9px] font-medium",
                            isActive ? "text-[#4F7CFF]" : "text-[#6F7A8A]",
                          ].join(" ")}
                        >
                          {isActive
                            ? "ACTIVE STAGE"
                            : isComplete
                              ? "COMPLETED"
                              : "UP NEXT"}
                        </span>
                      </div>
                    </motion.div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* ============================================================
            MOBILE PIPELINE
        ============================================================ */}

        <div className="md:hidden">
          <div className="relative">
            <div
              className="absolute left-[19px] top-5 bottom-5 w-px bg-[#202936]"
              aria-hidden="true"
            />

            {!reduceMotion && (
              <motion.div
                animate={{
                  top: `${8 + (activeStep / (stages.length - 1)) * 82}%`,
                }}
                transition={{
                  duration: 0.55,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="absolute left-[16px] h-1.5 w-1.5 rounded-full bg-[#4F7CFF] shadow-[0_0_12px_rgba(79,124,255,0.75)]"
                aria-hidden="true"
              />
            )}

            <div className="space-y-3">
              {stages.map((stage, index) => {
                const Icon = stage.icon;
                const isActive = index === activeStep;
                const isComplete = index < activeStep;

                return (
                  <button
                    key={stage.number}
                    type="button"
                    onClick={() => setActiveStep(index)}
                    aria-label={`Show ${stage.label} stage`}
                    aria-pressed={isActive}
                    className="relative z-10 flex w-full gap-3 text-left focus:outline-none"
                  >
                    <motion.div
                      animate={{
                        scale: isActive && !reduceMotion ? 1.05 : 1,
                      }}
                      className={[
                        "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border",
                        isActive
                          ? "border-[#4F7CFF]/30 bg-[#4F7CFF]/[0.08]"
                          : "border-[#202936] bg-[#121821]",
                      ].join(" ")}
                    >
                      <Icon
                        className={
                          isActive
                            ? "h-4 w-4 text-[#4F7CFF]"
                            : isComplete
                              ? "h-4 w-4 text-[#38D9C5]"
                              : "h-4 w-4 text-[#6F7A8A]"
                        }
                        strokeWidth={1.7}
                      />
                    </motion.div>

                    <div
                      className={[
                        "flex-1 rounded-xl border px-4 py-3",
                        isActive
                          ? "border-[#4F7CFF]/30 bg-[#4F7CFF]/[0.045]"
                          : "border-[#202936] bg-[#0D1118]",
                      ].join(" ")}
                    >
                      <div className="flex items-center justify-between gap-3">
                        <p className="text-xs font-semibold text-[#F4F7FB]">
                          {stage.label}
                        </p>

                        <span className="text-[9px] font-semibold tracking-[0.1em] text-[#6F7A8A]">
                          {stage.number}
                        </span>
                      </div>

                      <p className="mt-1 text-[9px] font-semibold uppercase tracking-[0.1em] text-[#6F7A8A]">
                        {stage.shortLabel}
                      </p>

                      <p className="mt-2 text-[10px] leading-4 text-[#6F7A8A]">
                        {stage.detail}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* ============================================================
            ACTIVE OPERATION
        ============================================================ */}

        <motion.div
          layout
          className="mt-7 rounded-2xl border border-[#4F7CFF]/20 bg-[#4F7CFF]/[0.025] p-5 sm:p-6"
        >
          <div className="flex items-start gap-4">
            <motion.div
              key={activeStage.number}
              initial={
                reduceMotion
                  ? false
                  : {
                      opacity: 0,
                      scale: 0.9,
                    }
              }
              animate={
                reduceMotion
                  ? undefined
                  : {
                      opacity: 1,
                      scale: 1,
                    }
              }
              transition={{
                duration: 0.25,
              }}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#4F7CFF]/25 bg-[#4F7CFF]/[0.08]"
            >
              <ActiveIcon
                className="h-4 w-4 text-[#4F7CFF]"
                strokeWidth={1.7}
              />
            </motion.div>

            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-[9px] font-semibold uppercase tracking-[0.12em] text-[#4F7CFF]">
                  Current operation
                </span>

                <span className="h-1 w-1 rounded-full bg-[#4F7CFF]/60" />

                <span className="text-[9px] font-medium uppercase tracking-[0.1em] text-[#6F7A8A]">
                  Stage {activeStage.number}
                </span>
              </div>

              <motion.p
                key={activeStage.label}
                initial={
                  reduceMotion
                    ? false
                    : {
                        opacity: 0,
                        y: 5,
                      }
                }
                animate={
                  reduceMotion
                    ? undefined
                    : {
                        opacity: 1,
                        y: 0,
                      }
                }
                className="mt-2 text-sm font-semibold text-[#F4F7FB]"
              >
                {activeStage.detail}
              </motion.p>

              <motion.p
                key={`${activeStage.label}-description`}
                initial={
                  reduceMotion
                    ? false
                    : {
                        opacity: 0,
                        y: 5,
                      }
                }
                animate={
                  reduceMotion
                    ? undefined
                    : {
                        opacity: 1,
                        y: 0,
                      }
                }
                transition={{
                  delay: 0.04,
                }}
                className="mt-2 max-w-[760px] text-[11px] leading-5 text-[#6F7A8A]"
              >
                {activeStage.description}
              </motion.p>
            </div>
          </div>
        </motion.div>

        {/* ============================================================
            SYSTEM FOOTER
        ============================================================ */}

        <div className="mt-6 flex flex-col gap-3 border-t border-[#202936] pt-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#38D9C5]" />

            <span className="text-[9px] font-medium text-[#6F7A8A]">
              Business process → intelligent workflow
            </span>
          </div>

          <span className="text-[9px] font-semibold tracking-[0.1em] text-[#6F7A8A]">
            CONCEPTUAL SYSTEM VIEW
          </span>
        </div>
      </div>
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#4F7CFF]">
      {children}
    </p>
  );
}

function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.16 }}
      transition={{
        duration: reduceMotion ? 0 : 0.6,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function AIAutomation() {
  const reduceMotion = useReducedMotion();

  return (
    <main className="min-h-screen overflow-hidden bg-[#080A0F] text-[#F4F7FB]">
      {/* ============================================================
          01 — SERVICE HERO
      ============================================================ */}

      <section className="relative border-b border-[#171E28]">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[4%] top-[-12%] h-[460px] w-[460px] rounded-full bg-[#4F7CFF]/[0.08] blur-[130px]" />

          <div className="absolute right-[5%] top-[12%] h-[380px] w-[380px] rounded-full bg-[#6D5CFF]/[0.045] blur-[125px]" />

          <div
            className="absolute inset-0 opacity-[0.025]"
            style={{
              backgroundImage:
                "linear-gradient(#A7B0BF 1px, transparent 1px), linear-gradient(90deg, #A7B0BF 1px, transparent 1px)",
              backgroundSize: "64px 64px",
            }}
          />
        </div>

        <div className="relative mx-auto grid min-h-[760px] max-w-[1280px] items-center gap-14 px-5 py-28 sm:px-7 lg:grid-cols-[0.86fr_1.14fr] lg:px-8 lg:py-32">
          <Reveal className="max-w-[640px]">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#202936] bg-[#0D1118]/80 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#6F7A8A]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#4F7CFF]" />
              AI Automation
            </div>

            <h1 className="max-w-[680px] text-5xl font-bold leading-[0.98] tracking-[-0.045em] sm:text-6xl lg:text-[72px]">
              Make your business
              <span className="block text-[#4F7CFF]">work smarter.</span>
            </h1>

            <p className="mt-7 max-w-[610px] text-base leading-7 text-[#A7B0BF] md:text-[18px] md:leading-8">
              We design intelligent workflows around the way your business
              actually works — connecting repetitive tasks, useful AI and the
              systems your team already depends on.
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {[
                "AI Agents",
                "Workflow Automation",
                "WhatsApp",
                "Lead Automation",
                "Integrations",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-[#202936] bg-[#0D1118] px-3 py-2 text-[11px] font-medium text-[#A7B0BF]"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/start-project"
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-[#4F7CFF] px-6 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#4F7CFF]/90"
              >
                Start a Conversation
                <ArrowRight className="h-4 w-4" />
              </Link>

              <a
                href="#business-context"
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-[#202936] bg-[#0D1118] px-6 text-sm font-semibold text-[#F4F7FB] transition hover:border-[#4F7CFF]/30"
              >
                See How It Works
                <ArrowDown className="h-4 w-4" />
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.08} className="min-w-0">
            <AIAutomationShowcase />
          </Reveal>
        </div>
      </section>

      {/* ============================================================
          02 — BUSINESS CONTEXT
      ============================================================ */}

      <section
        id="business-context"
        className="border-b border-[#171E28] bg-[#0D1118]/45"
      >
        <div className="mx-auto max-w-[1180px] px-5 py-28 sm:px-7 lg:px-8 lg:py-36">
          <Reveal className="max-w-[1000px]">
            <SectionLabel>Business Context</SectionLabel>

            <h2 className="text-4xl font-semibold leading-[1.05] tracking-[-0.035em] sm:text-5xl lg:text-[64px]">
              Your team shouldn't have to spend valuable time doing work that
              <span className="text-[#4F7CFF]"> software can handle.</span>
            </h2>
          </Reveal>

          <Reveal delay={0.08} className="mt-10 max-w-[720px]">
            <p className="text-base leading-8 text-[#A7B0BF] md:text-[18px]">
              Good automation starts with the business process — not with a
              technology trend. We look at where information enters, what your
              team repeatedly does, where decisions happen and what should
              happen next.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ============================================================
          03 — THE CHALLENGE
      ============================================================ */}

      <section className="border-b border-[#171E28]">
        <div className="mx-auto grid max-w-[1180px] gap-14 px-5 py-28 sm:px-7 lg:grid-cols-[0.8fr_1.2fr] lg:px-8 lg:py-36">
          <Reveal>
            <SectionLabel>The Challenge</SectionLabel>

            <h2 className="text-4xl font-semibold leading-[1.08] tracking-[-0.03em] md:text-5xl">
              Manual work quietly
              <span className="block text-[#4F7CFF]">
                slows businesses down.
              </span>
            </h2>

            <p className="mt-6 max-w-[560px] text-base leading-7 text-[#A7B0BF] md:text-[17px]">
              Repetitive data entry, follow-ups, customer messages and
              disconnected processes can consume time that teams could spend on
              higher-value work.
            </p>
          </Reveal>

          <div className="grid gap-3 sm:grid-cols-2">
            {challenges.map((item, index) => (
              <Reveal key={item} delay={index * 0.035}>
                <div className="flex min-h-[82px] items-center gap-3 rounded-xl border border-[#202936] bg-[#0D1118] px-5">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#4F7CFF]" />

                  <span className="text-sm font-medium text-[#DCE3ED]">
                    {item}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          04 — THE AUTOMATION SYSTEM
      ============================================================ */}

      <section
        id="automation-system"
        className="border-b border-[#171E28] bg-[#0D1118]/40"
        aria-labelledby="automation-system-heading"
      >
        <div className="mx-auto max-w-[1280px] px-5 py-28 sm:px-7 lg:px-8 lg:py-36">
          <Reveal className="max-w-[760px]">
            <SectionLabel>The Automation System</SectionLabel>

            <h2
              id="automation-system-heading"
              className="text-4xl font-semibold leading-[1.05] tracking-[-0.035em] md:text-5xl lg:text-[58px]"
            >
              Turn a manual process into
              <span className="block text-[#4F7CFF]">
                a connected workflow.
              </span>
            </h2>

            <p className="mt-6 max-w-[680px] text-base leading-7 text-[#A7B0BF] md:text-[17px]">
              Automation works best when every stage has a clear role. An input
              enters the system, AI helps where useful, logic determines what
              happens next, and the workflow moves the right information to the
              right action.
            </p>
          </Reveal>

          <Reveal delay={0.08} className="mt-14">
            <AutomationSystemExperience reduceMotion={useReducedMotion()} />
          </Reveal>
        </div>
      </section>

      {/* ============================================================
          05 — HOW WE BUILD
      ============================================================ */}

      <section
        id="how-we-build"
        className="border-b border-[#171E28]"
        aria-labelledby="how-we-build-heading"
      >
        <div className="mx-auto max-w-[1180px] px-5 py-28 sm:px-7 lg:px-8 lg:py-36">
          <Reveal className="max-w-[780px]">
            <SectionLabel>How We Build</SectionLabel>

            <h2
              id="how-we-build-heading"
              className="text-4xl font-semibold leading-[1.05] tracking-[-0.035em] md:text-5xl lg:text-[58px]"
            >
              Start with the workflow.
              <span className="block text-[#4F7CFF]">
                Then build the right system.
              </span>
            </h2>

            <p className="mt-6 max-w-[680px] text-base leading-7 text-[#A7B0BF] md:text-[17px]">
              Good automation isn't about adding AI everywhere. We first
              understand the business process, then identify where software,
              workflow logic and AI can create a better way of working.
            </p>
          </Reveal>

          <Reveal delay={0.08} className="mt-14">
            <AutomationBuildProcess reduceMotion={useReducedMotion()} />
          </Reveal>
        </div>
      </section>

      {/* ============================================================
          06 — WHY IT WORKS
      ============================================================ */}

      <section
        id="why-it-works"
        className="border-b border-[#171E28] bg-[#0D1118]/45"
        aria-labelledby="why-it-works-heading"
      >
        <div className="mx-auto max-w-[1180px] px-5 py-28 sm:px-7 lg:px-8 lg:py-36">
          {/* ==========================================================
              INTRO
          ========================================================== */}

          <Reveal className="mx-auto max-w-[800px] text-center">
            <SectionLabel>Why It Works</SectionLabel>

            <h2
              id="why-it-works-heading"
              className="text-4xl font-semibold leading-[1.05] tracking-[-0.035em] md:text-5xl lg:text-[58px]"
            >
              AI should do something
              <span className="block text-[#4F7CFF]">useful.</span>
            </h2>

            <p className="mx-auto mt-6 max-w-[700px] text-base leading-7 text-[#A7B0BF] md:text-[17px]">
              The strongest automation is not the one with the most AI. It is
              the one that solves the right business problem, fits the existing
              workflow and makes useful work easier to move forward.
            </p>
          </Reveal>

          {/* ==========================================================
              PRINCIPLE STRIP
          ========================================================== */}

          <Reveal delay={0.08} className="mt-12">
            <div className="flex flex-wrap justify-center gap-2">
              {[
                "Automate useful work",
                "Use AI where it adds value",
                "Keep the workflow understandable",
                "Build around the business process",
              ].map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center gap-2 rounded-full border border-[#202936] bg-[#080A0F] px-4 py-2.5 text-xs font-medium text-[#A7B0BF]"
                >
                  <Check className="h-3.5 w-3.5 text-[#38D9C5]" />
                  {item}
                </span>
              ))}
            </div>
          </Reveal>

          {/* ==========================================================
              CORE PRINCIPLES
          ========================================================== */}

          <div className="mt-16 grid gap-4 md:grid-cols-2">
            {[
              {
                number: "01",
                title: "Business problem first.",
                description:
                  "We start with what is slowing the business down — not with a technology feature looking for a use case.",
                visual: "PROBLEM → OPPORTUNITY",
              },
              {
                number: "02",
                title: "AI where it actually helps.",
                description:
                  "AI is useful when information needs to be understood, classified, generated or interpreted. It does not need to sit inside every step.",
                visual: "AI → USEFUL TASK",
              },
              {
                number: "03",
                title: "The workflow stays clear.",
                description:
                  "A good automated system should still make sense to the people using it. Clear inputs, decisions and actions matter.",
                visual: "INPUT → LOGIC → ACTION",
              },
              {
                number: "04",
                title: "Systems should evolve.",
                description:
                  "The first version creates a useful foundation. As the business learns, the workflow can be refined and expanded.",
                visual: "BUILD → LEARN → IMPROVE",
              },
            ].map((item, index) => (
              <Reveal key={item.number} delay={index * 0.05}>
                <article className="group relative h-full overflow-hidden rounded-2xl border border-[#202936] bg-[#080A0F] p-6 transition-colors duration-300 hover:border-[#4F7CFF]/25 sm:p-7">
                  {/* subtle number */}
                  <div
                    className="pointer-events-none absolute right-5 top-3 text-[72px] font-bold leading-none tracking-[-0.06em] text-[#4F7CFF]/[0.035]"
                    aria-hidden="true"
                  >
                    {item.number}
                  </div>

                  <div className="relative">
                    <div className="flex items-center justify-between gap-4">
                      <span className="text-[10px] font-semibold tracking-[0.14em] text-[#4F7CFF]">
                        {item.number}
                      </span>

                      <span className="rounded-full border border-[#202936] bg-[#121821] px-2.5 py-1 text-[9px] font-medium tracking-[0.08em] text-[#6F7A8A]">
                        PRINCIPLE
                      </span>
                    </div>

                    <h3 className="mt-7 max-w-[420px] text-xl font-semibold tracking-[-0.02em] text-[#F4F7FB] sm:text-2xl">
                      {item.title}
                    </h3>

                    <p className="mt-4 max-w-[520px] text-sm leading-6 text-[#6F7A8A]">
                      {item.description}
                    </p>

                    {/* system-language visual */}
                    <div className="mt-7 rounded-xl border border-[#202936] bg-[#0D1118] p-4">
                      <div className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#4F7CFF]" />

                        <span className="text-[9px] font-semibold uppercase tracking-[0.1em] text-[#6F7A8A]">
                          System principle
                        </span>
                      </div>

                      <div className="mt-3 flex items-center gap-2">
                        {item.visual
                          .split(" → ")
                          .map((part, partIndex, parts) => (
                            <div
                              key={part}
                              className="flex min-w-0 items-center gap-2"
                            >
                              <span
                                className={[
                                  "rounded-lg border px-2.5 py-2 text-[9px] font-semibold",
                                  partIndex === 0
                                    ? "border-[#4F7CFF]/20 bg-[#4F7CFF]/[0.05] text-[#A7B0BF]"
                                    : "border-[#202936] bg-[#121821] text-[#6F7A8A]",
                                ].join(" ")}
                              >
                                {part}
                              </span>

                              {partIndex < parts.length - 1 && (
                                <ArrowRight
                                  className="h-3 w-3 shrink-0 text-[#4F7CFF]/50"
                                  aria-hidden="true"
                                />
                              )}
                            </div>
                          ))}
                      </div>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          {/* ==========================================================
              PRINCIPLE STATEMENT
          ========================================================== */}

          <Reveal delay={0.12} className="mt-14">
            <div className="relative overflow-hidden rounded-2xl border border-[#4F7CFF]/15 bg-[#080A0F] p-6 sm:p-8">
              <div
                className="pointer-events-none absolute right-0 top-0 h-48 w-48 rounded-full bg-[#4F7CFF]/[0.035] blur-3xl"
                aria-hidden="true"
              />

              <div className="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                <div className="max-w-[760px]">
                  <p className="text-lg font-semibold tracking-[-0.02em] text-[#F4F7FB] md:text-xl">
                    Don't automate everything.
                    <span className="text-[#4F7CFF]">
                      {" "}
                      Automate what matters.
                    </span>
                  </p>

                  <p className="mt-2 text-sm leading-6 text-[#6F7A8A]">
                    The objective is a better business workflow — with AI and
                    automation acting as useful infrastructure around it.
                  </p>
                </div>

                <div className="flex shrink-0 items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#4F7CFF]/20 bg-[#4F7CFF]/[0.06]">
                    <Sparkles
                      className="h-4 w-4 text-[#4F7CFF]"
                      strokeWidth={1.7}
                    />
                  </div>

                  <div>
                    <p className="text-[9px] font-semibold uppercase tracking-[0.12em] text-[#6F7A8A]">
                      Core principle
                    </p>

                    <p className="mt-1 text-xs font-semibold text-[#F4F7FB]">
                      Useful intelligence
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============================================================
          07 — BUSINESS IMPACT
      ============================================================ */}

      <section
        id="business-impact"
        className="border-b border-[#171E28]"
        aria-labelledby="business-impact-heading"
      >
        <div className="mx-auto max-w-[1180px] px-5 py-28 sm:px-7 lg:px-8 lg:py-36">
          {/* ==========================================================
              INTRO
          ========================================================== */}

          <Reveal className="max-w-[800px]">
            <SectionLabel>Business Impact</SectionLabel>

            <h2
              id="business-impact-heading"
              className="text-4xl font-semibold leading-[1.05] tracking-[-0.035em] md:text-5xl lg:text-[58px]"
            >
              Better systems should make
              <span className="block text-[#4F7CFF]">work easier.</span>
            </h2>

            <p className="mt-6 max-w-[700px] text-base leading-7 text-[#A7B0BF] md:text-[17px]">
              The value of automation depends on the process being improved.
              Instead of promising artificial performance numbers, we focus on
              practical changes that can make everyday business operations
              clearer, faster and more consistent.
            </p>
          </Reveal>

          {/* ==========================================================
              BEFORE → AFTER JOURNEY
          ========================================================== */}

          <Reveal delay={0.08} className="mt-14">
            <div className="overflow-hidden rounded-[24px] border border-[#202936] bg-[#0D1118]">
              <div className="grid lg:grid-cols-[1fr_auto_1fr]">
                {/* ====================================================
                    BEFORE
                ==================================================== */}

                <div className="p-6 sm:p-8 lg:p-9">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#6F7A8A]">
                        BEFORE
                      </p>

                      <h3 className="mt-2 text-xl font-semibold tracking-[-0.02em] text-[#F4F7FB]">
                        Manual workflow
                      </h3>
                    </div>

                    <span className="rounded-full border border-[#202936] bg-[#080A0F] px-2.5 py-1 text-[9px] font-medium uppercase tracking-[0.1em] text-[#6F7A8A]">
                      Friction
                    </span>
                  </div>

                  <div className="mt-7 space-y-3">
                    {[
                      {
                        title: "Input arrives",
                        detail:
                          "Information enters through different channels.",
                      },
                      {
                        title: "Someone checks it",
                        detail: "A team member decides what needs to happen.",
                      },
                      {
                        title: "Information is copied",
                        detail: "Data moves manually between tools.",
                      },
                      {
                        title: "Follow-up depends on people",
                        detail:
                          "The next step can rely on memory and reminders.",
                      },
                    ].map((item, index) => (
                      <motion.div
                        key={item.title}
                        initial={
                          reduceMotion
                            ? false
                            : {
                                opacity: 0,
                                x: -12,
                              }
                        }
                        whileInView={
                          reduceMotion
                            ? undefined
                            : {
                                opacity: 1,
                                x: 0,
                              }
                        }
                        viewport={{
                          once: true,
                          amount: 0.2,
                        }}
                        transition={{
                          duration: 0.35,
                          delay: index * 0.06,
                        }}
                        className="relative flex gap-3 rounded-xl border border-[#202936] bg-[#080A0F] p-4"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#6F7A8A]" />

                        <div>
                          <p className="text-xs font-semibold text-[#DCE3ED]">
                            {item.title}
                          </p>

                          <p className="mt-1 text-[10px] leading-4 text-[#6F7A8A]">
                            {item.detail}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* ====================================================
                    TRANSITION
                ==================================================== */}

                <div className="flex items-center justify-center border-y border-[#202936] px-5 py-6 lg:border-x lg:border-y-0 lg:px-4">
                  <div className="flex items-center gap-3 lg:flex-col">
                    <div className="hidden h-16 w-px bg-gradient-to-b from-transparent via-[#4F7CFF]/35 to-transparent lg:block" />

                    <motion.div
                      animate={
                        reduceMotion
                          ? undefined
                          : {
                              scale: [1, 1.04, 1],
                            }
                      }
                      transition={{
                        duration: 2.4,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#4F7CFF]/20 bg-[#4F7CFF]/[0.06] shadow-[0_0_28px_rgba(79,124,255,0.08)]"
                    >
                      <ArrowRight
                        className="hidden h-4 w-4 text-[#4F7CFF] lg:block"
                        aria-hidden="true"
                      />

                      <ArrowDown
                        className="h-4 w-4 text-[#4F7CFF] lg:hidden"
                        aria-hidden="true"
                      />
                    </motion.div>

                    <div className="hidden h-16 w-px bg-gradient-to-b from-transparent via-[#4F7CFF]/35 to-transparent lg:block" />
                  </div>
                </div>

                {/* ====================================================
                    AFTER
                ==================================================== */}

                <div className="bg-[#080A0F] p-6 sm:p-8 lg:p-9">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#4F7CFF]">
                        AFTER
                      </p>

                      <h3 className="mt-2 text-xl font-semibold tracking-[-0.02em] text-[#F4F7FB]">
                        Connected workflow
                      </h3>
                    </div>

                    <span className="rounded-full border border-[#38D9C5]/15 bg-[#38D9C5]/[0.04] px-2.5 py-1 text-[9px] font-medium uppercase tracking-[0.1em] text-[#38D9C5]">
                      Flow
                    </span>
                  </div>

                  <div className="relative mt-7">
                    <div
                      className="absolute bottom-6 left-[19px] top-6 w-px bg-[#202936]"
                      aria-hidden="true"
                    />

                    {!reduceMotion && (
                      <motion.div
                        animate={{
                          top: ["6%", "88%"],
                        }}
                        transition={{
                          duration: 2.8,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        className="absolute left-[17px] h-1.5 w-1.5 rounded-full bg-[#4F7CFF] shadow-[0_0_12px_rgba(79,124,255,0.75)]"
                        aria-hidden="true"
                      />
                    )}

                    <div className="space-y-3">
                      {[
                        {
                          title: "Input captured",
                          detail: "The business event enters the workflow.",
                          icon: Zap,
                        },
                        {
                          title: "Information understood",
                          detail: "AI supports the task where useful.",
                          icon: Bot,
                        },
                        {
                          title: "System updated",
                          detail:
                            "Relevant information moves to the right system.",
                          icon: Settings2,
                        },
                        {
                          title: "Next action triggered",
                          detail: "The defined workflow continues.",
                          icon: Workflow,
                        },
                      ].map((item, index) => {
                        const Icon = item.icon;

                        return (
                          <motion.div
                            key={item.title}
                            initial={
                              reduceMotion
                                ? false
                                : {
                                    opacity: 0,
                                    x: 12,
                                  }
                            }
                            whileInView={
                              reduceMotion
                                ? undefined
                                : {
                                    opacity: 1,
                                    x: 0,
                                  }
                            }
                            viewport={{
                              once: true,
                              amount: 0.2,
                            }}
                            transition={{
                              duration: 0.35,
                              delay: index * 0.07,
                            }}
                            className="relative z-10 flex gap-3"
                          >
                            <div
                              className={[
                                "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border",
                                index === 1
                                  ? "border-[#4F7CFF]/25 bg-[#4F7CFF]/[0.08]"
                                  : "border-[#202936] bg-[#121821]",
                              ].join(" ")}
                            >
                              <Icon
                                className={
                                  index === 1
                                    ? "h-4 w-4 text-[#4F7CFF]"
                                    : "h-4 w-4 text-[#6F7A8A]"
                                }
                                strokeWidth={1.7}
                              />
                            </div>

                            <div className="flex-1 rounded-xl border border-[#202936] bg-[#0D1118] px-4 py-3">
                              <p className="text-xs font-semibold text-[#DCE3ED]">
                                {item.title}
                              </p>

                              <p className="mt-1 text-[10px] leading-4 text-[#6F7A8A]">
                                {item.detail}
                              </p>
                            </div>
                          </motion.div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>

              {/* system statement */}
              <div className="border-t border-[#202936] px-6 py-5 sm:px-8">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#38D9C5]" />

                    <span className="text-[10px] font-medium text-[#6F7A8A]">
                      From manual effort to connected execution
                    </span>
                  </div>

                  <span className="text-[9px] font-semibold tracking-[0.1em] text-[#6F7A8A]">
                    BUSINESS WORKFLOW
                  </span>
                </div>
              </div>
            </div>
          </Reveal>

          {/* ==========================================================
              OUTCOME LAYERS
          ========================================================== */}

          <Reveal delay={0.1} className="mt-16">
            <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  title: "Less Manual Work",
                  description:
                    "Reduce repetitive operational tasks and unnecessary data handling.",
                  icon: Zap,
                },
                {
                  title: "Faster Response",
                  description:
                    "Help important inputs move through the workflow without avoidable delay.",
                  icon: ArrowRight,
                },
                {
                  title: "Better Visibility",
                  description:
                    "Keep information and process states clearer across the workflow.",
                  icon: Settings2,
                },
                {
                  title: "Consistent Follow-up",
                  description:
                    "Create structured next steps instead of relying entirely on manual reminders.",
                  icon: Check,
                },
              ].map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.article
                    key={item.title}
                    initial={
                      reduceMotion
                        ? false
                        : {
                            opacity: 0,
                            y: 18,
                          }
                    }
                    whileInView={
                      reduceMotion
                        ? undefined
                        : {
                            opacity: 1,
                            y: 0,
                          }
                    }
                    viewport={{
                      once: true,
                      amount: 0.16,
                    }}
                    transition={{
                      duration: 0.45,
                      delay: index * 0.05,
                    }}
                    className="rounded-2xl border border-[#202936] bg-[#0D1118] p-5 transition-colors duration-300 hover:border-[#4F7CFF]/25"
                  >
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#4F7CFF]/15 bg-[#4F7CFF]/[0.05]">
                      <Icon
                        className="h-4 w-4 text-[#4F7CFF]"
                        strokeWidth={1.7}
                      />
                    </div>

                    <h3 className="mt-5 text-base font-semibold text-[#F4F7FB]">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-[#6F7A8A]">
                      {item.description}
                    </p>
                  </motion.article>
                );
              })}
            </div>
          </Reveal>

          {/* ==========================================================
              NO FAKE METRICS — CREDIBILITY NOTE
          ========================================================== */}

          <Reveal delay={0.14} className="mt-10">
            <div className="flex flex-col gap-3 border-t border-[#202936] pt-6 sm:flex-row sm:items-center sm:justify-between">
              <p className="max-w-[700px] text-[11px] leading-5 text-[#6F7A8A]">
                Every business process is different. The actual impact depends
                on what is being automated, how the workflow is designed and how
                the system is adopted.
              </p>

              <span className="shrink-0 text-[9px] font-semibold uppercase tracking-[0.1em] text-[#6F7A8A]">
                Practical outcomes
              </span>
            </div>
          </Reveal>
        </div>
      </section>
      {/* ================================================================
          PROBLEM → SYSTEM SHIFT
         ================================================================ */}
      <section
        className="section-feature relative overflow-hidden"
        aria-labelledby="problem-heading"
      >
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden="true"
        >
          <div className="absolute left-[8%] top-[20%] h-64 w-64 rounded-full bg-primary/[0.035] blur-3xl" />
          <div className="absolute right-[8%] bottom-[10%] h-72 w-72 rounded-full bg-violet/[0.03] blur-3xl" />
        </div>

        <div className="container relative">
          {/* ============================================================
              INTRO
             ============================================================ */}
          <div className="max-w-[720px]">
            <p className="section-eyebrow">THE PROBLEM</p>

            <h2
              id="problem-heading"
              className="text-3xl font-bold leading-[1.08] tracking-[-0.025em] text-foreground md:text-4xl lg:text-[44px]"
            >
              Manual work quietly
              <span className="block text-primary">slows businesses down.</span>
            </h2>

            <p className="mt-5 max-w-[680px] text-base leading-7 text-muted-foreground md:text-[17px]">
              Most businesses don't have a lack of tools. They have processes
              spread across people, messages, spreadsheets and disconnected
              systems — with too much work still happening manually.
            </p>
          </div>

          {/* ============================================================
              BEFORE / AFTER SYSTEM
             ============================================================ */}
          <div className="mt-12 grid gap-4 lg:grid-cols-[1fr_auto_1fr] lg:items-stretch lg:gap-5">
            {/* ==========================================================
                BEFORE
               ========================================================== */}
            <motion.div
              initial={
                reduceMotion
                  ? false
                  : {
                      opacity: 0,
                      x: -18,
                    }
              }
              whileInView={
                reduceMotion
                  ? undefined
                  : {
                      opacity: 1,
                      x: 0,
                    }
              }
              viewport={{
                once: true,
                amount: 0.18,
              }}
              transition={{
                duration: 0.55,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="rounded-2xl border border-border bg-surface p-5 sm:p-6"
            >
              <div className="flex items-center justify-between gap-4 border-b border-border pb-4">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                    BEFORE
                  </p>

                  <p className="mt-1 text-sm font-semibold text-foreground">
                    Work happens in pieces
                  </p>
                </div>

                <span className="rounded-full border border-border bg-background/70 px-2.5 py-1 text-[9px] font-medium uppercase tracking-[0.1em] text-muted-foreground">
                  Fragmented
                </span>
              </div>

              <div className="mt-5 space-y-3">
                {[
                  {
                    label: "New enquiry",
                    detail: "Arrives through different channels",
                  },
                  {
                    label: "Manual follow-up",
                    detail: "Someone remembers what to do next",
                  },
                  {
                    label: "Data entry",
                    detail: "Information gets copied between tools",
                  },
                  {
                    label: "Team handoff",
                    detail: "Context moves from person to person",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={
                      reduceMotion
                        ? false
                        : {
                            opacity: 0,
                            y: 10,
                          }
                    }
                    whileInView={
                      reduceMotion
                        ? undefined
                        : {
                            opacity: 1,
                            y: 0,
                          }
                    }
                    viewport={{
                      once: true,
                      amount: 0.2,
                    }}
                    transition={{
                      duration: 0.35,
                      delay: index * 0.06,
                    }}
                    className="relative rounded-xl border border-border bg-background/60 px-4 py-3.5"
                  >
                    <div className="flex items-start gap-3">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-muted-foreground/50" />

                      <div className="min-w-0">
                        <p className="text-xs font-semibold text-foreground">
                          {item.label}
                        </p>

                        <p className="mt-1 text-[10px] leading-4 text-muted-foreground">
                          {item.detail}
                        </p>
                      </div>
                    </div>

                    {/* fragmented signal */}
                    {index < 3 && (
                      <span
                        className="absolute -bottom-2 left-5 h-3 w-px border-l border-dashed border-border"
                        aria-hidden="true"
                      />
                    )}
                  </motion.div>
                ))}
              </div>

              <div className="mt-5 flex items-center gap-2 border-t border-border pt-4">
                <span className="h-1.5 w-1.5 rounded-full bg-warning/70" />

                <span className="text-[10px] font-medium text-muted-foreground">
                  Repetition creates friction
                </span>
              </div>
            </motion.div>

            {/* ==========================================================
                TRANSITION
               ========================================================== */}
            <motion.div
              initial={
                reduceMotion
                  ? false
                  : {
                      opacity: 0,
                      scale: 0.92,
                    }
              }
              whileInView={
                reduceMotion
                  ? undefined
                  : {
                      opacity: 1,
                      scale: 1,
                    }
              }
              viewport={{
                once: true,
                amount: 0.3,
              }}
              transition={{
                duration: 0.5,
                delay: 0.1,
              }}
              className="flex items-center justify-center lg:w-[72px]"
            >
              <div className="flex h-full min-h-[64px] items-center justify-center lg:flex-col">
                <div className="hidden h-full w-px bg-gradient-to-b from-transparent via-primary/30 to-transparent lg:block" />

                <div className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-primary/20 bg-primary/[0.06] shadow-[0_0_28px_rgba(79,124,255,0.08)]">
                  <ArrowRight
                    className="hidden h-4 w-4 text-primary lg:block"
                    aria-hidden="true"
                  />

                  <ArrowDown
                    className="h-4 w-4 text-primary lg:hidden"
                    aria-hidden="true"
                  />

                  {!reduceMotion && (
                    <motion.span
                      animate={{
                        opacity: [0.25, 0.8, 0.25],
                        scale: [0.85, 1, 0.85],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="absolute inset-0 rounded-xl border border-primary/20"
                      aria-hidden="true"
                    />
                  )}
                </div>

                <div className="hidden h-full w-px bg-gradient-to-b from-transparent via-primary/30 to-transparent lg:block" />
              </div>
            </motion.div>

            {/* ==========================================================
                AFTER
               ========================================================== */}
            <motion.div
              initial={
                reduceMotion
                  ? false
                  : {
                      opacity: 0,
                      x: 18,
                    }
              }
              whileInView={
                reduceMotion
                  ? undefined
                  : {
                      opacity: 1,
                      x: 0,
                    }
              }
              viewport={{
                once: true,
                amount: 0.18,
              }}
              transition={{
                duration: 0.55,
                delay: 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="rounded-2xl border border-primary/20 bg-surface p-5 shadow-[0_20px_70px_rgba(0,0,0,0.14)] sm:p-6"
            >
              <div className="flex items-center justify-between gap-4 border-b border-border pb-4">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-primary">
                    AFTER
                  </p>

                  <p className="mt-1 text-sm font-semibold text-foreground">
                    Work moves through one system
                  </p>
                </div>

                <span className="rounded-full border border-mint/15 bg-mint/[0.04] px-2.5 py-1 text-[9px] font-medium uppercase tracking-[0.1em] text-mint">
                  Connected
                </span>
              </div>

              <div className="relative mt-5">
                {/* connection rail */}
                <div
                  className="absolute left-[19px] top-5 bottom-5 w-px bg-border"
                  aria-hidden="true"
                />

                {!reduceMotion && (
                  <motion.div
                    animate={{
                      top: ["6%", "90%"],
                    }}
                    transition={{
                      duration: 2.8,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute left-[17px] h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_12px_rgba(79,124,255,0.7)]"
                    aria-hidden="true"
                  />
                )}

                <div className="space-y-3">
                  {[
                    {
                      label: "New Lead",
                      detail: "Business input enters the workflow",
                      icon: Zap,
                    },
                    {
                      label: "AI Agent",
                      detail: "Information is understood and processed",
                      icon: Bot,
                    },
                    {
                      label: "CRM",
                      detail: "Relevant business data is updated",
                      icon: Settings2,
                    },
                    {
                      label: "Business Action",
                      detail: "The next step continues automatically",
                      icon: Workflow,
                    },
                  ].map((item, index) => {
                    const Icon = item.icon;

                    return (
                      <motion.div
                        key={item.label}
                        initial={
                          reduceMotion
                            ? false
                            : {
                                opacity: 0,
                                x: 12,
                              }
                        }
                        whileInView={
                          reduceMotion
                            ? undefined
                            : {
                                opacity: 1,
                                x: 0,
                              }
                        }
                        viewport={{
                          once: true,
                          amount: 0.2,
                        }}
                        transition={{
                          duration: 0.4,
                          delay: 0.12 + index * 0.08,
                        }}
                        className="relative z-10 flex gap-3"
                      >
                        <div
                          className={[
                            "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border",
                            index === 1
                              ? "border-primary/25 bg-primary/[0.08]"
                              : "border-border bg-elevated",
                          ].join(" ")}
                        >
                          <Icon
                            className={
                              index === 1
                                ? "h-4 w-4 text-primary"
                                : "h-4 w-4 text-muted-foreground"
                            }
                            strokeWidth={1.7}
                            aria-hidden="true"
                          />
                        </div>

                        <div className="min-w-0 flex-1 rounded-xl border border-border bg-background/65 px-4 py-3">
                          <div className="flex items-center justify-between gap-3">
                            <p className="text-xs font-semibold text-foreground">
                              {item.label}
                            </p>

                            <span className="text-[9px] font-semibold tracking-[0.1em] text-muted-foreground">
                              0{index + 1}
                            </span>
                          </div>

                          <p className="mt-1 text-[10px] leading-4 text-muted-foreground">
                            {item.detail}
                          </p>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              <div className="mt-5 flex items-center gap-2 border-t border-border pt-4">
                <span className="h-1.5 w-1.5 rounded-full bg-mint shadow-[0_0_9px_rgba(56,217,197,0.35)]" />

                <span className="text-[10px] font-medium text-muted-foreground">
                  Connected workflow reduces manual friction
                </span>
              </div>
            </motion.div>
          </div>

          {/* ============================================================
              CORE MESSAGE
             ============================================================ */}
          <motion.div
            initial={
              reduceMotion
                ? false
                : {
                    opacity: 0,
                    y: 14,
                  }
            }
            whileInView={
              reduceMotion
                ? undefined
                : {
                    opacity: 1,
                    y: 0,
                  }
            }
            viewport={{
              once: true,
              amount: 0.25,
            }}
            transition={{
              duration: 0.5,
              delay: 0.12,
            }}
            className="mt-10 border-t border-border pt-8"
          >
            <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
              <div className="max-w-[760px]">
                <p className="text-xl font-semibold tracking-[-0.02em] text-foreground md:text-2xl">
                  You don't need more tools.
                  <span className="text-primary">
                    {" "}
                    You need the right system.
                  </span>
                </p>

                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  The goal is not to automate everything. It is to connect the
                  right parts of the workflow so useful work can move with less
                  manual effort.
                </p>
              </div>

              <Link
                href="/start-project"
                className="inline-flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-lg border border-primary/25 bg-primary/[0.05] px-5 text-sm font-semibold text-foreground transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/40 hover:bg-primary/[0.08] focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                Tell Us What You Need
                <ArrowRight
                  className="h-4 w-4 text-primary"
                  aria-hidden="true"
                />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============================================================
          08 — FINAL CTA
      ============================================================ */}

      <section
        id="start-automation"
        className="relative overflow-hidden py-28 sm:py-32 lg:py-40"
        aria-labelledby="final-cta-heading"
      >
        {/* ============================================================
            BACKGROUND SYSTEM LAYER
        ============================================================ */}

        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden="true"
        >
          <div className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#4F7CFF]/[0.055] blur-[120px]" />

          <div
            className="absolute inset-0 opacity-[0.025]"
            style={{
              backgroundImage:
                "linear-gradient(#4F7CFF 1px, transparent 1px), linear-gradient(90deg, #4F7CFF 1px, transparent 1px)",
              backgroundSize: "64px 64px",
              maskImage:
                "radial-gradient(circle at center, black, transparent 72%)",
            }}
          />
        </div>

        <div className="relative mx-auto max-w-[1180px] px-5 sm:px-7 lg:px-8">
          <Reveal>
            <div className="relative overflow-hidden rounded-[28px] border border-[#4F7CFF]/20 bg-[#0D1118] shadow-[0_30px_120px_rgba(0,0,0,0.28)]">
              {/* ======================================================
                  TOP SYSTEM BAR
              ====================================================== */}

              <div className="flex items-center justify-between border-b border-[#202936] px-5 py-4 sm:px-7">
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#38D9C5] shadow-[0_0_10px_rgba(56,217,197,0.35)]" />

                  <span className="text-[9px] font-semibold uppercase tracking-[0.14em] text-[#6F7A8A]">
                    Automation Project
                  </span>
                </div>

                <span className="text-[9px] font-medium uppercase tracking-[0.1em] text-[#6F7A8A]">
                  Next Step
                </span>
              </div>

              {/* ======================================================
                  MAIN CTA
              ====================================================== */}

              <div className="relative px-6 py-14 text-center sm:px-10 sm:py-16 lg:px-20 lg:py-20">
                <div className="mx-auto max-w-[820px]">
                  <SectionLabel>Ready to Automate?</SectionLabel>

                  <h2
                    id="final-cta-heading"
                    className="text-4xl font-semibold leading-[1.04] tracking-[-0.04em] md:text-5xl lg:text-[62px]"
                  >
                    Start with the problem.
                    <span className="block text-[#4F7CFF]">
                      We'll build the system.
                    </span>
                  </h2>

                  <p className="mx-auto mt-6 max-w-[680px] text-base leading-7 text-[#A7B0BF] md:text-[17px]">
                    You don't need to know exactly what should be automated.
                    Tell us what is repetitive, slow, disconnected or difficult
                    to manage — we'll help explore the right technology
                    approach.
                  </p>

                  <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                    <Link
                      href="/start-project"
                      className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-[#4F7CFF] px-7 text-sm font-semibold text-white shadow-[0_0_30px_rgba(79,124,255,0.12)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#4F7CFF]/90 hover:shadow-[0_0_40px_rgba(79,124,255,0.2)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4F7CFF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0D1118]"
                    >
                      Start Your Project
                      <ArrowRight
                        className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                        aria-hidden="true"
                      />
                    </Link>

                    <a
                      href="#automation-system"
                      className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-[#202936] bg-[#080A0F] px-7 text-sm font-semibold text-[#F4F7FB] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#4F7CFF]/30 hover:bg-[#121821] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4F7CFF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0D1118]"
                    >
                      Review the System
                      <ArrowDown className="h-4 w-4" aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </div>

              {/* ======================================================
                  PROJECT INPUTS
              ====================================================== */}

              <div className="border-t border-[#202936] bg-[#080A0F]/45 px-5 py-6 sm:px-7">
                <div className="mx-auto max-w-[900px]">
                  <div className="grid gap-2 sm:grid-cols-3">
                    {[
                      {
                        label: "A process",
                        detail: "That takes too much manual effort",
                      },
                      {
                        label: "A workflow",
                        detail: "That feels disconnected",
                      },
                      {
                        label: "A business problem",
                        detail: "You want technology to solve",
                      },
                    ].map((item, index) => (
                      <motion.div
                        key={item.label}
                        initial={
                          reduceMotion
                            ? false
                            : {
                                opacity: 0,
                                y: 10,
                              }
                        }
                        whileInView={
                          reduceMotion
                            ? undefined
                            : {
                                opacity: 1,
                                y: 0,
                              }
                        }
                        viewport={{
                          once: true,
                          amount: 0.2,
                        }}
                        transition={{
                          duration: 0.35,
                          delay: index * 0.05,
                        }}
                        className="rounded-xl border border-[#202936] bg-[#0D1118] px-4 py-4"
                      >
                        <div className="flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-[#4F7CFF]" />

                          <p className="text-xs font-semibold text-[#DCE3ED]">
                            {item.label}
                          </p>
                        </div>

                        <p className="mt-2 text-[10px] leading-4 text-[#6F7A8A]">
                          {item.detail}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* ======================================================
                  BOTTOM PRINCIPLE
              ====================================================== */}

              <div className="border-t border-[#202936] px-5 py-5 sm:px-7">
                <div className="flex flex-col gap-3 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
                  <span className="text-[10px] font-medium text-[#6F7A8A]">
                    Business problem first. Technology second.
                  </span>

                  <span className="text-[9px] font-semibold uppercase tracking-[0.1em] text-[#6F7A8A]">
                    AI • SOFTWARE • AUTOMATION
                  </span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
