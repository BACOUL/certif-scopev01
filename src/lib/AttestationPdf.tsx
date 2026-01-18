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
   STYLES — CHARTE INSTITUTIONNELLE
====================================================== */
const styles = StyleSheet.create({
  page: {
    paddingTop: 64,
    paddingBottom: 64,
    paddingHorizontal: 64,
    fontFamily: "Helvetica",
    fontSize: 10,
    color: "#0B3A63",
    backgroundColor: "#FFFFFF",
  },

  header: {
    alignItems: "center",
    marginBottom: 40,
  },

  logo: {
    height: 32,
    marginBottom: 16,
  },

  title: {
    fontFamily: "Times-Roman",
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },

  section: {
    marginBottom: 28,
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
    borderLeftWidth: 3,
    borderLeftColor: "#15B097",
    paddingLeft: 14,
  },

  declarationText: {
    fontSize: 11,
    lineHeight: 1.45,
  },

  factsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 6,
  },

  factsLabel: {
    width: "42%",
    fontSize: 9,
    fontWeight: "bold",
  },

  factsValue: {
    width: "58%",
    fontSize: 9,
  },

  separator: {
    borderBottomWidth: 0.5,
    borderBottomColor: "#D1D5DB",
  },

  emphasisValue: {
    fontFamily: "Times-Roman",
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 6,
  },

  small: {
    fontSize: 9,
    lineHeight: 1.45,
    color: "#333",
  },

  footer: {
    marginTop: 36,
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
    bottom: 28,
    right: 64,
    fontSize: 8,
    color: "#555",
  },
});

/* ======================================================
   COMPONENT
====================================================== */
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

        {/* 1. AUTORITÉ ÉMETTRICE */}
        <View style={styles.header}>
          <Image src={logoBase64} style={styles.logo} />
        </View>

        {/* 2. INTITULÉ FORMEL */}
        <View style={styles.section}>
          <Text style={styles.title}>
            Indicative Carbon Emissions Attestation
          </Text>
        </View>

        {/* 3. DÉCLARATION D’ATTESTATION */}
        <View style={[styles.section, styles.declaration]}>
          <Text style={styles.declarationText}>
            This document formally records the existence of an indicative
            estimation of carbon emissions for the entity identified below,
            calculated using a standardized spend-based estimation framework
            within a defined and limited scope.
          </Text>
        </View>

        {/* 4. OBJET ATTESTÉ (FAITS) */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Attested facts</Text>

          <Text style={styles.emphasisValue}>XX.X tCO₂e</Text>
          <Text style={styles.small}>
            Indicative annual emissions estimate
          </Text>

          {[
            ["Entity", companyName],
            ["Main country", country],
            ["Reference year", year],
            ["Nature of estimation", "Indicative spend-based estimation"],
          ].map(([l, v], i) => (
            <View key={i}>
              <View style={styles.factsRow}>
                <Text style={styles.factsLabel}>{l}</Text>
                <Text style={styles.factsValue}>{v}</Text>
              </View>
              {i < 3 && <View style={styles.separator} />}
            </View>
          ))}
        </View>

        {/* 5. PORTÉE & LIMITES */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Scope and limitations</Text>
          <Text style={styles.small}>
            This attestation is indicative only. It does not constitute a
            greenhouse gas audit, a verified carbon footprint, a regulatory
            disclosure, or any form of certification. It is not suitable for
            CSRD, ESRS, ISO 14064-1 or equivalent compliance or assurance use.
          </Text>
        </View>

        {/* 6. ÉMISSION & VÉRIFICATION */}
        <View style={styles.footer}>
          <View style={{ maxWidth: "65%" }}>
            <Text style={styles.sectionTitle}>Issuance and verification</Text>
            <Text style={styles.small}>Attestation ID: {attestationId}</Text>
            <Text style={styles.small}>Issued by: Certif-Scope</Text>
            <Text style={styles.small}>{verificationUrl}</Text>
            <Text style={styles.small}>
              Digitally issued. Independently verifiable.
            </Text>
          </View>
          <Image src={qrDataUrl} style={styles.qr} />
        </View>

        <Text style={styles.pageNumber}>Page 1 / 2</Text>
      </Page>

      {/* ======================================================
          PAGE 2 — ANNEXE TECHNIQUE (NON AUTONOME)
      ====================================================== */}
      <Page size="A4" style={styles.page}>

        {/* 7. CADRE D’ESTIMATION */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Estimation framework</Text>
          <Text style={styles.small}>
            The estimation is produced using a deterministic spend-based model.
            Aggregated financial expenditures are converted into indicative CO₂e
            values using predefined intensity coefficients.
          </Text>
        </View>

        {/* 8. HYPOTHÈSES CLÉS */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Key assumptions</Text>
          <Text style={styles.small}>
            – Aggregated financial data only{"\n"}
            – No physical activity data{"\n"}
            – No supplier-specific information{"\n"}
            – Deterministic calculation model
          </Text>
        </View>

        {/* 9. EXCLUSIONS EXPLICITES */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Explicit exclusions</Text>
          <Text style={styles.small}>
            – No Scope 1 or Scope 2 emissions{"\n"}
            – No lifecycle assessment{"\n"}
            – No downstream emissions{"\n"}
            – No verification or audit procedures
          </Text>
        </View>

        {/* 10. RÉFÉRENCES CONTEXTUELLES */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Contextual references</Text>
          <Text style={styles.small}>
            References to international frameworks such as the GHG Protocol,
            ISO 14064-1, CSRD or ESRS are provided for contextual purposes only.
            This document does not claim compliance or alignment with these
            frameworks.
          </Text>
        </View>

        {/* 11. DONNÉES & INTÉGRITÉ */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Data handling and integrity</Text>
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
