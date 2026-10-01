import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  Check,
  Compass,
  Lightbulb,
  Rocket,
  Search,
  Settings2,
  Workflow,
} from "lucide-react";
import { Link } from "wouter";

const processSteps = [
  {
    number: "01",
    icon: Search,
    title: "Discover",
    shortTitle: "Understand the Business",
    description:
      "We start by understanding what your business does, how your team currently works and what you are trying to improve.",
    outputs: [
      "Business requirements",
      "Current workflow understanding",
      "Problems and opportunities",
      "Project objectives",
    ],
  },
  {
    number: "02",
    icon: Compass,
    title: "Plan",
    shortTitle: "Define the Right Solution",
    description:
      "We turn the requirement into a clear solution structure — deciding what should be built, how it should work and what matters most.",
    outputs: [
      "Solution direction",
      "Feature priorities",
      "Workflow structure",
      "Implementation plan",
    ],
  },
  {
    number: "03",
    icon: Lightbulb,
    title: "Build",
    shortTitle: "Turn the Plan Into Technology",
    description:
      "The agreed solution is designed and developed around the business requirement, user experience and workflow.",
    outputs: [
      "Digital interfaces",
      "Business systems",
      "Required functionality",
      "Working solution",
    ],
  },
  {
    number: "04",
    icon: Workflow,
    title: "Integrate",
    shortTitle: "Connect the Experience",
    description:
      "Where the solution requires multiple processes or system areas to work together, we structure the experience around those connections.",
    outputs: [
      "Connected workflows",
      "System relationships",
      "Data flow structure",
      "Business process alignment",
    ],
  },
  {
    number: "05",
    icon: Rocket,
    title: "Test & Launch",
    shortTitle: "Make It Ready for Use",
    description:
      "The solution is reviewed, refined and prepared for practical use so the business can start working with it confidently.",
    outputs: [
      "Functional review",
      "Experience refinement",
      "Launch preparation",
      "Handover",
    ],
  },
  {
    number: "06",
    icon: Settings2,
    title: "Improve",
    shortTitle: "Keep Building Forward",
    description:
      "A business changes over time. The technology can evolve with it as new requirements, opportunities and improvements emerge.",
    outputs: [
      "Feedback",
      "Improvements",
      "New requirements",
      "Future expansion",
    ],
  },
];

const principles = [
  {
    title: "Business First",
    description:
      "We begin with the business problem instead of assuming a technology solution before understanding the requirement.",
  },
  {
    title: "Clear Communication",
    description:
      "The project should remain understandable throughout the process, from initial requirement to working solution.",
  },
  {
    title: "Useful Technology",
    description:
      "Every feature should have a purpose. Complexity should only be introduced when it creates meaningful value.",
  },
  {
    title: "Built to Evolve",
    description:
      "The first version does not have to solve every future problem. It should create a foundation that can grow.",
  },
];

function ProcessConnector({ mobile = false }: { mobile?: boolean }) {
  if (mobile) {
    return (
      <div className="flex h-8 justify-center">
        <div className="h-full w-px bg-gradient-to-b from-[#4F7CFF]/40 to-[#202936]" />
      </div>
    );
  }

  return (
    <div className="hidden h-px flex-1 bg-gradient-to-r from-[#202936] via-[#4F7CFF]/30 to-[#202936] lg:block" />
  );
}

