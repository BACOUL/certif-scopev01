import type { Metadata } from "next";

/* ======================================================
   SEO METADATA — PRIVACY POLICY
====================================================== */

export const metadata: Metadata = {
  title: "Privacy Policy — Certif-Scope",
  description:
    "Privacy and ePrivacy policy explaining how Certif-Scope processes data under a strict privacy-by-design, no-tracking and data minimization approach.",
  alternates: {
    canonical: "https://www.certif-scope.com/privacy",
  },
  openGraph: {
    title: "Privacy Policy — Certif-Scope",
    description:
      "Privacy-by-design and GDPR-compliant data processing policy for Certif-Scope, including CO₂e calculation handling and ePrivacy principles.",
    url: "https://www.certif-scope.com/privacy",
    siteName: "Certif-Scope",
    type: "website",
  },
};

/* ======================================================
   PAGE
====================================================== */

export default function PrivacyPage() {
  return (
    <section
      id="privacy"
      data-section="privacy"
      className="max-w-7xl mx-auto px-6 pt-12 pb-24"
    >
      {/* JSON-LD — WebPage (LEGAL / PRIVACY) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Privacy Policy",
            url: "https://www.certif-scope.com/privacy",
            description:
              "Privacy and ePrivacy policy describing how Certif-Scope processes personal data under GDPR and privacy-by-design principles.",
            isPartOf: {
              "@type": "WebSite",
              name: "Certif-Scope",
              url: "https://www.certif-scope.com",
            },
          }),
        }}
      />

      {/* CANONICAL PAGE HEADER */}
      <header className="mb-14">
        <p className="uppercase text-xs tracking-wider text-[#64748B] mb-3">
          Data Protection & ePrivacy
        </p>

        <h1 className="text-3xl md:text-4xl font-extrabold text-[#0B3A63] mb-6">
          Privacy Policy
        </h1>

        <p className="text-lg text-gray-700 leading-relaxed max-w-3xl">
          This Privacy Policy explains how Certif-Scope processes personal and
          non-personal data in accordance with the GDPR and the EU ePrivacy
          Directive, following a strict privacy-by-design and data minimization
          approach.
        </p>

        <div className="w-20 h-[2px] bg-gray-300 mt-10" />
      </header>

      {/* CONTENT */}
      <div className="max-w-4xl space-y-14">

        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            1. Privacy-by-Design Principles
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Certif-Scope is designed to operate without user accounts, without
            behavioral tracking and without unnecessary data collection. Privacy
            by design and privacy by default are applied at all stages.
          </p>
          <ul className="list-disc ml-6 text-gray-700 space-y-2">
            <li>no user accounts or persistent profiles</li>
            <li>no advertising, profiling or behavioral tracking</li>
            <li>no third-party analytics or audience measurement</li>
            <li>no cookies requiring consent</li>
            <li>no storage of detailed financial input data</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            2. Data You Voluntarily Provide
          </h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            Depending on how you interact with Certif-Scope, you may voluntarily
            provide the following information:
          </p>
          <ul className="list-disc ml-6 text-gray-700 space-y-2">
            <li>email address when contacting support or making inquiries</li>
            <li>optional organization identification information</li>
            <li>annual spending (€) entered for CO₂e calculation</li>
            <li>content of messages sent via contact or support forms</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            3. CO₂e Calculation Processing
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            CO₂e calculations are performed locally in the user’s browser.
            Detailed financial inputs are processed on the user’s device and are
            not stored on Certif-Scope servers.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Only the final aggregated CO₂e result required to generate the
            attestation is transmitted. No detailed spending breakdowns are
            retained or logged.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            4. Cookies, Trackers and ePrivacy
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Certif-Scope does not use advertising cookies, tracking cookies or
            third-party analytics tools. The website does not rely on cookies
            requiring user consent under the EU ePrivacy Directive.
          </p>
          <ul className="list-disc ml-6 text-gray-700 space-y-2">
            <li>no marketing or analytics cookies</li>
            <li>no cross-site or behavioral tracking</li>
            <li>no cookie consent banner required</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mt-4">
            Any strictly necessary technical cookies, if used, are limited to
            essential site operation and do not store personal data.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            5. Data Storage and Retention
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Certif-Scope does not permanently store CO₂e calculation input data.
            Financial values are processed transiently in memory and discarded
            immediately after attestation generation.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Emails and support communications may be retained for up to twelve
            (12) months for operational and support purposes and can be deleted
            upon request.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            6. Data Sharing and Processors
          </h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            Certif-Scope does not sell, rent or monetize personal data. Limited
            processing may involve:
          </p>
          <ul className="list-disc ml-6 text-gray-700 space-y-2">
            <li>hosting and deployment infrastructure providers</li>
            <li>email delivery services</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mt-4">
            All processors operate under GDPR-compliant contractual safeguards.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            7. Your GDPR Rights
          </h2>
          <ul className="list-disc ml-6 text-gray-700 space-y-2">
            <li>right of access</li>
            <li>right to rectification</li>
            <li>right to erasure</li>
            <li>right to restriction of processing</li>
            <li>right to data portability</li>
            <li>right to object</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mt-4">
            To exercise your rights, contact:
            <br />
            <strong>contact@certif-scope.com</strong>
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            8. Security Measures
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Certif-Scope applies HTTPS encryption and standard technical and
            organizational measures to protect data against unauthorized access,
            alteration or disclosure.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            9. Policy Updates
          </h2>
          <p className="text-gray-700 leading-relaxed">
            This Privacy Policy may be updated to reflect legal, technical or
            operational changes. The latest version is always available on this
            page.
          </p>
        </section>

      </div>
    </section>
  );
      }
