"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const closeAll = () => {
    setOpen(false);
    setDropdown(false);
  };

  return (
    <header
      itemScope
      itemType="https://schema.org/WPHeader"
      className="fixed top-0 w-full z-50 bg-white/95 dark:bg-gray-900/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-700"
    >
      <div className="max-w-7xl mx-auto w-full px-4 py-3 flex items-center justify-between">

        {/* LOGO */}
        <Link href="/" onClick={closeAll} aria-label="Home">
          <Image
            src="/logo.png"
            alt="Certif-Scope logo"
            width={180}
            height={60}
            className="h-auto"
          />
        </Link>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
          className="lg:hidden w-10 h-10 flex flex-col justify-center items-center"
        >
          <span className={`h-[3px] w-7 bg-gray-900 dark:bg-gray-200 rounded transition-all ${open ? "rotate-45 translate-y-1" : ""}`} />
          <span className={`h-[3px] w-7 bg-gray-900 dark:bg-gray-200 rounded my-1 transition-all ${open ? "opacity-0" : "opacity-100"}`} />
          <span className={`h-[3px] w-7 bg-gray-900 dark:bg-gray-200 rounded transition-all ${open ? "-rotate-45 -translate-y-1" : ""}`} />
        </button>

        {/* NAVIGATION */}
        <nav
          className={`
            absolute lg:static top-full right-4 lg:right-0 w-[260px] lg:w-auto
            bg-white dark:bg-gray-900 rounded-xl lg:rounded-none shadow-lg lg:shadow-none
            border border-gray-200 dark:border-gray-700 p-5 lg:p-0 transition-all
            ${open ? "opacity-100 visible" : "opacity-0 invisible lg:opacity-100 lg:visible"}
          `}
        >
          <ul className="flex flex-col lg:flex-row gap-4 lg:gap-8">

            <li>
              <Link href="/" onClick={closeAll}
                className={`${pathname === "/" ? "text-[#1FB6C1]" : "text-gray-800 dark:text-gray-200"}`}>
                Home
              </Link>
            </li>

            <li className="relative">
              <button
                onClick={() => setDropdown(!dropdown)}
                className="flex items-center gap-1 font-medium text-gray-800 dark:text-gray-200"
              >
                CO₂e Attestation
                <span className={`${dropdown ? "rotate-180" : ""} transition-transform`}>▼</span>
              </button>

              <div
                className={`${dropdown ? "block" : "hidden"} absolute lg:static mt-2 w-56 bg-white dark:bg-gray-900 rounded-lg shadow-lg border p-3`}
              >
                <Link href="/product" onClick={closeAll} className="block py-2 text-sm hover:text-[#1FB6C1]">Overview</Link>

                <Link href="/product/methodology" onClick={closeAll} className="block py-2 text-sm hover:text-[#1FB6C1]">Methodology</Link>

                <Link href="/product/methodology/compliance" onClick={closeAll} className="block py-2 text-sm hover:text-[#1FB6C1]">Compliance</Link>
              </div>
            </li>

            <li>
              <Link href="/pricing" onClick={closeAll}
                className={`${pathname === "/pricing" ? "text-[#1FB6C1]" : "text-gray-800 dark:text-gray-200"}`}>
                Pricing
              </Link>
            </li>

            <li>
              <Link href="/partners" onClick={closeAll}
                className={`${pathname === "/partners" ? "text-[#1FB6C1]" : "text-gray-800 dark:text-gray-200"}`}>
                Partnerships
              </Link>
            </li>

            <li>
              <Link href="/verify" onClick={closeAll}
                className={`${pathname === "/verify" ? "text-[#1FB6C1]" : "text-gray-800 dark:text-gray-200"}`}>
                Verify Attestation
              </Link>
            </li>

          </ul>
        </nav>
      </div>
    </header>
  );
}
