"use client";

import { useState, useEffect } from "react";

export default function VerifyPage() {
  const [id, setId] = useState("");
  const [result, setResult] = useState<null | { valid: boolean }>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Load ID from URL (?id=...)
  useEffect(() => {
    if (typeof window === "undefined") return;

    const params = new URLSearchParams(window.location.search);
    const qid = params.get("id");

    if (qid) {
      setId(qid);
      verify(qid);
    }
  }, []);

  function resetState() {
    setError("");
    setResult(null);
  }

  async function verify(customId?: string) {
    resetState();
    setLoading(true);

    const finalId = (customId || id).trim();

    // Strict canonical format validation
    if (!/^CS-[A-Za-z0-9_-]+$/.test(finalId)) {
      setError("Invalid Attestation ID format.");
      setLoading(false);
      return;
    }

    try {
      const res = await fetch(
        `/api/verify?id=${encodeURIComponent(finalId)}`
      );

      if (!res.ok) {
        throw new Error("Verification service unavailable");
      }

      const data = await res.json();

      if (typeof data.valid !== "boolean") {
        throw new Error("Unexpected verification response");
      }

      setResult({ valid: data.valid });
    } catch {
      setError(
        "Unable to verify this attestation at the moment. Please try again later."
      );
    }

    setLoading(false);
  }

  return (
    <div className="max-w-6xl mx-auto px-6 pt-10 pb-24">
      {/* HEADER */}
      <header className="mb-12">
        <h1 className="text-3xl md:text-4xl font-extrabold text-[#0B3A63] mb-4">
          Verify a CO₂e Attestation
        </h1>

        <p className="text-lg text-gray-700 leading-relaxed max-w-2xl">
          Verify the existence and authenticity of a CO₂e attestation issued by
          Certif-Scope.
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
          The Attestation ID is displayed on the CO₂e Attestation PDF and embedded
          in the QR code.
        </p>
      </section>

      <button
        onClick={() => verify()}
        disabled={loading}
        className="px-6 py-3 bg-[#0B3A63] text-white rounded-lg hover:bg-[#094366] disabled:opacity-50"
      >
        {loading ? "Verifying…" : "Verify attestation"}
      </button>

      {/* RESULTS */}
      {error && (
        <p className="mt-6 text-red-600 font-medium">{error}</p>
      )}

      {result && (
        <div className="mt-10 p-6 border rounded-md bg-[#F8FAFC] border-gray-300 max-w-xl">
          {result.valid ? (
            <>
              <h3 className="text-xl font-bold text-green-700 mb-3">
                Attestation verified
              </h3>
              <p className="text-gray-700">
                This attestation exists and was issued by Certif-Scope. Its
                integrity has not been altered since issuance.
              </p>
            </>
          ) : (
            <>
              <h3 className="text-xl font-bold text-red-700 mb-3">
                Attestation not found
              </h3>
              <p className="text-gray-700">
                The provided Attestation ID does not correspond to a valid
                Certif-Scope attestation.
              </p>
            </>
          )}
        </div>
      )}

      {/* LEGAL NOTICE */}
      <div className="mt-12 max-w-2xl text-sm text-gray-600 leading-relaxed">
        <p>
          <strong>Important notice.</strong> This verification confirms the
          existence and integrity of an attestation only. It does not imply
          audit, certification, regulatory compliance (including CSRD or ESRS),
          or validation of user-provided data. The attestation represents an
          indicative, spend-based CO₂e estimate.
        </p>
      </div>
    </div>
  );
      }
