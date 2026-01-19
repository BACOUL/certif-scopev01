export function renderPdfHtml(data: any) {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Certif-Scope PDF</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      padding: 40px;
      color: #0B3A63;
    }
    h1 {
      font-size: 24px;
      margin-bottom: 20px;
    }
    p {
      font-size: 14px;
    }
  </style>
</head>
<body>
  <h1>Certif-Scope – Test PDF</h1>
  <p>Company: ${data.company_name}</p>
  <p>Country: ${data.country}</p>
  <p>Period: ${data.period}</p>
</body>
</html>
`;
}
