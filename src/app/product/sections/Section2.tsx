"use client";

export default function Section2() {
  return (
    <section id="s2" className="scroll-mt-24">
      
      {/* HEADER */}
      <div className="mb-12">
        <p className="text-sm font-semibold tracking-wide text-[#0B3A63]/70 uppercase mb-2">
          Section 2
        </p>

        <h2 className="text-3xl md:text-4xl font-extrabold text-[#0B3A63] leading-tight">
          Key Benefits Summary
        </h2>

        <p className="mt-4 max-w-3xl text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
          Certif-Scope delivers measurable, verifiable and institution-ready climate indicators 
          that accelerate procurement, compliance and banking onboarding. Each benefit below 
          reflects mandatory expectations within European due-diligence processes.
        </p>
      </div>

      {/* MAIN GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* CARD 1 */}
        <div className="p-8 rounded-2xl bg-[#F8FAFC] dark:bg-gray-800 shadow-md border border-gray-200 dark:border-gray-700 hover:shadow-lg transition">
          <span className="inline-block px-3 py-1 text-xs rounded-full bg-[#0B3A63]/10 text-[#0B3A63] font-semibold mb-4">
            Institutional-Ready
          </span>

          <h3 className="text-xl font-semibold text-[#0B3A63] mb-3">
            Fully standardized CO₂ documentation
          </h3>

          <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
            The attestation mirrors recognized disclosure structures used by procurement, ESG 
            auditors and financial regulators. Banks and partners can validate the information 
            without requesting supplementary evidence.
          </p>
        </div>

        {/* CARD 2 */}
        <div className="p-8 rounded-2xl bg-white dark:bg-gray-900 shadow-md border border-gray-200 dark:border-gray-700 hover:shadow-lg transition">
          <span className="inline-block px-3 py-1 text-xs rounded-full bg-[#0B3A63]/10 text-[#0B3A63] font-semibold mb-4">
            Instant Generation
          </span>

          <h3 className="text-xl font-semibold text-[#0B3A63] mb-3">
            30-second automated calculation
          </h3>

          <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
            Instead of multi-week consultant workflows, Certif-Scope produces results instantly, 
            using transparent emission factors aligned with spend-based GHG Protocol principles.
          </p>
        </div>

        {/* CARD 3 */}
        <div className="p-8 rounded-2xl bg-[#F8FAFC] dark:bg-gray-800 shadow-md border border-gray-200 dark:border-gray-700 hover:shadow-lg transition">
          <span className="inline-block px-3 py-1 text-xs rounded-full bg-[#0B3A63]/10 text-[#0B3A63] font-semibold mb-4">
            Independent Verification
          </span>

          <h3 className="text-xl font-semibold text-[#0B3A63] mb-3">
            Cryptographically secured validation
          </h3>

          <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
            Every attestation includes a verification hash and lookup ID so any third party can 
            validate integrity even without contacting Certif-Scope, ensuring long-term trust and 
            auditability.
          </p>
        </div>
      </div>

      {/* EXTENDED DETAIL BLOCK */}
      <div className="mt-16 p-10 rounded-2xl bg-white dark:bg-gray-900 shadow border border-gray-200 dark:border-gray-700">
        <h3 className="text-2xl font-bold text-[#0B3A63] mb-4">
          Additional operational advantages
        </h3>

        <ul className="space-y-3 text-gray-700 dark:text-gray-300 leading-relaxed text-sm">
          <li>• Accepted by procurement teams requiring environmental KPIs</li>
          <li>• Compliant with standard ESG/CSR checklists used in EU tenders</li>
          <li>• Transparent methodology and calculation process</li>
          <li>• Fully reusable for banking, insurance and supplier onboarding</li>
          <li>• Optimized for automated evaluation by digital compliance systems</li>
        </ul>
      </div>

      {/* BACK TO SUMMARY */}
      <div className="mt-12">
        <a
          href="#top"
          className="text-[#0B3A63] text-sm underline hover:text-[#062745] transition"
        >
          Back to summary
        </a>
      </div>

    </section>
  );
}
