import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Image,
} from "@react-pdf/renderer";

import { LOGO_DATA_URL } from "@/lib/logo";

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

  headerRight: {
    width: 80,
    alignItems: "flex-end",
  },

  qr: {
    width: 72,
    height: 72,
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

export function AttestationPdf({
  attestationId,
  companyName,
  country,
  year,
  totalCO2e,
  methodology,
  qrDataUrl,
}: {
  attestationId: string;
  companyName: string;
  country: string;
  year: string;
  totalCO2e: string;
  methodology: string;
  qrDataUrl: string;
}) {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
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

          <View style={styles.headerRight}>
            <Image src={qrDataUrl} style={styles.qr} />
          </View>
        </View>

        <View style={styles.titleBlock}>
          <Text style={styles.title}>
            Indicative Carbon Emissions Attestation
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.small}>
            This attestation is issued through a standardized, deterministic
            issuance process operated by Certif-Scope, for indicative
            decision-support purposes only.
          </Text>
        </View>

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
            {totalCO2e} tCO₂e
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Issuance</Text>

          <Text style={styles.small}>
            <Text style={styles.label}>Attestation ID:</Text> {attestationId}
          </Text>

          <Text style={styles.small}>
            <Text style={styles.label}>Methodology:</Text> {methodology}
          </Text>
        </View>
      </Page>
    </Document>
  );
}
