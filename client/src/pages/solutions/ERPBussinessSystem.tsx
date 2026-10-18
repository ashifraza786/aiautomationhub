import { useState, type ReactNode } from "react";
import { Link } from "wouter";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  BarChart3,
  Building2,
  Check,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  ClipboardList,
  Database,
  FileText,
  GraduationCap,
  LayoutDashboard,
  Package,
  Settings2,
  Users,
  Workflow,
} from "lucide-react";

const erpModules = [
  {
    number: "01",
    icon: Users,
    title: "Customers & Sales",
    description:
      "Organize enquiries, customer records and sales activity in a connected business process.",
    items: [
      "Customer records",
      "Lead management",
      "Sales tracking",
      "Follow-ups",
    ],
  },
  {
    number: "02",
    icon: Package,
    title: "Inventory & Operations",
    description:
      "Bring inventory, orders and day-to-day operational activity into a clearer workflow.",
    items: [
      "Inventory visibility",
      "Stock tracking",
      "Order management",
      "Operational records",
    ],
  },
  {
    number: "03",
    icon: FileText,
    title: "Billing & Finance",
    description:
      "Structure billing-related tasks and financial records around the wider business process.",
    items: [
      "Invoices",
      "Payment records",
      "Business expenses",
      "Financial reporting",
    ],
  },
  {
    number: "04",
    icon: Building2,
    title: "People & Teams",
    description:
      "Manage employee information, responsibilities and internal processes around your organization.",
    items: [
      "Employee records",
      "Team management",
      "Responsibilities",
      "Internal workflows",
    ],
  },
  {
    number: "05",
    icon: BarChart3,
    title: "Reports & Insights",
    description:
      "Make operational information easier to understand through relevant reports and dashboards.",
    items: [
      "Business dashboards",
      "Operational reports",
      "Performance views",
      "Data visibility",
    ],
  },
  {
    number: "06",
    icon: Workflow,
    title: "Connected Workflows",
    description:
      "Connect departments so information can move through the right process instead of remaining isolated.",
    items: [
      "Approval processes",
      "Task flows",
      "Department workflows",
      "Centralized records",
    ],
  },
];

const businessTypes = [
  {
    icon: Building2,
    title: "Growing Businesses",
    description:
      "Connect sales, operations, people and reporting around the organization's evolving needs.",
  },
  {
    icon: GraduationCap,
    title: "Schools & Institutions",
    description:
      "Structure relevant workflows for students, staff, fees, records and institutional operations.",
  },
  {
    icon: ClipboardList,
    title: "Process-Driven Teams",
    description:
      "Create a more connected operating structure when multiple departments depend on shared information.",
  },
];

const buildSteps = [
  {
    number: "01",
    title: "Understand",
    summary: "Understand how the organization works.",
    description:
      "We map the business structure, departments, users, processes and information the system needs to support.",
    points: [
      "Departments and responsibilities",
      "Current business workflows",
      "Existing records and tools",
      "Operational requirements",
    ],
    output: "A clear picture of the organization's needs",
  },
  {
    number: "02",
    title: "Structure",
    summary: "Define how the parts fit together.",
    description:
      "We organize the modules, workflows, permissions and relationships between the different areas of the business.",
    points: [
      "Required ERP modules",
      "Information relationships",
      "User roles and permissions",
      "Workflow and approval rules",
    ],
    output: "A structured ERP blueprint",
  },
  {
    number: "03",
    title: "Build",
    summary: "Build around the agreed requirements.",
    description:
      "We develop the system around the organization's needs rather than forcing its teams into an unrelated workflow.",
    points: [
      "Business-specific modules",
      "Connected workflows",
      "Relevant dashboards",
      "Required integrations",
    ],
    output: "An implementation shaped around the requirement",
  },
  {
    number: "04",
    title: "Evolve",
    summary: "Make room for future requirements.",
    description:
      "The system can be reviewed and extended as the organization changes, subject to the agreed scope and technical needs.",
    points: [
      "Review operational needs",
      "Refine workflows",
      "Address new requirements",
      "Plan future improvements",
    ],
    output: "A foundation for ongoing improvement",
  },
];

