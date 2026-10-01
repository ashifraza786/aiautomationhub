import { motion } from "framer-motion";
import {
  ArrowRight,
  BrainCircuit,
  Building2,
  CheckCircle2,
  Layers3,
  Target,
  Workflow,
} from "lucide-react";
import { Link } from "wouter";

const principles = [
  {
    number: "01",
    title: "Business First",
    description:
      "We start by understanding the business problem, not by choosing a technology.",
    icon: Target,
  },
  {
    number: "02",
    title: "Built Around Your Workflow",
    description:
      "Your business does not have to adapt to rigid software. The technology should adapt to the way you work.",
    icon: Workflow,
  },
  {
    number: "03",
    title: "Useful Technology",
    description:
      "AI, automation and software should create a practical improvement in how the business operates.",
    icon: BrainCircuit,
  },
  {
    number: "04",
    title: "Built to Evolve",
    description:
      "We think beyond the first version so today's solution can become tomorrow's larger system.",
    icon: Layers3,
  },
];

const capabilities = [
  {
    title: "Digital Experiences",
    description:
      "Websites, landing pages, e-commerce experiences and digital interfaces built around business goals.",
    icon: Building2,
  },
  {
    title: "Business Software",
    description:
      "Custom internal tools and software designed around the processes that make your business unique.",
    icon: Layers3,
  },
  {
    title: "AI & Automation",
    description:
      "A capability layer for turning repetitive workflows into more intelligent and connected processes.",
    icon: BrainCircuit,
  },
  {
    title: "Connected Business Systems",
    description:
      "ERP, CRM and operational systems that bring important business information into one connected environment.",
    icon: Workflow,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

function About() {
  return (
    <main className="min-h-screen bg-[#080A0F] text-[#F4F7FB]">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-[#202936]">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[12%] top-[-180px] h-[420px] w-[420px] rounded-full bg-[#4F7CFF]/10 blur-[120px]" />
          <div className="absolute right-[8%] top-[25%] h-[300px] w-[300px] rounded-full bg-[#6D5CFF]/8 blur-[110px]" />
          <div className="absolute inset-0 opacity-[0.035] [background-image:linear-gradient(#A7B0BF_1px,transparent_1px),linear-gradient(90deg,#A7B0BF_1px,transparent_1px)] [background-size:64px_64px]" />
        </div>

        <div className="relative mx-auto max-w-[1280px] px-5 py-24 md:px-7 md:py-28 lg:px-8 lg:py-32">
          <div className="grid items-center gap-16 lg:grid-cols-[0.9fr_1.1fr]">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              transition={{ duration: 0.6 }}
            >
              <span className="section-eyebrow">ABOUT AI AUTOMATIONHUB</span>

              <h1 className="mt-5 max-w-[760px] text-[40px] font-bold leading-[1.05] tracking-[-0.035em] text-[#F4F7FB] md:text-5xl lg:text-[64px]">
                Technology should work{" "}
                <span className="bg-gradient-to-r from-[#4F7CFF] to-[#6D5CFF] bg-clip-text text-transparent">
                  around your business.
                </span>
              </h1>

              <p className="mt-6 max-w-[650px] text-base leading-[1.65] text-[#A7B0BF] md:text-[19px]">
                AI AutomationHub is focused on helping businesses turn manual,
                disconnected and difficult processes into practical digital
                systems.
              </p>

              <p className="mt-5 max-w-[650px] text-base leading-[1.65] text-[#A7B0BF]">
                From websites and custom software to ERP systems and AI-powered
                automation, we build technology around the way a business
                actually works.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/start-project"
                  className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-[#4F7CFF] px-5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:brightness-110 hover:shadow-[0_0_28px_rgba(79,124,255,0.18)]"
                >
                  Start Your Project
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <Link
                  href="/solutions"
                  className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-[#202936] bg-[#0D1118] px-5 text-sm font-semibold text-[#E8EDF5] transition-colors hover:border-[#4F7CFF]/40 hover:bg-[#121821]"
                >
                  Explore Our Solutions
                </Link>
              </div>
            </motion.div>

            {/* System visual */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="relative"
            >
              <div className="relative rounded-2xl border border-[#202936] bg-[#0D1118]/90 p-5 shadow-2xl shadow-black/20 backdrop-blur-xl md:p-6">
                <div className="mb-5 flex items-center justify-between">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#6F7A8A]">
                      BUSINESS TECHNOLOGY
                    </p>
                    <p className="mt-1 text-sm font-medium text-[#E8EDF5]">
                      Connected Business System
                    </p>
                  </div>

                  <span className="flex items-center gap-2 rounded-full border border-[#202936] bg-[#080A0F] px-3 py-1.5 text-[11px] text-[#A7B0BF]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#38D9C5]" />
                    Connected
                  </span>
                </div>

                <div className="relative grid gap-3 sm:grid-cols-2">
                  {[
                    ["Website", "Digital Presence"],
                    ["Business Software", "Operations"],
                    ["ERP", "Business Systems"],
                    ["Automation", "Workflows"],
                  ].map(([title, subtitle], index) => (
                    <div
                      key={title}
                      className="rounded-xl border border-[#202936] bg-[#121821] p-4"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <p className="text-sm font-semibold text-[#F4F7FB]">
                            {title}
                          </p>
                          <p className="mt-1 text-xs text-[#6F7A8A]">
                            {subtitle}
                          </p>
                        </div>

                        <span className="text-[10px] font-semibold text-[#4F7CFF]">
                          0{index + 1}
                        </span>
                      </div>
                    </div>
                  ))}

                  <div className="absolute left-1/2 top-1/2 hidden h-px w-[45%] -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-transparent via-[#4F7CFF]/50 to-transparent sm:block" />
                  <div className="absolute left-1/2 top-1/2 hidden h-[45%] w-px -translate-x-1/2 -translate-y-1/2 bg-gradient-to-b from-transparent via-[#38D9C5]/40 to-transparent sm:block" />
                </div>

                <div className="mt-4 rounded-xl border border-[#4F7CFF]/20 bg-[#4F7CFF]/5 p-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#4F7CFF]/25 bg-[#4F7CFF]/10">
                      <BrainCircuit className="h-4 w-4 text-[#4F7CFF]" />
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-[#E8EDF5]">
                        Intelligent Automation Layer
                      </p>
                      <p className="mt-1 text-xs text-[#6F7A8A]">
                        Connect • Automate • Improve
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What We Believe */}
      <section className="border-b border-[#202936]">
        <div className="mx-auto max-w-[1280px] px-5 py-[72px] md:px-7 md:py-24 lg:px-8 lg:py-[120px]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            transition={{ duration: 0.55 }}
            className="max-w-[700px]"
          >
            <span className="section-eyebrow">WHAT WE BELIEVE</span>

            <h2 className="mt-4 text-[32px] font-bold leading-[1.1] tracking-[-0.025em] text-[#F4F7FB] md:text-[44px]">
              Start with the business. Build the technology around it.
            </h2>

            <p className="mt-5 text-base leading-[1.65] text-[#A7B0BF] md:text-[17px]">
              Every business has different processes, people, customers and
              constraints. Instead of forcing those businesses into generic
              technology, we focus on understanding the workflow first and
              shaping the solution around it.
            </p>
          </motion.div>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {principles.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.number}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.15 }}
                  variants={fadeUp}
                  transition={{ duration: 0.5, delay: index * 0.06 }}
                  className="group rounded-2xl border border-[#202936] bg-[#0D1118] p-6 transition-colors hover:border-[#4F7CFF]/30 hover:bg-[#121821] md:p-7"
                >
                  <div className="flex items-start justify-between gap-5">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#202936] bg-[#121821]">
                      <Icon className="h-5 w-5 text-[#4F7CFF]" />
                    </div>

                    <span className="text-xs font-semibold tracking-[0.12em] text-[#6F7A8A]">
                      {item.number}
                    </span>
                  </div>

                  <h3 className="mt-6 text-xl font-semibold tracking-[-0.015em] text-[#E8EDF5]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-[1.65] text-[#A7B0BF] md:text-base">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* What We Build Around */}
      <section className="border-b border-[#202936]">
        <div className="mx-auto max-w-[1280px] px-5 py-[72px] md:px-7 md:py-24 lg:px-8 lg:py-[120px]">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              transition={{ duration: 0.55 }}
            >
              <span className="section-eyebrow">WHAT WE BUILD AROUND</span>

              <h2 className="mt-4 text-[32px] font-bold leading-[1.1] tracking-[-0.025em] text-[#F4F7FB] md:text-[44px]">
                One business. Multiple technology layers.
              </h2>

              <p className="mt-5 max-w-[620px] text-base leading-[1.65] text-[#A7B0BF]">
                A business rarely needs just one digital tool. The website,
                internal software, business systems and automation should work
                together when the workflow requires it.
              </p>
            </motion.div>

            <div className="grid gap-4 sm:grid-cols-2">
              {capabilities.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.15 }}
                    variants={fadeUp}
                    transition={{ duration: 0.45, delay: index * 0.06 }}
                    className="rounded-2xl border border-[#202936] bg-[#0D1118] p-6"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#202936] bg-[#121821]">
                      <Icon className="h-4 w-4 text-[#4F7CFF]" />
                    </div>

                    <h3 className="mt-5 text-lg font-semibold text-[#E8EDF5]">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm leading-[1.65] text-[#A7B0BF]">
                      {item.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* How We Think */}
      <section className="border-b border-[#202936]">
        <div className="mx-auto max-w-[1280px] px-5 py-[72px] md:px-7 md:py-24 lg:px-8 lg:py-[120px]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            transition={{ duration: 0.55 }}
            className="mx-auto max-w-[760px] text-center"
          >
            <span className="section-eyebrow">OUR APPROACH</span>

            <h2 className="mt-4 text-[32px] font-bold leading-[1.1] tracking-[-0.025em] text-[#F4F7FB] md:text-[44px]">
              Technology is only valuable when it improves the way a business
              works.
            </h2>

            <p className="mt-5 text-base leading-[1.65] text-[#A7B0BF] md:text-[17px]">
              That means less unnecessary complexity, clearer workflows, better
              visibility and systems that can evolve as the business grows.
            </p>
          </motion.div>

          <div className="mx-auto mt-12 max-w-[900px] rounded-2xl border border-[#202936] bg-[#0D1118] p-6 md:p-8">
            <div className="grid gap-4 md:grid-cols-3">
              {[
                "Understand the business",
                "Build the right solution",
                "Improve as the business evolves",
              ].map((step, index) => (
                <div
                  key={step}
                  className="relative rounded-xl border border-[#202936] bg-[#121821] p-5"
                >
                  <span className="text-xs font-semibold tracking-[0.12em] text-[#4F7CFF]">
                    0{index + 1}
                  </span>

                  <p className="mt-4 text-sm font-semibold leading-6 text-[#E8EDF5]">
                    {step}
                  </p>

                  {index < 2 && (
                    <ArrowRight className="absolute -right-3 top-1/2 hidden h-5 w-5 -translate-y-1/2 text-[#4F7CFF] md:block" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="border-b border-[#202936]">
        <div className="mx-auto max-w-[1280px] px-5 py-[72px] md:px-7 md:py-24 lg:px-8 lg:py-[120px]">
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              transition={{ duration: 0.55 }}
            >
              <span className="section-eyebrow">WHERE WE'RE HEADING</span>

              <h2 className="mt-4 text-[32px] font-bold leading-[1.1] tracking-[-0.025em] text-[#F4F7FB] md:text-[44px]">
                From digital solutions to intelligent business systems.
              </h2>

              <p className="mt-5 max-w-[680px] text-base leading-[1.65] text-[#A7B0BF] md:text-[17px]">
                Our long-term direction is to make business technology more
                connected — bringing digital presence, business systems,
                automation and intelligence closer together.
              </p>

              <p className="mt-5 max-w-[680px] text-base font-medium leading-[1.65] text-[#E8EDF5]">
                Start with what your business needs today. Build toward what it
                can become tomorrow.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="rounded-2xl border border-[#202936] bg-[#0D1118] p-5 md:p-6"
            >
              {[
                "Digital Presence",
                "Business Systems",
                "Automation",
                "Intelligence",
              ].map((item, index) => (
                <div
                  key={item}
                  className="flex items-center gap-4 border-b border-[#202936] py-4 last:border-b-0"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#4F7CFF]/10 text-xs font-semibold text-[#4F7CFF]">
                    0{index + 1}
                  </span>

                  <span className="text-sm font-medium text-[#E8EDF5]">
                    {item}
                  </span>

                  {index < 3 && (
                    <ArrowRight className="ml-auto h-4 w-4 text-[#6F7A8A]" />
                  )}

                  {index === 3 && (
                    <CheckCircle2 className="ml-auto h-4 w-4 text-[#38D9C5]" />
                  )}
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section>
        <div className="mx-auto max-w-[1280px] px-5 py-[72px] md:px-7 md:py-24 lg:px-8 lg:py-[120px]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={fadeUp}
            transition={{ duration: 0.55 }}
            className="relative overflow-hidden rounded-2xl border border-[#202936] bg-[#0D1118] p-7 md:p-10 lg:p-12"
          >
            <div className="pointer-events-none absolute right-[-100px] top-[-100px] h-[300px] w-[300px] rounded-full bg-[#4F7CFF]/10 blur-[100px]" />

            <div className="relative max-w-[760px]">
              <span className="section-eyebrow">
                LET'S BUILD SOMETHING USEFUL
              </span>

              <h2 className="mt-4 text-[32px] font-bold leading-[1.1] tracking-[-0.025em] text-[#F4F7FB] md:text-[44px]">
                Have a business problem worth solving?
              </h2>

              <p className="mt-5 max-w-[650px] text-base leading-[1.65] text-[#A7B0BF]">
                Tell us what you're trying to build, improve or automate. We'll
                help you shape it into the right digital solution.
              </p>

              <div className="mt-8">
                <Link
                  href="/start-project"
                  className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-[#4F7CFF] px-5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:brightness-110 hover:shadow-[0_0_28px_rgba(79,124,255,0.18)]"
                >
                  Tell Us What You Need
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

export default About;
