"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

export default function SuccessPage() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get("session_id");

  const [status, setStatus] = useState<"loading" | "done" | "error">("loading");

  useEffect(() => {
    if (!sessionId) {
      setStatus("error");
      return;
    }

    const download = async () => {
      try {
        const res = await fetch("/api/attestation/download", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ sessionId }),
        });

        if (!res.ok) throw new Error("Download failed");

        const blob = await res.blob();
        const url = window.URL.createObjectURL(blob);

        const a = document.createElement("a");
        a.href = url;
        a.download = "certif-scope-attestation.pdf";
        document.body.appendChild(a);
        a.click();
        a.remove();

        window.URL.revokeObjectURL(url);
        setStatus("done");
      } catch {
        setStatus("error");
      }
    };

    download();
  }, [sessionId]);

  return (
    <main className="min-h-screen bg-[#F8FAFC] flex items-center justify-center px-6">
      <section className="max-w-xl w-full bg-white border border-gray-200 rounded-2xl shadow-sm p-10 text-center space-y-6">

        <h1 className="text-3xl font-extrabold text-[#0B3A63]">
          Payment successful
        </h1>

        {status === "loading" && (
          <p className="text-gray-600">
            Your attestation is being generated…
          </p>
        )}

        {status === "done" && (
          <p className="text-gray-600">
            Your attestation has been downloaded.
            <br />
            Please keep it safely.
          </p>
        )}

        {status === "error" && (
          <p className="text-red-600">
            An error occurred.
            <br />
            Please contact support.
          </p>
        )}

      </section>
    </main>
  );
}
