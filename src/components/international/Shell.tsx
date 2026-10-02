"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { internationalCopy } from "@/lib/international-copy";
import { paths, type PageKey } from "@/lib/site-locales";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Shell({
  locale,
  children,
}: {
  locale: "en" | "de";
  children: React.ReactNode;
}) {
  const c = internationalCopy[locale];
  const p = paths[locale];
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  useEffect(() => {
    setOpen(false);
    document.documentElement.lang = locale;
  }, [pathname, locale]);
  const links: PageKey[] = [
    "home",
    "product",
    "methodology",
    "verify",
    "pricing",
  ];
  return (
    <div lang={locale} className="bg-white text-gray-800">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-[#0B3A63]/10 bg-white shadow-sm">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-4 md:px-8">
          <Link href={p.home} aria-label={`Certif-Scope ${c.nav.home}`}>
            <Image
              src="/logo.png"
              alt="Certif-Scope"
              width={170}
              height={68}
              className="h-auto w-[130px] sm:w-[160px]"
              priority
            />
          </Link>
          <nav
            className="hidden items-center gap-5 text-sm font-semibold text-[#0B3A63] xl:flex"
            aria-label={c.nav.home}
          >
            {links.map((k) => (
              <Link
                key={k}
                href={p[k]}
                aria-current={
                  pathname.replace(/\/$/, "") === p[k].replace(/\/$/, "")
                    ? "page"
                    : undefined
                }
              >
                {c.nav[k]}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <LanguageSwitcher locale={locale} />
            <Link
              href={p.generate}
              className="hidden rounded-xl bg-[#0B3A63] px-4 py-3 text-sm font-semibold text-white sm:inline-flex"
            >
              {c.nav.generate}
            </Link>
            <button
              type="button"
              aria-expanded={open}
              aria-controls="international-menu"
              aria-label={
                locale === "en"
                  ? "Open navigation menu"
                  : "Navigationsmenü öffnen"
              }
              className="rounded-xl border px-3 py-2 text-xl text-[#0B3A63] xl:hidden"
              onClick={() => setOpen((v) => !v)}
            >
              {open ? "×" : "☰"}
            </button>
          </div>
          {open && (
            <nav
              id="international-menu"
              className="flex w-full flex-col gap-1 border-t pt-3 xl:hidden"
            >
              {[...links, "compliance", "contact", "generate"].map((k) => (
                <Link
                  key={k}
                  href={p[k as PageKey]}
                  className="rounded-lg px-3 py-3 font-semibold text-[#0B3A63]"
                >
                  {c.nav[k as PageKey]}
                </Link>
              ))}
            </nav>
          )}
        </div>
      </header>
      <main id="main-content" className="pt-[100px] sm:pt-[105px]">
        {children}
      </main>
      <footer className="border-t bg-[#F8FAFC] px-6 py-12">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-xl font-bold text-[#0B3A63]">Certif-Scope</h2>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-[#475569]">
            {c.limits}
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <nav className="flex flex-col gap-3">
              {(
                [
                  "product",
                  "pricing",
                  "generate",
                  "methodology",
                  "compliance",
                  "verify",
                ] as PageKey[]
              ).map((k) => (
                <Link
                  className="text-sm font-semibold text-[#0B3A63]"
                  key={k}
                  href={p[k]}
                >
                  {c.nav[k]}
                </Link>
              ))}
            </nav>
            <nav className="flex flex-col gap-3">
              {(
                [
                  "contact",
                  "legal",
                  "privacy",
                  "terms",
                  "cookies",
                  "data",
                ] as PageKey[]
              ).map((k) => (
                <Link className="text-sm text-[#0B3A63]" key={k} href={p[k]}>
                  {c.nav[k]}
                </Link>
              ))}
            </nav>
            <div>
              <LanguageSwitcher locale={locale} />
              <p className="mt-4 text-sm text-[#475569]">
                © {new Date().getFullYear()} Certif-Scope
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
