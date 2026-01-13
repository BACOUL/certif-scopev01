"use client";

export default function Section6() {
  return (
    <section
      id="s6"
      className="scroll-mt-24 border-b border-gray-200 pb-24"
    >

      {/* HEADER — Distinct premium layout */}
      <div className="relative p-12 rounded-2xl bg-[#0B3A63] text-white shadow-xl overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#15B097]/30 to-transparent opacity-40"></div>

        <h2 className="text-4xl md:text-5xl font-extrabold relative z-10">
          6. How Certif-Scope Works
        </h2>

        <p className="text-white/90 max-w-4xl mt-6 leading-relaxed relative z-10">
          Certif-Scope converts annual expenditure data into a standardized CO₂ indicator
          using deterministic formulas, structured categorization, official emission factors,
          and cryptographic verification. The workflow is reproducible, auditable and aligned
          with procurement, banking, insurance and institutional screening practices across Europe.
        </p>
      </div>


      {/* SCHEMA — Input → Mapping → EF Lookup → Formula → PDF + Hash */}
      <div className="mt-16 p-8 bg-[#F8FAFC] border border-[#15B097]/40 rounded-xl shadow-sm">
        <pre className="text-sm text-[#0B3A63] leading-relaxed whitespace-pre-wrap">
{`[User Inputs]
       ↓
[Category Mapping Table — NACE-compatible]
       ↓
[Emission Factor Lookup — ADEME / DEFRA / IPCC]
       ↓
CO₂e = Spend (€) × EF (kgCO₂e/€)
       ↓
[Standardized PDF + SHA-256 Hash]`}
        </pre>
      </div>



      {/* WORKFLOW GRID — 5 technical blocks */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mt-20">

        {/* STEP 1 — INPUT CAPTURE */}
        <div className="p-8 bg-white rounded-xl border border-gray-200 shadow-md">
          <h3 className="text-xl font-bold text-[#0B3A63]">1. Input Capture</h3>
          <p className="text-gray-700 text-sm mt-3 leading-relaxed">
            The user enters annual spend per category. The system applies strict validation:
          </p>
          <ul className="mt-3 text-gray-700 text-sm space-y-1">
            <li>• Syntax validation of numeric values</li>
            <li>• Detection of negative or malformed numbers</li>
            <li>• Verification of required category presence</li>
            <li>• Logical coherence checks across categories</li>
          </ul>
          <p className="text-gray-700 text-sm mt-3">
            <strong>Example:</strong> €12,400 entered in “Transport Services” is validated, structured and prepared for mapping.
          </p>
        </div>


        {/* STEP 2 — CATEGORY MAPPING */}
        <div className="p-8 bg-[#F8FAFC] rounded-xl border border-[#15B097]/40 shadow-md">
          <h3 className="text-xl font-bold text-[#0B3A63]">2. Category Mapping</h3>
          <p className="text-gray-700 text-sm mt-3 leading-relaxed">
            Inputs are mapped to standardized categories aligned with:
          </p>
          <ul className="mt-3 text-gray-700 text-sm space-y-1">
            <li>• GHG Protocol — Spend-Based Pathway</li>
            <li>• NACE-compatible sector structure</li>
            <li>• Deterministic one-to-one mapping</li>
          </ul>
          <p className="text-gray-700 text-sm mt-3">
            <strong>Example:</strong> “Office supplies” → “Purchased Goods – EF Class 3.1”.
          </p>
        </div>


        {/* STEP 3 — EMISSION FACTOR LOOKUP */}
        <div className="p-8 bg-white rounded-xl border border-gray-200 shadow-md">
          <h3 className="text-xl font-bold text-[#0B3A63]">3. Emission Factor Retrieval</h3>
          <p className="text-gray-700 text-sm mt-3 leading-relaxed">
            Certif-Scope retrieves emission factors from public, verifiable datasets:
          </p>
          <ul className="mt-3 text-gray-700 text-sm space-y-1">
            <li>• ADEME Base Carbone 2024.x</li>
            <li>• DEFRA 2023 UK factors</li>
            <li>• IPCC AR6 GWP100 parameters</li>
          </ul>
          <p className="text-gray-700 text-sm mt-3">
            <strong>Example:</strong> Electricity factors pulled in kgCO₂e/kWh, harmonized to €/kWh when required.
          </p>
        </div>


        {/* STEP 4 — DETERMINISTIC FORMULA */}
        <div className="p-8 bg-[#F8FAFC] rounded-xl border border-[#15B097]/40 shadow-md">
          <h3 className="text-xl font-bold text-[#0B3A63]">4. Deterministic Calculation Engine</h3>
          <p className="text-gray-700 text-sm mt-3 leading-relaxed">
            A strict formula is applied with no interpretation or machine learning:
          </p>

          <div className="mt-3 p-3 bg-white border rounded-md text-gray-700 text-xs">
            CO₂e = Spend (€) × Emission Factor (kgCO₂e / €)
          </div>

          <p className="text-gray-700 text-sm mt-3 leading-relaxed">
            <strong>Example:</strong> €5,100 × 0.32 kgCO₂e/€ = 1,632 kgCO₂e.
          </p>
        </div>


        {/* STEP 5 — PDF + HASH */}
        <div className="p-8 bg-white rounded-xl border border-gray-200 shadow-md">
          <h3 className="text-xl font-bold text-[#0B3A63]">5. PDF Generation & Hash Verification</h3>
          <p className="text-gray-700 text-sm mt-3 leading-relaxed">
            A standardized PDF is generated containing:
          </p>
          <ul className="mt-3 text-gray-700 text-sm space-y-1">
            <li>• Emission totals & category breakdown</li>
            <li>• Source dataset references</li>
            <li>• Embedded SHA-256 verification hash</li>
            <li>• Offline verification instructions</li>
          </ul>

          <p className="text-gray-700 text-sm mt-3">
            <strong>Example:</strong> Auditors compute <code>sha256(pdf)</code> and compare with metadata.
          </p>
        </div>

      </div>



      {/* BOUNDARIES & EXCLUSIONS */}
      <div className="mt-20 p-10 bg-white border border-gray-200 rounded-xl shadow-md">
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-3">
          Methodological Boundaries & Exclusions
        </h3>

        <ul className="text-gray-700 text-sm leading-relaxed space-y-2">
          <li>• Spend-based estimation only (no direct measurement)</li>
          <li>• No Scope 1 or Scope 2 measured data</li>
          <li>• No activity-level primary data required</li>
          <li>• No LCA (Life Cycle Assessment) included</li>
          <li>• No uncertainty analysis provided</li>
          <li>• Results intended for screening, not full CSRD reporting</li>
        </ul>
      </div>



      {/* LIMITATIONS BLOCK */}
      <div className="mt-10 p-10 bg-[#F8FAFC] border border-[#15B097]/40 rounded-xl shadow-sm">
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-3">
          Model Limitations
        </h3>

        <ul className="text-gray-700 text-sm leading-relaxed space-y-2">
          <li>• Dependent on emission factor dataset updates</li>
          <li>• Sector averages may differ from real operations</li>
          <li>• Not a substitute for activity-based carbon accounting</li>
          <li>• Not suitable for full ESRS E1 or CSRD disclosures</li>
          <li>• Designed for institutional screening and due diligence only</li>
        </ul>
      </div>



      {/* REGULATORY ALIGNMENT */}
      <div className="mt-16 p-10 bg-[#0B3A63] text-white rounded-xl shadow-md relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#15B097]/20 to-transparent pointer-events-none"></div>

        <h3 className="text-2xl font-semibold relative z-10">
          Regulatory & Institutional Alignment
        </h3>

        <ul className="mt-4 text-white/90 text-sm leading-relaxed space-y-2 relative z-10">
          <li>• Aligned with GHG Protocol spend-based calculation method</li>
          <li>• Compatible with ESRS E1 value-chain screening expectations</li>
          <li>• Supports CSRD Article 19a / 29a upstream data requirements</li>
          <li>• Suitable for EU Green Public Procurement (GPP) initial screening</li>
          <li>• Acceptable for banking ESG risk scoring (EBA Guidelines)</li>
        </ul>
      </div>



      {/* RETURN BUTTON — identical */}
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
