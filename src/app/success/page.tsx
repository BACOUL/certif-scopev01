import { Suspense } from "react";
import SuccessClient from "./SuccessClient";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export const metadata = {
  title: "Paiement confirmé | Certif-Scope",
  description:
    "Votre attestation CO₂e indicative est prête à être téléchargée. Conservez immédiatement votre PDF : Certif-Scope ne garde pas de copie récupérable.",
  robots: {
    index: false,
    follow: false,
  },
};

export default async function SuccessPage({
  searchParams,
}: {
  searchParams: Promise<{ session_id?: string }>;
}) {
  const resolvedSearchParams = await searchParams;
  const sessionId =
    typeof resolvedSearchParams?.session_id === "string"
      ? resolvedSearchParams.session_id
      : null;

  return (
    <main className="min-h-screen bg-[#F8FAFC] px-6 py-12 md:py-16">
      <Suspense
        fallback={
          <section className="mx-auto w-full max-w-xl rounded-2xl border border-[#0B3A63]/10 bg-white p-8 text-center shadow-sm md:p-10">
            <h1 className="text-2xl font-bold text-[#0B3A63]">
              Paiement confirmé
            </h1>
            <p className="mt-4 text-[#0B3A63]/75">
              Préparation de votre attestation…
            </p>
          </section>
        }
      >
        <SuccessClient sessionId={sessionId} />
      </Suspense>
    </main>
  );
}
