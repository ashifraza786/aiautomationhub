import { FormEvent, useMemo, useState } from "react";
import { Link } from "wouter";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  CheckCircle2,
  Mail,
  MessageSquare,
  Phone,
  Send,
} from "lucide-react";

type RequirementType =
  | "Website"
  | "Custom Software"
  | "ERP / Business System"
  | "AI Automation"
  | "AI Agent / Assistant"
  | "E-commerce"
  | "Business Analytics"
  | "Digital Marketing / Advertising"
  | "Existing System Improvement"
  | "Something Custom";

type CurrentSystem =
  | "Mostly Manual"
  | "Excel / Sheets"
  | "WhatsApp"
  | "Existing Software"
  | "Existing ERP / CRM"
  | "Multiple Disconnected Tools"
  | "Other";

type Budget = "Not sure" | "Under ₹50K" | "₹50K – ₹1L" | "₹1L – ₹3L" | "₹3L+";

interface ProjectFormData {
  requirements: RequirementType[];
  description: string;
  businessName: string;
  industry: string;
  currentSystem: CurrentSystem | "";
  name: string;
  email: string;
  phone: string;
  website: string;
  budget: Budget | "";
}

const requirementOptions: RequirementType[] = [
  "Website",
  "Custom Software",
  "ERP / Business System",
  "AI Automation",
  "AI Agent / Assistant",
  "E-commerce",
  "Business Analytics",
  "Digital Marketing / Advertising",
  "Existing System Improvement",
  "Something Custom",
];

const systemOptions: CurrentSystem[] = [
  "Mostly Manual",
  "Excel / Sheets",
  "WhatsApp",
  "Existing Software",
  "Existing ERP / CRM",
  "Multiple Disconnected Tools",
  "Other",
];

const budgetOptions: Budget[] = [
  "Not sure",
  "Under ₹50K",
  "₹50K – ₹1L",
  "₹1L – ₹3L",
  "₹3L+",
];

const initialForm: ProjectFormData = {
  requirements: [],
  description: "",
  businessName: "",
  industry: "",
  currentSystem: "",
  name: "",
  email: "",
  phone: "",
  website: "",
  budget: "",
};

const totalSteps = 5;

