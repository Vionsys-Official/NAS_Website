"use client"
import React from "react";
import Image from "next/image";
import Content1 from "@/../public/assets/industries/Finance/Content1.jpg";
import Button from "@/components/ui/Button";
import { fadein } from '@/components/ui/variants';
import { motion } from "framer-motion";

const Sections = () => {
  return (
    <>
      {/* Section 1 */}
      <section>
        <div className="relative px-4 md:py-10 py-6 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
          <div className="relative">
            <div className="grid gap-12 row-gap-8 lg:grid-cols-2">
              <div className="grid gap-12 row-gap-5 md:grid-cols-2">
                <motion.div
                  variants={fadein("left", 0.1)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.5 }}
                  className="relative">
                  <h6 className="md:mb-2 font-semibold md:text-CardHeading text-CardHeading-sm">
                    Software Solutions & CRM Systems
                  </h6>
                  <p className=" text-gray-900 md:text-para text-Para-sm">
                    Tailoring software solutions to meet specific business needs
                    and objectives ensuring scalability, flexibility and
                    seamless integration with existing systems.
                  </p>
                </motion.div>

                <motion.div
                  variants={fadein("right", 0.1)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.5 }}
                >
                  <h6 className="md:mb-2 font-semibold md:text-CardHeading text-CardHeading-sm">
                    Data Analytics and Business Intelligence
                  </h6>
                  <p className=" text-gray-900 md:text-para text-Para-sm">
                    Creating interactive data visualizations and dashboards that
                    enable stakeholders to gain actionable insights from complex
                    datasets facilitating data-driven decision-making.
                  </p>
                </motion.div>

                <motion.div
                  variants={fadein("left", 0.1)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.5 }}
                >
                  <h6 className="md:mb-2 font-semibold md:text-CardHeading text-CardHeading-sm">
                    Cybersecurity Solutions
                  </h6>
                  <p className=" text-gray-900 md:text-para text-Para-sm">
                    Providing rapid incident response services and proactive
                    threat hunting capabilities to identify, mitigate and
                    neutralize cyber threats before they escalate into breaches
                    or attacks.
                  </p>
                </motion.div>

                <motion.div
                  variants={fadein("right", 0.1)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.5 }}
                >
                  <h6 className="md:mb-2 font-semibold md:text-CardHeading text-CardHeading-sm">
                    Cloud Computing & e-Banking
                  </h6>
                  <p className=" text-gray-900 md:text-para text-Para-sm">
                    Assisting businesses in migrating their applications and
                    workloads to the cloud optimizing cloud infrastructure and
                    implementing cloud-native solutions to improve agility and
                    cost-efficiency.
                  </p>
                </motion.div>
              </div>
              <div>
                <Image
                  className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
                  src={Content1}
                  alt=""
                  height={1000}
                  width={1000}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section>
        <div className="px-4 md:py-10 py-6 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
          <div className="max-w-xl  mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
            <motion.h2
              variants={fadein("down", 0.1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.5 }}
              className="max-w-lg mb-6 text-Heading-sm font-extrabold leading-none tracking-tight text-blue2 md:text-Heading md:mx-auto">
              How We Can Help You?
            </motion.h2>
            <motion.p
              variants={fadein("up", 0.1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.5 }}
              className=" text-slate-600 font-semibold md:text-lg text-Para-sm">
              We can assist you in optimizing operations enhancing security,
              improving compliance and delivering superior customer
              experiences.
            </motion.p>
          </div>
          <div className="grid max-w-screen-lg mx-auto space-y-6 lg:grid-cols-2 lg:space-y-0 lg:divide-x">
            <div className="md:space-y-6 space-y-3 sm:px-16">
              <div className="flex flex-col max-w-md sm:flex-row">
                <motion.div
                  variants={fadein("left", 0.1)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.5 }}
                  className="hover:bg-violet-950 hover:text-white p-2 ">
                  <h6 className="mb-3 text-CardHeading-sm md:text-CardHeading font-semibold">
                    Training and Education
                  </h6>
                  <p className="text-Para-sm md:text-Para hover:text-white">
                    Provide training and workshops to educate finance
                    professionals on the latest technologies and best practices
                    in financial technology.
                  </p>
                </motion.div>
              </div>
              <div className="flex flex-col max-w-md sm:flex-row">
                <motion.div
                  variants={fadein("left", 0.1)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.5 }}
                  className="hover:bg-violet-950 hover:text-white p-2 ">
                  <h6 className="mb-3 text-CardHeading-sm md:text-CardHeading font-semibold">
                    Artificial Intelligence and Machine Learning
                  </h6>
                  <p className="text-Para-sm md:text-Para hover:text-white">
                    Develop AI-powered chatbots for customer service and
                    support enabling clients to access financial information
                    and assistance 24/7.
                  </p>
                </motion.div>
              </div>
              <div className="flex flex-col max-w-md sm:flex-row">
                <motion.div
                  variants={fadein("left", 0.1)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.5 }}
                  className="hover:bg-violet-950 hover:text-white p-2">
                  <h6 className="mb-3 text-CardHeading-sm md:text-CardHeading font-semibold">
                    Customer Experience Enhancement
                  </h6>
                  <p className="text-Para-sm md:text-Para hover:text-white">
                    Develop mobile banking applications and online platforms
                    with intuitive user interfaces for seamless customer
                    interactions.
                  </p>
                </motion.div>
              </div>
            </div>
            <div className="md:space-y-6 space-y-3 sm:px-16">
              <div className="flex flex-col max-w-md sm:flex-row">
                <motion.div
                  variants={fadein("right", 0.1)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.5 }}
                  className="hover:bg-violet-950 hover:text-white p-2 ">
                  <h6 className="mb-3 text-CardHeading-sm md:text-CardHeading font-semibold">
                    Blockchain Technology
                  </h6>
                  <p className="text-Para-sm md:text-Para hover:text-white">
                    Implement blockchain technology for enhancing the security
                    and efficiency of cross-border payments and remittances.
                  </p>
                </motion.div>
              </div>
              <div className="flex flex-col max-w-md sm:flex-row">
                <motion.div
                  variants={fadein("right", 0.1)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.5 }}
                  className="hover:bg-violet-950 hover:text-white p-2 ">
                  <h6 className="mb-3 text-CardHeading-sm md:text-CardHeading font-semibold">
                    Customer Software Development
                  </h6>
                  <p className="text-Para-sm md:text-Para hover:text-white">
                    Build custom investment management platforms for portfolio
                    analysis, risk assessment and performance tracking.
                  </p>
                </motion.div>
              </div>
              <div className="flex flex-col max-w-md sm:flex-row">
                <motion.div
                  variants={fadein("right", 0.1)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.5 }}
                  className="hover:bg-violet-950 hover:text-white p-2 ">
                  <h6 className="mb-3 text-CardHeading-sm md:text-CardHeading font-semibold">
                    Robotic Process Automation (RPA)
                  </h6>
                  <p className="text-Para-sm md:text-Para hover:text-white">
                    Streamline back-office operations and reduce operational
                    costs by deploying bots for data entry, validation and
                    reconciliation tasks.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Last Section */}
      <section className="max-w-full pt-4 pb-8 px-10 flex justify-center">
        <div className="bg-gray-200  md:w-[70%] flex flex-col  justify-between py-4 px-8">
          <div>
            <motion.h2
              variants={fadein("left", 0.1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.5 }}
              className="font-bold text-Heading-sm md:text-Heading py-2 text-blue2 text-center">
              Discover What We Can Do For You.
            </motion.h2>
            <motion.p
              variants={fadein("right", 0.1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.5 }}
              className="py-3 text-Para-sm md:text-lg text-slate-600 font-semibold text-center">
              Contact us today to discuss how we can help you to achieve your
              business goals.
            </motion.p>
          </div>
          <div className="flex items-center justify-center">
            <Button />
          </div>
        </div>
      </section>
    </>
  );
};

export default Sections;
