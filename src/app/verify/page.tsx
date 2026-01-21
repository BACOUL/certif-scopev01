"use client";

import { useEffect } from "react";

/**
 * Certif-Scope public verification key (Ed25519)
 * Public, permanent, immutable.
 * Used to verify the digital signature of all Certif-Scope attestations.
 */
const CERTIFSCOPE_PUBLIC_KEY_BASE64 =
  "MCowBQYDK2VwAyEAbKp2pg4wmzE5Kqo9tEwv7JJjxQyT2cBmwiLLHp4cSac=";

export default function VerifyPage() {
  useEffect(() => {
    // This page is intentionally informational only.
    // No automated verification is performed.
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-6 pt-12 pb-28">
      {/* HEADER */}
      <header className="mb-14">
        <h1 className="text-3xl md:text-4xl font-extrabold text-[#0B3A63] mb-5">
          Verify a CO₂e Attestation
        </h1>

        <p className="text-lg text-gray-700 leading-relaxed max-w-3xl">
          This page explains how to independently verify the authenticity and
          integrity of a CO₂e attestation issued by Certif-Scope.
        </p>

        <p className="text-gray-700 leading-relaxed max-w-3xl mt-4">
          <strong>The PDF document itself is the only verifiable object.</strong>{" "}
          Certif-Scope does not operate a central registry, API, or online
          verification service.
        </p>
      </header>

      {/* STEP 1 */}
      <section className="mb-12 max-w-3xl">
        <h2 className="text-xl font-bold text-[#0B3A63] mb-3">
          Step 1 — Download the original PDF
        </h2>

        <p className="text-gray-700 leading-relaxed">
          The Certif-Scope attestation is issued as a digitally signed PDF
          document.
        </p>

        <p className="text-gray-700 leading-relaxed mt-3">
          If you reached this page by scanning a QR code, make sure you have
          downloaded the original PDF file provided by the entity.
        </p>

        <p className="text-gray-700 leading-relaxed mt-3">
          Any copy, screenshot, or re-generated version of the document cannot
          be verified.
        </p>
      </section>

      {/* STEP 2 */}
      <section className="mb-12 max-w-3xl">
        <h2 className="text-xl font-bold text-[#0B3A63] mb-3">
          Step 2 — Locate the verification data in the PDF
        </h2>

        <p className="text-gray-700 leading-relaxed mb-3">
          The PDF contains a section titled <strong>“Verification & Integrity”</strong>.
        </p>

        <p className="text-gray-700 leading-relaxed mb-3">
          This section includes:
        </p>

        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          <li>A canonical signed payload (structured content)</li>
          <li>A digital signature (Base64)</li>
          <li>The signature algorithm (Ed25519)</li>
          <li>A unique Attestation ID</li>
        </ul>

        <p className="text-gray-700 leading-relaxed mt-4">
          Copy these values exactly as displayed in the PDF.
        </p>
      </section>

      {/* STEP 3 */}
      <section className="mb-12 max-w-3xl">
        <h2 className="text-xl font-bold text-[#0B3A63] mb-3">
          Step 3 — Verify the digital signature
        </h2>

        <p className="text-gray-700 leading-relaxed mb-3">
          Verification is performed offline using standard cryptographic tools
          such as OpenSSL, Node.js, Python, or equivalent.
        </p>

        <p className="text-gray-700 leading-relaxed mb-3">
          The process is as follows:
        </p>

        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          <li>Extract the canonical payload from the PDF</li>
          <li>Extract the digital signature from the PDF</li>
          <li>Verify the signature using the Certif-Scope public key</li>
        </ul>

        <p className="text-gray-700 leading-relaxed mt-4">
          If the signature verification succeeds, the document was issued by
          Certif-Scope and has not been altered since issuance.
        </p>
      </section>

      {/* STEP 4 */}
      <section className="mb-12 max-w-3xl">
        <h2 className="text-xl font-bold text-[#0B3A63] mb-3">
          Step 4 — Confirm the Attestation ID
        </h2>

        <p className="text-gray-700 leading-relaxed">
          Ensure that the Attestation ID printed on the document matches the
          Attestation ID contained inside the signed payload.
        </p>

        <p className="text-gray-700 leading-relaxed mt-3">
          Any mismatch indicates that the document content has been modified and
          must be considered invalid.
        </p>
      </section>

      {/* PUBLIC KEY */}
      <section className="mb-14 max-w-3xl">
        <h2 className="text-xl font-bold text-[#0B3A63] mb-3">
          Certif-Scope public verification key
        </h2>

        <p className="text-gray-700 leading-relaxed mb-3">
          The following public key is used to verify the digital signature of all
          Certif-Scope attestations:
        </p>

        <pre className="text-sm bg-white border border-gray-300 rounded-md p-4 overflow-x-auto break-all">
{CERTIFSCOPE_PUBLIC_KEY_BASE64}
        </pre>

        <p className="mt-3 text-sm text-gray-600">
          Algorithm: Ed25519<br />
          This key is public, permanent, and does not change.
        </p>
      </section>

      {/* CONCLUSION */}
      <section className="max-w-3xl mb-14">
        <h2 className="text-xl font-bold text-[#0B3A63] mb-3">
          Verification outcome
        </h2>

        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          <li>Valid signature → document issued by Certif-Scope</li>
          <li>Unmodified payload → document integrity preserved</li>
          <li>Matching Attestation ID → authenticity confirmed</li>
          <li>Any failure → attestation is not valid</li>
        </ul>
      </section>

      {/* LEGAL NOTICE */}
      <div className="max-w-3xl text-sm text-gray-600 leading-relaxed">
        <p>
          <strong>Important notice.</strong> This page does not perform any
          automated verification and does not validate user-provided data. It
          provides instructions for independent verification only.
        </p>

        <p className="mt-3">
          Certif-Scope attestations are indicative, spend-based CO₂e estimates.
          They do not constitute an audit, certification, regulatory compliance
          (including CSRD or ESRS), or assurance engagement.
        </p>

        <p className="mt-3">
          Verification remains possible without access to Certif-Scope systems
          and even if Certif-Scope becomes unavailable.
        </p>
      </div>
    </div>
  );
}
