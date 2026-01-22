"use client";

import Section1 from "./sections/Section1";
import Section2 from "./sections/Section2";
import Section3 from "./sections/Section3";
import Section4 from "./sections/Section4";
import Section5 from "./sections/Section5";
import Section6 from "./sections/Section6";
import Section7 from "./sections/Section7";
import Section8 from "./sections/Section8";
import Section9 from "./sections/Section9";
import Section10 from "./sections/Section10";

export default function CompliancePage() {
  return (
    <section
      id="compliance"
      data-section="compliance"
      className="max-w-7xl mx-auto px-6 pt-12 pb-24"
    >
      {/* TOP ANCHOR */}
      <div id="top" />

      {/* CANONICAL PAGE HEADER — IDENTICAL TO ALL SECONDARY PAGES */}
      <header className="mb-14">
        <p
          data-i18n="compliance.label"
          className="uppercase text-xs tracking-wider text-[#64748B] mb-3"
        >
          CO₂e Attestation — Compliance
        </p>

        <h1
          data-i18n="compliance.h1"
          className="text-3xl md:text-4xl font-extrabold text-[#0B3A63] mb-6"
        >
          Compliance &amp; Legal Limits Overview
        </h1>

        <p
          data-i18n="compliance.subtitle"
          className="text-lg text-gray-700 leading-relaxed max-w-3xl"
        >
          Full legal, regulatory and compliance framework governing the CO₂e
          Attestation, including legal boundaries, CSRD / ESRS positioning, GDPR
          conformity, liability allocation, permitted and prohibited uses, data
          governance and institutional constraints.
        </p>

        <div className="w-20 h-[2px] bg-gray-300 mt-10" />
      </header>

      {/* TABLE OF CONTENTS — CANONICAL & LOCKED */}
      <nav
        aria-label="Compliance sections"
        className="mb-16 max-w-4xl p-6 bg-[#F8FAFC] border border-gray-200 rounded-xl shadow-sm"
      >
        <ol className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-[#0B3A63] font-medium list-decimal list-inside">
          <li>
            <a
              href="#compliance-scope-legal-boundaries"
              className="hover:text-[#15B097] transition"
            >
              Compliance Scope &amp; Legal Boundaries
            </a>
          </li>
          <li>
            <a
              href="#regulatory-alignment-non-equivalence"
              className="hover:text-[#15B097] transition"
            >
              Regulatory Alignment &amp; Non-Equivalence Statement
            </a>
          </li>
          <li>
            <a
              href="#legal-boundary-interpretation"
              className="hover:text-[#15B097] transition"
            >
              Legal Boundary of Interpretation
            </a>
          </li>
          <li>
            <a
              href="#regulatory-non-equivalence-misuse-prevention"
              className="hover:text-[#15B097] transition"
            >
              Regulatory Non-Equivalence &amp; Misuse Prevention
            </a>
          </li>
          <li>
            <a
              href="#data-boundaries-prohibited-interpretations"
              className="hover:text-[#15B097] transition"
            >
              Data Boundaries &amp; Prohibited Interpretations
            </a>
          </li>
          <li>
            <a
              href="#legal-non-equivalence-regulatory-disclosures"
              className="hover:text-[#15B097] transition"
            >
              Legal Non-Equivalence With Regulatory Disclosures
            </a>
          </li>
          <li>
            <a
              href="#prohibited-claims-misuse-prevention"
              className="hover:text-[#15B097] transition"
            >
              Prohibited Claims &amp; Misuse Prevention
            </a>
          </li>
          <li>
            <a
              href="#disclaimers-liability-legal-safeguards"
              className="hover:text-[#15B097] transition"
            >
              Disclaimers, Liability &amp; Legal Safeguards
            </a>
          </li>
          <li>
            <a
              href="#auditability-independent-verification-boundaries"
              className="hover:text-[#15B097] transition"
            >
              Auditability &amp; Independent Verification Boundaries
            </a>
          </li>
          <li>
            <a
              href="#liability-framework-legal-responsibilities"
              className="hover:text-[#15B097] transition"
            >
              Liability Framework &amp; Legal Responsibilities
            </a>
          </li>
        </ol>
      </nav>

      {/* CONTENT — CANONICAL WIDTH & ORDER */}
      <div className="max-w-4xl mx-auto space-y-24">
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
        <Section7 />
        <Section8 />
        <Section9 />
        <Section10 />
      </div>
    </section>
  );
            }
