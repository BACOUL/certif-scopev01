"use client";

import { useState } from "react";

/* ======================================================
   CERTIF-SCOPE — CALCULATION MODEL (CLIENT-SIDE)
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
  "Certif-Scope deterministic spend-based model v1.0";

/* ======================================================
   TYPES
====================================================== */

type AttestationLocale = "en" | "fr";

/* ======================================================
   SECTORS (DECLARATIVE)
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
  children,
  defaultOpen = false,
}: {
  title: string;
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

      {open && <div className="px-5 py-6 bg-white space-y-5">{children}</div>}
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

  const update = (field: string, value: string) => {
    setExpenses((prev) => ({ ...prev, [field]: value }));
  };

  const numericExpenses = Object.fromEntries(
    Object.entries(expenses).map(([k, v]) => [k, Number(v) || 0])
  );

  const totalCO2e = calculateTotalCO2e(numericExpenses);

  const handleSubmit = async () => {
    if (!companyName) {
      alert("Please enter your company name.");
      return;
    }

    if (!sector) {
      alert("Please select your main sector of activity.");
      return;
    }

    const payload = {
      company: {
        name: companyName,
        id: companyId || null,
        sector,
      },
      year,
      country,
      attestationLocale,
      result: {
        totalCO2e,
        methodology: METHODOLOGY,
      },
    };

    const res = await fetch("/api/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      alert("Payment initialization failed.");
      return;
    }

    const { url } = await res.json();
    window.location.href = url;
  };

  return (
    <main className="min-h-screen bg-white">
      <section className="max-w-3xl mx-auto px-6 pt-16 pb-20 space-y-10">

        <div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-[#0B3A63] mb-3">
            Generate your carbon attestation
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            Spend-based indicative estimation. No audit. No physical data required.
          </p>
          <p className="text-sm text-gray-500 mt-3">
            <strong>Price:</strong> 89 € per attestation · One-time fee · No subscription
          </p>
        </div>

        <Accordion title="Company information" defaultOpen>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium">
                Company / legal entity name
              </label>
              <input
                type="text"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                className="w-full border rounded-md px-4 py-2 mt-1"
              />
            </div>

            <div>
              <label className="block text-sm font-medium">
                Main sector of activity
              </label>
              <select
                value={sector}
                onChange={(e) => setSector(e.target.value)}
                className="w-full border rounded-md px-4 py-2 mt-1"
              >
                <option value="">Select a sector</option>
                {SECTORS.map((s) => (
                  <option key={s.value} value={s.label}>
                    {s.label}
                  </option>
                ))}
              </select>
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

        <Accordion title="Context" defaultOpen>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium">
                Reference year
              </label>
              <input
                type="number"
                value={year}
                onChange={(e) => setYear(Number(e.target.value))}
                className="w-full border rounded-md px-4 py-2 mt-1"
              />
            </div>

            <div>
              <label className="block text-sm font-medium">
                Main country
              </label>
              <select
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                className="w-full border rounded-md px-4 py-2 mt-1"
              >
                <option value="FR">France</option>
                <option value="DE">Germany</option>
                <option value="ES">Spain</option>
                <option value="IT">Italy</option>
                <option value="EU">Other EU</option>
              </select>
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium">
                Attestation language
              </label>
              <select
                value={attestationLocale}
                onChange={(e) =>
                  setAttestationLocale(e.target.value as AttestationLocale)
                }
                className="w-full border rounded-md px-4 py-2 mt-1"
              >
                <option value="en">English (legal reference)</option>
                <option value="fr">Français</option>
              </select>
              <p className="text-xs text-gray-500 mt-1">
                The English version remains the legal reference in case of discrepancy.
              </p>
            </div>
          </div>
        </Accordion>

        <Accordion title="Annual external expenses (€)">
          <Input label="IT & digital services" hint="Software, cloud, SaaS, IT outsourcing" value={expenses.it} onChange={(v) => update("it", v)} />
          <Input label="Professional services" hint="Consulting, accounting, legal services" value={expenses.services} onChange={(v) => update("services", v)} />
          <Input label="Purchased goods" hint="Office supplies, equipment, materials" value={expenses.goods} onChange={(v) => update("goods", v)} />
          <Input label="Logistics & transport services" hint="Freight, delivery, transport providers" value={expenses.logistics} onChange={(v) => update("logistics", v)} />
          <Input label="Business travel" hint="Flights, trains, taxis, car rentals" value={expenses.travel} onChange={(v) => update("travel", v)} />
          <Input label="Accommodation & events" hint="Hotels, conferences, corporate events" value={expenses.accommodation} onChange={(v) => update("accommodation", v)} />
          <Input label="Other external expenses" hint="Marketing, subscriptions, miscellaneous costs" value={expenses.other} onChange={(v) => update("other", v)} />
        </Accordion>

        <div className="border rounded-xl p-6 bg-[#F8FAFC]">
          <p className="text-sm text-gray-600 mb-1">
            Indicative annual emissions estimate
          </p>
          <p className="text-3xl font-bold text-[#0B3A63]">
            {totalCO2e} tCO₂e
          </p>
          <p className="text-xs text-gray-500 mt-2">
            Deterministic spend-based estimation · Indicative · Non-audit
          </p>
        </div>

        <button
          onClick={handleSubmit}
          className="w-full bg-[#0B3A63] hover:bg-[#092f50] text-white py-4 rounded-xl font-semibold transition"
        >
          Proceed to payment — 89 €
        </button>

        <p className="text-xs text-gray-500 leading-relaxed">
          This attestation is based solely on the information provided by the applicant
          and is not a greenhouse gas audit or regulatory report.
        </p>
      </section>
    </main>
  );
}

/* ======================================================
   INPUT
====================================================== */

function Input({
  label,
  hint,
  value,
  onChange,
}: {
  label: string;
  hint: string;
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div>
      <label className="block text-sm font-medium">{label}</label>
      <input
        type="number"
        min="0"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full border rounded-md px-4 py-2 mt-1"
      />
      <p className="text-xs text-gray-500 mt-1">{hint}</p>
    </div>
  );
           }
