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

/* LOGO */
const logoPath = path.join(process.cwd(), "public/logo.png");
const logoBase64 = `data:image/png;base64,${fs
  .readFileSync(logoPath)
  .toString("base64")}`;

/* STYLES — ACTE FORMEL */
const styles = StyleSheet.create({
  page: {
    paddingTop: 64,
    paddingBottom: 64,
    paddingHorizontal: 64,
    fontFamily: "Helvetica",
    color: "#0B3A63",
    backgroundColor: "#FFFFFF",
  },

  header: {
    alignItems: "center",
    marginBottom: 36,
  },

  logo: {
    height: 32,
    marginBottom: 18,
  },

  title: {
    fontFamily: "Times-Roman",
    fontSize: 24,
    fontWeight: "bold",
    letterSpacing: 0.8,
    textAlign: "center",
    marginBottom: 6,
  },

  subtitle: {
    fontSize: 10,
    textAlign: "center",
    color: "#444",
    maxWidth: "70%",
  },

  block: {
    marginBottom: 28,
  },

  blockTitle: {
    fontFamily: "Times-Roman",
    fontSize: 11,
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: 0.6,
    marginBottom: 8,
  },

  centralValue: {
    fontFamily: "Times-Roman",
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 4,
  },

  centralNote: {
    fontSize: 9,
    color: "#333",
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 6,
  },

  label: {
    width: "40%",
    fontSize: 9,
    fontWeight: "bold",
  },

  value: {
    width: "60%",
    fontSize: 9,
  },

  separator: {
    borderBottomWidth: 0.5,
    borderBottomColor: "#D1D5DB",
  },

  legalBox: {
    borderLeftWidth: 3,
    borderLeftColor: "#15B097",
    paddingLeft: 12,
  },

  small: {
    fontSize: 9,
    lineHeight: 1.45,
    color: "#333",
  },

  footer: {
    marginTop: 36,
    paddingTop: 12,
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
    bottom: 28,
    right: 64,
    fontSize: 8,
    color: "#555",
  },
});

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
          PAGE 1 — ACTE D’ATTESTATION
      ====================================================== */}
      <Page size="A4" style={styles.page}>

        <View style={styles.header}>
          <Image src={logoBase64} style={styles.logo} />
          <Text style={styles.title}>
            Indicative Carbon Emissions Attestation
          </Text>
          <Text style={styles.subtitle}>
            Formal indicative estimation issued for institutional
            decision-support purposes only
          </Text>
        </View>

        <View style={styles.block}>
          <Text style={styles.blockTitle}>Indicative estimated emissions</Text>
          <Text style={styles.centralValue}>XX.X tCO₂e</Text>
          <Text style={styles.centralNote}>
            Indicative annual estimate derived from aggregated financial data
            using a standardized spend-based estimation framework.
          </Text>
        </View>

        <View style={styles.block}>
          <Text style={styles.blockTitle}>Attestation identification</Text>

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
          <Text style={styles.blockTitle}>Legal nature</Text>
          <Text style={styles.small}>
            This document is an indicative estimation instrument. It does not
            constitute a greenhouse gas audit, a verified carbon footprint, an
            ISO-compliant inventory, or a CSRD / ESRS regulatory report. It is
            not intended for certification, assurance, or regulatory filing.
          </Text>
        </View>

        <View style={styles.footer}>
          <View style={{ maxWidth: "65%" }}>
            <Text style={styles.blockTitle}>Verification</Text>
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
          PAGE 2 — ANNEXE TECHNIQUE
      ====================================================== */}
      <Page size="A4" style={styles.page}>

        <View style={styles.block}>
          <Text style={styles.blockTitle}>Estimation framework (summary)</Text>
          <Text style={styles.small}>
            The estimation is performed using a deterministic spend-based model.
            Aggregated financial expenditures are converted into indicative CO₂e
            values using predefined intensity coefficients. Identical inputs
            produce identical outputs.
          </Text>
        </View>

        <View style={styles.block}>
          <Text style={styles.blockTitle}>Indicative breakdown</Text>

          {[
            ["Purchased goods & services", "Spend-based estimation", "v2024-01", "X.X tCO₂e"],
            ["Professional services", "Spend-based estimation", "v2024-01", "X.X tCO₂e"],
          ].map((r, i) => (
            <View key={i}>
              <View style={styles.row}>
                <Text style={styles.label}>{r[0]}</Text>
                <Text style={styles.value}>
                  {r[1]} — {r[2]} — {r[3]}
                </Text>
              </View>
              {i < 1 && <View style={styles.separator} />}
            </View>
          ))}
        </View>

        <View style={styles.block}>
          <Text style={styles.blockTitle}>Explicit exclusions</Text>
          <Text style={styles.small}>
            No physical activity data. No supplier-specific data. No lifecycle
            assessment. No downstream emissions. No verification or audit
            procedures applied.
          </Text>
        </View>

        <View style={styles.block}>
          <Text style={styles.blockTitle}>Conceptual references</Text>
          <Text style={styles.small}>
            Certain international frameworks may be referenced for conceptual
            context only. This document does not claim compliance or alignment
            with GHG Protocol standards, ISO 14064-1, CSRD, ESRS, or equivalent
            regulatory frameworks.
          </Text>
        </View>

        <View style={styles.block}>
          <Text style={styles.blockTitle}>Data protection & integrity</Text>
          <Text style={styles.small}>
            Calculations are performed without storing raw financial inputs.
            Integrity relies on unique identification and independent
            verification. This framework performs estimation, not validation
            or assurance.
          </Text>
        </View>

        <Text style={styles.pageNumber}>Page 2 / 2</Text>
      </Page>

    </Document>
  );
}
