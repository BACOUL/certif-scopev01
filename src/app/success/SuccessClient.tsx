"use client";

import { useEffect, useState } from "react";

type SuccessType = "loading" | "attestation" | "pack" | "error";

export default function SuccessClient({
  sessionId: initialSessionId,
}: {
  sessionId: string | null;
}) {
  const [sessionId, setSessionId] = useState<string | null>(
    initialSessionId
  );
  const [type, setType] = useState<SuccessType>("loading");

  // ======================================================
  // RESOLUTION SESSION ID (SERVER → CLIENT FALLBACK)
  // ======================================================
  useEffect(() => {
    if (sessionId) return;

    const params = new URLSearchParams(window.location.search);
    const sid = params.get("session_id");

    if (sid) {
      setSessionId(sid);
    }
  }, [sessionId]);

  // ======================================================
  // DETECTION TYPE (PACK vs ATTESTATION)
  // ======================================================
  useEffect(() => {
    if (!sessionId) return;

    let cancelled = false;

    (async () => {
      try {
        const res = await fetch(
          `/api/stripe/session-type?session_id=${sessionId}`
        );

        if (!res.ok) throw new Error();

        const data = await res.json();

        if (!cancelled) {
          setType(data.type === "pack" ? "pack" : "attestation");
        }
      } catch {
        if (!cancelled) setType("error");
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [sessionId]);

  // ======================================================
  // ACTIONS
  // ======================================================
  const handleDownload = () => {
    if (!sessionId) return;
    window.location.href = `/api/attestation/issue?session_id=${sessionId}`;
  };

  // ======================================================
  // RENDER
  // ======================================================
  return (
    <section className="max-w-xl w-full bg-white border border-gray-200 rounded-2xl shadow-sm p-10 text-center space-y-6">
      <h1 className="text-3xl font-extrabold text-[#0B3A63]">
        Payment successful
      </h1>

      {type === "loading" && (
        <p className="text-gray-600">
          Finalizing your order…
        </p>
      )}

      {type === "attestation" && (
        <>
          <p className="text-gray-600 text-lg">
            Your CO₂e attestation is ready.
          </p>

          <p className="text-sm text-gray-500">
            This attestation can only be generated once.
            <br />
            Please download and store it immediately.
          </p>

          <button
            onClick={handleDownload}
            className="inline-block bg-[#0B3A63] hover:bg-[#092f50] text-white font-semibold px-8 py-3 rounded-xl transition"
          >
            Download your attestation (PDF)
          </button>
        </>
      )}

      {type === "pack" && (
        <>
          <p className="text-gray-600 text-lg">
            Your access keys have been generated.
          </p>

          <p className="text-sm text-gray-500 leading-relaxed">
            Your keys were sent by email immediately after payment.
            <br />
            Please check your inbox and store them securely.
          </p>
        </>
      )}

      {type === "error" && (
        <p className="text-sm text-red-600">
          Unable to determine order type.
          <br />
          Please contact support.
        </p>
      )}

      <div className="text-sm text-gray-500 pt-6">
        No data is stored.
        <br />
        Certif-Scope does not keep a copy of documents.
      </div>

      <div className="pt-4">
        <a
          href="/"
          className="inline-block text-[#0B3A63] underline text-sm"
        >
          Return to homepage
        </a>
      </div>
    </section>
  );
                  }
