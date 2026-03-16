export function Process() {
  const steps = [
    {
      number: 1,
      title: "Document the Issue",
      description:
        "Keep a written log of dates when the elevator is out of service. Take photos of out-of-service signs with timestamps. Note how long you have to wait, whether you can access your unit, and any impact on daily life (carrying groceries, mobility issues, etc.).",
    },
    {
      number: 2,
      title: "Send Written Notice",
      description:
        "Email your landlord or property management company. Describe the problem, cite RLTO sections 5-12-070 and 5-12-110, and state that you are requesting the issue be remedied within 14 days. Email is sufficient under the RLTO — certified mail is not required.",
    },
    {
      number: 3,
      title: "Wait 14 Days",
      description:
        "The landlord has 14 days from receiving your written notice to fix the elevator. Keep documenting the outage during this period. If the landlord makes partial repairs that don't fully resolve the issue, the clock does not reset.",
    },
    {
      number: 4,
      title: "Exercise Your Remedies",
      description:
        "If the elevator is not fixed within 14 days, you may withhold a reasonable portion of your rent reflecting the reduced value of your unit, recover damages, or terminate the lease. Any remedy should be proportional to the impact of the outage.",
    },
  ];

  return (
    <section id="process" className="bg-white px-4 py-16 md:py-24">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-2xl font-bold text-foreground md:text-3xl">
          The Process
        </h2>
        <p className="mt-4 text-base leading-relaxed text-muted">
          Follow these steps to formally exercise your rights under the RLTO.
        </p>

        <div className="mt-10 space-y-0">
          {steps.map((step, index) => (
            <div key={step.number} className="relative flex gap-4 pb-10">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="absolute left-5 top-10 h-[calc(100%-2.5rem)] w-px bg-border" />
              )}
              {/* Step number */}
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-bold text-white">
                {step.number}
              </div>
              {/* Step content */}
              <div className="pt-1.5">
                <h3 className="text-lg font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* 311 Tip */}
        <div className="mt-4 rounded-lg border border-accent/20 bg-accent-light p-5">
          <p className="text-sm leading-relaxed text-foreground">
            <strong>Tip: File a 311 complaint.</strong> You can call{" "}
            <strong>311</strong> (or visit{" "}
            <a
              href="https://311.chicago.gov"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-accent underline underline-offset-2"
            >
              311.chicago.gov
            </a>
            ) to request a city building inspection for elevator issues. This
            creates an official record of the violation, and{" "}
            <strong>you can remain anonymous</strong>. An inspection report from
            the city strengthens any future claim.
          </p>
        </div>
      </div>
    </section>
  );
}
