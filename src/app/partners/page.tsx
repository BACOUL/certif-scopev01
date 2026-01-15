"use client";

import Section1 from "./sections/Section1";
import Section2 from "./sections/Section2";
import Section3 from "./sections/Section3";
import Section4 from "./sections/Section4";
import Section5 from "./sections/Section5";
import Section6 from "./sections/Section6";
import Section7 from "./sections/Section7";
import Section8 from "./sections/Section8";

export default function PartnersPage() {
  return (
    <div
      id="partners-overview"
      data-section="partners-overview"
      className="max-w-7xl mx-auto px-6 pt-8 pb-24"
    >
      {/* HEADER */}
      <div className="w-full mb-12">
        <h1 className="text-3xl md:text-4xl font-extrabold text-[#0B3A63] mb-4">
          Partnership Program — Enterprise Integration
        </h1>

        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed max-w-4xl">
          The Certif-Scope Partnership Program enables large corporations,
          procurement networks, banks, insurers and platforms to issue CO₂e
          attestations for SME suppliers with secure automated verification.
        </p>
      </div>

      {/* TABLE OF CONTENTS */}
      <div className="w-full p-8 mb-24 bg-white dark:bg-gray-800 rounded-xl shadow border border-gray-200 dark:border-gray-700">
        <h2 className="text-2xl md:text-3xl font-bold text-[#0B3A63] mb-6">
          Sections
        </h2>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-gray-700 dark:text-gray-300 text-base leading-relaxed">
          <li><a href="#s1" className="underline">1. Overview of Partnership Model</a></li>
          <li><a href="#s2">2. Regulatory Drivers</a></li>
          <li><a href="#s3">3. Benefits for Large Groups</a></li>
          <li><a href="#s4">4. API Integration Model</a></li>
          <li><a href="#s5">5. Token System & Security</a></li>
          <li><a href="#s6">6. Pricing & Volume Packs</a></li>
          <li><a href="#s7">7. Deployment Workflow</a></li>
          <li><a href="#s8">8. SLA, Support & Maintenance</a></li>
        </ul>
      </div>

      {/* CONTENT SECTIONS */}
      <div className="space-y-24">
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
        <Section7 />
        <Section8 />
      </div>
    </div>
  );
}
