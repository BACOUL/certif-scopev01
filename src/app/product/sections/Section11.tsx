export default function Section11() {
  return (
    <section
      id="s11"
      className="scroll-mt-24 py-32 bg-[#F8FAFC] dark:bg-gray-900"
    >
      {/* HEADER */}
      <div className="max-w-4xl mx-auto px-6 text-center mb-20">
        <h2 className="text-4xl font-extrabold text-[#0B3A63]">
          Methodological Limitations & Transparency Statement
        </h2>

        <p className="mt-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          Certif-Scope prioritizes transparency and institutional clarity by explicitly stating the
          methodological boundaries of the spend-based carbon estimation approach. These limitations
          do not reduce the usefulness of the attestation but ensure that stakeholders interpret it
          correctly, according to international reporting standards.
        </p>
      </div>

      {/* MAIN LAYOUT */}
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-14">

        {/* LEFT SIDE — LIMITATION GROUPS */}
        <div className="space-y-10">

          {/* LIMITATION BLOCK 1 */}
          <div className="p-8 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm">
            <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">
              1. Spend-Based Model Simplification
            </h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
              The spend-based methodology estimates emissions from financial expenditure rather than
              from physical measures (liters, kWh, kilometers, kilograms). This allows rapid estimation,
              but cannot match the absolute precision of an engineering-grade assessment.
            </p>
          </div>

          {/* LIMITATION BLOCK 2 */}
          <div className="p-8 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm">
            <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">
              2. Sector Factor Aggregation
            </h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
              Emission factors used in economic input-output models are aggregated at sector level.
              This means variability within specific products or sub-sectors is averaged into a
              single macro-factor, which may under- or over-estimate specific cases.
            </p>
          </div>

          {/* LIMITATION BLOCK 3 */}
          <div className="p-8 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm">
            <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">
              3. Lack of Operational Granularity
            </h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
              The approach does not measure detailed operational activities, such as internal logistics
              routes, equipment performance, energy mix variations or real-time consumption. Companies
              requiring deeper analysis should complement the attestation with operational data audits.
            </p>
          </div>

        </div>

        {/* RIGHT SIDE — HIGHLIGHT PANEL */}
        <aside className="bg-[#0B3A63] text-white p-10 rounded-2xl shadow-xl space-y-8">

          <h4 className="text-2xl font-bold">Interpretation Guidance</h4>

          <p className="text-sm text-white/90 leading-relaxed">
            Certif-Scope ensures clarity by explicitly defining what the attestation does and does not
            represent. This prevents misuse in regulatory contexts and maintains strict compliance with
            international reporting recommendations from the GHG Protocol and European ESG guidelines.
          </p>

          <ul className="text-sm space-y-4">
            <li className="flex gap-3">
              <span className="block w-3 h-3 rounded-full bg-[#47B39C] mt-1"></span>
              Not a replacement for engineering-grade physical footprint analysis.
            </li>

            <li className="flex gap-3">
              <span className="block w-3 h-3 rounded-full bg-[#47B39C] mt-1"></span>
              Not suitable for regulatory greenhouse gas inventory declarations.
            </li>

            <li className="flex gap-3">
              <span className="block w-3 h-3 rounded-full bg-[#47B39C] mt-1"></span>
              Intended for procurement, banking and compliance screening.
            </li>

            <li className="flex gap-3">
              <span className="block w-3 h-3 rounded-full bg-[#47B39C] mt-1"></span>
              Provides estimated emissions aligned with spend-based GHG methodologies.
            </li>
          </ul>

          <div className="pt-6 border-t border-white/20 text-xs text-white/80">
            Full transparency ensures stronger institutional trust and reduces friction during due diligence.
          </div>

        </aside>

      </div>

      {/* FOOTER — BACK TO SUMMARY */}
      <div className="text-center mt-24">
        <a
          href="#top"
          className="inline-block text-sm text-gray-500 hover:text-[#0B3A63] border border-gray-300 px-4 py-2 rounded-lg transition"
        >
          Back to summary ↑
        </a>
      </div>

    </section>
  );
            }
