// PATH: src/app/de/generate/AssessmentForm.tsx

"use client";

import { useState } from "react";

const EMISSION_FACTORS = {
  it: 0.30,
  services: 0.22,
  goods: 0.45,
  logistics: 0.18,
  travel: 0.25,
  accommodation: 0.27,
  other: 0.25,
} as const;

const METHODOLOGY = "Certif-Scope deterministic spend-based methodology v1.0";

type AttestationLocale = "en" | "fr" | "de";

type FormErrors = {
  companyName?: string;
  sector?: string;
  submit?: string;
};

const SECTORS = [
  { value: "professional_services", label: "Unternehmensdienstleistungen" },
  { value: "information_technology", label: "Digitales, IT & Technologie" },
  { value: "manufacturing", label: "Industrie, Fertigung & Produktion" },
  { value: "construction", label: "Bau, Handwerk & Immobilien" },
  { value: "wholesale_retail", label: "Handel, Großhandel & Vertrieb" },
  { value: "transport_logistics", label: "Transport, Logistik & Lieferung" },
  { value: "hospitality_events", label: "Hotellerie, Gastronomie, Tourismus & Veranstaltungen" },
  { value: "other", label: "Andere Tätigkeiten" },
] as const;

function toNumber(value: string): number {
  if (!value) return 0;
  return Number(value.replace(",", ".")) || 0;
}

