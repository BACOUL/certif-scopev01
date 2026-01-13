"use client";

export default function Section15() {
  return (
    <section
      id="s15"
      className="scroll-mt-24 border-b border-gray-200 pb-24"
    >

      {/* HEADER — unique layout, neutral institutional tone */}
      <div className="p-12 rounded-2xl bg-white border border-gray-200 shadow-lg relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B3A63]/10 to-[#15B097]/10 pointer-events-none"></div>

        <h2 className="text-4xl md:text-5xl font-extrabold text-[#0B3A63] relative z-10">
          15. Maintenance & Updates
        </h2>

        <p className="text-lg text-gray-700 max-w-4xl mt-6 leading-relaxed relative z-10">
          Certif-Scope follows a controlled update policy designed to maintain stability,
          institutional compatibility and long-term reproducibility. Every modification
          is versioned, documented and validated through internal checks to ensure that
          procurement platforms, banking review systems and compliance processes are never disrupted.
        </p>
      </div>

      {/* 4-COLUMN GRID — Unique layout for this section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mt-16">

        {/* BLOCK 1 */}
        <div className="p-8 bg-[#F8FAFC] rounded-xl border border-[#0B3A63]/20 shadow-sm">
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-3">
            Stable Document Structure
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            The formatting, field placement and metadata layout of the attestation remain stable
            across updates to avoid inconsistencies in automated ingestion systems.
          </p>
          <ul className="mt-3 text-sm text-gray-600 space-y-2">
            <li>• No disruptive layout changes</li>
            <li>• Fixed field positions</li>
            <li>• Predictable output formatting</li>
          </ul>
        </div>

        {/* BLOCK 2 */}
        <div className="p-8 bg-white rounded-xl border border-gray-200 shadow-md">
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-3">
            Controlled Versioning
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            All updates follow semantic versioning. Institutions can always identify which
            computation logic and formatting rules were used during generation.
          </p>
          <ul className="mt-3 text-sm text-gray-600 space-y-2">
            <li>• Semantic versioning (MAJOR.MINOR.PATCH)</li>
            <li>• Public version number embedded in PDF</li>
            <li>• Change-log available for comparison</li>
          </ul>
        </div>

        {/* BLOCK 3 */}
        <div className="p-8 bg-[#F8FAFC] rounded-xl border border-[#15B097]/30 shadow-sm">
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-3">
            Integrity & Consistency Checks
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            Every release undergoes automated validation routines to ensure that output remains
            deterministic and reproducible.
          </p>
          <ul className="mt-3 text-sm text-gray-600 space-y-2">
            <li>• Automated consistency scans</li>
            <li>• Validation against reference datasets</li>
            <li>• Logical integrity controls</li>
          </ul>
        </div>

        {/* BLOCK 4 */}
        <div className="p-8 bg-white rounded-xl border border-gray-200 shadow-md">
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-3">
            Multi-Year Stability Guarantee
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            Updates prioritize stability over new features. Breaking changes are explicitly avoided
            unless mandated by regulatory evolution.
          </p>
          <ul className="mt-3 text-sm text-gray-600 space-y-2">
            <li>• Stable long-term structure</li>
            <li>• Backward compatibility preserved</li>
            <li>• Zero-impact maintenance policy</li>
          </ul>
        </div>
      </div>

      {/* WORKFLOW DIAGRAM — required by the 29 rules */}
      <div className="mt-20 p-12 bg-[#F8FAFC] border border-[#0B3A63]/20 rounded-xl shadow-sm">
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">
          Update Lifecycle (Input → Validation → Release → Freeze)
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-sm text-gray-700">

          <div className="p-6 bg-white rounded-xl border border-gray-200 shadow-sm">
            <h4 className="font-semibold text-[#0B3A63] mb-2">1. Input</h4>
            <p>Internal proposals or mandatory compliance adjustments identified.</p>
          </div>

          <div className="p-6 bg-white rounded-xl border border-gray-200 shadow-sm">
            <h4 className="font-semibold text-[#0B3A63] mb-2">2. Validation</h4>
            <p>Automated and manual checks ensure stability, accuracy and reproducibility.</p>
          </div>

          <div className="p-6 bg-white rounded-xl border border-gray-200 shadow-sm">
            <h4 className="font-semibold text-[#0B3A63] mb-2">3. Release</h4>
            <p>New version tagged, documented and integrated without breaking existing workflows.</p>
          </div>

          <div className="p-6 bg-white rounded-xl border border-gray-200 shadow-sm">
            <h4 className="font-semibold text-[#0B3A63] mb-2">4. Freeze</h4>
            <p>Output locked for stability; no experimental changes allowed post-release.</p>
          </div>

        </div>
      </div>

      {/* INSTITUTIONAL RELEVANCE BLOCK */}
      <div className="mt-20 p-12 bg-[#0B3A63] text-white rounded-xl shadow-md relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#15B097]/30 to-transparent"></div>

        <h3 className="text-2xl font-semibold relative z-10">
          Why Maintenance Stability Is Critical for Institutions
        </h3>

        <p className="text-white/90 max-w-5xl mt-4 leading-relaxed relative z-10">
          Procurement platforms, banking risk systems and insurance underwriting processes
          rely on predictable field placement and consistent output structure. Certif-Scope
          guarantees that formatting, logic and identifiers remain unchanged across versions,
          ensuring that institution workflows remain uninterrupted over time.
        </p>
      </div>

      {/* RETURN BUTTON */}
      <div className="mt-12 text-right">
        <a
          href="#top"
          className="inline-block text-sm px-4 py-2 rounded-md border border-[#0B3A63] text-[#0B3A63] hover:bg-[#0B3A63] hover:text-white transition-colors"
        >
          Back to summary
        </a>
      </div>

    </section>
  );
        }
