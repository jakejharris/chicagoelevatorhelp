const resources = [
  {
    category: "Official Sources",
    items: [
      {
        name: "Chicago RLTO Full Text",
        url: "https://codelibrary.amlegal.com/codes/chicago/latest/chicago_il/0-0-0-2639041",
        description:
          "The official full text of the Chicago Residential Landlord and Tenant Ordinance (Chapter 5-12) via American Legal Publishing.",
      },
      {
        name: "City of Chicago RLTO Summary (PDF)",
        url: "https://www.chicago.gov/content/dam/city/depts/doh/RLTO/RLTO%20Summary_2023_EN_FINAL.pdf",
        description:
          "The official plain-language summary of tenant and landlord rights and obligations under the RLTO. Landlords are required to provide this to tenants.",
      },
      {
        name: "Chicago RLTO Information Page",
        url: "https://www.chicago.gov/city/en/depts/doh/provdrs/landlords/svcs/residential-landlord-and-tenant-ordinance.html",
        description:
          "The Department of Housing's RLTO information page. Contact: 312-744-3653 or DOH@cityofchicago.org.",
      },
      {
        name: "Chicago 311 — File a Complaint",
        url: "https://311.chicago.gov",
        description:
          "Report elevator issues to the City of Chicago. Request a building inspection to create an official record. You can file anonymously online, by phone (call 311), or through the CHI311 app.",
      },
      {
        name: "Chicago Dept. of Buildings — Elevator Bureau",
        url: "https://www.chicago.gov/city/en/depts/bldgs/provdrs/elevators.html",
        description:
          "The city office responsible for elevator inspections, accident investigations, and 311 complaint responses. Phone: 312-743-3594.",
      },
    ],
  },
  {
    category: "Tenant Organizations",
    items: [
      {
        name: "Metropolitan Tenants Organization (MTO)",
        url: "https://www.tenants-rights.org/",
        description:
          "Chicago's leading tenant rights organization. Free tenant counseling, organizing support, and RLTO guidance. Renters' Rights Hotline: (773) 292-4988, Mon-Fri 1-5 PM.",
      },
      {
        name: "Autonomous Tenants Union (ATU)",
        url: "https://www.autonomoustenantsunion.org/",
        description:
          "A tenant-led organization supporting Chicago renters through direct action, mutual aid, and tenant organizing.",
      },
      {
        name: "All-Chicago Tenant Alliance (ACTA)",
        url: "https://chicagotenants.com/",
        description:
          "Organization of Chicago tenant unions building durable, organized tenant power across the city.",
      },
      {
        name: "Chicago Tenants Movement",
        url: "https://chicagotenants.org/",
        description:
          "Collaborative network of tenant organizations and housing organizers that helps renters build democratic tenant unions.",
      },
    ],
  },
  {
    category: "Free Legal Aid",
    items: [
      {
        name: "Legal Aid Chicago (formerly LAF)",
        url: "https://legalaidchicago.org/",
        description:
          "Free civil legal assistance for low-income Chicagoans, including tenant rights cases. Phone: (312) 341-1070. Apply online or by phone.",
      },
      {
        name: "CARPLS Legal Aid",
        url: "https://carpls.org/",
        description:
          "Free legal advice by phone for Cook County residents. Hotline: (312) 738-9200, Mon-Fri 9 AM-4:30 PM, plus evening hours Mon & Wed 4:30-7:30 PM.",
      },
      {
        name: "Law Center for Better Housing (LCBH)",
        url: "https://lcbh.org/",
        description:
          "The only non-profit law firm in Chicago focusing solely on low-to-moderate income renters in the private housing market. Phone: (312) 347-7600.",
      },
      {
        name: "Illinois Legal Aid Online",
        url: "https://www.illinoislegalaid.org/legal-information/chicago-residential-landlord-tenant-ordinance-or-rlto",
        description:
          "Free legal information, forms, and guides on tenant rights under the RLTO. Includes an online intake system for finding legal help.",
      },
      {
        name: "Uptown People's Law Center",
        url: "https://www.uplcchicago.org/what-we-do/tenants-rights/tenants-rights.html",
        description:
          "Free legal services for tenants in select North Side zip codes (60613, 60625, 60626, 60640, 60660). Walk-in hours Tue & Thu 10 AM-4 PM. Phone: (773) 769-1411.",
      },
      {
        name: "Chicago Right to Counsel Program",
        url: "https://www.chicago.gov/city/en/depts/doh/provdrs/renters/svcs/right-to-counsel.html",
        description:
          "Free full legal representation for Chicago residents facing eviction with household income at or below 80% AMI. Call (855) 956-5763.",
      },
    ],
  },
];

export function Resources() {
  return (
    <section id="resources" className="bg-background px-4 py-16 md:py-24">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-2xl font-bold text-foreground md:text-3xl">
          Resources
        </h2>
        <p className="mt-4 text-base leading-relaxed text-muted">
          Organizations and tools that can help you exercise your rights as a
          Chicago tenant.
        </p>

        <div className="mt-8 space-y-10">
          {resources.map((group) => (
            <div key={group.category}>
              <h3 className="text-lg font-semibold text-foreground">
                {group.category}
              </h3>
              <div className="mt-4 space-y-3">
                {group.items.map((item) => (
                  <a
                    key={item.name}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block rounded-lg border border-border bg-card-bg p-4 transition-colors hover:border-accent/30 hover:bg-accent-light/50"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h4 className="font-semibold text-foreground">
                          {item.name}
                        </h4>
                        <p className="mt-1 text-sm leading-relaxed text-muted">
                          {item.description}
                        </p>
                      </div>
                      <svg
                        className="mt-1 h-4 w-4 shrink-0 text-muted"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                      </svg>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Organizing callout */}
        <div className="mt-10 rounded-lg border border-accent/20 bg-accent-light p-5">
          <p className="text-sm leading-relaxed text-foreground">
            <strong>Organize with your neighbors.</strong> The RLTO explicitly
            protects your right to organize with other tenants (Section
            5-12-150). Tenant unions and organized groups are recognized under
            the ordinance, and landlords are prohibited from retaliating against
            tenants who participate in collective action. A coordinated effort
            from multiple tenants is often more effective than individual
            requests.
          </p>
        </div>
      </div>
    </section>
  );
}
