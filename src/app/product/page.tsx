import Breadcrumb from "@/components/Common/Breadcrumb";

export default function ProductPage() {
  return (
    <>
      <Breadcrumb
        pageName="Product"
        description="Instant CO₂ attestation designed for procurement, banking and compliance workflows."
      />

      {/* SECTION — What's inside */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#0B3A63] mb-8">
            What’s included
          </h2>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-10">
            Each attestation follows a standardized structure aligned with institutional
            expectations. It is generated instantly and can be shared with banks,
            procurement teams or compliance departments.
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

      {/* SECTION — Trust reasons */}
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

      {/* SECTION — Use cases */}
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
                Used when platforms request environmental indicators during seller validation.
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

      {/* SECTION — How it works */}
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

      {/* SECTION — Compliance */}
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
