"use client";

import Section1 from "./sections/Section1";
import Section2 from "./sections/Section2";
import Section3 from "./sections/Section3";
import Section4 from "./sections/Section4";
import Section5 from "./sections/Section5";
import Section6 from "./sections/Section6";
import Section7 from "./sections/Section7";

export default function ProductPage() {
  return (
    <div
      id="product-overview"
      data-section="product-overview"
      className="max-w-7xl mx-auto px-6 pt-8 pb-24"
    >

      {/* TOP ANCHOR */}
      <div id="top" />

      {/* HEADER */}
      <div className="w-full mb-12">
        <h1
          data-i18n="product.h1"
          className="text-3xl md:text-4xl font-extrabold text-[#0B3A63] mb-4"
        >
          CO₂e Attestation — Full Product Overview
        </h1>

        <p
          data-i18n="product.subtitle"
          className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed max-w-3xl"
        >
          A structured, standardized and verification-ready overview of the CO₂e Attestation,
          including benefits, use cases, verification method and limitations.
        </p>
      </div>

      {/* TABLE OF CONTENTS */}
      <nav
        aria-label="Product Sections"
        className="mb-16 p-6 bg-[#F8FAFC] border border-gray-200 rounded-xl shadow-sm"
      >
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-[#0B3A63] font-medium">
          <li><a href="#s1" className="hover:text-[#15B097] transition">1. Product Overview</a></li>
          <li><a href="#s2" className="hover:text-[#15B097] transition">2. Key Benefits Summary</a></li>
          <li><a href="#s3" className="hover:text-[#15B097] transition">3. Why the Product Exists</a></li>
          <li><a href="#s4" className="hover:text-[#15B097] transition">4. What’s Included in the PDF</a></li>
          <li><a href="#s5" className="hover:text-[#15B097] transition">5. Verification & Integrity</a></li>
          <li><a href="#s6" className="hover:text-[#15B097] transition">6. Usage Scenarios</a></li>
          <li><a href="#s7" className="hover:text-[#15B097] transition">7. Limitations & Fit</a></li>
        </ul>
      </nav>

      {/* SECTIONS */}
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />

    </div>
  );
            }
