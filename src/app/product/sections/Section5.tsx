"use client";

export default function Section5() {
  return (
    <section
      id="s5"
      className="scroll-mt-24 border-b border-gray-200 pb-24"
    >
      {/* HEADER */}
      <div className="mb-12">
        <h2 className="text-4xl font-extrabold text-[#0B3A63]">
          Key Use Cases
        </h2>
        <p className="text-lg text-gray-700 max-w-3xl mt-4">
          Certif-Scope solves multiple institutional requirements across Europe.
          From procurement onboarding to financial validation and risk scoring,
          the attestation provides a fast, standardized and audit-ready document
          that organizations can integrate into existing workflows without friction.
        </p>
      </div>

      {/* USE CASE GRID – PREMIUM DESIGN */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">

        {/* CARD 1 */}
        <div className="p-10 bg-[#0B3A63] text-white rounded-2xl shadow-lg relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#15B097] via-transparent to-[#0B3A63] opacity-20"></div>
          <h3 className="text-2xl font-semibold relative z-10">
            Procurement Onboarding
          </h3>
          <p className="text-white/90 mt-3 relative z-10">
            Suppliers are increasingly required to provide CO₂ indicators to
            continue working with large corporations. Certif-Scope provides an
            instantly accepted attestation aligned with institutional ESG frameworks.
          </p>
          <ul className="mt-4 space-y-2 text-white/85 text-sm relative z-10">
            <li>• Fast supplier onboarding</li>
            <li>• Standardized evaluation format</li>
            <li>• Compatible with EU procurement requirements</li>
          </ul>
        </div>

        {/* CARD 2 */}
        <div className="p-10 bg-white border border-[#0B3A63]/20 rounded-2xl shadow-sm">
          <h3 className="text-2xl font-semibold text-[#0B3A63]">
            Banking & Financial Applications
          </h3>
          <p className="text-gray-700 mt-3">
            Banks now include environmental scoring in certain loan processes.
            Certif-Scope eliminates delays by providing a verifiable CO₂ report
            that meets the minimum data expected by credit assessment teams.
          </p>
          <ul className="mt-4 space-y-2 text-gray-700 text-sm">
            <li>• Required for risk scoring</li>
            <li>• Accepted as supporting evidence</li>
            <li>• Valid for sustainability-linked financing</li>
          </ul>
        </div>

        {/* CARD 3 */}
        <div className="p-10 bg-[#F8FAFC] border border-[#15B097] rounded-2xl shadow-md">
          <h3 className="text-2xl font-semibold text-[#0B3A63]">
            Grant & Subsidy Applications
          </h3>
          <p className="text-gray-700 mt-3">
            Many European public programs now require basic CO₂ indicators
            as part of sustainability commitments. Certif-Scope simplifies
            applications with a standardized PDF ready for submission.
          </p>
          <ul className="mt-4 space-y-2 text-gray-700 text-sm">
            <li>• EU funds documentation</li>
            <li>• Regional and national subsidies</li>
            <li>• Innovation and sustainability grants</li>
          </ul>
        </div>

        {/* CARD 4 */}
        <div className="p-10 bg-white border border-[#15B097]/40 rounded-2xl shadow-lg">
          <h3 className="text-2xl font-semibold text-[#0B3A63]">
            B2B Partnerships & Due Diligence
          </h3>
          <p className="text-gray-700 mt-3">
            Large clients increasingly ask smaller partners for CO₂ information
            before signing a contract. Certif-Scope provides a fast, trusted and
            verifiable document that reduces friction in negotiations.
          </p>
          <ul className="mt-4 space-y-2 text-gray-700 text-sm">
            <li>• Transparent environmental disclosure</li>
            <li>• Ready for legal and compliance review</li>
            <li>• Reduces contract approval time</li>
          </ul>
        </div>
      </div>

      {/* FULL-WIDTH VALUE STRIP */}
      <div className="mt-20 p-10 bg-[#15B097] rounded-xl shadow text-white">
        <h4 className="text-2xl font-semibold mb-3">Perfect for SMEs and Micro-enterprises</h4>
        <p className="text-white/95 max-w-4xl">
          Certif-Scope is specifically tailored to small businesses that lack
          the budget or resources for full ESG audits. The system removes uncertainty,
          reduces administrative load, and produces a compliant attestation in minutes.
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
