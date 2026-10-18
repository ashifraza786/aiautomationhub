import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  BarChart3,
  Check,
  ChevronLeft,
  ChevronRight,
  Database,
  FileText,
  LayoutDashboard,
  Package,
  Settings2,
  Users,
  Workflow,
  Zap,
} from "lucide-react";
import { Link } from "wouter";

const GREEN = "#004225";

const softwareAreas = [
  {
    number: "01",
    icon: LayoutDashboard,
    title: "Business Dashboards",
    description:
      "Bring important information into one clear workspace instead of managing scattered reports and tools.",
    items: ["Operational dashboards", "Business reporting", "Role-based views"],
  },
  {
    number: "02",
    icon: Users,
    title: "Customer & CRM Systems",
    description:
      "Manage leads, customer records and relationships around the way your team works.",
    items: ["Lead management", "Customer records", "Sales pipelines"],
  },
  {
    number: "03",
    icon: Package,
    title: "Inventory & Operations",
    description:
      "Digitize operational processes that are difficult to manage across spreadsheets and disconnected software.",
    items: ["Inventory management", "Order tracking", "Stock visibility"],
  },
  {
    number: "04",
    icon: FileText,
    title: "Billing & Business Tools",
    description:
      "Create focused software for the repetitive administrative processes that keep your business moving.",
    items: ["Billing workflows", "Records & documents", "Business reports"],
  },
  {
    number: "05",
    icon: Workflow,
    title: "Custom Workflows",
    description:
      "Design business logic and task flows around your actual requirements rather than forcing a generic process.",
    items: ["Approval flows", "Task management", "Process tracking"],
  },
  {
    number: "06",
    icon: Database,
    title: "Connected Business Data",
    description:
      "Organize business information so teams can access the right records and work from a more connected system.",
    items: ["Centralized records", "Data organization", "Business insights"],
  },
];

const processSteps = [
  {
    number: "01",
    title: "Understand",
    summary: "Understand the real business requirement.",
    description:
      "We explore how your business operates, how information moves and where your existing processes create friction.",
    points: [
      "Current workflows",
      "Team responsibilities",
      "Existing business tools",
      "Pain points and constraints",
    ],
    output: "A clear understanding of the requirement",
  },
  {
    number: "02",
    title: "Design",
    summary: "Plan the right system before building.",
    description:
      "We translate the requirement into a practical system structure, user experience and workflow.",
    points: [
      "System structure",
      "User experience",
      "Workflow logic",
      "Required integrations",
    ],
    output: "A practical solution blueprint",
  },
  {
    number: "03",
    title: "Build",
    summary: "Build around how your business works.",
    description:
      "We develop the agreed software around the business process instead of forcing the process into a generic tool.",
    points: [
      "Business-specific features",
      "Useful user interfaces",
      "Data and workflow handling",
      "Relevant system connections",
    ],
    output: "Software shaped around the requirement",
  },
  {
    number: "04",
    title: "Improve",
    summary: "Make room for the business to evolve.",
    description:
      "The system can be reviewed and refined as the business, team and requirements change.",
    points: [
      "Review usability",
      "Refine workflows",
      "Address new requirements",
      "Plan future improvements",
    ],
    output: "A foundation for ongoing improvement",
  },
];

const systemModules = [
  {
    icon: Users,
    title: "Customers & Leads",
    description: "Customer records and enquiries",
  },
  {
    icon: LayoutDashboard,
    title: "Business Dashboard",
    description: "A clearer view of operations",
  },
  {
    icon: Package,
    title: "Operations",
    description: "Tasks, orders and inventory",
  },
  {
    icon: FileText,
    title: "Billing & Records",
    description: "Business documents and records",
  },
];

