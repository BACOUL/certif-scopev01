export const metadata = {
  title: "Why Companies Ask for It — Certif-Scope",
  description:
    "Understanding why procurement teams, banks, insurers and institutions request CO₂e attestations from small and medium businesses.",
};

export default function WhyCompaniesAskPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 pt-8 pb-24">

      {/* HEADER UNIFORME */}
      <div className="w-full mb-12">
        <h1 className="text-3xl md:text-4xl font-extrabold text-[#0B3A63] mb-4">
          Why Companies Ask for It
        </h1>

        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          Procurement teams, banks and insurers increasingly request CO₂e
          attestations from suppliers. Here's what they need, why they need it,
          and how Certif-Scope solves the bottleneck instantly.
        </p>
      </div>

      {/* CONTENT */}
      <div className="max-w-4xl mx-auto space-y-16">

        {/* SECTION 1 */}
        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            1. Procurement Risk Management
          </h2>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            Large companies now classify suppliers based on environmental impact
            to comply with internal ESG policies and external regulations.
          </p>

          <ul className="list-disc ml-6 text-gray-700 dark:text-gray-300 space-y-2">
            <li>risk scoring of suppliers</li>
            <li>mandatory ESG indicators in tender responses</li>
            <li>alignment with sustainable procurement policies</li>
          </ul>
        </section>

        {/* SECTION 2 */}
        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            2. Institutional Compliance Requirements
          </h2>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Banks, insurers and public entities must justify environmental risk
            assessments in their onboarding process. A simple, standardized CO₂e
            attestation allows them to comply instantly.
          </p>
        </section>

        {/* SECTION 3 */}
        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            3. Mandatory Due Diligence Documentation
          </h2>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            Many organizations now require a CO₂e estimation from all vendors as
            part of due diligence or supplier onboarding.
          </p>

          <p className="text-gray-700 dark:text-gray-300">
            Certif-Scope provides a standardized, readable, verifiable format
            that satisfies this requirement even for micro-businesses.
          </p>
        </section>

        {/* SECTION 4 */}
        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            4. Simplification for Non-Technical Suppliers
          </h2>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Most SMEs cannot produce CSRD/ESRS reports or GHG inventories.  
            Certif-Scope makes it possible to deliver an institutional-grade
            document instantly using only spending input.
          </p>
        </section>

        {/* SECTION 5 */}
        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            5. Faster Supplier Approval Workflow
          </h2>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            The attestation shortens onboarding time from weeks to minutes,
            allowing companies to validate suppliers faster and with standardized
            CO₂ information.
          </p>
        </section>

        {/* SECTION 6 */}
        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            6. A Document That Can Be Verified Instantly
          </h2>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            Each attestation includes:
          </p>

          <ul className="list-disc ml-6 text-gray-700 dark:text-gray-300 space-y-2">
            <li>a unique attestation ID</li>
            <li>a cryptographic hash for integrity checks</li>
            <li>a permanent verification link</li>
            <li>a QR code for institutional workflows</li>
          </ul>

          <p className="text-gray-700 dark:text-gray-300 mt-4 leading-relaxed">
            Institutions can verify authenticity in seconds, eliminating fraud
            and ensuring the document has not been altered.
          </p>
        </section>

        {/* SECTION 7 */}
        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            7. Accepted Across Europe
          </h2>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            The format is designed for smooth acceptance by procurement teams,
            banks, insurers and public tender reviewers in multiple countries.
          </p>
        </section>

      </div>
    </div>
  );
      }
