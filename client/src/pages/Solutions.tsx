import { useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowDown,
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Bot,
  BriefcaseBusiness,
  Check,
  ChevronRight,
  CircleCheck,
  Clock3,
  Globe2,
  Layers3,
  MessageSquare,
  Sparkles,
  Workflow,
  Zap,
} from "lucide-react";
import { Link } from "wouter";

const categories = [
  "All Solutions",
  "AI & Automation",
  "Business Systems",
  "Digital Solutions",
  "Business Growth",
] as const;

type Category = (typeof categories)[number];

const solutions = [
  {
    number: "01",
    category: "AI & Automation" as Category,
    icon: Bot,
    title: "AI Automation",
    subtitle: "Less manual work. More room to grow.",
    description:
      "Connect enquiries, follow-ups, everyday tasks and business workflows. Give your team more time to focus on customers and decisions that matter.",
    capabilities: [
      "AI Agents & Assistants",
      "Workflow Automation",
      "Lead & Follow-up Automation",
      "WhatsApp Automation",
      "Document & Data Workflows",
    ],
    href: "/solutions/ai-automation",
    visual: "automation",
    featured: true,
  },
  {
    number: "02",
    category: "Business Systems" as Category,
    icon: BriefcaseBusiness,
    title: "Custom Business Software",
    subtitle: "Your process. Your software.",
    description:
      "Build practical dashboards, internal tools and web applications around how your business actually operates.",
    capabilities: [
      "Business Dashboards",
      "Internal Tools",
      "CRM & Management Systems",
      "Billing & Operations",
      "Custom Web Applications",
    ],
    href: "/solutions/custom-software",
    visual: "software",
    featured: false,
  },
  {
    number: "03",
    category: "Business Systems" as Category,
    icon: Layers3,
    title: "ERP & Business Systems",
    subtitle: "Bring the moving parts together.",
    description:
      "Organise business information and day-to-day operations through connected systems designed around your requirements.",
    capabilities: [
      "ERP Systems",
      "Sales & Inventory",
      "Customer Management",
      "Employee Operations",
      "Reporting & Administration",
    ],
    href: "/solutions/erp-business-systems",
    visual: "systems",
    featured: false,
  },
  {
    number: "04",
    category: "Digital Solutions" as Category,
    icon: Globe2,
    title: "Websites & Digital Solutions",
    subtitle: "Turn your online presence into an asset.",
    description:
      "Create digital experiences that communicate your value and make it easier for customers to discover, trust and contact your business.",
    capabilities: [
      "Business Websites",
      "Landing Pages",
      "E-commerce",
      "Booking Systems",
      "Web Portals & Applications",
    ],
    href: "/solutions/websites-digital-solutions",
    visual: "digital",
    featured: false,
  },
  {
    number: "05",
    category: "Business Growth" as Category,
    icon: Workflow,
    title: "Business Growth",
    subtitle: "Connect attention with action.",
    description:
      "Improve the journey from digital discovery and lead capture to follow-up and customer conversion.",
    capabilities: [
      "Digital Advertising",
      "Product Promotion",
      "Lead Generation",
      "Conversion Experiences",
      "Growth & Campaign Support",
    ],
    href: "/solutions/business-growth",
    visual: "growth",
    featured: false,
  },
];

const journey = [
  {
    number: "01",
    title: "Discover",
    description: "Identify the friction, repetitive work or opportunity.",
    detail: "Start with the challenge—not a predetermined technology.",
  },
  {
    number: "02",
    title: "Explore",
    description: "Find the solution area that fits your requirements.",
    detail: "Compare practical approaches before committing to a direction.",
  },
  {
    number: "03",
    title: "Design",
    description: "Map out a workflow around your business.",
    detail: "Clarify the process, people and systems involved.",
  },
  {
    number: "04",
    title: "Discuss",
    description: "Plan the right next step for your project.",
    detail: "Share your requirements and explore a realistic starting point.",
  },
];

