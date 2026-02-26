"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

export default function HeaderFR() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const navRef = useRef<HTMLDivElement | null>(null);
  const burgerRef = useRef<HTMLButtonElement | null>(null);
  const dropdownButtonRef = useRef<HTMLButtonElement | null>(null);

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
    if (!open && !dropdown) return;

    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      const target = event.target as Node;
      if (
        navRef.current &&
        !navRef.current.contains(target) &&
        burgerRef.current &&
        !burgerRef.current.contains(target)
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
    if (!dropdown) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setDropdown(false);
        dropdownButtonRef.current?.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [dropdown]);

  const isActive = (href: string) => pathname === href;

  const linkBase =
    "font-medium text-gray-800 dark:text-gray-200 hover:text-[#15B097] transition-colors";
  const linkActive = "font-medium text-[#15B097]";

  const routes = {
    home: "/fr",
    pillarBilanCarbonePME: "/fr/bilan-carbone-pme",
    product: "/fr/product",
    methodology: "/fr/product/methodology",
    compliance: "/fr/product/compliance",
    verify: "/fr/verify",
    pricing: "/fr/pricing",
    partners: "/fr/partners",
    generate: "/fr/generate",
  };

  const isPillarActive = pathname === routes.pillarBilanCarbonePME;

  return (
    <header
      id="site-header"
      role="banner"
      className="
        fixed top-0 left-0 w-full z-50
        bg-white/95 dark:bg-gray-900/90
        backdrop-blur-md
        border-b border-gray-200 dark:border-gray-700
      "
    >
      <div className="w-full px-5 py-2 md:py-4 flex items-center justify-between">
        <Link href={routes.home} onClick={closeAll} aria-label="Accueil">
          <Image
            src="/logo.png"
            alt="Certif-Scope"
            width={180}
            height={50}
            priority
            className="h-auto w-[140px] sm:w-[150px] md:w-[180px]"
          />
        </Link>

        <button
          ref={burgerRef}
          onClick={() => setOpen((v) => !v)}
          aria-label="Ouvrir le menu"
          aria-expanded={open}
          aria-controls="main-navigation"
          className="lg:hidden w-8 h-8 flex flex-col justify-center items-center"
        >
          <span
            className={`h-[3px] w-7 bg-gray-900 dark:bg-gray-200 rounded transition-all ${
              open ? "rotate-45 translate-y-1" : ""
            }`}
          />
          <span
            className={`h-[3px] w-7 bg-gray-900 dark:bg-gray-200 rounded my-1 transition-all ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-[3px] w-7 bg-gray-900 dark:bg-gray-200 rounded transition-all ${
              open ? "-rotate-45 -translate-y-1" : ""
            }`}
          />
        </button>

        <nav
          ref={navRef}
          id="main-navigation"
          aria-label="Navigation principale"
          className={`
            absolute lg:static top-[60px] right-4
            bg-white dark:bg-gray-900
            border border-gray-200 dark:border-gray-700
            rounded-xl shadow-lg lg:shadow-none
            p-5 lg:p-0
            w-72 lg:w-auto
            transition-all
            ${open ? "block" : "hidden lg:block"}
          `}
        >
          <ul className="flex flex-col lg:flex-row gap-4 lg:gap-10">
            <li>
              <Link
                href={routes.home}
                onClick={closeAll}
                aria-current={isActive(routes.home) ? "page" : undefined}
                className={isActive(routes.home) ? linkActive : linkBase}
              >
                Accueil
              </Link>
            </li>

            <li>
              <Link
                href={routes.pillarBilanCarbonePME}
                onClick={closeAll}
                aria-current={isPillarActive ? "page" : undefined}
                className={isPillarActive ? linkActive : linkBase}
              >
                Bilan carbone PME
              </Link>
            </li>

            <li className="relative">
              <button
                ref={dropdownButtonRef}
                onClick={() => setDropdown((v) => !v)}
                aria-haspopup="true"
                aria-expanded={dropdown}
                className={`${linkBase} flex items-center gap-1`}
              >
                Attestation CO₂e
                <span
                  className={`transition-transform ${
                    dropdown ? "rotate-180" : ""
                  }`}
                >
                  ▼
                </span>
              </button>

              {dropdown && (
                <div
                  role="menu"
                  className="
                    absolute left-0 top-[55px] w-64 z-50
                    bg-white dark:bg-gray-900
                    border border-gray-200 dark:border-gray-700
                    rounded-lg shadow-lg p-3
                  "
                >
                  <Link
                    href={routes.product}
                    onClick={closeAll}
                    className="block py-2 text-sm text-gray-800 dark:text-gray-200 hover:text-[#15B097] transition-colors"
                  >
                    Présentation
                  </Link>

                  <Link
                    href={routes.methodology}
                    onClick={closeAll}
                    className="block py-2 text-sm text-gray-800 dark:text-gray-200 hover:text-[#15B097] transition-colors"
                  >
                    Méthodologie
                  </Link>

                  <Link
                    href={routes.compliance}
                    onClick={closeAll}
                    className="block py-2 text-sm text-gray-800 dark:text-gray-200 hover:text-[#15B097] transition-colors"
                  >
                    Cadre &amp; conformité
                  </Link>
                </div>
              )}
            </li>

            <li>
              <Link
                href={routes.verify}
                onClick={closeAll}
                aria-current={isActive(routes.verify) ? "page" : undefined}
                className={isActive(routes.verify) ? linkActive : linkBase}
              >
                Vérifier une attestation
              </Link>
            </li>

            <li>
              <Link
                href={routes.pricing}
                onClick={closeAll}
                aria-current={isActive(routes.pricing) ? "page" : undefined}
                className={isActive(routes.pricing) ? linkActive : linkBase}
              >
                Tarification
              </Link>
            </li>

            <li>
              <Link
                href={routes.partners}
                onClick={closeAll}
                aria-current={isActive(routes.partners) ? "page" : undefined}
                className={isActive(routes.partners) ? linkActive : linkBase}
              >
                Partenariats
              </Link>
            </li>

            <li>
              <Link
                href={routes.generate}
                onClick={closeAll}
                aria-current={isActive(routes.generate) ? "page" : undefined}
                className={isActive(routes.generate) ? linkActive : linkBase}
              >
                Générer une attestation
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
              }
