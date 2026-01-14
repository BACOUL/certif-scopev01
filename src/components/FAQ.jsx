"use client";

import { useState } from "react";

export default function FAQ() {
  const [open, setOpen] = useState(null);
  const toggle = (i) => setOpen(open === i ? null : i);

  const items = [
    {
      q: "Do clients, banks or procurement teams accept the document?",
      a: "Yes. Certif-Scope is used across onboarding, procurement checks and ESG screening when indicative CO₂e information is required. It is not an audited or regulatory emissions report, but a standardized structure that reviewers can compare consistently."
    },
    {
      q: "How long does it take to generate the document?",
      a: "Once annual spending (€) is entered, the Attestation is generated in under one minute. No consultants, no delays, and no manual calculations."
    },
    {
      q: "What exactly do I receive?",
      a: "A structured PDF including CO₂e indicators, category breakdown, dataset version, timestamp, verification ID and a deterministic integrity hash. Designed for procurement and ESG workflows."
    },
    {
      q: "How does the verification work?",
      a: "Verification is deterministic and does not require any stored database. Reviewers scan the QR code or enter the verification ID to confirm authenticity. No login or backend lookup is needed."
    },
    {
      q: "What methodology is used?",
      a: "A transparent spend-based method aligned with Scope 3 Category 1 principles. Only financial spending (€) is used. Not CSRD/ESRS-compliant and not intended to replace a full emissions inventory."
    },
    {
      q: "Is my data stored?",
      a: "No. Inputs are processed during generation and never retained. Verification relies on embedded cryptographic integrity, ensuring privacy without storing any spending data."
    },
    {
      q: "What are the limitations?",
      a: "This is an indicative spend-based estimation. Not audited, not CSRD/ESRS-compliant, no Scope 1 or 2, and depends entirely on the spending data provided by the user."
    }
  ];

  return (
    <section
      id="faq"
      data-section="faq"
      className="w-full bg-white dark:bg-gray-900 py-24"
    >
      <div className="max-w-3xl mx-auto px-6">

        {/* TITLE */}
        <h2
          data-i18n="faq.title"
          className="text-3xl md:text-4xl font-extrabold text-[#0B3A63] text-center mb-12"
        >
          Frequently Asked Questions
        </h2>

        {/* FAQ ITEMS */}
        <div className="space-y-4" role="list">
          {items.map((item, i) => (
            <div
              key={i}
              role="listitem"
              className="border border-gray-200 dark:border-gray-700 rounded-lg"
            >
              <button
                onClick={() => toggle(i)}
                aria-expanded={open === i}
                aria-controls={`faq-item-${i}`}
                className="w-full text-left px-6 py-4 flex justify-between items-center focus-visible:outline focus-visible:outline-[#1FB6C1] focus-visible:outline-2"
              >
                <span
                  data-i18n={`faq.q${i}`}
                  className="font-medium text-[#0B3A63] dark:text-gray-100"
                >
                  {item.q}
                </span>

                <span aria-hidden="true" className="text-xl text-[#1FB6C1]">
                  {open === i ? "−" : "+"}
                </span>
              </button>

              {open === i && (
                <div
                  id={`faq-item-${i}`}
                  data-i18n={`faq.a${i}`}
                  className="px-6 pb-5 text-gray-600 dark:text-gray-300 text-sm leading-relaxed"
                >
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* LEGAL NOTICE — mandatory */}
        <p
          data-i18n="faq.disclaimer"
          className="mt-10 text-center text-xs text-gray-500 dark:text-gray-400 max-w-xl mx-auto leading-relaxed"
        >
          Spend-based indicative calculation only. Not a CSRD/ESRS-compliant report, not audited,
          and not a substitute for a full emissions inventory.
        </p>

      </div>
    </section>
  );
        }
