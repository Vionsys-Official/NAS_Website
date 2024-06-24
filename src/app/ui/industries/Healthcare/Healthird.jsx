"use client";
import Button from "@/components/ui/Button";
import { fadein } from "@/components/ui/variants";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import heal1 from "/public/assets/industries/Healthcare/heal1.jpg";
import heal2 from "/public/assets/industries/Healthcare/heal2.jpg";
import heal3 from "/public/assets/industries/Healthcare/heal3.jpg";
import heal4 from "/public/assets/industries/Healthcare/heal4.jpg";
import heal5 from "/public/assets/industries/Healthcare/heal5.jpg";
import heal6 from "/public/assets/industries/Healthcare/heal6.jpg";
const Healthird = () => {
  return (
    <>
      <div>
        <div className="flex justify-center items-center py-5">
          <h1 className="md:text-Heading text-Heading-sm text-center font-extrabold text-blue2">
            Solutions We Provide
          </h1>
        </div>
        {/* first row cards */}
        <div className="px-4 py-9 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-5">
          <div className="grid gap-6 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
            <motion.div
               initial={{ opacity: 0, y: 100 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{
                 delay: 0.2,
                 y: { type: "spring", stiffness: 30 },
                 opacity: { duration: 0.6 },
                 ease: "easeInOut"
               }}
              className="overflow-hidden transition-shadow duration-300 bg-blue-200 rounded text-center"
            >
              <Link href="/" aria-label="Article">
                <Image
                  src={heal1}
                  className="object-cover w-full h-64 rounded"
                  alt=""
                />
              </Link>
              {/* card 1 */}
              <div className="py-5">
                <Link
                  href="/"
                  aria-label="Article"
                  className="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
                >
                  <p className="md:text-CardHeading text-CardHeading-sm font-semibold md:leading-5 text-center">
                    Cloud Infrastructure Services
                  </p>
                </Link>
                <p className="mb-4 text-sm text-gray-700 px-2">
                  We offer comprehensive cloud relocation, administration and
                  optimization administrations to guarantee consistent
                  integration and most extreme execution, Our Cloud Foundation
                  Administrations provide adaptable, secure and productive
                  cloud arrangements custom fitted to your trade needs.
                </p>
                <div className="flex space-x-4">
                  <div className="mr-2"></div>
                </div>
              </div>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.2,
                  y: { type: "spring", stiffness: 30 },
                  opacity: { duration: 0.6 },
                  ease: "easeInOut"
                }}
              className="overflow-hidden transition-shadow duration-300 bg-blue-200 rounded text-center"
            >
              <Link href="/" aria-label="Article">
                <Image
                  src={heal2}
                  className="object-cover w-full h-64 rounded"
                  alt=""
                />
              </Link>
              {/* card 2 */}
              <div className="py-5">
                <Link
                  href="/"
                  aria-label="Article"
                  className="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
                >
                  <p className="md:text-CardHeading text-CardHeading-sm font-semibold md:leading-5">
                    Telemedicine Solutions
                  </p>
                </Link>
                <p className="mb-4 text-sm text-gray-700 px-2">
                  Enhance patient engagement, reduce healthcare costs and
                  improve access to care with our state-of-the-art telemedicine
                  technologies. Partner with us to transform your healthcare
                  delivery and ensure a healthier, more connected future.
                </p>
              </div>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.2,
                  y: { type: "spring", stiffness: 30 },
                  opacity: { duration: 0.6 },
                  ease: "easeInOut"
                }}
              className="overflow-hidden transition-shadow duration-300 bg-blue-200 rounded text-center"
            >
              <Link href="/" aria-label="Article">
                <Image
                  src={heal3}
                  className="object-cover w-full h-64 rounded"
                  alt=""
                />
              </Link>
              {/* Card 3 */}
              <div className="py-5">
                <Link
                  href="/"
                  aria-label="Article"
                  className="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
                >
                  <p className="md:text-CardHeading text-CardHeading-sm font-semibold md:leading-5">
                    Cybersecurity Solutions
                  </p>
                </Link>
                <p className="mb-4 text-sm text-gray-700 px-2">
                  Our Cybersecurity Solutions offer comprehensive protection
                  against evolving cyber threats ensuring the safety and
                  integrity of your digital assets. We provide advanced security
                  assessments, robust threat detection and rapid incident
                  response to defend your organization.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
        {/* second row cards */}
        <div className="px-4 md:py-7 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-5">
          <div className="grid gap-6 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
            <motion.div
               initial={{ opacity: 0, y: 100 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{
                 delay: 0.2,
                 y: { type: "spring", stiffness: 30 },
                 opacity: { duration: 0.6 },
                 ease: "easeInOut"
               }}
              className="overflow-hidden transition-shadow duration-300 bg-blue-200 rounded text-center"
            >
              <Link href="/" aria-label="Article">
                <Image
                  src={heal4}
                  className="object-cover w-full h-64 rounded"
                  alt=""
                />
              </Link>
              {/* card 4 */}
              <div className="py-5">
                <Link
                  href="/"
                  aria-label="Article"
                  className="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
                >
                  <p className="md:text-CardHeading text-CardHeading-sm font-semibold md:leading-5 text-center">
                    Data management analytics
                  </p>
                </Link>
                <p className="mb-4 text-sm text-gray-700 px-2">
                  We offer end-to-end data solutions including data
                  integration, storage, processing and advanced analytics.
                  Enhance your business intelligence, optimize operations and
                  drive growth with our tailored data strategies.
                </p>
                <div className="flex space-x-4">
                  <div className="mr-2"></div>
                </div>
              </div>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.2,
                  y: { type: "spring", stiffness: 30 },
                  opacity: { duration: 0.6 },
                  ease: "easeInOut"
                }}
              className="overflow-hidden transition-shadow duration-300 bg-blue-200 rounded text-center"
            >
              <Link href="/" aria-label="Article">
                <Image
                  src={heal5}
                  className="object-cover w-full h-64 rounded"
                  alt=""
                />
              </Link>
              {/* card 5 */}
              <div className="py-5">
                <Link
                  href="/"
                  aria-label="Article"
                  className="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
                >
                  <p className="md:text-CardHeading text-CardHeading-sm font-semibold md:leading-5">
                    Healthcare Analytics
                  </p>
                </Link>
                <p className="mb-4 text-sm text-gray-700 px-2">
                  Enhance clinical decision-making, optimize resource
                  allocation and drive patient-centered care with our expert
                  analytics solutions. Partner with us to leverage the power of
                  data and transform healthcare.
                </p>
              </div>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.2,
                  y: { type: "spring", stiffness: 30 },
                  opacity: { duration: 0.6 },
                  ease: "easeInOut"
                }}
              className="overflow-hidden transition-shadow duration-300 bg-blue-200 rounded text-center"
            >
              <Link href="/" aria-label="Article">
                <Image
                  src={heal6}
                  className="object-cover w-full h-64 rounded"
                  alt=""
                />
              </Link>
              {/* card 6 */}
              <div className="py-5">
                <Link
                  href="/"
                  aria-label="Article"
                  className="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
                >
                  <p className="md:text-CardHeading text-CardHeading-sm font-semibold md:leading-5">
                    Medical Imaging solutions
                  </p>
                </Link>
                <p className="mb-4 text-sm text-gray-700 px-2">
                  Our Medical Imaging Solutions offer cutting-edge technology to
                  improve diagnostic accuracy and patient care. We provide
                  comprehensive imaging services including advanced imaging
                  software, cloud storage and integration with existing
                  healthcare systems.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
        {/* cta section */}
        <div className="flex justify-center py-5">
          <section className="py-5 shadow-xl rounded-b-2xl mb-4 w-[80vw] bg-gray-200">
            <div className="max-w-screen-xl mx-auto px-4 md:text-center text-center md:px-8">
              <div className="max-w-xl space-y-3 md:mx-auto">
                <p className="text-blue2 md:text-Heading text-Heading-sm font-extrabold ">
                  Build the Future With Us
                </p>
                <p className="text-slate-600 md:text-lg  text-Para-sm ">
                  At NAS Infotech, we are dedicated to pioneering innovative
                  solutions that transform Healtcare and empower the next
                  generation.
                </p>
              </div>
              <div className="mt-4">
                <Button />
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Healthird;
