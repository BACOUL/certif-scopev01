type AttestationData = {
  attestationId: string;
  companyName: string;
  country: string;
  year: string;
  totalCO2e: number;
  methodology: string;
  hash?: string;
};

export function renderPdfHtml(data: AttestationData): string {
  const {
    attestationId,
    companyName,
    country,
    year,
    totalCO2e,
    methodology,
    hash,
  } = data;

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <title>Certif-Scope – Carbon Attestation</title>

  <style>
    @page {
      size: A4;
      margin: 24mm 20mm;
    }

    body {
      font-family: Helvetica, Arial, sans-serif;
      font-size: 9.5pt;
      color: #0B3A63;
      line-height: 1.5;
    }

    .page {
      page-break-after: always;
    }

    .header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-bottom: 28px;
    }

    .logo {
      width: 140px;
      height: auto;
      margin-bottom: 8px;
    }

    .authority {
      font-size: 9pt;
      color: #333;
    }

    .authority strong {
      color: #0B3A63;
    }

    .qr {
      width: 72px;
      height: 72px;
      border: 1px solid #ccc;
    }

    h1 {
      font-family: "Times New Roman", Times, serif;
      font-size: 24pt;
      text-align: center;
      margin: 36px 0 22px;
      letter-spacing: 0.6px;
    }

    h2 {
      font-family: "Times New Roman", Times, serif;
      font-size: 11pt;
      text-transform: uppercase;
      letter-spacing: 0.6px;
      margin: 22px 0 8px;
    }

    p {
      margin: 4px 0;
    }

    .small {
      font-size: 9pt;
      color: #333;
    }

    .label {
      font-weight: bold;
      color: #0B3A63;
    }

    .section {
      margin-bottom: 22px;
    }
  </style>
</head>

<body>

  <!-- PAGE 1 -->
  <div class="page">

    <div class="header">
      <div>
        <img
          class="logo"
          src="https://certif-scope.com/logo.png"
          alt="Certif-Scope"
        />

        <div class="authority">
          <strong>Certif-Scope</strong><br/>
          Independent infrastructure for indicative carbon emissions attestation<br/>
          Non-regulatory · Non-audit · Decision-support act
        </div>
      </div>

      <div class="qr"></div>
    </div>

    <h1>Indicative Carbon Emissions Attestation</h1>

    <div class="section small">
      This attestation is issued through a standardized, deterministic issuance
      process operated by Certif-Scope, based on aggregated data provided by the
      requesting entity for indicative decision-support purposes only.
    </div>

    <div class="section">
      <h2>Declaration of attestation</h2>
      <p>
        Certif-Scope hereby attests that an indicative estimation of carbon
        emissions has been produced for the entity identified herein, for the
        stated reference year, within a strictly defined non-regulatory and
        non-audit framework.
      </p>
    </div>

    <div class="section">
      <h2>Attested facts</h2>

      <p class="small"><span class="label">Entity:</span> ${companyName}</p>
      <p class="small"><span class="label">Country:</span> ${country}</p>
      <p class="small"><span class="label">Reference year:</span> ${year}</p>
      <p class="small">
        <span class="label">Indicative estimated value:</span>
        ${totalCO2e} tCO₂e (annual)
      </p>
    </div>

    <div class="section">
      <h2>Issuance & verification</h2>

      <p class="small"><span class="label">Attestation ID:</span> ${attestationId}</p>
      <p class="small"><span class="label">Methodology:</span> ${methodology}</p>
      ${
        hash
          ? `<p class="small"><span class="label">Integrity hash:</span> ${hash}</p>`
          : ""
      }
      <p class="small">
        Verification via QR code or public verification interface.
      </p>
    </div>

  </div>

  <!-- PAGE 2 -->
  <div class="page">
    <div class="section">
      <h2>Estimation framework</h2>
      <p class="small">
        The estimation is produced using a deterministic spend-based model
        converting aggregated financial data into indicative CO₂e values using
        predefined intensity coefficients.
      </p>
    </div>
  </div>

</body>
</html>
`;
}
