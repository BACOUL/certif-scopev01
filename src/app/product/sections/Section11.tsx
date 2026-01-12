"use client";

export default function Section11() {
  return (
    <section
      id="s11"
      className="scroll-mt-24 border-b border-gray-200 pb-24"
    >
      {/* HEADER BLOCK — Institutional, unique design */}
      <div className="rounded-2xl p-12 bg-[#F8FAFC] border border-gray-200 shadow-lg relative overflow-hidden">
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0B3A63]/8 to-[#15B097]/10 pointer-events-none"></div>

        <h2 className="text-4xl md:text-5xl font-extrabold text-[#0B3A63] relative z-10">
          11. Role of Cryptographic Integrity
        </h2>

        <p className="text-lg text-gray-700 max-w-4xl mt-6 leading-relaxed relative z-10">
          Certif-Scope embeds a cryptographic integrity mechanism to ensure that each attestation 
          remains tamper-proof, uniquely identifiable and independently verifiable by third parties. 
          This protects institutions from document falsification, ensures that results are stable 
          over time, and allows offline verification without relying on Certif-Scope servers.
        </p>
      </div>

      {/* DUAL-COLUMN BLOCK */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-16">

        {/* LEFT — Purpose of cryptographic integrity */}
        <div className="p-10 bg-white rounded-xl border border-gray-200 shadow-md">
          <h3 className="text-2xl font-semibold text-[#0B3A63] mb-3">
            Why Cryptographic Integrity is Required
          </h3>

          <p className="text-gray-700 text-sm leading-relaxed mb-4">
            Institutions routinely reject carbon documentation that lacks verifiable integrity 
            markers, due to the risk of manipulation or selective editing.  
            Certif-Scope addresses this problem using a stable, automatic cryptographic seal that:
          </p>

          <ul className="text-gray-700 text-sm space-y-2">
            <li>• Detects any change made after generation</li>
            <li>• Links each attestation to a unique verification identity</li>
            <li>• Allows verification without a live server</li>
            <li>• Ensures persistent confidence during audits</li>
          </ul>
        </div>

        {/* RIGHT — Use cases in institutional workflows */}
        <div className="p-10 bg-[#F8FAFC] rounded-xl border border-[#15B097]/30 shadow-sm">
          <h3 className="text-2xl font-semibold text-[#0B3A63] mb-3">
            Institutional Use Cases
          </h3>

          <p className="text-gray-700 text-sm leading-relaxed mb-4">
            A cryptographically sealed CO₂ attestation eliminates uncertainty in 
            processes where document authenticity directly impacts risk, compliance 
            or eligibility:
          </p>

          <ul className="text-gray-700 text-sm space-y-2">
            <li>• Procurement screening of suppliers</li>
            <li>• Banking onboarding and risk evaluation</li>
            <li>• Insurance eligibility and underwriting checks</li>
            <li>• Public grant applications requiring CO₂ documentation</li>
          </ul>
        </div>
      </div>

      {/* EXPLANATORY STRIP — High-trust institutional tone */}
      <div className="mt-20 p-12 rounded-xl bg-[#0B3A63] text-white shadow-lg relative overflow-hidden">
        
        <div className="absolute inset-0 bg-gradient-to-br from-[#15B097] to-transparent opacity-20"></div>

        <h3 className="text-2xl font-semibold relative z-10">
          Guarantees for Long-Term Document Stability
        </h3>

        <p className="text-white/90 max-w-5xl mt-4 leading-relaxed relative z-10">
          Cryptographic integrity ensures that a Certif-Scope attestation can be trusted years 
          after its creation, even if internal verification procedures change or if institutional 
          workflows evolve.  
          The attestation remains verifiable offline thanks to a deterministic integrity value, 
          ensuring that institutions can authenticate documents independent of external systems 
          or future service availability.
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
