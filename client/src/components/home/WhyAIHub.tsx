import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Blocks,
  Check,
  Workflow,
  Globe2,
  Layers3,
  RefreshCw,
  Sparkles,
  WandSparkles,
  type LucideIcon,
} from "lucide-react";

const journey = [
  {
    number: "01",
    eyebrow: "START WITH THE BUSINESS",
    title: "Understand before we build.",
    description:
      "We look at your business goals, current processes and everyday bottlenecks before deciding which technology makes sense.",
    outcome: "Find the problem worth solving.",
    icon: Workflow,
    flow: ["Business goals", "Workflow research", "Problem identified"],
  },
  {
    number: "02",
    eyebrow: "MAKE WORK DIGITAL",
    title: "Bring your operations online.",
    description:
      "We identify where digital tools can replace scattered records, disconnected information and manual ways of working.",
    outcome: "Create a stronger digital foundation.",
    icon: Globe2,
    flow: ["Manual processes", "Digital information", "Organized operations"],
  },
  {
    number: "03",
    eyebrow: "CONNECT THE SYSTEMS",
    title: "Build around your workflow.",
    description:
      "When needed, we design custom software, ERP solutions and integrations that fit the way your team actually works.",
    outcome: "Make the right systems work together.",
    icon: Blocks,
    flow: ["Business requirements", "Software and ERP", "Connected workflow"],
  },
  {
    number: "04",
    eyebrow: "AUTOMATE WHAT MATTERS",
    title: "Give repetitive work a better way.",
    description:
      "We find suitable opportunities to automate repeatable tasks, reduce unnecessary handoffs and free up time for valuable work.",
    outcome: "Less manual effort. More room to grow.",
    icon: Sparkles,
    flow: ["Repetitive tasks", "Practical automation", "Work moves forward"],
  },
];

type Service = {
  name: string;
  label: string;
  description: string;
  icon: LucideIcon;
  steps: string[];
};

const services: Service[] = [
  {
    name: "Automation",
    label: "LET ROUTINE WORK FLOW",
    description:
      "Identify repeatable tasks and design workflows that reduce manual effort where automation makes sense.",
    icon: RefreshCw,
    steps: ["Trigger", "Workflow", "Action"],
  },
  {
    name: "Custom Software",
    label: "SOFTWARE THAT FITS",
    description:
      "Design business tools around your actual requirements instead of forcing every process into a generic product.",
    icon: Layers3,
    steps: ["Requirements", "Custom solution", "Daily operations"],
  },
  {
    name: "ERP Systems",
    label: "BRING OPERATIONS TOGETHER",
    description:
      "Plan connected business processes and information across the functions that need to work together.",
    icon: Blocks,
    steps: ["Business functions", "Shared system", "Connected data"],
  },
  {
    name: "Websites",
    label: "BUILD YOUR DIGITAL PRESENCE",
    description:
      "Create a clear digital home for your business that helps people understand your services and take the next step.",
    icon: Globe2,
    steps: ["Your business", "Digital experience", "Customer action"],
  },
  {
    name: "Integrations",
    label: "CONNECT YOUR TOOLS",
    description:
      "Explore ways to connect existing platforms and reduce avoidable switching, duplication and handoffs.",
    icon: Workflow,
    steps: ["Existing tools", "Integration", "Information flow"],
  },
  {
    name: "AI Solutions",
    label: "USE AI WITH A PURPOSE",
    description:
      "Apply AI where it can support a real business task, improve a workflow or help people work with information.",
    icon: WandSparkles,
    steps: ["Business need", "Useful AI", "Supported workflow"],
  },
];

function SystemDiagram({ steps }: { steps: string[] }) {
  return (
    <div className="mt-7 grid gap-2 sm:grid-cols-3">
      {steps.map((step, index) => (
        <div key={step} className="flex min-w-0 items-center gap-2">
          <div className="flex min-h-[74px] w-full items-center gap-3 rounded-xl border border-[#DCDDD2] bg-white p-3">
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#EAF0D6] text-xs font-semibold text-[#323B1F]">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="text-sm font-medium leading-5 text-[#24251F]">
              {step}
            </span>
          </div>
          {index < steps.length - 1 && (
            <ArrowRight
              className="hidden h-4 w-4 shrink-0 text-[#737663] sm:block"
              aria-hidden="true"
            />
          )}
        </div>
      ))}
    </div>
  );
}

