import { useEffect, useState } from "react";
import { Link, useLocation } from "wouter";
import { ArrowRight, Menu, X } from "lucide-react";

const navigation = [
  { label: "Solutions", href: "/solutions" },
  { label: "Technology", href: "/technology" },
  { label: "Work", href: "/work" },
  { label: "Process", href: "/process" },
  { label: "About", href: "/about" },
];

export default function Navbar() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 12);
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
    <header
      className={[
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        isScrolled
          ? "border-b border-border/80 bg-background/80 backdrop-blur-xl"
          : "bg-transparent",
      ].join(" ")}
    >
      <nav
        className="container flex h-16 items-center justify-between md:h-[72px]"
        aria-label="Main navigation"
      >
        {/* Brand */}
        <Link
          href="/"
          className="group inline-flex min-h-11 items-center gap-2 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          aria-label="AI AutomationHub home"
        >
          <span className="text-[18px] font-semibold tracking-[-0.02em] text-foreground transition-colors duration-200 group-hover:text-primary">
            <span className="text-primary">AI</span>
            <span> AutomationHub</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-7 md:flex lg:gap-8">
          {navigation.map((item) => {
            const active = isActive(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={[
                  "group relative inline-flex min-h-11 items-center rounded-md px-1 text-[14px] font-medium transition-colors duration-200",
                  "focus:outline-none focus-visible:ring-2 focus-visible:ring-primary",
                  active
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground",
                ].join(" ")}
                aria-current={active ? "page" : undefined}
              >
                {item.label}

                <span
                  className={[
                    "absolute bottom-1 left-1/2 h-px -translate-x-1/2 transition-all duration-200",
                    active
                      ? "w-5 bg-primary"
                      : "w-0 bg-primary group-hover:w-5",
                  ].join(" ")}
                  aria-hidden="true"
                />
              </Link>
            );
          })}
        </div>

        {/* Desktop CTA */}
        <Link
          href="/start-project"
          className="hidden h-11 items-center gap-2 rounded-lg bg-primary px-5 text-[14px] font-semibold text-primary-foreground shadow-[0_0_28px_rgba(79,124,255,0.12)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary/95 hover:shadow-[0_0_34px_rgba(79,124,255,0.22)] focus:outline-none focus-visible:ring-2 focus-visible:ring-primary md:inline-flex"
        >
          Start Your Project
          <ArrowRight
            className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
            aria-hidden="true"
          />
        </Link>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMobileOpen((open) => !open)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-border/80 bg-surface/70 text-foreground transition-colors duration-200 hover:bg-elevated focus:outline-none focus-visible:ring-2 focus-visible:ring-primary md:hidden"
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

      {/* Mobile Navigation */}
      <div
        id="mobile-navigation"
        className={[
          "overflow-hidden border-b border-border/80 bg-background/95 backdrop-blur-xl transition-all duration-250 md:hidden",
          mobileOpen
            ? "max-h-[520px] opacity-100"
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
                    "flex min-h-12 items-center justify-between border-b border-border/60 text-[15px] font-medium transition-colors duration-200",
                    active
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground",
                  ].join(" ")}
                  aria-current={active ? "page" : undefined}
                >
                  <span>{item.label}</span>

                  <span
                    className={[
                      "h-1.5 w-1.5 rounded-full transition-all duration-200",
                      active ? "bg-primary" : "bg-transparent",
                    ].join(" ")}
                    aria-hidden="true"
                  />
                </Link>
              );
            })}

            <Link
              href="/start-project"
              className="mt-4 flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-primary px-5 text-[14px] font-semibold text-primary-foreground transition-all duration-200 hover:bg-primary/95 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              Start Your Project
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
