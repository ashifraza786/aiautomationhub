import { motion } from "framer-motion";
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

const beforeItems = [
  {
    icon: FileSpreadsheet,
    label: "Excel / Sheets",
    description: "Data scattered across files",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp Messages",
    description: "Important conversations get lost",
  },
  {
    icon: Workflow,
    label: "Manual Data Entry",
    description: "Teams repeat the same work",
  },
  {
    icon: BarChart3,
    label: "Disconnected Tools",
    description: "Systems don't communicate",
  },
  {
    icon: FileSpreadsheet,
    label: "Manual Reports",
    description: "Decisions take longer",
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
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.35,
        delay: 0.05 + index * 0.05,
      }}
      className="relative"
    >
      <div className="flex items-center gap-3 rounded-xl border border-border/60 bg-background/35 px-3.5 py-3 transition-colors duration-200 hover:border-border">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-border bg-elevated text-muted-foreground">
          <Icon className="h-4 w-4" />
        </div>

        <div className="min-w-0 flex-1">
          <p className="text-sm font-medium text-foreground">{item.label}</p>

          <p className="mt-0.5 text-[11px] leading-4 text-muted-foreground">
            {item.description}
          </p>
        </div>

        <span
          className="h-1.5 w-1.5 shrink-0 rounded-full bg-muted-foreground/30"
          aria-hidden="true"
        />
      </div>

      {index < beforeItems.length - 1 && (
        <div className="flex justify-center py-1.5 lg:hidden">
          <div className="h-2.5 w-px bg-border/70" />
        </div>
      )}
    </motion.div>
  );
}

function ConnectedSystemVisual() {
  return (
    <div className="relative mt-5 hidden min-h-[370px] overflow-hidden rounded-2xl border border-primary/10 bg-background/35 lg:block">
      {/* subtle system grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        aria-hidden="true"
        style={{
          backgroundImage:
            "linear-gradient(rgba(79,124,255,0.055) 1px, transparent 1px), linear-gradient(90deg, rgba(79,124,255,0.055) 1px, transparent 1px)",
          backgroundSize: "38px 38px",
        }}
      />

      {/* connection layer */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full"
        viewBox="0 0 760 370"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        {/* Website → CRM */}
        <motion.path
          d="M 125 72 C 205 92, 250 125, 305 145"
          fill="none"
          stroke="rgba(79,124,255,0.45)"
          strokeWidth="1.5"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        />

        {/* CRM → AI */}
        <motion.path
          d="M 125 270 C 205 250, 250 225, 305 205"
          fill="none"
          stroke="rgba(79,124,255,0.45)"
          strokeWidth="1.5"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.35 }}
        />

        {/* AI → Automation */}
        <motion.path
          d="M 455 175 C 515 145, 555 112, 635 82"
          fill="none"
          stroke="rgba(56,217,197,0.48)"
          strokeWidth="1.5"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        />

        {/* AI → Analytics */}
        <motion.path
          d="M 455 205 C 515 235, 555 265, 635 285"
          fill="none"
          stroke="rgba(56,217,197,0.48)"
          strokeWidth="1.5"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.65 }}
        />

        {/* flow particles */}
        <motion.circle
          cx="0"
          cy="0"
          r="3"
          fill="#4F7CFF"
          animate={{
            offsetDistance: ["0%", "100%"],
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: 2.8,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            offsetPath: "path('M 125 72 C 205 92, 250 125, 305 145')",
          }}
        />

        <motion.circle
          cx="0"
          cy="0"
          r="3"
          fill="#38D9C5"
          animate={{
            offsetDistance: ["0%", "100%"],
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: 0.8,
            ease: "linear",
          }}
          style={{
            offsetPath: "path('M 455 175 C 515 145, 555 112, 635 82')",
          }}
        />
      </svg>

      {/* Website */}
      <div className="absolute left-5 top-8 w-[145px] rounded-xl border border-primary/15 bg-elevated/90 p-3 shadow-[0_0_24px_rgba(79,124,255,0.05)]">
        <div className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-primary/15 bg-primary/5 text-primary">
            <Workflow className="h-4 w-4" />
          </div>

          <div>
            <p className="text-xs font-semibold text-foreground">Website</p>
            <p className="mt-0.5 text-[10px] text-muted-foreground">
              Digital entry
            </p>
          </div>
        </div>
      </div>

      {/* CRM / ERP */}
      <div className="absolute bottom-12 left-5 w-[145px] rounded-xl border border-primary/15 bg-elevated/90 p-3 shadow-[0_0_24px_rgba(79,124,255,0.05)]">
        <div className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-primary/15 bg-primary/5 text-primary">
            <BarChart3 className="h-4 w-4" />
          </div>

          <div>
            <p className="text-xs font-semibold text-foreground">CRM / ERP</p>
            <p className="mt-0.5 text-[10px] text-muted-foreground">
              Business data
            </p>
          </div>
        </div>
      </div>

      {/* AI Engine */}
      <motion.div
        className="absolute left-1/2 top-1/2 w-[175px] -translate-x-1/2 -translate-y-1/2 rounded-xl border border-primary/35 bg-[#101827] p-3.5 shadow-[0_0_38px_rgba(79,124,255,0.12)]"
        animate={{
          boxShadow: [
            "0 0 28px rgba(79,124,255,0.08)",
            "0 0 42px rgba(79,124,255,0.16)",
            "0 0 28px rgba(79,124,255,0.08)",
          ],
        }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-primary/25 bg-primary/10 text-primary">
            <Bot className="h-4 w-4" />
          </div>

          <div>
            <p className="text-sm font-semibold text-foreground">AI Layer</p>
            <p className="mt-0.5 text-[10px] text-muted-foreground">
              Intelligent assistance
            </p>
          </div>
        </div>
      </motion.div>

      {/* Automation */}
      <div className="absolute right-5 top-10 w-[150px] rounded-xl border border-mint/15 bg-elevated/90 p-3 shadow-[0_0_24px_rgba(56,217,197,0.05)]">
        <div className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-mint/15 bg-mint/5 text-mint">
            <Workflow className="h-4 w-4" />
          </div>

          <div>
            <p className="text-xs font-semibold text-foreground">Automation</p>
            <p className="mt-0.5 text-[10px] text-muted-foreground">
              Connected workflow
            </p>
          </div>
        </div>
      </div>

      {/* Analytics */}
      <div className="absolute bottom-12 right-5 w-[150px] rounded-xl border border-mint/15 bg-elevated/90 p-3 shadow-[0_0_24px_rgba(56,217,197,0.05)]">
        <div className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-mint/15 bg-mint/5 text-mint">
            <BarChart3 className="h-4 w-4" />
          </div>

          <div>
            <p className="text-xs font-semibold text-foreground">Analytics</p>
            <p className="mt-0.5 text-[10px] text-muted-foreground">
              Better visibility
            </p>
          </div>
        </div>
      </div>

      {/* system label */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2">
        <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background/85 px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.12em] text-muted-foreground backdrop-blur">
          <span className="h-1.5 w-1.5 rounded-full bg-mint" />
          One connected system
        </span>
      </div>
    </div>
  );
}

