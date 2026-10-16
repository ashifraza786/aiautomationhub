import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  ChevronRight,
  ClipboardList,
  Globe2,
  Package,
  ShoppingCart,
  Workflow,
} from "lucide-react";

import { Link, useLocation } from "wouter";

const capabilities = [
  {
    icon: Globe2,
    title: "Digital Product Presence",
    description:
      "Present products and their details through a customer-facing business website.",
  },
  {
    icon: ShoppingCart,
    title: "Online Orders",
    description:
      "Give customers a digital way to explore products and submit orders.",
  },
  {
    icon: ClipboardList,
    title: "Business-side Management",
    description:
      "Support day-to-day order handling through a digital management workflow.",
  },
  {
    icon: Workflow,
    title: "Selected Automation",
    description:
      "Automate supported steps in the order or inventory workflow instead of relying entirely on manual handling.",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Discover",
    description: "Customers explore products and review their details online.",
  },
  {
    number: "02",
    title: "Order",
    description: "Customers submit an order through the available online flow.",
  },
  {
    number: "03",
    title: "Manage",
    description:
      "The business handles orders through its digital management process.",
  },
  {
    number: "04",
    title: "Automate",
    description: "Selected supported steps are handled through automation.",
  },
];

function SectionLabel({
  number,
  children,
}: {
  number: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-5 flex items-center gap-3">
      <span className="font-mono text-xs text-primary">{number}</span>
      <span className="h-px w-8 bg-primary/50" />
      <span className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
        {children}
      </span>
    </div>
  );
}

