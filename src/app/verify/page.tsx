import type { Metadata } from "next";
import Link from "next/link";

/**
 * Certif-Scope public verification key (Ed25519)
 * This key is immutable and used to verify all attestations.
 */
const CERTIFSCOPE_PUBLIC_KEY_BASE64 =
  "MCowBQYDK2VwAyEAbKp2pg4wmzE5Kqo9tEwv7JJjxQyT2cBmwiLLHp4cSac=";

/* ======================================================
   SEO METADATA — VERIFY PAGE (CANONICAL)
====================================================== */

export const metadata: Metadata = {
  title: "Verify a CO₂e Attestation — Certif-Scope",
  description:
    "Learn how to independently verify the authenticity and integrity of a Certif-Scope CO₂e attestation using standard PDF tools or manual cryptographic verification.",
  alternates: {
    canonical: "https://www.certif-scope.com/verify",
  },
  openGraph: {
    title: "Verify a CO₂e Attestation — Certif-Scope",
    description:
      "Independent verification of Certif-Scope CO₂e attestations using digitally signed PDF documents.",
    url: "https://www.certif-scope.com/verify",
    siteName: "Certif-Scope",
    type: "website",
  },
};

/* ======================================================
   PAGE
====================================================== */

export default function VerifyPage() {
  return (
    <section
      id="verify"
      data-section="verify"
      className="max-w-7xl mx-auto px-6 pt-12 pb-24"
    >
      {/* JSON-LD — WebPage (STRICT) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Verify a CO₂e Attestation",
            url: "https://www.certif-scope.com/verify",
            description:
              "Instructions to independently verify the authenticity and integrity of a Certif-Scope CO₂e attestation.",
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
          CO₂e Attestation — Verification
        </p>

        <h1 className="text-3xl md:text-4xl font-extrabold text-[#0B3A63] mb-6">
          Verify a CO₂e Attestation
        </h1>

        <p className="text-lg text-gray-700 leading-relaxed max-w-3xl">
          This page explains how to independently verify the authenticity and
          integrity of a CO₂e attestation issued by Certif-Scope, without relying
          on any online validation service.
        </p>

        <div className="w-20 h-[2px] bg-gray-300 mt-10" />
      </header>

      {/* CONTENT */}
      <div className="max-w-4xl mx-auto">
        {/* INTRO */}
        <section className="mb-10">
          <p className="text-gray-700 leading-relaxed">
            Certif-Scope attestations are issued as digitally signed PDF documents.
            The PDF file itself is the only verifiable object.
          </p>

          <p className="text-gray-700 leading-relaxed mt-4">
            Certif-Scope does not operate a public registry, online validator, or
            verification API. Authenticity and integrity are verified directly
            from the document.
          </p>

          {/* TECH LINK — DISCREET, FOR EXPERTS */}
          <p className="mt-4 text-sm text-gray-600">
            Looking for technical verification details?{" "}
            <Link
              href="/verify/technical"
              className="text-[#0B3A63] underline underline-offset-4 hover:no-underline"
            >
              Technical verification documentation
            </Link>
          </p>
        </section>

        {/* VALIDITY NOTICE */}
        <section className="mb-12">
          <div className="bg-[#F8FAFC] border-l-4 border-[#0B3A63] p-4">
            <p className="text-sm text-gray-700 leading-relaxed">
              <strong>Validity of the attestation:</strong> This attestation is
              valid for <strong>12 months from its issue date</strong>, as
              indicated in the document. After this period, the document remains
              technically verifiable but should be considered expired for
              current-use purposes.
            </p>
          </div>
        </section>

        {/* STEP 1 */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-3">
            1. Download the attestation PDF
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Obtain the original PDF file containing the attestation. Only the
            original PDF document can be verified. Screenshots, printed copies,
            or modified files cannot be authenticated.
          </p>
        </section>

        {/* STEP 2 */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-3">
            2. Verify with standard tools
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            To verify the embedded digital signature, you can use any standard
            PDF viewer supporting digital signatures (e.g., Adobe Acrobat,
            Foxit, or similar).
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            Open the signed PDF, locate the signature panel and select “Validate
            Signature” to confirm that the document has not been altered and
            that the signature is valid.
          </p>

          <div className="bg-[#F8FAFC] border-l-4 border-[#0B3A63] p-4">
            <p className="text-sm text-gray-700">
              This verification confirms both the{" "}
              <strong>authenticity</strong> of the signer (Certif-Scope) and the{" "}
              <strong>integrity</strong> of the signed content — ensuring it has
              not been modified since issuance.
            </p>
          </div>
        </section>

        {/* STEP 3 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-3">
            3. Advanced / Manual verification
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            For advanced verification or integration into automated compliance
            workflows, you may verify the Ed25519 signature directly using the
            public key below.
          </p>

          <ul className="list-disc pl-6 text-gray-700 space-y-1 mb-6">
            <li>Extract the signed payload and the signature from the PDF</li>
            <li>Verify the signature using the public key below</li>
            <li>Confirm the Attestation ID matches the signed payload</li>
          </ul>

          <p className="text-sm font-semibold text-gray-800 mb-2">
            Certif-Scope Public Verification Key (Ed25519)
          </p>

          <pre className="text-sm bg-white border border-gray-300 rounded-md p-4 overflow-x-auto break-all whitespace-pre-wrap text-gray-600 font-mono">
{CERTIFSCOPE_PUBLIC_KEY_BASE64}
          </pre>

          <p className="mt-2 text-xs text-gray-500">
            This key is public, permanent, and does not change.
          </p>
        </section>

        {/* FINAL NOTICE */}
        <div className="text-sm text-gray-600 leading-relaxed border-t border-gray-200 pt-8">
          <p className="mb-3">
            <strong>Important notice:</strong> Certif-Scope does not maintain a
            registry of issued attestations. Verification uses only the provided
            PDF and its embedded signature. Requests for re-issuance of lost
            attestations must be made to support; recovery of previously issued
            attestations from Certif-Scope systems is not possible.
          </p>

          <p className="mb-4">
            Certif-Scope attestations are indicative, spend-based CO₂e estimates.
            They do not constitute an audit, certification, regulatory
            compliance (including CSRD or ESRS), or assurance engagement.
          </p>

          {/* FINAL TECH LINK — COMPLIANCE / AUDIT READERS */}
          <p className="text-xs">
            Technical verification and cryptographic details are available{" "}
            <Link
              href="/verify/technical"
              className="text-[#0B3A63] underline underline-offset-4 hover:no-underline"
            >
              here
            </Link>.
          </p>
        </div>
      </div>
    </section>
  );
        }