export default function WhyAIHub() {
  const [activeJourney, setActiveJourney] = useState(0);
  const [activeService, setActiveService] = useState("Automation");
  const reduceMotion = useReducedMotion();

  const active = journey[activeJourney];
  const selectedService =
    services.find((service) => service.name === activeService) ?? services[0];

  const transition = reduceMotion
    ? { duration: 0 }
    : { duration: 0.35, ease: [0.22, 1, 0.36, 1] as const };

  return (
    <section
      id="why-ai-automationhub"
      aria-labelledby="why-ai-automationhub-heading"
      className="why-ai-editorial"
    >
      {/* SECTION ONE — THE APPROACH */}
      <div className="why-ai-paper">
        <div className="why-ai-container">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={transition}
            className="why-ai-intro"
          >
            <div className="why-ai-meta">
              <span>WHY AI AUTOMATIONHUB</span>
              <span>OUR APPROACH / 01</span>
            </div>

            <div className="why-ai-hero-copy">
              <h2 id="why-ai-automationhub-heading">
                Built around your business.
                <br />
                <span>Not just another tool.</span>
              </h2>
              <div className="why-ai-intro-aside">
                <ArrowDownRight size={22} strokeWidth={1.5} />
                <p>
                  We find what slows you down, then build the digital systems
                  that help your business work better.
                </p>
              </div>
            </div>
          </motion.div>

          <div className="why-ai-journey">
            <div className="why-ai-journey-list" aria-label="Our approach">
              {journey.map((item, index) => {
                const Icon = item.icon;
                const isActive = activeJourney === index;

                return (
                  <button
                    key={item.number}
                    type="button"
                    aria-pressed={isActive}
                    onClick={() => setActiveJourney(index)}
                    className={`why-ai-journey-item ${
                      isActive ? "is-active" : ""
                    }`}
                  >
                    <span className="why-ai-journey-number">{item.number}</span>
                    <span className="why-ai-journey-icon">
                      <Icon size={19} strokeWidth={1.6} />
                    </span>
                    <span className="why-ai-journey-title">
                      <span>{item.eyebrow}</span>
                      <strong>{item.title}</strong>
                    </span>
                    <ArrowUpRight
                      className="why-ai-journey-arrow"
                      size={19}
                      strokeWidth={1.6}
                    />
                  </button>
                );
              })}
            </div>

            <motion.div
              key={active.number}
              initial={reduceMotion ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={transition}
              className="why-ai-story-panel"
            >
              <div className="why-ai-story-top">
                <span>THE THINKING BEHIND THE WORK</span>
                <span>{active.number} / 04</span>
              </div>

              <div className="why-ai-story-body">
                <p className="why-ai-story-kicker">{active.eyebrow}</p>
                <h3>{active.title}</h3>
                <p className="why-ai-story-description">{active.description}</p>
              </div>

              <SystemDiagram steps={active.flow} />

              <div className="why-ai-outcome">
                <span className="why-ai-check">
                  <Check size={15} />
                </span>
                <span>
                  <small>THE OBJECTIVE</small>
                  <strong>{active.outcome}</strong>
                </span>
              </div>
            </motion.div>
          </div>

          <div className="why-ai-paper-footer">
            <span>BUSINESS FIRST. TECHNOLOGY SECOND.</span>
            <a href="#process">
              See how we work <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>

      {/* SECTION TWO — EXPLORE THE SYSTEMS */}
      <div className="why-ai-lime">
        <div className="why-ai-container">
          <div className="why-ai-lime-heading">
            <p className="why-ai-lime-eyebrow">
              FROM PROBLEM TO PRACTICAL SOLUTION
            </p>
            <h2>
              Systems that do
              <br />
              <span>the work you shouldn’t.</span>
            </h2>
            <p>
              Explore the digital systems we can shape around your business. The
              right solution starts with the problem—not the trend.
            </p>
          </div>

          <div
            className="why-ai-service-pills"
            aria-label="Explore our solutions"
          >
            {services.map((service) => (
              <button
                type="button"
                key={service.name}
                aria-pressed={activeService === service.name}
                onClick={() => setActiveService(service.name)}
                className={`why-ai-service-pill ${
                  activeService === service.name ? "is-active" : ""
                }`}
              >
                {service.name}
                {activeService === service.name && <ArrowUpRight size={15} />}
              </button>
            ))}
          </div>

          <motion.div
            key={selectedService.name}
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={transition}
            className="why-ai-service-panel"
          >
            <div className="why-ai-service-copy">
              <div className="why-ai-service-icon">
                <selectedService.icon size={23} strokeWidth={1.6} />
              </div>
              <p className="why-ai-service-label">{selectedService.label}</p>
              <h3>{selectedService.name}</h3>
              <p className="why-ai-service-description">
                {selectedService.description}
              </p>
              <a href="#process" className="why-ai-service-link">
                Explore our approach <ArrowRight size={16} />
              </a>
            </div>

            <div className="why-ai-service-visual">
              <div className="why-ai-visual-header">
                <span>WORKFLOW CONCEPT</span>
                <span>
                  <span className="why-ai-status-dot" />
                  SYSTEM OVERVIEW
                </span>
              </div>

              <div className="why-ai-visual-core">
                <div className="why-ai-visual-orbit">
                  <div className="why-ai-visual-node">
                    <selectedService.icon size={27} strokeWidth={1.5} />
                  </div>
                </div>
                <p>Designed around your workflow</p>
                <span>Business need → Practical system → Better work</span>
              </div>

              <SystemDiagram steps={selectedService.steps} />
            </div>
          </motion.div>

          <div className="why-ai-lime-footer">
            <span>NO ONE-SIZE-FITS-ALL SYSTEMS.</span>
            <span>THE RIGHT TECHNOLOGY FOR THE RIGHT PROBLEM.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
