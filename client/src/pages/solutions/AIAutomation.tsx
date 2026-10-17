import { useState } from "react";
import { Link } from "wouter";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  Bot,
  Check,
  ChevronLeft,
  ChevronRight,
  FileText,
  GitBranch,
  MessageSquare,
  Settings2,
  Sparkles,
  Workflow,
  Zap,
  Clock3,
  Database,
  ShieldCheck,
} from "lucide-react";
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
    number: "01",
    title: "Business Workflows",
    description:
      "Connect repetitive, multi-step tasks into a structured process with clear triggers, actions and hand-offs.",
    examples: ["Task routing", "Approvals", "Status updates"],
  },
  {
    icon: MessageSquare,
    number: "02",
    title: "Customer Communication",
    description:
      "Organize incoming messages and follow-ups so enquiries reach the right next step.",
    examples: ["Message handling", "Follow-up flows", "Response routing"],
  },
  {
    icon: Bot,
    number: "03",
    title: "AI Assistants & Agents",
    description:
      "Use AI to help interpret information, answer defined questions and support specific business tasks.",
    examples: ["Information assistance", "Enquiry triage", "Task support"],
  },
  {
    icon: FileText,
    number: "04",
    title: "Document & Data Work",
    description:
      "Reduce repetitive information handling by extracting, organizing and routing relevant data.",
    examples: ["Document processing", "Data extraction", "Record creation"],
  },
  {
    icon: GitBranch,
    number: "05",
    title: "Lead Processes",
    description:
      "Build a clearer journey from a new enquiry to qualification, follow-up and sales hand-off.",
    examples: ["Lead capture", "Qualification", "CRM updates"],
  },
  {
    icon: Settings2,
    number: "06",
    title: "Internal Operations",
    description:
      "Connect everyday business tools and standardize repetitive operational tasks.",
    examples: ["System integrations", "Task assignment", "Process tracking"],
  },
];

const processSteps = [
  {
    number: "01",
    label: "Understand",
    eyebrow: "DISCOVER",
    icon: MessageSquare,
    summary: "Understand the real business problem.",
    description:
      "We look at the people involved, the tools being used, the information moving through the process and where manual effort is happening.",
    points: [
      "Current workflow",
      "People and responsibilities",
      "Existing business tools",
      "Pain points and constraints",
    ],
    output: "A clear picture of the current process",
  },
  {
    number: "02",
    label: "Map",
    eyebrow: "STRUCTURE",
    icon: GitBranch,
    summary: "Define what should happen next.",
    description:
      "We map the inputs, decisions, actions and hand-offs. This helps distinguish tasks that can be automated from decisions that should remain with people.",
    points: [
      "Inputs and triggers",
      "Rules and decisions",
      "Automation opportunities",
      "Required integrations",
    ],
    output: "A structured workflow blueprint",
  },
  {
    number: "03",
    label: "Build",
    eyebrow: "IMPLEMENT",
    icon: Workflow,
    summary: "Build around the process, not the trend.",
    description:
      "We choose a suitable combination of workflow logic, integrations, software and AI capabilities based on the actual requirement.",
    points: [
      "Workflow logic",
      "Useful AI capabilities",
      "Business system connections",
      "Clear user interactions",
    ],
    output: "An implementation suited to the requirement",
  },
  {
    number: "04",
    label: "Improve",
    eyebrow: "EVOLVE",
    icon: Sparkles,
    summary: "Refine the workflow as needs evolve.",
    description:
      "The workflow can be reviewed after implementation, tested against real use and refined as the business identifies new requirements.",
    points: [
      "Review how the process performs",
      "Identify friction points",
      "Refine rules and hand-offs",
      "Expand when it makes sense",
    ],
    output: "A foundation for ongoing improvement",
  },
];

