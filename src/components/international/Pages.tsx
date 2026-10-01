import Image from "next/image";
import Homepage from "./Homepage";
import Link from "next/link";
import { internationalCopy } from "@/lib/international-copy";
import { formCopy } from "@/lib/form-copy";
import { paths, numberLocales } from "@/lib/site-locales";
import {
  CATEGORIES,
  EMISSION_FACTORS,
  FACTOR_VERSION,
} from "@/lib/indicative-model";

type Locale = "en" | "de";
const linkClass = "font-semibold text-[#0B3A63] underline";
const buttonClass =
  "inline-flex min-h-[52px] items-center justify-center rounded-xl bg-[#0B3A63] px-6 py-3 text-center font-semibold text-white hover:bg-[#082C4B]";
const heading = "text-3xl font-extrabold text-[#0B3A63] md:text-4xl";
const container = "mx-auto max-w-7xl px-6 py-12 md:px-8 md:py-16";

export function Offer({ locale }: { locale: Locale }) {
  const c = internationalCopy[locale];
  return (
    <div className="space-y-5">
      <h3 className="text-xl font-bold text-[#0B3A63]">{c.includedTitle}</h3>
      <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-[#475569]">
        {c.included.map((i) => (
          <li key={i}>{i}</li>
        ))}
      </ul>
      <p className="text-sm leading-relaxed text-[#475569]">{c.reuse}</p>
      <p className="text-sm leading-relaxed text-[#475569]">{c.support}</p>
      <p className="text-sm leading-relaxed text-[#475569]">{c.notIncluded}</p>
      <Link className={linkClass} href={paths[locale].contact}>
        {c.nav.contact}
      </Link>
    </div>
  );
}
function Actions({ locale }: { locale: Locale }) {
  const c = internationalCopy[locale];
  return (
    <div className="mt-6 flex flex-col gap-3 sm:flex-row">
      <Link href={paths[locale].generate} className={buttonClass}>
        {c.generate}
      </Link>
      <a
        href={`/api/sample?lang=${locale}`}
        className="inline-flex min-h-[52px] items-center justify-center rounded-xl border border-[#0B3A63]/20 bg-white px-6 py-3 text-center font-semibold text-[#0B3A63]"
      >
        {c.sample}
      </a>
    </div>
  );
}
export function Home({ locale }: { locale: Locale }) {
  return <Homepage locale={locale} />;
}
export function Product({ locale }: { locale: Locale }) {
  const c = internationalCopy[locale];
  return (
    <section className={container}>
      <h1 className={heading}>{c.productTitle}</h1>
      <p className="mt-4 max-w-3xl text-lg leading-relaxed text-[#475569]">
        {c.productIntro}
      </p>
      <div className="mt-8 grid items-start gap-8 lg:grid-cols-2">
        <div className="rounded-[26px] border bg-[#F8FAFC] p-5">
          <Image
            src={`/attestation-example-${locale}.webp`}
            alt={c.sampleAlt}
            width={778}
            height={1100}
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="h-auto w-full"
          />
          <a
            className={`mt-4 inline-block ${linkClass}`}
            href={`/api/sample?lang=${locale}`}
          >
            {c.sample}
          </a>
        </div>
        <div className="rounded-[26px] border p-6">
          <Offer locale={locale} />
          <Actions locale={locale} />
        </div>
      </div>
      <TextSections sections={c.productSections} />
      <Links locale={locale} />
    </section>
  );
}
export function Pricing({ locale }: { locale: Locale }) {
  const c = internationalCopy[locale];
  return (
    <section className={container}>
      <h1 className={heading}>{c.pricingTitle}</h1>
      <p className="mt-4 max-w-3xl text-lg leading-relaxed text-[#475569]">
        {c.doubtText}
      </p>
      <div className="mt-8 grid gap-8 rounded-[30px] border bg-[#F8FAFC] p-6 md:p-8 lg:grid-cols-[1fr_2fr]">
        <div>
          <p className="text-5xl font-bold text-[#0B3A63]">89 €</p>
          <p className="mt-3 text-sm">{c.priceDetail}</p>
          <Actions locale={locale} />
        </div>
        <Offer locale={locale} />
      </div>
      <section
        id="packs"
        className="mt-12 scroll-mt-28 rounded-[30px] bg-[#F8FAFC] p-6 md:p-8"
      >
        <h2 className="text-2xl font-bold text-[#0B3A63]">{c.packsTitle}</h2>
        <p className="mt-4 max-w-3xl leading-relaxed text-[#475569]">
          {c.packsIntro}
        </p>
        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {[
            [5, 349],
            [10, 590],
            [50, 2450],
          ].map(([count, price]) => (
            <article key={count} className="rounded-[26px] border bg-white p-6">
              <h3 className="text-xl font-bold text-[#0B3A63]">
                {c.pack} {count}
              </h3>
              <p className="mt-4 text-3xl font-bold text-[#0B3A63]">
                {price.toLocaleString(numberLocales[locale])} €
              </p>
              <p className="mt-2 text-sm">
                {(price / count).toLocaleString(numberLocales[locale], {
                  minimumFractionDigits: 2,
                })}{" "}
                € {c.perDocument}
              </p>
              <a
                href={`/api/checkout-pack?pack=${count}&siteLocale=${locale}`}
                className={`mt-6 ${buttonClass}`}
              >
                {c.buyPack}
              </a>
            </article>
          ))}
        </div>
        <ol className="mt-8 list-decimal space-y-3 pl-5 text-[#475569]">
          {c.packSteps.map((i) => (
            <li key={i}>{i}</li>
          ))}
        </ol>
      </section>
      <Links locale={locale} />
    </section>
  );
}
export function Methodology({ locale }: { locale: Locale }) {
  const c = internationalCopy[locale];
  const f = formCopy[locale];
  return (
    <section className={container}>
      <div className="max-w-4xl">
        <h1 className={heading}>{c.methodTitle}</h1>
        <p className="mt-4 text-lg leading-relaxed text-[#475569]">
          {c.methodIntro}
        </p>
        {c.methodSections.map(([title, text], i) => (
          <section key={title} className="mt-8">
            <h2 className="text-xl font-bold text-[#0B3A63]">{title}</h2>
            <p className="mt-3 leading-relaxed text-[#475569]">{text}</p>
            {i === 1 && (
              <>
                <p className="mt-3 text-sm">{FACTOR_VERSION}</p>
                <div className="mt-4 overflow-x-auto rounded-xl border">
                  <table className="w-full text-left text-sm">
                    <caption className="sr-only">{c.coefficients}</caption>
                    <thead className="bg-[#F8FAFC]">
                      <tr>
                        <th className="p-3" scope="col">
                          {c.category}
                        </th>
                        <th className="p-3" scope="col">
                          {c.expenses}
                        </th>
                        <th className="p-3" scope="col">
                          kg CO₂e / €
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {CATEGORIES.map((item, index) => (
                        <tr key={item.key} className="border-t">
                          <th className="p-3" scope="row">
                            {f.categories[index]}
                          </th>
                          <td className="p-3">{f.hints[index]}</td>
                          <td className="p-3">
                            {EMISSION_FACTORS[item.key].toLocaleString(
                              numberLocales[locale],
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </>
            )}
          </section>
        ))}
        <Links locale={locale} />
      </div>
    </section>
  );
}
export function Compliance({ locale }: { locale: Locale }) {
  const c = internationalCopy[locale];
  return (
    <section className={container}>
      <h1 className={heading}>{c.complianceTitle}</h1>
      <p className="mt-4 max-w-4xl text-lg leading-relaxed text-[#475569]">
        {c.complianceIntro}
      </p>
      <TextSections sections={c.complianceSections} />
      <Links locale={locale} />
    </section>
  );
}
export function Contact({ locale }: { locale: Locale }) {
  const c = internationalCopy[locale];
  return (
    <section className={container}>
      <h1 className={heading}>{c.contactTitle}</h1>
      <p className="mt-4 max-w-3xl text-lg leading-relaxed text-[#475569]">
        {c.contactIntro}
      </p>
      <div className="mt-6 flex flex-wrap gap-5">
        <a className={linkClass} href="mailto:support@certif-scope.com">
          support@certif-scope.com
        </a>
        <a className={linkClass} href="mailto:contact@certif-scope.com">
          contact@certif-scope.com
        </a>
      </div>
      <TextSections sections={c.contactSections} />
      <Links locale={locale} />
    </section>
  );
}
export function Verify({ locale, token }: { locale: Locale; token?: string }) {
  const c = internationalCopy[locale];
  let data: Record<string, unknown> | null = null;
  if (token && token.length <= 12000) {
    try {
      const parsed = JSON.parse(
        Buffer.from(token, "base64url").toString("utf8"),
      );
      if (
        parsed &&
        typeof parsed === "object" &&
        !Array.isArray(parsed) &&
        typeof parsed.certificateId === "string"
      )
        data = parsed;
    } catch {}
  }
  return (
    <section className={container}>
      <div className="max-w-4xl">
        <h1 className={heading}>{c.verifyTitle}</h1>
        <p className="mt-4 text-lg leading-relaxed text-[#475569]">
          {c.verifyIntro}
        </p>
        <section
          id="verification-qr"
          className="mt-8 rounded-xl border bg-[#F8FAFC] p-6"
        >
          <h2 className="text-xl font-bold text-[#0B3A63]">
            {data
              ? c.verifyDetected
              : token
                ? c.verifyInvalid
                : c.verifyMissing}
          </h2>
          {data && (
            <dl className="mt-5 grid gap-3 sm:grid-cols-2">
              {[
                "certificateId",
                "issuer",
                "issuedAt",
                "validUntil",
                "methodVersion",
                "factorVersion",
              ].map((k, i) => (
                <div key={k} className="min-w-0 rounded-lg border bg-white p-4">
                  <dt className="text-sm text-gray-500">{c.verifyLabels[i]}</dt>
                  <dd className="mt-2 break-words font-semibold text-[#0B3A63]">
                    {typeof data![k] === "string" ? String(data![k]) : "—"}
                  </dd>
                </div>
              ))}
            </dl>
          )}
          <p className="mt-5 text-sm leading-relaxed text-[#475569]">
            {c.verifyWarning}
          </p>
        </section>
        <Links locale={locale} />
      </div>
    </section>
  );
}
function TextSections({
  sections,
}: {
  sections: readonly (readonly string[])[];
}) {
  return (
    <div className="mt-10 max-w-4xl space-y-8">
      {sections.map(([title, text]) => (
        <section key={title}>
          <h2 className="text-2xl font-bold text-[#0B3A63]">{title}</h2>
          <p className="mt-3 leading-relaxed text-[#475569]">{text}</p>
        </section>
      ))}
    </div>
  );
}
function Links({ locale }: { locale: Locale }) {
  const c = internationalCopy[locale];
  const p = paths[locale];
  return (
    <div className="mt-8 flex flex-wrap gap-5">
      <a className={linkClass} href={`/api/sample?lang=${locale}`}>
        {c.sample}
      </a>
      <Link className={linkClass} href={p.methodology}>
        {c.nav.methodology}
      </Link>
      <Link className={linkClass} href={p.contact}>
        {c.nav.contact}
      </Link>
      <Link className={buttonClass} href={p.generate}>
        {c.nav.generate}
      </Link>
    </div>
  );
}
