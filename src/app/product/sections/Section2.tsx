"use client";

export default function Section2() {
  return (
    <section
      id="s2"
      className="scroll-mt-24 pt-6 pb-24 border-b border-gray-200 dark:border-gray-800"
    >
      {/* TITLE BLOCK */}
      <div className="text-center mb-14">
        <p className="uppercase tracking-widest text-xs font-semibold text-[#0B3A63]/60">
          Section 2
        </p>

        <h2 className="text-4xl font-extrabold text-[#0B3A63] mt-3">
          Key Benefits Summary
        </h2>

        <p className="mt-4 text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
          The Certif-Scope attestation is engineered for institutional acceptance,
          designed to eliminate friction, accelerate compliance, and provide a unified,
          review-ready CO₂ indicator across procurement, banking, insurance and regulatory workflows.
        </p>
      </div>

      {/* FEATURE ROW — NEW DESIGN (ICON GRID + GRADIENT ACCENTS) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-12">

        {/* BENEFIT 1 */}
        <div className="relative p-8 rounded-2xl bg-gradient-to-b from-white to-[#E9F2FA] dark:from-gray-900 dark:to-gray-800 shadow-xl border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all">
          <div className="absolute -top-5 left-5 bg-[#0B3A63] text-white w-10 h-10 rounded-xl flex items-center justify-center text-lg font-bold shadow-lg">
            1
          </div>

          <h3 className="text-xl font-semibold text-[#0B3A63] mb-4 mt-6">
            Instantly Available
          </h3>

          <p className="text-gray-700 dark:text-gray-400 leading-relaxed text-sm">
            Generate a fully structured attestation in under 30 seconds. Designed for
            urgent procurement reviews, supplier validations, grant applications and  
            financial onboarding where delays are unacceptable.
          </p>
        </div>

        {/* BENEFIT 2 */}
        <div className="relative p-8 rounded-2xl bg-white dark:bg-gray-900 shadow-xl border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all">
          <div className="absolute -top-5 left-5 bg-[#0B3A63] text-white w-10 h-10 rounded-xl flex items-center justify-center text-lg font-bold shadow-lg">
            2
          </div>

          <h3 className="text-xl font-semibold text-[#0B3A63] mb-4 mt-6">
            Standardized & Review-Ready
          </h3>

          <p className="text-gray-700 dark:text-gray-400 leading-relaxed text-sm">
            Built around institutional ESG workflows. Every attestation follows a strict  
            structure: company identity, methodology, emission factors, computations,
            verification ID and signature reference — readable by any compliance officer.
          </p>
        </div>

        {/* BENEFIT 3 */}
        <div className="relative p-8 rounded-2xl bg-gradient-to-b from-[#E9F2FA] to-white dark:from-gray-800 dark:to-gray-900 shadow-xl border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all">
          <div className="absolute -top-5 left-5 bg-[#0B3A63] text-white w-10 h-10 rounded-xl flex items-center justify-center text-lg font-bold shadow-lg">
            3
          </div>

          <h3 className="text-xl font-semibold text-[#0B3A63] mb-4 mt-6">
            Fully Verifiable
          </h3>

          <p className="text-gray-700 dark:text-gray-400 leading-relaxed text-sm">
            Each PDF includes an independent cryptographic hash and verification ID that
            allows third parties — banks, insurers, auditors — to authenticate validity
            without needing to contact Certif-Scope.
          </p>
        </div>

      </div>

      {/* SECOND FEATURE ROW — WITH CHECKMARKS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-16">

        <div className="p-8 rounded-2xl bg-white dark:bg-gray-900 shadow-lg border border-gray-200 dark:border-gray-700">
          <h4 className="text-[#0B3A63] font-semibold text-lg mb-3">Cost-Effective</h4>
          <ul className="text-sm text-gray-700 dark:text-gray-400 space-y-2">
            <li>• No consultant fees</li>
            <li>• No audit scheduling delays</li>
            <li>• Affordable flat pricing</li>
          </ul>
        </div>

        <div className="p-8 rounded-2xl bg-[#E9F2FA] dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700">
          <h4 className="text-[#0B3A63] font-semibold text-lg mb-3">Europe-wide Acceptance</h4>
          <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-2">
            <li>• Compatible with EU procurement norms</li>
            <li>• Accepted by financial institutions</li>
            <li>• Adapted for ESG disclosure forms</li>
          </ul>
        </div>

        <div className="p-8 rounded-2xl bg-white dark:bg-gray-900 shadow-lg border border-gray-200 dark:border-gray-700">
          <h4 className="text-[#0B3A63] font-semibold text-lg mb-3">Transparent Methodology</h4>
          <ul className="text-sm text-gray-700 dark:text-gray-400 space-y-2">
            <li>• Documented emission factors</li>
            <li>• Spend-based GHG Protocol alignment</li>
            <li>• Clear and traceable calculations</li>
          </ul>
        </div>

      </div>

      {/* RETURN BUTTON */}
      <div className="mt-20 flex justify-end">
        <a
          href="#top"
          className="text-sm text-[#0B3A63]/80 hover:text-[#0B3A63] underline underline-offset-4 transition-colors"
        >
          Return to summary
        </a>
      </div>
    </section>
  );
}
