import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  Building2,
  Check,
  ClipboardList,
  FileText,
  GraduationCap,
  LayoutDashboard,
  Package,
  Users,
  Workflow,
} from "lucide-react";
import { Link } from "wouter";

const erpModules = [
  {
    number: "01",
    icon: Users,
    title: "Customers & Sales",
    description:
      "Manage customer information, enquiries, sales activity and related business records from one connected system.",
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
      "Bring stock, orders and operational activity into a clearer workflow that your team can manage.",
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
      "Organize billing-related workflows and business records as part of the wider operating system.",
    items: [
      "Invoices",
      "Payment records",
      "Business expenses",
      "Financial reporting",
    ],
  },
  {
    number: "04",
    icon: Users,
    title: "People & Teams",
    description:
      "Structure employee information, responsibilities and internal processes around the needs of your organization.",
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
      "Turn operational information into dashboards and reports that help teams understand what is happening.",
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
      "Connect different parts of the business so information can move through the right process instead of being managed separately.",
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
      "Bring sales, operations, people and reporting into a system that can grow with the organization.",
  },
  {
    icon: GraduationCap,
    title: "Schools & Institutions",
    description:
      "ERP systems can be structured around areas such as students, staff, fees, records, operations and reporting.",
  },
  {
    icon: ClipboardList,
    title: "Process-Driven Teams",
    description:
      "When a business depends on multiple recurring processes, a connected system can provide a clearer operating structure.",
  },
];

const buildSteps = [
  {
    number: "01",
    title: "Understand",
    description:
      "We map the business structure, departments, users, processes and information that the system needs to support.",
  },
  {
    number: "02",
    title: "Structure",
    description:
      "We define the modules, workflows, permissions and relationships between the different parts of the system.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "The ERP is developed around the agreed requirements rather than forcing the organization into an unrelated workflow.",
  },
  {
    number: "04",
    title: "Evolve",
    description:
      "The system can be expanded as new departments, processes and business requirements emerge.",
  },
];

