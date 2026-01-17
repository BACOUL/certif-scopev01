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
    <section className="py-20 bg-[#F8FAFC]">
      <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-sm border p-10 space-y-8">

        <header className="space-y-2">
          <h2 className="text-2xl font-semibold text-[#0B3A63]">
            Generate your carbon attestation
          </h2>
          <p className="text-sm text-gray-600">
            Spend-based indicative estimation. No audit. No physical data required.
          </p>
        </header>

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
        <div className="grid grid-cols-2 gap-4">
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

          <Input label="IT & digital services" value={expenses.it} onChange={v => update("it", v)} />
          <Input label="Professional services" value={expenses.services} onChange={v => update("services", v)} />
          <Input label="Purchased goods" value={expenses.goods} onChange={v => update("goods", v)} />
          <Input label="Logistics & transport services" value={expenses.logistics} onChange={v => update("logistics", v)} />
          <Input label="Business travel" value={expenses.travel} onChange={v => update("travel", v)} />
          <Input label="Accommodation & events" value={expenses.accommodation} onChange={v => update("accommodation", v)} />
          <Input label="Other external expenses" value={expenses.other} onChange={v => update("other", v)} />
        </div>

        {/* CTA */}
        <button
          onClick={handleSubmit}
          className="w-full bg-[#0B3A63] hover:bg-[#092f50] text-white py-3 rounded-md transition"
        >
          Generate attestation
        </button>

      </div>
    </section>
  );
}

function Input({
  label,
  value,
  onChange
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div>
      <label className="block text-sm">{label}</label>
      <input
        type="number"
        min="0"
        value={value}
        onChange={e => onChange(e.target.value)}
        className="w-full border rounded-md px-4 py-2 mt-1"
      />
    </div>
  );
              }
