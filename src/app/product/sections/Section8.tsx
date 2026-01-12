"use client";

export default function Section8() {
  return (
    <section
      id="s8"
      className="scroll-mt-24 border-b border-gray-200 pb-24"
    >
      {/* HEADER BLOCK — Unique premium security design */}
      <div className="relative p-12 rounded-2xl bg-[#0B3A63] text-white shadow-xl overflow-hidden">
        
        {/* Security gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#15B097]/25 to-transparent opacity-40"></div>

        <h2 className="text-4xl md:text-5xl font-extrabold relative z-10">
          8. Security & Independent Verification
        </h2>

        <p className="text-white/90 max-w-4xl mt-6 leading-relaxed relative z-10">
          Certif-Scope ensures document integrity, authenticity, and long-term verifiability
          through cryptographic sealing, deterministic data structures, and independent validation
          pathways. These mechanisms allow institutions to authenticate an attestation even 
          without interacting with the Certif-Scope platform.
        </p>
      </div>

      {/* SECURITY GRID — 3 institutional cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-16">

        {/* CARD 1 */}
        <div className="p-8 bg-white rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition">
          <h3 className="text-2xl font-semibold text-[#0B3A63] mb-3">
            Cryptographic Integrity Seal
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            Each attestation embeds a cryptographic hash derived from the final PDF, ensuring
            that any modification — even minimal — can be detected instantly by institutions.
          </p>
          <ul className="mt-3 text-gray-700 text-sm space-y-1">
            <li>• Tamper-evident document structure</li>
            <li>• Immutable integrity fingerprint</li>
            <li>• Compatible with offline verification</li>
          </ul>
        </div>

        {/* CARD 2 */}
        <div className="p-8 bg-[#F8FAFC] rounded-xl shadow-md border border-[#15B097]/30">
          <h3 className="text-2xl font-semibold text-[#0B3A63] mb-3">
            Independent Verification Path
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            Institutions can validate authenticity without connecting to Certif-Scope, using the
            embedded verification identifier and hash structure included in the document.
          </p>
          <ul className="mt-3 text-gray-700 text-sm space-y-1">
            <li>• No server dependency</li>
            <li>• Supports compliance audits</li>
            <li>• Verified through deterministic comparison</li>
          </ul>
        </div>

        {/* CARD 3 */}
        <div className="p-8 bg-white rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition">
          <h3 className="text-2xl font-semibold text-[#0B3A63] mb-3">
            Secure Data Handling
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            Only the minimum data required for carbon estimation is processed. No permanent
            storage occurs, ensuring GDPR compliance and eliminating long-term exposure risks.
          </p>
          <ul className="mt-3 text-gray-700 text-sm space-y-1">
            <li>• No persistent storage</li>
            <li>• Limited data footprint</li>
            <li>• Privacy-by-design workflow</li>
          </ul>
        </div>

      </div>

      {/* INFO STRIP — Distinct visual identity */}
      <div className="mt-20 bg-[#F8FAFC] border border-[#15B097] p-10 rounded-xl shadow-sm">
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-3">
          How Verification Works in Practice
        </h3>
        <p className="text-gray-700 max-w-4xl leading-relaxed">
          When an attestation is received by a bank, insurer or procurement team, the verification
          identifier and cryptographic fingerprint included in the PDF allow them to authenticate
          the document instantly. This validation does not require disclosing business data,
          logging in, or requesting external confirmation.
        </p>
      </div>

      {/* RETURN BUTTON — Strictly identical across all sections */}
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
