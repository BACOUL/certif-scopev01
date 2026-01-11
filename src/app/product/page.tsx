import Breadcrumb from "@/components/Common/Breadcrumb";

export default function ProductPage() {
  return (
    <>
      <Breadcrumb
        pageName="Product Overview"
        description="Instant CO₂ attestation designed for procurement, banking and compliance workflows."
      />

      {/*
      ======================================================================
      OFFICIAL PRODUCT PAGE STRUCTURE — 16 SECTIONS
      (Internal reference — NOT visible to users)
      ======================================================================

      1. Product Overview
      2. Key Benefits Summary
      3. Why the product exists
      4. Solution provided
      5. Detailed use cases
      6. How it works (steps)
      7. Value proposition / Differentiation
      8. Security & Verification model
      9. Attestation Sample (PDF preview)
      10. Data Sources
      11. Methodology limitations
      12. Data Privacy
      13. Integrations & Compatibility
      14. Industry adaptations
      15. Maintenance & Updates
      16. Technical FAQ

      All 16 sections will be added progressively.
      ======================================================================
      */}

      {/* TABLE OF CONTENTS (VISIBLE) */}
      <section className="max-w-6xl mx-auto px-6 pt-10 pb-12">
        <h2 className="text-xl font-bold text-[#0B3A63] mb-6">
          Sections
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 text-sm">
          <a href="#section1" className="text-[#0B3A63] hover:underline">1. Product Overview</a>
          <a href="#section2" className="text-[#0B3A63] hover:underline">2. Key Benefits Summary</a>
          <a href="#section3" className="text-[#0B3A63] hover:underline">3. Why the product exists</a>
          <a href="#section4" className="text-[#0B3A63] hover:underline">4. Solution provided</a>
          <a href="#section5" className="text-[#0B3A63] hover:underline">5. Use cases</a>
          <a href="#section6" className="text-[#0B3A63] hover:underline">6. How it works</a>
          <a href="#section7" className="text-[#0B3A63] hover:underline">7. Value proposition</a>
          <a href="#section8" className="text-[#0B3A63] hover:underline">8. Security & Verification</a>
          <a href="#section9" className="text-[#0B3A63] hover:underline">9. Sample PDF</a>
          <a href="#section10" className="text-[#0B3A63] hover:underline">10. Data Sources</a>
          <a href="#section11" className="text-[#0B3A63] hover:underline">11. Methodology limitations</a>
          <a href="#section12" className="text-[#0B3A63] hover:underline">12. Data Privacy</a>
          <a href="#section13" className="text-[#0B3A63] hover:underline">13. Integrations</a>
          <a href="#section14" className="text-[#0B3A63] hover:underline">14. Industry adaptations</a>
          <a href="#section15" className="text-[#0B3A63] hover:underline">15. Maintenance & Updates</a>
          <a href="#section16" className="text-[#0B3A63] hover:underline">16. Technical FAQ</a>
        </div>
      </section>

      {/* SECTION 1 — PRODUCT OVERVIEW */}
      <section id="section1" className="max-w-6xl mx-auto px-6 pt-24 pb-24">

        <p className="text-sm md:text-base font-semibold tracking-wide text-[#0B3A63]/70 uppercase mb-3">
          Product Overview
        </p>

        <h1 className="text-3xl md:text-4xl font-extrabold text-[#0B3A63] leading-tight mb-8">
          Instant Certified CO₂ Attestation for SMEs
        </h1>

        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed max-w-3xl mb-14">
          Certif-Scope enables small and medium enterprises to instantly generate a standardized,
          institution-ready CO₂ attestation, aligned with GHG Protocol principles and accepted by
          procurement, banking, compliance and due diligence teams across Europe. The attestation
          includes verifiable indicators, methodology transparency and a cryptographically secured
          verification identifier that any third-party can authenticate independently.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          <div className="p-8 rounded-2xl bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-semibold text-[#0B3A63] mb-3">
              Designed for institutional workflows
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              The attestation replicates the exact structure expected by finance, procurement
              and compliance departments: identification details, scope indicators,
              emission factors, methodology summary, verification hash and timestamped
              signature reference.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-semibold text-[#0B3A63] mb-3">
              30-second generation process
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              Instead of spending weeks coordinating with consultants and waiting for manual
              validation, Certif-Scope produces a verifiable PDF instantly using standardized
              emission factors applied to declared financial activity.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-semibold text-[#0B3A63] mb-3">
              Independent verification capability
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              Each attestation includes a unique verification code and a cryptographic hash,
              allowing banks, insurers, auditors or partners to validate integrity
              without relying on Certif-Scope's infrastructure.
            </p>
          </div>

        </div>

        <div className="mt-20 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0B3A63] mb-5">
            Why this product exists
          </h2>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            European procurement processes, financial institutions and compliance departments
            increasingly require standardized CO₂ indicators before onboarding, validation
            or funding decisions. Most SMEs lack time, resources or expertise to produce
            recognized, audit-ready environmental documentation.
          </p>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            Traditional ESG assessments are slow, expensive and fragmented.
            Certif-Scope solves this by offering an instant, structured and verifiable
            attestation that aligns with institutional expectations — without consultants,
            delays or complex onboarding.
          </p>

          <ul className="mt-6 space-y-4 text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
            <li>• Rising demand for CO₂ transparency in B2B collaboration</li>
            <li>• Banks require CO₂ indicators for loan assessments</li>
            <li>• Procurement imposes environmental disclosure</li>
            <li>• ESG frameworks require standardized, verifiable documents</li>
            <li>• SMEs lack resources for traditional audits</li>
          </ul>
        </div>

      </section>

    </>
  );
}
