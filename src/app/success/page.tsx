"use client";

import { useEffect, useState } from "react";

export const metadata = {
  title: "Payment successful — Certif-Scope",
  description:
    "Your payment was successful. Your CO₂e attestation is ready for download.",
};

export default function SuccessPage() {
  const [attestationId, setAttestationId] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchLatest() {
      try {
        const res = await fetch("/attestations/latest.json", {
          cache: "no-store",
        });

        if (!res.ok) throw new Error("No attestation yet");

        const data = await res.json();
        setAttestationId(data.attestationId);
      } catch {
        setAttestationId(null);
      } finally {
        setLoading(false);
      }
    }

    fetchLatest();
  }, []);

  return (
    <main className="min-h-screen bg-[#F8FAFC] px-6 pt-20">
      <section className="max-w-xl mx-auto bg-white border border-gray-200 rounded-2xl shadow-sm p-10 text-center space-y-8">

        <h1 className="text-3xl font-extrabold text-[#0B3A63]">
          Payment successful
        </h1>

        <p className="text-gray-600 text-lg leading-relaxed">
          Your payment has been confirmed.
          <br />
          Your CO₂e attestation has been generated.
        </p>

        {loading && (
          <p className="text-sm text-gray-500">
            Checking attestation status…
          </p>
        )}

        {!loading && attestationId && (
          <div className="space-y-3">
            <a
              href={`/attestations/${attestationId}.txt`}
              target="_blank"
              className="inline-block w-full bg-[#15B097] hover:bg-[#129c85] text-white font-semibold px-6 py-4 rounded-xl transition"
            >
              Download your attestation
            </a>

            <p className="text-xs text-gray-500">
              Attestation ID: {attestationId}
            </p>
          </div>
        )}

        {!loading && !attestationId && (
          <p className="text-sm text-red-600">
            Your attestation is not available yet.
            <br />
            Please refresh this page in a few seconds.
          </p>
        )}

        <div className="pt-6">
          <a
            href="/"
            className="inline-block bg-[#0B3A63] hover:bg-[#092f50] text-white font-semibold px-8 py-3 rounded-xl transition"
          >
            Return to homepage
          </a>
        </div>

      </section>
    </main>
  );
}
