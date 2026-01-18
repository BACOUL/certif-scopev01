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

/* ======================================================
   LOGO
====================================================== */
const logoPath = path.join(process.cwd(), "public/logo.png");
const logoBase64 = `data:image/png;base64,${fs
  .readFileSync(logoPath)
  .toString("base64")}`;

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
    position: "relative",
    marginBottom: 28,
  },

  logo: {
    position: "absolute",
    top: 0,
    right: 0,
    height: 32,
  },

  authorityBlock: {
    marginTop: 4,
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
   PDF
====================================================== */
export function AttestationPdf({
  attestationId,
  companyName,
  country,
  year,
}: {
  attestationId: string;
  companyName: string;
  country: string;
  year: string;
}) {
  return (
    <Document>
      <Page size="A4" style={styles.page}>

        {/* SECTION 1 — AUTORITÉ ÉMETTRICE */}
        <View style={styles.header}>
          <Image src={logoBase64} style={styles.logo} />
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

        {/* SECTION 2 — INTITULÉ FORMEL */}
        <View style={styles.titleBlock}>
          <Text style={styles.title}>
            Indicative Carbon Emissions Attestation
          </Text>
        </View>

        {/* SECTION 3 — BASE D’ÉMISSION / MANDAT */}
        <View style={styles.section}>
          <Text style={styles.small}>
            This attestation is issued upon request through a standardized,
            non-discretionary issuance process operated by Certif-Scope, based on
            aggregated data provided by the requesting entity for indicative
            decision-support purposes only.
          </Text>
        </View>

        {/* SECTION 4 — DÉCLARATION D’ATTESTATION */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Declaration of attestation</Text>
          <Text style={styles.declaration}>
            Certif-Scope hereby attests that an indicative estimation of carbon
            emissions has been produced for the entity identified herein, for the
            stated reference year, within a strictly defined, non-regulatory and
            non-audit framework.
          </Text>
        </View>

        {/* SECTION 5 — OBJET ATTESTÉ */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Attested facts</Text>
          <Text style={styles.small}>
            <Text style={styles.label}>Entity:</Text> {companyName}
          </Text>
          <Text style={styles.small}>
            <Text style={styles.label}>Reference year:</Text> {year}
          </Text>
          <Text style={styles.small}>
            <Text style={styles.label}>Nature of the attested fact:</Text> Indicative carbon emissions estimation
          </Text>
          <Text style={styles.small}>
            <Text style={styles.label}>Indicative estimated value:</Text> XX.X tCO₂e (annual)
          </Text>
        </View>

        {/* SECTION 6 — PORTÉE & LIMITES */}
        <View style={styles.section}>
          <Text style={styles.small}>
            <Text style={styles.label}>Scope and limitations.</Text>
          </Text>
          <Text style={styles.small}>
            This attestation is limited to an indicative estimation of carbon
            emissions produced for decision-support purposes only.
          </Text>
          <Text style={styles.small}>
            It does not constitute a greenhouse gas audit, a verified carbon
            footprint, a certification, or any form of regulatory reporting.
          </Text>
          <Text style={styles.small}>
            This attestation is not equivalent to, and must not be used as, an
            ISO 14064-1 inventory, a CSRD / ESRS disclosure, or a GHG Protocol audit.
          </Text>
          <Text style={styles.small}>
            Any use for certification, assurance, regulatory compliance, or
            public claims of verified emissions is expressly excluded.
          </Text>
        </View>

      </Page>
    </Document>
  );
      }
