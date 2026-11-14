import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import { rmSync } from "node:fs";
import { createRequire } from "node:module";

const buildDir = ".tmp-carbon-engine-check";
const require = createRequire(import.meta.url);

try {
  execFileSync("./node_modules/.bin/tsc", [
    "--target", "ES2022",
    "--module", "commonjs",
    "--moduleResolution", "node",
    "--rootDir", "src/lib/carbon",
    "--outDir", buildDir,
    "--esModuleInterop", "--skipLibCheck", "--strict",
    "src/lib/carbon/calculate.ts",
    "src/lib/carbon/export.ts",
  ], { stdio: "inherit" });
  const { calculate } = require("../" + buildDir + "/calculate.js");
  const { simulationCsv } = require("../" + buildDir + "/export.js");
  const { CATEGORIES, FACTORS } = require("../" + buildDir + "/factors.js");
  const near = (actual, expected) =>
    assert.ok(Math.abs(actual - expected) < 1e-9, actual + " != " + expected);
  const base = () => ({
    locale: "fr",
    country: "FR",
    company: "Entreprise Exemple",
    identifier: "000111222",
    year: 2025,
    start: "2025-01-01",
    end: "2025-12-31",
    boundary: "Établissement principal en France",
    declarant: "Service comptabilité",
    exclusions: "",
    confirmed: true,
    sources: Object.fromEntries(CATEGORIES.map((category) => [category, category === "electricity" ? "known" : "not_applicable"])),
    activities: [{
      id: "test-electricity",
      kind: "electricity",
      quantity: 10000,
      unit: "kWh",
      quality: "invoice",
      evidence: "Facture électricité de test",
      renewableEnergyKwh: 4000,
    }],
  });

  const full = calculate(base());
  near(full.scope1T, 0);
  near(full.scope2LocationT, 0.394);
  near(full.totalT, 0.394);
  near(full.energyMwh, 10);
  near(full.energyBreakdown.total.renewableMwh, 4);
  near(full.energyBreakdown.total.nonRenewableMwh, 6);
  assert.equal(full.energyTotalComplete, true);
  assert.equal(full.coverage, "declared_sources_covered");
  assert.ok(full.warnings.includes("HISTORICAL_FACTORS"), "Historical emission factors must be disclosed");

  const unknown = base();
  unknown.sources.gas = "unknown";
  const incomplete = calculate(unknown);
  assert.equal(incomplete.coverage, "partial");
  assert.ok(incomplete.missing.includes("gas"));
  assert.equal(incomplete.energyTotalComplete, false);
  assert.equal(incomplete.energyBreakdown.total.totalComplete, false);
  assert.equal(incomplete.energyBreakdown.total.renewableMwh, null);
  assert.equal(incomplete.saleEligible, false);

  const noLines = base();
  noLines.sources.electricity = "unknown";
  noLines.activities = [];
  const unavailable = calculate(noLines);
  assert.equal(unavailable.lines.length, 0);
  assert.equal(unavailable.saleEligible, false);

  const unsupported = base();
  unsupported.sources.purchased_heat = "known";
  const omitted = calculate(unsupported);
  assert.ok(omitted.missing.includes("purchased_heat"));
  assert.equal(omitted.saleEligible, false);

  const fossil = base();
  fossil.sources.gas = "known";
  fossil.sources.diesel_b7 = "known";
  fossil.activities.push(
    { id: "gas", kind: "gas_pcs", quantity: 20000, unit: "kWh PCS", quality: "invoice", evidence: "Gaz test" },
    { id: "diesel", kind: "diesel_b7", quantity: 1000, unit: "L", energyKwh: 10000, quality: "invoice", evidence: "Diesel test" },
  );
  const fossilResult = calculate(fossil);
  near(fossilResult.scope1T, 6.11);
  near(fossilResult.energyMwh, 38);

  const fugitive = base();
  fugitive.sources.refrigerants = "known";
  fugitive.activities.push({
    id: "hfc32", kind: "refrigerant_hfc32", quantity: 0.5,
    unit: "kg", quality: "invoice", evidence: "Rejet HFC-32 documenté",
  });
  near(calculate(fugitive).scope1T, 0.3375);

  const year2026 = base();
  year2026.year = 2026;
  year2026.start = "2026-01-01";
  year2026.end = "2026-10-31";
  const provisional = calculate(year2026);
  assert.equal(provisional.saleEligible, false);
  assert.ok(provisional.warnings.includes("2026_PROVISIONAL"));

  const wrongUnit = base();
  wrongUnit.activities[0].unit = "L";
  assert.throws(() => calculate(wrongUnit));
  const negative = base();
  negative.activities[0].quantity = -1;
  assert.throws(() => calculate(negative));
  const fabricatedZero = base();
  fabricatedZero.activities[0].renewableEnergyKwh = 11000;
  assert.throws(() => calculate(fabricatedZero));
  const duplicate = base();
  duplicate.activities.push({ ...duplicate.activities[0], id: "different-id" });
  assert.throws(() => calculate(duplicate));
  const missingQuantity = base();
  delete missingQuantity.activities[0].quantity;
  assert.throws(() => calculate(missingQuantity));
  const unconfirmed = base();
  unconfirmed.confirmed = false;
  assert.throws(() => calculate(unconfirmed));
  assert.equal(FACTORS.electricity.value, 0.0394);
  assert.equal(FACTORS.refrigerant_hfc32.value, 675);

  const completeCsv = simulationCsv(full);
  const partialCsv = simulationCsv(incomplete);
  const parseCsv = (csv) => csv.replace(/^\\uFEFF/, "").trim().split("\\r\\n").map((line) => line.split(";"));
  const completeRows = parseCsv(completeCsv);
  const partialRows = parseCsv(partialCsv);
  assert.equal(completeRows[0].length, 17);
  assert.equal(completeRows[1].length, 17);
  assert.equal(completeRows[1][9], "10", "Full energy total is available when all sources are covered");
  assert.equal(completeRows[1][10], "4");
  assert.equal(completeRows[1][11], "6");
  assert.equal(partialRows[1][8], "10", "Measured subtotal remains traceable");
  assert.equal(partialRows[1][9], "", "Missing source must not become a false company total");
  assert.equal(partialRows[1][12], "partial");
  assert.equal(partialRows[1][13], "gas");
  assert.ok(!completeCsv.includes("Entreprise Exemple"), "No company identity in exported file");
  assert.ok(!completeCsv.includes("Facture électricité de test"), "No entered evidence in exported file");
  assert.ok(completeCsv.includes("SIMULATION_NON_CERTIFIEE"), "Simulation must be unmistakable");
  console.log("Supplier CSV tests passed: energy completeness, renewable split, partial totals and data minimisation.");

  console.log("Supplier engine tests passed: historical factors, scopes 1/2, energy, missing sources, refrigerant, 2026 and invalid inputs.");
} finally {
  rmSync(buildDir, { force: true, recursive: true });
}
