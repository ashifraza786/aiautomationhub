import {
  ArrowUpRight,
  Instagram,
  Linkedin,
  Youtube,
  Users,
} from "lucide-react";

const teamMembers = [
  { name: "Team Member 01", role: "AI & Automation", initials: "01" },
  { name: "Team Member 02", role: "Development & Engineering", initials: "02" },
  { name: "Team Member 03", role: "Strategy & Growth", initials: "03" },
];

const socialLinks = [
  { name: "Instagram", href: "https://www.instagram.com/", icon: Instagram },
  { name: "YouTube", href: "https://www.youtube.com/", icon: Youtube },
  { name: "LinkedIn", href: "https://www.linkedin.com/", icon: Linkedin },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative isolate overflow-hidden bg-[#080b14] px-5 py-16 text-white sm:px-8 lg:px-12 lg:py-20"
    >
      {/* Background accents */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-violet-600/10 blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-1/3 h-96 w-96 rounded-full bg-blue-600/10 blur-[140px]"
      />

      <div className="relative mx-auto max-w-7xl">
        {/* Founder: image on left, content on right */}
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
          {/* LEFT: Founder image, details and social links */}
          <div className="min-w-0">
            <div className="relative mx-auto w-full max-w-md lg:mx-0">
              <div className="absolute -bottom-3 -right-3 h-full w-full rounded-2xl bg-[#6578ff]" />

              <div className="relative aspect-[4/4.3] overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#17172d] via-[#10172a] to-[#0b1020]">
                <img
                  src="/images/founder.jpg"
                  alt="Founder of AI AutomationHub"
                  className="absolute inset-0 z-10 h-full w-full object-cover object-center"
                  onError={(event) => {
                    event.currentTarget.style.display = "none";
                  }}
                />

                {/* Fallback when founder photo is unavailable */}
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-gradient-to-br from-violet-950/70 via-[#11182c] to-blue-950/60 p-6 text-center">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full border border-white/15 bg-white/[0.06] text-2xl font-semibold text-violet-200">
                    AI
                  </div>
                  <div>
                    <p className="text-lg font-medium text-white">
                      Founder photo
                    </p>
                    <p className="mt-1 text-sm text-slate-400">
                      Replace with your portrait
                    </p>
                  </div>
                </div>

                <div className="absolute inset-x-0 bottom-0 z-20 h-1/3 bg-gradient-to-t from-[#080b14]/80 to-transparent" />

                <div className="absolute bottom-4 left-4 right-4 z-20 rounded-xl border border-white/10 bg-[#080b14]/70 p-4 backdrop-blur-md">
                  <p className="text-xs font-medium uppercase tracking-[0.2em] text-violet-200">
                    The vision
                  </p>
                  <p className="mt-1 text-sm text-slate-200">
                    Making intelligent automation practical for businesses.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-7">
              <p className="text-2xl font-semibold text-white">Founder Name</p>
              <p className="mt-1 text-sm text-violet-300">
                CEO &amp; Founder · AI AutomationHub
              </p>
              <p className="mt-3 max-w-md text-sm leading-6 text-slate-400">
                Building practical AI and automation solutions around real
                business needs.
              </p>
            </div>

            <div className="mt-5 flex flex-wrap gap-2.5">
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit AI AutomationHub on ${social.name}`}
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-2.5 text-sm text-slate-300 transition duration-300 hover:border-violet-400/40 hover:bg-violet-400/[0.08] hover:text-white"
                  >
                    <Icon className="h-4 w-4" />
                    {social.name}
                    <ArrowUpRight className="h-3.5 w-3.5 opacity-60" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* RIGHT: Starts at the top, aligned with founder image */}
          <div className="min-w-0 self-start pt-0">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-violet-300">
              About AI AutomationHub
            </p>

            <h2 className="mt-5 text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
              Founder-led.
              <span className="mt-1 block bg-gradient-to-r from-violet-300 via-blue-300 to-cyan-200 bg-clip-text text-transparent">
                Built around business.
              </span>
            </h2>

            <div className="mt-7 space-y-5 text-base leading-7 text-slate-400">
              <p>
                AI AutomationHub was created around a simple idea: technology
                should make business easier, not add another layer of
                complexity.
              </p>

              <p>
                We bring together AI automation, custom software, websites and
                business technology to help turn everyday challenges into
                practical digital solutions.
              </p>

              <p>
                Our approach starts with understanding the people, processes and
                goals behind a business. The right solution should fit the
                workflow, solve a real problem and leave room to grow.
              </p>
            </div>

            <div className="mt-8 border-t border-[#263142] pt-6">
              <p className="text-2xl font-semibold text-white">How we work</p>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                Practical strategy, thoughtful implementation, and technology
                designed to support the way your business actually operates.
              </p>

              <a
                href="#contact"
                className="mt-5 inline-flex items-center gap-2 rounded-full border border-violet-400/30 bg-violet-400/[0.08] px-5 py-3 text-sm font-medium text-violet-100 transition duration-300 hover:border-violet-300/60 hover:bg-violet-400/15"
              >
                Get in touch
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Team section */}
        <div className="mt-16 border-t border-white/[0.08] pt-12 sm:mt-20 sm:pt-14">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <div className="mb-3 flex items-center gap-2 text-sm text-violet-300">
                <Users className="h-4 w-4" />
                <span>Our people</span>
              </div>

              <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                The team behind the work
              </h3>

              <p className="mt-3 max-w-xl text-sm leading-6 text-slate-400 sm:text-base">
                A multidisciplinary team focused on building useful, thoughtful,
                and scalable digital solutions.
              </p>
            </div>

            <span className="w-fit rounded-full border border-white/10 px-3 py-1.5 text-xs text-slate-400">
              Team profiles · Demo content
            </span>
          </div>

          <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member) => (
              <div
                key={member.initials}
                className="group rounded-2xl border border-white/[0.08] bg-white/[0.025] p-5 transition duration-300 hover:-translate-y-1 hover:border-violet-400/30 hover:bg-white/[0.045]"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-violet-400/20 bg-gradient-to-br from-violet-500/20 to-blue-500/10 text-sm font-semibold text-violet-200">
                    {member.initials}
                  </div>

                  <div className="min-w-0">
                    <h4 className="font-semibold text-white transition group-hover:text-violet-200">
                      {member.name}
                    </h4>
                    <p className="mt-1 text-sm text-slate-400">{member.role}</p>
                  </div>
                </div>

                <p className="mt-4 text-sm leading-6 text-slate-500">
                  Demo profile — replace with the team member&apos;s
                  introduction and actual role.
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Footer note for this section */}
        <div className="mt-10 border-t border-white/[0.08] pt-6 text-sm text-slate-500">
          AI AutomationHub · Business technology
        </div>
      </div>
    </section>
  );
}
