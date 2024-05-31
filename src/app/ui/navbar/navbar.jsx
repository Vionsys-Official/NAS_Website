"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BiSolidPhoneCall } from "react-icons/bi";
import Image from "next/image";
import Logo from "@/../public/assets/Logo.png"

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
      className={`py-2 px-6 fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        isScrolled
          ? "bg-white shadow-lg text-blue1"
          : "bg-transparent text-white "
      }`}
    >
      <div className="flex items-center justify-between gap-8">
        <Link className="flex items-center gap-2" href="/">
          <Image src={Logo} height={1000} width={1000} className="h-12 w-36 " alt="Logo not found" />
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

        <div className="hidden md:block"> {/* Hide for mobile view */}
          <Link href="/contact" isScrolled={isScrolled} pathname={pathname}>
            <button className="cursor-pointer font-semibold relative z-10 border overflow-hidden border-green-500 group px-3 rounded-xl py-2">
              <span className="relative z-10 hidden text-green-500 group-hover:text-white text-sm duration-500 md:flex md:items-center">
                Contact us <BiSolidPhoneCall className="ml-1 text-green-500 text-lg font-semibold group-hover:text-white" />
              </span>
              <span className="absolute w-full h-full bg-green-500 -left-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:left-0 duration-500"></span>
              <span className="absolute w-full h-full bg-green-500 -right-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:right-0 duration-500"></span>
            </button>
          </Link>
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
        isScrolled ? "text-blue1" : "text-white"
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
          className={`absolute top-11 left-0 right-0 p-4 transition-colors duration-300 ${
            isScrolled
              ? "bg-white text-black"
              : "bg-black bg-opacity-40 text-white"
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
              Contact us
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
