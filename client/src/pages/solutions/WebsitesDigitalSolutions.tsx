import { useState, type ReactNode } from "react";
import { Link } from "wouter";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  BarChart3,
  Check,
  ChevronLeft,
  ChevronRight,
  Globe,
  LayoutDashboard,
  MousePointerClick,
  Package,
  Smartphone,
  ShoppingCart,
  Users,
  Workflow,
} from "lucide-react";

const solutionAreas = [
  {
    number: "01",
    icon: Globe,
    title: "Business Websites",
    description:
      "Professional websites that explain your business, communicate your value and establish a clear digital presence.",
    items: ["Company websites", "Service websites", "Responsive layouts"],
  },
  {
    number: "02",
    icon: MousePointerClick,
    title: "Landing Pages",
    description:
      "Focused experiences designed around a campaign, offer, product or specific customer action.",
    items: ["Campaign pages", "Lead generation", "Product landing pages"],
  },
  {
    number: "03",
    icon: ShoppingCart,
    title: "E-commerce",
    description:
      "Online storefronts structured around your products, customer journey and operational requirements.",
    items: ["Online stores", "Product catalogs", "Order workflows"],
  },
  {
    number: "04",
    icon: LayoutDashboard,
    title: "Web Applications",
    description:
      "Browser-based tools and portals that help customers or teams complete useful tasks digitally.",
    items: ["Customer portals", "Business dashboards", "Internal applications"],
  },
  {
    number: "05",
    icon: Smartphone,
    title: "Responsive Experiences",
    description:
      "Interfaces planned for desktop, tablet and mobile, with usability considered across screen sizes.",
    items: [
      "Mobile-first layouts",
      "Touch-friendly interfaces",
      "Cross-device journeys",
    ],
  },
  {
    number: "06",
    icon: Workflow,
    title: "Digital Workflows",
    description:
      "Connect digital interactions to the next step in your customer journey or business process.",
    items: ["Enquiry flows", "Booking journeys", "Business system handoffs"],
  },
];

const journeySteps = [
  {
    number: "01",
    title: "Website",
    label: "Digital presence",
    description:
      "A clear, useful place for people to understand your business, services and offer.",
    outcome: "Visitors understand what you offer.",
    icon: Globe,
  },
  {
    number: "02",
    title: "Customer action",
    label: "Interaction",
    description:
      "A purposeful page guides visitors towards an enquiry, purchase, booking or another relevant action.",
    outcome: "Visitors have a clear next step.",
    icon: MousePointerClick,
  },
  {
    number: "03",
    title: "Lead or customer",
    label: "Business opportunity",
    description:
      "An enquiry or transaction can be captured and organized according to the required business process.",
    outcome: "The interaction becomes actionable.",
    icon: Users,
  },
  {
    number: "04",
    title: "Business process",
    label: "Connected workflow",
    description:
      "Where required, the experience can connect to a CRM, business application or follow-up workflow.",
    outcome: "The next business step is defined.",
    icon: Workflow,
  },
];

const buildPhases = [
  {
    number: "01",
    title: "Understand",
    subtitle: "Start with the business goal.",
    description:
      "We learn about your business, audience, services and what the digital experience needs to accomplish.",
    points: [
      "Business goals and requirements",
      "Target audience and customer needs",
      "Content and functionality",
      "Desired customer action",
    ],
    outcome: "A clear direction for the experience",
  },
  {
    number: "02",
    title: "Structure",
    subtitle: "Plan the experience before building.",
    description:
      "We organize the information, pages and user journey so visitors can understand the offer and find the right next step.",
    points: [
      "Page and content structure",
      "Navigation and information hierarchy",
      "Customer journey",
      "Functional requirements",
    ],
    outcome: "A structured website or application plan",
  },
  {
    number: "03",
    title: "Design & build",
    subtitle: "Turn the plan into a usable experience.",
    description:
      "We develop the interface around your brand, content, functionality and device requirements.",
    points: [
      "Visual design and interface",
      "Responsive implementation",
      "Required functionality",
      "Relevant workflow connections",
    ],
    outcome: "A digital experience built to the agreed scope",
  },
  {
    number: "04",
    title: "Review & improve",
    subtitle: "Prepare for real-world use.",
    description:
      "We review the experience, refine relevant details and identify improvements based on the agreed requirements.",
    points: [
      "Responsive and usability review",
      "Content and interaction checks",
      "Launch preparation",
      "Future improvement opportunities",
    ],
    outcome: "A reviewed experience with room to evolve",
  },
];

