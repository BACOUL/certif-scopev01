"use client";

import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Section5 from "./Section5";
import Section6 from "./Section6";
import Section7 from "./Section7";
import Section8 from "./Section8";
import Section9 from "./Section9";
import Section10 from "./Section10";
import Section11 from "./Section11";
import Section12 from "./Section12";

export default function MethodologyPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 pt-24 pb-24">

      {/* INTRODUCTION */}
      <div className="w-full mb-12">
        <h1 className="text-3xl md:text-4xl font-extrabold text-[#0B3A63] mb-4">
          Certif-Scope Methodology Overview
        </h1>

        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          This page describes the full technical and scientific methodology powering Certif-Scope.
          It details the input structure, the spend-based model, emission factor sources,
          validation rules, deterministic output guarantees, regulatory alignment,
          versioning system, and verification protocol.
        </p>
      </div>

      {/* SOMMAIRE */}
      <div className="w-full p-8 mb-24 bg-white dark:bg-gray-800 rounded-xl shadow border border-gray-200 dark:border-gray-700">
        <h2 className="text-2xl md:text-3xl font-bold text-[#0B3A63] mb-6">
          Methodology Sections
        </h2>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-gray-700 dark:text-gray-300 text-base leading-relaxed">
          <li><a href="#s1" className="underline">1. Scope & Purpose</a></li>
          <li><a href="#s2">2. Standards & Regulatory Alignment</a></li>
          <li><a href="#s3">3. Spend-Based Model Definition</a></li>
          <li><a href="#s4">4. Category Mapping Logic</a></li>
          <li><a href="#s5">5. Emission Factor Sources</a></li>
          <li><a href="#s6">6. Calculation Formula & Parameters</a></li>
          <li><a href="#s7">7. Input Validation Rules</a></li>
          <li><a href="#s8">8. Deterministic Output Guarantees</a></li>
          <li><a href="#s9">9. Update Cycles & Version Control</a></li>
          <li><a href="#s10">10. Structural Limitations</a></li>
          <li><a href="#s11">11. Legal Boundaries</a></li>
          <li><a href="#s12">12. Verification Protocol</a></li>
        </ul>
      </div>

      {/* SECTIONS */}
      <div className="space-y-24">
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

    </div>
  );
}
