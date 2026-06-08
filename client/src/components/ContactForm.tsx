import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { useState } from "react";
import { trpc } from "@/lib/trpc";
import { Loader2, Send } from "lucide-react";

// ── Analytics helper (matches Home.tsx) ──────────────────────────────────────
function track(event: string, data?: Record<string, string>) {
  try {
    if (typeof window !== "undefined" && (window as any).va) {
      (window as any).va("event", { name: event, ...data });
    }
  } catch (_) {}
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_REGEX = /^[+\d\s\-()]{7,20}$/;

type FormData = {
  fullName: string;
  email: string;
  phone: string;
  company: string;
  requirements: string;
};

const EMPTY_FORM: FormData = {
  fullName: "",
  email: "",
  phone: "",
  company: "",
  requirements: "",
};

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>(EMPTY_FORM);
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submitContactMutation = trpc.contact.submitForm.useMutation({
    onSuccess: () => {
      toast.success("Message sent! We'll respond within 24 hours.", {
        duration: 5000,
        description: "Check your email for confirmation.",
      });
      track("form_submit_success");
      setFormData(EMPTY_FORM);
      setErrors({});
    },
    onError: (error: any) => {
      toast.error(error?.message || "Failed to send message. Please try again.", {
        duration: 5000,
        description: "Or reach us directly on WhatsApp.",
      });
      track("form_submit_error", { error: error?.message ?? "unknown" });
    },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear field error on change
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validate = (): boolean => {
    const newErrors: Partial<FormData> = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email address is required";
    } else if (!EMAIL_REGEX.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!PHONE_REGEX.test(formData.phone)) {
      newErrors.phone = "Enter a valid phone number";
    }
    if (!formData.requirements.trim()) newErrors.requirements = "Project details are required";

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) {
      // Focus first error field
      const firstKey = Object.keys(newErrors)[0];
      document.getElementById(firstKey)?.focus();
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    track("form_submit_attempt");
    setIsSubmitting(true);
    try {
      await submitContactMutation.mutateAsync({
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        company: formData.company || undefined,
        requirements: formData.requirements,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 max-w-2xl mx-auto"
      noValidate
      aria-label="Contact inquiry form"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Full Name */}
        <div className="space-y-2">
          <Label htmlFor="fullName" className="font-medium">
            Full Name <span aria-hidden="true" className="text-destructive">*</span>
          </Label>
          <Input
            id="fullName"
            name="fullName"
            type="text"
            placeholder="Your full name"
            value={formData.fullName}
            onChange={handleChange}
            disabled={isSubmitting}
            required
            aria-required="true"
            aria-invalid={!!errors.fullName}
            aria-describedby={errors.fullName ? "fullName-error" : undefined}
            className={errors.fullName ? "border-destructive focus-visible:ring-destructive" : ""}
          />
          {errors.fullName && (
            <p id="fullName-error" role="alert" className="text-xs text-destructive">{errors.fullName}</p>
          )}
        </div>

        {/* Email */}
        <div className="space-y-2">
          <Label htmlFor="email" className="font-medium">
            Email Address <span aria-hidden="true" className="text-destructive">*</span>
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="your@email.com"
            value={formData.email}
            onChange={handleChange}
            disabled={isSubmitting}
            required
            aria-required="true"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
            className={errors.email ? "border-destructive focus-visible:ring-destructive" : ""}
          />
          {errors.email && (
            <p id="email-error" role="alert" className="text-xs text-destructive">{errors.email}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Phone */}
        <div className="space-y-2">
          <Label htmlFor="phone" className="font-medium">
            Phone Number <span aria-hidden="true" className="text-destructive">*</span>
          </Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            placeholder="+91 XXXXXXXXXX"
            value={formData.phone}
            onChange={handleChange}
            disabled={isSubmitting}
            required
            aria-required="true"
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? "phone-error" : undefined}
            className={errors.phone ? "border-destructive focus-visible:ring-destructive" : ""}
          />
          {errors.phone && (
            <p id="phone-error" role="alert" className="text-xs text-destructive">{errors.phone}</p>
          )}
        </div>

        {/* Company */}
        <div className="space-y-2">
          <Label htmlFor="company" className="font-medium">
            Company Name <span className="text-muted-foreground text-xs">(Optional)</span>
          </Label>
          <Input
            id="company"
            name="company"
            type="text"
            placeholder="Your company name"
            value={formData.company}
            onChange={handleChange}
            disabled={isSubmitting}
          />
        </div>
      </div>

      {/* Requirements */}
      <div className="space-y-2">
        <Label htmlFor="requirements" className="font-medium">
          Project Requirements <span aria-hidden="true" className="text-destructive">*</span>
        </Label>
        <Textarea
          id="requirements"
          name="requirements"
          placeholder="Tell us about your project, goals, and specific requirements — the more detail the better!"
          value={formData.requirements}
          onChange={handleChange}
          disabled={isSubmitting}
          rows={6}
          required
          aria-required="true"
          aria-invalid={!!errors.requirements}
          aria-describedby={errors.requirements ? "requirements-error" : undefined}
          className={errors.requirements ? "border-destructive focus-visible:ring-destructive" : ""}
        />
        {errors.requirements && (
          <p id="requirements-error" role="alert" className="text-xs text-destructive">{errors.requirements}</p>
        )}
        <p className="text-xs text-muted-foreground text-right">
          {formData.requirements.length} characters
        </p>
      </div>

      <Button
        type="submit"
        size="lg"
        disabled={isSubmitting}
        className="w-full gap-2 hover:scale-[1.01] transition-transform"
        aria-label={isSubmitting ? "Sending your message..." : "Send message"}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" />
            Sending Message...
          </>
        ) : (
          <>
            <Send className="w-4 h-4" aria-hidden="true" />
            Send Message
          </>
        )}
      </Button>

      <p className="text-xs text-muted-foreground text-center">
        We'll respond within 24 hours. Your information is secure and will never be shared.
      </p>
    </form>
  );
}
