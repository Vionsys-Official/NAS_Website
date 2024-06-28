"use client";
import React from "react";
import { fadein } from "@/components/ui/variants";
import { motion } from "framer-motion";
import WhyChooseus from "/public/assets/services/ITServiceSupport/whychooseus1.jpg";
import WhyChooseus2 from "/public/assets/services/ITServiceSupport/whychooseus2.jpg";
import Image from "next/image";

const WhyChooseUs = () => {
  return (
    <section className="dark:bg-gray-100 dark:text-gray-800">
      <div className="max-w-xl p-6 py-6 mx-auto space-y-10 lg:px-8 lg:max-w-7xl">
        <div>
          <motion.h2
            variants={fadein("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.8 }}
            className="md:text-Heading text-Heading-sm font-extrabold tracking-tight text-center text-blue2"
          >
            Why Choose Us?
          </motion.h2>
        </div>
        <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <div className=" space-y-12">
                  <motion.div
                    variants={fadein("right", 0.2)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: true, amount: 0.8 }} 
                    className="flex">
              `  <div className="flex-shrink-0 md:block hidden">
                  <div className="flex items-center justify-center w-12 h-12 rounded-md">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="w-7 h-7"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                  </div>
                </div>
                <div>
                  <h4 className="md:text-CardHeading text-CardHeading-sm font-semibold leading-6 text-gray-900">
                    Innovative Solutions
                  </h4>
                  <p className="mt-2 md:text-Para text-Para-sm text-gray-800">
                    We&apos;re not just followers; we&apos;re innovators. We embrace
                    cutting-edge technologies and develop creative solutions
                    tailored to your business needs to ensure you stay ahead of
                    change in today&apos;s ever-evolving digital landscape.
                  </p>
                </div>
              </motion.div>
              <motion.div 
              variants={fadein("right", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.8 }} 
              className="flex">
                <div className="flex-shrink-0 md:block hidden">
                  <div 
                    className="flex items-center justify-center w-12 h-12 rounded-md"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="w-7 h-7"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                  </div>
                </div>
                <div>
                  <h4 className="md:text-CardHeading text-CardHeading-sm font-semibold leading-6 text-gray-900">
                    Personalized Approach
                  </h4>
                  <p className="mt-2 md:text-Para text-Para-smtext-gray-800">
                    We prioritize your individual needs, providing tailored
                    attention and bespoke solutions that address your specific
                    challenges and propel your business towards its goals.
                  </p>
                </div>
              </motion.div>
              <motion.div 
              variants={fadein("right", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.8 }} 
              className="flex">
                <div className="flex-shrink-0 md:block hidden">
                  <div
                    className="flex items-center justify-center w-12 h-12 rounded-md"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="w-7 h-7"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                  </div>
                </div>
                <div>
                  <h4 className="md:text-CardHeading text-CardHeading-sm font-semibold leading-6 text-gray-900">
                    Continuous Evolution
                  </h4>
                  <p className="mt-2 md:text-Para text-Para-sm text-gray-800">
                    We&apos;re dedicated to perpetual growth and advancement. Through
                    ongoing education and adaptation to industry trends, we
                    ensuring your solutions are always at the forefront of
                    innovation.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }} //X:100
            whileInView={{ opacity: 1, scale: 1 }} //y:100
            transition={{
              delay: 0.2,
              scale: { type: "spring", stiffness: 30 },
              opacity: { duration: 0.6 },
              ease: "easeInOut",
            }}
            aria-hidden="true"
            viewport={{ once: true, amount: 0.8 }}
            className="mt-10 lg:mt-0"
          >
            <Image
              src={WhyChooseus}
              alt=""
              className="mx-auto rounded-lg shadow-lg dark:bg-gray-500"
            />
          </motion.div>
        </div>
        <div>
          <div className="grid md:gap-8 gap-3 lg:grid-cols-2 lg:items-center">
            <div className="lg:col-start-2">
              <div className="md:space-y-12 space-y-6">
              <motion.div 
              variants={fadein("left", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.8 }} 
              className="flex">
                  <div className="flex-shrink-0 md:block hidden">
                    <div
                      className="flex items-center justify-center w-12 h-12 rounded-md"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-7 h-7"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div className="md:ml-4">
                    <div>
                      <h4 className="md:text-CardHeading text-CardHeading-sm font-semibold leading-6 text-gray-900">
                        Culture of Excellence
                      </h4>
                      <p className="mt-2 md:text-Para text-Para-sm dark:text-gray-800">
                        We cultivate a culture of exceptional service, going the
                        extra mile to provide prompt, courteous and proactive
                        support that consistently exceeds expectations.
                      </p>
                    </div>
                  </div>
                </motion.div>
                <motion.div 
                  variants={fadein("left", 0.2)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: true, amount: 0.8 }} 
                  className="flex">
                  <div className="flex-shrink-0 md:block hidden">
                    <div
                      className="flex items-center justify-center w-12 h-12 rounded-md"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-7 h-7"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div
                    className="md:ml-4"
                  >
                    <h4 className="md:text-CardHeading text-CardHeading-sm font-semibold leading-6 text-gray-900">
                      Collaborative Partnership
                    </h4>
                    <p className="mt-2 md:text-Para text-Para-smtext-gray-800">

                      We don&apos;t just serve clients; we form partnerships. We work

                      closely with you, leveraging our expertise to empower your
                      success and achieve mutual growth and prosperity.
                    </p>
                  </div>
                </motion.div>
                <motion.div 
                variants={fadein("left", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: true, amount: 0.8 }} 
                className="flex">
                  <div className="flex-shrink-0 md:block hidden">
                    <div
                      className="flex items-center justify-center w-12 h-12 rounded-md"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-7 h-7"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div
                    className="md:ml-4"
                  >
                    <h4 className="md:text-CardHeading text-CardHeading-sm font-semibold leading-6 text-gray-900">
                      Commitment to Value
                    </h4>
                    <p className="mt-2 md:text-Para text-Para-sm text-gray-800">
                      We deliver unparalleled value by combining expertise with
                      efficiency ensuring you receive the most cost-effective
                      solutions that maximize your return on investment.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.7 }} //X:100
              whileInView={{ opacity: 1, scale: 1 }} //y:100
              transition={{
                delay: 0.2,
                scale: { type: "spring", stiffness: 30 },
                opacity: { duration: 0.6 },
                ease: "easeInOut",
              }}
              viewport={{ once: true, amount: 0.8 }}
              className="mt-10 lg:mt-0 lg:col-start-1 lg:row-start-1"
            >
              <Image
                src={WhyChooseus2}
                alt=""
                className="mx-auto rounded-lg shadow-lg dark:bg-gray-500"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
