"use client";

export default function Section1() {
  return (
    <section
      id="s1"
      className="scroll-mt-24 border-b border-gray-200 pb-20"
    >
      {/* HERO TITLE BLOCK */}
      <div className="bg-[#F8FAFC] p-10 rounded-2xl shadow-sm border border-gray-100">
        <h1 className="text-4xl font-extrabold text-[#0B3A63] leading-tight mb-6">
          Instant Certified CO₂ Attestation for SMEs
        </h1>

        <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl">
          Certif-Scope delivers a fully standardized, institution-ready CO₂ attestation 
          designed for procurement, banking, insurance and compliance workflows. 
          The document uses a transparent, verifiable methodology and includes a 
          cryptographically secured verification identifier that any third-party 
          can authenticate independently.
        </p>
      </div>

      {/* 3 PREMIUM CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-14">
        
        <div className="p-8 bg-white rounded-xl shadow-lg border border-gray-200">
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-3">
            Structured for Institutions
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Built to match European procurement and financial evaluation processes — 
            standardized fields, methodology summary, emission factors, verification ID 
            and timestamp.
          </p>
        </div>

        <div className="p-8 bg-white rounded-xl shadow-lg border border-gray-200">
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-3">
            Generated in Less Than 30 Seconds
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            No consultants, no delays. Enter yearly expenses and download a verified, 
            ready-to-submit PDF instantly.
          </p>
        </div>

        <div className="p-8 bg-white rounded-xl shadow-lg border border-gray-200">
          <h3 className="text-xl font-semibold text-[#0B3A63] mb-3">
            Independently Verifiable
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Each attestation includes a cryptographic hash and a unique verification code, 
            enabling third-parties to authenticate authenticity without relying on Certif-Scope.
          </p>
        </div>

      </div>

      {/* INSIGHT STRIP */}
      <div className="mt-16 bg-[#0B3A63] text-white p-8 rounded-xl shadow-sm">
        <h4 className="text-xl font-bold mb-3">Why this matters</h4>
        <p className="text-white/90 max-w-3xl leading-relaxed">
          European banks, procurement departments, and insurers increasingly require CO₂ 
          indicators during onboarding, due diligence or risk scoring. Certif-Scope allows 
          SMEs to comply instantly without expensive ESG audits or complex reporting processes.
        </p>
      </div>

      {/* RETURN TO SUMMARY BUTTON */}
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
