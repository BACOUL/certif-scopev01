"use client";

export default function Section12() {
  return (
    <section
      id="s12"
      className="scroll-mt-24 border-b border-gray-200 pb-24"
    >

      {/* HEADER — Premium institutional design */}
      <div className="relative p-12 rounded-2xl bg-[#F8FAFC] border border-[#0B3A63]/25 shadow-lg overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#15B097]/10 to-transparent pointer-events-none"></div>

        <h2 className="text-4xl md:text-5xl font-extrabold text-[#0B3A63] relative z-10">
          12. Data Privacy & GDPR Compliance
        </h2>

        <p className="text-lg text-gray-700 max-w-4xl mt-6 leading-relaxed relative z-10">
          Certif-Scope implements strict data minimisation, privacy-by-design and privacy-by-default
          principles as defined under Regulation (EU) 2016/679 (GDPR). Only the minimum information 
          required for CO₂ estimation is processed, and no user data is stored, retained or profiled. 
          The workflow guarantees full compliance across European jurisdictions without creating 
          long-term exposure or retention risks.
        </p>
      </div>

      {/* GDPR COMPLIANCE GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-16">

        {/* BLOCK 1 — Data Minimisation */}
        <div className="p-8 bg-white rounded-xl border border-gray-200 shadow-md">
          <h3 className="text-2xl font-semibold text-[#0B3A63] mb-3">Data Minimisation</h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            Only essential expenditure-category data is processed. No names, emails, IP addresses, 
            behavioural data or identifiers are collected. This aligns with Article 5(1)(c) GDPR and 
            eliminates unnecessary processing.
          </p>
          <ul className="mt-3 text-sm text-gray-700 space-y-1">
            <li>• No personal identifiers</li>
            <li>• No tracking technologies</li>
            <li>• No hidden metadata extraction</li>
          </ul>
        </div>

        {/* BLOCK 2 — No Storage Policy */}
        <div className="p-8 bg-[#F8FAFC] rounded-xl border border-[#15B097]/40 shadow-sm">
          <h3 className="text-2xl font-semibold text-[#0B3A63] mb-3">No Storage Policy</h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            Data is processed temporarily in memory solely for generating the attestation PDF. 
            Once the output is delivered, all temporary structures are purged. No logs or 
            backups persist — ensuring the system remains outside GDPR retention obligations.
          </p>
          <ul className="mt-3 text-sm text-gray-700 space-y-1">
            <li>• No database</li>
            <li>• No server logs</li>
            <li>• No backups or archives</li>
          </ul>
        </div>

        {/* BLOCK 3 — Privacy by Design */}
        <div className="p-8 bg-white rounded-xl border border-gray-200 shadow-md">
          <h3 className="text-2xl font-semibold text-[#0B3A63] mb-3">Privacy-by-Design</h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            Certif-Scope incorporates the principles of Article 25 GDPR by ensuring that the 
            platform is technically incapable of retaining or re-identifying users. All calculations 
            use ephemeral, non-linkable input structures.
          </p>
          <ul className="mt-3 text-sm text-gray-700 space-y-1">
            <li>• Ephemeral processing</li>
            <li>• No re-identification risk</li>
            <li>• No cross-session correlation</li>
          </ul>
        </div>

      </div>

      {/* OFFICIAL REFERENCES — Required by rule 11 */}
      <div className="mt-20 p-10 rounded-xl bg-white border border-gray-200 shadow-sm">
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">Official Regulatory References</h3>

        <ul className="text-gray-700 text-sm space-y-2 leading-relaxed">
          <li>
            • <a href="https://eur-lex.europa.eu/eli/reg/2016/679/oj" target="_blank" className="underline text-[#0B3A63]">GDPR – Regulation (EU) 2016/679</a>  
            — Legal basis, data minimisation, privacy-by-design.
          </li>
          <li>
            • <a href="https://edpb.europa.eu" target="_blank" className="underline text-[#0B3A63]">EDPB – European Data Protection Board</a>  
            — Guidelines on data processing, consent, legitimate interest.
          </li>
          <li>
            • <a href="https://www.cnil.fr" target="_blank" className="underline text-[#0B3A63]">CNIL – France</a>  
            — Public guidance on minimisation and retention.
          </li>
          <li>
            • <a href="https://edps.europa.eu" target="_blank" className="underline text-[#0B3A63]">EDPS – European Data Protection Supervisor</a>  
            — Trusted interpretations for EU institutions.
          </li>
        </ul>
      </div>

      {/* SCHEMA — Input → Process → Purge → Output */}
      <div className="mt-20 p-10 bg-[#0B3A63] text-white rounded-xl shadow-md relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#15B097] to-transparent opacity-20"></div>

        <h3 className="text-2xl font-semibold relative z-10">Privacy Workflow (Technical Overview)</h3>

        <ul className="text-white/90 text-sm mt-4 space-y-2 leading-relaxed relative z-10">
          <li>1. **Input** — User enters annual spend data (non-PII)</li>
          <li>2. **Processing** — Calculation performed entirely in volatile memory</li>
          <li>3. **Purge** — Memory wiped once PDF is generated</li>
          <li>4. **Output-Only** — Only the attestation PDF is delivered to the user</li>
        </ul>

        <p className="mt-4 text-white/80 text-sm relative z-10">
          This architecture ensures zero retention, zero profiling and zero re-identification 
          risk, providing maximal GDPR alignment without requiring additional user disclosure.
        </p>
      </div>

      {/* RETURN BUTTON — identical across all sections */}
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
