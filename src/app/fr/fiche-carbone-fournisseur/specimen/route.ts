import { createSupplierSpecimenPdf } from "@/lib/carbon/supplier-specimen";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/** Public fixed demo: no buyer input, storage, checkout or client records. */
export async function GET() {
  try {
    const bytes = await createSupplierSpecimenPdf();
    return new Response(bytes, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": 'attachment; filename="certif-scope-specimen-fournisseur-fr.pdf"',
        "Cache-Control": "no-store",
        "X-Content-Type-Options": "nosniff",
        "X-Robots-Tag": "noindex, nofollow, noarchive",
      },
    });
  } catch {
    return new Response("Specimen PDF temporairement indisponible", {
      status: 503,
      headers: { "Cache-Control": "no-store" },
    });
  }
}
