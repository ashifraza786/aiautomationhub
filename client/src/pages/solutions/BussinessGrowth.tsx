
import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Link } from "wouter";
import {
  ArrowDown,
  ArrowRight,
  Check,
  ChevronLeft,
  ChevronRight,
  Globe,
  Megaphone,
  MousePointerClick,
  RefreshCw,
  Target,
  Users,
  Workflow,
} from "lucide-react";

const phases = [
  {
    number: "01",
    label: "Build",
    title: "Build the digital foundation.",
    description:
      "Give your business a clear digital presence where customers can understand your offer and decide what to do next.",
    detail: "Website · Landing page · Digital experience",
    outcome: "A clear starting point for the customer journey.",
    icon: Globe,
    nodes: [
      { title: "Business", detail: "Offer and audience", icon: Target },
      { title: "Digital presence", detail: "Website or landing page", icon: Globe },
      { title: "Customer action", detail: "Explore or enquire", icon: MousePointerClick },
    ],
  },
  {
    number: "02",
    label: "Promote",
    title: "Reach the right audience.",
    description:
      "Plan promotional activity around your product, audience and business objective instead of treating promotion as an isolated task.",
    detail: "Campaigns · Product promotion · Audience",
    outcome: "A defined route to relevant customer attention.",
    icon: Megaphone,
    nodes: [
      { title: "Business offer", detail: "Product or service", icon: Target },
      { title: "Promotion", detail: "Campaign and messaging", icon: Megaphone },
      { title: "Audience", detail: "Discover and engage", icon: Users },
    ],
  },
  {
    number: "03",
    label: "Capture",
    title: "Turn interest into a next step.",
    description:
      "Make it straightforward for interested people to enquire, contact your team or complete the next relevant action.",
    detail: "Customer journey · Enquiries · Lead capture",
    outcome: "A customer interaction your business can respond to.",
    icon: MousePointerClick,
    nodes: [
      { title: "Visitor", detail: "Arrives with interest", icon: Globe },
      { title: "Interaction", detail: "Enquiry or action", icon: MousePointerClick },
      { title: "Business lead", detail: "Ready for follow-up", icon: Users },
    ],
  },
  {
    number: "04",
    label: "Connect",
    title: "Connect the work behind the scenes.",
    description:
      "Where the project requires it, connect customer information with follow-ups, business systems and repeatable workflows.",
    detail: "CRM · Business systems · Automation",
    outcome: "A clearer path from customer enquiry to action.",
    icon: Workflow,
    nodes: [
      { title: "New enquiry", detail: "Information captured", icon: Users },
      { title: "Business system", detail: "Information organized", icon: Workflow },
      { title: "Next action", detail: "Follow-up workflow", icon: Check },
    ],
  },
];

const deliveryPhases = [
  {
    number: "01",
    title: "Understand",
    description:
      "Clarify your business objective, audience, offer and current challenges.",
    output: "A clear project objective",
  },
  {
    number: "02",
    title: "Plan",
    description:
      "Map the customer journey, capabilities and system requirements relevant to the project.",
    output: "A practical implementation plan",
  },
  {
    number: "03",
    title: "Build",
    description:
      "Create the agreed digital experience and connect the required workflows.",
    output: "The agreed solution",
  },
  {
    number: "04",
    title: "Improve",
    description:
      "Review feedback and available information to prioritize useful refinements.",
    output: "A considered next step",
  },
];

