import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Image,
} from "@react-pdf/renderer";
import fs from "fs";
import path from "path";

/* =======================
   LOGO LOCAL → BASE64
======================= */
const logoPath = path.join(process.cwd(), "public/logo.png");
const logoBase64 = `data:image/png;base64,${fs
  .readFileSync(logoPath)
  .toString("base64")}`;

/* =======================
   STYLES — INSTITUTIONAL
======================= */
const styles = StyleSheet.create({
  page: {
    padding: 42,
    fontFamily: "Helvetica",
    color: "#0B3A63",
    backgroundColor: "#FFFFFF",
  },

  container: {
    border: "2 solid #0B3A63",
    borderRadius: 14,
    padding: 30,
    height: "100%",
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 26,
  },

  logo: {
    height: 38,
  },

  titleBlock: {
    textAlign: "right",
    maxWidth: "60%",
  },

  title: {
    fontSize: 20,
    fontWeight: "bold",
    letterSpacing: 0.4,
  },

  subtitle: {
    fontSize: 11,
    marginTop: 4,
    color: "#444",
  },

  section: {
    marginBottom: 22,
  },

  sectionTitle: {
    fontSize: 13,
    fontWeight: "bold",
    marginBottom: 8,
    textTransform: "uppercase",
    letterSpacing: 0.4,
  },

  grid: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  col: {
    width: "48%",
  },

  label: {
    fontSize: 9,
    fontWeight: "bold",
    marginBottom: 2,
  },

  value: {
    fontSize: 11,
    marginBottom: 10,
  },

  keyFactsBox: {
    border: "1 solid #0B3A63",
    borderRadius: 12,
    padding: 18,
    marginBottom: 26,
    backgroundColor: "#F8FAFC",
  },

  keyValue: {
    fontSize: 28,
    fontWeight: "bold",
    marginVertical: 6,
  },

  keyUnit: {
    fontSize: 11,
    color: "#444",
  },

  small: {
    fontSize: 9,
    color: "#444",
    lineHeight: 1.45,
  },

  footer: {
    marginTop: 22,
    paddingTop: 14,
    borderTop: "1 solid #0B3A63",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },

  qr: {
    width: 90,
    height: 90,
  },

  pageNumber: {
    position: "absolute",
    bottom: 20,
    right: 42,
    fontSize: 9,
    color: "#444",
  },
});

