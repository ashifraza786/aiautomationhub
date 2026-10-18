import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Bot,
  Check,
  CheckCircle2,
  ChevronRight,
  CircleHelp,
  Database,
  GitBranch,
  Layers3,
  MessageSquareText,
  ShieldCheck,
  Workflow,
  Zap,
} from "lucide-react";
import { Link, useLocation } from "wouter";

const workflowSteps = [
  {
    number: "01",
    title: "Capture",
    detail: "Inputs",
    description:
      "Collect incoming requests from forms, email, messaging, and other connected channels.",
    icon: MessageSquareText,
  },
  {
    number: "02",
    title: "Understand",
    detail: "AI processing",
    description:
      "Use AI to identify intent, extract relevant details, and structure information for the next step.",
    icon: Bot,
  },
  {
    number: "03",
    title: "Decide",
    detail: "Rules & approvals",
    description:
      "Apply business rules, check conditions, and route uncertain cases for human review.",
    icon: GitBranch,
  },
  {
    number: "04",
    title: "Take action",
    detail: "Connected tools",
    description:
      "Update connected systems, trigger approved next steps, and record activity for traceability.",
    icon: Database,
  },
];

const capabilities = [
  {
    number: "01",
    title: "AI-assisted understanding",
    description:
      "Transform unstructured messages and documents into useful, organized information.",
    icon: Bot,
  },
  {
    number: "02",
    title: "Workflow orchestration",
    description:
      "Coordinate tasks across steps and systems with explicit conditions and exception paths.",
    icon: Workflow,
  },
  {
    number: "03",
    title: "Connected business tools",
    description:
      "Connect approved processes with CRM, ERP, forms, email, messaging, and internal applications.",
    icon: Layers3,
  },
  {
    number: "04",
    title: "Human oversight",
    description:
      "Keep approvals, sensitive decisions, and uncertain outputs under appropriate human control.",
    icon: ShieldCheck,
  },
];

const comparisons = [
  {
    label: "Request handling",
    before: "Manually read and sort incoming messages",
    after: "Capture and classify requests using defined rules",
  },
  {
    label: "Data movement",
    before: "Copy details between separate tools",
    after: "Transfer validated information between connected systems",
  },
  {
    label: "Follow-up",
    before: "Rely on individual reminders and memory",
    after: "Define triggers, ownership, and status updates",
  },
  {
    label: "Exceptions",
    before: "Discover issues through ad hoc checks",
    after: "Route uncertain cases for human review",
  },
];

const reliabilityItems = [
  {
    title: "Access controls",
    description: "Restrict actions to approved permissions and roles.",
  },
  {
    title: "Human handoff",
    description: "Escalate ambiguous requests and sensitive decisions.",
  },
  {
    title: "Traceability",
    description: "Record relevant actions, outcomes, and errors.",
  },
  {
    title: "Measured outcomes",
    description: "Define baseline KPIs before implementation begins.",
  },
];

