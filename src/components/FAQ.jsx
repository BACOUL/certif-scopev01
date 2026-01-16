"use client";

import { useState } from "react";

export default function FAQ() {
  const [open, setOpen] = useState(null);
  const toggle = (i) => setOpen(open === i ? null : i);

  const items = [
    {
      q: "Do clients or procurement teams accept the CO₂e Attestation?",
      a: "Yes. It is used in onboarding, procurement checks and ESG screening when an indicative CO₂e value is required. It is not an audited or regulatory report but a standardized format reviewers can assess quickly."
    },
    {
      q: "How long does it take to generate the document?",
      a: "Under one minute once annual spending (€) is entered. No consultants, no data collection and no waiting time."
    },
    {
      q: "What do I receive exactly?",
      a: "A structured PDF with total CO₂e, category overview and verification metadata in a clear, consistent layout."
    },
    {
      q: "How does the verification process work?",
      a: "Reviewers scan the QR code or enter the verification ID. Validation works offline and does not require stored data or user accounts."
    },
    {
      q: "What methodology is used?",
      a: "A spend-based calculation aligned with Scope 3 Category 1 principles. Only financial spending (€) is used — no operational data."
    },
    {
      q: "Is any data stored?",
      a: "No. Inputs are processed during generation and never retained. Verification relies on embedded integrity checks, not on stored databases."
    },
    {
      q: "What are the limitations?",
      a: "It provides an indicative, spend-based estimate and is not a substitute for a full emissions inventory."
    }
  ];

  return (
    <section
      id="faq"
      data-section="faq"
      className="w-full bg-white dark:bg-gray-900 py-24"
    >
      <div className="max-w-3xl mx-auto px-6">

        {/* MICRO-LABEL */}
        <p
          data-i18n="faq.label"
          className="uppercase text-xs md:text-sm font-medium text-[#64748B] dark:text-gray-400 tracking-wider text-center mb-2"
        >
          CO₂e Attestation — FAQ
        </p>

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

              {/* ANSWER */}
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

        {/* DISCLAIMER — unique, non répétitif */}
        <p
          data-i18n="faq.disclaimer"
          className="mt-10 text-center text-xs text-gray-500 dark:text-gray-400 max-w-xl mx-auto leading-relaxed"
        >
          Spend-based indicative calculation only. Not audited and not CSRD/ESRS-compliant.
        </p>

      </div>
    </section>
  );
      }
