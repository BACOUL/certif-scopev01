"use client";

import { useEffect, useState } from "react";

type SuccessType =
  | "loading"
  | "attestation"
  | "pack"
  | "missing-session"
  | "error";

const nextSteps = [
  "Téléchargez votre PDF.",
  "Sauvegardez-le dans vos documents.",
  "Transmettez-le uniquement si la demande correspond à une attestation CO₂e indicative.",
  "Conservez l’identifiant de vérification présent dans le document.",
];

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
  // SESSION ID RESOLUTION (SERVER → CLIENT FALLBACK)
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
  // DOWNLOAD HANDLER — STRIPE ONLY
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
          Paiement confirmé
        </h1>

        {type === "loading" && (
          <p className="mt-4 text-[#0B3A63]/75">
            Préparation de votre attestation…
          </p>
        )}

        {type === "attestation" && (
          <>
            <p className="mt-4 text-lg font-semibold text-[#0B3A63]">
              Votre attestation CO₂e est prête.
            </p>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-[#0B3A63]/75">
              Conservez ce fichier immédiatement. Certif-Scope ne garde pas de
              copie récupérable du PDF.
            </p>

            <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-[#0B3A63]/70">
              Après fermeture de cette page, le document ne pourra pas être
              récupéré automatiquement. En cas de perte, une réémission peut
              être nécessaire selon les conditions applicables.
            </p>

            <button
              type="button"
              onClick={handleDownload}
              className="mt-7 inline-flex w-full items-center justify-center rounded-xl bg-[#0B3A63] px-8 py-3 font-semibold text-white transition hover:opacity-90 sm:w-auto"
            >
              Télécharger mon attestation PDF
            </button>
          </>
        )}

        {type === "pack" && (
          <>
            <p className="mt-4 text-lg font-semibold text-[#0B3A63]">
              Votre achat est confirmé.
            </p>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-[#0B3A63]/75">
              Vos clés d’accès ont été générées et envoyées par email
              immédiatement après paiement. Conservez-les soigneusement.
            </p>

            <a
              href="/fr/generate"
              className="mt-7 inline-flex w-full items-center justify-center rounded-xl bg-[#0B3A63] px-8 py-3 font-semibold text-white transition hover:opacity-90 sm:w-auto"
            >
              Générer une autre attestation
            </a>
          </>
        )}

        {type === "missing-session" && (
          <p className="mx-auto mt-5 max-w-xl text-sm font-semibold leading-relaxed text-[#0B3A63]">
            Impossible de retrouver cette session de paiement.
          </p>
        )}

        {type === "error" && (
          <p className="mx-auto mt-5 max-w-xl text-sm font-semibold leading-relaxed text-[#0B3A63]">
            Le document n’est pas disponible. Vérifiez que le paiement a bien
            été confirmé.
          </p>
        )}
      </div>

      {type === "attestation" && (
        <>
          <div className="rounded-2xl border border-[#0B3A63]/10 bg-white p-6 shadow-sm md:p-7">
            <h2 className="text-xl font-bold text-[#0B3A63]">
              À faire maintenant
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
              Rappel de périmètre
            </h2>

            <p className="mt-4 text-sm leading-relaxed text-[#0B3A63]/75">
              Cette attestation est indicative, non auditée, non réglementaire,
              non CSRD/ESRS et ne remplace pas un bilan carbone complet. Elle
              sert à répondre à une demande documentaire simple lorsqu’aucune
              méthode obligatoire n’est imposée.
            </p>
          </div>
        </>
      )}

      <div className="rounded-2xl border border-[#0B3A63]/10 bg-white p-6 text-center shadow-sm">
        <p className="text-sm leading-relaxed text-[#0B3A63]/70">
          Les données détaillées ne sont pas utilisées à des fins de tracking
          marketing. Certif-Scope ne garde pas de copie récupérable des PDF.
        </p>

        <div className="mt-5 flex flex-col justify-center gap-3 sm:flex-row">
          <a
            href="/fr/"
            className="inline-flex w-full items-center justify-center rounded-xl border border-[#0B3A63]/20 px-6 py-3 text-sm font-semibold text-[#0B3A63] transition hover:bg-[#F8FAFC] sm:w-auto"
          >
            Retour à l’accueil
          </a>

          {type !== "pack" && (
            <a
              href="/fr/generate"
              className="inline-flex w-full items-center justify-center rounded-xl border border-[#0B3A63]/20 px-6 py-3 text-sm font-semibold text-[#0B3A63] transition hover:bg-[#F8FAFC] sm:w-auto"
            >
              Générer une autre attestation
            </a>
          )}
        </div>
      </div>

      {type === "error" && (
        <p className="text-center text-sm leading-relaxed text-[#0B3A63]/70">
          Le téléchargement n’a pas pu être lancé. Veuillez réessayer depuis
          cette page.
        </p>
      )}
    </section>
  );
}
