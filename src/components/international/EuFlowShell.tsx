import Image from "next/image";
import Link from "next/link";
import LanguageSwitcher from "./LanguageSwitcher";
import type { EuNonCoreLocale } from "@/lib/eu-flow";

export default function EuFlowShell({
  locale,
  children,
}: {
  locale: EuNonCoreLocale;
  children: React.ReactNode;
}) {
  return (
    <div lang={locale} className="min-h-screen bg-white text-[#1f2937]">
      <header className="sticky top-0 z-50 border-b border-[#0B3A63]/10 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-4 md:px-8">
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
      <main>{children}</main>
      <footer className="border-t bg-[#F8FAFC] px-6 py-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 text-sm text-[#64748B] sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} Certif-Scope</span>
          <Link className="font-semibold text-[#0B3A63]" href={`/${locale}/`}>
            Certif-Scope
          </Link>
        </div>
      </footer>
    </div>
  );
}