const intendedBenefits = [
  "More consistent handling of repeatable requests",
  "Less duplicate data entry across connected tools",
  "Clearer ownership, status, and next steps",
  "Better visibility into exceptions and bottlenecks",
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
      initial={reduceMotion ? false : { opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{
        duration: reduceMotion ? 0 : 0.45,
        delay: reduceMotion ? 0 : delay,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-medium tracking-[0.04em] text-[#004225] sm:text-[13px]">
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
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="mt-4 text-[32px] font-semibold leading-[1.12] tracking-[-0.035em] text-[#24231F] sm:text-4xl lg:text-[44px]">
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
  children: React.ReactNode;
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
  children: React.ReactNode;
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
      icon: MessageSquareText,
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
    <div className="w-full rounded-2xl border border-[#E4DFD5] bg-white shadow-[0_12px_40px_rgba(36,35,31,0.05)]">
      <div className="flex items-center justify-between gap-3 border-b border-[#EAE5DC] px-5 py-4 sm:px-6">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#E8F0EA] text-[#004225]">
            <Workflow className="h-5 w-5" />
          </div>
          <div>
            <p className="text-sm font-semibold text-[#24231F] sm:text-base">
              Workflow architecture
            </p>
            <p className="mt-1 text-xs text-[#5F5B53]">Example system design</p>
          </div>
        </div>
        <span className="rounded-lg bg-[#E8F0EA] px-3 py-1.5 text-xs font-medium text-[#004225]">
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
                  <Icon className="h-5 w-5" />
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
            <Zap className="h-4 w-4 text-[#004225]" />
            Connected actions
          </span>
          <div className="h-px flex-1 bg-[#E4DFD5]" />
        </div>

        <div className="flex items-start gap-3 rounded-xl border border-[#D9E5DB] bg-[#F2F6F1] p-4">
          <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#004225]" />
          <div>
            <p className="text-sm font-semibold text-[#24231F]">
              Traceable outcomes
            </p>
            <p className="mt-1 text-xs leading-6 text-[#5F5B53] sm:text-sm">
              Record actions, monitor status, and route uncertain cases to a
              person instead of guessing.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-2 border-t border-[#EAE5DC] px-5 py-3.5 sm:px-6">
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

export default function AIAutomationCaseStudy() {
  const [, setLocation] = useLocation();
  const reduceMotion = useReducedMotion();

  const handleBack = () => {
    if (window.history.length > 1) {
      window.history.back();
    } else {
      setLocation("/work");
    }
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[#F4F0E8] font-sans text-[#24231F]">
      {/* HERO */}
      <section className="border-b border-[#E3DDD2]">
        <div className="mx-auto max-w-7xl px-5 pb-16 pt-8 sm:px-8 sm:pb-24 sm:pt-10 lg:px-12 lg:pb-28">
          <Reveal className="mb-7">
            <button
              type="button"
              onClick={handleBack}
              className="inline-flex min-h-10 items-center gap-2 rounded-xl border border-[#DED8CD] bg-white px-4 py-2 text-sm font-medium text-[#24231F] transition-colors hover:border-[#004225]/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#004225]"
            >
              <ArrowLeft className="h-4 w-4" />
              Back
            </button>
          </Reveal>

          <Reveal delay={0.04}>
            <nav
              aria-label="Breadcrumb"
              className="mb-10 flex flex-wrap items-center gap-2 text-sm text-[#777167]"
            >
              <Link href="/" className="hover:text-[#004225]">
                Home
              </Link>
              <ChevronRight className="h-4 w-4" />
              <Link href="/work" className="hover:text-[#004225]">
                Work
              </Link>
              <ChevronRight className="h-4 w-4" />
              <span aria-current="page" className="text-[#24231F]">
                AI Automation Concept
              </span>
            </nav>
          </Reveal>

          <div className="grid items-center gap-12 lg:grid-cols-[0.94fr_1.06fr] lg:gap-14">
            <Reveal delay={0.08}>
              <div className="mb-6 inline-flex items-center gap-2 rounded-lg border border-[#D9E5DB] bg-white px-3.5 py-2">
                <span className="h-2 w-2 rounded-full bg-[#004225]" />
                <span className="text-xs font-medium text-[#004225]">
                  Illustrative concept project
                </span>
              </div>

              <p className="mb-5 text-xs font-medium tracking-[0.06em] text-[#004225] sm:text-[13px]">
                AI AUTOMATION / WORKFLOW DESIGN / INTEGRATIONS
              </p>

              <h1 className="max-w-2xl text-[40px] font-semibold leading-[1.04] tracking-[-0.045em] text-[#24231F] sm:text-6xl lg:text-[64px]">
                Less repetitive work.
                <span className="mt-2 block text-[#004225]">
                  More connected operations.
                </span>
              </h1>

              <p className="mt-6 max-w-xl text-base leading-7 text-[#5F5B53] sm:text-lg sm:leading-8">
                Explore a connected workflow that brings incoming requests,
                AI-assisted understanding, business rules, and everyday tools
                together—with clear handoffs and people in control.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <PrimaryButton href="/start-project">
                  Discuss an automation project
                  <ArrowRight className="h-4 w-4" />
                </PrimaryButton>
                <SecondaryButton href="#workflow">
                  Explore the workflow
                  <ArrowDown className="h-4 w-4" />
                </SecondaryButton>
              </div>

              <div className="mt-8 flex items-start gap-3 border-t border-[#DED8CD] pt-5">
                <CircleHelp className="mt-0.5 h-4 w-4 shrink-0 text-[#777167]" />
                <p className="max-w-lg text-xs leading-6 text-[#777167]">
                  Concept only—not a completed client engagement. No client
                  outcomes or performance metrics are claimed.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              <ArchitectureVisual />
            </Reveal>
          </div>
        </div>
      </section>

      {/* PROJECT SNAPSHOT */}
      <section className="border-b border-[#E3DDD2] bg-[#EEE9DF]">
        <div className="mx-auto grid max-w-7xl gap-0 px-5 py-2 sm:grid-cols-3 sm:px-8 lg:px-12">
          {[
            {
              label: "Project format",
              value: "Illustrative concept",
              number: "01",
            },
            {
              label: "Primary focus",
              value: "Workflow automation",
              number: "02",
            },
            {
              label: "Guiding principle",
              value: "Human-in-the-loop",
              number: "03",
            },
          ].map((item) => (
            <div
              key={item.label}
              className="flex items-start gap-4 border-b border-[#DED8CD] py-5 last:border-0 sm:border-b-0 sm:border-r sm:px-6 sm:py-7 sm:first:pl-0 sm:last:border-r-0 sm:last:pr-0"
            >
              <span className="pt-1 text-xs font-medium text-[#004225]">
                {item.number}
              </span>
              <div>
                <p className="text-xs text-[#777167]">{item.label}</p>
                <p className="mt-2 text-sm font-semibold text-[#24231F] sm:text-base">
                  {item.value}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CHALLENGE */}
      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 lg:px-12 lg:py-28">
        <Reveal>
          <SectionHeading
            eyebrow="01 / The challenge"
            title="Good tools. Disconnected processes."
            description="The friction often appears between systems—not just inside them."
          />
        </Reveal>

        <Reveal delay={0.06} className="space-y-5">
          <p className="text-base leading-8 text-[#5F5B53]">
            In many growing businesses, requests arrive through different
            channels, information gets copied between tools, and follow-ups rely
            on manual reminders. Those handoffs can make routine work harder to
            track and coordinate.
          </p>
          <p className="text-base leading-8 text-[#5F5B53]">
            This concept explores how a connected automation layer could
            organize repeatable steps, improve process visibility, and make the
            next action clearer—without attempting to automate every decision.
          </p>

          <div className="rounded-xl border border-[#D9E5DB] bg-white p-5 sm:p-6">
            <Eyebrow>Design objective</Eyebrow>
            <p className="mt-3 text-sm leading-7 text-[#5F5B53]">
              Reduce repetitive coordination and make work easier to trace. The
              actual scope and impact must be validated against a real business
              workflow before implementation.
            </p>
          </div>
        </Reveal>
      </section>

      {/* WORKFLOW */}
      <section
        id="workflow"
        className="scroll-mt-20 border-y border-[#E3DDD2] bg-[#EEE9DF]"
      >
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
          <Reveal>
            <SectionHeading
              eyebrow="02 / The proposed workflow"
              title="A clear path from request to action."
              description="An illustrative process architecture. Triggers, integrations, permissions, and approval points would be tailored to the selected business use case."
              centered
            />
          </Reveal>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {workflowSteps.map((step, index) => {
              const Icon = step.icon;

              return (
                <Reveal key={step.number} delay={index * 0.05}>
                  <article className="h-full rounded-2xl border border-[#E3DDD2] bg-white p-5 transition-colors hover:border-[#A7BBAA] sm:p-6">
                    <div className="mb-7 flex items-center justify-between">
                      <span className="text-xs font-medium text-[#777167]">
                        STEP {step.number}
                      </span>
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#D9E5DB] bg-[#EAF1EB] text-[#004225]">
                        <Icon className="h-5 w-5" />
                      </div>
                    </div>

                    <p className="text-xs text-[#777167]">{step.detail}</p>
                    <h3 className="mt-2 text-[19px] font-semibold text-[#24231F] sm:text-[22px]">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-[#5F5B53]">
                      {step.description}
                    </p>
                  </article>
                </Reveal>
              );
            })}
          </div>

          <div className="mt-6 flex items-start gap-3 rounded-xl border border-[#D9E5DB] bg-white p-4 sm:items-center sm:px-5">
            <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-[#004225] sm:mt-0" />
            <p className="text-sm leading-6 text-[#5F5B53]">
              Production workflows require validated logic, appropriate access
              controls, error handling, monitoring, and human escalation paths.
            </p>
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20">
          <Reveal>
            <SectionHeading
              eyebrow="03 / The building blocks"
              title="AI is one part of a reliable system."
              description="Useful automation combines intelligent processing with integrations, business rules, permissions, and sensible fallback paths."
            />

            <div className="mt-8 flex items-center gap-3 border-t border-[#DED8CD] pt-5">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#D9E5DB] bg-white text-[#004225]">
                <Layers3 className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-semibold text-[#24231F]">
                  Designed around the process
                </p>
                <p className="mt-1 text-xs text-[#777167]">
                  Not AI for its own sake
                </p>
              </div>
            </div>
          </Reveal>

          <div className="divide-y divide-[#E3DDD2]">
            {capabilities.map((item, index) => {
              const Icon = item.icon;

              return (
                <Reveal key={item.number} delay={index * 0.04}>
                  <article className="grid gap-4 py-6 first:pt-0 last:pb-0 sm:grid-cols-[auto_1fr] sm:gap-5 sm:py-7">
                    <div className="flex items-center gap-4 sm:block">
                      <span className="text-xs font-medium text-[#777167]">
                        {item.number}
                      </span>
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#D9E5DB] bg-white text-[#004225]">
                        <Icon className="h-5 w-5" />
                      </div>
                    </div>

                    <div>
                      <h3 className="text-[19px] font-semibold text-[#24231F] sm:text-[22px]">
                        {item.title}
                      </h3>
                      <p className="mt-2 max-w-xl text-sm leading-7 text-[#5F5B53]">
                        {item.description}
                      </p>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* PROCESS COMPARISON */}
      <section className="border-y border-[#E3DDD2] bg-[#EEE9DF]">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
          <Reveal>
            <SectionHeading
              eyebrow="04 / Process comparison"
              title="From manual handoffs to a defined process."
              description="The comparison below describes intended process-design changes, not measured results from a deployed client project."
            />
          </Reveal>

          <div className="mt-10 overflow-hidden rounded-2xl border border-[#E3DDD2] bg-white">
            <div className="hidden grid-cols-[0.72fr_1fr_1fr] bg-[#F8F6F1] sm:grid">
              <div className="p-5 text-xs font-medium text-[#777167]">
                Process area
              </div>
              <div className="border-l border-[#E8E3DA] p-5 text-xs font-medium text-[#777167]">
                Manual pattern
              </div>
              <div className="border-l border-[#E8E3DA] bg-[#F2F6F1] p-5 text-xs font-medium text-[#004225]">
                Proposed approach
              </div>
            </div>

            {comparisons.map((row, index) => (
              <div
                key={row.label}
                className={`grid gap-0 sm:grid-cols-[0.72fr_1fr_1fr] ${
                  index !== comparisons.length - 1
                    ? "border-b border-[#E8E3DA]"
                    : ""
                }`}
              >
                <div className="bg-[#FAF9F6] px-4 pb-2 pt-4 sm:bg-transparent sm:p-5">
                  <p className="text-sm font-semibold text-[#24231F]">
                    {row.label}
                  </p>
                </div>

                <div className="px-4 pb-4 pt-1 sm:border-l sm:border-[#E8E3DA] sm:p-5">
                  <p className="mb-1.5 text-xs font-medium text-[#777167] sm:hidden">
                    Manual pattern
                  </p>
                  <p className="text-sm leading-6 text-[#5F5B53]">
                    {row.before}
                  </p>
                </div>

                <div className="border-t border-[#E8E3DA] bg-[#F2F6F1] px-4 py-4 sm:border-l sm:border-t-0 sm:p-5">
                  <p className="mb-1.5 text-xs font-medium text-[#004225] sm:hidden">
                    Proposed approach
                  </p>
                  <div className="flex items-start gap-2.5">
                    <Check className="mt-1 h-4 w-4 shrink-0 text-[#004225]" />
                    <p className="text-sm leading-6 text-[#24231F]">
                      {row.after}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WORKFLOW IMAGE */}
      <section className="px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="mb-8">
              <Eyebrow>Inside the workflow</Eyebrow>
              <h2 className="mt-4 text-[32px] font-semibold leading-[1.12] tracking-[-0.035em] text-[#24231F] sm:text-4xl lg:text-[44px]">
                AI automation, visualized.
              </h2>
              <p className="mt-4 max-w-2xl text-[15px] leading-7 text-[#5F5B53] sm:text-lg">
                A closer look at how AI, business rules, and connected tools
                work together in a structured automation process.
              </p>
            </div>

            <figure className="overflow-hidden rounded-2xl border border-[#E3DDD2] bg-white shadow-[0_12px_40px_rgba(36,35,31,0.04)]">
              <img
                src="/images/ai-automation.png"
                alt="Illustrative AI automation workflow connecting incoming requests, AI processing, business rules, and connected systems"
                className="block h-auto w-full object-contain"
                loading="lazy"
              />
              <figcaption className="border-t border-[#EAE5DC] px-4 py-3 text-center text-xs text-[#777167] sm:px-6">
                Illustrative AI automation workflow concept
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      {/* INTENDED VALUE AND RELIABILITY */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
        <div className="grid gap-5 lg:grid-cols-2 lg:gap-6">
          <Reveal className="rounded-2xl border border-[#D9E5DB] bg-white p-6 sm:p-9 lg:p-10">
            <Eyebrow>05 / Intended business value</Eyebrow>
            <h2 className="mt-5 max-w-md text-[28px] font-semibold leading-tight tracking-[-0.03em] text-[#24231F] sm:text-3xl">
              Make routine work easier to manage.
            </h2>
            <p className="mt-4 text-sm leading-7 text-[#5F5B53]">
              Potential benefits to evaluate when selecting and validating a
              real workflow.
            </p>

            <ul className="mt-8 space-y-4">
              {intendedBenefits.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm leading-6 text-[#5F5B53]"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#004225]" />
                  {item}
                </li>
              ))}
            </ul>

            <p className="mt-8 border-t border-[#E8E3DA] pt-5 text-xs leading-6 text-[#777167]">
              These are intended benefits, not verified outcomes. Actual results
              depend on the process, data quality, system access, adoption, and
              measurement.
            </p>
          </Reveal>

          <Reveal
            delay={0.06}
            className="rounded-2xl border border-[#E3DDD2] bg-[#FAF9F6] p-6 sm:p-9 lg:p-10"
          >
            <Eyebrow>06 / Reliability by design</Eyebrow>
            <h2 className="mt-5 max-w-md text-[28px] font-semibold leading-tight tracking-[-0.03em] text-[#24231F] sm:text-3xl">
              Know when to act—and when to ask.
            </h2>
            <p className="mt-4 text-sm leading-7 text-[#5F5B53]">
              A responsible workflow defines what can happen automatically and
              what requires review. It also plans for incomplete data, failed
              integrations, and ambiguous requests.
            </p>

            <div className="mt-8">
              {reliabilityItems.map((item, index) => (
                <div
                  key={item.title}
                  className={`flex gap-4 py-4 ${
                    index !== reliabilityItems.length - 1
                      ? "border-b border-[#E3DDD2]"
                      : ""
                  }`}
                >
                  <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-[#D9E5DB] bg-white text-[#004225]">
                    <Check className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-[#24231F]">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm leading-6 text-[#5F5B53]">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-5 pb-20 sm:px-8 sm:pb-28 lg:px-12">
        <Reveal>
          <div className="mx-auto max-w-7xl rounded-2xl border border-[#D9E5DB] bg-white px-6 py-12 sm:px-12 sm:py-16 lg:px-16 lg:py-20">
            <div className="grid items-end gap-8 lg:grid-cols-[1fr_auto] lg:gap-12">
              <div>
                <Eyebrow>07 / Your workflow, your rules</Eyebrow>
                <h2 className="mt-5 max-w-3xl text-[32px] font-semibold leading-[1.12] tracking-[-0.035em] text-[#24231F] sm:text-4xl lg:text-[44px]">
                  Have a repetitive process worth simplifying?
                </h2>
                <p className="mt-5 max-w-2xl text-base leading-7 text-[#5F5B53] sm:text-lg sm:leading-8">
                  Start with one clear business problem. Map the current
                  process, identify suitable automation opportunities, and
                  define how success should be measured before building.
                </p>
              </div>

              <div className="flex flex-col items-start gap-3 lg:items-end">
                <PrimaryButton href="/start-project">
                  Start a project conversation
                  <ArrowUpRight className="h-4 w-4" />
                </PrimaryButton>
                <p className="text-xs text-[#777167]">
                  Start with the problem, not the tool.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
