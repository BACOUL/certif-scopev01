export const runtime = "nodejs";

import { renderPdfHtml } from "./template";

export async function POST(req: Request) {
  try {
    // Debug obligatoire : clé présente ?
    if (!process.env.PDFSHIFT_API_KEY) {
      return new Response("PDFSHIFT_API_KEY missing", { status: 500 });
    }

    // Lecture des données envoyées
    const data = await req.json();

    // Génération HTML
    const html = renderPdfHtml(data);

    // Appel PDFShift
    const response = await fetch("https://api.pdfshift.io/v3/convert/pdf", {
      method: "POST",
      headers: {
        Authorization:
          "Basic " +
          Buffer.from(`${process.env.PDFSHIFT_API_KEY}:`).toString("base64"),
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        source: html,
        format: "A4",
        print_background: true,
        margin: {
          top: "24mm",
          right: "20mm",
          bottom: "24mm",
          left: "20mm",
        },
      }),
    });

    // Erreur PDFShift explicite
    if (!response.ok) {
      const errorText = await response.text();
      return new Response(`PDFSHIFT_ERROR:\n${errorText}`, {
        status: 500,
      });
    }

    // Retour PDF
    const pdfBuffer = await response.arrayBuffer();

    return new Response(pdfBuffer, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": "attachment; filename=certif-scope-test.pdf",
      },
    });
  } catch (err: any) {
    return new Response(
      `UNHANDLED_ERROR:\n${err?.message || String(err)}`,
      { status: 500 }
    );
  }
}
