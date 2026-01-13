"use client";

export default function Section2() {
  return (
    <section
      id="s2"
      className="scroll-mt-24 border-b border-gray-200 pb-24"
    >

      {/* HEADER BLOCK – Institutional, premium, unique */}
      <div className="relative rounded-2xl p-12 bg-[#0B3A63] text-white shadow-lg overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#15B097]/40 to-transparent pointer-events-none"></div>

        <h2 className="text-4xl md:text-5xl font-extrabold relative z-10">
          2. Key Benefits Summary
        </h2>

        <p className="text-white/90 text-lg max-w-4xl mt-6 leading-relaxed relative z-10">
          Certif-Scope provides a structured, fast and verifiable way for SMEs to deliver
          climate indicators that match institutional expectations. Each benefit directly
          addresses an operational need observed in procurement, banking, insurance and 
          compliance workflows across the EU, offering a reliable alternative to lengthy,
          expensive or inconsistent ESG processes.
        </p>
      </div>


      {/* BENEFITS GRID — 6 blocks, no repetition with Section 1 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-16">

        {/* BENEFIT 1 */}
        <div className="p-8 bg-white rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition">
          <h3 className="text-2xl font-semibold text-[#0B3A63]">
            1. Immediate Institutional Acceptance
          </h3>
          <p className="mt-3 text-gray-700 text-sm leading-relaxed">
            The attestation follows consistent formatting principles aligned with
            European procurement and financial review procedures, reducing the risk of
            document rejection during vendor onboarding, due diligence or risk scoring.
          </p>
        </div>

        {/* BENEFIT 2 */}
        <div className="p-8 bg-[#F8FAFC] rounded-xl border border-[#15B097]/40 shadow-md hover:shadow-lg transition">
          <h3 className="text-2xl font-semibold text-[#0B3A63]">
            2. Fast Delivery Under 30 Seconds
          </h3>
          <p className="mt-3 text-gray-700 text-sm leading-relaxed">
            The system computes indicators instantly, meeting the operational constraints
            of procurement teams and administrative procedures that require rapid submission.
          </p>
        </div>

        {/* BENEFIT 3 */}
        <div className="p-8 bg-white rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition">
          <h3 className="text-2xl font-semibold text-[#0B3A63]">
            3. Verifiable Cryptographic Integrity
          </h3>
          <p className="mt-3 text-gray-700 text-sm leading-relaxed">
            Each PDF includes a SHA-256 integrity hash enabling offline verification.
            Third-parties can confirm document authenticity without relying on platform
            availability or trust-based validation.
          </p>
        </div>

        {/* BENEFIT 4 */}
        <div className="p-8 bg-[#F8FAFC] rounded-xl border border-[#15B097]/40 shadow-md hover:shadow-lg transition">
          <h3 className="text-2xl font-semibold text-[#0B3A63]">
            4. Consistent, Comparable Output
          </h3>
          <p className="mt-3 text-gray-700 text-sm leading-relaxed">
            Results follow a structured layout allowing procurement teams to compare
            suppliers easily. This eliminates formatting ambiguity found in most
            unstandardized CO₂ documents.
          </p>
        </div>

        {/* BENEFIT 5 */}
        <div className="p-8 bg-white rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition">
          <h3 className="text-2xl font-semibold text-[#0B3A63]">
            5. No Expert Knowledge Required
          </h3>
          <p className="mt-3 text-gray-700 text-sm leading-relaxed">
            SMEs can generate institution-ready documentation without consultants or
            specialized ESG staff, lowering complexity and cost.
          </p>
        </div>

        {/* BENEFIT 6 */}
        <div className="p-8 bg-[#F8FAFC] rounded-xl border border-[#15B097]/40 shadow-md hover:shadow-lg transition">
          <h3 className="text-2xl font-semibold text-[#0B3A63]">
            6. Multilingual Compliance Coverage
          </h3>
          <p className="mt-3 text-gray-700 text-sm leading-relaxed">
            The attestation is formatted for acceptance in English, French, German,
            Spanish and Italian, covering &gt;80% of EU procurement languages.
          </p>
        </div>

      </div>


      {/* INSTITUTIONAL CONTEXT STRIP – No repetition */}
      <div className="mt-20 p-10 rounded-xl bg-[#F8FAFC] border border-[#0B3A63]/25 shadow-sm">
        <h3 className="text-2xl font-semibold text-[#0B3A63] mb-4">
          Why These Benefits Matter
        </h3>

        <p className="text-gray-700 max-w-4xl leading-relaxed">
          Institutions increasingly need structured, verifiable and consistent indicators
          to classify supplier exposure under EU sustainability frameworks. Certif-Scope
          provides these benefits without claiming to replace full CSRD/ESRS reporting,
          making it a lightweight yet compliant solution for SMEs.
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
