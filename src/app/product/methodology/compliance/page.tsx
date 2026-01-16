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

export default function ComplianceLegalPage() {
  return (
    <div
      id="compliance-overview"
      data-section="compliance-overview"
      className="max-w-7xl mx-auto px-6 pt-8 pb-24"
    >
      {/* TOP ANCHOR */}
      <div id="top" />

      {/* HEADER */}
      <div className="w-full mb-12">
        <h1 className="text-3xl md:text-4xl font-extrabold text-[#0B3A63] mb-4">
          Compliance & Legal Limits Overview
        </h1>

        <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed max-w-3xl">
          Full legal, regulatory and compliance framework: legal boundaries,
          CSRD/ESRS positioning, GDPR conformity, liability allocation,
          permitted and prohibited uses, data governance, version stability
          and institutional compliance constraints.
        </p>
      </div>

      {/* TABLE OF CONTENTS — ALIGNED WITH METHODOLOGY & PRODUCT */}
      <nav
        aria-label="Compliance Sections"
        className="mb-16 p-6 bg-[#F8FAFC] border border-gray-200 rounded-xl shadow-sm"
      >
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-[#0B3A63] font-medium">
          <li><a href="#s1" className="hover:text-[#15B097] transition">1. Legal Scope & Boundaries</a></li>
          <li><a href="#s2" className="hover:text-[#15B097] transition">2. Regulatory Positioning</a></li>
          <li><a href="#s3" className="hover:text-[#15B097] transition">3. Nature of the Output</a></li>
          <li><a href="#s4" className="hover:text-[#15B097] transition">4. Liability & Responsibility Model</a></li>
          <li><a href="#s5" className="hover:text-[#15B097] transition">5. Data Privacy & GDPR Framework</a></li>
          <li><a href="#s6" className="hover:text-[#15B097] transition">6. Permitted Institutional Use Cases</a></li>
          <li><a href="#s7" className="hover:text-[#15B097] transition">7. Prohibited Use Cases</a></li>
          <li><a href="#s8" className="hover:text-[#15B097] transition">8. User Input Limitations & Data Integrity</a></li>
          <li><a href="#s9" className="hover:text-[#15B097] transition">9. Emission Factor Stability & Backward Compatibility</a></li>
          <li><a href="#s10" className="hover:text-[#15B097] transition">10. Legal Disclaimer & Interpretation Rules</a></li>
        </ul>
      </nav>

      {/* SECTIONS — SAME RENDERING LOGIC AS PRODUCT / METHODOLOGY */}
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
  );
}
