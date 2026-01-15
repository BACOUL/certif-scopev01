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
          Enterprise Partnerships — Integration Overview
        </h1>

        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed max-w-3xl">
          This page presents all partnership and integration capabilities available to
          banks, insurers, procurement departments and enterprise compliance workflows.
          Each section explains one dimension of operational, technical or regulatory integration.
        </p>
      </div>

      {/* SECTIONS TABLE OF CONTENTS */}
      <div
        className="w-full p-8 mb-24 bg-white dark:bg-gray-800 rounded-xl shadow border border-gray-200 dark:border-gray-700"
        role="navigation"
        aria-label="Partner Sections"
      >
        <h2 className="text-2xl md:text-3xl font-bold text-[#0B3A63] mb-6">
          Sections
        </h2>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-gray-700 dark:text-gray-300 text-base leading-relaxed">
          <li><a href="#s1" className="underline hover:text-[#0B3A63]">1. Partnership Model Overview</a></li>
          <li><a href="#s2" className="underline hover:text-[#0B3A63]">2. Regulatory Drivers</a></li>
          <li><a href="#s3" className="underline hover:text-[#0B3A63]">3. Benefits for Large Groups</a></li>
          <li><a href="#s4" className="underline hover:text-[#0B3A63]">4. API Integration Model</a></li>
          <li><a href="#s5" className="underline hover:text-[#0B3A63]">5. Token System & Security</a></li>
          <li><a href="#s6" className="underline hover:text-[#0B3A63]">6. Pricing & Volume Packs</a></li>
          <li><a href="#s7" className="underline hover:text-[#0B3A63]">7. Deployment Workflow</a></li>
          <li><a href="#s8" className="underline hover:text-[#0B3A63]">8. SLA, Support & Maintenance</a></li>
        </ul>
      </div>

      {/* CONTENT SECTIONS */}
      <div className="space-y-24">
        <div id="s1" className="scroll-mt-28"><Section1 /></div>
        <div id="s2" className="scroll-mt-28"><Section2 /></div>
        <div id="s3" className="scroll-mt-28"><Section3 /></div>
        <div id="s4" className="scroll-mt-28"><Section4 /></div>
        <div id="s5" className="scroll-mt-28"><Section5 /></div>
        <div id="s6" className="scroll-mt-28"><Section6 /></div>
        <div id="s7" className="scroll-mt-28"><Section7 /></div>
        <div id="s8" className="scroll-mt-28"><Section8 /></div>
      </div>

    </div>
  );
}
