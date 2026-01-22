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
    <section
      id="product"
      data-section="product"
      className="max-w-7xl mx-auto px-6 pt-10 pb-24"
    >
      {/* TOP ANCHOR */}
      <div id="top" />

      {/* CANONICAL HEADER */}
      <header className="mb-14">
        <p
          data-i18n="product.label"
          className="uppercase text-xs tracking-wider text-[#64748B] mb-3"
        >
          CO₂e Attestation — Product
        </p>

        <h1
          data-i18n="product.h1"
          className="text-3xl md:text-4xl font-extrabold text-[#0B3A63] mb-6"
        >
          Full Product Overview
        </h1>

        <p
          data-i18n="product.subtitle"
          className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed max-w-3xl"
        >
          A structured, standardized and verification-ready overview of the CO₂e
          Attestation, including benefits, use cases, verification mechanisms and
          clearly defined limitations.
        </p>

        <div className="w-20 h-[2px] bg-gray-300 dark:bg-gray-700 mt-10" />
      </header>

      {/* TABLE OF CONTENTS — CANONICAL & LOCKED */}
      <nav
        aria-label="Product sections"
        className="mb-16 max-w-4xl p-6 bg-[#F8FAFC] border border-gray-200 rounded-xl shadow-sm"
      >
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-[#0B3A63] font-medium">
          <li>
            <a href="#product-overview" className="hover:text-[#15B097] transition">
              1. Product Overview
            </a>
          </li>
          <li>
            <a href="#key-benefits" className="hover:text-[#15B097] transition">
              2. Key Benefits Summary
            </a>
          </li>
          <li>
            <a
              href="#why-the-product-exists"
              className="hover:text-[#15B097] transition"
            >
              3. Why the Product Exists
            </a>
          </li>
          <li>
            <a
              href="#attestation-pdf-contents"
              className="hover:text-[#15B097] transition"
            >
              4. What’s Included in the PDF
            </a>
          </li>
          <li>
            <a
              href="#verification-and-integrity"
              className="hover:text-[#15B097] transition"
            >
              5. Verification & Integrity
            </a>
          </li>
          <li>
            <a
              href="#usage-scenarios"
              className="hover:text-[#15B097] transition"
            >
              6. Usage Scenarios
            </a>
          </li>
          <li>
            <a
              href="#limitations-and-fit"
              className="hover:text-[#15B097] transition"
            >
              7. Limitations & Fit
            </a>
          </li>
        </ul>
      </nav>

      {/* CONTENT — CANONICAL ORDER */}
      <div className="max-w-4xl space-y-24">
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
        <Section7 />
      </div>
    </section>
  );
    }