export default function Process() {
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

        <div className="relative mx-auto grid min-h-[650px] max-w-[1280px] items-center gap-16 px-5 py-28 sm:px-7 lg:grid-cols-[1fr_0.85fr] lg:px-8 lg:py-32">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={reveal}
            className="max-w-[700px]"
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#202936] bg-[#0D1118]/80 px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#6F7A8A]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#4F7CFF]" />
              How We Work
            </div>

            <h1 className="text-4xl font-bold leading-[1.05] tracking-[-0.035em] text-[#F4F7FB] sm:text-5xl lg:text-[64px]">
              From business problem to working solution.
            </h1>

            <p className="mt-6 max-w-[680px] text-base leading-[1.65] text-[#A7B0BF] sm:text-lg">
              We start with how your business works, identify what needs to
              improve and then build the right combination of digital
              experiences, software, systems and automation.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/start-project"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-[#4F7CFF] px-5 text-sm font-semibold text-white transition hover:brightness-110 hover:shadow-[0_0_28px_rgba(79,124,255,0.18)]"
              >
                Start Your Project
                <ArrowRight size={16} />
              </Link>

              <a
                href="#process"
                className="inline-flex h-11 items-center justify-center rounded-lg border border-[#202936] bg-[#0D1118] px-5 text-sm font-semibold text-[#DCE3ED] transition hover:border-[#4F7CFF]/40 hover:bg-[#121821]"
              >
                See Our Process
              </a>
            </div>
          </motion.div>

          {/* Hero Process Visual */}
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.7,
              delay: shouldReduceMotion ? 0 : 0.1,
            }}
            className="relative"
          >
            <div className="rounded-2xl border border-[#202936] bg-[#0D1118] p-5 shadow-[0_24px_80px_rgba(0,0,0,0.28)] sm:p-7">
              <div className="mb-6 flex items-center justify-between border-b border-[#202936] pb-5">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#6F7A8A]">
                    Project Flow
                  </p>

                  <p className="mt-1 text-sm font-semibold text-[#E8EDF5]">
                    Requirement → Solution
                  </p>
                </div>

                <Workflow size={18} className="text-[#4F7CFF]" />
              </div>

              <div className="space-y-3">
                {processSteps.slice(0, 5).map((step, index) => {
                  const Icon = step.icon;

                  return (
                    <div key={step.number}>
                      <div
                        className={`flex items-center gap-4 rounded-xl border p-4 ${
                          index === 0
                            ? "border-[#4F7CFF]/25 bg-[#4F7CFF]/[0.06]"
                            : "border-[#202936] bg-[#121821]"
                        }`}
                      >
                        <div
                          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${
                            index === 0
                              ? "bg-[#4F7CFF]/10 text-[#4F7CFF]"
                              : "bg-[#0D1118] text-[#A7B0BF]"
                          }`}
                        >
                          <Icon size={18} />
                        </div>

                        <div className="min-w-0 flex-1">
                          <div className="flex items-center gap-2">
                            <span className="text-[9px] font-semibold tracking-[0.12em] text-[#6F7A8A]">
                              {step.number}
                            </span>

                            <p className="text-sm font-semibold text-[#DCE3ED]">
                              {step.title}
                            </p>
                          </div>

                          <p className="mt-1 text-[10px] text-[#6F7A8A]">
                            {step.shortTitle}
                          </p>
                        </div>

                        {index === 0 && (
                          <span className="hidden rounded-full border border-[#4F7CFF]/20 bg-[#4F7CFF]/10 px-2 py-1 text-[9px] font-medium text-[#4F7CFF] sm:block">
                            Start
                          </span>
                        )}
                      </div>

                      {index < 4 && (
                        <div className="ml-5 h-3 w-px bg-[#202936]" />
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Process Intro */}
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
                THE APPROACH
              </p>

              <h2 className="mt-4 max-w-[520px] text-3xl font-bold leading-[1.1] tracking-[-0.025em] text-[#F4F7FB] sm:text-4xl">
                You don't need to know the technology.
              </h2>
            </div>

            <div className="max-w-[700px]">
              <p className="text-base leading-[1.7] text-[#A7B0BF] sm:text-lg">
                You know your business. You know what is slowing the team down,
                what you want to improve and where you want to go.
              </p>

              <p className="mt-5 text-base leading-[1.7] text-[#A7B0BF] sm:text-lg">
                Our job is to translate that requirement into the right digital
                solution and make the technology understandable throughout the
                process.
              </p>

              <div className="mt-8 flex items-start gap-3 border-l border-[#4F7CFF]/50 pl-5">
                <Check size={18} className="mt-0.5 shrink-0 text-[#38D9C5]" />

                <p className="text-sm font-medium leading-6 text-[#DCE3ED]">
                  Your requirement stays at the center of the project from
                  beginning to launch.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Process Timeline */}
      <section id="process" className="scroll-mt-20">
        <div className="mx-auto max-w-[1280px] px-5 py-[72px] sm:px-7 sm:py-24 lg:px-8 lg:py-[120px]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={reveal}
            className="max-w-[720px]"
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#4F7CFF]">
              OUR SIX STAGES
            </p>

            <h2 className="mt-4 text-3xl font-bold leading-[1.1] tracking-[-0.025em] text-[#F4F7FB] sm:text-4xl">
              A clear path from idea to implementation.
            </h2>

            <p className="mt-5 text-base leading-[1.7] text-[#A7B0BF] sm:text-lg">
              Every project is different, but the underlying process gives the
              work a clear structure.
            </p>
          </motion.div>

          {/* Desktop timeline */}
          <div className="mt-14 hidden lg:block">
            <div className="flex items-start gap-0">
              {processSteps.map((step, index) => {
                const Icon = step.icon;

                return (
                  <div
                    key={step.number}
                    className="flex min-w-0 flex-1 items-start"
                  >
                    <div className="w-full">
                      <motion.div
                        initial={{
                          opacity: 0,
                          y: shouldReduceMotion ? 0 : 18,
                        }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.25 }}
                        transition={{
                          duration: shouldReduceMotion ? 0 : 0.45,
                          delay: shouldReduceMotion ? 0 : index * 0.06,
                        }}
                      >
                        <div className="relative flex items-center">
                          <div
                            className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border ${
                              index === 0
                                ? "border-[#4F7CFF]/30 bg-[#4F7CFF]/10 text-[#4F7CFF]"
                                : "border-[#202936] bg-[#0D1118] text-[#A7B0BF]"
                            }`}
                          >
                            <Icon size={21} strokeWidth={1.8} />
                          </div>

                          {index < processSteps.length - 1 && (
                            <ProcessConnector />
                          )}
                        </div>

                        <div className="pr-6 pt-7">
                          <div className="flex items-center gap-2">
                            <span className="text-[10px] font-semibold tracking-[0.12em] text-[#4F7CFF]">
                              {step.number}
                            </span>

                            <span className="text-[10px] uppercase tracking-[0.08em] text-[#6F7A8A]">
                              Stage
                            </span>
                          </div>

                          <h3 className="mt-3 text-xl font-semibold text-[#E8EDF5]">
                            {step.title}
                          </h3>

                          <p className="mt-2 text-xs font-medium text-[#DCE3ED]">
                            {step.shortTitle}
                          </p>

                          <p className="mt-4 text-sm leading-6 text-[#A7B0BF]">
                            {step.description}
                          </p>

                          <div className="mt-6 space-y-2">
                            {step.outputs.map((output) => (
                              <div
                                key={output}
                                className="flex items-center gap-2 text-xs text-[#6F7A8A]"
                              >
                                <Check
                                  size={13}
                                  className="shrink-0 text-[#38D9C5]"
                                />

                                {output}
                              </div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Mobile / tablet timeline */}
          <div className="mt-12 lg:hidden">
            {processSteps.map((step, index) => {
              const Icon = step.icon;

              return (
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
                    delay: shouldReduceMotion ? 0 : index * 0.04,
                  }}
                >
                  <div className="rounded-2xl border border-[#202936] bg-[#0D1118] p-6">
                    <div className="flex items-start gap-4">
                      <div
                        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border ${
                          index === 0
                            ? "border-[#4F7CFF]/30 bg-[#4F7CFF]/10 text-[#4F7CFF]"
                            : "border-[#202936] bg-[#121821] text-[#A7B0BF]"
                        }`}
                      >
                        <Icon size={20} />
                      </div>

                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] font-semibold tracking-[0.12em] text-[#4F7CFF]">
                            {step.number}
                          </span>

                          <span className="text-[10px] uppercase tracking-[0.08em] text-[#6F7A8A]">
                            Stage
                          </span>
                        </div>

                        <h3 className="mt-2 text-xl font-semibold text-[#E8EDF5]">
                          {step.title}
                        </h3>

                        <p className="mt-1 text-xs font-medium text-[#DCE3ED]">
                          {step.shortTitle}
                        </p>
                      </div>
                    </div>

                    <p className="mt-5 text-sm leading-6 text-[#A7B0BF]">
                      {step.description}
                    </p>

                    <div className="mt-5 border-t border-[#202936] pt-5">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[#6F7A8A]">
                        What happens
                      </p>

                      <div className="mt-3 grid gap-2 sm:grid-cols-2">
                        {step.outputs.map((output) => (
                          <div
                            key={output}
                            className="flex items-center gap-2 text-xs text-[#A7B0BF]"
                          >
                            <Check
                              size={13}
                              className="shrink-0 text-[#38D9C5]"
                            />

                            {output}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {index < processSteps.length - 1 && (
                    <ProcessConnector mobile />
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Working Principle */}
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
                WORKING PRINCIPLES
              </p>

              <h2 className="mt-4 max-w-[540px] text-3xl font-bold leading-[1.1] tracking-[-0.025em] text-[#F4F7FB] sm:text-4xl">
                The process stays simple even when the solution is complex.
              </h2>

              <p className="mt-5 max-w-[600px] text-base leading-[1.7] text-[#A7B0BF] sm:text-lg">
                Good project communication creates clarity around what is being
                built, why it is being built and what happens next.
              </p>
            </motion.div>

            <div className="grid gap-4 sm:grid-cols-2">
              {principles.map((principle, index) => (
                <motion.div
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
                  className="rounded-2xl border border-[#202936] bg-[#0D1118] p-6"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#4F7CFF]/10 text-[#4F7CFF]">
                    <Check size={18} />
                  </div>

                  <h3 className="mt-5 text-lg font-semibold text-[#E8EDF5]">
                    {principle.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[#A7B0BF]">
                    {principle.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* No Tech Knowledge Required */}
      <section>
        <div className="mx-auto max-w-[1000px] px-5 py-[72px] sm:px-7 sm:py-24 lg:px-8 lg:py-[120px]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={reveal}
            className="rounded-2xl border border-[#202936] bg-[#0D1118] p-7 sm:p-10"
          >
            <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#4F7CFF]/20 bg-[#4F7CFF]/10 text-[#4F7CFF]">
                <Lightbulb size={21} />
              </div>

              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#6F7A8A]">
                  YOUR ROLE
                </p>

                <h2 className="mt-3 text-2xl font-bold leading-[1.15] tracking-[-0.02em] text-[#F4F7FB] sm:text-3xl">
                  You bring the business problem. We help shape the solution.
                </h2>

                <p className="mt-4 max-w-[720px] text-base leading-[1.7] text-[#A7B0BF]">
                  You do not need to arrive with a technical specification.
                  Explain what you want to build, what is not working today and
                  what you want the system to achieve. We can work from there.
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {[
                    "Business problem",
                    "Current workflow",
                    "Desired outcome",
                    "Business constraints",
                    "Future direction",
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
                LET'S BUILD
              </p>

              <h2 className="mt-4 text-3xl font-bold leading-[1.1] tracking-[-0.025em] text-[#F4F7FB] sm:text-4xl">
                Have a business problem worth solving?
              </h2>

              <p className="mt-5 max-w-[700px] text-base leading-[1.7] text-[#A7B0BF] sm:text-lg">
                Tell us what you're trying to build, improve or automate. We'll
                start by understanding the requirement and help shape the right
                solution.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/start-project"
                  className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-[#4F7CFF] px-5 text-sm font-semibold text-white transition hover:brightness-110 hover:shadow-[0_0_28px_rgba(79,124,255,0.18)]"
                >
                  Start Your Project
                  <ArrowRight size={16} />
                </Link>

                <Link
                  href="/solutions"
                  className="inline-flex h-11 items-center justify-center rounded-lg border border-[#202936] bg-transparent px-5 text-sm font-semibold text-[#DCE3ED] transition hover:border-[#4F7CFF]/40 hover:bg-[#121821]"
                >
                  Explore Our Solutions
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
