export const metadata = {
  title: "Terms of Service — Certif-Scope",
  description:
    "Conditions Générales de Vente (CGV) applicables au service Certif-Scope.",
};

export default function TermsPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 pt-8 pb-24">

      {/* HEADER UNIFORME */}
      <div className="w-full mb-12">
        <h1 className="text-3xl md:text-4xl font-extrabold text-[#0B3A63] mb-4">
          Terms of Service
        </h1>

        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          These Terms of Service govern access and use of the Certif-Scope
          platform. By generating an attestation, you accept all conditions below.
        </p>
      </div>

      {/* CONTENT BODY */}
      <div className="max-w-4xl mx-auto text-left space-y-12">

        {/* SECTION 1 */}
        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            1. Purpose
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            These Terms of Service define the contractual framework between the
            operator and the user regarding the generation of digital CO₂e
            attestations through the Certif-Scope platform.
          </p>
        </section>

        {/* SECTION 2 */}
        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            2. Service Description
          </h2>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            Certif-Scope converts user-provided annual spending (€) into an
            indicative CO₂e attestation following a deterministic spend-based
            calculation. The attestation includes:
          </p>

          <ul className="list-disc ml-6 text-gray-700 dark:text-gray-300 space-y-2">
            <li>instant CO₂e estimation</li>
            <li>downloadable institutional-grade PDF</li>
            <li>verification URL + QR code</li>
            <li>cryptographic hash integrity check</li>
          </ul>

          <p className="text-gray-700 dark:text-gray-300 mt-4 leading-relaxed">
            The attestation is not a CSRD/ESRS disclosure, not a regulatory
            GHG inventory and not an audit.
          </p>
        </section>

        {/* SECTION 3 */}
        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            3. Pricing & Payment
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            The service is billed per issued attestation at a fixed price of
            <strong> 49€ </strong>. No subscription and no recurring fees apply.
          </p>
        </section>

        {/* SECTION 4 */}
        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            4. Delivery of the Service
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Attestations are generated instantly upon payment. Delivery consists
            of a downloadable PDF and a permanent verification link.
          </p>
        </section>

        {/* SECTION 5 */}
        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            5. No Right of Withdrawal
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Under EU law for digital services executed immediately, the right of
            withdrawal does not apply once the attestation has been generated.
          </p>
        </section>

        {/* SECTION 6 */}
        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            6. User Responsibilities
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            The user is fully responsible for:
          </p>

          <ul className="list-disc ml-6 text-gray-700 dark:text-gray-300 space-y-2">
            <li>providing correct annual spending data</li>
            <li>the interpretation of the document by third parties</li>
            <li>use of the attestation within its intended scope</li>
          </ul>
        </section>

        {/* SECTION 7 */}
        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            7. Limitation of Liability
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            The operator cannot be held liable for:
          </p>

          <ul className="list-disc ml-6 text-gray-700 dark:text-gray-300 space-y-2">
            <li>incorrect or incomplete spending data provided by the user</li>
            <li>consequences of institutional decisions based on the document</li>
            <li>misuse outside procurement/compliance workflows</li>
            <li>interpretation by third parties</li>
          </ul>
        </section>

        {/* SECTION 8 */}
        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            8. Intellectual Property
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            All content, layout, logo, PDF design and verification structure are
            protected by intellectual property laws. Any reproduction is
            prohibited without written authorization.
          </p>
        </section>

        {/* SECTION 9 */}
        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            9. Data Protection
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Certif-Scope processes only the data strictly necessary to generate
            the attestation. No spending data is stored after generation. For
            more details, refer to the Privacy Policy.
          </p>
        </section>

        {/* SECTION 10 */}
        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            10. Applicable Law
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            These Terms of Service are governed by French law. Any dispute
            falls under the jurisdiction of French courts.
          </p>
        </section>

        {/* SECTION 11 */}
        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            11. Contact
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            For legal inquiries, contact:<br />
            <strong>contact@certif-scope.com</strong>
          </p>
        </section>
      </div>
    </div>
  );
}
