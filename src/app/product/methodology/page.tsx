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
import Section11 from "./sections/Section11";
import Section12 from "./sections/Section12";

export default function MethodologyPage() {
  return (
    <div
      id="methodology-overview"
      data-section="methodology-overview"
      className="max-w-7xl mx-auto px-6 pt-8 pb-24"
    >
      {/* TOP ANCHOR */}
      <div id="top" />

      {/* HEADER */}
      <div className="w-full mb-12">
        <h1 className="text-3xl md:text-4xl font-extrabold text-[#0B3A63] mb-4">
          Certif-Scope Methodology Overview
        </h1>

        <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed max-w-3xl">
          Scientific and deterministic methodology behind the CO₂e Attestation:
          spend-based model, emission factors, validation rules, versioning,
          regulatory alignment and verification protocol.
        </p>
      </div>

      {/* TABLE OF CONTENTS — CANONICAL & ALIGNED */}
      <nav
        aria-label="Methodology Sections"
        className="mb-16 p-6 bg-[#F8FAFC] border border-gray-200 rounded-xl shadow-sm"
      >
        <ol className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-[#0B3A63] font-medium list-decimal list-inside">
          <li>
            <a href="#s1" className="hover:text-[#15B097] transition">
              Scope, Purpose and Legal Nature
            </a>
          </li>
          <li>
            <a href="#s2" className="hover:text-[#15B097] transition">
              Regulatory and Standards Alignment
            </a>
          </li>
          <li>
            <a href="#s3" className="hover:text-[#15B097] transition">
              Methodological Model Overview (Spend-Based)
            </a>
          </li>
          <li>
            <a href="#s4" className="hover:text-[#15B097] transition">
              Data Inputs and Responsibility Boundaries
            </a>
          </li>
          <li>
            <a href="#s5" className="hover:text-[#15B097] transition">
              Emission Factors Sources and Limitations
            </a>
          </li>
          <li>
            <a href="#s6" className="hover:text-[#15B097] transition">
              Calculation Engine and Transformation Pipeline
            </a>
          </li>
          <li>
            <a href="#s7" className="hover:text-[#15B097] transition">
              Output Structure and Carbon Attestation Format
            </a>
          </li>
          <li>
            <a href="#s8" className="hover:text-[#15B097] transition">
              Verification, Auditability and Cryptographic Proof
            </a>
          </li>
          <li>
            <a href="#s9" className="hover:text-[#15B097] transition">
              Versioning, Updates and Methodology Governance
            </a>
          </li>
          <li>
            <a href="#s10" className="hover:text-[#15B097] transition">
              Institutional Use Cases and Acceptance Criteria
            </a>
          </li>
          <li>
            <a href="#s11" className="hover:text-[#15B097] transition">
              Comparison with Alternative Market Approaches
            </a>
          </li>
          <li>
            <a href="#s12" className="hover:text-[#15B097] transition">
              Legal Limitations, Exclusions and Non-Audit Disclaimer
            </a>
          </li>
        </ol>
      </nav>

      {/* SECTIONS — ORDER & IDS ARE AUTHORITATIVE */}
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
      <Section11 />
      <Section12 />
    </div>
  );
      }
