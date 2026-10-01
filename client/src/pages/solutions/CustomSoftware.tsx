import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  Check,
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

const softwareAreas = [
  {
    number: "01",
    icon: LayoutDashboard,
    title: "Business Dashboards",
    description:
      "Bring the information your team needs into one clear workspace instead of managing scattered reports and tools.",
    items: [
      "Operational dashboards",
      "Business reporting",
      "Role-based views",
      "Performance tracking",
    ],
  },
  {
    number: "02",
    icon: Users,
    title: "Customer & CRM Systems",
    description:
      "Build customer-facing and internal systems around the way your team manages leads, customers and relationships.",
    items: [
      "Lead management",
      "Customer records",
      "Follow-up workflows",
      "Sales pipelines",
    ],
  },
  {
    number: "03",
    icon: Package,
    title: "Inventory & Operations",
    description:
      "Digitize operational processes that are difficult to manage across spreadsheets, messages and disconnected software.",
    items: [
      "Inventory management",
      "Order tracking",
      "Stock visibility",
      "Operational workflows",
    ],
  },
  {
    number: "04",
    icon: FileText,
    title: "Billing & Business Tools",
    description:
      "Create focused software for the repetitive administrative processes that keep your business moving.",
    items: [
      "Billing workflows",
      "Records & documents",
      "Internal tools",
      "Business reports",
    ],
  },
  {
    number: "05",
    icon: Workflow,
    title: "Custom Workflows",
    description:
      "If your process does not fit standard software, we can design the workflow around your actual business requirements.",
    items: [
      "Approval flows",
      "Task management",
      "Process tracking",
      "Custom business logic",
    ],
  },
  {
    number: "06",
    icon: Database,
    title: "Connected Business Data",
    description:
      "Structure business information so teams can access the right data and work from a more connected system.",
    items: [
      "Centralized records",
      "Data organization",
      "System views",
      "Business intelligence",
    ],
  },
];

const buildSteps = [
  {
    number: "01",
    title: "Understand",
    description:
      "We first understand how your business currently works, where information moves and where the friction exists.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "We translate the business requirement into a practical system structure, user experience and workflow.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "The required software is developed around the agreed business process instead of forcing your process into a generic tool.",
  },
  {
    number: "04",
    title: "Improve",
    description:
      "Once the system is in use, the workflow can evolve as your business, team and requirements change.",
  },
];

