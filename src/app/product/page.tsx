"use client";

import { useState } from "react";
import Link from "next/link";
import Breadcrumb from "@/components/Common/Breadcrumb";

export default function ProductPage() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      <Breadcrumb
        pageName="Product Overview"
        description="Instant CO₂ attestation designed for procurement, banking and compliance workflows."
      />

      {/* MAIN LAYOUT — SIDEBAR + CONTENT */}
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-24 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* SIDEBAR — FIXED ON DESKTOP */}
        <aside className="md:col-span-1">

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setOpenMenu(!openMenu)}
            className="md:hidden mb-4 px-4 py-2 bg-[#0B3A63] text-white rounded-lg"
          >
            {openMenu ? "Close sections" : "Open sections"}
          </button>

          <nav
            className={`
              ${openMenu ? "block" : "hidden"}
              md:block sticky top-24 space-y-3 text-sm
            `}
          >
            <h3 className="text-lg font-semibold text-[#0B3A63] mb-2">Sections</h3>

            <ul className="space-y-2 text-gray-700 dark:text-gray-300">

              <li><a href="#s1" className="hover:text-[#0B3A63]">1. Product Overview</a></li>
              <li><a href="#s2" className="hover:text-[#0B3A63]">2. Key Benefits Summary</a></li>
              <li><a href="#s3" className="hover:text-[#0B3A63]">3. Why the product exists</a></li>
              <li><a href="#s4" className="hover:text-[#0B3A63]">4. Solution provided</a></li>
              <li><a href="#s5" className="hover:text-[#0B3A63]">5. Use cases</a></li>
              <li><a href="#s6" className="hover:text-[#0B3A63]">6. How it works</a></li>
              <li><a href="#s7" className="hover:text-[#0B3A63]">7. Value proposition</a></li>
              <li><a href="#s8" className="hover:text-[#0B3A63]">8. Security & Verification</a></li>
              <li><a href="#s9" className="hover:text-[#0B3A63]">9. Sample PDF</a></li>
              <li><a href="#s10" className="hover:text-[#0B3A63]">10. Data Sources</a></li>
              <li><a href="#s11" className="hover:text-[#0B3A63]">11. Methodological limitations</a></li>
              <li><a href="#s12" className="hover:text-[#0B3A63]">12. Data privacy</a></li>
              <li><a href="#s13" className="hover:text-[#0B3A63]">13. Integrations</a></li>
              <li><a href="#s14" className="hover:text-[#0B3A63]">14. Industry-specific uses</a></li>
              <li><a href="#s15" className="hover:text-[#0B3A63]">15. Maintenance & Updates</a></li>
              <li><a href="#s16" className="hover:text-[#0B3A63]">16. Technical FAQ</a></li>

            </ul>
          </nav>
        </aside>

        {/* MAIN CONTENT */}
        <div className="md:col-span-3 space-y-24">

          {/* ================================================================= */}
          {/* SECTION 1 — PRODUCT OVERVIEW */}
          {/* ================================================================= */}
          <section id="s1">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0B3A63] mb-4">
              Product Overview
            </h2>

            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-10 max-w-3xl">
              Certif-Scope enables small and medium enterprises to instantly generate a standardized,
              institution-ready CO₂ attestation, aligned with GHG Protocol principles and accepted by
              procurement, banking, compliance and due diligence teams across Europe.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

              <div className="p-6 rounded-xl bg-white dark:bg-gray-800 shadow border">
                <h3 className="text-xl font-semibold text-[#0B3A63] mb-2">
                  Designed for institutional workflows
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Identification, methodology, emission factors, verification hash and timestamp—
                  structured exactly as required by procurement and finance departments.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-white dark:bg-gray-800 shadow border">
                <h3 className="text-xl font-semibold text-[#0B3A63] mb-2">
                  30-second generation process
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  No consultants, no delays. Enter expenses → instant PDF with verified footprint.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-white dark:bg-gray-800 shadow border">
                <h3 className="text-xl font-semibold text-[#0B3A63] mb-2">
                  Independent verification
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Includes a unique verification code and cryptographic signature that any
                  organization can validate offline.
                </p>
              </div>

            </div>
          </section>

          {/* ================================================================= */}
          {/* SECTION 2 — PLACEHOLDER STRUCTURES */}
          {/* ================================================================= */}

          <section id="s2"><h2 className="section-title">Key Benefits Summary</h2></section>
          <section id="s3"><h2 className="section-title">Why the product exists</h2></section>
          <section id="s4"><h2 className="section-title">Solution provided</h2></section>
          <section id="s5"><h2 className="section-title">Use cases</h2></section>
          <section id="s6"><h2 className="section-title">How it works</h2></section>
          <section id="s7"><h2 className="section-title">Value proposition</h2></section>
          <section id="s8"><h2 className="section-title">Security & Verification</h2></section>
          <section id="s9"><h2 className="section-title">Sample PDF</h2></section>
          <section id="s10"><h2 className="section-title">Data Sources</h2></section>
          <section id="s11"><h2 className="section-title">Methodological limitations</h2></section>
          <section id="s12"><h2 className="section-title">Data privacy</h2></section>
          <section id="s13"><h2 className="section-title">Integrations</h2></section>
          <section id="s14"><h2 className="section-title">Industry-specific uses</h2></section>
          <section id="s15"><h2 className="section-title">Maintenance & Updates</h2></section>
          <section id="s16"><h2 className="section-title">Technical FAQ</h2></section>

        </div>
      </div>
    </>
  );
}
