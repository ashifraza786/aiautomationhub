import { motion, useReducedMotion } from "framer-motion";

const tools = [
  { name: "Make", color: "#8B5CF6", mark: "M" },
  { name: "Zapier", color: "#FF6A3D", mark: "zapier" },
  { name: "Shopify", color: "#95BF47", mark: "S" },
  { name: "Analytics", color: "#6598F6", mark: "▥" },
  { name: "WhatsApp", color: "#25D366", mark: "◉" },
  { name: "Slack", color: "#36C5F0", mark: "✣" },
  { name: "Telegram", color: "#2AABEE", mark: "➤" },
  { name: "HubSpot", color: "#FF7A59", mark: "◎" },
  { name: "Notion", color: "#F4F7FB", mark: "N" },
  { name: "Airtable", color: "#4F9CF9", mark: "⬡" },
  { name: "Google Sheets", color: "#34A853", mark: "▤" },
];

export default function TechStackMarquee() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      aria-label="Technology tools we work with"
      className="tech-stack-section"
    >
      <div className="tech-stack-panel">
        <p className="tech-stack-label">THE STACK WE BUILD WITH</p>

        <div className="tech-stack-viewport">
          <motion.div
            className="tech-stack-track"
            animate={reduceMotion ? undefined : { x: ["0%", "-50%"] }}
            transition={
              reduceMotion
                ? undefined
                : {
                    duration: 32,
                    ease: "linear",
                    repeat: Infinity,
                  }
            }
          >
            {[0, 1].map((copy) => (
              <div
                key={copy}
                className="tech-stack-group"
                aria-hidden={copy === 1}
              >
                {tools.map((tool) => (
                  <div className="tech-stack-tool" key={tool.name}>
                    <span
                      className="tech-stack-mark"
                      style={{ color: tool.color }}
                      aria-hidden="true"
                    >
                      {tool.mark}
                    </span>
                    <span className="tech-stack-name">{tool.name}</span>
                  </div>
                ))}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
