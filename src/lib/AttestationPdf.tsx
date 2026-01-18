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
   STYLES PREMIUM
======================= */
const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontFamily: "Helvetica",
    color: "#0B3A63",
  },

  container: {
    border: "2 solid #0B3A63",
    borderRadius: 14,
    padding: 28,
    height: "100%",
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 28,
  },

  logo: {
    height: 42,
  },

  titleBlock: {
    textAlign: "right",
  },

  title: {
    fontSize: 20,
    fontWeight: "bold",
  },

  subtitle: {
    fontSize: 11,
    color: "#444",
    marginTop: 4,
  },

  section: {
    marginBottom: 22,
  },

  sectionTitle: {
    fontSize: 13,
    fontWeight: "bold",
    marginBottom: 6,
  },

  label: {
    fontSize: 10,
    fontWeight: "bold",
  },

  value: {
    fontSize: 11,
    marginBottom: 6,
  },

  resultBox: {
    border: "1 solid #0B3A63",
    borderRadius: 10,
    padding: 18,
    textAlign: "center",
    marginVertical: 18,
  },

  resultValue: {
    fontSize: 26,
    fontWeight: "bold",
    marginTop: 6,
  },

  small: {
    fontSize: 9,
    color: "#444",
    lineHeight: 1.4,
  },

  footer: {
    marginTop: 24,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },

  qr: {
    width: 90,
    height: 90,
  },
});

/* =======================
   PDF COMPONENT
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
      <Page size="A4" style={styles.page}>
        <View style={styles.container}>

          {/* HEADER */}
          <View style={styles.header}>
            <Image src={logoBase64} style={styles.logo} />
            <View style={styles.titleBlock}>
              <Text style={styles.title}>CO₂e Attestation</Text>
              <Text style={styles.subtitle}>
                Standardized spend-based carbon estimation
              </Text>
            </View>
          </View>

          {/* ENTITY */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Entity information</Text>

            <Text style={styles.label}>Attestation ID</Text>
            <Text style={styles.value}>{attestationId}</Text>

            <Text style={styles.label}>Company / Legal entity</Text>
            <Text style={styles.value}>{companyName}</Text>

            <Text style={styles.label}>Main country</Text>
            <Text style={styles.value}>{country}</Text>

            <Text style={styles.label}>Reference year</Text>
            <Text style={styles.value}>{year}</Text>
          </View>

          {/* RESULT */}
          <View style={styles.resultBox}>
            <Text style={styles.label}>Total estimated emissions</Text>
            <Text style={styles.resultValue}>Indicative CO₂e value</Text>
            <Text style={styles.small}>
              Spend-based estimation derived from annual external expenditures
            </Text>
          </View>

          {/* METHODOLOGY */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Methodology</Text>
            <Text style={styles.small}>
              This attestation is generated using a standardized spend-based
              methodology. Annual external expenditures are converted into
              estimated CO₂e emissions using sector-average emission factors.
              This approach is commonly used when physical activity data is not
              available.
            </Text>
          </View>

          {/* LIMITATIONS */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Scope & limitations</Text>
            <Text style={styles.small}>
              This document provides an indicative estimate only. It does not
              constitute a greenhouse gas audit, regulatory report, or
              compliance statement under CSRD, ESRS, or similar frameworks.
              Scope 1 and Scope 2 emissions are not included.
            </Text>
          </View>

          {/* VERIFICATION */}
          <View style={styles.footer}>
            <View style={{ maxWidth: "65%" }}>
              <Text style={styles.sectionTitle}>Verification</Text>
              <Text style={styles.small}>{verificationUrl}</Text>
              <Text style={styles.small}>
                Verifiable independently — no data stored by Certif-Scope
              </Text>
            </View>
            <Image src={qrDataUrl} style={styles.qr} />
          </View>

        </View>
      </Page>
    </Document>
  );
}
