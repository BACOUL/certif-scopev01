"use client";

import { useId, useState } from "react";

/* ======================================================
   CERTIF-SCOPE — MODÈLE DE CALCUL (CÔTÉ CLIENT)
   VERSION FINALE — STRICTE, GUIDÉE, 3 ÉTAPES
   LANGUES : EN / FR / DE (attestation uniquement)
====================================================== */

import { EMISSION_FACTORS, METHODOLOGY, parseExpense as toNumber } from "@/lib/indicative-model";

const ACCEPTED_SCOPE_ERROR =
  "Veuillez confirmer que vous comprenez le périmètre indicatif de l’attestation avant de continuer.";

/* ======================================================
   TYPES
====================================================== */

type AttestationLocale = "en" | "fr" | "de";

type FormErrors = {
  companyName?: string;
  sector?: string;
  acceptedScope?: string;
  expenses?: string;
  year?: string;
  submit?: string;
};

/* ======================================================
   SECTEURS — VERSION FR
====================================================== */

const SECTORS = [
  { value: "professional_services", label: "Services aux entreprises" },
  {
    value: "information_technology",
    label: "Numérique, informatique & technologies",
  },
  {
    value: "manufacturing",
    label: "Industrie, fabrication & production",
  },
  {
    value: "construction",
    label: "BTP, construction & immobilier",
  },
  {
    value: "wholesale_retail",
    label: "Commerce, distribution & vente",
  },
  {
    value: "transport_logistics",
    label: "Transport, logistique & livraison",
  },
  {
    value: "hospitality_events",
    label: "Hôtellerie, restauration, tourisme & événementiel",
  },
  {
    value: "other",
    label: "Autres activités",
  },
] as const;

