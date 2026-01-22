"use client";

import { useState } from "react";

/* ======================================================
   CERTIF-SCOPE — CALCULATION MODEL (CLIENT-SIDE)
   FINAL VERSION — STRICT, GUIDED, 3 STEPS
====================================================== */

// kgCO₂e / €
const EMISSION_FACTORS = {
  it: 0.30,
  services: 0.22,
  goods: 0.45,
  logistics: 0.18,
  travel: 0.25,
  accommodation: 0.27,
  other: 0.25,
} as const;

const METHODOLOGY =
  "Certif-Scope deterministic spend-based methodology v1.0";

/* ======================================================
   TYPES
====================================================== */

type AttestationLocale = "en" | "fr" | "de";

type FormErrors = {
  companyName?: string;
  sector?: string;
  submit?: string;
};

/* ======================================================
   SECTORS (DISPLAY ONLY)
====================================================== */

const SECTORS = [
  { value: "professional_services", label: "Professional services" },
  { value: "information_technology", label: "Information & technology" },
  { value: "manufacturing", label: "Manufacturing & industry" },
  { value: "construction", label: "Construction & real estate" },
  { value: "wholesale_retail", label: "Wholesale & retail" },
  { value: "transport_logistics", label: "Transport & logistics" },
  { value: "hospitality_events", label: "Hospitality, travel & events" },
  { value: "other", label: "Other activities" },
];

/* ======================================================
   CALCULATION
====================================================== */

function calculateTotalCO2e(expenses: Record<string, number>) {
  let totalKg = 0;

  for (const key in expenses) {
    const value = expenses[key] || 0;
    const factor =
      EMISSION_FACTORS[key as keyof typeof EMISSION_FACTORS] || 0;

    totalKg += value * factor;
  }

  return Math.round((totalKg / 1000) * 10) / 10;
}

/* ======================================================
   UI COMPONENTS
====================================================== */

function Accordion({
  title,
  intro,
  children,
  defaultOpen = false,
}: {
  title: string;
  intro?: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center px-5 py-4 bg-[#F8FAFC] text-left"
      >
        <span className="font-medium text-[#0B3A63]">{title}</span>
        <span className="text-sm text-gray-500">{open ? "−" : "+"}</span>
      </button>

      {open && (
        <div className="px-5 py-6 bg-white space-y-5">
          {intro && (
            <p className="text-sm text-gray-600 leading-relaxed">
              {intro}
            </p>
          )}
          {children}
        </div>
      )}
    </div>
  );
}

/* ======================================================
   MAIN FORM
====================================================== */

export default function AssessmentForm() {
  const currentYear = new Date().getFullYear();

  const [companyName, setCompanyName] = useState("");
  const [companyId, setCompanyId] = useState("");
  const [sector, setSector] = useState("");
  const [year, setYear] = useState(currentYear);
  const [country, setCountry] = useState("FR");

  const [attestationLocale, setAttestationLocale] =
    useState<AttestationLocale>("en");

  const [expenses, setExpenses] = useState({
    it: "",
    services: "",
    goods: "",
    logistics: "",
    travel: "",
    accommodation: "",
    other: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const update = (field: string, value: string) => {
    setExpenses((prev) => ({ ...prev, [field]: value }));
  };

  const numericExpenses = Object.fromEntries(
    Object.entries(expenses).map(([k, v]) => [k, Number(v) || 0])
  );

  const totalCO2e = calculateTotalCO2e(numericExpenses);

  const validate = (): boolean => {
    const nextErrors: FormErrors = {};

    if (!companyName.trim()) {
      nextErrors.companyName =
        "Company name is required to issue the attestation.";
    }

    if (!sector) {
      nextErrors.sector =
        "Please select a main sector of activity.";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validate()) return;

    setIsSubmitting(true);
    setErrors({});

    const payload = {
      companyName,
      companySector: sector,
      entityIdentifier: companyId || "",
      year: String(year),
      country,
      totalCO2e,
      methodology: METHODOLOGY,
      attestationLocale,
    };

    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        throw new Error("Payment initialization failed.");
      }

      const { url } = await res.json();
      window.location.href = url;
    } catch {
      setErrors({
        submit:
          "Unable to initiate payment. Please try again or refresh the page.",
      });
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-white">
      <section className="max-w-3xl mx-auto px-6 pt-12 pb-20 space-y-10">

        {/* CANONICAL PAGE HEADER — IDENTICAL TO SECONDARY PAGES */}
        <header className="mb-6">
          <p className="uppercase text-xs tracking-wider text-[#64748B] mb-3">
            CO₂e Attestation — Generation
          </p>

          <h1 className="text-3xl md:text-4xl font-extrabold text-[#0B3A63] mb-6">
            Generate your carbon attestation
          </h1>

          <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
            Indicative spend-based estimation. No audit. No physical data required.
          </p>

          <div className="w-20 h-[2px] bg-gray-300 mt-8" />
        </header>

        {/* CONTEXT */}
        <p className="text-sm text-gray-500">
          Step 1 of 3 — Company &amp; context
        </p>

        {/* STEP 1 */}
        <Accordion
          title="Company information"
          intro="Provide basic identification and context information. Fields marked with * are required."
          defaultOpen
        >
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium">
                Company / legal entity name *
              </label>
              <input
                type="text"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                className={`w-full border rounded-md px-4 py-2 mt-1 ${
                  errors.companyName ? "border-red-500" : ""
                }`}
              />
              {errors.companyName && (
                <p className="text-sm text-red-600 mt-1">
                  {errors.companyName}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium">
                Main sector of activity *
              </label>
              <select
                value={sector}
                onChange={(e) => setSector(e.target.value)}
                className={`w-full border rounded-md px-4 py-2 mt-1 ${
                  errors.sector ? "border-red-500" : ""
                }`}
              >
                <option value="">Select a sector</option>
                {SECTORS.map((s) => (
                  <option key={s.value} value={s.label}>
                    {s.label}
                  </option>
                ))}
              </select>
              {errors.sector && (
                <p className="text-sm text-red-600 mt-1">
                  {errors.sector}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium">
                Business identifier (optional)
              </label>
              <input
                type="text"
                value={companyId}
                onChange={(e) => setCompanyId(e.target.value)}
                className="w-full border rounded-md px-4 py-2 mt-1"
              />
            </div>
          </div>
        </Accordion>

        {/* REST OF FILE — UNCHANGED */}
        {/* … everything below remains strictly identical */}