function WorkflowPreview({
  visual,
  icon: Icon,
  featured = false,
}: {
  visual: string;
  icon: typeof Bot;
  featured?: boolean;
}) {
  const steps =
    visual === "automation"
      ? [
          { title: "New enquiry", sub: "Lead received" },
          { title: "Smart workflow", sub: "Process & route" },
          { title: "Follow-up", sub: "Next action" },
        ]
      : visual === "software"
        ? [
            { title: "Business data", sub: "Gather inputs" },
            { title: "Workspace", sub: "Organise work" },
            { title: "Overview", sub: "See progress" },
          ]
        : visual === "systems"
          ? [
              { title: "Sales", sub: "Record activity" },
              { title: "Operations", sub: "Coordinate work" },
              { title: "Reporting", sub: "Review results" },
            ]
          : visual === "digital"
            ? [
                { title: "Discover", sub: "Find your brand" },
                { title: "Explore", sub: "Understand value" },
                { title: "Connect", sub: "Take action" },
              ]
            : [
                { title: "Reach", sub: "Attract attention" },
                { title: "Capture", sub: "Collect enquiries" },
                { title: "Convert", sub: "Continue the journey" },
              ];

  return (
    <div
      className={[
        "group/preview relative isolate flex min-h-[260px] flex-col justify-center overflow-hidden rounded-2xl border p-5 sm:min-h-[300px] sm:p-7",
        featured
          ? "border-[#8799FF]/20 bg-[#101522]"
          : "border-white/[0.08] bg-[#10141D]",
      ].join(" ")}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.055]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(129,148,255,.8) 1px,transparent 1px),linear-gradient(90deg,rgba(129,148,255,.8) 1px,transparent 1px)",
          backgroundSize: "32px 32px",
          maskImage: "radial-gradient(ellipse at center,black,transparent 80%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 -top-20 -z-10 h-56 w-56 rounded-full bg-primary/[0.13] blur-[85px] transition-opacity duration-500 group-hover/preview:opacity-100"
      />

      <div className="mb-6 flex items-center justify-between gap-3">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-500">
            {featured ? "Workflow concept" : "Process preview"}
          </p>
          <p className="mt-1 text-sm font-medium text-slate-200">
            {featured ? "From enquiry to action" : "Designed around your needs"}
          </p>
        </div>
        <span className="flex shrink-0 items-center gap-1.5 rounded-full border border-white/[0.08] bg-white/[0.035] px-2.5 py-1.5 text-[9px] text-slate-400">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
          Illustrative
        </span>
      </div>

      <div className="grid grid-cols-[1fr_18px_1fr_18px_1fr] items-center gap-1.5 sm:gap-2">
        {steps.map((step, index) => (
          <>
            <div
              key={step.title}
              className={[
                "flex min-h-[104px] min-w-0 flex-col justify-between rounded-xl border p-2.5 sm:min-h-[118px] sm:p-3.5",
                index === 1
                  ? "border-primary/35 bg-primary/[0.10] shadow-[0_0_30px_rgba(99,123,255,0.08)]"
                  : "border-white/[0.08] bg-[#171B26]/90",
              ].join(" ")}
            >
              <div
                className={[
                  "flex h-7 w-7 items-center justify-center rounded-lg",
                  index === 1
                    ? "bg-primary/15 text-primary"
                    : "border border-white/[0.08] text-slate-400",
                ].join(" ")}
              >
                {index === 1 ? (
                  <Icon className="h-4 w-4" strokeWidth={1.7} />
                ) : (
                  <span className="text-[9px]">0{index + 1}</span>
                )}
              </div>
              <div>
                <p className="text-[10px] font-medium leading-4 text-slate-200 sm:text-[11px]">
                  {step.title}
                </p>
                <p className="mt-1 text-[8px] leading-3 text-slate-500 sm:text-[9px]">
                  {step.sub}
                </p>
              </div>
            </div>
            {index < 2 && (
              <ArrowRight
                key={`arrow-${step.title}`}
                className="h-3.5 w-3.5 text-primary/60"
                aria-hidden="true"
              />
            )}
          </>
        ))}
      </div>

      <div className="mt-4 flex items-center justify-between gap-3 rounded-xl border border-white/[0.07] bg-white/[0.025] px-3.5 py-3">
        <div className="flex min-w-0 items-center gap-2.5">
          <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-primary/[0.12]">
            <Zap className="h-3.5 w-3.5 text-primary" />
          </div>
          <span className="text-[10px] leading-4 text-slate-400">
            Mapped to your business requirements
          </span>
        </div>
        <span className="shrink-0 text-[9px] text-slate-500">Concept</span>
      </div>
    </div>
  );
}

