"use client";

import Section1 from "./sections/Section1";
import Section2 from "./sections/Section2";
import Section3 from "./sections/Section3";
import Section4 from "./sections/Section4";
import Section5 from "./sections/Section5";
import Section6 from "./sections/Section6";

export default function PartnersPage() {
  return (
    <div
      id="partners-overview"
      data-section="partners-overview"
      className="max-w-7xl mx-auto px-6 pt-8 pb-24"
    >
      {/* TOP ANCHOR */}
      <div id="top" />

      {/* HEADER */}
      <div className="w-full mb-12">
        <h1 className="text-3xl md:text-4xl font-extrabold text-[#0B3A63] mb-4">
          Partners — Packs & Partner Key Model
        </h1>

        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed max-w-3xl">
          This page explains how partners use Certif-Scope in V1: purchasing prepaid packs,
          receiving a partner key, and generating CO₂e attestations on demand.
          No API, no accounts, no integrations.
        </p>
      </div>

      {/* TABLE OF CONTENTS — SAME MODEL AS PRODUCT / METHODOLOGY */}
      <nav
        aria-label="Partner Sections"
        className="mb-16 p-6 bg-[#F8FAFC] border border-gray-200 rounded-xl shadow-sm"
      >
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-[#0B3A63] font-medium">
          <li>
            <a href="#s1" className="hover:text-[#15B097] transition">
              1. Partner Overview
            </a>
          </li>
          <li>
            <a href="#s2" className="hover:text-[#15B097] transition">
              2. Packs & Credits
            </a>
          </li>
          <li>
            <a href="#s3" className="hover:text-[#15B097] transition">
              3. Partner Key Issuance
            </a>
          </li>
          <li>
            <a href="#s4" className="hover:text-[#15B097] transition">
              4. Key Validity & Usage Limits
            </a>
          </li>
          <li>
            <a href="#s5" className="hover:text-[#15B097] transition">
              5. Recovery & Security Model
            </a>
          </li>
          <li>
            <a href="#s6" className="hover:text-[#15B097] transition">
              6. API & High-Volume Access (Coming Soon)
            </a>
          </li>
        </ul>
      </nav>

      {/* SECTIONS */}
      <div className="space-y-24">
        <div id="s1" className="scroll-mt-28">
          <Section1 />
        </div>

        <div id="s2" className="scroll-mt-28">
          <Section2 />
        </div>

        <div id="s3" className="scroll-mt-28">
          <Section3 />
        </div>

        <div id="s4" className="scroll-mt-28">
          <Section4 />
        </div>

        <div id="s5" className="scroll-mt-28">
          <Section5 />
        </div>

        <div id="s6" className="scroll-mt-28">
          <Section6 />
        </div>
      </div>
    </div>
  );
}
