import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  Bot,
  CheckCircle2,
  ChevronRight,
  CircleHelp,
  Database,
  GitBranch,
  MessageSquareText,
  Workflow,
  Zap,
} from "lucide-react";
import { Link, useLocation } from "wouter";

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0 },
};

const workflowSteps = [
  {
    number: "01",
    title: "Capture",
    description:
      "A request arrives through a website form, WhatsApp, email, or another connected channel.",
    icon: MessageSquareText,
  },
  {
    number: "02",
    title: "Understand",
    description:
      "AI extracts useful details, identifies intent, and structures the information for the next step.",
    icon: Bot,
  },
  {
    number: "03",
    title: "Decide",
    description:
      "Rules and approval checks determine whether to route, respond, update a record, or request human review.",
    icon: GitBranch,
  },
  {
    number: "04",
    title: "Act & log",
    description:
      "Connected tools carry out approved actions and record outcomes for visibility and follow-up.",
    icon: Database,
  },
];

const capabilities = [
  {
    title: "AI-assisted understanding",
    text: "Turn incoming messages and documents into structured, usable information.",
    icon: Bot,
  },
  {
    title: "Workflow orchestration",
    text: "Move work between steps, teams, and systems with clear rules and exception paths.",
    icon: Workflow,
  },
  {
    title: "Connected business systems",
    text: "Connect approved workflows with CRM, ERP, forms, email, messaging, and internal tools.",
    icon: Database,
  },
  {
    title: "Human review",
    text: "Keep sensitive decisions, unusual cases, and uncertain outputs under human control.",
    icon: CircleHelp,
  },
];

