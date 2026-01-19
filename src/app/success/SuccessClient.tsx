"use client";

import { useSearchParams } from "next/navigation";

export default function SuccessClient() {
  const searchParams = useSearchParams();
  const sessionId = searchParams?.get("session_id");

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

      {sessionId ? (
        <>
          <p className="text-sm text-gray-500">
            This attestation can only be downloaded once.
            <br />
            Please save it immediately after download.
          </p>

          <a
            href={`/api/attestation/download?session_id=${sessionId}`}
            className="inline-block bg-[#0B3A63] hover:bg-[#092f50] text-white font-semibold px-8 py-3 rounded-xl transition"
          >
            Download your attestation (PDF)
          </a>
        </>
      ) : (
        <p className="text-red-600">
          Missing session reference.
          <br />
          Please contact support.
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
