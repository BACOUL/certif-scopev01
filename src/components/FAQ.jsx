"use client";

import { useState } from "react";

export default function FAQ() {
  const [open, setOpen] = useState(null);

  const toggle = (i) => {
    setOpen(open === i ? null : i);
  };

  const items = [
    {
      q: "Is the attestation used by banks and partners?",
      a: "Certif-Scope is commonly used in procurement, onboarding and internal banking workflows for providing spend-based CO₂e information. It remains a non-regulatory, indicative document."
    },
    {
      q: "How fast is the attestation generated?",
      a: "The process generally takes less than 60 seconds once the spending data is entered."
    },
    {
      q: "What does the attestation include?",
      a: "A standardized PDF with estimated CO₂e indicators, dataset version, a verification QR code, a verification link, a unique ID, timestamp and an integrity hash."
    },
    {
      q: "How does the verification system work?",
      a: "Anyone can scan the QR code or manually enter the verification ID to check the integrity of the attestation. No login or account is required."
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
