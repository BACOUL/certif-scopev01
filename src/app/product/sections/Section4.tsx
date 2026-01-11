"use client";

export default function Section4() {
  return (
    <section
      id="s4"
      className="scroll-mt-24 pb-24 pt-10 border-b border-slate-200 dark:border-slate-700"
    >
      {/* TITLE & INTRO */}
      <div className="mb-16">
        <h2 className="text-4xl font-extrabold text-[#0B3A63] mb-6">
          Solution Provided
        </h2>

        <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl leading-relaxed">
          Certif-Scope delivers a complete, ready-to-submit CO₂ attestation designed to be
          instantly usable in procurement, banking, insurance and due-diligence workflows.
          The entire process is automated, standardized and fully verifiable — removing
          the need for consultants, spreadsheets, manual calculations or complex ESG tools.
        </p>
      </div>

      {/* PREMIUM FEATURE SHOWCASE – LARGE 2-COLUMN LAYOUT */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">

        {/* LEFT — KEY FEATURES LIST */}
        <div>
          <h3 className="text-2xl font-semibold text-[#0B3A63] mb-6">
            What Certif-Scope Delivers
          </h3>

          <ul className="space-y-5 text-gray-700 dark:text-gray-300 leading-relaxed text-sm">
            <li>
              <span className="font-semibold text-[#0B3A63]">• Instant CO₂ attestation:</span>{" "}
              generated in seconds with automated emission factors.
            </li>
            <li>
              <span className="font-semibold text-[#0B3A63]">• Standardized PDF format:</span>{" "}
              structured for procurement, banking and compliance reviews.
            </li>
            <li>
              <span className="font-semibold text-[#0B3A63]">• Transparent methodology summary:</span>{" "}
              fully documented factors and calculations inside the attestation.
            </li>
            <li>
              <span className="font-semibold text-[#0B3A63]">• Unique verification ID:</span>{" "}
              enabling independent authentication by any institution.
            </li>
            <li>
              <span className="font-semibold text-[#0B3A63]">• Cryptographic integrity hash:</span>{" "}
              ensures the document cannot be altered without detection.
            </li>
          </ul>
        </div>

        {/* RIGHT — PREMIUM INFO CARD */}
        <div className="bg-[#f0f6fb] dark:bg-gray-800 p-10 rounded-3xl shadow-xl border border-slate-200 dark:border-gray-700">
          <h4 className="text-xl font-semibold text-[#0B3A63] mb-4">
            Fully Automated, Fully Verifiable
          </h4>
          <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">
            Certif-Scope uses pre-validated emission factor databases and automated
            calculations to eliminate human error and ensure consistency.
          </p>
          <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
            Every attestation includes a verification URL and cryptographic signature
            allowing banks, procurement teams and compliance officers to authenticate the
            document independently, even without contacting Certif-Scope.
          </p>
        </div>

      </div>

      {/* FULL-WIDTH PREMIUM BAND — DIFFERENT DESIGN THAN OTHER SECTIONS */}
      <div className="w-full bg-[#0B3A63] text-white rounded-2xl p-12 shadow-lg mb-20">
        <h3 className="text-2xl font-bold mb-4">
          Guaranteed Institutional Acceptance Structure
        </h3>
        <p className="text-white/80 leading-relaxed max-w-4xl text-sm">
          The standardized layout of the attestation ensures immediate readability by
          procurement and financial teams. No unnecessary pages, no vague metrics,
          no unverified numbers — only structured data aligned with institutional requirements.
          This format reduces friction, speeds up application processes and minimizes rejection risks.
        </p>
      </div>

      {/* GRID OF DIFFERENTIATORS — 3-COLUMN PREMIUM LAYOUT */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">

        {/* DIFFERENTIATOR 1 */}
        <div className="p-8 bg-white dark:bg-gray-900 rounded-xl shadow-xl border border-gray-200 dark:border-gray-700">
          <h4 className="text-xl font-semibold text-[#0B3A63] mb-3">
            No Consultant Required
          </h4>
          <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
            No appointments, no back-and-forth, no long questionnaires. Everything is automated
            based on the financial input you provide.
          </p>
        </div>

        {/* DIFFERENTIATOR 2 */}
        <div className="p-8 bg-white dark:bg-gray-900 rounded-xl shadow-xl border border-gray-200 dark:border-gray-700">
          <h4 className="text-xl font-semibold text-[#0B3A63] mb-3">
            Fully Compliant Structure
          </h4>
          <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
            The PDF includes all required fields for environmental assessment, institutional
            reporting, procurement onboarding and ESG scoring systems.
          </p>
        </div>

        {/* DIFFERENTIATOR 3 */}
        <div className="p-8 bg-white dark:bg-gray-900 rounded-xl shadow-xl border border-gray-200 dark:border-gray-700">
          <h4 className="text-xl font-semibold text-[#0B3A63] mb-3">
            Independent Verification
          </h4>
          <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
            Every attestation includes a verification URL and a cryptographic hash,
            enabling review without any dependency on Certif-Scope’s servers.
          </p>
        </div>

      </div>

      {/* DISCREET BACK BUTTON */}
      <div className="mt-8">
        <a
          href="#top"
          className="text-[#0B3A63] text-sm underline opacity-70 hover:opacity-100 transition"
        >
          Back to summary
        </a>
      </div>
    </section>
  );
        }
