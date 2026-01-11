export default function Section15() {
  return (
    <section
      id="s15"
      className="scroll-mt-24 py-32 bg-[#F8FAFC] dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800"
    >
      {/* HEADER */}
      <div className="max-w-4xl mx-auto px-6 text-center mb-20">
        <h2 className="text-4xl font-extrabold text-[#0B3A63]">
          Maintenance & Methodology Updates
        </h2>

        <p className="mt-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          Certif-Scope ensures long-term reliability by maintaining updated emission factors,
          transparent versioning and full traceability of methodological changes. Each attestation
          includes embedded metadata so institutions can independently verify the methodology version
          used at the time of generation.
        </p>
      </div>

      {/* THREE-COLUMN SYSTEM EXPLAINER */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* 1 — VERSIONING */}
        <div className="p-10 rounded-2xl bg-white dark:bg-gray-800 shadow-xl border border-gray-200 dark:border-gray-700">
          <h3 className="text-2xl font-semibold text-[#0B3A63] mb-3">
            Transparent Versioning
          </h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
            Each attestation embeds a methodology version number, allowing auditors, compliance
            teams and financial institutions to verify assumptions and calculations with complete
            traceability.
          </p>
          <ul className="mt-4 space-y-2 text-gray-600 dark:text-gray-400 text-sm">
            <li>• Embedded version ref inside PDF metadata</li>
            <li>• Public changelog on official website</li>
            <li>• Automated update notifications for users</li>
          </ul>
        </div>

        {/* 2 — DATASET MAINTENANCE */}
        <div className="p-10 rounded-2xl bg-[#0B3A63] text-white shadow-xl">
          <h3 className="text-2xl font-semibold mb-3">
            Emission Factor Maintenance
          </h3>
          <p className="text-white/90 text-sm leading-relaxed">
            Emission factors are reviewed continuously and updated in accordance with authoritative
            sources such as ADEME, DEFRA, IEA and the GHG Protocol. Updates are validated internally
            before deployment.
          </p>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex gap-3">
              <span className="w-3 h-3 rounded-full bg-[#47B39C] mt-1"></span>
              Cross-checked with international datasets
            </li>
            <li className="flex gap-3">
              <span className="w-3 h-3 rounded-full bg-[#47B39C] mt-1"></span>
              Automatic propagation to all new attestations
            </li>
            <li className="flex gap-3">
              <span className="w-3 h-3 rounded-full bg-[#47B39C] mt-1"></span>
              Full historical record retained for audits
            </li>
          </ul>
        </div>

        {/* 3 — TRACEABILITY */}
        <div className="p-10 rounded-2xl bg-white dark:bg-gray-800 shadow-xl border border-gray-200 dark:border-gray-700">
          <h3 className="text-2xl font-semibold text-[#0B3A63] mb-3">
            Long-Term Traceability
          </h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
            Every update is archived and documented to preserve full historical consistency.
            Institutions can refer to previous versions as part of regulatory or audit workflows.
          </p>
          <ul className="space-y-2 text-gray-600 dark:text-gray-400 text-sm">
            <li>• Archived versions permanently accessible</li>
            <li>• Timestamped update logs</li>
            <li>• Attestations remain verifiable forever</li>
          </ul>
        </div>

      </div>

      {/* CHANGELOG SECTION */}
      <div className="max-w-4xl mx-auto px-6 mt-24">
        <h3 className="text-2xl font-bold text-[#0B3A63] mb-6 text-center">
          Public Changelog & Historical Records
        </h3>

        <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed text-center mb-10">
          Certif-Scope maintains a public, read-only changelog documenting each revision of the
          methodology and data sources. This ensures transparency, regulatory compliance and full
          auditability for banks, insurers, and procurement departments.
        </p>

        <div className="mt-8 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-lg p-10">
          <ul className="space-y-6 text-gray-700 dark:text-gray-300 text-sm">
            <li>
              <strong className="text-[#0B3A63]">v1.0.0 — Initial stable release</strong><br />
              Standardized structure, core emission datasets, verified attestation format.
            </li>
            <li>
              <strong className="text-[#0B3A63]">v1.1.0 — Updated transportation factors</strong><br />
              Integration of revised DEFRA mobility coefficients.
            </li>
            <li>
              <strong className="text-[#0B3A63]">v1.2.0 — Electricity grid emission refresh</strong><br />
              Alignment with the latest IEA electricity mix dataset.
            </li>
          </ul>
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
