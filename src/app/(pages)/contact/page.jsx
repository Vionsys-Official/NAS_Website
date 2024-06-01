"use client";
import React from "react";
import contactHero from "@/../public/assets/contact/Hero.jpg";
import Image from "next/image";
import Header from "@/../public/assets/contact/Header.jpg";
import { FaMobileAlt } from "react-icons/fa";
import { ImLocation2 } from "react-icons/im";
import { MdOutlineEmail } from "react-icons/md";
import { fadein } from "@/components/ui/variants";
import { motion } from "framer-motion";
import Forms from "./Forms";

function page() {
  return (
    <main id="mission" className="overflow-x-hidden">
      {/* Hero Section */}
      <section>
        <div className="mb-16 lg:h-[100vh] relative">
          <div className="relative h-[50vh] md:h-[70vh] lg:h-[90vh] bg-black">
            <Image
              src={contactHero}
              alt="Contact Hero"
              layout="fill"
              objectFit="cover"
              quality={100}
              className="absolute inset-0 z-0 opacity-65"
            />
            <h1 className="absolute inset-x-0 top-1/2 text-center text-white text-HeroHeading font-bold tracking-wide z-10">
              Innovate the Future with Us
            </h1>
          </div>
          <div
            id="MService"
            className="relative flex flex-col md:flex-row justify-center lg:w-[40vw] md:w-[40vw] w-[90vw] md:-top-10 -top-0 mx-auto overflow-hidden bg-white divide-y md:divide-y-0 md:divide-x rounded shadow"
          >
            <div className=" flex-1 p-8 text-center border-b md:border-b-0 ">
              <h1 className="tracking-tighter font-bold md:text-MainHeading text-slate-600 uppercase">
                We are here to help you
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* First Section */}
      <section>
        <section className="py-10 bg-transparent sm:py-16 lg:py-8">
          <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-6">
            <div className="grid items-center grid-cols-1 gap-y-6 md:grid-cols-2 md:gap-x-20">
              <div className="">
                <h1 className="mb-4 text-2xl text-center font-extrabold text-gray-600 md:text-3xl lg:text-4xl">
                  <span className="text-transparent md:text-5xl lg:text-5xl text-3xl block bg-clip-text bg-gradient-to-r to-emerald-600 from-green-500">
                    NAS Infotech
                  </span>{" "}
                  Pvt.Ltd.
                </h1>
                <blockquote className="text-lg text-center font-normal text-gray-500 lg:text-lg dark:text-gray-400">
                  <svg
                    className="w-8 h-8 text-gray-400 dark:text-green-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 18 14"
                  >
                    <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
                  </svg>
                  <p className="first-letter:text-2xl text-Para">
                    At NAS Infotech Pvt.Ltd, we value your inquiries and
                    feedback. Whether you need support, have questions about our
                    services, or want to start a project, our team is here to
                    help. We are committed to providing exceptional service and
                    ensuring a seamless experience.
                  </p>
                </blockquote>
              </div>

              <div className="relative pl-20 pr-6 sm:pl-6 md:px-0">
                <div className="relative w-full max-w-xs mt-4 mb-10 ml-auto">
                  <Image
                    className="ml-auto"
                    height={1000}
                    width={1000}
                    src={Header}
                    alt=""
                  />

                  <Image
                    className="absolute -top-4 -left-12"
                    height={1000}
                    width={1000}
                    src="https://cdn.rareblocks.xyz/collection/celebration/images/features/1/wavey-lines.svg"
                    alt=""
                  />

                  <div className="absolute -bottom-10 -left-16">
                    <div className="bg-yellow-300">
                      <div className="px-8 py-10">
                        <span className="block text-4xl font-bold text-black lg:text-5xl">
                          {" "}
                          100%{" "}
                        </span>
                        <span className="block mt-2 text-base leading-tight text-black">
                          {" "}
                          Support
                          <br />
                          Everything{" "}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>

      {/* Forms Section */}
      <section className="py-2">
        <Forms />
      </section>

      {/* Third Section */}
      <section>
        <div className="px-4 py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pb-12 ">
          <div className="grid row-gap-8 sm:row-gap-0 sm:grid-cols-2 lg:grid-cols-3">
            <div className="p-8 border-b sm:border-r">
              <div className="max-w-md text-center">
                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full sm:w-16 sm:h-16">
                  <ImLocation2 className="text-black text-3xl" />
                </div>
                <h6 className="mb-2 font-semibold leading-5">Address</h6>
                <p className="mb-3 text-sm text-gray-900">
                  Office No: 503, 06th Floor, Stellar Spaces, Opposite Zensar
                  Company, Kharadi, Pune - 411014
                </p>
              </div>
            </div>
            <div className="p-8 border-b lg:border-r">
              <div className="max-w-md text-center">
                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full sm:w-16 sm:h-16">
                  <FaMobileAlt className="text-3xl text-black" />
                </div>
                <h6 className="mb-2 font-semibold leading-5">Phone</h6>
                <p className=" text-sm text-gray-900">+(91) 9172 077273</p>
                <p className="mb-3 text-sm text-gray-900">+(91) 8766 613742</p>
              </div>
            </div>
            <div className="p-8 border-b sm:border-r lg:border-r-0">
              <div className="max-w-md text-center">
                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full sm:w-16 sm:h-16">
                  <MdOutlineEmail className="text-black text-3xl font-bold" />
                </div>
                <h6 className="mb-2 font-semibold leading-5">Email</h6>
                <p className="mb-3 text-sm text-gray-900">hr@nasinfotech.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section>
        <div className="px-4 py-2 flex items-center mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
          <div className="max-w-screen-sm sm:text-center sm:mx-auto">
            <motion.h2
              variants={fadein("right", 0.1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.5 }}
              className="mb-4 font-sans text-Heading font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none"
            >
              Navigate to Us with Ease
            </motion.h2>
            <motion.p
              variants={fadein("left", 0.1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.5 }}
              className="text-base text-gray-700 md:text-SubHeading sm:px-4"
            >
              Use our interactive map to effortlessly find your way to our
              location. We’re just a few clicks away!
            </motion.p>
            <hr className="w-full my-8 border-green-400" />
          </div>
        </div>

        <div className="lg:w-[98vw] lg:h-[70vh] px-4 py-4 md:py-0 overflow-x-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121039.12453654714!2d73.82471927332537!3d18.5527185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x650eabc3b753d0a7%3A0xa2c952c7e1440f61!2sGreateway%20Software%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1716797083294!5m2!1sen!2sin"
            width="600"
            className="w-full h-full"
            height="450"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </main>
  );
}

export default page;
