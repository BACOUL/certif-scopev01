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
    <header className="fixed top-0 left-0 w-full z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto h-20 px-4 flex items-center justify-between">

        {/* LOGO */}
        <Link href="/" onClick={closeAll} aria-label="Home">
          <Image
            src="/logo.png"
            alt="Certif-Scope"
            width={160}
            height={40}
            className="h-auto"
            priority
          />
        </Link>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          className="lg:hidden w-12 h-12 flex flex-col justify-center items-center"
        >
          <span
            className={`h-[3px] w-8 bg-gray-800 rounded transition-all ${
              open ? "rotate-45 translate-y-1" : ""
            }`}
          />
          <span
            className={`h-[3px] w-8 bg-gray-800 rounded my-1 transition-all ${
              open ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`h-[3px] w-8 bg-gray-800 rounded transition-all ${
              open ? "-rotate-45 -translate-y-1" : ""
            }`}
          />
        </button>

        {/* NAVIGATION */}
        <nav
          className={`
            absolute lg:static top-20 right-4 
            bg-white border border-gray-200 rounded-xl shadow-xl 
            p-6 w-64 lg:w-auto transition-all duration-200
            ${open ? "opacity-100 visible" : "opacity-0 invisible"}
            lg:opacity-100 lg:visible
          `}
        >
          <ul className="flex flex-col lg:flex-row gap-5 lg:gap-10 text-gray-800">

            <li>
              <Link
                href="/"
                onClick={closeAll}
                className={pathname === "/" ? "text-primary font-semibold" : ""}
              >
                Home
              </Link>
            </li>

            {/* DROPDOWN */}
            <li className="relative">
              <button
                onClick={() => setDropdown(!dropdown)}
                className="flex items-center gap-2 font-medium"
              >
                CO₂e Attestation
                <span className={`transition-transform ${dropdown ? "rotate-180" : ""}`}>▼</span>
              </button>

              <div
                className={`
                  ${dropdown ? "block" : "hidden"}
                  absolute left-0 w-56 mt-3 bg-white border border-gray-200 shadow-xl rounded-xl p-4
                  lg:absolute
                `}
              >
                <Link href="/product" onClick={closeAll} className="block py-2 hover:text-primary">
                  Overview
                </Link>
                <Link href="/product/methodology" onClick={closeAll} className="block py-2 hover:text-primary">
                  Methodology
                </Link>
                <Link href="/product/methodology/compliance" onClick={closeAll} className="block py-2 hover:text-primary">
                  Compliance
                </Link>
              </div>
            </li>

            <li>
              <Link
                href="/pricing"
                onClick={closeAll}
                className={pathname === "/pricing" ? "text-primary font-semibold" : ""}
              >
                Pricing
              </Link>
            </li>

            <li>
              <Link
                href="/partners"
                onClick={closeAll}
                className={pathname === "/partners" ? "text-primary font-semibold" : ""}
              >
                Partnerships
              </Link>
            </li>

            <li>
              <Link
                href="/verify"
                onClick={closeAll}
                className={pathname === "/verify" ? "text-primary font-semibold" : ""}
              >
                Verify Attestation
              </Link>
            </li>

          </ul>
        </nav>

      </div>
    </header>
  );
}
