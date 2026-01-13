"use client";

export default function Section1() {
  return (
    <section
      id="s1"
      className="scroll-mt-24 border-b border-gray-200 pb-24"
    >

      {/* HEADER BLOCK — premium institutional */}
      <div className="p-12 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0B3A63]">
          1. Scope & Purpose of the Methodology
        </h2>

        <p className="text-gray-700 dark:text-gray-300 leading-relaxed max-w-4xl mt-6">
          This section defines the exact scope, boundaries and intended purpose of the
          methodology used by Certif-Scope. It ensures clear interpretation, prevents
          misuse and supports institutional reproducibility. This methodology is aligned
          with recognized international frameworks (GHG Protocol, ISO 14064-1) but remains
          strictly limited to spend-based conversion of financial expenditure into CO₂e
          indicators.
        </p>
      </div>


      {/* SCOPE BLOCK — no marketing, only verifiable facts */}
      <div className="mt-16 p-10 bg-[#F8FAFC] dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700">
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">
          Defined Scope
        </h3>

        <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-sm leading-relaxed max-w-4xl">
          <li>• Conversion of annual financial expenditure into estimated CO₂e values.</li>
          <li>• Use of category-specific emission factors expressed in kg CO₂e / €.</li>
          <li>• Alignment with the GHG Protocol Corporate Standard spend-based methodology.</li>
          <li>• Reproducible deterministic output using version-controlled emission factors.</li>
          <li>• Applicable for procurement screening, banking risk scoring and compliance workflows.</li>
        </ul>
      </div>


      {/* OUT OF SCOPE — mandatory for institutions */}
      <div className="mt-16 p-10 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700">
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">
          Out of Scope
        </h3>

        <p className="text-gray-700 dark:text-gray-300 leading-relaxed max-w-4xl mb-4">
          To avoid misinterpretation, the following items are explicitly excluded from this
          methodology and must not be inferred or assumed:
        </p>

        <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-sm leading-relaxed max-w-4xl">
          <li>• No physical activity data (kWh, km, tons transported, materials mass).</li>
          <li>• No lifecycle assessment (LCA) or cradle-to-grave analysis.</li>
          <li>• No supplier-specific emissions or primary data auditing.</li>
          <li>• No calculation of Scope 1 or Scope 2 operational emissions.</li>
          <li>• No compliance equivalence with CSRD or ESRS reporting requirements.</li>
        </ul>
      </div>


      {/* REGULATORY ALIGNMENT — exact placement according to rule 22 */}
      <div className="mt-16 p-10 bg-[#0B3A63] text-white rounded-2xl shadow-md">
        <h3 className="text-2xl font-semibold mb-4">
          Regulatory & Standard Alignment
        </h3>

        <p className="text-white/90 max-w-4xl leading-relaxed">
          The methodology is aligned with recognized frameworks but does not replace them.
          Certif-Scope applies the spend-based method defined by:
        </p>

        <ul className="mt-4 space-y-2 text-white/90 text-sm">
          <li>• GHG Protocol Corporate Standard – Indirect emissions (Scope 3).</li>
          <li>• ISO 14064-1 principles of relevance, consistency and transparency.</li>
          <li>• Environmental extended input–output (EEIO) modelling logic.</li>
        </ul>

        <p className="mt-4 text-white/80 text-sm max-w-4xl leading-relaxed">
          These references ensure methodological credibility without implying full regulatory
          compliance for mandatory reporting frameworks such as CSRD or ESRS.
        </p>
      </div>


      {/* PURPOSE INSTITUTIONAL USE — fully compliant with rule 27 */}
      <div className="mt-16 p-10 bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700">
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">
          Institutional Purpose
        </h3>

        <p className="text-gray-700 dark:text-gray-300 leading-relaxed max-w-4xl">
          The methodology is designed primarily for institutional contexts where fast,
          standardized, reproducible and auditable indicators are required. Typical use
          cases include:
        </p>

        <ul className="mt-3 space-y-2 text-gray-700 dark:text-gray-300 text-sm">
          <li>• Procurement screening and supplier onboarding.</li>
          <li>• Banking ESG risk estimations (non-binding indicators).</li>
          <li>• Subsidy eligibility checks requiring indicative CO₂e values.</li>
          <li>• Large-scale portfolio analysis where physical data is unavailable.</li>
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
