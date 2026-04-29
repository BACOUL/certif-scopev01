// PATH: src/components/fr/HeaderFR.tsx
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
  const dropdownPanelRef = useRef<HTMLDivElement | null>(null);

  const routes = {
    home: "/fr",
    pillarBilanCarbonePME: "/fr/bilan-carbone-pme",
    product: "/fr/product",
    methodology: "/fr/product/methodology",
    compliance: "/fr/product/compliance",
    privacy: "/fr/privacy", // ✅ CORRIGÉ
    verify: "/fr/verify",
    pricing: "/fr/pricing",
    generate: "/fr/generate",
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

      if (
        navRef.current &&
        !navRef.current.contains(target) &&
        burgerRef.current &&
        !burgerRef.current.contains(target) &&
        dropdownPanelRef.current &&
        !dropdownPanelRef.current.contains(target) &&
        dropdownButtonRef.current &&
        !dropdownButtonRef.current.contains(target)
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
        setDropdown(false);
        setOpen(false);
        dropdownButtonRef.current?.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [dropdown, open]);

  const isActive = (href: string) => pathname === href;

  const isAttestationActive =
    pathname === routes.product ||
    pathname === routes.methodology ||
    pathname === routes.compliance ||
    pathname === routes.privacy;

  const navLinkBase =
    "relative text-sm font-medium text-[#475569] transition-colors duration-300 hover:text-[#0B3A63]";
  const navLinkActive = "text-[#0B3A63]";

  const dropdownItemBase =
    "block rounded-lg px-3 py-2.5 text-sm font-medium text-[#475569] transition-all duration-300 hover:bg-[#F8FAFC] hover:text-[#0B3A63]";
  const dropdownItemActive = "bg-[#F8FAFC] text-[#0B3A63]";

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-[#0B3A63]/8 bg-white/92 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-3 md:px-6 md:py-4">
        <Link href={routes.home} onClick={closeAll}>
          <Image
            src="/logo.png"
            alt="Certif-Scope"
            width={180}
            height={50}
            priority
          />
        </Link>

        <button
          ref={burgerRef}
          onClick={() => {
            setOpen((prev) => !prev);
            setDropdown(false);
          }}
          className="lg:hidden"
        >
          ☰
        </button>

        {/* DESKTOP */}
        <nav className="hidden lg:flex items-center gap-6">
          <Link href={routes.home}>Accueil</Link>
          <Link href={routes.pillarBilanCarbonePME}>
            Bilan carbone PME
          </Link>

          <div className="relative">
            <button onClick={() => setDropdown((p) => !p)}>
              Attestation CO₂e
            </button>

            {dropdown && (
              <div className="absolute bg-white shadow rounded p-2">
                <Link href={routes.product}>Présentation</Link>
                <Link href={routes.methodology}>Méthodologie</Link>
                <Link href={routes.compliance}>
                  Cadre & conformité
                </Link>
                <Link href={routes.privacy}>Confidentialité</Link>
              </div>
            )}
          </div>

          <Link href={routes.verify}>Vérifier</Link>
          <Link href={routes.pricing}>Tarification</Link>
        </nav>

        <Link href={routes.generate} className="hidden lg:block">
          Générer
        </Link>
      </div>

      {/* MOBILE */}
      {open && (
        <div className="lg:hidden p-4">
          <Link href={routes.home}>Accueil</Link>
          <Link href={routes.pillarBilanCarbonePME}>
            Bilan carbone PME
          </Link>

          <button onClick={() => setDropdown((p) => !p)}>
            Attestation CO₂e
          </button>

          {dropdown && (
            <div className="ml-4">
              <Link href={routes.product}>Présentation</Link>
              <Link href={routes.methodology}>Méthodologie</Link>
              <Link href={routes.compliance}>
                Cadre & conformité
              </Link>
              <Link href={routes.privacy}>Confidentialité</Link>
            </div>
          )}

          <Link href={routes.verify}>Vérifier</Link>
          <Link href={routes.pricing}>Tarification</Link>
          <Link href={routes.generate}>Générer une attestation</Link>
        </div>
      )}
    </header>
  );
}
