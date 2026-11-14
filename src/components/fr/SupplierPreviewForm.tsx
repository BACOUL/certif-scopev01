"use client";

import { useState } from "react";
import { calculate, type Calculation } from "@/lib/carbon/calculate";
import { assessmentSchema } from "@/lib/carbon/schema";
import {
  CATEGORIES,
  FACTORS,
  category,
  firstSupportedKind,
  type Category,
  type SourceKind,
} from "@/lib/carbon/factors";

type SourceStatus = "known" | "not_applicable" | "unknown";
type SourceMap = Record<Category, SourceStatus>;
type Quality = "invoice" | "estimate" | "declaration";
type InputLine = {
  id: string;
  kind: SourceKind;
  quantity: string;
  energyKwh: string;
  renewableEnergyKwh: string;
  quality: Quality;
  evidence: string;
};

const SOURCE_LABELS: Record<Category, string> = {
  electricity: "Électricité achetée",
  gas: "Gaz naturel",
  diesel_b7: "Carburant diesel B7",
  petrol_e10: "Carburant essence E10",
  other_fuels: "Autres combustibles et carburants",
  refrigerants: "Fuites de gaz frigorigènes",
  purchased_heat: "Chaleur, vapeur ou froid achetés",
  processes: "Procédés industriels ou agricoles",
  self_generation: "Autoproduction ou revente d’énergie",
};
const newLine = (kind: SourceKind): InputLine => ({
  id: crypto.randomUUID(),
  kind,
  quantity: "",
  energyKwh: "",
  renewableEnergyKwh: "",
  quality: "invoice",
  evidence: "",
});
const fmt = (value: number) =>
  new Intl.NumberFormat("fr-FR", { maximumFractionDigits: 5 }).format(value);

const fieldClass = "mt-1 block w-full min-h-11 rounded-xl border border-[#0B3A63]/20 bg-white px-3 py-2 text-[#1f2937] outline-none focus:border-[#0B3A63] focus:ring-2 focus:ring-[#0B3A63]/20";
const labelClass = "block text-sm font-semibold text-[#0B3A63]";
const panelClass = "rounded-[26px] border border-[#0B3A63]/10 bg-white p-5 shadow-sm md:p-7";

