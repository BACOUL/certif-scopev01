"use client";

import { useState } from "react";

export default function AssessmentForm() {
  const currentYear = new Date().getFullYear();

  const [apiKey, setApiKey] = useState("");
  const [year, setYear] = useState(currentYear);
  const [country, setCountry] = useState("FR");

  const [expenses, setExpenses] = useState({
    it: "",
    services: "",
    goods: "",
    logistics: "",
    travel: "",
    accommodation: "",
    other: ""
  });

  const update = (field: string, value: string) => {
    setExpenses(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async () => {
    if (!apiKey) return;

    const payload = {
      apiKey,
      year,
      country,
      expenses: Object.fromEntries(
        Object.entries(expenses).map(([k, v]) => [k, Number(v) || 0])
      )
    };

    const res = await fetch("/api/issue", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    if (!res.ok) return;

    const blob = await res.blob();
    const url = window.URL.createObjectURL(blob);
    window.open(url);
  };

  return (
    <main className="min-h-screen bg-white">
      {/* SAME CONTAINER AS VERIFY */}
      <section className="max-w-3xl mx-auto px-6 pt-16 pb-20">

        {/* TITLE */}
        <h1 className="text-3xl md:text-4xl font-extrabold text-[#0B3A63] mb-4">
          Generate your carbon attestation
        </h1>

        {/* INTRO */}
        <p className="text-gray-600 text-lg leading-relaxed mb-3">
          Spend-based indicative estimation. No audit. No physical data required.
        </p>

        {/* PRICE REMINDER */}
        <p className="text-sm text-gray-500 mb-10">
          <strong>Price:</strong> 89 € per attestation · One-time fee · No subscription
        </p>

        {/* FORM CARD — SAME STYLE AS VERIFY */}
        <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-8 md:p-10 space-y-8">

          {/* API KEY */}
          <div>
            <label className="block text-sm font-medium">
              Attestation key
            </label>
            <input
              type="text"
              value={apiKey}
              onChange={e => setApiKey(e.target.value)}
              placeholder="Enter your pack key"
              className="w-full border rounded-md px-4 py-2 mt-1"
            />
            <p className="text-xs text-gray-500 mt-1">
              Required. Provided after purchasing a pack.
            </p>
          </div>

          {/* CONTEXT */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium">Reference year</label>
              <input
                type="number"
                value={year}
                onChange={e => setYear(Number(e.target.value))}
                className="w-full border rounded-md px-4 py-2 mt-1"
              />
            </div>

            <div>
              <label className="block text-sm font-medium">Main country</label>
              <select
                value={country}
                onChange={e => setCountry(e.target.value)}
                className="w-full border rounded-md px-4 py-2 mt-1"
              >
                <option value="FR">France</option>
                <option value="DE">Germany</option>
                <option value="ES">Spain</option>
                <option value="IT">Italy</option>
                <option value="EU">Other EU</option>
              </select>
            </div>
          </div>

          {/* EXPENSES */}
          <div className="space-y-4">
            <h3 className="font-medium text-[#0B3A63]">
              Annual external expenses (€)
            </h3>

            <Input
              label="IT & digital services"
              hint="Software licenses, cloud hosting, SaaS tools, IT outsourcing"
              value={expenses.it}
              onChange={v => update("it", v)}
            />

            <Input
              label="Professional services"
              hint="Consulting, accounting, legal services, external advisors"
              value={expenses.services}
              onChange={v => update("services", v)}
            />

            <Input
              label="Purchased goods"
              hint="Office supplies, equipment, materials, non-capital goods"
              value={expenses.goods}
              onChange={v => update("goods", v)}
            />

            <Input
              label="Logistics & transport services"
              hint="Freight services, delivery, external transport providers"
              value={expenses.logistics}
              onChange={v => update("logistics", v)}
            />

            <Input
              label="Business travel"
              hint="Flights, trains, car rentals, taxis"
              value={expenses.travel}
              onChange={v => update("travel", v)}
            />

            <Input
              label="Accommodation & events"
              hint="Hotels, conferences, corporate events"
              value={expenses.accommodation}
              onChange={v => update("accommodation", v)}
            />

            <Input
              label="Other external expenses"
              hint="Marketing services, subscriptions, miscellaneous external costs"
              value={expenses.other}
              onChange={v => update("other", v)}
            />
          </div>

          {/* WHAT YOU GET */}
          <div className="pt-4 text-sm text-gray-600">
            <p className="font-medium text-[#0B3A63] mb-2">What you get:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Standardized CO₂e attestation (PDF)</li>
              <li>Unique Attestation ID</li>
              <li>Public verification page</li>
              <li>Validity: 1 year</li>
            </ul>
          </div>

          {/* CTA */}
          <button
            onClick={handleSubmit}
            className="w-full bg-[#0B3A63] hover:bg-[#092f50] text-white py-3 rounded-md transition"
          >
            Generate attestation
          </button>

        </div>

        {/* RESPONSIBILITY NOTICE */}
        <p className="mt-10 text-xs text-gray-500 leading-relaxed">
          This attestation is based solely on the information provided by the applicant and is not an audit.
        </p>

      </section>

      {/* SAME FOOTER AS VERIFY */}
      <footer className="text-center text-xs text-gray-400 py-10">
        INSTITUTIONAL FOOTER
      </footer>
    </main>
  );
}

function Input({
  label,
  hint,
  value,
  onChange
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
        onChange={e => onChange(e.target.value)}
        className="w-full border rounded-md px-4 py-2 mt-1"
      />
      <p className="text-xs text-gray-500 mt-1">{hint}</p>
    </div>
  );
}
