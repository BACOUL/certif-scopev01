import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Image,
} from "@react-pdf/renderer";

/* ======================================================
   STYLES — CANON INSTITUTIONNEL
====================================================== */
const styles = StyleSheet.create({
  page: {
    paddingTop: 64,
    paddingBottom: 64,
    paddingHorizontal: 68,
    fontFamily: "Helvetica",
    fontSize: 9.5,
    color: "#0B3A63",
    backgroundColor: "#FFFFFF",
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 28,
  },

  logoBlock: {
    maxWidth: "70%",
  },

  logo: {
    width: 140,
    height: 32,
    objectFit: "contain",
  },

  qr: {
    width: 72,
    height: 72,
  },

  authorityBlock: {
    marginTop: 2,
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
    marginTop: 36,
    marginBottom: 22,
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
   PDF — COMPOSANT PUR
   IMPORTANT :
   - logoUrl DOIT être une data URL (data:image/png;base64,…)
   - la conversion se fait côté API Node, jamais ici
====================================================== */
export function AttestationPdf({
  attestationId,
  companyName,
  country,
  year,
  qrDataUrl,
  logoUrl,
  totalCO2e,
  methodology,
  hash,
}: {
  attestationId: string;
  companyName: string;
  country: string;
  year: string;
  qrDataUrl: string;
  logoUrl: string; // data:image/png;base64,...
  totalCO2e: number;
  methodology: string;
  hash?: string;
}) {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <View style={styles.logoBlock}>
            {logoUrl && (
              <Image src={logoUrl} style={styles.logo} />
            )}

            <View style={styles.authorityBlock}>
              <Text style={styles.authorityName}>Certif-Scope</Text>
              <Text style={styles.authorityRole}>
                Independent infrastructure for indicative carbon emissions attestation
              </Text>
              <Text style={styles.authorityLimits}>
                Non-regulatory · Non-audit · Decision-support act
              </Text>
            </View>
          </View>

          <Image src={qrDataUrl} style={styles.qr} />
        </View>

        <View style={styles.titleBlock}>
          <Text style={styles.title}>
            Indicative Carbon Emissions Attestation
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.small}>
            This attestation is issued through a standardized, deterministic
            issuance process operated by Certif-Scope, based on aggregated data
            provided by the requesting entity for indicative decision-support
            purposes only.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Declaration of attestation</Text>
          <Text style={styles.declaration}>
            Certif-Scope hereby attests that an indicative estimation of carbon
            emissions has been produced for the entity identified herein, for the
            stated reference year, within a strictly defined non-regulatory and
            non-audit framework.
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
            {totalCO2e} tCO₂e (annual)
          </Text>
        </View>

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
