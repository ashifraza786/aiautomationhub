import { MessageSquare } from "lucide-react";
import { useEffect, useState } from "react";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import Hero from "@/components/home/Hero";
import ProblemSolution from "@/components/home/ProblemSolution";
import WhatWeBuild from "@/components/home/WhatWeBuild";
import HowWeWork from "@/components/home/HowWeWork";
import WhyAIHub from "@/components/home/WhyAIHub";
import BusinessGrowth from "@/components/home/BussinessGrowth";
import FutureVision from "@/components/home/FutureVision";
import FinalCTA from "@/components/home/FinalCTA";

const PHONE_CLEAN = "917484821896";

const WA_BASE = `https://wa.me/${PHONE_CLEAN}?text=Hello%20AIAutomationHub%2C%20I%20want%20to%20discuss%20a%20project.`;

function track(event: string, data?: Record<string, string>) {
  try {
    if (typeof window !== "undefined" && (window as any).va) {
      (window as any).va("event", {
        name: event,
        ...data,
      });
    }

    console.info("[analytics]", event, data);
  } catch (_) {
    // Analytics should never interrupt the user experience.
  }
}

export default function Home() {
  const [showFloatingWA, setShowFloatingWA] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShowFloatingWA(window.scrollY > 240);
    };

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      {/* ================================================================
          GLOBAL NAVIGATION
         ================================================================ */}
      <Navbar />

      <main>
        {/* ================================================================
            01 — HERO
           ================================================================ */}
        <Hero />

        {/* ================================================================
            02 — PROBLEM → SOLUTION
           ================================================================ */}
        <ProblemSolution />

        {/* ================================================================
            03 — WHAT WE BUILD
           ================================================================ */}
        <WhatWeBuild />

        {/* ================================================================
            04 — HOW WE WORK
           ================================================================ */}
        <HowWeWork />

        {/* ================================================================
            05 — WHY AI AUTOMATIONHUB
           ================================================================ */}
        <WhyAIHub />

        {/* ================================================================
            06 — BUSINESS GROWTH
           ================================================================ */}
        <BusinessGrowth />

        {/* ================================================================
            07 — FUTURE VISION
           ================================================================ */}
        <FutureVision />

        {/* ================================================================
            08 — FINAL CONVERSION
           ================================================================ */}
        <FinalCTA />
      </main>

      {/* ================================================================
          GLOBAL FOOTER
         ================================================================ */}
      <Footer />

      {/* ================================================================
          FLOATING WHATSAPP
          Utility CTA only — intentionally separate from the main CTA flow.
         ================================================================ */}
      {showFloatingWA && (
        <a
          href={WA_BASE}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open WhatsApp chat"
          title="Chat on WhatsApp"
          onClick={() =>
            track("whatsapp_click", {
              location: "floating_button",
            })
          }
          className="fixed bottom-5 right-5 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_8px_30px_rgba(0,0,0,0.28)] transition-all duration-200 hover:-translate-y-0.5 hover:scale-105 hover:shadow-[0_10px_36px_rgba(0,0,0,0.34)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:bottom-6 sm:right-6 sm:h-14 sm:w-14"
        >
          <MessageSquare
            className="h-5 w-5 sm:h-6 sm:w-6"
            strokeWidth={1.8}
            aria-hidden="true"
          />
        </a>
      )}
    </div>
  );
}
