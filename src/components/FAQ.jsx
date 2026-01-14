"use client";

import { useState } from "react";

export default function FAQ() {
  const [open, setOpen] = useState(null);
  const toggle = (i) => setOpen(open === i ? null : i);

  const items = [
    {
      q: "Do clients, banks or procurement teams accept the document?",
      a: "Yes. Certif-Scope is frequently used in supplier onboarding, procurement checks and ESG questionnaires that require indicative CO₂e information. It is not an audited or regulatory emissions report, but it meets most screening workflows where a clear, structured and verifiable document is sufficient."
    },
    {
      q: "How long does it take to generate the document?",
      a: "Once annual spending data is entered, the CO₂e Attestation is generated in 30–60 seconds. No waiting periods, consultants or manual calculations."
    },
    {
      q: "What exactly do I receive?",
      a: "You receive a ready-to-send PDF including CO₂e indicators, category breakdown, dataset version, timestamp, a unique verification ID and an integrity hash. Partners can confirm authenticity instantly via QR code or ID lookup."
    },
    {
      q: "How does the verification work?",
      a: "Verification is deterministic. Partners scan the QR code or enter the verification ID to confirm document integrity. No login, no account and no stored database lookups are required."
    },
    {
      q: "What methodology does Certif-Scope use?",
      a: "Certif-Scope uses a spend-based estimation method aligned with the principles of Scope 3 Category 1. Only financial spending (€) is used — no kWh, km or litres. It is not a CSRD/ESRS-compliant audit and does not replace a full carbon inventory."
    },
    {
      q: "Is my data stored?",
      a: "Only the minimum required information is processed at generation time. Verification works offline through the embedded hash, so we do not need to store your spending data on our servers."
    },
    {
      q: "What are the limitations of the document?",
      a: "This is an indicative, spend-based CO₂e estimation. It is not a Scope 1/2 calculation, not an audited inventory and not a regulatory emissions report. Accuracy depends entirely on the spending data provided by the user."
    }
  ];

  return (
    <section className="w-full bg-white py-24">
      <div className="max-w-3xl mx-auto px-6">

        <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] text-center mb-12">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {items.map((item, i) => (
            <div key={i} className="border border-gray-200 rounded-lg">
              <button
                onClick={() => toggle(i)}
                className="w-full text-left px-6 py-4 flex justify-between items-center"
              >
                <span className="font-medium text-[#0F172A]">{item.q}</span>
                <span className="text-xl">{open === i ? "−" : "+"}</span>
              </button>

              {open === i && (
                <div className="px-6 pb-4 text-gray-600 text-sm leading-relaxed">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
            }
