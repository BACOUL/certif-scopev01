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
import Section13 from "./sections/Section13";
import Section14 from "./sections/Section14";
import Section15 from "./sections/Section15";
import Section16 from "./sections/Section16";

export default function ProductPage() {
  return (
    <div
      id="product-overview"
      data-section="product-overview"
      className="max-w-7xl mx-auto px-6 pt-8 pb-24"
    >

      {/* HEADER */}
      <div className="w-full mb-12">
        <h1
          data-i18n="product.h1"
          className="text-3xl md:text-4xl font-extrabold text-[#0B3A63] mb-4"
        >
          CO₂e Attestation — Full Product Overview
        </h1>

        <p
          data-i18n="product.intro"
          className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed"
        >
          This page presents all functional, methodological and technical aspects of the
          Certif-Scope CO₂e Attestation. Each section explains one specific element: purpose,
          added value, use cases, methodology, verification, privacy, boundaries and limitations.
          The content is designed for procurement teams, banks, insurers and compliance workflows.
          Not an audit, not a CSRD/ESRS disclosure, not a regulatory inventory.
        </p>
      </div>

      {/* SECTIONS TABLE OF CONTENTS */}
      <div
        className="w-full p-8 mb-24 bg-white dark:bg-gray-800 rounded-xl shadow border border-gray-200 dark:border-gray-700"
        role="navigation"
        aria-label="Product Sections"
      >
        <h2
          data-i18n="product.sectionsTitle"
          className="text-2xl md:text-3xl font-bold text-[#0B3A63] mb-6"
        >
          Sections
        </h2>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-gray-700 dark:text-gray-300 text-base leading-relaxed">
          <li><a href="#s1" data-i18n="product.s1" className="underline">1. Product Overview</a></li>
          <li><a href="#s2" data-i18n="product.s2">2. Key Benefits Summary</a></li>
          <li><a href="#s3" data-i18n="product.s3">3. Why the product exists</a></li>
          <li><a href="#s4" data-i18n="product.s4">4. Solution provided</a></li>
          <li><a href="#s5" data-i18n="product.s5">5. Use cases</a></li>
          <li><a href="#s6" data-i18n="product.s6">6. How it works</a></li>
          <li><a href="#s7" data-i18n="product.s7">7. Value proposition</a></li>
          <li><a href="#s8" data-i18n="product.s8">8. Security & Verification</a></li>
          <li><a href="#s9" data-i18n="product.s9">9. Sample PDF</a></li>
          <li><a href="#s10" data-i18n="product.s10">10. Data Sources</a></li>
          <li><a href="#s11" data-i18n="product.s11">11. Methodological limitations</a></li>
          <li><a href="#s12" data-i18n="product.s12">12. Data privacy</a></li>
          <li><a href="#s13" data-i18n="product.s13">13. Integrations</a></li>
          <li><a href="#s14" data-i18n="product.s14">14. Industry-specific uses</a></li>
          <li><a href="#s15" data-i18n="product.s15">15. Maintenance & Updates</a></li>
          <li><a href="#s16" data-i18n="product.s16">16. Technical FAQ</a></li>
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
        <Section9 />
        <Section10 />
        <Section11 />
        <Section12 />
        <Section13 />
        <Section14 />
        <Section15 />
        <Section16 />
      </div>

    </div>
  );
}