const operationStages = [
  {
    number: "01",
    label: "Sales",
    title: "A new sale is recorded",
    description:
      "The process begins when a sale or order is recorded in the business system.",
    icon: ClipboardList,
    status: "Order recorded",
  },
  {
    number: "02",
    label: "Inventory",
    title: "Stock information is updated",
    description:
      "The workflow can check availability and update relevant inventory records according to the defined rules.",
    icon: Package,
    status: "Stock reviewed",
  },
  {
    number: "03",
    label: "Billing",
    title: "Billing follows the transaction",
    description:
      "The system can prepare the appropriate billing action based on the order and business requirements.",
    icon: FileText,
    status: "Billing step prepared",
  },
  {
    number: "04",
    label: "Reporting",
    title: "The business view is updated",
    description:
      "Relevant transaction information can be reflected in reports and operational dashboards.",
    icon: BarChart3,
    status: "Report information updated",
  },
];

function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 12 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{
        duration: reduceMotion ? 0 : 0.32,
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
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="max-w-3xl">
      <SectionLabel>{eyebrow}</SectionLabel>
      <h2 className="text-[32px] font-semibold leading-[1.12] tracking-[-0.035em] text-[#24231F] sm:text-4xl lg:text-[44px]">
        {title}
      </h2>
      <p className="mt-5 text-[15px] leading-7 text-[#5F5B53] sm:text-lg sm:leading-8">
        {description}
      </p>
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
      className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#004225] px-5 py-3 text-[15px] font-medium text-white transition-colors hover:bg-[#00351E] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#004225] focus-visible:ring-offset-2"
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
      className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-[#DAD5CA] bg-white px-5 py-3 text-[15px] font-medium text-[#24231F] transition-colors hover:border-[#A9BBAA] hover:bg-[#FAF9F6] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#004225] focus-visible:ring-offset-2"
    >
      {children}
    </a>
  );
}

