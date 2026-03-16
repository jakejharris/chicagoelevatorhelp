const articles = [
  {
    title:
      "Trapped: Neglected Elevators Put Chicago's Public Housing Residents At Risk",
    publication: "Better Government Association / WBEZ",
    date: "June 2018",
    url: "https://projects.bettergov.org/2018/trapped/neglected-elevators/",
    summary:
      "A seven-month investigation found firefighters responded to elevator rescues at 54 of 88 CHA buildings — a rate four times higher than other Chicago buildings. None of the CHA's 150 elevators was inspected for the entire year of 2016.",
  },
  {
    title:
      "Tenants of 8-story Chicago apartment building left with no elevator service for weeks",
    publication: "CBS News Chicago",
    date: "September 2024",
    url: "https://www.cbsnews.com/chicago/news/chicago-apartment-no-elevators/",
    summary:
      "Residents of a Hyde Park apartment building were left without any elevator service for approximately six weeks after an electrical fire rendered both elevators non-operational. Tenants requested rent credits.",
  },
  {
    title:
      "Lakeview Residents 'Trapped' In Apartments As Elevator Issues Plague Affordable Housing Complex",
    publication: "Block Club Chicago",
    date: "September 2024",
    url: "https://blockclubchicago.org/2024/09/23/lakeview-residents-trapped-in-apartments-as-elevator-issues-plague-affordable-housing-complex/",
    summary:
      "Residents of a seven-story affordable housing complex reported the main elevator was down for most of the summer. A wheelchair-using top-floor resident had to call the Fire Department to be carried up five flights of stairs.",
  },
  {
    title:
      "Broken elevators leave seniors stuck in lobby at West Side Chicago Housing Authority building",
    publication: "CBS News Chicago",
    date: "March 2025",
    url: "https://www.cbsnews.com/chicago/news/broken-elevators-seniors-stuck-chicago-housing-authority-building/",
    summary:
      "At a 181-unit CHA senior high-rise, both elevators were non-functional. Seniors in wheelchairs were stranded in the lobby. A stroke survivor on the 18th floor had to be carried down on a stretcher by firefighters.",
  },
  {
    title:
      "'Someone's Going To Die': Elevators At CHA Apartments Have Seniors Afraid For Their Safety",
    publication: "CBS News Chicago",
    date: "February 2019",
    url: "https://www.cbsnews.com/chicago/news/failed-elevator-inspections-cha-larrabee-apartments-seniors/",
    summary:
      "Elevators at a Lincoln Park CHA building failed multiple inspections over 14 months, with violations labeled \"dangerous & hazardous.\" A 2016 citation confirmed an elevator was \"jerking when in travel.\"",
  },
  {
    title:
      "CHA building for 200 seniors in Englewood has had only one working elevator since April",
    publication: "CBS News Chicago",
    date: "August 2022",
    url: "https://www.cbsnews.com/chicago/news/cha-building-for-200-seniors-in-englewood-has-had-only-one-working-elevator-since-april-its-been-hell/",
    summary:
      "One elevator had been non-functional since April, leaving approximately 200 residents dependent on a single elevator that broke down 3-4 times monthly. Paramedics had to carry a resident down 12 floors via stairs.",
  },
  {
    title:
      "Disabled Brother, Sister Trapped In Apartment With Broken Elevator Say They Feel Like Captives",
    publication: "CBS News Chicago",
    date: "September 2019",
    url: "https://www.cbsnews.com/chicago/news/disabled-brother-sister-trapped-in-apartment-with-broken-elevator-say-they-feel-like-captives/",
    summary:
      "Two wheelchair-using siblings sharing a sixth-floor apartment were trapped for a week with no working elevator, unable to leave their unit or attend medical appointments.",
  },
  {
    title:
      "Seniors take over CHA lobby to protest faulty elevators, demand oversight",
    publication: "Chicago Sun-Times",
    date: "June 2018",
    url: "https://chicago.suntimes.com/2018/6/19/18405836/seniors-take-over-cha-lobby-to-protest-faulty-elevators-demand-oversight",
    summary:
      "Senior citizens staged a \"die-in\" at CHA's downtown office to protest broken elevators. They demanded new elevators in all senior buildings and accessible bathrooms with grab bars.",
  },
  {
    title:
      "OUT OF ORDER — Legal advice on tenant rights when elevator is down for months",
    publication: "Chicago Tribune",
    date: "March 1996",
    url: "https://www.chicagotribune.com/news/ct-xpm-1996-03-22-9603220246-story.html",
    summary:
      "An attorney column explaining that under the RLTO, tenants can withhold rent for loss of elevator use, may terminate the lease with 14 days' written notice, and can claim reimbursement for extra costs caused by the outage.",
  },
];

export function Precedent() {
  return (
    <section id="precedent" className="bg-white px-4 py-16 md:py-24">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-2xl font-bold text-foreground md:text-3xl">
          This Has Happened Before
        </h2>
        <p className="mt-4 text-base leading-relaxed text-muted">
          Elevator outages affecting Chicago tenants have been widely reported
          and investigated. These are real stories from Chicago buildings.
        </p>

        <div className="mt-8 space-y-4">
          {articles.map((article, index) => (
            <a
              key={index}
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-lg border border-border bg-card-bg p-5 transition-colors hover:border-accent/30 hover:bg-accent-light/50"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-base font-semibold leading-snug text-foreground">
                    {article.title}
                  </h3>
                  <p className="mt-1 text-xs font-medium text-accent">
                    {article.publication}{" "}
                    <span className="text-muted">&middot; {article.date}</span>
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {article.summary}
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
    </section>
  );
}
