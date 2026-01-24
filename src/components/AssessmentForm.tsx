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

/* ======================================================
   TYPES
====================================================== */

type AttestationLocale = "en" | "fr" | "de";

type FormErrors = {
  companyName?: string;
  sector?: string;
  submit?: string;
};

/* ======================================================
   SECTORS (DISPLAY ONLY)
====================================================== */

const SECTORS = [
  { value: "professional_services", label: "Professional services" },
  { value: "information_technology", label: "Information & technology" },
  { value: "manufacturing", label: "Manufacturing & industry" },
  { value: "construction", label: "Construction & real estate" },
  { value: "wholesale_retail", label: "Wholesale & retail" },
  { value: "transport_logistics", label: "Transport & logistics" },
  { value: "hospitality_events", label: "Hospitality, travel & events" },
  { value: "other", label: "Other activities" },
];

/* ======================================================
   CALCULATION & UTILS
====================================================== */

// ✅ PATCH CRITIQUE : Fonction helper pour gérer les virgules
function toNumber(value: string): number {
  if (!value) return 0;
  // Remplace la virgule par un point avant de convertir
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

/* ======================================================
   UI COMPONENTS
====================================================== */

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

/* ======================================================
   MAIN FORM
====================================================== */

export default function AssessmentForm() {
  const currentYear = new Date().getFullYear();

  const [companyName, setCompanyName] = useState("");
  const [companyId, setCompanyId] = useState("");
  const [sector, setSector] = useState("");
  const [year, setYear] = useState(currentYear);
  const [country, setCountry] = useState("FR");

  // ✅ RESTORATION 1 : État pour l'email
  const [emailForDelivery, setEmailForDelivery] = useState("");

  const [attestationLocale, setAttestationLocale] =
    useState<AttestationLocale>("en");

  const [expenses, setExpenses] = useState({
    it: "",
    services: "",
    goods: "",
    logistics: "",
    travel: "",
    accommodation: "",
    other: "",
  });

  // ACCESS KEY STATE
  const [accessKey, setAccessKey] = useState("");
  const [keyStatus, setKeyStatus] = useState<"idle" | "checking" | "valid" | "invalid">("idle");
  const [remainingCredits, setRemainingCredits] = useState<number | null>(null);
  const [keyError, setKeyError] = useState("");

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const update = (field: string, value: string) => {
    setExpenses((prev) => ({ ...prev, [field]: value }));
  };

  // ✅ PATCH CRITIQUE : Utilisation de toNumber() ici
  const numericExpenses = Object.fromEntries(
    Object.entries(expenses).map(([k, v]) => [k, toNumber(v)])
  );

  const totalCO2e = calculateTotalCO2e(numericExpenses);

  const validate = (): boolean => {
    const nextErrors: FormErrors = {};

    if (!companyName.trim()) {
      nextErrors.companyName =
        "Company name is required to issue the attestation.";
    }

    if (!sector) {
      nextErrors.sector =
        "Please select a main sector of activity.";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  // CHECK KEY LOGIC
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
        setKeyError(data.error || "Invalid or expired access key.");
      } else {
        setKeyStatus("valid");
        setRemainingCredits(data.remainingCredits);
      }
    } catch (e) {
      setKeyStatus("invalid");
      setKeyError("Unable to verify key. Please try again.");
    }
  };

  // HELPER: RESET KEY (For "Pay instead" logic)
  const clearKey = () => {
    setAccessKey("");
    setKeyStatus("idle");
    setRemainingCredits(null);
    setKeyError("");
  };

  const handleSubmit = async () => {
    if (!validate()) return;

    // Block only if checking or valid but empty credits
    if (keyStatus === "checking" || (keyStatus === "valid" && remainingCredits === 0)) {
      return;
    }

    setIsSubmitting(true);
    setErrors({});

    // DECIDE MODE: REDEEM OR STRIPE CHECKOUT
    // Only redeem if key is explicitly valid AND has credits
    const isRedeeming = keyStatus === "valid" && remainingCredits !== null && remainingCredits > 0;
    const endpoint = isRedeeming ? "/api/redeem-key" : "/api/checkout";

    const basePayload = {
      companyName,
      companySector: sector,
      entityIdentifier: companyId || "",
      year: String(year),
      country,
      totalCO2e,
      methodology: METHODOLOGY,
      attestationLocale,

      // ✅ RESTORATION 2 : Payload conditionnel
      ...(emailForDelivery && {
        emailForDelivery: emailForDelivery.trim(),
      }),
    };

    // Add accessKey only if we are actually redeeming
    const payload = {
      ...basePayload,
      ...(isRedeeming && { accessKey }),
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

      // ✅ AJOUT : Stockage session avant redirection (UNIQUEMENT flow clé)
      if (isRedeeming) {
        sessionStorage.setItem(
          "certifScopePayload",
          JSON.stringify(basePayload)
        );
      }

      // Redirect to Stripe or to the PDF generation URL (depending on API response)
      window.location.href = url;
    } catch {
      setErrors({
        submit:
          "Unable to process request. Please try again or refresh the page.",
      });
      setIsSubmitting(false);
    }
  };

  // Determine button label and blocked state
  const isRedeeming = keyStatus === "valid" && remainingCredits !== null && remainingCredits > 0;
  
  // Block only on 'checking' or 'valid but empty'
  const isButtonBlocked = keyStatus === "checking" || (keyStatus === "valid" && remainingCredits === 0);
  
  const buttonLabel = isRedeeming
    ? "Generate my carbon attestation (1 credit)" 
    : "Generate my carbon attestation — 89 €";

  return (
    <main className="min-h-screen bg-white">
      <section className="max-w-3xl mx-auto px-6 pt-16 pb-20 space-y-10">

        {/* INTRO */}
        <div>
          <p className="text-sm text-gray-500 mb-2">
            Step 1 of 3 — Company & context
          </p>
          <h1 className="text-3xl md:text-4xl font-extrabold text-[#0B3A63] mb-3">
            Generate your carbon attestation
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            Indicative spend-based estimation. No audit. No physical data required.
          </p>
          <p className="text-sm text-gray-500 mt-3">
            <strong>Price:</strong> 89 € · One-time fee · No subscription
          </p>
        </div>

        {/* STEP 1 */}
        <Accordion
          title="Company information"
          intro="Provide basic identification and context information. Fields marked with * are required."
          defaultOpen
        >
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium">
                Company / legal entity name *
              </label>
              <input
                type="text"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                className={`w-full border rounded-md px-4 py-2 mt-1 ${
                  errors.companyName ? "border-red-500" : ""
                }`}
              />
              {errors.companyName && (
                <p className="text-sm text-red-600 mt-1">
                  {errors.companyName}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium">
                Main sector of activity *
              </label>
              <select
                value={sector}
                onChange={(e) => setSector(e.target.value)}
                className={`w-full border rounded-md px-4 py-2 mt-1 ${
                  errors.sector ? "border-red-500" : ""
                }`}
              >
                <option value="">Select a sector</option>
                {SECTORS.map((s) => (
                  <option key={s.value} value={s.label}>
                    {s.label}
                  </option>
                ))}
              </select>
              {errors.sector && (
                <p className="text-sm text-red-600 mt-1">
                  {errors.sector}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium">
                Business identifier (optional)
              </label>
              <input
                type="text"
                value={companyId}
                onChange={(e) => setCompanyId(e.target.value)}
                className="w-full border rounded-md px-4 py-2 mt-1"
              />
            </div>
          </div>
        </Accordion>

        {/* STEP 2 */}
        <Accordion
          title="Context"
          intro="Define the reference year, country, and attestation language."
          defaultOpen
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium">
                Reference year
              </label>
              <input
                type="number"
                value={year}
                onChange={(e) => setYear(Number(e.target.value))}
                className="w-full border rounded-md px-4 py-2 mt-1"
              />
            </div>

            <div>
              <label className="block text-sm font-medium">
                Main country
              </label>
              <select
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                className="w-full border rounded-md px-4 py-2 mt-1"
              >
                <option value="FR">France</option>
                <option value="DE">Germany</option>
                <option value="EU">Other EU</option>
              </select>
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium">
                Attestation language
              </label>
              <select
                value={attestationLocale}
                onChange={(e) =>
                  setAttestationLocale(e.target.value as AttestationLocale)
                }
                className="w-full border rounded-md px-4 py-2 mt-1"
              >
                <option value="en">English (legal reference)</option>
                <option value="fr">Français</option>
                <option value="de">Deutsch</option>
              </select>
              <p className="text-xs text-gray-500 mt-1">
                English remains the legal reference in case of discrepancy.
              </p>
            </div>
          </div>
        </Accordion>

        {/* STEP 2 — EXPENSES */}
        <p className="text-sm text-gray-500">
          Step 2 of 3 — Annual expenses
        </p>

        <Accordion
          title="Annual external expenses (€)"
          intro="Provide approximate annual amounts. Reasonable estimates are sufficient."
        >
          <Input label="IT & digital services" hint="Software, cloud, SaaS, IT outsourcing" value={expenses.it} onChange={(v) => update("it", v)} />
          <Input label="Professional services" hint="Consulting, accounting, legal services" value={expenses.services} onChange={(v) => update("services", v)} />
          <Input label="Purchased goods" hint="Office supplies, equipment, materials" value={expenses.goods} onChange={(v) => update("goods", v)} />
          <Input label="Logistics & transport services" hint="Freight, delivery, transport providers" value={expenses.logistics} onChange={(v) => update("logistics", v)} />
          <Input label="Business travel" hint="Flights, trains, taxis, car rentals" value={expenses.travel} onChange={(v) => update("travel", v)} />
          <Input label="Accommodation & events" hint="Hotels, conferences, corporate events" value={expenses.accommodation} onChange={(v) => update("accommodation", v)} />
          <Input label="Other external expenses" hint="Marketing, subscriptions, miscellaneous costs" value={expenses.other} onChange={(v) => update("other", v)} />
        </Accordion>

        {/* STEP 3 */}
        <p className="text-sm text-gray-500">
          Step 3 of 3 — Result & attestation
        </p>

        <div className="border rounded-xl p-6 bg-[#F8FAFC]">
          <p className="text-sm text-gray-600 mb-1">
            Indicative annual emissions estimate
          </p>
          <p className="text-3xl font-bold text-[#0B3A63]">
            {totalCO2e} tCO₂e
          </p>
          <p className="text-xs text-gray-500 mt-2">
            Deterministic spend-based estimation · Indicative · Non-audit
          </p>
        </div>

        <div className="border rounded-xl p-6 bg-white space-y-3">
          <p className="font-medium text-[#0B3A63]">
            What you will receive
          </p>
          <ul className="text-sm text-gray-600 list-disc pl-5 space-y-1">
            <li>Signed PDF carbon attestation</li>
            <li>Standardized institutional format</li>
            <li>Spend-based indicative methodology</li>
            <li>Independently verifiable document</li>
            <li>Immediate delivery after payment</li>
          </ul>
        </div>

        {errors.submit && (
          <p className="text-sm text-red-600">
            {errors.submit}
          </p>
        )}

        {/* ======================================================
            ACCESS KEY BLOCK (OPTIMIZED)
        ====================================================== */}
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
          <h3 className="text-sm font-semibold text-[#0B3A63] mb-2">Access key (optional)</h3>
          <p className="text-sm text-gray-600 mb-3">
            Use an access key if you purchased a pack or were granted credits.
          </p>
          
          <div className="flex gap-3">
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
              className="flex-1 border border-gray-300 rounded-md px-3 py-2 text-sm"
            />
            <button
              type="button"
              onClick={handleCheckKey}
              disabled={!accessKey || keyStatus === "checking"}
              className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-50"
            >
              {keyStatus === "checking" ? "..." : "Check key"}
            </button>
          </div>

          {/* Key Status Feedback */}
          {keyStatus === "invalid" && (
            <p className="text-xs text-red-600 mt-2 font-medium">
              {keyError}
            </p>
          )}

          {keyStatus === "valid" && (
            <div className="mt-2 text-xs">
              <p className="text-green-700 font-bold">Key valid</p>
              {remainingCredits === 0 ? (
                <p className="text-red-600">This key has no remaining credits.</p>
              ) : (
                <p className="text-gray-600">Remaining credits: {remainingCredits}</p>
              )}
            </div>
          )}
        </div>
        {/* ====================================================== */}

        <p className="text-xs text-gray-500">
          By generating an Attestation, you acknowledge that Certif-Scope does not retain issued PDFs. Lost attestations are not stored and cannot be recovered. Re-issuance may be requested but is not guaranteed.
        </p>

        {/* ✅ RESTORATION 3 : Bloc UI Email */}
        <div className="border rounded-xl p-5 bg-[#F8FAFC] space-y-2">
          <label className="block text-sm font-medium text-[#0B3A63]">
            Receive a copy by email (optional)
          </label>

          <input
            type="email"
            placeholder="name@company.com"
            value={emailForDelivery}
            onChange={(e) => setEmailForDelivery(e.target.value)}
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
          />

          <p className="text-xs text-gray-500 leading-relaxed">
            If provided, your email will be used once to send the attestation PDF.
            <br />
            No email is stored by Certif-Scope.
          </p>
        </div>

        <button
          onClick={handleSubmit}
          disabled={isSubmitting || isButtonBlocked}
          className={`w-full py-4 rounded-xl font-semibold transition ${
            isSubmitting || isButtonBlocked
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-[#0B3A63] hover:bg-[#092f50] text-white"
          }`}
        >
          {buttonLabel}
        </button>

        {isRedeeming && (
          <button 
            type="button" 
            onClick={clearKey} 
            className="w-full text-center text-xs text-gray-500 underline mt-2 hover:text-gray-700"
          >
            I prefer to pay 89 € instead
          </button>
        )}

        {/* LEGAL MENTION FOR CREDITS */}
        <p className="text-xs text-gray-500 leading-relaxed text-center mt-4">
          When using an access key, one credit is consumed per attestation. Credits are non-refundable and non-transferable.
        </p>

        <p className="text-xs text-gray-500 leading-relaxed mt-4">
          This attestation is indicative, non-regulatory, and based solely on the
          information provided. It does not constitute a greenhouse gas audit
          or compliance report.
        </p>
      </section>
    </main>
  );
}

/* ======================================================
   INPUT
====================================================== */

function Input({
  label,
  hint,
  value,
  onChange,
}: {
  label: string;
  hint: string;
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div>
      <label className="block text-sm font-medium">{label}</label>
      <input
        type="number" // type="text" pourrait être mieux pour gérer manuellement les virgules, mais "number" + toNumber() fonctionne aussi si le navigateur gère la localisation
        inputMode="decimal"
        min="0"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full border rounded-md px-4 py-2 mt-1"
      />
      <p className="text-xs text-gray-500 mt-1">{hint}</p>
    </div>
  );
}
