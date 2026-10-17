import {
  ArrowUpRight,
  Instagram,
  Linkedin,
  Youtube,
  Users,
  Target,
  Workflow,
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
      className="relative isolate overflow-hidden bg-[#F4F0E8] px-5 py-16 font-sans text-[#24231F] sm:px-8 sm:py-20 lg:px-12 lg:py-24"
    >
      {/* Subtle brand details */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-16 h-80 w-80 rounded-full bg-[#004225]/[0.035] blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl">
        {/* Founder and introduction */}
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          {/* Founder profile */}
          <div className="min-w-0">
            <div className="relative mx-auto w-full max-w-md lg:mx-0">
              <div
                aria-hidden="true"
                className="absolute -bottom-2.5 -right-2.5 h-full w-full rounded-2xl bg-[#004225]"
              />

              <div className="relative aspect-[4/4.3] overflow-hidden rounded-2xl border border-[#DDD6C9] bg-white">
                <img
                  src="/images/founder.jpg"
                  alt="Founder of AI AutomationHub"
                  className="absolute inset-0 z-10 h-full w-full object-cover object-center"
                  onError={(event) => {
                    event.currentTarget.style.display = "none";
                  }}
                />

                {/* Founder image fallback */}
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-[#FFFFFF] p-6 text-center">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full border border-[#DDD6C9] bg-[#F4F0E8] text-2xl font-semibold text-[#004225]">
                    AI
                  </div>

                  <div>
                    <p className="text-lg font-semibold tracking-tight text-[#24231F]">
                      Founder photo
                    </p>
                    <p className="mt-1 text-sm text-[#5F5B53]">
                      Replace with your portrait
                    </p>
                  </div>
                </div>

                {/* Vision panel */}
                <div className="absolute bottom-4 left-4 right-4 z-20 rounded-xl border border-[#DDD6C9] bg-[#F4F0E8]/95 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#004225]">
                    The vision
                  </p>
                  <p className="mt-2 text-sm leading-6 text-[#5F5B53]">
                    Making intelligent automation practical for businesses.
                  </p>
                </div>
              </div>
            </div>

            {/* Founder details */}
            <div className="mt-8">
              <p className="text-2xl font-semibold tracking-tight text-[#24231F] sm:text-3xl">
                Founder Name
              </p>

              <p className="mt-2 text-sm font-medium text-[#004225]">
                CEO &amp; Founder · AI AutomationHub
              </p>

              <p className="mt-4 max-w-md text-sm leading-7 text-[#5F5B53] sm:text-base">
                Building practical AI and automation solutions around real
                business needs.
              </p>
            </div>

            {/* Social links */}
            <div className="mt-6 flex flex-wrap gap-2.5">
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit AI AutomationHub on ${social.name}`}
                    className="inline-flex items-center gap-2 rounded-full border border-[#DDD6C9] bg-white px-3.5 py-2.5 text-sm font-medium text-[#24231F] transition duration-200 hover:border-[#004225]/40 hover:bg-[#EAE5DB] hover:text-[#004225] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#004225] focus-visible:ring-offset-2"
                  >
                    <Icon className="h-4 w-4" />
                    {social.name}
                    <ArrowUpRight className="h-3.5 w-3.5 opacity-60" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* About content */}
          <div className="min-w-0 self-start pt-0 lg:pt-1">
            <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#004225]">
              <span className="h-px w-8 bg-[#004225]" />
              About AI AutomationHub
            </p>

            <h2 className="mt-6 max-w-3xl text-4xl font-semibold leading-[1.08] tracking-[-0.045em] text-[#24231F] sm:text-5xl lg:text-6xl">
              Founder-led.
              <span className="mt-2 block text-[#004225]">
                Built around business.
              </span>
            </h2>

            <div className="mt-7 max-w-2xl space-y-5 text-base leading-7 text-[#5F5B53] sm:mt-8 sm:text-[17px] sm:leading-8">
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

            {/* How we work */}
            <div className="mt-9 border-t border-[#DDD6C9] pt-7 sm:mt-10 sm:pt-8">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#DDD6C9] bg-white text-[#004225]">
                  <Target className="h-5 w-5" />
                </div>

                <h3 className="text-2xl font-semibold tracking-tight text-[#24231F] sm:text-3xl">
                  How we work
                </h3>
              </div>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-[#5F5B53] sm:text-base">
                Practical strategy, thoughtful implementation, and technology
                designed to support the way your business actually operates.
              </p>

              <a
                href="#contact"
                className="mt-6 inline-flex items-center gap-2 rounded-lg bg-[#004225] px-5 py-3.5 text-sm font-semibold text-white transition duration-200 hover:bg-[#00351E] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#004225] focus-visible:ring-offset-2"
              >
                Get in touch
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Team section */}
        <div className="mt-20 border-t border-[#DDD6C9] pt-12 sm:mt-24 sm:pt-14 lg:mt-28">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div className="max-w-2xl">
              <div className="mb-4 flex items-center gap-2 text-sm font-medium text-[#004225]">
                <Users className="h-4 w-4" />
                <span>Our people</span>
              </div>

              <h3 className="text-3xl font-semibold leading-tight tracking-tight text-[#24231F] sm:text-4xl">
                The team behind the work
              </h3>

              <p className="mt-4 max-w-xl text-sm leading-7 text-[#5F5B53] sm:text-base">
                A multidisciplinary team focused on building useful, thoughtful,
                and scalable digital solutions.
              </p>
            </div>

            <span className="w-fit rounded-full border border-[#DDD6C9] bg-white px-3.5 py-2 text-xs font-medium text-[#5F5B53]">
              Team profiles · Demo content
            </span>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member) => (
              <div
                key={member.initials}
                className="group rounded-2xl border border-[#DDD6C9] bg-white p-5 transition duration-200 hover:-translate-y-1 hover:border-[#004225]/35 hover:shadow-[0_12px_30px_rgba(36,35,31,0.06)] sm:p-6"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-[#DDD6C9] bg-[#F4F0E8] text-sm font-semibold text-[#004225]">
                    {member.initials}
                  </div>

                  <div className="min-w-0">
                    <h4 className="font-semibold tracking-tight text-[#24231F] transition-colors group-hover:text-[#004225]">
                      {member.name}
                    </h4>

                    <p className="mt-1 text-sm leading-6 text-[#5F5B53]">
                      {member.role}
                    </p>
                  </div>
                </div>

                <div className="mt-5 flex items-start gap-3 border-t border-[#DDD6C9] pt-4">
                  <Workflow className="mt-0.5 h-4 w-4 shrink-0 text-[#004225]" />

                  <p className="text-sm leading-6 text-[#5F5B53]">
                    Demo profile — replace with the team member&apos;s
                    introduction and actual role.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section footer */}
        <div className="mt-12 flex flex-col gap-2 border-t border-[#DDD6C9] pt-6 text-sm text-[#5F5B53] sm:flex-row sm:items-center sm:justify-between">
          <span className="font-medium text-[#24231F]">AI AutomationHub</span>
          <span>Business technology, designed around people.</span>
        </div>
      </div>
    </section>
  );
}
