import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  Bot,
  Check,
  FileSpreadsheet,
  MessageCircle,
  Workflow,
  X,
} from "lucide-react";
import { Link } from "wouter";

const C = {
  ivory: "#F4F0E8",
  sage: "#E4E8DF",
  green: "#004225",
  charcoal: "#24231F",
  gray: "#5F5B53",
  white: "#FFFFFF",
  border: "#DDD6C9",
};

const beforeItems = [
  {
    icon: FileSpreadsheet,
    label: "Excel / Sheets",
    description: "Information scattered across files",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp Messages",
    description: "Important conversations are easy to miss",
  },
  {
    icon: Workflow,
    label: "Manual Data Entry",
    description: "The same tasks repeated every day",
  },
  {
    icon: BarChart3,
    label: "Disconnected Tools",
    description: "Systems work in isolation",
  },
  {
    icon: FileSpreadsheet,
    label: "Manual Reports",
    description: "Reporting takes time and effort",
  },
];

const afterItems = [
  {
    icon: Workflow,
    label: "Website",
    description: "Digital entry point",
  },
  {
    icon: BarChart3,
    label: "CRM / ERP",
    description: "Business data stays connected",
  },
  {
    icon: Bot,
    label: "AI",
    description: "Intelligent assistance where useful",
  },
  {
    icon: Workflow,
    label: "Automation",
    description: "Repetitive work runs automatically",
  },
  {
    icon: BarChart3,
    label: "Analytics",
    description: "Clear visibility for better decisions",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0 },
};

function BeforeItem({
  item,
  index,
}: {
  item: (typeof beforeItems)[number];
  index: number;
}) {
  const Icon = item.icon;

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.35, delay: index * 0.045 }}
      className="relative"
    >
      <div
        className="flex items-center gap-3 rounded-xl border bg-white px-3.5 py-3 transition-colors duration-200 hover:border-[#004225]/35"
        style={{ borderColor: C.border }}
      >
        <div
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border"
          style={{
            borderColor: C.border,
            backgroundColor: C.sage,
            color: C.green,
          }}
        >
          <Icon className="h-4 w-4" aria-hidden="true" />
        </div>

        <div className="min-w-0 flex-1">
          <p className="text-sm font-semibold" style={{ color: C.charcoal }}>
            {item.label}
          </p>
          <p className="mt-0.5 text-[11px] leading-4" style={{ color: C.gray }}>
            {item.description}
          </p>
        </div>

        <span
          className="h-1.5 w-1.5 shrink-0 rounded-full"
          style={{ backgroundColor: "#B7B1A5" }}
          aria-hidden="true"
        />
      </div>

      {index < beforeItems.length - 1 && (
        <div className="flex justify-center py-1.5 lg:hidden">
          <div className="h-2.5 w-px" style={{ backgroundColor: C.border }} />
        </div>
      )}
    </motion.div>
  );
}

function SystemNode({
  title,
  subtitle,
  icon: Icon,
  className = "",
}: {
  title: string;
  subtitle: string;
  icon: typeof Workflow;
  className?: string;
}) {
  return (
    <div
      className={`relative z-10 rounded-xl border bg-white p-3 shadow-[0_3px_10px_rgba(36,35,31,0.045)] ${className}`}
      style={{ borderColor: C.border }}
    >
      <div className="flex items-center gap-2.5">
        <div
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg"
          style={{ backgroundColor: C.sage, color: C.green }}
        >
          <Icon className="h-4 w-4" aria-hidden="true" />
        </div>
        <div className="min-w-0">
          <p className="text-xs font-semibold" style={{ color: C.charcoal }}>
            {title}
          </p>
          <p className="mt-0.5 text-[10px]" style={{ color: C.gray }}>
            {subtitle}
          </p>
        </div>
      </div>
    </div>
  );
}

