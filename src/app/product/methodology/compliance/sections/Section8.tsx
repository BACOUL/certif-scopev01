"use client";

export default function Section8() {
  return (
    <section
      id="disclaimers-liability-legal-safeguards"
      className="scroll-mt-24 border-b border-gray-200 pb-24"
    >
      {/* HEADER — Institutional */}
      <div className="p-12 bg-[#F8FAFC] border border-gray-300 dark:border-gray-700 dark:bg-gray-900 rounded-2xl shadow-lg relative overflow-hidden">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#0B3A63]">
          <span className="mr-2">8.</span>
          Disclaimers, Liability &amp; Legal Safeguards
        </h2>

        <p className="text-lg text-gray-700 dark:text-gray-300 max-w-5xl mt-6 leading-relaxed">
          This section defines the legal disclaimers and liability limitations applicable
          to Certif-Scope outputs. It ensures that users, auditors and institutions fully
          understand the indicative nature of the estimations and the boundaries of
          responsibility, preventing misinterpretation or regulatory misuse.
        </p>
      </div>

      {/* BLOCK — Nature of Output */}
      <div className="mt-16 p-10 bg-white dark:bg-gray-800 rounded-xl border border-gray-300 dark:border-gray-700 shadow-md">
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">
          Nature of the Output (Non-Binding Indicator)
        </h3>

        <ul className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed space-y-2">
          <li>• Outputs are indicative estimates, not verified emissions data.</li>
          <li>• Values are generated using spend-based economic intensities.</li>
          <li>• Results are not equivalent to measured CO₂ emissions.</li>
          <li>• No guarantee of accuracy against real operational activity.</li>
          <li>• No suitability for regulatory filings or environmental claims.</li>
        </ul>
      </div>

      {/* BLOCK — User Responsibility */}
      <div className="mt-20 p-10 bg-[#F8FAFC] dark:bg-gray-900 rounded-xl border border-[#15B097]/30 dark:border-gray-700 shadow-sm">
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">
          User Responsibility
        </h3>

        <p className="text-sm text-gray-700 dark:text-gray-300 max-w-5xl leading-relaxed mb-4">
          Users retain full responsibility for the accuracy, completeness and relevance
          of submitted expenditure data. Certif-Scope does not verify financial records
          or validate underlying accounting documentation.
        </p>

        <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
          <li>• Users must ensure correct categorisation of spending.</li>
          <li>• Users must validate financial accuracy before submission.</li>
          <li>• Certif-Scope cannot detect misreported or missing values.</li>
          <li>• Responsibility for interpretation remains exclusively with the user.</li>
        </ul>
      </div>

      {/* BLOCK — Platform Liability Limits */}
      <div className="mt-20 p-10 bg-white dark:bg-gray-800 rounded-xl border border-gray-300 dark:border-gray-700 shadow-md">
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">
          Platform Liability Limitations
        </h3>

        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed max-w-5xl mb-4">
          Certif-Scope is provided “as is”, without warranties, and with strict limitations
          on liability. The platform is not responsible for downstream consequences or
          financial decisions based on indicative values.
        </p>

        <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300 leading-relaxed max-w-5xl">
          <li>• No liability for institutional decisions made using indicators.</li>
          <li>• No liability for ESG scoring or risk modelling based on outputs.</li>
          <li>• No liability for commercial disputes involving indicative values.</li>
          <li>• No liability for regulatory sanctions resulting from misinterpretation.</li>
        </ul>
      </div>

      {/* BLOCK — Legal Safeguards */}
      <div className="mt-20 p-10 bg-[#0B3A63] text-white rounded-xl shadow-md relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#15B097]/25 to-transparent opacity-20 pointer-events-none"></div>

        <h3 className="text-2xl font-semibold relative z-10">
          Legal Safeguards Applied to All Outputs
        </h3>

        <ul className="mt-4 space-y-2 text-white/90 text-sm leading-relaxed max-w-5xl relative z-10">
          <li>• Every output embeds dataset version and methodological constraints.</li>
          <li>• Outputs include explicit disclaimers on their indicative nature.</li>
          <li>• Outputs are non-comparable, non-audited and non-certified.</li>
          <li>• The attestation cannot be interpreted as regulatory evidence.</li>
        </ul>

        <p className="mt-4 text-white/80 text-sm leading-relaxed max-w-5xl relative z-10">
          These safeguards prevent regulatory misunderstanding, protect users from
          misinterpretation risks and maintain compliance integrity across all use cases.
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
