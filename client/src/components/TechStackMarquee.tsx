import { motion, useReducedMotion } from "framer-motion";

const palette = {
  background: "#202722",
  text: "#F4F0E8",
  muted: "#B7C0B4",
  border: "rgba(183, 197, 181, 0.22)",
};

const tools = [
  {
    name: "Make",
    logo: "https://cdn.simpleicons.org/make/7B5CE1",
  },
  {
    name: "Zapier",
    logo: "https://cdn.simpleicons.org/zapier/FF4A00",
  },
  {
    name: "Shopify",
    logo: "https://cdn.simpleicons.org/shopify/95BF47",
  },
  {
    name: "Analytics",
    logo: "https://cdn.simpleicons.org/googleanalytics/E37400",
  },
  {
    name: "WhatsApp",
    logo: "https://cdn.simpleicons.org/whatsapp/25D366",
  },
  {
    name: "Slack",
    logo: "https://cdn.simpleicons.org/slack/36C5F0",
  },
  {
    name: "Telegram",
    logo: "https://cdn.simpleicons.org/telegram/2AABEE",
  },
  {
    name: "HubSpot",
    logo: "https://cdn.simpleicons.org/hubspot/FF7A59",
  },
  {
    name: "Notion",
    logo: "https://cdn.simpleicons.org/notion/F4F0E8",
  },
  {
    name: "Airtable",
    logo: "https://cdn.simpleicons.org/airtable/2D9BF0",
  },
  {
    name: "Google Sheets",
    logo: "https://cdn.simpleicons.org/googlesheets/34A853",
  },
];

export default function TechStackMarquee() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      aria-label="Technology tools we work with"
      className="tech-stack-section"
      style={{
        backgroundColor: "transparent",
        color: palette.text,
        fontFamily: '"Geist", sans-serif',
      }}
    >
      <div
        className="tech-stack-panel"
        style={{
          position: "relative",
          overflow: "hidden",
          backgroundColor: palette.background,
          color: palette.text,
          border: `1px solid ${palette.border}`,
          borderRadius: "20px",
          boxShadow: "0 18px 45px rgba(32, 39, 34, 0.12)",
        }}
      >
        <p
          className="tech-stack-label"
          style={{
            color: palette.text,
            letterSpacing: "0.16em",
            fontWeight: 600,
          }}
        >
          THE STACK WE BUILD WITH
        </p>

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
                  <div
                    className="tech-stack-tool"
                    key={tool.name}
                    title={tool.name}
                  >
                    <span
                      className="tech-stack-mark"
                      aria-hidden="true"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "42px",
                        height: "42px",
                        color: palette.text,
                      }}
                    >
                      <img
                        src={tool.logo}
                        alt=""
                        loading="lazy"
                        draggable={false}
                        style={{
                          display: "block",
                          width: "36px",
                          height: "36px",
                          objectFit: "contain",
                        }}
                      />
                    </span>

                    <span
                      className="tech-stack-name"
                      style={{ color: palette.muted }}
                    >
                      {tool.name}
                    </span>
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