function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 12 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{
        duration: reduceMotion ? 0 : 0.3,
        delay: reduceMotion ? 0 : delay,
        ease: "easeOut",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <p className="mb-4 text-xs font-medium tracking-[0.04em] text-[#004225] sm:text-[13px]">
      {children}
    </p>
  );
}

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="max-w-3xl">
      <SectionLabel>{eyebrow}</SectionLabel>
      <h2 className="text-[32px] font-semibold leading-[1.12] tracking-[-0.035em] text-[#24231F] sm:text-4xl lg:text-[44px]">
        {title}
      </h2>
      <p className="mt-5 text-[15px] leading-7 text-[#5F5B53] sm:text-lg sm:leading-8">
        {description}
      </p>
    </div>
  );
}

function PrimaryButton({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <Link
      href={href}
      className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#004225] px-5 py-3 text-[15px] font-medium text-white transition-colors hover:bg-[#00351E] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#004225] focus-visible:ring-offset-2"
    >
      {children}
    </Link>
  );
}

function SecondaryButton({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-[#DAD5CA] bg-white px-5 py-3 text-[15px] font-medium text-[#24231F] transition-colors hover:border-[#A9BBAA] hover:bg-[#FAF9F6] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#004225] focus-visible:ring-offset-2"
    >
      {children}
    </a>
  );
}

function WebsitePreview() {
  return (
    <div className="overflow-hidden rounded-2xl border border-[#E3DDD2] bg-white shadow-[0_16px_50px_rgba(36,35,31,0.07)]">
      <div className="flex items-center justify-between gap-3 border-b border-[#EAE5DC] px-4 py-3.5 sm:px-5">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full border border-[#DAD5CA] bg-[#F4F0E8]" />
          <span className="h-2.5 w-2.5 rounded-full border border-[#DAD5CA] bg-[#F4F0E8]" />
          <span className="h-2.5 w-2.5 rounded-full border border-[#DAD5CA] bg-[#F4F0E8]" />
        </div>
        <div className="min-w-0 flex-1 rounded-lg border border-[#EAE5DC] bg-[#FAF9F6] px-3 py-2 text-center text-xs text-[#777167]">
          yourbusiness.com
        </div>
        <span className="hidden text-xs text-[#004225] sm:inline">
          Concept preview
        </span>
      </div>

      <div className="p-4 sm:p-6">
        <div className="flex items-center justify-between gap-4 border-b border-[#EAE5DC] pb-4">
          <div className="h-3 w-28 rounded-full bg-[#004225]" />
          <div className="hidden gap-4 sm:flex">
            <span className="h-2 w-10 rounded-full bg-[#DAD5CA]" />
            <span className="h-2 w-10 rounded-full bg-[#DAD5CA]" />
            <span className="h-2 w-10 rounded-full bg-[#DAD5CA]" />
          </div>
          <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#E3DDD2] text-[#004225] sm:hidden">
            <LayoutDashboard size={16} />
          </div>
        </div>

        <div className="grid items-center gap-6 py-7 sm:grid-cols-[1fr_0.8fr] sm:py-10">
          <div>
            <div className="h-4 w-[92%] rounded-full bg-[#24231F]/10" />
            <div className="mt-3 h-4 w-[72%] rounded-full bg-[#24231F]/10" />
            <div className="mt-5 h-2 w-full rounded-full bg-[#EAE5DC]" />
            <div className="mt-2 h-2 w-[84%] rounded-full bg-[#EAE5DC]" />
            <div className="mt-2 h-2 w-[65%] rounded-full bg-[#EAE5DC]" />

            <div className="mt-6 flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-2 rounded-lg bg-[#004225] px-3 py-2 text-xs font-medium text-white">
                Explore services
                <ArrowRight size={13} />
              </span>
              <span className="rounded-lg border border-[#E3DDD2] px-3 py-2 text-xs text-[#5F5B53]">
                About us
              </span>
            </div>
          </div>

          <div className="flex min-h-[170px] flex-col items-center justify-center rounded-xl border border-[#E3DDD2] bg-[#F4F0E8] p-5 sm:min-h-[205px]">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-[#D9E5DB] bg-white text-[#004225]">
              <Globe size={29} strokeWidth={1.5} />
            </div>
            <div className="mt-5 h-2 w-24 rounded-full bg-[#24231F]/15" />
            <div className="mt-2 h-1.5 w-32 max-w-full rounded-full bg-[#DAD5CA]" />
          </div>
        </div>

        <div className="grid grid-cols-3 gap-2 border-t border-[#EAE5DC] pt-4 sm:gap-3">
          {[
            { title: "Discover", icon: Globe },
            { title: "Interact", icon: MousePointerClick },
            { title: "Connect", icon: Workflow },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="flex items-center gap-2 rounded-lg border border-[#EAE5DC] bg-[#FAF9F6] p-2.5 sm:p-3"
              >
                <Icon size={15} className="shrink-0 text-[#004225]" />
                <span className="text-xs font-medium text-[#5F5B53]">
                  {item.title}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      <div className="border-t border-[#EAE5DC] px-4 py-3 sm:px-5">
        <p className="text-xs leading-5 text-[#777167]">
          Illustrative website concept, not a deployed client website.
        </p>
      </div>
    </div>
  );
}

function JourneyExperience() {
  const [activeStep, setActiveStep] = useState(0);
  const reduceMotion = useReducedMotion();
  const step = journeySteps[activeStep];
  const ActiveIcon = step.icon;

  function selectStep(index: number) {
    setActiveStep(Math.max(0, Math.min(journeySteps.length - 1, index)));
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-[#E3DDD2] bg-white shadow-[0_12px_40px_rgba(36,35,31,0.04)]">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#EAE5DC] px-5 py-4 sm:px-7">
        <div>
          <p className="text-xs text-[#777167]">Customer journey</p>
          <p className="mt-1 text-sm font-semibold text-[#24231F]">
            Digital experience → Business outcome
          </p>
        </div>
        <span className="rounded-lg bg-[#EAF1EB] px-3 py-1.5 text-xs font-medium text-[#004225]">
          Stage {activeStep + 1} of 4
        </span>
      </div>

      <div className="grid md:grid-cols-[0.8fr_1.2fr]">
        <div className="border-b border-[#EAE5DC] p-4 sm:p-5 md:border-b-0 md:border-r">
          <div className="space-y-2">
            {journeySteps.map((item, index) => {
              const Icon = item.icon;
              const active = activeStep === index;

              return (
                <div key={item.number}>
                  <button
                    type="button"
                    onClick={() => selectStep(index)}
                    aria-pressed={active}
                    className={`flex w-full items-center gap-3 rounded-xl border p-3 text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#004225] ${
                      active
                        ? "border-[#A9C1AD] bg-[#F2F6F1]"
                        : "border-transparent bg-[#FAF9F6] hover:border-[#E3DDD2]"
                    }`}
                  >
                    <span
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border ${
                        active
                          ? "border-[#D9E5DB] bg-white text-[#004225]"
                          : "border-[#E3DDD2] bg-white text-[#777167]"
                      }`}
                    >
                      <Icon size={17} strokeWidth={1.7} />
                    </span>

                    <span className="min-w-0 flex-1">
                      <span className="block text-xs text-[#777167]">
                        Step {item.number}
                      </span>
                      <span
                        className={`mt-1 block text-sm font-semibold ${
                          active ? "text-[#004225]" : "text-[#24231F]"
                        }`}
                      >
                        {item.title}
                      </span>
                    </span>

                    <ChevronRight
                      size={15}
                      className={active ? "text-[#004225]" : "text-[#B2ACA1]"}
                    />
                  </button>

                  {index < journeySteps.length - 1 && (
                    <div className="ml-8 flex h-3 items-center">
                      <div
                        className={`h-full w-px ${
                          index < activeStep ? "bg-[#004225]" : "bg-[#DAD5CA]"
                        }`}
                      />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
          <p className="mt-4 text-xs leading-6 text-[#777167]">
            Select a stage to explore how a digital interaction can lead to the
            next business step.
          </p>
        </div>

        <motion.div
          key={step.number}
          initial={reduceMotion ? false : { opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: reduceMotion ? 0 : 0.22 }}
          className="flex min-w-0 flex-col justify-center p-5 sm:p-7 lg:p-9"
        >
          <p className="text-xs font-medium text-[#004225]">
            STAGE {step.number} / {step.label.toUpperCase()}
          </p>

          <div className="mt-4 flex h-12 w-12 items-center justify-center rounded-xl border border-[#D9E5DB] bg-[#EAF1EB] text-[#004225]">
            <ActiveIcon size={22} strokeWidth={1.7} />
          </div>

          <h3 className="mt-5 text-xl font-semibold tracking-[-0.025em] text-[#24231F] sm:text-2xl">
            {step.label}
          </h3>

          <p className="mt-3 text-sm leading-7 text-[#5F5B53] sm:text-base">
            {step.description}
          </p>

          <div className="mt-6 rounded-xl border border-[#D9E5DB] bg-[#F2F6F1] p-4">
            <p className="text-xs font-medium text-[#004225]">
              Journey outcome
            </p>
            <div className="mt-2 flex items-start gap-2">
              <Check size={16} className="mt-0.5 shrink-0 text-[#004225]" />
              <p className="text-sm font-semibold leading-6 text-[#24231F]">
                {step.outcome}
              </p>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-between gap-3 border-t border-[#EAE5DC] pt-5">
            <button
              type="button"
              onClick={() => selectStep(activeStep - 1)}
              disabled={activeStep === 0}
              className="inline-flex min-h-10 items-center gap-2 rounded-lg border border-[#DAD5CA] px-3 text-xs font-medium text-[#24231F] transition hover:border-[#A9BBAA] disabled:cursor-not-allowed disabled:opacity-35"
            >
              <ChevronLeft size={15} />
              Previous
            </button>

            <div className="flex items-center gap-1.5">
              {journeySteps.map((item, index) => (
                <button
                  key={item.number}
                  type="button"
                  onClick={() => selectStep(index)}
                  aria-label={`Go to ${item.title}`}
                  aria-current={activeStep === index ? "step" : undefined}
                  className={`h-1.5 rounded-full transition-all ${
                    activeStep === index
                      ? "w-6 bg-[#004225]"
                      : "w-1.5 bg-[#DAD5CA] hover:bg-[#A9BBAA]"
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={() => selectStep(activeStep + 1)}
              disabled={activeStep === journeySteps.length - 1}
              className="inline-flex min-h-10 items-center gap-2 rounded-lg bg-[#004225] px-3 text-xs font-medium text-white transition hover:bg-[#00351E] disabled:cursor-not-allowed disabled:opacity-35"
            >
              Next
              <ChevronRight size={15} />
            </button>
          </div>
        </motion.div>
      </div>

      <div className="border-t border-[#EAE5DC] bg-[#FAF9F6] px-5 py-3.5 sm:px-7">
        <p className="text-xs leading-5 text-[#777167]">
          Actual integrations and automation depend on the agreed requirements
          and implementation.
        </p>
      </div>
    </div>
  );
}

function BuildProcessExperience() {
  const [activePhase, setActivePhase] = useState(0);
  const reduceMotion = useReducedMotion();
  const phase = buildPhases[activePhase];

  return (
    <div className="relative overflow-hidden rounded-2xl border border-[#DAD5CA] bg-white shadow-[0_16px_50px_rgba(36,35,31,0.05)]">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#EAE5DC] bg-[#FAF9F6] px-5 py-4 sm:px-7">
        <div className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#D9E5DB] bg-white text-[#004225]">
            <Workflow size={18} />
          </span>
          <div>
            <p className="text-xs text-[#777167]">Website delivery process</p>
            <p className="mt-1 text-sm font-semibold text-[#24231F]">
              From requirement to experience
            </p>
          </div>
        </div>

        <span className="rounded-lg border border-[#D9E5DB] bg-white px-3 py-1.5 text-xs font-medium text-[#004225]">
          Phase {activePhase + 1} / 4
        </span>
      </div>

      <div className="grid md:grid-cols-[0.72fr_1.28fr]">
        <nav
          aria-label="Website build phases"
          className="relative border-b border-[#EAE5DC] bg-[#FAF9F6] p-4 sm:p-5 md:border-b-0 md:border-r"
        >
          <div className="space-y-2">
            {buildPhases.map((item, index) => {
              const active = activePhase === index;
              const completed = index < activePhase;

              return (
                <button
                  key={item.number}
                  type="button"
                  onClick={() => setActivePhase(index)}
                  aria-pressed={active}
                  className={`flex w-full items-center gap-3 rounded-xl border p-3.5 text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#004225] ${
                    active
                      ? "border-[#A9C1AD] bg-[#EAF1EB]"
                      : "border-transparent bg-transparent hover:border-[#E3DDD2] hover:bg-white"
                  }`}
                >
                  <span
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border text-xs font-semibold ${
                      active || completed
                        ? "border-[#D9E5DB] bg-white text-[#004225]"
                        : "border-[#E3DDD2] bg-white text-[#777167]"
                    }`}
                  >
                    {completed ? <Check size={16} /> : item.number}
                  </span>

                  <span className="min-w-0 flex-1">
                    <span className="block text-xs text-[#777167]">
                      Phase {item.number}
                    </span>
                    <span
                      className={`mt-1 block text-sm font-semibold ${
                        active ? "text-[#004225]" : "text-[#24231F]"
                      }`}
                    >
                      {item.title}
                    </span>
                  </span>

                  <ChevronRight
                    size={15}
                    className={active ? "text-[#004225]" : "text-[#B2ACA1]"}
                  />
                </button>
              );
            })}
          </div>
        </nav>

        <motion.div
          key={phase.number}
          initial={reduceMotion ? false : { opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: reduceMotion ? 0 : 0.22 }}
          className="relative flex min-w-0 flex-col justify-center p-5 sm:p-7 lg:p-10"
        >
          <span
            aria-hidden="true"
            className="pointer-events-none absolute right-5 top-0 select-none text-[112px] font-semibold leading-none tracking-[-0.08em] text-[#004225]/[0.045] sm:right-8 sm:text-[150px]"
          >
            {phase.number}
          </span>

          <div className="relative">
            <p className="text-xs font-medium text-[#004225]">
              PHASE {phase.number} / {phase.title.toUpperCase()}
            </p>

            <h3 className="mt-4 max-w-xl text-[25px] font-semibold leading-tight tracking-[-0.03em] text-[#24231F] sm:text-3xl">
              {phase.subtitle}
            </h3>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-[#5F5B53] sm:text-base">
              {phase.description}
            </p>

            <div className="mt-6 grid gap-2.5 sm:grid-cols-2">
              {phase.points.map((point) => (
                <div
                  key={point}
                  className="flex items-start gap-2.5 rounded-lg border border-[#EAE5DC] bg-[#FAF9F6] p-3"
                >
                  <Check size={14} className="mt-0.5 shrink-0 text-[#004225]" />
                  <span className="text-xs leading-5 text-[#5F5B53]">
                    {point}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-xl border border-[#D9E5DB] bg-[#F2F6F1] p-4 sm:p-5">
              <p className="text-xs font-medium text-[#004225]">
                Phase outcome
              </p>
              <p className="mt-2 text-sm font-semibold leading-6 text-[#24231F]">
                {phase.outcome}
              </p>
            </div>

            <div className="mt-6 flex items-center justify-between gap-3 border-t border-[#EAE5DC] pt-5">
              <button
                type="button"
                onClick={() =>
                  setActivePhase((current) => Math.max(0, current - 1))
                }
                disabled={activePhase === 0}
                className="inline-flex min-h-10 items-center gap-2 rounded-lg border border-[#DAD5CA] px-3 text-xs font-medium text-[#24231F] transition hover:border-[#A9BBAA] disabled:cursor-not-allowed disabled:opacity-35"
              >
                <ChevronLeft size={15} />
                Previous
              </button>

              <div className="flex items-center gap-1.5">
                {buildPhases.map((item, index) => (
                  <button
                    key={item.number}
                    type="button"
                    onClick={() => setActivePhase(index)}
                    aria-label={`Go to phase ${item.number}: ${item.title}`}
                    aria-current={activePhase === index ? "step" : undefined}
                    className={`h-1.5 rounded-full transition-all ${
                      activePhase === index
                        ? "w-6 bg-[#004225]"
                        : "w-1.5 bg-[#DAD5CA] hover:bg-[#A9BBAA]"
                    }`}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={() =>
                  setActivePhase((current) =>
                    Math.min(buildPhases.length - 1, current + 1),
                  )
                }
                disabled={activePhase === buildPhases.length - 1}
                className="inline-flex min-h-10 items-center gap-2 rounded-lg bg-[#004225] px-3 text-xs font-medium text-white transition hover:bg-[#00351E] disabled:cursor-not-allowed disabled:opacity-35"
              >
                Next
                <ChevronRight size={15} />
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="border-t border-[#EAE5DC] px-5 py-3.5 sm:px-7">
        <p className="text-xs leading-5 text-[#777167]">
          The delivery sequence and scope are finalized around the requirements
          of each project.
        </p>
      </div>
    </div>
  );
}

export default function WebsitesDigitalSolutions() {
  return (
    <main
      className="min-h-screen overflow-hidden bg-[#F4F0E8] text-[#24231F]"
      style={{ fontFamily: '"Geist Sans", Geist, sans-serif' }}
    >
      {/* 01 — Hero */}
      <section className="border-b border-[#E3DDD2] bg-[#F4F0E8]">
        <div className="mx-auto grid max-w-[1280px] items-center gap-10 px-5 py-16 sm:px-7 sm:py-20 lg:grid-cols-[0.92fr_1.08fr] lg:gap-14 lg:px-8 lg:py-24">
          <Reveal className="max-w-[620px]">
            <div className="mb-6 inline-flex items-center gap-2 rounded-lg border border-[#D9E5DB] bg-white px-3 py-2">
              <span className="h-2 w-2 rounded-full bg-[#004225]" />
              <span className="text-xs font-medium text-[#004225]">
                Websites & Digital Solutions
              </span>
            </div>

            <h1 className="text-[40px] font-semibold leading-[1.04] tracking-[-0.045em] text-[#24231F] sm:text-5xl lg:text-[64px]">
              Digital experiences built around your business.
            </h1>

            <p className="mt-6 max-w-[590px] text-base leading-7 text-[#5F5B53] sm:text-lg sm:leading-8">
              From business websites and landing pages to online stores and web
              applications, we build digital experiences around what your
              customers need and what your business wants to achieve.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <PrimaryButton href="/start-project">
                Start Your Project
                <ArrowRight size={16} />
              </PrimaryButton>
              <SecondaryButton href="#digital-solutions">
                Explore Digital Solutions
                <ArrowDown size={16} />
              </SecondaryButton>
            </div>

            <div className="mt-8 flex flex-wrap gap-x-5 gap-y-3 border-t border-[#DED8CD] pt-5 text-xs text-[#5F5B53]">
              {[
                "Purposeful experiences",
                "Responsive design",
                "Business-focused journeys",
              ].map((item) => (
                <span key={item} className="flex items-center gap-2">
                  <Check size={14} className="text-[#004225]" />
                  {item}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.05} className="min-w-0">
            <WebsitePreview />
          </Reveal>
        </div>
      </section>

      {/* 02 — Purpose */}
      <section className="border-b border-[#E3DDD2] bg-white">
        <div className="mx-auto grid max-w-[1180px] gap-10 px-5 py-20 sm:px-7 sm:py-24 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20 lg:px-8 lg:py-28">
          <Reveal>
            <SectionHeading
              eyebrow="Beyond the website"
              title="Your digital presence should do more than look good."
              description="It should help customers understand your offer, build confidence and take a meaningful next step."
            />
          </Reveal>

          <Reveal delay={0.05}>
            <p className="text-base leading-8 text-[#5F5B53]">
              A website may introduce your services, explain a product, collect
              enquiries or support a transaction. The right experience depends
              on the people using it and the goal it needs to achieve.
            </p>
            <p className="mt-5 text-base leading-8 text-[#5F5B53]">
              We consider the full journey—from the first visit to the next
              business action—so the design and functionality have a clear
              purpose.
            </p>

            <div className="mt-8 rounded-xl border border-[#D9E5DB] bg-[#F2F6F1] p-5 sm:p-6">
              <p className="text-sm font-semibold text-[#24231F]">
                The guiding question
              </p>
              <p className="mt-2 text-sm leading-7 text-[#5F5B53]">
                What should a customer be able to understand, do or achieve
                through this digital experience?
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 03 — Digital solutions */}
      <section
        id="digital-solutions"
        className="scroll-mt-20 border-b border-[#E3DDD2] bg-[#EEE9DF]"
      >
        <div className="mx-auto max-w-[1180px] px-5 py-20 sm:px-7 sm:py-24 lg:px-8 lg:py-28">
          <Reveal>
            <SectionHeading
              eyebrow="What we build"
              title="Digital solutions for different business needs."
              description="Start with the experience your customers or team need, then shape the structure and functionality around the requirement."
            />
          </Reveal>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {solutionAreas.map((area, index) => {
              const Icon = area.icon;

              return (
                <Reveal key={area.number} delay={index * 0.025}>
                  <article className="h-full rounded-2xl border border-[#E3DDD2] bg-white p-5 transition-colors hover:border-[#A9BBAA] sm:p-6">
                    <div className="flex items-center justify-between">
                      <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#D9E5DB] bg-[#EAF1EB] text-[#004225]">
                        <Icon size={20} strokeWidth={1.7} />
                      </span>
                      <span className="text-xs font-medium text-[#777167]">
                        {area.number}
                      </span>
                    </div>

                    <h3 className="mt-5 text-[19px] font-semibold tracking-[-0.02em] text-[#24231F] sm:text-[22px]">
                      {area.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-[#5F5B53]">
                      {area.description}
                    </p>

                    <div className="mt-5 space-y-2.5 border-t border-[#EAE5DC] pt-4">
                      {area.items.map((item) => (
                        <div
                          key={item}
                          className="flex items-start gap-2.5 text-xs leading-5 text-[#5F5B53]"
                        >
                          <Check
                            size={14}
                            className="mt-0.5 shrink-0 text-[#004225]"
                          />
                          {item}
                        </div>
                      ))}
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 04 — Customer journey */}
      <section
        id="customer-journey"
        className="scroll-mt-20 border-b border-[#E3DDD2] bg-[#F4F0E8]"
      >
        <div className="mx-auto max-w-[1180px] px-5 py-20 sm:px-7 sm:py-24 lg:px-8 lg:py-28">
          <Reveal>
            <SectionHeading
              eyebrow="The connected experience"
              title="From the first visit to the next business step."
              description="Explore how a website can guide a visitor towards an action and, where required, connect that interaction to a wider business workflow."
            />
          </Reveal>

          <Reveal delay={0.05} className="mt-10">
            <JourneyExperience />
          </Reveal>
        </div>
      </section>

      {/* 05 — Build process */}
      <section
        id="how-we-build"
        className="scroll-mt-20 border-b border-[#E3DDD2] bg-[#EEE9DF]"
      >
        <div className="mx-auto max-w-[1180px] px-5 py-20 sm:px-7 sm:py-24 lg:px-8 lg:py-28">
          <Reveal>
            <SectionHeading
              eyebrow="How we work"
              title="From business goal to working digital experience."
              description="Our four-phase process keeps the business requirement at the center of the project—from understanding the need to reviewing the finished experience."
            />
          </Reveal>

          <Reveal delay={0.05} className="mt-10">
            <BuildProcessExperience />
          </Reveal>

          <Reveal delay={0.07} className="mt-6">
            <div className="flex flex-col gap-3 rounded-xl border border-[#D9E5DB] bg-white p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
              <div>
                <p className="text-sm font-semibold text-[#24231F]">
                  Business goal first. Digital experience second.
                </p>
                <p className="mt-1 text-sm leading-6 text-[#5F5B53]">
                  Scope, functionality and delivery are shaped around the
                  requirements of each project.
                </p>
              </div>
              <span className="text-xs font-medium text-[#004225]">
                Understand · Structure · Build · Improve
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 06 — Principle */}
      <section className="border-b border-[#E3DDD2] bg-white">
        <div className="mx-auto max-w-[900px] px-5 py-20 text-center sm:px-7 sm:py-24 lg:px-8 lg:py-28">
          <Reveal>
            <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl border border-[#D9E5DB] bg-[#EAF1EB] text-[#004225]">
              <Globe size={21} />
            </span>
            <SectionLabel>Our principle</SectionLabel>
            <h2 className="text-[32px] font-semibold leading-[1.12] tracking-[-0.035em] text-[#24231F] sm:text-4xl lg:text-[44px]">
              Every digital experience should have a clear purpose.
            </h2>
            <p className="mx-auto mt-5 max-w-[680px] text-[15px] leading-7 text-[#5F5B53] sm:text-lg sm:leading-8">
              Whether the goal is visibility, enquiries, sales, bookings or a
              more useful business application, the experience should support
              the people using it and the outcome it needs to deliver.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 07 — Final CTA */}
      <section
        id="start-website-project"
        className="scroll-mt-20 bg-[#F4F0E8] px-5 py-16 sm:px-7 sm:py-20 lg:px-8 lg:py-24"
      >
        <Reveal className="mx-auto max-w-[1180px]">
          <div className="rounded-2xl border border-[#D9E5DB] bg-white px-6 py-12 sm:px-10 sm:py-16 lg:px-16 lg:py-20">
            <div className="grid items-end gap-8 lg:grid-cols-[1fr_auto] lg:gap-12">
              <div>
                <SectionLabel>Build your digital presence</SectionLabel>
                <h2 className="max-w-3xl text-[32px] font-semibold leading-[1.12] tracking-[-0.035em] text-[#24231F] sm:text-4xl lg:text-[44px]">
                  Have a website or digital experience in mind?
                </h2>
                <p className="mt-5 max-w-2xl text-[15px] leading-7 text-[#5F5B53] sm:text-lg sm:leading-8">
                  Tell us about your business, your audience and what you want
                  the experience to achieve. We can help shape the right digital
                  solution around your requirements.
                </p>
              </div>

              <div className="flex flex-col items-start gap-3">
                <PrimaryButton href="/start-project">
                  Start Your Project
                  <ArrowRight size={16} />
                </PrimaryButton>
                <Link
                  href="/solutions"
                  className="inline-flex min-h-10 items-center gap-2 text-sm font-medium text-[#004225] transition-colors hover:text-[#326448]"
                >
                  Explore All Solutions
                  <ArrowRight size={15} />
                </Link>
              </div>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-[#EAE5DC] pt-5 text-xs text-[#777167]">
              <span>Purposeful design</span>
              <span className="hidden h-1 w-1 rounded-full bg-[#B8B1A5] sm:block" />
              <span>Useful functionality</span>
              <span className="hidden h-1 w-1 rounded-full bg-[#B8B1A5] sm:block" />
              <span>Business-focused experience</span>
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
