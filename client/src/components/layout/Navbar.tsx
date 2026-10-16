import { useEffect, useState } from "react";
import { Link, useLocation } from "wouter";
import { ArrowRight, Mail, Menu, Phone, X } from "lucide-react";
import type { MouseEvent } from "react";
import logo from "../../assets/logo-aiautomationhub.webp";

const navigation = [
  { label: "Home", href: "/", type: "page" },
  { label: "Solutions", href: "/#solutions", type: "anchor", id: "solutions" },
  {
    label: "Technology",
    href: "/#technology",
    type: "anchor",
    id: "technology",
  },
  { label: "Work", href: "/work", type: "page" },
  { label: "Case Studies", href: "/#case studues", type: "anchor", id: "process" },
  { label: "About", href: "/#about", type: "anchor", id: "about" },
  { label: "Contact", href: "/#contact", type: "anchor", id: "contact" },
] as const;

const PHONE = "+91 9262838454";
const EMAIL = "helloaiautomationhub@gmail.com";

const sectionIds = [
  "solutions",
  "technology",
  "process",
  "about",
  "contact",
] as const;

type SectionId = (typeof sectionIds)[number];

export default function Navbar() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  const isHome = location === "/" || location === "";
  const isWorkPage = location.startsWith("/work");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 16);

      if (!isHome) return;

      const marker = window.scrollY + 160;
      let currentSection = "";

      for (const id of sectionIds) {
        const element = document.getElementById(id);

        if (element && element.offsetTop <= marker) {
          currentSection = id;
        }
      }

      if (window.scrollY < 120) {
        currentSection = "";
      }

      setActiveSection(currentSection);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    window.addEventListener("hashchange", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      window.removeEventListener("hashchange", handleScroll);
    };
  }, [isHome, location]);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  useEffect(() => {
    if (!mobileOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMobileOpen(false);
    };

    const handleResize = () => {
      if (window.innerWidth >= 768) setMobileOpen(false);
    };

    document.addEventListener("keydown", handleKeyDown);
    window.addEventListener("resize", handleResize);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("resize", handleResize);
    };
  }, [mobileOpen]);

  const isActive = (item: (typeof navigation)[number]) => {
    if (item.href === "/") {
      return isHome && !activeSection;
    }

    if (item.href === "/work") {
      return isWorkPage;
    }

    if (item.type === "anchor") {
      return isHome && activeSection === item.id;
    }

    return false;
  };

  const linkClass = (active: boolean) =>
    [
      "group relative inline-flex min-h-11 items-center rounded-lg px-2",
      "whitespace-nowrap text-[13px] font-medium transition-all duration-200",
      "focus:outline-none focus-visible:ring-2 focus-visible:ring-primary",
      active ? "text-white" : "text-[#9FA9B8] hover:text-white",
    ].join(" ");

  const handleAnchorClick = (
    event: MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    setMobileOpen(false);

    if (!isHome) return;

    const id = href.split("#")[1];
    const target = document.getElementById(id);

    if (!target) return;

    event.preventDefault();
    window.history.replaceState(null, "", href);
    setActiveSection(id);
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleHomeClick = (event: MouseEvent<HTMLAnchorElement>) => {
    setMobileOpen(false);

    if (!isHome) return;

    event.preventDefault();
    window.history.replaceState(null, "", "/");
    setActiveSection("");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Desktop contact strip */}
      <div className="hidden border-b border-white/[0.04] bg-[#07090D] md:block">
        <div className="container flex h-9 items-center justify-between">
          <div className="flex items-center gap-5">
            <a
              href={`tel:${PHONE.replace(/\s/g, "")}`}
              className="inline-flex items-center gap-2 text-[11px] text-[#7F8999] transition hover:text-white"
            >
              <Phone className="h-3.5 w-3.5 text-[#4F7CFF]" />
              {PHONE}
            </a>

            <span className="h-3 w-px bg-[#202936]" />

            <a
              href={`mailto:${EMAIL}`}
              className="inline-flex items-center gap-2 text-[11px] text-[#7F8999] transition hover:text-white"
            >
              <Mail className="h-3.5 w-3.5 text-[#4F7CFF]" />
              {EMAIL}
            </a>
          </div>

          <div className="flex items-center gap-5">
            <Link
              href="/start-project"
              className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#8C96A6] transition hover:text-white"
            >
              Get a Quote
            </Link>

            <span className="h-3 w-px bg-[#202936]" />

            <Link
              href="/work"
              className={[
                "text-[10px] font-semibold uppercase tracking-[0.14em] transition",
                isWorkPage ? "text-white" : "text-[#8C96A6] hover:text-white",
              ].join(" ")}
              aria-current={isWorkPage ? "page" : undefined}
            >
              Our Work
            </Link>
          </div>
        </div>
      </div>

      {/* Sticky navbar */}
      <div className="px-0 md:px-4 lg:px-5">
        <div
          className={[
            "relative border-b transition-all duration-300",
            "md:rounded-b-2xl md:border-x",
            isScrolled
              ? "border-[#263142] bg-[#0D1118]/95 shadow-[0_16px_45px_rgba(0,0,0,0.34)] backdrop-blur-2xl"
              : "border-[#1B2430] bg-[#0D1118]/92 shadow-[0_12px_32px_rgba(0,0,0,0.22)] backdrop-blur-xl",
          ].join(" ")}
        >
          <div
            className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-[#4F7CFF]/25 to-transparent"
            aria-hidden="true"
          />

          <nav
            className="container flex h-[74px] items-center gap-4"
            aria-label="Main navigation"
          >
            {/* Brand */}
            <Link
              href="/"
              onClick={handleHomeClick}
              aria-label="AI AutomationHub home"
              className="group flex shrink-0 items-center gap-2.5 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4F7CFF] sm:gap-3"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-white/[0.08] bg-[#111720] transition group-hover:border-[#4F7CFF]/40 sm:h-12 sm:w-12">
                <img
                  src={logo}
                  alt=""
                  className="h-9 w-9 object-contain sm:h-10 sm:w-10"
                />
              </div>

              <span className="flex flex-col justify-center">
                <span className="whitespace-nowrap text-[14px] font-semibold tracking-[-0.045em] text-[#F4F7FB] sm:text-base">
                  AI Automation<span className="text-[#7C96FF]">Hub</span>
                </span>

                <span className="mt-1 hidden whitespace-nowrap text-[8px] font-medium uppercase tracking-[0.19em] text-[#778397] sm:block">
                  Business Technology
                </span>
              </span>
            </Link>

            {/* Desktop navigation links */}
            <div className="hidden min-w-0 flex-1 items-center justify-center md:flex">
              <div className="flex items-center gap-1 lg:gap-2">
                {navigation.map((item) => {
                  const active = isActive(item);

                  return (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={(event) => {
                        if (item.href === "/") {
                          handleHomeClick(event);
                        } else if (item.type === "anchor") {
                          handleAnchorClick(event, item.href);
                        }
                      }}
                      className={linkClass(active)}
                      aria-current={active ? "page" : undefined}
                    >
                      {item.label}

                      <span
                        className={[
                          "absolute bottom-0.5 left-1/2 h-[2px] -translate-x-1/2 rounded-full bg-[#4F7CFF] transition-all duration-200",
                          active
                            ? "w-5 opacity-100"
                            : "w-0 opacity-0 group-hover:w-5 group-hover:opacity-100",
                        ].join(" ")}
                        aria-hidden="true"
                      />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* CTA */}
            <Link
              href="/start-project"
              className="hidden shrink-0 items-center gap-2 rounded-xl border border-[#6B8FFF]/30 bg-gradient-to-b from-[#5A83FF] to-[#416CF0] px-3.5 py-3 text-[12px] font-semibold text-white shadow-[0_8px_22px_rgba(79,124,255,0.18)] transition hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(79,124,255,0.28)] lg:inline-flex"
            >
              Start Your Project
              <ArrowRight className="h-4 w-4" />
            </Link>

            {/* Mobile menu toggle */}
            <button
              type="button"
              onClick={() => setMobileOpen((open) => !open)}
              className="ml-auto inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#263142] bg-[#121821] text-white transition hover:border-[#4F7CFF]/35 md:hidden"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              aria-controls="mobile-navigation"
            >
              {mobileOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </nav>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-navigation"
        className={[
          "overflow-hidden border-b border-[#202936] bg-[#0D1118]/98 shadow-[0_18px_40px_rgba(0,0,0,0.35)] backdrop-blur-2xl transition-all duration-300 md:hidden",
          mobileOpen
            ? "max-h-[560px] opacity-100"
            : "pointer-events-none max-h-0 border-transparent opacity-0",
        ].join(" ")}
        aria-hidden={!mobileOpen}
      >
        <div className="container py-3">
          <div className="flex flex-col">
            {navigation.map((item) => {
              const active = isActive(item);

              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(event) => {
                    if (item.href === "/") {
                      handleHomeClick(event);
                    } else if (item.type === "anchor") {
                      handleAnchorClick(event, item.href);
                    } else {
                      setMobileOpen(false);
                    }
                  }}
                  tabIndex={mobileOpen ? 0 : -1}
                  className={[
                    "flex min-h-12 items-center justify-between border-b border-[#202936]/80 text-sm font-medium transition",
                    active ? "text-white" : "text-[#9FA9B8] hover:text-white",
                  ].join(" ")}
                  aria-current={active ? "page" : undefined}
                >
                  {item.label}
                  <ArrowRight className="h-4 w-4 text-[#4F7CFF]" />
                </a>
              );
            })}

            <Link
              href="/work"
              onClick={() => setMobileOpen(false)}
              className="mt-3 inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-[#263142] bg-[#121821] px-4 text-sm font-semibold text-white"
            >
              Our Work
              <ArrowRight className="h-4 w-4" />
            </Link>

            <Link
              href="/start-project"
              onClick={() => setMobileOpen(false)}
              className="mt-3 inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-primary px-4 text-sm font-semibold text-primary-foreground"
            >
              Start Your Project
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