const benefits = [
  {
    icon: Database,
    title: "Organized information",
    description:
      "Bring relevant business records into a structure that suits the team.",
  },
  {
    icon: Workflow,
    title: "Clearer workflows",
    description:
      "Define how tasks, approvals and business processes should move.",
  },
  {
    icon: LayoutDashboard,
    title: "Better visibility",
    description:
      "Help teams find important information and understand the state of work.",
  },
  {
    icon: Settings2,
    title: "Purpose-built tools",
    description:
      "Focus the experience on the actual requirements instead of unnecessary features.",
  },
];

function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
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

function SectionLabel({ children }: { children: React.ReactNode }) {
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
  children: React.ReactNode;
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
  children: React.ReactNode;
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

function SystemNode({
  icon: Icon,
  title,
  description,
  active = false,
}: {
  icon: typeof LayoutDashboard;
  title: string;
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
          {title}
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

function SystemVisual() {
  return (
    <div className="overflow-hidden rounded-2xl border border-[#E3DDD2] bg-white shadow-[0_12px_40px_rgba(36,35,31,0.05)]">
      <div className="flex items-center justify-between gap-3 border-b border-[#EAE5DC] px-4 py-4 sm:px-6">
        <div>
          <p className="text-xs text-[#777167]">Business system</p>
          <h3 className="mt-1 text-sm font-semibold text-[#24231F] sm:text-base">
            Custom Operations Workspace
          </h3>
        </div>
        <span className="rounded-lg bg-[#EAF1EB] px-3 py-1.5 text-xs font-medium text-[#004225]">
          Concept
        </span>
      </div>

      <div className="p-4 sm:p-6">
        <div className="space-y-3">
          <SystemNode
            icon={Users}
            title="Customers & Leads"
            description="Customer records and enquiries"
          />

          <div className="flex justify-center">
            <div className="h-5 w-px bg-[#C8D6CA]" />
          </div>

          <SystemNode
            icon={LayoutDashboard}
            title="Business Dashboard"
            description="One view of important operations"
            active
          />

          <div className="flex justify-center">
            <div className="h-5 w-px bg-[#C8D6CA]" />
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <SystemNode icon={Package} title="Operations" />
            <SystemNode icon={FileText} title="Billing & Records" />
          </div>
        </div>

        <div className="mt-4 rounded-xl border border-[#E3DDD2] bg-[#FAF9F6] p-4">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[#D9E5DB] bg-white text-[#004225]">
              <BarChart3 size={19} />
            </span>
            <div className="min-w-0 flex-1">
              <p className="text-sm font-semibold text-[#24231F]">
                Business visibility
              </p>
              <p className="mt-1 text-xs leading-5 text-[#5F5B53]">
                Relevant information organized around the workflow
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-[#EAE5DC] px-4 py-3.5 sm:px-6">
        <p className="text-xs leading-5 text-[#777167]">
          Illustrative system concept — not a deployed client product.
        </p>
      </div>
    </div>
  );
}

function ProcessExperience() {
  const [activeStep, setActiveStep] = useState(0);
  const reduceMotion = useReducedMotion();
  const step = processSteps[activeStep];

  function selectStep(index: number) {
    setActiveStep(Math.max(0, Math.min(processSteps.length - 1, index)));
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-[#E3DDD2] bg-white shadow-[0_12px_40px_rgba(36,35,31,0.04)]">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#EAE5DC] px-5 py-4 sm:px-7">
        <div>
          <p className="text-xs text-[#777167]">Our working method</p>
          <p className="mt-1 text-sm font-semibold text-[#24231F]">
            From requirement to working system
          </p>
        </div>
        <span className="rounded-lg bg-[#EAF1EB] px-3 py-1.5 text-xs font-medium text-[#004225]">
          Step {activeStep + 1} of {processSteps.length}
        </span>
      </div>

      <div className="grid md:grid-cols-[0.78fr_1.22fr]">
        <div className="border-b border-[#EAE5DC] p-4 sm:p-5 md:border-b-0 md:border-r">
          <div className="space-y-2">
            {processSteps.map((item, index) => (
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
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border ${
                    activeStep === index
                      ? "border-[#D9E5DB] bg-white text-[#004225]"
                      : "border-[#E3DDD2] bg-white text-[#777167]"
                  }`}
                >
                  <span className="text-xs font-medium">{item.number}</span>
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
            PHASE {step.number}
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
            <p className="text-xs font-medium text-[#004225]">Stage output</p>
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
              {processSteps.map((item, index) => (
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

export default function CustomSoftware() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <main className="min-h-screen overflow-hidden bg-[#F4F0E8] font-sans text-[#24231F]">
      {/* 01 — HERO */}
      <section className="border-b border-[#E3DDD2] bg-[#F4F0E8]">
        <div className="mx-auto grid max-w-[1280px] items-center gap-12 px-5 py-16 sm:px-7 sm:py-20 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14 lg:px-8 lg:py-24">
          <Reveal className="max-w-[650px]">
            <div className="mb-6 inline-flex items-center gap-2 rounded-lg border border-[#D9E5DB] bg-white px-3 py-2">
              <span className="h-2 w-2 rounded-full bg-[#004225]" />
              <span className="text-xs font-medium text-[#004225]">
                Custom Business Software
              </span>
            </div>

            <h1 className="text-[40px] font-semibold leading-[1.04] tracking-[-0.045em] text-[#24231F] sm:text-5xl lg:text-[64px]">
              Software built around the way your business works.
            </h1>

            <p className="mt-6 max-w-[610px] text-base leading-7 text-[#5F5B53] sm:text-lg sm:leading-8">
              Standard software is not always designed for the way your business
              operates. We build custom business software around your workflows,
              teams, data and day-to-day requirements.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <PrimaryButton href="/start-project">
                Tell Us What You Need
                <ArrowRight size={16} />
              </PrimaryButton>
              <SecondaryButton href="#software-areas">
                Explore What We Build
                <ArrowDown size={16} />
              </SecondaryButton>
            </div>

            <div className="mt-8 flex flex-wrap gap-x-5 gap-y-3 border-t border-[#DED8CD] pt-5 text-xs text-[#5F5B53]">
              {[
                "Built around your process",
                "Business-specific workflows",
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
            <SystemVisual />
          </Reveal>
        </div>
      </section>

      {/* 02 — THE BUSINESS PROBLEM */}
      <section className="border-b border-[#E3DDD2] bg-white">
        <div className="mx-auto grid max-w-[1180px] gap-10 px-5 py-20 sm:px-7 sm:py-24 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20 lg:px-8 lg:py-28">
          <Reveal>
            <SectionHeading
              eyebrow="The business problem"
              title="Your business should not have to fit the software."
              description="As businesses grow, spreadsheets, separate tools and manual processes can become difficult to coordinate."
            />
          </Reveal>

          <Reveal delay={0.05} className="space-y-5">
            <p className="text-base leading-8 text-[#5F5B53]">
              Standard products are built for broad use cases. Your business,
              however, may have specific approval steps, reporting needs, team
              responsibilities or operational workflows.
            </p>
            <p className="text-base leading-8 text-[#5F5B53]">
              Custom software allows those requirements to shape the system
              instead of forcing your team to work around a tool that does not
              quite fit.
            </p>

            <div className="rounded-xl border border-[#D9E5DB] bg-[#F2F6F1] p-5 sm:p-6">
              <p className="text-sm font-semibold text-[#24231F]">
                The objective
              </p>
              <p className="mt-2 text-sm leading-7 text-[#5F5B53]">
                Build the right system for the process, the people and the
                business requirement.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 03 — WHAT WE BUILD */}
      <section id="software-areas" className="scroll-mt-20 bg-[#EEE9DF]">
        <div className="mx-auto max-w-[1180px] px-5 py-20 sm:px-7 sm:py-24 lg:px-8 lg:py-28">
          <Reveal>
            <SectionHeading
              eyebrow="What we build"
              title="Business software for the work that matters."
              description="From internal tools to operational systems, we can shape the software around your actual requirements."
            />
          </Reveal>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {softwareAreas.map((area, index) => {
              const Icon = area.icon;

              return (
                <Reveal key={area.number} delay={index * 0.025}>
                  <article className="h-full rounded-2xl border border-[#E3DDD2] bg-white p-5 transition-colors hover:border-[#A9BBAA] sm:p-6">
                    <div className="flex items-center justify-between">
                      <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#D9E5DB] bg-[#EAF1EB] text-[#004225]">
                        <Icon size={20} strokeWidth={1.7} />
                      </span>
                      <span className="text-xs font-medium text-[#777167]">
                        {area.number}
                      </span>
                    </div>

                    <h3 className="mt-5 text-[19px] font-semibold tracking-[-0.02em] text-[#24231F] sm:text-[22px]">
                      {area.title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-[#5F5B53]">
                      {area.description}
                    </p>

                    <div className="mt-5 space-y-2.5 border-t border-[#EAE5DC] pt-4">
                      {area.items.map((item) => (
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

      {/* 04 — CONNECTED BUSINESS SYSTEM */}
      <section className="border-y border-[#E3DDD2] bg-[#F4F0E8]">
        <div className="mx-auto grid max-w-[1180px] items-center gap-12 px-5 py-20 sm:px-7 sm:py-24 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16 lg:px-8 lg:py-28">
          <Reveal>
            <SectionHeading
              eyebrow="One connected system"
              title="Make your business processes easier to manage."
              description="Custom software becomes more useful when the parts of the business that depend on each other are designed to work together."
            />

            <div className="mt-8 space-y-4">
              {[
                "Organize important business information.",
                "Give teams a clearer way to manage work.",
                "Connect related tasks and workflows.",
                "Make room for changing requirements.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <Check size={17} className="mt-0.5 shrink-0 text-[#004225]" />
                  <p className="text-sm leading-6 text-[#5F5B53]">{item}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.06}>
            <div className="overflow-hidden rounded-2xl border border-[#E3DDD2] bg-white p-4 shadow-[0_12px_40px_rgba(36,35,31,0.04)] sm:p-6">
              <div className="mb-5 flex items-center justify-between gap-3 border-b border-[#EAE5DC] pb-4">
                <div>
                  <p className="text-xs text-[#777167]">System architecture</p>
                  <h3 className="mt-1 text-sm font-semibold text-[#24231F]">
                    Business Operations
                  </h3>
                </div>
                <Settings2 size={18} className="text-[#777167]" />
              </div>

              <div className="space-y-3">
                {systemModules.map((module, index) => {
                  const Icon = module.icon;

                  return (
                    <div key={module.title}>
                      <SystemNode
                        icon={Icon}
                        title={module.title}
                        description={module.description}
                        active={index === 1}
                      />
                      {index < systemModules.length - 1 && (
                        <div className="flex justify-center">
                          <div className="h-4 w-px bg-[#C8D6CA]" />
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              <div className="mt-4 flex items-start gap-3 rounded-xl border border-[#E3DDD2] bg-[#FAF9F6] p-4">
                <BarChart3
                  size={19}
                  className="mt-0.5 shrink-0 text-[#004225]"
                />
                <div>
                  <p className="text-sm font-semibold text-[#24231F]">
                    Clearer business visibility
                  </p>
                  <p className="mt-1 text-xs leading-5 text-[#5F5B53]">
                    An illustrative concept of how business information can be
                    organized around a connected workflow.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 05 — CAPABILITIES */}
      <section className="border-b border-[#E3DDD2] bg-white">
        <div className="mx-auto max-w-[1180px] px-5 py-20 sm:px-7 sm:py-24 lg:px-8 lg:py-28">
          <Reveal>
            <SectionHeading
              eyebrow="What a system can support"
              title="Designed around the needs of your team."
              description="The modules and features depend on your project scope. These examples illustrate common areas a custom business application may cover."
            />
          </Reveal>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((item, index) => {
              const Icon = item.icon;

              return (
                <Reveal key={item.title} delay={index * 0.03}>
                  <article className="h-full rounded-xl border border-[#E3DDD2] bg-[#FAF9F6] p-5 sm:p-6">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#D9E5DB] bg-white text-[#004225]">
                      <Icon size={20} strokeWidth={1.7} />
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

      {/* 06 — HOW WE BUILD */}
      <section id="how-we-build" className="scroll-mt-20 bg-[#EEE9DF]">
        <div className="mx-auto max-w-[1180px] px-5 py-20 sm:px-7 sm:py-24 lg:px-8 lg:py-28">
          <Reveal>
            <SectionHeading
              eyebrow="How we build"
              title="Understand the requirement. Then build the right system."
              description="A clear process helps keep the software aligned with the business problem from the first discussion through future improvements."
            />
          </Reveal>

          <Reveal delay={0.05} className="mt-10">
            <ProcessExperience />
          </Reveal>

          <Reveal delay={0.08} className="mt-6">
            <div className="flex flex-col gap-3 rounded-xl border border-[#D9E5DB] bg-white p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
              <div>
                <p className="text-sm font-semibold text-[#24231F]">
                  Business requirement first. Software second.
                </p>
                <p className="mt-1 text-sm leading-6 text-[#5F5B53]">
                  The implementation should follow the need—not the other way
                  around.
                </p>
              </div>
              <span className="text-xs font-medium text-[#004225]">
                Understand · Design · Build · Improve
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 07 — PRINCIPLE */}
      <section className="border-y border-[#E3DDD2] bg-white">
        <div className="mx-auto max-w-[900px] px-5 py-20 text-center sm:px-7 sm:py-24 lg:px-8 lg:py-28">
          <Reveal>
            <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl border border-[#D9E5DB] bg-[#EAF1EB] text-[#004225]">
              <Workflow size={21} />
            </span>

            <SectionLabel>Our principle</SectionLabel>

            <h2 className="text-[32px] font-semibold leading-[1.12] tracking-[-0.035em] text-[#24231F] sm:text-4xl lg:text-[44px]">
              Good software should make work clearer.
            </h2>

            <p className="mx-auto mt-5 max-w-[680px] text-[15px] leading-7 text-[#5F5B53] sm:text-lg sm:leading-8">
              We focus on building systems that reduce unnecessary complexity,
              make information easier to access and give teams a better way to
              manage the work they already do.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 08 — FINAL CTA */}
      <section className="bg-[#F4F0E8] px-5 py-16 sm:px-7 sm:py-20 lg:px-8 lg:py-24">
        <Reveal className="mx-auto max-w-[1180px]">
          <div className="rounded-2xl border border-[#D9E5DB] bg-white px-6 py-12 sm:px-10 sm:py-16 lg:px-16 lg:py-20">
            <div className="grid items-end gap-8 lg:grid-cols-[1fr_auto] lg:gap-12">
              <div>
                <SectionLabel>Build what your business needs</SectionLabel>
                <h2 className="max-w-3xl text-[32px] font-semibold leading-[1.12] tracking-[-0.035em] text-[#24231F] sm:text-4xl lg:text-[44px]">
                  Have a process that standard software cannot handle?
                </h2>
                <p className="mt-5 max-w-2xl text-[15px] leading-7 text-[#5F5B53] sm:text-lg sm:leading-8">
                  Tell us how your business works, what is slowing the team down
                  and what you want the system to achieve. We can help turn the
                  requirement into a practical software solution.
                </p>
              </div>

              <div className="flex flex-col items-start gap-3">
                <PrimaryButton href="/start-project">
                  Tell Us What You Need
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