function ModuleNode({
  icon: Icon,
  label,
  description,
  active = false,
}: {
  icon: typeof Users;
  label: string;
  description?: string;
  active?: boolean;
}) {
  return (
    <div
      className={`flex min-w-0 items-center gap-3 rounded-xl border p-3.5 sm:p-4 ${
        active
          ? "border-[#B6C9B8] bg-[#F2F6F1]"
          : "border-[#E3DDD2] bg-[#FAF9F6]"
      }`}
    >
      <span
        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border ${
          active
            ? "border-[#D9E5DB] bg-white text-[#004225]"
            : "border-[#E3DDD2] bg-white text-[#5F5B53]"
        }`}
      >
        <Icon size={18} strokeWidth={1.7} />
      </span>

      <span className="min-w-0">
        <span className="block text-sm font-semibold text-[#24231F]">
          {label}
        </span>
        {description && (
          <span className="mt-1 block text-xs leading-5 text-[#5F5B53]">
            {description}
          </span>
        )}
      </span>
    </div>
  );
}

function ERPCommandCenter() {
  return (
    <div className="overflow-hidden rounded-2xl border border-[#E3DDD2] bg-white shadow-[0_12px_40px_rgba(36,35,31,0.05)]">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#EAE5DC] px-4 py-4 sm:px-6">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#D9E5DB] bg-[#EAF1EB] text-[#004225]">
            <Building2 size={19} />
          </span>
          <div>
            <p className="text-xs text-[#777167]">Business operations</p>
            <p className="mt-1 text-sm font-semibold text-[#24231F] sm:text-base">
              Connected ERP workspace
            </p>
          </div>
        </div>
        <span className="rounded-lg bg-[#EAF1EB] px-3 py-1.5 text-xs font-medium text-[#004225]">
          Concept view
        </span>
      </div>

      <div className="p-4 sm:p-6">
        <p className="mb-4 text-xs font-medium text-[#777167]">
          Business departments
        </p>

        <div className="grid gap-3 sm:grid-cols-2">
          <ModuleNode icon={Users} label="Customers & Sales" active />
          <ModuleNode icon={Package} label="Inventory" />
          <ModuleNode icon={FileText} label="Billing & Records" />
          <ModuleNode icon={Building2} label="People & Teams" />
        </div>

        <div className="my-4 flex justify-center">
          <div className="h-6 w-px bg-[#C8D6CA]" />
        </div>

        <div className="rounded-xl border border-[#B6C9B8] bg-[#F2F6F1] p-4">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[#D9E5DB] bg-white text-[#004225]">
              <LayoutDashboard size={19} />
            </span>
            <div>
              <p className="text-sm font-semibold text-[#24231F]">
                Central business view
              </p>
              <p className="mt-1 text-xs leading-5 text-[#5F5B53]">
                Relevant records and reporting across connected modules
              </p>
            </div>
          </div>
        </div>

        <div className="mt-4 rounded-xl border border-[#E3DDD2] bg-[#FAF9F6] p-4">
          <div className="flex items-center gap-3">
            <Workflow size={18} className="shrink-0 text-[#004225]" />
            <p className="text-xs leading-5 text-[#5F5B53]">
              One business event can connect multiple departments through
              defined workflows.
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-[#EAE5DC] px-4 py-3.5 sm:px-6">
        <p className="text-xs leading-5 text-[#777167]">
          Illustrative ERP concept—not a deployed or live client system.
        </p>
      </div>
    </div>
  );
}

function ConnectedOperationsExperience() {
  const [activeStage, setActiveStage] = useState(0);
  const reduceMotion = useReducedMotion();
  const stage = operationStages[activeStage];
  const StageIcon = stage.icon;

  function selectStage(index: number) {
    setActiveStage(Math.max(0, Math.min(operationStages.length - 1, index)));
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-[#E3DDD2] bg-white shadow-[0_12px_40px_rgba(36,35,31,0.04)]">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#EAE5DC] px-5 py-4 sm:px-7">
        <div>
          <p className="text-xs text-[#777167]">Cross-department workflow</p>
          <p className="mt-1 text-sm font-semibold text-[#24231F]">
            Sale → Inventory → Billing → Reporting
          </p>
        </div>
        <span className="rounded-lg bg-[#EAF1EB] px-3 py-1.5 text-xs font-medium text-[#004225]">
          Stage {activeStage + 1} of 4
        </span>
      </div>

      <div className="grid md:grid-cols-[0.8fr_1.2fr]">
        <div className="border-b border-[#EAE5DC] p-4 sm:p-5 md:border-b-0 md:border-r">
          <div className="space-y-2">
            {operationStages.map((item, index) => {
              const Icon = item.icon;
              const active = index === activeStage;
              const completed = index < activeStage;

              return (
                <div key={item.number}>
                  <button
                    type="button"
                    onClick={() => selectStage(index)}
                    aria-pressed={active}
                    className={`flex w-full items-center gap-3 rounded-xl border p-3 text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#004225] ${
                      active
                        ? "border-[#A9C1AD] bg-[#F2F6F1]"
                        : "border-transparent bg-[#FAF9F6] hover:border-[#E3DDD2]"
                    }`}
                  >
                    <span
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border ${
                        active || completed
                          ? "border-[#D9E5DB] bg-white text-[#004225]"
                          : "border-[#E3DDD2] bg-white text-[#777167]"
                      }`}
                    >
                      {completed ? (
                        <Check size={17} />
                      ) : (
                        <Icon size={17} strokeWidth={1.7} />
                      )}
                    </span>

                    <span className="min-w-0 flex-1">
                      <span className="block text-xs text-[#777167]">
                        Department {item.number}
                      </span>
                      <span
                        className={`mt-1 block text-sm font-semibold ${
                          active ? "text-[#004225]" : "text-[#24231F]"
                        }`}
                      >
                        {item.label}
                      </span>
                    </span>

                    <ChevronRight
                      size={15}
                      className={active ? "text-[#004225]" : "text-[#B2ACA1]"}
                    />
                  </button>

                  {index < operationStages.length - 1 && (
                    <div className="ml-8 flex h-3 items-center">
                      <div
                        className={`h-full w-px ${
                          completed ? "bg-[#004225]" : "bg-[#DAD5CA]"
                        }`}
                      />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <p className="mt-4 text-xs leading-6 text-[#777167]">
            Select a department to inspect its role in the business process.
          </p>
        </div>

        <motion.div
          key={stage.number}
          initial={reduceMotion ? false : { opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: reduceMotion ? 0 : 0.22 }}
          className="flex min-w-0 flex-col justify-center p-5 sm:p-7 lg:p-9"
        >
          <div className="flex items-center gap-3">
            <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#D9E5DB] bg-[#EAF1EB] text-[#004225]">
              <StageIcon size={21} strokeWidth={1.7} />
            </span>
            <div>
              <p className="text-xs font-medium text-[#004225]">
                Department {stage.number}
              </p>
              <h3 className="mt-1 text-xl font-semibold tracking-[-0.025em] text-[#24231F] sm:text-2xl">
                {stage.title}
              </h3>
            </div>
          </div>

          <p className="mt-5 text-sm leading-7 text-[#5F5B53] sm:text-base">
            {stage.description}
          </p>

          <div className="mt-6 rounded-xl border border-[#D9E5DB] bg-[#F2F6F1] p-4">
            <p className="text-xs font-medium text-[#004225]">
              Illustrative workflow state
            </p>
            <div className="mt-2 flex items-center gap-2">
              <CheckCircle2 size={17} className="shrink-0 text-[#004225]" />
              <p className="text-sm font-semibold text-[#24231F]">
                {stage.status}
              </p>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-between gap-3 border-t border-[#EAE5DC] pt-5">
            <button
              type="button"
              onClick={() => selectStage(activeStage - 1)}
              disabled={activeStage === 0}
              className="inline-flex min-h-10 items-center gap-2 rounded-lg border border-[#DAD5CA] px-3 text-xs font-medium text-[#24231F] transition hover:border-[#A9BBAA] disabled:cursor-not-allowed disabled:opacity-35"
            >
              <ChevronLeft size={15} />
              Previous
            </button>

            <div className="flex items-center gap-1.5">
              {operationStages.map((item, index) => (
                <button
                  key={item.number}
                  type="button"
                  onClick={() => selectStage(index)}
                  aria-label={`Go to ${item.label}`}
                  aria-current={activeStage === index ? "step" : undefined}
                  className={`h-1.5 rounded-full transition-all ${
                    activeStage === index
                      ? "w-6 bg-[#004225]"
                      : "w-1.5 bg-[#DAD5CA] hover:bg-[#A9BBAA]"
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={() => selectStage(activeStage + 1)}
              disabled={activeStage === operationStages.length - 1}
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
          This is an illustrative process. Actual module synchronization depends
          on the ERP implementation, configured rules and integrations.
        </p>
      </div>
    </div>
  );
}

function ERPBuildExperience() {
  const [activeStep, setActiveStep] = useState(0);
  const reduceMotion = useReducedMotion();
  const step = buildSteps[activeStep];

  function selectStep(index: number) {
    setActiveStep(Math.max(0, Math.min(buildSteps.length - 1, index)));
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-[#E3DDD2] bg-white shadow-[0_12px_40px_rgba(36,35,31,0.04)]">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#EAE5DC] px-5 py-4 sm:px-7">
        <div>
          <p className="text-xs text-[#777167]">Our working method</p>
          <p className="mt-1 text-sm font-semibold text-[#24231F]">
            From organizational needs to connected operations
          </p>
        </div>
        <span className="rounded-lg bg-[#EAF1EB] px-3 py-1.5 text-xs font-medium text-[#004225]">
          Phase {activeStep + 1} of 4
        </span>
      </div>

      <div className="grid md:grid-cols-[0.8fr_1.2fr]">
        <div className="border-b border-[#EAE5DC] p-4 sm:p-5 md:border-b-0 md:border-r">
          <div className="space-y-2">
            {buildSteps.map((item, index) => (
              <button
                key={item.number}
                type="button"
                onClick={() => selectStep(index)}
                aria-pressed={activeStep === index}
                className={`flex w-full items-center gap-3 rounded-xl border p-3 text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#004225] ${
                  activeStep === index
                    ? "border-[#A9C1AD] bg-[#F2F6F1]"
                    : "border-transparent bg-[#FAF9F6] hover:border-[#E3DDD2]"
                }`}
              >
                <span
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border text-xs font-medium ${
                    activeStep === index
                      ? "border-[#D9E5DB] bg-white text-[#004225]"
                      : "border-[#E3DDD2] bg-white text-[#777167]"
                  }`}
                >
                  {item.number}
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-xs text-[#777167]">
                    Phase {item.number}
                  </span>
                  <span
                    className={`mt-1 block text-sm font-semibold ${
                      activeStep === index ? "text-[#004225]" : "text-[#24231F]"
                    }`}
                  >
                    {item.title}
                  </span>
                </span>
                <ChevronRight
                  size={15}
                  className={
                    activeStep === index ? "text-[#004225]" : "text-[#B2ACA1]"
                  }
                />
              </button>
            ))}
          </div>
        </div>

        <motion.div
          key={step.number}
          initial={reduceMotion ? false : { opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: reduceMotion ? 0 : 0.22 }}
          className="flex min-w-0 flex-col justify-center p-5 sm:p-7 lg:p-9"
        >
          <p className="text-xs font-medium text-[#004225]">
            PHASE {step.number} / {step.title}
          </p>
          <h3 className="mt-3 text-xl font-semibold tracking-[-0.025em] text-[#24231F] sm:text-2xl">
            {step.summary}
          </h3>
          <p className="mt-4 text-sm leading-7 text-[#5F5B53] sm:text-base">
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
            <p className="text-xs font-medium text-[#004225]">Phase outcome</p>
            <p className="mt-2 text-sm font-semibold text-[#24231F]">
              {step.output}
            </p>
          </div>

          <div className="mt-6 flex items-center justify-between gap-3 border-t border-[#EAE5DC] pt-5">
            <button
              type="button"
              onClick={() => selectStep(activeStep - 1)}
              disabled={activeStep === 0}
              className="inline-flex min-h-10 items-center gap-2 rounded-lg border border-[#DAD5CA] px-3 text-xs font-medium text-[#24231F] transition hover:border-[#A9BBAA] disabled:cursor-not-allowed disabled:opacity-35"
            >
              <ChevronLeft size={15} />
              Previous
            </button>

            <div className="flex items-center gap-1.5">
              {buildSteps.map((item, index) => (
                <button
                  key={item.number}
                  type="button"
                  onClick={() => selectStep(index)}
                  aria-label={`Go to ${item.title}`}
                  aria-current={activeStep === index ? "step" : undefined}
                  className={`h-1.5 rounded-full transition-all ${
                    activeStep === index
                      ? "w-6 bg-[#004225]"
                      : "w-1.5 bg-[#DAD5CA] hover:bg-[#A9BBAA]"
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={() => selectStep(activeStep + 1)}
              disabled={activeStep === buildSteps.length - 1}
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

export default function ERPBusinessSystems() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#F4F0E8] font-sans text-[#24231F]">
      {/* 01 — HERO */}
      <section className="border-b border-[#E3DDD2] bg-[#F4F0E8]">
        <div className="mx-auto grid max-w-[1280px] items-center gap-12 px-5 py-16 sm:px-7 sm:py-20 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14 lg:px-8 lg:py-24">
          <Reveal className="max-w-[650px]">
            <div className="mb-6 inline-flex items-center gap-2 rounded-lg border border-[#D9E5DB] bg-white px-3 py-2">
              <span className="h-2 w-2 rounded-full bg-[#004225]" />
              <span className="text-xs font-medium text-[#004225]">
                ERP & Business Systems
              </span>
            </div>

            <h1 className="text-[40px] font-semibold leading-[1.04] tracking-[-0.045em] text-[#24231F] sm:text-5xl lg:text-[64px]">
              One connected system for the way your business operates.
            </h1>

            <p className="mt-6 max-w-[610px] text-base leading-7 text-[#5F5B53] sm:text-lg sm:leading-8">
              Bring important business operations into one structured system,
              customized around your teams, processes, data and the way your
              organization works.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <PrimaryButton href="/start-project">
                Discuss Your ERP
                <ArrowRight size={16} />
              </PrimaryButton>
              <SecondaryButton href="#erp-modules">
                Explore the System
                <ArrowDown size={16} />
              </SecondaryButton>
            </div>

            <div className="mt-8 flex flex-wrap gap-x-5 gap-y-3 border-t border-[#DED8CD] pt-5 text-xs text-[#5F5B53]">
              {[
                "Business-specific modules",
                "Connected workflows",
                "Designed to evolve",
              ].map((item) => (
                <span key={item} className="flex items-center gap-2">
                  <Check size={14} className="text-[#004225]" />
                  {item}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.06} className="min-w-0">
            <ERPCommandCenter />
          </Reveal>
        </div>
      </section>

      {/* 02 — BUSINESS PROBLEM */}
      <section className="border-b border-[#E3DDD2] bg-white">
        <div className="mx-auto grid max-w-[1180px] gap-10 px-5 py-20 sm:px-7 sm:py-24 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20 lg:px-8 lg:py-28">
          <Reveal>
            <SectionHeading
              eyebrow="The business problem"
              title="When departments work separately, the business feels disconnected."
              description="Sales, inventory, billing, employees and reporting often depend on the same underlying business information."
            />
          </Reveal>

          <Reveal delay={0.05}>
            <p className="text-base leading-8 text-[#5F5B53]">
              When those functions use disconnected tools or manual hand-offs,
              teams may have to repeat work, chase information or reconcile
              records across different places.
            </p>
            <p className="mt-5 text-base leading-8 text-[#5F5B53]">
              A well-structured ERP can bring relevant functions into a more
              connected environment, with shared workflows and clearer
              responsibilities.
            </p>
            <div className="mt-8 rounded-xl border border-[#D9E5DB] bg-[#F2F6F1] p-5 sm:p-6">
              <p className="text-sm font-semibold text-[#24231F]">
                The objective
              </p>
              <p className="mt-2 text-sm leading-7 text-[#5F5B53]">
                Help different parts of the organization work together through
                one structured business system.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 03 — ERP MODULES */}
      <section
        id="erp-modules"
        className="scroll-mt-20 border-b border-[#E3DDD2] bg-[#EEE9DF]"
      >
        <div className="mx-auto max-w-[1180px] px-5 py-20 sm:px-7 sm:py-24 lg:px-8 lg:py-28">
          <Reveal>
            <SectionHeading
              eyebrow="ERP modules"
              title="Build the business system around your operations."
              description="ERP does not have to mean every possible feature. Its modules and workflows should reflect the needs of your organization."
            />
          </Reveal>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {erpModules.map((module, index) => {
              const Icon = module.icon;

              return (
                <Reveal key={module.number} delay={index * 0.025}>
                  <article className="h-full rounded-2xl border border-[#E3DDD2] bg-white p-5 transition-colors hover:border-[#A9BBAA] sm:p-6">
                    <div className="flex items-center justify-between">
                      <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#D9E5DB] bg-[#EAF1EB] text-[#004225]">
                        <Icon size={20} strokeWidth={1.7} />
                      </span>
                      <span className="text-xs font-medium text-[#777167]">
                        {module.number}
                      </span>
                    </div>

                    <h3 className="mt-5 text-[19px] font-semibold tracking-[-0.02em] text-[#24231F] sm:text-[22px]">
                      {module.title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-[#5F5B53]">
                      {module.description}
                    </p>

                    <div className="mt-5 space-y-2.5 border-t border-[#EAE5DC] pt-4">
                      {module.items.map((item) => (
                        <div
                          key={item}
                          className="flex items-center gap-2.5 text-xs text-[#5F5B53]"
                        >
                          <Check
                            size={14}
                            className="shrink-0 text-[#004225]"
                          />
                          {item}
                        </div>
                      ))}
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 04 — CONNECTED OPERATIONS */}
      <section
        id="connected-operations"
        className="scroll-mt-20 border-b border-[#E3DDD2] bg-[#F4F0E8]"
      >
        <div className="mx-auto max-w-[1180px] px-5 py-20 sm:px-7 sm:py-24 lg:px-8 lg:py-28">
          <Reveal>
            <SectionHeading
              eyebrow="Connected operations"
              title="One business event. Multiple departments working together."
              description="Explore how a sale could connect sales, inventory, billing and reporting when the ERP is configured to support that workflow."
            />
          </Reveal>

          <Reveal delay={0.05} className="mt-10">
            <ConnectedOperationsExperience />
          </Reveal>
        </div>
      </section>

      {/* 05 — BUSINESS TYPES */}
      <section className="border-b border-[#E3DDD2] bg-white">
        <div className="mx-auto max-w-[1180px] px-5 py-20 sm:px-7 sm:py-24 lg:px-8 lg:py-28">
          <Reveal>
            <SectionHeading
              eyebrow="Built around the organization"
              title="Different businesses need different systems."
              description="The same connected-system principle can be applied to different operating environments. The modules and workflows depend on the organization's requirements."
            />
          </Reveal>

          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {businessTypes.map((item, index) => {
              const Icon = item.icon;

              return (
                <Reveal key={item.title} delay={index * 0.03}>
                  <article className="h-full rounded-2xl border border-[#E3DDD2] bg-[#FAF9F6] p-6 sm:p-7">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#D9E5DB] bg-white text-[#004225]">
                      <Icon size={20} strokeWidth={1.7} />
                    </span>
                    <h3 className="mt-6 text-xl font-semibold tracking-[-0.02em] text-[#24231F]">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-[#5F5B53]">
                      {item.description}
                    </p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 06 — HOW WE BUILD */}
      <section
        id="how-we-build"
        className="scroll-mt-20 border-b border-[#E3DDD2] bg-[#EEE9DF]"
      >
        <div className="mx-auto max-w-[1180px] px-5 py-20 sm:px-7 sm:py-24 lg:px-8 lg:py-28">
          <Reveal>
            <SectionHeading
              eyebrow="How we build"
              title="From business structure to connected operations."
              description="We understand the organization first, define how the system should work, build around the agreed requirements and leave room for improvement."
            />
          </Reveal>

          <Reveal delay={0.05} className="mt-10">
            <ERPBuildExperience />
          </Reveal>

          <Reveal delay={0.07} className="mt-6">
            <div className="flex flex-col gap-3 rounded-xl border border-[#D9E5DB] bg-white p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
              <div>
                <p className="text-sm font-semibold text-[#24231F]">
                  Business structure first. Technology second.
                </p>
                <p className="mt-1 text-sm leading-6 text-[#5F5B53]">
                  The ERP should support the organization—not force it into an
                  unrelated process.
                </p>
              </div>
              <span className="text-xs font-medium text-[#004225]">
                Understand · Structure · Build · Evolve
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 07 — PRINCIPLE */}
      <section className="border-b border-[#E3DDD2] bg-white">
        <div className="mx-auto max-w-[900px] px-5 py-20 text-center sm:px-7 sm:py-24 lg:px-8 lg:py-28">
          <Reveal>
            <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl border border-[#D9E5DB] bg-[#EAF1EB] text-[#004225]">
              <Workflow size={21} />
            </span>
            <SectionLabel>Our principle</SectionLabel>
            <h2 className="text-[32px] font-semibold leading-[1.12] tracking-[-0.035em] text-[#24231F] sm:text-4xl lg:text-[44px]">
              Everything important should work together.
            </h2>
            <p className="mx-auto mt-5 max-w-[680px] text-[15px] leading-7 text-[#5F5B53] sm:text-lg sm:leading-8">
              The goal is not to add complexity. It is to give your organization
              a clearer way to manage its people, processes and business
              information.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 08 — FINAL CTA */}
      <section
        id="start-erp-project"
        className="scroll-mt-20 bg-[#F4F0E8] px-5 py-16 sm:px-7 sm:py-20 lg:px-8 lg:py-24"
      >
        <Reveal className="mx-auto max-w-[1180px]">
          <div className="rounded-2xl border border-[#D9E5DB] bg-white px-6 py-12 sm:px-10 sm:py-16 lg:px-16 lg:py-20">
            <div className="grid items-end gap-8 lg:grid-cols-[1fr_auto] lg:gap-12">
              <div>
                <SectionLabel>Build your business system</SectionLabel>
                <h2 className="max-w-3xl text-[32px] font-semibold leading-[1.12] tracking-[-0.035em] text-[#24231F] sm:text-4xl lg:text-[44px]">
                  Need a system that connects your business operations?
                </h2>
                <p className="mt-5 max-w-2xl text-[15px] leading-7 text-[#5F5B53] sm:text-lg sm:leading-8">
                  Tell us about your organization, departments, processes and
                  the areas you want to bring together. We can help explore a
                  practical ERP approach around your requirements.
                </p>
              </div>

              <div className="flex flex-col items-start gap-3">
                <PrimaryButton href="/start-project">
                  Discuss Your ERP
                  <ArrowRight size={16} />
                </PrimaryButton>
                <Link
                  href="/solutions"
                  className="inline-flex min-h-10 items-center gap-2 text-sm font-medium text-[#004225] transition-colors hover:text-[#326448]"
                >
                  Explore All Solutions
                  <ArrowRight size={15} />
                </Link>
              </div>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-[#EAE5DC] pt-5 text-xs text-[#777167]">
              <span>Business structure first</span>
              <span className="hidden h-1 w-1 rounded-full bg-[#B8B1A5] sm:block" />
              <span>Connected operations</span>
              <span className="hidden h-1 w-1 rounded-full bg-[#B8B1A5] sm:block" />
              <span>Designed around your organization</span>
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
