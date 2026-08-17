"use client";

import { track } from "@vercel/analytics";
import Link from "next/link";
import { useRef, useState } from "react";

import {
  analyzeRequest,
  MAX_REQUEST_LENGTH,
  MIN_REQUEST_LENGTH,
} from "@/lib/request-analysis/analyze";
import type {
  AnalysisStatus,
  RequestAnalysis,
  RequestContext,
  RequirementSeverity,
} from "@/lib/request-analysis/types";

const CLARIFICATION_MESSAGE =
  "Bonjour, pouvez-vous me confirmer si une estimation CO₂e indicative, accompagnée de sa méthodologie et de ses limites, suffit pour votre demande, ou si vous exigez un bilan GES complet couvrant des scopes précis ?";

const statusContent: Record<
  AnalysisStatus,
  { label: string; mark: string; title: string; accentClass: string }
> = {
  compatible: {
    label: "COMPATIBLE AVEC L’ATTESTATION",
    mark: "✓",
    title: "Cette demande semble compatible avec l’attestation Certif-Scope.",
    accentClass: "border-l-[#1FB6C1]",
  },
  a_clarifier: {
    label: "À CLARIFIER AVEC LE DESTINATAIRE",
    mark: "?",
    title: "Le niveau de document attendu doit être précisé.",
    accentClass: "border-l-[#64748B]",
  },
  incompatible: {
    label: "HORS PÉRIMÈTRE CERTIF-SCOPE",
    mark: "—",
    title:
      "Cette demande paraît exiger un document plus complet que l’attestation Certif-Scope.",
    accentClass: "border-l-[#0B3A63]",
  },
};

const contextLabels: Record<RequestContext, string> = {
  client: "Client ou donneur d’ordre",
  fournisseur: "Référencement fournisseur",
  appel_offres: "Appel d’offres",
  banque: "Banque ou financement",
  assurance: "Assurance",
  autre: "Autre contexte",
  inconnu: "Contexte non identifié",
};

const severityLabels: Record<RequirementSeverity, string> = {
  positive: "Signal compatible",
  ambiguous: "Point à préciser",
  blocking: "Exigence hors périmètre",
};

type CopyState = "idle" | "copied" | "manual";

function trackSafely(
  name:
    | "diagnostic_started"
    | "diagnostic_completed"
    | "diagnostic_compatible"
    | "diagnostic_clarification"
    | "diagnostic_incompatible"
    | "diagnostic_to_generate",
  properties: { location?: "diagnostic_page"; result?: AnalysisStatus },
) {
  try {
    track(name, properties);
  } catch {
    // L’analyse doit rester disponible même si les événements personnalisés
    // ne sont pas activés dans le projet Vercel.
  }
}

function InitialReport() {
  return (
    <div className="flex h-full min-h-[430px] flex-col" aria-live="polite">
      <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#64748B]">
        Lecture du dossier
      </p>
      <div className="mt-5 border-l-4 border-l-[#0B3A63]/20 pl-5">
        <p className="text-sm font-semibold text-[#64748B]">
          EN ATTENTE D’ANALYSE
        </p>
        <h2 className="mt-2 text-2xl font-extrabold leading-tight text-[#0B3A63]">
          Les exigences apparaîtront ici.
        </h2>
      </div>

      <div className="mt-8 divide-y divide-[#0B3A63]/10 border-y border-[#0B3A63]/10">
        <div className="grid grid-cols-[2rem_1fr] gap-3 py-4">
          <span className="text-sm font-semibold tabular-nums text-[#1FB6C1]">
            01
          </span>
          <p className="text-sm leading-relaxed text-[#475569]">
            Repérage du document, des normes et des scopes explicitement
            demandés.
          </p>
        </div>
        <div className="grid grid-cols-[2rem_1fr] gap-3 py-4">
          <span className="text-sm font-semibold tabular-nums text-[#1FB6C1]">
            02
          </span>
          <p className="text-sm leading-relaxed text-[#475569]">
            Affichage des passages qui justifient l’orientation rendue.
          </p>
        </div>
        <div className="grid grid-cols-[2rem_1fr] gap-3 py-4">
          <span className="text-sm font-semibold tabular-nums text-[#1FB6C1]">
            03
          </span>
          <p className="text-sm leading-relaxed text-[#475569]">
            Proposition de l’attestation uniquement si son périmètre semble
            adapté.
          </p>
        </div>
      </div>

      <p className="mt-auto pt-8 text-xs leading-relaxed text-[#64748B]">
        L’outil applique des règles explicites. Il ne certifie pas la demande et
        ne garantit pas l’acceptation d’un document.
      </p>
    </div>
  );
}