export default function StartProject() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState<ProjectFormData>(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [showValidation, setShowValidation] = useState(false);

  const progress = useMemo(() => Math.round((step / totalSteps) * 100), [step]);

  const updateField = <K extends keyof ProjectFormData>(
    field: K,
    value: ProjectFormData[K],
  ) => {
    setForm((current) => ({
      ...current,
      [field]: value,
    }));
  };

  const toggleRequirement = (requirement: RequirementType) => {
    setForm((current) => {
      const exists = current.requirements.includes(requirement);

      return {
        ...current,
        requirements: exists
          ? current.requirements.filter((item) => item !== requirement)
          : [...current.requirements, requirement],
      };
    });
  };

  const isValidEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
  };

  const isValidPhone = (phone: string) => {
    const digits = phone.replace(/\D/g, "");
    return digits.length >= 10;
  };

  const canContinue = () => {
    if (step === 1) {
      return form.requirements.length > 0;
    }

    if (step === 2) {
      return form.description.trim().length >= 10;
    }

    if (step === 3) {
      return (
        form.businessName.trim().length > 0 &&
        form.industry.trim().length > 0 &&
        form.currentSystem !== ""
      );
    }

    if (step === 4) {
      return (
        form.name.trim().length > 0 &&
        isValidEmail(form.email) &&
        isValidPhone(form.phone)
      );
    }

    return true;
  };

  const nextStep = () => {
    if (!canContinue()) {
      setShowValidation(true);
      return;
    }

    setShowValidation(false);
    setStep((current) => Math.min(current + 1, totalSteps));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const previousStep = () => {
    setShowValidation(false);
    setStep((current) => Math.max(current - 1, 1));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!canContinue()) {
      setShowValidation(true);
      return;
    }

    setShowValidation(false);

    /*
     * Frontend-only submission for now.
     * Backend / database / email integration can be connected later
     * without changing this form structure.
     */
    console.info("[project-inquiry]", form);

    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <main className="container mx-auto flex min-h-[calc(100vh-72px)] max-w-[900px] items-center px-5 py-20 md:px-7 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="w-full rounded-3xl border border-border bg-surface p-8 text-center shadow-[0_24px_80px_rgba(0,0,0,0.22)] md:p-14"
          >
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-primary/25 bg-primary/10">
              <CheckCircle2
                className="h-8 w-8 text-primary"
                strokeWidth={1.6}
                aria-hidden="true"
              />
            </div>

            <span className="mt-7 block text-xs font-semibold uppercase tracking-[0.12em] text-primary">
              Requirement Received
            </span>

            <h1 className="mt-4 text-3xl font-bold tracking-[-0.025em] md:text-4xl">
              Got it. We've received your requirement.
            </h1>

            <p className="mx-auto mt-5 max-w-[600px] text-base leading-7 text-muted-foreground">
              We'll review what you're trying to build or improve and use the
              information you shared to understand the right direction.
            </p>

            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href="/"
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-primary px-6 text-sm font-semibold text-primary-foreground transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary/95"
              >
                Back to Home
                <ArrowRight
                  className="h-4 w-4"
                  strokeWidth={1.8}
                  aria-hidden="true"
                />
              </Link>

              <a
                href="/work"
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-border bg-background px-6 text-sm font-semibold text-foreground transition-all duration-200 hover:border-primary/35 hover:bg-elevated"
              >
                Explore Our Work
              </a>
            </div>
          </motion.div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="relative overflow-hidden">
        {/* Background atmosphere */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-20 h-96 w-96 -translate-x-1/2 rounded-full bg-primary/5 blur-3xl"
        />

        <div className="container relative mx-auto max-w-[980px] px-5 py-16 md:px-7 md:py-20 lg:px-8 lg:py-24">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-[720px] text-center"
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft
                className="h-4 w-4"
                strokeWidth={1.8}
                aria-hidden="true"
              />
              Back to Home
            </Link>

            <span className="mt-8 block text-xs font-semibold uppercase tracking-[0.12em] text-primary">
              Let's Build Something Useful
            </span>

            <h1 className="mt-4 text-3xl font-bold leading-[1.1] tracking-[-0.025em] md:text-4xl lg:text-[48px]">
              Tell Us What You Need.
            </h1>

            <p className="mx-auto mt-5 max-w-[650px] text-base leading-7 text-muted-foreground md:text-[17px]">
              Tell us what you're trying to build, improve or automate. We'll
              help you turn the requirement into the right digital solution.
            </p>
          </motion.div>

          {/* Progress */}
          <div className="mx-auto mt-12 max-w-[760px]">
            <div className="flex items-center justify-between text-[11px] font-semibold uppercase tracking-[0.1em] text-muted-foreground">
              <span>
                Step {step} of {totalSteps}
              </span>
              <span>{progress}%</span>
            </div>

            <div className="mt-3 h-1 overflow-hidden rounded-full bg-elevated">
              <motion.div
                className="h-full rounded-full bg-primary"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.35 }}
              />
            </div>

            <div className="mt-5 grid grid-cols-5 gap-2">
              {Array.from({ length: totalSteps }).map((_, index) => {
                const number = index + 1;
                const active = number <= step;

                return (
                  <div
                    key={number}
                    className={`h-1 rounded-full transition-colors duration-300 ${
                      active ? "bg-primary/70" : "bg-border"
                    }`}
                  />
                );
              })}
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="mx-auto mt-8 max-w-[760px]">
            <div className="overflow-hidden rounded-3xl border border-border bg-surface shadow-[0_24px_80px_rgba(0,0,0,0.18)]">
              <AnimatePresence mode="wait">
                {/* Step 1 */}
                {step === 1 && (
                  <motion.div
                    key="step-1"
                    initial={{ opacity: 0, x: 18 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -18 }}
                    transition={{ duration: 0.25 }}
                    className="p-6 md:p-9"
                  >
                    {showValidation && form.requirements.length === 0 && (
                      <p className="mt-4 text-sm text-[#FF667A]">
                        Please select at least one requirement to continue.
                      </p>
                    )}

                    <div className="mt-8 grid gap-3 sm:grid-cols-2">
                      {requirementOptions.map((option) => {
                        const selected = form.requirements.includes(option);

                        return (
                          <ChoiceButton
                            key={option}
                            selected={selected}
                            onClick={() => toggleRequirement(option)}
                          >
                            {option}
                          </ChoiceButton>
                        );
                      })}
                    </div>

                    <SelectionHint
                      count={form.requirements.length}
                      label="requirement"
                    />
                  </motion.div>
                )}

                {/* Step 2 */}
                {step === 2 && (
                  <motion.div
                    key="step-2"
                    initial={{ opacity: 0, x: 18 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -18 }}
                    transition={{ duration: 0.25 }}
                    className="p-6 md:p-9"
                  >
                    <StepHeading
                      eyebrow="02 / YOUR REQUIREMENT"
                      title="Tell us what you're trying to build."
                      description="Don't worry about technical details. Explain the problem in your own words."
                    />

                    <div className="mt-8">
                      <label
                        htmlFor="description"
                        className="text-sm font-semibold text-foreground"
                      >
                        What are you trying to build, improve or automate?
                      </label>

                      <textarea
                        id="description"
                        value={form.description}
                        onChange={(event) =>
                          updateField("description", event.target.value)
                        }
                        placeholder="For example: We currently manage leads manually through WhatsApp and Excel. We want a system that captures leads, follows up automatically and gives our team a clear dashboard."
                        rows={9}
                        className="mt-3 w-full resize-y rounded-xl border border-border bg-background px-4 py-3.5 text-sm leading-6 text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary/50 focus:ring-2 focus:ring-primary/10"
                      />
                      <p className="mt-2 text-xs text-muted-foreground">
                        A simple business explanation is enough.
                      </p>

                      {showValidation &&
                        form.description.trim().length < 10 && (
                          <p className="mt-2 text-sm text-[#FF667A]">
                            Please describe your requirement in at least 10
                            characters.
                          </p>
                        )}
                    </div>
                  </motion.div>
                )}

                {/* Step 3 */}
                {step === 3 && (
                  <motion.div
                    key="step-3"
                    initial={{ opacity: 0, x: 18 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -18 }}
                    transition={{ duration: 0.25 }}
                    className="p-6 md:p-9"
                  >
                    <StepHeading
                      eyebrow="03 / YOUR BUSINESS"
                      title="Help us understand your current setup."
                      description="This helps us understand where the solution needs to fit."
                    />

                    <div className="mt-8 space-y-6">
                      <Field
                        label="Business / Organisation"
                        htmlFor="businessName"
                      >
                        {showValidation &&
                          (form.businessName.trim().length === 0 ||
                            form.industry.trim().length === 0 ||
                            form.currentSystem === "") && (
                            <p className="text-sm text-[#FF667A]">
                              Please complete your business name, industry and
                              current setup.
                            </p>
                          )}
                        <input
                          id="businessName"
                          type="text"
                          value={form.businessName}
                          onChange={(event) =>
                            updateField("businessName", event.target.value)
                          }
                          placeholder="Your business or organisation name"
                          className="form-input"
                        />
                      </Field>

                      <Field label="Industry" htmlFor="industry">
                        <input
                          id="industry"
                          type="text"
                          value={form.industry}
                          onChange={(event) =>
                            updateField("industry", event.target.value)
                          }
                          placeholder="e.g. Education, Retail, Healthcare, Services"
                          className="form-input"
                        />
                      </Field>

                      <div>
                        <label className="text-sm font-semibold text-foreground">
                          How does your business currently manage this?
                        </label>

                        <div className="mt-3 grid gap-3 sm:grid-cols-2">
                          {systemOptions.map((option) => {
                            const selected = form.currentSystem === option;

                            return (
                              <ChoiceButton
                                key={option}
                                selected={selected}
                                onClick={() =>
                                  updateField("currentSystem", option)
                                }
                              >
                                {option}
                              </ChoiceButton>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
                {showValidation &&
                  (form.name.trim().length === 0 ||
                    !isValidEmail(form.email) ||
                    !isValidPhone(form.phone)) && (
                    <p className="mt-6 text-sm text-[#FF667A]">
                      Please enter your name, a valid email address and a valid
                      phone number.
                    </p>
                  )}
                {/* Step 4 */}
                {step === 4 && (
                  <motion.div
                    key="step-4"
                    initial={{ opacity: 0, x: 18 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -18 }}
                    transition={{ duration: 0.25 }}
                    className="p-6 md:p-9"
                  >
                    <StepHeading
                      eyebrow="04 / CONTACT DETAILS"
                      title="Where should we reach you?"
                      description="We'll use these details only to follow up about your requirement."
                    />

                    <div className="mt-8 grid gap-6 md:grid-cols-2">
                      <Field label="Name" htmlFor="name">
                        <input
                          id="name"
                          type="text"
                          autoComplete="name"
                          value={form.name}
                          onChange={(event) =>
                            updateField("name", event.target.value)
                          }
                          placeholder="Your name"
                          className="form-input"
                        />
                      </Field>

                      <Field label="Email" htmlFor="email">
                        <input
                          id="email"
                          type="email"
                          autoComplete="email"
                          value={form.email}
                          onChange={(event) =>
                            updateField("email", event.target.value)
                          }
                          placeholder="you@company.com"
                          className="form-input"
                        />
                      </Field>

                      <Field label="Phone / WhatsApp" htmlFor="phone">
                        <input
                          id="phone"
                          type="tel"
                          autoComplete="tel"
                          value={form.phone}
                          onChange={(event) =>
                            updateField("phone", event.target.value)
                          }
                          placeholder="+91 XXXXX XXXXX"
                          className="form-input"
                        />
                      </Field>

                      <Field label="Website" htmlFor="website" optional>
                        <input
                          id="website"
                          type="url"
                          autoComplete="url"
                          value={form.website}
                          onChange={(event) =>
                            updateField("website", event.target.value)
                          }
                          placeholder="https://yourwebsite.com"
                          className="form-input"
                        />
                      </Field>
                    </div>
                  </motion.div>
                )}

                {/* Step 5 */}
                {step === 5 && (
                  <motion.div
                    key="step-5"
                    initial={{ opacity: 0, x: 18 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -18 }}
                    transition={{ duration: 0.25 }}
                    className="p-6 md:p-9"
                  >
                    <StepHeading
                      eyebrow="05 / PROJECT RANGE"
                      title="Do you have a budget range in mind?"
                      description="This is optional. If you're not sure yet, that's completely fine."
                    />

                    <div className="mt-8 grid gap-3 sm:grid-cols-2">
                      {budgetOptions.map((option) => {
                        const selected = form.budget === option;

                        return (
                          <ChoiceButton
                            key={option}
                            selected={selected}
                            onClick={() => updateField("budget", option)}
                          >
                            {option}
                          </ChoiceButton>
                        );
                      })}
                    </div>

                    <div className="mt-8 rounded-xl border border-border bg-background p-5">
                      <div className="flex items-start gap-3">
                        <CheckCircle2
                          className="mt-0.5 h-5 w-5 shrink-0 text-primary"
                          strokeWidth={1.7}
                          aria-hidden="true"
                        />

                        <div>
                          <p className="text-sm font-semibold text-foreground">
                            Ready to start the conversation?
                          </p>

                          <p className="mt-1 text-xs leading-5 text-muted-foreground">
                            We'll review the information you've shared and
                            understand the requirement before discussing the
                            right direction.
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Navigation */}
              <div className="flex flex-col-reverse gap-3 border-t border-border bg-background/40 p-5 sm:flex-row sm:items-center sm:justify-between md:px-9 md:py-6">
                <div>
                  {step > 1 ? (
                    <button
                      type="button"
                      onClick={previousStep}
                      className="inline-flex min-h-11 items-center gap-2 rounded-lg px-4 text-sm font-semibold text-muted-foreground transition-colors hover:bg-elevated hover:text-foreground"
                    >
                      <ArrowLeft
                        className="h-4 w-4"
                        strokeWidth={1.8}
                        aria-hidden="true"
                      />
                      Back
                    </button>
                  ) : (
                    <span className="text-xs text-muted-foreground">
                      Your information stays with this inquiry.
                    </span>
                  )}
                </div>

                {step < totalSteps ? (
                  <button
                    type="button"
                    onClick={nextStep}
                    disabled={!canContinue()}
                    className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-primary px-6 text-sm font-semibold text-primary-foreground transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary/95 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:translate-y-0"
                  >
                    Continue
                    <ArrowRight
                      className="h-4 w-4"
                      strokeWidth={1.8}
                      aria-hidden="true"
                    />
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={!canContinue()}
                    className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-primary px-6 text-sm font-semibold text-primary-foreground shadow-[0_0_28px_rgba(79,124,255,0.14)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary/95 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:translate-y-0"
                  >
                    Start the Conversation
                    <Send
                      className="h-4 w-4"
                      strokeWidth={1.8}
                      aria-hidden="true"
                    />
                  </button>
                )}
              </div>
            </div>
          </form>

          {/* Direct contact */}
          <div className="mx-auto mt-10 max-w-[760px] border-t border-border pt-8">
            <p className="text-center text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
              Prefer a direct conversation?
            </p>

            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              <a
                href="tel:+917484821896"
                className="flex min-h-16 items-center justify-center gap-3 rounded-xl border border-border bg-surface px-4 text-sm font-medium text-foreground transition-all hover:border-primary/30 hover:bg-elevated"
              >
                <Phone
                  className="h-4 w-4 text-primary"
                  strokeWidth={1.7}
                  aria-hidden="true"
                />
                Call Us
              </a>

              <a
                href="mailto:team.afi.consultant@gmail.com?subject=Project%20Inquiry"
                className="flex min-h-16 items-center justify-center gap-3 rounded-xl border border-border bg-surface px-4 text-sm font-medium text-foreground transition-all hover:border-primary/30 hover:bg-elevated"
              >
                <Mail
                  className="h-4 w-4 text-primary"
                  strokeWidth={1.7}
                  aria-hidden="true"
                />
                Email Us
              </a>

              <a
                href="https://wa.me/917484821896?text=Hello%20AIAutomationHub%2C%20I%20want%20to%20discuss%20a%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-16 items-center justify-center gap-3 rounded-xl border border-border bg-surface px-4 text-sm font-medium text-foreground transition-all hover:border-primary/30 hover:bg-elevated"
              >
                <MessageSquare
                  className="h-4 w-4 text-primary"
                  strokeWidth={1.7}
                  aria-hidden="true"
                />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

function StepHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div>
      <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-primary">
        {eyebrow}
      </span>

      <h2 className="mt-3 text-2xl font-bold tracking-[-0.02em] text-foreground md:text-3xl">
        {title}
      </h2>

      <p className="mt-3 max-w-[620px] text-sm leading-6 text-muted-foreground md:text-[15px]">
        {description}
      </p>
    </div>
  );
}

function ChoiceButton({
  children,
  selected,
  onClick,
}: {
  children: React.ReactNode;
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={selected}
      className={`group flex min-h-14 items-center justify-between rounded-xl border px-4 text-left text-sm font-medium transition-all duration-200 ${
        selected
          ? "border-primary/45 bg-primary/8 text-foreground shadow-[0_0_24px_rgba(79,124,255,0.06)]"
          : "border-border bg-background text-secondary-foreground hover:border-primary/25 hover:bg-elevated"
      }`}
    >
      <span>{children}</span>

      <span
        className={`ml-4 flex h-5 w-5 shrink-0 items-center justify-center rounded-md border transition-all ${
          selected
            ? "border-primary bg-primary text-primary-foreground"
            : "border-border bg-surface"
        }`}
      >
        {selected && (
          <Check className="h-3.5 w-3.5" strokeWidth={2.2} aria-hidden="true" />
        )}
      </span>
    </button>
  );
}

function SelectionHint({ count, label }: { count: number; label: string }) {
  if (count === 0) return null;

  return (
    <p className="mt-5 text-xs text-muted-foreground">
      {count} {label}
      {count > 1 ? "s" : ""} selected.
    </p>
  );
}

function Field({
  label,
  htmlFor,
  children,
  optional = false,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
  optional?: boolean;
}) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="text-sm font-semibold text-foreground"
      >
        {label}
        {optional && (
          <span className="ml-2 text-xs font-normal text-muted-foreground">
            Optional
          </span>
        )}
      </label>

      <div className="mt-3">{children}</div>
    </div>
  );
}
