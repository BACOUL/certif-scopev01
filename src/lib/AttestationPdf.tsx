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
   LOGO
======================= */
const logoPath = path.join(process.cwd(), "public/logo.png");
const logoBase64 = `data:image/png;base64,${fs
  .readFileSync(logoPath)
  .toString("base64")}`;

/* =======================
   STYLES — CANON INSTITUTIONNEL
======================= */
const styles = StyleSheet.create({
  page: {
    paddingTop: 72,
    paddingBottom: 72,
    paddingHorizontal: 72,
    fontFamily: "Helvetica",
    color: "#0B3A63",
    backgroundColor: "#FFFFFF",
  },

  /* ---------- HEADER ---------- */
  header: {
    alignItems: "center",
    marginBottom: 42,
  },

  logo: {
    height: 28,
    marginBottom: 22,
  },

  authority: {
    fontSize: 10,
    letterSpacing: 0.6,
    marginBottom: 6,
  },

  title: {
    fontFamily: "Times-Roman",
    fontSize: 26,
    fontWeight: "bold",
    letterSpacing: 0.8,
    textAlign: "center",
    marginBottom: 8,
  },

  subtitle: {
    fontSize: 10,
    textAlign: "center",
    color: "#333",
    maxWidth: "75%",
  },

  /* ---------- BLOCKS ---------- */
  block: {
    marginBottom: 34,
  },

  blockTitle: {
    fontFamily: "Times-Roman",
    fontSize: 11,
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: 0.6,
    marginBottom: 10,
  },

  declaration: {
    fontFamily: "Times-Roman",
    fontSize: 12,
    lineHeight: 1.55,
  },

  centralValue: {
    fontFamily: "Times-Roman",
    fontSize: 34,
    fontWeight: "bold",
    marginBottom: 6,
  },

  centralNote: {
    fontSize: 9,
    color: "#333",
    maxWidth: "85%",
  },

  /* ---------- TABLE ---------- */
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 6,
  },

  label: {
    width: "42%",
    fontSize: 9,
    fontWeight: "bold",
  },

  value: {
    width: "58%",
    fontSize: 9,
  },

  separator: {
    borderBottomWidth: 0.5,
    borderBottomColor: "#D1D5DB",
  },

  /* ---------- LEGAL ---------- */
  legalBox: {
    borderLeftWidth: 3,
    borderLeftColor: "#15B097",
    paddingLeft: 14,
  },

  small: {
    fontSize: 9,
    lineHeight: 1.5,
    color: "#333",
  },

  listItem: {
    fontSize: 9,
    marginBottom: 4,
  },

  /* ---------- FOOTER ---------- */
  footer: {
    marginTop: 40,
    paddingTop: 14,
    borderTopWidth: 0.5,
    borderTopColor: "#D1D5DB",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },

  qr: {
    width: 72,
    height: 72,
  },

  pageNumber: {
    position: "absolute",
    bottom: 32,
    right: 72,
    fontSize: 8,
    color: "#555",
  },
});

