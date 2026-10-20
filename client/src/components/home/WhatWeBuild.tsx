import { motion, AnimatePresence } from "framer-motion";
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
import { useEffect, useState } from "react";
import { Link } from "wouter";
import AIAutomationShowcase from "@/components/what-we-build/AIAutomationShowcase";
import CustomSoftwareShowcase from "@/components/what-we-build/CustomSoftwareShowcase";
import ERPShowcase from "@/components/what-we-build/ERPShowcase";
import WebsitesShowcase from "@/components/what-we-build/WebsitesShowcase";
import BusinessGrowthShowcase from "@/components/what-we-build/BussinessGrowthShowcase";
const categories = [
  {
    id: "ai",
    number: "01",
    shortLabel: "AI Automation",
    title: "AI Automation",
    headline: "Turn Repetitive Tasks Into Smarter Workflows.",
    description:
      "Automate routine tasks and connect the tools your team already uses. Apply AI where it solves a real business problem and makes everyday work simpler.",
    items: [
      "AI Agents",
      "AI Assistants",
      "Workflow Automation",
      "WhatsApp Automation",
      "OCR & Document Intelligence",
      "API & Business Integrations",
      "Lead Automation",
    ],
    href: "/solutions/ai-automation",
    icon: Bot,
    accent: "blue",
    visualTitle: "Workflow Builder",
    visualSubtitle: "Lead Automation",
  },
  {
    id: "software",
    number: "02",
    shortLabel: "Custom Software",
    title: "Custom Business Software",
    headline: "Software Built Around the Way You Work.",
    description:
      "Bring your day-to-day operations into purpose-built software, from internal dashboards and business tools to custom applications that fit your team's workflow.",
    items: [
      "Business Dashboards",
      "CRM & Internal Tools",
      "Billing & Inventory",
      "Custom Applications",
    ],
    href: "/solutions/custom-software",
    icon: Code2,
    accent: "blue",
    visualTitle: "Business Software",
    visualSubtitle: "Operations System",
  },
  {
    id: "erp",
    number: "03",
    shortLabel: "ERP",
    title: "ERP & Business Systems",
    headline: "Bring Your Core Operations Into One System.",
    description:
      "Connect sales, inventory, billing, employee management and reporting so your team can work with shared, consistent business information.",
    items: [
      "Sales & Operations",
      "Inventory & Billing",
      "Employee Management",
      "Reporting & Business Data",
    ],
    href: "/solutions/erp-business-systems",
    icon: Building2,
    accent: "violet",
    visualTitle: "Business Operations",
    visualSubtitle: "Connected ERP",
  },
  {
    id: "websites",
    number: "04",
    shortLabel: "Websites",
    title: "Websites & Digital Solutions",
    headline: "Create Digital Experiences That Move Business Forward.",
    description:
      "Create websites, online stores and digital platforms that help customers discover your business, explore your offerings and take the next step.",
    items: [
      "Business Websites",
      "E-commerce",
      "Landing Pages",
      "Portals & Web Apps",
    ],
    href: "/solutions/websites-digital-solutions",
    icon: Globe2,
    accent: "mint",
    visualTitle: "Digital Experience",
    visualSubtitle: "Business Website",
  },
  {
    id: "growth",
    number: "05",
    shortLabel: "Growth",
    title: "Business Growth & Digital Marketing",
    headline: "Turn Online Reach Into Meaningful Opportunities.",
    description:
      "Connect digital campaigns with business goals through advertising, product promotion, lead generation and conversion-focused experiences.",
    items: [
      "Digital Advertising",
      "Product Promotion",
      "Lead Generation",
      "Conversion-Focused Experiences",
    ],
    href: "/solutions/business-growth",
    icon: BarChart3,
    accent: "blue",
    visualTitle: "Growth System",
    visualSubtitle: "Campaign → Lead",
  },
];

