"use client";

export default function Section1() {
  return (
    <section
      id="s1"
      className="scroll-mt-24 border-b border-gray-200 pb-20"
    >
      {/* HERO BLOCK - premium layout */}
      <div className="bg-[#F8FAFC] p-12 rounded-2xl shadow-sm border border-gray-100">
        <h1 className="text-4xl font-extrabold text-[#0B3A63] leading-tight mb-6">
          Instant Institutional-Grade CO₂ Attestation for European SMEs
        </h1>

        <p className="text-lg text-gray-700 max-w-3xl leading-relaxed">
          Certif-Scope enables businesses to instantly generate a clear,
          standardized, and verifiable CO₂ attestation designed for procurement,
          banking, insurance, investment onboarding, and compliance workflows.
          The output follows a rigorous structure recognized by European
          institutions and includes a cryptographic verification signature that
          can be independently checked offline.
        </p>
      </div>

      {/* 3 PREMIUM VALUE CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-14">

        {/* Card 1 */}
        <div className="p-8 bg-white rounded-xl shadow-lg border border-gray-200">
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-3">
            Institutional Structure
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Includes all mandatory elements expected in procurement and ESG risk
            reviews: company identifiers, categorised activity scope, summary
            indicators, verification ID, and compliance-ready formatting.
          </p>
        </div>

        {/* Card 2 */}
        <div className="p-8 bg-white rounded-xl shadow-lg border border-gray-200">
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-3">
            Ready in Under 30 Seconds
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Upload or enter yearly spend data and download a verified PDF
            instantly. No consultants, no multi-week audits, no back-and-forth
            validation loops.
          </p>
        </div>

        {/* Card 3 */}
        <div className="p-8 bg-white rounded-xl shadow-lg border border-gray-200">
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-3">
            Independently Verifiable
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Every attestation includes a cryptographic integrity seal, unique
            verification identifier, and offline validation path. Institutions
            can authenticate the file without relying on Certif-Scope servers.
          </p>
        </div>

      </div>

      {/* EXPLANATORY STRIP - distinct design */}
      <div className="mt-16 bg-[#0B3A63] text-white p-10 rounded-xl shadow-md relative overflow-hidden">
        {/* Accent stripe */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#15B097] to-transparent opacity-25"></div>

        <h4 className="text-xl font-bold mb-4 relative z-10">
          Why This Section Matters
        </h4>
        <p className="text-white/90 max-w-4xl leading-relaxed relative z-10">
          European procurement and financial institutions require transparent,
          reliable, and standardized environmental indicators for risk scoring,
          onboarding, due diligence, and supplier verification. Certif-Scope
          solves a regulatory and operational bottleneck by providing a fast,
          replicable, and institution-compatible attestation without complex
          ESG consulting or long audits.
        </p>
      </div>

      {/* DISCREET RETURN BUTTON - universal style (Rule applied) */}
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
