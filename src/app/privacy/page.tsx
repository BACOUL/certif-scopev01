export const metadata = {
  title: "Privacy Policy — Certif-Scope",
  description: "Privacy and data protection policy for Certif-Scope.",
};

export default function PrivacyPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 pt-8 pb-24">

      {/* HEADER UNIFORME */}
      <div className="w-full mb-12">
        <h1 className="text-3xl md:text-4xl font-extrabold text-[#0B3A63] mb-4">
          Privacy Policy
        </h1>

        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed max-w-3xl">
          This Privacy Policy explains how Certif-Scope collects, processes and protects
          personal and non-personal data. We follow GDPR requirements and apply a strict
          minimal-data principle.
        </p>
      </div>

      {/* CONTENT */}
      <div className="max-w-4xl mx-auto space-y-12">

        {/* SECTION 1 */}
        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">1. Data Collection Principles</h2>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            Certif-Scope applies a “privacy-by-design” and “data minimization” approach.
            We only collect the information strictly necessary for:
          </p>

          <ul className="list-disc ml-6 text-gray-700 dark:text-gray-300 space-y-2">
            <li>communication with users</li>
            <li>attestation generation and delivery</li>
            <li>verification of attestation integrity</li>
            <li>security and fraud prevention</li>
          </ul>
        </section>

        {/* SECTION 2 */}
        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">2. Data You Provide</h2>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            The following data may be voluntarily submitted by users:
          </p>

          <ul className="list-disc ml-6 text-gray-700 dark:text-gray-300 space-y-2 mt-3">
            <li>email address (for communication)</li>
            <li>company name or identifier (optional)</li>
            <li>annual spending amount (€) for the attestation</li>
            <li>message or contact request content</li>
          </ul>
        </section>

        {/* SECTION 3 */}
        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">3. Data Automatically Collected</h2>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
            For security and statistical purposes, we may log:
          </p>

          <ul className="list-disc ml-6 text-gray-700 dark:text-gray-300 space-y-2">
            <li>IP address (anonymized when possible)</li>
            <li>browser and device information</li>
            <li>pages visited and interactions (non-personal analytics)</li>
          </ul>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
            We do not use invasive tracking or advertising cookies.
          </p>
        </section>

        {/* SECTION 4 */}
        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">4. How We Use the Data</h2>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Personal and technical data is used for:
          </p>

          <ul className="list-disc ml-6 text-gray-700 dark:text-gray-300 space-y-2 mt-3">
            <li>responding to user messages and support requests</li>
            <li>generating and delivering CO₂e attestations</li>
            <li>validating cryptographic integrity during verification</li>
            <li>operating and securing the website</li>
          </ul>
        </section>

        {/* SECTION 5 */}
        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">5. Data Storage & Retention</h2>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            Certif-Scope does not permanently store attestation input data.
            Spending values are processed temporarily in memory only during document generation.
          </p>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Emails and contact messages may be retained for support purposes but can be
            deleted upon request.
          </p>
        </section>

        {/* SECTION 6 */}
        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">6. Sharing of Information</h2>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            We do not sell, rent or share personal data with third parties.
            Data may be shared only with:
          </p>

          <ul className="list-disc ml-6 text-gray-700 dark:text-gray-300 space-y-2 mt-3">
            <li>technical hosting providers (Vercel)</li>
            <li>email service providers for contact replies</li>
          </ul>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
            These providers operate under GDPR-compliant agreements.
          </p>
        </section>

        {/* SECTION 7 */}
        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">7. GDPR Rights</h2>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
            You have the following rights under the GDPR:
          </p>

          <ul className="list-disc ml-6 text-gray-700 dark:text-gray-300 space-y-2">
            <li>Right of access</li>
            <li>Right to rectification</li>
            <li>Right to deletion</li>
            <li>Right to portability</li>
            <li>Right to restrict processing</li>
            <li>Right to object</li>
          </ul>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
            To exercise your rights, contact us at:
            <br />
            <strong>contact@certif-scope.com</strong>
          </p>
        </section>

        {/* SECTION 8 */}
        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">8. Security Measures</h2>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            We implement standard security measures including HTTPS encryption, firewalls,
            access control, and protection against unauthorized access or disclosure.
          </p>
        </section>

        {/* SECTION 9 */}
        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">9. Updates to This Policy</h2>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            We may update this Privacy Policy to reflect technical or legal changes.
            Users will be notified in case of major modifications.
          </p>
        </section>

      </div>
    </div>
  );
}