export default function BusinessWebsiteCaseStudy() {
  const [, setLocation] = useLocation();

  const handleBack = () => {
    if (window.history.length > 1) {
      window.history.back();
    } else {
      setLocation("/work");
    }
  };

  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      {/* Hero */}
      <section className="relative px-5 pb-16 pt-24 md:px-8 md:pb-24 md:pt-32">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-0 top-10 h-80 w-80 rounded-full bg-primary/10 blur-[120px]"
        />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
          >
            {/* Back Button */}
            <button
              type="button"
              onClick={handleBack}
              className="mb-6 inline-flex min-h-10 items-center gap-2 rounded-lg border border-border bg-surface px-3.5 py-2 text-sm font-medium text-secondary-foreground transition-colors hover:border-primary/40 hover:text-primary"
            >
              <ArrowLeft className="h-4 w-4" />
              Back
            </button>

            {/* Breadcrumb */}
            <nav
              aria-label="Breadcrumb"
              className="mb-8 flex flex-wrap items-center gap-2 text-sm text-muted-foreground"
            >
              <Link href="/" className="transition-colors hover:text-primary">
                Home
              </Link>

              <ChevronRight className="h-4 w-4 shrink-0" />

              <Link
                href="/work"
                className="transition-colors hover:text-primary"
              >
                Work
              </Link>

              <ChevronRight className="h-4 w-4 shrink-0" />

              <span aria-current="page" className="font-medium text-foreground">
                Business Website &amp; Digital Store
              </span>
            </nav>

            <SectionLabel number="CASE STUDY / 01">
              Business Website & Digital Commerce
            </SectionLabel>

            <h1 className="max-w-3xl text-4xl font-semibold leading-[1.08] tracking-[-0.045em] md:text-6xl lg:text-7xl">
              Bringing a business into the{" "}
              <span className="text-primary">digital world.</span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-secondary-foreground md:text-lg">
              A business website built to present products online, support
              customer orders, and simplify selected day-to-day business
              workflows.
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {["Business Website", "Online Orders", "Workflow Automation"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-border bg-surface px-3 py-2 text-xs text-secondary-foreground"
                  >
                    {tag}
                  </span>
                ),
              )}
            </div>

            <a
              href="#challenge"
              className="mt-9 inline-flex items-center gap-2 text-sm font-semibold transition-colors hover:text-primary"
            >
              Explore the case study
              <ArrowDown size={16} />
            </a>
          </motion.div>

          {/* Main visual: one cohesive commerce interface */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.12 }}
            className="relative"
          >
            <div className="absolute -inset-5 rounded-[2rem] bg-primary/10 blur-3xl" />

            <div className="relative overflow-hidden rounded-2xl border border-border bg-surface shadow-2xl shadow-black/20">
              <div className="flex items-center justify-between border-b border-border px-5 py-4">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-primary" />
                  <span className="text-sm font-semibold">
                    Digital Commerce
                  </span>
                </div>
                <span className="text-xs text-muted-foreground">
                  System overview
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3 p-4 sm:p-6">
                <div className="rounded-xl border border-border bg-background p-4">
                  <Globe2 className="mb-5 text-primary" size={22} />
                  <p className="text-sm font-medium">Online storefront</p>
                  <p className="mt-1 text-xs leading-5 text-muted-foreground">
                    Product information and discovery
                  </p>
                </div>

                <div className="rounded-xl border border-border bg-background p-4">
                  <ShoppingCart className="mb-5 text-primary" size={22} />
                  <p className="text-sm font-medium">Customer orders</p>
                  <p className="mt-1 text-xs leading-5 text-muted-foreground">
                    Digital order submission
                  </p>
                </div>

                <div className="rounded-xl border border-border bg-background p-4">
                  <ClipboardList className="mb-5 text-primary" size={22} />
                  <p className="text-sm font-medium">Order management</p>
                  <p className="mt-1 text-xs leading-5 text-muted-foreground">
                    Business-side handling
                  </p>
                </div>

                <div className="rounded-xl border border-primary/30 bg-primary/5 p-4">
                  <Workflow className="mb-5 text-primary" size={22} />
                  <p className="text-sm font-medium">Selected automation</p>
                  <p className="mt-1 text-xs leading-5 text-muted-foreground">
                    Supported operational steps
                  </p>
                </div>
              </div>

              <div className="mx-4 mb-4 flex items-center gap-3 rounded-xl border border-border bg-background p-4 sm:mx-6 sm:mb-6">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <Package size={19} className="text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium">
                    Connected digital workflow
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Website → Orders → Business operations
                  </p>
                </div>
                <CheckCircle2
                  size={18}
                  className="ml-auto shrink-0 text-primary"
                />
              </div>
            </div>

            <p className="mt-3 text-center text-xs text-muted-foreground">
              Conceptual project visual — replace with the delivered website
              screenshot when available.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="border-y border-border bg-surface/40 px-5 py-16 md:px-8 md:py-20">
        <div className="mx-auto max-w-7xl">
          <SectionLabel number="01">Key Capabilities</SectionLabel>

          <h2 className="max-w-3xl text-3xl font-semibold tracking-tight md:text-4xl">
            More than a website. A digital foundation for business.
          </h2>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {capabilities.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.45, delay: index * 0.07 }}
                  className="rounded-2xl border border-border bg-background p-6 transition-colors hover:border-primary/40"
                >
                  <Icon size={23} className="text-primary" />
                  <h3 className="mt-6 text-lg font-semibold">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-secondary-foreground">
                    {item.description}
                  </p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Challenge */}
      <section id="challenge" className="px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2 md:gap-16">
          <div>
            <SectionLabel number="02">The Challenge</SectionLabel>
            <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
              Moving products and orders into a digital workflow.
            </h2>
          </div>

          <div className="space-y-5 text-base leading-8 text-secondary-foreground">
            <p>
              The business needed an online presence where customers could
              discover its products and place orders without relying solely on
              traditional communication channels.
            </p>
            <p>
              The business also needed a practical way to manage incoming orders
              digitally and streamline selected operational tasks.
            </p>
            <p className="text-sm text-muted-foreground">
              This challenge statement describes the agreed project scope;
              specific details of the original business process can be added
              once confirmed.
            </p>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="border-y border-border bg-surface/40 px-5 py-20 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionLabel number="03">The Solution</SectionLabel>

          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
                One digital experience for customers and the business.
              </h2>
              <p className="mt-6 leading-8 text-secondary-foreground">
                The solution combines a customer-facing business website with
                online ordering and business-side management. Selected steps can
                be automated where supported by the implemented system.
              </p>
            </div>

            <div className="space-y-3">
              {processSteps.map((step) => (
                <div
                  key={step.number}
                  className="flex gap-5 rounded-xl border border-border bg-background p-5 md:p-6"
                >
                  <span className="font-mono text-sm text-primary">
                    {step.number}
                  </span>
                  <div>
                    <h3 className="font-semibold">{step.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-secondary-foreground">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why it works */}
      <section className="px-5 py-20 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionLabel number="04">Why It Works</SectionLabel>

          <h2 className="max-w-3xl text-3xl font-semibold tracking-tight md:text-5xl">
            Designed around how a business actually operates.
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="border-t border-border pt-5">
              <span className="font-mono text-sm text-primary">A / 01</span>
              <h3 className="mt-4 text-xl font-semibold">
                Customer accessibility
              </h3>
              <p className="mt-3 text-sm leading-7 text-secondary-foreground">
                Products and their details are available through the online
                business presence.
              </p>
            </div>

            <div className="border-t border-border pt-5">
              <span className="font-mono text-sm text-primary">A / 02</span>
              <h3 className="mt-4 text-xl font-semibold">
                A clearer order flow
              </h3>
              <p className="mt-3 text-sm leading-7 text-secondary-foreground">
                Customer orders can enter a defined digital management process.
              </p>
            </div>

            <div className="border-t border-border pt-5">
              <span className="font-mono text-sm text-primary">A / 03</span>
              <h3 className="mt-4 text-xl font-semibold">
                Practical automation
              </h3>
              <p className="mt-3 text-sm leading-7 text-secondary-foreground">
                Automating selected steps improves the workflow without
                overstating full operational automation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="border-t border-border bg-surface/40 px-5 py-20 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionLabel number="05">Business Impact</SectionLabel>

          <h2 className="max-w-3xl text-3xl font-semibold tracking-tight md:text-5xl">
            A stronger digital foundation for everyday operations.
          </h2>

          <div className="mt-9 grid gap-4 sm:grid-cols-2">
            {[
              "Products presented through a digital channel",
              "Online order submission supported",
              "Business-side order management supported",
              "Selected workflow steps automated",
            ].map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-xl border border-border bg-background p-5"
              >
                <CheckCircle2
                  size={19}
                  className="mt-0.5 shrink-0 text-primary"
                />
                <p className="text-sm leading-6">{item}</p>
              </div>
            ))}
          </div>

          <p className="mt-5 text-sm leading-6 text-muted-foreground">
            These are capability-level outcomes based on the stated scope, not
            measured performance results. Quantitative impact can be added when
            verified business data is available.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 py-20 md:px-8 md:py-28">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl border border-primary/20 bg-surface p-8 md:p-14 lg:p-16">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-16 -top-20 h-72 w-72 rounded-full bg-primary/10 blur-[100px]"
          />

          <div className="relative max-w-3xl">
            <SectionLabel number="06">Have a Similar Challenge?</SectionLabel>
            <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
              Let’s bring your business into the digital world.
            </h2>
            <p className="mt-5 max-w-2xl leading-8 text-secondary-foreground">
              From business websites to online ordering and workflow automation,
              build a solution around the way your business works.
            </p>
            <Link
              href="/#contact"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              Get in touch
              <ArrowUpRight size={17} />
            </Link>

            <Link
              href="/work"
              className="ml-5 inline-flex items-center gap-2 text-sm font-medium text-secondary-foreground transition-colors hover:text-primary"
            >
              Explore other projects
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
