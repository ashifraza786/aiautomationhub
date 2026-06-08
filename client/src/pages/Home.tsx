import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Code, BarChart3, MessageSquare, CheckCircle2, Phone, Mail } from "lucide-react";
import { useState, useEffect } from "react";
import ContactForm from "@/components/ContactForm";

// ── Analytics helper ──────────────────────────────────────────────────────────
// Drop-in: works with Vercel Analytics (window.va) and falls back to console.
function track(event: string, data?: Record<string, string>) {
  try {
    if (typeof window !== "undefined" && (window as any).va) {
      (window as any).va("event", { name: event, ...data });
    }
    console.info("[analytics]", event, data);
  } catch (_) {}
}

const PHONE = "+91 7484821896";
const PHONE_CLEAN = "917484821896";
const EMAIL = "team.afi.consultant@gmail.com";
const WA_BASE = `https://wa.me/${PHONE_CLEAN}?text=Hello%20AIAutomationHub%2C%20I%20want%20to%20discuss%20a%20project.`;

export default function Home() {
  const [hoveredService, setHoveredService] = useState<number | null>(null);
  const [showFloatingWA, setShowFloatingWA] = useState(false);

  // Show floating WhatsApp button after user scrolls 200px
  useEffect(() => {
    const onScroll = () => setShowFloatingWA(window.scrollY > 200);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const services = [
    {
      icon: Zap,
      title: "AI Automation Solutions",
      description: "Streamline workflows with intelligent automation systems, AI chatbots, and lead automation.",
      items: ["Business Workflow Automation", "AI Chatbots", "Lead Automation Systems", "AI Agents", "CRM Automation"],
    },
    {
      icon: Code,
      title: "Full Stack Website Development",
      description: "Build scalable, high-performance websites and custom web applications.",
      items: ["Business Websites", "Portfolio Websites", "Landing Pages", "SaaS Platforms", "E-commerce Websites"],
    },
    {
      icon: BarChart3,
      title: "Business Growth & Digital Transformation",
      description: "Optimize processes and implement smart systems for business growth.",
      items: ["ERP Business Solutions", "Lead Generation Systems", "Data Analytics Dashboards", "Business Management Systems"],
    },
  ];

  const benefits = [
    "Save Time Through Automation",
    "Reduce Manual Work",
    "Increase Team Productivity",
    "Generate More Leads",
    "Improve Customer Experience",
    "Scale Business Operations",
    "Modernize Digital Presence",
    "Better Decision Making Through Data",
  ];

  const processSteps = [
    { step: 1, title: "Free Consultation", description: "Understand your business needs and goals" },
    { step: 2, title: "Requirement Analysis", description: "Deep dive into your specific requirements" },
    { step: 3, title: "Strategy & Planning", description: "Create a customized roadmap for success" },
    { step: 4, title: "Development & Automation", description: "Build and implement your solution" },
    { step: 5, title: "Testing & Optimization", description: "Ensure quality and peak performance" },
    { step: 6, title: "Deployment & Support", description: "Launch and provide ongoing support" },
  ];

  const whyChoose = [
    "Customized Solutions",
    "Fast Delivery",
    "Business-Focused Approach",
    "AI-Powered Automation",
    "Modern Technology Stack",
    "Cost-Effective Development",
    "Long-Term Support",
    "Results-Driven Execution",
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">

      {/* ── Navigation ──────────────────────────────────────────────────────── */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border" aria-label="Main navigation">
        <div className="container flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">AI</span>
            </div>
            <span className="font-bold text-lg" style={{ fontFamily: "Poppins" }}>AIAutomationHub</span>
          </div>

          <div className="hidden md:flex items-center gap-8" role="list">
            {[
              { label: "Services", target: "services" },
              { label: "About", target: "about" },
              { label: "Process", target: "process" },
              { label: "Contact", target: "contact-form" },
            ].map(({ label, target }) => (
              <button
                key={target}
                role="listitem"
                onClick={() => scrollTo(target)}
                className="text-sm hover:text-primary transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
                aria-label={`Navigate to ${label} section`}
              >
                {label}
              </button>
            ))}
          </div>

          {/* ✅ FIX: Phone button now opens dialer on mobile, shows call intent on desktop */}
          <a
            href={`tel:${PHONE_CLEAN}`}
            aria-label={` at ${PHONE}`}
            onClick={() => track("phone_click", { location: "navbar" })}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-all hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            <Phone className="w-4 h-4" aria-hidden="true" />
            <span className="hidden sm:inline">{PHONE}</span>
          </a>
        </div>
      </nav>

      {/* ── Hero Section ────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden" aria-label="Hero">
        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center py-20 md:py-32">
          <div className="space-y-6 lg:space-y-8 z-10">
            <div className="space-y-4">
              <p className="text-primary text-sm font-semibold tracking-wide uppercase" style={{ fontFamily: "Poppins" }}>
                AI Automation & Full Stack Development
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight" style={{ fontFamily: "Poppins" }}>
                AI Automation & Full Stack Development Solutions for Modern Businesses
              </h1>
              <p className="text-lg text-muted-foreground max-w-xl">
                I help startups, entrepreneurs, and businesses automate workflows, develop high-performance websites, and implement digital systems that save time, reduce costs, and increase productivity.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              {/* ✅ FIX: Smooth scroll to contact form */}
              <Button
                size="lg"
                className="gap-2 button-hover"
                onClick={() => { scrollTo("contact-form"); track("cta_click", { button: "book_consultation" }); }}
                aria-label="Book a free consultation"
              >
                Book Free Consultation
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Button>

              {/* ✅ WhatsApp CTA */}
              <a
                href={WA_BASE}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat with us on WhatsApp"
                onClick={() => track("whatsapp_click", { location: "hero" })}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md border border-input bg-background hover:bg-accent hover:text-accent-foreground transition-all hover:scale-105 font-medium text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                <MessageSquare className="w-4 h-4" aria-hidden="true" />
                Chat With Us
              </a>
            </div>

            <div className="pt-4 flex items-center gap-4 text-sm flex-wrap">
              <a
                href={`tel:${PHONE_CLEAN}`}
                aria-label={`Call ${PHONE}`}
                onClick={() => track("phone_click", { location: "hero" })}
                className="flex items-center gap-2 font-medium hover:text-primary transition-colors group focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
              >
                <Phone className="w-4 h-4 text-primary group-hover:scale-110 transition-transform" aria-hidden="true" />
                {PHONE}
              </a>
              {/* ✅ FIX: Email link with auto-subject */}
              <a
                href={`mailto:${EMAIL}?subject=Project%20Inquiry`}
                aria-label={`Email us at ${EMAIL}`}
                onClick={() => track("email_click", { location: "hero" })}
                className="flex items-center gap-2 font-medium hover:text-primary transition-colors group focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
              >
                <Mail className="w-4 h-4 text-primary group-hover:scale-110 transition-transform" aria-hidden="true" />
                {EMAIL}
              </a>
            </div>
          </div>

          <div className="relative h-96 lg:h-full min-h-96 rounded-2xl overflow-hidden shadow-xl card-hover">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663474031522/fsoBnuQRhe8GUgRvRCCyPA/hero-business-growth-JVuEvD2or7jpXN2anyhy35.webp"
              alt="Business Growth through AI Automation"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
          </div>
        </div>
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary/3 rounded-full blur-3xl -z-10" />
      </section>

      {/* ── About Section ───────────────────────────────────────────────────── */}
      <section id="about" className="section-padding bg-secondary/30" aria-label="About">
        <div className="container">
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold" style={{ fontFamily: "Poppins" }}>
                Meet Your Digital Growth Partner
              </h2>
              <p className="text-lg text-muted-foreground">
                I am a Freelance AI Automation Consultant and Full Stack Website Developer helping businesses streamline operations through intelligent automation and modern digital solutions.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "AI Automation Systems",
                "Workflow Automation",
                "Full Stack Website Development",
                "Business Process Optimization",
                "ERP Integration Support",
                "Digital Business Transformation",
                "CRM & Lead Management Solutions",
                "Custom Web Applications",
              ].map((expertise, idx) => (
                <div key={idx} className="flex items-start gap-3 p-4 rounded-lg bg-background hover:bg-card transition-colors">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" aria-hidden="true" />
                  <span className="font-medium">{expertise}</span>
                </div>
              ))}
            </div>
            <p className="text-center text-muted-foreground text-lg">
              I work closely with startups, entrepreneurs, agencies, and growing businesses to build scalable systems that improve efficiency and drive business growth.
            </p>
          </div>
        </div>
      </section>

      {/* ── Services Section ─────────────────────────────────────────────────── */}
      <section id="services" className="section-padding" aria-label="Services">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold" style={{ fontFamily: "Poppins" }}>Services I Offer</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Comprehensive solutions tailored to your business needs</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, idx) => {
              const Icon = service.icon;
              return (
                <div
                  key={idx}
                  className="p-8 rounded-xl bg-card border border-border card-hover cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  tabIndex={0}
                  role="article"
                  aria-label={service.title}
                  onMouseEnter={() => setHoveredService(idx)}
                  onMouseLeave={() => setHoveredService(null)}
                  onFocus={() => setHoveredService(idx)}
                  onBlur={() => setHoveredService(null)}
                >
                  <div className={`w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 transition-all duration-300 ${hoveredService === idx ? "bg-primary/20 scale-110" : ""}`}>
                    <Icon className="w-6 h-6 text-primary" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-bold mb-3" style={{ fontFamily: "Poppins" }}>{service.title}</h3>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="flex items-start gap-2 text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" aria-hidden="true" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Featured Project ─────────────────────────────────────────────────── */}
      <section className="section-padding bg-secondary/30" aria-label="Featured Project">
        <div className="container">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center space-y-4">
              <p className="text-primary text-sm font-semibold tracking-wide uppercase" style={{ fontFamily: "Poppins" }}>Featured Project</p>
              <h2 className="text-3xl md:text-4xl font-bold" style={{ fontFamily: "Poppins" }}>AI Early Detection of Non-Adherence Medication</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2" style={{ fontFamily: "Poppins" }}>Project Overview</h3>
                  <p className="text-muted-foreground">Developed an AI-powered healthcare solution designed to identify patients who are at risk of not following prescribed medication schedules.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-3" style={{ fontFamily: "Poppins" }}>Key Features</h3>
                  <ul className="space-y-2">
                    {["Predictive Analytics", "Risk Detection Algorithms", "Patient Monitoring", "Medication Adherence Tracking", "Healthcare Data Analysis", "Early Intervention Recommendations"].map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary" aria-hidden="true" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2" style={{ fontFamily: "Poppins" }}>Business Impact</h3>
                  <p className="text-muted-foreground">The system helps healthcare providers identify potential medication non-adherence before it becomes critical, enabling proactive intervention.</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="p-6 rounded-xl bg-background border border-border">
                  <h3 className="font-semibold mb-4" style={{ fontFamily: "Poppins" }}>Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {["Artificial Intelligence", "Machine Learning", "Data Analytics", "Predictive Modeling", "Healthcare Data Processing"].map((tech, idx) => (
                      <span key={idx} className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Benefits ─────────────────────────────────────────────────────────── */}
      <section className="section-padding" aria-label="Benefits">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold" style={{ fontFamily: "Poppins" }}>What You Gain</h2>
            <p className="text-lg text-muted-foreground">Measurable results that drive business growth</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="p-6 rounded-lg bg-secondary/50 border border-border hover:border-primary transition-colors">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span className="font-medium">{benefit}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Choose ───────────────────────────────────────────────────────── */}
      <section className="section-padding bg-secondary/30" aria-label="Why Choose Us">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold" style={{ fontFamily: "Poppins" }}>Why Clients Choose AIAutomationHub</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChoose.map((reason, idx) => (
              <div key={idx} className="p-6 rounded-xl bg-background border border-border card-hover">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <span className="text-primary font-bold">{idx + 1}</span>
                </div>
                <h3 className="font-semibold" style={{ fontFamily: "Poppins" }}>{reason}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process ──────────────────────────────────────────────────────────── */}
      <section id="process" className="section-padding" aria-label="Our Process">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold" style={{ fontFamily: "Poppins" }}>How We Work</h2>
            <p className="text-lg text-muted-foreground">A proven 6-step process to deliver exceptional results</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {processSteps.map((item, idx) => (
              <div key={idx} className="relative">
                <div className="p-6 rounded-xl bg-card border border-border card-hover h-full">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold flex-shrink-0" style={{ fontFamily: "Poppins" }}>
                      {item.step}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold mb-2" style={{ fontFamily: "Poppins" }}>{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </div>
                {idx < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-primary to-transparent" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact Form ─────────────────────────────────────────────────────── */}
      <section id="contact-form" className="section-padding" aria-label="Contact Form">
        <div className="container">
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold" style={{ fontFamily: "Poppins" }}>Get In Touch</h2>
              <p className="text-lg text-muted-foreground">Fill out the form below and we'll get back to you within 24 hours.</p>
            </div>
            <ContactForm />

            {/* Quick contact options below form */}
            <div className="pt-6 border-t border-border grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
              <a
                href={`tel:${PHONE_CLEAN}`}
                aria-label={`Call us at ${PHONE}`}
                onClick={() => track("phone_click", { location: "below_form" })}
                className="flex flex-col items-center gap-2 p-4 rounded-xl border border-border hover:border-primary hover:bg-primary/5 transition-all group focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                <Phone className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" aria-hidden="true" />
                <span className="font-semibold text-sm">Call Us</span>
                <span className="text-xs text-muted-foreground">{PHONE}</span>
              </a>
              <a
                href={`mailto:${EMAIL}?subject=Project%20Inquiry`}
                aria-label={`Email us at ${EMAIL}`}
                onClick={() => track("email_click", { location: "below_form" })}
                className="flex flex-col items-center gap-2 p-4 rounded-xl border border-border hover:border-primary hover:bg-primary/5 transition-all group focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                <Mail className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" aria-hidden="true" />
                <span className="font-semibold text-sm">Email Us</span>
                <span className="text-xs text-muted-foreground">{EMAIL}</span>
              </a>
              <a
                href={WA_BASE}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat with us on WhatsApp"
                onClick={() => track("whatsapp_click", { location: "below_form" })}
                className="flex flex-col items-center gap-2 p-4 rounded-xl border border-border hover:border-primary hover:bg-primary/5 transition-all group focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                <MessageSquare className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" aria-hidden="true" />
                <span className="font-semibold text-sm">WhatsApp</span>
                <span className="text-xs text-muted-foreground">Chat instantly</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA Banner ───────────────────────────────────────────────────────── */}
      <section id="contact" className="section-padding bg-primary text-primary-foreground" aria-label="Call to Action">
        <div className="container text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold" style={{ fontFamily: "Poppins" }}>Let's Build Something Amazing</h2>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              Ready to automate your business, build a powerful website, or implement smarter systems? Let's discuss your project.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* ✅ FIX: "Start Your Project Today" scrolls to contact form */}
            <Button
              size="lg"
              variant="secondary"
              className="gap-2 button-hover"
              onClick={() => { scrollTo("contact-form"); track("cta_click", { button: "start_project" }); }}
              aria-label="Start your project today"
            >
              Start Your Project Today
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Button>

            {/* ✅ FIX: Phone button is now an anchor that opens dialer */}
            <a
              href={`tel:${PHONE_CLEAN}`}
              aria-label={`Call us at ${PHONE}`}
              onClick={() => track("phone_click", { location: "cta_banner" })}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md border border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 transition-all hover:scale-105 font-medium text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-foreground"
            >
              <Phone className="w-4 h-4" aria-hidden="true" />
              {PHONE}
            </a>
          </div>

          <div className="pt-8 border-t border-primary-foreground/20 space-y-2">
            {/* ✅ FIX: Email and Instagram are proper links */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm opacity-75">
              <a
                href={`mailto:${EMAIL}?subject=Project%20Inquiry`}
                aria-label="Send us an email"
                onClick={() => track("email_click", { location: "footer_cta" })}
                className="hover:opacity-100 underline underline-offset-2 transition-opacity"
              >
                {EMAIL}
              </a>
              <span className="hidden sm:inline">|</span>
              <a
                href="https://www.instagram.com/aiautomationhub_03"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Instagram"
                onClick={() => track("social_click", { platform: "instagram" })}
                className="hover:opacity-100 underline underline-offset-2 transition-opacity"
              >
                @aiautomationhub_03
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ───────────────────────────────────────────────────────────── */}
      <footer className="bg-secondary/50 border-t border-border py-8" role="contentinfo">
        <div className="container text-center text-sm text-muted-foreground">
          <p>© 2026 AIAutomationHub. All rights reserved.</p>
          <p className="mt-2">Helping businesses automate operations, build modern websites, and scale faster with AI.</p>
        </div>
      </footer>

      {/* ── Floating WhatsApp Button ─────────────────────────────────────────── */}
      {showFloatingWA && (
        <a
          href={WA_BASE}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open WhatsApp chat"
          onClick={() => track("whatsapp_click", { location: "floating_button" })}
          className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg flex items-center justify-center hover:scale-110 hover:shadow-xl transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366]"
          title="Chat on WhatsApp"
        >
          {/* WhatsApp SVG icon */}
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7" aria-hidden="true">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        </a>
      )}
    </div>
  );
}
