"use client";

import { useId, useState } from "react";
import {
  EMISSION_FACTORS,
  METHODOLOGY,
  parseExpense,
} from "@/lib/indicative-model";
import {
  DEFAULT_COUNTRY_BY_LOCALE,
  getEuFlowCopy,
  localizedCountryName,
  type EuNonCoreLocale,
  type SectorCode,
} from "@/lib/eu-flow";
import { EU_HOME_COPY } from "@/lib/eu-home-locales";

const expenseKeys = Object.keys(EMISSION_FACTORS) as (keyof typeof EMISSION_FACTORS)[];
const sectorCodes: SectorCode[] = [
  "professional_services",
  "information_technology",
  "manufacturing",
  "construction",
  "wholesale_retail",
  "transport_logistics",
  "hospitality_events",
  "other",
];

const inputClass =
  "mt-1 w-full rounded-xl border border-[#0B3A63]/15 bg-white px-4 py-3 text-[#1f2937] outline-none focus:border-[#1FB6C1] focus:ring-2 focus:ring-[#1FB6C1]/20";
const primaryButton =
  "inline-flex min-h-[52px] items-center justify-center rounded-xl bg-[#0B3A63] px-6 py-3 font-semibold text-white hover:bg-[#082C4B] disabled:cursor-not-allowed disabled:opacity-60";

