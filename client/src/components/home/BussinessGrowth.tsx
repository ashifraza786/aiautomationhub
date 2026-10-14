import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowDownRight,
  ArrowRight,
  BarChart3,
  Bot,
  Check,
  CircleDot,
  Megaphone,
  MousePointerClick,
  Settings2,
  TrendingUp,
  Wrench,
} from "lucide-react";

const stages = [
  {
    number: "01",
    label: "Build",
    description: "Create the digital foundation.",
    items: ["Websites", "E-commerce", "Software", "ERP"],
    workflow: [
      "Map the customer journey",
      "Build the right digital touchpoints",
      "Connect core business systems",
    ],
    icon: Wrench,
    color: "blue",
  },
  {
    number: "02",
    label: "Promote",
    description: "Reach the right customers.",
    items: ["Advertising", "Promotion", "Campaigns", "Leads"],
    workflow: [
      "Choose the right channels",
      "Launch targeted campaigns",
      "Route responses into one lead flow",
    ],
    icon: Megaphone,
    color: "blue",
  },
  {
    number: "03",
    label: "Capture",
    description: "Turn attention into opportunities.",
    items: ["Search", "Social", "Website", "CRM"],
    workflow: [
      "Capture enquiries from each channel",
      "Record context in the CRM",
      "Make the next action clear",
    ],
    icon: MousePointerClick,
    color: "violet",
  },
  {
    number: "04",
    label: "Automate",
    description: "Reduce repetitive work.",
    items: ["Qualification", "Follow-ups", "WhatsApp", "Workflows"],
    workflow: [
      "Trigger the right workflow",
      "Qualify and route each enquiry",
      "Run timely follow-ups with human handoff",
    ],
    icon: Bot,
    color: "blue",
  },
  {
    number: "05",
    label: "Grow",
    description: "Improve business performance.",
    items: ["Qualified Leads", "Response", "Efficiency", "Decisions"],
    workflow: [
      "Reduce manual bottlenecks",
      "Improve response consistency",
      "Use capacity and lead signals to prioritise",
    ],
    icon: TrendingUp,
    color: "mint",
  },
  {
    number: "06",
    label: "Analyze",
    description: "Learn and improve continuously.",
    items: ["Visibility", "Signals", "Data", "Insights"],
    workflow: [
      "Bring key signals into view",
      "Review what is converting",
      "Feed insights back into the next cycle",
    ],
    icon: BarChart3,
    color: "mint",
  },
] as const;

type Stage = (typeof stages)[number];

function accentClasses(color: string) {
  if (color === "mint") {
    return {
      text: "text-mint",
      border: "border-mint/30",
      background: "bg-mint/[0.07]",
      glow: "shadow-[0_0_32px_rgba(90,220,180,0.08)]",
      dot: "bg-mint",
    };
  }

  if (color === "violet") {
    return {
      text: "text-violet",
      border: "border-violet/30",
      background: "bg-violet/[0.07]",
      glow: "shadow-[0_0_32px_rgba(160,110,255,0.09)]",
      dot: "bg-violet",
    };
  }

  return {
    text: "text-primary",
    border: "border-primary/30",
    background: "bg-primary/[0.07]",
    glow: "shadow-[0_0_32px_rgba(79,124,255,0.12)]",
    dot: "bg-primary",
  };
}

type StageButtonProps = {
  stage: Stage;
  selected: boolean;
  index: number;
  reduceMotion: boolean;
  onSelect: () => void;
};

