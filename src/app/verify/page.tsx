"use client";

import { useState, useEffect } from "react";

const CERTIFSCOPE_PUBLIC_KEY_BASE64 = `
MCowBQYDK2VwAyEAbKp2pg4wmzE5Kqo9tEwv7
JJjxQyT2cBmwiLLHp4cSac=
`.trim();

export default function VerifyPage() {
  const [id, setId] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  // Load ID from URL (?id=...)
  useEffect(() => {
    if (typeof window === "undefined") return;

    const params = new URLSearchParams(window.location.search);
    const qid = params.get("id");

    if (qid) {
      setId(qid);
      setSubmitted(true);
    }
  }, []);

  function resetState() {
    setError("");
    setSubmitted(false);
  }

  function submit(customId?: string) {
    resetState();

    const finalId = (customId || id).trim();

    // Strict canonical format validation
    if (!/^CS-[A-Za-z0-9_-]+$/.test(finalId)) {
      setError("Invalid Attestation ID format.");
      return;
    }

    setSubmitted(true);
  }

  return (
    <div className="max-w-6xl mx-auto px-6 pt-10 pb-24">
      {/* HEADER */}
      <header className="mb-12">
        <h1 className="text-3xl md:text-4xl font-extrabold text-[#0B3A63] mb-4">
          How to Verify a CO₂e Attestation
        </h1>

        <p className="text-lg text-gray-700 leading-relaxed max-w-3xl">
          Verification of a Certif-Scope CO₂e attestation is performed using the
          PDF document itself. This page does not perform any automated
          verification and does not access any registry or database.
        </p>
      </header>

      {/* FORM */}
      <section className="max-w-xl mb-6">
        <label className="block mb-2 font-medium text-gray-800">
          Attestation ID
        </label>
        <input
          className="w-full p-3 border rounded-md bg-white border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0B3A63]"
          placeholder="e.g. CS-XXXXXXXX"
          value={id}
          onChange={(e) => setId(e.target.value)}
          onFocus={resetState}
        />

        <p className="mt-3 text-sm text-gray-600">
          The Attestation ID is displayed on the PDF document and embedded in the
          QR code.
        </p>
      </section>

      <button
        onClick={() => submit()}
        className="px-6 py-3 bg-[#0B3A63] text-white rounded-lg hover:bg-[#094366]"
      >
        View verification instructions
      </button>

      {/* ERROR */}
      {error && (
        <p className="mt-6 text-red-600 font-medium">{error}</p>
      )}

      {/* INSTRUCTIONS */}
      {submitted && !error && (
        <div className="mt-10 p-6 border rounded-md bg-[#F8FAFC] border-gray-300 max-w-3xl">
          <h3 className="text-xl font-bold text-[#0B3A63] mb-4">
            Independent verification instructions
          </h3>

          <p className="text-gray-700 mb-4">
            Certif-Scope does not maintain a central registry of issued
            attestations. Authenticity and integrity are verified directly from
            the original PDF document.
          </p>

          <p className="text-gray-700 mb-4">
            To independently verify a Certif-Scope CO₂e attestation:
          </p>

          <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-1">
            <li>Obtain the original PDF attestation file.</li>
            <li>
              Locate the signed payload, Attestation ID, and digital signature
              embedded in the document.
            </li>
            <li>
              Verify the digital signature using Certif-Scope’s public
              verification key.
            </li>
            <li>
              Confirm that the Attestation ID matches the signed payload without
              alteration.
            </li>
          </ul>

          <p className="text-gray-700 mb-4">
            This verification can be performed entirely offline and remains
            possible even if Certif-Scope systems are unavailable.
          </p>

          <div className="mt-6">
            <h4 className="font-semibold text-gray-800 mb-2">
              Certif-Scope public verification key
            </h4>

            <pre className="text-sm bg-white border border-gray-300 rounded-md p-4 overflow-x-auto">
{CERTIFSCOPE_PUBLIC_KEY_BASE64}
            </pre>

            <p className="mt-2 text-sm text-gray-600">
              This public key is used to verify the digital signature of all
              Certif-Scope CO₂e attestations.
            </p>
          </div>
        </div>
      )}

      {/* LEGAL NOTICE */}
      <div className="mt-12 max-w-3xl text-sm text-gray-600 leading-relaxed">
        <p>
          <strong>Important notice.</strong> This page does not perform automated
          verification and does not validate data accuracy. It provides
          instructions for independent verification only. Certif-Scope
          attestations are indicative, spend-based CO₂e estimates and do not
          constitute an audit, certification, regulatory disclosure (including
          CSRD or ESRS), or assurance of user-provided information.
        </p>
      </div>
    </div>
  );
      }
