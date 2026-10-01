// PATH: src/components/fr/HeaderFR.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { FR_HOME_NAV, type HomeNavigation } from "@/lib/home-navigation";
import type { EuHomeLocale } from "@/lib/eu-home-locales";
import LanguageSwitcher from "@/components/international/LanguageSwitcher";

export default function HeaderFR({
  locale = "fr",
  navigation = FR_HOME_NAV,
}: {
  locale?: EuHomeLocale;
  navigation?: HomeNavigation;
}) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const navDesktopRef = useRef<HTMLDivElement | null>(null);
  const navMobileRef = useRef<HTMLDivElement | null>(null);
  const burgerRef = useRef<HTMLButtonElement | null>(null);
  const dropdownButtonRef = useRef<HTMLButtonElement | null>(null);
  const dropdownPanelRef = useRef<HTMLDivElement | null>(null);

  const { routes, labels } = navigation;

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

      const clickedInsideBurger = burgerRef.current?.contains(target) ?? false;

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

  const isActive = (href: string) =>
    normalizePath(pathname) === normalizePath(href);

  const isAttestationActive =
    isActive(routes.product) ||
    isActive(routes.methodology) ||
    isActive(routes.compliance) ||
    isActive(routes.privacy);

  const navLinkBase =
    "relative max-w-[130px] text-center text-sm font-medium text-[#475569] transition-colors duration-300 hover:text-[#0B3A63]";
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
      className="border-[#0B3A63]/8 bg-white/92 fixed left-0 top-0 z-[1000] w-full border-b backdrop-blur-md"
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-3 md:px-6 md:py-4">
        <Link
          href={routes.home}
          onClick={closeAll}
          aria-label={`Certif-Scope ${labels.home}`}
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

        <LanguageSwitcher locale={locale} />

        <button
          ref={burgerRef}
          type="button"
          onClick={() => {
            setOpen((prev) => !prev);
            setDropdown(false);
          }}
          aria-label={labels.menu}
          aria-expanded={open}
          aria-controls="main-navigation-mobile"
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#0B3A63]/10 bg-white text-[#0B3A63] shadow-sm transition-all duration-300 hover:bg-[#F8FAFC] xl:hidden"
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

        <div className="hidden items-center gap-4 xl:flex">
          <nav
            ref={navDesktopRef}
            id="main-navigation-desktop"
            aria-label={labels.menu}
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
              {labels.home}
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
              {labels.guide}
            </Link>

            <div className="relative">
              <button
                ref={dropdownButtonRef}
                type="button"
                onClick={() => setDropdown((prev) => !prev)}
                aria-haspopup="true"
                aria-expanded={dropdown}
                aria-controls="attestation-dropdown-desktop"
                className={`${navLinkBase} ${
                  isAttestationActive ? navLinkActive : ""
                } flex max-w-[150px] items-center gap-2`}
              >
                {labels.product}
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
                  id="attestation-dropdown-desktop"
                  role="menu"
                  className="absolute left-0 top-[calc(100%+14px)] z-[1100] w-72 overflow-hidden rounded-2xl border border-[#0B3A63]/10 bg-white p-3 shadow-[0_18px_40px_rgba(11,58,99,0.12)]"
                >
                  <div className="border-[#1FB6C1]/14 mb-2 rounded-xl border bg-[linear-gradient(180deg,rgba(31,182,193,0.08)_0%,rgba(31,182,193,0.03)_100%)] px-3 py-3">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#64748B]">
                      {labels.product}
                    </p>
                    <p className="mt-1 text-sm font-semibold text-[#0B3A63]">
                      {labels.presentation}
                    </p>
                  </div>

                  <Link
                    href={routes.product}
                    onClick={closeAll}
                    className={`${dropdownItemBase} ${
                      isActive(routes.product) ? dropdownItemActive : ""
                    }`}
                  >
                    {labels.presentation}
                  </Link>

                  <Link
                    href={routes.methodology}
                    onClick={closeAll}
                    className={`${dropdownItemBase} ${
                      isActive(routes.methodology) ? dropdownItemActive : ""
                    }`}
                  >
                    {labels.methodology}
                  </Link>

                  <Link
                    href={routes.compliance}
                    onClick={closeAll}
                    className={`${dropdownItemBase} ${
                      isActive(routes.compliance) ? dropdownItemActive : ""
                    }`}
                  >
                    {labels.compliance}
                  </Link>

                  <Link
                    href={routes.privacy}
                    onClick={closeAll}
                    className={`${dropdownItemBase} ${
                      isActive(routes.privacy) ? dropdownItemActive : ""
                    }`}
                  >
                    {labels.privacy}
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
              {labels.verify}
            </Link>

            <Link
              href={routes.pricing}
              onClick={closeAll}
              aria-current={isActive(routes.pricing) ? "page" : undefined}
              className={`${navLinkBase} ${
                isActive(routes.pricing) ? navLinkActive : ""
              }`}
            >
              {labels.pricing}
            </Link>
          </nav>

          <Link
            href={routes.generate}
            onClick={closeAll}
            className="inline-flex min-h-[44px] items-center justify-center rounded-xl bg-[#0B3A63] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_12px_28px_rgba(31,182,193,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#082C4B]"
          >
            {labels.generate}
          </Link>
        </div>
      </div>

      <div
        ref={navMobileRef}
        id="main-navigation-mobile"
        aria-label={labels.menu}
        className={`px-4 pb-4 xl:hidden ${open ? "block" : "hidden"}`}
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
              {labels.home}
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
              {labels.guide}
            </Link>

            <button
              type="button"
              onClick={() => setDropdown((prev) => !prev)}
              aria-haspopup="true"
              aria-expanded={dropdown}
              aria-controls="attestation-dropdown-mobile"
              className={`flex items-center justify-between rounded-xl px-4 py-3 text-left text-sm font-medium transition-colors duration-300 ${
                isAttestationActive || dropdown
                  ? "bg-[#F8FAFC] text-[#0B3A63]"
                  : "text-[#475569] hover:bg-[#F8FAFC] hover:text-[#0B3A63]"
              }`}
            >
              <span>{labels.product}</span>
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
                id="attestation-dropdown-mobile"
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
                  {labels.presentation}
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
                  {labels.methodology}
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
                  {labels.compliance}
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
                  {labels.privacy}
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
              {labels.verify}
            </Link>

            <Link
              href={routes.pricing}
              onClick={closeAll}
              aria-current={isActive(routes.pricing) ? "page" : undefined}
              className={`${mobileLinkBase} ${
                isActive(routes.pricing) ? mobileLinkActive : mobileLinkInactive
              }`}
            >
              {labels.pricing}
            </Link>
          </div>

          <div className="border-[#0B3A63]/8 mt-4 border-t pt-4">
            <Link
              href={routes.generate}
              onClick={closeAll}
              className="inline-flex min-h-[48px] w-full items-center justify-center rounded-xl bg-[#0B3A63] px-5 py-3 text-sm font-semibold text-white shadow-[0_12px_28px_rgba(31,182,193,0.22)] transition-all duration-300 hover:bg-[#082C4B]"
            >
              {labels.generate}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