function AnalysisDetails({ analysis }: { analysis: RequestAnalysis }) {
  const scopes = analysis.requestedScopes.map((scope) =>
    scope.replace("scope_", "Scope "),
  );

  return (
    <dl className="divide-y divide-[#0B3A63]/10 border-y border-[#0B3A63]/10 text-sm">
      <div className="grid grid-cols-[7.5rem_1fr] gap-4 py-3">
        <dt className="font-semibold text-[#64748B]">Contexte</dt>
        <dd className="text-[#1E293B]">{contextLabels[analysis.context]}</dd>
      </div>
      {analysis.reportingYear ? (
        <div className="grid grid-cols-[7.5rem_1fr] gap-4 py-3">
          <dt className="font-semibold text-[#64748B]">Année relevée</dt>
          <dd className="tabular-nums text-[#1E293B]">
            {analysis.reportingYear}
          </dd>
        </div>
      ) : null}
      {scopes.length > 0 ? (
        <div className="grid grid-cols-[7.5rem_1fr] gap-4 py-3">
          <dt className="font-semibold text-[#64748B]">Scopes cités</dt>
          <dd className="text-[#1E293B]">{scopes.join(", ")}</dd>
        </div>
      ) : null}
      {analysis.standards.length > 0 ? (
        <div className="grid grid-cols-[7.5rem_1fr] gap-4 py-3">
          <dt className="font-semibold text-[#64748B]">Référentiels</dt>
          <dd className="text-[#1E293B]">{analysis.standards.join(", ")}</dd>
        </div>
      ) : null}
    </dl>
  );
}

function ResultActions({
  analysis,
  copyState,
  onCopy,
}: {
  analysis: RequestAnalysis;
  copyState: CopyState;
  onCopy: () => void;
}) {
  if (analysis.status === "compatible") {
    return (
      <div>
        <p className="text-sm leading-relaxed text-[#475569]">
          Cette orientation repose uniquement sur le texte fourni et ne garantit
          pas l’acceptation du document par son destinataire.
        </p>
        <Link
          href="/fr/generate/"
          onClick={() =>
            trackSafely("diagnostic_to_generate", { result: "compatible" })
          }
          className="mt-5 inline-flex min-h-[54px] w-full items-center justify-center rounded-lg bg-[#1FB6C1] px-6 py-3 text-center text-sm font-semibold text-white shadow-[0_12px_30px_rgba(31,182,193,0.22)] transition-colors hover:bg-[#0B3A63] focus:outline-none focus:ring-2 focus:ring-[#0B3A63] focus:ring-offset-2"
        >
          Générer mon attestation — 89 €
        </Link>
      </div>
    );
  }

  if (analysis.status === "a_clarifier") {
    return (
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#64748B]">
          Message prêt à transmettre
        </p>
        <blockquote className="mt-3 border-l-2 border-[#1FB6C1] bg-[#F8FAFC] px-4 py-3 text-sm leading-relaxed text-[#1E293B]">
          {CLARIFICATION_MESSAGE}
        </blockquote>
        <button
          type="button"
          onClick={onCopy}
          className="mt-4 inline-flex min-h-[48px] w-full items-center justify-center rounded-lg border border-[#0B3A63]/25 bg-white px-5 py-3 text-sm font-semibold text-[#0B3A63] transition-colors hover:border-[#0B3A63] hover:bg-[#F8FAFC] focus:outline-none focus:ring-2 focus:ring-[#0B3A63] focus:ring-offset-2"
        >
          Copier le message de clarification
        </button>
        <p
          className="mt-3 text-sm text-[#475569]"
          role="status"
          aria-live="polite"
        >
          {copyState === "copied"
            ? "Message copié dans le presse-papiers."
            : null}
          {copyState === "manual"
            ? "La copie automatique est indisponible. Sélectionnez le message ci-dessus pour le copier manuellement."
            : null}
        </p>
      </div>
    );
  }

  return (
    <p className="text-sm leading-relaxed text-[#475569]">
      Aucun bouton d’achat n’est proposé : les exigences relevées doivent être
      traitées avec le livrable ou le prestataire approprié.
    </p>
  );
}

