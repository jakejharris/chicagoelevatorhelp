export function Rights() {
  return (
    <section id="rights" className="bg-background px-4 py-16 md:py-24">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-2xl font-bold text-foreground md:text-3xl">
          Your Rights Under the RLTO
        </h2>
        <p className="mt-4 text-base leading-relaxed text-muted">
          The Chicago Residential Landlord and Tenant Ordinance (RLTO) provides
          strong protections for tenants. Elevator maintenance is{" "}
          <strong className="text-foreground">explicitly listed</strong> in the
          ordinance as a landlord obligation — it is not a gray area.
        </p>

        {/* Key statute callouts */}
        <div className="mt-8 space-y-4">
          <CalloutCard
            section="&sect; 5-12-070"
            title="Landlord's Duty to Maintain"
            quote="The landlord shall maintain the premises in compliance with all applicable provisions of the municipal code and shall promptly make any and all repairs necessary to fulfill this obligation."
            text="This duty covers the entire property — both your individual unit and common areas including elevators, stairwells, and hallways. Elevators must comply with the Chicago Municipal Code (Chapter 14X-10), which requires annual inspections."
          />

          <CalloutCard
            section="&sect; 5-12-110"
            title="Tenant Remedies"
            quote="Material noncompliance with Section 5-12-070 includes, but is not limited to: ... failure to maintain elevators in compliance with applicable provisions of the municipal code."
            text='When a landlord fails to maintain elevators, it constitutes "material noncompliance" with the lease. After providing written notice and a 14-day cure period, tenants may pursue remedies including rent withholding, damages recovery, or lease termination.'
          />

          <CalloutCard
            section="&sect; 5-12-150"
            title="Anti-Retaliation Protections"
            quote=""
            text="Landlords may not retaliate against tenants who exercise their rights — including those who file complaints, request repairs, organize with neighbors, or join tenant unions. If a landlord takes adverse action within 12 months of a protected activity, it is presumed retaliatory. Tenants may recover up to two months' rent or twice their damages, plus attorney's fees."
          />

          <CalloutCard
            section="&sect; 5-12-180"
            title="Attorney's Fees"
            quote=""
            text="The prevailing plaintiff in any RLTO action recovers all court costs and reasonable attorney's fees. This makes it financially viable for tenants to bring claims, since the landlord pays the tenant's legal costs if the tenant wins."
          />
        </div>

        {/* Remedies */}
        <h3 className="mt-12 text-xl font-semibold text-foreground">
          Available Remedies
        </h3>
        <p className="mt-2 text-base leading-relaxed text-muted">
          After providing written notice and waiting 14 days for the landlord to
          fix the issue, the RLTO provides these options:
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <RemedyCard
            title="Withhold Rent"
            description="Deduct an amount from your rent that reasonably reflects the reduced value of your unit due to the elevator outage. You must state the amount in your written notice. (§ 5-12-110(d))"
          />
          <RemedyCard
            title="Repair and Deduct"
            description="For repairs costing $500 or less (or half the monthly rent, whichever is greater), you may hire the repair yourself and deduct the cost from rent with paid receipts. (§ 5-12-110(c))"
          />
          <RemedyCard
            title="Recover Damages"
            description="File suit to recover damages based on the reduction in fair rental value, plus seek injunctive relief ordering the landlord to make repairs. Attorney's fees are recoverable. (§ 5-12-110(e))"
          />
          <RemedyCard
            title="Terminate the Lease"
            description="If the noncompliance renders the premises not reasonably fit and habitable and is not remedied within 14 days, you may terminate the rental agreement. The landlord must return all prepaid rent and security deposits. (§ 5-12-110(a))"
          />
        </div>

        {/* Applicability note */}
        <div className="mt-8 rounded-lg border border-accent/20 bg-accent-light p-5">
          <p className="text-sm leading-relaxed text-foreground">
            <strong>Who does the RLTO cover?</strong> The RLTO applies to most
            residential rental properties in Chicago. It does not cover
            owner-occupied buildings with 6 or fewer units, hotels, dormitories,
            or non-residential rentals. If you&apos;re unsure whether the RLTO
            applies to your situation, contact the{" "}
            <a
              href="https://www.tenants-rights.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-accent underline underline-offset-2"
            >
              Metropolitan Tenants Organization
            </a>{" "}
            hotline at (773) 292-4988.
          </p>
        </div>
      </div>
    </section>
  );
}

function CalloutCard({
  section,
  title,
  quote,
  text,
}: {
  section: string;
  title: string;
  quote: string;
  text: string;
}) {
  return (
    <div className="rounded-lg border border-border bg-card-bg p-5">
      <div className="flex items-start gap-3">
        <span
          className="mt-0.5 shrink-0 rounded bg-accent/10 px-2 py-1 text-xs font-semibold text-accent"
          dangerouslySetInnerHTML={{ __html: section }}
        />
        <div>
          <h4 className="font-semibold text-foreground">{title}</h4>
          {quote && (
            <blockquote className="mt-2 border-l-2 border-accent/30 pl-3 text-sm italic leading-relaxed text-foreground/80">
              {quote}
            </blockquote>
          )}
          <p className="mt-2 text-sm leading-relaxed text-muted">{text}</p>
        </div>
      </div>
    </div>
  );
}

function RemedyCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-lg border border-border bg-card-bg p-5">
      <h4 className="font-semibold text-foreground">{title}</h4>
      <p className="mt-2 text-sm leading-relaxed text-muted">{description}</p>
    </div>
  );
}
