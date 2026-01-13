"use client";

export default function Section2() {
  return (
    <section
      id="s2"
      className="scroll-mt-24 border-b border-gray-200 pb-24"
    >

      {/* HEADER — Institutional, benefits-focused */}
      <div className="relative rounded-2xl p-12 bg-[#0B3A63] text-white shadow-lg overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#15B097]/40 to-transparent"></div>

        <h2 className="text-4xl md:text-5xl font-extrabold relative z-10">
          2. Key Benefits Summary
        </h2>

        <p className="text-white/90 text-lg max-w-4xl mt-6 leading-relaxed relative z-10">
          Certif-Scope provides SMEs with a fast, compliant and institution-ready CO₂
          attestation designed to meet increasing documentation requirements across
          Europe. Benefits include standardized formatting (ESRS-compatible),
          cryptographic verification (ISO 14064-1 principles), instant processing,
          multilingual acceptability and alignment with the spend-based pathway defined
          by the GHG Protocol.
        </p>
      </div>


      {/* 3-PILLAR BENEFIT GRID — non redundant with section 1 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">

        {/* BENEFIT 1 */}
        <div className="p-8 bg-white rounded-xl border border-gray-200 shadow-md">
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-3">
            1. Institutional Acceptance
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            The attestation follows a disclosure structure coherent with ESRS E1
            expectations: clear categories, transparent methodology, and traceable data.
            This makes it suitable for procurement onboarding, banking risk scoring,
            insurance screening and investor due diligence workflows.
          </p>
        </div>

        {/* BENEFIT 2 */}
        <div className="p-8 bg-[#F8FAFC] rounded-xl border border-[#15B097]/30 shadow-sm">
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-3">
            2. Instant Generation & Low Cost
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            Unlike traditional ESG processes (4–12 weeks, €3,000+), Certif-Scope provides
            a verified attestation in under 30 seconds. This enables SMEs to meet tight
            tender deadlines and financial-sector requirements without consulting fees.
          </p>
        </div>

        {/* BENEFIT 3 */}
        <div className="p-8 bg-white rounded-xl border border-gray-200 shadow-md">
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-3">
            3. Verified & Traceable Data
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            Each attestation includes a cryptographic integrity hash following ISO
            14064-1 transparency principles and compatible with offline verification.
            This ensures integrity, reproducibility and institutional trust without 
            reliance on Certif-Scope servers.
          </p>
        </div>

      </div>


      {/* SECOND BENEFITS BLOCK — deeper, still aligned with section theme */}
      <div className="mt-20 p-10 rounded-xl bg-[#F8FAFC] border border-[#0B3A63]/25 shadow-sm">
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">
          Additional Advantages for Operational Workflows
        </h3>

        <ul className="space-y-3 text-gray-700 text-sm leading-relaxed">
          <li>• Multilingual output ready for EN / FR / DE / ES / IT documentation flows</li>
          <li>• Spend-based approach compliant with GHG Protocol guidance</li>
          <li>• Clear boundaries and methodological transparency (no misleading claims)</li>
          <li>• Usable in procurement screening, risk assessment and grant applications</li>
          <li>• No permanent data storage, fully GDPR-compliant</li>
        </ul>
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
