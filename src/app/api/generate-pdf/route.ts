export const runtime = "nodejs";

import { renderPdfHtml } from "./template";

export async function POST(req: Request) {
  if (!process.env.PDFSHIFT_API_KEY) {
    return new Response("PDFSHIFT_API_KEY missing", { status: 500 });
  }

  const data = await req.json();
  const html = renderPdfHtml(data);

  const response = await fetch("https://api.pdfshift.io/v3/convert/pdf", {
    method: "POST",
    headers: {
      "X-API-Key": process.env.PDFSHIFT_API_KEY,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      source: html,
      format: "A4",
      margin: {
        top: "24mm",
        right: "20mm",
        bottom: "24mm",
        left: "20mm",
      },
      use_print: true
    }),
  });

  if (!response.ok) {
    const error = await response.text();
    return new Response(error, { status: response.status });
  }

  const pdfBuffer = await response.arrayBuffer();

  return new Response(pdfBuffer, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": "attachment; filename=certif-scope.pdf",
    },
  });
}
