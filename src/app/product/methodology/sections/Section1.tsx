"use client";

export default function Section1() {
  return (
    <section
      id="s1"
      className="scroll-mt-24 border-b border-gray-200 pb-24"
    >
      <div className="p-12 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0B3A63]">
          1. Scope & Purpose of the Methodology
        </h2>

        <p className="text-gray-700 dark:text-gray-300 leading-relaxed max-w-4xl mt-6">
          This section establishes the exact scope, boundaries and institutional purpose of the
          methodology used by Certif-Scope. It ensures correct interpretation, prevents misuse
          and guarantees full reproducibility. The model is aligned with internationally recognized
          frameworks (GHG Protocol, ISO 14064-1) while remaining strictly limited to spend-based
          conversion of financial expenditure into indicative CO₂e indicators.
        </p>

        <p className="text-gray-700 dark:text-gray-300 leading-relaxed max-w-4xl mt-4">
          Certif-Scope operates without subscriptions, without data storage and delivers a single,
          verifiable output per calculation at a fixed one-time price. The methodology produces a
          portable and auditable result that embeds version information and requires no external
          dependencies for long-term verification.
        </p>
      </div>

      <div className="mt-16 p-10 bg-[#F8FAFC] dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700">
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">
          Defined Scope
        </h3>

        <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-sm leading-relaxed max-w-4xl">
          <li>• Conversion of annual financial expenditure into estimated CO₂e values.</li>
          <li>• Use of category-specific emission factors expressed in kg CO₂e / €.</li>
          <li>• Alignment with the GHG Protocol Corporate Standard spend-based method.</li>
          <li>• Deterministic and reproducible outputs using version-controlled emission factors.</li>
          <li>• Institutional use cases requiring fast screening and non-binding indicators.</li>
        </ul>

        <div className="mt-8 p-6 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-xl">
          <h4 className="text-xl font-semibold text-[#0B3A63] mb-3">Method Flow</h4>
          <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
            Input financial data (EUR) → Category mapping → Emission factor selection →
            Deterministic calculation → Output CO₂e with embedded version metadata.
          </p>
        </div>
      </div>

      <div className="mt-16 p-10 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700">
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">
          Out of Scope
        </h3>

        <p className="text-gray-700 dark:text-gray-300 leading-relaxed max-w-4xl mb-4">
          The following items are explicitly excluded from this methodology and must not be
          assumed or inferred:
        </p>

        <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-sm leading-relaxed max-w-4xl">
          <li>• No physical activity data (kWh, km, tons transported, materials mass).</li>
          <li>• No lifecycle assessment (LCA) or cradle-to-grave evaluation.</li>
          <li>• No supplier-specific emissions or primary data validation.</li>
          <li>• No calculation of Scope 1 or Scope 2 operational emissions.</li>
          <li>• No equivalence to CSRD or ESRS mandatory reporting frameworks.</li>
        </ul>
      </div>

      <div className="mt-16 p-10 bg-[#0B3A63] text-white rounded-2xl shadow-md">
        <h3 className="text-2xl font-semibold mb-4">
          Regulatory & Standard Alignment
        </h3>

        <p className="text-white/90 max-w-4xl leading-relaxed">
          The methodology follows recognized international frameworks without substituting them.
          Certif-Scope applies the spend-based method defined by:
        </p>

        <ul className="mt-4 space-y-2 text-white/90 text-sm">
          <li>• GHG Protocol Corporate Standard – Indirect emissions (Scope 3 spend-based).</li>
          <li>• ISO 14064-1 principles of relevance, accuracy, consistency and transparency.</li>
          <li>• Environmental extended input–output (EEIO) modelling logic.</li>
        </ul>

        <p className="mt-4 text-white/80 text-sm max-w-4xl leading-relaxed">
          These references ensure methodological credibility without implying full regulatory
          compliance for mandatory frameworks such as CSRD or ESRS.
        </p>
      </div>

      <div className="mt-16 p-10 bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700">
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">
          Input Validation & Versioning
        </h3>

        <p className="text-gray-700 dark:text-gray-300 leading-relaxed max-w-4xl">
          All inputs must be numeric, non-negative and expressed in euros. Missing values are treated
          as zero and no estimation or extrapolation is performed. Each calculation embeds its own
          semantic version of the emission factor dataset (MAJOR.MINOR.PATCH), ensuring long-term
          reproducibility and offline verification.
        </p>
      </div>

      <div className="mt-16 p-10 bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700">
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">
          Institutional Purpose
        </h3>

        <p className="text-gray-700 dark:text-gray-300 leading-relaxed max-w-4xl">
          The methodology is designed for institutional environments requiring fast,
          standardized and auditable indicators in contexts where physical activity
          data is unavailable. Typical applications include:
        </p>

        <ul className="mt-3 space-y-2 text-gray-700 dark:text-gray-300 text-sm">
          <li>• Procurement screening and supplier onboarding.</li>
          <li>• Banking ESG risk estimations (non-binding indicators).</li>
          <li>• Subsidy eligibility checks requiring indicative CO₂e values.</li>
          <li>• Large-scale portfolio analysis under financial-only constraints.</li>
        </ul>
      </div>

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