const comparison = [
  {
    label: "Incoming requests",
    before: "Read and sort messages manually",
    after: "Capture and classify requests consistently",
  },
  {
    label: "Data entry",
    before: "Copy details between different tools",
    after: "Transfer validated fields between connected systems",
  },
  {
    label: "Follow-up",
    before: "Depend on manual reminders",
    after: "Use defined triggers, ownership, and status updates",
  },
  {
    label: "Exceptions",
    before: "Find problems through ad hoc checks",
    after: "Route uncertain cases to a person for review",
  },
];

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
      <section className="relative isolate border-b border-white/10">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-[-12rem] h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-[#4F7CFF]/20 blur-[120px]" />
          <div className="absolute right-[-8rem] top-40 h-72 w-72 rounded-full bg-cyan-400/10 blur-[100px]" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:linear-gradient(to_bottom,black,transparent_85%)]" />
        </div>

        <div className="mx-auto max-w-7xl px-5 pb-20 pt-12 sm:px-8 sm:pb-28 sm:pt-16 lg:px-12">
          {/* Back Button */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.55 }}
            className="mb-6"
          >
            <button
              type="button"
              onClick={handleBack}
              className="inline-flex min-h-10 items-center gap-2 rounded-lg border border-white/15 bg-white/[0.035] px-3.5 py-2 text-sm font-medium text-slate-300 transition-colors hover:border-[#4F7CFF]/50 hover:bg-white/[0.06] hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" />
              Back
            </button>
          </motion.div>

          {/* Breadcrumb */}
          <motion.nav
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.55 }}
            aria-label="Breadcrumb"
            className="mb-10 flex flex-wrap items-center gap-2 text-sm text-slate-400"
          >
            <Link href="/" className="transition hover:text-white">
              Home
            </Link>

            <ChevronRight className="h-4 w-4 shrink-0" />

            <Link href="/work" className="transition hover:text-white">
              Work
            </Link>

            <ChevronRight className="h-4 w-4 shrink-0" />

            <span aria-current="page" className="font-medium text-slate-200">
              AI Automation Concept
            </span>
          </motion.nav>

          <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              transition={{ duration: 0.65, delay: 0.08 }}
            >
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#4F7CFF]/40 bg-[#4F7CFF]/10 px-3.5 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-blue-200">
                <span className="h-2 w-2 rounded-full bg-[#4F7CFF]" />
                Illustrative concept project
              </div>

              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-[#7FA0FF]">
                AI Automation · Workflow Design · Integrations
              </p>

              <h1 className="max-w-3xl text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
                Less repetitive work.
                <span className="block bg-gradient-to-r from-[#83A0FF] via-[#63C8F2] to-white bg-clip-text text-transparent">
                  More connected operations.
                </span>
              </h1>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
                A concept for connecting incoming requests, AI-assisted
                understanding, business rules, and everyday tools into one
                traceable workflow—while keeping people in control of important
                decisions.
              </p>

              <div className="mt-9 flex flex-wrap gap-3">
                <Link
                  href="/start-project"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#4F7CFF] px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#4F7CFF]/20 transition hover:-translate-y-0.5 hover:bg-[#3f6df0]"
                >
                  Discuss an automation project
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <a
                  href="#workflow"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-6 py-3.5 text-sm font-semibold text-slate-200 transition hover:border-white/30 hover:bg-white/5"
                >
                  Explore the workflow
                  <ArrowDown className="h-4 w-4" />
                </a>
              </div>

              <p className="mt-5 max-w-xl text-xs leading-5 text-slate-500">
                Concept only—not a completed client engagement. No client
                outcomes or performance metrics are claimed on this page.
              </p>
            </motion.div>

            {/* AUTOMATION ARCHITECTURE VISUAL */}
            <motion.div
              initial={{ opacity: 0, y: 18, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative mx-auto w-full max-w-xl"
            >
              <div className="absolute -inset-5 rounded-[2rem] bg-[#4F7CFF]/10 blur-2xl" />

              <div className="relative rounded-[1.75rem] border border-white/10 bg-[#0E1420]/90 p-5 shadow-2xl shadow-black/30 backdrop-blur sm:p-7">
                <div className="mb-6 flex items-center justify-between border-b border-white/10 pb-4">
                  <div>
                    <p className="text-sm font-semibold text-white">
                      Automation canvas
                    </p>
                    <p className="mt-1 text-xs text-slate-500">
                      Example system architecture
                    </p>
                  </div>

                  <div className="flex items-center gap-1.5 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-2.5 py-1.5 text-xs text-emerald-300">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
                    Concept
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-4">
                    <MessageSquareText className="mb-3 h-5 w-5 text-sky-300" />
                    <p className="text-sm font-medium">Input channels</p>
                    <p className="mt-1 text-xs leading-5 text-slate-500">
                      Forms · Email · Messaging
                    </p>
                  </div>

                  <div className="rounded-2xl border border-[#4F7CFF]/35 bg-[#4F7CFF]/10 p-4">
                    <Bot className="mb-3 h-5 w-5 text-[#91A9FF]" />
                    <p className="text-sm font-medium">AI layer</p>
                    <p className="mt-1 text-xs leading-5 text-slate-400">
                      Extract · Classify · Summarize
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-4">
                    <GitBranch className="mb-3 h-5 w-5 text-violet-300" />
                    <p className="text-sm font-medium">Rules & review</p>
                    <p className="mt-1 text-xs leading-5 text-slate-500">
                      Conditions · Approvals
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-4">
                    <Database className="mb-3 h-5 w-5 text-cyan-300" />
                    <p className="text-sm font-medium">Connected tools</p>
                    <p className="mt-1 text-xs leading-5 text-slate-500">
                      CRM · ERP · Internal apps
                    </p>
                  </div>
                </div>

                <div className="my-4 flex items-center justify-center gap-2 text-xs text-slate-500">
                  <span className="h-px flex-1 bg-white/10" />
                  <Zap className="h-3.5 w-3.5 text-[#83A0FF]" />
                  Actions are logged and traceable
                  <span className="h-px flex-1 bg-white/10" />
                </div>

                <div className="rounded-xl border border-emerald-300/15 bg-emerald-300/[0.06] px-4 py-3">
                  <div className="flex items-center gap-2 text-sm font-medium text-emerald-200">
                    <CheckCircle2 className="h-4 w-4" />
                    Clear status and human handoff
                  </div>
                  <p className="mt-1 pl-6 text-xs leading-5 text-slate-400">
                    Exceptions are routed for review instead of silently
                    guessing.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PROJECT SNAPSHOT */}
      <section className="border-b border-white/10 bg-white/[0.02]">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-8 sm:grid-cols-3 sm:px-8 lg:px-12">
          {[
            ["Project type", "Illustrative concept"],
            ["Focus", "Workflow automation"],
            ["Design principle", "Human-in-the-loop"],
          ].map(([label, value]) => (
            <div
              key={label}
              className="sm:border-r sm:border-white/10 sm:last:border-0 sm:pl-6 sm:first:pl-0"
            >
              <p className="text-xs uppercase tracking-[0.18em] text-slate-500">
                {label}
              </p>
              <p className="mt-2 text-base font-semibold text-slate-100">
                {value}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* BUSINESS CHALLENGE */}
      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-2 lg:px-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          transition={{ duration: 0.55 }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#83A0FF]">
            The business challenge
          </p>

          <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
            Work gets fragmented when every step lives in a different place.
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          transition={{ duration: 0.55, delay: 0.08 }}
          className="space-y-5 text-base leading-8 text-slate-300"
        >
          <p>
            In many growing businesses, requests arrive through several
            channels, details are copied into multiple tools, and follow-ups
            depend on manual reminders. Even when each tool works well on its
            own, the handoffs between them can create avoidable friction.
          </p>

          <p>
            This concept explores how a connected automation layer could
            standardize routine steps, make information easier to find, and help
            teams see what happened next—without trying to automate every
            decision.
          </p>

          <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-5">
            <p className="text-sm font-semibold text-white">Design objective</p>
            <p className="mt-2 text-sm leading-6 text-slate-400">
              Reduce repetitive coordination and improve process visibility. The
              actual scope and impact would be validated against a real business
              workflow before implementation.
            </p>
          </div>
        </motion.div>
      </section>

      {/* PROPOSED WORKFLOW */}
      <section id="workflow" className="border-y border-white/10 bg-[#0B101A]">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            transition={{ duration: 0.55 }}
            className="mx-auto mb-14 max-w-3xl text-center"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#83A0FF]">
              Proposed system
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              A workflow with a clear beginning, decision, and outcome.
            </h2>

            <p className="mt-5 text-base leading-7 text-slate-400">
              One possible architecture for a routine business process. The
              exact triggers, tools, permissions, and review points would be
              tailored to the selected use case.
            </p>
          </motion.div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {workflowSteps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.article
                  key={step.number}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={fadeUp}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  className="group relative rounded-2xl border border-white/10 bg-white/[0.025] p-6 transition hover:-translate-y-1 hover:border-[#4F7CFF]/40 hover:bg-white/[0.045]"
                >
                  <div className="mb-8 flex items-center justify-between">
                    <span className="text-xs font-semibold tracking-[0.2em] text-slate-500">
                      STEP {step.number}
                    </span>

                    <div className="rounded-xl border border-[#4F7CFF]/25 bg-[#4F7CFF]/10 p-3 text-[#91A9FF]">
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold">{step.title}</h3>

                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    {step.description}
                  </p>

                  {index < workflowSteps.length - 1 && (
                    <ArrowRight className="absolute -right-3 top-1/2 z-10 hidden h-6 w-6 -translate-y-1/2 text-[#83A0FF] xl:block" />
                  )}
                </motion.article>
              );
            })}
          </div>

          <p className="mt-6 text-center text-xs leading-5 text-slate-500">
            Illustrative flow only. Production workflows require validation,
            access controls, error handling, and monitoring.
          </p>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            transition={{ duration: 0.55 }}
          >
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#83A0FF]">
              Building blocks
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Useful automation is more than adding an AI model.
            </h2>

            <p className="mt-5 leading-7 text-slate-400">
              Reliable systems combine AI with business rules, integrations,
              permissions, monitoring, and sensible fallback paths.
            </p>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2">
            {capabilities.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={fadeUp}
                  transition={{ duration: 0.45, delay: index * 0.07 }}
                  className="rounded-2xl border border-white/10 bg-white/[0.025] p-6"
                >
                  <Icon className="h-6 w-6 text-[#83A0FF]" />

                  <h3 className="mt-5 text-lg font-semibold">{item.title}</h3>

                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {item.text}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* BEFORE AND AFTER */}
      <section className="border-y border-white/10 bg-[#0B101A]">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            transition={{ duration: 0.55 }}
            className="mb-10 max-w-3xl"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#83A0FF]">
              Process comparison
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              From scattered manual steps to a defined process.
            </h2>

            <p className="mt-4 leading-7 text-slate-400">
              These are intended process-design changes—not measured results
              from a deployed client project.
            </p>
          </motion.div>

          <div className="overflow-hidden rounded-2xl border border-white/10">
            <div className="grid grid-cols-[0.72fr_1fr_1fr] bg-white/[0.04] text-xs font-semibold uppercase tracking-[0.12em] text-slate-400 sm:text-sm">
              <div className="p-3 sm:p-5">Area</div>

              <div className="border-l border-white/10 p-3 sm:p-5">
                Manual pattern
              </div>

              <div className="border-l border-white/10 p-3 sm:p-5">
                Proposed workflow
              </div>
            </div>

            {comparison.map((row, index) => (
              <div
                key={row.label}
                className={`grid grid-cols-[0.72fr_1fr_1fr] text-xs sm:text-sm ${
                  index !== comparison.length - 1
                    ? "border-t border-white/10"
                    : ""
                }`}
              >
                <div className="p-3 font-semibold text-slate-200 sm:p-5">
                  {row.label}
                </div>

                <div className="border-l border-white/10 p-3 leading-5 text-slate-400 sm:p-5 sm:leading-6">
                  {row.before}
                </div>

                <div className="border-l border-white/10 bg-[#4F7CFF]/[0.045] p-3 leading-5 text-slate-200 sm:p-5 sm:leading-6">
                  {row.after}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BUSINESS VALUE AND RELIABILITY */}
      <section className="mx-auto grid max-w-7xl gap-8 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-2 lg:px-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          transition={{ duration: 0.55 }}
          className="rounded-3xl border border-[#4F7CFF]/25 bg-gradient-to-br from-[#4F7CFF]/10 to-transparent p-7 sm:p-9"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#9AB0FF]">
            Intended business value
          </p>

          <h2 className="mt-4 text-2xl font-semibold sm:text-3xl">
            Make routine work easier to manage.
          </h2>

          <ul className="mt-7 space-y-4">
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
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#83A0FF]" />
                {item}
              </li>
            ))}
          </ul>

          <p className="mt-6 border-t border-white/10 pt-5 text-xs leading-5 text-slate-500">
            Outcomes depend on the process selected, data quality, system
            access, team adoption, and how success is measured.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          transition={{ duration: 0.55, delay: 0.08 }}
          className="rounded-3xl border border-white/10 bg-white/[0.025] p-7 sm:p-9"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">
            Reliability by design
          </p>

          <h2 className="mt-4 text-2xl font-semibold sm:text-3xl">
            Automation should know when to ask for help.
          </h2>

          <p className="mt-5 text-sm leading-7 text-slate-400">
            A responsible implementation defines what the system may do
            automatically and what requires approval. It also plans for
            incomplete data, integration failures, ambiguous requests, and
            changes to connected systems.
          </p>

          <div className="mt-7 space-y-3">
            {[
              ["Permissions", "Limit actions to approved access and roles."],
              ["Fallbacks", "Send uncertain cases to a person."],
              ["Audit trail", "Record actions, outcomes, and errors."],
              ["Measurement", "Agree on baseline KPIs before launch."],
            ].map(([title, text]) => (
              <div
                key={title}
                className="flex gap-4 border-t border-white/10 pt-4 first:border-0 first:pt-0"
              >
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[#83A0FF]" />

                <div>
                  <p className="text-sm font-semibold text-white">{title}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-400">
                    {text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* FINAL CTA */}
      <section className="px-5 pb-20 sm:px-8 sm:pb-28 lg:px-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          transition={{ duration: 0.55 }}
          className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-[#4F7CFF]/30 bg-[#10192B] px-6 py-12 text-center sm:px-12 sm:py-16"
        >
          <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-96 -translate-x-1/2 rounded-full bg-[#4F7CFF]/20 blur-[100px]" />

          <div className="relative">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#9AB0FF]">
              Your workflow, your rules
            </p>

            <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl">
              Have a repetitive process worth simplifying?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-300">
              Start with one clear business problem. We can map the current
              process, identify safe automation opportunities, and define how
              success should be measured before building.
            </p>

            <Link
              href="/start-project"
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-[#4F7CFF] px-7 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#3f6df0]"
            >
              Start a project conversation
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
