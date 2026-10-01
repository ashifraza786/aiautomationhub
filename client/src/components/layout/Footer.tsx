import { ArrowRight, Mail, MessageSquare, Phone } from "lucide-react";
import { Link } from "wouter";

const PHONE = "+91 7484821896";
const PHONE_CLEAN = "917484821896";
const EMAIL = "team.afi.consultant@gmail.com";
const WHATSAPP_URL =
  "https://wa.me/917484821896?text=Hello%20AIAutomationHub%2C%20I%20want%20to%20discuss%20a%20project.";
const INSTAGRAM_URL = "https://www.instagram.com/aiautomationhub_03";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface" role="contentinfo">
      <div className="container py-16 md:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          {/* Brand */}
          <div className="max-w-sm">
            <Link
              href="/"
              className="inline-flex items-center gap-2"
              aria-label="AI AutomationHub home"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                <span className="text-sm font-bold text-primary-foreground">
                  AI
                </span>
              </div>

              <span className="text-lg font-semibold tracking-tight text-foreground">
                <span className="text-primary">AI</span>
                AutomationHub
              </span>
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-6 text-muted-foreground">
              We build technology around your business — from websites and
              custom software to ERP systems and intelligent automation.
            </p>

            <Link
              href="/start-project"
              className="mt-6 inline-flex h-11 items-center gap-2 rounded-lg bg-primary px-5 text-sm font-semibold text-primary-foreground transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary/95 hover:shadow-[0_0_30px_rgba(79,124,255,0.18)]"
            >
              Start Your Project
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          {/* Solutions */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-primary">
              Solutions
            </p>

            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <Link
                  href="/solutions/ai-automation"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  AI Automation
                </Link>
              </li>
              <li>
                <Link
                  href="/solutions/custom-software"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  Custom Software
                </Link>
              </li>
              <li>
                <Link
                  href="/solutions/erp-business-systems"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  ERP & Business Systems
                </Link>
              </li>
              <li>
                <Link
                  href="/solutions/websites-digital-solutions"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  Websites & Digital Solutions
                </Link>
              </li>
              <li>
                <Link
                  href="/solutions/business-growth"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  Business Growth
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-primary">
              Company
            </p>

            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <Link
                  href="/work"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  Selected Work
                </Link>
              </li>
              <li>
                <Link
                  href="/process"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  How We Work
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/technology"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  Technology
                </Link>
              </li>
              <li>
                <Link
                  href="/start-project"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  Start a Project
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-primary">
              Contact
            </p>

            <div className="mt-5 space-y-4">
              <a
                href={`tel:${PHONE_CLEAN}`}
                className="flex items-start gap-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
                aria-label={`Call us at ${PHONE}`}
              >
                <Phone
                  className="mt-0.5 h-4 w-4 shrink-0 text-primary"
                  aria-hidden="true"
                />
                <span>{PHONE}</span>
              </a>

              <a
                href={`mailto:${EMAIL}?subject=Project%20Inquiry`}
                className="flex items-start gap-3 break-all text-sm text-muted-foreground transition-colors hover:text-foreground"
                aria-label={`Email us at ${EMAIL}`}
              >
                <Mail
                  className="mt-0.5 h-4 w-4 shrink-0 text-primary"
                  aria-hidden="true"
                />
                <span>{EMAIL}</span>
              </a>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
                aria-label="Chat with us on WhatsApp"
              >
                <MessageSquare
                  className="mt-0.5 h-4 w-4 shrink-0 text-primary"
                  aria-hidden="true"
                />
                <span>WhatsApp</span>
              </a>

              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                aria-label="Follow AI AutomationHub on Instagram"
              >
                @aiautomationhub_03
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col gap-4 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 AIAutomationHub. All rights reserved.</p>

          <p className="max-w-xl sm:text-right">
            Technology should solve problems — not create more.
          </p>
        </div>
      </div>
    </footer>
  );
}
