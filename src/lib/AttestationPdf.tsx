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
    marginBottom: 28, // légèrement réduit pour laisser place à la section 1
  },

  logo: {
    position: "absolute",
    top: 0,
    right: 0,
    height: 32, // conforme au standard validé
  },

  /* ===== SECTION 1 — AUTORITÉ ÉMETTRICE ===== */
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

  /* ===== TITRE (SECTION 2) ===== */
  titleBlock: {
    alignItems: "center",
    marginTop: 36,
  },

  title: {
    fontFamily: "Times-Roman",
    fontSize: 24,
    fontWeight: "bold",
    letterSpacing: 0.6,
    textAlign: "center",
    marginBottom: 8,
  },

  subtitle: {
    fontSize: 9,
    textAlign: "center",
    color: "#333",
    maxWidth: "78%",
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

  centralValue: {
    fontFamily: "Times-Roman",
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 4,
  },

  centralNote: {
    fontSize: 9,
    color: "#333",
    maxWidth: "90%",
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 5,
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

  legalBox: {
    borderLeftWidth: 3,
    borderLeftColor: "#15B097",
    paddingLeft: 12,
  },

  small: {
    fontSize: 9,
    lineHeight: 1.5,
    color: "#333",
  },

  listItem: {
    fontSize: 9,
    marginBottom: 3,
  },

  footer: {
    marginTop: 28,
    paddingTop: 12,
    borderTopWidth: 0.5,
    borderTopColor: "#D1D5DB",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },

  qr: {
    width: 70,
    height: 70,
  },

  pageNumber: {
    position: "absolute",
    bottom: 30,
    right: 68,
    fontSize: 8,
    color: "#555",
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
          PAGE 1 — ACTE INSTITUTIONNEL
      ====================================================== */}
      <Page size="A4" style={styles.page}>

        {/* HEADER + SECTION 1 */}
        <View style={styles.header}>
          <Image src={logoBase64} style={styles.logo} />

          {/* SECTION 1 — AUTORITÉ ÉMETTRICE */}
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
          <Text style={styles.subtitle}>
            Formal institutional act recording the existence of an indicative
            CO₂e estimation, issued for decision-support purposes only
          </Text>
        </View>

        {/* SECTION 4 — DÉCLARATION */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Declaration of attestation</Text>
          <Text style={styles.declaration}>
            Certif-Scope hereby attests that an indicative estimation of carbon
            emissions has been produced for the entity identified below, using a
            standardized deterministic spend-based calculation framework, under
            the methodological, legal and compliance boundaries defined herein.
          </Text>
        </View>

        {/* LE RESTE EST STRICTEMENT INCHANGÉ */}

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Attested indicative result</Text>
          <Text style={styles.centralValue}>XX.X tCO₂e</Text>
          <Text style={styles.centralNote}>
            Indicative annual CO₂e estimate derived exclusively from aggregated
            external financial expenditures, without physical activity data,
            supplier-specific measurements or audit procedures.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Identification</Text>
          {[
            ["Attestation ID", attestationId],
            ["Entity", companyName],
            ["Main country", country],
            ["Reference year", year],
            ["Estimation scope", "Indicative spend-based Scope 3 only"],
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

        <View style={[styles.section, styles.legalBox]}>
          <Text style={styles.sectionTitle}>Scope, nature & legal limits</Text>
          <Text style={styles.small}>
            This document constitutes an indicative estimation instrument only.
            It does not represent a greenhouse gas audit, a verified carbon
            footprint, an ISO 14064-1 inventory, nor a CSRD / ESRS regulatory
            disclosure. It is not suitable for certification, assurance,
            regulatory filing or public environmental claims.
          </Text>
        </View>

        <View style={styles.footer}>
          <View style={{ maxWidth: "65%" }}>
            <Text style={styles.sectionTitle}>Issuance & verification</Text>
            <Text style={styles.small}>Attestation ID: {attestationId}</Text>
            <Text style={styles.small}>{verificationUrl}</Text>
            <Text style={styles.small}>
              Digitally issued. Independently verifiable. No raw input data stored.
            </Text>
          </View>
          <Image src={qrDataUrl} style={styles.qr} />
        </View>

        <Text style={styles.pageNumber}>Page 1 / 2</Text>
      </Page>

      {/* PAGE 2 — inchangée */}
    </Document>
  );
}
