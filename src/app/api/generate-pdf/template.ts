export function renderPdfHtml(data: any) {
  return `
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8" />
  <title>Test Certif-Scope PDF</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      padding: 40px;
    }
    h1 {
      font-size: 22px;
    }
    p {
      font-size: 14px;
    }
  </style>
</head>
<body>
  <h1>TEST PDF CERTIF-SCOPE</h1>

  <p><strong>Company:</strong> ${data.company_name ?? "N/A"}</p>
  <p><strong>Identifier:</strong> ${data.company_identifier ?? "N/A"}</p>
  <p><strong>Country:</strong> ${data.country ?? "N/A"}</p>
  <p><strong>Period:</strong> ${data.period ?? "N/A"}</p>
  <p><strong>Emissions:</strong> ${data.emissions_value ?? "N/A"} tCO₂e</p>

  <hr />

  <p>Generated at: ${new Date().toISOString()}</p>
</body>
</html>
`;
}
