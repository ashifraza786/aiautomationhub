import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  Check,
  Megaphone,
  MousePointerClick,
  Repeat,
  Target,
  TrendingUp,
  Users,
  Workflow,
  Zap,
} from "lucide-react";
import { Link } from "wouter";

const growthAreas = [
  {
    number: "01",
    icon: TrendingUp,
    title: "Build",
    description:
      "Create the digital foundation your business needs before trying to scale activity around it.",
    items: [
      "Business websites",
      "Landing pages",
      "E-commerce",
      "Business software",
    ],
  },
  {
    number: "02",
    icon: Megaphone,
    title: "Promote",
    description:
      "Reach the right audience through focused campaigns, product promotion and digital marketing activity.",
    items: [
      "Digital advertising",
      "Product promotion",
      "Campaign strategy",
      "Lead generation",
    ],
  },
  {
    number: "03",
    icon: MousePointerClick,
    title: "Capture",
    description:
      "Turn attention into measurable business opportunities through clear customer journeys and lead capture.",
    items: [
      "Lead capture",
      "Landing experiences",
      "Enquiry flows",
      "Customer journeys",
    ],
  },
  {
    number: "04",
    icon: Workflow,
    title: "Automate",
    description:
      "Reduce repetitive work around customer handling, follow-ups and recurring business processes.",
    items: [
      "Lead workflows",
      "Follow-ups",
      "Customer communication",
      "Process automation",
    ],
  },
  {
    number: "05",
    icon: Target,
    title: "Grow",
    description:
      "Use the connected system to improve response, customer handling, operational efficiency and visibility.",
    items: [
      "Better response speed",
      "Customer handling",
      "Operational efficiency",
      "Business visibility",
    ],
  },
  {
    number: "06",
    icon: BarChart3,
    title: "Analyze",
    description:
      "Use business information and performance signals to understand what is working and what needs improvement.",
    items: [
      "Performance tracking",
      "Business reporting",
      "Campaign insights",
      "Continuous improvement",
    ],
  },
];

const growthFlow = [
  {
    icon: TrendingUp,
    title: "Build",
    description: "Create the right digital foundation.",
  },
  {
    icon: Megaphone,
    title: "Promote",
    description: "Reach the right audience.",
  },
  {
    icon: MousePointerClick,
    title: "Capture",
    description: "Turn attention into opportunities.",
  },
  {
    icon: Workflow,
    title: "Automate",
    description: "Reduce repetitive work.",
  },
  {
    icon: TrendingUp,
    title: "Grow",
    description: "Improve business performance.",
  },
  {
    icon: BarChart3,
    title: "Analyze",
    description: "Learn and improve the system.",
  },
];

const buildSteps = [
  {
    number: "01",
    title: "Understand",
    description:
      "We understand the business, offer, audience, current digital presence and growth objective.",
  },
  {
    number: "02",
    title: "Build",
    description:
      "We create or improve the digital foundation needed to support the customer journey.",
  },
  {
    number: "03",
    title: "Promote",
    description:
      "We structure the appropriate promotional and lead-generation activities around the business goal.",
  },
  {
    number: "04",
    title: "Improve",
    description:
      "Performance, customer behaviour and operational feedback help shape the next iteration.",
  },
];

function LoopNode({
  icon: Icon,
  title,
  active = false,
}: {
  icon: typeof TrendingUp;
  title: string;
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

      <span className="text-sm font-medium text-[#DCE3ED]">{title}</span>
    </div>
  );
}

