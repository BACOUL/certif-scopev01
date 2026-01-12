"use client";

export default function Section6() {
  return (
    <section
      id="s6"
      className="scroll-mt-24 border-b border-gray-200 pb-24"
    >
      {/* HEADER BLOCK */}
      <div className="relative p-12 rounded-2xl bg-[#0B3A63] text-white shadow-xl overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#15B097]/30 to-transparent opacity-40"></div>

        <h2 className="text-4xl md:text-5xl font-extrabold relative z-10">
          6. How Certif-Scope Works
        </h2>

        <p className="text-white/90 max-w-4xl mt-6 leading-relaxed relative z-10">
          Certif-Scope converts annual business spend data into a standardized CO₂ attestation 
          using a deterministic calculation engine aligned with widely recognized European 
          methodological frameworks. The full workflow is automated, reproducible and formatted 
          for institutional acceptance across procurement, banking, insurance and investment due diligence.
        </p>
      </div>

      {/* TIMELINE — PREMIUM, CLEAR, ACCESSIBLE */}
      <div className="relative mt-20 pl-10">

        {/* Vertical Line */}
        <div className="absolute top-0 left-4 w-1 h-full bg-[#15B097]/30 rounded-full"></div>

        {/* STEP 1 */}
        <div className="relative mb-16">
          <div className="absolute -left-1 top-1.5 w-6 h-6 bg-[#15B097] rounded-full shadow-md"></div>
          <h3 className="text-2xl font-bold text-[#0B3A63]">Step 1 — Input Business Data</h3>
          <p className="text-gray-700 mt-3 max-w-3xl">
            The user enters simplified yearly expenditure categories. Data validation routines ensure 
            consistency and prevent incorrect category assignment. No carbon expertise is required.
          </p>

          <ul className="mt-3 text-gray-700 text-sm space-y-1">
            <li>• Annual spend by operational category</li>
            <li>• Secure input validation (syntax + logic)</li>
            <li>• GDPR-compliant handling of sensitive financial data</li>
          </ul>
        </div>

        {/* STEP 2 */}
        <div className="relative mb-16">
          <div className="absolute -left-1 top-1.5 w-6 h-6 bg-[#15B097] rounded-full shadow-md"></div>
          <h3 className="text-2xl font-bold text-[#0B3A63]">Step 2 — Automatic Category Mapping</h3>
          <p className="text-gray-700 mt-3 max-w-3xl">
            Certif-Scope maps each expense line to the corresponding emissions category using 
            standardized reference classifications (compatible with the European NACE structure).
          </p>

          <ul className="mt-3 text-gray-700 text-sm space-y-1">
            <li>• Deterministic category assignment</li>
            <li>• Multi-sector compatibility</li>
            <li>• Reproducible output for audit trails</li>
          </ul>
        </div>

        {/* STEP 3 */}
        <div className="relative mb-16">
          <div className="absolute -left-1 top-1.5 w-6 h-6 bg-[#15B097] rounded-full shadow-md"></div>
          <h3 className="text-2xl font-bold text-[#0B3A63]">Step 3 — Emission Calculation Engine</h3>
          <p className="text-gray-700 mt-3 max-w-3xl">
            The engine applies spend-based emission factors sourced from established European 
            institutions. Calculations follow deterministic formulas ensuring consistent results 
            across repeated evaluations.
          </p>

          <ul className="mt-3 text-gray-700 text-sm space-y-1">
            <li>• Uses verified emission factor databases</li>
            <li>• Deterministic calculation logic</li>
            <li>• Instant processing (under 30 seconds)</li>
          </ul>
        </div>

        {/* STEP 4 */}
        <div className="relative mb-16">
          <div className="absolute -left-1 top-1.5 w-6 h-6 bg-[#15B097] rounded-full shadow-md"></div>
          <h3 className="text-2xl font-bold text-[#0B3A63]">Step 4 — Attestation Generation</h3>
          <p className="text-gray-700 mt-3 max-w-3xl">
            A structured PDF is created including emission totals, classification summary, 
            organization metadata and contextualized interpretation elements formatted according 
            to European institutional expectations.
          </p>

          <ul className="mt-3 text-gray-700 text-sm space-y-1">
            <li>• Standardized PDF structure</li>
            <li>• Clear category breakdown</li>
            <li>• Professional institutional formatting</li>
          </ul>
        </div>

        {/* STEP 5 */}
        <div className="relative mb-16">
          <div className="absolute -left-1 top-1.5 w-6 h-6 bg-[#15B097] rounded-full shadow-md"></div>
          <h3 className="text-2xl font-bold text-[#0B3A63]">Step 5 — Integrity & Verification Seal</h3>
          <p className="text-gray-700 mt-3 max-w-3xl">
            The PDF incorporates a cryptographically generated verification identifier that allows 
            external entities to validate authenticity without relying on Certif-Scope’s infrastructure.
          </p>

          <ul className="mt-3 text-gray-700 text-sm space-y-1">
            <li>• Cryptographic integrity signature</li>
            <li>• Offline verification capability</li>
            <li>• Institutional trust and traceability</li>
          </ul>
        </div>

      </div>

      {/* FINAL INFORMATION BLOCK */}
      <div className="mt-20 p-10 bg-[#F8FAFC] border border-[#15B097] rounded-xl shadow-sm">
        <h4 className="text-2xl font-semibold text-[#0B3A63] mb-3">
          Automated, Reproducible, and Institution-Ready
        </h4>
        <p className="text-gray-700 max-w-4xl leading-relaxed">
          Certif-Scope eliminates the need for consultants or multi-week audits by providing a 
          reproducible, verifiable and standardized attestation aligned with the expectations of 
          European procurement and financial institutions. The workflow is designed for compliance, 
          operational clarity and cross-border acceptance.
        </p>
      </div>

      {/* RETURN BUTTON — IDENTICAL ACROSS ALL SECTIONS */}
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
