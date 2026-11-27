"""Offline research contract, not an application module or approved factor registry.
All ADEME numbers are read from archived source rows, never copied from memory.
The only allowed route is selection for methodological review; sale remains blocked.
"""
import json
from pathlib import Path
from decimal import Decimal
import unittest

EVIDENCE = Path(__file__).resolve().parents[1] / "docs/refonte/evidence/B03_ADEME_PHYSICAL_20261127.json"
data = json.loads(EVIDENCE.read_text(encoding="utf-8"), parse_float=Decimal)
rows = {}
for item in data["references"] + data["candidates"]:
    row = item["row"]
    rid = row["_id"]
    if rid in rows and rows[rid] != row:
        # Search relevance is not part of the source record.
        assert {k:v for k,v in rows[rid].items() if k != "_score"} == {k:v for k,v in row.items() if k != "_score"}
    rows[rid] = row

# Reviewed source identities, NOT approved for commercial use.
# Year means explicit activity-year provenance, not publication date or expiry.
# None = no confirmed activity year. A dated review of an historical factor is
# not enough to assign it to a new exercise.
specs = [
    ("electricity", "JF-Ssewkm48XeLYhjMd0C", 2023, "kgCO2e/kWh", "Combustion à la centrale"),
    ("electricity", "4a-V7kBU5QVSOA-uwyHZp", 2024, "kgCO2e/kWh", "Combustion à la centrale"),
    ("gas_pci", "4hxvzq5E9w-8ueSVrvooB", 2022, "kgCO2e/kWh PCI", "Combustion"),
    ("gas_pcs", "3oceUt65q5HMNWwmGxohv", 2022, "kgCO2e/kWh PCS", "Combustion"),
    ("diesel_b7", "bxSZYsoSp4G8TYo_p8S27", None, "kgCO2e/litre", "Combustion"),
    ("petrol_e10", "75uU5oI94zp14HF0O-Yxe", None, "kgCO2e/litre", "Combustion"),
    ("fuel_oil_fixed", "xupxpYVZPv-OAgYUfe5cz", None, "kgCO2e/litre", "Combustion"),
    ("fuel_oil_fixed", "WEN08TTG_8AZLq8F3q2L-", None, "kgCO2e/litre", "Combustion"),
    ("butane", "LCj-75ZnzO4fxDuuOdGss", None, "kgCO2e/kg", "Combustion"),
    ("propane", "aRCjX1sQ_wNVhNm-nQcOk", None, "kgCO2e/GJ PCI", "Combustion"),
]
def candidates(kind, geography, unit, year, scope):
    if not isinstance(year, int) or isinstance(year, bool) or not 1900 <= year <= 2100:
        raise ValueError("Invalid reporting year")
    required_scope = 2 if kind == "electricity" else 1
    if scope != required_scope:
        return []
    result = []
    for k, rid, activity_year, source_unit, boundary in specs:
        r = rows[rid]
        if k != kind or source_unit != unit:
            continue
        if r.get("Localisation_géographique") != geography:
            continue
        if (r.get("Type_Ligne") != "Poste" or
            r.get("Type_poste") != boundary or
            r.get("Unité_français") != unit or
            r.get("Statut_de_l'élément") != "Valide générique"):
            continue
        value = Decimal(str(r["Total_poste_non_décomposé"]))
        if not value.is_finite() or value < 0:
            raise ValueError("Invalid source factor")
        if activity_year is not None and activity_year > year:
            continue  # never choose a future vintage
        result.append({"row": rid, "value": value,
                       "activity_year": activity_year, "validity": r.get("Période_de_validité"),
                       "status": "EXACT_YEAR_CANDIDATE" if activity_year == year else "HISTORICAL_REVIEW_REQUIRED",
                       "sale_eligible": False})
    return result

def select_exact(kind, geography, unit, year, scope):
    options = [r for r in candidates(kind, geography, unit, year, scope)
               if r["status"] == "EXACT_YEAR_CANDIDATE"]
    if len(options) > 1:
        raise ValueError("Ambiguous factor: review needed")
    return options[0] if options else None

