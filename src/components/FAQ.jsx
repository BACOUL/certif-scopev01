"use client";

import { useState } from "react";

export default function FAQ() {
  const [open, setOpen] = useState(null);
  const toggle = (i) => setOpen(open === i ? null : i);

  const items = [
    {
      q: "Do clients, banks or procurement teams accept the document?",
      a: "Yes. Certif-Scope is commonly used in supplier onboarding, procurement portals and ESG questionnaires when companies request indicative CO₂e information. It is not a regulatory or audited emissions report, but it satisfies most screening workflows that only require a clear, structured and verifiable document."
    },
    {
      q: "How long does it take to generate the document?",
      a: "Documents are typically generated in 30–60 seconds once annual spending data is entered. No consultants, no waiting and no complex forms."
    },
    {
      q: "What exactly do I receive?",
      a: "A ready-to-send PDF including CO₂e indicators, category breakdown, dataset version, timestamp, a unique verification ID and an integrity hash. Partners can verify authenticity in seconds using the QR code or ID."
    },
    {
      q: "How does the verification work?",
      a: "Your partners can scan the QR code or manually enter the verification ID to check integrity. No login, no account and no external database lookup are required—verification is deterministic and based on the embedded hash."
    },
    {
      q: "What methodology does Certif-Scope use?",
      a: "Certif-Scope uses a spend-based approach aligned with Scope 3 Category 1 estimation principles. Calculations are deterministic and rely exclusively on financial spending (€). No physical activity data is used (kWh, km, litres), and this is not a CSRD/ESRS-compliant audit."
    },
    {
      q: "Is my data stored?",
      a: "Only the minimum required data is processed to generate the PDF. We do not store physical activity data because none is used. Verification works without keeping your data on our servers, as the integrity hash allows offline validation."
    },
    {
      q: "What are the limitations of the document?",
      a: "The document is an indicative, spend-based estimation. It is not an audited inventory, not a Scope 1/2 calculation and not a CSRD/ESRS report. Results depend entirely on the spending data you provide."
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
                <span>{open === i ? "−" : "+"}</span>
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
