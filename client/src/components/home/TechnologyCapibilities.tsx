import { motion } from "framer-motion";
import {
  ArrowRight,
  Boxes,
  BrainCircuit,
  Database,
  FileSearch,
  Workflow,
} from "lucide-react";

const capabilityGroups = [
  {
    icon: BrainCircuit,
    number: "01",
    title: "Intelligent Solutions",
    description:
      "Technology designed to make business processes smarter, simpler and easier to manage.",
    items: [
      "AI-powered experiences",
      "Intelligent business workflows",
      "Decision-support systems",
    ],
  },
  {
    icon: Workflow,
    number: "02",
    title: "Automation & Workflows",
    description:
      "Connected workflows that reduce repetitive work and keep business processes moving.",
    items: [
      "Workflow design",
      "Process automation",
      "Connected business actions",
    ],
  },
  {
    icon: Database,
    number: "03",
    title: "Business Systems",
    description:
      "Digital systems built around the operational requirements of each business.",
    items: [
      "Business software",
      "ERP systems",
      "Data & operational management",
    ],
  },
  {
    icon: FileSearch,
    number: "04",
    title: "Data & Information",
    description:
      "Better ways to organize, access and use the information your business depends on.",
    items: [
      "Business data handling",
      "Document-based workflows",
      "Reporting & visibility",
    ],
  },
];

export default function TechnologyCapabilities() {
  return (
    <section
      id="technology"
      className="technology-capabilities-section"
      aria-labelledby="technology-heading"
    >
      <div className="container">
        {/* ================================================================
            INTRO
           ================================================================ */}
        <div className="technology-intro">
          <motion.p
            className="section-eyebrow"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45 }}
          >
            TECHNOLOGY & CAPABILITIES
          </motion.p>

          <motion.h2
            id="technology-heading"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, delay: 0.05 }}
          >
            The Right Technology for the Right Problem.
          </motion.h2>

          <motion.p
            className="technology-description"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, delay: 0.1 }}
          >
            We don't start with a technology stack. We start with your business
            requirement and choose the right approach around it.
          </motion.p>
        </div>

        {/* ================================================================
            CAPABILITY SYSTEM VISUAL
           ================================================================ */}
        <motion.div
          className="technology-system"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65 }}
        >
          <div className="technology-system-header">
            <div className="technology-system-title">
              <div className="technology-system-icon">
                <Boxes className="h-5 w-5" />
              </div>

              <div>
                <span>CAPABILITY LAYER</span>
                <strong>Business Technology Stack</strong>
              </div>
            </div>

            <div className="technology-system-status">
              <span />
              Solution Architecture
            </div>
          </div>

          <div className="technology-system-body">
            <div className="technology-system-center">
              <div className="technology-center-ring">
                <div className="technology-center-core">
                  <BrainCircuit className="h-6 w-6" />
                </div>
              </div>

              <strong>Your Business</strong>
              <span>Requirement → Solution</span>
            </div>

            <div className="technology-system-lines" aria-hidden="true">
              <span />
              <span />
              <span />
              <span />
            </div>

            <div className="technology-capability-grid">
              {capabilityGroups.map((group, index) => {
                const Icon = group.icon;

                return (
                  <motion.article
                    key={group.number}
                    className="technology-capability-card"
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.45,
                      delay: index * 0.08,
                    }}
                  >
                    <div className="technology-capability-top">
                      <span>{group.number}</span>

                      <div className="technology-capability-icon">
                        <Icon className="h-4 w-4" />
                      </div>
                    </div>

                    <h3>{group.title}</h3>

                    <p>{group.description}</p>

                    <ul>
                      {group.items.map((item) => (
                        <li key={item}>
                          <span />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </motion.article>
                );
              })}
            </div>
          </div>

          <div className="technology-system-footer">
            <span>
              <span className="technology-footer-dot" />
              Technology follows the business requirement
            </span>

            <span>BUILD → CONNECT → IMPROVE</span>
          </div>
        </motion.div>

        {/* ================================================================
            BOTTOM MESSAGE
           ================================================================ */}
        <motion.div
          className="technology-bottom"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
        >
          <div>
            <span>NO ONE-SIZE-FITS-ALL TECHNOLOGY</span>
            <strong>Your Business Comes First.</strong>
          </div>

          <a href="#contact-form" className="technology-bottom-link">
            Discuss Your Requirement
            <ArrowRight className="h-4 w-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
