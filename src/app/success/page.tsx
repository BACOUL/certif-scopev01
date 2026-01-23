import { Suspense } from "react";
import SuccessClient from "./SuccessClient";

export const metadata = {
  title: "Payment successful — Certif-Scope",
  description: "Your CO₂e attestation has been issued.",
};

export default function SuccessPage({
  searchParams,
}: {
  searchParams: { session_id?: string };
}) {
  const sessionId =
    typeof searchParams?.session_id === "string"
      ? searchParams.session_id
      : null;

  return (
    <main className="min-h-screen bg-[#F8FAFC] flex items-center justify-center px-6">
      <Suspense
        fallback={
          <section className="max-w-xl w-full bg-white border border-gray-200 rounded-2xl shadow-sm p-10 text-center">
            <h1 className="text-2xl font-bold text-[#0B3A63]">
              Payment confirmed
            </h1>
            <p className="text-gray-600 mt-4">
              Finalizing your attestation…
            </p>
          </section>
        }
      >
        {/* 
          IMPORTANT:
          - sessionId is OPTIONAL
          - never block rendering if null
          - SuccessClient must stay UX-only
        */}
        <SuccessClient sessionId={sessionId} />
      </Suspense>
    </main>
  );
}
