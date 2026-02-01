"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const navRef = useRef<HTMLDivElement | null>(null);
  const burgerRef = useRef<HTMLButtonElement | null>(null);
  const dropdownButtonRef = useRef<HTMLButtonElement | null>(null);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

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

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setDropdown(false);
        dropdownButtonRef.current?.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [dropdown]);

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
      <div className="w-full px-5 py-1 md:py-4 flex items-center justify-between">

        {/* LOGO — VISUAL SIZE MATCH AI-DECLARED */}
        <Link href="/" onClick={closeAll} aria-label="Home">
          <div className="origin-left scale-[1.25] md:scale-100">
            <Image
              src="/logo.png"
              alt="Certif-Scope Logo"
              width={180}
              height={45}
              priority
              className="h-[34px] w-auto md:h-auto md:w-[180px]"
            />
          </div>
        </Link>

        {/* BURGER */}
        <button
          ref={burgerRef}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
          aria-controls="main-navigation"
          className="lg:hidden w-8 h-8 flex flex-col justify-center items-center"
        >
          <span className={`h-[3px] w-7 bg-gray-900 dark:bg-gray-200 rounded transition-all ${open ? "rotate-45 translate-y-1" : ""}`} />
          <span className={`h-[3px] w-7 bg-gray-900 dark:bg-gray-200 rounded my-1 transition-all ${open ? "opacity-0" : "opacity-100"}`} />
          <span className={`h-[3px] w-7 bg-gray-900 dark:bg-gray-200 rounded transition-all ${open ? "-rotate-45 -translate-y-1" : ""}`} />
        </button>

        {/* NAV */}
        <nav
          ref={navRef}
          id="main-navigation"
          aria-label="Main navigation"
          className={`
            absolute lg:static top-[56px] right-4
            bg-white dark:bg-gray-900
            border border-gray-200 dark:border-gray-700
            rounded-xl shadow-lg lg:shadow-none
            p-5 lg:p-0
            w-60 lg:w-auto
            transition-all duration-200
            ${open ? "block opacity-100" : "hidden opacity-0 lg:block lg:opacity-100"}
          `}
        >
          <ul className="flex flex-col lg:flex-row gap-4 lg:gap-10">
            <li><Link href="/" onClick={closeAll}>Home</Link></li>
            <li><Link href="/verify" onClick={closeAll}>Verify</Link></li>
            <li><Link href="/pricing" onClick={closeAll}>Pricing</Link></li>
            <li><Link href="/generate" onClick={closeAll}>Generate</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