/* ======================================================
   CALCUL & UTILITAIRES
====================================================== */


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
  const panelId = useId();

  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center px-5 py-4 bg-[#F8FAFC] text-left"
      >
        <span className="font-medium text-[#0B3A63]">{title}</span>
        <span className="text-sm text-gray-500">{open ? "−" : "+"}</span>
      </button>

      {open && (
        <div id={panelId} className="px-5 py-6 bg-white space-y-5">
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
  const [step, setStep] = useState(1);

  const [companyName, setCompanyName] = useState("");
  const [companyId, setCompanyId] = useState("");
  const [sector, setSector] = useState("");
  const [year, setYear] = useState(currentYear);
  const [country, setCountry] = useState("FR");

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

  const expensesValid = Object.values(numericExpenses).every(Number.isFinite);
  const hasExpenses = Object.values(numericExpenses).some(value => value > 0);
  const totalCO2e = expensesValid ? calculateTotalCO2e(numericExpenses) : 0;
  const resultLabel = !expensesValid ? "Corrigez les montants" : hasExpenses ? `${totalCO2e} tCO₂e` : "À calculer";

  const stepErrors = (stage: number): FormErrors => {
    const next: FormErrors = {};
    if (stage === 1) {
      if (!companyName.trim()) next.companyName = "Renseignez le nom de l’entreprise.";
      if (!sector) next.sector = "Sélectionnez un secteur d’activité.";
      if (!Number.isInteger(year) || year < 2000 || year > currentYear) next.year = `Choisissez une année entre 2000 et ${currentYear}.`;
    }
    if (stage === 2) {
      if (!expensesValid) next.expenses = "Utilisez des montants positifs ou nuls, avec au maximum deux décimales.";
      else if (Object.values(expenses).some(value => !value.trim())) next.expenses = "Renseignez chaque catégorie. Indiquez 0 uniquement si la dépense est réellement nulle. Si elle est inconnue, réunissez vos données avant de continuer.";
      else if (!hasExpenses) next.expenses = "Déclarez au moins une dépense supérieure à 0 €.";
    }
    return next;
  };

  const goToStep = (nextStep: number) => {
    if (nextStep > step) {
      const nextErrors = stepErrors(step);
      if (Object.keys(nextErrors).length) {
        setErrors(nextErrors);
        window.setTimeout(() => document.getElementById("form-error-summary")?.focus(), 0);
        return;
      }
    }
    setErrors({});
    setStep(nextStep);
    window.setTimeout(() => document.getElementById("assessment-step-title")?.focus(), 0);
  };

  const selectedSectorLabel =
    SECTORS.find((s) => s.value === sector)?.label || sector;

  const validate = (): boolean => {
    const nextErrors: FormErrors = { ...stepErrors(1), ...stepErrors(2) };

    if (!companyName.trim()) {
      nextErrors.companyName =
        "Le nom de l'entreprise est requis pour émettre l'attestation.";
    }

    if (!sector) {
      nextErrors.sector =
        "Veuillez sélectionner un secteur d'activité principal.";
    }

    const hasAtLeastOneExpense = Object.values(numericExpenses).some(
      (value) => value > 0
    );

    if (!hasAtLeastOneExpense) {
      nextErrors.submit =
        "Veuillez déclarer au moins une dépense supérieure à 0 €.";
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
        setKeyError(data.error || "Clé d'accès invalide ou expirée.");
      } else {
        setKeyStatus("valid");
        setRemainingCredits(data.remainingCredits);
      }
    } catch {
      setKeyStatus("invalid");
      setKeyError("Impossible de vérifier la clé. Veuillez réessayer.");
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
      if (Object.keys(stepErrors(1)).length) setStep(1);
      else if (Object.keys(stepErrors(2)).length) setStep(2);
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
          "Impossible de traiter la demande. Veuillez réessayer ou actualiser la page.",
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
    ? "Générer mon attestation carbone (1 crédit)"
    : "Générer mon attestation carbone — 89 €";

  const displayedCompanyName = companyName.trim() || "À compléter";
  const displayedSectorLabel = sector ? selectedSectorLabel : "À compléter";
  const isSubmitDisabled = isSubmitting || isButtonBlocked || !acceptedScope;
  const paymentSummaryItems = [
    { label: "Entreprise", value: displayedCompanyName },
    { label: "Année", value: String(year) },
    { label: "Pays", value: country },
    { label: "Secteur", value: displayedSectorLabel },
    { label: "Résultat estimé", value: resultLabel },
    { label: "Document", value: "Attestation CO₂e indicative PDF" },
    { label: "Prix", value: isRedeeming ? "1 crédit du pack" : "89 € · TVA non applicable" },
    { label: "Livraison", value: isRedeeming ? "Après utilisation du crédit" : "Après confirmation du paiement" },
  ];

  const handleDisabledSubmitClick = () => {
    if (!acceptedScope) {
      setErrors((prev) => ({
        ...prev,
        acceptedScope: ACCEPTED_SCOPE_ERROR,
      }));
    }
  };

  return (
    <div className="bg-white">
      <section className="max-w-3xl mx-auto px-0 pt-2 pb-8 space-y-6">
        <nav aria-label="Progression du formulaire" className="grid grid-cols-3 gap-2 text-sm">
          {["Entreprise", "Dépenses", "Vérification"].map((label, index) => <div key={label} aria-current={step === index + 1 ? "step" : undefined} className={`rounded-lg border px-3 py-3 ${step === index + 1 ? "bg-[#0B3A63] text-white" : "bg-[#F8FAFC] text-gray-600"}`}>{index + 1}. {label}</div>)}
        </nav>
        <h2 id="assessment-step-title" tabIndex={-1} className="text-xl font-bold text-[#0B3A63]">Étape {step} sur 3 — {["Entreprise et contexte", "Dépenses annuelles", "Vérification avant paiement"][step - 1]}</h2>
        {Object.values(errors).some(Boolean) && <div id="form-error-summary" tabIndex={-1} role="alert" className="rounded-lg border border-red-200 bg-red-50 p-4 text-red-800">{Object.values(errors).filter(Boolean).map((error, i) => <p key={i}>{error}</p>)}</div>}
        <div hidden={step !== 1} className="space-y-6">
        {/* INTRO */}
        <div>
          <p className="text-sm text-gray-500 mb-2">
            Étape 1 sur 3 — Entreprise & contexte
          </p>

          <h3 className="text-xl font-bold text-[#0B3A63] mb-3">
            Générez votre attestation carbone
          </h3>

          <p className="text-gray-600 text-lg leading-relaxed">
            Estimation indicative basée sur les dépenses. Pas d'audit. Aucune
            donnée physique requise.
          </p>

          <p className="text-sm text-gray-500 mt-3">
            <strong>Prix :</strong> 89 € · Paiement unique · Sans abonnement
          </p>
        </div>

        {/* ÉTAPE 1 */}
        <Accordion
          title="Informations entreprise"
          intro="Renseignez l'identification de base et le contexte. Les champs marqués d'un * sont obligatoires."
          defaultOpen
        >
          <div className="space-y-4">
            <div>
              <label htmlFor="company-name" className="block text-sm font-medium">
                Nom de l'entreprise / entité légale *
              </label>

              <input
                id="company-name"
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
              <label htmlFor="company-sector" className="block text-sm font-medium">
                Secteur d'activité principal *
              </label>

              <select
                id="company-sector"
                value={sector}
                aria-invalid={Boolean(errors.sector)}
                onChange={(e) => setSector(e.target.value)}
                className={`w-full border rounded-md px-4 py-2 mt-1 ${
                  errors.sector
                    ? "border-red-500 bg-red-50"
                    : "border-gray-300"
                }`}
              >
                <option value="">Sélectionnez votre secteur d’activité</option>

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
              <label htmlFor="company-id" className="block text-sm font-medium">
                Identifiant entreprise (optionnel)
              </label>

              <input
                id="company-id"
                type="text"
                value={companyId}
                onChange={(e) => setCompanyId(e.target.value)}
                className="w-full border border-gray-300 rounded-md px-4 py-2 mt-1"
              />
            </div>
          </div>
        </Accordion>

        {/* ÉTAPE 2 — CONTEXTE */}
        <Accordion
          title="Contexte"
          intro="Définissez l'année de référence, le pays et la langue de l'attestation."
          defaultOpen
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="reference-year" className="block text-sm font-medium">
                Année de référence
              </label>

              <input
                id="reference-year"
                type="number"
                min={2000}
                max={currentYear}
                aria-invalid={Boolean(errors.year)}
                value={year}
                onChange={(e) => setYear(Number(e.target.value))}
                className="w-full border border-gray-300 rounded-md px-4 py-2 mt-1"
              />
            </div>

            <div>
              <label htmlFor="main-country" className="block text-sm font-medium">
                Pays principal
              </label>

              <select
                id="main-country"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                className="w-full border border-gray-300 rounded-md px-4 py-2 mt-1"
              >
                <option value="FR">France</option>
                <option value="DE">Allemagne</option>
                <option value="EU">Autre UE</option>
              </select>
            </div>

            <div className="md:col-span-2">
              <label htmlFor="attestation-language" className="block text-sm font-medium">
                Langue de l'attestation
              </label>

              <select
                id="attestation-language"
                value={attestationLocale}
                onChange={(e) =>
                  setAttestationLocale(e.target.value as AttestationLocale)
                }
                className="w-full border border-gray-300 rounded-md px-4 py-2 mt-1"
              >
                <option value="fr">Français</option>
                <option value="en">Anglais</option>
                <option value="de">Allemand</option>
              </select>
            </div>
          </div>
        </Accordion>

        <button type="button" onClick={() => goToStep(2)} className="w-full rounded-xl bg-[#0B3A63] px-6 py-3 font-semibold text-white">Continuer vers les dépenses</button>
        </div>
        <div hidden={step !== 2} className="space-y-6">
        {/* ÉTAPE 2 — DÉCLARATION DES RESSOURCES */}
        <p className="text-sm text-gray-500">
          Étape 2 sur 3 — Déclaration des ressources
        </p>

        <Accordion
          title="Déclaration des ressources / dépenses externes annuelles (€)"
          intro="Indiquez les dépenses externes annuelles hors taxes en euros, sur une même année. Chaque dépense doit figurer dans une seule catégorie. Écartez salaires, taxes et dépenses internes. Saisissez 0 pour une catégorie réellement nulle ; une donnée inconnue ne doit pas être remplacée par 0."
          defaultOpen
        >
          {errors.submit && (
            <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700 font-medium">
              Une dépense minimum est obligatoire pour calculer l’attestation.
            </div>
          )}

          <Input
            label="Services IT & numériques"
            hint="Logiciels, cloud, SaaS, infogérance"
            value={expenses.it}
            onChange={(v) => update("it", v)}
            hasError={Boolean(errors.expenses)}
          />

          <Input
            label="Services professionnels"
            hint="Conseil, comptabilité, juridique"
            value={expenses.services}
            onChange={(v) => update("services", v)}
            hasError={Boolean(errors.expenses)}
          />

          <Input
            label="Biens & achats"
            hint="Fournitures de bureau, équipements, matériaux"
            value={expenses.goods}
            onChange={(v) => update("goods", v)}
            hasError={Boolean(errors.expenses)}
          />

          <Input
            label="Logistique & transport"
            hint="Fret, livraison, transporteurs"
            value={expenses.logistics}
            onChange={(v) => update("logistics", v)}
            hasError={Boolean(errors.expenses)}
          />

          <Input
            label="Déplacements professionnels"
            hint="Vols, trains, taxis, location de voitures"
            value={expenses.travel}
            onChange={(v) => update("travel", v)}
            hasError={Boolean(errors.expenses)}
          />

          <Input
            label="Hébergement & événements"
            hint="Hôtels, conférences, événements d'entreprise"
            value={expenses.accommodation}
            onChange={(v) => update("accommodation", v)}
            hasError={Boolean(errors.expenses)}
          />

          <Input
            label="Autres dépenses externes"
            hint="Marketing, abonnements, frais divers"
            value={expenses.other}
            onChange={(v) => update("other", v)}
            hasError={Boolean(errors.expenses)}
          />
        </Accordion>

        <div className="flex gap-3"><button type="button" onClick={() => goToStep(1)} className="rounded-xl border px-5 py-3 text-[#0B3A63]">Retour</button><button type="button" onClick={() => goToStep(3)} className="flex-1 rounded-xl bg-[#0B3A63] px-5 py-3 font-semibold text-white">Voir le récapitulatif</button></div>
        </div>
        <div hidden={step !== 3} className="space-y-6">
        <button type="button" onClick={() => goToStep(2)} className="font-semibold text-[#0B3A63] underline">Modifier mes dépenses</button>
        {/* ÉTAPE 3 */}
        <p className="text-sm text-gray-500">
          Étape 3 sur 3 — Résultat & attestation
        </p>

        <div className="border rounded-xl p-6 bg-[#F8FAFC]">
          <p className="text-sm text-gray-600 mb-1">
            Estimation indicative des émissions annuelles
          </p>

          <p className="text-3xl font-bold text-[#0B3A63]">
            {resultLabel}
          </p>

          <p className="text-xs text-gray-500 mt-2">
            Estimation déterministe basée sur les dépenses · Indicatif · Non
            audité
          </p>
        </div>

        <div className="border rounded-xl p-6 bg-white space-y-3">
          <p className="font-medium text-[#0B3A63]">
            Ce que vous allez recevoir
          </p>

          <ul className="text-sm text-gray-600 list-disc pl-5 space-y-1">
            <li>Attestation carbone PDF signée</li>
            <li>Format PDF standardisé</li>
            <li>Méthodologie indicative basée sur la dépense</li>
            <li>Document avec ID vérifiable</li>
            <li>Téléchargement après confirmation du paiement</li>
          </ul>
        </div>

        {errors.submit && (
          <p className="text-sm text-red-600 font-medium">{errors.submit}</p>
        )}

        {/* CLÉ D'ACCÈS */}
        <Accordion
          title="J’ai déjà une clé d’accès ou un pack"
          intro="Utilisez cette option uniquement si vous avez déjà acheté un pack ou reçu une clé d’accès."
          defaultOpen={false}
        >
          <div className="space-y-3">
            <div className="flex flex-col sm:flex-row gap-3 sm:items-center min-w-0">
              <input
                type="text"
                aria-label="Clé d’accès du pack"
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
                {keyStatus === "checking" ? "..." : "Vérifier"}
              </button>
            </div>

            {keyStatus === "invalid" && (
              <p className="text-xs text-red-600 font-medium">
                {keyError}
              </p>
            )}

            {keyStatus === "valid" && (
              <div className="text-xs">
                <p className="text-[#0B3A63] font-bold">Clé valide</p>

                {remainingCredits === 0 ? (
                  <p className="text-red-600">
                    Cette clé n'a plus de crédits.
                  </p>
                ) : (
                  <p className="text-gray-600">
                    Crédits restants : {remainingCredits}
                  </p>
                )}

                <p className="text-xs text-gray-500 mt-2 leading-relaxed">
                  En utilisant une clé d'accès, aucun email n'est envoyé.
                  <br />
                  Veuillez télécharger et sauvegarder votre attestation
                  immédiatement après génération.
                </p>
              </div>
            )}

            {isRedeeming && (
              <button
                type="button"
                onClick={clearKey}
                className="w-full text-center text-xs text-gray-500 underline hover:text-gray-700"
              >
                Je préfère payer 89 € à la place
              </button>
            )}
          </div>
        </Accordion>

        <p className="text-xs text-gray-500">
          En générant une attestation, vous reconnaissez que Certif-Scope ne
          conserve pas les PDF émis. Les attestations perdues ne sont pas
          stockées et ne peuvent pas être récupérées. Une réédition peut être
          demandée mais n'est pas garantie.
        </p>

        <div className="rounded-xl border border-[#0B3A63]/10 bg-[#F8FAFC] p-5 md:p-6">
          <div className="mb-5 flex items-start gap-3">
            <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-[#1FB6C1]" />
            <div>
              <h2 className="text-lg font-bold text-[#0B3A63]">
                Résumé avant paiement
              </h2>
              <p className="mt-1 text-sm leading-relaxed text-gray-600">
                Vérifiez les informations principales avant de continuer.
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
            Les données financières détaillées ne sont pas conservées. Le PDF
            doit être téléchargé et sauvegardé immédiatement après génération :
            Certif-Scope ne garde pas de copie récupérable.
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
              Je comprends que l’attestation Certif-Scope est indicative, non
              auditée, non réglementaire, non CSRD/ESRS, et qu’elle dépend des
              informations que je fournis.
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
            {isSubmitting ? "Traitement en cours..." : buttonLabel}
          </button>
        </div>

        <p className="text-xs text-gray-500 leading-relaxed text-center mt-4">
          En utilisant une clé d'accès, un crédit est consommé par attestation.
          Les crédits sont non remboursables et non transférables.
        </p>

        <p className="text-xs text-gray-500 leading-relaxed mt-4">
          Cette attestation est indicative, non réglementaire et basée
          uniquement sur les informations fournies. Elle ne constitue pas un
          audit de gaz à effet de serre ni un rapport de conformité.
        </p>
        <p className="text-sm text-gray-600">Un doute sur l’usage du document ? <a className="underline text-[#0B3A63]" href="/fr/contact/">Contactez-nous avant paiement</a>. <a className="underline text-[#0B3A63]" href="/api/sample" target="_blank" rel="noopener noreferrer">Voir le PDF d’exemple</a>.</p>
        </div>
      </section>
    </div>
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
  hasError = false,
}: {
  label: string;
  hint: string;
  value: string;
  onChange: (v: string) => void;
  hasError?: boolean;
}) {
  const id = useId();
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium">{label}</label>

      <input
        id={id}
        aria-describedby={`${id}-hint`}
        placeholder="Ex. : 1 250,50 ou 0"
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

      <p id={`${id}-hint`} className="text-xs text-gray-500 mt-1">{hint}</p>
    </div>
  );
}
