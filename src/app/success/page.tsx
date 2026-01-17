"use client";

import { useEffect, useState } from "react";

export default function SuccessPage() {
  const [status, setStatus] = useState<"loading" | "pending" | "ready">("loading");
  const [attestationUrl, setAttestationUrl] = useState<string | null>(null);

  useEffect(() => {
    const checkStatus = async () => {
      try {
        const res = await fetch("/api/attestation/status", {
          cache: "no-store",
        });
        const data = await res.json();

        if (data.status === "ready") {
          setStatus("ready");
          setAttestationUrl(data.url);
        } else {
          setStatus("pending");
        }
      } catch {
        setStatus("pending");
      }
    };

    checkStatus();
    const interval = setInterval(checkStatus, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen bg-[#F8FAFC] flex items-start justify-center px-6 pt-24">
      <section className="max-w-xl w-full bg-white border border-gray-200 rounded-2xl shadow-sm p-10 text-center space-y-6">

        <h1 className="text-3xl font-extrabold text-[#0B3A63]">
          Payment successful
        </h1>

        <p className="text-gray-600 text-lg leading-relaxed">
          Your payment has been confirmed.
          <br />
          Your CO₂e attestation has been generated.
        </p>

        {status !== "ready" && (
          <p className="text-red-600 font-medium">
            Your attestation is not available yet.
            <br />
            Please refresh this page in a few seconds.
          </p>
        )}

        {status === "ready" && attestationUrl && (
          <div className="pt-4">
            <a
              href={attestationUrl}
              className="inline-block bg-[#15B097] hover:bg-[#10907c] text-white font-semibold px-8 py-3 rounded-xl transition"
            >
              View my attestation
            </a>
          </div>
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
