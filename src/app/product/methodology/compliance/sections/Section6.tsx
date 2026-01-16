"use client";

export default function Section6() {
  return (
    <section
      id="legal-non-equivalence-regulatory-disclosures"
      className="scroll-mt-24 border-b border-gray-200 pb-24"
    >
      {/* HEADER */}
      <div className="p-12 bg-[#F8FAFC] border border-gray-300 dark:border-gray-700 dark:bg-gray-900 rounded-2xl shadow-lg">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#0B3A63]">
          <span className="mr-2">6.</span>
          Legal Non-Equivalence With Regulatory Disclosures
        </h2>

        <p className="text-lg text-gray-700 dark:text-gray-300 max-w-5xl mt-6 leading-relaxed">
          This section defines the legal boundaries that prevent Certif-Scope’s indicative 
          values from being treated as official, regulatory-grade emissions reporting. 
          These limits protect institutions from non-compliance and ensure that results 
          are interpreted only within authorised analytical contexts.
        </p>
      </div>

      {/* BLOCK — Key Legal Distinctions */}
      <div className="mt-16 p-10 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-xl shadow-md">
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">
          Key Distinctions From Mandatory Reporting
        </h3>

        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
          Certif-Scope results must not be confused with mandatory emission disclosures 
          required by European or international regulatory frameworks. Critical distinctions 
          include:
        </p>

        <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
          <li>• Output is indicative and derived from expenditure, not physical measurements.</li>
          <li>• No activity-based data (kWh, fuel burn, heat/cold, distances) is collected.</li>
          <li>• Results are not validated by accredited auditors or verification bodies.</li>
          <li>• Output is not compliant with CSRD, ESRS E1, ISO 14064-1 or GHG Protocol inventory rules.</li>
        </ul>
      </div>

      {/* BLOCK — Regulatory Framework Comparison */}
      <div className="mt-20 p-10 bg-[#F8FAFC] border border-[#15B097]/30 dark:border-gray-700 rounded-xl shadow-sm">
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">
          Comparison With Regulatory Frameworks
        </h3>

        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-4 max-w-5xl">
          The following frameworks require granular, traceable, physical emissions data 
          that the spend-based model cannot produce:
        </p>

        <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300 leading-relaxed max-w-5xl">
          <li>• EU CSRD — mandatory corporate sustainability disclosure.</li>
          <li>• ESRS E1 — requires activity-based Scope 1, 2 and 3 inventories.</li>
          <li>• ISO 14064-1 — demands quantifiable, verifiable emissions boundaries.</li>
          <li>• EU Taxonomy — technical screening criteria requiring measurable performance indicators.</li>
          <li>• EBA/Banking guidelines — risk assessments must rely on validated environmental data.</li>
        </ul>
      </div>

      {/* BLOCK — Prohibited Uses Under Law */}
      <div className="mt-20 p-10 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-xl shadow-md">
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">
          Prohibited Uses Under Law
        </h3>

        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
          Certif-Scope’s outputs may not be used in any circumstance where regulatory 
          accuracy, certified verification or statutory reporting is required:
        </p>

        <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300 leading-relaxed max-w-5xl">
          <li>• Not valid for CSRD/ESRS mandatory submissions.</li>
          <li>• Not valid for ISO 14064-1 certification workflows.</li>
          <li>• Not valid for EU Taxonomy green-asset classification.</li>
          <li>• Not valid for environmental claims or marketing communications.</li>
          <li>• Not valid for carbon offset or carbon market mechanisms.</li>
        </ul>
      </div>

      {/* BLOCK — Institutional Responsibility Disclaimer */}
      <div className="mt-20 p-10 bg-[#0B3A63] text-white rounded-xl shadow-md relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#15B097]/25 to-transparent opacity-20 pointer-events-none"></div>

        <h3 className="text-2xl font-semibold relative z-10">
          Institutional Responsibility Disclaimer
        </h3>

        <p className="mt-4 text-white/90 leading-relaxed max-w-5xl relative z-10">
          Institutions remain fully responsible for verifying whether the indicative 
          output is appropriate for their internal use cases. Certif-Scope is not a 
          recognised reporting mechanism under any regulatory framework and does not 
          replace mandatory compliance obligations.
        </p>
      </div>

      {/* BLOCK — Why Non-Equivalence Matters */}
      <div className="mt-20 p-10 bg-[#F8FAFC] dark:bg-gray-900 border border-[#15B097]/30 dark:border-gray-700 rounded-xl shadow-sm">
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">
          Why Non-Equivalence Matters
        </h3>

        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed max-w-5xl">
          Without explicit separation between indicative values and regulatory disclosures, 
          institutions risk misreporting, non-compliance and legal exposure. These limits 
          ensure correct usage and prevent regulatory enforcement risks.
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
