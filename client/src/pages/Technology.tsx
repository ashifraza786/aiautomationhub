import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  Bot,
  Check,
  Code2,
  Database,
  FileText,
  GitBranch,
  Globe,
  Layers3,
  LayoutDashboard,
  Network,
  Settings2,
  Sparkles,
  Workflow,
  Zap,
} from "lucide-react";
import { Link } from "wouter";

const capabilityLayers = [
  {
    number: "01",
    icon: Globe,
    title: "Digital Experiences",
    description:
      "Websites, landing pages, e-commerce experiences and web applications designed around the people using them.",
    items: [
      "Business websites",
      "Landing pages",
      "E-commerce experiences",
      "Web applications",
    ],
  },
  {
    number: "02",
    icon: Code2,
    title: "Business Software",
    description:
      "Custom software and internal tools designed around the workflows and information your business needs.",
    items: [
      "Business dashboards",
      "Internal tools",
      "Custom applications",
      "Operational systems",
    ],
  },
  {
    number: "03",
    icon: Layers3,
    title: "Business Systems",
    description:
      "ERP and connected business systems that bring important operational areas into a more structured environment.",
    items: [
      "ERP systems",
      "Business modules",
      "Centralized records",
      "Operational workflows",
    ],
  },
  {
    number: "04",
    icon: Workflow,
    title: "Automation",
    description:
      "Automation can be introduced where repetitive processes create unnecessary manual work and delays.",
    items: [
      "Workflow automation",
      "Lead processes",
      "Communication workflows",
      "Process improvement",
    ],
  },
  {
    number: "05",
    icon: Sparkles,
    title: "AI Capabilities",
    description:
      "AI can be applied where it has a clear business purpose — as part of a solution rather than as decoration.",
    items: [
      "AI assistants",
      "AI-powered workflows",
      "Intelligent business processes",
      "Future AI systems",
    ],
  },
  {
    number: "06",
    icon: BarChartIcon,
    title: "Business Intelligence",
    description:
      "Structured business information can become easier to understand through dashboards, reporting and decision-support experiences.",
    items: [
      "Business dashboards",
      "Reporting",
      "Performance visibility",
      "Data-driven decisions",
    ],
  },
];

const principles = [
  {
    icon: TargetIcon,
    title: "Start With the Problem",
    description:
      "Technology is selected and shaped around the business requirement instead of starting with a technology trend.",
  },
  {
    icon: Workflow,
    title: "Design Around the Workflow",
    description:
      "The system should support how people actually work, communicate and move information through the business.",
  },
  {
    icon: Network,
    title: "Connect What Matters",
    description:
      "Where multiple systems or processes depend on each other, the experience should feel connected rather than fragmented.",
  },
  {
    icon: Zap,
    title: "Add Intelligence Where Useful",
    description:
      "AI and automation should have a clear job to perform and a meaningful reason to exist inside the solution.",
  },
];

const technologyJourney = [
  {
    number: "01",
    title: "Business Need",
    description: "What are you trying to build, improve or solve?",
  },
  {
    number: "02",
    title: "System Design",
    description: "What should the digital solution actually do?",
  },
  {
    number: "03",
    title: "Technology",
    description: "Which capabilities are appropriate for the requirement?",
  },
  {
    number: "04",
    title: "Working Solution",
    description: "How does the technology become useful to the business?",
  },
];

function BarChartIcon(props: React.ComponentProps<typeof Database>) {
  return <Database {...props} />;
}

function TargetIcon(props: React.ComponentProps<typeof Network>) {
  return <Network {...props} />;
}

