// REVIEW_ONLY_LOCK: a denial endpoint for the isolated site review branch.
// All original /api endpoints are rewritten here before their route handlers run.
export const dynamic = "force-dynamic";
function denied() {
  return new Response("Aperçu en lecture seule : paiements, API et donnees clients desactives.", {
    status: 403,
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "no-store",
      "X-Robots-Tag": "noindex, nofollow, noarchive",
    },
  });
}
export {
  denied as GET,
  denied as HEAD,
  denied as POST,
  denied as PUT,
  denied as PATCH,
  denied as DELETE,
  denied as OPTIONS,
};
