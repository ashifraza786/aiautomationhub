import { useState, type FormEvent } from "react";
import {
  ArrowUpRight,
  Mail,
  Phone,
  MessageCircle,
  Sparkles,
} from "lucide-react";

const WHATSAPP_NUMBER = "919262838454";
const CONTACT_EMAIL = "helloaiautomationhub@gmail.com";

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    requirement: "",
  });

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const message = [
      "Hello AI AutomationHub, I'd like to discuss a project.",
      "",
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Company: ${form.company || "Not provided"}`,
      "",
      "What I'd like to build or automate:",
      form.requirement,
    ].join("\n");

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      message,
    )}`;

    window.open(url, "_blank", "noopener,noreferrer");
  }

  const inputClass =
    "mt-2 w-full rounded-xl border border-[#DDD6C9] bg-[#F4F0E8] px-4 py-3.5 text-sm text-[#24231F] outline-none transition placeholder:text-[#8B857A] hover:border-[#004225]/40 focus:border-[#004225] focus:ring-2 focus:ring-[#004225]/10";

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative overflow-hidden border-t border-[#DDD6C9] bg-[#F4F0E8] px-5 py-16 font-sans text-[#24231F] sm:px-8 sm:py-20 lg:px-12 lg:py-24"
    >
      {/* Subtle brand detail */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-10 h-80 w-80 rounded-full bg-[#004225]/[0.035] blur-3xl"
      />

      <div className="relative mx-auto grid max-w-7xl items-start gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        {/* Left: Contact introduction */}
        <div className="max-w-xl pt-1 lg:pt-8">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#DDD6C9] bg-white px-3.5 py-2 text-xs font-semibold tracking-[0.16em] text-[#004225]">
            <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
            LET’S TALK
          </div>

          <h2
            id="contact-heading"
            className="text-4xl font-semibold leading-[1.08] tracking-[-0.045em] text-[#24231F] sm:text-5xl lg:text-6xl"
          >
            Ready to make
            <br />
            work work
            <br />
            <span className="text-[#004225]">smarter?</span>
          </h2>

          <p className="mt-6 max-w-lg text-base leading-7 text-[#5F5B53] sm:text-lg sm:leading-8">
            Tell us what is slowing your team down. We’ll help you find the
            right way to build, improve or automate your business.
          </p>

          {/* Direct contact links */}
          <div className="mt-9 space-y-4">
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="group inline-flex max-w-full items-center gap-3 text-sm text-[#24231F] transition hover:text-[#004225] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#004225] focus-visible:ring-offset-2"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#DDD6C9] bg-white text-[#004225] transition group-hover:border-[#004225]/30 group-hover:bg-[#EAE5DB]">
                <Mail className="h-4 w-4" aria-hidden="true" />
              </span>

              <span className="break-all">{CONTACT_EMAIL}</span>

              <ArrowUpRight
                className="h-4 w-4 shrink-0 text-[#5F5B53] transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#004225]"
                aria-hidden="true"
              />
            </a>

            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 text-sm text-[#24231F] transition hover:text-[#004225] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#004225] focus-visible:ring-offset-2"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#DDD6C9] bg-white text-[#004225] transition group-hover:border-[#004225]/30 group-hover:bg-[#EAE5DB]">
                <Phone className="h-4 w-4" aria-hidden="true" />
              </span>

              <span>Chat with us on WhatsApp</span>

              <ArrowUpRight
                className="h-4 w-4 shrink-0 text-[#5F5B53] transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#004225]"
                aria-hidden="true"
              />
            </a>
          </div>

          {/* Brand statement */}
          <div className="mt-10 flex items-center gap-3 border-t border-[#DDD6C9] pt-6">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#DDD6C9] bg-white">
              <span className="h-2.5 w-2.5 rounded-full bg-[#004225]" />
            </span>

            <p className="text-sm leading-6 text-[#5F5B53]">
              Built around your business. Designed for what comes next.
            </p>
          </div>
        </div>

        {/* Right: Contact form */}
        <div className="relative min-w-0">
          <div
            aria-hidden="true"
            className="absolute -right-2 -top-2 h-full w-full rounded-2xl border border-[#DDD6C9]"
          />

          <div className="relative rounded-2xl border border-[#DDD6C9] bg-white p-5 shadow-[0_16px_48px_rgba(36,35,31,0.055)] sm:p-7 lg:p-9">
            <div className="mb-8 flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-semibold tracking-[0.16em] text-[#004225]">
                  YOUR NEXT STEP
                </p>

                <h3 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-[#24231F] sm:text-3xl">
                  Start a conversation
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#5F5B53]">
                  Share a little about your project. We’ll take it from there.
                </p>
              </div>

              <div className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#DDD6C9] bg-[#F4F0E8] text-[#004225] sm:flex">
                <MessageCircle className="h-5 w-5" aria-hidden="true" />
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="text-sm font-medium text-[#24231F]"
                  >
                    Name <span className="text-[#004225]">*</span>
                  </label>

                  <input
                    id="contact-name"
                    name="name"
                    autoComplete="name"
                    required
                    maxLength={100}
                    value={form.name}
                    onChange={(event) =>
                      setForm({ ...form, name: event.target.value })
                    }
                    placeholder="Your name"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="text-sm font-medium text-[#24231F]"
                  >
                    Work email <span className="text-[#004225]">*</span>
                  </label>

                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    maxLength={254}
                    value={form.email}
                    onChange={(event) =>
                      setForm({ ...form, email: event.target.value })
                    }
                    placeholder="you@company.com"
                    className={inputClass}
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="contact-company"
                  className="text-sm font-medium text-[#24231F]"
                >
                  Company{" "}
                  <span className="font-normal text-[#5F5B53]">(optional)</span>
                </label>

                <input
                  id="contact-company"
                  name="company"
                  autoComplete="organization"
                  maxLength={150}
                  value={form.company}
                  onChange={(event) =>
                    setForm({ ...form, company: event.target.value })
                  }
                  placeholder="Your company"
                  className={inputClass}
                />
              </div>

              <div>
                <label
                  htmlFor="contact-requirement"
                  className="text-sm font-medium text-[#24231F]"
                >
                  What can we help you build or automate?{" "}
                  <span className="text-[#004225]">*</span>
                </label>

                <textarea
                  id="contact-requirement"
                  name="requirement"
                  required
                  minLength={10}
                  maxLength={3000}
                  rows={4}
                  value={form.requirement}
                  onChange={(event) =>
                    setForm({ ...form, requirement: event.target.value })
                  }
                  placeholder="Tell us about the challenge, workflow or idea..."
                  className={`${inputClass} min-h-32 resize-y`}
                />
              </div>

              <button
                type="submit"
                className="group flex min-h-14 w-full items-center justify-center gap-3 rounded-xl bg-[#004225] px-6 py-4 text-sm font-semibold text-white transition duration-200 hover:-translate-y-0.5 hover:bg-[#00351E] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#004225] focus-visible:ring-offset-2"
              >
                Continue on WhatsApp
                <ArrowUpRight
                  className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </button>

              <p className="text-center text-xs leading-5 text-[#5F5B53]">
                Your message opens in WhatsApp for you to review and send.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
