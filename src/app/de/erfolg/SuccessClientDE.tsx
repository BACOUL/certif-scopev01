"use client";

import { useEffect, useState } from "react";

type SuccessType =
  | "loading"
  | "attestation"
  | "pack"
  | "missing-session"
  | "error";

const nextSteps = [
  "Laden Sie Ihr PDF herunter.",
  "Speichern Sie es in Ihren Unterlagen.",
  "Geben Sie es nur weiter, wenn die Anfrage zu einer indikativen CO₂e-Bescheinigung passt.",
  "Bewahren Sie die Prüfkennung aus dem Dokument auf.",
];

export default function SuccessClientDE({
  sessionId: initialSessionId,
}: {
  sessionId: string | null;
}) {
  const [sessionId, setSessionId] = useState<string | null>(
    initialSessionId
  );
  const [type, setType] = useState<SuccessType>("loading");

  // ======================================================
  // SESSION ID RESOLUTION (SERVER -> CLIENT FALLBACK)
  // ======================================================
  useEffect(() => {
    if (sessionId) return;

    const params = new URLSearchParams(window.location.search);
    const sid = params.get("session_id");

    if (sid) {
      setSessionId(sid);
    } else {
      setType("missing-session");
    }
  }, [sessionId]);

  // ======================================================
  // STRIPE SESSION TYPE RESOLUTION (STRICT)
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
  // DOWNLOAD HANDLER - STRIPE ONLY
  // ======================================================
  const handleDownload = () => {
    if (!sessionId) return;
    window.location.href = `/api/attestation/issue?session_id=${sessionId}`;
  };

  // ======================================================
  // RENDER
  // ======================================================
  return (
    <section className="mx-auto w-full max-w-3xl space-y-6">
      <div className="rounded-2xl border border-[#0B3A63]/10 bg-white p-6 text-center shadow-sm md:p-10">
        <div className="mx-auto mb-5 h-1.5 w-16 rounded-full bg-[#1FB6C1]" />

        <h1 className="text-3xl font-extrabold text-[#0B3A63] md:text-4xl">
          Zahlung bestätigt
        </h1>

        {type === "loading" && (
          <p className="mt-4 text-[#0B3A63]/75">
            Ihre Bescheinigung wird vorbereitet...
          </p>
        )}

        {type === "attestation" && (
          <>
            <p className="mt-4 text-lg font-semibold text-[#0B3A63]">
              Ihre CO₂e-Bescheinigung ist bereit.
            </p>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-[#0B3A63]/75">
              Speichern Sie diese Datei sofort. Certif-Scope bewahrt keine
              wiederherstellbare Kopie des PDFs auf.
            </p>

            <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-[#0B3A63]/70">
              Nach dem Schließen dieser Seite kann das Dokument nicht
              automatisch erneut abgerufen werden. Bei Verlust kann je nach
              geltenden Bedingungen eine neue Ausstellung erforderlich sein.
            </p>

            <button
              type="button"
              onClick={handleDownload}
              className="mt-7 inline-flex w-full items-center justify-center rounded-xl bg-[#0B3A63] px-8 py-3 font-semibold text-white transition hover:opacity-90 sm:w-auto"
            >
              PDF-Bescheinigung herunterladen
            </button>
          </>
        )}

        {type === "pack" && (
          <>
            <p className="mt-4 text-lg font-semibold text-[#0B3A63]">
              Ihr Kauf ist bestätigt.
            </p>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-[#0B3A63]/75">
              Ihre Zugangsschlüssel wurden erzeugt und direkt nach der Zahlung
              per E-Mail versendet. Bewahren Sie sie sorgfältig auf.
            </p>

            <a
              href="/de/erstellen"
              className="mt-7 inline-flex w-full items-center justify-center rounded-xl bg-[#0B3A63] px-8 py-3 font-semibold text-white transition hover:opacity-90 sm:w-auto"
            >
              Weitere Bescheinigung erstellen
            </a>
          </>
        )}

        {type === "missing-session" && (
          <p className="mx-auto mt-5 max-w-xl text-sm font-semibold leading-relaxed text-[#0B3A63]">
            Diese Zahlungssitzung konnte nicht gefunden werden.
          </p>
        )}

        {type === "error" && (
          <p className="mx-auto mt-5 max-w-xl text-sm font-semibold leading-relaxed text-[#0B3A63]">
            Das Dokument ist nicht verfügbar. Prüfen Sie bitte, ob die Zahlung
            bestätigt wurde.
          </p>
        )}
      </div>

      {type === "attestation" && (
        <>
          <div className="rounded-2xl border border-[#0B3A63]/10 bg-white p-6 shadow-sm md:p-7">
            <h2 className="text-xl font-bold text-[#0B3A63]">
              Jetzt erledigen
            </h2>

            <ul className="mt-5 space-y-3 text-sm leading-relaxed text-[#0B3A63]/75">
              {nextSteps.map((step) => (
                <li key={step} className="flex gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#1FB6C1]" />
                  <span>{step}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-[#0B3A63]/10 bg-white p-6 shadow-sm md:p-7">
            <h2 className="text-xl font-bold text-[#0B3A63]">
              Hinweis zum Umfang
            </h2>

            <p className="mt-4 text-sm leading-relaxed text-[#0B3A63]/75">
              Diese Bescheinigung ist indikativ, nicht regulatorisch, nicht
              extern geprüft und ersetzt keine umfassende Klimabilanz. Sie
              dient als einfache dokumentarische Antwort, wenn keine
              verpflichtende Methode vorgegeben ist.
            </p>
          </div>
        </>
      )}

      <div className="rounded-2xl border border-[#0B3A63]/10 bg-white p-6 text-center shadow-sm">
        <p className="text-sm leading-relaxed text-[#0B3A63]/70">
          Die detaillierten Angaben werden nicht für Marketing-Tracking
          verwendet. Certif-Scope bewahrt keine wiederherstellbare Kopie der
          PDFs auf.
        </p>

        <div className="mt-5 flex flex-col justify-center gap-3 sm:flex-row">
          <a
            href="/de/"
            className="inline-flex w-full items-center justify-center rounded-xl border border-[#0B3A63]/20 px-6 py-3 text-sm font-semibold text-[#0B3A63] transition hover:bg-[#F8FAFC] sm:w-auto"
          >
            Zur Startseite
          </a>

          {type !== "pack" && (
            <a
              href="/de/erstellen"
              className="inline-flex w-full items-center justify-center rounded-xl border border-[#0B3A63]/20 px-6 py-3 text-sm font-semibold text-[#0B3A63] transition hover:bg-[#F8FAFC] sm:w-auto"
            >
              Weitere Bescheinigung erstellen
            </a>
          )}
        </div>
      </div>

      {type === "error" && (
        <p className="text-center text-sm leading-relaxed text-[#0B3A63]/70">
          Der Download konnte nicht gestartet werden. Bitte versuchen Sie es
          erneut von dieser Seite aus.
        </p>
      )}
    </section>
  );
}
