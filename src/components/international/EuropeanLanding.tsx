import Image from "next/image";
import Link from "next/link";
import LanguageSwitcher from "./LanguageSwitcher";
import {
  EU_HOME_COPY,
  EU_LOCALE_NAMES,
  type EuHomeLocale,
} from "@/lib/eu-home-locales";

const fullProductLocales = ["fr", "en", "de"] as const;

type LandingLocale = Exclude<EuHomeLocale, "fr" | "en" | "de">;

export default function EuropeanLanding({ locale }: { locale: LandingLocale }) {
  const c = EU_HOME_COPY[locale];

  return (
    <div lang={locale} className="min-h-screen bg-white text-[#1f2937]">
      <header className="sticky top-0 z-50 border-b border-[#0B3A63]/10 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-4 md:px-8">
          <Link href={`/${locale}/`} aria-label="Certif-Scope">
            <Image
              src="/logo.png"
              alt="Certif-Scope"
              width={170}
              height={68}
              priority
              className="h-auto w-[145px] sm:w-[165px]"
            />
          </Link>
          <LanguageSwitcher locale={locale} />
        </div>
      </header>

      <main>
        <section className="bg-[#F8FAFC]">
          <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-14 md:px-8 md:py-20 lg:grid-cols-[1fr_0.9fr]">
            <div>
              <p className="inline-flex rounded-lg border border-[#0B3A63]/10 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#0B3A63]">
                {c.tagline}
              </p>
              <h1 className="mt-6 text-4xl font-extrabold leading-tight text-[#0B3A63] md:text-5xl">
                {c.hero}
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[#475569]">
                {c.intro}
              </p>
              <div className="mt-7 rounded-2xl border border-[#1FB6C1]/20 bg-white p-5">
                <p className="text-sm font-semibold text-[#0B3A63]">
                  PDF · Français · English · Deutsch
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                  {fullProductLocales.map((l) => (
                    <Link
                      key={l}
                      href={`/${l}/`}
                      hrefLang={l}
                      className="rounded-xl bg-[#0B3A63] px-4 py-3 text-sm font-semibold text-white hover:bg-[#082C4B]"
                    >
                      {EU_LOCALE_NAMES[l]}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <Image
              src="/hero-attestation.webp"
              alt="Certif-Scope CO₂e attestation preview"
              width={900}
              height={600}
              className="mx-auto h-auto w-full max-w-xl rounded-2xl border border-slate-100 shadow-lg"
            />
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-14 md:px-8 md:py-16">
          <h2 className="text-3xl font-extrabold text-[#0B3A63]">{c.fitTitle}</h2>
          <p className="mt-5 max-w-4xl text-lg leading-relaxed text-[#475569]">{c.fitText}</p>
        </section>

        <section className="border-y border-[#0B3A63]/10 bg-[#F8FAFC]">
          <div className="mx-auto max-w-7xl px-6 py-14 md:px-8 md:py-16">
            <h2 className="text-3xl font-extrabold text-[#0B3A63]">{c.contentsTitle}</h2>
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {c.contents.map((item, index) => (
                <article key={item} className="rounded-2xl border border-[#0B3A63]/10 bg-white p-5">
                  <p className="text-xs font-bold text-[#1FB6C1]">0{index + 1}</p>
                  <p className="mt-3 font-semibold leading-relaxed text-[#0B3A63]">{item}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-14 md:px-8 md:py-16">
          <h2 className="text-3xl font-extrabold text-[#0B3A63]">{c.stepsTitle}</h2>
          <ol className="mt-8 grid gap-6 md:grid-cols-3">
            {c.steps.map((step, index) => (
              <li key={step} className="rounded-2xl border border-[#0B3A63]/10 p-6">
                <p className="text-sm font-bold text-[#1FB6C1]">0{index + 1}</p>
                <p className="mt-3 leading-relaxed text-[#475569]">{step}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="bg-[#0B3A63] text-white">
          <div className="mx-auto max-w-7xl px-6 py-12 md:px-8">
            <h2 className="text-2xl font-bold">{c.limitTitle}</h2>
            <p className="mt-4 max-w-4xl leading-relaxed text-white/85">{c.limitText}</p>
          </div>
        </section>
      </main>

      <footer className="border-t bg-white px-6 py-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div>
            <strong className="text-[#0B3A63]">Certif-Scope</strong>
            <p className="mt-1 text-sm text-[#64748B]">© {new Date().getFullYear()} Certif-Scope</p>
          </div>
          <LanguageSwitcher locale={locale} />
        </div>
      </footer>
    </div>
  );
}
