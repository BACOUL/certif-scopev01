type AttestationPayload = {
  companyName: string;
  sector: string;
  country: string;
  period: string;
  scope1?: number;
  scope2?: number;
  scope3?: number;
  total: number;
};

type AttestationResponse = {
  success: boolean;
  id: string;
  hash: string;
  hashShort: string;
  verifyUrl: string;
  pdfBase64: string;
};

export async function generateAttestation(
  payload: AttestationPayload
): Promise<AttestationResponse> {
  const res = await fetch(
    `${process.env.CERTIF_SCOPE_PDF_URL}/api/attestation`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      cache: "no-store"
    }
  );

  if (!res.ok) {
    throw new Error("Attestation service failed");
  }

  return res.json();
}
