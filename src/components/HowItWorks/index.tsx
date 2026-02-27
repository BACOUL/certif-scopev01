// PATH: src/components/HowItWorks/index.tsx
"use client";

import Link from "next/link";
import { useMemo } from "react";
import { usePathname } from "next/navigation";

export default function HowItWorks() {
  const pathname = usePathname();

  const isFR = useMemo(() => {
    if (!pathname) return false;
    return pathname === "/fr" || pathname.startsWith("/fr/");
  }, [pathname]);

  const generateHref = useMemo(() => {
    return isFR ? "/fr/generate" : "/generate";
  }, [isFR]);

  return (
    <section
      id="how-it-works"
      data-section="how-it-works"
      className="py-24 bg-[#F8FAFC] dark:bg-gray-900"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* MICRO LABEL */}
        <p
          className="uppercase text-xs md:text-sm font-medium text-[#64748B] tracking-wider text-center mb-3"
          data-i18n="howitworks.label"
        >
          CO₂e Attestation — Process
        </p>

        {/* TITLE */}
        <h2
          className="text-3xl md:text-4xl font-extrabold text-center text-[#0B3A63]"
          data-i18n="howitworks.title"
        >
          How It Works
        </h2>

        {/* INTRO */}
        <p
          className="mt-4 text-center text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed"
          data-i18n="howitworks.intro"
        >
          A simple three-step process converting annual spending (€) into a standardized
          CO₂e Attestation used in procurement, banking, insurance and ESG screening workflows.
        </p>

        {/* SEPARATOR */}
        <div className="w-20 h-[2px] bg-gray-300 dark:bg-gray-700 mx-auto my-14" />

        {/* 3 STEPS GRID */}
        <div className="grid md:grid-cols-3 gap-14">
          {/* STEP 1 */}
          <div className="text-center px-4" data-i18n="howitworks.step1">
            <div className="h-14 w-14 mx-auto rounded-full bg-[#1FB6C1] text-white flex items-center justify-center text-xl font-bold shadow-md">
              1
            </div>
            <h3 className="mt-6 text-lg font-semibold text-[#0B3A63]">
              Enter annual spending
            </h3>
            <p className="mt-3 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              Provide yearly expenses across predefined categories. Only financial inputs
              are required — no activity data, no documents, no audits.
            </p>
          </div>

          {/* STEP 2 */}
          <div className="text-center px-4" data-i18n="howitworks.step2">
            <div className="h-14 w-14 mx-auto rounded-full bg-[#1FB6C1] text-white flex items-center justify-center text-xl font-bold shadow-md">
              2
            </div>
            <h3 className="mt-6 text-lg font-semibold text-[#0B3A63]">
              Automatic calculation
            </h3>
            <p className="mt-3 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              A standardized spend-based method is applied automatically to generate a
              consistent CO₂e result using recognized emission factor sources.
            </p>
          </div>

          {/* STEP 3 */}
          <div className="text-center px-4" data-i18n="howitworks.step3">
            <div className="h-14 w-14 mx-auto rounded-full bg-[#1FB6C1] text-white flex items-center justify-center text-xl font-bold shadow-md">
              3
            </div>
            <h3 className="mt-6 text-lg font-semibold text-[#0B3A63]">
              Download your attestation
            </h3>
            <p className="mt-3 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              Instantly receive a standardized PDF presenting an aggregated CO₂e result,
              key metadata and built-in verification information in a review-ready format.
            </p>
          </div>
        </div>

        {/* PRIVACY BY DESIGN — KEY STATEMENT */}
        <p
          className="mt-12 text-center text-sm text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed"
          data-i18n="howitworks.privacy.statement"
        >
          Calculations are performed locally in your browser.
          <br />
          Only the final CO₂e result is transmitted to issue the attestation.
        </p>

        {/* SECONDARY CTA — DISCREET */}
        <div className="mt-10 text-center">
          <Link
            href={generateHref}
            data-i18n="howitworks.cta"
            className="inline-block text-sm font-medium text-[#0B3A63] underline hover:text-[#1FB6C1] transition"
          >
            Generate a CO₂e Attestation →
          </Link>
        </div>

        {/* FOOTER LINE */}
        <p
          className="mt-12 text-center text-sm text-gray-500 dark:text-gray-400"
          data-i18n="howitworks.footer"
        >
          The entire process takes less than one minute.
        </p>
      </div>
    </section>
  );
            }
