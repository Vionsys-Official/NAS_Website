"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MdOutlineCall } from "react-icons/md";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`py-4 px-6 fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        isScrolled ? "bg-white shadow-lg text-black" : "bg-black bg-opacity-55 text-white"
      }`}
    >
      <div className="flex items-center justify-between">
        <Link className="flex items-center gap-2" href="/">
          <span className="text-xl font-bold">NAS Logo</span>
        </Link>
        <div className="hidden md:flex items-center gap-10 p-2">
          <NavLink href="/" isScrolled={isScrolled} pathname={pathname}>
            Home
          </NavLink>
          <NavLink href="/about" isScrolled={isScrolled} pathname={pathname}>
            About
          </NavLink>
          <NavLink href="/services" isScrolled={isScrolled} pathname={pathname}>
            Services
          </NavLink>
          <NavLink
            href="/industries"
            isScrolled={isScrolled}
            pathname={pathname}
          >
            Industries
          </NavLink>
          <NavLink href="/careers" isScrolled={isScrolled} pathname={pathname}>
            Careers
          </NavLink>
          
        </div>
        <div>
        <NavLink href="/contact" isScrolled={isScrolled} pathname={pathname}>
            <button
              className={`overflow-hidden w-28 px-2 py-2 h-8 flex justify-center items-center gap-1 bg-transparent border-none rounded-md text-md  cursor-pointer relative z-10 group ${
                isScrolled ? "text-black" : "text-white"
              }`}
            >
              Contact
              <span className="absolute w-36 h-32 -top-8 -left-2 bg-green-200 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-bottom"></span>
              <span className="absolute w-36 h-32 -top-8 -left-2 bg-green-400 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-bottom"></span>
              <span className="absolute w-36 h-32 -top-8 -left-2 bg-green-600 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-bottom"></span>
              <span className="group-hover:opacity-100 font-light  group-hover:duration-1000 flex flex-row items-center justify-center gap-1 duration-100 opacity-0 absolute bottom-1 left-4 z-10">
                Contact
                <MdOutlineCall />
              </span>
            </button>
          </NavLink>
        </div>
        <div className="md:hidden">
          <MobileMenu isScrolled={isScrolled} pathname={pathname} />
        </div>
      </div>
    </nav>
  );
};

// NavLink Component for links with hover and selected state
const NavLink = ({ href, isScrolled, pathname, children }) => (
  <Link href={href}>
    <div
      className={`text-base font-light hover:scale-[115%] hover:ease-in ease-out duration-75 hover:duration-75 ${
        isScrolled ? "text-black" : "text-white"
      } ${pathname === href ? "font-extrabold" : ""}`}
    >
      {children}
    </div>
  </Link>
);

// Mobile View
const MobileMenu = ({ isScrolled, pathname }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button
        onClick={toggleMenu}
        className={`${isScrolled ? "text-black" : "text-white"}`}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          ></path>
        </svg>
      </button>
      {isOpen && (
        <div
          className={`absolute top-14 left-0 right-0 p-4 transition-colors duration-300 ${
            isScrolled
              ? "bg-white text-black"
              : "bg-black bg-opacity-75 text-white"
          }`}
        >
          <div className="flex flex-col items-center space-y-4">
            <MobileNavLink
              href="/"
              isScrolled={isScrolled}
              pathname={pathname}
              onClick={() => setIsOpen(false)}
            >
              Home
            </MobileNavLink>
            <MobileNavLink
              href="/about"
              isScrolled={isScrolled}
              pathname={pathname}
              onClick={() => setIsOpen(false)}
            >
              About
            </MobileNavLink>
            <MobileNavLink
              href="/services"
              isScrolled={isScrolled}
              pathname={pathname}
              onClick={() => setIsOpen(false)}
            >
              Services
            </MobileNavLink>
            <MobileNavLink
              href="/industries"
              isScrolled={isScrolled}
              pathname={pathname}
              onClick={() => setIsOpen(false)}
            >
              Industries
            </MobileNavLink>
            <MobileNavLink
              href="/careers"
              isScrolled={isScrolled}
              pathname={pathname}
              onClick={() => setIsOpen(false)}
            >
              Careers
            </MobileNavLink>
            <MobileNavLink
              href="/contact"
              isScrolled={isScrolled}
              pathname={pathname}
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </MobileNavLink>
          </div>
        </div>
      )}
    </>
  );
};

const MobileNavLink = ({ href, isScrolled, pathname, onClick, children }) => (
  <Link href={href}>
    <div
      className={`text-base font-medium hover:underline underline-offset-4 ${
        isScrolled ? "text-black" : "text-white"
      } ${pathname === href ? "font-extrabold" : ""}`}
      onClick={onClick}
    >
      {children}
    </div>
  </Link>
);

export default Navbar;
