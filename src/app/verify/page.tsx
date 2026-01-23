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
    // Informational page only
  }, []);

  return (
    <section
      id="verify"
      data-section="verify"
      className="max-w-7xl mx-auto px-6 pt-12 pb-24"
    >
      {/* TOP ANCHOR */}
      <div id="top" />

      {/* CANONICAL PAGE HEADER — IDENTICAL TO ALL SECONDARY PAGES */}
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

      {/* CONTENT — CANONICAL WIDTH */}
      <div className="max-w-4xl mx-auto">

        {/* INTRO */}
        <section className="mb-12">
          <p className="text-gray-700 leading-relaxed">
            Certif-Scope attestations are issued as digitally signed PDF documents.
            The PDF file itself is the only verifiable object.
          </p>

          <p className="text-gray-700 leading-relaxed mt-4">
            Certif-Scope does not operate a public registry, online validator, or
            verification API. Authenticity and integrity are verified directly
            from the document, without relying on Certif-Scope systems.
          </p>
        </section>

        {/* STEP 1 */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-3">
            1. Download the attestation PDF
          </h2>

          <p className="text-gray-700 leading-relaxed">
            Obtain the original PDF file containing the attestation.
            If you arrived on this page by scanning a QR code, the QR code points
            to this explanation page, not to a validation service.
          </p>

          <p className="text-gray-700 leading-relaxed mt-3">
            Only the original PDF document can be verified. Screenshots, printed
            copies, or modified files cannot be authenticated.
          </p>
        </section>

        {/* STEP 2 */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-3">
            2. Verify the digital signature
          </h2>

          <p className="text-gray-700 leading-relaxed mb-3">
            Each Certif-Scope attestation PDF contains:
          </p>

          <ul className="list-disc pl-6 text-gray-700 space-y-1">
            <li>A canonical signed payload describing the attestation</li>
            <li>A digital signature generated at issuance</li>
            <li>A unique Attestation ID printed on the document</li>
          </ul>

          <p className="text-gray-700 leading-relaxed mt-4">
            To verify the attestation independently:
          </p>

          <ul className="list-disc pl-6 text-gray-700 space-y-1 mt-2">
            <li>Extract the signed payload and the signature from the PDF</li>
            <li>
              Verify the signature using the Certif-Scope public verification key
              shown below
            </li>
            <li>
              Confirm that the Attestation ID printed on the document matches the
              signed payload
            </li>
          </ul>

          <p className="text-gray-700 leading-relaxed mt-4">
            If the signature verification succeeds and the document content has
            not been altered, the attestation is authentic.
          </p>
        </section>

        {/* PRACTICAL NOTE */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-3">
            Practical verification
          </h2>

          <p className="text-gray-700 leading-relaxed">
            In practice, most recipients rely on internal compliance, audit, or IT
            tools capable of verifying Ed25519 digital signatures on signed
            documents.
          </p>

          <p className="text-gray-700 leading-relaxed mt-3">
            Verification can be performed entirely offline and does not require
            access to Certif-Scope systems. Verification remains possible even if
            Certif-Scope becomes unavailable.
          </p>
        </section>

        {/* PUBLIC KEY */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#0B3A63] mb-3">
            Certif-Scope public verification key
          </h2>

          <p className="text-gray-700 leading-relaxed mb-3">
            The following public key is used to verify the digital signature of all
            Certif-Scope attestations.
          </p>

          <pre className="text-sm bg-white border border-gray-300 rounded-md p-4 overflow-x-auto whitespace-pre-wrap break-all">
{CERTIFSCOPE_PUBLIC_KEY_BASE64}
          </pre>

          <p className="mt-3 text-sm text-gray-600">
            Algorithm: Ed25519<br />
            This key is public, permanent, and does not change.
          </p>
        </section>

        {/* IMPORTANT NOTICE */}
        <div className="text-sm text-gray-600 leading-relaxed">
          <p>
            <strong>Important notice.</strong> This page does not perform automated
            verification and does not validate user-provided data. It provides
            instructions for independent verification only.
          </p>

          <p className="text-sm text-gray-600 mt-3">
            Certif-Scope does not maintain a registry of issued attestations. Verification uses only the provided PDF and embedded signature.
            Requests for re-issuance of lost documents must be made to support; recovery of previously issued attestations from Certif-Scope systems is not possible.
          </p>

          <p className="mt-3">
            Certif-Scope attestations are indicative, spend-based CO₂e estimates.
            They do not constitute an audit, certification, regulatory compliance
            (including CSRD or ESRS), or assurance engagement.
          </p>
        </div>

      </div>
    </section>
  );
}
