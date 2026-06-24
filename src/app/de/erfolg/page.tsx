import type { Metadata } from "next";
import { Suspense } from "react";
import SuccessClientDE from "./SuccessClientDE";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Zahlung bestätigt | Certif-Scope",
  description:
    "Ihre indikative CO₂e-Bescheinigung steht zum Download bereit. Speichern Sie Ihr PDF sofort: Certif-Scope bewahrt keine wiederherstellbare Kopie auf.",
  // Payment success page remains noindex like the source success route.
  robots: {
    index: false,
    follow: true,
  },
};

export default async function ErfolgPage({
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
              Zahlung bestätigt
            </h1>
            <p className="mt-4 text-[#0B3A63]/75">
              Ihre Bescheinigung wird vorbereitet...
            </p>
          </section>
        }
      >
        <SuccessClientDE sessionId={sessionId} />
      </Suspense>
    </main>
  );
}
