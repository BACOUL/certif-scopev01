"use client";

export default function Section6() {
  return (
    <section
      id="s6"
      className="scroll-mt-24 border-b border-gray-200 pb-24"
    >

      {/* HEADER */}
      <div className="mb-12">
        <h2 className="text-4xl font-extrabold text-[#0B3A63] mb-4">
          How It Works
        </h2>
        <p className="text-lg text-gray-700 max-w-3xl">
          Certif-Scope follows a streamlined, automated workflow designed for SMEs and
          institutional verification. The system uses standardized inputs, a transparent
          spend-based methodology and a secure verification protocol to produce a fully
          compliant CO₂ attestation within seconds.
        </p>
      </div>

      {/* PROCESS DIAGRAM STYLE BLOCK */}
      <div className="relative bg-gradient-to-r from-[#0B3A63] to-[#15B097] text-white rounded-2xl p-10 shadow-lg mb-16">
        <div className="absolute inset-0 opacity-10 bg-[url('/grid.svg')] bg-cover"></div>

        <h3 className="text-2xl font-semibold mb-6 relative z-10">
          End-to-End Automated Carbon Attestation Workflow
        </h3>

        <ol className="space-y-6 relative z-10">
          <li className="flex items-start gap-4">
            <span className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-[#0B3A63] font-bold text-lg shadow">
              1
            </span>
            <div>
              <h4 className="font-semibold text-white text-lg">You enter yearly expenses</h4>
              <p className="text-white/90 text-sm">
                Provide total expenditure values based on your accounting or financial statements.
                No granular itemization required.
              </p>
            </div>
          </li>

          <li className="flex items-start gap-4">
            <span className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-[#0B3A63] font-bold text-lg shadow">
              2
            </span>
            <div>
              <h4 className="font-semibold text-white text-lg">Emission factors are applied</h4>
              <p className="text-white/90 text-sm">
                Certif-Scope uses documented spend-based emission factors aligned with international
                standards to calculate CO₂ estimates per cost category.
              </p>
            </div>
          </li>

          <li className="flex items-start gap-4">
            <span className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-[#0B3A63] font-bold text-lg shadow">
              3
            </span>
            <div>
              <h4 className="font-semibold text-white text-lg">Automated internal validation</h4>
              <p className="text-white/90 text-sm">
                Inputs are checked for consistency, missing values and anomalies before generating
                the attestation.
              </p>
            </div>
          </li>

          <li className="flex items-start gap-4">
            <span className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-[#0B3A63] font-bold text-lg shadow">
              4
            </span>
            <div>
              <h4 className="font-semibold text-white text-lg">Attestation is generated</h4>
              <p className="text-white/90 text-sm">
                A complete PDF is produced including methodology, identifier, factors used and total
                CO₂ assessment across relevant categories.
              </p>
            </div>
          </li>

          <li className="flex items-start gap-4">
            <span className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-[#0B3A63] font-bold text-lg shadow">
              5
            </span>
            <div>
              <h4 className="font-semibold text-white text-lg">Cryptographic signature applied</h4>
              <p className="text-white/90 text-sm">
                A verification hash is applied, allowing any third party to confirm authenticity
                independently of Certif-Scope’s servers.
              </p>
            </div>
          </li>
        </ol>
      </div>

      {/* 3-COLUMN EXPLANATION GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

        <div className="p-8 bg-white border border-[#0B3A63]/15 rounded-xl shadow">
          <h4 className="text-xl font-semibold text-[#0B3A63] mb-3">
            Minimal required input
          </h4>
          <p className="text-gray-700 text-sm leading-relaxed">
            Users only need total expenses or basic financial statements. No complex forms or
            consultant involvement.
          </p>
        </div>

        <div className="p-8 bg-[#F8FAFC] border border-[#15B097] rounded-xl shadow">
          <h4 className="text-xl font-semibold text-[#15B097] mb-3">
            Standardized calculation model
          </h4>
          <p className="text-gray-700 text-sm leading-relaxed">
            All results follow a documented methodology aligned with European regulatory and
            institutional expectations for SME carbon disclosures.
          </p>
        </div>

        <div className="p-8 bg-white border border-[#0B3A63]/15 rounded-xl shadow">
          <h4 className="text-xl font-semibold text-[#0B3A63] mb-3">
            Fully verifiable output
          </h4>
          <p className="text-gray-700 text-sm leading-relaxed">
            Each attestation includes a verification ID and cryptographic integrity check
            compatible with internal audits and third-party validation systems.
          </p>
        </div>

      </div>

      {/* CTA BLOCK */}
      <div className="mt-20 bg-white border border-[#0B3A63]/20 rounded-xl p-10 shadow-sm">
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-3">
          Built for speed, reliability and compliance
        </h3>
        <p className="text-gray-700 max-w-3xl mb-6">
          Certif-Scope transforms the complex process of carbon calculation into a fully automated,
          verifiable and audit-ready workflow, enabling SMEs to meet institutional requirements in
          minutes instead of weeks.
        </p>
      </div>

      {/* RETURN BUTTON – identical on all sections */}
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