function ModuleNode({
  icon: Icon,
  label,
  active = false,
}: {
  icon: typeof Users;
  label: string;
  active?: boolean;
}) {
  return (
    <div
      className={`flex items-center gap-3 rounded-xl border px-4 py-3 ${
        active
          ? "border-[#4F7CFF]/30 bg-[#4F7CFF]/[0.08]"
          : "border-[#202936] bg-[#0D1118]"
      }`}
    >
      <div
        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${
          active
            ? "bg-[#4F7CFF]/10 text-[#4F7CFF]"
            : "bg-[#121821] text-[#A7B0BF]"
        }`}
      >
        <Icon size={17} strokeWidth={1.8} />
      </div>

      <span className="text-sm font-medium text-[#DCE3ED]">{label}</span>
    </div>
  );
}

export default function ERPBusinessSystems() {
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
          <div className="absolute left-[5%] top-[-12%] h-[440px] w-[440px] rounded-full bg-[#4F7CFF]/[0.07] blur-[125px]" />
          <div className="absolute right-[8%] top-[20%] h-[340px] w-[340px] rounded-full bg-[#6D5CFF]/[0.05] blur-[115px]" />

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
              ERP & Business Systems
            </div>

            <h1 className="text-4xl font-bold leading-[1.05] tracking-[-0.035em] text-[#F4F7FB] sm:text-5xl lg:text-[64px]">
              One connected system for the way your business operates.
            </h1>

            <p className="mt-6 max-w-[650px] text-base leading-[1.65] text-[#A7B0BF] sm:text-lg">
              Bring important business operations into one structured system —
              customized around your teams, processes, data and the way your
              organization actually works.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/start-project"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-[#4F7CFF] px-5 text-sm font-semibold text-white transition hover:brightness-110 hover:shadow-[0_0_28px_rgba(79,124,255,0.18)]"
              >
                Discuss Your ERP
                <ArrowRight size={16} />
              </Link>

              <a
                href="#erp-modules"
                className="inline-flex h-11 items-center justify-center rounded-lg border border-[#202936] bg-[#0D1118] px-5 text-sm font-semibold text-[#DCE3ED] transition hover:border-[#4F7CFF]/40 hover:bg-[#121821]"
              >
                Explore the System
              </a>
            </div>
          </motion.div>

          {/* ERP Visual */}
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
                    Business ERP
                  </p>
                  <p className="mt-1 text-sm font-semibold text-[#E8EDF5]">
                    Operations Control
                  </p>
                </div>

                <div className="flex items-center gap-2 rounded-full border border-[#202936] bg-[#121821] px-3 py-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#38D9C5]" />
                  <span className="text-[10px] font-medium text-[#A7B0BF]">
                    System Active
                  </span>
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <ModuleNode icon={Users} label="Customers & Sales" active />
                <ModuleNode icon={Package} label="Inventory" />
                <ModuleNode icon={FileText} label="Billing" />
                <ModuleNode icon={Users} label="Employees" />
              </div>

              <div className="my-4 flex justify-center">
                <div className="h-8 w-px bg-gradient-to-b from-[#4F7CFF]/50 to-[#202936]" />
              </div>

              <div className="rounded-xl border border-[#4F7CFF]/20 bg-[#121821] p-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#4F7CFF]/10 text-[#4F7CFF]">
                    <LayoutDashboard size={18} />
                  </div>

                  <div>
                    <p className="text-xs font-semibold text-[#DCE3ED]">
                      Central Business Dashboard
                    </p>
                    <p className="mt-1 text-[10px] text-[#6F7A8A]">
                      Connected operational visibility
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <div className="rounded-xl border border-[#202936] bg-[#121821] p-4">
                  <p className="text-[10px] uppercase tracking-[0.1em] text-[#6F7A8A]">
                    Operations
                  </p>

                  <div className="mt-3 flex items-end gap-1.5">
                    <div className="h-5 w-2 rounded-sm bg-[#4F7CFF]/40" />
                    <div className="h-8 w-2 rounded-sm bg-[#4F7CFF]/55" />
                    <div className="h-6 w-2 rounded-sm bg-[#4F7CFF]/70" />
                    <div className="h-11 w-2 rounded-sm bg-[#4F7CFF]" />
                    <div className="h-9 w-2 rounded-sm bg-[#6D5CFF]/70" />
                  </div>
                </div>

                <div className="rounded-xl border border-[#202936] bg-[#121821] p-4">
                  <p className="text-[10px] uppercase tracking-[0.1em] text-[#6F7A8A]">
                    Reporting
                  </p>

                  <div className="mt-3 flex items-center gap-2">
                    <BarChart3 size={17} className="text-[#38D9C5]" />
                    <span className="text-xs font-medium text-[#DCE3ED]">
                      Business visibility
                    </span>
                  </div>
                </div>
              </div>
            </div>
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
                THE BUSINESS SYSTEM PROBLEM
              </p>

              <h2 className="mt-4 max-w-[520px] text-3xl font-bold leading-[1.1] tracking-[-0.025em] text-[#F4F7FB] sm:text-4xl">
                When every department works separately, the business feels
                disconnected.
              </h2>
            </div>

            <div className="max-w-[700px]">
              <p className="text-base leading-[1.7] text-[#A7B0BF] sm:text-lg">
                Customer information may sit in one place, inventory in another,
                billing somewhere else and internal records in spreadsheets. As
                the business grows, keeping everything aligned becomes harder.
              </p>

              <p className="mt-5 text-base leading-[1.7] text-[#A7B0BF] sm:text-lg">
                A business system brings those operational areas into a more
                structured environment so teams can work from the same
                underlying information.
              </p>

              <div className="mt-8 flex items-start gap-3 border-l border-[#4F7CFF]/50 pl-5">
                <Workflow
                  size={18}
                  className="mt-0.5 shrink-0 text-[#4F7CFF]"
                />

                <p className="text-sm font-medium leading-6 text-[#DCE3ED]">
                  The right ERP should reflect your business structure — not
                  force your business into someone else's structure.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Modules */}
      <section id="erp-modules" className="scroll-mt-20">
        <div className="mx-auto max-w-[1280px] px-5 py-[72px] sm:px-7 sm:py-24 lg:px-8 lg:py-[120px]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={reveal}
            className="max-w-[700px]"
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#4F7CFF]">
              ERP MODULES
            </p>

            <h2 className="mt-4 text-3xl font-bold leading-[1.1] tracking-[-0.025em] text-[#F4F7FB] sm:text-4xl">
              Build the business system around your operations.
            </h2>

            <p className="mt-5 text-base leading-[1.7] text-[#A7B0BF] sm:text-lg">
              ERP does not have to mean every possible feature. We can structure
              the system around the modules and workflows your organization
              actually needs.
            </p>
          </motion.div>

          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {erpModules.map((module, index) => {
              const Icon = module.icon;

              return (
                <motion.article
                  key={module.number}
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
                      {module.number}
                    </span>
                  </div>

                  <h3 className="mt-6 text-xl font-semibold tracking-[-0.015em] text-[#E8EDF5]">
                    {module.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[#A7B0BF]">
                    {module.description}
                  </p>

                  <div className="mt-6 space-y-2.5 border-t border-[#202936] pt-5">
                    {module.items.map((item) => (
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

      {/* Use Cases */}
      <section className="border-y border-[#171E28] bg-[#0A0D13]">
        <div className="mx-auto max-w-[1280px] px-5 py-[72px] sm:px-7 sm:py-24 lg:px-8 lg:py-[120px]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={reveal}
            className="max-w-[700px]"
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#4F7CFF]">
              BUILT AROUND THE ORGANIZATION
            </p>

            <h2 className="mt-4 text-3xl font-bold leading-[1.1] tracking-[-0.025em] text-[#F4F7FB] sm:text-4xl">
              Different businesses need different systems.
            </h2>

            <p className="mt-5 text-base leading-[1.7] text-[#A7B0BF] sm:text-lg">
              The same principle can be applied across different operating
              environments. The modules and workflows are shaped around the
              organization.
            </p>
          </motion.div>

          <div className="mt-12 grid gap-4 lg:grid-cols-3">
            {businessTypes.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.article
                  key={item.title}
                  initial={{
                    opacity: 0,
                    y: shouldReduceMotion ? 0 : 18,
                  }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: shouldReduceMotion ? 0 : 0.45,
                    delay: shouldReduceMotion ? 0 : index * 0.06,
                  }}
                  className="rounded-2xl border border-[#202936] bg-[#0D1118] p-7"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#4F7CFF]/10 text-[#4F7CFF]">
                    <Icon size={20} strokeWidth={1.8} />
                  </div>

                  <h3 className="mt-6 text-xl font-semibold text-[#E8EDF5]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[#A7B0BF]">
                    {item.description}
                  </p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Build Process */}
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
              From business structure to working system.
            </h2>

            <p className="mt-5 text-base leading-[1.7] text-[#A7B0BF] sm:text-lg">
              ERP projects become easier to manage when the business process is
              understood before the software is built.
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
                <span className="text-[10px] font-semibold tracking-[0.12em] text-[#4F7CFF]">
                  {step.number}
                </span>

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
              Your business should be the blueprint.
            </h2>

            <p className="mx-auto mt-5 max-w-[680px] text-base leading-[1.7] text-[#A7B0BF] sm:text-lg">
              Start with the processes, people and information that matter to
              your organization. Then shape the system around them.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
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

            <div className="relative max-w-[780px]">
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#4F7CFF]">
                BUILD YOUR BUSINESS SYSTEM
              </p>

              <h2 className="mt-4 text-3xl font-bold leading-[1.1] tracking-[-0.025em] text-[#F4F7FB] sm:text-4xl">
                Need an ERP that actually fits your organization?
              </h2>

              <p className="mt-5 max-w-[700px] text-base leading-[1.7] text-[#A7B0BF] sm:text-lg">
                Tell us about your business, departments, processes and the
                areas you want to bring together. We'll help turn the
                requirement into a practical business system.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/start-project"
                  className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-[#4F7CFF] px-5 text-sm font-semibold text-white transition hover:brightness-110 hover:shadow-[0_0_28px_rgba(79,124,255,0.18)]"
                >
                  Discuss Your ERP
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
