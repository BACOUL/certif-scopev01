"use client";

import { useState } from "react";

/* ======================================================
   CERTIF-SCOPE — CALCULATION MODEL (CLIENT-SIDE)
   FINAL VERSION — STRICT, GUIDED, 3 STEPS
   LANGUAGES: EN / FR / DE (attestation only)
====================================================== */

// kgCO₂e / €
const EMISSION_FACTORS = {
  it: 0.30,
  services: 0.22,
  goods: 0.45,
  logistics: 0.18,
  travel: 0.25,
  accommodation: 0.27,
  other: 0.25,
} as const;

const METHODOLOGY =
  "Certif-Scope deterministic spend-based methodology v1.0";

const ACCEPTED_SCOPE_ERROR =
  "Bitte bestätigen Sie den indikativen Umfang der Bescheinigung, bevor Sie fortfahren.";

type AttestationLocale = "en" | "fr" | "de";

type FormErrors = {
  companyName?: string;
  sector?: string;
  acceptedScope?: string;
  submit?: string;
};

const SECTORS = [
  { value: "professional_services", label: "Unternehmensdienstleistungen" },
  {
    value: "information_technology",
    label: "Digitales, IT & Technologien",
  },
  {
    value: "manufacturing",
    label: "Industrie, Fertigung & Produktion",
  },
  {
    value: "construction",
    label: "Bau, Immobilien & Gebäudewirtschaft",
  },
  {
    value: "wholesale_retail",
    label: "Handel, Vertrieb & Verkauf",
  },
  {
    value: "transport_logistics",
    label: "Transport, Logistik & Lieferung",
  },
  {
    value: "hospitality_events",
    label: "Hotellerie, Gastronomie, Tourismus & Veranstaltungen",
  },
  {
    value: "other",
    label: "Sonstige Tätigkeiten",
  },
] as const;

function toNumber(value: string): number {
  if (!value) return 0;

  return Number(value.replace(",", ".")) || 0;
}

function calculateTotalCO2e(expenses: Record<string, number>) {
  let totalKg = 0;

  for (const key in expenses) {
    const value = expenses[key] || 0;
    const factor =
      EMISSION_FACTORS[key as keyof typeof EMISSION_FACTORS] || 0;

    totalKg += value * factor;
  }

  return Math.round((totalKg / 1000) * 10) / 10;
}

