"use client";

import { useState } from "react";

export default function FAQ() {
  const [open, setOpen] = useState(null);

  const toggle = (i) => {
    setOpen(open === i ? null : i);
  };

  const items = [
    {
      q: "Do clients, banks or partners accept the document?",
      a: "Yes — Certif-Scope is used in procurement portals, onboarding processes and ESG questionnaires to provide indicative spend-based CO₂e information. It is not a regulatory or audited report, but it satisfies most screening requests that only require a clear and consistent document."
    },
    {
      q: "How long does it take to generate the document?",
      a: "Most documents are generated in 30–60 seconds once annual spending data is entered. No waiting, no consultants, no back-and-forth with clients."
    },
    {
      q: "What exactly do I receive?",
      a: "You receive a clean, ready-to-send PDF including CO₂e indicators, a breakdown of your spending categories, the dataset version used, a timestamp, a unique verification ID, and an integrity hash that clients can check in seconds."
    },
    {
      q: "How does the verification work?",
      a: "Your clients can scan the QR code or enter the verification ID on our site to check authenticity. No account, no login and no technical knowledge required."
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
