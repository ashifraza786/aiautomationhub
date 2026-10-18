import { useState, type ReactNode } from "react";
import { Link } from "wouter";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  Bot,
  Check,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Clock3,
  Database,
  FileText,
  GitBranch,
  MessageSquare,
  Settings2,
  ShieldCheck,
  Sparkles,
  Workflow,
  Zap,
} from "lucide-react";

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
    number: "01",
    icon: Workflow,
    title: "Business Workflows",
    description:
      "Connect repetitive, multi-step tasks into structured processes with clear triggers, actions and hand-offs.",
    examples: ["Task routing", "Approvals", "Status updates"],
  },
  {
    number: "02",
    icon: MessageSquare,
    title: "Customer Communication",
    description:
      "Organize incoming messages and follow-ups so enquiries reach the right next step.",
    examples: ["Message handling", "Follow-up flows", "Response routing"],
  },
  {
    number: "03",
    icon: Bot,
    title: "AI Assistants & Agents",
    description:
      "Use AI to interpret information, answer defined questions and support specific business tasks.",
    examples: ["Information assistance", "Enquiry triage", "Task support"],
  },
  {
    number: "04",
    icon: FileText,
    title: "Document & Data Work",
    description:
      "Reduce repetitive information handling by extracting, organizing and routing relevant data.",
    examples: ["Document processing", "Data extraction", "Record creation"],
  },
  {
    number: "05",
    icon: GitBranch,
    title: "Lead Processes",
    description:
      "Create a clearer journey from a new enquiry to qualification, follow-up and sales hand-off.",
    examples: ["Lead capture", "Qualification", "CRM updates"],
  },
  {
    number: "06",
    icon: Settings2,
    title: "Internal Operations",
    description:
      "Connect everyday business tools and standardize repetitive operational tasks.",
    examples: ["System integrations", "Task assignment", "Process tracking"],
  },
];

const processSteps = [
  {
    number: "01",
    label: "Discover",
    icon: MessageSquare,
    summary: "Understand the real business problem.",
    description:
      "We explore how the business works, who is involved, which tools are used and where repetitive effort or delays occur.",
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
    label: "Design",
    icon: GitBranch,
    summary: "Map the right solution before building.",
    description:
      "We map inputs, decisions, actions and hand-offs to identify what can be automated and where people should remain involved.",
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
    icon: Workflow,
    summary: "Build around the actual requirement.",
    description:
      "We select a suitable combination of workflow logic, integrations, software and AI capabilities based on the business need.",
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
    icon: Sparkles,
    summary: "Refine the workflow as needs evolve.",
    description:
      "The solution can be tested against real use, reviewed after implementation and refined as requirements change.",
    points: [
      "Review process performance",
      "Identify friction points",
      "Refine rules and hand-offs",
      "Expand when appropriate",
    ],
    output: "A foundation for ongoing improvement",
  },
];

const principles = [
  {
    number: "01",
    icon: CheckCircle2,
    title: "Solve the right problem",
    description:
      "Start with a genuine operational need instead of adding technology without a clear purpose.",
    visual: "PROBLEM → PURPOSE",
  },
  {
    number: "02",
    icon: Zap,
    title: "Use AI where it helps",
    description:
      "Combine predictable workflow rules with AI for tasks that benefit from interpretation or flexible responses.",
    visual: "RULES + USEFUL AI",
  },
  {
    number: "03",
    icon: ShieldCheck,
    title: "Keep the process clear",
    description:
      "Make inputs, actions, decisions and human hand-offs understandable to the people using the system.",
    visual: "INPUT → LOGIC → ACTION",
  },
  {
    number: "04",
    icon: GitBranch,
    title: "Build for change",
    description:
      "Create a practical foundation that can evolve as workflows and business requirements change.",
    visual: "BUILD → REVIEW → IMPROVE",
  },
];

const intendedBenefits = [
  {
    icon: Clock3,
    title: "Less manual effort",
    description: "Reduce repetitive handling and unnecessary task switching.",
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
    icon: CheckCircle2,
    title: "Consistent follow-up",
    description:
      "Create structured next actions instead of relying only on memory.",
  },
];

const reliabilityItems = [
  {
    title: "Access controls",
    description: "Restrict actions to approved permissions and roles.",
  },
  {
    title: "Human hand-off",
    description: "Escalate ambiguous requests and sensitive decisions.",
  },
  {
    title: "Traceability",
    description: "Record relevant actions, outcomes and errors.",
  },
  {
    title: "Measured outcomes",
    description: "Define baseline KPIs before implementation begins.",
  },
];