function calculateTotalCO2e(expenses: Record<string, number>) {
  let totalKg = 0;
  for (const key in expenses) {
    const value = expenses[key] || 0;
    const factor = EMISSION_FACTORS[key as keyof typeof EMISSION_FACTORS] || 0;
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
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between bg-[#F8FAFC] px-5 py-4 text-left"
      >
        <span className="font-medium text-[#0B3A63]">{title}</span>
        <span className="text-sm text-gray-500">{open ? "−" : "+"}</span>
      </button>
      {open && (
        <div className="space-y-5 bg-white px-5 py-6">
          {intro && <p className="text-sm leading-relaxed text-gray-600">{intro}</p>}
          {children}
        </div>
      )}
    </div>
  );
}

export default function AssessmentForm() {
  const currentYear = new Date().getFullYear();

  const [companyName, setCompanyName] = useState("");
  const [companyId, setCompanyId] = useState("");
  const [sector, setSector] = useState("");
  const [year, setYear] = useState(currentYear);
  const [country, setCountry] = useState("DE");
  const [attestationLocale, setAttestationLocale] = useState<AttestationLocale>("de");

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
  const [keyStatus, setKeyStatus] = useState<"idle" | "checking" | "valid" | "invalid">("idle");
  const [remainingCredits, setRemainingCredits] = useState<number | null>(null);
  const [keyError, setKeyError] = useState("");
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const update = (field: string, value: string) => {
    setExpenses((prev) => ({ ...prev, [field]: value }));
  };

  const numericExpenses = Object.fromEntries(
    Object.entries(expenses).map(([k, v]) => [k, toNumber(v)])
  );

  const totalCO2e = calculateTotalCO2e(numericExpenses);
  const selectedSectorLabel = SECTORS.find((s) => s.value === sector)?.label || sector;

  const validate = (): boolean => {
    const nextErrors: FormErrors = {};

    if (!companyName.trim()) {
      nextErrors.companyName = "Der Unternehmensname ist für die Ausstellung der Bescheinigung erforderlich.";
    }

    if (!sector) {
      nextErrors.sector = "Bitte wählen Sie den wichtigsten Tätigkeitsbereich aus.";
    }

    const hasAtLeastOneExpense = Object.values(numericExpenses).some((value) => value > 0);

    if (!hasAtLeastOneExpense) {
      nextErrors.submit = "Bitte geben Sie mindestens eine Ausgabe über 0 € an.";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const scrollToErrorSummary = () => {
    window.setTimeout(() => {
      document.getElementById("form-error-summary")?.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 0);
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
        setKeyError(data.error || "Ungültiger oder abgelaufener Zugangsschlüssel.");
      } else {
        setKeyStatus("valid");
        setRemainingCredits(data.remainingCredits);
      }
    } catch {
      setKeyStatus("invalid");
      setKeyError("Der Schlüssel konnte nicht geprüft werden. Bitte erneut versuchen.");
    }
  };

  const clearKey = () => {
    setAccessKey("");
    setKeyStatus("idle");
    setRemainingCredits(null);
    setKeyError("");
  };

  const handleSubmit = async () => {
    if (!validate()) {
      scrollToErrorSummary();
      return;
    }

    if (keyStatus === "checking" || (keyStatus === "valid" && remainingCredits === 0)) {
      return;
    }

    setIsSubmitting(true);
    setErrors({});

    const isRedeeming = keyStatus === "valid" && remainingCredits !== null && remainingCredits > 0;
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
        sessionStorage.setItem("certifScopePayload", JSON.stringify(basePayload));
      }

      window.location.href = url;
    } catch {
      setErrors({ submit: "Die Anfrage konnte nicht verarbeitet werden. Bitte versuchen Sie es erneut oder laden Sie die Seite neu." });
      scrollToErrorSummary();
      setIsSubmitting(false);
    }
  };

  const isRedeeming = keyStatus === "valid" && remainingCredits !== null && remainingCredits > 0;
  const isButtonBlocked = keyStatus === "checking" || (keyStatus === "valid" && remainingCredits === 0);
  const buttonLabel = isRedeeming
    ? "CO₂e-Bescheinigung erstellen (1 Guthaben)"
    : "CO₂e-Bescheinigung erstellen — 89 €";

  const missingRequiredFields = [
    errors.companyName && "Unternehmensname / rechtliche Einheit",
    errors.sector && "Haupttätigkeitsbereich",
    errors.submit && "Mindestens eine externe Jahresausgabe über 0 €",
  ].filter(Boolean) as string[];

  return (
    <section className="rounded-[34px] border border-[#0B3A63]/10 bg-white p-6 shadow-[0_25px_70px_rgba(11,58,99,0.10)] md:p-8">
      <div className="mb-8">
        <p className="mb-2 text-sm text-gray-500">Schritt 1 von 3 — Unternehmen & Kontext</p>
        <h2 className="mb-3 text-3xl font-extrabold text-[#0B3A63] md:text-4xl">CO₂e-Bescheinigung vorbereiten</h2>
        <p className="text-lg leading-relaxed text-gray-600">
          Indikative Schätzung auf Ausgabenbasis. Keine physischen Verbrauchsdaten erforderlich. Kein Audit, keine Zertifizierung und kein CSRD-/ESRS-Bericht.
        </p>
        <p className="mt-3 text-sm text-gray-500"><strong>Preis:</strong> 89 € · einmalige Zahlung · ohne Abonnement</p>
      </div>

      <div className="space-y-8">
        <Accordion title="Unternehmensinformationen" intro="Geben Sie die Basisinformationen ein. Mit * markierte Felder sind erforderlich." defaultOpen>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium">Unternehmensname / rechtliche Einheit *</label>
              <input
                type="text"
                value={companyName}
                aria-invalid={Boolean(errors.companyName)}
                onChange={(e) => setCompanyName(e.target.value)}
                className={`mt-1 w-full rounded-md border px-4 py-2 ${errors.companyName ? "border-red-500 bg-red-50" : "border-gray-300"}`}
              />
              {errors.companyName && <p className="mt-1 text-sm font-medium text-red-600">{errors.companyName}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium">Haupttätigkeitsbereich *</label>
              <select
                value={sector}
                aria-invalid={Boolean(errors.sector)}
                onChange={(e) => setSector(e.target.value)}
                className={`mt-1 w-full rounded-md border px-4 py-2 ${errors.sector ? "border-red-500 bg-red-50" : "border-gray-300"}`}
              >
                <option value="">Tätigkeitsbereich auswählen</option>
                {SECTORS.map((s) => (
                  <option key={s.value} value={s.value}>{s.label}</option>
                ))}
              </select>
              {errors.sector && <p className="mt-1 text-sm font-medium text-red-600">{errors.sector}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium">Unternehmenskennung (optional)</label>
              <input
                type="text"
                value={companyId}
                onChange={(e) => setCompanyId(e.target.value)}
                className="mt-1 w-full rounded-md border border-gray-300 px-4 py-2"
              />
            </div>
          </div>
        </Accordion>

        <Accordion title="Kontext" intro="Legen Sie Referenzjahr, Land und Sprache der Bescheinigung fest." defaultOpen>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <label className="block text-sm font-medium">Referenzjahr</label>
              <input
                type="number"
                value={year}
                onChange={(e) => setYear(Number(e.target.value))}
                className="mt-1 w-full rounded-md border border-gray-300 px-4 py-2"
              />
            </div>

            <div>
              <label className="block text-sm font-medium">Hauptland</label>
              <select
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                className="mt-1 w-full rounded-md border border-gray-300 px-4 py-2"
              >
                <option value="DE">Deutschland</option>
                <option value="FR">Frankreich</option>
                <option value="EU">Anderes EU-Land</option>
              </select>
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium">Sprache der Bescheinigung</label>
              <select
                value={attestationLocale}
                onChange={(e) => setAttestationLocale(e.target.value as AttestationLocale)}
                className="mt-1 w-full rounded-md border border-gray-300 px-4 py-2"
              >
                <option value="de">Deutsch</option>
                <option value="en">Englisch (rechtliche Referenz)</option>
                <option value="fr">Französisch</option>
              </select>
              <p className="mt-1 text-xs text-gray-500">Englisch bleibt die Referenzsprache bei Abweichungen.</p>
            </div>
          </div>
        </Accordion>

        <p className="text-sm text-gray-500">Schritt 2 von 3 — Ressourcenerklärung</p>
        <Accordion
          title="Jährliche externe Ausgaben (€)"
          intro="Geben Sie die wichtigsten Jahresbeträge nach Kategorie ein. Plausible Schätzungen reichen für diese indikative spend-based Bescheinigung aus."
          defaultOpen
        >
          {errors.submit && (
            <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
              Mindestens eine Ausgabe ist erforderlich, um die Bescheinigung zu berechnen.
            </div>
          )}
          <Input label="IT- und digitale Dienstleistungen" hint="Software, Cloud, SaaS, IT-Dienstleister" value={expenses.it} onChange={(v) => update("it", v)} hasError={Boolean(errors.submit)} />
          <Input label="Professionelle Dienstleistungen" hint="Beratung, Buchhaltung, Recht, externe Experten" value={expenses.services} onChange={(v) => update("services", v)} hasError={Boolean(errors.submit)} />
          <Input label="Waren und Einkäufe" hint="Büromaterial, Ausrüstung, Materialien" value={expenses.goods} onChange={(v) => update("goods", v)} hasError={Boolean(errors.submit)} />
          <Input label="Logistik und Transport" hint="Fracht, Lieferungen, Spediteure, Transportdienstleister" value={expenses.logistics} onChange={(v) => update("logistics", v)} hasError={Boolean(errors.submit)} />
          <Input label="Geschäftsreisen" hint="Flüge, Bahn, Taxis, Mietwagen" value={expenses.travel} onChange={(v) => update("travel", v)} hasError={Boolean(errors.submit)} />
          <Input label="Unterkunft und Veranstaltungen" hint="Hotels, Konferenzen, Geschäftsevents" value={expenses.accommodation} onChange={(v) => update("accommodation", v)} hasError={Boolean(errors.submit)} />
          <Input label="Andere externe Ausgaben" hint="Marketing, Abonnements, sonstige Kosten" value={expenses.other} onChange={(v) => update("other", v)} hasError={Boolean(errors.submit)} />
        </Accordion>

        <p className="text-sm text-gray-500">Schritt 3 von 3 — Ergebnis & Bescheinigung</p>
        <div className="rounded-xl border bg-[#F8FAFC] p-6">
          <p className="mb-1 text-sm text-gray-600">Indikative Schätzung der jährlichen Emissionen</p>
          <p className="text-3xl font-bold text-[#0B3A63]">{totalCO2e} tCO₂e</p>
          <p className="mt-2 text-xs text-gray-500">Deterministische Schätzung auf Ausgabenbasis · indikativ · nicht auditiert</p>
        </div>

        <div className="space-y-3 rounded-xl border bg-white p-6">
          <p className="font-medium text-[#0B3A63]">Was Sie erhalten</p>
          <ul className="list-disc space-y-1 pl-5 text-sm text-gray-600">
            <li>Signierte CO₂e-Bescheinigung als PDF</li>
            <li>Standardisiertes institutionelles Format</li>
            <li>Indikative Methode auf Ausgabenbasis</li>
            <li>Dokument mit verifizierbarer ID</li>
            <li>Sofortige Bereitstellung nach Zahlung oder Schlüsselverwendung</li>
          </ul>
        </div>

        <div className="rounded-xl border border-gray-200 bg-gray-50 p-5">
          <h3 className="mb-2 text-sm font-semibold text-[#0B3A63]">Zugangsschlüssel (optional)</h3>
          <p className="mb-3 text-sm text-gray-600">Verwenden Sie einen Zugangsschlüssel, wenn Sie ein Paket gekauft oder Guthaben erhalten haben.</p>
          <div className="flex min-w-0 flex-col gap-3 sm:flex-row sm:items-center">
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
              className="w-full min-w-0 rounded-md border border-gray-300 px-3 py-2 text-sm sm:flex-1"
            />
            <button
              type="button"
              onClick={handleCheckKey}
              disabled={!accessKey || keyStatus === "checking"}
              className="w-full shrink-0 rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
            >
              {keyStatus === "checking" ? "..." : "Prüfen"}
            </button>
          </div>

          {keyStatus === "invalid" && <p className="mt-2 text-xs font-medium text-red-600">{keyError}</p>}

          {keyStatus === "valid" && (
            <div className="mt-2 text-xs">
              <p className="font-bold text-green-700">Schlüssel gültig</p>
              {remainingCredits === 0 ? (
                <p className="text-red-600">Dieser Schlüssel hat kein verbleibendes Guthaben.</p>
              ) : (
                <p className="text-gray-600">Verbleibende Guthaben: {remainingCredits}</p>
              )}
              <p className="mt-2 text-xs leading-relaxed text-gray-500">
                Bei Nutzung eines Zugangsschlüssels wird keine E-Mail versendet.
                <br />
                Bitte laden Sie die Bescheinigung direkt nach der Erstellung herunter und sichern Sie sie.
              </p>
            </div>
          )}
        </div>

        <p className="text-xs text-gray-500">
          Mit der Erstellung erkennen Sie an, dass Certif-Scope ausgestellte PDFs nicht dauerhaft speichert. Verlorene Bescheinigungen werden nicht gespeichert und können nicht wiederhergestellt werden. Eine Neuausstellung kann angefragt werden, ist aber nicht garantiert.
        </p>

        {missingRequiredFields.length > 0 && (
          <div id="form-error-summary" role="alert" className="rounded-xl border-2 border-red-300 bg-red-50 p-5 text-red-800 shadow-sm">
            <p className="mb-2 text-base font-semibold">Stripe kann derzeit nicht geöffnet werden.</p>
            <p className="mb-3 text-sm">Bitte füllen Sie die folgenden Pflichtfelder aus:</p>
            <ul className="list-disc space-y-1 pl-5 text-sm font-medium">
              {missingRequiredFields.map((field) => <li key={field}>{field}</li>)}
            </ul>
          </div>
        )}

        <button
          type="button"
          onClick={handleSubmit}
          disabled={isSubmitting || isButtonBlocked}
          className={`w-full rounded-xl py-4 font-semibold transition ${
            isSubmitting || isButtonBlocked
              ? "cursor-not-allowed bg-gray-400 text-white"
              : "bg-[#0B3A63] text-white hover:bg-[#092f50]"
          }`}
        >
          {isSubmitting ? "Verarbeitung läuft..." : buttonLabel}
        </button>

        {isRedeeming && (
          <button type="button" onClick={clearKey} className="mt-2 w-full text-center text-xs text-gray-500 underline hover:text-gray-700">
            Ich möchte stattdessen 89 € bezahlen
          </button>
        )}

        <p className="mt-4 text-center text-xs leading-relaxed text-gray-500">
          Bei Nutzung eines Zugangsschlüssels wird ein Guthaben pro Bescheinigung verbraucht. Guthaben sind nicht erstattungsfähig und nicht übertragbar.
        </p>

        <p className="mt-4 text-xs leading-relaxed text-gray-500">
          Diese Bescheinigung ist indikativ, nicht regulatorisch und basiert ausschließlich auf den bereitgestellten Informationen. Sie ist kein Audit von Treibhausgasemissionen, keine zertifizierte CO₂-Bilanz und kein Compliance-Bericht.
        </p>
      </div>
    </section>
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
        className={`mt-1 w-full rounded-md border px-4 py-2 ${hasError ? "border-red-300 bg-red-50" : "border-gray-300"}`}
      />
      <p className="mt-1 text-xs text-gray-500">{hint}</p>
    </div>
  );
}
