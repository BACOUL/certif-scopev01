"use client";

export default function Section1() {
  return (
    <section
      id="s1"
      className="scroll-mt-24 border-b border-gray-200 pb-20"
    >
      {/* TOP HEADER - Premium institutional, unique design */}
      <div className="relative p-12 rounded-2xl bg-[#F8FAFC] border border-gray-200 shadow-lg overflow-hidden">

        {/* Accent gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#15B097]/10 to-[#0B3A63]/5 pointer-events-none"></div>

        <h2 className="text-4xl md:text-5xl font-extrabold text-[#0B3A63] relative z-10">
          1. Product Overview
        </h2>

        <p className="text-lg text-gray-700 max-w-3xl mt-6 leading-relaxed relative z-10">
          Certif-Scope provides SMEs across Europe with an instant, standardized and verifiable
          CO₂ attestation formatted specifically for procurement, banking, investment, insurance
          and compliance workflows. The output follows a strict institutional structure, includes 
          a cryptographically verifiable identifier, and is optimized for multilingual acceptance 
          (EN, FR, DE, ES, IT).
        </p>
      </div>

      {/* 3-COLUMN VALUE GRID – unique design for section 1 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-14">
        
        {/* CARD 1 */}
        <div className="p-8 bg-white rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition">
          <div className="text-[#15B097] text-4xl font-bold mb-3">01</div>
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-2">Institution-Ready Format</h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Structured according to expectations of procurement, finance and ESG teams: 
            entity details, category breakdown, results summary, verification code, 
            and audit consistency indicators.
          </p>
        </div>

        {/* CARD 2 */}
        <div className="p-8 bg-[#F8FAFC] rounded-xl border border-[#15B097]/30 shadow-sm hover:shadow-md transition">
          <div className="text-[#15B097] text-4xl font-bold mb-3">02</div>
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-2">Delivered in <30 Seconds</h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Users input annual spend categories and immediately receive a verified PDF.  
            No consultants, no waiting periods, no multi-week ESG reporting cycles.
          </p>
        </div>

        {/* CARD 3 */}
        <div className="p-8 bg-white rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition">
          <div className="text-[#15B097] text-4xl font-bold mb-3">03</div>
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-2">Independent Verification</h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Each attestation contains a cryptographic integrity seal + a unique verification 
            identifier, enabling third parties to authenticate the PDF without relying on servers.
          </p>
        </div>

      </div>

      {/* COMPLEMENTARY EXPLANATION STRIP */}
      <div className="mt-16 bg-[#0B3A63] text-white p-10 rounded-xl shadow-md relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#15B097] to-transparent opacity-20"></div>

        <h4 className="text-2xl font-bold relative z-10">Why This Matters</h4>

        <p className="mt-3 text-white/90 max-w-4xl leading-relaxed relative z-10">
          European procurement frameworks increasingly require standardized CO₂ indicators for 
          operational risk assessment, vendor screening and financial scoring. Certif-Scope eliminates 
          friction by providing a fast, reliable and audit-ready document widely accepted across 
          the EU procurement ecosystem.
        </p>
      </div>

      {/* RETURN BUTTON — IDENTICAL (globally enforced) */}
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
