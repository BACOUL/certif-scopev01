"use client";

export default function Section3() {
  return (
    <section
      id="legal-boundary-interpretation"
      className="scroll-mt-24 border-b border-gray-200 pb-24"
    >
      {/* HEADER — Strict legal boundary framing */}
      <div className="p-12 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-300 dark:border-gray-600 relative overflow-hidden">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#0B3A63]">
          <span className="mr-2">3.</span>
          Legal Boundary of Interpretation
        </h2>

        <p className="text-lg text-gray-700 dark:text-gray-300 mt-6 max-w-5xl leading-relaxed">
          This section establishes the explicit legal interpretation limits associated with
          Certif-Scope outputs. These boundaries ensure that institutions understand what the
          attestation can and cannot legally represent. It prevents misclassification of the
          indicative CO₂e values as verified environmental indicators or regulatory disclosures.
        </p>
      </div>

      {/* BLOCK — What the Output Legally Represents */}
      <div className="mt-16 p-10 bg-[#F8FAFC] dark:bg-gray-900 rounded-2xl border border-gray-300 dark:border-gray-600">
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">
          What the Output Legally Represents
        </h3>

        <p className="text-sm text-gray-700 dark:text-gray-300 max-w-5xl leading-relaxed mb-4">
          The attestation represents a non-binding, indicative estimate of CO₂e generated using
          spend-based conversion logic. It is strictly an analytical screening tool built for
          institutional workflows where precise physical or supplier-specific data is unavailable.
        </p>

        <ul className="text-sm space-y-2 text-gray-700 dark:text-gray-300 leading-relaxed max-w-5xl">
          <li>• A financial-to-emission conversion based on category-level factors.</li>
          <li>• A reproducible output grounded in deterministic computation.</li>
          <li>• A static report embedding the emission factor version used.</li>
          <li>• An indicative estimate suitable for preliminary ESG screening.</li>
        </ul>
      </div>

      {/* BLOCK — What the Output Does NOT Represent */}
      <div className="mt-20 p-10 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-2xl">
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">
          What the Output Does NOT Represent
        </h3>

        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed max-w-5xl mb-4">
          Certif-Scope explicitly avoids misinterpretation by excluding any legal or regulatory
          equivalence. The indicative CO₂e result must not be construed as evidence of:
        </p>

        <ul className="text-sm space-y-2 text-gray-700 dark:text-gray-300 leading-relaxed max-w-5xl">
          <li>• Verified GHG inventory compliant with ISO 14064-1.</li>
          <li>• ESRS/CSRD environmental disclosure or mandatory reporting.</li>
          <li>• EU Taxonomy alignment or eligibility validation.</li>
          <li>• Supplier-specific accuracy or upstream traceability.</li>
          <li>• Physical emission measurement or operational monitoring.</li>
          <li>• A certified carbon footprint suitable for regulatory filings.</li>
        </ul>

        <p className="mt-4 text-sm text-gray-700 dark:text-gray-300 max-w-5xl leading-relaxed">
          These exclusions reflect regulatory integrity requirements and prevent the indicative
          estimate from being mistakenly treated as an audited environmental statement.
        </p>
      </div>

      {/* BLOCK — Institutional Duty of Interpretation */}
      <div className="mt-20 p-10 bg-[#F8FAFC] dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-2xl">
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">
          Institutional Duty of Interpretation
        </h3>

        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed max-w-5xl mb-4">
          Institutions using Certif-Scope remain fully responsible for the interpretation,
          contextualization and downstream use of the indicative values. The tool does not
          assume liability for compliance decisions taken based on its output.
        </p>

        <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-2 leading-relaxed max-w-5xl">
          <li>• Users must contextualize indicative outputs using internal methodologies.</li>
          <li>• Professional judgment is required for regulatory applications.</li>
          <li>• Certif-Scope provides no regulatory assurances or compliance guarantees.</li>
          <li>• Institutions must validate suitability for use in their jurisdiction.</li>
        </ul>
      </div>

      {/* BLOCK — Legal Non-Reliance Clause */}
      <div className="mt-20 p-10 bg-[#0B3A63] text-white rounded-2xl shadow-md relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#15B097]/25 to-transparent opacity-20"></div>

        <h3 className="text-2xl font-semibold relative z-10">
          Legal Non-Reliance Clause
        </h3>

        <p className="mt-4 text-white/90 max-w-5xl leading-relaxed relative z-10">
          Certif-Scope outputs are inherently non-binding. They must not be relied upon 
          for regulatory compliance, litigation, contractual commitments or public 
          environmental declarations. Use of the output for such purposes requires 
          independent verification by certified professionals or auditors.
        </p>

        <ul className="mt-4 space-y-2 text-white/90 text-sm leading-relaxed relative z-10 max-w-5xl">
          <li>• Not admissible as audited evidence.</li>
          <li>• Not suitable for investor regulatory disclosures.</li>
          <li>• Not acceptable as standalone ESG documentation.</li>
          <li>• Not recognized as legal proof of environmental performance.</li>
        </ul>
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
