type PdfData = {
  company_name?: string;
  company_identifier?: string;
  country?: string;
  period?: string;
  emissions_value?: string;
};

export function renderPdfHtml(data: PdfData) {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Certif-Scope – CO₂ Attestation</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      padding: 48px;
      color: #0f172a;
    }
    h1 {
      font-size: 22px;
      margin-bottom: 24px;
    }
    p {
      font-size: 14px;
      margin: 8px 0;
    }
    .box {
      margin-top: 24px;
      padding: 16px;
      border: 1px solid #e5e7eb;
    }
  </style>
</head>
<body>
  <h1>CO₂ Emissions Attestation (Test)</h1>

  <p><strong>Company:</strong> ${data.company_name ?? "N/A"}</p>
  <p><strong>Identifier:</strong> ${data.company_identifier ?? "N/A"}</p>
  <p><strong>Country:</strong> ${data.country ?? "N/A"}</p>
  <p><strong>Period:</strong> ${data.period ?? "N/A"}</p>

  <div class="box">
    <p><strong>Total estimated emissions:</strong></p>
    <p>${data.emissions_value ?? "N/A"} tCO₂e</p>
  </div>

  <p style="margin-top:40px;font-size:12px;color:#64748b;">
    Indicative spend-based estimate. Not audited. Not CSRD/ESRS-compliant.
  </p>
</body>
</html>
`;
}
