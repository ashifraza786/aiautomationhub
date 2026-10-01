import { ArrowLeft, Home, SearchX } from "lucide-react";
import { Link } from "wouter";

export default function NotFound() {
  return (
    <div className="min-h-screen overflow-hidden bg-background text-foreground">
      {/* Background atmosphere */}
      <div className="pointer-events-none fixed inset-0" aria-hidden="true">
        <div className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/[0.035] blur-3xl" />

        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(32,41,54,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(32,41,54,0.6) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
            maskImage:
              "radial-gradient(circle at center, black 0%, transparent 72%)",
          }}
        />
      </div>

      {/* Minimal top navigation */}
      <header className="relative border-b border-border/70">
        <div className="container flex h-16 items-center md:h-[72px]">
          <Link
            href="/"
            className="inline-flex min-h-11 items-center rounded-md text-[18px] font-semibold tracking-[-0.02em] text-foreground transition-colors hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            aria-label="AI AutomationHub home"
          >
            <span className="text-primary">AI</span>
            <span> AutomationHub</span>
          </Link>
        </div>
      </header>

      <main className="relative flex min-h-[calc(100vh-72px)] items-center justify-center px-5 py-20 md:px-7 lg:px-8">
        <section
          className="w-full max-w-[680px] text-center"
          aria-labelledby="not-found-title"
        >
          {/* System indicator */}
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-border bg-surface shadow-[0_0_40px_rgba(79,124,255,0.06)]">
            <SearchX
              className="h-6 w-6 text-primary"
              strokeWidth={1.7}
              aria-hidden="true"
            />
          </div>

          {/* Error code */}
          <p className="mt-7 text-xs font-semibold uppercase tracking-[0.14em] text-primary">
            ERROR 404
          </p>

          <h1
            id="not-found-title"
            className="mt-4 text-4xl font-bold leading-[1.08] tracking-[-0.03em] text-foreground md:text-5xl"
          >
            This page doesn't exist.
          </h1>

          <p className="mx-auto mt-5 max-w-[560px] text-base leading-7 text-muted-foreground md:text-[17px]">
            The page you're looking for may have moved, changed, or not been
            built yet. Let's get you back to something useful.
          </p>

          {/* Actions */}
          <div className="mt-9 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
            <Link
              href="/"
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-primary px-6 text-sm font-semibold text-primary-foreground shadow-[0_0_30px_rgba(79,124,255,0.12)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary/95 hover:shadow-[0_0_36px_rgba(79,124,255,0.2)] focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              <Home className="h-4 w-4" aria-hidden="true" />
              Back to Home
            </Link>

            <button
              type="button"
              onClick={() => window.history.back()}
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-border bg-surface px-6 text-sm font-semibold text-foreground transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/35 hover:bg-elevated focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              Go Back
            </button>
          </div>

          <p className="mt-8 text-xs leading-5 text-muted-foreground">
            AI AutomationHub · Business Technology & Digital Solutions
          </p>
        </section>
      </main>
    </div>
  );
}
