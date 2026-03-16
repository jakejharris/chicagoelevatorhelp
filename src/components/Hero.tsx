export function Hero() {
  return (
    <section className="bg-white px-4 pb-16 pt-12 md:pb-24 md:pt-20">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-3xl font-bold leading-tight tracking-tight text-foreground md:text-5xl md:leading-tight">
          Your building&apos;s elevator is broken.
          <br />
          <span className="text-accent">Here&apos;s what the law says.</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted">
          A free resource for Chicago tenants experiencing prolonged elevator
          outages. Learn your rights under the Chicago Residential Landlord and
          Tenant Ordinance (RLTO) and take action.
        </p>
        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <a
            href="#template"
            className="inline-flex h-12 items-center justify-center rounded-lg bg-accent px-8 text-base font-semibold text-white transition-colors hover:bg-accent-dark"
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