function Accordion({
  title,
  intro,
  children,
  defaultOpen = false,
}: {
  title: string;
  intro?: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center px-5 py-4 bg-[#F8FAFC] text-left"
      >
        <span className="font-medium text-[#0B3A63]">{title}</span>
        <span className="text-sm text-gray-500">{open ? "−" : "+"}</span>
      </button>

      {open && (
        <div className="px-5 py-6 bg-white space-y-5">
          {intro && (
            <p className="text-sm text-gray-600 leading-relaxed">
              {intro}
            </p>
          )}
          {children}
        </div>
      )}
    </div>
  );
}

export default function AssessmentFormDE() {
  const currentYear = new Date().getFullYear();

  const [companyName, setCompanyName] = useState("");
  const [companyId, setCompanyId] = useState("");
  const [sector, setSector] = useState("");
  const [year, setYear] = useState(currentYear);
  const [country, setCountry] = useState("DE");

  const [attestationLocale, setAttestationLocale] =
    useState<AttestationLocale>("de");

  const [expenses, setExpenses] = useState({
    it: "",
    services: "",
    goods: "",
    logistics: "",
    travel: "",
    accommodation: "",
    other: "",
  });

  const [accessKey, setAccessKey] = useState("");
  const [keyStatus, setKeyStatus] = useState<
    "idle" | "checking" | "valid" | "invalid"
  >("idle");
  const [remainingCredits, setRemainingCredits] = useState<number | null>(
    null
  );
  const [keyError, setKeyError] = useState("");

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [acceptedScope, setAcceptedScope] = useState(false);

  const update = (field: string, value: string) => {
    setExpenses((prev) => ({ ...prev, [field]: value }));
  };

  const numericExpenses = Object.fromEntries(
    Object.entries(expenses).map(([k, v]) => [k, toNumber(v)])
  );

  const totalCO2e = calculateTotalCO2e(numericExpenses);

  const selectedSectorLabel =
    SECTORS.find((s) => s.value === sector)?.label || sector;

  const validate = (): boolean => {
    const nextErrors: FormErrors = {};

    if (!companyName.trim()) {
      nextErrors.companyName =
        "Der Unternehmensname ist erforderlich, um die Bescheinigung auszustellen.";
    }

    if (!sector) {
      nextErrors.sector =
        "Bitte wählen Sie einen Haupttätigkeitsbereich aus.";
    }

    const hasAtLeastOneExpense = Object.values(numericExpenses).some(
      (value) => value > 0
    );

    if (!hasAtLeastOneExpense) {
      nextErrors.submit =
        "Bitte geben Sie mindestens eine Ausgabe über 0 € an.";
    }

    if (!acceptedScope) {
      nextErrors.acceptedScope = ACCEPTED_SCOPE_ERROR;
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleCheckKey = async () => {
    if (!accessKey.trim()) return;

    setKeyStatus("checking");
    setKeyError("");
    setRemainingCredits(null);

    try {
      const res = await fetch("/api/check-key", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ key: accessKey }),
      });

      const data = await res.json();

      if (!res.ok || !data.valid) {
        setKeyStatus("invalid");
        setKeyError(data.error || "Zugangsschlüssel ungültig oder abgelaufen.");
      } else {
        setKeyStatus("valid");
        setRemainingCredits(data.remainingCredits);
      }
    } catch {
      setKeyStatus("invalid");
      setKeyError(
        "Die Kontrolle des Zugangsschlüssels ist fehlgeschlagen. Bitte versuchen Sie es erneut."
      );
    }
  };

  const clearKey = () => {
    setAccessKey("");
    setKeyStatus("idle");
    setRemainingCredits(null);
    setKeyError("");
  };

  const scrollToErrorSummary = () => {
    window.setTimeout(() => {
      document.getElementById("form-error-summary")?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }, 0);
  };

  const handleSubmit = async () => {
    if (!validate()) {
      scrollToErrorSummary();
      return;
    }

    if (
      keyStatus === "checking" ||
      (keyStatus === "valid" && remainingCredits === 0)
    ) {
      return;
    }

    setIsSubmitting(true);
    setErrors({});

    const isRedeeming =
      keyStatus === "valid" &&
      remainingCredits !== null &&
      remainingCredits > 0;

    const endpoint = isRedeeming ? "/api/redeem-key" : "/api/checkout";

    const basePayload = {
      companyName: companyName.trim(),
      companySector: selectedSectorLabel,
      entityIdentifier: companyId.trim() || "",
      year: String(year),
      country,
      totalCO2e,
      methodology: METHODOLOGY,
      attestationLocale,
    };

    const payload = {
      ...basePayload,
      ...(isRedeeming && { accessKey: accessKey.trim() }),
    };

    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        throw new Error("Transaction initialization failed.");
      }

      const { url } = await res.json();

      if (isRedeeming) {
        sessionStorage.setItem(
          "certifScopePayload",
          JSON.stringify(basePayload)
        );
      }

      window.location.href = url;
    } catch {
      setErrors({
        submit:
          "Die Anfrage konnte nicht verarbeitet werden. Bitte versuchen Sie es erneut oder aktualisieren Sie die Seite.",
      });
      scrollToErrorSummary();
      setIsSubmitting(false);
    }
  };

  const isRedeeming =
    keyStatus === "valid" &&
    remainingCredits !== null &&
    remainingCredits > 0;

  const isButtonBlocked =
    keyStatus === "checking" ||
    (keyStatus === "valid" && remainingCredits === 0);

  const buttonLabel = isRedeeming
    ? "CO₂e-Bescheinigung erstellen (1 Guthaben)"
    : "CO₂e-Bescheinigung erstellen — 89 €";

  const displayedCompanyName = companyName.trim() || "Noch auszufüllen";
  const displayedSectorLabel = sector ? selectedSectorLabel : "Noch auszufüllen";
  const isSubmitDisabled = isSubmitting || isButtonBlocked || !acceptedScope;
  const paymentSummaryItems = [
    { label: "Unternehmen", value: displayedCompanyName },
    { label: "Jahr", value: String(year) },
    { label: "Land", value: country },
    { label: "Tätigkeitsbereich", value: displayedSectorLabel },
    { label: "Geschätztes Ergebnis", value: `${totalCO2e} tCO₂e` },
    { label: "Dokument", value: "Indikative CO₂e-Bescheinigung als PDF" },
    { label: "Preis", value: "89 €" },
    { label: "Bereitstellung", value: "Sofort nach Zahlung" },
  ];

  const handleDisabledSubmitClick = () => {
    if (!acceptedScope) {
      setErrors((prev) => ({
        ...prev,
        acceptedScope: ACCEPTED_SCOPE_ERROR,
      }));
    }
  };

  const missingRequiredFields = [
    errors.companyName && "Unternehmensname / juristische Einheit",
    errors.sector && "Haupttätigkeitsbereich",
    errors.acceptedScope && "Bestätigung des indikativen Umfangs",
    errors.submit && "Mindestens eine externe Jahresausgabe über 0 €",
  ].filter(Boolean) as string[];

  return (
    <main className="min-h-screen bg-white">
      <section className="max-w-3xl mx-auto px-6 pt-16 pb-20 space-y-10">
        <div>
          <p className="text-sm text-gray-500 mb-2">
            Schritt 1 von 3 — Unternehmen & Kontext
          </p>

          <h1 className="text-3xl md:text-4xl font-extrabold text-[#0B3A63] mb-3">
            CO₂e-Bescheinigung erstellen
          </h1>

          <p className="text-gray-600 text-lg leading-relaxed">
            Indikative Schätzung auf Basis deklarierter Ausgaben. Keine
            vollständige fachliche Erhebung. Keine physischen Aktivitätsdaten
            erforderlich.
          </p>

          <p className="text-sm text-gray-500 mt-3">
            <strong>Preis:</strong> 89 € · Einmalige Zahlung · Ohne Abo
          </p>
        </div>

        <Accordion
          title="Unternehmensangaben"
          intro="Geben Sie die grundlegende Identifikation und den Kontext an. Mit * markierte Felder sind Pflichtfelder."
          defaultOpen
        >
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium">
                Name des Unternehmens / der juristischen Einheit *
              </label>

              <input
                type="text"
                value={companyName}
                aria-invalid={Boolean(errors.companyName)}
                onChange={(e) => setCompanyName(e.target.value)}
                className={`w-full border rounded-md px-4 py-2 mt-1 ${
                  errors.companyName
                    ? "border-red-500 bg-red-50"
                    : "border-gray-300"
                }`}
              />

              {errors.companyName && (
                <p className="text-sm text-red-600 mt-1 font-medium">
                  {errors.companyName}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium">
                Haupttätigkeitsbereich *
              </label>

              <select
                value={sector}
                aria-invalid={Boolean(errors.sector)}
                onChange={(e) => setSector(e.target.value)}
                className={`w-full border rounded-md px-4 py-2 mt-1 ${
                  errors.sector
                    ? "border-red-500 bg-red-50"
                    : "border-gray-300"
                }`}
              >
                <option value="">Tätigkeitsbereich auswählen</option>

                {SECTORS.map((s) => (
                  <option key={s.value} value={s.value}>
                    {s.label}
                  </option>
                ))}
              </select>

              {errors.sector && (
                <p className="text-sm text-red-600 mt-1 font-medium">
                  {errors.sector}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium">
                Unternehmenskennung (optional)
              </label>

              <input
                type="text"
                value={companyId}
                onChange={(e) => setCompanyId(e.target.value)}
                className="w-full border border-gray-300 rounded-md px-4 py-2 mt-1"
              />
            </div>
          </div>
        </Accordion>

        <Accordion
          title="Kontext"
          intro="Legen Sie das Bezugsjahr, das Hauptland und die Sprache der Bescheinigung fest."
          defaultOpen
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium">Bezugsjahr</label>

              <input
                type="number"
                value={year}
                onChange={(e) => setYear(Number(e.target.value))}
                className="w-full border border-gray-300 rounded-md px-4 py-2 mt-1"
              />
            </div>

            <div>
              <label className="block text-sm font-medium">Hauptland</label>

              <select
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                className="w-full border border-gray-300 rounded-md px-4 py-2 mt-1"
              >
                <option value="DE">Deutschland</option>
                <option value="FR">Frankreich</option>
                <option value="EU">Andere EU</option>
              </select>
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium">
                Sprache der Bescheinigung
              </label>

              <select
                value={attestationLocale}
                onChange={(e) =>
                  setAttestationLocale(e.target.value as AttestationLocale)
                }
                className="w-full border border-gray-300 rounded-md px-4 py-2 mt-1"
              >
                <option value="de">Deutsch</option>
                <option value="fr">Französisch</option>
                <option value="en">Englisch</option>
              </select>
            </div>
          </div>
        </Accordion>

        <p className="text-sm text-gray-500">
          Schritt 2 von 3 — Ressourcen und Ausgaben
        </p>

        <Accordion
          title="Deklarierte externe Jahresausgaben (€)"
          intro="Geben Sie die wichtigsten jährlichen Beträge nach Kategorie an. Plausible Schätzungen reichen aus. Diese Daten dienen nur der spend-based Berechnung der indikativen Bescheinigung."
          defaultOpen
        >
          {errors.submit && (
            <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700 font-medium">
              Mindestens eine Ausgabe ist erforderlich, um die Bescheinigung zu
              berechnen.
            </div>
          )}

          <Input
            label="IT- und Digitalleistungen"
            hint="Software, Cloud, SaaS, IT-Betreuung"
            value={expenses.it}
            onChange={(v) => update("it", v)}
            hasError={Boolean(errors.submit)}
          />

          <Input
            label="Professionelle Dienstleistungen"
            hint="Beratung, Buchhaltung, juristische Dienstleistungen"
            value={expenses.services}
            onChange={(v) => update("services", v)}
            hasError={Boolean(errors.submit)}
          />

          <Input
            label="Waren und Beschaffung"
            hint="Büromaterial, Ausstattung, Materialien"
            value={expenses.goods}
            onChange={(v) => update("goods", v)}
            hasError={Boolean(errors.submit)}
          />

          <Input
            label="Logistik und Transport"
            hint="Fracht, Lieferung, Transportdienstleister"
            value={expenses.logistics}
            onChange={(v) => update("logistics", v)}
            hasError={Boolean(errors.submit)}
          />

          <Input
            label="Geschäftsreisen"
            hint="Flüge, Bahnreisen, Taxis, Mietwagen"
            value={expenses.travel}
            onChange={(v) => update("travel", v)}
            hasError={Boolean(errors.submit)}
          />

          <Input
            label="Übernachtungen und Veranstaltungen"
            hint="Hotels, Konferenzen, Unternehmensveranstaltungen"
            value={expenses.accommodation}
            onChange={(v) => update("accommodation", v)}
            hasError={Boolean(errors.submit)}
          />

          <Input
            label="Sonstige externe Ausgaben"
            hint="Marketing, Abonnements, sonstige Kosten"
            value={expenses.other}
            onChange={(v) => update("other", v)}
            hasError={Boolean(errors.submit)}
          />
        </Accordion>

        <p className="text-sm text-gray-500">
          Schritt 3 von 3 — Ergebnis & Bescheinigung
        </p>

        <div className="border rounded-xl p-6 bg-[#F8FAFC]">
          <p className="text-sm text-gray-600 mb-1">
            Indikative Schätzung der jährlichen Emissionen
          </p>

          <p className="text-3xl font-bold text-[#0B3A63]">
            {totalCO2e} tCO₂e
          </p>

          <p className="text-xs text-gray-500 mt-2">
            Deterministische spend-based Schätzung · indikativ · keine externe
            fachliche Prüfung
          </p>
        </div>

        <div className="border rounded-xl p-6 bg-white space-y-3">
          <p className="font-medium text-[#0B3A63]">Was Sie erhalten</p>

          <ul className="text-sm text-gray-600 list-disc pl-5 space-y-1">
            <li>Signierte CO₂e-Bescheinigung als PDF</li>
            <li>Standardisiertes institutionelles Format</li>
            <li>Indikative Methode auf Ausgabenbasis</li>
            <li>Dokument mit kontrollierbarer ID</li>
            <li>Sofortige Bereitstellung nach Zahlung</li>
          </ul>
        </div>

        {errors.submit && (
          <p className="text-sm text-red-600 font-medium">{errors.submit}</p>
        )}

        <Accordion
          title="Ich habe bereits einen Zugangsschlüssel oder ein Paket"
          intro="Nutzen Sie diese Option nur, wenn Sie bereits ein Paket gekauft oder einen Zugangsschlüssel erhalten haben."
          defaultOpen={false}
        >
          <div className="space-y-3">
            <div className="flex flex-col sm:flex-row gap-3 sm:items-center min-w-0">
              <input
                type="text"
                placeholder="XXXX-XXXX-XXXX"
                value={accessKey}
                onChange={(e) => {
                  setAccessKey(e.target.value);

                  if (keyStatus !== "idle") {
                    setKeyStatus("idle");
                    setRemainingCredits(null);
                    setKeyError("");
                  }
                }}
                className="w-full sm:flex-1 min-w-0 border border-gray-300 rounded-md px-3 py-2 text-sm"
              />

              <button
                type="button"
                onClick={handleCheckKey}
                disabled={!accessKey || keyStatus === "checking"}
                className="w-full sm:w-auto shrink-0 bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-50 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {keyStatus === "checking" ? "..." : "Kontrollieren"}
              </button>
            </div>

            {keyStatus === "invalid" && (
              <p className="text-xs text-red-600 font-medium">
                {keyError}
              </p>
            )}

            {keyStatus === "valid" && (
              <div className="text-xs">
                <p className="text-[#0B3A63] font-bold">Schlüssel gültig</p>

                {remainingCredits === 0 ? (
                  <p className="text-red-600">
                    Dieser Schlüssel hat kein Guthaben mehr.
                  </p>
                ) : (
                  <p className="text-gray-600">
                    Verbleibende Guthaben: {remainingCredits}
                  </p>
                )}

                <p className="text-xs text-gray-500 mt-2 leading-relaxed">
                  Bei Nutzung eines Zugangsschlüssels wird keine E-Mail
                  versendet.
                  <br />
                  Bitte laden Sie Ihre Bescheinigung direkt nach der Erstellung
                  herunter und speichern Sie sie.
                </p>
              </div>
            )}

            {isRedeeming && (
              <button
                type="button"
                onClick={clearKey}
                className="w-full text-center text-xs text-gray-500 underline hover:text-gray-700"
              >
                Ich möchte stattdessen 89 € zahlen
              </button>
            )}
          </div>
        </Accordion>

        <p className="text-xs text-gray-500">
          Mit der Erstellung einer Bescheinigung erkennen Sie an, dass
          Certif-Scope ausgestellte PDFs nicht dauerhaft speichert. Verlorene
          Bescheinigungen werden nicht aufbewahrt und können nicht
          wiederhergestellt werden. Eine erneute Ausstellung kann angefragt
          werden, ist aber nicht zugesagt.
        </p>

        <div className="rounded-xl border border-[#0B3A63]/10 bg-[#F8FAFC] p-5 md:p-6">
          <div className="mb-5 flex items-start gap-3">
            <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-[#1FB6C1]" />
            <div>
              <h2 className="text-lg font-bold text-[#0B3A63]">
                Zusammenfassung vor Zahlung
              </h2>
              <p className="mt-1 text-sm leading-relaxed text-gray-600">
                Kontrollieren Sie die wichtigsten Angaben, bevor Sie fortfahren.
              </p>
            </div>
          </div>

          <dl className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {paymentSummaryItems.map((item) => (
              <div
                key={item.label}
                className="min-w-0 rounded-lg border border-[#0B3A63]/10 bg-white p-4"
              >
                <dt className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                  {item.label}
                </dt>
                <dd className="mt-1 break-words text-sm font-semibold text-[#0B3A63]">
                  {item.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="rounded-xl border border-[#0B3A63]/10 bg-white p-5">
          <p className="text-sm leading-relaxed text-gray-600">
            Detaillierte Finanzdaten werden nicht dauerhaft gespeichert. Das PDF
            muss direkt nach der Erstellung heruntergeladen und gesichert werden:
            Certif-Scope hält keine abrufbare Kopie bereit.
          </p>
        </div>

        <div className="rounded-xl border border-[#0B3A63]/10 bg-white p-5">
          <label
            htmlFor="accepted-scope"
            className="flex cursor-pointer items-start gap-3 text-sm leading-relaxed text-gray-700"
          >
            <input
              id="accepted-scope"
              type="checkbox"
              checked={acceptedScope}
              aria-invalid={Boolean(errors.acceptedScope)}
              aria-describedby={
                errors.acceptedScope ? "accepted-scope-error" : undefined
              }
              onChange={(e) => {
                setAcceptedScope(e.target.checked);

                if (e.target.checked) {
                  setErrors((prev) => ({
                    ...prev,
                    acceptedScope: undefined,
                  }));
                }
              }}
              className="mt-1 h-4 w-4 shrink-0 rounded border-gray-300 text-[#0B3A63] focus:ring-[#1FB6C1]"
            />
            <span>
              Ich verstehe, dass die Certif-Scope-Bescheinigung indikativ,
              nicht regulatorisch, nicht für CSRD-/ESRS-Berichterstattung
              gedacht ist und von den von mir bereitgestellten Informationen
              abhängt.
            </span>
          </label>

          {errors.acceptedScope && (
            <p
              id="accepted-scope-error"
              className="mt-3 text-sm font-medium text-red-600"
            >
              {errors.acceptedScope}
            </p>
          )}
        </div>

        {missingRequiredFields.length > 0 && (
          <div
            id="form-error-summary"
            role="alert"
            className="rounded-xl border-2 border-red-300 bg-red-50 p-5 text-red-800 shadow-sm"
          >
            <p className="font-semibold text-base mb-2">
              Der Zahlungsschritt kann derzeit nicht gestartet werden.
            </p>
            <p className="text-sm mb-3">
              Bitte ergänzen Sie die folgenden Pflichtangaben:
            </p>
            <ul className="list-disc pl-5 text-sm space-y-1 font-medium">
              {missingRequiredFields.map((field) => (
                <li key={field}>{field}</li>
              ))}
            </ul>
          </div>
        )}

        <div
          onClick={isSubmitDisabled ? handleDisabledSubmitClick : undefined}
          className={isSubmitDisabled ? "cursor-not-allowed" : undefined}
        >
          <button
            type="button"
            onClick={handleSubmit}
            disabled={isSubmitDisabled}
            className={`w-full py-4 rounded-xl font-semibold transition ${
              isSubmitDisabled
                ? "pointer-events-none bg-gray-400 cursor-not-allowed text-white"
                : "bg-[#0B3A63] hover:bg-[#092f50] text-white"
            }`}
          >
            {isSubmitting ? "Verarbeitung läuft..." : buttonLabel}
          </button>
        </div>

        <p className="text-xs text-gray-500 leading-relaxed text-center mt-4">
          Bei Nutzung eines Zugangsschlüssels wird pro Bescheinigung ein
          Guthaben verbraucht. Guthaben sind nicht erstattungsfähig und nicht
          übertragbar.
        </p>

        <p className="text-xs text-gray-500 leading-relaxed mt-4">
          Diese Bescheinigung ist indikativ, nicht regulatorisch und basiert
          ausschließlich auf den bereitgestellten Informationen. Sie ist kein
          vollständiges Treibhausgasinventar und keine regulatorische
          Berichterstattung.
        </p>
      </section>
    </main>
  );
}

function Input({
  label,
  hint,
  value,
  onChange,
  hasError = false,
}: {
  label: string;
  hint: string;
  value: string;
  onChange: (v: string) => void;
  hasError?: boolean;
}) {
  return (
    <div>
      <label className="block text-sm font-medium">{label}</label>

      <input
        type="text"
        inputMode="decimal"
        min="0"
        value={value}
        aria-invalid={hasError}
        onChange={(e) => onChange(e.target.value)}
        className={`w-full border rounded-md px-4 py-2 mt-1 ${
          hasError ? "border-red-300 bg-red-50" : "border-gray-300"
        }`}
      />

      <p className="text-xs text-gray-500 mt-1">{hint}</p>
    </div>
  );
}