function CapabilityNode({
  icon: Icon,
  label,
  active = false,
}: {
  icon: typeof Globe;
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

export default function Technology() {
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
          <div className="absolute left-[7%] top-[-12%] h-[430px] w-[430px] rounded-full bg-[#4F7CFF]/[0.07] blur-[125px]" />
          <div className="absolute right-[5%] top-[18%] h-[340px] w-[340px] rounded-full bg-[#6D5CFF]/[0.05] blur-[115px]" />

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
              Technology & Capabilities
            </div>

            <h1 className="text-4xl font-bold leading-[1.05] tracking-[-0.035em] text-[#F4F7FB] sm:text-5xl lg:text-[64px]">
              Technology should serve the business.
            </h1>

            <p className="mt-6 max-w-[650px] text-base leading-[1.65] text-[#A7B0BF] sm:text-lg">
              We combine digital experiences, custom software, business systems,
              automation and emerging AI capabilities to build technology around
              the problem that needs to be solved.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/start-project"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-[#4F7CFF] px-5 text-sm font-semibold text-white transition hover:brightness-110 hover:shadow-[0_0_28px_rgba(79,124,255,0.18)]"
              >
                Discuss Your Requirement
                <ArrowRight size={16} />
              </Link>

              <a
                href="#capabilities"
                className="inline-flex h-11 items-center justify-center rounded-lg border border-[#202936] bg-[#0D1118] px-5 text-sm font-semibold text-[#DCE3ED] transition hover:border-[#4F7CFF]/40 hover:bg-[#121821]"
              >
                Explore Capabilities
              </a>
            </div>
          </motion.div>

          {/* Technology System Visual */}
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
                    Technology Layer
                  </p>

                  <p className="mt-1 text-sm font-semibold text-[#E8EDF5]">
                    Business Technology System
                  </p>
                </div>

                <div className="flex items-center gap-2 rounded-full border border-[#202936] bg-[#121821] px-3 py-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#38D9C5]" />

                  <span className="text-[10px] font-medium text-[#A7B0BF]">
                    Capability Map
                  </span>
                </div>
              </div>

              <div className="rounded-xl border border-[#202936] bg-[#080A0F] p-4 sm:p-5">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#4F7CFF]/10 text-[#4F7CFF]">
                    <Layers3 size={19} />
                  </div>

                  <div>
                    <p className="text-xs font-semibold text-[#DCE3ED]">
                      Business Requirement
                    </p>

                    <p className="mt-1 text-[10px] text-[#6F7A8A]">
                      Technology follows the requirement
                    </p>
                  </div>
                </div>

                <div className="my-4 flex justify-center">
                  <div className="h-7 w-px bg-gradient-to-b from-[#4F7CFF]/50 to-[#202936]" />
                </div>

                <div className="rounded-xl border border-[#4F7CFF]/20 bg-[#4F7CFF]/[0.05] p-4">
                  <div className="flex items-center justify-center gap-2 text-[#4F7CFF]">
                    <Settings2 size={17} />
                    <span className="text-xs font-semibold">
                      Solution Architecture
                    </span>
                  </div>
                </div>

                <div className="my-4 flex justify-center">
                  <div className="h-7 w-px bg-gradient-to-b from-[#202936] to-[#4F7CFF]/50" />
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  <CapabilityNode icon={Globe} label="Digital Experience" />

                  <CapabilityNode
                    icon={Code2}
                    label="Business Software"
                    active
                  />

                  <CapabilityNode icon={Layers3} label="Business Systems" />

                  <CapabilityNode icon={Workflow} label="Automation" />
                </div>

                <div className="mt-3 grid gap-3 sm:grid-cols-2">
                  <CapabilityNode icon={Bot} label="AI Capabilities" />

                  <CapabilityNode
                    icon={BarChartIcon}
                    label="Business Intelligence"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Technology Philosophy */}
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
                OUR TECHNOLOGY PHILOSOPHY
              </p>

              <h2 className="mt-4 max-w-[520px] text-3xl font-bold leading-[1.1] tracking-[-0.025em] text-[#F4F7FB] sm:text-4xl">
                We don't start with technology. We start with the problem.
              </h2>
            </div>

            <div className="max-w-[700px]">
              <p className="text-base leading-[1.7] text-[#A7B0BF] sm:text-lg">
                A business does not need technology simply because a technology
                exists. It needs technology when that technology can make
                something clearer, faster, easier, more connected or more
                useful.
              </p>

              <p className="mt-5 text-base leading-[1.7] text-[#A7B0BF] sm:text-lg">
                That is why our technology approach stays flexible. The solution
                is shaped around the requirement, the workflow and the stage of
                the business.
              </p>

              <div className="mt-8 flex items-start gap-3 border-l border-[#4F7CFF]/50 pl-5">
                <Sparkles
                  size={18}
                  className="mt-0.5 shrink-0 text-[#4F7CFF]"
                />

                <p className="text-sm font-medium leading-6 text-[#DCE3ED]">
                  Technology should reduce complexity — not become another
                  source of it.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Capabilities */}
      <section id="capabilities" className="scroll-mt-20">
        <div className="mx-auto max-w-[1280px] px-5 py-[72px] sm:px-7 sm:py-24 lg:px-8 lg:py-[120px]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={reveal}
            className="max-w-[700px]"
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#4F7CFF]">
              CAPABILITY AREAS
            </p>

            <h2 className="mt-4 text-3xl font-bold leading-[1.1] tracking-[-0.025em] text-[#F4F7FB] sm:text-4xl">
              The building blocks behind our solutions.
            </h2>

            <p className="mt-5 text-base leading-[1.7] text-[#A7B0BF] sm:text-lg">
              These are capability areas we can bring together depending on what
              the business actually needs.
            </p>
          </motion.div>

          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {capabilityLayers.map((layer, index) => {
              const Icon = layer.icon;

              return (
                <motion.article
                  key={layer.number}
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
                      {layer.number}
                    </span>
                  </div>

                  <h3 className="mt-6 text-xl font-semibold tracking-[-0.015em] text-[#E8EDF5]">
                    {layer.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[#A7B0BF]">
                    {layer.description}
                  </p>

                  <div className="mt-6 space-y-2.5 border-t border-[#202936] pt-5">
                    {layer.items.map((item) => (
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

      {/* Technology Journey */}
      <section className="border-y border-[#171E28] bg-[#0A0D13]">
        <div className="mx-auto max-w-[1280px] px-5 py-[72px] sm:px-7 sm:py-24 lg:px-8 lg:py-[120px]">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={reveal}
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#4F7CFF]">
                FROM REQUIREMENT TO SYSTEM
              </p>

              <h2 className="mt-4 max-w-[540px] text-3xl font-bold leading-[1.1] tracking-[-0.025em] text-[#F4F7FB] sm:text-4xl">
                The technology follows the business journey.
              </h2>

              <p className="mt-5 max-w-[600px] text-base leading-[1.7] text-[#A7B0BF] sm:text-lg">
                We translate a business requirement into a system that people
                can actually use. The technology layer exists to support that
                journey.
              </p>
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
                    Solution journey
                  </p>

                  <p className="mt-1 text-sm font-semibold text-[#E8EDF5]">
                    Business → Technology → Solution
                  </p>
                </div>

                <GitBranch size={17} className="text-[#6F7A8A]" />
              </div>

              <div className="space-y-3">
                {technologyJourney.map((step, index) => (
                  <div key={step.number}>
                    <div className="rounded-xl border border-[#202936] bg-[#121821] p-4">
                      <div className="flex items-center gap-4">
                        <div
                          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${
                            index === 0
                              ? "bg-[#4F7CFF]/10 text-[#4F7CFF]"
                              : "bg-[#0D1118] text-[#6F7A8A]"
                          }`}
                        >
                          <span className="text-xs font-semibold">
                            {step.number}
                          </span>
                        </div>

                        <div>
                          <p className="text-sm font-semibold text-[#DCE3ED]">
                            {step.title}
                          </p>

                          <p className="mt-1 text-xs leading-5 text-[#6F7A8A]">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </div>

                    {index < technologyJourney.length - 1 && (
                      <div className="ml-8 h-4 w-px bg-[#202936]" />
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Principles */}
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
              HOW WE THINK ABOUT TECHNOLOGY
            </p>

            <h2 className="mt-4 text-3xl font-bold leading-[1.1] tracking-[-0.025em] text-[#F4F7FB] sm:text-4xl">
              Capable technology is useful technology.
            </h2>

            <p className="mt-5 text-base leading-[1.7] text-[#A7B0BF] sm:text-lg">
              The most advanced technology is not automatically the right
              technology. The right solution is the one that meaningfully
              supports the business.
            </p>
          </motion.div>

          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {principles.map((principle, index) => {
              const Icon = principle.icon;

              return (
                <motion.article
                  key={principle.title}
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
                  className="rounded-2xl border border-[#202936] bg-[#0D1118] p-6 sm:p-7"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#4F7CFF]/10 text-[#4F7CFF]">
                    <Icon size={20} strokeWidth={1.8} />
                  </div>

                  <h3 className="mt-6 text-xl font-semibold text-[#E8EDF5]">
                    {principle.title}
                  </h3>

                  <p className="mt-3 max-w-[560px] text-sm leading-6 text-[#A7B0BF]">
                    {principle.description}
                  </p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Important Reality */}
      <section className="border-y border-[#171E28] bg-[#0A0D13]">
        <div className="mx-auto max-w-[1000px] px-5 py-[72px] sm:px-7 sm:py-24 lg:px-8 lg:py-[120px]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={reveal}
            className="rounded-2xl border border-[#202936] bg-[#0D1118] p-7 sm:p-10"
          >
            <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#202936] bg-[#121821] text-[#4F7CFF]">
                <Settings2 size={19} />
              </div>

              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#6F7A8A]">
                  THE RIGHT APPROACH
                </p>

                <h2 className="mt-3 text-2xl font-bold leading-[1.15] tracking-[-0.02em] text-[#F4F7FB] sm:text-3xl">
                  Not every business needs every technology.
                </h2>

                <p className="mt-4 max-w-[720px] text-base leading-[1.7] text-[#A7B0BF]">
                  We keep the technology conversation focused on the actual
                  requirement. If a simpler solution is enough, the system
                  should stay simple. If the business needs more sophisticated
                  capabilities, the architecture can evolve accordingly.
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {[
                    "Business requirement",
                    "Workflow",
                    "User experience",
                    "System structure",
                    "Future growth",
                  ].map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-[#202936] bg-[#121821] px-3 py-1.5 text-[11px] font-medium text-[#A7B0BF]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Future Direction */}
      <section>
        <div className="mx-auto max-w-[1280px] px-5 py-[72px] sm:px-7 sm:py-24 lg:px-8 lg:py-[120px]">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={reveal}
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#4F7CFF]">
                WHERE TECHNOLOGY CAN GO
              </p>

              <h2 className="mt-4 max-w-[560px] text-3xl font-bold leading-[1.1] tracking-[-0.025em] text-[#F4F7FB] sm:text-4xl">
                Start with a solution. Build toward an intelligent system.
              </h2>

              <p className="mt-5 max-w-[620px] text-base leading-[1.7] text-[#A7B0BF] sm:text-lg">
                Over time, connected digital experiences, business software,
                ERP, automation and AI can evolve into a more unified business
                technology ecosystem.
              </p>

              <div className="mt-8">
                <Link
                  href="/solutions"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#DCE3ED] transition hover:text-white"
                >
                  Explore What We Build
                  <ArrowRight size={15} />
                </Link>
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
              <div className="space-y-3">
                {[
                  {
                    icon: Globe,
                    label: "Digital Presence",
                  },
                  {
                    icon: LayoutDashboard,
                    label: "Business Systems",
                  },
                  {
                    icon: Workflow,
                    label: "Automation",
                  },
                  {
                    icon: Bot,
                    label: "Intelligence",
                  },
                ].map((item, index, items) => {
                  const Icon = item.icon;

                  return (
                    <div key={item.label}>
                      <div
                        className={`flex items-center gap-4 rounded-xl border p-4 ${
                          index === items.length - 1
                            ? "border-[#4F7CFF]/25 bg-[#4F7CFF]/[0.06]"
                            : "border-[#202936] bg-[#121821]"
                        }`}
                      >
                        <div
                          className={`flex h-10 w-10 items-center justify-center rounded-lg ${
                            index === items.length - 1
                              ? "bg-[#4F7CFF]/10 text-[#4F7CFF]"
                              : "bg-[#0D1118] text-[#A7B0BF]"
                          }`}
                        >
                          <Icon size={18} />
                        </div>

                        <div className="flex-1">
                          <p className="text-sm font-semibold text-[#DCE3ED]">
                            {item.label}
                          </p>

                          <p className="mt-1 text-[10px] text-[#6F7A8A]">
                            {index === items.length - 1
                              ? "Future direction"
                              : "Capability layer"}
                          </p>
                        </div>

                        {index === items.length - 1 && (
                          <Sparkles size={15} className="text-[#4F7CFF]" />
                        )}
                      </div>

                      {index < items.length - 1 && (
                        <div className="ml-5 h-4 w-px bg-[#202936]" />
                      )}
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-[#171E28]">
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
                BUILD WITH PURPOSE
              </p>

              <h2 className="mt-4 text-3xl font-bold leading-[1.1] tracking-[-0.025em] text-[#F4F7FB] sm:text-4xl">
                Have a business requirement that needs the right technology?
              </h2>

              <p className="mt-5 max-w-[700px] text-base leading-[1.7] text-[#A7B0BF] sm:text-lg">
                Tell us what you're trying to build, improve or automate. We'll
                help identify the technology and solution structure that makes
                sense for the requirement.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/start-project"
                  className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-[#4F7CFF] px-5 text-sm font-semibold text-white transition hover:brightness-110 hover:shadow-[0_0_28px_rgba(79,124,255,0.18)]"
                >
                  Discuss Your Requirement
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