const principles = [
  {
    icon: TargetIcon,
    title: "Solve the right problem",
    description:
      "Start with a real operational need instead of adding technology without a clear purpose.",
    visual: "PROBLEM → PURPOSE",
  },
  {
    icon: Zap,
    title: "Use AI where it helps",
    description:
      "Combine AI with predictable workflow rules, using AI for tasks that benefit from interpretation or flexible responses.",
    visual: "RULES + USEFUL AI",
  },
  {
    icon: ShieldCheck,
    title: "Keep the process clear",
    description:
      "Make inputs, actions, decisions and human hand-offs understandable to the people using the system.",
    visual: "INPUT → LOGIC → ACTION",
  },
  {
    icon: GitBranch,
    title: "Build for change",
    description:
      "Create a practical foundation that can be adjusted as the workflow and business requirements evolve.",
    visual: "BUILD → REVIEW → IMPROVE",
  },
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#7194FF]">
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
      initial={reduceMotion ? false : { opacity: 0, y: 18 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{
        duration: reduceMotion ? 0 : 0.45,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function AutomationBuildProcess() {
  const [activeStep, setActiveStep] = useState(0);
  const step = processSteps[activeStep];
  const Icon = step.icon;

  function goToStep(next: number) {
    setActiveStep(Math.max(0, Math.min(processSteps.length - 1, next)));
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-[#202936] bg-[#0D1118]">
      <div className="border-b border-[#202936] px-5 py-4 sm:px-7">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-[9px] font-semibold uppercase tracking-[0.15em] text-[#6F7A8A]">
              Our working method
            </p>
            <p className="mt-1 text-sm font-semibold text-[#F4F7FB]">
              From business problem to useful workflow
            </p>
          </div>
          <span className="rounded-full border border-[#202936] px-3 py-1 text-[9px] font-medium text-[#A7B0BF]">
            STEP {activeStep + 1} OF {processSteps.length}
          </span>
        </div>
      </div>

      <div className="grid md:grid-cols-[0.78fr_1.22fr]">
        <div className="border-b border-[#202936] p-4 sm:p-5 md:border-b-0 md:border-r">
          <div className="space-y-2">
            {processSteps.map((item, index) => {
              const StepIcon = item.icon;
              const active = index === activeStep;

              return (
                <button
                  key={item.number}
                  type="button"
                  onClick={() => goToStep(index)}
                  aria-pressed={active}
                  className={[
                    "flex w-full items-center gap-3 rounded-xl border p-3 text-left transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7194FF]",
                    active
                      ? "border-[#4F7CFF]/40 bg-[#4F7CFF]/[0.09]"
                      : "border-transparent bg-[#080A0F] hover:border-[#202936]",
                  ].join(" ")}
                >
                  <span
                    className={[
                      "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border",
                      active
                        ? "border-[#4F7CFF]/30 bg-[#4F7CFF]/10 text-[#7194FF]"
                        : "border-[#202936] text-[#6F7A8A]",
                    ].join(" ")}
                  >
                    <StepIcon size={17} strokeWidth={1.7} />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-[9px] font-semibold tracking-[0.12em] text-[#6F7A8A]">
                      {item.number} / {item.eyebrow}
                    </span>
                    <span
                      className={[
                        "mt-1 block text-sm font-semibold",
                        active ? "text-[#F4F7FB]" : "text-[#A7B0BF]",
                      ].join(" ")}
                    >
                      {item.label}
                    </span>
                  </span>
                  <ChevronRight
                    size={15}
                    className={active ? "text-[#7194FF]" : "text-[#46505E]"}
                  />
                </button>
              );
            })}
          </div>
        </div>

        <div className="flex min-w-0 flex-col p-5 sm:p-7 lg:p-9">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#4F7CFF]/25 bg-[#4F7CFF]/[0.08] text-[#7194FF]">
              <Icon size={20} strokeWidth={1.7} />
            </div>
            <div>
              <p className="text-[9px] font-semibold uppercase tracking-[0.14em] text-[#7194FF]">
                {step.eyebrow}
              </p>
              <h3 className="mt-1 text-xl font-semibold tracking-[-0.025em] text-[#F4F7FB] sm:text-2xl">
                {step.summary}
              </h3>
            </div>
          </div>

          <p className="mt-5 text-sm leading-7 text-[#A7B0BF]">
            {step.description}
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {step.points.map((point) => (
              <div
                key={point}
                className="flex items-start gap-2.5 rounded-lg border border-[#202936] bg-[#080A0F] p-3"
              >
                <Check size={14} className="mt-0.5 shrink-0 text-[#7194FF]" />
                <span className="text-xs leading-5 text-[#DCE3ED]">
                  {point}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-xl border border-[#4F7CFF]/20 bg-[#4F7CFF]/[0.055] p-4">
            <p className="text-[9px] font-semibold uppercase tracking-[0.13em] text-[#7194FF]">
              Stage output
            </p>
            <p className="mt-2 text-sm font-medium text-[#F4F7FB]">
              {step.output}
            </p>
          </div>

          <div className="mt-6 flex items-center justify-between gap-3 border-t border-[#202936] pt-5">
            <button
              type="button"
              onClick={() => goToStep(activeStep - 1)}
              disabled={activeStep === 0}
              className="inline-flex min-h-10 items-center gap-2 rounded-lg border border-[#202936] px-3 text-xs font-medium text-[#DCE3ED] transition hover:border-[#4F7CFF]/40 disabled:cursor-not-allowed disabled:opacity-35"
            >
              <ChevronLeft size={15} />
              Previous
            </button>

            <div
              className="flex items-center gap-1.5"
              aria-label={`Step ${activeStep + 1} of ${processSteps.length}`}
            >
              {processSteps.map((item, index) => (
                <button
                  key={item.number}
                  type="button"
                  onClick={() => goToStep(index)}
                  aria-label={`Go to ${item.label}`}
                  aria-current={activeStep === index ? "step" : undefined}
                  className={[
                    "h-1.5 rounded-full transition-all",
                    activeStep === index
                      ? "w-6 bg-[#4F7CFF]"
                      : "w-1.5 bg-[#38414F] hover:bg-[#7194FF]",
                  ].join(" ")}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={() => goToStep(activeStep + 1)}
              disabled={activeStep === processSteps.length - 1}
              className="inline-flex min-h-10 items-center gap-2 rounded-lg bg-[#4F7CFF] px-3 text-xs font-semibold text-white transition hover:bg-[#5D87FF] disabled:cursor-not-allowed disabled:opacity-35"
            >
              Next
              <ChevronRight size={15} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function TargetIcon({ size = 20 }: { size?: number }) {
  return <Database size={size} strokeWidth={1.7} />;
}

function AutomationSystemExperience() {
  const [activeStage, setActiveStage] = useState(0);

  const stages = [
    {
      number: "01",
      label: "Input",
      title: "Information enters",
      description:
        "A website enquiry, document, customer message or internal event starts the process.",
      icon: FileText,
      detail: "Capture the information needed for the next step.",
    },
    {
      number: "02",
      label: "Interpret",
      title: "Information is understood",
      description:
        "Rules or AI can classify information, extract relevant details or help identify what should happen next.",
      icon: Bot,
      detail: "Use AI only where interpretation adds value.",
    },
    {
      number: "03",
      label: "Decide",
      title: "The workflow applies logic",
      description:
        "Defined conditions route the task, trigger an action or request a human decision where needed.",
      icon: GitBranch,
      detail: "Keep rules and responsibilities understandable.",
    },
    {
      number: "04",
      label: "Act",
      title: "The next action happens",
      description:
        "Relevant information can be sent to connected tools, assigned to a team member or used to trigger a follow-up.",
      icon: Workflow,
      detail: "Connect the result to a useful business action.",
    },
  ];

  const current = stages[activeStage];

  return (
    <div className="overflow-hidden rounded-2xl border border-[#202936] bg-[#080A0F]">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#202936] px-5 py-4 sm:px-7">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#4F7CFF]/20 bg-[#4F7CFF]/[0.08] text-[#7194FF]">
            <Workflow size={17} />
          </div>
          <div>
            <p className="text-[9px] font-semibold uppercase tracking-[0.14em] text-[#6F7A8A]">
              Workflow blueprint
            </p>
            <p className="mt-1 text-sm font-semibold text-[#F4F7FB]">
              Explore each stage
            </p>
          </div>
        </div>
        <span className="rounded-full border border-[#202936] px-3 py-1 text-[9px] uppercase tracking-[0.1em] text-[#6F7A8A]">
          Concept view
        </span>
      </div>

      <div className="grid gap-6 p-5 sm:p-7 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:p-9">
        <div className="min-w-0">
          <div className="space-y-2">
            {stages.map((stage, index) => {
              const StageIcon = stage.icon;
              const active = index === activeStage;

              return (
                <button
                  key={stage.number}
                  type="button"
                  onClick={() => setActiveStage(index)}
                  aria-pressed={active}
                  className={[
                    "flex w-full items-center gap-3 rounded-xl border p-3 text-left transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7194FF]",
                    active
                      ? "border-[#4F7CFF]/35 bg-[#4F7CFF]/[0.08]"
                      : "border-[#202936] bg-[#0D1118] hover:border-[#4F7CFF]/25",
                  ].join(" ")}
                >
                  <span
                    className={[
                      "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border",
                      active
                        ? "border-[#4F7CFF]/25 bg-[#4F7CFF]/10 text-[#7194FF]"
                        : "border-[#202936] text-[#6F7A8A]",
                    ].join(" ")}
                  >
                    <StageIcon size={17} />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-[9px] font-semibold text-[#6F7A8A]">
                      STAGE {stage.number}
                    </span>
                    <span className="mt-1 block text-sm font-semibold text-[#F4F7FB]">
                      {stage.label}
                    </span>
                  </span>
                  <ArrowRight
                    size={15}
                    className={active ? "text-[#7194FF]" : "text-[#46505E]"}
                  />
                </button>
              );
            })}
          </div>
          <p className="mt-4 text-[10px] leading-5 text-[#6F7A8A]">
            Select any stage to understand its role. This is a conceptual
            workflow, not a live connected system.
          </p>
        </div>

        <motion.div
          key={current.number}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="flex min-w-0 flex-col justify-center rounded-xl border border-[#202936] bg-[#0D1118] p-5 sm:p-6"
        >
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#4F7CFF]/25 bg-[#4F7CFF]/[0.08] text-[#7194FF]">
              <current.icon size={20} />
            </div>
            <div>
              <p className="text-[9px] font-semibold uppercase tracking-[0.14em] text-[#7194FF]">
                {current.label}
              </p>
              <h3 className="mt-1 text-lg font-semibold text-[#F4F7FB]">
                {current.title}
              </h3>
            </div>
          </div>

          <p className="mt-5 text-sm leading-7 text-[#A7B0BF]">
            {current.description}
          </p>

          <div className="mt-5 rounded-lg border border-[#202936] bg-[#080A0F] p-4">
            <p className="text-[9px] font-semibold uppercase tracking-[0.12em] text-[#6F7A8A]">
              Why this stage matters
            </p>
            <p className="mt-2 text-xs leading-6 text-[#DCE3ED]">
              {current.detail}
            </p>
          </div>

          <div className="mt-5 flex gap-2">
            {stages.map((stage, index) => (
              <div
                key={stage.number}
                className={[
                  "h-1 flex-1 rounded-full",
                  index <= activeStage ? "bg-[#4F7CFF]" : "bg-[#202936]",
                ].join(" ")}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default function AIAutomation() {
  const reduceMotion = useReducedMotion();

  return (
    <main className="min-h-screen overflow-hidden bg-[#080A0F] text-[#F4F7FB]">
      {/* HERO */}
      <section
        className="relative border-b border-[#171E28]"
        aria-labelledby="ai-automation-heading"
      >
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden="true"
        >
          <div className="absolute left-[-8%] top-[-15%] h-[420px] w-[420px] rounded-full bg-[#4F7CFF]/[0.09] blur-[130px]" />
          <div className="absolute right-[-5%] top-[12%] h-[340px] w-[340px] rounded-full bg-[#6D5CFF]/[0.05] blur-[120px]" />
          <div
            className="absolute inset-0 opacity-[0.025]"
            style={{
              backgroundImage:
                "linear-gradient(#A7B0BF 1px, transparent 1px), linear-gradient(90deg, #A7B0BF 1px, transparent 1px)",
              backgroundSize: "56px 56px",
              maskImage:
                "radial-gradient(ellipse at center, black, transparent 78%)",
            }}
          />
        </div>

        <div className="relative mx-auto grid max-w-[1280px] items-center gap-12 px-5 py-20 sm:px-7 sm:py-24 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14 lg:px-8 lg:py-28">
          <Reveal className="min-w-0">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-8 bg-[#4F7CFF]" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#7194FF]">
                AI Automation
              </span>
            </div>

            <h1
              id="ai-automation-heading"
              className="max-w-[680px] text-4xl font-semibold leading-[1.04] tracking-[-0.045em] sm:text-5xl lg:text-[62px]"
            >
              Turn repetitive work into{" "}
              <span className="text-[#7194FF]">intelligent workflows.</span>
            </h1>

            <p className="mt-6 max-w-[600px] text-base leading-7 text-[#A7B0BF] md:text-[18px] md:leading-8">
              We design automation around the way your business actually works —
              connecting repetitive tasks, business processes and useful AI
              capabilities into clearer workflows.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/start-project"
                className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-[#4F7CFF] px-6 text-sm font-semibold text-white shadow-[0_0_30px_rgba(79,124,255,0.13)] transition hover:-translate-y-0.5 hover:bg-[#5D87FF] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7194FF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#080A0F]"
              >
                Automate a Process
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
              <a
                href="#automation-areas"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-[#202936] bg-[#0D1118] px-6 text-sm font-semibold text-[#F4F7FB] transition hover:border-[#4F7CFF]/40 hover:bg-[#121821] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7194FF]"
              >
                Explore Automation
                <ArrowDown size={16} />
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-x-5 gap-y-3 text-[11px] text-[#A7B0BF]">
              {[
                "Workflow-first",
                "AI where useful",
                "Built around your process",
              ].map((item) => (
                <span key={item} className="flex items-center gap-2">
                  <Check size={14} className="text-[#38D9C5]" />
                  {item}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.08} className="min-w-0">
            <AIAutomationShowcase />
          </Reveal>
        </div>
      </section>

      {/* BUSINESS CONTEXT */}
      <section
        id="business-context"
        className="border-b border-[#171E28] bg-[#0D1118]/45"
      >
        <div className="mx-auto max-w-[1180px] px-5 py-20 sm:px-7 sm:py-24 lg:px-8 lg:py-28">
          <Reveal className="max-w-[900px]">
            <SectionLabel>Business Context</SectionLabel>
            <h2 className="text-3xl font-semibold leading-[1.08] tracking-[-0.04em] sm:text-4xl lg:text-[54px]">
              Your team shouldn't spend valuable time doing work that{" "}
              <span className="text-[#7194FF]">software can handle.</span>
            </h2>
            <p className="mt-6 max-w-[720px] text-base leading-8 text-[#A7B0BF] md:text-[17px]">
              Good automation starts with the business process, not a technology
              trend. We look at where information enters, what your team
              repeatedly does, where decisions happen and what should happen
              next.
            </p>
          </Reveal>
        </div>
      </section>

      {/* CHALLENGE */}
      <section className="border-b border-[#171E28]">
        <div className="mx-auto grid max-w-[1180px] gap-10 px-5 py-20 sm:px-7 sm:py-24 lg:grid-cols-[0.8fr_1.2fr] lg:items-start lg:gap-16 lg:px-8 lg:py-28">
          <Reveal>
            <SectionLabel>The Challenge</SectionLabel>
            <h2 className="text-3xl font-semibold leading-[1.08] tracking-[-0.035em] sm:text-4xl">
              Manual work quietly{" "}
              <span className="text-[#7194FF]">slows businesses down.</span>
            </h2>
            <p className="mt-5 max-w-[540px] text-base leading-7 text-[#A7B0BF]">
              Repetitive data entry, follow-ups, customer messages and
              disconnected processes can consume time that teams could spend on
              higher-value work.
            </p>
          </Reveal>

          <div className="grid gap-3 sm:grid-cols-2">
            {challenges.map((item, index) => (
              <Reveal key={item} delay={index * 0.035}>
                <div className="flex min-h-[76px] items-center gap-3 rounded-xl border border-[#202936] bg-[#0D1118] px-4 sm:px-5">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#4F7CFF]/[0.08] text-[#7194FF]">
                    <Check size={14} />
                  </span>
                  <span className="text-sm font-medium leading-6 text-[#DCE3ED]">
                    {item}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SOLUTION AREAS */}
      <section
        id="automation-areas"
        className="scroll-mt-16 border-b border-[#171E28] bg-[#0D1118]/45"
        aria-labelledby="automation-areas-heading"
      >
        <div className="mx-auto max-w-[1180px] px-5 py-20 sm:px-7 sm:py-24 lg:px-8 lg:py-28">
          <Reveal className="max-w-[760px]">
            <SectionLabel>What We Can Automate</SectionLabel>
            <h2
              id="automation-areas-heading"
              className="text-3xl font-semibold leading-[1.08] tracking-[-0.04em] sm:text-4xl lg:text-[52px]"
            >
              Automation should solve{" "}
              <span className="text-[#7194FF]">useful business problems.</span>
            </h2>
            <p className="mt-5 max-w-[680px] text-base leading-7 text-[#A7B0BF] md:text-[17px]">
              Explore the areas below to understand where automation may fit
              into your business. The right approach depends on your process,
              tools and requirements.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {automationAreas.map((item, index) => {
              const Icon = item.icon;

              return (
                <Reveal key={item.number} delay={index * 0.035}>
                  <article className="group flex h-full flex-col rounded-2xl border border-[#202936] bg-[#080A0F] p-5 transition-colors duration-200 hover:border-[#4F7CFF]/40 sm:p-6">
                    <div className="flex items-center justify-between">
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#4F7CFF]/20 bg-[#4F7CFF]/[0.07] text-[#7194FF]">
                        <Icon size={19} strokeWidth={1.7} />
                      </span>
                      <span className="text-[10px] font-medium tracking-[0.12em] text-[#46505E]">
                        {item.number}
                      </span>
                    </div>

                    <h3 className="mt-5 text-lg font-semibold tracking-[-0.02em] text-[#F4F7FB]">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-[#A7B0BF]">
                      {item.description}
                    </p>

                    <div className="mt-5 border-t border-[#202936] pt-4">
                      <p className="text-[9px] font-semibold uppercase tracking-[0.13em] text-[#6F7A8A]">
                        Example capabilities
                      </p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {item.examples.map((example) => (
                          <span
                            key={example}
                            className="rounded-md border border-[#202936] bg-[#0D1118] px-2.5 py-1.5 text-[10px] text-[#A7B0BF]"
                          >
                            {example}
                          </span>
                        ))}
                      </div>
                    </div>

                    <a
                      href="#automation-system"
                      className="mt-6 inline-flex items-center gap-2 self-start text-xs font-semibold text-[#7194FF] transition hover:text-[#A9BDFF] focus:outline-none focus-visible:underline"
                    >
                      See how it works
                      <ArrowRight size={14} />
                    </a>
                  </article>
                </Reveal>
              );
            })}
          </div>

          <Reveal delay={0.1} className="mt-8">
            <div className="flex flex-col gap-4 rounded-xl border border-[#202936] bg-[#080A0F] p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
              <div>
                <p className="text-sm font-semibold text-[#F4F7FB]">
                  Not sure which area fits your business?
                </p>
                <p className="mt-1 text-sm leading-6 text-[#A7B0BF]">
                  Start with the task or process that creates the most friction.
                </p>
              </div>
              <Link
                href="/start-project"
                className="inline-flex min-h-10 shrink-0 items-center justify-center gap-2 self-start rounded-lg border border-[#4F7CFF]/35 px-4 text-xs font-semibold text-[#F4F7FB] transition hover:bg-[#4F7CFF]/10 sm:self-auto"
              >
                Discuss Your Process
                <ArrowRight size={14} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* AUTOMATION SYSTEM */}
      <section
        id="automation-system"
        className="scroll-mt-16 border-b border-[#171E28]"
        aria-labelledby="automation-system-heading"
      >
        <div className="mx-auto max-w-[1180px] px-5 py-20 sm:px-7 sm:py-24 lg:px-8 lg:py-28">
          <Reveal className="max-w-[760px]">
            <SectionLabel>The Automation System</SectionLabel>
            <h2
              id="automation-system-heading"
              className="text-3xl font-semibold leading-[1.08] tracking-[-0.04em] sm:text-4xl lg:text-[52px]"
            >
              Turn a manual process into{" "}
              <span className="text-[#7194FF]">a connected workflow.</span>
            </h2>
            <p className="mt-5 max-w-[700px] text-base leading-7 text-[#A7B0BF] md:text-[17px]">
              Select each stage to see how information can move from an initial
              input to a useful business action. The exact design depends on the
              workflow being implemented.
            </p>
          </Reveal>

          <Reveal delay={0.08} className="mt-10">
            <AutomationSystemExperience />
          </Reveal>
        </div>
      </section>

      {/* HOW WE BUILD */}
      <section
        id="how-we-build"
        className="scroll-mt-16 border-b border-[#171E28] bg-[#0D1118]/45"
        aria-labelledby="how-we-build-heading"
      >
        <div className="mx-auto max-w-[1180px] px-5 py-20 sm:px-7 sm:py-24 lg:px-8 lg:py-28">
          <Reveal className="max-w-[760px]">
            <SectionLabel>How We Build</SectionLabel>
            <h2
              id="how-we-build-heading"
              className="text-3xl font-semibold leading-[1.08] tracking-[-0.04em] sm:text-4xl lg:text-[52px]"
            >
              Start with the workflow.{" "}
              <span className="text-[#7194FF]">
                Then build the right system.
              </span>
            </h2>
            <p className="mt-5 max-w-[700px] text-base leading-7 text-[#A7B0BF] md:text-[17px]">
              Good automation isn't about adding AI everywhere. We first
              understand the process, then identify where software, workflow
              logic and AI can help.
            </p>
          </Reveal>

          <Reveal delay={0.08} className="mt-10">
            <AutomationBuildProcess />
          </Reveal>
        </div>
      </section>

      {/* WHY IT WORKS */}
      <section
        id="why-it-works"
        className="scroll-mt-16 border-b border-[#171E28]"
        aria-labelledby="why-it-works-heading"
      >
        <div className="mx-auto max-w-[1180px] px-5 py-20 sm:px-7 sm:py-24 lg:px-8 lg:py-28">
          <Reveal className="mx-auto max-w-[780px] text-center">
            <SectionLabel>Why It Works</SectionLabel>
            <h2
              id="why-it-works-heading"
              className="text-3xl font-semibold leading-[1.08] tracking-[-0.04em] sm:text-4xl lg:text-[52px]"
            >
              AI should do something{" "}
              <span className="text-[#7194FF]">useful.</span>
            </h2>
            <p className="mx-auto mt-5 max-w-[680px] text-base leading-7 text-[#A7B0BF] md:text-[17px]">
              A good solution combines a real business need with clear workflow
              logic, appropriate technology and a process people can understand.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {principles.map((item, index) => {
              const Icon = item.icon;

              return (
                <Reveal key={item.title} delay={index * 0.04}>
                  <article className="relative h-full overflow-hidden rounded-2xl border border-[#202936] bg-[#0D1118] p-5 sm:p-7">
                    <span className="pointer-events-none absolute right-4 top-2 text-6xl font-bold tracking-[-0.06em] text-[#4F7CFF]/[0.06]">
                      0{index + 1}
                    </span>
                    <div className="relative">
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#4F7CFF]/20 bg-[#4F7CFF]/[0.07] text-[#7194FF]">
                        <Icon size={19} strokeWidth={1.7} />
                      </span>
                      <h3 className="mt-5 text-lg font-semibold text-[#F4F7FB]">
                        {item.title}
                      </h3>
                      <p className="mt-3 max-w-[480px] text-sm leading-6 text-[#A7B0BF]">
                        {item.description}
                      </p>
                      <div className="mt-6 rounded-lg border border-[#202936] bg-[#080A0F] px-4 py-3">
                        <span className="text-[10px] font-semibold tracking-[0.1em] text-[#7194FF]">
                          {item.visual}
                        </span>
                      </div>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>

          <Reveal delay={0.1} className="mt-8">
            <div className="flex flex-col gap-3 border-t border-[#202936] pt-5 sm:flex-row sm:items-start sm:justify-between">
              <p className="max-w-[720px] text-[11px] leading-5 text-[#6F7A8A]">
                Every business process is different. The actual impact depends
                on what is automated, how the workflow is designed, the systems
                involved and how the solution is adopted.
              </p>
              <span className="shrink-0 text-[9px] font-semibold uppercase tracking-[0.12em] text-[#6F7A8A]">
                Process first · Technology second
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* OUTCOMES */}
      <section
        id="automation-benefits"
        className="scroll-mt-16 border-b border-[#171E28] bg-[#0D1118]/45"
      >
        <div className="mx-auto max-w-[1180px] px-5 py-20 sm:px-7 sm:py-24 lg:px-8 lg:py-28">
          <Reveal className="max-w-[760px]">
            <SectionLabel>Intended Benefits</SectionLabel>
            <h2 className="text-3xl font-semibold leading-[1.08] tracking-[-0.04em] sm:text-4xl lg:text-[48px]">
              Give your team more room for{" "}
              <span className="text-[#7194FF]">meaningful work.</span>
            </h2>
            <p className="mt-5 max-w-[700px] text-base leading-7 text-[#A7B0BF]">
              Well-designed automation can help make day-to-day operations
              easier to manage. The benefits below are goals to evaluate, not
              guaranteed results.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Clock3,
                title: "Less manual effort",
                description:
                  "Reduce repetitive handling and unnecessary task switching.",
              },
              {
                icon: Zap,
                title: "Clearer next steps",
                description:
                  "Help information move through a process with fewer avoidable delays.",
              },
              {
                icon: Database,
                title: "Better visibility",
                description:
                  "Make records and process states easier to follow across tools.",
              },
              {
                icon: Check,
                title: "Consistent follow-up",
                description:
                  "Create structured next actions instead of relying only on memory.",
              },
            ].map((item, index) => {
              const Icon = item.icon;

              return (
                <Reveal key={item.title} delay={index * 0.04}>
                  <article className="h-full rounded-xl border border-[#202936] bg-[#080A0F] p-5 transition-colors hover:border-[#4F7CFF]/30">
                    <Icon size={20} className="text-[#7194FF]" />
                    <h3 className="mt-5 text-base font-semibold text-[#F4F7FB]">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-[#A7B0BF]">
                      {item.description}
                    </p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section
        id="start-automation"
        className="relative overflow-hidden py-20 sm:py-24 lg:py-32"
        aria-labelledby="final-cta-heading"
      >
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden="true"
        >
          <div className="absolute left-1/2 top-1/2 h-[460px] w-[460px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#4F7CFF]/[0.07] blur-[120px]" />
          <div
            className="absolute inset-0 opacity-[0.025]"
            style={{
              backgroundImage:
                "linear-gradient(#4F7CFF 1px, transparent 1px), linear-gradient(90deg, #4F7CFF 1px, transparent 1px)",
              backgroundSize: "60px 60px",
              maskImage:
                "radial-gradient(circle at center, black, transparent 75%)",
            }}
          />
        </div>

        <div className="relative mx-auto max-w-[1180px] px-5 sm:px-7 lg:px-8">
          <Reveal>
            <div className="relative overflow-hidden rounded-2xl border border-[#4F7CFF]/25 bg-[#0D1118] shadow-[0_30px_100px_rgba(0,0,0,0.22)] sm:rounded-[28px]">
              <div className="flex items-center justify-between border-b border-[#202936] px-5 py-4 sm:px-7">
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#38D9C5]" />
                  <span className="text-[9px] font-semibold uppercase tracking-[0.15em] text-[#6F7A8A]">
                    Start with the process
                  </span>
                </div>
                <span className="text-[9px] uppercase tracking-[0.12em] text-[#6F7A8A]">
                  Next step
                </span>
              </div>

              <div className="px-6 py-12 text-center sm:px-10 sm:py-16 lg:px-20 lg:py-20">
                <div className="mx-auto max-w-[820px]">
                  <SectionLabel>Ready to Automate?</SectionLabel>
                  <h2
                    id="final-cta-heading"
                    className="text-3xl font-semibold leading-[1.05] tracking-[-0.04em] sm:text-4xl lg:text-[58px]"
                  >
                    Start with the problem.
                    <span className="block text-[#7194FF]">
                      We'll explore the right system.
                    </span>
                  </h2>
                  <p className="mx-auto mt-5 max-w-[650px] text-base leading-7 text-[#A7B0BF] md:text-[17px]">
                    You don't need to know exactly what should be automated.
                    Tell us what feels repetitive, slow, disconnected or
                    difficult to manage, and we'll explore a suitable approach.
                  </p>
                  <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                    <Link
                      href="/start-project"
                      className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-[#4F7CFF] px-7 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#5D87FF] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7194FF]"
                    >
                      Tell Us What You Need
                      <ArrowRight
                        size={16}
                        className="transition-transform group-hover:translate-x-1"
                      />
                    </Link>
                    <a
                      href="#automation-areas"
                      className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-[#202936] px-6 text-sm font-semibold text-[#F4F7FB] transition hover:border-[#4F7CFF]/40 hover:bg-[#121821]"
                    >
                      Explore Capabilities
                      <ArrowDown size={16} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
