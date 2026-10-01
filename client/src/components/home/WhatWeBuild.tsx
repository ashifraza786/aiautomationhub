import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  Bot,
  Building2,
  Check,
  Code2,
  Globe2,
  Layers3,
  MessageCircle,
  Workflow,
} from "lucide-react";
import { Link } from "wouter";

const supportingServices = [
  {
    number: "02",
    icon: Code2,
    title: "Custom Business Software",
    description: "Purpose-built software for the way your business operates.",
    items: [
      "Business Dashboards",
      "CRM & Internal Tools",
      "Billing & Inventory",
      "Custom Applications",
    ],
    href: "/solutions/custom-software",
    accent: "blue",
  },
  {
    number: "03",
    icon: Building2,
    title: "ERP & Business Systems",
    description:
      "Connected systems that bring important business operations into one place.",
    items: [
      "Sales & Operations",
      "Inventory & Billing",
      "Employee Management",
      "Reporting & Business Data",
    ],
    href: "/solutions/erp-business-systems",
    accent: "violet",
  },
  {
    number: "04",
    icon: Globe2,
    title: "Websites & Digital Solutions",
    description:
      "Digital experiences designed to support your business and generate opportunities.",
    items: [
      "Business Websites",
      "E-commerce",
      "Landing Pages",
      "Portals & Web Apps",
    ],
    href: "/solutions/websites-digital-solutions",
    accent: "mint",
  },
  {
    number: "05",
    icon: BarChart3,
    title: "Business Growth & Digital Marketing",
    description:
      "Digital growth support that connects your online presence with business goals.",
    items: [
      "Digital Advertising",
      "Product Promotion",
      "Lead Generation",
      "Conversion-Focused Experiences",
    ],
    href: "/solutions/business-growth",
    accent: "blue",
  },
];

const automationSteps = [
  {
    icon: Globe2,
    label: "New Lead",
    detail: "Website / Campaign",
  },
  {
    icon: Bot,
    label: "AI Agent",
    detail: "Understand & qualify",
  },
  {
    icon: Layers3,
    label: "CRM",
    detail: "Store & organize",
  },
  {
    icon: MessageCircle,
    label: "Action",
    detail: "Follow-up",
  },
];

