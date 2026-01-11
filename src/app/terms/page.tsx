import Breadcrumb from "@/components/Common/Breadcrumb";

export default function TermsPage() {
  return (
    <>
      <Breadcrumb
        pageName="Terms of Service"
        description="Conditions of use and legal responsibilities for Certif-Scope."
      />

      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-6">

          <h2 className="text-2xl font-bold text-[#0B3A63] mb-6">
            Terms of Service (TOS)
          </h2>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-10">
            By using Certif-Scope, you agree to the following Terms of Service. 
            These terms govern access and usage of the platform and attestation
            services. Certif-Scope is operated by Jeason Alexandre Bacoul (TimeProofs).
          </p>

          {/* SECTION 1 */}
          <h3 className="text-xl font-semibold mb-4">1. Service Description</h3>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-10">
            Certif-Scope provides instant CO₂ estimations and certified attestation
            PDFs based on a standardized methodology. The platform generates:
          </p>

          <ul className="list-disc ml-6 text-gray-700 dark:text-gray-300 space-y-2 mb-10">
            <li>CO₂ estimations based on declared inputs</li>
            <li>PDF attestation documents</li>
            <li>Unique attestation ID and cryptographic hash</li>
            <li>Verification link via QR code</li>
          </ul>

          {/* SECTION 2 */}
          <h3 className="text-xl font-semibold mb-4">2. Declarative Nature of Data</h3>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-10">
            Certif-Scope relies exclusively on information provided by the user.
            You are responsible for the accuracy of input data. Certif-Scope does 
            not verify or audit submitted information and shall not be held liable 
            for misuse or inaccuracies resulting from user declarations.
          </p>

          {/* SECTION 3 */}
          <h3 className="text-xl font-semibold mb-4">3. No Legal Certification Authority</h3>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-10">
            Certif-Scope is not a government body, not a qualified legal certifier,
            and not a regulated carbon auditor. Attestations are informational and 
            may be accepted by institutions at their discretion.
          </p>

          {/* SECTION 4 */}
          <h3 className="text-xl font-semibold mb-4">4. Payment & Pricing</h3>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            Payment is executed per attestation, at a fixed rate of 49€. 
            No subscription is required. Payments are processed securely via Stripe.
          </p>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-10">
            Once a PDF attestation is generated, it cannot be refunded due to the 
            irreversible nature of digital document issuance.
          </p>

          {/* SECTION 5 */}
          <h3 className="text-xl font-semibold mb-4">5. Intellectual Property</h3>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-10">
            All software, documentation and branding associated with Certif-Scope 
            are the exclusive property of the operator. No reproduction, resale, 
            redistribution or unauthorized commercial use is permitted.
          </p>

          {/* SECTION 6 */}
          <h3 className="text-xl font-semibold mb-4">6. Limitation of Liability</h3>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-10">
            Certif-Scope is provided “as is,” without warranties of any kind. The 
            operator is not responsible for:
          </p>

          <ul className="list-disc ml-6 text-gray-700 dark:text-gray-300 space-y-2 mb-10">
            <li>misinterpretation of results by third parties</li>
            <li>institutional rejection of an attestation</li>
            <li>incorrect data provided by the user</li>
            <li>temporary unavailability of the service</li>
          </ul>

          {/* SECTION 7 */}
          <h3 className="text-xl font-semibold mb-4">7. Attestation Verification</h3>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-10">
            Each attestation includes:
          </p>

          <ul className="list-disc ml-6 text-gray-700 dark:text-gray-300 space-y-2 mb-10">
            <li>a unique ID</li>
            <li>a SHA-256 hash ensuring integrity</li>
            <li>a permanent verification link</li>
          </ul>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-10">
            Certif-Scope aims to maintain long-term integrity but does not guarantee
            perpetual hosting in case of external failures beyond its control.
          </p>

          {/* SECTION 8 */}
          <h3 className="text-xl font-semibold mb-4">8. User Responsibilities</h3>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-10">
            Users agree not to:
          </p>

          <ul className="list-disc ml-6 text-gray-700 dark:text-gray-300 space-y-2 mb-10">
            <li>misuse the platform for fraudulent or illegal activities</li>
            <li>forge attestation documents</li>
            <li>bypass verification systems</li>
            <li>attempt to reverse engineer or attack the service</li>
          </ul>

          {/* SECTION 9 */}
          <h3 className="text-xl font-semibold mb-4">9. Termination of Access</h3>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-10">
            Certif-Scope may suspend access to users who engage in misuse,
            security threats or violations of these Terms.
          </p>

          {/* SECTION 10 */}
          <h3 className="text-xl font-semibold mb-4">10. Modifications</h3>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-10">
            Certif-Scope reserves the right to update these Terms at any time.
            Continued use of the service implies acceptance of the latest version.
          </p>

          {/* SECTION 11 */}
          <h3 className="text-xl font-semibold mb-4">11. Contact</h3>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            For any questions related to these Terms, contact:
            <br />
            <strong>contact@certif-scope.com</strong>
          </p>

        </div>
      </section>
    </>
  );
      }
