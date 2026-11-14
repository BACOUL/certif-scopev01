import type { Calculation } from "./calculate";

/**
 * Non-contractual simulation export only. No identifying company information,
 * evidence text, document signature or order reference is included.
 *
 * Stable machine-readable columns; never substitute known activity subtotals
 * for an unknown enterprise-wide energy total.
 */
type Cell = string | number | boolean | null | undefined;
function csvRow(cells: Cell[]): string {
  return cells.map((cell) => {
    const raw = cell === null || cell === undefined ? "" : String(cell);
    // Protect spreadsheet consumers from formula evaluation even if a future
    // code change introduces user-supplied text.
    const safe = /^[\s\u0000-\u001f]*[=+@-]/.test(raw) ? "'" + raw : raw;
    return /[;"\r\n]/.test(safe) ? '"' + safe.replace(/"/g, '""') + '"' : safe;
  }).join(";");
}

export function simulationCsv(result: Calculation): string {
  const total = result.energyBreakdown.total;
  const header = [
    "type_ligne", "exercice", "source", "scope", "quantite", "unite",
    "facteur_kgco2e_unite", "emissions_tco2e", "energie_relevee_mwh",
    "energie_totale_mwh", "energie_renouvelable_mwh",
    "energie_non_renouvelable_mwh", "couverture", "sources_manquantes",
    "version_facteur", "methodologie", "avertissement",
  ];
  const rows: Cell[][] = [
    [
      "resume", result.assessment.year, "", "1+2", "", "", "",
      result.totalT, result.energyMwh,
      result.energyTotalComplete ? result.energyMwh : null,
      total.renewableMwh, total.nonRenewableMwh, result.coverage,
      result.missing.join("|"), "", result.methodology,
      "SIMULATION_NON_CERTIFIEE_FACTEURS_HISTORIQUES",
    ],
    ...result.lines.map((line): Cell[] => [
      "detail", result.assessment.year, line.kind, line.factor.scope,
      line.quantity, line.unit, line.factor.value, line.kgCO2e / 1000,
      line.energyKwh / 1000, null, null, null, "source_declaree", "",
      line.factor.version, result.methodology, "FACTEUR_NON_REVALIDE",
    ]),
  ];
  // BOM makes the UTF-8 French headers readable in common spreadsheet apps.
  return "\uFEFF" + [csvRow(header), ...rows.map(csvRow)].join("\r\n") + "\r\n";
}
