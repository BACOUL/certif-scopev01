import type { Metadata } from "next";

/**
 * Certif-Scope public verification key (Ed25519)
 * This key is immutable and used to verify all attestations.
 */
const CERTIFSCOPE_PUBLIC_KEY_BASE64 =
  "MCowBQYDK2VwAyEAbKp2pg4wmzE5Kqo9tEwv7JJjxQyT2cBmwiLLHp4cSac=";

/* ======================================================
   SEO METADATA — TECHNICAL VERIFICATION
====================================================== */

export const metadata: Metadata = {
  title: "Technical Verification of a CO₂e Attestation — Certif-Scope",
  description:
    "Detailed technical guide for developers, auditors and IT teams to independently verify a Certif-Scope CO₂e attestation using offline cryptographic verification.",
  alternates: {
    canonical: "https://www.certif-scope.com/verify/technical",
  },
};

/* ======================================================
   PAGE
====================================================== */

export default function VerifyTechnicalPage() {
  return (
    <section
      id="verify-technical"
      className="max-w-7xl mx-auto px-6 pt-12 pb-24"
    >
      {/* HEADER */}
      <header className="mb-14">
        <p className="uppercase text-xs tracking-wider text-[#64748B] mb-3">
          CO₂e Attestation — Technical Verification
        </p>

        <h1 className="text-3xl md:text-4xl font-extrabold text-[#0B3A63] mb-6">
          Technical verification guide
        </h1>

        <p className="text-lg text-gray-700 leading-relaxed max-w-3xl">
          This page provides a complete, technical explanation of how to verify
          the authenticity and integrity of a Certif-Scope CO₂e attestation using
          standard cryptographic methods, without relying on any Certif-Scope
          server, API, or online service.
        </p>

        <div className="w-20 h-[2px] bg-gray-300 mt-10" />
      </header>

      <div className="max-w-4xl mx-auto space-y-16">

        {/* SECTION 1 — PRINCIPLE */}
        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            1. Verification model overview
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            Certif-Scope attestations are issued as <strong>digitally signed PDF
            documents</strong>. The PDF file itself is the only object required
            for verification.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            Certif-Scope does <strong>not</strong> operate:
          </p>

          <ul className="list-disc pl-6 text-gray-700 space-y-1">
            <li>a public registry of issued attestations</li>
            <li>an online validation service</li>
            <li>a verification API</li>
            <li>a recovery or lookup system for past documents</li>
          </ul>

          <p className="text-gray-700 leading-relaxed mt-4">
            Authenticity and integrity are verified exclusively using the
            cryptographic signature embedded in the PDF.
          </p>
        </section>

        {/* SECTION 2 — WHAT IS VERIFIED */}
        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            2. What is cryptographically verified
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            Verification confirms the following properties:
          </p>

          <ul className="list-disc pl-6 text-gray-700 space-y-1">
            <li>
              <strong>Integrity:</strong> the document content has not been
              altered since issuance
            </li>
            <li>
              <strong>Authenticity:</strong> the document was issued by
              Certif-Scope
            </li>
            <li>
              <strong>Uniqueness:</strong> the Attestation ID corresponds to the
              signed content
            </li>
          </ul>
        </section>

        {/* SECTION 3 — SIGNED PAYLOAD */}
        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            3. Signed canonical payload
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            Each attestation contains a deterministic, canonical payload that is
            cryptographically signed at issuance time.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            The payload includes, at minimum:
          </p>

          <ul className="list-disc pl-6 text-gray-700 space-y-1">
            <li>Issuer identifier (Certif-Scope)</li>
            <li>Attestation standard reference</li>
            <li>Attestation ID</li>
            <li>Entity name</li>
            <li>Country</li>
            <li>Reporting year</li>
            <li>Aggregated CO₂e result</li>
            <li>Issue date (ISO 8601)</li>
          </ul>

          <p className="text-gray-700 leading-relaxed mt-4">
            The payload is serialized deterministically before signing, ensuring
            reproducible verification across systems.
          </p>
        </section>

        {/* SECTION 4 — ROLE OF EACH ELEMENT */}
        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            4. Role of cryptographic elements
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full border border-gray-200 text-sm">
              <thead className="bg-[#F8FAFC]">
                <tr>
                  <th className="text-left px-4 py-2 border-b">Element</th>
                  <th className="text-left px-4 py-2 border-b">Purpose</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-4 py-2 border-b">Hash</td>
                  <td className="px-4 py-2 border-b">
                    Ensures the document content has not been modified
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-b">Signature</td>
                  <td className="px-4 py-2 border-b">
                    Proves the payload was signed by the issuer
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-b">Public key</td>
                  <td className="px-4 py-2 border-b">
                    Verifies that the signature originates from Certif-Scope
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2">Attestation ID</td>
                  <td className="px-4 py-2">
                    Deterministic identifier derived from the signed payload
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* SECTION 5 — PUBLIC KEY */}
        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            5. Certif-Scope public verification key
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            The following Ed25519 public key is used to verify all Certif-Scope
            attestations.
          </p>

          <pre className="bg-white border border-gray-300 rounded-md p-4 text-sm font-mono break-all text-gray-700">
{CERTIFSCOPE_PUBLIC_KEY_BASE64}
          </pre>

          <p className="text-xs text-gray-500 mt-3">
            This key is public, permanent, and immutable. It does not expire and
            does not depend on the availability of the Certif-Scope website.
          </p>
        </section>

        {/* SECTION 6 — OFFLINE VERIFICATION FLOW */}
        <section>
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-4">
            6. Offline verification workflow
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            A complete offline verification typically follows these steps:
          </p>

          <ol className="list-decimal pl-6 text-gray-700 space-y-2">
            <li>Obtain the original PDF attestation file</li>
            <li>Extract the signed payload and signature from the PDF</li>
            <li>Recompute the canonical payload representation</li>
            <li>Verify the signature using the public key above</li>
            <li>Confirm the Attestation ID matches the verified payload</li>
          </ol>

          <p className="text-gray-700 leading-relaxed mt-4">
            Any standard cryptographic library supporting Ed25519 can be used
            (OpenSSL, libsodium, BoringSSL, etc.).
          </p>
        </section>

        {/* FINAL NOTICE */}
        <section className="border-t border-gray-200 pt-10 text-sm text-gray-600 leading-relaxed">
          <p className="mb-4">
            <strong>Important:</strong> Certif-Scope does not retain copies of
            issued attestations. Loss of the original PDF prevents verification.
          </p>

          <p>
            Certif-Scope attestations are indicative, spend-based CO₂e estimates.
            They are not audits, certifications, or regulatory compliance
            reports, including CSRD or ESRS.
          </p>
        </section>

      </div>
    </section>
  );
      }
