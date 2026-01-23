"use client";

import { useEffect, useState } from "react";

export default function SuccessClient({
  sessionId: initialSessionId,
}: {
  sessionId: string | null;
}) {
  // ======================================================
  // SOURCE DE VÉRITÉ ROBUSTE — SERVER + CLIENT
  // - Si le server n’a rien passé, on relit l’URL côté client
  // - AUCUNE UX BLOQUANTE
  // ======================================================
  const [sessionId, setSessionId] = useState<string | null>(
    initialSessionId
  );

  useEffect(() => {
    if (sessionId) return;

    const params = new URLSearchParams(window.location.search);
    const sid = params.get("session_id");

    if (sid && typeof sid === "string") {
      setSessionId(sid);
    }
  }, [sessionId]);

  const handleDownload = () => {
    if (!sessionId) return;
    window.location.href = `/api/attestation/issue?session_id=${sessionId}`;
  };

  return (
    <section className="max-w-xl w-full bg-white border border-gray-200 rounded-2xl shadow-sm p-10 text-center space-y-6">
      <h1 className="text-3xl font-extrabold text-[#0B3A63]">
        Payment successful
      </h1>

      <p className="text-gray-600 text-lg leading-relaxed">
        Your payment has been confirmed.
        <br />
        Your CO₂e attestation is ready.
      </p>

      {/* ======================================================
          DOWNLOAD ZONE — ROBUSTE (SERVER OU CLIENT)
      ====================================================== */}
      {sessionId ? (
        <>
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
      ) : (
        <p className="text-sm text-gray-500 leading-relaxed">
          Finalizing your attestation…
          <br />
          If this screen does not update, please refresh the page.
        </p>
      )}

      <div className="text-sm text-gray-500 pt-4 leading-relaxed">
        No data is stored.
        <br />
        Certif-Scope does not keep a copy of your attestation.
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
