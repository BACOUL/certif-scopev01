"use client";

import { useState } from "react";

/* ======================================================
   CERTIF-SCOPE — MODÈLE DE CALCUL (CÔTÉ CLIENT)
   VERSION FINALE — STRICTE, GUIDÉE, 3 ÉTAPES
   LANGUES : EN / FR / DE (attestation uniquement)
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

  // ✅ CORRECTION UX : "fr" par défaut pour la page française
  const [attestationLocale, setAttestationLocale] =
    useState<AttestationLocale>("fr");

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
        "Le nom de l'entreprise est requis pour émettre l'attestation.";
    }

    if (!sector) {
      nextErrors.sector =
        "Veuillez sélectionner un secteur d'activité principal.";
    }

    // ✅ NOUVEAU CONTRÔLE : AU MOINS UNE DÉPENSE > 0
    const hasAtLeastOneExpense = Object.values(numericExpenses).some(
      (value) => value > 0
    );

    if (!hasAtLeastOneExpense) {
      nextErrors.submit =
        "Veuillez déclarer au moins une dépense supérieure à 0 €.";
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
        setKeyError(data.error || "Clé d'accès invalide ou expirée.");
      } else {
        setKeyStatus("valid");
        setRemainingCredits(data.remainingCredits);
      }
    } catch (e) {
      setKeyStatus("invalid");
      setKeyError("Impossible de vérifier la clé. Veuillez réessayer.");
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

      // ✅ STOCKAGE SESSION (UNIQUEMENT flow clé)
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
          "Impossible de traiter la demande. Veuillez réessayer ou actualiser la page.",
      });
      setIsSubmitting(false);
    }
  };

  // Determine button label and blocked state
  const isRedeeming = keyStatus === "valid" && remainingCredits !== null && remainingCredits > 0;
  
  // Block only on 'checking' or 'valid but empty'
  const isButtonBlocked = keyStatus === "checking" || (keyStatus === "valid" && remainingCredits === 0);
  
  const buttonLabel = isRedeeming
    ? "Générer mon attestation carbone (1 crédit)" 
    : "Générer mon attestation carbone — 89 €";

  return (
    <main className="min-h-screen bg-white">
      <section className="max-w-3xl mx-auto px-6 pt-16 pb-20 space-y-10">

        {/* INTRO */}
        <div>
          <p className="text-sm text-gray-500 mb-2">
            Étape 1 sur 3 — Entreprise & contexte
          </p>
          <h1 className="text-3xl md:text-4xl font-extrabold text-[#0B3A63] mb-3">
            Générez votre attestation carbone
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            Estimation indicative basée sur les dépenses. Pas d'audit. Aucune donnée physique requise.
          </p>
          <p className="text-sm text-gray-500 mt-3">
            <strong>Prix :</strong> 89 € · Paiement unique · Sans abonnement
          </p>
        </div>

        {/* STEP 1 */}
        <Accordion
          title="Informations entreprise"
          intro="Renseignez l'identification de base et le contexte. Les champs marqués d'un * sont obligatoires."
          defaultOpen
        >
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium">
                Nom de l'entreprise / entité légale *
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
                Secteur d'activité principal *
              </label>
              <select
                value={sector}
                onChange={(e) => setSector(e.target.value)}
                className={`w-full border rounded-md px-4 py-2 mt-1 ${
                  errors.sector ? "border-red-500" : ""
                }`}
              >
                <option value="">Sélectionnez un secteur</option>
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
                Identifiant entreprise (optionnel)
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
          title="Contexte"
          intro="Définissez l'année de référence, le pays et la langue de l'attestation."
          defaultOpen
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium">
                Année de référence
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
                Pays principal
              </label>
              <select
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                className="w-full border rounded-md px-4 py-2 mt-1"
              >
                <option value="FR">France</option>
                <option value="DE">Allemagne</option>
                <option value="EU">Autre UE</option>
              </select>
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium">
                Langue de l'attestation
              </label>
              <select
                value={attestationLocale}
                onChange={(e) =>
                  setAttestationLocale(e.target.value as AttestationLocale)
                }
                className="w-full border rounded-md px-4 py-2 mt-1"
              >
                <option value="en">Anglais (référence légale)</option>
                <option value="fr">Français</option>
                <option value="de">Deutsch</option>
              </select>
              <p className="text-xs text-gray-500 mt-1">
                L'anglais reste la référence légale en cas de divergence.
              </p>
            </div>
          </div>
        </Accordion>

        {/* STEP 2 — EXPENSES */}
        <p className="text-sm text-gray-500">
          Étape 2 sur 3 — Dépenses annuelles
        </p>

        <Accordion
          title="Dépenses externes annuelles (€)"
          intro="Indiquez des montants annuels approximatifs. Des estimations raisonnables suffisent."
        >
          <Input label="Services IT & numériques" hint="Logiciels, cloud, SaaS, infogérance" value={expenses.it} onChange={(v) => update("it", v)} />
          <Input label="Services professionnels" hint="Conseil, comptabilité, juridique" value={expenses.services} onChange={(v) => update("services", v)} />
          <Input label="Biens & achats" hint="Fournitures de bureau, équipements, matériaux" value={expenses.goods} onChange={(v) => update("goods", v)} />
          <Input label="Logistique & transport" hint="Fret, livraison, transporteurs" value={expenses.logistics} onChange={(v) => update("logistics", v)} />
          <Input label="Déplacements professionnels" hint="Vols, trains, taxis, location de voitures" value={expenses.travel} onChange={(v) => update("travel", v)} />
          <Input label="Hébergement & événements" hint="Hôtels, conférences, événements d'entreprise" value={expenses.accommodation} onChange={(v) => update("accommodation", v)} />
          <Input label="Autres dépenses externes" hint="Marketing, abonnements, frais divers" value={expenses.other} onChange={(v) => update("other", v)} />
        </Accordion>

        {/* STEP 3 */}
        <p className="text-sm text-gray-500">
          Étape 3 sur 3 — Résultat & attestation
        </p>

        <div className="border rounded-xl p-6 bg-[#F8FAFC]">
          <p className="text-sm text-gray-600 mb-1">
            Estimation indicative des émissions annuelles
          </p>
          <p className="text-3xl font-bold text-[#0B3A63]">
            {totalCO2e} tCO₂e
          </p>
          <p className="text-xs text-gray-500 mt-2">
            Estimation déterministe basée sur les dépenses · Indicatif · Non audité
          </p>
        </div>

        <div className="border rounded-xl p-6 bg-white space-y-3">
          <p className="font-medium text-[#0B3A63]">
            Ce que vous allez recevoir
          </p>
          <ul className="text-sm text-gray-600 list-disc pl-5 space-y-1">
            <li>Attestation carbone PDF signée</li>
            <li>Format institutionnel standardisé</li>
            <li>Méthodologie indicative basée sur la dépense</li>
            <li>Document vérifiable indépendamment</li>
            <li>Livraison immédiate après paiement</li>
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
          <h3 className="text-sm font-semibold text-[#0B3A63] mb-2">Clé d'accès (optionnel)</h3>
          <p className="text-sm text-gray-600 mb-3">
            Utilisez une clé d'accès si vous avez acheté un pack ou reçu des crédits.
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
              {keyStatus === "checking" ? "..." : "Vérifier"}
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
              <p className="text-green-700 font-bold">Clé valide</p>
              {remainingCredits === 0 ? (
                <p className="text-red-600">Cette clé n'a plus de crédits.</p>
              ) : (
                <p className="text-gray-600">Crédits restants : {remainingCredits}</p>
              )}
              
              <p className="text-xs text-gray-500 mt-2 leading-relaxed">
                En utilisant une clé d'accès, aucun email n'est envoyé.
                <br />
                Veuillez télécharger et sauvegarder votre attestation immédiatement après génération.
              </p>
            </div>
          )}
        </div>
        {/* ====================================================== */}

        <p className="text-xs text-gray-500">
          En générant une Attestation, vous reconnaissez que Certif-Scope ne conserve pas les PDF émis. Les attestations perdues ne sont pas stockées et ne peuvent pas être récupérées. Une réédition peut être demandée mais n'est pas garantie.
        </p>

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
            Je préfère payer 89 € à la place
          </button>
        )}

        {/* LEGAL MENTION FOR CREDITS */}
        <p className="text-xs text-gray-500 leading-relaxed text-center mt-4">
          En utilisant une clé d'accès, un crédit est consommé par attestation. Les crédits sont non remboursables et non transférables.
        </p>

        <p className="text-xs text-gray-500 leading-relaxed mt-4">
          Cette attestation est indicative, non réglementaire et basée uniquement sur les
          informations fournies. Elle ne constitue pas un audit de gaz à effet de serre
          ni un rapport de conformité.
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
