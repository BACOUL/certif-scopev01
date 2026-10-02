import { getEuFlowCopy, type EuNonCoreLocale } from "@/lib/eu-flow";

type VerificationData = {
  certificateId?: string;
  issuer?: string;
  issuedAt?: string;
  validUntil?: string;
  methodVersion?: string;
  factorVersion?: string;
  algorithm?: string;
  hash?: string;
  signature?: string;
};

export default function EuVerify({
  locale,
  data,
  invalid = false,
}: {
  locale: EuNonCoreLocale;
  data?: VerificationData | null;
  invalid?: boolean;
}) {
  const c = getEuFlowCopy(locale).verify;

  return (
    <section className="mx-auto max-w-4xl px-6 py-12 md:px-8 md:py-16">
      <h1 className="text-3xl font-extrabold text-[#0B3A63] md:text-4xl">{c.title}</h1>
      <p className="mt-4 max-w-3xl leading-relaxed text-[#475569]">{c.intro}</p>

      {invalid || !data ? (
        <div className="mt-8 rounded-2xl border border-amber-200 bg-amber-50 p-5 text-amber-900">
          {c.invalid}
        </div>
      ) : (
        <>
          <dl className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              [c.documentId, data.certificateId],
              [c.issuer, data.issuer],
              [c.issued, data.issuedAt],
              [c.validUntil, data.validUntil],
              [c.method, data.methodVersion],
              [c.factor, data.factorVersion],
            ].map(([label, value]) => (
              <div key={label} className="rounded-2xl border border-[#0B3A63]/10 bg-[#F8FAFC] p-5">
                <dt className="text-xs font-semibold uppercase tracking-wide text-[#64748B]">{label}</dt>
                <dd className="mt-2 break-words font-semibold text-[#0B3A63]">{value || "—"}</dd>
              </div>
            ))}
          </dl>

          {(data.algorithm || data.hash || data.signature) && (
            <details className="mt-6 rounded-2xl border border-[#0B3A63]/10 bg-white p-5">
              <summary className="cursor-pointer font-semibold text-[#0B3A63]">Technical integrity</summary>
              <dl className="mt-4 space-y-4 text-sm">
                <div>
                  <dt className="font-semibold text-[#64748B]">Algorithm</dt>
                  <dd className="mt-1 break-all text-[#1f2937]">{data.algorithm || "—"}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-[#64748B]">SHA-256</dt>
                  <dd className="mt-1 break-all font-mono text-xs text-[#1f2937]">{data.hash || "—"}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-[#64748B]">Signature</dt>
                  <dd className="mt-1 break-all font-mono text-xs text-[#1f2937]">{data.signature || "—"}</dd>
                </div>
              </dl>
            </details>
          )}
        </>
      )}
    </section>
  );
}
