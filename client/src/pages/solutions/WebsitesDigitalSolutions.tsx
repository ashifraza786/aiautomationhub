import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  Check,
  Globe,
  LayoutDashboard,
  MousePointerClick,
  ShoppingCart,
  Smartphone,
  Sparkles,
  Users,
  Workflow,
  Zap,
} from "lucide-react";
import { Link } from "wouter";

const solutionAreas = [
  {
    number: "01",
    icon: Globe,
    title: "Business Websites",
    description:
      "Professional websites designed to explain your business clearly, build trust and create a strong digital presence.",
    items: [
      "Business websites",
      "Service websites",
      "Company websites",
      "Responsive experiences",
    ],
  },
  {
    number: "02",
    icon: MousePointerClick,
    title: "Landing Pages",
    description:
      "Focused digital experiences built around a specific offer, campaign, product or conversion goal.",
    items: [
      "Campaign landing pages",
      "Lead generation",
      "Product pages",
      "Conversion-focused layouts",
    ],
  },
  {
    number: "03",
    icon: ShoppingCart,
    title: "E-commerce",
    description:
      "Digital storefronts designed around the products, customers and operational requirements of your business.",
    items: [
      "Online stores",
      "Product catalogs",
      "Shopping experiences",
      "Order workflows",
    ],
  },
  {
    number: "04",
    icon: LayoutDashboard,
    title: "Web Applications",
    description:
      "Browser-based applications and portals that turn business processes into useful digital experiences.",
    items: [
      "Customer portals",
      "Business dashboards",
      "Internal applications",
      "Custom web interfaces",
    ],
  },
  {
    number: "05",
    icon: Smartphone,
    title: "Responsive Experiences",
    description:
      "Interfaces designed to work naturally across desktop, tablet and mobile instead of treating mobile as an afterthought.",
    items: [
      "Mobile-first thinking",
      "Responsive layouts",
      "Touch-friendly interfaces",
      "Cross-device experiences",
    ],
  },
  {
    number: "06",
    icon: Workflow,
    title: "Digital Workflows",
    description:
      "Connect the website experience with the next step in the customer or business process.",
    items: [
      "Lead capture",
      "Enquiry flows",
      "Booking experiences",
      "Business system handoff",
    ],
  },
];

const websiteJourney = [
  {
    icon: Globe,
    title: "Digital Presence",
    description: "A clear place for customers to understand your business.",
  },
  {
    icon: MousePointerClick,
    title: "Customer Action",
    description: "The experience guides visitors toward the right next step.",
  },
  {
    icon: Users,
    title: "Lead or Customer",
    description:
      "Important enquiries and interactions become business opportunities.",
  },
  {
    icon: Workflow,
    title: "Business Process",
    description:
      "The digital experience can connect to the workflow that follows.",
  },
];

const buildSteps = [
  {
    number: "01",
    title: "Understand",
    description:
      "We understand your business, audience, offer and what the website needs to achieve.",
  },
  {
    number: "02",
    title: "Structure",
    description:
      "We organize the content, pages and user journey so the experience has a clear purpose.",
  },
  {
    number: "03",
    title: "Design & Build",
    description:
      "The interface is developed around your brand, content and required functionality.",
  },
  {
    number: "04",
    title: "Improve",
    description:
      "The website can evolve as your business, customers and digital requirements change.",
  },
];

function FlowCard({
  icon: Icon,
  title,
  description,
  active = false,
}: {
  icon: typeof Globe;
  title: string;
  description: string;
  active?: boolean;
}) {
  return (
    <div
      className={`rounded-xl border p-4 ${
        active
          ? "border-[#4F7CFF]/30 bg-[#4F7CFF]/[0.08]"
          : "border-[#202936] bg-[#0D1118]"
      }`}
    >
      <div
        className={`flex h-9 w-9 items-center justify-center rounded-lg ${
          active
            ? "bg-[#4F7CFF]/10 text-[#4F7CFF]"
            : "bg-[#121821] text-[#A7B0BF]"
        }`}
      >
        <Icon size={17} strokeWidth={1.8} />
      </div>

      <p className="mt-4 text-sm font-semibold text-[#DCE3ED]">{title}</p>

      <p className="mt-2 text-xs leading-5 text-[#6F7A8A]">{description}</p>
    </div>
  );
}