function FeaturedAutomation() {
  const [activeWorkflow, setActiveWorkflow] = useState(0);
  const reduceMotion = useReducedMotion();

  const examples = [
    {
      label: "Lead follow-up",
      icon: MessageSquare,
      steps: ["Enquiry arrives", "Assign & follow up", "Track next action"],
    },
    {
      label: "Task automation",
      icon: Workflow,
      steps: ["Trigger detected", "Run workflow", "Notify your team"],
    },
    {
      label: "AI assistance",
      icon: Sparkles,
      steps: [
        "Receive a request",
        "AI assists the process",
        "Review the result",
      ],
    },
  ];

  const selected = examples[activeWorkflow];
  const SelectedIcon = selected.icon;

  return (
    <motion.article
      initial={reduceMotion ? false : { opacity: 0, y: 20 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.5 }}
      className="relative overflow-hidden rounded-3xl border border-primary/25 bg-[#111520] shadow-[0_24px_90px_rgba(0,0,0,0.12)]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-32 h-96 w-96 rounded-full bg-primary/[0.12] blur-[120px]"
      />
      <div className="relative grid lg:grid-cols-[0.9fr_1.1fr]">
        <div className="flex flex-col justify-center p-6 sm:p-9 lg:p-12">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/[0.10] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#B8C4FF]">
              <Sparkles className="h-3.5 w-3.5" />
              Core focus
            </span>
            <span className="text-[10px] text-slate-500">01 / 05</span>
          </div>

          <div className="mt-7 flex h-12 w-12 items-center justify-center rounded-2xl border border-primary/25 bg-primary/[0.10]">
            <Bot className="h-6 w-6 text-[#A9B7FF]" strokeWidth={1.6} />
          </div>

          <h3 className="mt-5 text-3xl font-semibold leading-[1.12] tracking-[-0.045em] text-white sm:text-4xl lg:text-[44px]">
            AI automation
            <span className="mt-1 block text-[#A9B7FF]">
              that works with your business.
            </span>
          </h3>

          <p className="mt-5 max-w-[470px] text-sm leading-7 text-slate-400 sm:text-base sm:leading-8">
            Reduce repetitive work by connecting the tasks, tools and follow-ups
            your team handles every day. Start with one process and build from
            there.
          </p>

          <ul className="mt-6 space-y-3">
            {[
              "Automate repetitive steps",
              "Connect business workflows",
              "Make follow-ups more consistent",
            ].map((item) => (
              <li
                key={item}
                className="flex items-center gap-2.5 text-xs text-slate-300 sm:text-sm"
              >
                <CircleCheck className="h-4 w-4 shrink-0 text-[#9BAAFF]" />
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="/solutions/ai-automation"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-primary px-5 text-sm font-semibold text-primary-foreground transition hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(79,124,255,0.25)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              Explore AI Automation
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/start-project"
              className="inline-flex min-h-11 items-center gap-1.5 text-xs font-medium text-slate-400 transition hover:text-white"
            >
              Discuss your process
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="relative flex items-center border-t border-white/[0.07] p-4 sm:p-7 lg:border-l lg:border-t-0 lg:p-9">
          <div className="w-full rounded-2xl border border-white/[0.09] bg-[#0C0F17] p-4 shadow-2xl sm:p-6">
            <div className="flex flex-wrap items-start justify-between gap-3 border-b border-white/[0.07] pb-5">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-500">
                  Workflow studio
                </p>
                <h4 className="mt-1.5 text-base font-semibold text-white">
                  Explore a workflow
                </h4>
                <p className="mt-1 text-xs text-slate-500">
                  Example flows—not live integrations
                </p>
              </div>
              <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-primary/20 bg-primary/[0.10]">
                <SelectedIcon className="h-4 w-4 text-[#A9B7FF]" />
              </div>
            </div>

            <div className="mt-5 grid grid-cols-3 gap-2">
              {examples.map((example, index) => {
                const ExampleIcon = example.icon;
                const active = index === activeWorkflow;

                return (
                  <button
                    key={example.label}
                    type="button"
                    aria-pressed={active}
                    onClick={() => setActiveWorkflow(index)}
                    className={[
                      "flex min-h-[76px] flex-col items-start justify-between gap-2 rounded-xl border p-2.5 text-left transition sm:p-3",
                      active
                        ? "border-primary/35 bg-primary/[0.10]"
                        : "border-white/[0.07] bg-white/[0.02] hover:border-white/15",
                    ].join(" ")}
                  >
                    <ExampleIcon
                      className={[
                        "h-4 w-4",
                        active ? "text-[#A9B7FF]" : "text-slate-500",
                      ].join(" ")}
                    />
                    <span
                      className={[
                        "text-[9px] leading-4 sm:text-[10px]",
                        active ? "text-white" : "text-slate-400",
                      ].join(" ")}
                    >
                      {example.label}
                    </span>
                  </button>
                );
              })}
            </div>

            <motion.div
              key={activeWorkflow}
              initial={reduceMotion ? false : { opacity: 0, y: 7 }}
              animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.22 }}
              className="mt-5 space-y-2.5"
              aria-live="polite"
            >
              {selected.steps.map((step, index) => (
                <div
                  key={step}
                  className="flex items-center gap-3 rounded-xl border border-white/[0.07] bg-[#141925] p-3.5"
                >
                  <div
                    className={[
                      "flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-[10px] font-semibold",
                      index === 1
                        ? "border border-primary/25 bg-primary/[0.13] text-[#B8C4FF]"
                        : "border border-white/[0.07] bg-white/[0.025] text-slate-400",
                    ].join(" ")}
                  >
                    0{index + 1}
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-medium text-slate-200">{step}</p>
                    <p className="mt-1 text-[10px] text-slate-500">
                      {index === 0
                        ? "Starting point"
                        : index === 1
                          ? "Workflow step"
                          : "Intended outcome"}
                    </p>
                  </div>
                  {index === 2 ? (
                    <CircleCheck className="h-4 w-4 shrink-0 text-[#A9B7FF]" />
                  ) : (
                    <ChevronRight className="h-4 w-4 shrink-0 text-slate-600" />
                  )}
                </div>
              ))}
            </motion.div>

            <div className="mt-4 flex items-center gap-2 rounded-lg border border-white/[0.06] bg-white/[0.02] px-3 py-2.5">
              <Clock3 className="h-3.5 w-3.5 shrink-0 text-slate-500" />
              <p className="text-[10px] leading-4 text-slate-500">
                The final workflow depends on your process and requirements.
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

function JourneySection() {
  const [activeStep, setActiveStep] = useState(0);
  const reduceMotion = useReducedMotion();

  return (
    <section className="border-y border-border/70 bg-surface/30 py-16 sm:py-20 lg:py-24">
      <div className="container">
        <div className="mx-auto max-w-[720px] text-center">
          <p className="section-eyebrow">A CLEARER WAY FORWARD</p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.045em] sm:text-4xl lg:text-5xl">
            From business challenge
            <span className="block text-primary">
              to a practical next step.
            </span>
          </h2>
          <p className="mx-auto mt-5 max-w-[590px] text-sm leading-7 text-muted-foreground sm:text-base sm:leading-8">
            You don't need every answer before you start. Explore your options,
            understand the possibilities and decide what makes sense next.
          </p>
        </div>

        <div className="relative mx-auto mt-10 grid max-w-[1040px] gap-3 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4">
          {journey.map((step, index) => {
            const active = activeStep === index;

            return (
              <button
                key={step.number}
                type="button"
                aria-pressed={active}
                onClick={() => setActiveStep(index)}
                className={[
                  "group relative rounded-2xl border p-5 text-left transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary sm:p-6",
                  active
                    ? "border-primary/35 bg-primary/[0.055]"
                    : "border-border bg-background/70 hover:border-primary/20",
                ].join(" ")}
              >
                <div className="flex items-center justify-between">
                  <span
                    className={[
                      "flex h-10 w-10 items-center justify-center rounded-xl border text-xs font-semibold",
                      active
                        ? "border-primary/30 bg-primary/10 text-primary"
                        : "border-border bg-surface text-muted-foreground",
                    ].join(" ")}
                  >
                    {step.number}
                  </span>
                  {active && (
                    <span className="text-[10px] font-medium text-primary">
                      Selected
                    </span>
                  )}
                </div>
                <h3 className="mt-5 text-lg font-semibold tracking-tight">
                  {step.title}
                </h3>
                <p className="mt-2 text-xs leading-6 text-muted-foreground sm:text-sm">
                  {step.description}
                </p>
                <div
                  className={[
                    "mt-5 h-1 rounded-full transition-all duration-300",
                    active ? "w-full bg-primary/60" : "w-8 bg-border",
                  ].join(" ")}
                />
              </button>
            );
          })}
        </div>

        <motion.div
          key={activeStep}
          initial={reduceMotion ? false : { opacity: 0, y: 6 }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          aria-live="polite"
          className="mx-auto mt-4 flex max-w-[1040px] flex-col justify-between gap-4 rounded-xl border border-border bg-background/60 px-5 py-4 sm:flex-row sm:items-center sm:px-6"
        >
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-primary">
              Step {journey[activeStep].number} · {journey[activeStep].title}
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              {journey[activeStep].detail}
            </p>
          </div>
          {activeStep === 3 ? (
            <Link
              href="/start-project"
              className="inline-flex shrink-0 items-center gap-2 text-xs font-semibold text-primary hover:text-foreground"
            >
              Discuss your project <ArrowRight className="h-4 w-4" />
            </Link>
          ) : (
            <button
              type="button"
              onClick={() => setActiveStep((activeStep + 1) % journey.length)}
              className="inline-flex shrink-0 items-center gap-2 text-xs font-semibold text-primary hover:text-foreground"
            >
              Next step <ArrowRight className="h-4 w-4" />
            </button>
          )}
        </motion.div>
      </div>
    </section>
  );
}

export default function Solutions() {
  const [activeCategory, setActiveCategory] =
    useState<Category>("All Solutions");
  const reduceMotion = useReducedMotion();

  const visibleSolutions = useMemo(
    () =>
      activeCategory === "All Solutions"
        ? solutions.filter((solution) => !solution.featured)
        : solutions.filter(
            (solution) =>
              solution.category === activeCategory && !solution.featured,
          ),
    [activeCategory],
  );

  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      {/* PREMIUM HERO */}
      <section className="section-feature relative overflow-hidden border-b border-border/70">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
        >
          <div className="absolute left-[7%] top-[5%] h-80 w-80 rounded-full bg-primary/[0.08] blur-[120px]" />
          <div className="absolute right-[3%] top-[18%] h-72 w-72 rounded-full bg-violet/[0.055] blur-[110px]" />
          <div
            className="absolute inset-0 opacity-[0.035]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(148,163,184,.7) 1px,transparent 1px),linear-gradient(90deg,rgba(148,163,184,.7) 1px,transparent 1px)",
              backgroundSize: "58px 58px",
              maskImage: "linear-gradient(to bottom,black,transparent 90%)",
            }}
          />
        </div>

        <div className="container relative">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto max-w-[950px] py-8 text-center sm:py-10 lg:py-14"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/[0.06] px-3.5 py-2">
              <Sparkles className="h-3.5 w-3.5 text-primary" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-300 sm:text-[11px]">
                Digital solutions · Business systems · AI
              </span>
            </div>

            <h1 className="mx-auto mt-7 max-w-[900px] text-[clamp(40px,6.2vw,78px)] font-semibold leading-[1.02] tracking-[-0.06em] text-foreground">
              Make your business
              <span className="mt-2 block bg-gradient-to-r from-[#91A4FF] via-primary to-[#B0BAFF] bg-clip-text pb-2 text-transparent">
                work better.
              </span>
            </h1>

            <p className="mx-auto mt-5 max-w-[650px] text-base leading-7 text-muted-foreground sm:mt-7 sm:text-lg sm:leading-8">
              Practical digital experiences, connected business systems and
              automation—designed around the way your business works.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="#solution-discovery"
                className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 text-sm font-semibold text-primary-foreground transition hover:-translate-y-0.5 hover:shadow-[0_10px_28px_rgba(79,124,255,0.22)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary sm:w-auto"
              >
                Explore our solutions
                <ArrowDownRight className="h-4 w-4" />
              </a>
              <Link
                href="/start-project"
                className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl border border-border bg-background/50 px-6 text-sm font-medium text-foreground transition hover:border-primary/30 hover:bg-surface sm:w-auto"
              >
                Discuss your project
                <ArrowUpRight className="h-4 w-4 text-primary" />
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[10px] text-slate-500 sm:gap-x-7 sm:text-xs">
              <span className="inline-flex items-center gap-2">
                <Check className="h-3.5 w-3.5 text-primary" />
                Built around your needs
              </span>
              <span className="inline-flex items-center gap-2">
                <Check className="h-3.5 w-3.5 text-primary" />
                Practical starting points
              </span>
              <span className="inline-flex items-center gap-2">
                <Check className="h-3.5 w-3.5 text-primary" />
                Room to grow
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FEATURED AI AUTOMATION */}
      <section className="section-feature">
        <div className="container">
          <div className="mb-7 flex flex-col justify-between gap-3 sm:mb-9 sm:flex-row sm:items-end">
            <div>
              <p className="section-eyebrow">
                START WITH A HIGH-IMPACT PROCESS
              </p>
              <h2 className="mt-3 text-2xl font-semibold tracking-[-0.04em] sm:text-3xl">
                Make everyday work flow better.
              </h2>
            </div>
            <p className="max-w-[390px] text-sm leading-6 text-muted-foreground">
              Begin with a real business challenge. Build from what creates
              value today.
            </p>
          </div>
          <FeaturedAutomation />
        </div>
      </section>

      {/* INTERACTIVE CUSTOMER JOURNEY */}
      <JourneySection />

      {/* ALL OTHER SOLUTIONS */}
      <section
        id="solution-discovery"
        className="section-feature relative scroll-mt-24"
      >
        <div className="container">
          <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
            <div className="max-w-[650px]">
              <p className="section-eyebrow">EXPLORE THE POSSIBILITIES</p>
              <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-[-0.045em] sm:text-4xl">
                The right solution for your next step.
              </h2>
              <p className="mt-4 max-w-[580px] text-sm leading-7 text-muted-foreground sm:text-base">
                From digital presence to internal systems, choose the area that
                best matches your current priorities.
              </p>
            </div>
          </div>

          <div className="mt-8 flex gap-2 overflow-x-auto pb-3">
            {categories.map((category) => {
              const selected = activeCategory === category;

              return (
                <button
                  key={category}
                  type="button"
                  aria-pressed={selected}
                  onClick={() => setActiveCategory(category)}
                  className={[
                    "shrink-0 rounded-full border px-4 py-2.5 text-xs font-medium transition-all sm:px-5 sm:text-[13px]",
                    selected
                      ? "border-primary/45 bg-primary text-primary-foreground shadow-[0_5px_22px_rgba(79,124,255,0.15)]"
                      : "border-border bg-surface text-muted-foreground hover:border-primary/30 hover:text-foreground",
                  ].join(" ")}
                >
                  {category}
                </button>
              );
            })}
          </div>

          <div className="mt-5 grid gap-4 lg:grid-cols-2">
            {visibleSolutions.map((solution, index) => {
              const Icon = solution.icon;

              return (
                <motion.article
                  key={solution.number}
                  initial={reduceMotion ? false : { opacity: 0, y: 14 }}
                  whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.08 }}
                  transition={{
                    duration: 0.4,
                    delay: Math.min(index * 0.045, 0.15),
                  }}
                  className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-surface p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/25 hover:shadow-[0_16px_48px_rgba(0,0,0,0.08)] sm:p-7"
                >
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-20 -top-20 h-52 w-52 rounded-full bg-primary/[0.045] blur-[80px] transition-opacity group-hover:opacity-100"
                  />

                  <div className="relative flex h-full flex-col">
                    <div className="flex items-center justify-between gap-3">
                      <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-primary">
                        {solution.number} / 05
                      </span>
                      <span className="rounded-full border border-border bg-background/70 px-3 py-1.5 text-[10px] text-muted-foreground">
                        {solution.category}
                      </span>
                    </div>

                    <div className="mt-6 flex items-start gap-3.5">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-primary/20 bg-primary/[0.07] transition-colors group-hover:bg-primary/[0.12]">
                        <Icon
                          className="h-5 w-5 text-primary"
                          strokeWidth={1.7}
                        />
                      </div>
                      <div className="min-w-0">
                        <h3 className="text-xl font-semibold tracking-[-0.035em] sm:text-2xl">
                          {solution.title}
                        </h3>
                        <p className="mt-1.5 text-xs font-medium text-slate-400 sm:text-sm">
                          {solution.subtitle}
                        </p>
                      </div>
                    </div>

                    <p className="mt-5 text-sm leading-7 text-muted-foreground">
                      {solution.description}
                    </p>

                    <WorkflowPreview
                      visual={solution.visual}
                      icon={solution.icon}
                    />

                    <div className="mt-6">
                      <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-500">
                        What we can build
                      </p>
                      <ul className="grid gap-x-4 gap-y-2.5 sm:grid-cols-2">
                        {solution.capabilities.map((capability) => (
                          <li
                            key={capability}
                            className="flex items-start gap-2 text-xs leading-5 text-muted-foreground"
                          >
                            <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary/80" />
                            {capability}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-auto flex flex-wrap items-center gap-4 pt-7">
                      <Link
                        href={solution.href}
                        className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-xs font-semibold text-primary-foreground transition hover:-translate-y-0.5 hover:shadow-[0_8px_22px_rgba(79,124,255,0.18)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                      >
                        Explore solution
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                      <Link
                        href="/start-project"
                        className="inline-flex min-h-10 items-center gap-1.5 text-xs font-medium text-muted-foreground transition hover:text-foreground"
                      >
                        Discuss your needs
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </Link>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>

          {visibleSolutions.length === 0 && (
            <div className="rounded-2xl border border-border bg-surface px-5 py-12 text-center">
              <p className="text-sm text-muted-foreground">
                No solutions found in this category.
              </p>
              <button
                type="button"
                onClick={() => setActiveCategory("All Solutions")}
                className="mt-4 text-sm font-medium text-primary hover:text-foreground"
              >
                Browse all solutions
              </button>
            </div>
          )}
        </div>
      </section>

      {/* LONG-TERM VISION */}
      <section className="section-feature border-y border-border/70 bg-surface/30">
        <div className="container">
          <div className="mx-auto max-w-[740px] text-center">
            <p className="section-eyebrow">THE BIGGER PICTURE</p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.045em] sm:text-4xl lg:text-[48px]">
              Individual solutions.
              <span className="block text-primary">
                One connected direction.
              </span>
            </h2>
            <p className="mx-auto mt-5 max-w-[640px] text-sm leading-7 text-muted-foreground sm:text-base sm:leading-8">
              Start with what your business needs today. As requirements evolve,
              digital experiences, business systems and automation can become
              part of a more connected way of working.
            </p>
          </div>

          <div className="mx-auto mt-10 grid max-w-[1000px] gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {[
              { label: "Digital presence", icon: Globe2 },
              { label: "Business software", icon: BriefcaseBusiness },
              { label: "Connected systems", icon: Layers3 },
              { label: "Automation", icon: Workflow },
              { label: "Intelligence", icon: Sparkles },
            ].map(({ label, icon: Icon }, index) => (
              <div
                key={label}
                className="relative flex min-h-[112px] flex-col items-center justify-center gap-3 rounded-xl border border-border bg-background/60 px-4 py-5 text-center transition-colors hover:border-primary/25"
              >
                <Icon className="h-5 w-5 text-primary" strokeWidth={1.6} />
                <span className="text-xs font-medium text-slate-300">
                  {label}
                </span>
                {index < 4 && (
                  <ArrowRight
                    aria-hidden="true"
                    className="absolute -bottom-[11px] right-1/2 z-10 h-4 w-4 translate-x-1/2 rotate-90 text-primary/50 lg:-bottom-auto lg:-right-[11px] lg:top-1/2 lg:translate-x-0 lg:-translate-y-1/2 lg:rotate-0"
                  />
                )}
              </div>
            ))}
          </div>
          <p className="mx-auto mt-5 max-w-[650px] text-center text-[11px] leading-5 text-slate-500">
            This represents a long-term direction. Specific capabilities depend
            on the solution designed for each project.
          </p>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="section-feature">
        <div className="container">
          <div className="relative overflow-hidden rounded-3xl border border-primary/20 bg-gradient-to-br from-[#191E2B] via-[#151923] to-[#10131A] px-5 py-12 text-center sm:px-10 sm:py-16 lg:px-16 lg:py-20">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute left-1/2 top-0 h-56 w-[70%] -translate-x-1/2 rounded-full bg-primary/[0.09] blur-[100px]"
            />
            <div className="relative mx-auto max-w-[720px]">
              <p className="section-eyebrow">LET'S START WITH YOUR NEED</p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.045em] text-white sm:text-4xl lg:text-[48px]">
                What would you like
                <span className="block text-[#A9B7FF]">to work better?</span>
              </h2>
              <p className="mx-auto mt-5 max-w-[600px] text-sm leading-7 text-slate-400 sm:text-base sm:leading-8">
                Tell us about your business, the challenge you want to solve or
                the process you want to improve. We'll explore a practical
                starting point together.
              </p>
              <Link
                href="/start-project"
                className="mt-8 inline-flex min-h-12 items-center justify-center gap-2.5 rounded-xl bg-primary px-6 text-sm font-semibold text-primary-foreground shadow-[0_8px_30px_rgba(79,124,255,0.18)] transition-all hover:-translate-y-0.5 hover:shadow-[0_12px_36px_rgba(79,124,255,0.27)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                Tell us what you need
                <ArrowRight className="h-4 w-4" />
              </Link>
              <p className="mt-5 text-xs text-slate-500">
                No need to have every detail figured out yet.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
