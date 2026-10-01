"use client";

import { useState } from "react";
import Link from "next/link";
import { getEuFlowCopy, type EuNonCoreLocale } from "@/lib/eu-flow";

export default function EuSuccess({
  locale,
  sessionId,
}: {
  locale: EuNonCoreLocale;
  sessionId: string | null;
}) {
  const c = getEuFlowCopy(locale).success;
  const [downloading, setDownloading] = useState(false);
  const [error, setError] = useState("");

  async function download() {
    if (!sessionId || downloading) return;
    setDownloading(true);
    setError("");
    try {
      const response = await fetch(
        `/api/attestation/eu?session_id=${encodeURIComponent(sessionId)}`,
      );
      if (
        !response.ok ||
        !response.headers.get("content-type")?.includes("application/pdf")
      ) {
        throw new Error("PDF_UNAVAILABLE");
      }
      const url = URL.createObjectURL(await response.blob());
      const anchor = document.createElement("a");
      anchor.href = url;
      anchor.download = `certif-scope-attestation-${locale}.pdf`;
      document.body.appendChild(anchor);
      anchor.click();
      anchor.remove();
      window.setTimeout(() => URL.revokeObjectURL(url), 60_000);
    } catch {
      setError(c.error);
    } finally {
      setDownloading(false);
    }
  }

  return (
    <section className="mx-auto max-w-3xl px-6 py-12 md:px-8 md:py-16">
      <div className="rounded-3xl border border-[#0B3A63]/10 bg-white p-7 text-center shadow-sm md:p-10">
        <h1 className="text-3xl font-extrabold text-[#0B3A63]">{c.title}</h1>
        {!sessionId ? (
          <p className="mt-5 text-[#475569]">{c.missing}</p>
        ) : (
          <>
            <p className="mt-5 text-lg font-semibold text-[#0B3A63]">{c.ready}</p>
            <p className="mt-4 text-sm leading-relaxed text-[#475569]">{c.archive}</p>
            <button
              type="button"
              onClick={download}
              disabled={downloading}
              className="mt-7 inline-flex min-h-[52px] items-center justify-center rounded-xl bg-[#0B3A63] px-7 py-3 font-semibold text-white hover:bg-[#082C4B] disabled:opacity-60"
            >
              {downloading ? c.preparing : c.download}
            </button>
          </>
        )}
        {error && <p role="alert" className="mt-5 text-sm text-red-700">{error}</p>}
        <div className="mt-7">
          <Link className="font-semibold text-[#0B3A63] underline" href={`/${locale}/generate/`}>
            {c.another}
          </Link>
        </div>
      </div>
    </section>
  );
}