export default function EuAssessmentForm({ locale, countryOptions }: {
  locale: EuNonCoreLocale;
  countryOptions: { code: string; label: string }[];
}) {
  const c = getEuFlowCopy(locale);
  const home = EU_HOME_COPY[locale];
  const id = useId();
  const currentYear = new Date().getFullYear();
  const [step, setStep] = useState(1);
  const [companyName, setCompanyName] = useState("");
  const [companyId, setCompanyId] = useState("");
  const [sector, setSector] = useState<SectorCode | "">("");
  const [year, setYear] = useState(String(currentYear));
  const [country, setCountry] = useState(DEFAULT_COUNTRY_BY_LOCALE[locale]);
  const [expenses, setExpenses] = useState<Record<string, string>>(
    Object.fromEntries(expenseKeys.map((key) => [key, ""])),
  );
  const [accepted, setAccepted] = useState(false);
  const [errors, setErrors] = useState<string[]>([]);
  const [accessKey, setAccessKey] = useState("");
  const [keyStatus, setKeyStatus] = useState<"idle" | "checking" | "valid" | "invalid">("idle");
  const [credits, setCredits] = useState(0);
  const [keyError, setKeyError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const amounts = expenseKeys.map((key) => parseExpense(expenses[key]));
  const total =
    Math.round(
      (amounts.reduce(
        (sum, amount, index) => sum + amount * EMISSION_FACTORS[expenseKeys[index]],
        0,
      ) /
        1000) *
        10,
    ) / 10;
  const redeeming = keyStatus === "valid" && credits > 0;

  function showError(message: string) {
    setErrors([message]);
    window.setTimeout(() => document.getElementById(`${id}-errors`)?.focus(), 0);
  }

  function validate(stage: number) {
    const next: string[] = [];
    if (stage === 1 || stage === 3) {
      if (!companyName.trim()) next.push(c.company);
      if (!sector) next.push(c.sector);
      if (
        !year.trim() ||
        !Number.isInteger(Number(year)) ||
        Number(year) < 2000 ||
        Number(year) > currentYear
      )
        next.push(`${c.year}: 2000–${currentYear}`);
    }
    if (
      stage >= 2 &&
      (expenseKeys.some((key) => !expenses[key].trim()) ||
        amounts.some((amount) => !Number.isFinite(amount) || amount < 0) ||
        !amounts.some((amount) => amount > 0))
    )
      next.push(c.expenseIntro);
    if (stage === 3 && !accepted) next.push(c.accepted);
    setErrors(next);
    if (next.length)
      window.setTimeout(() => document.getElementById(`${id}-errors`)?.focus(), 0);
    return next.length === 0;
  }

  function advance() {
    if (!validate(step)) return;
    setStep((value) => Math.min(3, value + 1));
    window.setTimeout(() => document.getElementById(`${id}-step-title`)?.focus(), 0);
  }

  async function checkKey() {
    if (!accessKey.trim()) return;
    setKeyStatus("checking");
    setKeyError("");
    setCredits(0);
    try {
      const response = await fetch("/api/check-key", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ key: accessKey.trim() }),
      });
      const data = await response.json();
      if (
        !response.ok ||
        !data.valid ||
        !Number.isInteger(data.remainingCredits) ||
        data.remainingCredits <= 0
      ) {
        setKeyStatus("invalid");
        setKeyError(c.keyInvalid);
        return;
      }
      setKeyStatus("valid");
      setCredits(data.remainingCredits);
    } catch {
      setKeyStatus("invalid");
      setKeyError(c.keyNetwork);
    }
  }

  async function submit() {
    if (!validate(3) || submitting || keyStatus === "checking" || !sector) return;
    setSubmitting(true);
    setErrors([]);
    const payload = {
      companyName: companyName.trim(),
      companySector: c.sectors[sector],
      entityIdentifier: companyId.trim(),
      year,
      country: localizedCountryName(locale, country),
      countryCode: country,
      totalCO2e: total,
      methodology: METHODOLOGY,
      attestationLocale: locale,
      siteLocale: locale,
    };
    try {
      const response = await fetch(redeeming ? "/api/redeem-key" : "/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...payload,
          ...(redeeming ? { accessKey: accessKey.trim() } : {}),
        }),
      });
      const data = await response.json();
      if (!response.ok || !data.url) throw new Error("REQUEST_FAILED");
      window.location.href = data.url;
    } catch {
      showError(c.submitError);
      setSubmitting(false);
    }
  }

  const formattedTotal = new Intl.NumberFormat(locale, {
    minimumFractionDigits: 0,
    maximumFractionDigits: 1,
  }).format(total);

  return (
    <section className="mx-auto max-w-4xl px-6 py-10 md:px-8 md:py-14">
      <header className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#64748B]">
          Certif-Scope · 89 €
        </p>
        <h1 className="mt-3 text-3xl font-extrabold leading-tight text-[#0B3A63] md:text-4xl">
          {home.cta}
        </h1>
        <p className="mt-4 text-base leading-relaxed text-[#475569] md:text-lg">
          {home.intro}
        </p>
      </header>

      <nav className="mt-8 grid grid-cols-3 gap-2 text-xs sm:text-sm" aria-label={c.steps.join(" → ")}>
        {c.steps.map((label, index) => (
          <div
            key={label}
            aria-current={step === index + 1 ? "step" : undefined}
            className={`rounded-xl border px-3 py-3 text-center font-semibold ${
              step === index + 1
                ? "border-[#0B3A63] bg-[#0B3A63] text-white"
                : "border-[#0B3A63]/10 bg-[#F8FAFC] text-[#64748B]"
            }`}
          >
            {index + 1}. {label}
          </div>
        ))}
      </nav>

      <h2
        id={`${id}-step-title`}
        tabIndex={-1}
        className="mt-8 text-xl font-bold text-[#0B3A63]"
      >
        {c.steps[step - 1]}
      </h2>

      {!!errors.length && (
        <div
          id={`${id}-errors`}
          tabIndex={-1}
          role="alert"
          className="mt-5 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-800"
        >
          {errors.map((error) => (
            <p key={error}>{error}</p>
          ))}
        </div>
      )}

      {step === 1 && (
        <div className="mt-5 space-y-5 rounded-2xl border border-[#0B3A63]/10 bg-white p-5 shadow-sm md:p-7">
          <Field label={`${c.company} *`} id={`${id}-company`}>
            <input id={`${id}-company`} className={inputClass} value={companyName} onChange={(event) => setCompanyName(event.target.value)} />
          </Field>
          <Field label={`${c.sector} *`} id={`${id}-sector`}>
            <select id={`${id}-sector`} className={inputClass} value={sector} onChange={(event) => setSector(event.target.value as SectorCode | "")}>
              <option value="">{c.sectorPlaceholder}</option>
              {sectorCodes.map((code) => (
                <option key={code} value={code}>{c.sectors[code]}</option>
              ))}
            </select>
          </Field>
          <Field label={c.identifier} id={`${id}-identifier`}>
            <input id={`${id}-identifier`} className={inputClass} value={companyId} onChange={(event) => setCompanyId(event.target.value)} />
          </Field>
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label={c.year} id={`${id}-year`}>
              <input id={`${id}-year`} type="number" min={2000} max={currentYear} className={inputClass} value={year} onChange={(event) => setYear(event.target.value)} />
            </Field>
            <Field label={c.country} id={`${id}-country`}>
              <select id={`${id}-country`} className={inputClass} value={country} onChange={(event) => setCountry(event.target.value)}>
                {countryOptions.map((option) => (
                  <option key={option.code} value={option.code}>{option.label}</option>
                ))}
              </select>
            </Field>
          </div>
          <button type="button" className={`${primaryButton} w-full`} onClick={advance}>
            {c.continue}
          </button>
        </div>
      )}

      {step === 2 && (
        <div className="mt-5 space-y-5 rounded-2xl border border-[#0B3A63]/10 bg-white p-5 shadow-sm md:p-7">
          <p className="text-sm leading-relaxed text-[#64748B]">{c.expenseIntro}</p>
          {expenseKeys.map((key, index) => (
            <Field key={key} label={c.categories[index]} id={`${id}-${key}`}>
              <input
                id={`${id}-${key}`}
                inputMode="decimal"
                placeholder="0"
                className={inputClass}
                value={expenses[key]}
                onChange={(event) => {
                  const value = event.currentTarget.value;
                  setExpenses((previous) => ({ ...previous, [key]: value }));
                }}
              />
            </Field>
          ))}
          <div className="flex flex-wrap gap-3">
            <button type="button" className="min-h-[52px] rounded-xl border border-[#0B3A63]/20 px-6 py-3 font-semibold text-[#0B3A63]" onClick={() => { setErrors([]); setStep(1); }}>
              {c.back}
            </button>
            <button type="button" className={primaryButton} onClick={advance}>
              {c.review}
            </button>
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="mt-5 space-y-6">
          <div className="rounded-2xl border border-[#1FB6C1]/20 bg-[#F3FBFC] p-6">
            <p className="font-semibold text-[#0B3A63]">{c.result}</p>
            <p className="mt-3 text-4xl font-extrabold text-[#0B3A63]">{formattedTotal} tCO₂e</p>
            <p className="mt-3 text-sm text-[#64748B]">{c.indicative}</p>
          </div>

          <button type="button" className="font-semibold text-[#0B3A63] underline" onClick={() => { setErrors([]); setStep(2); }}>
            {c.edit}
          </button>

          <div className="rounded-2xl border border-[#0B3A63]/10 bg-white p-6">
            <h3 className="text-lg font-bold text-[#0B3A63]">{c.summary}</h3>
            <dl className="mt-5 grid gap-3 sm:grid-cols-2">
              {[
                [c.company, companyName],
                [c.sector, sector ? c.sectors[sector] : "—"],
                [c.year, year],
                [c.country, localizedCountryName(locale, country)],
                [c.result, `${formattedTotal} tCO₂e`],
                ["PDF", `${locale.toUpperCase()} · 89 €`],
              ].map(([label, value]) => (
                <div key={label} className="rounded-xl border border-[#0B3A63]/10 bg-[#F8FAFC] p-4">
                  <dt className="text-xs font-semibold uppercase text-[#64748B]">{label}</dt>
                  <dd className="mt-1 break-words font-semibold text-[#0B3A63]">{value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <details className="rounded-2xl border border-[#0B3A63]/10 bg-white p-5">
            <summary className="cursor-pointer font-semibold text-[#0B3A63]">{c.keyTitle}</summary>
            <div className="mt-4 space-y-3">
              <Field label={c.keyLabel} id={`${id}-key`}>
                <input
                  id={`${id}-key`}
                  className={inputClass}
                  value={accessKey}
                  disabled={keyStatus === "checking"}
                  onChange={(event) => {
                    setAccessKey(event.target.value);
                    setKeyStatus("idle");
                    setCredits(0);
                    setKeyError("");
                  }}
                />
              </Field>
              <button type="button" className={primaryButton} disabled={!accessKey.trim() || keyStatus === "checking"} onClick={checkKey}>
                {keyStatus === "checking" ? c.processing : c.keyCheck}
              </button>
              {keyError && <p role="alert" className="text-sm text-red-700">{keyError}</p>}
              {redeeming && <p className="text-sm font-semibold text-[#0B3A63]">{credits}</p>}
            </div>
          </details>

          <label className="flex items-start gap-3 rounded-2xl border border-[#0B3A63]/10 bg-[#F8FAFC] p-5 text-sm leading-relaxed text-[#475569]">
            <input type="checkbox" className="mt-1 h-4 w-4" checked={accepted} onChange={(event) => setAccepted(event.target.checked)} />
            <span>{c.accepted}</span>
          </label>

          <button type="button" className={`${primaryButton} w-full`} disabled={submitting} onClick={submit}>
            {submitting ? c.processing : redeeming ? `${c.pay} · 1` : c.pay}
          </button>
          <p className="text-center text-xs leading-relaxed text-[#64748B]">{home.limitText}</p>
        </div>
      )}
    </section>
  );
}

function Field({
  label,
  id,
  children,
}: {
  label: string;
  id: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="text-sm font-semibold text-[#0B3A63]">{label}</label>
      {children}
    </div>
  );
}
