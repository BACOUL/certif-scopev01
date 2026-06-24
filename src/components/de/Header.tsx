// PATH: src/components/de/Header.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

export default function HeaderDE() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const navDesktopRef = useRef<HTMLDivElement | null>(null);
  const navMobileRef = useRef<HTMLDivElement | null>(null);
  const burgerRef = useRef<HTMLButtonElement | null>(null);
  const dropdownButtonRef = useRef<HTMLButtonElement | null>(null);
  const dropdownPanelRef = useRef<HTMLDivElement | null>(null);

  const routes = {
    home: "/de/",
    pillarBilanCarbonePME: "/de/co2-bilanz-kmu/",
    product: "/de/produkt/",
    methodology: "/de/methodik/",
    compliance: "/de/grenzen-und-compliance/",
    privacy: "/de/datenschutz/",
    verify: "/de/pruefen/",
    pricing: "/de/preise/",
    generate: "/de/erstellen/",
  };

  const closeAll = () => {
    setDropdown(false);
    setOpen(false);
  };

  useEffect(() => {
    const handler = () => closeAll();
    window.addEventListener("close-mobile-menu", handler);
    return () => window.removeEventListener("close-mobile-menu", handler);
  }, []);

  useEffect(() => {
    setOpen(false);
    setDropdown(false);
  }, [pathname]);

  useEffect(() => {
    if (!open && !dropdown) return;

    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      const target = event.target as Node;

      const clickedInsideDesktopNav =
        navDesktopRef.current?.contains(target) ?? false;

      const clickedInsideMobileNav =
        navMobileRef.current?.contains(target) ?? false;

      const clickedInsideBurger =
        burgerRef.current?.contains(target) ?? false;

      const clickedInsideDropdownButton =
        dropdownButtonRef.current?.contains(target) ?? false;

      const clickedInsideDropdownPanel =
        dropdownPanelRef.current?.contains(target) ?? false;

      if (
        !clickedInsideDesktopNav &&
        !clickedInsideMobileNav &&
        !clickedInsideBurger &&
        !clickedInsideDropdownButton &&
        !clickedInsideDropdownPanel
      ) {
        closeAll();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [open, dropdown]);

  useEffect(() => {
    if (!dropdown && !open) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeAll();
        dropdownButtonRef.current?.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [dropdown, open]);

  const normalizePath = (value: string) => {
    if (value === "/") return value;
    return value.endsWith("/") ? value.slice(0, -1) : value;
  };

  const isActive = (href: string) => normalizePath(pathname) === normalizePath(href);

  const isAttestationActive =
    isActive(routes.product) ||
    isActive(routes.methodology) ||
    isActive(routes.compliance) ||
    isActive(routes.privacy);

  const navLinkBase =
    "relative text-sm font-medium text-[#475569] transition-colors duration-300 hover:text-[#0B3A63]";
  const navLinkActive = "text-[#0B3A63]";

  const dropdownItemBase =
    "block rounded-lg px-3 py-2.5 text-sm font-medium text-[#475569] transition-all duration-300 hover:bg-[#F8FAFC] hover:text-[#0B3A63]";
  const dropdownItemActive = "bg-[#F8FAFC] text-[#0B3A63]";

  const mobileLinkBase =
    "rounded-xl px-4 py-3 text-sm font-medium transition-colors duration-300";
  const mobileLinkInactive =
    "text-[#475569] hover:bg-[#F8FAFC] hover:text-[#0B3A63]";
  const mobileLinkActive = "bg-[#F8FAFC] text-[#0B3A63]";

  return (
    <header
      id="top"
      role="banner"
      className="fixed left-0 top-0 z-[1000] w-full border-b border-[#0B3A63]/8 bg-white/92 backdrop-blur-md"
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-3 md:px-6 md:py-4">
        <Link
          href={routes.home}
          onClick={closeAll}
          aria-label="Certif-Scope Deutschland"
          className="shrink-0"
        >
          <Image
            src="/logo.png"
            alt="Certif-Scope"
            width={180}
            height={50}
            priority
            className="h-auto w-[142px] sm:w-[152px] md:w-[180px]"
          />
        </Link>

        <button
          ref={burgerRef}
          type="button"
          onClick={() => {
            setOpen((prev) => !prev);
            setDropdown(false);
          }}
          aria-label={open ? "Menü schließen" : "Menü öffnen"}
          aria-expanded={open}
          aria-controls="main-navigation-mobile-de"
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#0B3A63]/10 bg-white text-[#0B3A63] shadow-sm transition-all duration-300 hover:bg-[#F8FAFC] lg:hidden"
        >
          <span className="relative flex h-4 w-5 flex-col items-center justify-between">
            <span
              className={`block h-[2px] w-5 rounded-full bg-[#0B3A63] transition-all duration-300 ${
                open ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-[2px] w-5 rounded-full bg-[#0B3A63] transition-all duration-300 ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-[2px] w-5 rounded-full bg-[#0B3A63] transition-all duration-300 ${
                open ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>

        <div className="hidden items-center gap-4 lg:flex">
          <nav
            ref={navDesktopRef}
            id="main-navigation-desktop-de"
            aria-label="Hauptnavigation"
            className="flex items-center gap-7"
          >
            <Link
              href={routes.home}
              onClick={closeAll}
              aria-current={isActive(routes.home) ? "page" : undefined}
              className={`${navLinkBase} ${
                isActive(routes.home) ? navLinkActive : ""
              }`}
            >
              Startseite
            </Link>

            <Link
              href={routes.pillarBilanCarbonePME}
              onClick={closeAll}
              aria-current={
                isActive(routes.pillarBilanCarbonePME) ? "page" : undefined
              }
              className={`${navLinkBase} ${
                isActive(routes.pillarBilanCarbonePME) ? navLinkActive : ""
              }`}
            >
              CO2-Bilanz KMU
            </Link>

            <div className="relative">
              <button
                ref={dropdownButtonRef}
                type="button"
                onClick={() => setDropdown((prev) => !prev)}
                aria-haspopup="true"
                aria-expanded={dropdown}
                aria-controls="attestation-dropdown-desktop-de"
                className={`${navLinkBase} ${
                  isAttestationActive ? navLinkActive : ""
                } flex items-center gap-2`}
              >
                CO2e-Bescheinigung
                <span
                  className={`text-[10px] transition-transform duration-300 ${
                    dropdown ? "rotate-180" : ""
                  }`}
                >
                  ▼
                </span>
              </button>

              {dropdown && (
                <div
                  ref={dropdownPanelRef}
                  id="attestation-dropdown-desktop-de"
                  role="menu"
                  className="absolute left-0 top-[calc(100%+14px)] z-[1100] w-72 overflow-hidden rounded-2xl border border-[#0B3A63]/10 bg-white p-3 shadow-[0_18px_40px_rgba(11,58,99,0.12)]"
                >
                  <div className="mb-2 rounded-xl border border-[#1FB6C1]/14 bg-[linear-gradient(180deg,rgba(31,182,193,0.08)_0%,rgba(31,182,193,0.03)_100%)] px-3 py-3">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#64748B]">
                      Produkt
                    </p>
                    <p className="mt-1 text-sm font-semibold text-[#0B3A63]">
                      Dokument, Methode und Grenzen verstehen
                    </p>
                  </div>

                  <Link
                    href={routes.product}
                    onClick={closeAll}
                    className={`${dropdownItemBase} ${
                      isActive(routes.product) ? dropdownItemActive : ""
                    }`}
                  >
                    Überblick
                  </Link>

                  <Link
                    href={routes.methodology}
                    onClick={closeAll}
                    className={`${dropdownItemBase} ${
                      isActive(routes.methodology) ? dropdownItemActive : ""
                    }`}
                  >
                    Methodik
                  </Link>

                  <Link
                    href={routes.compliance}
                    onClick={closeAll}
                    className={`${dropdownItemBase} ${
                      isActive(routes.compliance) ? dropdownItemActive : ""
                    }`}
                  >
                    Grenzen &amp; Compliance
                  </Link>

                  <Link
                    href={routes.privacy}
                    onClick={closeAll}
                    className={`${dropdownItemBase} ${
                      isActive(routes.privacy) ? dropdownItemActive : ""
                    }`}
                  >
                    Datenschutz
                  </Link>
                </div>
              )}
            </div>

            <Link
              href={routes.verify}
              onClick={closeAll}
              aria-current={isActive(routes.verify) ? "page" : undefined}
              className={`${navLinkBase} ${
                isActive(routes.verify) ? navLinkActive : ""
              }`}
            >
              Prüfen
            </Link>

            <Link
              href={routes.pricing}
              onClick={closeAll}
              aria-current={isActive(routes.pricing) ? "page" : undefined}
              className={`${navLinkBase} ${
                isActive(routes.pricing) ? navLinkActive : ""
              }`}
            >
              Preise
            </Link>
          </nav>

          <Link
            href={routes.generate}
            onClick={closeAll}
            className="inline-flex min-h-[44px] items-center justify-center rounded-xl bg-[#1FB6C1] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_12px_28px_rgba(31,182,193,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#19AAB4]"
          >
            Erstellen
          </Link>
        </div>
      </div>

      <div
        ref={navMobileRef}
        id="main-navigation-mobile-de"
        aria-label="Mobile Hauptnavigation"
        className={`px-4 pb-4 lg:hidden ${open ? "block" : "hidden"}`}
      >
        <div className="overflow-hidden rounded-[24px] border border-[#0B3A63]/10 bg-white p-4 shadow-[0_18px_40px_rgba(11,58,99,0.12)]">
          <div className="flex flex-col gap-2">
            <Link
              href={routes.home}
              onClick={closeAll}
              aria-current={isActive(routes.home) ? "page" : undefined}
              className={`${mobileLinkBase} ${
                isActive(routes.home) ? mobileLinkActive : mobileLinkInactive
              }`}
            >
              Startseite
            </Link>

            <Link
              href={routes.pillarBilanCarbonePME}
              onClick={closeAll}
              aria-current={
                isActive(routes.pillarBilanCarbonePME) ? "page" : undefined
              }
              className={`${mobileLinkBase} ${
                isActive(routes.pillarBilanCarbonePME)
                  ? mobileLinkActive
                  : mobileLinkInactive
              }`}
            >
              CO2-Bilanz KMU
            </Link>

            <button
              type="button"
              onClick={() => setDropdown((prev) => !prev)}
              aria-haspopup="true"
              aria-expanded={dropdown}
              aria-controls="attestation-dropdown-mobile-de"
              className={`flex items-center justify-between rounded-xl px-4 py-3 text-left text-sm font-medium transition-colors duration-300 ${
                isAttestationActive || dropdown
                  ? "bg-[#F8FAFC] text-[#0B3A63]"
                  : "text-[#475569] hover:bg-[#F8FAFC] hover:text-[#0B3A63]"
              }`}
            >
              <span>CO2e-Bescheinigung</span>
              <span
                className={`text-[10px] transition-transform duration-300 ${
                  dropdown ? "rotate-180" : ""
                }`}
              >
                ▼
              </span>
            </button>

            {dropdown && (
              <div
                id="attestation-dropdown-mobile-de"
                className="ml-2 rounded-2xl border border-[#0B3A63]/10 bg-[#F8FAFC] p-2"
              >
                <Link
                  href={routes.product}
                  onClick={closeAll}
                  className={`block rounded-lg px-3 py-2.5 text-sm font-medium transition-colors duration-300 ${
                    isActive(routes.product)
                      ? "bg-white text-[#0B3A63]"
                      : "text-[#475569] hover:bg-white hover:text-[#0B3A63]"
                  }`}
                >
                  Überblick
                </Link>

                <Link
                  href={routes.methodology}
                  onClick={closeAll}
                  className={`block rounded-lg px-3 py-2.5 text-sm font-medium transition-colors duration-300 ${
                    isActive(routes.methodology)
                      ? "bg-white text-[#0B3A63]"
                      : "text-[#475569] hover:bg-white hover:text-[#0B3A63]"
                  }`}
                >
                  Methodik
                </Link>

                <Link
                  href={routes.compliance}
                  onClick={closeAll}
                  className={`block rounded-lg px-3 py-2.5 text-sm font-medium transition-colors duration-300 ${
                    isActive(routes.compliance)
                      ? "bg-white text-[#0B3A63]"
                      : "text-[#475569] hover:bg-white hover:text-[#0B3A63]"
                  }`}
                >
                  Grenzen &amp; Compliance
                </Link>

                <Link
                  href={routes.privacy}
                  onClick={closeAll}
                  className={`block rounded-lg px-3 py-2.5 text-sm font-medium transition-colors duration-300 ${
                    isActive(routes.privacy)
                      ? "bg-white text-[#0B3A63]"
                      : "text-[#475569] hover:bg-white hover:text-[#0B3A63]"
                  }`}
                >
                  Datenschutz
                </Link>
              </div>
            )}

            <Link
              href={routes.verify}
              onClick={closeAll}
              aria-current={isActive(routes.verify) ? "page" : undefined}
              className={`${mobileLinkBase} ${
                isActive(routes.verify) ? mobileLinkActive : mobileLinkInactive
              }`}
            >
              Prüfen
            </Link>

            <Link
              href={routes.pricing}
              onClick={closeAll}
              aria-current={isActive(routes.pricing) ? "page" : undefined}
              className={`${mobileLinkBase} ${
                isActive(routes.pricing) ? mobileLinkActive : mobileLinkInactive
              }`}
            >
              Preise
            </Link>
          </div>

          <div className="mt-4 border-t border-[#0B3A63]/8 pt-4">
            <Link
              href={routes.generate}
              onClick={closeAll}
              className="inline-flex min-h-[48px] w-full items-center justify-center rounded-xl bg-[#1FB6C1] px-5 py-3 text-sm font-semibold text-white shadow-[0_12px_28px_rgba(31,182,193,0.22)] transition-all duration-300 hover:bg-[#19AAB4]"
            >
              CO2e-Bescheinigung erstellen
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