function MobileConnectedSystem() {
  return (
    <div className="relative mt-5 lg:hidden">
      <div className="relative rounded-2xl border border-primary/10 bg-background/35 p-4">
        <div className="grid grid-cols-2 gap-2.5">
          {afterItems.slice(0, 2).map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.label}
                className="rounded-xl border border-primary/10 bg-elevated/70 p-3"
              >
                <div className="flex items-center gap-2.5">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-primary/15 bg-primary/5 text-primary">
                    <Icon className="h-4 w-4" />
                  </div>

                  <div className="min-w-0">
                    <p className="truncate text-xs font-semibold text-foreground">
                      {item.label}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="relative mx-auto my-3 h-12 w-px bg-gradient-to-b from-primary/20 via-primary/60 to-mint/30">
          <motion.span
            className="absolute left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-primary shadow-[0_0_12px_rgba(79,124,255,0.6)]"
            animate={{ top: ["0%", "80%", "0%"] }}
            transition={{
              duration: 2.4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        <motion.div
          className="mx-auto w-[190px] rounded-xl border border-primary/35 bg-[#101827] p-3.5 text-center shadow-[0_0_34px_rgba(79,124,255,0.10)]"
          animate={{
            boxShadow: [
              "0 0 24px rgba(79,124,255,0.06)",
              "0 0 36px rgba(79,124,255,0.14)",
              "0 0 24px rgba(79,124,255,0.06)",
            ],
          }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="mx-auto flex h-9 w-9 items-center justify-center rounded-lg border border-primary/25 bg-primary/10 text-primary">
            <Bot className="h-4 w-4" />
          </div>

          <p className="mt-2 text-sm font-semibold text-foreground">
            AI + Automation
          </p>

          <p className="mt-0.5 text-[10px] text-muted-foreground">
            Connected business workflow
          </p>
        </motion.div>

        <div className="relative mx-auto my-3 h-12 w-px bg-gradient-to-b from-mint/30 via-mint/60 to-primary/20">
          <motion.span
            className="absolute left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-mint shadow-[0_0_12px_rgba(56,217,197,0.55)]"
            animate={{ top: ["0%", "80%", "0%"] }}
            transition={{
              duration: 2.6,
              repeat: Infinity,
              delay: 0.5,
              ease: "easeInOut",
            }}
          />
        </div>

        <div className="grid grid-cols-2 gap-2.5">
          {afterItems.slice(3).map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.label}
                className="rounded-xl border border-mint/10 bg-elevated/70 p-3"
              >
                <div className="flex items-center gap-2.5">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-mint/15 bg-mint/5 text-mint">
                    <Icon className="h-4 w-4" />
                  </div>

                  <div className="min-w-0">
                    <p className="truncate text-xs font-semibold text-foreground">
                      {item.label}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-3 flex items-center justify-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background/75 px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-mint" />
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
      className="section-feature section-fade-divider !pb-[56px] sm:!pb-[64px] md:!pb-[72px] lg:!pb-[80px]"
      aria-labelledby="problem-solution-heading"
    >
      <div className="container">
        {/* ================================================================
            01 — RECOGNIZE
           ================================================================ */}
        <div className="section-intro-left">
          <motion.p
            className="section-eyebrow type-eyebrow"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45 }}
          >
            YOUR BUSINESS. YOUR WORKFLOW.
          </motion.p>

          <motion.h2
            id="problem-solution-heading"
            className="section-title type-section-title"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, delay: 0.05 }}
          >
            Still Managing Your Business Manually?
          </motion.h2>

          <motion.p
            className="section-description type-body-large"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, delay: 0.1 }}
          >
            Spreadsheets, WhatsApp messages, repetitive data entry and
            disconnected tools can slow your business down. We turn those
            scattered processes into connected digital systems that are easier
            to manage, automate and scale.
          </motion.p>
        </div>

        {/* ================================================================
            02 + 03 — PROBLEM → TRANSFORMATION
           ================================================================ */}
        <div className="mt-8 grid items-stretch gap-5 lg:mt-10 lg:grid-cols-[1fr_auto_1fr] lg:gap-5">
          {/* BEFORE */}
          <motion.article
            className="rounded-2xl border border-border/80 bg-surface/65 p-5 sm:p-6 md:p-7"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55 }}
          >
            <div className="flex items-start justify-between gap-4 border-b border-border/70 pb-5">
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                  Before
                </span>

                <h3 className="mt-2 text-xl font-semibold tracking-[-0.02em] text-foreground">
                  Disconnected Workflows
                </h3>
              </div>

              <div className="flex shrink-0 items-center gap-1.5 rounded-full border border-border bg-background/60 px-2.5 py-1 text-[10px] font-medium text-muted-foreground">
                <X className="h-3 w-3" />
                Manual
              </div>
            </div>

            <div className="mt-5 space-y-2">
              {beforeItems.map((item, index) => (
                <BeforeItem key={item.label} item={item} index={index} />
              ))}
            </div>

            <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 border-t border-border/60 pt-4 text-[11px] text-muted-foreground">
              <span>Too many manual steps</span>
              <span>More room for errors</span>
            </div>
          </motion.article>

          {/* TRANSFORMATION */}
          <motion.div
            className="flex items-center justify-center lg:flex-col"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="hidden h-full w-px bg-gradient-to-b from-transparent via-primary/30 to-transparent lg:block" />

            <div className="flex items-center gap-3 lg:absolute">
              <div className="hidden h-px w-8 bg-border sm:block lg:hidden" />

              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-primary/30 bg-primary/10 text-primary shadow-[0_0_28px_rgba(79,124,255,0.10)]">
                <ArrowRight className="h-4 w-4 lg:rotate-90" />
              </div>

              <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-primary">
                Connect
              </span>

              <div className="h-px w-8 bg-primary/25 sm:block lg:hidden" />
            </div>
          </motion.div>

          {/* AFTER */}
          <motion.article
            className="relative overflow-hidden rounded-2xl border border-primary/25 bg-elevated/75 p-5 shadow-[0_0_50px_rgba(79,124,255,0.06)] sm:p-6 md:p-7"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55 }}
          >
            <div
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_10%,rgba(79,124,255,0.10),transparent_38%)]"
              aria-hidden="true"
            />

            <div className="relative flex items-start justify-between gap-4 border-b border-primary/15 pb-5">
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-primary">
                  After
                </span>

                <h3 className="mt-2 text-xl font-semibold tracking-[-0.02em] text-foreground">
                  Connected Business System
                </h3>
              </div>

              <div className="flex shrink-0 items-center gap-1.5 rounded-full border border-mint/20 bg-mint/5 px-2.5 py-1 text-[10px] font-medium text-mint">
                <Check className="h-3 w-3" />
                Connected
              </div>
            </div>

            <ConnectedSystemVisual />
            <MobileConnectedSystem />

            <div className="relative mt-5 flex flex-wrap gap-x-5 gap-y-2 border-t border-primary/15 pt-4 text-[11px] text-muted-foreground">
              <span>Connected operations</span>
              <span>Built to scale</span>
            </div>
          </motion.article>
        </div>

        {/* ================================================================
            04 — TAKE THE NEXT STEP
           ================================================================ */}
        <motion.div
          className="mt-8 flex flex-col items-start justify-between gap-5 border-t border-border/70 pt-6 sm:mt-10 md:flex-row md:items-center md:gap-6 md:pt-7"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-3">
            <span
              className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
              aria-hidden="true"
            />

            <p className="text-sm text-muted-foreground">
              You don't need more tools.
            </p>

            <strong className="text-sm font-semibold text-foreground">
              You need the right system.
            </strong>
          </div>

          <Link
            href="/start-project"
            className="group inline-flex h-11 items-center gap-2 rounded-lg border border-border bg-surface px-5 text-sm font-semibold text-foreground transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/40 hover:bg-elevated focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            Tell Us What You Need
            <ArrowRight className="h-4 w-4 text-muted-foreground transition-transform duration-200 group-hover:translate-x-0.5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
