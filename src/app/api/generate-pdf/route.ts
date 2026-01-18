import type { NextApiRequest, NextApiResponse } from "next";

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
    const html = `
      <html>
        <body>
          <h1>TEST PDF</h1>
          <p>OK</p>
        </body>
      </html>
    `;

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
      }),
    });

    if (!response.ok) {
      const text = await response.text();
      res.status(500).send(text);
      return;
    }

    const buffer = Buffer.from(await response.arrayBuffer());

    res.setHeader("Content-Type", "application/pdf");
    res.setHeader(
      "Content-Disposition",
      "attachment; filename=test.pdf"
    );
    res.send(buffer);
  } catch (e: any) {
    res.status(500).send(e.message);
  }
}
