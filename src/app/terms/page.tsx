import type { Metadata } from "next";

/* ======================================================
   SEO METADATA — TERMS OF SERVICE
====================================================== */

export const metadata: Metadata = {
  title: "Terms of Service — Certif-Scope",
  description:
    "Terms of Service governing the use of Certif-Scope, including service scope, pricing, responsibilities, privacy-by-design principles and applicable law.",
  alternates: {
    canonical: "https://www.certif-scope.com/terms",
  },
  openGraph: {
    title: "Terms of Service — Certif-Scope",
    description:
      "Contractual terms governing the use of Certif-Scope and the issuance of indicative spend-based CO₂e attestations.",
    url: "https://www.certif-scope.com/terms",
    siteName: "Certif-Scope",
    type: "website",
  },
};

/* ======================================================
   PAGE
====================================================== */

export default function TermsPage() {
  return (
    <section
      id="terms"
      data-section="terms"
      className="max-w-7xl mx-auto px-6 pt-12 pb-24"
    >
      {/* JSON-LD — WebPage (LEGAL / TERMS) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Terms of Service",
            url: "https://www.certif-scope.com/terms",
            description:
              "Terms of Service governing the use of Certif-Scope and the issuance of CO₂e attestations.",
            isPartOf: {
              "@type": "WebSite",
              name: "Certif-Scope",
              url: "https://www.certif-scope.com",
            },
          }),
        }}
      />

      {/* TOP ANCHOR */}
      <div id="top" />

      {/* CANONICAL PAGE HEADER */}
      <header className="mb-14">
        <p className="uppercase text-xs tracking-wider text-[#64748B] mb-3">
          CO₂e Attestation — Legal
        </p>

        <h1 className="text-3xl md:text-4xl font-extrabold text-[#0B3A63] mb-6">
          Terms of Service
        </h1>

        <p className="text-lg text-gray-700 leading-relaxed max-w-3xl">
          These Terms of Service govern the use of Certif-Scope and the issuance
          of standardized CO₂e Attestations. By generating an Attestation, the
          user acknowledges having read and accepted these Terms in full.
        </p>

        <div className="w-20 h-[2px] bg-gray-300 mt-10" />
      </header>

      {/* CONTENT */}
      <div className="max-w-4xl mx-auto space-y-14">

        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            1. Purpose
          </h2>
          <p className="text-gray-700 leading-relaxed">
            These Terms define the contractual framework applicable to the use
            of the Certif-Scope service, which provides indicative spend-based
            CO₂e Attestations generated from annual financial expenditure data
            provided by the user.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            2. Service Description
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Certif-Scope converts annual spending (€) into an indicative CO₂e
            value using a deterministic spend-based calculation model. The
            service delivers a downloadable PDF Attestation that includes:
          </p>
          <ul className="list-disc ml-6 text-gray-700 space-y-2">
            <li>an aggregated indicative CO₂e result</li>
            <li>a standardized institutional-grade PDF format</li>
            <li>a unique Attestation identifier</li>
            <li>a verification link and QR code</li>
            <li>embedded integrity and authenticity safeguards</li>
            <li>dataset name and version used</li>
            <li>a stated validity period of one (1) year</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mt-4">
            The Attestation is not a certification, not a CSRD or ESRS report,
            not a greenhouse gas audit, and not a regulated emissions inventory.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            3. Pricing and Payment
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Pricing is fixed per Attestation. No subscription applies. The
            applicable price is displayed on the Pricing page at the time of
            purchase.
          </p>
          <p className="text-gray-700 leading-relaxed mt-3">
            Payments are processed through Stripe. VAT does not apply in
            accordance with the French VAT exemption regime (Article 293B of the
            French General Tax Code).
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            4. Service Delivery
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Upon confirmation of payment, the Attestation is generated
            immediately and made available to the user as a downloadable PDF.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            5. Reissuance and Lost Attestations
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Certif-Scope does not store issued Attestations or underlying
            financial data after issuance. Users are responsible for archiving
            their Attestation PDF.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Re-issuance may be granted at Certif-Scope’s discretion and will
            generate a new identifier and validity period.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            6. No Right of Withdrawal
          </h2>
          <p className="text-gray-700 leading-relaxed">
            In accordance with EU Directive 2011/83/EU, the right of withdrawal
            does not apply to fully executed digital services.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            7. User Responsibilities
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Users are solely responsible for the accuracy of provided data and
            the context in which the Attestation is used.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            8. Limitation of Liability
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Certif-Scope cannot be held liable for misuse, misinterpretation or
            decisions taken by third parties based on the Attestation.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            9. Intellectual Property
          </h2>
          <p className="text-gray-700 leading-relaxed">
            All content and document structures are protected by intellectual
            property laws.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            10. Data Protection and ePrivacy
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Certif-Scope applies strict privacy-by-design principles. Full
            details are provided in the Privacy Policy.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            11. Modification of the Terms
          </h2>
          <p className="text-gray-700 leading-relaxed">
            These Terms may be updated at any time. The latest version always
            prevails.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            12. Applicable Law and Jurisdiction
          </h2>
          <p className="text-gray-700 leading-relaxed">
            These Terms are governed by French law. French courts have exclusive
            jurisdiction.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            13. Contact
          </h2>
          <p className="text-gray-700 leading-relaxed">
            For contractual inquiries, contact:
            <br />
            <strong>contact@certif-scope.com</strong>
          </p>
        </section>

      </div>
    </section>
  );
            }
