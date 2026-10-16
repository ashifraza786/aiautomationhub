import { ArrowRight, ArrowUpRight, MessageSquare } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "wouter";

import TechStackMarquee from "@/components/TechStackMarquee";
import Hero from "@/components/home/Hero";
import ProblemSolution from "@/components/home/ProblemSolution";
import WhatWeBuild from "@/components/home/WhatWeBuild";
import HowWeWork from "@/components/home/HowWeWork";
import WhyAIHub from "@/components/home/WhyAIHub";
import BusinessGrowth from "@/components/home/BussinessGrowth";
import FutureVision from "@/components/home/FutureVision";
import FinalCTA from "@/components/home/FinalCTA";
import AboutSection from "@/components/home/AboutSection";
import ContactSection from "@/components/home/ContactSection";

import { projectData } from "@/data/projectData";

const PHONE_CLEAN = "919262838454";

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
  } catch {
    // Analytics should never interrupt the user experience.
  }
}

export default function Home() {
  const [showFloatingWA, setShowFloatingWA] = useState(false);

  // Keep the homepage portfolio preview small and curated.
  // The complete project collection remains available on /work.
  const homepageProjects = projectData.filter((project) =>
    ["erp-management-system", "ai-automation-case-study"].includes(
      project.slug,
    ),
  );

  useEffect(() => {
    const onScroll = () => {
      setShowFloatingWA(window.scrollY > 240);
    };

    onScroll();

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <main>
        {/* 01 — HERO */}
        <Hero />

        {/* 02 — PROBLEM → SOLUTION */}
        <ProblemSolution />

        {/* 03 — WHAT WE BUILD */}
        <WhatWeBuild />

        {/* 04 — HOW WE WORK */}
        <HowWeWork />

        {/* 05 — WHY AI AUTOMATIONHUB */}
        <WhyAIHub />

        <TechStackMarquee />

        {/* 06 — SELECTED PROJECTS */}
        <section
          id="selected-work"
          className="container mx-auto max-w-[1280px] scroll-mt-24 px-5 py-16 sm:px-7 sm:py-20 lg:px-8 lg:py-24"
        >
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Selected Work
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
              Ideas turned into{" "}
              <span className="text-primary">digital solutions.</span>
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">
              A small preview of our work across business systems and
              intelligent automation. Explore the complete portfolio to see all
              projects and their details.
            </p>
          </div>

          <div className="mx-auto mt-10 grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
            {homepageProjects.map((project, index) => (
              <Link
                key={project.slug}
                href={project.href || "/work"}
                className="group relative flex min-h-[220px] flex-col overflow-hidden rounded-2xl border border-border bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_16px_45px_rgba(0,0,0,0.08)] sm:min-h-[245px] sm:p-7"
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="text-xs font-medium tracking-[0.16em] text-muted-foreground">
                    PROJECT {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border transition-colors duration-300 group-hover:border-primary/40 group-hover:bg-primary group-hover:text-primary-foreground">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>

                <div className="mt-7">
                  <p className="text-xs font-medium text-primary">
                    {project.category}
                  </p>

                  <h3 className="mt-2 text-xl font-semibold tracking-tight sm:text-2xl">
                    {project.title}
                  </h3>

                  <p className="mt-3 line-clamp-3 text-sm leading-6 text-muted-foreground">
                    {project.description}
                  </p>
                </div>

                <div className="mt-auto pt-5">
                  <span className="inline-flex items-center gap-2 text-sm font-semibold transition-colors group-hover:text-primary">
                    View Case Study
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* One main CTA for the complete portfolio */}
          <div className="mt-9 flex justify-center">
            <Link
              href="/work"
              onClick={() =>
                track("explore_all_projects_click", {
                  location: "homepage_selected_work",
                })
              }
              className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              Explore All Projects
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </section>

        {/* 07 — BUSINESS GROWTH */}
        <BusinessGrowth />

        {/* 08 — FUTURE VISION */}
        <FutureVision />

        {/* 09 — FINAL CONVERSION */}
        <FinalCTA />

        {/* 10 — ABOUT, DIRECTLY ABOVE CONTACT */}
        <AboutSection />

        {/* 11 — CONTACT */}
        <ContactSection />
      </main>

      {/* Floating WhatsApp */}
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
