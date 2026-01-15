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
      className="fixed top-0 left-0 w-full z-50 bg-white dark:bg-gray-900 shadow-sm
                 h-[72px] flex items-center overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full px-4 flex items-center justify-between h-[72px]">

        {/* LOGO */}
        <Link href="/" onClick={closeAll} aria-label="Home" className="flex items-center h-[72px]">
          <Image
            src="/logo.png"
            alt="Certif-Scope"
            width={160}
            height={50}
            className="max-h-[48px] w-auto object-contain"
            priority
          />
        </Link>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden flex flex-col justify-center items-center w-10 h-10"
          aria-label="Toggle menu"
        >
          <span className={`h-[3px] w-7 bg-gray-900 dark:bg-gray-200 rounded transition-all ${open ? "rotate-45 translate-y-1" : ""}`} />
          <span className={`h-[3px] w-7 bg-gray-900 dark:bg-gray-200 rounded my-1 transition-all ${open ? "opacity-0" : "opacity-100"}`} />
          <span className={`h-[3px] w-7 bg-gray-900 dark:bg-gray-200 rounded transition-all ${open ? "-rotate-45 -translate-y-1" : ""}`} />
        </button>

        {/* MENU */}
        <nav
          className={`absolute lg:static top-[72px] right-4 lg:right-auto w-[260px] lg:w-auto
            bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700
            rounded-xl p-5 lg:p-0 shadow-lg lg:shadow-none
            transition-all duration-200
            ${open ? "opacity-100 visible" : "opacity-0 invisible lg:opacity-100 lg:visible"}`}
        >
          <ul className="flex flex-col lg:flex-row gap-4 lg:gap-8">

            <li>
              <Link
                href="/"
                onClick={closeAll}
                className={`font-medium ${pathname === "/" ? "text-[#1FB6C1]" : "text-gray-800 dark:text-gray-200"}`}
              >
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
                className={`${dropdown ? "block" : "hidden"} absolute left-0 w-56 mt-2
                  bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700
                  rounded-lg shadow-lg p-3`}
              >
                <Link href="/product" onClick={closeAll} className="block py-2 text-sm hover:text-[#1FB6C1]">Overview — What You Receive</Link>
                <Link href="/product/methodology" onClick={closeAll} className="block py-2 text-sm hover:text-[#1FB6C1]">Methodology</Link>
                <Link href="/product/methodology/compliance" onClick={closeAll} className="block py-2 text-sm hover:text-[#1FB6C1]">Compliance</Link>
              </div>
            </li>

            <li>
              <Link href="/pricing" onClick={closeAll} className={`font-medium ${pathname === "/pricing" ? "text-[#1FB6C1]" : ""}`}>
                Pricing
              </Link>
            </li>

            <li>
              <Link href="/partners" onClick={closeAll} className={`font-medium ${pathname === "/partners" ? "text-[#1FB6C1]" : ""}`}>
                Partnerships
              </Link>
            </li>

            <li>
              <Link href="/verify" onClick={closeAll} className={`font-medium ${pathname === "/verify" ? "text-[#1FB6C1]" : ""}`}>
                Verify Attestation
              </Link>
            </li>

          </ul>
        </nav>
      </div>
    </header>
  );
}