function ConnectedSystemVisual() {
  const reduceMotion = useReducedMotion();

  return (
    <div
      className="relative mt-5 hidden min-h-[390px] overflow-hidden rounded-2xl border p-4 sm:p-5 lg:block"
      style={{
        borderColor: C.border,
        backgroundColor: C.sage,
      }}
    >
      {/* Subtle background grid */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          backgroundImage:
            "linear-gradient(rgba(95,91,83,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(95,91,83,0.045) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Animated connector lines and moving data dots */}
      <svg
        className="pointer-events-none absolute inset-0 z-0 h-full w-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        {[
          "M 30 38 C 34 38, 36 44, 40 47",
          "M 30 68 C 34 68, 36 58, 40 55",
          "M 60 47 C 64 44, 66 38, 70 38",
          "M 60 55 C 64 58, 66 68, 70 68",
        ].map((path, index) => (
          <g key={path}>
            {/* Permanent connection line */}
            <path
              d={path}
              fill="none"
              stroke="#004225"
              strokeWidth="0.4"
              strokeLinecap="round"
              opacity="0.65"
            />

            {/* Animated line reveal */}
            {!reduceMotion && (
              <motion.path
                d={path}
                fill="none"
                stroke="#004225"
                strokeWidth="0.6"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 0.45 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.15,
                  ease: "easeInOut",
                }}
              />
            )}

            {/* Moving data dot */}
            {!reduceMotion && (
              <circle r="0.8" fill="#004225">
                <animateMotion
                  path={path}
                  dur={`${2.4 + index * 0.35}s`}
                  repeatCount="indefinite"
                  begin={`${index * 0.3}s`}
                />
              </circle>
            )}
          </g>
        ))}
      </svg>

      {/* Responsive diagram layout */}
      <div className="relative z-10 grid min-h-[350px] grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)_minmax(0,1fr)] items-center gap-2 sm:gap-3">
        {/* Input systems */}
        <div className="flex min-w-0 flex-col justify-center gap-16">
          <SystemNode
            title="Website"
            subtitle="Digital entry"
            icon={Workflow}
            className="w-full !p-2 sm:!p-3"
          />

          <SystemNode
            title="CRM / ERP"
            subtitle="Business data"
            icon={BarChart3}
            className="w-full !p-2 sm:!p-3"
          />
        </div>

        {/* Central AI system */}

        <div className="relative flex min-w-0 flex-col items-center justify-center">
          <div
            className="absolute left-0 right-0 top-1/2 h-px -translate-y-1/2"
            style={{ backgroundColor: "rgba(0,66,37,0.28)" }}
            aria-hidden="true"
          />

          <motion.div
            className="relative z-10 w-full min-w-0 rounded-xl border bg-white p-2 text-center shadow-[0_5px_20px_rgba(0,66,37,0.07)] sm:p-3"
            style={{ borderColor: "rgba(0,66,37,0.28)" }}
            animate={
              reduceMotion
                ? undefined
                : {
                    boxShadow: [
                      "0 5px 20px rgba(0,66,37,0.05)",
                      "0 8px 24px rgba(0,66,37,0.11)",
                      "0 5px 20px rgba(0,66,37,0.05)",
                    ],
                  }
            }
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div
              className="mx-auto flex h-8 w-8 items-center justify-center rounded-lg sm:h-9 sm:w-9"
              style={{ backgroundColor: C.sage, color: C.green }}
            >
              <Bot className="h-4 w-4" aria-hidden="true" />
            </div>

            <p
              className="mt-2 text-xs font-semibold sm:text-sm"
              style={{ color: C.charcoal }}
            >
              AI Assistance
            </p>

            <p
              className="mt-1 text-[9px] leading-4 sm:text-[10px]"
              style={{ color: C.gray }}
            >
              Support for relevant tasks
            </p>
          </motion.div>

          {!reduceMotion && (
            <motion.span
              className="absolute left-1/2 top-1/2 z-20 h-2 w-2 -translate-x-1/2 rounded-full"
              style={{ backgroundColor: C.green }}
              animate={{
                scale: [0.8, 1.15, 0.8],
                opacity: [0.55, 1, 0.55],
              }}
              transition={{
                duration: 2.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              aria-hidden="true"
            />
          )}
        </div>

        {/* Connected outputs */}
        <div className="flex min-w-0 flex-col justify-center gap-16">
          <SystemNode
            title="Automation"
            subtitle="Connected processes"
            icon={Workflow}
            className="w-full !p-2 sm:!p-3"
          />

          <SystemNode
            title="Analytics"
            subtitle="Clearer business insights"
            icon={BarChart3}
            className="w-full !p-2 sm:!p-3"
          />
        </div>
      </div>

      {/* Footer label stays inside the visual */}
      <div className="relative z-10 mt-2 flex justify-center">
        <span
          className="inline-flex max-w-full items-center gap-2 rounded-full border bg-white px-3 py-1.5 text-center text-[9px] font-semibold uppercase tracking-[0.1em] sm:text-[10px] sm:tracking-[0.12em]"
          style={{
            borderColor: C.border,
            color: C.gray,
          }}
        >
          <motion.span
            className="h-1.5 w-1.5 shrink-0 rounded-full"
            style={{ backgroundColor: C.green }}
            animate={
              reduceMotion
                ? undefined
                : {
                    opacity: [1, 0.45, 1],
                    scale: [1, 1.25, 1],
                  }
            }
            transition={{
              duration: 1.6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            aria-hidden="true"
          />
          A more connected business
        </span>
      </div>
    </div>
  );
}

function MobileConnectedSystem() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="mt-5 lg:hidden">
      <div
        className="rounded-2xl border p-4"
        style={{ borderColor: C.border, backgroundColor: C.sage }}
      >
        <div className="grid grid-cols-2 gap-2.5">
          {afterItems.slice(0, 2).map((item) => (
            <SystemNode
              key={item.label}
              title={item.label}
              subtitle={item.description}
              icon={item.icon}
            />
          ))}
        </div>

        <div
          className="relative mx-auto my-3 h-10 w-px"
          style={{ backgroundColor: "rgba(0,66,37,0.35)" }}
          aria-hidden="true"
        >
          {!reduceMotion && (
            <motion.span
              className="absolute left-1/2 h-2 w-2 -translate-x-1/2 rounded-full"
              style={{ backgroundColor: C.green }}
              animate={{ top: ["0%", "80%", "0%"] }}
              transition={{
                duration: 2.4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          )}
        </div>

        <motion.div
          className="mx-auto w-[190px] rounded-xl border bg-white p-3.5 text-center shadow-[0_5px_22px_rgba(0,66,37,0.08)]"
          style={{ borderColor: "rgba(0,66,37,0.28)" }}
        >
          <div
            className="mx-auto flex h-9 w-9 items-center justify-center rounded-lg"
            style={{ backgroundColor: C.sage, color: C.green }}
          >
            <Bot className="h-4 w-4" aria-hidden="true" />
          </div>
          <p
            className="mt-2 text-sm font-semibold"
            style={{ color: C.charcoal }}
          >
            AI + Automation
          </p>
          <p className="mt-0.5 text-[10px]" style={{ color: C.gray }}>
            Connected business workflow
          </p>
        </motion.div>

        <div
          className="relative mx-auto my-3 h-10 w-px"
          style={{ backgroundColor: "rgba(0,66,37,0.35)" }}
          aria-hidden="true"
        >
          {!reduceMotion && (
            <motion.span
              className="absolute left-1/2 h-2 w-2 -translate-x-1/2 rounded-full"
              style={{ backgroundColor: C.green }}
              animate={{ top: ["0%", "80%", "0%"] }}
              transition={{
                duration: 2.6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          )}
        </div>

        <div className="grid grid-cols-2 gap-2.5">
          {afterItems.slice(3).map((item) => (
            <SystemNode
              key={item.label}
              title={item.label}
              subtitle={item.description}
              icon={item.icon}
            />
          ))}
        </div>

        <div className="mt-3 flex justify-center">
          <span
            className="inline-flex items-center gap-2 rounded-full border bg-white px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.12em]"
            style={{ borderColor: C.border, color: C.gray }}
          >
            <span
              className="h-1.5 w-1.5 rounded-full"
              style={{ backgroundColor: C.green }}
            />
            One connected system
          </span>
        </div>
      </div>
    </div>
  );
}

export default function ProblemSolution() {
  return (
    <section
      id="problem-solution"
      aria-labelledby="problem-solution-heading"
      className="section-feature section-fade-divider !pb-[56px] sm:!pb-[64px] md:!pb-[72px] lg:!pb-[80px]"
      style={{ backgroundColor: C.ivory, color: C.charcoal }}
    >
      <div className="container">
        {/* Section introduction */}
        <div className="section-intro-left">
          <motion.p
            className="section-eyebrow type-eyebrow"
            style={{ color: C.green }}
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45 }}
          >
            YOUR BUSINESS. YOUR WORKFLOW.
          </motion.p>

          <motion.h2
            id="problem-solution-heading"
            className="section-title type-section-title"
            style={{ color: C.charcoal }}
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.05 }}
          >
            Is Manual Work Slowing Your Business Down?
          </motion.h2>

          <motion.p
            className="section-description type-body-large"
            style={{ color: C.gray }}
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Spreadsheets, scattered messages, repetitive tasks and disconnected
            tools make everyday work harder to manage. We help bring these
            processes together into connected digital systems designed around
            your business.
          </motion.p>
        </div>

        {/* Before → After comparison */}
        <div className="mt-8 grid items-stretch gap-5 lg:mt-10 lg:grid-cols-[1fr_auto_1fr] lg:gap-5">
          <motion.article
            className="rounded-2xl border p-5 sm:p-6 md:p-7"
            style={{
              backgroundColor: C.white,
              borderColor: C.border,
              boxShadow: "0 8px 28px rgba(36,35,31,0.035)",
            }}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            <div
              className="flex items-start justify-between gap-4 border-b pb-5"
              style={{ borderColor: C.border }}
            >
              <div>
                <span
                  className="text-[11px] font-semibold uppercase tracking-[0.14em]"
                  style={{ color: C.gray }}
                >
                  Before
                </span>
                <h3
                  className="mt-2 text-xl font-semibold tracking-[-0.02em]"
                  style={{ color: C.charcoal }}
                >
                  Disconnected Processes
                </h3>
              </div>

              <div
                className="flex shrink-0 items-center gap-1.5 rounded-full border px-2.5 py-1 text-[10px] font-medium"
                style={{
                  borderColor: C.border,
                  backgroundColor: C.ivory,
                  color: C.gray,
                }}
              >
                <X className="h-3 w-3" aria-hidden="true" />
                Manual Work
              </div>
            </div>

            <div className="mt-5 space-y-2">
              {beforeItems.map((item, index) => (
                <BeforeItem key={item.label} item={item} index={index} />
              ))}
            </div>

            <div
              className="mt-5 flex flex-wrap gap-x-5 gap-y-2 border-t pt-4 text-[11px]"
              style={{ borderColor: C.border, color: C.gray }}
            >
              <span>Too many manual steps</span>
              <span>More room for errors</span>
            </div>
          </motion.article>

          {/* Transformation indicator */}
          <motion.div
            className="flex items-center justify-center lg:flex-col"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45 }}
          >
            <div
              className="hidden h-full w-px lg:block"
              style={{
                background:
                  "linear-gradient(to bottom, transparent, rgba(0,66,37,0.3), transparent)",
              }}
            />
            <div className="flex items-center gap-3 lg:absolute">
              <div
                className="hidden h-px w-8 sm:block lg:hidden"
                style={{ backgroundColor: C.border }}
              />
              <div
                className="flex h-10 w-10 items-center justify-center rounded-full border bg-white"
                style={{
                  borderColor: "rgba(0,66,37,0.24)",
                  color: C.green,
                  boxShadow: "0 5px 18px rgba(0,66,37,0.08)",
                }}
              >
                <ArrowRight
                  className="h-4 w-4 lg:rotate-90"
                  aria-hidden="true"
                />
              </div>
              <span
                className="text-[10px] font-semibold uppercase tracking-[0.14em]"
                style={{ color: C.green }}
              >
                Connect
              </span>
              <div
                className="h-px w-8 sm:block lg:hidden"
                style={{ backgroundColor: C.border }}
              />
            </div>
          </motion.div>

          <motion.article
            className="relative overflow-hidden rounded-2xl border p-5 sm:p-6 md:p-7"
            style={{
              backgroundColor: C.white,
              borderColor: "rgba(0,66,37,0.24)",
              boxShadow: "0 10px 34px rgba(0,66,37,0.045)",
            }}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            <div
              className="flex items-start justify-between gap-4 border-b pb-5"
              style={{ borderColor: C.border }}
            >
              <div>
                <span
                  className="text-[11px] font-semibold uppercase tracking-[0.14em]"
                  style={{ color: C.green }}
                >
                  After
                </span>
                <h3
                  className="mt-2 text-xl font-semibold tracking-[-0.02em]"
                  style={{ color: C.charcoal }}
                >
                  Connected Business Operations
                </h3>
              </div>

              <div
                className="flex shrink-0 items-center gap-1.5 rounded-full border px-2.5 py-1 text-[10px] font-medium"
                style={{
                  borderColor: "rgba(0,66,37,0.18)",
                  backgroundColor: C.sage,
                  color: C.green,
                }}
              >
                <Check className="h-3 w-3" aria-hidden="true" />
                Integrated
              </div>
            </div>

            <ConnectedSystemVisual />
            <MobileConnectedSystem />

            <div
              className="relative mt-5 flex flex-wrap gap-x-5 gap-y-2 border-t pt-4 text-[11px]"
              style={{ borderColor: C.border, color: C.gray }}
            >
              <span>Connected operations</span>
              <span>Built to scale</span>
            </div>
          </motion.article>
        </div>

        {/* Closing CTA */}
        <motion.div
          className="mt-8 flex flex-col items-start justify-between gap-5 border-t pt-6 sm:mt-10 md:flex-row md:items-center md:gap-6 md:pt-7"
          style={{ borderColor: C.border }}
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45 }}
        >
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
            <span
              className="h-1.5 w-1.5 shrink-0 rounded-full"
              style={{ backgroundColor: C.green }}
              aria-hidden="true"
            />
            <p className="text-sm" style={{ color: C.gray }}>
              You don't need more tools.
            </p>
            <strong
              className="text-sm font-semibold"
              style={{ color: C.charcoal }}
            >
              You need a system that works together.
            </strong>
          </div>

          <Link
            href="/start-project"
            className="group inline-flex min-h-11 items-center gap-2 rounded-lg border px-5 text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#004225] focus-visible:ring-offset-2"
            style={{
              borderColor: C.border,
              backgroundColor: C.white,
              color: C.green,
            }}
          >
            Explore the Right Solution
            <ArrowRight
              className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
