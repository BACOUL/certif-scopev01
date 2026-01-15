"use client";

import { useState, useEffect } from "react";

export default function VerifyPage() {
  const [id, setId] = useState("");
  const [hash, setHash] = useState("");
  const [result, setResult] = useState<null | { valid: boolean; item?: any }>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Load ID + hash from URL
  useEffect(() => {
    if (typeof window === "undefined") return;

    const params = new URLSearchParams(window.location.search);
    const qid = params.get("id");
    const qhash = params.get("hash");

    if (qid) setId(qid);
    if (qhash) setHash(qhash);

    if (qid && qhash && /^[a-f0-9]{64}$/i.test(qhash)) {
      verify(qid, qhash);
    }
  }, []);

  function resetErrors() {
    setError("");
    setResult(null);
  }

  async function verify(customId?: string, customHash?: string) {
    resetErrors();
    setLoading(true);

    const finalId = (customId || id).trim();
    const finalHash = (customHash || hash).trim().toLowerCase();

    // Basic validation
    if (finalId.length < 10) {
      setError("Invalid attestation ID.");
      setLoading(false);
      return;
    }
    if (!/^[a-f0-9]{64}$/i.test(finalHash)) {
      setError("Invalid hash format. Expected a 64-character SHA-256.");
      setLoading(false);
      return;
    }

    try {
      const endpoint = `/api/verify?id=${finalId}&hash=${finalHash}`;
      const res = await fetch(endpoint);
      const data = await res.json();

      if (!data || typeof data.valid === "undefined") {
        setError("Unexpected response from verification service.");
      } else {
        setResult(data);
      }
    } catch (err) {
      setError("Unable to verify attestation. Please try again later.");
    }

    setLoading(false);
  }

  return (
    <div className="max-w-7xl mx-auto px-6 pt-8 pb-24">

      {/* HEADER */}
      <div className="w-full mb-12">
        <h1 className="text-3xl md:text-4xl font-extrabold text-[#0B3A63] mb-4">
          Verify Attestation
        </h1>

        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed max-w-2xl">
          Enter the Attestation ID and the corresponding SHA-256 verification hash.
          This ensures the integrity of the document and confirms that it has not
          been modified since issuance.
        </p>
      </div>

      {/* FORM */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        <div>
          <label className="block mb-2 font-medium">Attestation ID</label>
          <input
            className="w-full p-3 border rounded-md bg-white dark:bg-gray-800 dark:border-gray-700"
            placeholder="e.g. CS-ATTEST-2024-000123"
            value={id}
            onChange={(e) => setId(e.target.value)}
            onFocus={resetErrors}
          />
        </div>

        <div>
          <label className="block mb-2 font-medium">SHA-256 Hash</label>
          <input
            className="w-full p-3 border rounded-md bg-white dark:bg-gray-800 dark:border-gray-700"
            placeholder="64-character hash"
            value={hash}
            onChange={(e) => setHash(e.target.value)}
            onFocus={resetErrors}
          />
        </div>
      </div>

      <button
        onClick={() => verify()}
        disabled={loading}
        className="px-6 py-3 bg-[#0B3A63] text-white rounded-lg hover:bg-[#094366] disabled:opacity-50"
      >
        {loading ? "Verifying..." : "Verify"}
      </button>

      {/* RESULTS */}
      {error && (
        <p className="mt-6 text-red-600 font-medium">{error}</p>
      )}

      {result && (
        <div className="mt-10 p-6 border rounded-md bg-[#F8FAFC] dark:bg-gray-800 dark:border-gray-700">
          {result.valid ? (
            <div>
              <h3 className="text-xl font-bold text-green-600 mb-3">
                ✔ Attestation is valid
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                The document integrity is confirmed. No modification detected.
              </p>

              {result.item && (
                <pre className="mt-6 bg-gray-900 text-white p-4 rounded-md overflow-x-auto text-sm">
                  {JSON.stringify(result.item, null, 2)}
                </pre>
              )}
            </div>
          ) : (
            <div>
              <h3 className="text-xl font-bold text-red-600 mb-3">
                ✘ Invalid attestation
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                The hash does not match or the ID is unknown.
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