export default function BusinessGrowth() {
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
              Business Growth
            </div>

            <h1 className="text-4xl font-bold leading-[1.05] tracking-[-0.035em] text-[#F4F7FB] sm:text-5xl lg:text-[64px]">
              Build the right system. Then grow with it.
            </h1>

            <p className="mt-6 max-w-[650px] text-base leading-[1.65] text-[#A7B0BF] sm:text-lg">
              Your digital presence is only the beginning. We help businesses
              build the right technology, reach the right customers, automate
              operations and use information to improve how they grow.
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
                href="#growth-system"
                className="inline-flex h-11 items-center justify-center rounded-lg border border-[#202936] bg-[#0D1118] px-5 text-sm font-semibold text-[#DCE3ED] transition hover:border-[#4F7CFF]/40 hover:bg-[#121821]"
              >
                Explore the Growth System
              </a>
            </div>
          </motion.div>

          {/* Growth System Visual */}
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
                    Growth System
                  </p>
                  <p className="mt-1 text-sm font-semibold text-[#E8EDF5]">
                    Build • Promote • Automate • Grow
                  </p>
                </div>

                <div className="flex items-center gap-2 rounded-full border border-[#202936] bg-[#121821] px-3 py-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#38D9C5]" />
                  <span className="text-[10px] font-medium text-[#A7B0BF]">
                    Connected
                  </span>
                </div>
              </div>

              <div className="relative mx-auto max-w-[520px]">
                <div className="grid gap-3 sm:grid-cols-2">
                  <LoopNode icon={TrendingUp} title="Build" active />
                  <LoopNode icon={Megaphone} title="Promote" />
                  <LoopNode icon={MousePointerClick} title="Capture" />
                  <LoopNode icon={Workflow} title="Automate" />
                </div>

                <div className="my-4 flex items-center justify-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#4F7CFF]/25 bg-[#4F7CFF]/[0.08] text-[#4F7CFF]">
                    <Repeat size={22} />
                  </div>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  <LoopNode icon={TrendingUp} title="Grow" />
                  <LoopNode icon={BarChart3} title="Analyze" />
                </div>

                <div className="mt-4 rounded-xl border border-[#202936] bg-[#121821] p-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#38D9C5]/10 text-[#38D9C5]">
                      <Zap size={17} />
                    </div>

                    <div>
                      <p className="text-xs font-semibold text-[#DCE3ED]">
                        Continuous improvement
                      </p>
                      <p className="mt-1 text-[10px] text-[#6F7A8A]">
                        Learn → improve → build better
                      </p>
                    </div>
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
                THE GROWTH PROBLEM
              </p>

              <h2 className="mt-4 max-w-[520px] text-3xl font-bold leading-[1.1] tracking-[-0.025em] text-[#F4F7FB] sm:text-4xl">
                More leads do not automatically mean a better business.
              </h2>
            </div>

            <div className="max-w-[700px]">
              <p className="text-base leading-[1.7] text-[#A7B0BF] sm:text-lg">
                Growth creates pressure across the entire business. More
                enquiries can mean more follow-ups. More customers can mean more
                operational work. More campaigns can create more data to
                understand.
              </p>

              <p className="mt-5 text-base leading-[1.7] text-[#A7B0BF] sm:text-lg">
                The technology supporting growth needs to evolve alongside it.
                The goal is to create a connected journey from attracting
                attention to handling the resulting business activity.
              </p>

              <div className="mt-8 flex items-start gap-3 border-l border-[#4F7CFF]/50 pl-5">
                <Target size={18} className="mt-0.5 shrink-0 text-[#4F7CFF]" />

                <p className="text-sm font-medium leading-6 text-[#DCE3ED]">
                  Growth works better when marketing, technology and operations
                  support each other.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Growth Areas */}
      <section id="growth-system" className="scroll-mt-20">
        <div className="mx-auto max-w-[1280px] px-5 py-[72px] sm:px-7 sm:py-24 lg:px-8 lg:py-[120px]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={reveal}
            className="max-w-[700px]"
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#4F7CFF]">
              BUILD • PROMOTE • AUTOMATE • GROW
            </p>

            <h2 className="mt-4 text-3xl font-bold leading-[1.1] tracking-[-0.025em] text-[#F4F7FB] sm:text-4xl">
              A connected growth system, not isolated activities.
            </h2>

            <p className="mt-5 text-base leading-[1.7] text-[#A7B0BF] sm:text-lg">
              Each part of the growth journey should feed the next, while the
              information generated along the way helps improve the system.
            </p>
          </motion.div>

          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {growthAreas.map((area, index) => {
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

      {/* Growth Loop */}
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
                THE GROWTH LOOP
              </p>

              <h2 className="mt-4 max-w-[540px] text-3xl font-bold leading-[1.1] tracking-[-0.025em] text-[#F4F7FB] sm:text-4xl">
                What you learn should improve what you build next.
              </h2>

              <p className="mt-5 max-w-[600px] text-base leading-[1.7] text-[#A7B0BF] sm:text-lg">
                Growth is not a straight line. Customer behaviour, campaign
                performance and operational feedback can all inform the next
                improvement.
              </p>

              <div className="mt-8 flex items-start gap-3">
                <BarChart3
                  size={18}
                  className="mt-0.5 shrink-0 text-[#38D9C5]"
                />

                <p className="text-sm leading-6 text-[#A7B0BF]">
                  Build → learn → improve → build better.
                </p>
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
                    Growth feedback loop
                  </p>

                  <p className="mt-1 text-sm font-semibold text-[#E8EDF5]">
                    Business Improvement
                  </p>
                </div>

                <Repeat size={17} className="text-[#6F7A8A]" />
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {growthFlow.map((step, index) => {
                  const Icon = step.icon;

                  return (
                    <div key={step.title} className="relative">
                      <div className="rounded-xl border border-[#202936] bg-[#121821] p-4">
                        <div className="flex items-center gap-3">
                          <div
                            className={`flex h-9 w-9 items-center justify-center rounded-lg ${
                              index === 0
                                ? "bg-[#4F7CFF]/10 text-[#4F7CFF]"
                                : "bg-[#0D1118] text-[#A7B0BF]"
                            }`}
                          >
                            <Icon size={17} />
                          </div>

                          <div>
                            <p className="text-xs font-semibold text-[#DCE3ED]">
                              {step.title}
                            </p>

                            <p className="mt-1 text-[10px] leading-4 text-[#6F7A8A]">
                              {step.description}
                            </p>
                          </div>
                        </div>
                      </div>

                      {index < growthFlow.length - 1 && (
                        <div className="absolute -bottom-2 left-1/2 z-10 hidden h-4 w-px bg-[#202936] sm:block" />
                      )}
                    </div>
                  );
                })}
              </div>
            </motion.div>
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
              HOW WE WORK
            </p>

            <h2 className="mt-4 text-3xl font-bold leading-[1.1] tracking-[-0.025em] text-[#F4F7FB] sm:text-4xl">
              Growth starts with understanding the business.
            </h2>

            <p className="mt-5 text-base leading-[1.7] text-[#A7B0BF] sm:text-lg">
              Technology and promotion work better when they are connected to a
              clear business objective.
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
              <TrendingUp size={21} />
            </div>

            <p className="mt-7 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#6F7A8A]">
              OUR PRINCIPLE
            </p>

            <h2 className="mt-4 text-3xl font-bold leading-[1.1] tracking-[-0.025em] text-[#F4F7FB] sm:text-4xl">
              Growth should make the business stronger.
            </h2>

            <p className="mx-auto mt-5 max-w-[680px] text-base leading-[1.7] text-[#A7B0BF] sm:text-lg">
              The goal is not simply more activity. It is a better-connected
              business that can handle customers, operations and new
              opportunities more effectively.
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
                BUILD • PROMOTE • AUTOMATE • GROW
              </p>

              <h2 className="mt-4 text-3xl font-bold leading-[1.1] tracking-[-0.025em] text-[#F4F7FB] sm:text-4xl">
                Ready to build a better growth system?
              </h2>

              <p className="mt-5 max-w-[700px] text-base leading-[1.7] text-[#A7B0BF] sm:text-lg">
                Tell us where your business is today, what you want to improve
                and where you want to go next. We'll help identify the right
                combination of digital, technology and growth solutions.
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
