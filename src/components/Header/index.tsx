"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import ThemeToggler from "./ThemeToggler";
import menuData from "./menuData";

const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const pathname = usePathname();

  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => setSticky(window.scrollY >= 80);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [openIndex, setOpenIndex] = useState(-1);
  const handleSubmenu = (index: number) =>
    setOpenIndex(openIndex === index ? -1 : index);

  return (
    <header
      className={`top-0 left-0 z-40 flex w-full items-center transition-all ${
        sticky
          ? "fixed bg-white/90 backdrop-blur-md shadow-sm dark:bg-gray-dark/90"
          : "absolute bg-transparent"
      }`}
    >
      <div className="container">
        <div className="relative -mx-4 flex items-center justify-between">

          {/* LOGO */}
          <div className="px-4 xl:mr-12">
            <Link
              href="/"
              className={`block ${sticky ? "py-4 lg:py-3" : "py-6"}`}
            >
              <Image
                src="/logo.png"
                alt="Certif-Scope"
                width={115}
                height={40}
                className="w-[100px] md:w-[115px]"
                priority
              />
            </Link>
          </div>

          {/* NAVIGATION */}
          <div className="flex w-full items-center justify-between px-4">

            {/* MOBILE ICON */}
            <button
              onClick={() => setNavbarOpen(!navbarOpen)}
              aria-label="Menu"
              className="lg:hidden absolute top-1/2 right-4 -translate-y-1/2 rounded-lg px-3 py-2 focus:ring-2 ring-primary"
            >
              <span
                className={`block h-0.5 w-7 bg-black dark:bg-white transition-all ${
                  navbarOpen ? "rotate-45 translate-y-1.5" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-7 bg-black dark:bg-white my-1 transition-all ${
                  navbarOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-7 bg-black dark:bg-white transition-all ${
                  navbarOpen ? "-rotate-45 -translate-y-1.5" : ""
                }`}
              />
            </button>

            {/* MENU */}
            <nav
              className={`absolute right-0 top-full z-30 w-[240px] rounded border bg-white py-4 px-6 duration-300 dark:bg-dark dark:border-body-color/20 
                lg:static lg:w-auto lg:border-none lg:bg-transparent lg:p-0 lg:opacity-100 
                ${navbarOpen ? "opacity-100 visible" : "opacity-0 invisible lg:visible lg:opacity-100"}
              `}
            >
              <ul className="block lg:flex lg:space-x-10">
                {menuData.map((menuItem, index) => (
                  <li key={index} className="group relative">
                    {menuItem.path ? (
                      <Link
                        href={menuItem.path}
                        className={`flex py-2 text-base lg:py-4 ${
                          pathname === menuItem.path
                            ? "text-primary dark:text-white font-semibold"
                            : "text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
                        }`}
                      >
                        {menuItem.title}
                      </Link>
                    ) : (
                      <>
                        <p
                          onClick={() => handleSubmenu(index)}
                          className="flex items-center justify-between py-2 cursor-pointer text-base lg:py-4 text-dark group-hover:text-primary dark:text-white/70 dark:group-hover:text-white"
                        >
                          {menuItem.title}
                          <span className="pl-3">
                            <svg width="22" height="22" viewBox="0 0 25 24">
                              <path
                                fill="currentColor"
                                d="M6.3 8.8c.4-.4 1-.4 1.4 0L12 13.1l4.3-4.3c.4-.4 1-.4 1.4 0s.4 1 0 1.4l-5 5-5-5c-.4-.4-.4-1 0-1.4z"
                              />
                            </svg>
                          </span>
                        </p>

                        <div
                          className={`lg:absolute lg:left-0 lg:w-[220px] lg:p-4 lg:rounded lg:shadow-lg dark:bg-dark bg-white transition-all duration-300 
                          ${openIndex === index ? "block" : "hidden lg:block lg:opacity-0 lg:group-hover:opacity-100"}`}
                        >
                          {menuItem.submenu.map((submenuItem, subIndex) => (
                            <Link
                              key={subIndex}
                              href={submenuItem.path}
                              className="block py-2.5 text-sm text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
                            >
                              {submenuItem.title}
                            </Link>
                          ))}
                        </div>
                      </>
                    )}
                  </li>
                ))}
              </ul>
            </nav>

            {/* RIGHT BUTTONS */}
            <div className="hidden md:flex items-center gap-6">
              <Link
                href="/signin"
                className="text-dark text-base font-medium hover:opacity-70 dark:text-white"
              >
                Sign In
              </Link>

              <Link
                href="/signup"
                className="bg-primary hover:bg-primary/90 text-white font-medium px-6 py-3 rounded-md shadow transition"
              >
                Sign Up
              </Link>

              <ThemeToggler />
            </div>

          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
