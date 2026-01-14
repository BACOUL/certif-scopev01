"use client";

import { useState } from "react";

export default function FAQ() {
  const [open, setOpen] = useState(null);
  const toggle = (i) => setOpen(open === i ? null : i);

  const items = [
    {
      q: "Do clients, banks or procurement teams accept the document?",
      a: "Yes. Certif-Scope is frequently used in onboarding, procurement checks and ESG screening when indicative CO₂e information is required. It is not an audited or regulatory emissions report, but it provides a clear and verifiable format suitable for most institutional workflows."
    },
    {
      q: "How long does it take to generate the document?",
      a: "Once annual spending is entered, the Attestation is generated in under one minute. No consultants, delays or manual calculations are involved."
    },
    {
      q: "What exactly do I receive?",
      a: "A ready-to-send PDF containing CO₂e indicators, category breakdown, dataset version, timestamp, a unique verification ID and an integrity hash. Reviewers can confirm authenticity instantly."
    },
    {
      q: "How does the verification work?",
      a: "Verification is deterministic. Partners either scan the QR code or enter the verification ID to confirm integrity. No account, login or server-side database is required."
    },
    {
      q: "What methodology is used?",
      a: "The Attestation relies on a transparent spend-based estimation method aligned with Scope 3 Category 1 principles. Only financial spending (€) is used. This is not a CSRD/ESRS report and does not replace a full emissions inventory."
    },
    {
      q: "Is my data stored?",
      a: "No. Inputs are processed at generation time and not retained. Verification works through embedded cryptographic integrity, not stored databases, ensuring privacy by design."
    },
    {
      q: "What are the limitations?",
      a: "This is an indicative, spend-based estimation. It does not include Scope 1 or Scope 2, is not audited, and is not suitable for CSRD/ESRS regulatory reporting. Results depend entirely on the spending data provided."
    }
  ];

  return (
    <section className="w-full bg-white dark:bg-gray-900 py-24">
      <div className="max-w-3xl mx-auto px-6">

        <h2 className="text-3xl md:text-4xl font-extrabold text-[#0B3A63] text-center mb-12">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {items.map((item, i) => (
            <div key={i} className="border border-gray-200 dark:border-gray-700 rounded-lg">
              <button
                onClick={() => toggle(i)}
                className="w-full text-left px-6 py-4 flex justify-between items-center"
              >
                <span className="font-medium text-[#0B3A63] dark:text-gray-100">{item.q}</span>
                <span className="text-xl text-[#1FB6C1]">{open === i ? "−" : "+"}</span>
              </button>

              {open === i && (
                <div className="px-6 pb-5 text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
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
