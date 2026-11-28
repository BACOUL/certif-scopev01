"use client";

import { useState } from "react";
import { calculate, type Calculation } from "@/lib/carbon/calculate";
import { simulationCsv } from "@/lib/carbon/export";
import { assessmentSchema } from "@/lib/carbon/schema";
import { evaluateLaunch } from "@/lib/carbon/eligibility";
import { reportingYears, reportingToday, reportingPeriod, REVIEW_GEOGRAPHY } from "@/lib/carbon/period";
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
  generatedKwh: string;
  exportedKwh: string;
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
  generatedKwh: "",
  exportedKwh: "",
  quality: "invoice",
  evidence: "",
});
const fmt = (value: number) =>
  new Intl.NumberFormat("fr-FR", { maximumFractionDigits: 5 }).format(value);

const fieldClass = "mt-1 block w-full min-h-11 rounded-xl border border-[#0B3A63]/20 bg-white px-3 py-2 text-[#1f2937] outline-none focus:border-[#0B3A63] focus:ring-2 focus:ring-[#0B3A63]/20";
const labelClass = "block text-sm font-semibold text-[#0B3A63]";
const panelClass = "rounded-[26px] border border-[#0B3A63]/10 bg-white p-5 shadow-sm md:p-7";

function downloadSimulationCsv(result: Calculation) {
  const blob = new Blob([simulationCsv(result)], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `certif-scope-simulation-${result.assessment.year}.csv`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  window.setTimeout(() => URL.revokeObjectURL(url), 1000);
}

export default function SupplierPreviewForm() {
  const [profile, setProfile] = useState({
    company: "",
    identifier: "",
    year: Math.max(2023,Number(reportingToday().slice(0,4))-1),
    ...reportingPeriod(Math.max(2023,Number(reportingToday().slice(0,4))-1)),
    boundary: "",
    declarant: "",
    exclusions: "",
  });
  const [sources, setSources] = useState<SourceMap>(
    () => Object.fromEntries(CATEGORIES.map((key) => [key, "unknown"])) as SourceMap,
  );
  const [lines, setLines] = useState<InputLine[]>([]);
  const [geographyConfirmed,setGeographyConfirmed]=useState(false);
  const [processes, setProcesses] = useState<Array<{id:string;process:string;grossTCO2e:string;method:string;gwpBasis:string;evidence:string;confirmedBoundary:boolean}>>([]);
  const addProcess=()=>{setProcesses(old=>[...old,{id:crypto.randomUUID(),process:"",grossTCO2e:"",method:"",gwpBasis:"",evidence:"",confirmedBoundary:false}]);setResult(null);};
  function editProcess(id:string,patch:Partial<(typeof processes)[number]>){setProcesses(old=>old.map(a=>a.id===id?{...a,...patch}:a));setResult(null);setError("");}
  const [thermal, setThermal] = useState<Array<{id:string;kind:"heat"|"steam"|"cooling";network:string;quantityKwh:string;renewableEnergyKwh:string;evidence:string}>>([]);
  const addThermal = () => {setThermal(old=>[...old,{id:crypto.randomUUID(),kind:"heat",network:"",quantityKwh:"",renewableEnergyKwh:"",evidence:""}]);setResult(null);};
  function editThermal(id:string,patch:Partial<(typeof thermal)[number]>){setThermal(old=>old.map(a=>a.id===id?{...a,...patch}:a));setResult(null);setError("");}

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
    if(key==="processes" && status!=="known")setProcesses([]);
    if(key==="purchased_heat" && status!=="known")setThermal([]);
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
    if(!geographyConfirmed){setError("Périmètre géographique non couvert ou non confirmé.");setResult(null);return;}
    setError("");
    setResult(null);
    try {
      if (lines.some((line) => line.quantity.trim() === "" ||
        (FACTORS[line.kind].energy === null && line.energyKwh.trim() === "") ||
        (line.kind === "solar_pv_owned" && (line.generatedKwh.trim() === "" || line.exportedKwh.trim() === "")))) {
        throw new Error("Renseignez les quantités nécessaires pour chaque ligne.");
      }
      const payload = {
        ...profile,
        locale: "fr",
        country: "FR",
        sources,
        confirmed,
        geography: geographyConfirmed?REVIEW_GEOGRAPHY:undefined,
        processEmissions: processes.map(a=>({...a,grossTCO2e:a.grossTCO2e.trim()===""?NaN:Number(a.grossTCO2e)})),
        thermalPurchases: thermal.map(a=>({id:a.id,kind:a.kind,network:a.network,quantityKwh:a.quantityKwh.trim()===""?NaN:Number(a.quantityKwh),evidence:a.evidence,...(a.renewableEnergyKwh.trim()===""?{}:{renewableEnergyKwh:Number(a.renewableEnergyKwh)})})),
        activities: lines.map((line) => ({
          id: line.id,
          kind: line.kind,
          quantity: Number(line.quantity),
          unit: FACTORS[line.kind].unit,
          quality: line.quality,
          evidence: line.evidence,
          ...(FACTORS[line.kind].energy === null
            ? { energyKwh: Number(line.energyKwh) } : {}),
          ...(line.kind === "solar_pv_owned" ? { generatedKwh: Number(line.generatedKwh), exportedKwh: Number(line.exportedKwh) } : {}),
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

  const eligibility = result ? evaluateLaunch(result) : null;

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
          Attention : facteurs historiques ADEME et candidat électrique 2024, en cours de
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
                  setProfile((old) => ({ ...old, year, ...reportingPeriod(year) }));
                  setResult(null);
                }}>
                {reportingYears().map((year) => <option key={year} value={year}>{year}</option>)}
              </select>
            </label>
            <label className={labelClass}>Nom et fonction du déclarant
              <input required maxLength={180} className={fieldClass} value={profile.declarant}
                onChange={(event) => editProfile("declarant", event.target.value)} />
            </label>
            <label className={labelClass}>Début de la période
              <input required type="date" min={profile.year+"-01-01"} max={reportingPeriod(profile.year).end} className={fieldClass} value={profile.start}
                onChange={(event) => editProfile("start", event.target.value)} />
            </label>
            <label className={labelClass}>Fin de la période
              <input required type="date" min={profile.start} max={reportingPeriod(profile.year).end} className={fieldClass} value={profile.end}
                onChange={(event) => editProfile("end", event.target.value)} />
            </label>
          </div>
          <label className="mt-4 flex items-start gap-2 text-sm"><input required type="checkbox" checked={geographyConfirmed} onChange={e=>{setGeographyConfirmed(e.target.checked);setResult(null);}}/>Je confirme que les activités déclarées relèvent uniquement de la France métropolitaine continentale (hors Corse et outre-mer). Les activités à l’étranger ou hors de ce périmètre ne sont pas encore couvertes par ce prototype.</label>
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
              const supported = Boolean(firstSupportedKind(key)) || key==="purchased_heat" || key==="processes";
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
                    {group === "other_fuels" && (
                      <label className={labelClass}>Combustible (simulation historique)
                        <select className={fieldClass} value={line.kind}
                          onChange={(event) => editLine(line.id, { kind: event.target.value as SourceKind, quantity: "", energyKwh: "", renewableEnergyKwh: "", evidence: "" })}>
                          <option value="fuel_oil_pci">Fioul domestique — kWh PCI</option>
                          <option value="butane_pci">Butane — kWh PCI</option>
                          <option value="propane_pci">Propane — kWh PCI</option>
                          <option value="wood_commercial_pci">Bois pur (bûches, granulés, plaquettes) — commerce / tertiaire</option>
                          <option value="wood_industrial_pci">Bois pur (bûches, granulés, plaquettes) — industrie / construction</option>
                        </select>
                        <span className="mt-1 block text-xs font-normal text-amber-800">
                          Facteurs historiques non approuvés pour la vente. Saisir uniquement
                          une énergie PCI documentée, pas des litres ni des kilogrammes.
                          Si un autre combustible est utilisé, le signaler dans les exclusions ;
                          ne pas le remplacer par un combustible de cette liste. Pour le bois, ces estimations GIEC concernent seulement le bois pur non traité et la combustion fixe du secteur indiqué. Les mélanges et autres usages restent exclus.
                        </span>
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
                      {group === "refrigerants" ? "Masse réellement émise" : line.kind === "solar_pv_owned" ? "Électricité photovoltaïque autoconsommée" : "Quantité consommée"} ({factor.unit})
                      <input required type="number" min="0" max="1000000000" step="any" className={fieldClass}
                        value={line.quantity} onChange={(event) => editLine(line.id, { quantity: event.target.value })} />
                    </label>
                    {line.kind === "solar_pv_owned" && (
                      <>
                        <label className={labelClass}>Production photovoltaïque totale (kWh)
                          <input required type="number" min="0" max="1000000000" step="any" className={fieldClass}
                            value={line.generatedKwh} onChange={(event) => editLine(line.id, { generatedKwh: event.target.value })} />
                        </label>
                        <label className={labelClass}>Électricité injectée / vendue (kWh)
                          <input required type="number" min="0" max="1000000000" step="any" className={fieldClass}
                            value={line.exportedKwh} onChange={(event) => editLine(line.id, { exportedKwh: event.target.value })} />
                        </label>
                        <p className="text-sm text-amber-800 md:col-span-2">
                          Cas couvert uniquement : panneaux exploités par l’entreprise, relevés concordants,
                          sans stockage ni allocation complexe. Production = autoconsommation + injection.
                          Pour l’électricité achetée, saisir le prélèvement brut du réseau, jamais la
                          consommation totale du bâtiment ni un solde net des injections.
                          Toute autre autoproduction doit être signalée dans les exclusions.
                        </p>
                      </>
                    )}
                    {factor.energy === null && (
                      <label className={labelClass}>Énergie correspondante en kWh PCI, documentée
                        <input required type="number" min="0" max="1000000000" step="any" className={fieldClass}
                          value={line.energyKwh} onChange={(event) => editLine(line.id, { energyKwh: event.target.value })} />
                      </label>
                    )}
                    {group !== "refrigerants" && group !== "self_generation" && (
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

        {sources.purchased_heat==="known" && (
          <fieldset className={panelClass}>
            <legend className="px-2 text-xl font-extrabold text-[#0B3A63]">Chaleur, vapeur et froid achetés</legend>
            <p className="mb-4 text-sm text-amber-800">Saisissez les consommations livrées et documentées. Le facteur d’émission du réseau reste à qualifier : le scope 2 et le total des émissions seront indisponibles, jamais supposés nuls. Ne pas saisir la chaleur produite sur place ni le taux combiné renouvelable et récupération.</p>
            {thermal.map(a=><div key={a.id} className="mb-4 grid gap-4 rounded-xl border p-4 md:grid-cols-2">
              <label className={labelClass}>Énergie achetée
                <select className={fieldClass} value={a.kind} onChange={e=>editThermal(a.id,{kind:e.target.value as typeof a.kind})}>
                  <option value="heat">Chaleur</option><option value="steam">Vapeur</option><option value="cooling">Froid</option>
                </select>
              </label>
              <label className={labelClass}>Réseau ou fournisseur<input required maxLength={180} className={fieldClass} value={a.network} onChange={e=>editThermal(a.id,{network:e.target.value})}/></label>
              <label className={labelClass}>Énergie livrée (kWh)<input required type="number" min="0" max="1000000000" step="any" className={fieldClass} value={a.quantityKwh} onChange={e=>editThermal(a.id,{quantityKwh:e.target.value})}/></label>
              <label className={labelClass}>Énergie renouvelable documentée (kWh, facultatif)<input type="number" min="0" max="1000000000" step="any" className={fieldClass} value={a.renewableEnergyKwh} onChange={e=>editThermal(a.id,{renewableEnergyKwh:e.target.value})}/></label>
              <label className={labelClass}>Référence du relevé ou de la facture<input required maxLength={180} className={fieldClass} value={a.evidence} onChange={e=>editThermal(a.id,{evidence:e.target.value})}/></label>
              <button type="button" className="text-sm font-semibold text-[#0B3A63]" onClick={()=>{setThermal(old=>old.filter(x=>x.id!==a.id));setResult(null);}}>Supprimer</button>
            </div>)}
            <button type="button" disabled={thermal.length>=40} onClick={addThermal} className="rounded-xl border border-[#0B3A63] px-4 py-2 text-sm font-semibold text-[#0B3A63]">Ajouter une énergie thermique achetée</button>
          </fieldset>
        )}
        {sources.processes==="known" && (
          <fieldset className={panelClass}>
            <legend className="px-2 text-xl font-extrabold text-[#0B3A63]">Émissions des procédés</legend>
            <p className="mb-4 text-sm text-amber-800">Réservé aux entreprises disposant d’un calcul documenté des émissions directes de leurs procédés, hors combustion, fuites et CO₂ biogénique. Saisir des émissions brutes, sans compensation ni émissions évitées. Sans chiffre justifié, le Scope 1 restera incomplet.</p>
            {processes.map(a=><div key={a.id} className="mb-4 grid gap-4 rounded-xl border p-4 md:grid-cols-2">
              <label className={labelClass}>Procédé concerné<input required maxLength={180} className={fieldClass} value={a.process} onChange={e=>editProcess(a.id,{process:e.target.value})}/></label>
              <label className={labelClass}>Émissions brutes directes (tCO₂e)<input required type="number" min="0" max="1000000000" step="any" className={fieldClass} value={a.grossTCO2e} onChange={e=>editProcess(a.id,{grossTCO2e:e.target.value})}/></label>
              <label className={labelClass}>Méthode de calcul ou mesure<input required maxLength={180} className={fieldClass} value={a.method} onChange={e=>editProcess(a.id,{method:e.target.value})}/></label>
              <label className={labelClass}>Référence des PRG utilisés<input required maxLength={180} className={fieldClass} value={a.gwpBasis} onChange={e=>editProcess(a.id,{gwpBasis:e.target.value})}/></label>
              <label className={labelClass}>Référence du document source<input required maxLength={180} className={fieldClass} value={a.evidence} onChange={e=>editProcess(a.id,{evidence:e.target.value})}/></label>
              <label className="flex items-start gap-2 text-sm"><input required type="checkbox" checked={a.confirmedBoundary} onChange={e=>editProcess(a.id,{confirmedBoundary:e.target.checked})}/>Je confirme le même exercice et périmètre, sans double comptage avec les autres postes, sans CO₂ biogénique ni compensation.</label>
              <button type="button" className="text-sm font-semibold text-[#0B3A63]" onClick={()=>{setProcesses(old=>old.filter(x=>x.id!==a.id));setResult(null);}}>Supprimer</button>
            </div>)}
            <button type="button" disabled={processes.length>=40} onClick={addProcess} className="rounded-xl border border-[#0B3A63] px-4 py-2 text-sm font-semibold text-[#0B3A63]">Ajouter un procédé documenté</button>
          </fieldset>
        )}
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
            {result.warnings.includes("ELECTRICITY_EXACT_YEAR_UNAVAILABLE_DEMO_ONLY") && (
              <p className="mt-3 rounded-lg bg-amber-50 p-3 text-sm text-amber-900">
                Aucun facteur électrique du millésime demandé n’est validé dans ce prototype.
                Le résultat électrique utilise uniquement la référence historique de 2023
                à titre de démonstration, pas un facteur de l’exercice sélectionné.
              </p>
            )}
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl bg-[#F8FAFC] p-5">
                <p className="text-sm font-semibold text-[#0B3A63]">Scope 1 calculé</p>
                <p className="mt-2 text-2xl font-bold text-[#0B3A63]">
                  {result.report.scope1.value !== null && (result.lines.length || result.assessment.processEmissions.length) ? fmt(result.report.scope1.value) + " tCO₂e" : "Non disponible"}
                </p>
              </div>
              <div className="rounded-2xl bg-[#F8FAFC] p-5">
                <p className="text-sm font-semibold text-[#0B3A63]">Scope 2 location-based calculé</p>
                <p className="mt-2 text-2xl font-bold text-[#0B3A63]">
                  {result.report.scope2.value !== null && (result.lines.length || result.assessment.processEmissions.length) ? fmt(result.report.scope2.value) + " tCO₂e" : "Non disponible"}
                </p>
              </div>
              <div className="rounded-2xl bg-[#F8FAFC] p-5">
                <p className="text-sm font-semibold text-[#0B3A63]">
                  {result.report.total.value === null ? "Total scopes 1 et 2 indisponible" : "Somme des sources déclarées"}
                </p>
                <p className="mt-2 text-2xl font-bold text-[#0B3A63]">
                  {result.report.total.value !== null && (result.lines.length || result.assessment.processEmissions.length) ? fmt(result.report.total.value) + " tCO₂e" : "Non disponible"}
                </p>
              </div>
            </div>
            <div className="mt-5 rounded-xl border border-[#0B3A63]/15 p-5 text-sm text-[#475569]">
              <h3 className="font-bold text-[#0B3A63]">Énergie déclarée</h3>
              <p className="mt-2">
                {result.report.energy.value !== null
                  ? "Total énergétique des sources déclarées : " + fmt(result.report.energy.value) + " MWh."
                  : "Total énergétique incomplet : " + fmt(result.energyMwh) + " MWh pour les lignes renseignées seulement."}
              </p>
              <p className="mt-2">
                Part renouvelable : {result.report.energyMix?.renewableMwh == null
                  ? "inconnue / non justifiée" : fmt(result.report.energyMix.renewableMwh) + " MWh"}.
                {" "}Part non renouvelable : {result.report.energyMix?.nonRenewableMwh == null
                  ? "inconnue / non justifiée" : fmt(result.report.energyMix.nonRenewableMwh) + " MWh"}.
              </p>
              {result.biogenicCO2T > 0 && <p className="mt-2">CO₂ biogénique séparé (hors total) : {fmt(result.biogenicCO2T)} t.</p>}
            </div>
            {result.coverage === "partial" && (
              <div className="mt-5 rounded-xl border border-amber-300 bg-amber-50 p-5">
                <h3 className="font-bold text-amber-900">Périmètre partiel — aucun total d’entreprise fiable</h3>
                <p className="mt-2 text-sm text-amber-900">
                  {result.missing.length > 0 && <>Sources inconnues ou non couvertes : {result.missing.map((source) => SOURCE_LABELS[source as Category] || source).join(", ")}. </>}
                  {result.assessment.exclusions && <>Des exclusions déclarées empêchent de confirmer les totaux. </>}
                  Les valeurs non disponibles ne sont jamais présumées nulles.
                </p>
              </div>
            )}
            {result.lines.length === 0 && result.assessment.processEmissions.length===0 && (
              <p className="mt-4 text-sm font-semibold text-amber-900">
                Aucune émission calculée. N’interprétez pas les zéros comme une absence d’émissions.
              </p>
            )}
            {eligibility && (
              <div className="mt-5 rounded-xl border border-[#0B3A63]/15 p-5 text-sm text-[#475569]">
                <h3 className="font-bold text-[#0B3A63]">Préparation de votre déclaration</h3>
                <p className="mt-2">{eligibility.dataStatus==="launch_candidate"
                  ? "Vos données correspondent au périmètre de lancement envisagé. Les facteurs, comparatifs et contrôles de délivrance restent à valider."
                  : "Votre simulation est disponible, mais certaines données ou sources nécessitent une vérification complémentaire."}</p>
                {eligibility.dataBlockers.length>0 && <ul className="mt-2 list-disc space-y-1 pl-5">
                  {eligibility.dataBlockers.map(code=><li key={code}>{({
                    GEOGRAPHY_UNCONFIRMED:"Périmètre géographique à confirmer.",
                    PERIOD_NOT_FULL_CALENDAR_YEAR:"Exercice calendaire complet requis pour la première version commerciale envisagée.",
                    MISSING_REQUIRED_TOTAL:"Consommation totale ou émissions incomplètes.",
                    DECLARED_EXCLUSIONS:"Sources exclues à clarifier.",
                    SOURCE_OUTSIDE_LAUNCH_SCOPE:"Une source nécessite une méthode complémentaire.",
                    NO_DOCUMENTED_ACTIVITY:"Aucune activité documentée ; vérifier les zéros.",
                    ACTIVITY_NOT_DOCUMENTED:"Consommations à documenter."
                  })[code]}</li>)}
                </ul>}
                <p className="mt-2 font-semibold">Commande indisponible : version de travail non commercialisée.</p>
              </div>
            )}
            <div className="mt-6">
              <button type="button" onClick={() => downloadSimulationCsv(result)}
                className="min-h-12 rounded-xl border border-[#0B3A63] bg-white px-5 py-3 font-semibold text-[#0B3A63] hover:bg-[#F8FAFC]">
                Télécharger le CSV de simulation (non signé)
              </button>
              <p className="mt-2 text-sm leading-relaxed text-[#475569]">
                Le CSV est généré localement, sans envoi au serveur. Il ne contient
                ni l’identité de l’entreprise, ni les références des justificatifs,
                ni un total énergétique inventé lorsque des sources sont inconnues.
                Il ne constitue pas la fiche PDF commerciale.
              </p>
            </div>
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
