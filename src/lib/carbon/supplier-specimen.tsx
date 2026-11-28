import React from "react";
import { Document, Page, Text, View, StyleSheet, renderToBuffer } from "@react-pdf/renderer";
import { calculate } from "./calculate";
import { CATEGORIES } from "./factors";

/**
 * Public specimen only: exclusively fixed fictional inputs; no request body,
 * customer data, DB, Stripe, signature, key or PDFShift integration.
 * Separate from the historic paid PDF to avoid regressions.
 */
function specimenCalculation() {
  return calculate({
    locale: "fr",
    company: "ENTREPRISE EXEMPLE - DONNEES FICTIVES",
    identifier: "000000000 (fictif)",
    country: "FR",
    year: 2025,
    start: "2025-01-01",
    end: "2025-12-31",
    boundary: "Site administratif et chauffage - France continentale (fictif)",
    declarant: "Responsable fictif",
    exclusions: "",
    confirmed: true,
    sources: Object.fromEntries(
      CATEGORIES.map((kind) => [kind, kind === "electricity" || kind === "gas" ? "known" : "not_applicable"]),
    ),
    activities: [
      {
        id: "electricite-exemple", kind: "electricity", quantity: 10000,
        unit: "kWh", renewableEnergyKwh: 4000, quality: "invoice",
        evidence: "Facture fictive E-001",
      },
      {
        id: "gaz-exemple", kind: "gas_pci", quantity: 20000,
        unit: "kWh PCI", renewableEnergyKwh: 0, quality: "invoice",
        evidence: "Facture fictive G-001",
      },
    ],
  });
}

const color = "#0B3A63";
const styles = StyleSheet.create({
  page: { paddingTop: 45, paddingBottom: 52, paddingHorizontal: 42, fontFamily: "Helvetica", fontSize: 9.5, color: "#334155", backgroundColor: "#FFFFFF" },
  brandRow: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingBottom: 12, borderBottomWidth: 2, borderBottomColor: color },
  brand: { color, fontFamily: "Helvetica-Bold", fontSize: 18, letterSpacing: 0.7 },
  topLabel: { fontSize: 8, color: color, textAlign: "right", maxWidth: "53%" },
  title: { fontFamily: "Helvetica-Bold", color, fontSize: 21, marginTop: 21, marginBottom: 9 },
  subtitle: { fontSize: 10.5, lineHeight: 1.45, marginBottom: 12 },
  specimen: { backgroundColor: "#FFF4D7", color: "#7C4A00", borderWidth: 1, borderColor: "#E7BE64", padding: 10, marginBottom: 14, fontFamily: "Helvetica-Bold", fontSize: 10 },
  section: { color, fontFamily: "Helvetica-Bold", fontSize: 12, marginTop: 17, marginBottom: 8 },
  subtle: { fontSize: 8.5, lineHeight: 1.5 },
  line: { marginBottom: 4 },
  metricRow: { flexDirection: "row", marginTop: 8 },
  metricBox: { width: "33.3%", padding: 12, backgroundColor: "#F1F5F9", borderWidth: 1, borderColor: "#E2E8F0" },
  metricLabel: { fontSize: 8, color: color },
  metricNumber: { fontFamily: "Helvetica-Bold", fontSize: 17, marginTop: 7, color },
  metricUnit: { fontSize: 8, marginTop: 4 },
  headRow: { flexDirection: "row", paddingVertical: 8, backgroundColor: color },
  bodyRow: { flexDirection: "row", paddingVertical: 8, borderBottomWidth: 1, borderBottomColor: "#E2E8F0" },
  headCell: { color: "#FFFFFF", fontSize: 8, fontFamily: "Helvetica-Bold", width: "25%", paddingHorizontal: 6 },
  cell: { fontSize: 8, width: "25%", paddingHorizontal: 6 },
  note: { fontSize: 8.5, lineHeight: 1.5, padding: 11, marginTop: 14, backgroundColor: "#F1F5F9", color: "#334155" },
  footer: { position: "absolute", bottom: 23, left: 42, right: 42, paddingTop: 8, borderTopWidth: 1, borderTopColor: "#CBD5E1", fontSize: 7.5, color: "#64748B", textAlign: "center" },
});

const format = (number: number) => number.toFixed(3).replace(".", ",");

