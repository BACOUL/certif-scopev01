import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Image,
} from "@react-pdf/renderer";

import { LOGO_DATA_URL } from "@/lib/logo";

/* ======================================================
   STYLES — CANON INSTITUTIONNEL (PDF)
====================================================== */
const styles = StyleSheet.create({
  page: {
    paddingTop: 56,
    paddingBottom: 64,
    paddingHorizontal: 64,
    fontFamily: "Helvetica",
    fontSize: 9.5,
    color: "#0B3A63",
    backgroundColor: "#FFFFFF",
  },

  /* HEADER */
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 32,
  },

  headerLeft: {
    width: 360,
  },

  logo: {
    width: 140,
    height: 32,
    marginBottom: 6,
  },

  authorityName: {
    fontSize: 9,
    fontWeight: "bold",
  },

  authorityRole: {
    fontSize: 9,
  },

  authorityLimits: {
    fontSize: 9,
    color: "#333",
  },

  headerRight: {
    width: 80,
    alignItems: "flex-end",
  },

  qr: {
    width: 72,
    height: 72,
  },

  /* TITLE */
  titleBlock: {
    alignItems: "center",
    marginTop: 24,
    marginBottom: 28,
  },

  title: {
    fontFamily: "Times-Roman",
    fontSize: 24,
    fontWeight: "bold",
    letterSpacing: 0.6,
    textAlign: "center",
  },

  /* SECTIONS */
  section: {
    marginBottom: 22,
  },

  sectionTitle: {
    fontFamily: "Times-Roman",
    fontSize: 11,
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: 0.6,
    marginBottom: 8,
  },

  declaration: {
    fontFamily: "Times-Roman",
    fontSize: 11,
    lineHeight: 1.55,
  },

  small: {
    fontSize: 9,
    lineHeight: 1.5,
    color: "#333",
  },

  label: {
    fontSize: 9,
    fontWeight: "bold",
  },
});

/* ======================================================
   PDF — ATTESTATION OFFICIELLE
====================================================== */
export function AttestationPdf({
  attestationId,
  companyName,
  country,
  year,
  qrDataUrl,
  totalCO2e,
  methodology,
  hash,
}: {
  attestationId: string;
  companyName: string;
  country: string;
  year: string;
  qrDataUrl: string;
  totalCO2e: number;
  methodology: string;
  hash?: string;
}) {
  return (
    <Document>
      {/* ================================================== */}
      {/* PAGE 1 */}
      {/* ================================================== */}
      <Page size="A4" style={styles.page}>
        {/* HEADER */}
        <View style={styles.header}>
          {/* LEFT — LOGO + AUTORITÉ */}
          <View style={styles.headerLeft}>
            <Image src={LOGO_DATA_URL} style={styles.logo} />

            <Text style={styles.authorityName}>Certif-Scope</Text>
            <Text style={styles.authorityRole}>
              Independent infrastructure for indicative carbon emissions attestation
            </Text>
            <Text style={styles.authorityLimits}>
              Non-regulatory · Non-audit · Decision-support act
            </Text>
          </View>

          {/* RIGHT — QR */}
          <View style={styles.headerRight}>
            <Image src={qrDataUrl} style={styles.qr} />
          </View>
        </View>

        {/* TITLE */}
        <View style={styles.titleBlock}>
          <Text style={styles.title}>
            Indicative Carbon Emissions Attestation
          </Text>
        </View>

        {/* INTRO */}
        <View style={styles.section}>
          <Text style={styles.small}>
            This attestation is issued through a standardized, deterministic
            issuance process operated by Certif-Scope, based on aggregated data
            provided by the requesting entity for indicative decision-support
            purposes only.
          </Text>
        </View>

        {/* DECLARATION */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Declaration of attestation</Text>
          <Text style={styles.declaration}>
            Certif-Scope hereby attests that an indicative estimation of carbon
            emissions has been produced for the entity identified herein, for the
            stated reference year, within a strictly defined non-regulatory and
            non-audit framework.
          </Text>
        </View>

        {/* FACTS */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Attested facts</Text>

          <Text style={styles.small}>
            <Text style={styles.label}>Entity:</Text> {companyName}
          </Text>

          <Text style={styles.small}>
            <Text style={styles.label}>Country:</Text> {country}
          </Text>

          <Text style={styles.small}>
            <Text style={styles.label}>Reference year:</Text> {year}
          </Text>

          <Text style={styles.small}>
            <Text style={styles.label}>Indicative estimated value:</Text>{" "}
            {totalCO2e} tCO₂e (annual)
          </Text>
        </View>

        {/* ISSUANCE */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Issuance & verification</Text>

          <Text style={styles.small}>
            <Text style={styles.label}>Attestation ID:</Text> {attestationId}
          </Text>

          <Text style={styles.small}>
            <Text style={styles.label}>Methodology:</Text> {methodology}
          </Text>

          {hash && (
            <Text style={styles.small}>
              <Text style={styles.label}>Integrity hash:</Text> {hash}
            </Text>
          )}

          <Text style={styles.small}>
            Verification via QR code or public verification interface.
          </Text>
        </View>
      </Page>

      {/* ================================================== */}
      {/* PAGE 2 */}
      {/* ================================================== */}
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Estimation framework</Text>
          <Text style={styles.small}>
            The estimation is produced using a deterministic spend-based model
            converting aggregated financial data into indicative CO₂e values
            using predefined intensity coefficients.
          </Text>
        </View>
      </Page>
    </Document>
  );
}