function FlowNode({
  icon: Icon,
  label,
  active = false,
}: {
  icon: typeof LayoutDashboard;
  label: string;
  active?: boolean;
}) {
  return (
    <div
      className={`flex items-center gap-3 rounded-xl border px-4 py-3 ${
        active
          ? "border-blue-400/30 bg-blue-500/[0.08]"
          : "border-[#202936] bg-[#0D1118]"
      }`}
    >
      <div
        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${
          active
            ? "bg-blue-500/10 text-[#4F7CFF]"
            : "bg-[#121821] text-[#A7B0BF]"
        }`}
      >
        <Icon size={17} strokeWidth={1.8} />
      </div>

      <span className="text-sm font-medium text-[#DCE3ED]">{label}</span>
    </div>
  );
}

function Connector() {
  return (
    <div className="hidden h-px w-8 bg-gradient-to-r from-[#202936] via-[#4F7CFF]/40 to-[#202936] sm:block" />
  );
}

export default function CustomSoftware() {
  const shouldReduceMotion = useReducedMotion();

  const reveal = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.55,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[#080A0F] text-[#F4F7FB]">
      {/* Hero */}
      <section className="relative border-b border-[#171E28]">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[8%] top-[-10%] h-[420px] w-[420px] rounded-full bg-[#4F7CFF]/[0.07] blur-[120px]" />
          <div className="absolute right-[5%] top-[15%] h-[320px] w-[320px] rounded-full bg-[#6D5CFF]/[0.05] blur-[110px]" />

          <div
            className="absolute inset-0 opacity-[0.025]"
            style={{
              backgroundImage:
                "linear-gradient(#A7B0BF 1px, transparent 1px), linear-gradient(90deg, #A7B0BF 1px, transparent 1px)",
              backgroundSize: "64px 64px",
            }}
          />
        </div>

        <div className="relative mx-auto grid min-h-[720px] max-w-[1280px] items-center gap-16 px-5 py-28 sm:px-7 lg:grid-cols-[0.95fr_1.05fr] lg:px-8 lg:py-32">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={reveal}
            className="max-w-[650px]"
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#202936] bg-[#0D1118]/80 px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#6F7A8A]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#4F7CFF]" />
              Custom Business Software
            </div>

            <h1 className="text-4xl font-bold leading-[1.05] tracking-[-0.035em] text-[#F4F7FB] sm:text-5xl lg:text-[64px]">
              Software built around the way your business works.
            </h1>

            <p className="mt-6 max-w-[650px] text-base leading-[1.65] text-[#A7B0BF] sm:text-lg">
              Standard software is not always designed for the way your business
              operates. We build custom business software around your workflows,
              teams, data and day-to-day requirements.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/start-project"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-[#4F7CFF] px-5 text-sm font-semibold text-white transition hover:brightness-110 hover:shadow-[0_0_28px_rgba(79,124,255,0.18)]"
              >
                Tell Us What You Need
                <ArrowRight size={16} />
              </Link>

              <a
                href="#software-areas"
                className="inline-flex h-11 items-center justify-center rounded-lg border border-[#202936] bg-[#0D1118] px-5 text-sm font-semibold text-[#DCE3ED] transition hover:border-[#4F7CFF]/40 hover:bg-[#121821]"
              >
                Explore What We Build
              </a>
            </div>
          </motion.div>

          {/* System Visual */}
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.7,
              delay: shouldReduceMotion ? 0 : 0.1,
            }}
            className="relative"
          >
            <div className="relative rounded-2xl border border-[#202936] bg-[#0D1118] p-4 shadow-[0_24px_80px_rgba(0,0,0,0.28)] sm:p-6">
              <div className="mb-5 flex items-center justify-between border-b border-[#202936] pb-4">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#6F7A8A]">
                    Business System
                  </p>
                  <p className="mt-1 text-sm font-semibold text-[#E8EDF5]">
                    Custom Operations Workspace
                  </p>
                </div>

                <div className="flex items-center gap-2 rounded-full border border-[#202936] bg-[#121821] px-3 py-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#38D9C5]" />
                  <span className="text-[10px] font-medium text-[#A7B0BF]">
                    Connected
                  </span>
                </div>
              </div>

              <div className="space-y-3">
                <FlowNode icon={Users} label="Customers & Leads" />

                <div className="flex justify-center">
                  <div className="h-5 w-px bg-gradient-to-b from-[#202936] to-[#4F7CFF]/50" />
                </div>

                <FlowNode
                  icon={LayoutDashboard}
                  label="Business Dashboard"
                  active
                />

                <div className="flex justify-center">
                  <div className="h-5 w-px bg-gradient-to-b from-[#4F7CFF]/50 to-[#202936]" />
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  <FlowNode icon={Package} label="Operations" />
                  <FlowNode icon={FileText} label="Billing & Records" />
                </div>

                <div className="pt-2">
                  <div className="flex items-center gap-3 rounded-xl border border-[#202936] bg-[#121821] p-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#4F7CFF]/10 text-[#4F7CFF]">
                      <BarChart3 size={18} />
                    </div>

                    <div className="min-w-0 flex-1">
                      <p className="text-xs font-semibold text-[#DCE3ED]">
                        Business visibility
                      </p>
                      <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-[#202936]">
                        <div className="h-full w-[72%] rounded-full bg-gradient-to-r from-[#4F7CFF] to-[#6D5CFF]" />
                      </div>
                    </div>

                    <span className="text-[10px] text-[#6F7A8A]">
                      Live view
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pointer-events-none absolute -bottom-8 -left-8 hidden h-20 w-20 rounded-full border border-[#4F7CFF]/10 sm:block" />
            <div className="pointer-events-none absolute -right-5 -top-5 hidden h-12 w-12 rounded-full border border-[#38D9C5]/10 sm:block" />
          </motion.div>
        </div>
      </section>

      {/* Problem */}
      <section className="border-b border-[#171E28] bg-[#0A0D13]">
        <div className="mx-auto max-w-[1280px] px-5 py-[72px] sm:px-7 sm:py-24 lg:px-8 lg:py-[120px]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={reveal}
            className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start"
          >
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#4F7CFF]">
                THE SOFTWARE PROBLEM
              </p>

              <h2 className="mt-4 max-w-[520px] text-3xl font-bold leading-[1.1] tracking-[-0.025em] text-[#F4F7FB] sm:text-4xl">
                Your business should not have to fit the software.
              </h2>
            </div>

            <div className="max-w-[700px]">
              <p className="text-base leading-[1.7] text-[#A7B0BF] sm:text-lg">
                Businesses often grow around a mix of spreadsheets, messages,
                separate tools and manual processes. At some point, those
                systems become difficult to manage.
              </p>

              <p className="mt-5 text-base leading-[1.7] text-[#A7B0BF] sm:text-lg">
                Custom software gives you the opportunity to build one focused
                system around the way your team actually works — with the
                information, workflows and controls your business needs.
              </p>

              <div className="mt-8 flex items-start gap-3 border-l border-[#4F7CFF]/50 pl-5">
                <Zap size={18} className="mt-0.5 shrink-0 text-[#4F7CFF]" />
                <p className="text-sm font-medium leading-6 text-[#DCE3ED]">
                  The goal is not more software. The goal is a better way to
                  operate.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What We Build */}
      <section id="software-areas" className="scroll-mt-20">
        <div className="mx-auto max-w-[1280px] px-5 py-[72px] sm:px-7 sm:py-24 lg:px-8 lg:py-[120px]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={reveal}
            className="max-w-[700px]"
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#4F7CFF]">
              WHAT WE BUILD
            </p>

            <h2 className="mt-4 text-3xl font-bold leading-[1.1] tracking-[-0.025em] text-[#F4F7FB] sm:text-4xl">
              Business software for the work that matters.
            </h2>

            <p className="mt-5 text-base leading-[1.7] text-[#A7B0BF] sm:text-lg">
              We can build focused internal tools, operational systems and
              business applications around specific requirements instead of
              forcing your process into a generic product.
            </p>
          </motion.div>

          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {softwareAreas.map((area, index) => {
              const Icon = area.icon;

              return (
                <motion.article
                  key={area.number}
                  initial={{
                    opacity: 0,
                    y: shouldReduceMotion ? 0 : 18,
                  }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.12 }}
                  transition={{
                    duration: shouldReduceMotion ? 0 : 0.45,
                    delay: shouldReduceMotion ? 0 : index * 0.04,
                  }}
                  className="group rounded-2xl border border-[#202936] bg-[#0D1118] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#4F7CFF]/30 hover:bg-[#10151E]"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#202936] bg-[#121821] text-[#4F7CFF] transition group-hover:border-[#4F7CFF]/30 group-hover:bg-[#4F7CFF]/10">
                      <Icon size={19} strokeWidth={1.8} />
                    </div>

                    <span className="text-[10px] font-semibold tracking-[0.12em] text-[#6F7A8A]">
                      {area.number}
                    </span>
                  </div>

                  <h3 className="mt-6 text-xl font-semibold tracking-[-0.015em] text-[#E8EDF5]">
                    {area.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[#A7B0BF]">
                    {area.description}
                  </p>

                  <div className="mt-6 space-y-2.5 border-t border-[#202936] pt-5">
                    {area.items.map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-2.5 text-xs text-[#A7B0BF]"
                      >
                        <Check size={14} className="shrink-0 text-[#38D9C5]" />
                        {item}
                      </div>
                    ))}
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Connected System */}
      <section className="border-y border-[#171E28] bg-[#0A0D13]">
        <div className="mx-auto max-w-[1280px] px-5 py-[72px] sm:px-7 sm:py-24 lg:px-8 lg:py-[120px]">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={reveal}
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#4F7CFF]">
                ONE CONNECTED SYSTEM
              </p>

              <h2 className="mt-4 max-w-[540px] text-3xl font-bold leading-[1.1] tracking-[-0.025em] text-[#F4F7FB] sm:text-4xl">
                Turn scattered business processes into one clearer workflow.
              </h2>

              <p className="mt-5 max-w-[600px] text-base leading-[1.7] text-[#A7B0BF] sm:text-lg">
                Custom software becomes more valuable when it connects the parts
                of the business that depend on each other.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  "Centralize important business information.",
                  "Give teams a clearer way to manage their work.",
                  "Create workflows around your actual process.",
                  "Build a foundation that can evolve with the business.",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#4F7CFF]/10 text-[#4F7CFF]">
                      <Check size={12} />
                    </div>

                    <p className="text-sm leading-6 text-[#A7B0BF]">{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: shouldReduceMotion ? 0 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: shouldReduceMotion ? 0 : 0.6,
              }}
              className="rounded-2xl border border-[#202936] bg-[#0D1118] p-5 sm:p-7"
            >
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#6F7A8A]">
                    Connected workflow
                  </p>
                  <p className="mt-1 text-sm font-semibold text-[#E8EDF5]">
                    Business Operations
                  </p>
                </div>

                <Settings2 size={17} className="text-[#6F7A8A]" />
              </div>

              <div className="space-y-3">
                <div className="grid gap-3 sm:grid-cols-[1fr_auto_1fr] sm:items-center">
                  <FlowNode icon={Users} label="Customer" active />
                  <Connector />
                  <FlowNode icon={Database} label="Business Data" />
                </div>

                <div className="flex justify-center">
                  <div className="h-6 w-px bg-[#202936]" />
                </div>

                <div className="grid gap-3 sm:grid-cols-[1fr_auto_1fr] sm:items-center">
                  <FlowNode icon={Workflow} label="Business Workflow" />
                  <Connector />
                  <FlowNode icon={LayoutDashboard} label="Team Dashboard" />
                </div>

                <div className="flex justify-center">
                  <div className="h-6 w-px bg-[#202936]" />
                </div>

                <div className="rounded-xl border border-[#202936] bg-[#121821] p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#38D9C5]/10 text-[#38D9C5]">
                        <BarChart3 size={17} />
                      </div>

                      <div>
                        <p className="text-xs font-semibold text-[#DCE3ED]">
                          Business visibility
                        </p>
                        <p className="mt-1 text-[10px] text-[#6F7A8A]">
                          Information connected across the workflow
                        </p>
                      </div>
                    </div>

                    <ArrowRight size={15} className="text-[#6F7A8A]" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How We Build */}
      <section>
        <div className="mx-auto max-w-[1280px] px-5 py-[72px] sm:px-7 sm:py-24 lg:px-8 lg:py-[120px]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={reveal}
            className="max-w-[700px]"
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#4F7CFF]">
              HOW WE BUILD
            </p>

            <h2 className="mt-4 text-3xl font-bold leading-[1.1] tracking-[-0.025em] text-[#F4F7FB] sm:text-4xl">
              Start with the business. Then build the software.
            </h2>

            <p className="mt-5 text-base leading-[1.7] text-[#A7B0BF] sm:text-lg">
              The software should support the workflow — not become another
              process your team has to work around.
            </p>
          </motion.div>

          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {buildSteps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{
                  opacity: 0,
                  y: shouldReduceMotion ? 0 : 18,
                }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: shouldReduceMotion ? 0 : 0.45,
                  delay: shouldReduceMotion ? 0 : index * 0.05,
                }}
                className="relative rounded-2xl border border-[#202936] bg-[#0D1118] p-6"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-semibold tracking-[0.12em] text-[#4F7CFF]">
                    {step.number}
                  </span>

                  {index < buildSteps.length - 1 && (
                    <ArrowRight
                      size={15}
                      className="hidden text-[#202936] lg:block"
                    />
                  )}
                </div>

                <h3 className="mt-7 text-xl font-semibold text-[#E8EDF5]">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#A7B0BF]">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Principle */}
      <section className="border-y border-[#171E28] bg-[#0A0D13]">
        <div className="mx-auto max-w-[900px] px-5 py-[72px] text-center sm:px-7 sm:py-24 lg:px-8 lg:py-[120px]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={reveal}
          >
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl border border-[#4F7CFF]/20 bg-[#4F7CFF]/10 text-[#4F7CFF]">
              <Workflow size={21} />
            </div>

            <p className="mt-7 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#6F7A8A]">
              OUR PRINCIPLE
            </p>

            <h2 className="mt-4 text-3xl font-bold leading-[1.1] tracking-[-0.025em] text-[#F4F7FB] sm:text-4xl">
              Good software should make work clearer.
            </h2>

            <p className="mx-auto mt-5 max-w-[680px] text-base leading-[1.7] text-[#A7B0BF] sm:text-lg">
              We focus on building systems that reduce unnecessary complexity,
              make information easier to access and give teams a better way to
              manage the work they already do.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section>
        <div className="mx-auto max-w-[1280px] px-5 py-[72px] sm:px-7 sm:py-24 lg:px-8 lg:py-[120px]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={reveal}
            className="relative overflow-hidden rounded-2xl border border-[#202936] bg-[#0D1118] px-6 py-12 sm:px-10 sm:py-16 lg:px-16"
          >
            <div className="pointer-events-none absolute right-[-100px] top-[-120px] h-[300px] w-[300px] rounded-full bg-[#4F7CFF]/[0.08] blur-[90px]" />

            <div className="relative max-w-[760px]">
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#4F7CFF]">
                BUILD WHAT YOUR BUSINESS NEEDS
              </p>

              <h2 className="mt-4 text-3xl font-bold leading-[1.1] tracking-[-0.025em] text-[#F4F7FB] sm:text-4xl">
                Have a process that standard software cannot handle?
              </h2>

              <p className="mt-5 max-w-[680px] text-base leading-[1.7] text-[#A7B0BF] sm:text-lg">
                Tell us how your business works, what is slowing the team down,
                and what you want the system to achieve. We can help turn the
                requirement into a practical software solution.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/start-project"
                  className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-[#4F7CFF] px-5 text-sm font-semibold text-white transition hover:brightness-110 hover:shadow-[0_0_28px_rgba(79,124,255,0.18)]"
                >
                  Tell Us What You Need
                  <ArrowRight size={16} />
                </Link>

                <Link
                  href="/solutions"
                  className="inline-flex h-11 items-center justify-center rounded-lg border border-[#202936] bg-transparent px-5 text-sm font-semibold text-[#DCE3ED] transition hover:border-[#4F7CFF]/40 hover:bg-[#121821]"
                >
                  Explore All Solutions
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
