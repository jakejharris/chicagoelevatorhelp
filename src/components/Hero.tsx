export function Hero() {
  return (
    <section className="bg-white px-4 pb-20 pt-16 md:pb-32 md:pt-28">
      <div className="mx-auto max-w-4xl text-center">
        {/* Eyebrow */}
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
          Chicago Tenant Rights
        </p>

        {/* Headline — serif display, oversized */}
        <h1 className="mt-5 font-display text-[2rem] leading-[1.1] tracking-tight text-foreground [text-wrap:balance] sm:text-5xl md:text-6xl lg:text-7xl">
          Your elevator is broken.
          <br className="hidden sm:block" />
          <span className="text-accent"> The law is on your side.</span>
        </h1>

        {/* Divider accent */}
        <div className="mx-auto mt-8 h-px w-16 bg-accent/40" />

        {/* Subtitle — sans-serif, lighter weight, generous measure */}
        <p className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-muted md:text-lg md:leading-relaxed">
          A free resource for Chicago tenants experiencing prolonged elevator
          outages. Know your rights under the RLTO. Send a formal notice in
          under two minutes.
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <a
            href="#template"
            className="inline-flex h-12 items-center justify-center rounded-lg bg-accent px-8 text-base font-semibold text-white shadow-sm transition-colors hover:bg-accent-dark"
          >
            Use the Email Template
          </a>
          <a
            href="#rights"
            className="inline-flex h-12 items-center justify-center rounded-lg border border-border px-8 text-base font-semibold text-foreground transition-colors hover:bg-gray-50"
          >
            Learn Your Rights
          </a>
        </div>
      </div>
    </section>
  );
}
