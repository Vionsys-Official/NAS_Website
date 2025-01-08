import React from "react";
import Link from "next/link";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";
import { ourServices } from "@/app/(pages)/services/servicesD";

const Footer = () => {
  return (
    <footer className="bg-blue2 w-full  text-white overflow-x-hidden">
      <div className="flex flex-wrap relative z-20 px-4 pt-8 items-start justify-evenly gap-8">
        <div className="md:w-72 w-auto">
          <h2 className="text-lg font-semibold mb-4">About Us</h2>
          <p className="text-sm">
            NAS INFOTECH PRIVATE LIMITED provides innovative IT services to help
            your business succeed in the digital era. From Software Development
            to AI, we have the expertise to elevate your business.
          </p>

          <h2 className="text-lg font-semibold md:mt-10 mb-4">Follow Us</h2>
          <div className="flex space-x-4">
            <Link href="https://facebook.com">
              <button
                className="text-white hover:text-blue-600"
                aria-label="Facebook"
              >
                <FaFacebook size={30} />
              </button>
            </Link>
            <Link href="https://twitter.com">
              <button
                className="text-white hover:text-blue-600"
                aria-label="Twitter"
              >
                <FaXTwitter size={30} />
              </button>
            </Link>
            <Link href="https://linkedin.com">
              <button
                className="text-white hover:text-blue-600"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={30} />
              </button>
            </Link>
            <Link href="https://instagram.com">
              <button
                className="text-white hover:text-pink-500"
                aria-label="Instagram"
              >
                <FaInstagram size={30} />
              </button>
            </Link>
          </div>
        </div>

        <div className="md:w-fit w-full">
          <h2 className="text-lg font-semibold mb-4 text-center">Services</h2>
          <ul className="text-sm grid grid-cols-2">
            {ourServices.map((item, index) => (
              // eslint-disable-next-line react/jsx-key
              <li>
                <Link key={index} href={item.href1} className="mb-10">
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:w-60 w-full">
          <h2 className="text-lg font-semibold mb-4">Contact Info</h2>
          <p className="text-sm mb-4">Phone: +91 9022844929</p>
          <p className="text-sm mb-4">Email: hr@nasinfotech.com</p>
          <p className="text-sm">
            Address: 06th Floor, Stellar Spaces 505, opposite Zensar Company,
            Rakshak Nagar, Kharadi, Pune, Maharashtra 411014
          </p>
        </div>

        <div className="md:w-fit w-full">
          <h2 className="text-lg font-semibold mb-4">Get To Know Us</h2>
          <div className="flex flex-col text-sm">
            <Link href={"/"}>Home</Link>
            <Link href={"/about"}>About Us</Link>
            <Link href={"/industries"}>Industries</Link>
            <Link href={"/careers"}>Career</Link>
            <Link href={"/contact"}>Contact Us</Link>
          </div>
        </div>
      </div>

      <hr className="" />
      <div className="text-sm h-10 relative px-4 pt-10 py-4 z-20 flex items-center justify-center">
        Copyright &copy; 2024 NAS INFOTECH PRIVATE LIMITED. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
