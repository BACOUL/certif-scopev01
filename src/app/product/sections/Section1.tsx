"use client";

export default function Section1() {
  return (
    <section
      id="s1"
      className="scroll-mt-24 border-b border-gray-200 pb-20"
    >
      {/* HERO SECTION - premium, institutional */}
      <div className="bg-[#F8FAFC] p-12 rounded-2xl shadow-md border border-gray-100">
        <h2 className="text-4xl font-extrabold text-[#0B3A63] leading-tight mb-6">
          Section 1 — Product Overview
        </h2>

        <p className="text-lg text-gray-700 max-w-3xl leading-relaxed">
          Certif-Scope provides a fast, standardized and verifiable CO₂ attestation 
          tailored for procurement teams, banks, insurers, investors and public-sector 
          evaluators across Europe. The attestation uses a clear institutional structure, 
          is generated within seconds and can be independently verified using a 
          cryptographic integrity signature — without relying on Certif-Scope’s servers.
        </p>
      </div>

      {/* PREMIUM 3-COLUMN PROOF GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-14">

        <div className="p-8 bg-white rounded-xl shadow-lg border border-[#0B3A63]/20">
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-3">
            Built for Institutions
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Standardized fields, clear terminology, verification identifier, 
            company details and structured layout aligned with European 
            onboarding and due-diligence processes.
          </p>
        </div>

        <div className="p-8 bg-[#F8FAFC] rounded-xl shadow-lg border border-[#15B097]/30">
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-3">
            Delivered in Under 30 Seconds
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Rapid generation from yearly spend data. No consultants, no audits, 
            no delays. The attestation is ready to submit immediately.
          </p>
        </div>

        <div className="p-8 bg-white rounded-xl shadow-lg border border-[#0B3A63]/20">
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-3">
            Independently Verifiable
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Includes a unique verification ID and cryptographic hash. 
            Third parties authenticate authenticity without contacting Certif-Scope.
          </p>
        </div>

      </div>

      {/* INSTITUTIONAL INSIGHT STRIP */}
      <div className="mt-16 bg-[#0B3A63] text-white p-10 rounded-xl shadow-lg relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#15B097] to-transparent opacity-20"></div>

        <h4 className="text-xl font-bold mb-4 relative z-10">
          Institutional Reviewer Perspective
        </h4>
        <p className="text-white/90 max-w-4xl leading-relaxed relative z-10">
          European procurement and financial institutions increasingly require 
          standardized environmental indicators for onboarding, risk scoring and 
          eligibility checks. Certif-Scope provides a fast, consistent and verifiable 
          document that aligns with operational expectations — avoiding delays, 
          rejections or repeated requests for clarification.
        </p>

        {/* Optional official link */}
        <a
          href="https://single-market-economy.ec.europa.eu/index_en"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-white/80 text-sm mt-4 inline-block relative z-10"
        >
          Official EU Single Market Information →
        </a>
      </div>

      {/* CTA BLOCK (DISCREET) */}
      <div className="mt-12 p-6 bg-[#F8FAFC] rounded-lg border border-gray-200 shadow-sm">
        <p className="text-gray-700 text-sm">
          Ready to generate your verified attestation? You can do it instantly using the form on the homepage.
        </p>
      </div>

      {/* RETURN BUTTON — IDENTICAL ACROSS ALL SECTIONS */}
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
