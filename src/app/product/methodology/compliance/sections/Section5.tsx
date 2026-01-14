"use client";

export default function Section5() {
  return (
    <section
      id="s5"
      className="scroll-mt-24 border-b border-gray-200 pb-24"
    >

      {/* HEADER */}
      <div className="p-12 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-2xl shadow-lg">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#0B3A63]">
          5. Data Boundaries & Prohibited Interpretations
        </h2>

        <p className="text-lg text-gray-700 dark:text-gray-300 max-w-5xl mt-6 leading-relaxed">
          This section clarifies what the Certif-Scope output represents, and more 
          importantly, what it does not represent. These boundaries prevent incorrect 
          interpretation of indicative CO₂e values and ensure that institutions handle 
          the results within appropriate legal and methodological limits.
        </p>
      </div>


      {/* BLOCK — What the Data Represents */}
      <div className="mt-16 p-10 bg-[#F8FAFC] dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-2xl">
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">
          What the Data Represents
        </h3>

        <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300 leading-relaxed max-w-5xl">
          <li>• Indicative CO₂e values derived exclusively from financial expenditure.</li>
          <li>• Category-level estimates based on economic carbon intensity averages.</li>
          <li>• Spend-based modelling aligned with GHG Protocol guidance.</li>
          <li>• A reproducible, version-controlled calculation snapshot.</li>
          <li>• A non-binding indicator supporting high-level institutional screening.</li>
        </ul>
      </div>


      {/* BLOCK — What the Data Does NOT Represent */}
      <div className="mt-20 p-10 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-2xl">
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">
          What the Data Does NOT Represent
        </h3>

        <p className="text-sm text-gray-700 dark:text-gray-300 max-w-5xl leading-relaxed mb-4">
          The output must not be treated as a precise measurement, verification or 
          physical emission report. It specifically does not represent:
        </p>

        <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300 leading-relaxed max-w-5xl">
          <li>• Actual operational emissions of a company.</li>
          <li>• Supplier-specific primary emissions data.</li>
          <li>• Activity-based or metered measurements (kWh, km, fuel, heat, etc.).</li>
          <li>• Lifecycle or cradle-to-gate assessments.</li>
          <li>• Official data accepted by CSRD/ESRS or ISO-certified audits.</li>
          <li>• Evidence for regulatory filings or environmental claims.</li>
        </ul>
      </div>


      {/* BLOCK — Prohibited Interpretations */}
      <div className="mt-20 p-10 bg-[#F8FAFC] dark:bg-gray-900 border border-[#15B097]/30 rounded-xl shadow-sm">
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">
          Prohibited Interpretations
        </h3>

        <p className="text-sm text-gray-700 dark:text-gray-300 max-w-5xl leading-relaxed mb-4">
          To maintain legal integrity and avoid institutional risk, the following 
          interpretations are explicitly prohibited:
        </p>

        <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300 leading-relaxed max-w-5xl">
          <li>• Treating the value as certified, audited, or validated emissions.</li>
          <li>• Using the indicative value as proof of supplier compliance.</li>
          <li>• Inferring environmental performance or efficiency trends.</li>
          <li>• Assuming equivalence with mandatory regulatory disclosures.</li>
          <li>• Using the number to justify marketing or ESG claims.</li>
          <li>• Interpreting the estimate as a Scope 1 or Scope 2 measurement.</li>
        </ul>
      </div>


      {/* BLOCK — Why These Boundaries Are Mandatory */}
      <div className="mt-20 p-10 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-2xl">
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">
          Why These Boundaries Are Mandatory
        </h3>

        <p className="text-sm text-gray-700 dark:text-gray-300 max-w-5xl leading-relaxed">
          Spend-based models use economic averages and cannot capture physical emissions 
          with accuracy. Regulatory frameworks require measurable, verifiable, activity-based 
          data. Without strict boundaries, the risk of institutional misinterpretation would 
          compromise compliance and expose organisations to enforcement actions.
        </p>
      </div>


      {/* BLOCK — Anti-Misrepresentation Warning */}
      <div className="mt-20 p-10 bg-[#0B3A63] text-white rounded-2xl shadow-md relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#15B097]/25 to-transparent opacity-20"></div>

        <h3 className="text-2xl font-semibold relative z-10">
          Anti-Misrepresentation Warning
        </h3>

        <p className="mt-4 text-white/90 leading-relaxed max-w-5xl relative z-10">
          Any attempt to present Certif-Scope’s indicative values as verified emissions,
          regulatory-compliant disclosures, or certified environmental performance constitutes 
          a misrepresentation. Institutions remain legally responsible for any incorrect 
          interpretation or communication of results.
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