export default function SupplierPreviewForm() {
  const [profile, setProfile] = useState({
    company: "",
    identifier: "",
    year: 2025,
    start: "2025-01-01",
    end: "2025-12-31",
    boundary: "",
    declarant: "",
    exclusions: "",
  });
  const [sources, setSources] = useState<SourceMap>(
    () => Object.fromEntries(CATEGORIES.map((key) => [key, "unknown"])) as SourceMap,
  );
  const [lines, setLines] = useState<InputLine[]>([]);
  const [confirmed, setConfirmed] = useState(false);
  const [result, setResult] = useState<Calculation | null>(null);
  const [error, setError] = useState("");

  function editProfile(key: keyof typeof profile, value: string | number) {
    setProfile((old) => ({ ...old, [key]: value }));
    setResult(null);
    setError("");
  }

  function editSource(key: Category, status: SourceStatus) {
    setSources((old) => ({ ...old, [key]: status }));
    if (status !== "known") {
      setLines((old) => old.filter((line) => category(line.kind) !== key));
    } else {
      const kind = firstSupportedKind(key);
      if (kind) {
        setLines((old) => old.some((line) => category(line.kind) === key)
          ? old : [...old, newLine(kind)]);
      }
    }
    setResult(null);
    setError("");
  }

  function editLine(id: string, patch: Partial<InputLine>) {
    setLines((old) => old.map((line) => line.id === id ? { ...line, ...patch } : line));
    setResult(null);
    setError("");
  }

  function calculatePreview(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setResult(null);
    try {
      if (lines.some((line) => line.quantity.trim() === "" ||
        (FACTORS[line.kind].energy === null && line.energyKwh.trim() === ""))) {
        throw new Error("Renseignez les quantités nécessaires pour chaque ligne.");
      }
      const payload = {
        ...profile,
        locale: "fr",
        country: "FR",
        sources,
        confirmed,
        activities: lines.map((line) => ({
          id: line.id,
          kind: line.kind,
          quantity: Number(line.quantity),
          unit: FACTORS[line.kind].unit,
          quality: line.quality,
          evidence: line.evidence,
          ...(FACTORS[line.kind].energy === null
            ? { energyKwh: Number(line.energyKwh) } : {}),
          ...(line.renewableEnergyKwh.trim() === ""
            ? {} : { renewableEnergyKwh: Number(line.renewableEnergyKwh) }),
        })),
      };
      const validation = assessmentSchema.safeParse(payload);
      if (!validation.success) {
        const issue = validation.error.issues[0];
        throw new Error((issue.path.join(".") || "Données") + " : " + issue.message);
      }
      setResult(calculate(validation.data));
      document.getElementById("resultats-simulation-fournisseur")?.scrollIntoView({ behavior: "smooth", block: "start" });
    } catch (reason) {
      setError(reason instanceof Error ? reason.message : "La simulation a échoué.");
    }
  }

  return (
    <div id="simulation-fournisseur" className="scroll-mt-28">
      <div className="mb-7 rounded-[26px] border border-[#0B3A63]/15 bg-[#F8FAFC] p-5 md:p-7">
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#0B3A63]">Simulation gratuite · aucune commande</p>
        <h2 className="mt-2 text-2xl font-extrabold text-[#0B3A63] md:text-3xl">
          Préparer la future fiche carbone fournisseur
        </h2>
        <p className="mt-3 leading-relaxed text-[#475569]">
          Renseignez les consommations de votre entreprise pour obtenir un calcul
          indicatif à partir du moteur de la PR nº 107, sans paiement ni création de dossier.
          La simulation s’exécute dans le navigateur : aucune donnée saisie ici n’est
          envoyée à une API de calcul ou d’achat.
        </p>
        <p className="mt-3 text-sm font-medium text-[#0B3A63]">
          Attention : facteurs ADEME historiques (2021–2023), en cours de
          révision. Résultats non audités, non certifiés, non exploitables comme
          justificatif réglementaire. La future vente à 89 € n’est pas ouverte.
        </p>
      </div>

      <form onSubmit={calculatePreview} className="space-y-7">
        <fieldset className={panelClass}>
          <legend className="px-2 text-xl font-extrabold text-[#0B3A63]">1. Entreprise et exercice</legend>
          <div className="grid gap-5 md:grid-cols-2">
            <label className={labelClass}>Entreprise
              <input required maxLength={180} className={fieldClass} value={profile.company}
                onChange={(event) => editProfile("company", event.target.value)} />
            </label>
            <label className={labelClass}>SIREN ou identifiant
              <input required maxLength={180} className={fieldClass} value={profile.identifier}
                onChange={(event) => editProfile("identifier", event.target.value)} />
            </label>
            <label className={labelClass}>Exercice
              <select className={fieldClass} value={profile.year}
                onChange={(event) => {
                  const year = Number(event.target.value);
                  const today = new Date().toISOString().slice(0, 10);
                  setProfile((old) => ({ ...old, year, start: year + "-01-01",
                    end: year === Number(today.slice(0, 4)) ? today : year + "-12-31" }));
                  setResult(null);
                }}>
                {[2026, 2025, 2024, 2023].map((year) => <option key={year} value={year}>{year}</option>)}
              </select>
            </label>
            <label className={labelClass}>Nom et fonction du déclarant
              <input required maxLength={180} className={fieldClass} value={profile.declarant}
                onChange={(event) => editProfile("declarant", event.target.value)} />
            </label>
            <label className={labelClass}>Début de la période
              <input required type="date" className={fieldClass} value={profile.start}
                onChange={(event) => editProfile("start", event.target.value)} />
            </label>
            <label className={labelClass}>Fin de la période
              <input required type="date" className={fieldClass} value={profile.end}
                onChange={(event) => editProfile("end", event.target.value)} />
            </label>
          </div>
          <label className={labelClass + " mt-5"}>Périmètre : sites, entités et véhicules concernés
            <input required maxLength={180} className={fieldClass} value={profile.boundary}
              onChange={(event) => editProfile("boundary", event.target.value)} />
          </label>
        </fieldset>

        <fieldset className={panelClass}>
          <legend className="px-2 text-xl font-extrabold text-[#0B3A63]">2. Sources d’énergie et d’émissions</legend>
          <p className="mb-5 text-sm leading-relaxed text-[#475569]">
            Choisissez un état pour chacune des neuf catégories. « Non concerné »
            signifie réellement absent ; « inconnu » ne signifie jamais zéro.
            Les catégories non encore prises en charge restent visibles et empêchent
            de présenter la simulation comme un bilan complet.
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            {CATEGORIES.map((key) => {
              const supported = Boolean(firstSupportedKind(key));
              return (
                <label key={key} className={labelClass}>
                  {SOURCE_LABELS[key]}
                  <select value={sources[key]} className={fieldClass}
                    onChange={(event) => editSource(key, event.target.value as SourceStatus)}>
                    <option value="unknown">Inconnu / à documenter</option>
                    <option value="not_applicable">Non concerné</option>
                    <option value="known">Concerné — données disponibles</option>
                  </select>
                  {!supported && (
                    <span className="mt-1 block text-xs font-normal text-amber-800">
                      Source non calculée actuellement : une source concernée rend le total incomplet.
                    </span>
                  )}
                </label>
              );
            })}
          </div>
          <label className={labelClass + " mt-5"}>Exclusions éventuelles (à justifier)
            <textarea maxLength={600} rows={2} className={fieldClass}
              value={profile.exclusions}
              onChange={(event) => editProfile("exclusions", event.target.value)} />
          </label>
        </fieldset>

        <fieldset className={panelClass}>
          <legend className="px-2 text-xl font-extrabold text-[#0B3A63]">3. Consommations et justificatifs</legend>
          <p className="mb-4 text-sm text-[#475569]">
            Seules les sources prises en charge permettent une ligne de calcul.
            Pour le diesel et l’essence, le contenu énergétique en kWh PCI doit
            provenir de vos justificatifs : aucun coefficient de conversion
            arbitraire n’est appliqué.
          </p>
          {lines.length === 0 && (
            <p className="rounded-xl bg-[#F8FAFC] p-4 text-sm text-[#475569]">
              Aucune activité saisie. Sélectionnez « Concerné » pour une source prise en charge.
            </p>
          )}
          <div className="space-y-5">
            {lines.map((line, index) => {
              const factor = FACTORS[line.kind];
              const group = category(line.kind);
              return (
                <div key={line.id} className="rounded-2xl border border-[#0B3A63]/15 bg-[#F8FAFC] p-4 md:p-5">
                  <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
                    <h3 className="font-bold text-[#0B3A63]">{SOURCE_LABELS[group]} — ligne {index + 1}</h3>
                    <button type="button" className="rounded-lg border border-[#0B3A63]/25 bg-white px-3 py-2 text-sm font-semibold text-[#0B3A63]"
                      onClick={() => { setLines((old) => old.filter((row) => row.id !== line.id)); setResult(null); }}>
                      Supprimer la ligne
                    </button>
                  </div>
                  {group === "refrigerants" && (
                    <p className="mb-4 text-sm font-semibold text-amber-800">
                      Uniquement gaz fluorés PURS figurant dans la liste. La quantité
                      correspond à la masse réellement émise, jamais à la charge
                      totale de l’équipement. Les mélanges et gaz non listés ne sont pas couverts.
                    </p>
                  )}
                  <div className="grid gap-4 md:grid-cols-2">
                    {group === "gas" && (
                      <label className={labelClass}>Unité indiquée sur votre facture
                        <select className={fieldClass} value={line.kind}
                          onChange={(event) => editLine(line.id, { kind: event.target.value as SourceKind })}>
                          <option value="gas_pcs">Gaz naturel PCS</option>
                          <option value="gas_pci">Gaz naturel PCI</option>
                        </select>
                      </label>
                    )}
                    {group === "refrigerants" && (
                      <label className={labelClass}>Gaz fluoré pur
                        <select className={fieldClass} value={line.kind}
                          onChange={(event) => editLine(line.id, { kind: event.target.value as SourceKind })}>
                          {(Object.keys(FACTORS) as SourceKind[]).filter((kind) => category(kind) === "refrigerants")
                            .map((kind) => <option key={kind} value={kind}>{FACTORS[kind].id}</option>)}
                        </select>
                      </label>
                    )}
                    <label className={labelClass}>
                      {group === "refrigerants" ? "Masse réellement émise" : "Quantité consommée"} ({factor.unit})
                      <input required type="number" min="0" max="1000000000" step="any" className={fieldClass}
                        value={line.quantity} onChange={(event) => editLine(line.id, { quantity: event.target.value })} />
                    </label>
                    {factor.energy === null && (
                      <label className={labelClass}>Énergie correspondante en kWh PCI, documentée
                        <input required type="number" min="0" max="1000000000" step="any" className={fieldClass}
                          value={line.energyKwh} onChange={(event) => editLine(line.id, { energyKwh: event.target.value })} />
                      </label>
                    )}
                    {group !== "refrigerants" && (
                      <label className={labelClass}>Énergie renouvelable en kWh (laisser vide si inconnue)
                        <input type="number" min="0" max="1000000000" step="any" className={fieldClass}
                          value={line.renewableEnergyKwh}
                          onChange={(event) => editLine(line.id, { renewableEnergyKwh: event.target.value })} />
                        <span className="mt-1 block text-xs font-normal text-[#475569]">
                          Disponible seulement avec justificatif de type facture ou relevé.
                          Zéro signifie une absence attestée, et non une estimation.
                        </span>
                      </label>
                    )}
                    <label className={labelClass}>Origine de la donnée
                      <select className={fieldClass} value={line.quality}
                        onChange={(event) => editLine(line.id, { quality: event.target.value as Quality })}>
                        <option value="invoice">Facture ou relevé</option>
                        <option value="estimate">Estimation étayée</option>
                        <option value="declaration">Déclaration non documentée</option>
                      </select>
                    </label>
                    <label className={labelClass}>Référence du justificatif (non vérifié)
                      <input required maxLength={180} className={fieldClass} value={line.evidence}
                        onChange={(event) => editLine(line.id, { evidence: event.target.value })} />
                    </label>
                  </div>
                  <button type="button" disabled={lines.length >= 40}
                    onClick={() => { setLines((old) => [...old, newLine(line.kind)]); setResult(null); }}
                    className="mt-4 rounded-xl border border-[#0B3A63] bg-white px-4 py-2 text-sm font-semibold text-[#0B3A63] disabled:opacity-40">
                    Ajouter une ligne de même source
                  </button>
                </div>
              );
            })}
          </div>
        </fieldset>

        <div className={panelClass}>
          <label className="flex items-start gap-3 text-sm leading-relaxed text-[#0B3A63]">
            <input required type="checkbox" className="mt-1 h-4 w-4" checked={confirmed}
              onChange={(event) => { setConfirmed(event.target.checked); setResult(null); }} />
            <span>
              Je confirme la période, les sources, les données déclarées et les zéros.
              Je comprends les limites de la méthode, ses facteurs historiques et
              l’absence de contrôle externe.
            </span>
          </label>
          <button type="submit"
            className="mt-5 min-h-12 rounded-xl bg-[#0B3A63] px-7 py-3 font-semibold text-white hover:bg-[#082C4B]">
            Calculer ma simulation gratuite
          </button>
          {error && <p role="alert" className="mt-4 rounded-xl bg-red-50 p-4 text-sm text-red-800">{error}</p>}
        </div>
      </form>

      <section id="resultats-simulation-fournisseur" aria-live="polite" className="mt-8 scroll-mt-28">
        {result && (
          <div className={panelClass}>
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#0B3A63]">
              Simulation indicative · non commercialisable
            </p>
            <h2 className="mt-2 text-2xl font-extrabold text-[#0B3A63]">Résultats des seules sources renseignées</h2>
            <p className="mt-3 text-sm text-[#475569]">
              Méthode {result.methodology}. Les facteurs historiques doivent être actualisés
              et validés avant toute vente. Aucun PDF ou JSON signé n’est produit par cette simulation.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl bg-[#F8FAFC] p-5">
                <p className="text-sm font-semibold text-[#0B3A63]">Scope 1 calculé</p>
                <p className="mt-2 text-2xl font-bold text-[#0B3A63]">
                  {result.lines.length ? fmt(result.scope1T) + " tCO₂e" : "Non calculé"}
                </p>
              </div>
              <div className="rounded-2xl bg-[#F8FAFC] p-5">
                <p className="text-sm font-semibold text-[#0B3A63]">Scope 2 location-based calculé</p>
                <p className="mt-2 text-2xl font-bold text-[#0B3A63]">
                  {result.lines.length ? fmt(result.scope2LocationT) + " tCO₂e" : "Non calculé"}
                </p>
              </div>
              <div className="rounded-2xl bg-[#F8FAFC] p-5">
                <p className="text-sm font-semibold text-[#0B3A63]">
                  {result.coverage === "partial" ? "Sous-total partiel" : "Somme des sources déclarées"}
                </p>
                <p className="mt-2 text-2xl font-bold text-[#0B3A63]">
                  {result.lines.length ? fmt(result.totalT) + " tCO₂e" : "Non calculé"}
                </p>
              </div>
            </div>
            <div className="mt-5 rounded-xl border border-[#0B3A63]/15 p-5 text-sm text-[#475569]">
              <h3 className="font-bold text-[#0B3A63]">Énergie déclarée</h3>
              <p className="mt-2">
                {result.energyTotalComplete
                  ? "Total énergétique des sources déclarées : " + fmt(result.energyMwh) + " MWh."
                  : "Total énergétique incomplet : " + fmt(result.energyMwh) + " MWh pour les lignes renseignées seulement."}
              </p>
              <p className="mt-2">
                Part renouvelable : {result.energyBreakdown.total.renewableMwh === null
                  ? "inconnue / non justifiée" : fmt(result.energyBreakdown.total.renewableMwh) + " MWh"}.
                {" "}Part non renouvelable : {result.energyBreakdown.total.nonRenewableMwh === null
                  ? "inconnue / non justifiée" : fmt(result.energyBreakdown.total.nonRenewableMwh) + " MWh"}.
              </p>
              {result.biogenicCO2T > 0 && <p className="mt-2">CO₂ biogénique séparé (hors total) : {fmt(result.biogenicCO2T)} t.</p>}
            </div>
            {result.missing.length > 0 && (
              <div className="mt-5 rounded-xl border border-amber-300 bg-amber-50 p-5">
                <h3 className="font-bold text-amber-900">Périmètre partiel — aucun total d’entreprise fiable</h3>
                <p className="mt-2 text-sm text-amber-900">
                  Sources inconnues ou non couvertes : {result.missing.map((source) => SOURCE_LABELS[source as Category] || source).join(", ")}.
                  Les valeurs non disponibles ne sont jamais présumées nulles.
                </p>
              </div>
            )}
            {result.lines.length === 0 && (
              <p className="mt-4 text-sm font-semibold text-amber-900">
                Aucune émission calculée. N’interprétez pas les zéros comme une absence d’émissions.
              </p>
            )}
            {result.warnings.length > 0 && (
              <p className="mt-5 text-sm leading-relaxed text-[#475569]">
                Réserves techniques : {result.warnings.join(", ")}. Les facteurs ADEME historiques
                et les catégories non prises en charge restent des blocages avant vente.
              </p>
            )}
            <p className="mt-5 font-semibold text-[#0B3A63]">
              Cette étape permet uniquement de vérifier la saisie et les calculs indicatifs.
              La délivrance des PDF, les exports signés et Stripe ne sont pas connectés.
            </p>
          </div>
        )}
      </section>
    </div>
  );
}