function StageButton({
  stage,
  selected,
  index,
  reduceMotion,
  onSelect,
}: StageButtonProps) {
  const Icon = stage.icon;
  const accent = accentClasses(stage.color);

  return (
    <motion.button
      type="button"
      aria-pressed={selected}
      aria-label={`Explore ${stage.label}: ${stage.description}`}
      onClick={onSelect}
      initial={reduceMotion ? false : { opacity: 0, y: 12 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{
        duration: reduceMotion ? 0 : 0.35,
        delay: reduceMotion ? 0 : index * 0.045,
      }}
      className={`group relative w-full overflow-hidden rounded-2xl border p-4 text-left transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:p-5 ${
        selected
          ? `border-primary/50 bg-elevated ${accent.glow}`
          : "border-border/80 bg-surface/60 hover:border-primary/30 hover:bg-elevated/70"
      }`}
    >
      <span
        aria-hidden="true"
        className={`absolute inset-y-0 left-0 w-[3px] transition-opacity duration-300 ${
          selected ? "bg-primary opacity-100" : "bg-primary opacity-0"
        }`}
      />

      <span className="flex items-start gap-3">
        <span
          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border transition-colors duration-300 ${
            selected
              ? `${accent.border} ${accent.background} ${accent.text}`
              : "border-border bg-background/70 text-muted-foreground group-hover:text-foreground"
          }`}
        >
          <Icon size={19} strokeWidth={1.7} aria-hidden="true" />
        </span>

        <span className="min-w-0 flex-1">
          <span className="flex flex-wrap items-center gap-x-2 gap-y-1">
            <span className="text-base font-semibold tracking-tight text-foreground">
              {stage.label}
            </span>
            <span className={`font-mono text-[10px] ${accent.text}`}>
              {stage.number}
            </span>
          </span>

          <span className="mt-1 block text-xs leading-5 text-muted-foreground sm:text-[13px]">
            {stage.description}
          </span>
        </span>

        <span
          className={`mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border transition-colors ${
            selected
              ? "border-primary/40 bg-primary/10 text-primary"
              : "border-border text-muted-foreground/50"
          }`}
          aria-hidden="true"
        >
          {selected ? (
            <Check size={13} strokeWidth={2.2} />
          ) : (
            <ArrowDownRight size={13} />
          )}
        </span>
      </span>

      <span className="mt-4 flex flex-wrap gap-x-3 gap-y-1.5 border-t border-border/60 pt-3">
        {stage.items.map((item) => (
          <span
            key={item}
            className="flex items-center gap-1.5 text-[10px] text-muted-foreground"
          >
            <span
              className={`h-1 w-1 rounded-full ${accent.dot} opacity-70`}
              aria-hidden="true"
            />
            {item}
          </span>
        ))}
      </span>
    </motion.button>
  );
}

function GrowthVisualization({
  selectedIndex,
  onSelect,
  reduceMotion,
}: {
  selectedIndex: number;
  onSelect: (index: number) => void;
  reduceMotion: boolean;
}) {
  const selected = stages[selectedIndex];
  const SelectedIcon = selected.icon;
  const accent = accentClasses(selected.color);

  return (
    <div className="relative mx-auto w-full max-w-[520px]">
      <div className="relative aspect-square w-full">
        <div
          className="absolute inset-[8%] rounded-full border border-border/70"
          aria-hidden="true"
        />
        <div
          className="absolute inset-[19%] rounded-full border border-primary/[0.12]"
          aria-hidden="true"
        />
        <div
          className="absolute inset-[30%] rounded-full border border-border/60"
          aria-hidden="true"
        />

        {!reduceMotion && (
          <motion.div
            className="absolute inset-[8%] rounded-full border border-transparent border-t-primary/70 border-r-primary/20"
            animate={{ rotate: 360 }}
            transition={{
              duration: 32,
              repeat: Infinity,
              ease: "linear",
            }}
            aria-hidden="true"
          />
        )}

        <div
          className="absolute inset-[25%] rounded-full bg-primary/[0.055] blur-2xl"
          aria-hidden="true"
        />

        <motion.div
          key={selected.number}
          initial={reduceMotion ? false : { opacity: 0.4, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: reduceMotion ? 0 : 0.25 }}
          className={`absolute left-1/2 top-1/2 z-10 flex aspect-square w-[35%] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border ${accent.border} bg-elevated/95 ${accent.glow}`}
        >
          <span
            className={`flex h-12 w-12 items-center justify-center rounded-2xl border ${accent.border} ${accent.background} ${accent.text} sm:h-14 sm:w-14`}
          >
            <SelectedIcon size={26} strokeWidth={1.6} aria-hidden="true" />
          </span>
          <span className="mt-3 text-[10px] font-semibold uppercase tracking-[0.13em] text-foreground sm:text-xs">
            {selected.label}
          </span>
          <span className="mt-1 font-mono text-[9px] text-muted-foreground">
            SYSTEM {selected.number}
          </span>
        </motion.div>

        {stages.map((stage, index) => {
          const Icon = stage.icon;
          const isSelected = index === selectedIndex;
          const positions = [
            "left-[50%] top-[4%]",
            "left-[84%] top-[23%]",
            "left-[84%] top-[68%]",
            "left-[50%] top-[87%]",
            "left-[16%] top-[68%]",
            "left-[16%] top-[23%]",
          ];
          const nodeAccent = accentClasses(stage.color);

          return (
            <button
              key={stage.number}
              type="button"
              aria-pressed={isSelected}
              aria-label={`Select ${stage.label}`}
              onClick={() => onSelect(index)}
              className={`absolute z-20 flex h-[54px] w-[54px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-2xl border transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:h-[62px] sm:w-[62px] ${
                positions[index]
              } ${
                isSelected
                  ? `${nodeAccent.border} ${nodeAccent.background} ${nodeAccent.text} shadow-[0_0_28px_rgba(79,124,255,0.16)]`
                  : "border-border bg-surface text-muted-foreground hover:border-primary/40 hover:text-foreground"
              }`}
            >
              <Icon size={21} strokeWidth={1.7} aria-hidden="true" />
              <span className="absolute -bottom-5 font-mono text-[9px] text-muted-foreground">
                {stage.number}
              </span>
            </button>
          );
        })}

        <svg
          viewBox="0 0 100 100"
          className="pointer-events-none absolute inset-0 h-full w-full"
          fill="none"
          aria-hidden="true"
        >
          <circle
            cx="50"
            cy="50"
            r="24"
            stroke="currentColor"
            strokeOpacity="0.13"
            strokeDasharray="1.5 2.5"
          />
        </svg>
      </div>

      <div className="mt-2 flex items-center justify-center gap-2 text-center">
        <CircleDot size={13} className="text-primary" aria-hidden="true" />
        <span className="text-[10px] uppercase tracking-[0.13em] text-muted-foreground">
          One connected growth system
        </span>
      </div>
    </div>
  );
}

export default function BusinessGrowth() {
  const reducedMotion = useReducedMotion();
  const reduceMotion = Boolean(reducedMotion);
  const [selectedIndex, setSelectedIndex] = useState(3);

  const selectedStage = stages[selectedIndex];

  return (
    <section
      id="business-growth"
      aria-labelledby="business-growth-heading"
      className="section-feature section-fade-divider relative overflow-hidden"
    >
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden="true"
      >
        <div className="absolute -right-40 top-[8%] h-[420px] w-[420px] rounded-full bg-primary/[0.055] blur-[110px]" />
        <div className="absolute -left-40 bottom-[5%] h-[340px] w-[340px] rounded-full bg-mint/[0.035] blur-[100px]" />
        <div
          className="absolute inset-0 opacity-[0.045]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(90,110,140,0.35) 1px, transparent 1px), linear-gradient(90deg, rgba(90,110,140,0.35) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
            maskImage:
              "linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)",
          }}
        />
      </div>

      <div className="container relative">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: reduceMotion ? 0 : 0.5 }}
          className="section-intro-left"
        >
          <p className="section-eyebrow type-eyebrow">
            BUILD • PROMOTE • AUTOMATE • GROW
          </p>

          <h2
            id="business-growth-heading"
            className="section-title type-section-title max-w-[800px]"
          >
            Build the Right System.
            <span className="block text-primary">Then Grow With It.</span>
          </h2>

          <p className="section-description type-body-large max-w-[700px]">
            Your digital presence is only the beginning. We help businesses
            build the right technology, reach the right customers, automate
            operations and use data to make better decisions.
          </p>
        </motion.div>

        <div className="mt-12 grid items-center gap-10 lg:mt-16 lg:grid-cols-[1.04fr_0.96fr] lg:gap-10 xl:gap-16">
          <div className="min-w-0">
            <div className="mb-5 flex items-end justify-between gap-4">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-primary">
                  THE GROWTH FRAMEWORK
                </p>
                <h3 className="mt-2 text-lg font-semibold tracking-tight text-foreground sm:text-xl">
                  Six systems. One direction.
                </h3>
              </div>
              <span className="shrink-0 rounded-full border border-border bg-surface/70 px-3 py-1.5 font-mono text-[10px] text-muted-foreground">
                06 STAGES
              </span>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {stages.map((stage, index) => (
                <StageButton
                  key={stage.number}
                  stage={stage}
                  index={index}
                  selected={selectedIndex === index}
                  reduceMotion={reduceMotion}
                  onSelect={() => setSelectedIndex(index)}
                />
              ))}
            </div>
          </div>

          <div className="min-w-0">
            <div className="mb-2 flex items-center justify-between gap-3">
              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                SYSTEM OVERVIEW
              </p>
              <span className="flex items-center gap-2 text-[10px] text-mint">
                <span className="h-1.5 w-1.5 rounded-full bg-mint" />
                Connected
              </span>
            </div>

            <GrowthVisualization
              selectedIndex={selectedIndex}
              onSelect={setSelectedIndex}
              reduceMotion={reduceMotion}
            />

            <motion.div
              key={selectedStage.number}
              initial={reduceMotion ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: reduceMotion ? 0 : 0.22 }}
              className="mt-5 rounded-2xl border border-border/80 bg-surface/70 p-5 sm:p-6"
              aria-live="polite"
              aria-atomic="true"
              role="status"
            >
              <div className="flex items-start gap-3">
                <span
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border ${accentClasses(selectedStage.color).border} ${accentClasses(selectedStage.color).background} ${accentClasses(selectedStage.color).text}`}
                >
                  <selectedStage.icon
                    size={19}
                    strokeWidth={1.7}
                    aria-hidden="true"
                  />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-primary">
                    STAGE {selectedStage.number} / 06
                  </p>
                  <h3 className="mt-1 text-lg font-semibold tracking-tight text-foreground">
                    {selectedStage.label}: the next steps
                  </h3>
                  <p className="mt-1 text-xs leading-5 text-muted-foreground">
                    {selectedStage.description} Here is how this stage works
                    within your growth system.
                  </p>
                </div>
              </div>

              <ol className="mt-5 grid gap-2.5">
                {selectedStage.workflow.map((step, index) => (
                  <li
                    key={step}
                    className="flex items-start gap-3 rounded-xl border border-border/70 bg-background/50 p-3"
                  >
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-primary/20 bg-primary/[0.07] font-mono text-[10px] font-semibold text-primary">
                      0{index + 1}
                    </span>
                    <span className="pt-1 text-xs leading-5 text-muted-foreground">
                      {step}
                    </span>
                  </li>
                ))}
              </ol>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 14 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: reduceMotion ? 0 : 0.45 }}
          className="mt-12 flex flex-col gap-5 border-t border-border/70 pt-8 md:mt-16 md:flex-row md:items-center md:justify-between md:pt-10"
        >
          <div className="flex items-start gap-3">
            <Settings2
              className="mt-0.5 h-5 w-5 shrink-0 text-primary"
              strokeWidth={1.7}
              aria-hidden="true"
            />
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                THE GROWTH LOOP
              </p>
              <p className="mt-1.5 max-w-[700px] text-sm leading-6 text-muted-foreground">
                Build what your business needs today. Connect it to what your
                business will need tomorrow.
              </p>
            </div>
          </div>

          <a
            href="/start-project"
            className="group inline-flex h-11 shrink-0 items-center justify-center gap-2 rounded-lg bg-primary px-5 text-sm font-semibold text-primary-foreground shadow-[0_0_28px_rgba(79,124,255,0.12)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary/95 hover:shadow-[0_0_34px_rgba(79,124,255,0.2)] focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            Start Your Project
            <ArrowRight
              className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
