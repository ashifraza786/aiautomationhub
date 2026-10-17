import { motion } from "framer-motion";
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

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const workflowSteps = [
  {
    number: "01",
    title: "Capture",
    description:
      "Collect incoming requests from forms, email, messaging, and other connected channels.",
    detail: "Inputs",
    icon: MessageSquareText,
    color: "text-sky-300",
    surface: "bg-sky-400/10 border-sky-300/20",
  },
  {
    number: "02",
    title: "Understand",
    description:
      "Use AI to identify intent, extract relevant details, and structure information for the next step.",
    detail: "AI processing",
    icon: Bot,
    color: "text-[#9AB0FF]",
    surface: "bg-[#4F7CFF]/10 border-[#4F7CFF]/30",
  },
  {
    number: "03",
    title: "Decide",
    description:
      "Apply business rules, check conditions, and send uncertain or sensitive cases for human review.",
    detail: "Rules & approvals",
    icon: GitBranch,
    color: "text-violet-300",
    surface: "bg-violet-400/10 border-violet-300/20",
  },
  {
    number: "04",
    title: "Take action",
    description:
      "Update connected systems, trigger approved next steps, and record activity for traceability.",
    detail: "Connected tools",
    icon: Database,
    color: "text-cyan-300",
    surface: "bg-cyan-400/10 border-cyan-300/20",
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
      "Link approved processes with CRM, ERP, forms, email, messaging, and internal applications.",
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

function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#91A9FF] sm:text-sm">
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
      <SectionEyebrow>{eyebrow}</SectionEyebrow>
      <h2 className="mt-4 text-3xl font-semibold leading-[1.12] tracking-tight text-white sm:text-4xl lg:text-[3.25rem]">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">
          {description}
        </p>
      )}
    </div>
  );
}

function ArchitectureVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[580px]">
      <div className="absolute -inset-8 rounded-full bg-[#4F7CFF]/10 blur-[90px]" />

      <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#0C1220] shadow-2xl shadow-black/40">
        <div className="flex items-center justify-between border-b border-white/[0.08] px-5 py-4 sm:px-6">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-[#4F7CFF]/30 bg-[#4F7CFF]/10">
              <Workflow className="h-4 w-4 text-[#9AB0FF]" />
            </div>
            <div>
              <p className="text-sm font-semibold text-white">
                Workflow architecture
              </p>
              <p className="mt-0.5 text-xs text-slate-500">
                Example system design
              </p>
            </div>
          </div>

          <span className="rounded-full border border-[#4F7CFF]/25 bg-[#4F7CFF]/10 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.15em] text-[#B4C3FF]">
            Concept
          </span>
        </div>

        <div className="p-5 sm:p-7">
          <div className="mb-5 flex items-center justify-between">
            <p className="text-xs font-medium uppercase tracking-[0.15em] text-slate-500">
              Process overview
            </p>
            <span className="text-xs text-slate-500">Illustrative flow</span>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-4 sm:p-5">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl border border-sky-300/20 bg-sky-300/10">
                <MessageSquareText className="h-5 w-5 text-sky-300" />
              </div>
              <p className="text-sm font-semibold text-white">Input channels</p>
              <p className="mt-2 text-xs leading-5 text-slate-500">
                Forms, email, messaging
              </p>
            </div>

            <div className="rounded-2xl border border-[#4F7CFF]/30 bg-[#4F7CFF]/[0.08] p-4 sm:p-5">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl border border-[#4F7CFF]/30 bg-[#4F7CFF]/15">
                <Bot className="h-5 w-5 text-[#9AB0FF]" />
              </div>
              <p className="text-sm font-semibold text-white">AI layer</p>
              <p className="mt-2 text-xs leading-5 text-slate-400">
                Extract, classify, summarize
              </p>
            </div>

            <div className="rounded-2xl border border-violet-300/20 bg-violet-300/[0.04] p-4 sm:p-5">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl border border-violet-300/20 bg-violet-300/10">
                <GitBranch className="h-5 w-5 text-violet-300" />
              </div>
              <p className="text-sm font-semibold text-white">Rules & review</p>
              <p className="mt-2 text-xs leading-5 text-slate-500">
                Conditions, approvals
              </p>
            </div>

            <div className="rounded-2xl border border-cyan-300/20 bg-cyan-300/[0.035] p-4 sm:p-5">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-300/20 bg-cyan-300/10">
                <Database className="h-5 w-5 text-cyan-300" />
              </div>
              <p className="text-sm font-semibold text-white">Business tools</p>
              <p className="mt-2 text-xs leading-5 text-slate-500">
                CRM, ERP, internal apps
              </p>
            </div>
          </div>

          <div className="my-5 flex items-center gap-3">
            <div className="h-px flex-1 bg-white/10" />
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <Zap className="h-3.5 w-3.5 text-[#91A9FF]" />
              Connected actions
            </div>
            <div className="h-px flex-1 bg-white/10" />
          </div>

          <div className="flex items-start gap-3 rounded-2xl border border-emerald-300/15 bg-emerald-300/[0.045] p-4">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-emerald-300/10">
              <CheckCircle2 className="h-5 w-5 text-emerald-300" />
            </div>
            <div>
              <p className="text-sm font-semibold text-emerald-100">
                Traceable outcomes
              </p>
              <p className="mt-1 text-xs leading-5 text-slate-400">
                Log actions, monitor status, and hand uncertain cases to a
                person instead of guessing.
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between border-t border-white/[0.08] bg-white/[0.015] px-5 py-3.5 sm:px-7">
          <span className="text-xs text-slate-500">
            Illustrative architecture
          </span>
          <span className="flex items-center gap-2 text-xs text-slate-400">
            <span className="h-1.5 w-1.5 rounded-full bg-[#83A0FF]" />
            Human-in-the-loop
          </span>
        </div>
      </div>
    </div>
  );
}

