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
    <section
      id="methodology"
      data-section="methodology"
      className="max-w-7xl mx-auto px-6 pt-12 pb-24"
    >
      <div id="top" />

      <header className="mb-14">
        <p
          data-i18n="methodology.label"
          className="uppercase text-xs tracking-wider text-[#64748B] mb-3"
        >
          CO₂e Attestation — Methodology
        </p>

        <h1
          data-i18n="methodology.h1"
          className="text-3xl md:text-4xl font-extrabold text-[#0B3A63] mb-6"
        >
          Methodology Overview
        </h1>

        <p
          data-i18n="methodology.subtitle"
          className="text-lg text-gray-700 leading-relaxed max-w-3xl"
        >
          Scientific and deterministic methodology behind the CO₂e Attestation,
          including the spend-based model, emission factors, calculation logic,
          update cycles and institutional validation boundaries.
        </p>

        <div className="w-20 h-[2px] bg-gray-300 mt-10" />
      </header>

      <nav
        aria-label="Methodology sections"
        className="mb-16 max-w-4xl p-6 bg-[#F8FAFC] border border-gray-200 rounded-xl shadow-sm"
      >
        <ol className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-[#0B3A63] font-medium list-decimal list-inside">
          <li>
            <a href="#s1" className="hover:text-[#15B097] transition">
              Scope &amp; Purpose of the Methodology
            </a>
          </li>
          <li>
            <a href="#s2" className="hover:text-[#15B097] transition">
              Theoretical Foundations
            </a>
          </li>
          <li>
            <a href="#s3" className="hover:text-[#15B097] transition">
              Mathematical Model
            </a>
          </li>
          <li>
            <a href="#s4" className="hover:text-[#15B097] transition">
              Category Definitions &amp; Boundaries
            </a>
          </li>
          <li>
            <a href="#s5" className="hover:text-[#15B097] transition">
              Input Normalisation Rules
            </a>
          </li>
          <li>
            <a href="#s6" className="hover:text-[#15B097] transition">
              Transformation Pipeline
            </a>
          </li>
          <li>
            <a href="#s7" className="hover:text-[#15B097] transition">
              Emission-Factor Assignment Logic
            </a>
          </li>
          <li>
            <a href="#s8" className="hover:text-[#15B097] transition">
              Computational Flow &amp; Formula Structure
            </a>
          </li>
          <li>
            <a href="#s9" className="hover:text-[#15B097] transition">
              Internal Controls &amp; Calculation Guards
            </a>
          </li>
          <li>
            <a href="#s10" className="hover:text-[#15B097] transition">
              Emission Factor Versioning &amp; Update Model
            </a>
          </li>
          <li>
            <a href="#s11" className="hover:text-[#15B097] transition">
              Dataset Update Cycle &amp; Institutional Validation
            </a>
          </li>
          <li>
            <a href="#s12" className="hover:text-[#15B097] transition">
              Data Privacy &amp; GDPR Conformity
            </a>
          </li>
        </ol>
      </nav>

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
        <Section11 />
        <Section12 />
      </div>
    </section>
  );
}
