"use client";

export default function Section6() {
  return (
    <section
      id="s6"
      className="scroll-mt-24 border-b border-gray-200 pb-24"
    >

      <div className="relative p-12 rounded-2xl bg-[#0B3A63] text-white shadow-xl overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#15B097]/30 to-transparent opacity-40"></div>

        <h2 className="text-4xl md:text-5xl font-extrabold relative z-10">
          6. How Certif-Scope Works
        </h2>

        <p className="text-white/90 max-w-4xl mt-6 leading-relaxed relative z-10">
          Certif-Scope transforms annual expenditure data into a verifiable CO₂ indicator using 
          deterministic conversion logic based on official emission-factor datasets and structured 
          classification rules. The workflow does not rely on estimates or hidden assumptions: 
          every step is reproducible and traceable by procurement teams, banks, insurers and auditors.
        </p>
      </div>


      {/* WORKFLOW — 5 BLOCKS WITH TECHNICAL DETAIL */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mt-20">

        {/* STEP 1 */}
        <div className="p-8 bg-white rounded-xl border border-gray-200 shadow-md">
          <h3 className="text-xl font-bold text-[#0B3A63]">1. Input Capture</h3>
          <p className="text-gray-700 text-sm mt-3 leading-relaxed">
            The user provides annual spend per category. Before processing, the system 
            performs strict validation checks:
          </p>
          <ul className="mt-3 text-gray-700 text-sm space-y-1">
            <li>• Numeric validation (no negative or malformed values)</li>
            <li>• Category cross-checking against allowed list</li>
            <li>• Automatic detection of missing required fields</li>
          </ul>
          <p className="text-gray-700 text-sm mt-3">
            Example: an SME entering €12,400 in “Transport Services” triggers a direct mapping 
            to the transport-related emission factors.
          </p>
        </div>

        {/* STEP 2 */}
        <div className="p-8 bg-[#F8FAFC] rounded-xl border border-[#15B097]/40 shadow-md">
          <h3 className="text-xl font-bold text-[#0B3A63]">2. Category Standardization</h3>
          <p className="text-gray-700 text-sm mt-3 leading-relaxed">
            Certif-Scope converts inputs into standardized categories aligned with the 
            GHG Protocol spend-based model and compatible with NACE-class structures.
          </p>
          <ul className="mt-3 text-gray-700 text-sm space-y-1">
            <li>• Deterministic mapping table (no AI inference)</li>
            <li>• One-to-one category assignment rules</li>
            <li>• Automatic rejection of ambiguous categories</li>
          </ul>
          <p className="text-gray-700 text-sm mt-3">
            Example: “Office supplies” is mapped to “Purchased Goods – Emission Factor 3.1”.
          </p>
        </div>

        {/* STEP 3 */}
        <div className="p-8 bg-white rounded-xl border border-gray-200 shadow-md">
          <h3 className="text-xl font-bold text-[#0B3A63]">3. Emission Factor Retrieval</h3>
          <p className="text-gray-700 text-sm mt-3 leading-relaxed">
            The system fetches the appropriate emission factors from verifiable public datasets:
          </p>
          <ul className="mt-3 text-gray-700 text-sm space-y-1">
            <li>• ADEME Base Carbone (France)</li>
            <li>• DEFRA UK (Government GHG Conversion Factors)</li>
            <li>• IPCC AR6 (Global Warming Potential 100y)</li>
          </ul>
          <p className="text-gray-700 text-sm mt-3">
            Example: For €1,000 of “Electricity EU mix,” the system retrieves the factor 
            expressed in kgCO₂e/kWh after currency harmonization.
          </p>
        </div>

        {/* STEP 4 */}
        <div className="p-8 bg-[#F8FAFC] rounded-xl border border-[#15B097]/40 shadow-md">
          <h3 className="text-xl font-bold text-[#0B3A63]">4. Deterministic Calculation Engine</h3>
          <p className="text-gray-700 text-sm mt-3 leading-relaxed">
            Each category follows a strict formula, based on the GHG Protocol spend-based method:
          </p>
          <p className="mt-2 p-3 bg-white border text-gray-700 text-xs rounded-md leading-relaxed">
            CO₂e = Expenditure (€) × Emission Factor (kgCO₂e / €)
          </p>
          <ul className="mt-3 text-gray-700 text-sm space-y-1">
            <li>• No AI estimation or subjective interpretation</li>
            <li>• No proprietary weighting</li>
            <li>• Same inputs = same outputs, always</li>
          </ul>
          <p className="text-gray-700 text-sm mt-3">
            Example: €5,100 in fuel logistics × 0.32 kgCO₂e/€ = 1,632 kgCO₂e.
          </p>
        </div>

        {/* STEP 5 */}
        <div className="p-8 bg-white rounded-xl border border-gray-200 shadow-md">
          <h3 className="text-xl font-bold text-[#0B3A63]">5. PDF Generation + Verification Seal</h3>
          <p className="text-gray-700 text-sm mt-3 leading-relaxed">
            Once the calculation is complete, a standardized PDF is produced with clear 
            indicators, data source references, and a cryptographic verification seal:
          </p>
          <ul className="mt-3 text-gray-700 text-sm space-y-1">
            <li>• SHA-256 hash of the final document</li>
            <li>• Embedded verification signature inside the PDF metadata</li>
            <li>• Offline verification instructions included</li>
          </ul>

          <p className="mt-3 text-gray-700 text-sm">
            Example: Auditors can recompute the hash locally and compare it to the embedded 
            value to confirm authenticity without contacting Certif-Scope servers.
          </p>
        </div>

      </div>


      {/* FINAL SUMMARY */}
      <div className="mt-20 p-10 bg-[#F8FAFC] border border-[#15B097] rounded-xl shadow-sm">
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-3">
          Why This Workflow Is Accepted by Institutions
        </h3>
        <p className="text-gray-700 max-w-4xl leading-relaxed">
          This workflow mirrors European institutional expectations: deterministic inputs, 
          standardized classification, official emission factors, transparent formulas, 
          and cryptographic verification. The result is an auditable CO₂ indicator suitable 
          for procurement checks, banking risk scoring, insurance underwriting and ESG due 
          diligence screening.
        </p>
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
