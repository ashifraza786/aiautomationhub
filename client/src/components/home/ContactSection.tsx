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
    "mt-2 w-full rounded-xl border border-white/10 bg-[#101217] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-slate-500 hover:border-white/20 focus:border-[#6683FF] focus:ring-2 focus:ring-[#6683FF]/20";

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative overflow-hidden border-t border-white/[0.07] bg-[#0D0F13] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-10 h-80 w-80 rounded-full bg-[#6683FF]/[0.07] blur-[100px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[#6683FF]/[0.06] blur-[120px]"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        {/* Editorial introduction */}
        <div className="max-w-xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#6683FF]/20 bg-[#6683FF]/[0.08] px-3.5 py-2 text-xs font-semibold tracking-[0.16em] text-[#8DA2FF]">
            <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
            LET’S TALK
          </div>

          <h2
            id="contact-heading"
            className="text-4xl font-semibold leading-[1.08] tracking-[-0.045em] text-white sm:text-5xl lg:text-6xl"
          >
            Ready to make
            <br />
            work work
            <br />
            <span className="text-[#7188FF]">smarter?</span>
          </h2>

          <p className="mt-6 max-w-lg text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">
            Tell us what is slowing your team down. We’ll help you find the
            right way to build, improve or automate your business.
          </p>

          <div className="mt-9 space-y-4">
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="group inline-flex items-center gap-3 text-sm text-slate-300 transition hover:text-white"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-[#8195FF]">
                <Mail className="h-4 w-4" aria-hidden="true" />
              </span>
              <span>{CONTACT_EMAIL}</span>
              <ArrowUpRight
                className="h-4 w-4 text-slate-500 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white"
                aria-hidden="true"
              />
            </a>

            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 text-sm text-slate-300 transition hover:text-white"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-[#8195FF]">
                <Phone className="h-4 w-4" aria-hidden="true" />
              </span>
              <span>Chat with us on WhatsApp</span>
              <ArrowUpRight
                className="h-4 w-4 text-slate-500 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white"
                aria-hidden="true"
              />
            </a>
          </div>

          <div className="mt-10 flex items-center gap-3 border-t border-white/[0.08] pt-6">
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-emerald-400/20 bg-emerald-400/[0.08]">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            <p className="text-xs leading-5 text-slate-400 sm:text-sm">
              Built around your business. Designed for what comes next.
            </p>
          </div>
        </div>

        {/* Contact form */}
        <div className="relative">
          <div
            aria-hidden="true"
            className="absolute -right-2 -top-2 h-full w-full rounded-2xl border border-[#6683FF]/20"
          />

          <div className="relative rounded-2xl border border-white/[0.1] bg-[#15181F] p-5 shadow-[0_24px_80px_rgba(0,0,0,0.28)] sm:p-8 lg:p-9">
            <div className="mb-8 flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-semibold tracking-[0.16em] text-[#8195FF]">
                  YOUR NEXT STEP
                </p>
                <h3 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                  Start a conversation
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Share a little about your project. We’ll take it from there.
                </p>
              </div>
              <div className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#6683FF]/20 bg-[#6683FF]/[0.08] text-[#8195FF] sm:flex">
                <MessageCircle className="h-5 w-5" aria-hidden="true" />
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="text-sm font-medium text-slate-200"
                  >
                    Name <span className="text-[#8195FF]">*</span>
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
                    className="text-sm font-medium text-slate-200"
                  >
                    Work email <span className="text-[#8195FF]">*</span>
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
                  className="text-sm font-medium text-slate-200"
                >
                  Company <span className="text-slate-500">(optional)</span>
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
                  className="text-sm font-medium text-slate-200"
                >
                  What can we help you build or automate?{" "}
                  <span className="text-[#8195FF]">*</span>
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
                className="group flex min-h-14 w-full items-center justify-center gap-3 rounded-xl bg-[#6683FF] px-6 py-4 text-sm font-semibold text-white shadow-[0_8px_30px_rgba(102,131,255,0.18)] transition duration-200 hover:-translate-y-0.5 hover:bg-[#7891FF] hover:shadow-[0_12px_36px_rgba(102,131,255,0.25)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#9AABFF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#15181F]"
              >
                Continue on WhatsApp
                <ArrowUpRight
                  className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </button>

              <p className="text-center text-xs leading-5 text-slate-500">
                Your message opens in WhatsApp for you to review and send.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
