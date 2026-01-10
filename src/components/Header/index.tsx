"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import menuData from "./menuData";

const Header = () => {
  // Navbar toggle
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navbarToggleHandler = () => setNavbarOpen(!navbarOpen);

  // Sticky Navbar
  const [sticky, setSticky] = useState(false);
  const handleStickyNavbar = () => {
    setSticky(window.scrollY >= 80);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
  });

  // Submenu handler
  const [openIndex, setOpenIndex] = useState(-1);
  const handleSubmenu = (index) =>
    setOpenIndex(openIndex === index ? -1 : index);

  const pathname = usePathname();

  return (
    <header
      className={`header top-0 left-0 z-40 flex w-full items-center ${
        sticky
          ? "fixed bg-white/80 backdrop-blur-sm shadow-md"
          : "absolute bg-transparent"
      }`}
    >
      <div className="container">
        <div className="relative -mx-4 flex items-center justify-between">

          {/* LOGO AREA */}
          <div className="w-60 max-w-full px-4 xl:mr-12">
            <Link
              href="/"
              className={`block w-full ${sticky ? "py-4" : "py-8"}`}
            >
              {/* Remplace le fichier logo par ton SVG ou PNG */}
              <Image
                src="/images/logo/logo.svg"
                alt="Certif-Scope Logo"
                width={140}
                height={40}
                className="w-full"
              />
            </Link>
          </div>

          {/* NAVIGATION */}
          <div className="flex w-full items-center justify-between px-4">

            {/* HAMBURGER */}
            <button
              onClick={navbarToggleHandler}
              aria-label="Mobile Menu"
              className="lg:hidden px-3 py-2"
            >
              <span
                className={`block h-0.5 w-7 bg-black transition ${
                  navbarOpen ? "rotate-45 translate-y-1.5" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-7 bg-black transition ${
                  navbarOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-7 bg-black transition ${
                  navbarOpen ? "-rotate-45 -translate-y-1.5" : ""
                }`}
              />
            </button>

            {/* MAIN NAV */}
            <nav
              className={`navbar absolute right-0 z-30 w-[250px] rounded border bg-white px-6 py-4 shadow-md transition lg:static lg:block lg:w-auto lg:border-none lg:bg-transparent lg:p-0 lg:shadow-none ${
                navbarOpen
                  ? "top-full opacity-100"
                  : "top-[120%] opacity-0 invisible lg:visible lg:opacity-100"
              }`}
            >
              <ul className="block lg:flex lg:space-x-10">
                {menuData.map((menuItem, index) => (
                  <li key={index} className="relative group">
                    {menuItem.path ? (
                      <Link
                        href={menuItem.path}
                        className={`flex py-2 lg:py-4 text-base ${
                          pathname === menuItem.path
                            ? "text-[#1FB6C1]"
                            : "text-[#0B3A63] hover:text-[#1FB6C1]"
                        }`}
                      >
                        {menuItem.title}
                      </Link>
                    ) : (
                      <>
                        <button
                          onClick={() => handleSubmenu(index)}
                          className="flex items-center justify-between w-full py-2 text-[#0B3A63] hover:text-[#1FB6C1]"
                        >
                          {menuItem.title}
                          <span className="ml-2">▼</span>
                        </button>

                        <div
                          className={`submenu bg-white rounded shadow-md transition lg:absolute lg:top-full lg:left-0 lg:w-[220px] lg:p-4 ${
                            openIndex === index ? "block" : "hidden"
                          }`}
                        >
                          {menuItem.submenu?.map(
                            (submenuItem, subIndex) => (
                              <Link
                                href={submenuItem.path}
                                key={subIndex}
                                className="block py-2 text-sm text-[#0B3A63] hover:text-[#1FB6C1]"
                              >
                                {submenuItem.title}
                              </Link>
                            )
                          )}
                        </div>
                      </>
                    )}
                  </li>
                ))}
              </ul>
            </nav>

          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