export async function createSupplierSpecimenPdf(): Promise<Uint8Array> {
  const result = specimenCalculation();
  const energy = result.energyBreakdown;
  const splits = [
    { label: "Electricite", data: energy.electricity },
    { label: "Combustibles", data: energy.fuels },
    { label: "Total", data: energy.total },
  ];

  const buffer = await renderToBuffer(
    <Document title="Certif-Scope - Specimen fiche carbone fournisseur" author="Certif-Scope">
      <Page size="A4" style={styles.page}>
        <View style={styles.brandRow}>
          <Text style={styles.brand}>CERTIF-SCOPE</Text>
          <Text style={styles.topLabel}>Fiche de donnees carbone fournisseur{'\n'}Simulation - non commercialisee</Text>
        </View>
        <Text style={styles.title}>Votre energie et vos emissions</Text>
        <Text style={styles.subtitle}>Exemple du futur document fournisseur : consommations d'energie, scopes 1 et 2, sources et limites de la declaration.</Text>
        <Text style={styles.specimen}>SPECIMEN - ENTREPRISE FICTIVE - AUCUNE CERTIFICATION - NE PAS UTILISER COMME JUSTIFICATIF</Text>
        <Text style={styles.section}>Entreprise et periode</Text>
        <Text style={styles.line}>{result.assessment.company}</Text>
        <Text style={styles.line}>Identifiant : {result.assessment.identifier}</Text>
        <Text style={styles.line}>Exercice : 1er janvier au 31 decembre 2025 - France</Text>
        <Text style={styles.subtle}>{result.assessment.boundary}</Text>

        <Text style={styles.section}>Emissions calculees - donnees fictives</Text>
        <View style={styles.metricRow}>
          <View style={styles.metricBox}>
            <Text style={styles.metricLabel}>Scope 1</Text>
            <Text style={styles.metricNumber}>{format(result.scope1T)}</Text>
            <Text style={styles.metricUnit}>t CO2e - emissions directes</Text>
          </View>
          <View style={styles.metricBox}>
            <Text style={styles.metricLabel}>Scope 2 location-based</Text>
            <Text style={styles.metricNumber}>{format(result.scope2LocationT)}</Text>
            <Text style={styles.metricUnit}>t CO2e - electricite</Text>
          </View>
          <View style={styles.metricBox}>
            <Text style={styles.metricLabel}>Scopes 1 + 2 calcules</Text>
            <Text style={styles.metricNumber}>{format(result.totalT)}</Text>
            <Text style={styles.metricUnit}>t CO2e - non audite</Text>
          </View>
        </View>
        <Text style={styles.section}>Energie declaree et ventilation - MWh</Text>
        <View style={styles.headRow}>
          {["Source", "Renouvelable", "Non renouvelable", "Total"].map((header) =>
            <Text key={header} style={styles.headCell}>{header}</Text>)}
        </View>
        {splits.map(({ label, data }) =>
          <View key={label} style={styles.bodyRow}>
            <Text style={styles.cell}>{label}</Text>
            <Text style={styles.cell}>{data.renewableMwh === null ? "Non disponible" : format(data.renewableMwh)}</Text>
            <Text style={styles.cell}>{data.nonRenewableMwh === null ? "Non disponible" : format(data.nonRenewableMwh)}</Text>
            <Text style={styles.cell}>{data.totalComplete ? format(data.totalMwh) : "Non disponible"}</Text>
          </View>)}
        <Text style={styles.note}>La part renouvelable est declaree a titre illustratif et n'est pas controlee. Une source inconnue ne doit jamais etre traitee comme une consommation nulle. Aucun facteur 2026 valide n'est revendique.</Text>
        <Text style={styles.footer} fixed>SPECIMEN / DOCUMENT FICTIF - Certif-Scope - Page 1 / 2</Text>
      </Page>
      <Page size="A4" style={styles.page}>
        <View style={styles.brandRow}>
          <Text style={styles.brand}>CERTIF-SCOPE</Text>
          <Text style={styles.topLabel}>Annexe technique - specimen{'\n'}Facteurs historiques non revalides</Text>
        </View>
        <Text style={styles.title}>Methode et traçabilite</Text>
        <Text style={styles.specimen}>SPECIMEN - SANS VALEUR CONTRACTUELLE OU REGLEMENTAIRE</Text>
        <Text style={styles.section}>Calculs et justificatifs fictifs</Text>
        {result.lines.map((line) =>
          <View key={line.id} style={{ marginBottom: 13, paddingBottom: 11, borderBottomWidth: 1, borderBottomColor: "#E2E8F0" }}>
            <Text style={styles.line}>{line.kind} : {line.quantity} {line.unit} x {line.factor.value} kg CO2e/unite = {format(line.kgCO2e / 1000)} t CO2e</Text>
            <Text style={styles.subtle}>Scope {line.factor.scope} - ref. {line.factor.id} - {line.factor.version} - {line.factor.year}</Text>
            <Text style={styles.subtle}>Justificatif fictif : {line.evidence}</Text>
          </View>)}
        <Text style={styles.section}>Perimetre et limites</Text>
        <Text style={styles.subtle}>Exercice : 2025. Methode de calcul : {result.methodology}. Perimetre limite aux activites explicitement declarees. Emissions de scope 3 non calculees. Scope 2 en methode location-based uniquement. Les facteurs historiques ADEME v23.6 ne constituent pas des facteurs 2026 valides. Aucune piece fournie n'a ete verifiee.</Text>
        <Text style={styles.note}>Le reglement delegue (UE) 2026/1560, annexe I, B3, propose des informations relatives a l'energie et aux emissions pour une publication volontaire. Cet exemple ne constitue ni un rapport B3 complet, ni un bilan GES obligatoire, ni un document certifie.</Text>
        <Text style={styles.section}>Sources methodologiques</Text>
        <Text style={styles.subtle}>ADEME Base Carbone (facteurs historiques) : https://data.ademe.fr/datasets/base-carboner</Text>
        <Text style={styles.subtle}>GHG Protocol - Scope 2 Guidance : https://ghgprotocol.org/scope-2-guidance</Text>
        <Text style={styles.subtle}>Reglement (UE) 2026/1560 : https://eur-lex.europa.eu/eli/reg_del/2026/1560/oj</Text>
        <Text style={styles.section}>Signature et verification</Text>
        <Text style={styles.subtle}>Ce specimen est genere a partir de donnees fictives. Il ne possede ni numero de commande, ni signature electronique, ni QR code de verification. La future edition commerciale necessitera ces mecanismes et leur validation independante.</Text>
        <Text style={styles.footer} fixed>SPECIMEN / DOCUMENT FICTIF - Certif-Scope - Page 2 / 2</Text>
      </Page>
    </Document>
  );
  return new Uint8Array(buffer);
}
