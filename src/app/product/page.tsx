import Breadcrumb from "@/components/Common/Breadcrumb";

export default function ProductPage() {
  return (
    <>
      <Breadcrumb
        pageName="Product Overview"
        description="Instant CO₂ attestation designed for procurement, banking and compliance workflows."
      />

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

      {/* SECTION 2 — WHAT’S INCLUDED */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#0B3A63] mb-8">What’s included</h2>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-10">
            Each attestation follows a standardized structure aligned with institutional expectations.
            It is generated instantly and can be shared with banks, procurement teams or compliance departments.
          </p>

          <ul className="space-y-4 text-gray-700 dark:text-gray-300">
            <li>• Company identification (name, VAT, country)</li>
            <li>• Estimated annual CO₂ footprint</li>
            <li>• Spend-based methodology summary (GHG Protocol)</li>
            <li>• Emission factors applied per category</li>
            <li>• Unique verification ID</li>
            <li>• Cryptographic hash of document content</li>
            <li>• Timestamp & signature reference</li>
            <li>• QR code for instant verification</li>
          </ul>
        </div>
      </section>

      {/* SECTION 3 — TRUST REASONS */}
      <section className="py-20 bg-[#F8FAFC] dark:bg-gray-800">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#0B3A63] mb-8">
            Designed for real-world acceptance
          </h2>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-12">
            Certif-Scope uses a consistent, review-ready structure that fits the
            evaluation processes used in procurement, onboarding and risk analysis.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                Standardized structure
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Consistent fields and indicators for easier institutional review.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                GHG Protocol alignment
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Based on the internationally recognized spend-based approach.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                Independent verification
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Verification ID allows offline validation without relying on Certif-Scope.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 4 — USE CASES */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#0B3A63] mb-10">
            Where the attestation is used
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h4 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                Banking & Financing
              </h4>
              <p className="text-gray-600 dark:text-gray-400">
                Supports loan applications, subsidies and financial risk evaluations.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                Procurement & Supplier Onboarding
              </h4>
              <p className="text-gray-600 dark:text-gray-400">
                Standardized CO₂ indicator for buyer qualification processes.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                Marketplaces & Platforms
              </h4>
              <p className="text-gray-600 dark:text-gray-400">
                Required by platforms during environmental compliance validation.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                Internal ESG Reporting
              </h4>
              <p className="text-gray-600 dark:text-gray-400">
                Provides a consistent CO₂ metric for internal reporting and stakeholders.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 — HOW IT WORKS */}
      <section className="py-20 bg-[#F8FAFC] dark:bg-gray-800">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#0B3A63] mb-8">How it works</h2>

          <div className="space-y-6 text-gray-700 dark:text-gray-300">
            <p>1. Enter yearly expenses.</p>
            <p>2. Instant estimation using standardized emission factors.</p>
            <p>3. Download verified attestation with unique ID and QR code.</p>
          </div>
        </div>
      </section>

      {/* SECTION 6 — COMPLIANCE */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#0B3A63] mb-8">
            Compliance & limitations
          </h2>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            Certif-Scope generates automated CO₂ estimations using user-submitted data.
            It is not an audit or certification. Users are responsible for the
            accuracy of the information they provide.
          </p>

          <ul className="space-y-3 text-gray-700 dark:text-gray-300">
            <li>• Estimation based on user-provided financial data</li>
            <li>• No audit or validation of accounting records</li>
            <li>• Aligned with GHG Protocol spend-based methodology</li>
            <li>• Not an accredited certification or environmental audit</li>
            <li>• Verification ID confirms integrity, not input accuracy</li>
            <li>• Institutional acceptance depends on internal policies</li>
          </ul>
        </div>
      </section>
    </>
  );
            }