export default function WhatWeBuild() {
  return (
    <section
      id="solutions"
      className="section-feature section-fade-divider"
      aria-labelledby="what-we-build-heading"
    >
      <div className="container">
        {/* ================================================================
            SECTION INTRO — CAPABILITIES
           ================================================================ */}
        <div className="section-intro-left">
          <motion.p
            className="section-eyebrow type-eyebrow"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45 }}
          >
            WHAT WE BUILD
          </motion.p>

          <motion.h2
            id="what-we-build-heading"
            className="section-title type-section-title"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, delay: 0.05 }}
          >
            Technology Built Around How Your Business Works.
          </motion.h2>

          <motion.p
            className="section-description type-body-large"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, delay: 0.1 }}
          >
            From AI-powered automation to custom software, ERP systems and
            digital experiences — we build the technology your business actually
            needs.
          </motion.p>
        </div>

        {/* ================================================================
            FEATURED CAPABILITY — AI AUTOMATION
           ================================================================ */}
        <motion.article
          className="relative overflow-hidden rounded-2xl border border-primary/25 bg-elevated/70 shadow-[0_0_65px_rgba(79,124,255,0.07)]"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65 }}
        >
          {/* Ambient visual layer */}
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_75%_35%,rgba(79,124,255,0.12),transparent_35%),radial-gradient(circle_at_20%_90%,rgba(56,217,197,0.05),transparent_30%)]"
            aria-hidden="true"
          />

          <div className="relative grid lg:grid-cols-[0.9fr_1.1fr]">
            {/* ------------------------------------------------------------
                Copy
               ------------------------------------------------------------ */}
            <div className="p-6 sm:p-8 lg:p-10">
              <div className="flex items-center justify-between gap-4">
                <span className="text-[11px] font-semibold tracking-[0.14em] text-primary">
                  01
                </span>

                <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.1em] text-primary">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  Core Capability
                </span>
              </div>

              <div className="mt-8 flex h-11 w-11 items-center justify-center rounded-xl border border-primary/25 bg-primary/10 text-primary">
                <Bot className="h-5 w-5" />
              </div>

              <h3 className="mt-5 text-2xl font-semibold tracking-[-0.025em] text-foreground sm:text-3xl">
                AI Automation
              </h3>

              <p className="mt-3 max-w-[520px] text-xl font-medium leading-[1.35] tracking-[-0.015em] text-foreground">
                Turn Repetitive Work Into Intelligent Workflows.
              </p>

              <p className="mt-4 max-w-[540px] text-[15px] leading-7 text-muted-foreground">
                Automate repetitive business processes and connect the tools
                your team already uses. AI can be introduced where it provides a
                useful advantage — not simply because it is available.
              </p>

              {/* Capability list */}
              <div className="mt-7 grid grid-cols-1 gap-2 sm:grid-cols-2">
                {[
                  "AI Agents",
                  "AI Assistants",
                  "Workflow Automation",
                  "WhatsApp Automation",
                  "OCR & Document Intelligence",
                  "API & Business Integrations",
                  "Lead Automation",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2.5 text-xs text-muted-foreground"
                  >
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-primary/20 bg-primary/5 text-primary">
                      <Check className="h-3 w-3" />
                    </span>
                    {item}
                  </div>
                ))}
              </div>

              <Link
                href="/solutions/ai-automation"
                className="group mt-8 inline-flex h-10 items-center gap-2 rounded-lg border border-border bg-surface px-4 text-xs font-semibold text-foreground transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/40 hover:bg-background focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                Explore AI Automation
                <ArrowRight className="h-3.5 w-3.5 text-muted-foreground transition-transform duration-200 group-hover:translate-x-0.5" />
              </Link>
            </div>

            {/* ------------------------------------------------------------
                Workflow Interface
               ------------------------------------------------------------ */}
            <div className="border-t border-border/70 p-4 sm:p-6 lg:border-l lg:border-t-0 lg:p-8">
              <div className="h-full rounded-xl border border-border/80 bg-background/70 p-4 sm:p-5">
                {/* Interface header */}
                <div className="flex items-center justify-between border-b border-border/70 pb-4">
                  <div>
                    <span className="text-[9px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                      Workflow Builder
                    </span>

                    <p className="mt-1 text-sm font-semibold text-foreground">
                      Lead Automation
                    </p>
                  </div>

                  <div className="flex items-center gap-2 rounded-full border border-mint/15 bg-mint/5 px-2.5 py-1 text-[9px] font-medium text-mint">
                    <span className="h-1.5 w-1.5 rounded-full bg-mint" />
                    Connected
                  </div>
                </div>

                {/* Workflow */}
                <div className="mt-6">
                  <div className="space-y-0">
                    {automationSteps.map((step, index) => {
                      const Icon = step.icon;
                      const isLast = index === automationSteps.length - 1;

                      return (
                        <div key={step.label}>
                          <motion.div
                            initial={{ opacity: 0, x: 12 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{
                              duration: 0.4,
                              delay: 0.15 + index * 0.08,
                            }}
                            className={[
                              "flex items-center gap-3 rounded-xl border px-3.5 py-3",
                              index === 1 || index === 2
                                ? "border-primary/20 bg-primary/[0.035]"
                                : "border-border/70 bg-surface/50",
                            ].join(" ")}
                          >
                            <div
                              className={[
                                "flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border",
                                index === 1
                                  ? "border-primary/25 bg-primary/10 text-primary"
                                  : index === 3
                                    ? "border-mint/20 bg-mint/5 text-mint"
                                    : "border-border bg-elevated text-muted-foreground",
                              ].join(" ")}
                            >
                              <Icon className="h-4 w-4" />
                            </div>

                            <div className="min-w-0 flex-1">
                              <p className="text-xs font-semibold text-foreground">
                                {step.label}
                              </p>

                              <p className="mt-0.5 text-[10px] text-muted-foreground">
                                {step.detail}
                              </p>
                            </div>

                            <span
                              className={[
                                "h-1.5 w-1.5 shrink-0 rounded-full",
                                index === 3
                                  ? "bg-mint"
                                  : index === 1 || index === 2
                                    ? "bg-primary"
                                    : "bg-border",
                              ].join(" ")}
                            />
                          </motion.div>

                          {!isLast && (
                            <div className="flex h-8 justify-center">
                              <div className="relative h-full w-px bg-border">
                                <motion.span
                                  className="absolute left-0 top-0 h-1/2 w-px bg-primary/60"
                                  initial={{ scaleY: 0 }}
                                  whileInView={{ scaleY: 1 }}
                                  viewport={{ once: true }}
                                  transition={{
                                    duration: 0.45,
                                    delay: 0.35 + index * 0.1,
                                  }}
                                  style={{ transformOrigin: "top" }}
                                />
                              </div>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Workflow footer */}
                <div className="mt-6 flex items-center justify-between border-t border-border/70 pt-4">
                  <div className="flex items-center gap-2">
                    <Workflow className="h-3.5 w-3.5 text-primary" />
                    <span className="text-[9px] font-medium text-muted-foreground">
                      Connected workflow
                    </span>
                  </div>

                  <span className="text-[9px] font-semibold tracking-[0.08em] text-muted-foreground">
                    LEAD → ACTION
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.article>

        {/* ================================================================
            SUPPORTING CAPABILITIES
           ================================================================ */}
        <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2">
          {supportingServices.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.article
                key={service.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.06,
                }}
                className="group relative overflow-hidden rounded-2xl border border-border/80 bg-surface/70 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/25 hover:bg-elevated/70 md:p-7"
              >
                {/* Number / icon */}
                <div className="flex items-start justify-between">
                  <span className="text-[11px] font-semibold tracking-[0.14em] text-muted-foreground">
                    {service.number}
                  </span>

                  <div
                    className={[
                      "flex h-10 w-10 items-center justify-center rounded-lg border",
                      service.accent === "violet"
                        ? "border-violet/20 bg-violet/5 text-violet"
                        : service.accent === "mint"
                          ? "border-mint/20 bg-mint/5 text-mint"
                          : "border-primary/20 bg-primary/5 text-primary",
                    ].join(" ")}
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                </div>

                <h3 className="mt-7 max-w-[420px] text-xl font-semibold tracking-[-0.02em] text-foreground">
                  {service.title}
                </h3>

                <p className="mt-3 max-w-[500px] text-sm leading-6 text-muted-foreground">
                  {service.description}
                </p>

                <ul className="mt-6 grid grid-cols-1 gap-2 sm:grid-cols-2">
                  {service.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-xs text-muted-foreground"
                    >
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-border transition-colors duration-200 group-hover:bg-primary/60" />
                      {item}
                    </li>
                  ))}
                </ul>

                <Link
                  href={service.href}
                  className="group/link mt-7 inline-flex items-center gap-2 text-xs font-semibold text-foreground transition-colors duration-200 hover:text-primary"
                >
                  Learn More
                  <ArrowRight className="h-3.5 w-3.5 text-muted-foreground transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:text-primary" />
                </Link>
              </motion.article>
            );
          })}
        </div>

        {/* ================================================================
            SECTION CONVERSION
           ================================================================ */}
        <motion.div
          className="mt-10 flex flex-col gap-5 border-t border-border/70 pt-7 md:flex-row md:items-center md:justify-between"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.5 }}
        >
          <div>
            <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
              Not sure what you need?
            </span>

            <p className="mt-2 text-sm text-foreground">
              That's okay. Tell us the problem — we'll help define the right
              technology.
            </p>
          </div>

          <Link
            href="/start-project"
            className="group inline-flex h-11 shrink-0 items-center justify-center gap-2 rounded-lg bg-primary px-5 text-sm font-semibold text-primary-foreground shadow-[0_0_24px_rgba(79,124,255,0.10)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary/95 hover:shadow-[0_0_32px_rgba(79,124,255,0.18)] focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            Tell Us What You Need
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
