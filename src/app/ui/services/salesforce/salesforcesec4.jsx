"use client";
import React from "react";
import { fadein } from "@/components/ui/variants";
import { motion } from "framer-motion";
import { FaCloud } from "react-icons/fa6";

const salesforcesec4 = () => {
  return (
    <section>
      <div className="md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadein("down", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.8 }}
            className="lg:text-center"
          >
            <p className="md:font-Heading mt-2 md:text-Heading text-Heading-sm leading-8 font-extrabold tracking-tight text-blue2 capitalize">
              Transform Your Business with Salesforce Cloud
            </p>
          </motion.div>

          <div className="md:mt-16 mt-4">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              <div className="relative duration-300  transform  hover:-translate-y-2">
                <dt>
                  <FaCloud className="absolute top-0 left-0 mt-1 ml-1 text-2xl text-blue-600" />
                  <p className="ml-16 md:text-center text-start md:text-SubHeading text-xl leading-6 font-bold text-gray-700">
                    Sales Cloud
                  </p>
                </dt>
                <dd className="mt-2 md:ml-16 text-base text-center px-2 text-gray-800">
                  Transform your sales process with Sales Cloud, a comprehensive
                  sales CRM platform that empowers your team to sell smarter and
                  faster. From lead management to pipeline forecasting, Sales
                  Cloud provides the tools you need to close deals and drive
                  revenue.
                </dd>
              </div>

              <div className="relative duration-300 transform hover:-translate-y-2">
                <dt>
                  <FaCloud className="absolute top-0 left-0 mt-1 ml-1 text-2xl text-blue-600" />
                  <p className="ml-16 md:text-center text-start md:text-SubHeading text-xl leading-6 font-bold text-gray-700">
                    Marketing Cloud
                  </p>
                </dt>
                <dd className="mt-2 md:ml-16 text-base text-center px-2 text-gray-800">
                  {" "}
                  Engage customers at every touchpoint with Marketing Cloud.
                  This integrated marketing platform allows you to create
                  personalized, data-driven marketing campaigns, automate
                  customer journeys and measure the impact of your marketing
                  efforts.
                </dd>
              </div>
              <div className="relative duration-300 transform hover:-translate-y-2">
                <dt>
                  <FaCloud className="absolute top-0 left-0 mt-1 ml-1 text-2xl text-blue-600" />
                  <p className="ml-16 md:text-center text-start md:text-SubHeading text-xl leading-6 font-bold text-gray-700">
                    Platform and App Cloud
                  </p>
                </dt>
                <dd className="mt-2 md:ml-16 text-base text-center px-2 text-gray-800">
                  {" "}
                  Customize and extend Salesforce to fit your unique business
                  needs with Platform and App Cloud. Build custom applications,
                  integrate with third-party systems and extend the power of
                  Salesforce with low-code development tools.
                </dd>
              </div>
              <div className="relative duration-300 transform hover:-translate-y-2">
                <dt>
                  <FaCloud className="absolute top-0 left-0 mt-1 ml-1 text-2xl text-blue-600" />
                  <p className="ml-16 md:text-center text-start md:text-SubHeading text-xl leading-6 font-bold text-gray-700">
                    Service Cloud
                  </p>
                </dt>
                <dd className="mt-2 md:ml-16 text-center px-2 text-base text-gray-800">
                  Empower your customer service team with Service Cloud to
                  deliver unparalleled customer experiences. This robust
                  platform allows you to assist customers through various
                  channels, expedite issue resolution with AI-driven tools and
                  foster enduring customer connections.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
};

export default salesforcesec4;