function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 14 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{
        duration: reduceMotion ? 0 : 0.35,
        delay: reduceMotion ? 0 : delay,
        ease: "easeOut",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <p className="mb-4 text-xs font-medium tracking-[0.04em] text-[#004225] sm:text-[13px]">
      {children}
    </p>
  );
}

function SectionHeading({
  eyebrow,
  title,
  description,
  centered = false,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  centered?: boolean;
}) {
  return (
    <div className={`max-w-3xl ${centered ? "mx-auto text-center" : ""}`}>
      <SectionLabel>{eyebrow}</SectionLabel>
      <h2 className="text-[32px] font-semibold leading-[1.12] tracking-[-0.035em] text-[#24231F] sm:text-4xl lg:text-[44px]">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-[15px] leading-7 text-[#5F5B53] sm:text-lg sm:leading-8">
          {description}
        </p>
      )}
    </div>
  );
}

function PrimaryButton({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <Link
      href={href}
      className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#004225] px-5 py-3 text-[15px] font-medium text-white transition-colors hover:bg-[#00351E] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#004225] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F4F0E8]"
    >
      {children}
    </Link>
  );
}

function SecondaryButton({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-[#DAD5CA] bg-white px-5 py-3 text-[15px] font-medium text-[#24231F] transition-colors hover:border-[#004225]/40 hover:bg-[#FAF9F6] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#004225] focus-visible:ring-offset-2"
    >
      {children}
    </a>
  );
}

function ArchitectureVisual() {
  const architectureItems = [
    {
      title: "Input channels",
      description: "Forms, email, messaging",
      icon: MessageSquare,
    },
    {
      title: "AI layer",
      description: "Extract, classify, summarize",
      icon: Bot,
    },
    {
      title: "Rules & review",
      description: "Conditions, approvals",
      icon: GitBranch,
    },
    {
      title: "Business tools",
      description: "CRM, ERP, internal apps",
      icon: Database,
    },
  ];

  return (
    <div className="overflow-hidden rounded-2xl border border-[#E3DDD2] bg-white shadow-[0_12px_40px_rgba(36,35,31,0.05)]">
      <div className="flex items-center justify-between gap-3 border-b border-[#EAE5DC] px-4 py-4 sm:px-6">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#D9E5DB] bg-[#EAF1EB] text-[#004225]">
            <Workflow size={20} />
          </div>
          <div>
            <p className="text-sm font-semibold text-[#24231F] sm:text-base">
              Workflow architecture
            </p>
            <p className="mt-1 text-xs text-[#5F5B53]">Example system design</p>
          </div>
        </div>
        <span className="rounded-lg bg-[#EAF1EB] px-3 py-1.5 text-xs font-medium text-[#004225]">
          Concept
        </span>
      </div>

      <div className="p-4 sm:p-6">
        <div className="mb-5 flex items-center justify-between gap-3">
          <p className="text-xs font-medium text-[#5F5B53]">Process overview</p>
          <span className="text-xs text-[#777167]">Illustrative flow</span>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {architectureItems.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-xl border border-[#E7E2D8] bg-[#FAF9F6] p-3.5 sm:p-5"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl border border-[#D9E5DB] bg-[#EAF1EB] text-[#004225]">
                  <Icon size={19} />
                </div>
                <h3 className="text-sm font-semibold text-[#24231F]">
                  {item.title}
                </h3>
                <p className="mt-2 text-xs leading-5 text-[#5F5B53] sm:text-sm">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="my-5 flex items-center gap-3">
          <div className="h-px flex-1 bg-[#E4DFD5]" />
          <span className="flex items-center gap-2 text-xs text-[#5F5B53]">
            <Zap size={15} className="text-[#004225]" />
            Connected actions
          </span>
          <div className="h-px flex-1 bg-[#E4DFD5]" />
        </div>

        <div className="flex items-start gap-3 rounded-xl border border-[#D9E5DB] bg-[#F2F6F1] p-4">
          <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-[#004225]" />
          <div>
            <p className="text-sm font-semibold text-[#24231F]">
              Traceable outcomes
            </p>
            <p className="mt-1 text-xs leading-6 text-[#5F5B53] sm:text-sm">
              Record actions, monitor status and route uncertain cases to a
              person instead of guessing.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-2 border-t border-[#EAE5DC] px-4 py-3.5 sm:px-6">
        <span className="text-xs text-[#777167]">
          Illustrative architecture
        </span>
        <span className="flex items-center gap-2 text-xs text-[#5F5B53]">
          <span className="h-2 w-2 rounded-full bg-[#004225]" />
          Human-in-the-loop
        </span>
      </div>
    </div>
  );
}

function AutomationSystemExperience() {
  const [activeStage, setActiveStage] = useState(0);
  const reduceMotion = useReducedMotion();

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
  const CurrentIcon = current.icon;

  return (
    <div className="overflow-hidden rounded-2xl border border-[#E3DDD2] bg-white shadow-[0_12px_40px_rgba(36,35,31,0.04)]">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#EAE5DC] px-5 py-4 sm:px-7">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#D9E5DB] bg-[#EAF1EB] text-[#004225]">
            <Workflow size={17} />
          </div>
          <div>
            <p className="text-xs text-[#777167]">Workflow blueprint</p>
            <p className="mt-1 text-sm font-semibold text-[#24231F]">
              Explore each stage
            </p>
          </div>
        </div>
        <span className="rounded-lg bg-[#EAF1EB] px-3 py-1.5 text-xs font-medium text-[#004225]">
          Stage {activeStage + 1} of {stages.length}
        </span>
      </div>

      <div className="grid md:grid-cols-[0.78fr_1.22fr]">
        <div className="border-b border-[#EAE5DC] p-4 sm:p-5 md:border-b-0 md:border-r">
          <div className="space-y-2">
            {stages.map((stage, index) => {
              const StepIcon = stage.icon;
              const active = index === activeStage;

              return (
                <button
                  key={stage.number}
                  type="button"
                  onClick={() => setActiveStage(index)}
                  aria-pressed={active}
                  className={[
                    "flex w-full items-center gap-3 rounded-xl border p-3 text-left transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#004225]",
                    active
                      ? "border-[#A9C1AD] bg-[#F2F6F1]"
                      : "border-transparent bg-[#FAF9F6] hover:border-[#E3DDD2]",
                  ].join(" ")}
                >
                  <span
                    className={[
                      "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border",
                      active
                        ? "border-[#D9E5DB] bg-white text-[#004225]"
                        : "border-[#E3DDD2] bg-white text-[#777167]",
                    ].join(" ")}
                  >
                    <StepIcon size={17} strokeWidth={1.7} />
                  </span>

                  <span className="min-w-0 flex-1">
                    <span className="block text-xs text-[#777167]">
                      Stage {stage.number}
                    </span>
                    <span
                      className={[
                        "mt-1 block text-sm font-semibold",
                        active ? "text-[#004225]" : "text-[#24231F]",
                      ].join(" ")}
                    >
                      {stage.label}
                    </span>
                  </span>

                  <ChevronRight
                    size={15}
                    className={active ? "text-[#004225]" : "text-[#B2ACA1]"}
                  />
                </button>
              );
            })}
          </div>

          <p className="mt-4 text-xs leading-6 text-[#777167]">
            Select a stage to explore its role in the proposed workflow.
          </p>
        </div>

        <motion.div
          key={current.number}
          initial={reduceMotion ? false : { opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: reduceMotion ? 0 : 0.22 }}
          className="flex min-w-0 flex-col justify-center p-5 sm:p-7 lg:p-9"
        >
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#D9E5DB] bg-[#EAF1EB] text-[#004225]">
              <CurrentIcon size={20} strokeWidth={1.7} />
            </div>
            <div>
              <p className="text-xs font-medium text-[#004225]">
                {current.label}
              </p>
              <h3 className="mt-1 text-xl font-semibold tracking-[-0.025em] text-[#24231F] sm:text-2xl">
                {current.title}
              </h3>
            </div>
          </div>

          <p className="mt-5 text-sm leading-7 text-[#5F5B53] sm:text-base">
            {current.description}
          </p>

          <div className="mt-6 rounded-xl border border-[#E3DDD2] bg-[#FAF9F6] p-4">
            <p className="text-xs font-medium text-[#777167]">
              Why this stage matters
            </p>
            <p className="mt-2 text-sm leading-6 text-[#24231F]">
              {current.detail}
            </p>
          </div>

          <div className="mt-6 flex items-center justify-between gap-3 border-t border-[#EAE5DC] pt-5">
            <button
              type="button"
              onClick={() => setActiveStage((value) => Math.max(0, value - 1))}
              disabled={activeStage === 0}
              className="inline-flex min-h-10 items-center gap-2 rounded-lg border border-[#DAD5CA] px-3 text-xs font-medium text-[#24231F] transition hover:border-[#004225]/40 disabled:cursor-not-allowed disabled:opacity-35"
            >
              <ChevronLeft size={15} />
              Previous
            </button>

            <div className="flex items-center gap-1.5">
              {stages.map((stage, index) => (
                <button
                  key={stage.number}
                  type="button"
                  onClick={() => setActiveStage(index)}
                  aria-label={`Go to ${stage.label}`}
                  aria-current={activeStage === index ? "step" : undefined}
                  className={[
                    "h-1.5 rounded-full transition-all",
                    activeStage === index
                      ? "w-6 bg-[#004225]"
                      : "w-1.5 bg-[#DAD5CA] hover:bg-[#A9C1AD]",
                  ].join(" ")}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={() =>
                setActiveStage((value) =>
                  Math.min(stages.length - 1, value + 1),
                )
              }
              disabled={activeStage === stages.length - 1}
              className="inline-flex min-h-10 items-center gap-2 rounded-lg bg-[#004225] px-3 text-xs font-medium text-white transition hover:bg-[#00351E] disabled:cursor-not-allowed disabled:opacity-35"
            >
              Next
              <ChevronRight size={15} />
            </button>
          </div>
        </motion.div>
      </div>

      <div className="border-t border-[#EAE5DC] bg-[#FAF9F6] px-5 py-3.5 sm:px-7">
        <p className="text-xs leading-5 text-[#777167]">
          Conceptual workflow only. Actual integrations and automation behaviour
          depend on the selected project requirements.
        </p>
      </div>
    </div>
  );
}

function AutomationBuildProcess() {
  const [activeStep, setActiveStep] = useState(0);
  const reduceMotion = useReducedMotion();
  const step = processSteps[activeStep];
  const Icon = step.icon;

  function goToStep(next: number) {
    setActiveStep(Math.max(0, Math.min(processSteps.length - 1, next)));
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-[#E3DDD2] bg-white shadow-[0_12px_40px_rgba(36,35,31,0.04)]">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#EAE5DC] px-5 py-4 sm:px-7">
        <div>
          <p className="text-xs text-[#777167]">Our working method</p>
          <p className="mt-1 text-sm font-semibold text-[#24231F]">
            From business problem to useful workflow
          </p>
        </div>
        <span className="rounded-lg bg-[#EAF1EB] px-3 py-1.5 text-xs font-medium text-[#004225]">
          Step {activeStep + 1} of {processSteps.length}
        </span>
      </div>

      <div className="grid md:grid-cols-[0.78fr_1.22fr]">
        <div className="border-b border-[#EAE5DC] p-4 sm:p-5 md:border-b-0 md:border-r">
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
                    "flex w-full items-center gap-3 rounded-xl border p-3 text-left transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#004225]",
                    active
                      ? "border-[#A9C1AD] bg-[#F2F6F1]"
                      : "border-transparent bg-[#FAF9F6] hover:border-[#E3DDD2]",
                  ].join(" ")}
                >
                  <span
                    className={[
                      "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border",
                      active
                        ? "border-[#D9E5DB] bg-white text-[#004225]"
                        : "border-[#E3DDD2] bg-white text-[#777167]",
                    ].join(" ")}
                  >
                    <StepIcon size={17} strokeWidth={1.7} />
                  </span>

                  <span className="min-w-0 flex-1">
                    <span className="block text-xs text-[#777167]">
                      Step {item.number}
                    </span>
                    <span
                      className={[
                        "mt-1 block text-sm font-semibold",
                        active ? "text-[#004225]" : "text-[#24231F]",
                      ].join(" ")}
                    >
                      {item.label}
                    </span>
                  </span>

                  <ChevronRight
                    size={15}
                    className={active ? "text-[#004225]" : "text-[#B2ACA1]"}
                  />
                </button>
              );
            })}
          </div>
        </div>

        <motion.div
          key={step.number}
          initial={reduceMotion ? false : { opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: reduceMotion ? 0 : 0.22 }}
          className="flex min-w-0 flex-col p-5 sm:p-7 lg:p-9"
        >
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#D9E5DB] bg-[#EAF1EB] text-[#004225]">
              <Icon size={20} strokeWidth={1.7} />
            </div>
            <div>
              <p className="text-xs font-medium text-[#004225]">
                {step.number} / {step.label}
              </p>
              <h3 className="mt-1 text-xl font-semibold tracking-[-0.025em] text-[#24231F] sm:text-2xl">
                {step.summary}
              </h3>
            </div>
          </div>

          <p className="mt-5 text-sm leading-7 text-[#5F5B53] sm:text-base">
            {step.description}
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {step.points.map((point) => (
              <div
                key={point}
                className="flex items-start gap-2.5 rounded-lg border border-[#EAE5DC] bg-[#FAF9F6] p-3"
              >
                <Check size={14} className="mt-0.5 shrink-0 text-[#004225]" />
                <span className="text-xs leading-5 text-[#5F5B53]">
                  {point}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-xl border border-[#D9E5DB] bg-[#F2F6F1] p-4">
            <p className="text-xs font-medium text-[#004225]">Stage output</p>
            <p className="mt-2 text-sm font-semibold text-[#24231F]">
              {step.output}
            </p>
          </div>

          <div className="mt-6 flex items-center justify-between gap-3 border-t border-[#EAE5DC] pt-5">
            <button
              type="button"
              onClick={() => goToStep(activeStep - 1)}
              disabled={activeStep === 0}
              className="inline-flex min-h-10 items-center gap-2 rounded-lg border border-[#DAD5CA] px-3 text-xs font-medium text-[#24231F] transition hover:border-[#004225]/40 disabled:cursor-not-allowed disabled:opacity-35"
            >
              <ChevronLeft size={15} />
              Previous
            </button>

            <div className="flex items-center gap-1.5">
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
                      ? "w-6 bg-[#004225]"
                      : "w-1.5 bg-[#DAD5CA] hover:bg-[#A9C1AD]",
                  ].join(" ")}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={() => goToStep(activeStep + 1)}
              disabled={activeStep === processSteps.length - 1}
              className="inline-flex min-h-10 items-center gap-2 rounded-lg bg-[#004225] px-3 text-xs font-medium text-white transition hover:bg-[#00351E] disabled:cursor-not-allowed disabled:opacity-35"
            >
              Next
              <ChevronRight size={15} />
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default function AIAutomation() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#F4F0E8] font-sans text-[#24231F]">
      {/* 01 — HERO */}
      <section
        className="border-b border-[#E3DDD2] bg-[#F4F0E8]"
        aria-labelledby="ai-automation-heading"
      >
        <div className="mx-auto grid max-w-[1280px] items-center gap-12 px-5 py-16 sm:px-7 sm:py-20 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14 lg:px-8 lg:py-24">
          <Reveal className="min-w-0">
            <div className="mb-6 inline-flex items-center gap-2 rounded-lg border border-[#D9E5DB] bg-white px-3 py-2">
              <span className="h-2 w-2 rounded-full bg-[#004225]" />
              <span className="text-xs font-medium text-[#004225]">
                AI Automation
              </span>
            </div>

            <h1
              id="ai-automation-heading"
              className="max-w-[680px] text-[40px] font-semibold leading-[1.04] tracking-[-0.045em] text-[#24231F] sm:text-5xl lg:text-[64px]"
            >
              Turn repetitive work into
              <span className="mt-1 block text-[#004225]">
                intelligent workflows.
              </span>
            </h1>

            <p className="mt-6 max-w-[610px] text-base leading-7 text-[#5F5B53] sm:text-lg sm:leading-8">
              We design automation around the way your business actually works —
              connecting repetitive tasks, business processes and useful AI
              capabilities into clearer workflows.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <PrimaryButton href="/start-project">
                Automate a Process
                <ArrowRight size={16} />
              </PrimaryButton>
              <SecondaryButton href="#automation-areas">
                Explore Automation
                <ArrowDown size={16} />
              </SecondaryButton>
            </div>

            <div className="mt-8 flex flex-wrap gap-x-5 gap-y-3 border-t border-[#DED8CD] pt-5 text-xs text-[#5F5B53]">
              {[
                "Workflow-first",
                "AI where useful",
                "Built around your process",
              ].map((item) => (
                <span key={item} className="flex items-center gap-2">
                  <Check size={14} className="text-[#004225]" />
                  {item}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.08} className="min-w-0">
            <ArchitectureVisual />
          </Reveal>
        </div>
      </section>

      {/* 02 — BUSINESS CONTEXT */}
      <section className="border-b border-[#E3DDD2] bg-white">
        <div className="mx-auto max-w-[1180px] px-5 py-20 sm:px-7 sm:py-24 lg:px-8 lg:py-28">
          <Reveal className="max-w-[900px]">
            <SectionLabel>Business context</SectionLabel>
            <h2 className="text-[32px] font-semibold leading-[1.12] tracking-[-0.035em] text-[#24231F] sm:text-4xl lg:text-[44px]">
              Your team should spend more time on work that{" "}
              <span className="text-[#004225]">
                moves the business forward.
              </span>
            </h2>
            <p className="mt-6 max-w-[720px] text-[15px] leading-7 text-[#5F5B53] sm:text-lg sm:leading-8">
              Good automation starts with the business process, not a technology
              trend. We look at where information enters, what your team
              repeatedly does, where decisions happen and what should happen
              next.
            </p>
          </Reveal>

          <Reveal delay={0.05} className="mt-10">
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                {
                  number: "01",
                  title: "Understand the work",
                  description:
                    "See how people, information and tools interact today.",
                },
                {
                  number: "02",
                  title: "Find the friction",
                  description:
                    "Identify repetition, delays, manual hand-offs and gaps.",
                },
                {
                  number: "03",
                  title: "Design the system",
                  description:
                    "Choose a practical combination of software, rules and AI.",
                },
              ].map((item) => (
                <div
                  key={item.number}
                  className="rounded-xl border border-[#E3DDD2] bg-[#FAF9F6] p-5 sm:p-6"
                >
                  <p className="text-xs font-medium text-[#004225]">
                    {item.number}
                  </p>
                  <h3 className="mt-4 text-lg font-semibold text-[#24231F]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-[#5F5B53]">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* 03 — THE CHALLENGE */}
      <section className="border-b border-[#E3DDD2]">
        <div className="mx-auto grid max-w-[1180px] gap-10 px-5 py-20 sm:px-7 sm:py-24 lg:grid-cols-[0.8fr_1.2fr] lg:items-start lg:gap-16 lg:px-8 lg:py-28">
          <Reveal>
            <SectionHeading
              eyebrow="The challenge"
              title="Manual work quietly slows businesses down."
              description="Repetitive data entry, follow-ups, customer messages and disconnected processes can consume time that teams could spend on higher-value work."
            />
          </Reveal>

          <div className="grid gap-3 sm:grid-cols-2">
            {challenges.map((item, index) => (
              <Reveal key={item} delay={index * 0.025}>
                <div className="flex min-h-[76px] items-center gap-3 rounded-xl border border-[#E3DDD2] bg-white px-4 sm:px-5">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-[#D9E5DB] bg-[#EAF1EB] text-[#004225]">
                    <Check size={15} />
                  </span>
                  <span className="text-sm font-medium leading-6 text-[#24231F]">
                    {item}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 04 — AUTOMATION AREAS */}
      <section
        id="automation-areas"
        className="scroll-mt-20 border-b border-[#E3DDD2] bg-[#EEE9DF]"
        aria-labelledby="automation-areas-heading"
      >
        <div className="mx-auto max-w-[1180px] px-5 py-20 sm:px-7 sm:py-24 lg:px-8 lg:py-28">
          <Reveal>
            <SectionHeading
              eyebrow="What we can automate"
              title="Automation should solve useful business problems."
              description="Explore the areas below to understand where automation may fit into your business. The right approach depends on your process, tools and requirements."
            />
          </Reveal>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {automationAreas.map((item, index) => {
              const Icon = item.icon;

              return (
                <Reveal key={item.number} delay={index * 0.025}>
                  <article className="group flex h-full flex-col rounded-2xl border border-[#E3DDD2] bg-white p-5 transition-colors hover:border-[#A9C1AD] sm:p-6">
                    <div className="flex items-center justify-between">
                      <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#D9E5DB] bg-[#EAF1EB] text-[#004225]">
                        <Icon size={20} strokeWidth={1.7} />
                      </span>
                      <span className="text-xs font-medium text-[#777167]">
                        {item.number}
                      </span>
                    </div>

                    <h3 className="mt-5 text-[19px] font-semibold tracking-[-0.02em] text-[#24231F] sm:text-[22px]">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-[#5F5B53]">
                      {item.description}
                    </p>

                    <div className="mt-5 border-t border-[#EAE5DC] pt-4">
                      <p className="text-xs font-medium text-[#777167]">
                        Example capabilities
                      </p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {item.examples.map((example) => (
                          <span
                            key={example}
                            className="rounded-lg border border-[#E3DDD2] bg-[#FAF9F6] px-2.5 py-1.5 text-xs text-[#5F5B53]"
                          >
                            {example}
                          </span>
                        ))}
                      </div>
                    </div>

                    <a
                      href="#automation-system"
                      className="mt-6 inline-flex items-center gap-2 self-start text-sm font-medium text-[#004225] transition-colors hover:text-[#326448] focus-visible:outline-none focus-visible:underline"
                    >
                      See how it works
                      <ArrowRight size={15} />
                    </a>
                  </article>
                </Reveal>
              );
            })}
          </div>

          <Reveal delay={0.06} className="mt-8">
            <div className="flex flex-col gap-4 rounded-xl border border-[#E3DDD2] bg-white p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
              <div>
                <p className="text-sm font-semibold text-[#24231F]">
                  Not sure which area fits your business?
                </p>
                <p className="mt-1 text-sm leading-6 text-[#5F5B53]">
                  Start with the task or process that creates the most friction.
                </p>
              </div>
              <PrimaryButton href="/start-project">
                Discuss your process
                <ArrowRight size={15} />
              </PrimaryButton>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 05 — THE AUTOMATION SYSTEM */}
      <section
        id="automation-system"
        className="scroll-mt-20 border-b border-[#E3DDD2] bg-[#F4F0E8]"
        aria-labelledby="automation-system-heading"
      >
        <div className="mx-auto max-w-[1180px] px-5 py-20 sm:px-7 sm:py-24 lg:px-8 lg:py-28">
          <Reveal>
            <SectionHeading
              eyebrow="The automation system"
              title="Turn a manual process into a connected workflow."
              description="Select each stage to see how information can move from an initial input to a useful business action. The exact design depends on the workflow being implemented."
            />
          </Reveal>

          <Reveal delay={0.06} className="mt-10">
            <AutomationSystemExperience />
          </Reveal>
        </div>
      </section>

      {/* 06 — HOW WE BUILD */}
      <section
        id="how-we-build"
        className="scroll-mt-20 border-b border-[#E3DDD2] bg-white"
        aria-labelledby="how-we-build-heading"
      >
        <div className="mx-auto max-w-[1180px] px-5 py-20 sm:px-7 sm:py-24 lg:px-8 lg:py-28">
          <Reveal>
            <SectionHeading
              eyebrow="How we build"
              title="Start with the workflow. Then build the right system."
              description="Good automation isn't about adding AI everywhere. We first understand the process, then identify where software, workflow logic and AI can help."
            />
          </Reveal>

          <Reveal delay={0.06} className="mt-10">
            <AutomationBuildProcess />
          </Reveal>

          <Reveal delay={0.08} className="mt-6">
            <div className="flex flex-col gap-3 rounded-xl border border-[#D9E5DB] bg-[#F2F6F1] p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
              <div>
                <p className="text-sm font-semibold text-[#24231F]">
                  Business problem first. Technology second.
                </p>
                <p className="mt-1 text-sm leading-6 text-[#5F5B53]">
                  The implementation follows the requirement—not the other way
                  around.
                </p>
              </div>
              <span className="text-xs font-medium text-[#004225]">
                Discover · Design · Build · Improve
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 07 — WHY IT WORKS */}
      <section
        id="why-it-works"
        className="scroll-mt-20 border-b border-[#E3DDD2] bg-[#EEE9DF]"
        aria-labelledby="why-it-works-heading"
      >
        <div className="mx-auto max-w-[1180px] px-5 py-20 sm:px-7 sm:py-24 lg:px-8 lg:py-28">
          <Reveal>
            <SectionHeading
              eyebrow="Why it works"
              title="AI should do something useful."
              description="A good solution combines a real business need with clear workflow logic, appropriate technology and a process people can understand."
            />
          </Reveal>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {principles.map((item, index) => {
              const Icon = item.icon;

              return (
                <Reveal key={item.number} delay={index * 0.03}>
                  <article className="relative h-full overflow-hidden rounded-2xl border border-[#E3DDD2] bg-white p-5 sm:p-7">
                    <span className="pointer-events-none absolute right-5 top-3 text-6xl font-semibold tracking-[-0.06em] text-[#004225]/[0.06]">
                      {item.number}
                    </span>

                    <div className="relative">
                      <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#D9E5DB] bg-[#EAF1EB] text-[#004225]">
                        <Icon size={20} strokeWidth={1.7} />
                      </span>
                      <h3 className="mt-5 text-[19px] font-semibold text-[#24231F] sm:text-[22px]">
                        {item.title}
                      </h3>
                      <p className="mt-3 max-w-[480px] text-sm leading-6 text-[#5F5B53]">
                        {item.description}
                      </p>
                      <div className="mt-6 rounded-lg border border-[#EAE5DC] bg-[#FAF9F6] px-4 py-3">
                        <span className="text-xs font-medium text-[#004225]">
                          {item.visual}
                        </span>
                      </div>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>

          <Reveal delay={0.06} className="mt-8">
            <div className="flex flex-col gap-3 border-t border-[#DAD5CA] pt-5 sm:flex-row sm:items-start sm:justify-between">
              <p className="max-w-[720px] text-xs leading-6 text-[#777167]">
                Every business process is different. The actual impact depends
                on what is automated, how the workflow is designed, the systems
                involved and how the solution is adopted.
              </p>
              <span className="shrink-0 text-xs font-medium text-[#004225]">
                Process first · Technology second
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 08 — INTENDED BUSINESS BENEFITS */}
      <section
        id="automation-benefits"
        className="scroll-mt-20 border-b border-[#E3DDD2] bg-[#F4F0E8]"
      >
        <div className="mx-auto max-w-[1180px] px-5 py-20 sm:px-7 sm:py-24 lg:px-8 lg:py-28">
          <Reveal>
            <SectionHeading
              eyebrow="Intended business benefits"
              title="Give your team more room for meaningful work."
              description="Well-designed automation can help make day-to-day operations easier to manage. These are goals to evaluate, not guaranteed results."
            />
          </Reveal>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {intendedBenefits.map((item, index) => {
              const Icon = item.icon;

              return (
                <Reveal key={item.title} delay={index * 0.03}>
                  <article className="h-full rounded-xl border border-[#E3DDD2] bg-white p-5 transition-colors hover:border-[#A9C1AD] sm:p-6">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#D9E5DB] bg-[#EAF1EB] text-[#004225]">
                      <Icon size={20} />
                    </span>
                    <h3 className="mt-5 text-base font-semibold text-[#24231F] sm:text-lg">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-[#5F5B53]">
                      {item.description}
                    </p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 09 — RELIABILITY */}
      <section className="border-b border-[#E3DDD2] bg-white">
        <div className="mx-auto grid max-w-[1180px] gap-12 px-5 py-20 sm:px-7 sm:py-24 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 lg:px-8 lg:py-28">
          <Reveal>
            <SectionHeading
              eyebrow="Reliability by design"
              title="Know when to act—and when to ask."
              description="A responsible workflow defines what can happen automatically and what requires review. It also plans for incomplete data, failed integrations and ambiguous requests."
            />
          </Reveal>

          <div className="divide-y divide-[#EAE5DC]">
            {reliabilityItems.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.025}>
                <div className="flex gap-4 py-5 first:pt-0 last:pb-0">
                  <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-[#D9E5DB] bg-[#EAF1EB] text-[#004225]">
                    <Check size={17} />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-[#24231F]">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-[#5F5B53]">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 10 — FINAL CTA */}
      <section
        id="start-automation"
        className="scroll-mt-20 bg-[#EEE9DF] px-5 py-16 sm:px-7 sm:py-20 lg:px-8 lg:py-24"
        aria-labelledby="final-cta-heading"
      >
        <Reveal className="mx-auto max-w-[1180px]">
          <div className="rounded-2xl border border-[#D9E5DB] bg-white px-6 py-12 sm:px-10 sm:py-16 lg:px-16 lg:py-20">
            <div className="grid items-end gap-8 lg:grid-cols-[1fr_auto] lg:gap-12">
              <div>
                <SectionLabel>Your workflow, your requirements</SectionLabel>
                <h2
                  id="final-cta-heading"
                  className="max-w-3xl text-[32px] font-semibold leading-[1.12] tracking-[-0.035em] text-[#24231F] sm:text-4xl lg:text-[44px]"
                >
                  Start with the problem.
                  <span className="block text-[#004225]">
                    We'll explore the right system.
                  </span>
                </h2>
                <p className="mt-5 max-w-2xl text-[15px] leading-7 text-[#5F5B53] sm:text-lg sm:leading-8">
                  You don't need to know exactly what should be automated. Tell
                  us what feels repetitive, slow, disconnected or difficult to
                  manage, and we'll explore a suitable approach.
                </p>
              </div>

              <div className="flex flex-col items-start gap-3">
                <PrimaryButton href="/start-project">
                  Tell Us What You Need
                  <ArrowRight size={16} />
                </PrimaryButton>
                <a
                  href="#automation-areas"
                  className="inline-flex min-h-10 items-center gap-2 text-sm font-medium text-[#004225] transition-colors hover:text-[#326448]"
                >
                  Review capabilities
                  <ArrowDown size={15} />
                </a>
              </div>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-[#EAE5DC] pt-5 text-xs text-[#777167]">
              <span>Business problem first</span>
              <span className="hidden h-1 w-1 rounded-full bg-[#B8B1A5] sm:block" />
              <span>Technology second</span>
              <span className="hidden h-1 w-1 rounded-full bg-[#B8B1A5] sm:block" />
              <span>Designed around your workflow</span>
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