function ResultReport({
  analysis,
  copyState,
  onCopy,
}: {
  analysis: RequestAnalysis;
  copyState: CopyState;
  onCopy: () => void;
}) {
  const status = statusContent[analysis.status];

  return (
    <div aria-live="polite">
      <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#64748B]">
        Lecture du dossier
      </p>

      <div className={`mt-5 border-l-4 pl-5 ${status.accentClass}`}>
        <div className="flex items-center gap-3">
          <span
            aria-hidden="true"
            className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#0B3A63]/20 text-sm font-extrabold text-[#0B3A63]"
          >
            {status.mark}
          </span>
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#0B3A63]">
            {status.label}
          </p>
        </div>
        <h2 className="mt-4 text-2xl font-extrabold leading-tight text-[#0B3A63]">
          {status.title}
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-[#475569]">
          {analysis.summary}
        </p>
      </div>

      <div className="mt-7">
        <AnalysisDetails analysis={analysis} />
      </div>

      <section className="mt-7" aria-labelledby="requirements-title">
        <h3
          id="requirements-title"
          className="text-xs font-semibold uppercase tracking-[0.14em] text-[#64748B]"
        >
          Exigences relevées
        </h3>
        {analysis.matches.length > 0 ? (
          <ul className="mt-3 divide-y divide-[#0B3A63]/10 border-y border-[#0B3A63]/10">
            {analysis.matches.map((match) => (
              <li key={match.code} className="py-4">
                <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#64748B]">
                  {severityLabels[match.severity]}
                </p>
                <p className="mt-1 text-sm font-semibold text-[#0B3A63]">
                  {match.label}
                </p>
                <blockquote className="mt-3 border-l-2 border-[#0B3A63]/20 pl-3 text-sm leading-relaxed text-[#475569]">
                  « {match.excerpt} »
                </blockquote>
              </li>
            ))}
          </ul>
        ) : (
          <p className="mt-3 border-y border-[#0B3A63]/10 py-4 text-sm leading-relaxed text-[#475569]">
            Aucune exigence carbone suffisamment précise n’a été détectée dans
            le texte fourni.
          </p>
        )}
      </section>

      <section
        className="mt-7 border-t border-[#0B3A63]/10 pt-6"
        aria-labelledby="next-action-title"
      >
        <h3
          id="next-action-title"
          className="text-xs font-semibold uppercase tracking-[0.14em] text-[#64748B]"
        >
          Prochaine action
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-[#1E293B]">
          {analysis.nextAction}
        </p>
        <div className="mt-5">
          <ResultActions
            analysis={analysis}
            copyState={copyState}
            onCopy={onCopy}
          />
        </div>
      </section>
    </div>
  );
}

export default function RequestAnalyzer() {
  const [requestText, setRequestText] = useState("");
  const [analysis, setAnalysis] = useState<RequestAnalysis | null>(null);
  const [validationMessage, setValidationMessage] = useState("");
  const [copyState, setCopyState] = useState<CopyState>("idle");
  const resultRef = useRef<HTMLDivElement>(null);

  const trimmedLength = requestText.trim().length;
  const isTooShort =
    requestText.length > 0 && trimmedLength < MIN_REQUEST_LENGTH;
  const canAnalyze = trimmedLength >= MIN_REQUEST_LENGTH;

  const focusResult = () => {
    window.requestAnimationFrame(() => resultRef.current?.focus());
  };

  const handleChange = (value: string) => {
    setRequestText(value);
    setAnalysis(null);
    setValidationMessage("");
    setCopyState("idle");
  };

  const handleAnalyze = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const outcome = analyzeRequest(requestText);

    if (outcome.ok === false) {
      setValidationMessage(outcome.error.message);
      setAnalysis(null);
      return;
    }

    trackSafely("diagnostic_started", { location: "diagnostic_page" });
    setValidationMessage("");
    setCopyState("idle");
    setAnalysis(outcome.analysis);
    trackSafely("diagnostic_completed", { result: outcome.analysis.status });

    const eventByStatus: Record<
      AnalysisStatus,
      | "diagnostic_compatible"
      | "diagnostic_clarification"
      | "diagnostic_incompatible"
    > = {
      compatible: "diagnostic_compatible",
      a_clarifier: "diagnostic_clarification",
      incompatible: "diagnostic_incompatible",
    };

    trackSafely(eventByStatus[outcome.analysis.status], {
      result: outcome.analysis.status,
    });
    focusResult();
  };

  const handleReset = () => {
    setRequestText("");
    setAnalysis(null);
    setValidationMessage("");
    setCopyState("idle");
  };

  const handleCopy = async () => {
    try {
      if (!navigator.clipboard?.writeText)
        throw new Error("Clipboard unavailable");
      await navigator.clipboard.writeText(CLARIFICATION_MESSAGE);
      setCopyState("copied");
    } catch {
      setCopyState("manual");
    }
  };

  return (
    <section
      className="bg-[#F8FAFC] pb-16 pt-8 md:pb-24 md:pt-12"
      aria-labelledby="analyzer-title"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <header className="max-w-4xl">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#64748B]">
            Analyse de demande
          </p>
          <h1
            id="analyzer-title"
            className="mt-4 max-w-3xl text-4xl font-extrabold leading-tight text-[#0B3A63] md:text-5xl"
          >
            Votre client vous demande un bilan carbone ?
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-[#475569] md:text-lg">
            Collez le texte du mail, du questionnaire ou de l’appel d’offres
            reçu. Certif-Scope identifie ce qui est demandé et vous indique si
            l’attestation CO₂e peut convenir.
          </p>
          <p className="mt-4 flex max-w-3xl items-start gap-3 border-l-2 border-[#1FB6C1] pl-4 text-sm leading-relaxed text-[#475569]">
            <span aria-hidden="true" className="font-extrabold text-[#0B3A63]">
              i
            </span>
            <span>
              L’analyse est réalisée dans votre navigateur. Le texte saisi n’est
              ni envoyé ni conservé.
            </span>
          </p>
        </header>

        <div className="mt-9 overflow-hidden rounded-lg border border-[#0B3A63]/15 bg-white shadow-sm lg:grid lg:grid-cols-[minmax(0,1.38fr)_minmax(320px,1fr)]">
          <form onSubmit={handleAnalyze} className="p-5 md:p-8" noValidate>
            <div className="flex items-end justify-between gap-4">
              <label
                htmlFor="request-text"
                className="text-sm font-semibold text-[#0B3A63]"
              >
                Demande reçue
              </label>
              <span
                className="text-xs tabular-nums text-[#64748B]"
                aria-live="polite"
              >
                {requestText.length.toLocaleString("fr-FR")} / 12 000
              </span>
            </div>

            <textarea
              id="request-text"
              value={requestText}
              onChange={(event) => handleChange(event.target.value)}
              maxLength={MAX_REQUEST_LENGTH}
              rows={15}
              aria-describedby="request-help request-validation"
              aria-invalid={isTooShort || Boolean(validationMessage)}
              placeholder="Collez ici le texte transmis par votre client, votre donneur d’ordre, une banque, une assurance ou un appel d’offres."
              className="mt-3 min-h-[280px] w-full resize-y rounded-lg border border-[#0B3A63]/15 bg-white p-4 text-base leading-relaxed text-[#1E293B] outline-none transition-colors placeholder:text-[#64748B] focus:border-[#0B3A63] focus:ring-2 focus:ring-[#0B3A63]/20 md:min-h-[390px]"
            />

            <div className="mt-3 min-h-10">
              <p
                id="request-help"
                className="text-xs leading-relaxed text-[#64748B]"
              >
                Collez uniquement la partie utile de la demande. Maximum 12 000
                caractères.
              </p>
              <p
                id="request-validation"
                className="mt-1 text-sm font-medium text-[#0B3A63]"
                role="status"
                aria-live="polite"
              >
                {isTooShort
                  ? `Ajoutez encore ${MIN_REQUEST_LENGTH - trimmedLength} caractère${
                      MIN_REQUEST_LENGTH - trimmedLength > 1 ? "s" : ""
                    } pour lancer l’analyse.`
                  : validationMessage}
              </p>
            </div>

            <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center">
              <button
                type="submit"
                disabled={!canAnalyze}
                className="inline-flex min-h-[56px] flex-1 items-center justify-center rounded-lg bg-[#1FB6C1] px-6 py-3 text-base font-semibold text-white shadow-[0_12px_30px_rgba(31,182,193,0.22)] transition-colors hover:bg-[#0B3A63] focus:outline-none focus:ring-2 focus:ring-[#0B3A63] focus:ring-offset-2 disabled:cursor-not-allowed disabled:bg-[#64748B] disabled:shadow-none"
              >
                Analyser gratuitement
              </button>
              {requestText.length > 0 ? (
                <button
                  type="button"
                  onClick={handleReset}
                  className="inline-flex min-h-[48px] items-center justify-center rounded-lg border border-[#0B3A63]/20 bg-white px-5 py-3 text-sm font-semibold text-[#0B3A63] transition-colors hover:border-[#0B3A63] hover:bg-[#F8FAFC] focus:outline-none focus:ring-2 focus:ring-[#0B3A63] focus:ring-offset-2"
                >
                  Réinitialiser
                </button>
              ) : null}
            </div>
          </form>

          <div
            ref={resultRef}
            tabIndex={-1}
            className="border-[#0B3A63]/12 border-t bg-[#F8FAFC] p-5 outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#0B3A63] md:p-8 lg:border-l lg:border-t-0"
          >
            {analysis ? (
              <ResultReport
                analysis={analysis}
                copyState={copyState}
                onCopy={handleCopy}
              />
            ) : (
              <InitialReport />
            )}
          </div>
        </div>

        <p className="mt-5 max-w-4xl text-xs leading-relaxed text-[#64748B]">
          Outil d’orientation documentaire, sans garantie juridique,
          réglementaire ou d’acceptation. En cas de doute, demandez une
          confirmation écrite au destinataire.
        </p>
      </div>
    </section>
  );
}
