import { json } from "@/lib/carbon/http";

/**
 * The spend-based attestation is a legacy-only service.
 * No new public purchase is allowed. Historical completed orders and existing
 * migrated credit entitlements remain handled by the dedicated support paths.
 */
export async function POST() {
 return json({
  error: "LEGACY_PRODUCT_NOT_FOR_SALE",
  message: "The spend-based statement is not offered for new purchase. Contact support for an existing order.",
 }, 410);
}
export const GET = POST;
