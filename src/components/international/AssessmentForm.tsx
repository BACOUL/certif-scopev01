"use client";

import { useId, useState } from "react";
import {
  EMISSION_FACTORS,
  METHODOLOGY,
  parseExpense,
} from "@/lib/indicative-model";
import { formCopy } from "@/lib/form-copy";
import {
  localeNames,
  numberLocales,
  paths,
  SECTORS,
  sectorLabel,
  SITE_LOCALES,
  type SiteLocale,
} from "@/lib/site-locales";

const keys = Object.keys(EMISSION_FACTORS) as (keyof typeof EMISSION_FACTORS)[];
const inputClass =
  "mt-1 w-full rounded-md border border-gray-300 bg-white px-4 py-3 text-gray-800";
const buttonClass =
  "inline-flex min-h-[52px] items-center justify-center rounded-xl bg-[#0B3A63] px-6 py-3 font-semibold text-white hover:bg-[#082C4B] disabled:cursor-not-allowed disabled:bg-gray-400";

export default function AssessmentForm({ locale }: { locale: "en" | "de" }) {
  const c = formCopy[locale];
  const id = useId();
  const currentYear = new Date().getFullYear();
  const [step, setStep] = useState(1);
  const [companyName, setCompanyName] = useState("");
  const [companyId, setCompanyId] = useState("");
  const [sector, setSector] = useState("");
  const [year, setYear] = useState(String(currentYear));
  const [country, setCountry] = useState(locale === "de" ? "DE" : "EU");
  const [attestationLocale, setAttestationLocale] =
    useState<SiteLocale>(locale);
  const [expenses, setExpenses] = useState<Record<string, string>>(
    Object.fromEntries(keys.map((k) => [k, ""])),
  );
  const [errors, setErrors] = useState<string[]>([]);
  const [accepted, setAccepted] = useState(false);
  const [accessKey, setAccessKey] = useState("");
  const [keyStatus, setKeyStatus] = useState<
    "idle" | "checking" | "valid" | "invalid"
  >("idle");
  const [credits, setCredits] = useState(0);
  const [keyError, setKeyError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const amounts = keys.map((k) => parseExpense(expenses[k]));
  const total =
    Math.round(
      (amounts.reduce(
        (sum, amount, i) => sum + amount * EMISSION_FACTORS[keys[i]],
        0,
      ) /
        1000) *
        10,
    ) / 10;
  const redeeming = keyStatus === "valid" && credits > 0;

  function validate(stage: number) {
    const next: string[] = [];
    if (stage === 1 || stage === 3) {
      if (!companyName.trim()) next.push(c.errors.company);
      if (!sector) next.push(c.errors.sector);
      if (
        !year.trim() ||
        !Number.isInteger(Number(year)) ||
        Number(year) < 2000 ||
        Number(year) > currentYear
      )
        next.push(`${c.errors.year} ${currentYear}.`);
    }
    if (
      stage >= 2 &&
      (keys.some((k) => !expenses[k].trim()) ||
        amounts.some((a) => !Number.isFinite(a)) ||
        !amounts.some((a) => a > 0))
    )
      next.push(c.errors.expenses);
    if (stage === 3 && !accepted) next.push(c.errors.accepted);
    setErrors(next);
    if (next.length)
      window.setTimeout(
        () => document.getElementById(`${id}-errors`)?.focus(),
        0,
      );
    return next.length === 0;
  }
  function advance() {
    if (!validate(step)) return;
    setStep(step + 1);
    window.setTimeout(() => document.getElementById(`${id}-title`)?.focus(), 0);
  }
  async function checkKey() {
    setKeyStatus("checking");
    setKeyError("");
    setCredits(0);
    try {
      const res = await fetch("/api/check-key", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ key: accessKey.trim() }),
      });
      const data = await res.json();
      if (
        !res.ok ||
        !data.valid ||
        !Number.isInteger(data.remainingCredits) ||
        data.remainingCredits <= 0
      ) {
        setKeyStatus("invalid");
        setKeyError(c.errors.key);
      } else {
        setKeyStatus("valid");
        setCredits(data.remainingCredits);
      }
    } catch {
      setKeyStatus("invalid");
      setKeyError(c.errors.keyNetwork);
    }
  }
  async function submit() {
    if (!validate(3) || submitting || keyStatus === "checking") return;
    setSubmitting(true);
    const payload = {
      companyName: companyName.trim(),
      companySector: sectorLabel(sector, attestationLocale),
      entityIdentifier: companyId.trim(),
      year,
      country,
      totalCO2e: total,
      methodology: METHODOLOGY,
      attestationLocale,
      siteLocale: locale,
    };
    try {
      const res = await fetch(redeeming ? "/api/redeem-key" : "/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...payload,
          ...(redeeming && { accessKey: accessKey.trim() }),
        }),
      });
      const data = await res.json();
      if (!res.ok || !data.url) throw new Error("Request failed");
      if (redeeming)
        sessionStorage.setItem("certifScopePayload", JSON.stringify(payload));
      window.location.href = data.url;
    } catch {
      setErrors([c.errors.submit]);
      setSubmitting(false);
    }
  }
  const summary = [
    [c.company, companyName],
    [c.year, year],
    [c.country, c.countries[["FR", "DE", "EU"].indexOf(country)]],
    [c.sector, sectorLabel(sector, locale)],
    [c.result, `${total.toLocaleString(numberLocales[locale])} tCO₂e`],
    [c.language, localeNames[attestationLocale]],
    [c.document, c.documentValue],
    [c.price, redeeming ? c.credit : c.unitPrice],
    [c.delivery, redeeming ? c.afterCredit : c.afterPayment],
  ];
  return (
    <section className="mx-auto max-w-3xl space-y-6 px-6 py-8 md:py-12">
      <header>
        <h1 className="text-3xl font-extrabold text-[#0B3A63] md:text-4xl">
          {c.title}
        </h1>
        <p className="mt-4 leading-relaxed text-[#475569]">{c.intro}</p>
      </header>
      <nav
        aria-label={c.steps.join(" → ")}
        className="grid grid-cols-3 gap-2 text-sm"
      >
        {c.steps.map((label, i) => (
          <div
            key={label}
            aria-current={step === i + 1 ? "step" : undefined}
            className={`rounded-lg border px-3 py-3 ${step === i + 1 ? "bg-[#0B3A63] text-white" : "bg-[#F8FAFC] text-gray-600"}`}
          >
            {i + 1}. {label}
          </div>
        ))}
      </nav>
      <h2
        id={`${id}-title`}
        tabIndex={-1}
        className="text-xl font-bold text-[#0B3A63]"
      >
        {c.step} {step} {c.of} 3 — {c.stepTitles[step - 1]}
      </h2>
      {!!errors.length && (
        <div
          id={`${id}-errors`}
          tabIndex={-1}
          role="alert"
          className="rounded-lg border border-red-200 bg-red-50 p-4 text-red-800"
        >
          {errors.map((e) => (
            <p key={e}>{e}</p>
          ))}
        </div>
      )}
      {step === 1 && (
        <div className="space-y-5 rounded-xl border p-5 md:p-6">
          <Field label={`${c.company} *`} id={`${id}-company`}>
            <input
              id={`${id}-company`}
              className={inputClass}
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
            />
          </Field>
          <Field label={`${c.sector} *`} id={`${id}-sector`}>
            <select
              id={`${id}-sector`}
              className={inputClass}
              value={sector}
              onChange={(e) => setSector(e.target.value)}
            >
              <option value="">{c.selectSector}</option>
              {SECTORS.map((s) => (
                <option key={s.value} value={s.value}>
                  {s[locale]}
                </option>
              ))}
            </select>
          </Field>
          <Field label={c.identifier} id={`${id}-identifier`}>
            <input
              id={`${id}-identifier`}
              className={inputClass}
              value={companyId}
              onChange={(e) => setCompanyId(e.target.value)}
            />
          </Field>
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label={c.year} id={`${id}-year`}>
              <input
                id={`${id}-year`}
                type="number"
                min={2000}
                max={currentYear}
                className={inputClass}
                value={year}
                onChange={(e) => setYear(e.target.value)}
              />
            </Field>
            <Field label={c.country} id={`${id}-country`}>
              <select
                id={`${id}-country`}
                className={inputClass}
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              >
                {["FR", "DE", "EU"].map((value, i) => (
                  <option key={value} value={value}>
                    {c.countries[i]}
                  </option>
                ))}
              </select>
            </Field>
          </div>
          <Field label={c.language} id={`${id}-language`}>
            <select
              id={`${id}-language`}
              className={inputClass}
              value={attestationLocale}
              onChange={(e) =>
                setAttestationLocale(e.target.value as SiteLocale)
              }
            >
              {SITE_LOCALES.map((l) => (
                <option key={l} value={l}>
                  {localeNames[l]}
                </option>
              ))}
            </select>
          </Field>
          <button
            type="button"
            className={`${buttonClass} w-full`}
            onClick={advance}
          >
            {c.next}
          </button>
        </div>
      )}
      {step === 2 && (
        <div className="space-y-5 rounded-xl border p-5 md:p-6">
          <p className="text-sm leading-relaxed text-gray-600">
            {c.expenseIntro}
          </p>
          {keys.map((k, i) => (
            <Field key={k} label={c.categories[i]} id={`${id}-${k}`}>
              <input
                id={`${id}-${k}`}
                aria-describedby={`${id}-${k}-hint`}
                inputMode="decimal"
                placeholder={c.placeholder}
                className={inputClass}
                value={expenses[k]}
                onChange={(e) =>
                  setExpenses((prev) => ({ ...prev, [k]: e.target.value }))
                }
              />
              <p id={`${id}-${k}-hint`} className="mt-1 text-xs text-gray-500">
                {c.hints[i]}
              </p>
            </Field>
          ))}
          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              className="rounded-xl border px-6 py-3"
              onClick={() => {
                setErrors([]);
                setStep(1);
              }}
            >
              {c.back}
            </button>
            <button type="button" className={buttonClass} onClick={advance}>
              {c.review}
            </button>
          </div>
        </div>
      )}
      {step === 3 && (
        <div className="space-y-6">
          <button
            type="button"
            className="font-semibold text-[#0B3A63] underline"
            onClick={() => {
              setErrors([]);
              setStep(2);
            }}
          >
            {c.modify}
          </button>
          <div className="rounded-xl border bg-[#F8FAFC] p-6">
            <h3 className="font-semibold text-[#0B3A63]">{c.result}</h3>
            <p className="mt-3 text-4xl font-bold text-[#0B3A63]">
              {total.toLocaleString(numberLocales[locale])} tCO₂e
            </p>
            <p className="mt-3 text-sm text-gray-600">{c.indicative}</p>
          </div>
          <details className="rounded-xl border p-5">
            <summary className="font-semibold text-[#0B3A63]">
              {c.keyTitle}
            </summary>
            <div className="mt-4 space-y-3">
              <Field label={c.key} id={`${id}-key`}>
                <input
                  id={`${id}-key`}
                  disabled={keyStatus === "checking"}
                  className={inputClass}
                  value={accessKey}
                  onChange={(e) => {
                    setAccessKey(e.target.value);
                    setKeyStatus("idle");
                    setCredits(0);
                    setKeyError("");
                  }}
                />
              </Field>
              <button
                type="button"
                className={buttonClass}
                disabled={!accessKey.trim() || keyStatus === "checking"}
                onClick={checkKey}
              >
                {keyStatus === "checking" ? c.checking : c.checkKey}
              </button>
              {keyError && (
                <p role="alert" className="text-red-700">
                  {keyError}
                </p>
              )}
              {redeeming && (
                <>
                  <p>
                    {c.remaining}: {credits}
                  </p>
                  <button
                    type="button"
                    className="underline"
                    onClick={() => {
                      setAccessKey("");
                      setKeyStatus("idle");
                      setCredits(0);
                    }}
                  >
                    {c.payInstead}
                  </button>
                </>
              )}
            </div>
          </details>
          <div className="rounded-xl border bg-[#F8FAFC] p-5">
            <h3 className="text-lg font-bold text-[#0B3A63]">{c.summary}</h3>
            <p className="mt-2 text-sm text-gray-600">{c.summaryIntro}</p>
            <dl className="mt-5 grid gap-3 sm:grid-cols-2">
              {summary.map(([label, value]) => (
                <div
                  key={label}
                  className="min-w-0 rounded-lg border bg-white p-4"
                >
                  <dt className="text-xs font-semibold uppercase text-gray-500">
                    {label}
                  </dt>
                  <dd className="mt-1 break-words text-sm font-semibold text-[#0B3A63]">
                    {value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
          <p className="rounded-xl border p-5 text-sm text-gray-600">
            {c.archive}
          </p>
          <label className="flex items-start gap-3 rounded-xl border p-5 text-sm leading-relaxed">
            <input
              type="checkbox"
              checked={accepted}
              onChange={(e) => setAccepted(e.target.checked)}
              className="mt-1 h-4 w-4 shrink-0"
            />
            <span>{c.accepted}</span>
          </label>
          <button
            type="button"
            className={`${buttonClass} w-full`}
            disabled={!accepted || submitting || keyStatus === "checking"}
            onClick={submit}
          >
            {submitting
              ? c.processing
              : redeeming
                ? c.generateCredit
                : c.generate}
          </button>
          <p className="text-xs text-gray-500">{c.keyNotice}</p>
          <p className="text-sm text-gray-600">
            {c.question}{" "}
            <a
              className="font-semibold text-[#0B3A63] underline"
              href={paths[locale].contact}
            >
              {c.contact}
            </a>{" "}
            ·{" "}
            <a
              className="font-semibold text-[#0B3A63] underline"
              href={`/api/sample?lang=${attestationLocale}`}
            >
              {c.sample}
            </a>
          </p>
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
      <label htmlFor={id} className="block text-sm font-medium">
        {label}
      </label>
      {children}
    </div>
  );
}
