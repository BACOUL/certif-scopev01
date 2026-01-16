"use client";

import { useState } from "react";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
  const toggle = (i: number) => setOpen(open === i ? null : i);

  const items = [
    {
      q: "Do clients or procurement teams accept the CO₂e Attestation?",
      a: "Yes. It is used in onboarding, procurement checks and ESG screening when an indicative CO₂e value is required. It is not an audited or regulatory report but a standardized format reviewers can assess quickly across suppliers."
    },
    {
      q: "How long does it take to generate the document?",
      a: "Less than one minute once annual spending (€) is entered. No consultants, no operational data collection and no delays."
    },
    {
      q: "What do I receive exactly?",
      a: "A structured PDF including total CO₂e, category breakdown, dataset version, verification ID, timestamp and deterministic integrity hash."
    },
    {
      q: "How does the verification process work?",
      a: "Reviewers scan the QR code or enter the verification ID. Verification works offline using embedded integrity metadata—no stored data, no server lookup and no user accounts are required."
    },
    {
      q: "What methodology is used?",
      a: "A deterministic spend-based calculation aligned with Scope 3 Category 1. It uses declared financial spending (€) and applies stable, version-controlled emission factors (ADEME, DEFRA, IPCC). No Scope 1–2 accounting and no operational activity data."
    },
    {
      q: "Is any data stored?",
      a: "No. Inputs are processed during generation and never retained. Verification relies solely on embedded cryptographic integrity, making the process GDPR-safe by design."
    },
    {
      q: "What are the limitations?",
      a: "It provides an indicative, spend-based estimation. Not audited, not CSRD/ESRS-compliant, no physical activity data and not a substitute for a full emissions inventory."
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
              itemScope
              itemType="https://schema.org/Question"
              className="border border-gray-200 dark:border-gray-700 rounded-lg"
            >
              <button
                onClick={() => toggle(i)}
                aria-expanded={open === i}
                aria-controls={`faq-item-${i}`}
                className="w-full text-left px-6 py-4 flex justify-between items-center focus-visible:outline focus-visible:outline-[#1FB6C1] focus-visible:outline-2"
              >
                <span
                  data-i18n={`faq.q.${i}`}
                  itemProp="name"
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
                  itemScope
                  itemType="https://schema.org/Answer"
                  itemProp="acceptedAnswer"
                  className="px-6 pb-5 text-gray-600 dark:text-gray-300 text-sm leading-relaxed"
                >
                  <p data-i18n={`faq.a.${i}`} itemProp="text">
                    {item.a}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* DISCLAIMER — A+ version */}
        <p
          data-i18n="faq.disclaimer"
          className="mt-10 text-center text-xs text-gray-500 dark:text-gray-400 max-w-xl mx-auto leading-relaxed"
        >
          Indicative spend-based estimate. Not audited, not CSRD/ESRS compliant, no Scope 1–2
          coverage, and not a substitute for a full emissions inventory. Values depend entirely
          on user-provided financial inputs.
        </p>

      </div>
    </section>
  );
        }
