import Breadcrumb from "@/components/Common/Breadcrumb";

export default function PrivacyPage() {
  return (
    <>
      <Breadcrumb
        pageName="Privacy Policy"
        description="How Certif-Scope processes, stores and protects your data."
      />

      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-6">

          <h2 className="text-2xl font-bold text-[#0B3A63] mb-6">
            Privacy Policy (GDPR Compliance)
          </h2>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-10">
            This Privacy Policy explains how Certif-Scope collects, processes and protects 
            personal data in accordance with the General Data Protection Regulation (GDPR).
            Certif-Scope is operated by Jeason Alexandre Bacoul (TimeProofs).
          </p>

          {/* DATA CONTROLLER */}
          <h3 className="text-xl font-semibold mb-4">1. Data Controller</h3>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            Certif-Scope is operated by:
            <br />
            <strong>Jeason Alexandre Bacoul — TimeProofs</strong><br />
            SIREN: 999356439<br />
            Address: 3 rue de l’Église de Louppy, 55000 Les Hauts-de-Chée, France<br />
            Email: <strong>contact@certif-scope.com</strong>
          </p>

          {/* PERSONAL DATA */}
          <h3 className="text-xl font-semibold mb-4">2. Personal Data We Collect</h3>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            Certif-Scope collects only the minimum necessary data to provide the attestation service:
          </p>

          <ul className="list-disc ml-6 text-gray-700 dark:text-gray-300 space-y-2 mb-6">
            <li>Company name (for attestation PDF)</li>
            <li>Sector and country (for estimation model)</li>
            <li>Optional contact email (if user enters it)</li>
            <li>Hash and attestation ID (for verification integrity)</li>
            <li>Technical logs necessary for security</li>
          </ul>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            No sensitive data is collected. No tracking cookies are used beyond those required 
            for security (session, anti-abuse).
          </p>

          {/* PURPOSES */}
          <h3 className="text-xl font-semibold mb-4">3. Purpose of Data Processing</h3>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            The collected data is used exclusively to:
          </p>

          <ul className="list-disc ml-6 text-gray-700 dark:text-gray-300 space-y-2 mb-10">
            <li>Generate a CO₂ attestation</li>
            <li>Compute the attestation integrity hash</li>
            <li>Provide public verification of authenticity</li>
            <li>Ensure platform security and prevent abuse</li>
            <li>Maintain proof of creation for compliance purposes</li>
          </ul>

          {/* DATA RETENTION */}
          <h3 className="text-xl font-semibold mb-4">4. Data Retention</h3>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-10">
            Attestations (ID + hash only) are stored indefinitely to preserve authenticity and 
            allow long-term verification. No commercial profiling, resale or advertising use 
            is performed.
          </p>

          {/* SHARING */}
          <h3 className="text-xl font-semibold mb-4">5. Data Sharing</h3>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-10">
            Certif-Scope does not sell or rent data.  
            Data may be shared only with:
          </p>

          <ul className="list-disc ml-6 text-gray-700 dark:text-gray-300 space-y-2 mb-10">
            <li>Hosting provider (Vercel)</li>
            <li>Payment processor (Stripe, if activated)</li>
            <li>Regulators if legally required</li>
          </ul>

          {/* RIGHTS */}
          <h3 className="text-xl font-semibold mb-4">6. User Rights (GDPR)</h3>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            You may exercise the following rights at any time:
          </p>

          <ul className="list-disc ml-6 text-gray-700 dark:text-gray-300 space-y-2 mb-10">
            <li>Right of access</li>
            <li>Right of rectification</li>
            <li>Right to deletion (where compatible with verification integrity)</li>
            <li>Right to object</li>
            <li>Right to data portability</li>
          </ul>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-10">
            Requests should be sent to:  
            <strong>contact@certif-scope.com</strong>
          </p>

          {/* SECURITY */}
          <h3 className="text-xl font-semibold mb-4">7. Security Measures</h3>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-10">
            Certif-Scope implements:
          </p>

          <ul className="list-disc ml-6 text-gray-700 dark:text-gray-300 space-y-2 mb-10">
            <li>HTTPS enforced end-to-end</li>
            <li>Hash-based document integrity</li>
            <li>Encrypted storage of identifiers</li>
            <li>No unnecessary personal data retention</li>
          </ul>

          {/* COOKIES */}
          <h3 className="text-xl font-semibold mb-4">8. Cookies</h3>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-10">
            This site uses only essential cookies required for security and functionality.
            No tracking, analytics or advertising cookies are used.
          </p>

          {/* UPDATES */}
          <h3 className="text-xl font-semibold mb-4">9. Policy Updates</h3>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-10">
            This Privacy Policy may be updated to comply with new legal obligations.
            The latest version is always available on this page.
          </p>

          {/* CONTACT */}
          <h3 className="text-xl font-semibold mb-4">10. Contact</h3>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-10">
            For any privacy-related inquiry, contact:
            <br />
            <strong>contact@certif-scope.com</strong>
          </p>

        </div>
      </section>
    </>
  );
            }
