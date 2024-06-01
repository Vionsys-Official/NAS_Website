"use client";
import React from "react";
import Button from "@/components/ui/Button";
import { fadein } from "@/components/ui/variants";
import { motion } from "framer-motion";

const Sections = () => {
  return (
    <>
      {/* Section 1 */}
      <section className="w-full py-12 md:py-8 lg:py-12">
        <div className="container px-4 md:px-6">
          <div className="space-y-6">
            <div className="space-y-2 text-center">
              <motion.h2
                variants={fadein("right", 0.1)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.5 }}
                className="text-Heading-sm  font-bold tracking-tighter md:text-Heading"
              >
                How we can Help?
              </motion.h2>
              <motion.p
                variants={fadein("left", 0.1)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.5 }}
                className="mx-auto max-w-[700px] text-gray-500 text-SubHeading-sm md:text-SubHeading"
              >
                Explore how transportation technologies are transforming the IT
                industry, from fleet management and logistics optimization to
                autonomous vehicles.
              </motion.p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="rounded-lg bg-white p-6 shadow-lg dark:bg-gray-950">
                <div className="flex items-center justify-center mb-4">
                  <TruckIcon className="h-8 w-8 text-gray-500 dark:text-gray-400" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Fleet Management</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Optimize fleet operations, track vehicle performance, and
                  improve driver safety with advanced fleet management
                  technologies.
                </p>
              </div>

              <div className="rounded-lg bg-white p-6 shadow-lg dark:bg-gray-950">
                <div className="flex items-center justify-center mb-4">
                  <ShipIcon className="h-8 w-8 text-gray-500 dark:text-gray-400" />
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  Logistics Optimization
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Streamline supply chain operations, reduce costs, and improve
                  delivery times with advanced logistics optimization tools.
                </p>
              </div>

              <div className="rounded-lg bg-white p-6 shadow-lg dark:bg-gray-950">
                <div className="flex items-center justify-center mb-4">
                  <CarIcon className="h-8 w-8 text-gray-500 dark:text-gray-400" />
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  Autonomous Vehicles
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Explore the latest advancements in autonomous vehicle
                  technology and its potential impact on the IT industry.
                </p>
              </div>

              <div className="rounded-lg bg-white p-6 shadow-lg dark:bg-gray-950">
                <div className="flex items-center justify-center mb-4">
                  <MapIcon className="h-8 w-8 text-gray-500 dark:text-gray-400" />
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  Intelligent Routing
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Leverage real-time data and AI-powered algorithms to optimize
                  transportation routes and improve delivery efficiency.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section>
        <div className="px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
          {/* Heading */}
          <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
            <div>
              <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                Just do it
              </p>
            </div>
            <motion.h2
              variants={fadein("right", 0.1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.5 }}
              className="max-w-lg mb-6 font-sans text-Heading-sm font-bold text-gray-900 md:text-Heading md:mx-auto"
            >
              <span className="relative inline-block">
                <svg
                  viewBox="0 0 52 24"
                  fill="currentColor"
                  className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                >
                  <defs>
                    <pattern
                      id="a0b40128-6963-4319-aeeb-471e92fa2d74"
                      x="0"
                      y="0"
                      width=".135"
                      height=".30"
                    >
                      <circle cx="1" cy="1" r=".7" />
                    </pattern>
                  </defs>
                  <rect
                    fill="url(#a0b40128-6963-4319-aeeb-471e92fa2d74)"
                    width="40"
                    height="24"
                  />
                </svg>
                <span className="relative">Key</span>
              </span>{" "}
              Offerings
            </motion.h2>
            <motion.p
              variants={fadein("up", 0.1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.5 }}
              className="text-SubHeading-sm text-gray-700 md:text-SubHeading"
            >
              Technology plays a pivotal role in addressing the challenges faced
              by the logistics sector, driving transformation through innovative
              IT solutions.
            </motion.p>
          </div>

          {/* List */}
          <div className="max-w-lg space-y-3 sm:mx-auto lg:max-w-xl">
            <motion.div
              variants={fadein("left", 0.1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.5 }}
              className="flex items-center p-2 duration-300 transform border rounded shadow hover:scale-105 sm:hover:scale-110"
            >
              <div className="mr-2">
                <svg
                  className="w-6 h-6 text-deep-purple-accent-400 sm:w-8 sm:h-8"
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
              <span className="text-gray-800">Advanced Route Optimization</span>
            </motion.div>
            <motion.div
              variants={fadein("left", 0.1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.5 }}
              className="flex items-center p-2 duration-300 transform border rounded shadow hover:scale-105 sm:hover:scale-110"
            >
              <div className="mr-2">
                <svg
                  className="w-6 h-6 text-deep-purple-accent-400 sm:w-8 sm:h-8"
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
              <span className="text-gray-800">
                Real-Time Tracking and Monitoring
              </span>
            </motion.div>
            <motion.div
              variants={fadein("left", 0.1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.5 }}
              className="flex items-center p-2 duration-300 transform border rounded shadow hover:scale-105 sm:hover:scale-110"
            >
              <div className="mr-2">
                <svg
                  className="w-6 h-6 text-deep-purple-accent-400 sm:w-8 sm:h-8"
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
              <span className="text-gray-800">What we think, we become.</span>
            </motion.div>
            <motion.div
              variants={fadein("left", 0.1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.5 }}
              className="flex items-center p-2 duration-300 transform border rounded shadow hover:scale-105 sm:hover:scale-110"
            >
              <div className="mr-2">
                <svg
                  className="w-6 h-6 text-deep-purple-accent-400 sm:w-8 sm:h-8"
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
              <span className="text-gray-800">
                Inventory and Warehouse Management
              </span>
            </motion.div>
            <motion.div
              variants={fadein("left", 0.1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.5 }}
              className="flex items-center p-2 duration-300 transform border rounded shadow hover:scale-105 sm:hover:scale-110"
            >
              <div className="mr-2">
                <svg
                  className="w-6 h-6 text-deep-purple-accent-400 sm:w-8 sm:h-8"
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
              <span className="text-gray-800">
                Predictive Analytics and Data Insights
              </span>
            </motion.div>
            <motion.div
              variants={fadein("left", 0.1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.5 }}
              className="flex items-center p-2 duration-300 transform border rounded shadow hover:scale-105 sm:hover:scale-110"
            >
              <div className="mr-2">
                <svg
                  className="w-6 h-6 text-deep-purple-accent-400 sm:w-8 sm:h-8"
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
              <span className="text-gray-800">
                Supply Chain Visibility and Collaboration
              </span>
            </motion.div>
            <motion.div
              variants={fadein("left", 0.1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.5 }}
              className="flex items-center p-2 duration-300 transform border rounded shadow hover:scale-105 sm:hover:scale-110"
            >
              <div className="mr-2">
                <svg
                  className="w-6 h-6 text-deep-purple-accent-400 sm:w-8 sm:h-8"
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
              <span className="text-gray-800">
                IoT and Telematics Solutions
              </span>
            </motion.div>
            <motion.div
              variants={fadein("left", 0.1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.5 }}
              className="flex items-center p-2 duration-300 transform border rounded shadow hover:scale-105 sm:hover:scale-110"
            >
              <div className="mr-2">
                <svg
                  className="w-6 h-6 text-deep-purple-accent-400 sm:w-8 sm:h-8"
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
              <span className="text-gray-800">Automation and Robotics</span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Last Section */}
      <section className="max-w-full pt-4 pb-8 px-10 flex justify-center">
        <div className="bg-violet-950 text-white md:w-[70%] flex flex-col  justify-between py-4 px-8">
          <div>
            <h2 className="font-bold text-Heading-sm py-2 md:text-Heading text-center">
              Discover what we can do for you.
            </h2>
            <p className="py-3 text-Para-sm md:text-Para text-center">
              Contact us today to discuss how we can help you to achieve your
              business goals.
            </p>
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

function CarIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
      <circle cx="7" cy="17" r="2" />
      <path d="M9 17h6" />
      <circle cx="17" cy="17" r="2" />
    </svg>
  );
}

function MapIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z" />
      <path d="M15 5.764v15" />
      <path d="M9 3.236v15" />
    </svg>
  );
}

function ShipIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 21c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1 .6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />
      <path d="M19.38 20A11.6 11.6 0 0 0 21 14l-9-4-9 4c0 2.9.94 5.34 2.81 7.76" />
      <path d="M19 13V7a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v6" />
      <path d="M12 10v4" />
      <path d="M12 2v3" />
    </svg>
  );
}

function TruckIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
      <path d="M15 18H9" />
      <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14" />
      <circle cx="17" cy="18" r="2" />
      <circle cx="7" cy="18" r="2" />
    </svg>
  );
}

