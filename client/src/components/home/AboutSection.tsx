import {
  ArrowUpRight,
  Camera,
  Instagram,
  Youtube,
  Linkedin,
} from "lucide-react";

const teamMembers = [
  {
    initials: "TM",
    name: "Team Member 01",
    role: "Role / Designation",
  },
  {
    initials: "TM",
    name: "Team Member 02",
    role: "Role / Designation",
  },
  {
    initials: "TM",
    name: "Team Member 03",
    role: "Role / Designation",
  },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="scroll-mt-32 overflow-hidden border-t border-[#202936] bg-[#080A0F] text-[#F4F7FB]"
    >
      {/* Founder introduction */}
      <div className="mx-auto max-w-[1280px] px-5 py-20 md:px-7 md:py-24 lg:px-8 lg:py-28">
        <div className="grid items-start gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
          {/* Founder photo placeholder */}
          <div className="mx-auto w-full max-w-[440px] lg:mx-0">
            <div className="relative pr-3 pb-3">
              <div className="absolute bottom-0 right-0 h-[96%] w-[96%] rounded-sm bg-[#4F7CFF]" />

              <div className="relative flex aspect-[4/5] flex-col items-center justify-center overflow-hidden border border-[#273244] bg-[#111722]">
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_35%,rgba(79,124,255,0.18),transparent_60%)]"
                />

                <div className="relative flex h-20 w-20 items-center justify-center rounded-full border border-[#34435D] bg-[#172033] text-[#91A8FF]">
                  <Camera className="h-8 w-8" strokeWidth={1.3} />
                </div>

                <p className="relative mt-5 text-sm font-medium text-[#E5EAF5]">
                  Founder photo
                </p>

                <p className="relative mt-1 text-xs text-[#8995A8]">
                  Replace with your portrait
                </p>

                <span className="absolute bottom-5 left-5 text-[10px] uppercase tracking-[0.2em] text-[#7C96FF]">
                  AI AutomationHub
                </span>
              </div>
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-2 rounded-full border border-[#263142] bg-[#0D1118] px-3 py-2 text-xs text-[#A7B0BF]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#7C96FF]" />
                CEO & Founder
              </span>
            </div>
          </div>
          {/* Founder details — directly below the photo */}
          <div className="mt-6 border-t border-[#263142] pt-6">
            <p className="font-serif text-2xl italic tracking-tight text-[#F4F7FB]">
              Founder Name
            </p>

            <p className="mt-2 text-xs font-medium uppercase tracking-[0.12em] text-[#8C98AA]">
              CEO & Founder · AI AutomationHub
            </p>

            <p className="mt-4 text-sm leading-7 text-[#A7B0BF]">
              Add the founder's personal story, experience and vision here once
              the final details are ready.
            </p>
          </div>
          ``` **Dhyan rahe:** Ye block founder image ke outer container ke
          andar, image ke baad hona chahiye — poore two-column grid ke bahar
          nahi. Isse founder ka naam, designation aur description image ke just
          neeche render honge.
          {/* Founder story */}
          <div className="pt-1 lg:pt-3">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#7C96FF]">
              About AI AutomationHub
            </p>

            <h2
              id="about-heading"
              className="mt-5 text-4xl font-semibold leading-[1.08] tracking-[-0.045em] sm:text-5xl lg:text-[56px]"
            >
              Founder-led.
              <span className="block text-[#8295FF]">
                Built around business.
              </span>
            </h2>

            <div className="mt-7 max-w-2xl space-y-4 text-[15px] leading-7 text-[#A7B0BF] sm:text-base sm:leading-8">
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

            {/* Founder details placeholder */}
            <div className="mt-8 border-t border-[#263142] pt-6">
              <p className="font-serif text-2xl italic tracking-tight text-[#F4F7FB]">
                Founder Name
              </p>

              <p className="mt-2 text-xs font-medium uppercase tracking-[0.12em] text-[#8C98AA]">
                CEO & Founder · AI AutomationHub
              </p>

              <p className="mt-4 max-w-xl text-sm leading-6 text-[#8995A8]">
                Add the founder's personal story, experience and vision here
                once the final details are ready.
              </p>
            </div>

            <a
              href="#contact"
              onClick={(event) => {
                const contact = document.getElementById("contact");

                if (contact) {
                  event.preventDefault();
                  window.history.replaceState(null, "", "#contact");
                  contact.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }
              }}
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#91A8FF] transition hover:text-white"
            >
              Get in touch
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Team directory */}
      <div className="border-t border-[#202936] bg-[#0B0E14]">
        <div className="mx-auto max-w-[1280px] px-5 py-16 md:px-7 md:py-20 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#7C96FF]">
                The Team
              </p>

              <h3 className="mt-4 max-w-md text-3xl font-semibold leading-tight tracking-[-0.035em] sm:text-4xl">
                The people behind the work.
              </h3>

              <p className="mt-4 max-w-md text-sm leading-7 text-[#A7B0BF] sm:text-base">
                Great solutions come from thoughtful collaboration. Meet the
                people who will help shape this team as we add confirmed
                profiles and responsibilities.
              </p>
            </div>

            <div className="border-t border-[#263142]">
              {teamMembers.map((member, index) => (
                <div
                  key={member.name}
                  className="group flex items-center gap-4 border-b border-[#263142] py-5 sm:gap-5"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#34435D] bg-[#151D2B] text-xs font-semibold tracking-wide text-[#91A8FF]">
                    {member.initials}
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="font-medium text-[#F4F7FB] transition group-hover:text-[#91A8FF]">
                      {member.name}
                    </p>

                    <p className="mt-1 text-xs text-[#8995A8] sm:text-sm">
                      {member.role}
                    </p>
                  </div>

                  <span className="text-xs tabular-nums text-[#66748A]">
                    0{index + 1}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <p className="mt-6 text-xs leading-5 text-[#66748A]">
            Team profiles are placeholders for layout preview. Replace them with
            confirmed team names and roles before publishing.
          </p>
        </div>
      </div>

      {/* Social media links */}
      <div className="border-y border-[#202936] bg-[#F4F2E9] text-black">
        <div className="mx-auto flex max-w-[1280px] flex-wrap items-center gap-3 px-5 py-8 md:px-7 lg:px-8">
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Instagram"
            className="inline-flex min-h-[64px] items-center gap-4 rounded-full border-2 border-[#E5E5E5] bg-white px-6 py-3 text-lg transition duration-200 hover:border-[#7C96FF] hover:shadow-sm sm:px-8 sm:text-xl"
          >
            <Instagram className="h-6 w-6 shrink-0" />
            <span>Instagram</span>
            <ArrowUpRight className="ml-1 h-5 w-5 text-[#666666]" />
          </a>

          <a
            href="https://www.youtube.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit YouTube"
            className="inline-flex min-h-[64px] items-center gap-4 rounded-full border-2 border-[#E5E5E5] bg-white px-6 py-3 text-lg transition duration-200 hover:border-[#7C96FF] hover:shadow-sm sm:px-8 sm:text-xl"
          >
            <Youtube className="h-6 w-6 shrink-0" />
            <span>YouTube</span>
            <ArrowUpRight className="ml-1 h-5 w-5 text-[#666666]" />
          </a>

          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit LinkedIn"
            className="inline-flex min-h-[64px] items-center gap-4 rounded-full border-2 border-[#E5E5E5] bg-white px-6 py-3 text-lg transition duration-200 hover:border-[#7C96FF] hover:shadow-sm sm:px-8 sm:text-xl"
          >
            <Linkedin className="h-6 w-6 shrink-0" />
            <span>LinkedIn</span>
            <ArrowUpRight className="ml-1 h-5 w-5 text-[#666666]" />
          </a>
        </div>
      </div>
    </section>
  );
}
