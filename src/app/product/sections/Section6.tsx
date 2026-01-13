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
          Certif-Scope converts annual expenditure data into a standardized CO₂ indicator
          using deterministic formulas, structured categorization, official emission factors,
          and cryptographic verification. The workflow is reproducible, auditable and aligned
          with procurement, banking, insurance and institutional screening practices across Europe.
        </p>

        <div className="mt-6 text-sm text-white/80 underline space-y-1 relative z-10">
          <a href="https://www.bilans-ges.ademe.fr" target="_blank" rel="noopener noreferrer">
            ADEME Base Carbone (official emission factors)
          </a><br />
          <a href="https://www.gov.uk/government/collections/government-conversion-factors-for-company-reporting" target="_blank" rel="noopener noreferrer">
            DEFRA UK GHG Conversion Factors
          </a><br />
          <a href="https://www.ipcc.ch/report/ar6/" target="_blank" rel="noopener noreferrer">
            IPCC AR6 Climate Parameters
          </a><br />
          <a href="https://nacev2.com" target="_blank" rel="noopener noreferrer">
            NACE Classification System
          </a>
        </div>
      </div>


      <div className="mt-16 p-8 bg-[#F8FAFC] border border-[#15B097]/40 rounded-xl shadow-sm">
        <pre className="text-sm md:text-base font-mono text-[#0B3A63] leading-relaxed whitespace-pre-wrap text-center">
{`[User Input]
        ↓
[Category Mapping Table — NACE-compatible]
        ↓
[Emission Factor Lookup — ADEME / DEFRA / IPCC]
        ↓
CO₂e = Spend (€) × EF (kgCO₂e / €)
        ↓
[Standardized PDF + SHA-256 Hash]`}
        </pre>
      </div>


      <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mt-20">

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
            <strong>Example:</strong> €12,400 in “Transport Services” is validated and prepared for mapping.
          </p>
        </div>


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


        <div className="p-8 bg-white rounded-xl border border-gray-200 shadow-md">
          <h3 className="text-xl font-bold text-[#0B3A63]">3. Emission Factor Retrieval</h3>
          <p className="text-gray-700 text-sm mt-3 leading-relaxed">
            Certif-Scope retrieves emission factors from public, versioned datasets:
          </p>
          <ul className="mt-3 text-gray-700 text-sm space-y-1">
            <li>• ADEME Base Carbone 2024.2</li>
            <li>• DEFRA 2023 UK factors</li>
            <li>• IPCC AR6 GWP100 parameters</li>
          </ul>
          <p className="text-gray-700 text-sm mt-3">
            <strong>Example:</strong> Electricity factors in kgCO₂e/kWh normalized to €/kWh.
          </p>
        </div>


        <div className="p-8 bg-[#F8FAFC] rounded-xl border border-[#15B097]/40 shadow-md">
          <h3 className="text-xl font-bold text-[#0B3A63]">4. Deterministic Calculation Engine</h3>
          <p className="text-gray-700 text-sm mt-3 leading-relaxed">
            A strict formula is applied with no interpretation or machine learning:
          </p>

          <div className="mt-3 p-3 bg-white border rounded-md text-gray-700 text-xs">
            CO₂e = Spend (€) × Emission Factor (kgCO₂e / €)
          </div>

          <p className="text-gray-700 text-sm mt-3 leading-relaxed">
            <strong>Example:</strong> €5,100 × 0.32 = 1,632 kgCO₂e.
          </p>
        </div>


        <div className="p-8 bg-white rounded-xl border border-gray-200 shadow-md">
          <h3 className="text-xl font-bold text-[#0B3A63]">5. PDF Generation & Hash Verification</h3>
          <p className="text-gray-700 text-sm mt-3 leading-relaxed">
            A standardized PDF is generated containing:
          </p>
          <ul className="mt-3 text-gray-700 text-sm space-y-1">
            <li>• Emission totals & category breakdown</li>
            <li>• Dataset references & boundaries</li>
            <li>• Embedded SHA-256 verification hash</li>
            <li>• Offline verification method</li>
          </ul>

          <p className="text-gray-700 text-sm mt-3">
            <strong>Example:</strong> Auditors recompute <code>sha256(pdf)</code> locally and compare outputs.
          </p>
        </div>

      </div>


      <div className="mt-20 p-8 bg-white border border-gray-200 rounded-xl shadow-md">
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">
          Offline Verification — SHA-256 Commands
        </h3>

        <p className="text-gray-700 text-sm mb-4">
          Any auditor or institution can verify the PDF by recomputing the SHA-256 hash locally.
        </p>

        <div className="space-y-4 text-sm text-gray-700">

          <div>
            <p className="font-semibold text-[#0B3A63] mb-1">macOS / Linux:</p>
            <pre className="bg-[#F8FAFC] p-3 rounded border border-gray-200 overflow-x-auto font-mono text-xs">
sha256sum certif-scope-report.pdf
            </pre>
          </div>

          <div>
            <p className="font-semibold text-[#0B3A63] mb-1">Windows (PowerShell):</p>
            <pre className="bg-[#F8FAFC] p-3 rounded border border-gray-200 overflow-x-auto font-mono text-xs">
Get-FileHash .\certif-scope-report.pdf -Algorithm SHA256
            </pre>
          </div>

          <div>
            <p className="font-semibold text-[#0B3A63] mb-1">Node.js (institution backend check):</p>
            <pre className="bg-[#F8FAFC] p-3 rounded border border-gray-200 overflow-x-auto font-mono text-xs">
node -e "const fs=require('fs');const c=fs.readFileSync('certif-scope.pdf');console.log(require('crypto').createHash('sha256').update(c).digest('hex'))"
            </pre>
          </div>

        </div>
      </div>


      <div className="mt-20 p-10 bg-[#F8FAFC] border border-[#15B097]/40 rounded-xl shadow-sm">
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-3">
          Model Limitations
        </h3>

        <ul className="text-gray-700 text-sm leading-relaxed space-y-2">
          <li>• Depends entirely on emission factor dataset updates</li>
          <li>• Reflects sector averages, not operational reality</li>
          <li>• Not suitable for full ESRS E1 or CSRD disclosures</li>
          <li>• Not equivalent to audited carbon accounting</li>
          <li>• Intended for institutional screening, not legal reporting</li>
        </ul>
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
