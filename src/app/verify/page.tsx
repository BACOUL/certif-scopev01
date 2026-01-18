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
      setError("Invalid attestation ID format.");
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
    } catch (err) {
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
          Verify Attestation
        </h1>

        <p className="text-lg text-gray-700 leading-relaxed max-w-2xl">
          Confirm that an attestation exists and was issued by Certif-Scope.
        </p>
      </header>

      {/* FORM */}
      <section className="max-w-xl mb-10">
        <label className="block mb-2 font-medium text-gray-800">
          Attestation ID
        </label>
        <input
          className="w-full p-3 border rounded-md bg-white border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0B3A63]"
          placeholder="e.g. CS-XXXXXXX"
          value={id}
          onChange={(e) => setId(e.target.value)}
          onFocus={resetState}
        />
      </section>

      <button
        onClick={() => verify()}
        disabled={loading}
        className="px-6 py-3 bg-[#0B3A63] text-white rounded-lg hover:bg-[#094366] disabled:opacity-50"
      >
        {loading ? "Verifying…" : "Verify"}
      </button>

      {/* RESULTS */}
      {error && (
        <p className="mt-6 text-red-600 font-medium">{error}</p>
      )}

      {result && (
        <div className="mt-10 p-6 border rounded-md bg-[#F8FAFC] border-gray-300">
          {result.valid ? (
            <>
              <h3 className="text-xl font-bold text-green-700 mb-3">
                ✔ Attestation found
              </h3>
              <p className="text-gray-700">
                This attestation exists and was issued by Certif-Scope.
              </p>
            </>
          ) : (
            <>
              <h3 className="text-xl font-bold text-red-700 mb-3">
                ✘ Attestation not found
              </h3>
              <p className="text-gray-700">
                The provided Attestation ID does not correspond to an issued
                attestation.
              </p>
            </>
          )}
        </div>
      )}
    </div>
  );
      }
