import React from "react";
import { contactData } from "@/utils/heroSection/data";
import HeroSection from "@/utils/heroSection/HeroSection";
import Image from "next/image";
import Header  from "@/../public/assets/contact/Header.jpg";

import Forms from "./Forms";

function page() {
  return (
    <main id="mission">
      {/* Hero Section */}
      <section>
        <HeroSection obj={contactData} />
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
                    className="w-4 h-4 text-gray-400 dark:text-green-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 18 14"
                  >
                    <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
                  </svg>
                  <p className="first-letter:text-2xl">
                    At NAS Infotech Pvt.Ltd, we value your inquiries and feedback.
                    Whether you need support, have questions about our services,
                    or want to start a project, our team is here to help. We are
                    committed to providing exceptional service and ensuring a
                    seamless experience.
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
        <Forms/>
      </section>

      {/* Third Section */}
      <section>
        <div className="px-4 py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pb-12 ">
          <div className="grid row-gap-8 sm:row-gap-0 sm:grid-cols-2 lg:grid-cols-3">
            <div className="p-8 border-b sm:border-r">
              <div className="max-w-md text-center">
                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full sm:w-16 sm:h-16">
                  <svg
                    className="w-8 h-8 text-deep-purple-accent-400 sm:w-12 sm:h-12"
                    stroke="currentColor"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    />
                  </svg>
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
                  <svg
                    className="w-8 h-8 text-deep-purple-accent-400 sm:w-12 sm:h-12"
                    stroke="currentColor"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    />
                  </svg>
                </div>
                <h6 className="mb-2 font-semibold leading-5">Phone</h6>
                <p className=" text-sm text-gray-900">+(91) 9172 077273</p>
                <p className="mb-3 text-sm text-gray-900">+(91) 8766 613742</p>
              </div>
            </div>
            <div className="p-8 border-b sm:border-r lg:border-r-0">
              <div className="max-w-md text-center">
                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full sm:w-16 sm:h-16">
                  <svg
                    className="w-8 h-8 text-deep-purple-accent-400 sm:w-12 sm:h-12"
                    stroke="currentColor"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    />
                  </svg>
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
            <h2 className="mb-4 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
              Navigate to Us with Ease
            </h2>
            <p className="text-base text-gray-700 md:text-lg sm:px-4">
              Use our interactive map to effortlessly find your way to our
              location. We’re just a few clicks away!
            </p>
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