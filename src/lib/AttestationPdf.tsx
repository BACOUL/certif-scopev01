import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Image,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontFamily: "Helvetica",
    color: "#0B3A63",
  },
  box: {
    border: "2 solid #0B3A63",
    borderRadius: 10,
    padding: 24,
    height: "100%",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 24,
    alignItems: "center",
  },
  logo: {
    height: 40,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  label: {
    fontSize: 11,
    fontWeight: "bold",
    marginTop: 6,
  },
  value: {
    fontSize: 12,
  },
  footer: {
    marginTop: 32,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  small: {
    fontSize: 9,
    color: "#444",
  },
});

export function AttestationPdf(props: {
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
        <View style={styles.box}>
          <View style={styles.header}>
            <Image
              src={`${process.env.NEXT_PUBLIC_BASE_URL}/logo.png`}
              style={styles.logo}
            />
            <Text style={styles.title}>CO₂e Attestation</Text>
          </View>

          <Text style={styles.label}>Attestation ID</Text>
          <Text style={styles.value}>{props.attestationId}</Text>

          <Text style={styles.label}>Company</Text>
          <Text style={styles.value}>{props.companyName}</Text>

          <Text style={styles.label}>Country</Text>
          <Text style={styles.value}>{props.country}</Text>

          <Text style={styles.label}>Reference year</Text>
          <Text style={styles.value}>{props.year}</Text>

          <View style={styles.footer}>
            <View>
              <Text style={styles.label}>Verification</Text>
              <Text style={styles.small}>{props.verificationUrl}</Text>
              <Text style={styles.small}>
                Verifiable independently — no data stored
              </Text>
            </View>

            <Image src={props.qrDataUrl} style={{ width: 90, height: 90 }} />
          </View>
        </View>
      </Page>
    </Document>
  );
}
