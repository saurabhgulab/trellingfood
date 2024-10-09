"use client";
import Link from "next/link";
import { NAV_LINKS } from "../constants";
import { useState, useEffect } from "react";
import Footer from "./footer";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

  const toggleNavbar = () => {
    setNavbar(!navbar);
  };
  useEffect(() => {}, [navbar]);
  return (
    <nav className="bg-black border-r-emerald-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 ">
              <a href="/">
                <h3 className="max-w-xl p-2  text-2xl font-extrabold leading-none md:text-3xl xl:text-5xl text-emerald-500">
                  Trelling<span className="text-white">Food</span>
                </h3>
              </a>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center space-x-4">
              <ul className="justify-between px-4 mx-auto gap-12 lg:max-w-7xl md:items-center md:flex md:px-8">
                {NAV_LINKS.map((link) => (
                  <Link
                    target=""
                    href={link.href}
                    key={link.key}
                    className="items-end block text-emerald-500 justify-center cursor-pointer pb-1.5 transition-all hover:font-bold"
                  >
                    {link.label}
                  </Link>
                ))}
              </ul>
            </div>
          </div>
          <div className="md:hidden flex items-center">
            <button
              className="inline-flex items-center justify-center p-2 rounded-md text-emerald-500  hover:text-white focus:outline-none focus:ring-2 focus: ring-inset focus:ring-white"
              onClick={toggleNavbar}
            >
              {navbar ? (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {navbar && (
        <div className="md:hidden">
          <div className="text-end px-2 pt-2 pb-3 space-y-2 sm:px-4 sm:py-2">
            <ul className="justify-between px-4 mx-auto gap-12 lg:max-w-7xl md:items-center md:flex md:px-8">
              {NAV_LINKS.map((link) => (
                <Link
                  href={link.href}
                  key={link.key}
                  className="regular-16 block text-emerald-500 justify-center cursor-pointer pb-1.5 transition-all hover:font-bold"
                  onClick={toggleNavbar}
                >
                  {link.label}
                </Link>
              ))}
            </ul>
            <Footer />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
