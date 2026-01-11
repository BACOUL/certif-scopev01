export default function Section16() {
  return (
    <section
      id="s16"
      className="scroll-mt-24 py-32 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800"
    >
      {/* HEADER */}
      <div className="max-w-4xl mx-auto px-6 text-center mb-20">
        <h2 className="text-4xl font-extrabold text-[#0B3A63]">
          Technical FAQ
        </h2>

        <p className="mt-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          A comprehensive set of answers to the most common technical,
          methodological and verification-related questions asked by IT teams,
          compliance officers, procurement departments and institutional reviewers.
        </p>
      </div>

      {/* FAQ GRID */}
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* FAQ ITEM 1 */}
        <div className="p-8 rounded-2xl bg-[#F8FAFC] dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow">
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-3">
            Is the CO₂ estimation methodology certified?
          </h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
            The methodology is aligned with internationally recognized principles
            (GHG Protocol – spend-based approach). While not “certified” by a single
            authority, it follows validated frameworks used by public institutions,
            auditors, procurement teams and ESG analysts across Europe.
          </p>
        </div>

        {/* FAQ ITEM 2 */}
        <div className="p-8 rounded-2xl bg-[#0B3A63] text-white shadow">
          <h3 className="text-xl font-semibold mb-3">
            Can institutions verify an attestation independently?
          </h3>
          <p className="text-white/90 text-sm leading-relaxed">
            Yes. Each attestation contains a unique verification identifier and a
            cryptographic hash that allows independent verification without requiring
            any contact with Certif-Scope. This ensures long-term trust and compliance.
          </p>
        </div>

        {/* FAQ ITEM 3 */}
        <div className="p-8 rounded-2xl bg-[#F8FAFC] dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow">
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-3">
            Which data sources are used for the emission factors?
          </h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
            Certif-Scope relies on authoritative datasets such as ADEME, DEFRA, IEA,
            and GHG Protocol reference tables. Data is reviewed regularly and updated
            through a controlled and documented update cycle published in the changelog.
          </p>
        </div>

        {/* FAQ ITEM 4 */}
        <div className="p-8 rounded-2xl bg-[#0B3A63] text-white shadow">
          <h3 className="text-xl font-semibold mb-3">
            Is the tool compliant with GDPR?
          </h3>
          <p className="text-white/90 text-sm leading-relaxed">
            Yes. Certif-Scope processes only the minimum information required for the
            calculation. No sensitive data is collected. All records can be deleted
            on request in accordance with EU data protection regulations.
          </p>
        </div>

        {/* FAQ ITEM 5 */}
        <div className="p-8 rounded-2xl bg-[#F8FAFC] dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow">
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-3">
            Does the attestation include a breakdown per category?
          </h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
            Yes. The PDF attestation includes a clear breakdown of emissions per
            spend-category and sub-category, allowing institutions to review impacts
            in detail and understand the underlying sources and calculation logic.
          </p>
        </div>

        {/* FAQ ITEM 6 */}
        <div className="p-8 rounded-2xl bg-[#0B3A63] text-white shadow">
          <h3 className="text-xl font-semibold mb-3">
            Are historical attestations still valid after a methodology update?
          </h3>
          <p className="text-white/90 text-sm leading-relaxed">
            Absolutely. Each attestation references the exact methodology version used
            at the time of generation, ensuring full traceability and long-term audit
            compatibility. Older attestations remain valid and verifiable.
          </p>
        </div>

        {/* FAQ ITEM 7 */}
        <div className="p-8 rounded-2xl bg-[#F8FAFC] dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow">
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-3">
            Can Certif-Scope integrate with external systems?
          </h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
            Yes. Integration endpoints allow automated submission of expenditure data.
            CSV import is supported, and API endpoints can be activated for enterprise
            workflows and automated procurement systems.
          </p>
        </div>

        {/* FAQ ITEM 8 */}
        <div className="p-8 rounded-2xl bg-[#0B3A63] text-white shadow">
          <h3 className="text-xl font-semibold mb-3">
            Is there an audit log of methodology changes?
          </h3>
          <p className="text-white/90 text-sm leading-relaxed">
            Yes. A full methodology changelog is maintained publicly, documenting every
            revision, update, and factor adjustment. This ensures transparency and
            institutional compliance.
          </p>
        </div>

      </div>

      {/* CTA LINKS BLOCK */}
      <div className="max-w-4xl mx-auto px-6 mt-20">
        <h3 className="text-2xl font-bold text-[#0B3A63] text-center mb-10">
          Additional Technical Resources
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <a
            href="/docs/methodology"
            className="p-6 rounded-xl bg-[#F8FAFC] dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow text-center hover:border-[#0B3A63] transition"
          >
            Methodology Documentation →
          </a>

          <a
            href="/docs/datasources"
            className="p-6 rounded-xl bg-[#F8FAFC] dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow text-center hover:border-[#0B3A63] transition"
          >
            Emission Factor Sources →
          </a>

          <a
            href="/docs/changelog"
            className="p-6 rounded-xl bg-[#F8FAFC] dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow text-center hover:border-[#0B3A63] transition"
          >
            Changelog Archive →
          </a>
        </div>
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
