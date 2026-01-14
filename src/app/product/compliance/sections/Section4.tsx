"use client";

export default function Section4() {
  return (
    <section
      id="s4"
      className="scroll-mt-24 border-b border-gray-200 pb-24"
    >

      {/* HEADER — Regulatory non-equivalence framing */}
      <div className="p-12 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-2xl shadow-lg">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#0B3A63]">
          4. Regulatory Non-Equivalence & Misuse Prevention
        </h2>

        <p className="text-lg text-gray-700 dark:text-gray-300 mt-6 max-w-5xl leading-relaxed">
          This section formally establishes that Certif-Scope outputs cannot, under any
          circumstance, be considered equivalent to regulatory disclosures, mandatory
          environmental reports or certified calculations. It also defines the restrictions
          preventing incorrect or misleading usage by institutions, suppliers or auditors.
        </p>
      </div>


      {/* BLOCK — Non-Equivalence With Regulatory Frameworks */}
      <div className="mt-16 p-10 bg-[#F8FAFC] dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-2xl">
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">
          Non-Equivalence With Regulatory Frameworks
        </h3>

        <p className="text-sm text-gray-700 dark:text-gray-300 max-w-5xl leading-relaxed mb-4">
          Certif-Scope provides indicative estimates only. They must not be used as legally
          required documentation under any of the following frameworks:
        </p>

        <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300 max-w-5xl leading-relaxed">
          <li>• CSRD (Corporate Sustainability Reporting Directive)</li>
          <li>• ESRS (European Sustainability Reporting Standards)</li>
          <li>• EU Taxonomy eligibility or alignment reporting</li>
          <li>• ISO 14064-1 compliant GHG inventories</li>
          <li>• ISO 14083 transport emissions reporting</li>
          <li>• EBA/ESMA/ECB sustainability disclosure requirements</li>
        </ul>

        <p className="text-sm text-gray-700 dark:text-gray-300 mt-4 max-w-5xl leading-relaxed">
          None of these regulatory frameworks recognize spend-based estimates as compliant
          substitutes for physical, activity-based or supplier-verified emissions.
        </p>
      </div>


      {/* BLOCK — Misuse Prevention Rules */}
      <div className="mt-20 p-10 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-2xl">
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">
          Misuse Prevention Rules
        </h3>

        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed max-w-5xl mb-4">
          To avoid misinterpretation or regulatory misalignment, the following uses are
          explicitly prohibited:
        </p>

        <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300 max-w-5xl leading-relaxed">
          <li>• Using the attestation as audited or certified environmental evidence.</li>
          <li>• Presenting the indicative CO₂e value as measured or verified emissions.</li>
          <li>• Substituting CSRD/ESRS-compliant reporting with the spend-based estimate.</li>
          <li>• Attaching the output to investor disclosures as a factual indicator.</li>
          <li>• Treating the result as legally binding upstream supplier data.</li>
          <li>• Using the output in public claims of environmental performance.</li>
        </ul>
      </div>


      {/* BLOCK — Why Non-Equivalence Is Required */}
      <div className="mt-20 p-10 bg-[#F8FAFC] dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-2xl">
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">
          Why Non-Equivalence Is Required
        </h3>

        <p className="text-sm text-gray-700 dark:text-gray-300 max-w-5xl leading-relaxed mb-4">
          Spend-based indicators reflect economic intensity, not operational reality.
          Regulatory standards require verified activity data, supplier-specific inputs,
          and audit procedures that cannot be inferred from expenditure alone.
        </p>

        <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300 leading-relaxed max-w-5xl">
          <li>• No physical measurements are used in the model.</li>
          <li>• No supplier-specific or primary data validation occurs.</li>
          <li>• No cradle-to-gate lifecycle analysis is included.</li>
          <li>• No operational controls or emissions monitoring systems exist.</li>
        </ul>
      </div>


      {/* BLOCK — Institutional Liability Clarification */}
      <div className="mt-20 p-10 bg-white dark:bg-gray-800 rounded-2xl border border-gray-300 dark:border-gray-700">
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">
          Institutional Liability Clarification
        </h3>

        <p className="text-sm text-gray-700 dark:text-gray-300 max-w-5xl leading-relaxed mb-4">
          Using an indicative CO₂e estimate for regulatory filings, investor communication or
          contractual obligations exposes the institution—not Certif-Scope—to legal risk.
        </p>

        <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300 max-w-5xl leading-relaxed">
          <li>• Institutions must independently assess compliance suitability.</li>
          <li>• Certif-Scope assumes no liability for downstream interpretations.</li>
          <li>• Legal teams must validate regulatory use cases.</li>
          <li>• Financial and compliance decisions remain the user's responsibility.</li>
        </ul>
      </div>


      {/* BLOCK — Regulatory Integrity Warning */}
      <div className="mt-20 p-10 bg-[#0B3A63] text-white rounded-2xl shadow-md relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#15B097]/25 to-transparent opacity-20"></div>

        <h3 className="text-2xl font-semibold relative z-10">
          Regulatory Integrity Warning
        </h3>

        <p className="mt-4 text-white/90 leading-relaxed max-w-5xl relative z-10">
          Certif-Scope must not be used to circumvent environmental disclosure obligations,
          reduce transparency, alter sustainability claims, or mask missing operational data.
          Any such misuse constitutes a breach of regulatory integrity and may trigger
          legal, financial or reputational consequences for the institution involved.
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
