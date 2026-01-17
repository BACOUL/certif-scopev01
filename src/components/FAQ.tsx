"use client";

import { useState } from "react";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
  const toggle = (i: number) => setOpen(open === i ? null : i);

  const items = [
    // 🔴 HAUTE INTENTION — URGENCE / APPELS D’OFFRES
    {
      q: "Can I get a carbon attestation immediately for a tender or supplier request?",
      a: "Yes. Certif-Scope is designed to generate a standardized CO₂e attestation in under 60 seconds, based only on annual spending. The PDF can be used immediately to complete procurement or supplier compliance files."
    },
    {
      q: "Do I need energy bills or physical activity data to use Certif-Scope?",
      a: "No. Certif-Scope uses a spend-based approach. Only annual financial spending (€) is required. No meter readings, fuel data or operational measurements are needed."
    },
    {
      q: "Can this attestation be used for bank or financial institution requests?",
      a: "Yes, for ESG screening and risk assessment processes. The attestation provides a standardized, verifiable CO₂e indicator suitable for banking and insurance review workflows, without replacing a full regulatory report."
    },
    {
      q: "What is the difference between this attestation and a regulatory carbon footprint?",
      a: "This attestation provides an indicative, spend-based CO₂e estimate. It is not an ISO-certified inventory or a CSRD report, but a fast and practical solution to meet third-party ESG requests."
    },

    // 🟦 PRODUIT / CONFORMITÉ (FAQ EXISTANTE)
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
      a: "A structured PDF including total CO₂e, category breakdown, methodology version and attestation validity period."
    },
    {
      q: "How does the verification process work?",
      a: "The attestation can be verified independently by third parties using the information embedded in the document, without relying on Certif-Scope servers or user accounts."
    },
    {
      q: "What methodology is used?",
      a: "A deterministic spend-based calculation aligned with Scope 3 Category 1. It uses declared financial spending (€) and applies stable, version-controlled emission factors (ADEME, DEFRA, IPCC). No Scope 1–2 accounting and no operational activity data."
    },
    {
      q: "Is any data stored?",
      a: "No. Financial inputs are processed during attestation generation and are not stored. Certif-Scope does not retain detailed financial data."
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

        {/* LABEL */}
        <p className="uppercase text-xs md:text-sm font-medium text-[#64748B] tracking-wider text-center mb-2">
          CO₂e Attestation — FAQ
        </p>

        {/* TITLE */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#0B3A63] text-center mb-12">
          Frequently Asked Questions
        </h2>

        {/* FAQ ITEMS */}
        <div className="space-y-4" role="list">
          {items.map((item, i) => (
            <div
              key={i}
              role="listitem"
              className="border border-gray-200 rounded-lg"
            >
              <button
                onClick={() => toggle(i)}
                aria-expanded={open === i}
                aria-controls={`faq-item-${i}`}
                className="w-full text-left px-6 py-4 flex justify-between items-center focus-visible:outline focus-visible:outline-[#1FB6C1] focus-visible:outline-2"
              >
                <span className="font-medium text-[#0B3A63]">
                  {item.q}
                </span>
                <span aria-hidden="true" className="text-xl text-[#1FB6C1]">
                  {open === i ? "−" : "+"}
                </span>
              </button>

              {open === i && (
                <div
                  id={`faq-item-${i}`}
                  className="px-6 pb-5 text-gray-600 text-sm leading-relaxed"
                >
                  <p>{item.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* DISCLAIMER */}
        <p className="mt-10 text-center text-xs text-gray-500 max-w-xl mx-auto leading-relaxed">
          Indicative spend-based estimate. Not audited, not CSRD/ESRS compliant, no Scope 1–2
          coverage, and not a substitute for a full emissions inventory. Values depend entirely
          on user-provided financial inputs.
        </p>

      </div>
    </section>
  );
}
