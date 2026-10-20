import { motion } from "framer-motion";
import {
  BarChart3,
  Check,
  CircleDollarSign,
  ClipboardList,
  Package,
  Users,
} from "lucide-react";
import { useEffect, useState } from "react";

const navigationItems = [
  { label: "Overview", icon: BarChart3 },
  { label: "Orders", icon: ClipboardList },
  { label: "Inventory", icon: Package },
  { label: "Billing", icon: CircleDollarSign },
  { label: "CRM", icon: Users },
];

const orderStates = ["Processing", "Confirmed"];

export default function CustomSoftwareShowcase() {
  const [activeNav, setActiveNav] = useState("Overview");
  const [orderState, setOrderState] = useState(0);
  const [inventory, setInventory] = useState(124);
  const [billingGenerated, setBillingGenerated] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const timer = window.setInterval(() => {
      setOrderState((current) => {
        if (current === orderStates.length - 1) {
          setInventory(124);
          setBillingGenerated(false);
          return 0;
        }

        setInventory(123);
        setBillingGenerated(true);
        return current + 1;
      });
    }, 2200);

    return () => window.clearInterval(timer);
  }, [isPaused]);

  const currentOrderState = orderStates[orderState];

  return (
    <div
      className="relative h-full min-h-[430px] overflow-hidden rounded-xl border border-border/80 bg-background/70 p-3 sm:p-4 lg:p-5"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Ambient system glow */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_72%_20%,rgba(79,124,255,0.10),transparent_36%),radial-gradient(circle_at_15%_90%,rgba(56,217,197,0.04),transparent_30%)]"
        aria-hidden="true"
      />

      <div className="relative flex h-full flex-col">
        {/* Application header */}
        <div className="flex items-center justify-between border-b border-border/70 px-2 pb-3">
          <div>
            <span className="text-[9px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
              Business Software
            </span>

            <p className="mt-1 text-sm font-semibold text-foreground">
              Operations System
            </p>
          </div>

          <motion.span
            animate={{
              opacity: isPaused ? 0.65 : [0.65, 1, 0.65],
            }}
            transition={{
              duration: 1.2,
              repeat: isPaused ? 0 : Infinity,
            }}
            className="inline-flex items-center gap-2 rounded-full border border-mint/15 bg-mint/5 px-2.5 py-1 text-[9px] font-medium text-mint"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-mint" />
            System Active
          </motion.span>
        </div>

        {/* Application body */}
        <div className="mt-3 grid min-h-0 flex-1 grid-cols-[92px_1fr] gap-3">
          {/* Sidebar */}
          <div className="rounded-lg border border-border/70 bg-surface/50 p-2">
            <div className="mb-3 px-2">
              <span className="text-[8px] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                Menu
              </span>
            </div>

            <div className="space-y-1">
              {navigationItems.map((item) => {
                const Icon = item.icon;
                const selected = activeNav === item.label;

                return (
                  <button
                    key={item.label}
                    type="button"
                    onClick={() => setActiveNav(item.label)}
                    className={[
                      "flex w-full items-center gap-2 rounded-md px-2 py-2 text-left text-[9px] font-medium transition-all duration-200",
                      selected
                        ? "bg-primary/10 text-primary"
                        : "text-muted-foreground hover:bg-elevated hover:text-foreground",
                    ].join(" ")}
                  >
                    <Icon className="h-3 w-3 shrink-0" />
                    <span className="truncate">{item.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Main application */}
          <div className="min-w-0 rounded-lg border border-border/70 bg-surface/35 p-3 sm:p-4">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-[8px] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                  Overview
                </span>

                <p className="mt-1 text-sm font-semibold text-foreground">
                  Business Workspace
                </p>
              </div>

              <span className="text-[8px] text-muted-foreground">Today</span>
            </div>

            {/* Metrics */}
            <div className="mt-4 grid grid-cols-3 gap-2">
              <Metric label="Orders" value="48" change="+12%" />

              <Metric
                label="Inventory"
                value={String(inventory)}
                change={inventory === 123 ? "Reserved" : "Available"}
                active={inventory === 123}
              />

              <Metric
                label="Billing"
                value={billingGenerated ? "Ready" : "Pending"}
                change={billingGenerated ? "Generated" : "Waiting"}
                active={billingGenerated}
              />
            </div>

            {/* Main dashboard */}
            <div className="mt-3 grid grid-cols-[1.15fr_0.85fr] gap-2">
              {/* Orders */}
              <div className="rounded-lg border border-border/70 bg-background/45 p-3">
                <div className="flex items-center justify-between">
                  <span className="text-[8px] font-semibold uppercase tracking-[0.1em] text-muted-foreground">
                    Recent Order
                  </span>

                  <span className="text-[8px] text-muted-foreground">
                    #AH-1048
                  </span>
                </div>

                <div className="mt-4 flex items-center justify-between gap-3">
                  <div className="min-w-0">
                    <p className="truncate text-[10px] font-semibold text-foreground">
                      Customer Order
                    </p>

                    <p className="mt-1 text-[8px] text-muted-foreground">
                      Order details
                    </p>
                  </div>

                  <motion.span
                    key={currentOrderState}
                    initial={{ opacity: 0, scale: 0.92 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className={[
                      "shrink-0 rounded-full border px-2 py-1 text-[8px] font-semibold",
                      orderState === 1
                        ? "border-mint/20 bg-mint/5 text-mint"
                        : "border-primary/20 bg-primary/5 text-primary",
                    ].join(" ")}
                  >
                    {currentOrderState}
                  </motion.span>
                </div>

                {/* Order progress */}
                <div className="mt-5">
                  <div className="flex items-center justify-between">
                    <span className="text-[8px] text-muted-foreground">
                      Order progress
                    </span>

                    <span className="text-[8px] font-semibold text-foreground">
                      {orderState === 1 ? "100%" : "68%"}
                    </span>
                  </div>

                  <div className="mt-2 h-1 overflow-hidden rounded-full bg-border">
                    <motion.div
                      animate={{
                        width: orderState === 1 ? "100%" : "68%",
                      }}
                      transition={{ duration: 0.45 }}
                      className="h-full rounded-full bg-primary"
                    />
                  </div>
                </div>
              </div>

              {/* Inventory */}
              <div className="rounded-lg border border-border/70 bg-background/45 p-3">
                <div className="flex items-center justify-between">
                  <span className="text-[8px] font-semibold uppercase tracking-[0.1em] text-muted-foreground">
                    Inventory
                  </span>

                  <Package className="h-3 w-3 text-primary" />
                </div>

                <motion.div
                  key={inventory}
                  initial={{ opacity: 0.45, y: 3 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-5"
                >
                  <p className="text-xl font-semibold tracking-[-0.03em] text-foreground">
                    {inventory}
                  </p>

                  <p className="mt-1 text-[8px] text-muted-foreground">
                    Available units
                  </p>
                </motion.div>

                <div className="mt-4 flex items-center gap-2">
                  <span
                    className={[
                      "h-1.5 w-1.5 rounded-full",
                      inventory === 123 ? "bg-primary" : "bg-mint",
                    ].join(" ")}
                  />

                  <span className="text-[8px] text-muted-foreground">
                    {inventory === 123 ? "Unit reserved" : "Stock available"}
                  </span>
                </div>
              </div>
            </div>

            {/* System events */}
            <div className="mt-3 rounded-lg border border-border/70 bg-background/45 p-3">
              <div className="flex items-center justify-between">
                <span className="text-[8px] font-semibold uppercase tracking-[0.1em] text-muted-foreground">
                  System Activity
                </span>

                <span className="text-[8px] text-muted-foreground">
                  Automated
                </span>
              </div>

              <div className="mt-3 space-y-2">
                <ActivityRow label="Order received" status="Complete" active />

                <ActivityRow
                  label="Inventory updated"
                  status={inventory === 123 ? "Updated" : "Ready"}
                  active={inventory === 123}
                />

                <ActivityRow
                  label="Billing document"
                  status={billingGenerated ? "Generated" : "Pending"}
                  active={billingGenerated}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-3 flex items-center justify-between border-t border-border/70 px-2 pt-3">
          <div className="flex items-center gap-2">
            <Check className="h-3.5 w-3.5 text-primary" />

            <span className="text-[9px] font-medium text-muted-foreground">
              Operations managed in one workspace
            </span>
          </div>

          <span className="text-[9px] font-semibold tracking-[0.08em] text-muted-foreground">
            CUSTOM SYSTEM
          </span>
        </div>
      </div>
    </div>
  );
}

function Metric({
  label,
  value,
  change,
  active = false,
}: {
  label: string;
  value: string;
  change: string;
  active?: boolean;
}) {
  return (
    <div
      className={[
        "rounded-lg border p-2.5 transition-colors duration-300",
        active
          ? "border-primary/25 bg-primary/[0.045]"
          : "border-border/70 bg-background/40",
      ].join(" ")}
    >
      <span className="text-[8px] text-muted-foreground">{label}</span>

      <motion.p
        key={value}
        initial={{ opacity: 0.5, y: 2 }}
        animate={{ opacity: 1, y: 0 }}
        className="mt-1 text-sm font-semibold text-foreground"
      >
        {value}
      </motion.p>

      <span
        className={[
          "mt-1 block text-[7px]",
          active ? "text-primary" : "text-muted-foreground",
        ].join(" ")}
      >
        {change}
      </span>
    </div>
  );
}

function ActivityRow({
  label,
  status,
  active = false,
}: {
  label: string;
  status: string;
  active?: boolean;
}) {
  return (
    <div className="flex items-center justify-between gap-3">
      <div className="flex min-w-0 items-center gap-2">
        <span
          className={[
            "h-1.5 w-1.5 shrink-0 rounded-full",
            active ? "bg-primary" : "bg-border",
          ].join(" ")}
        />

        <span className="truncate text-[8px] text-muted-foreground">
          {label}
        </span>
      </div>

      <span
        className={[
          "shrink-0 text-[8px] font-medium",
          active ? "text-foreground" : "text-muted-foreground",
        ].join(" ")}
      >
        {status}
      </span>
    </div>
  );
}
