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
    label: "Excel & Sheets",
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
    label: "Separate Software",
    description: "Tools don't communicate",
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
    icon: Workflow,
    label: "Automation",
    description: "Repetitive work runs automatically",
  },
  {
    icon: Bot,
    label: "AI",
    description: "Intelligent assistance where useful",
  },
  {
    icon: BarChart3,
    label: "Analytics",
    description: "Clear visibility for better decisions",
  },
];

function FlowArrow({ active = false }: { active?: boolean }) {
  return (
    <div
      className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border ${
        active
          ? "border-primary/30 bg-primary/10 text-primary"
          : "border-border bg-elevated text-muted-foreground/50"
      }`}
      aria-hidden="true"
    >
      <ArrowRight className="h-3.5 w-3.5" />
    </div>
  );
}

export default function ProblemSolution() {
  return (
    <section
      id="problem-solution"
      className="section-feature section-fade-divider"
      aria-labelledby="problem-solution-heading"
    >
      <div className="container">
        {/* ================================================================
            SECTION INTRO — TRANSFORMATION
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
            TRANSFORMATION SYSTEM
           ================================================================ */}
        <div className="grid items-stretch gap-5 lg:grid-cols-[1fr_auto_1fr] lg:gap-6">
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
              {beforeItems.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.35,
                      delay: 0.08 + index * 0.06,
                    }}
                    className="group"
                  >
                    <div className="flex items-center gap-3 rounded-xl border border-border/60 bg-background/35 px-3.5 py-3 transition-colors duration-200 hover:border-border">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-border bg-elevated text-muted-foreground">
                        <Icon className="h-4 w-4" />
                      </div>

                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-medium text-foreground">
                          {item.label}
                        </p>
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
                      <div className="flex justify-center py-1 lg:hidden">
                        <div className="h-2.5 w-px bg-border" />
                      </div>
                    )}
                  </motion.div>
                );
              })}
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

            <div className="relative mt-5 space-y-2">
              {afterItems.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.35,
                      delay: 0.14 + index * 0.06,
                    }}
                  >
                    <div className="flex items-center gap-3 rounded-xl border border-primary/10 bg-background/35 px-3.5 py-3 transition-all duration-200 hover:border-primary/25 hover:bg-primary/[0.03]">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-primary/15 bg-primary/5 text-primary">
                        <Icon className="h-4 w-4" />
                      </div>

                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-medium text-foreground">
                          {item.label}
                        </p>
                        <p className="mt-0.5 text-[11px] leading-4 text-muted-foreground">
                          {item.description}
                        </p>
                      </div>

                      <span
                        className={`h-1.5 w-1.5 shrink-0 rounded-full ${
                          index === 3 || index === 4 ? "bg-mint" : "bg-primary"
                        }`}
                        aria-hidden="true"
                      />
                    </div>

                    {index < afterItems.length - 1 && (
                      <div className="flex justify-center py-1 lg:hidden">
                        <div className="h-2.5 w-px bg-primary/20" />
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </div>

            <div className="relative mt-5 flex flex-wrap gap-x-5 gap-y-2 border-t border-primary/15 pt-4 text-[11px] text-muted-foreground">
              <span>Connected operations</span>
              <span>Built to scale</span>
            </div>
          </motion.article>
        </div>

        {/* ================================================================
            PUNCHLINE + CONVERSION
           ================================================================ */}
        <motion.div
          className="mt-12 flex flex-col items-start justify-between gap-6 border-t border-border/70 pt-7 md:mt-14 md:flex-row md:items-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-3">
            <span
              className="h-1.5 w-1.5 rounded-full bg-primary"
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
