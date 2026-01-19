import type { NextApiRequest, NextApiResponse } from "next";
import { renderPdfHtml } from "@/lib/pdf-template";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    res.status(405).send("Method Not Allowed");
    return;
  }

  if (!process.env.PDFSHIFT_API_KEY) {
    res.status(500).send("PDFSHIFT_API_KEY missing");
    return;
  }

  try {
    const html = renderPdfHtml(req.body);

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

    if (!response.ok) {
      const error = await response.text();
      res.status(500).send(error);
      return;
    }

    const buffer = Buffer.from(await response.arrayBuffer());

    res.setHeader("Content-Type", "application/pdf");
    res.setHeader(
      "Content-Disposition",
      "attachment; filename=certif-scope-test.pdf"
    );
    res.send(buffer);
  } catch (err: any) {
    res.status(500).send(err?.message || "Unknown error");
  }
}
