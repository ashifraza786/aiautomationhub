import {
  ArrowRight,
  ArrowUpRight,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Instagram,
  Sparkles,
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { Link } from "wouter";
import brandLogo from "../../assets/logo-aiautomationhub.webp";

const PHONE = "+91 9262838454";
const PHONE_CLEAN = "+919262838454";
const EMAIL = "helloaiautomationhub@gmail.com";

const WHATSAPP_URL =
  "https://wa.me/919262838454?text=Hello%20AIAutomationHub%2C%20I%20want%20to%20discuss%20a%20project.";

const INSTAGRAM_URL = "https://www.instagram.com/aiautomationhub_03";

const linkClass =
  "group inline-flex items-center gap-2 text-[13px] text-slate-400 transition-colors duration-200 hover:text-white";

const headingClass =
  "text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-200";

export default function Footer() {
  const reduceMotion = useReducedMotion();

  return (
    <footer
      id="site-footer"
      role="contentinfo"
      className="relative isolate overflow-hidden border-t border-white/[0.08] bg-[#0B0E14] text-white"
    >
      {/* Ambient background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute left-[8%] top-[-220px] h-[420px] w-[520px] rounded-full bg-primary/[0.09] blur-[130px]" />
        <div className="absolute right-[-140px] top-[100px] h-[350px] w-[350px] rounded-full bg-violet/[0.055] blur-[120px]" />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.5) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.5) 1px,transparent 1px)",
            backgroundSize: "56px 56px",
            maskImage: "linear-gradient(to bottom,black,transparent 90%)",
          }}
        />
      </div>

      <div className="container relative">
        {/* Contact CTA */}
        <div className="relative -mt-px border-x border-b border-white/[0.08] bg-white/[0.025] px-5 py-7 sm:px-8 md:flex md:items-center md:justify-between md:gap-8 md:px-10 md:py-9">
          <div className="flex items-start gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-primary/25 bg-primary/[0.09] text-primary">
              <Sparkles className="h-5 w-5" strokeWidth={1.6} />
            </div>

            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-primary">
                Have a project in mind?
              </p>

              <h2 className="mt-2 text-xl font-semibold tracking-[-0.03em] text-white sm:text-2xl">
                Let’s build something meaningful.
              </h2>

              <p className="mt-2 max-w-xl text-sm leading-6 text-slate-400">
                Tell us what your business needs. We’ll explore the right
                digital solution together.
              </p>
            </div>
          </div>

          <Link
            href="/start-project"
            className="group mt-6 inline-flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-lg bg-primary px-5 text-sm font-semibold text-primary-foreground shadow-[0_6px_24px_rgba(79,124,255,0.16)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_32px_rgba(79,124,255,0.27)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B0E14] md:mt-0"
          >
            Start Your Project
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Main footer columns */}
        <div className="grid gap-12 py-12 sm:grid-cols-2 sm:gap-10 lg:grid-cols-[1.5fr_0.8fr_0.8fr_1fr] lg:gap-12 lg:py-16">
          {/* Brand */}
          <div className="max-w-sm">
            <Link
              href="/"
              aria-label="AI AutomationHub home"
              className="group inline-flex items-center gap-4"
            >
              {/* Official logo image */}
              <div className="relative flex h-[60px] w-[60px] shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-white/[0.10] bg-[#171B24] p-1.5 shadow-[0_8px_28px_rgba(0,0,0,0.22)] sm:h-[68px] sm:w-[68px]">
                <img
                  src={brandLogo}
                  alt="AI AutomationHub official logo"
                  className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-[1.04]"
                />
              </div>

              {/* Brand name */}
              <span className="whitespace-nowrap text-[19px] font-semibold tracking-[-0.045em] text-white sm:text-[21px]">
                AI Automation
                <span className="bg-gradient-to-r from-[#7891FF] to-[#A1AEFF] bg-clip-text text-transparent">
                  Hub
                </span>
              </span>
            </Link>

            <p className="mt-5 max-w-[330px] text-[13px] leading-7 text-slate-400">
              Business-focused digital solutions, custom software and
              intelligent automation — designed around the way you work.
            </p>

            <div className="mt-6 flex items-center gap-2.5">
              <span className="h-px w-8 bg-primary/70" />
              <span className="text-[9px] font-medium uppercase tracking-[0.2em] text-slate-500">
                Business technology
              </span>
            </div>
          </div>

          {/* Solutions */}
          <nav aria-label="Footer solutions">
            <h3 className={headingClass}>Solutions</h3>
            <ul className="mt-6 space-y-4">
              <li>
                <Link className={linkClass} href="/solutions/ai-automation">
                  AI Automation
                  <ArrowUpRight className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-70" />
                </Link>
              </li>
              <li>
                <Link className={linkClass} href="/solutions/custom-software">
                  Custom Software
                  <ArrowUpRight className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-70" />
                </Link>
              </li>
              <li>
                <Link
                  className={linkClass}
                  href="/solutions/erp-business-systems"
                >
                  ERP &amp; Business Systems
                  <ArrowUpRight className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-70" />
                </Link>
              </li>
              <li>
                <Link
                  className={linkClass}
                  href="/solutions/websites-digital-solutions"
                >
                  Websites &amp; Digital
                  <ArrowUpRight className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-70" />
                </Link>
              </li>
              <li>
                <Link className={linkClass} href="/solutions/business-growth">
                  Business Growth
                  <ArrowUpRight className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-70" />
                </Link>
              </li>
            </ul>
          </nav>

          {/* Explore */}
          <nav aria-label="Footer company links">
            <h3 className={headingClass}>Explore</h3>
            <ul className="mt-6 space-y-4">
              <li>
                <Link className={linkClass} href="/technology">
                  Technology
                </Link>
              </li>
              <li>
                <Link className={linkClass} href="/work">
                  Selected Work
                </Link>
              </li>
              <li>
                <Link className={linkClass} href="/process">
                  Our Process
                </Link>
              </li>
              <li>
                <Link className={linkClass} href="/about">
                  About Us
                </Link>
              </li>
              <li>
                <Link className={linkClass} href="/start-project">
                  Start a Project
                </Link>
              </li>
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h3 className={headingClass}>Get in touch</h3>

            <div className="mt-6 space-y-5">
              <a
                href={`tel:${PHONE_CLEAN}`}
                className="group flex items-start gap-3"
                aria-label={`Call ${PHONE}`}
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.035] text-slate-400 transition-colors group-hover:border-primary/30 group-hover:text-primary">
                  <Phone className="h-4 w-4" />
                </span>
                <span className="min-w-0 pt-1">
                  <span className="block text-[10px] uppercase tracking-[0.12em] text-slate-500">
                    Call us
                  </span>
                  <span className="mt-1 block break-words text-[12px] text-slate-300 transition-colors group-hover:text-white">
                    {PHONE}
                  </span>
                </span>
              </a>

              <a
                href={`mailto:${EMAIL}?subject=Project%20Inquiry`}
                className="group flex items-start gap-3"
                aria-label={`Email ${EMAIL}`}
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.035] text-slate-400 transition-colors group-hover:border-primary/30 group-hover:text-primary">
                  <Mail className="h-4 w-4" />
                </span>
                <span className="min-w-0 pt-1">
                  <span className="block text-[10px] uppercase tracking-[0.12em] text-slate-500">
                    Email us
                  </span>
                  <span className="mt-1 block break-all text-[12px] leading-5 text-slate-300 transition-colors group-hover:text-white">
                    {EMAIL}
                  </span>
                </span>
              </a>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-3"
                aria-label="Chat with AI AutomationHub on WhatsApp"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.035] text-slate-400 transition-colors group-hover:border-mint/30 group-hover:text-mint">
                  <MessageCircle className="h-4 w-4" />
                </span>
                <span className="pt-1">
                  <span className="block text-[10px] uppercase tracking-[0.12em] text-slate-500">
                    Quick conversation
                  </span>
                  <span className="mt-1 block text-[12px] text-slate-300 transition-colors group-hover:text-white">
                    Chat on WhatsApp
                  </span>
                </span>
              </a>

              <div className="flex items-start gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.035] text-slate-400">
                  <MapPin className="h-4 w-4" />
                </span>
                <span className="pt-1">
                  <span className="block text-[10px] uppercase tracking-[0.12em] text-slate-500">
                    Based in
                  </span>
                  <span className="mt-1 block text-[12px] text-slate-300">
                    India
                  </span>
                </span>
              </div>
            </div>

            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow AI AutomationHub on Instagram"
              className="mt-6 inline-flex h-10 items-center gap-2 rounded-lg border border-white/[0.09] bg-white/[0.025] px-3.5 text-xs text-slate-300 transition-all duration-200 hover:border-primary/30 hover:bg-primary/[0.06] hover:text-white"
            >
              <Instagram className="h-4 w-4" />
              @aiautomationhub_03
              <ArrowUpRight className="h-3 w-3 text-slate-500" />
            </a>
          </div>
        </div>

        {/* Copyright bar */}
        <div className="flex flex-col gap-4 border-t border-white/[0.09] py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[11px] text-slate-500">
            © {new Date().getFullYear()} AI AutomationHub. All rights reserved.
          </p>
          <p className="flex items-center gap-2 text-[11px] text-slate-500 sm:text-right">
            Built around your business.
            <span className="h-1 w-1 rounded-full bg-primary" />
            Designed for what’s next.
          </p>
        </div>
      </div>

      {/* Animated brand signature — directly above copyright */}
      <div className="relative mb-8 overflow-hidden border-t border-white/[0.07] py-10 sm:mb-10 sm:py-14 lg:py-16">
        <motion.div
          aria-hidden="true"
          animate={{ opacity: [0.12, 0.3, 0.12] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="pointer-events-none absolute left-1/2 top-1/2 h-48 w-3/4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[90px]"
        />

        <div className="relative mx-auto flex items-center justify-center gap-3 px-3 sm:gap-6">
          <motion.div
            animate={reduceMotion ? undefined : { y: [0, -2, 0] }}
            transition={{
              duration: 5,
              repeat: reduceMotion ? 0 : Infinity,
              ease: "easeInOut",
            }}
            className="relative h-14 w-14 shrink-0 overflow-visible rounded-2xl border border-white/10 bg-[#171B24] p-1.5 sm:h-[76px] sm:w-[76px] sm:p-2"
          >
            <img
              src={brandLogo}
              alt="AI AutomationHub logo"
              className="h-full w-full rounded-xl object-contain"
            />
            <span className="absolute -right-1 -top-1 h-3 w-3 rounded-full bg-primary shadow-[0_0_16px_rgba(99,123,255,.75)]" />
          </motion.div>

          <div className="min-w-0">
            <div className="whitespace-nowrap text-[clamp(20px,5vw,64px)] font-semibold leading-tight tracking-[-0.065em] text-white">
              AI Automation
              <span className="bg-gradient-to-r from-[#7891FF] to-[#A1AEFF] bg-clip-text text-transparent">
                Hub
              </span>
            </div>

            <div className="mt-2 flex items-center gap-2">
              <span className="h-px w-5 bg-primary/70 sm:w-8" />
              <span className="text-[7px] uppercase tracking-[0.18em] text-slate-500 sm:text-[9px] sm:tracking-[0.25em]">
                Business Technology
              </span>
              <span className="h-px w-5 bg-primary/30 sm:w-8" />
            </div>
          </div>
        </div>

        <div
          aria-hidden="true"
          className="pointer-events-none mt-8 overflow-hidden text-center sm:mt-10"
        >
          <motion.div
            animate={reduceMotion ? undefined : { opacity: [0.22, 0.35, 0.22] }}
            transition={{
              duration: 9,
              repeat: reduceMotion ? 0 : Infinity,
              ease: "easeInOut",
            }}
            className="whitespace-nowrap bg-gradient-to-r from-[#303B25] via-[#4A5C2B] to-[#29334B] bg-clip-text text-[14vw] font-bold leading-[0.85] tracking-[-0.085em] text-transparent"
          >
            AutomationHub
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