/* =======================
   COMPONENT
======================= */
export function AttestationPdf({
  attestationId,
  companyName,
  country,
  year,
  verificationUrl,
  qrDataUrl,
}: {
  attestationId: string;
  companyName: string;
  country: string;
  year: string;
  verificationUrl: string;
  qrDataUrl: string;
}) {
  return (
    <Document>

      {/* ======================================================
          PAGE 1 — EXECUTIVE SUMMARY / KEY FACTS
      ====================================================== */}
      <Page size="A4" style={styles.page}>
        <View style={styles.container}>

          <View style={styles.header}>
            <Image src={logoBase64} style={styles.logo} />
            <View style={styles.titleBlock}>
              <Text style={styles.title}>CO₂e Emissions Attestation</Text>
              <Text style={styles.subtitle}>
                Indicative spend-based carbon emission estimate
              </Text>
            </View>
          </View>

          <View style={styles.keyFactsBox}>
            <Text style={styles.label}>Total estimated emissions</Text>
            <Text style={styles.keyValue}>XX.X tCO₂e</Text>
            <Text style={styles.keyUnit}>
              Annual indicative estimate — spend-based methodology
            </Text>
            <Text style={styles.small}>
              Scope 3 (upstream, monetary). External expenditures only.
            </Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Attestation details</Text>

            <View style={styles.grid}>
              <View style={styles.col}>
                <Text style={styles.label}>Attestation ID</Text>
                <Text style={styles.value}>{attestationId}</Text>

                <Text style={styles.label}>Entity</Text>
                <Text style={styles.value}>{companyName}</Text>
              </View>

              <View style={styles.col}>
                <Text style={styles.label}>Main country</Text>
                <Text style={styles.value}>{country}</Text>

                <Text style={styles.label}>Reference year</Text>
                <Text style={styles.value}>{year}</Text>
              </View>
            </View>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Purpose</Text>
            <Text style={styles.small}>
              This attestation provides a standardized, deterministic and
              verifiable CO₂e estimate designed for institutional workflows
              including procurement screening, banking and insurance risk
              assessment, and ESG due-diligence processes.
            </Text>
          </View>

          <Text style={styles.pageNumber}>Page 1 / 4</Text>
        </View>
      </Page>

      {/* ======================================================
          PAGE 2 — METHODOLOGY & NORMATIVE FRAMEWORK
      ====================================================== */}
      <Page size="A4" style={styles.page}>
        <View style={styles.container}>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Methodology overview</Text>
            <Text style={styles.small}>
              The calculation follows a standardized spend-based carbon
              accounting methodology. Annual external expenditures are converted
              into estimated CO₂e emissions using sector-average emission
              factors. This approach is commonly applied when physical activity
              data or supplier-specific primary data is unavailable.
            </Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Deterministic calculation model</Text>
            <Text style={styles.small}>
              Emissions are calculated using the following deterministic
              formula: Emissions = Financial spending × Emission factor.
              Identical inputs always produce identical outputs. No statistical
              inference, extrapolation, or estimation smoothing is applied.
            </Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Normative references</Text>
            <Text style={styles.small}>
              • GHG Protocol — Scope 3, spend-based method{"\n"}
              • ISO 14064-1 — greenhouse gas accounting principles{"\n"}
              • ESRS E1 / CSRD — contextual alignment (non-audit){"\n"}
              • Environmentally-Extended Input-Output (EEIO) foundations{"\n"}
              • Public sector emission factor datasets (versioned)
            </Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Reproducibility & versioning</Text>
            <Text style={styles.small}>
              All emission factors and methodological rules are versioned.
              Results are reproducible over time. No retroactive modification
              of issued attestations occurs.
            </Text>
          </View>

          <Text style={styles.pageNumber}>Page 2 / 4</Text>
        </View>
      </Page>

      {/* ======================================================
          PAGE 3 — SCOPE, LIMITATIONS & LEGAL STATUS
      ====================================================== */}
      <Page size="A4" style={styles.page}>
        <View style={styles.container}>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Scope definition</Text>
            <Text style={styles.small}>
              This attestation covers Scope 3 upstream emissions derived from
              monetary external expenditures. Scope 1 and Scope 2 emissions are
              explicitly excluded.
            </Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Exclusions</Text>
            <Text style={styles.small}>
              This document does not include physical activity data, lifecycle
              assessments, supplier-specific primary data, or downstream
              emissions. It does not represent a complete greenhouse gas
              inventory.
            </Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Limitations</Text>
            <Text style={styles.small}>
              The spend-based methodology provides an indicative estimate only.
              It is sensitive to sector averages and is not intended to replace
              detailed audits or primary-data-based accounting.
            </Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Legal status</Text>
            <Text style={styles.small}>
              This attestation is not a certified greenhouse gas audit, a
              regulatory filing, or a compliance statement under CSRD, ESRS, or
              equivalent frameworks. It is provided for informational and
              decision-support purposes within institutional workflows.
            </Text>
          </View>

          <Text style={styles.pageNumber}>Page 3 / 4</Text>
        </View>
      </Page>

      {/* ======================================================
          PAGE 4 — VERIFICATION, PRIVACY & ISSUANCE
      ====================================================== */}
      <Page size="A4" style={styles.page}>
        <View style={styles.container}>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Verification</Text>
            <Text style={styles.small}>
              This attestation can be verified independently using its unique
              identifier and verification URL. Verification does not require
              contacting Certif-Scope and can be performed online or offline.
            </Text>
            <Text style={styles.small}>{verificationUrl}</Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Data protection & privacy</Text>
            <Text style={styles.small}>
              All calculations are performed locally. No raw financial input
              data is stored by Certif-Scope. Only the resulting attestation and
              minimal non-sensitive metadata are generated.
            </Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Issuance</Text>
            <Text style={styles.small}>
              Digitally issued by Certif-Scope. Each attestation is uniquely
              identified and protected against tampering. Re-issuance is
              possible; recovery of lost documents is not provided.
            </Text>
          </View>

          <View style={styles.footer}>
            <View style={{ maxWidth: "65%" }}>
              <Text style={styles.small}>
                Certif-Scope — Independent CO₂e attestation infrastructure
              </Text>
            </View>
            <Image src={qrDataUrl} style={styles.qr} />
          </View>

          <Text style={styles.pageNumber}>Page 4 / 4</Text>
        </View>
      </Page>

    </Document>
  );
  }
