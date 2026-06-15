import { Suspense } from "react";
import Script from "next/script";
import SuccessClient from "./SuccessClient";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export const metadata = {
  title: "Payment successful — Certif-Scope",
  description: "Your CO₂e attestation has been issued.",
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
    <>
      <Script
        id="google-ads-conversion-success"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            window.gtag = window.gtag || function(){window.dataLayer.push(arguments);};
            window.gtag('event', 'conversion', {
              'send_to': 'AW-933198701/rnQFCIPr1KEcE032_bwD',
              'value': 89.0,
              'currency': 'EUR'
              ${sessionId ? `, 'transaction_id': ${JSON.stringify(sessionId)}` : ""}
            });
          `,
        }}
      />

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
          <SuccessClient sessionId={sessionId} />
        </Suspense>
      </main>
    </>
  );
}
