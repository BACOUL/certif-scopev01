"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { internationalCopy } from "@/lib/international-copy";
import { paths } from "@/lib/site-locales";
export default function Success({
  locale,
  sessionId,
}: {
  locale: "en" | "de";
  sessionId: string | null;
}) {
  const c = internationalCopy[locale].success;
  const [type, setType] = useState<
    "loading" | "attestation" | "pack" | "error" | "missing"
  >(sessionId ? "loading" : "missing");
  const [downloading, setDownloading] = useState(false);
  const [error, setError] = useState("");
  useEffect(() => {
    if (!sessionId) return;
    let cancelled = false;
    (async () => {
      try {
        const res = await fetch(
          `/api/stripe/session-type?session_id=${encodeURIComponent(sessionId)}`,
        );
        if (!res.ok) throw new Error();
        const data = await res.json();
        if (!cancelled) setType(data.type === "pack" ? "pack" : "attestation");
      } catch {
        if (!cancelled) setType("error");
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [sessionId]);
  async function download() {
    if (!sessionId || downloading) return;
    setDownloading(true);
    setError("");
    try {
      const res = await fetch(
        `/api/attestation/issue?session_id=${encodeURIComponent(sessionId)}`,
      );
      if (
        !res.ok ||
        !res.headers.get("content-type")?.includes("application/pdf")
      )
        throw new Error();
      const url = URL.createObjectURL(await res.blob());
      const link = document.createElement("a");
      link.href = url;
      link.download = "certif-scope-attestation.pdf";
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.setTimeout(() => URL.revokeObjectURL(url), 60000);
    } catch {
      setError(c.downloadError);
    } finally {
      setDownloading(false);
    }
  }
  return (
    <section className="mx-auto max-w-3xl px-6 py-12">
      <div className="rounded-2xl border p-6 text-center shadow-sm md:p-10">
        <h1 className="text-3xl font-extrabold text-[#0B3A63]">
          {type === "attestation" || type === "pack" ? c.found : c.loading}
        </h1>
        {type === "loading" && <p className="mt-4">{c.preparing}</p>}
        {type === "missing" && <p className="mt-4">{c.missing}</p>}
        {type === "error" && <p className="mt-4">{c.error}</p>}
        {type === "pack" && (
          <p className="mt-4 leading-relaxed text-[#475569]">{c.pack}</p>
        )}
        {type === "attestation" && (
          <>
            <p className="mt-4 text-lg font-semibold text-[#0B3A63]">
              {c.ready}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-[#475569]">
              {c.archive}
            </p>
            <button
              type="button"
              disabled={downloading}
              aria-busy={downloading}
              onClick={download}
              className="mt-6 rounded-xl bg-[#0B3A63] px-6 py-3 font-semibold text-white disabled:opacity-60"
            >
              {downloading ? c.preparing : c.download}
            </button>
            <p className="mt-4 text-sm leading-relaxed text-[#475569]">
              {c.email}
            </p>
          </>
        )}
        {error && (
          <p role="alert" className="mt-4 text-red-700">
            {error}
          </p>
        )}
        <div className="mt-6 flex flex-wrap justify-center gap-5">
          <Link
            className="font-semibold text-[#0B3A63] underline"
            href={paths[locale].generate}
          >
            {c.another}
          </Link>
          <Link
            className="font-semibold text-[#0B3A63] underline"
            href={paths[locale].contact}
          >
            {internationalCopy[locale].nav.contact}
          </Link>
        </div>
      </div>
    </section>
  );
}