FR = "France continentale"
class TestStudy(unittest.TestCase):
    def test_electricity_2023(self):
        self.assertEqual(select_exact("electricity", FR, "kgCO2e/kWh", 2023, 2)["value"], Decimal("0.0394"))
    def test_electricity_2024(self):
        self.assertEqual(select_exact("electricity", FR, "kgCO2e/kWh", 2024, 2)["value"], Decimal("0.035"))
    def test_electricity_2025_no_automatic_fallback(self):
        self.assertIsNone(select_exact("electricity", FR, "kgCO2e/kWh", 2025, 2))
    def test_electricity_2026_no_automatic_fallback(self):
        self.assertIsNone(select_exact("electricity", FR, "kgCO2e/kWh", 2026, 2))
    def test_electricity_2027_no_automatic_fallback(self):
        self.assertIsNone(select_exact("electricity", FR, "kgCO2e/kWh", 2027, 2))
    def test_no_future_vintage(self):
        self.assertEqual(candidates("electricity", FR, "kgCO2e/kWh", 2022, 2), [])
    def test_wrong_geography(self):
        self.assertIsNone(select_exact("electricity", "Allemagne", "kgCO2e/kWh", 2024, 2))
    def test_wrong_scope(self):
        self.assertEqual(candidates("electricity", FR, "kgCO2e/kWh", 2024, 1), [])
    def test_wrong_unit(self):
        self.assertEqual(candidates("gas_pci", FR, "kgCO2e/kWh PCS", 2022, 1), [])
    def test_gas_pci_exact_candidate(self):
        self.assertEqual(select_exact("gas_pci", FR, "kgCO2e/kWh PCI", 2022, 1)["value"], Decimal("0.201"))
    def test_gas_pcs_exact_candidate(self):
        self.assertEqual(select_exact("gas_pcs", FR, "kgCO2e/kWh PCS", 2022, 1)["value"], Decimal("0.181"))
    def test_fuel_oil_geography(self):
        options = candidates("fuel_oil_fixed", FR, "kgCO2e/litre", 2026, 1)
        self.assertEqual([x["value"] for x in options], [Decimal("2.68")])
        self.assertTrue(all(x["status"] == "HISTORICAL_REVIEW_REQUIRED" for x in options))
        self.assertIsNone(select_exact("fuel_oil_fixed", FR, "kgCO2e/litre", 2026, 1))
    def test_overseas_fuel_oil_not_continental(self):
        self.assertEqual(candidates("fuel_oil_fixed", "Outre-mer", "kgCO2e/litre", 2026, 1)[0]["value"], Decimal("2.66"))
    def test_propane_unit(self):
        self.assertEqual(candidates("propane", FR, "kgCO2e/kWh PCI", 2026, 1), [])
        self.assertEqual(candidates("propane", FR, "kgCO2e/GJ PCI", 2026, 1)[0]["value"], Decimal("64.8"))
    def test_unknown_source_not_zero(self):
        self.assertIsNone(select_exact("district_heat", FR, "kgCO2e/kWh", 2026, 2))
    def test_historical_fuel_not_automatically_selected(self):
        self.assertIsNone(select_exact("diesel_b7", FR, "kgCO2e/litre", 2026, 1))
    def test_no_sale_even_exact_year(self):
        self.assertFalse(select_exact("electricity", FR, "kgCO2e/kWh", 2024, 2)["sale_eligible"])
    def test_invalid_year(self):
        for year in ("2024", True, 0):
            with self.assertRaises(ValueError):
                candidates("electricity", FR, "kgCO2e/kWh", year, 2)
    def test_comparison_example(self):
        old = select_exact("electricity", FR, "kgCO2e/kWh", 2023, 2)["value"]
        new = select_exact("electricity", FR, "kgCO2e/kWh", 2024, 2)["value"]
        self.assertEqual(Decimal(10000) * (old-new), Decimal("44.0"))

if __name__ == "__main__":
    unittest.main(verbosity=2)
