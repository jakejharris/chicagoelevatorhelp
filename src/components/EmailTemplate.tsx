"use client";

import { useState, useMemo } from "react";

interface FormData {
  tenantName: string;
  unitNumber: string;
  buildingAddress: string;
  floorNumber: string;
  monthlyRent: string;
  totalElevators: string;
  elevatorsOutOfService: string;
  outageDuration: string;
  requestedCredit: string;
  landlordName: string;
}

const defaultForm: FormData = {
  tenantName: "",
  unitNumber: "",
  buildingAddress: "",
  floorNumber: "",
  monthlyRent: "",
  totalElevators: "",
  elevatorsOutOfService: "",
  outageDuration: "",
  requestedCredit: "",
  landlordName: "",
};

function generateEmail(form: FormData): string {
  const today = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const tenantName = form.tenantName || "[Your Name]";
  const unitNumber = form.unitNumber || "[Unit Number]";
  const buildingAddress = form.buildingAddress || "[Building Address]";
  const floorNumber = form.floorNumber || "[Floor Number]";
  const monthlyRent = form.monthlyRent || "[Monthly Rent]";
  const totalElevators = form.totalElevators || "[Total Elevators]";
  const elevatorsOut = form.elevatorsOutOfService || "[Number Out of Service]";
  const outageDuration = form.outageDuration || "[Duration]";
  const requestedCredit = form.requestedCredit || "[Requested Amount]";
  const landlordName = form.landlordName || "[Landlord/Management Company]";

  return `Dear ${landlordName},

I am writing as a tenant of ${buildingAddress}, Unit ${unitNumber}, located on the ${floorNumber} floor. My monthly rent is $${monthlyRent}.

I am writing to formally notify you that the building's elevator service is not in compliance with the applicable provisions of the Chicago Municipal Code. Of the ${totalElevators} elevator(s) in the building, ${elevatorsOut} has/have been out of service for approximately ${outageDuration}. This ongoing outage significantly impacts my ability to access my unit and enjoy the premises I am paying for.

Under the Chicago Residential Landlord and Tenant Ordinance (RLTO), specifically:

- Section 5-12-070 requires landlords to maintain the premises in compliance with all applicable building code requirements that materially affect health and safety, including the maintenance of common areas.

- Section 5-12-110(a) identifies "failure to maintain elevators in compliance with applicable provisions of the municipal code" as a condition constituting material noncompliance with the rental agreement.

This letter serves as the written notice required under RLTO Section 5-12-110. I am requesting that full elevator service be restored within 14 days of your receipt of this notice.

Additionally, I am requesting a rent credit of $${requestedCredit} to reflect the reduced value of my unit during the period in which elevator service has been unavailable. I believe this amount reasonably reflects the diminished habitability and accessibility of the premises.

If elevator service is not restored within the 14-day period, I intend to exercise the remedies available to me under the RLTO, which may include withholding a portion of rent proportional to the reduced value of the premises.

I am aware that RLTO Section 5-12-150 prohibits retaliatory conduct against tenants who exercise their rights under the ordinance.

I look forward to a prompt resolution of this matter.

Sincerely,
${tenantName}
Unit ${unitNumber}
${today}`;
}

function generateSubject(form: FormData): string {
  const address = form.buildingAddress || "[Building Address]";
  const unit = form.unitNumber || "[Unit]";
  return `Formal Notice: Elevator Noncompliance — ${address}, Unit ${unit}`;
}

