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

const logoPath = path.join(process.cwd(), "public/logo.png");
const logoBase64 = `data:image/png;base64,${fs
  .readFileSync(logoPath)
  .toString("base64")}`;

const styles = StyleSheet.create({
  page: {
    paddingTop: 56,
    paddingBottom: 56,
    paddingHorizontal: 56,
    fontFamily: "Helvetica",
    color: "#0B3A63",
    backgroundColor: "#FFFFFF",
  },

  header: {
    alignItems: "center",
    marginBottom: 26,
  },

  logo: {
    height: 36,
    marginBottom: 8,
  },

  title: {
    fontFamily: "Times-Roman",
    fontSize: 22,
    fontWeight: "bold",
    color: "#0B3A63",
    letterSpacing: 0.6,
    marginBottom: 2,
  },

  subtitle: {
    fontSize: 10,
    color: "#444",
    textAlign: "center",
    maxWidth: "80%",
    marginBottom: 8,
  },

  section: {
    marginBottom: 18,
  },

  sectionTitle: {
    fontFamily: "Times-Roman",
    fontSize: 11,
    fontWeight: "bold",
    color: "#0B3A63",
    textTransform: "uppercase",
    letterSpacing: 0.5,
    marginBottom: 6,
  },

  highlightValueBox: {
    padding: 14,
    backgroundColor: "#F8FAFC",
    borderLeftWidth: 4,
    borderLeftColor: "#15B097",
  },

  highlightValueLabel: {
    fontSize: 10,
    fontWeight: "bold",
    color: "#0B3A63",
  },

  highlightValue: {
    fontFamily: "Times-Roman",
    fontSize: 26,
    fontWeight: "bold",
    color: "#0B3A63",
    marginVertical: 4,
  },

  small: {
    fontSize: 9,
    lineHeight: 1.45,
    color: "#333",
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 6,
  },

  label: {
    fontSize: 9,
    fontWeight: "bold",
    width: "45%",
    color: "#0B3A63",
  },

  value: {
    fontSize: 9,
    width: "55%",
  },

  divider: {
    borderBottomWidth: 0.5,
    borderBottomColor: "#C9CED6",
  },

  footer: {
    marginTop: 24,
    paddingTop: 12,
    borderTopWidth: 0.5,
    borderTopColor: "#C9CED6",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },

  qr: {
    width: 76,
    height: 76,
    borderWidth: 1,
    borderColor: "#0B3A63",
  },

  pageNumber: {
    position: "absolute",
    bottom: 28,
    right: 56,
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

      {/* PAGE 1 — PREMIUM ATTESTATION */}
      <Page size="A4" style={styles.page}>
        {/* HEADER */}
        <View style={styles.header}>
          <Image src={logoBase64} style={styles.logo} />
          <Text style={styles.title}>PRENIIM Indicative CO₂e Attestation</Text>
          <Text style={styles.subtitle}>
            Decision-support carbon estimation based on the spend-based PRENIIM framework.
          </Text>
        </View>

        {/* CORE ESTIMATE */}
        <View style={styles.highlightValueBox}>
          <Text style={styles.highlightValueLabel}>
            Indicative estimated emissions (PRENIIM)
          </Text>
          <Text style={styles.highlightValue}>XX.X tCO₂e</Text>
          <Text style={styles.small}>
            Indicative annual estimate produced by the PRENIIM spend-based
            estimation framework. Non-audit, non-regulatory.
          </Text>
        </View>

        {/* KEY FACTS */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Attestation context</Text>
          {[
            ["Attestation ID", attestationId],
            ["Entity", companyName],
            ["Main country", country],
            ["Reference year", year],
            [
              "Estimation scope",
              "Indicative Scope 3 — spend-based (PRENIIM)",
            ],
            [
              "Estimation model",
              "PRENIIM v1.0 — deterministic spend-based framework",
            ],
            ["Nature of result", "Indicative estimate — non-audit"],
            ["Issued by", "Certif-Scope (PRENIIM framework)"],
          ].map(([l, v], i) => (
            <View key={i}>
              <View style={styles.row}>
                <Text style={styles.label}>{l}</Text>
                <Text style={styles.value}>{v}</Text>
              </View>
              {i < 7 && <View style={styles.divider} />}
            </View>
          ))}
        </View>

        {/* LEGAL POSITIONING */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Explicit legal positioning</Text>
          <Text style={styles.small}>
            This PRENIIM attestation is an indicative estimation instrument.
            It does not constitute a greenhouse gas audit, verified footprint,
            ISO 14064-1 inventory, or CSRD/ESRS compliance report. Not intended
            for regulatory filing.
          </Text>
        </View>

        {/* VERIFICATION */}
        <View style={styles.footer}>
          <View style={{ maxWidth: "65%" }}>
            <Text style={styles.sectionTitle}>Verification</Text>
            <Text style={styles.small}>{verificationUrl}</Text>
            <Text style={styles.small}>
              Digitally issued. Independently verifiable. No raw data stored.
            </Text>
          </View>
          <Image src={qrDataUrl} style={styles.qr} />
        </View>

        <Text style={styles.pageNumber}>Page 1 / 2</Text>
      </Page>

      {/* PAGE 2 — SUBSTANCE & LIMITS */}
      <Page size="A4" style={styles.page}>

        {/* PRENIIM FRAMEWORK */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>PRENIIM estimation framework</Text>
          <Text style={styles.small}>
            PRENIIM is a deterministic, spend-based estimation framework for
            institutional decision support. It converts financial expenditures
            into indicative CO₂e estimates using versioned intensity coefficients.
          </Text>
          <Text style={styles.small}>
            Formula applied: Indicative emissions = Spending × PRENIIM coefficient.
          </Text>
        </View>

        {/* NON-AUDIT CLARITY */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>What PRENIIM is not</Text>
          <Text style={styles.small}>
            PRENIIM does not use physical activity data, supplier-specific data,
            or lifecycle assessment. It is not a verification, audit, or
            regulatory accounting system.
          </Text>
        </View>

        {/* INDICATIVE BREAKDOWN */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Indicative estimation breakdown</Text>
          {[
            [
              "Purchased goods & services",
              "PRENIIM spend-based",
              "v2024-01",
              "X.X tCO₂e (indicative)",
            ],
            [
              "Professional services",
              "PRENIIM spend-based",
              "v2024-01",
              "X.X tCO₂e (indicative)",
            ],
          ].map((r, i) => (
            <View key={i}>
              <View style={styles.row}>
                <Text style={styles.label}>{r[0]}</Text>
                <Text style={styles.value}>
                  {r[1]} • {r[2]} • {r[3]}
                </Text>
              </View>
              {i < 1 && <View style={styles.divider} />}
            </View>
          ))}
        </View>

        {/* PRIVACY & INTEGRITY */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Data protection & integrity</Text>
          <Text style={styles.small}>
            PRENIIM operates under privacy-by-design. All calculations are done
            locally. No raw financial inputs are stored. Integrity is ensured
            via independent verification.
          </Text>
        </View>

        <Text style={styles.pageNumber}>Page 2 / 2</Text>

      </Page>

    </Document>
  );
                 }
