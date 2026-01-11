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
      (Internal table of contents — NOT visible on the website)
      ======================================================================

      1. Product Overview
      2. Key Benefits Summary (3 essential value points)
      3. Why the product exists (Problem context)
      4. Solution provided
      5. Use cases (detailed list)
      6. How it works (step-by-step)
      7. Value proposition / Differentiation
      8. Security & Verification model
      9. Example attestation (PDF preview + CTA)
      10. Data Sources (emission factors, methodology)
      11. Methodological limitations (legal clarity)
      12. Data Privacy & Handling (RGPD compliant)
      13. Integrations & Compatibility
      14. Industry-specific adaptations (sector use cases)
      15. Maintenance & Updates (methodology versioning)
      16. Technical FAQ (edge cases + interpretation)

      NOTE:
      – These sections will be added progressively.
      – Only Section 1 is currently implemented below.
      – Keep the same order for SEO, IA-lisibility and product clarity.
      ======================================================================
      */}

      {/* SECTION 1 — PRODUCT OVERVIEW */}
      <section className="max-w-6xl mx-auto px-6 pt-24 pb-24">

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
          includes verifiable indicators, methodology transparency, and a cryptographically secured
          verification identifier that any third-party can authenticate independently.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          <div className="p-8 rounded-2xl bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-semibold text-[#0B3A63] mb-3">
              Designed for institutional workflows
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              The attestation replicates the exact structure expected by finance, procurement
              and compliance departments: identification details, scope indicators, emission factors,
              methodology summary, verification hash and timestamped signature reference.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-semibold text-[#0B3A63] mb-3">
              30-second generation process
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              Instead of spending weeks collecting data, coordinating with consultants and waiting
              for manual validation, Certif-Scope produces a verifiable PDF instantly using tested
              and transparent emission factors applied to declared financial activity.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-semibold text-[#0B3A63] mb-3">
              Independent verification capability
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              Each attestation contains a unique verification code and a cryptographic hash
              allowing any organization — bank, insurer, auditor or partner — to validate
              the integrity of the document without relying on Certif-Scope’s servers.
            </p>
          </div>

        </div>

        <div className="mt-20 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0B3A63] mb-5">
            Why this product exists
          </h2>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            European procurement processes, financial institutions and compliance departments
            increasingly require standardized CO₂ indicators before any onboarding, validation
            or funding decision. Yet most SMEs do not have the resources or expertise to
            produce a recognized, audit-ready environmental report.
          </p>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            Traditional ESG assessments are slow, expensive and fragmented. Certif-Scope
            solves this by providing an instant, structured and universally verifiable
            attestation that matches institutional expectations without the burden of manual
            reporting or consultancy fees.
          </p>

          <ul className="mt-6 space-y-4 text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
            <li>• Rising demand for CO₂ transparency in B2B collaboration</li>
            <li>• Banks require CO₂ indicators for loan and risk assessments</li>
            <li>• Procurement processes impose environmental disclosure requirements</li>
            <li>• ESG checklists demand verifiable, standardized documents</li>
            <li>• SMEs lack time and resources for traditional carbon audits</li>
          </ul>
        </div>

      </section>
    </>
  );
}