export function EmailTemplate() {
  const [form, setForm] = useState<FormData>(defaultForm);
  const [copied, setCopied] = useState(false);

  const emailText = useMemo(() => generateEmail(form), [form]);
  const emailSubject = useMemo(() => generateSubject(form), [form]);

  function updateField(field: keyof FormData, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  async function copyToClipboard() {
    try {
      await navigator.clipboard.writeText(emailText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback for older browsers
      const textarea = document.createElement("textarea");
      textarea.value = emailText;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  }

  function openInMail() {
    const subject = encodeURIComponent(emailSubject);
    const body = encodeURIComponent(emailText);
    window.location.href = `mailto:?subject=${subject}&body=${body}`;
  }

  return (
    <section id="template" className="bg-background px-4 py-16 md:py-24">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-2xl font-bold text-foreground md:text-3xl">
          Email Template
        </h2>
        <p className="mt-4 text-base leading-relaxed text-muted">
          Fill in your details below to generate a professional notice to your
          landlord. All fields stay in your browser — nothing is stored or sent
          to any server.
        </p>

        {/* Form */}
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <FormField
            label="Your Name"
            value={form.tenantName}
            onChange={(v) => updateField("tenantName", v)}
            placeholder="Jane Doe"
          />
          <FormField
            label="Unit Number"
            value={form.unitNumber}
            onChange={(v) => updateField("unitNumber", v)}
            placeholder="12B"
          />
          <FormField
            label="Building Address"
            value={form.buildingAddress}
            onChange={(v) => updateField("buildingAddress", v)}
            placeholder="123 N. State Street"
            className="sm:col-span-2"
          />
          <FormField
            label="Floor Number"
            value={form.floorNumber}
            onChange={(v) => updateField("floorNumber", v)}
            placeholder="12th"
          />
          <FormField
            label="Monthly Rent ($)"
            value={form.monthlyRent}
            onChange={(v) => updateField("monthlyRent", v)}
            placeholder="1,800"
          />
          <FormField
            label="Total Elevators in Building"
            value={form.totalElevators}
            onChange={(v) => updateField("totalElevators", v)}
            placeholder="2"
          />
          <FormField
            label="Elevators Currently Out of Service"
            value={form.elevatorsOutOfService}
            onChange={(v) => updateField("elevatorsOutOfService", v)}
            placeholder="1"
          />
          <FormField
            label="Approximate Duration of Outage"
            value={form.outageDuration}
            onChange={(v) => updateField("outageDuration", v)}
            placeholder="3 weeks"
            className="sm:col-span-2"
          />
          <FormField
            label="Requested Credit Amount ($)"
            value={form.requestedCredit}
            onChange={(v) => updateField("requestedCredit", v)}
            placeholder="1,800"
            hint="A common request is one month's rent, but any amount that reasonably reflects the reduced value of your unit is appropriate."
            className="sm:col-span-2"
          />
          <FormField
            label="Landlord / Management Company Name"
            value={form.landlordName}
            onChange={(v) => updateField("landlordName", v)}
            placeholder="ABC Property Management"
            className="sm:col-span-2"
          />
        </div>

        {/* Live Preview */}
        <div className="mt-10">
          <h3 className="text-lg font-semibold text-foreground">
            Email Preview
          </h3>
          <p className="mt-1 text-sm text-muted">
            Subject: <span className="font-medium">{emailSubject}</span>
          </p>
          <div className="mt-3 max-h-96 overflow-y-auto rounded-lg border border-border bg-card-bg p-5">
            <pre className="whitespace-pre-wrap font-sans text-sm leading-relaxed text-foreground">
              {emailText}
            </pre>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <button
            onClick={copyToClipboard}
            className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-accent px-6 text-base font-semibold text-white transition-colors hover:bg-accent-dark"
          >
            {copied ? (
              <>
                <CheckIcon />
                Copied!
              </>
            ) : (
              <>
                <CopyIcon />
                Copy to Clipboard
              </>
            )}
          </button>
          <button
            onClick={openInMail}
            className="inline-flex h-12 items-center justify-center gap-2 rounded-lg border border-border px-6 text-base font-semibold text-foreground transition-colors hover:bg-gray-50"
          >
            <MailIcon />
            Open in Mail
          </button>
        </div>

        {/* Disclaimer */}
        <p className="mt-6 text-xs leading-relaxed text-muted">
          This template is for informational purposes only and does not
          constitute legal advice. Consider consulting with a tenant rights
          attorney for your specific situation.
        </p>
      </div>
    </section>
  );
}

function FormField({
  label,
  value,
  onChange,
  placeholder,
  hint,
  className = "",
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  hint?: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <label className="block text-sm font-medium text-foreground">
        {label}
      </label>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="mt-1 block w-full rounded-lg border border-border bg-white px-3 py-2.5 text-sm text-foreground placeholder:text-gray-400 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
      />
      {hint && (
        <p className="mt-1 text-xs leading-relaxed text-muted">{hint}</p>
      )}
    </div>
  );
}

function CopyIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
      <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="M22 7l-8.97 5.7a1.94 1.94 0 01-2.06 0L2 7" />
    </svg>
  );
}