function getAccentClasses(accent: string) {
  if (accent === "violet") {
    return {
      icon: "border-violet/20 bg-violet/5 text-violet",
      active:
        "border-violet/40 bg-violet/[0.08] text-foreground shadow-[0_0_24px_rgba(109,92,255,0.10)]",
      dot: "bg-violet",
    };
  }

  if (accent === "mint") {
    return {
      icon: "border-mint/20 bg-mint/5 text-mint",
      active:
        "border-mint/35 bg-mint/[0.06] text-foreground shadow-[0_0_24px_rgba(56,217,197,0.08)]",
      dot: "bg-mint",
    };
  }

  return {
    icon: "border-primary/20 bg-primary/5 text-primary",
    active:
      "border-primary/40 bg-primary/[0.07] text-foreground shadow-[0_0_24px_rgba(79,124,255,0.10)]",
    dot: "bg-primary",
  };
}

function CategoryVisual({
  category,
}: {
  category: (typeof categories)[number];
}) {
  const Icon = category.icon;
  const accent = getAccentClasses(category.accent);

  return (
    <div className="relative h-full min-h-[430px] overflow-hidden rounded-xl border border-border/80 bg-background/70 p-4 sm:p-5 lg:p-6">
      {/* Ambient system glow */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_25%,rgba(79,124,255,0.10),transparent_36%),radial-gradient(circle_at_20%_85%,rgba(56,217,197,0.045),transparent_30%)]"
        aria-hidden="true"
      />

      <div className="relative flex h-full flex-col">
        {/* Visual header */}
        <div className="flex items-center justify-between border-b border-border/70 pb-4">
          <div className="flex items-center gap-3">
            <div
              className={[
                "flex h-9 w-9 items-center justify-center rounded-lg border",
                accent.icon,
              ].join(" ")}
            >
              <Icon className="h-4 w-4" />
            </div>

            <div>
              <span className="text-[9px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                {category.visualTitle}
              </span>

              <p className="mt-1 text-sm font-semibold text-foreground">
                {category.visualSubtitle}
              </p>
            </div>
          </div>

          <span className="inline-flex items-center gap-2 rounded-full border border-mint/15 bg-mint/5 px-2.5 py-1 text-[9px] font-medium text-mint">
            <span className="h-1.5 w-1.5 rounded-full bg-mint" />
            System Ready
          </span>
        </div>

        {/* Concept visual */}
        <AnimatePresence mode="wait">
          <motion.div
            key={category.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="flex flex-1 flex-col justify-center"
          >
            {category.id === "ai" ? (
              <AIAutomationShowcase />
            ) : category.id === "software" ? (
              <CustomSoftwareShowcase />
            ) : category.id === "erp" ? (
              <ERPShowcase />
            ) : category.id === "websites" ? (
              <WebsitesShowcase />
            ) : category.id === "business-growth" ? (
              <BusinessGrowthShowcase />
            ) : (
              <div className="space-y-3">
                <div className="grid grid-cols-3 gap-3">
                  {[1, 2, 3].map((item) => (
                    <div
                      key={item}
                      className="rounded-xl border border-border/70 bg-surface/50 p-3"
                    >
                      <div className="h-2 w-12 rounded-full bg-border" />
                      <div className="mt-4 h-5 w-16 rounded-md bg-elevated" />
                      <div className="mt-3 h-1.5 w-full rounded-full bg-border/70" />
                      <div className="mt-2 h-1.5 w-3/4 rounded-full bg-border/50" />
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-[0.9fr_1.1fr] gap-3">
                  <div className="rounded-xl border border-border/70 bg-surface/50 p-4">
                    <div className="flex items-center justify-between">
                      <span className="text-[9px] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                        System
                      </span>

                      <span
                        className={`h-1.5 w-1.5 rounded-full ${accent.dot}`}
                      />
                    </div>

                    <div className="mt-5 space-y-2.5">
                      {category.items.slice(0, 4).map((item, index) => (
                        <div
                          key={item}
                          className="flex items-center gap-2 rounded-lg border border-border/60 bg-background/40 px-2.5 py-2"
                        >
                          <span className="text-[9px] text-muted-foreground">
                            0{index + 1}
                          </span>
                          <span className="truncate text-[10px] font-medium text-foreground">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-xl border border-border/70 bg-surface/50 p-4">
                    <div className="flex items-center justify-between">
                      <span className="text-[9px] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                        Activity
                      </span>

                      <span className="text-[9px] text-muted-foreground">
                        Live view
                      </span>
                    </div>

                    <div className="mt-6 flex h-32 items-end gap-2">
                      {[34, 52, 42, 68, 56, 78, 64, 88].map((height, index) => (
                        <motion.div
                          key={index}
                          className="flex-1 rounded-t-sm bg-primary/20"
                          initial={{ height: 0 }}
                          animate={{ height: `${height}%` }}
                          transition={{
                            duration: 0.5,
                            delay: index * 0.035,
                            ease: "easeOut",
                          }}
                        />
                      ))}
                    </div>

                    <div className="mt-4 flex items-center justify-between border-t border-border/60 pt-3">
                      <span className="text-[9px] text-muted-foreground">
                        Connected system
                      </span>

                      <span className="text-[9px] font-semibold text-foreground">
                        READY
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Visual footer */}
        <div className="mt-5 flex items-center justify-between border-t border-border/70 pt-4">
          <div className="flex items-center gap-2">
            <Workflow className="h-3.5 w-3.5 text-primary" />

            <span className="text-[9px] font-medium text-muted-foreground">
              Concept system view
            </span>
          </div>

          <span className="text-[9px] font-semibold tracking-[0.08em] text-muted-foreground">
            {category.number} / 05
          </span>
        </div>
      </div>
    </div>
  );
}

export default function WhatWeBuild() {
  const [activeCategory, setActiveCategory] = useState("ai");
  const [isPaused, setIsPaused] = useState(false);

  const active =
    categories.find((category) => category.id === activeCategory) ??
    categories[0];

  useEffect(() => {
    if (isPaused) return;

    const timer = window.setInterval(() => {
      setActiveCategory((current) => {
        const currentIndex = categories.findIndex(
          (category) => category.id === current,
        );

        const nextIndex = (currentIndex + 1) % categories.length;

        return categories[nextIndex].id;
      });
    }, 6000);

    return () => window.clearInterval(timer);
  }, [isPaused]);

  return (
    <section
      id="solutions"
      className="section-feature section-fade-divider !pt-[32px] sm:!pt-[36px] md:!pt-[40px] lg:!pt-[48px]"
      aria-labelledby="what-we-build-heading"
    >
      <div className="container">
        {/* ================================================================
            SECTION INTRO
           ================================================================= */}

        <div className="section-intro-left">
          <motion.p
            className="section-eyebrow type-eyebrow editorial-eyebrow"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45 }}
          >
            WHAT WE BUILD
          </motion.p>

          <motion.h2
            id="what-we-build-heading"
            className="section-title type-section-title editorial-section-heading font-medium"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, delay: 0.05 }}
          >
            Technology That Works Around Your Business.
          </motion.h2>

          <motion.p
            className="section-description type-body-large"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, delay: 0.1 }}
          >
            From intelligent automation to custom software, ERP systems and
            digital experiences, we build technology around your workflows, your
            team and your business goals.
          </motion.p>
        </div>

        {/* ================================================================
            CATEGORY TABS
           ================================================================= */}

        <motion.div
          className="mt-9 overflow-x-auto pb-2"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <div
            className="flex min-w-max gap-2"
            role="tablist"
            aria-label="What we build"
          >
            {categories.map((category) => {
              const isActive = activeCategory === category.id;

              return (
                <button
                  key={category.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => {
                    setActiveCategory(category.id);
                    setIsPaused(true);
                  }}
                  className={[
                    "inline-flex h-11 items-center gap-2 rounded-lg border px-4 text-xs font-semibold transition-all duration-250",
                    isActive
                      ? "border-primary/40 bg-primary/[0.08] text-foreground shadow-[0_0_22px_rgba(79,124,255,0.08)]"
                      : "border-border/80 bg-surface/60 text-muted-foreground hover:border-border hover:bg-elevated/70 hover:text-foreground",
                  ].join(" ")}
                >
                  <span
                    className={[
                      "text-[10px] tracking-[0.08em]",
                      isActive ? "text-primary" : "text-muted-foreground",
                    ].join(" ")}
                  >
                    {category.number}
                  </span>

                  {category.shortLabel}
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* ================================================================
            SINGLE ACTIVE SHOWCASE
           ================================================================= */}

        <motion.article
          className="relative mt-5 overflow-hidden rounded-2xl border border-primary/20 bg-elevated/70 shadow-[0_0_65px_rgba(79,124,255,0.055)]"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65 }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_75%_35%,rgba(79,124,255,0.10),transparent_35%),radial-gradient(circle_at_20%_90%,rgba(56,217,197,0.045),transparent_30%)]"
            aria-hidden="true"
          />

          <div className="relative grid lg:grid-cols-[0.9fr_1.1fr]">
            {/* ------------------------------------------------------------
                LEFT — ACTIVE CATEGORY CONTENT
               ------------------------------------------------------------ */}

            <div className="p-6 sm:p-8 lg:p-10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active.id}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-[11px] font-semibold tracking-[0.14em] text-primary">
                      {active.number}
                    </span>

                    <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.1em] text-primary">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                      {active.id === "ai"
                        ? "Core Capability"
                        : "Business Capability"}
                    </span>
                  </div>

                  <div
                    className={[
                      "mt-8 flex h-11 w-11 items-center justify-center rounded-xl border",
                      getAccentClasses(active.accent).icon,
                    ].join(" ")}
                  >
                    <active.icon className="h-5 w-5" />
                  </div>

                  <h3 className="mt-5 text-2xl font-semibold tracking-[-0.025em] text-foreground sm:text-3xl">
                    {active.title}
                  </h3>

                  <p className="mt-3 max-w-[520px] text-xl font-semibold leading-[1.4] tracking-[-0.02em] text-foreground">
                    {active.headline}
                  </p>

                  <p className="mt-4 max-w-[540px] text-[15px] leading-7 text-muted-foreground">
                    {active.description}
                  </p>

                  <div className="mt-7 grid grid-cols-1 gap-2 sm:grid-cols-2">
                    {active.items.map((item) => (
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
                    href={active.href}
                    className="group mt-8 inline-flex h-10 items-center gap-2 rounded-lg border border-border bg-surface px-4 text-xs font-semibold text-foreground transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/40 hover:bg-background focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  >
                    Explore {active.shortLabel}
                    <ArrowRight className="h-3.5 w-3.5 text-muted-foreground transition-transform duration-200 group-hover:translate-x-0.5" />
                  </Link>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* ------------------------------------------------------------
                RIGHT — ACTIVE VISUAL
               ------------------------------------------------------------ */}

            <div className="border-t border-border/70 p-4 sm:p-6 lg:border-l lg:border-t-0 lg:p-8">
              <CategoryVisual category={active} />
            </div>
          </div>
        </motion.article>

        {/* ================================================================
            CONVERSION
           ================================================================= */}

        <motion.div
          className="mt-10 flex flex-col gap-5 border-t border-border/70 pt-7 md:flex-row md:items-center md:justify-between"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.5 }}
        >
          <div>
            <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
              Not sure where to start?
            </span>

            <p className="mt-2 text-sm text-foreground">
              Tell us what you want to improve. We'll help you explore the right
              approach for your business.
            </p>
          </div>

          <Link
            href="/start-project"
            className="group inline-flex h-11 shrink-0 items-center justify-center gap-2 rounded-lg bg-primary px-5 text-sm font-semibold text-primary-foreground shadow-[0_0_24px_rgba(79,124,255,0.10)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary/95 hover:shadow-[0_0_32px_rgba(79,124,255,0.18)] focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            Discuss Your Requirements
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