function Reveal({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 12 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: reduceMotion ? 0 : 0.3, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-4 text-xs font-medium tracking-[0.08em] text-[#004225]">
      {children}
    </p>
  );
}

function GrowthWorkflow() {
  const [active, setActive] = useState(0);
  const reduceMotion = useReducedMotion();
  const phase = phases[active];

  return (
    <div
      id="growth-workflow"
      className="scroll-mt-28 overflow-hidden rounded-2xl border border-[#E5E0D7] bg-white"
    >
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#E5E0D7] px-5 py-4 sm:px-7">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#E5E0D7] bg-[#F4F0E8] text-[#004225]">
            <Workflow size={19} />
          </span>
          <div>
            <p className="text-xs text-[#5F5B53]">Growth workflow</p>
            <p className="mt-1 text-sm font-semibold text-[#24231F]">
              From customer attention to business action
            </p>
          </div>
        </div>
        <span className="rounded-full border border-[#E5E0D7] bg-[#F4F0E8] px-3 py-1.5 text-xs text-[#5F5B53]">
          Concept view
        </span>
      </div>

      <div className="grid md:grid-cols-[220px_minmax(0,1fr)] lg:grid-cols-[250px_minmax(0,1fr)]">
        <nav
          aria-label="Growth workflow phases"
          className="border-b border-[#E5E0D7] p-3 sm:p-4 md:border-b-0 md:border-r"
        >
          {phases.map((item, index) => {
            const selected = index === active;
            const Icon = item.icon;

            return (
              <button
                key={item.number}
                type="button"
                onClick={() => setActive(index)}
                aria-pressed={selected}
                className={`group flex min-h-[66px] w-full items-center gap-3 rounded-xl border p-3 text-left transition-colors ${
                  selected
                    ? "border-[#004225]/25 bg-[#004225]/[0.06]"
                    : "border-transparent hover:border-[#E5E0D7] hover:bg-[#F4F0E8]"
                }`}
              >
                <span
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${
                    selected
                      ? "bg-[#004225] text-white"
                      : "bg-[#F4F0E8] text-[#5F5B53]"
                  }`}
                >
                  <Icon size={17} />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-xs text-[#5F5B53]">
                    Phase {item.number}
                  </span>
                  <span className="mt-1 block text-sm font-medium text-[#24231F]">
                    {item.label}
                  </span>
                </span>
                <ChevronRight
                  size={16}
                  className={selected ? "text-[#004225]" : "text-[#A7A197]"}
                />
              </button>
            );
          })}
        </nav>

        <div className="relative min-w-0 p-5 sm:p-7 lg:p-9">
          <span
            aria-hidden="true"
            className="pointer-events-none absolute right-5 top-3 select-none text-[112px] font-semibold leading-none tracking-[-0.08em] text-[#004225]/[0.055] sm:right-8 sm:text-[150px]"
          >
            {phase.number}
          </span>

          <motion.div
            key={phase.number}
            initial={reduceMotion ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.22 }}
            className="relative"
          >
            <p className="text-xs font-medium tracking-[0.08em] text-[#004225]">
              {phase.number} / {phase.label}
            </p>
            <h3 className="mt-4 max-w-[540px] text-[22px] font-semibold leading-tight tracking-[-0.025em] text-[#24231F] sm:text-3xl">
              {phase.title}
            </h3>
            <p className="mt-4 max-w-[620px] text-[15px] leading-7 text-[#5F5B53] sm:text-base">
              {phase.description}
            </p>

            <div className="mt-6 rounded-xl border border-[#E5E0D7] bg-[#F4F0E8]/60 p-4 sm:p-5">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <span className="text-xs font-medium text-[#5F5B53]">
                  Illustrative system flow
                </span>
                <span className="text-xs text-[#5F5B53]">
                  Phase {active + 1} of {phases.length}
                </span>
              </div>

              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                {phase.nodes.map((node, index) => {
                  const Icon = node.icon;

                  return (
                    <div key={node.title} className="relative min-w-0">
                      <div className="h-full rounded-xl border border-[#E5E0D7] bg-white p-3 sm:p-4">
                        <span
                          className={`flex h-9 w-9 items-center justify-center rounded-lg ${
                            index === 1
                              ? "bg-[#004225] text-white"
                              : "bg-[#F4F0E8] text-[#004225]"
                          }`}
                        >
                          <Icon size={17} />
                        </span>
                        <p className="mt-3 text-sm font-semibold text-[#24231F]">
                          {node.title}
                        </p>
                        <p className="mt-1 text-xs leading-5 text-[#5F5B53]">
                          {node.detail}
                        </p>
                      </div>
                      {index < phase.nodes.length - 1 && (
                        <ArrowRight
                          size={15}
                          className="absolute -right-2.5 top-1/2 z-10 hidden -translate-y-1/2 text-[#004225] sm:block"
                        />
                      )}
                    </div>
                  );
                })}
              </div>

              <div className="mt-4 flex items-start gap-3 border-t border-[#E5E0D7] pt-4">
                <Check size={16} className="mt-0.5 shrink-0 text-[#004225]" />
                <div>
                  <p className="text-xs text-[#5F5B53]">Intended outcome</p>
                  <p className="mt-1 text-sm font-medium text-[#24231F]">
                    {phase.outcome}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-5 flex items-center justify-between gap-3">
              <button
                type="button"
                disabled={active === 0}
                onClick={() => setActive((value) => Math.max(0, value - 1))}
                className="inline-flex min-h-10 items-center gap-2 rounded-lg border border-[#E5E0D7] px-3 text-sm text-[#24231F] transition-colors hover:bg-[#F4F0E8] disabled:cursor-not-allowed disabled:opacity-40"
              >
                <ChevronLeft size={16} />
                Previous
              </button>

              <div className="flex items-center gap-2">
                {phases.map((item, index) => (
                  <button
                    key={item.number}
                    type="button"
                    aria-label={`Select ${item.label.toLowerCase()} phase`}
                    aria-current={index === active ? "step" : undefined}
                    onClick={() => setActive(index)}
                    className={`h-1.5 rounded-full transition-all ${
                      index === active
                        ? "w-6 bg-[#004225]"
                        : "w-1.5 bg-[#D8D1C6] hover:bg-[#8B948A]"
                    }`}
                  />
                ))}
              </div>

              <button
                type="button"
                disabled={active === phases.length - 1}
                onClick={() =>
                  setActive((value) => Math.min(phases.length - 1, value + 1))
                }
                className="inline-flex min-h-10 items-center gap-2 rounded-lg bg-[#004225] px-4 text-sm font-medium text-white transition-colors hover:bg-[#00351D] disabled:cursor-not-allowed disabled:opacity-40"
              >
                Next
                <ChevronRight size={16} />
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="border-t border-[#E5E0D7] px-5 py-3 sm:px-7">
        <p className="text-xs leading-5 text-[#5F5B53]">
          Conceptual workflow only. Actual deliverables and integrations depend
          on the agreed project requirements.
        </p>
      </div>
    </div>
  );
}

function DeliveryProcess() {
  const [active, setActive] = useState(0);
  const reduceMotion = useReducedMotion();
  const phase = deliveryPhases[active];

  return (
    <div className="overflow-hidden rounded-2xl border border-[#E5E0D7] bg-white">
      <div className="border-b border-[#E5E0D7] px-5 py-4 sm:px-7">
        <p className="text-xs text-[#5F5B53]">Project delivery</p>
        <p className="mt-1 text-sm font-semibold text-[#24231F]">
          How we take the work forward
        </p>
      </div>

      <div className="grid md:grid-cols-[220px_minmax(0,1fr)] lg:grid-cols-[250px_minmax(0,1fr)]">
        <nav
          aria-label="Project delivery phases"
          className="space-y-2 border-b border-[#E5E0D7] p-3 sm:p-4 md:border-b-0 md:border-r"
        >
          {deliveryPhases.map((item, index) => (
            <button
              key={item.number}
              type="button"
              onClick={() => setActive(index)}
              aria-pressed={active === index}
              className={`flex min-h-[58px] w-full items-center gap-3 rounded-xl border p-3 text-left transition-colors ${
                active === index
                  ? "border-[#004225]/25 bg-[#004225]/[0.06]"
                  : "border-transparent hover:border-[#E5E0D7] hover:bg-[#F4F0E8]"
              }`}
            >
              <span
                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-sm font-medium ${
                  active === index
                    ? "bg-[#004225] text-white"
                    : "bg-[#F4F0E8] text-[#5F5B53]"
                }`}
              >
                {item.number}
              </span>
              <span className="text-sm font-medium text-[#24231F]">
                {item.title}
              </span>
            </button>
          ))}
        </nav>

        <motion.div
          key={phase.number}
          initial={reduceMotion ? false : { opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: reduceMotion ? 0 : 0.22 }}
          className="relative min-w-0 p-5 sm:p-7 lg:p-9"
        >
          <span
            aria-hidden="true"
            className="pointer-events-none absolute right-5 top-3 text-[110px] font-semibold leading-none tracking-[-0.08em] text-[#004225]/[0.055] sm:text-[145px]"
          >
            {phase.number}
          </span>

          <div className="relative">
            <Eyebrow>Phase {phase.number}</Eyebrow>
            <h3 className="text-[22px] font-semibold tracking-[-0.025em] text-[#24231F] sm:text-3xl">
              {phase.title}
            </h3>
            <p className="mt-4 max-w-xl text-[15px] leading-7 text-[#5F5B53] sm:text-base">
              {phase.description}
            </p>
            <div className="mt-6 rounded-xl border border-[#E5E0D7] bg-[#F4F0E8]/60 p-4 sm:p-5">
              <p className="text-xs text-[#5F5B53]">Expected output</p>
              <p className="mt-2 text-sm font-medium text-[#24231F]">
                {phase.output}
              </p>
            </div>
            <div className="mt-6 flex items-center justify-between gap-3 border-t border-[#E5E0D7] pt-5">
              <button
                type="button"
                disabled={active === 0}
                onClick={() => setActive((value) => Math.max(0, value - 1))}
                className="inline-flex min-h-10 items-center gap-2 rounded-lg border border-[#E5E0D7] px-3 text-sm text-[#24231F] transition-colors hover:bg-[#F4F0E8] disabled:cursor-not-allowed disabled:opacity-40"
              >
                <ChevronLeft size={16} />
                Previous
              </button>
              <span className="text-xs text-[#5F5B53]">
                {active + 1} / {deliveryPhases.length}
              </span>
              <button
                type="button"
                disabled={active === deliveryPhases.length - 1}
                onClick={() =>
                  setActive((value) =>
                    Math.min(deliveryPhases.length - 1, value + 1),
                  )
                }
                className="inline-flex min-h-10 items-center gap-2 rounded-lg bg-[#004225] px-4 text-sm font-medium text-white transition-colors hover:bg-[#00351D] disabled:cursor-not-allowed disabled:opacity-40"
              >
                Next
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default function BusinessGrowth() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#F4F0E8] font-sans text-[#24231F]">
      {/* 01 — Hero */}
      <section className="border-b border-[#E5E0D7]">
        <div className="mx-auto grid max-w-[1280px] items-center gap-10 px-5 py-16 sm:px-7 sm:py-20 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14 lg:px-8 lg:py-24">
          <Reveal>
            <Eyebrow>Build · Promote · Connect · Improve</Eyebrow>
            <h1 className="max-w-[600px] text-[40px] font-semibold leading-[1.05] tracking-[-0.04em] text-[#24231F] sm:text-5xl lg:text-[64px]">
              Growth works better when the parts{" "}
              <span className="text-[#004225]">connect.</span>
            </h1>
            <p className="mt-6 max-w-[580px] text-base leading-[1.75] text-[#5F5B53] sm:text-lg">
              We help businesses connect digital presence, customer acquisition,
              follow-up and useful technology around the way they operate.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link
                href="/start-project"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-[#004225] px-5 py-3 text-[15px] font-medium text-white transition-colors hover:bg-[#00351D]"
              >
                Start Your Project
                <ArrowRight size={16} />
              </Link>
              <a
                href="#growth-workflow"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-[#D8D1C6] bg-white px-5 py-3 text-[15px] font-medium text-[#24231F] transition-colors hover:bg-[#F4F0E8]"
              >
                Explore the workflow
                <ArrowDown size={15} />
              </a>
            </div>
            <div className="mt-8 flex flex-wrap gap-x-5 gap-y-3 border-t border-[#E5E0D7] pt-5 text-sm text-[#5F5B53]">
              <span className="flex items-center gap-2">
                <Check size={15} className="text-[#004225]" />
                Business-first approach
              </span>
              <span className="flex items-center gap-2">
                <Check size={15} className="text-[#004225]" />
                Connected systems
              </span>
            </div>
          </Reveal>

          <Reveal>
            <GrowthWorkflow />
          </Reveal>
        </div>
      </section>

      {/* 02 — Business context */}
      <section className="border-b border-[#E5E0D7]">
        <div className="mx-auto grid max-w-[1280px] gap-8 px-5 py-[72px] sm:px-7 sm:py-24 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20 lg:px-8 lg:py-[112px]">
          <Reveal>
            <Eyebrow>The business challenge</Eyebrow>
            <h2 className="max-w-[520px] text-[32px] font-semibold leading-[1.1] tracking-[-0.035em] text-[#24231F] sm:text-4xl lg:text-[44px]">
              More activity is not always a better system.
            </h2>
          </Reveal>
          <Reveal>
            <p className="text-base leading-[1.8] text-[#5F5B53] sm:text-lg">
              A website, an advertising campaign and a customer follow-up
              process may each serve a purpose. But when they operate
              separately, teams can lose visibility between customer interest
              and the next business action.
            </p>
            <p className="mt-5 text-base leading-[1.8] text-[#5F5B53] sm:text-lg">
              We start by understanding the business objective and then identify
              which parts need to be built, improved or connected. The right
              approach depends on the requirement—not a fixed package.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 03 — Growth workflow */}
      <section>
        <div className="mx-auto max-w-[1280px] px-5 py-[72px] sm:px-7 sm:py-24 lg:px-8 lg:py-[112px]">
          <Reveal>
            <Eyebrow>The growth workflow</Eyebrow>
            <h2 className="max-w-[760px] text-[32px] font-semibold leading-[1.1] tracking-[-0.035em] text-[#24231F] sm:text-4xl lg:text-[44px]">
              See how the journey can connect.
            </h2>
            <p className="mt-5 max-w-[700px] text-base leading-[1.8] text-[#5F5B53] sm:text-lg">
              Choose a phase to explore its role, supporting system and intended
              outcome.
            </p>
          </Reveal>
          <Reveal className="mt-10">
            <GrowthWorkflow />
          </Reveal>
        </div>
      </section>

      {/* 04 — Delivery process */}
      <section className="border-y border-[#E5E0D7] bg-white/50">
        <div className="mx-auto max-w-[1280px] px-5 py-[72px] sm:px-7 sm:py-24 lg:px-8 lg:py-[112px]">
          <Reveal>
            <Eyebrow>How we work</Eyebrow>
            <h2 className="max-w-[760px] text-[32px] font-semibold leading-[1.1] tracking-[-0.035em] text-[#24231F] sm:text-4xl lg:text-[44px]">
              From business objective to working solution.
            </h2>
            <p className="mt-5 max-w-[700px] text-base leading-[1.8] text-[#5F5B53] sm:text-lg">
              A clear delivery process keeps decisions connected to the
              business requirement.
            </p>
          </Reveal>
          <Reveal className="mt-10">
            <DeliveryProcess />
          </Reveal>
          <Reveal className="mt-5">
            <div className="flex flex-col gap-2 rounded-xl border border-[#E5E0D7] bg-white p-5 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm font-semibold text-[#24231F]">
                Business problem first. Technology second.
              </p>
              <p className="text-sm text-[#5F5B53]">
                Understand · Plan · Build · Improve
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 05 — Principles */}
      <section>
        <div className="mx-auto max-w-[1280px] px-5 py-[72px] sm:px-7 sm:py-24 lg:px-8 lg:py-[112px]">
          <Reveal>
            <Eyebrow>Our approach</Eyebrow>
            <h2 className="max-w-[760px] text-[32px] font-semibold leading-[1.1] tracking-[-0.035em] text-[#24231F] sm:text-4xl lg:text-[44px]">
              Useful improvements, connected to real business needs.
            </h2>
          </Reveal>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {[
              {
                icon: Target,
                title: "Start with the goal",
                text: "Prioritize the business outcome before choosing tools or activities.",
              },
              {
                icon: Workflow,
                title: "Connect the journey",
                text: "Make sure customer actions and internal workflows have a clear next step.",
              },
              {
                icon: RefreshCw,
                title: "Improve with context",
                text: "Use relevant feedback and information to decide what to refine next.",
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <Reveal key={item.title}>
                  <article className="h-full rounded-2xl border border-[#E5E0D7] bg-white p-6 sm:p-7">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#E5E0D7] bg-[#F4F0E8] text-[#004225]">
                      <Icon size={20} />
                    </span>
                    <h3 className="mt-5 text-[19px] font-semibold text-[#24231F] sm:text-[22px]">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-[15px] leading-7 text-[#5F5B53] sm:text-base">
                      {item.text}
                    </p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 06 — Final CTA */}
      <section className="border-t border-[#E5E0D7]">
        <div className="mx-auto max-w-[1280px] px-5 py-16 sm:px-7 sm:py-20 lg:px-8 lg:py-24">
          <Reveal>
            <div className="rounded-2xl border border-[#E5E0D7] bg-white p-6 sm:p-10 lg:p-14">
              <div className="grid items-end gap-8 lg:grid-cols-[1fr_auto]">
                <div className="max-w-[760px]">
                  <Eyebrow>Start with the business goal</Eyebrow>
                  <h2 className="text-[32px] font-semibold leading-[1.1] tracking-[-0.035em] text-[#24231F] sm:text-4xl lg:text-[44px]">
                    Let's connect the right parts of your business.
                  </h2>
                  <p className="mt-5 max-w-[680px] text-base leading-[1.8] text-[#5F5B53] sm:text-lg">
                    Tell us what you want to improve—your digital presence,
                    customer acquisition, follow-up process or connected
                    operations. We can explore a practical approach together.
                  </p>
                </div>
                <div className="flex flex-col items-start gap-3">
                  <Link
                    href="/start-project"
                    className="inline-flex min-h-12 items-center gap-2 rounded-lg bg-[#004225] px-5 py-3 text-[15px] font-medium text-white transition-colors hover:bg-[#00351D]"
                  >
                    Start Your Project
                    <ArrowRight size={16} />
                  </Link>
                  <Link
                    href="/solutions"
                    className="inline-flex min-h-10 items-center gap-2 text-sm font-medium text-[#004225] transition-colors hover:underline"
                  >
                    Explore all solutions
                    <ArrowRight size={15} />
                  </Link>
                </div>
              </div>
              <div className="mt-9 flex flex-wrap gap-x-4 gap-y-2 border-t border-[#E5E0D7] pt-5 text-sm text-[#5F5B53]">
                <span>Digital presence</span>
                <span aria-hidden="true">·</span>
                <span>Customer journey</span>
                <span aria-hidden="true">·</span>
                <span>Business workflows</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