export default function AIAutomationCaseStudy() {
  const [, setLocation] = useLocation();

  const handleBack = () => {
    if (window.history.length > 1) {
      window.history.back();
    } else {
      setLocation("/work");
    }
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[#080B12] text-white">
      {/* HERO */}
      <section className="relative isolate border-b border-white/[0.08]">
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute left-[12%] top-[-15rem] h-[35rem] w-[35rem] rounded-full bg-[#4F7CFF]/15 blur-[130px]" />
          <div className="absolute right-[-12rem] top-[18rem] h-[28rem] w-[28rem] rounded-full bg-cyan-400/[0.07] blur-[120px]" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:linear-gradient(to_bottom,black,transparent_80%)]" />
        </div>

        <div className="mx-auto max-w-7xl px-5 pb-16 pt-8 sm:px-8 sm:pb-24 sm:pt-12 lg:px-12 lg:pb-28">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.45 }}
            className="mb-8"
          >
            <button
              type="button"
              onClick={handleBack}
              className="inline-flex min-h-10 items-center gap-2 rounded-full border border-white/10 bg-white/[0.025] px-4 py-2 text-sm font-medium text-slate-300 transition hover:border-[#4F7CFF]/40 hover:bg-white/[0.06] hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" />
              Back
            </button>
          </motion.div>

          <motion.nav
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.45, delay: 0.04 }}
            aria-label="Breadcrumb"
            className="mb-12 flex flex-wrap items-center gap-2 text-sm text-slate-500"
          >
            <Link href="/" className="transition hover:text-white">
              Home
            </Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/work" className="transition hover:text-white">
              Work
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span aria-current="page" className="text-slate-200">
              AI Automation Concept
            </span>
          </motion.nav>

          <div className="grid items-center gap-14 lg:grid-cols-[0.94fr_1.06fr] lg:gap-12">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              transition={{ duration: 0.6, delay: 0.08 }}
            >
              <div className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-[#4F7CFF]/30 bg-[#4F7CFF]/[0.08] px-3.5 py-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#91A9FF]" />
                <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#C0CCFF] sm:text-xs">
                  Illustrative concept project
                </span>
              </div>

              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-[#91A9FF] sm:text-sm">
                AI Automation / Workflow Design / Integrations
              </p>

              <h1 className="max-w-2xl text-[2.65rem] font-semibold leading-[1.04] tracking-[-0.045em] sm:text-6xl lg:text-[4.35rem]">
                Less repetitive work.
                <span className="mt-2 block bg-gradient-to-r from-[#91A9FF] via-[#69C9F1] to-white bg-clip-text pb-1 text-transparent">
                  More connected operations.
                </span>
              </h1>

              <p className="mt-7 max-w-xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
                Explore a connected workflow that brings incoming requests,
                AI-assisted understanding, business rules, and everyday tools
                together—with clear handoffs and people in control.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/start-project"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#4F7CFF] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#4F7CFF]/20 transition hover:-translate-y-0.5 hover:bg-[#3F6DF0]"
                >
                  Discuss an automation project
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <a
                  href="#workflow"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.02] px-6 py-3 text-sm font-semibold text-slate-200 transition hover:border-white/30 hover:bg-white/[0.05]"
                >
                  Explore the workflow
                  <ArrowDown className="h-4 w-4" />
                </a>
              </div>

              <div className="mt-8 flex items-start gap-3 border-t border-white/10 pt-5">
                <CircleHelp className="mt-0.5 h-4 w-4 shrink-0 text-slate-500" />
                <p className="max-w-lg text-xs leading-5 text-slate-500">
                  Concept only—not a completed client engagement. No client
                  outcomes or performance metrics are claimed.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 22, scale: 0.985 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.65, delay: 0.16 }}
            >
              <ArchitectureVisual />
            </motion.div>
          </div>
        </div>
      </section>

      {/* PROJECT SNAPSHOT */}
      <section className="border-b border-white/[0.08] bg-white/[0.015]">
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
              className="flex items-start gap-4 border-b border-white/[0.08] py-5 last:border-0 sm:border-b-0 sm:border-r sm:px-6 sm:py-7 sm:first:pl-0 sm:last:border-r-0 sm:last:pr-0"
            >
              <span className="pt-1 text-xs font-medium tracking-[0.16em] text-[#7188D7]">
                {item.number}
              </span>
              <div>
                <p className="text-xs uppercase tracking-[0.16em] text-slate-500">
                  {item.label}
                </p>
                <p className="mt-2 text-sm font-semibold text-slate-100 sm:text-base">
                  {item.value}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CHALLENGE */}
      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 lg:px-12 lg:py-28">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          transition={{ duration: 0.5 }}
        >
          <SectionEyebrow>01 / The challenge</SectionEyebrow>
          <h2 className="mt-5 max-w-xl text-3xl font-semibold leading-[1.13] tracking-tight sm:text-4xl lg:text-5xl">
            Good tools. Disconnected processes.
          </h2>
          <p className="mt-6 max-w-md text-base leading-7 text-slate-400">
            The friction often appears between systems—not just inside them.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="space-y-5"
        >
          <p className="text-base leading-8 text-slate-300">
            In many growing businesses, requests arrive through different
            channels, information gets copied between tools, and follow-ups rely
            on manual reminders. Those handoffs can make routine work harder to
            track and coordinate.
          </p>
          <p className="text-base leading-8 text-slate-400">
            This concept explores how a connected automation layer could
            organize repeatable steps, improve process visibility, and make the
            next action clearer—without attempting to automate every decision.
          </p>

          <div className="mt-7 border-l-2 border-[#4F7CFF] bg-white/[0.025] py-5 pl-5 pr-5 sm:pl-6">
            <p className="text-xs font-semibold uppercase tracking-[0.17em] text-[#91A9FF]">
              Design objective
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              Reduce repetitive coordination and make work easier to trace. The
              actual scope and impact must be validated against a real business
              workflow before implementation.
            </p>
          </div>
        </motion.div>
      </section>

      {/* WORKFLOW */}
      <section
        id="workflow"
        className="scroll-mt-20 border-y border-white/[0.08] bg-[#0B101A]"
      >
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            transition={{ duration: 0.5 }}
          >
            <SectionHeading
              eyebrow="02 / The proposed workflow"
              title="A clear path from request to action."
              description="An illustrative process architecture. Triggers, integrations, permissions, and approval points would be tailored to the selected business use case."
              centered
            />
          </motion.div>

          <div className="relative mt-14 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            <div className="pointer-events-none absolute left-[12%] right-[12%] top-10 hidden h-px bg-gradient-to-r from-sky-300/30 via-[#4F7CFF]/40 to-cyan-300/30 xl:block" />

            {workflowSteps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.article
                  key={step.number}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={fadeUp}
                  transition={{ duration: 0.45, delay: index * 0.07 }}
                  className="group relative rounded-2xl border border-white/[0.09] bg-[#0D1420] p-5 transition duration-300 hover:-translate-y-1 hover:border-[#4F7CFF]/35 sm:p-6"
                >
                  <div className="relative z-10 mb-8 flex items-center justify-between">
                    <span className="text-xs font-semibold tracking-[0.18em] text-slate-500">
                      STEP {step.number}
                    </span>
                    <div
                      className={`flex h-11 w-11 items-center justify-center rounded-xl border ${step.surface}`}
                    >
                      <Icon className={`h-5 w-5 ${step.color}`} />
                    </div>
                  </div>

                  <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                    {step.detail}
                  </p>
                  <h3 className="mt-2 text-xl font-semibold text-white">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    {step.description}
                  </p>

                  {index < workflowSteps.length - 1 && (
                    <ArrowRight className="absolute -right-3 top-10 z-20 hidden h-5 w-5 text-[#91A9FF] xl:block" />
                  )}
                </motion.article>
              );
            })}
          </div>

          <div className="mt-7 flex items-start gap-3 rounded-xl border border-white/[0.08] bg-white/[0.02] p-4 sm:items-center sm:px-5">
            <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-[#91A9FF] sm:mt-0" />
            <p className="text-xs leading-6 text-slate-400 sm:text-sm">
              Production workflows require validated logic, appropriate access
              controls, error handling, monitoring, and human escalation paths.
            </p>
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            transition={{ duration: 0.5 }}
          >
            <SectionEyebrow>03 / The building blocks</SectionEyebrow>
            <h2 className="mt-5 text-3xl font-semibold leading-[1.12] tracking-tight sm:text-4xl lg:text-5xl">
              AI is one part of a reliable system.
            </h2>
            <p className="mt-6 max-w-md text-base leading-7 text-slate-400">
              Useful automation combines intelligent processing with
              integrations, business rules, permissions, and sensible fallback
              paths.
            </p>

            <div className="mt-8 flex items-center gap-3 border-t border-white/10 pt-5">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#4F7CFF]/25 bg-[#4F7CFF]/10">
                <Layers3 className="h-5 w-5 text-[#91A9FF]" />
              </div>
              <div>
                <p className="text-sm font-semibold text-white">
                  Designed around the process
                </p>
                <p className="mt-1 text-xs text-slate-500">
                  Not AI for its own sake
                </p>
              </div>
            </div>
          </motion.div>

          <div className="divide-y divide-white/[0.09]">
            {capabilities.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.article
                  key={item.number}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={fadeUp}
                  transition={{ duration: 0.45, delay: index * 0.06 }}
                  className="group grid gap-4 py-6 first:pt-0 last:pb-0 sm:grid-cols-[auto_1fr] sm:gap-5 sm:py-7"
                >
                  <div className="flex items-center gap-4 sm:block">
                    <span className="text-xs font-medium tracking-[0.15em] text-slate-600">
                      {item.number}
                    </span>
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.035] transition group-hover:border-[#4F7CFF]/30 group-hover:bg-[#4F7CFF]/[0.08]">
                      <Icon className="h-5 w-5 text-[#91A9FF]" />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-white sm:text-xl">
                      {item.title}
                    </h3>
                    <p className="mt-2 max-w-xl text-sm leading-7 text-slate-400">
                      {item.description}
                    </p>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* PROCESS COMPARISON */}
      <section className="border-y border-white/[0.08] bg-[#0B101A]">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            transition={{ duration: 0.5 }}
          >
            <SectionHeading
              eyebrow="04 / Process comparison"
              title="From manual handoffs to a defined process."
              description="The comparison below describes intended process-design changes, not measured results from a deployed client project."
            />
          </motion.div>

          <div className="mt-10 overflow-hidden rounded-2xl border border-white/10">
            <div className="hidden grid-cols-[0.72fr_1fr_1fr] bg-white/[0.035] sm:grid">
              <div className="p-5 text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                Process area
              </div>
              <div className="border-l border-white/10 p-5 text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                Manual pattern
              </div>
              <div className="border-l border-white/10 bg-[#4F7CFF]/[0.045] p-5 text-xs font-semibold uppercase tracking-[0.14em] text-[#AAB9FF]">
                Proposed approach
              </div>
            </div>

            {comparisons.map((row, index) => (
              <div
                key={row.label}
                className={`grid gap-0 sm:grid-cols-[0.72fr_1fr_1fr] ${
                  index !== comparisons.length - 1
                    ? "border-b border-white/10"
                    : ""
                }`}
              >
                <div className="bg-white/[0.02] px-4 pb-2 pt-4 sm:bg-transparent sm:p-5">
                  <p className="text-sm font-semibold text-white">
                    {row.label}
                  </p>
                </div>

                <div className="px-4 pb-4 pt-1 sm:border-l sm:border-white/10 sm:p-5">
                  <p className="mb-1.5 text-[10px] font-semibold uppercase tracking-[0.13em] text-slate-600 sm:hidden">
                    Manual pattern
                  </p>
                  <p className="text-sm leading-6 text-slate-400">
                    {row.before}
                  </p>
                </div>

                <div className="border-t border-white/[0.06] bg-[#4F7CFF]/[0.045] px-4 py-4 sm:border-l sm:border-t-0 sm:border-white/10 sm:p-5">
                  <p className="mb-1.5 text-[10px] font-semibold uppercase tracking-[0.13em] text-[#91A9FF] sm:hidden">
                    Proposed approach
                  </p>
                  <div className="flex items-start gap-2.5">
                    <Check className="mt-1 h-4 w-4 shrink-0 text-[#91A9FF]" />
                    <p className="text-sm leading-6 text-slate-200">
                      {row.after}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* AI AUTOMATION SOLUTION IMAGE */}
      <section className="px-5 py-14 sm:px-8 sm:py-20 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55 }}
          >
            <div className="mb-8 text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#91A9FF] sm:text-sm">
                Inside the workflow
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                AI automation, visualized.
              </h2>

              <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
                A closer look at how AI, business rules, and connected tools
                work together in a structured automation process.
              </p>
            </div>

            <figure className="overflow-hidden rounded-2xl border border-white/10 bg-[#0C1220] shadow-2xl shadow-black/30">
              <img
                src="/images/ai-automation.png"
                alt="AI automation workflow connecting incoming requests, AI processing, business rules, and connected systems"
                className="block h-auto w-full object-contain"
                loading="lazy"
              />

              <figcaption className="border-t border-white/10 px-4 py-3 text-center text-xs text-slate-500 sm:px-6">
                Illustrative AI automation workflow concept
              </figcaption>
            </figure>
          </motion.div>
        </div>
      </section>

      {/* INTENDED BUSINESS VALUE */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
        <div className="grid gap-5 lg:grid-cols-2 lg:gap-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            transition={{ duration: 0.5 }}
            className="rounded-[1.75rem] border border-[#4F7CFF]/25 bg-gradient-to-br from-[#4F7CFF]/[0.12] via-[#101729] to-[#0B101A] p-6 sm:p-9 lg:p-10"
          >
            <SectionEyebrow>05 / Intended business value</SectionEyebrow>
            <h2 className="mt-5 max-w-md text-2xl font-semibold leading-tight tracking-tight sm:text-3xl">
              Make routine work easier to manage.
            </h2>
            <p className="mt-4 max-w-lg text-sm leading-7 text-slate-400">
              Potential benefits to evaluate when selecting and validating a
              real workflow.
            </p>

            <ul className="mt-8 space-y-4">
              {[
                "More consistent handling of repeatable requests",
                "Less duplicate data entry across connected tools",
                "Clearer ownership, status, and next steps",
                "Better visibility into exceptions and bottlenecks",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm leading-6 text-slate-300"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#91A9FF]" />
                  {item}
                </li>
              ))}
            </ul>

            <p className="mt-8 border-t border-white/10 pt-5 text-xs leading-6 text-slate-500">
              These are intended benefits, not verified outcomes. Actual results
              depend on the process, data quality, system access, adoption, and
              measurement.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            transition={{ duration: 0.5, delay: 0.07 }}
            className="rounded-[1.75rem] border border-white/10 bg-[#0C111B] p-6 sm:p-9 lg:p-10"
          >
            <SectionEyebrow>06 / Reliability by design</SectionEyebrow>
            <h2 className="mt-5 max-w-md text-2xl font-semibold leading-tight tracking-tight sm:text-3xl">
              Know when to act—and when to ask.
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-400">
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
                      ? "border-b border-white/[0.08]"
                      : ""
                  }`}
                >
                  <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-[#4F7CFF]/20 bg-[#4F7CFF]/[0.08]">
                    <Check className="h-4 w-4 text-[#91A9FF]" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm leading-6 text-slate-400">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-5 pb-20 sm:px-8 sm:pb-28 lg:px-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          transition={{ duration: 0.5 }}
          className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-[#4F7CFF]/25 bg-[#0D1422] px-6 py-12 sm:px-12 sm:py-16 lg:px-16 lg:py-20"
        >
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -right-20 -top-40 h-96 w-96 rounded-full bg-[#4F7CFF]/15 blur-[100px]" />
            <div className="absolute -bottom-48 left-[15%] h-80 w-80 rounded-full bg-cyan-400/[0.07] blur-[100px]" />
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:linear-gradient(to_bottom,black,transparent)]" />
          </div>

          <div className="relative grid items-end gap-9 lg:grid-cols-[1fr_auto] lg:gap-12">
            <div>
              <SectionEyebrow>07 / Your workflow, your rules</SectionEyebrow>
              <h2 className="mt-5 max-w-3xl text-3xl font-semibold leading-[1.12] tracking-tight sm:text-4xl lg:text-5xl">
                Have a repetitive process worth simplifying?
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300">
                Start with one clear business problem. Map the current process,
                identify suitable automation opportunities, and define how
                success should be measured before building.
              </p>
            </div>

            <div className="flex flex-col items-start gap-4 lg:items-end">
              <Link
                href="/start-project"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#4F7CFF] px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#4F7CFF]/20 transition hover:-translate-y-0.5 hover:bg-[#3F6DF0]"
              >
                Start a project conversation
                <ArrowUpRight className="h-4 w-4" />
              </Link>
              <p className="text-xs text-slate-500">
                Start with the problem, not the tool.
              </p>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