/* =======================
   PDF
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
          PAGE 1 — ACTE AUTONOME
      ====================================================== */}
      <Page size="A4" style={styles.page}>

        <View style={styles.header}>
          <Image src={logoBase64} style={styles.logo} />
          <Text style={styles.authority}>
            Independent indicative carbon attestation infrastructure
          </Text>
          <Text style={styles.title}>
            Indicative Carbon Emissions Attestation
          </Text>
          <Text style={styles.subtitle}>
            Formal indicative estimation issued for institutional
            decision-support purposes only
          </Text>
        </View>

        <View style={styles.block}>
          <Text style={styles.blockTitle}>Declaration</Text>
          <Text style={styles.declaration}>
            Certif-Scope hereby issues the present indicative carbon emissions
            attestation, based on aggregated financial data and a standardized
            deterministic spend-based estimation framework, under the conditions
            and limitations defined herein.
          </Text>
        </View>

        <View style={styles.block}>
          <Text style={styles.blockTitle}>Indicative estimated emissions</Text>
          <Text style={styles.centralValue}>XX.X tCO₂e</Text>
          <Text style={styles.centralNote}>
            Indicative annual estimate derived from aggregated external
            expenditures using a deterministic spend-based methodology.
          </Text>
        </View>

        <View style={styles.block}>
          <Text style={styles.blockTitle}>Identification</Text>
          {[
            ["Attestation ID", attestationId],
            ["Entity", companyName],
            ["Main country", country],
            ["Reference year", year],
            ["Nature of document", "Indicative estimation — non-audit"],
            ["Issued by", "Certif-Scope"],
          ].map(([l, v], i) => (
            <View key={i}>
              <View style={styles.row}>
                <Text style={styles.label}>{l}</Text>
                <Text style={styles.value}>{v}</Text>
              </View>
              {i < 5 && <View style={styles.separator} />}
            </View>
          ))}
        </View>

        <View style={[styles.block, styles.legalBox]}>
          <Text style={styles.blockTitle}>Legal nature & limitations</Text>
          <Text style={styles.small}>
            This document is an indicative estimation instrument. It does not
            constitute a greenhouse gas audit, a verified carbon footprint, an
            ISO 14064-1 compliant inventory, nor a CSRD / ESRS regulatory report.
            It is not intended for certification, assurance, or regulatory filing.
          </Text>
        </View>

        <View style={styles.footer}>
          <View style={{ maxWidth: "65%" }}>
            <Text style={styles.blockTitle}>Issuance & verification</Text>
            <Text style={styles.small}>{verificationUrl}</Text>
            <Text style={styles.small}>
              Digitally issued. Independently verifiable. No raw input data stored.
            </Text>
          </View>
          <Image src={qrDataUrl} style={styles.qr} />
        </View>

        <Text style={styles.pageNumber}>Page 1 / 2</Text>
      </Page>

      {/* ======================================================
          PAGE 2 — ANNEXE INSTITUTIONNELLE
      ====================================================== */}
      <Page size="A4" style={styles.page}>

        <View style={styles.block}>
          <Text style={styles.blockTitle}>Estimation framework</Text>
          <Text style={styles.small}>
            The estimation is performed using a deterministic spend-based model.
            Aggregated financial expenditures are converted into indicative CO₂e
            values using predefined intensity coefficients. Identical inputs
            produce identical outputs.
          </Text>
        </View>

        <View style={styles.block}>
          <Text style={styles.blockTitle}>Key assumptions</Text>
          {[
            "Aggregated financial data only",
            "No physical activity data",
            "No supplier-specific information",
            "Deterministic calculation model",
          ].map((t, i) => (
            <Text key={i} style={styles.listItem}>– {t}</Text>
          ))}
        </View>

        <View style={styles.block}>
          <Text style={styles.blockTitle}>Explicit exclusions</Text>
          {[
            "No Scope 1 or Scope 2 emissions",
            "No lifecycle assessment",
            "No downstream emissions",
            "No verification or audit procedures",
          ].map((t, i) => (
            <Text key={i} style={styles.listItem}>– {t}</Text>
          ))}
        </View>

        <View style={styles.block}>
          <Text style={styles.blockTitle}>Contextual references</Text>
          <Text style={styles.small}>
            References to international frameworks such as the GHG Protocol,
            ISO 14064-1, CSRD or ESRS are provided for conceptual context only.
            This document does not claim compliance or alignment with such
            frameworks.
          </Text>
        </View>

        <View style={styles.block}>
          <Text style={styles.blockTitle}>Data handling & integrity</Text>
          <Text style={styles.small}>
            No raw financial input data is stored. Integrity relies on unique
            identification and independent verification of the issued act.
            Certif-Scope performs estimation only, not validation or assurance.
          </Text>
        </View>

        <Text style={styles.pageNumber}>Page 2 / 2</Text>
      </Page>

    </Document>
  );
}
