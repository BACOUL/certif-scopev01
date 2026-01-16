"use client";

export default function Section2() {
  return (
    <section
      id="regulatory-alignment-non-equivalence"
      className="scroll-mt-24 border-b border-gray-200 pb-24"
    >
      {/* HEADER — Legal and Regulatory Framing */}
      <div className="p-12 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-300 dark:border-gray-700 relative overflow-hidden">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#0B3A63]">
          <span className="mr-2">2.</span>
          Regulatory Alignment &amp; Non-Equivalence Statement
        </h2>

        <p className="text-lg text-gray-700 dark:text-gray-300 max-w-5xl mt-6 leading-relaxed">
          This section clarifies how Certif-Scope aligns with recognized international 
          environmental accounting frameworks while explicitly stating that the output 
          does not constitute a substitute for mandatory regulatory reporting.
          Regulatory alignment ensures methodological consistency without implying 
          legal compliance equivalence.
        </p>
      </div>

      {/* BLOCK — Standards Used as Reference Only */}
      <div className="mt-16 p-10 bg-[#F8FAFC] dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-2xl">
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">
          Standards Used as Reference (Non-Substitutive)
        </h3>

        <p className="text-gray-700 dark:text-gray-300 text-sm max-w-5xl leading-relaxed mb-4">
          Certif-Scope relies on established methodological references for 
          structure and consistency. These frameworks inform the spend-based 
          calculation logic but are not fully implemented, replaced, or reproduced.
        </p>

        <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
          <li>• GHG Protocol — Scope 3 spend-based methodology.</li>
          <li>• ISO 14064-1 principles of relevance, consistency and transparency.</li>
          <li>• ISO 14083 transport emission boundary logic (non-mandatory integration).</li>
          <li>• EEIO macroeconomic emission factor modelling as foundational reference.</li>
          <li>• ADEME / DEFRA published emission intensities as accessible baselines.</li>
        </ul>
      </div>

      {/* BLOCK — Explicit Non-Equivalence with Regulations */}
      <div className="mt-20 p-10 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-2xl">
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">
          Non-Equivalence With Mandatory Regulatory Frameworks
        </h3>

        <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed max-w-5xl mb-4">
          The indicative output produced by Certif-Scope must not be confused with or used 
          as a replacement for any mandatory reporting deliverables. The system does not 
          generate compliant disclosures under:
        </p>

        <ul className="text-gray-700 dark:text-gray-300 space-y-2 text-sm leading-relaxed max-w-5xl">
          <li>• CSRD European Sustainability Reporting Standards (ESRS).</li>
          <li>• EU Taxonomy eligibility/alignments assessments.</li>
          <li>• GHG Protocol full corporate inventory (primary data required).</li>
          <li>• National emission reporting schemes or carbon taxes.</li>
          <li>• ISO 14064 third-party verified greenhouse gas statements.</li>
        </ul>

        <p className="mt-4 text-gray-700 dark:text-gray-300 text-sm max-w-5xl leading-relaxed">
          The Certif-Scope output is an indicative, non-binding estimate based on financial 
          expenditure. It cannot be used in regulatory filings without independent review 
          and methodological adaptation by accredited professionals.
        </p>
      </div>

      {/* BLOCK — Purpose of Alignment */}
      <div className="mt-20 p-10 bg-[#0B3A63] text-white rounded-2xl shadow-md relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#15B097]/30 to-transparent opacity-20"></div>

        <h3 className="text-2xl font-semibold relative z-10">
          Purpose of Regulatory Alignment
        </h3>

        <p className="mt-4 text-white/90 max-w-5xl leading-relaxed relative z-10">
          Alignment supports institutional confidence by ensuring that the 
          methodology follows internationally recognized principles without 
          misrepresenting itself as a full regulatory reporting solution.
        </p>

        <ul className="mt-4 text-white/90 space-y-2 text-sm max-w-5xl leading-relaxed relative z-10">
          <li>• Ensures methodological transparency.</li>
          <li>• Promotes compatibility with screening and risk-assessment workflows.</li>
          <li>• Facilitates institutional audits through fixed versioning and deterministic results.</li>
          <li>• Avoids regulatory ambiguity by clearly distinguishing non-binding indicators.</li>
        </ul>
      </div>

      {/* BLOCK — Legal Interpretation Restrictions */}
      <div className="mt-20 p-10 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-2xl">
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">
          Legal Interpretation Restrictions
        </h3>

        <p className="text-gray-700 dark:text-gray-300 text-sm max-w-5xl leading-relaxed">
          Certif-Scope outputs must not be interpreted as audited environmental disclosures,
          validated greenhouse gas inventories, or financial-regulatory evidence. All legal 
          responsibility for regulatory usage belongs to the institution using the tool.
        </p>

        <ul className="mt-3 space-y-2 text-gray-700 dark:text-gray-300 text-sm leading-relaxed max-w-5xl">
          <li>• No regulatory assurance is provided.</li>
          <li>• No claim of equivalence to CSRD or ESRS reporting structures.</li>
          <li>• No suitability for compliance submissions without expert validation.</li>
          <li>• No inference of operational emissions or supplier accuracy.</li>
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
