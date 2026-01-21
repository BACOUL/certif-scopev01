"use client";

import { useEffect } from "react";

/**
 * Certif-Scope public verification key (Ed25519)
 * This key is immutable and used to verify all attestations.
 */
const CERTIFSCOPE_PUBLIC_KEY_BASE64 = `
MCowBQYDK2VwAyEAbKp2pg4wmzE5Kqo9tEwv7
JJjxQyT2cBmwiLLHp4cSac=
`.trim();

export default function VerifyPage() {
  useEffect(() => {
    // Nothing to verify automatically.
    // This page is intentionally informational only.
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-6 pt-10 pb-24">
      {/* HEADER */}
      <header className="mb-12">
        <h1 className="text-3xl md:text-4xl font-extrabold text-[#0B3A63] mb-4">
          Verify a CO₂e Attestation
        </h1>

        <p className="text-lg text-gray-700 leading-relaxed max-w-3xl">
          This page explains how to independently verify the authenticity and
          integrity of a CO₂e attestation issued by Certif-Scope.
        </p>
      </header>

      {/* STEP 1 */}
      <section className="mb-10 max-w-3xl">
        <h2 className="text-xl font-bold text-[#0B3A63] mb-3">
          1. Download the attestation PDF
        </h2>

        <p className="text-gray-700 leading-relaxed">
          The Certif-Scope attestation is a signed PDF document.  
          The PDF itself is the only verifiable object.
        </p>

        <p className="text-gray-700 leading-relaxed mt-3">
          If you arrived on this page by scanning a QR code, please download the
          original PDF file that contains the attestation.
        </p>
      </section>

      {/* STEP 2 */}
      <section className="mb-10 max-w-3xl">
        <h2 className="text-xl font-bold text-[#0B3A63] mb-3">
          2. Verify the digital signature
        </h2>

        <p className="text-gray-700 leading-relaxed mb-3">
          Each Certif-Scope attestation contains:
        </p>

        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          <li>A canonical signed payload</li>
          <li>A digital signature</li>
          <li>A unique Attestation ID</li>
        </ul>

        <p className="text-gray-700 leading-relaxed mt-4">
          To verify the attestation:
        </p>

        <ul className="list-disc pl-6 text-gray-700 space-y-1 mt-2">
          <li>Extract the signed payload and signature from the PDF</li>
          <li>Verify the signature using the Certif-Scope public key</li>
          <li>Ensure the Attestation ID matches the signed payload</li>
        </ul>

        <p className="text-gray-700 leading-relaxed mt-4">
          If the signature verification succeeds and the document has not been
          altered, the attestation is valid.
        </p>
      </section>

      {/* PUBLIC KEY */}
      <section className="mb-12 max-w-3xl">
        <h2 className="text-xl font-bold text-[#0B3A63] mb-3">
          Certif-Scope public verification key
        </h2>

        <p className="text-gray-700 leading-relaxed mb-3">
          The following public key is used to verify the digital signature of all
          Certif-Scope attestations.
        </p>

        <pre className="text-sm bg-white border border-gray-300 rounded-md p-4 overflow-x-auto">
{CERTIFSCOPE_PUBLIC_KEY_BASE64}
        </pre>

        <p className="mt-3 text-sm text-gray-600">
          Algorithm: Ed25519  
          This key is public, permanent, and does not change.
        </p>
      </section>

      {/* IMPORTANT NOTICE */}
      <div className="max-w-3xl text-sm text-gray-600 leading-relaxed">
        <p>
          <strong>Important notice.</strong> This page does not perform any
          automated verification and does not validate user data. It provides
          instructions for independent verification only.
        </p>

        <p className="mt-3">
          Certif-Scope attestations are indicative, spend-based CO₂e estimates.
          They do not constitute an audit, certification, regulatory compliance
          (including CSRD or ESRS), or assurance engagement.
        </p>
      </div>
    </div>
  );
}
