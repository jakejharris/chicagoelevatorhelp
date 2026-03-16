export function Footer() {
  return (
    <footer className="border-t border-border bg-white px-4 py-10">
      <div className="mx-auto max-w-3xl">
        <p className="text-xs leading-relaxed text-muted">
          This website is an educational resource about Chicago tenant rights
          under the Residential Landlord and Tenant Ordinance (RLTO). It does
          not constitute legal advice and is not affiliated with any property
          management company, landlord, or legal organization. For legal advice
          specific to your situation, consult a qualified attorney.
        </p>
        <p className="mt-4 text-xs text-muted/60">
          &copy; {new Date().getFullYear()} chicagoelevator.help
        </p>
      </div>
    </footer>
  );
}
