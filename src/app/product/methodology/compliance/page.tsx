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
    <div className="max-w-7xl mx-auto px-6 pt-8 pb-24">

      {/* INTRODUCTION */}
      <div className="mb-12">
        <h1 className="text-4xl font-extrabold text-[#0B3A63] mb-4">
          Compliance & Legal Limits Overview
        </h1>

        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          Full legal, regulatory and compliance framework: legal boundaries, 
          CSRD/ESRS positioning, GDPR conformity, liability, permitted use cases, 
          prohibited use cases, data governance, versioning stability and 
          institutional compliance guarantees.
        </p>
      </div>

      {/* SECTIONS LIST */}
      <div className="p-8 mb-24 bg-white dark:bg-gray-800 rounded-xl shadow border border-gray-200 dark:border-gray-700">
        <h2 className="text-3xl font-bold text-[#0B3A63] mb-6">
          Compliance & Legal Sections
        </h2>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-gray-700 dark:text-gray-300 text-base">

          <li><a href="#s1" className="underline hover:text-[#0B3A63]">1. Legal Scope & Boundaries</a></li>
          <li><a href="#s2" className="underline hover:text-[#0B3A63]">2. Regulatory Positioning</a></li>
          <li><a href="#s3" className="underline hover:text-[#0B3A63]">3. Nature of the Output</a></li>
          <li><a href="#s4" className="underline hover:text-[#0B3A63]">4. Liability & Responsibility Model</a></li>
          <li><a href="#s5" className="underline hover:text-[#0B3A63]">5. Data Privacy & GDPR Framework</a></li>
          <li><a href="#s6" className="underline hover:text-[#0B3A63]">6. Permitted Institutional Use Cases</a></li>
          <li><a href="#s7" className="underline hover:text-[#0B3A63]">7. Prohibited Use Cases</a></li>
          <li><a href="#s8" className="underline hover:text-[#0B3A63]">8. User Input Limitations & Data Integrity</a></li>
          <li><a href="#s9" className="underline hover:text-[#0B3A63]">9. Emission Factor Stability & Backward Compatibility</a></li>
          <li><a href="#s10" className="underline hover:text-[#0B3A63]">10. Legal Disclaimer & Interpretation Rules</a></li>

        </ul>
      </div>

      {/* CONTENT SECTIONS */}
      <div className="space-y-24">
        <div id="s1"><Section1 /></div>
        <div id="s2"><Section2 /></div>
        <div id="s3"><Section3 /></div>
        <div id="s4"><Section4 /></div>
        <div id="s5"><Section5 /></div>
        <div id="s6"><Section6 /></div>
        <div id="s7"><Section7 /></div>
        <div id="s8"><Section8 /></div>
        <div id="s9"><Section9 /></div>
        <div id="s10"><Section10 /></div>
      </div>

    </div>
  );
}

