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
    <div className="max-w-7xl mx-auto px-6 pt-24 pb-24">

      <div className="mb-12">
        <h1 className="text-4xl font-extrabold text-[#0B3A63] mb-4">
          Certif-Scope Methodology Overview
        </h1>

        <p className="text-lg text-gray-700">
          Full scientific methodology: spend-based model, emission factors, validation
          rules, deterministic outputs, regulatory alignment, versioning, and verification protocol.
        </p>
      </div>

      <div className="p-8 mb-24 bg-white rounded-xl shadow border border-gray-200">
        <h2 className="text-3xl font-bold text-[#0B3A63] mb-6">
          Methodology Sections
        </h2>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-gray-700">
          <li><a href="#s1" className="underline">1. Scope & Purpose</a></li>
          <li><a href="#s2" className="underline">2. Standards & Regulatory Alignment</a></li>
          <li><a href="#s3" className="underline">3. Spend-Based Model Definition</a></li>
          <li><a href="#s4" className="underline">4. Category Mapping Logic</a></li>
          <li><a href="#s5" className="underline">5. Emission Factor Sources</a></li>
          <li><a href="#s6" className="underline">6. Calculation Formula & Parameters</a></li>
          <li><a href="#s7" className="underline">7. Input Validation Rules</a></li>
          <li><a href="#s8" className="underline">8. Deterministic Output Guarantees</a></li>
          <li><a href="#s9" className="underline">9. Update Cycles & Version Control</a></li>
          <li><a href="#s10" className="underline">10. Structural Limitations</a></li>
          <li><a href="#s11" className="underline">11. Legal Boundaries</a></li>
          <li><a href="#s12" className="underline">12. Verification Protocol</a></li>
        </ul>
      </div>

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
        <div id="s11"><Section11 /></div>
        <div id="s12"><Section12 /></div>
      </div>

    </div>
  );
}