export default function WebsitesDigitalSolutions() {
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
              Websites & Digital Solutions
            </div>

            <h1 className="text-4xl font-bold leading-[1.05] tracking-[-0.035em] text-[#F4F7FB] sm:text-5xl lg:text-[64px]">
              Digital experiences built to move your business forward.
            </h1>

            <p className="mt-6 max-w-[650px] text-base leading-[1.65] text-[#A7B0BF] sm:text-lg">
              From business websites and landing pages to e-commerce and web
              applications — we build digital experiences around what your
              business needs to achieve.
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
                href="#digital-solutions"
                className="inline-flex h-11 items-center justify-center rounded-lg border border-[#202936] bg-[#0D1118] px-5 text-sm font-semibold text-[#DCE3ED] transition hover:border-[#4F7CFF]/40 hover:bg-[#121821]"
              >
                Explore What We Build
              </a>
            </div>
          </motion.div>

          {/* Website System Visual */}
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
                    Digital Experience
                  </p>
                  <p className="mt-1 text-sm font-semibold text-[#E8EDF5]">
                    Business Website
                  </p>
                </div>

                <div className="flex items-center gap-2 rounded-full border border-[#202936] bg-[#121821] px-3 py-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#38D9C5]" />
                  <span className="text-[10px] font-medium text-[#A7B0BF]">
                    Responsive
                  </span>
                </div>
              </div>

              {/* Browser frame */}
              <div className="overflow-hidden rounded-xl border border-[#202936] bg-[#080A0F]">
                <div className="flex items-center gap-1.5 border-b border-[#202936] px-4 py-3">
                  <span className="h-2 w-2 rounded-full bg-[#202936]" />
                  <span className="h-2 w-2 rounded-full bg-[#202936]" />
                  <span className="h-2 w-2 rounded-full bg-[#202936]" />

                  <div className="ml-3 flex-1 rounded-md border border-[#202936] bg-[#0D1118] px-3 py-1.5 text-[9px] text-[#6F7A8A]">
                    yourbusiness.com
                  </div>
                </div>

                <div className="p-5 sm:p-7">
                  <div className="flex items-center justify-between">
                    <div className="h-2.5 w-24 rounded-full bg-[#E8EDF5]/20" />

                    <div className="hidden gap-3 sm:flex">
                      <span className="h-1.5 w-8 rounded-full bg-[#202936]" />
                      <span className="h-1.5 w-8 rounded-full bg-[#202936]" />
                      <span className="h-1.5 w-8 rounded-full bg-[#202936]" />
                    </div>
                  </div>

                  <div className="mt-8 grid gap-8 sm:grid-cols-[1fr_0.8fr] sm:items-center">
                    <div>
                      <div className="h-4 w-[85%] rounded-full bg-[#E8EDF5]/15" />
                      <div className="mt-3 h-4 w-[65%] rounded-full bg-[#4F7CFF]/30" />

                      <div className="mt-5 h-2 w-full rounded-full bg-[#202936]" />
                      <div className="mt-2 h-2 w-[82%] rounded-full bg-[#202936]" />

                      <div className="mt-6 flex gap-2">
                        <div className="h-8 w-24 rounded-lg bg-[#4F7CFF]" />
                        <div className="h-8 w-20 rounded-lg border border-[#202936] bg-[#0D1118]" />
                      </div>
                    </div>

                    <div className="rounded-xl border border-[#202936] bg-[#0D1118] p-4">
                      <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-[#4F7CFF]/20 bg-[#4F7CFF]/[0.06]">
                        <Globe
                          size={28}
                          className="text-[#4F7CFF]"
                          strokeWidth={1.5}
                        />
                      </div>

                      <div className="mt-4 space-y-2">
                        <div className="mx-auto h-2 w-20 rounded-full bg-[#E8EDF5]/15" />
                        <div className="mx-auto h-1.5 w-28 rounded-full bg-[#202936]" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Flow */}
              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                <FlowCard
                  icon={Globe}
                  title="Website"
                  description="Digital presence"
                  active
                />
                <FlowCard
                  icon={MousePointerClick}
                  title="Action"
                  description="Customer interaction"
                />
                <FlowCard
                  icon={Workflow}
                  title="Business Flow"
                  description="Next process"
                />
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
                THE DIGITAL EXPERIENCE
              </p>

              <h2 className="mt-4 max-w-[520px] text-3xl font-bold leading-[1.1] tracking-[-0.025em] text-[#F4F7FB] sm:text-4xl">
                Your website should do more than exist.
              </h2>
            </div>

            <div className="max-w-[700px]">
              <p className="text-base leading-[1.7] text-[#A7B0BF] sm:text-lg">
                A website is often the first interaction someone has with your
                business. It needs to communicate what you do, build confidence
                and make the next step clear.
              </p>

              <p className="mt-5 text-base leading-[1.7] text-[#A7B0BF] sm:text-lg">
                Depending on the business, that next step could be an enquiry,
                purchase, booking, application, conversation or connection to an
                internal workflow.
              </p>

              <div className="mt-8 flex items-start gap-3 border-l border-[#4F7CFF]/50 pl-5">
                <Sparkles
                  size={18}
                  className="mt-0.5 shrink-0 text-[#4F7CFF]"
                />

                <p className="text-sm font-medium leading-6 text-[#DCE3ED]">
                  We design the digital experience around the action your
                  business wants customers to take.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What We Build */}
      <section id="digital-solutions" className="scroll-mt-20">
        <div className="mx-auto max-w-[1280px] px-5 py-[72px] sm:px-7 sm:py-24 lg:px-8 lg:py-[120px]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={reveal}
            className="max-w-[700px]"
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#4F7CFF]">
              WHAT WE BUILD
            </p>

            <h2 className="mt-4 text-3xl font-bold leading-[1.1] tracking-[-0.025em] text-[#F4F7FB] sm:text-4xl">
              Digital solutions for different business goals.
            </h2>

            <p className="mt-5 text-base leading-[1.7] text-[#A7B0BF] sm:text-lg">
              Start with the experience your customers or team need. Then build
              the right digital structure around it.
            </p>
          </motion.div>

          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {solutionAreas.map((area, index) => {
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

      {/* Customer Journey */}
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
                BEYOND THE WEBSITE
              </p>

              <h2 className="mt-4 max-w-[540px] text-3xl font-bold leading-[1.1] tracking-[-0.025em] text-[#F4F7FB] sm:text-4xl">
                The digital experience can connect to what happens next.
              </h2>

              <p className="mt-5 max-w-[600px] text-base leading-[1.7] text-[#A7B0BF] sm:text-lg">
                A strong digital presence becomes more useful when the customer
                journey continues into the business process.
              </p>

              <div className="mt-8 flex items-start gap-3">
                <Zap size={18} className="mt-0.5 shrink-0 text-[#38D9C5]" />

                <p className="text-sm leading-6 text-[#A7B0BF]">
                  The website can be the front door to a larger digital system.
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
                    Customer journey
                  </p>
                  <p className="mt-1 text-sm font-semibold text-[#E8EDF5]">
                    Digital → Business
                  </p>
                </div>

                <BarChart3 size={17} className="text-[#6F7A8A]" />
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {websiteJourney.map((step, index) => {
                  const Icon = step.icon;

                  return (
                    <div key={step.title} className="relative">
                      <FlowCard
                        icon={Icon}
                        title={step.title}
                        description={step.description}
                        active={index === 0}
                      />

                      {index < websiteJourney.length - 1 && (
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
              HOW WE BUILD
            </p>

            <h2 className="mt-4 text-3xl font-bold leading-[1.1] tracking-[-0.025em] text-[#F4F7FB] sm:text-4xl">
              From business goal to digital experience.
            </h2>

            <p className="mt-5 text-base leading-[1.7] text-[#A7B0BF] sm:text-lg">
              The process starts with what the website or application needs to
              accomplish — not just what it needs to look like.
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
              <Globe size={21} />
            </div>

            <p className="mt-7 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#6F7A8A]">
              OUR PRINCIPLE
            </p>

            <h2 className="mt-4 text-3xl font-bold leading-[1.1] tracking-[-0.025em] text-[#F4F7FB] sm:text-4xl">
              Your digital presence should have a purpose.
            </h2>

            <p className="mx-auto mt-5 max-w-[680px] text-base leading-[1.7] text-[#A7B0BF] sm:text-lg">
              Whether the goal is visibility, leads, sales, bookings or a better
              customer experience, the digital solution should support the
              business outcome.
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
                BUILD YOUR DIGITAL PRESENCE
              </p>

              <h2 className="mt-4 text-3xl font-bold leading-[1.1] tracking-[-0.025em] text-[#F4F7FB] sm:text-4xl">
                Need a website or digital experience built around your business?
              </h2>

              <p className="mt-5 max-w-[700px] text-base leading-[1.7] text-[#A7B0BF] sm:text-lg">
                Tell us what you want to build, who it is for and what you want
                the experience to achieve. We'll help shape the right digital
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
