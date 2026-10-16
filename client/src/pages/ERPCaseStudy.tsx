import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Package,
  ShoppingCart,
  Receipt,
  Users,
  BarChart3,
} from "lucide-react";
import ERPShowcase from "@/components/what-we-build/ERPShowcase";

const capabilities = [
  {
    icon: ShoppingCart,
    title: "Sales Management",
    description:
      "Support order recording and sales-related business workflows.",
  },
  {
    icon: Package,
    title: "Inventory Management",
    description:
      "Represent stock-related workflows within the connected system.",
  },
  {
    icon: Receipt,
    title: "Billing",
    description:
      "Connect billing-related activities to the broader ERP workflow.",
  },
  {
    icon: Users,
    title: "HR",
    description:
      "Include team and HR-related information in the system overview.",
  },
  {
    icon: BarChart3,
    title: "Reports",
    description: "Bring business information together for reporting workflows.",
  },
];

export default function ERPCaseStudy() {
  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      {/* Hero */}
      <section className="px-5 pb-16 pt-24 md:px-8 md:pb-24 md:pt-32">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
              Case Study / ERP Business Systems
            </p>

            <h1 className="mt-5 text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
              One connected system for{" "}
              <span className="text-primary">business operations.</span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-secondary-foreground md:text-lg">
              An ERP system concept bringing sales, inventory, billing, HR, and
              reporting into one connected operational workflow.
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {["Sales", "Inventory", "Billing", "HR", "Reports"].map(
                (item) => (
                  <span
                    key={item}
                    className="rounded-full border border-border bg-surface px-3 py-2 text-xs text-secondary-foreground"
                  >
                    {item}
                  </span>
                ),
              )}
            </div>

            <a
              href="#challenge"
              className="mt-9 inline-flex items-center gap-2 text-sm font-semibold hover:text-primary"
            >
              Explore the case study
              <ArrowRight size={16} />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="min-w-0"
          >
            <ERPShowcase />
          </motion.div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="border-y border-border bg-surface/40 px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
            Key Capabilities
          </p>

          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight md:text-5xl">
            Business functions connected through one workflow.
          </h2>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="rounded-2xl border border-border bg-background p-6"
                >
                  <Icon className="text-primary" size={23} />

                  <h3 className="mt-5 text-lg font-semibold">{item.title}</h3>

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
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
              01 / The Challenge
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
              Business operations need a connected view.
            </h2>
          </div>

          <p className="text-base leading-8 text-secondary-foreground">
            As business functions grow, sales, stock, billing, team information,
            and reports can become harder to coordinate when managed in
            disconnected workflows. An ERP approach brings these functions into
            a shared operational view.
          </p>
        </div>
      </section>

      {/* Solution */}
      <section className="border-y border-border bg-surface/40 px-5 py-20 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
            02 / The Solution
          </p>

          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight md:text-5xl">
            A coordinated view of core business functions.
          </h2>

          <p className="mt-6 max-w-3xl text-base leading-8 text-secondary-foreground">
            The ERP showcase illustrates a workflow in which a business event
            can connect sales, inventory, billing, HR, and reporting. The actual
            integrations and automated actions depend on the implemented system
            scope.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {[
              "Core business functions represented in one system",
              "A visible workflow between departments",
              "Inventory and billing steps included in the flow",
              "Reporting represented as part of the system overview",
            ].map((item) => (
              <div
                key={item}
                className="flex gap-3 rounded-xl border border-border bg-background p-5"
              >
                <CheckCircle2
                  size={19}
                  className="mt-0.5 shrink-0 text-primary"
                />
                <p className="text-sm leading-6">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why it works */}
      <section className="px-5 py-20 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
            03 / Why It Works
          </p>

          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight md:text-5xl">
            Make the relationships between business functions easier to see.
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="border-t border-border pt-5">
              <h3 className="text-lg font-semibold">Connected workflow</h3>
              <p className="mt-3 text-sm leading-7 text-secondary-foreground">
                The visual explains how a business event may flow across several
                departments.
              </p>
            </div>

            <div className="border-t border-border pt-5">
              <h3 className="text-lg font-semibold">Clearer visibility</h3>
              <p className="mt-3 text-sm leading-7 text-secondary-foreground">
                Core functions are presented within one consistent system
                interface.
              </p>
            </div>

            <div className="border-t border-border pt-5">
              <h3 className="text-lg font-semibold">Expandable foundation</h3>
              <p className="mt-3 text-sm leading-7 text-secondary-foreground">
                The approach can be adapted to the workflows and integrations
                the business actually needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="border-t border-border bg-surface/40 px-5 py-20 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
            04 / Impact
          </p>

          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight md:text-5xl">
            A unified view of essential business operations.
          </h2>

          <p className="mt-6 max-w-3xl text-base leading-8 text-secondary-foreground">
            The current showcase demonstrates the intended relationship between
            departments. Verified operational results, deployment details, and
            performance metrics can be added when project evidence is available.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl rounded-3xl border border-primary/20 bg-surface p-8 md:p-14">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
            Have a Similar Challenge?
          </p>

          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight md:text-5xl">
            Let’s build a system around your business.
          </h2>

          <p className="mt-5 max-w-2xl leading-8 text-secondary-foreground">
            Explore how connected software can support your operational
            workflows.
          </p>

          <a
            href="/#contact"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3.5 text-sm font-semibold text-primary-foreground hover:opacity-90"
          >
            Get in touch
            <ArrowRight size={16} />
          </a>

          <a
            href="/work"
            className="ml-5 inline-flex items-center gap-2 text-sm font-semibold hover:text-primary"
          >
            Explore other projects
            <ArrowRight size={16} />
          </a>
        </div>
      </section>
    </main>
  );
}
