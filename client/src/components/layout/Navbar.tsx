import { useEffect, useState } from "react";
import { Link, useLocation } from "wouter";
import { ArrowRight, Mail, Menu, Phone, X } from "lucide-react";

const navigation = [
  { label: "Solutions", href: "/solutions" },
  { label: "Technology", href: "/technology" },
  { label: "Work", href: "/work" },
  { label: "Process", href: "/process" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/start-project" },
];

const PHONE = "+91 7484821896";
const EMAIL = "team.afi.consultant@gmail.com";

export default function Navbar() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 16);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  useEffect(() => {
    if (!mobileOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileOpen(false);
      }
    };

    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    window.addEventListener("resize", handleResize);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("resize", handleResize);
    };
  }, [mobileOpen]);

  const isActive = (href: string) => {
    if (href === "/") {
      return location === "/";
    }

    return location === href || location.startsWith(`${href}/`);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* ============================================================
          UTILITY BAR
         ============================================================ */}
      <div className="hidden md:block">
        <div className="border-b border-white/[0.04] bg-[#07090D]">
          <div className="container flex h-9 items-center justify-between">
            <div className="flex items-center gap-5">
              <a
                href={`tel:${PHONE.replace(/\s/g, "")}`}
                className="group inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.01em] text-[#7F8999] transition-colors duration-200 hover:text-[#F4F7FB]"
              >
                <Phone
                  className="h-3.5 w-3.5 text-[#4F7CFF] transition-transform duration-200 group-hover:scale-110"
                  aria-hidden="true"
                />
                <span>{PHONE}</span>
              </a>

              <span className="h-3 w-px bg-[#202936]" aria-hidden="true" />

              <a
                href={`mailto:${EMAIL}`}
                className="group inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.01em] text-[#7F8999] transition-colors duration-200 hover:text-[#F4F7FB]"
              >
                <Mail
                  className="h-3.5 w-3.5 text-[#4F7CFF] transition-transform duration-200 group-hover:scale-110"
                  aria-hidden="true"
                />
                <span>{EMAIL}</span>
              </a>
            </div>

            <div className="flex items-center gap-5 text-[10px] font-semibold uppercase tracking-[0.16em]">
              <Link
                href="/start-project"
                className="text-[#8C96A6] transition-colors duration-200 hover:text-[#F4F7FB]"
              >
                Get a Quote
              </Link>

              <span className="h-3 w-px bg-[#202936]" aria-hidden="true" />

              <Link
                href="/work"
                className="text-[#8C96A6] transition-colors duration-200 hover:text-[#F4F7FB]"
              >
                Our Work
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ============================================================
          PREMIUM 3D NAVIGATION LAYER
         ============================================================ */}
      <div className="px-0 md:px-4 lg:px-5">
        <div
          className={[
            "relative border-b transition-all duration-500",
            "md:rounded-b-2xl md:border-x",
            isScrolled
              ? [
                  "border-[#263142]",
                  "bg-[#0D1118]/95",
                  "shadow-[0_16px_45px_rgba(0,0,0,0.34),0_2px_0_rgba(79,124,255,0.05)]",
                  "backdrop-blur-2xl",
                ].join(" ")
              : [
                  "border-[#1B2430]",
                  "bg-[#0D1118]/92",
                  "shadow-[0_12px_32px_rgba(0,0,0,0.22),0_1px_0_rgba(255,255,255,0.025)_inset]",
                  "backdrop-blur-xl",
                ].join(" "),
          ].join(" ")}
        >
          {/* Top inner highlight */}
          <div
            className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-[#4F7CFF]/25 to-transparent"
            aria-hidden="true"
          />

          <nav
            className="container flex h-[74px] items-center gap-6"
            aria-label="Main navigation"
          >
            {/* ======================================================
                LOGO / BRAND
               ====================================================== */}
            <Link
              href="/"
              className="group relative flex min-h-11 shrink-0 items-center rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              aria-label="AI AutomationHub home"
            >
              <div className="relative flex items-center rounded-lg border border-white/[0.045] bg-white/[0.015] px-2 py-1 shadow-[0_4px_18px_rgba(0,0,0,0.18)] transition-all duration-300 group-hover:border-[#4F7CFF]/20 group-hover:bg-[#4F7CFF]/[0.035]">
                <img
                  src="/logo-automationhub.webp"
                  alt="AI AutomationHub"
                  className="block h-9 w-auto max-w-[190px] object-contain object-left"
                />
              </div>
            </Link>

            {/* ======================================================
                DESKTOP NAVIGATION
               ====================================================== */}
            <div className="hidden min-w-0 flex-1 items-center justify-center md:flex">
              <div className="flex items-center gap-5 lg:gap-7">
                {navigation.map((item) => {
                  const active = isActive(item.href);

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={[
                        "group relative inline-flex min-h-11 items-center rounded-lg px-2 text-[14px] font-medium whitespace-nowrap",
                        "transition-all duration-250",
                        "focus:outline-none focus-visible:ring-2 focus-visible:ring-primary",
                        active
                          ? "text-[#F4F7FB]"
                          : "text-[#9FA9B8] hover:-translate-y-px hover:text-[#F4F7FB]",
                      ].join(" ")}
                      aria-current={active ? "page" : undefined}
                    >
                      <span>{item.label}</span>

                      {/* Active / hover depth line */}
                      <span
                        className={[
                          "absolute bottom-0.5 left-1/2 h-[2px] -translate-x-1/2 rounded-full bg-[#4F7CFF]",
                          "shadow-[0_0_10px_rgba(79,124,255,0.55)] transition-all duration-250",
                          active
                            ? "w-6 opacity-100"
                            : "w-0 opacity-0 group-hover:w-6 group-hover:opacity-100",
                        ].join(" ")}
                        aria-hidden="true"
                      />
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* ======================================================
                PREMIUM CTA
               ====================================================== */}
            <Link
              href="/start-project"
              className={[
                "group hidden shrink-0 items-center gap-2 rounded-xl",
                "border border-[#6B8FFF]/30",
                "bg-gradient-to-b from-[#5A83FF] to-[#416CF0]",
                "px-5 py-3 text-[14px] font-semibold text-white",
                "shadow-[0_8px_22px_rgba(79,124,255,0.18),0_1px_0_rgba(255,255,255,0.18)_inset]",
                "transition-all duration-250",
                "hover:-translate-y-0.5",
                "hover:border-[#7B9AFF]/45",
                "hover:from-[#648BFF] hover:to-[#4A73F5]",
                "hover:shadow-[0_12px_30px_rgba(79,124,255,0.28),0_1px_0_rgba(255,255,255,0.2)_inset]",
                "active:translate-y-0",
                "focus:outline-none focus-visible:ring-2 focus-visible:ring-primary",
                "md:inline-flex",
              ].join(" ")}
            >
              <span>Start Your Project</span>

              <ArrowRight
                className="h-4 w-4 transition-transform duration-250 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>

            {/* ======================================================
                MOBILE MENU
               ====================================================== */}
            <button
              type="button"
              onClick={() => setMobileOpen((open) => !open)}
              className="ml-auto inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#263142] bg-[#121821] text-[#F4F7FB] shadow-[0_6px_18px_rgba(0,0,0,0.2)] transition-all duration-200 hover:border-[#4F7CFF]/35 hover:bg-[#171F2A] focus:outline-none focus-visible:ring-2 focus-visible:ring-primary md:hidden"
              aria-label={
                mobileOpen ? "Close navigation menu" : "Open navigation menu"
              }
              aria-expanded={mobileOpen}
              aria-controls="mobile-navigation"
            >
              {mobileOpen ? (
                <X className="h-5 w-5" aria-hidden="true" />
              ) : (
                <Menu className="h-5 w-5" aria-hidden="true" />
              )}
            </button>
          </nav>
        </div>
      </div>

      {/* ============================================================
          MOBILE NAVIGATION
         ============================================================ */}
      <div
        id="mobile-navigation"
        className={[
          "mx-0 overflow-hidden border-b border-[#202936] bg-[#0D1118]/98 shadow-[0_18px_40px_rgba(0,0,0,0.35)] backdrop-blur-2xl transition-all duration-250 md:hidden",
          mobileOpen
            ? "max-h-[620px] opacity-100"
            : "pointer-events-none max-h-0 border-transparent opacity-0",
        ].join(" ")}
        aria-hidden={!mobileOpen}
      >
        <div className="container py-4">
          <div className="flex flex-col">
            {navigation.map((item) => {
              const active = isActive(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={[
                    "flex min-h-12 items-center justify-between border-b border-[#202936]/80 text-[15px] font-medium transition-all duration-200",
                    active
                      ? "text-[#F4F7FB]"
                      : "text-[#9FA9B8] hover:translate-x-1 hover:text-[#F4F7FB]",
                  ].join(" ")}
                  aria-current={active ? "page" : undefined}
                >
                  <span>{item.label}</span>

                  <span
                    className={[
                      "h-1.5 w-1.5 rounded-full transition-all duration-200",
                      active
                        ? "bg-[#4F7CFF] shadow-[0_0_8px_rgba(79,124,255,0.65)]"
                        : "bg-transparent",
                    ].join(" ")}
                    aria-hidden="true"
                  />
                </Link>
              );
            })}

            <Link
              href="/start-project"
              className="mt-4 flex h-12 w-full items-center justify-center gap-2 rounded-xl border border-[#6B8FFF]/30 bg-gradient-to-b from-[#5A83FF] to-[#416CF0] px-5 text-[14px] font-semibold text-white shadow-[0_8px_24px_rgba(79,124,255,0.18)] transition-all duration-200 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              <span>Start Your Project</span>

              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
