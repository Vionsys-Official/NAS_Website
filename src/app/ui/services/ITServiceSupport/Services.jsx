"use client";
import React from "react";
import { fadein } from "@/components/ui/variants";
import { motion } from "framer-motion";
import HelpDeskSupport from "/public/assets/services/ITServiceSupport/helpdesksupport.jpg";
import networkManagement from "/public/assets/services/ITServiceSupport/NetworkManagement.jpg";
import ITConsulting from "/public/assets/services/ITServiceSupport/ITConsulting.jpg";
import ComplianceSupport from "/public/assets/services/ITServiceSupport/Compliance.jpg";
import RemoteWorkSolutions from "/public/assets/services/ITServiceSupport/RemoteWork.jpg";
import SoftwareSupport from "/public/assets/services/ITServiceSupport/SoftwareSupport.jpg";
import Image from "next/image";
const Services = () => {
  return (
    <div className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-16 md:py-4 py-4 flex ">
      <div className="w-full flex flex-col md:gap-10 gap-6">
        <motion.div
          variants={fadein("down2", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.8 }}
          className="w-full flex items-center justify-center"
        >
          <h1 className="md:text-Heading text-Heading-sm font-extrabold text-blue2">
            Our Services
          </h1>
        </motion.div>
        <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
          <motion.div
            variants={fadein("down2", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.8 }}
            className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm hover:bg-slate-100"
          >
            <Image
              src={HelpDeskSupport}
              alt=""
              className="object-cover w-full md:h-64 h-52"
            />
            <div className="md:p-5 p-2 border border-t-0">
              <p className="text-blackmb-3 md:text-CardHeading text-CardHeading-sm font-semibold tracking-wide ">
                24/7 Help Desk Support
              </p>
              <p className="mb-2 md:text-Para text-Para-sm text-gray-800">
                Our 24/7 help desk offers immediate assistance for software
                glitches, hardware malfunctions and connectivity issues. Our
                experienced technicians swiftly resolve problems to ensure
                continuous business operations.
              </p>
            </div>
          </motion.div>
          <motion.div
            variants={fadein("down2", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.8 }}
            className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm hover:bg-slate-100"
          >
            <Image
              src={networkManagement}
              alt=""
              className="object-cover w-full md:h-64 h-52"
            />

            <div className="md:p-5 p-2 border border-t-0">
              <p className="text-blackmb-3 md:text-CardHeading text-CardHeading-sm font-semibold tracking-wide ">
                Network Management
              </p>
              <p className="mb-2 md:text-Para text-Para-sm text-gray-800">
                We offer comprehensive network management with real-time
                monitoring, performance optimization and security enhancements.
                Our proactive approach ensures your IT infrastructure remains
                robust, efficient, scalable and secure.
              </p>
            </div>
          </motion.div>
          <motion.div
            variants={fadein("down2", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.8 }}
            className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm hover:bg-slate-100"
          >
            <Image
              src={ITConsulting}
              alt=""
              className="object-cover w-full md:h-64 h-52"
            />
            <div className="md:p-5 p-2 border border-t-0">
              <p className="text-blackmb-3 md:text-CardHeading text-CardHeading-sm font-semibold tracking-wide">
                IT Consulting
              </p>
              <p className="mb-2  md:text-Para text-Para-sm text-gray-800">
                Transform your IT strategy with our expert consulting services.
                We provide in-depth assessments, strategic planning and
                technology roadmaps to align your IT initiatives with your
                business goals ensuring maximum value.
              </p>
            </div>
          </motion.div>
        </div>
        <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
        <motion.div
            variants={fadein("down2", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.8 }}
            className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm hover:bg-slate-100"
          >            <Image
              src={RemoteWorkSolutions}
              alt=""
              className="object-cover w-full md:h-64 h-52"
            />

            <div className="md:p-5 p-2 border border-t-0">
              <p className="text-blackmb-3 md:text-CardHeading text-CardHeading-sm font-semibold tracking-wide ">
                Remote Workforce Solutions
              </p>
              <p className="mb-2 md:text-Para text-Para-sm text-gray-800">
                Empower your remote workforce with our specialized support
                services. We offer secure remote access solutions, advanced
                collaboration tools and comprehensive remote IT support. Our
                services ensure your team can work efficiently, securely and
                seamlessly from any location.
              </p>
            </div>
          </motion.div>
          <motion.div
            variants={fadein("down2", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.8 }}
            className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm hover:bg-slate-100"
          >
            <Image
              src={SoftwareSupport}
              className="object-cover w-full md:h-64 h-52"
              alt=""
            />
            <div className="md:p-5 p-2 border border-t-0">
              <p className="text-blackmb-3 md:text-CardHeading text-CardHeading-sm font-semibold tracking-wide">
                {" "}
                Software Support and Maintenance
              </p>
              <p className="mb-2 md:text-Para text-Para-sm text-gray-800">
                Keep your software applications running at peak performance with
                our support and maintenance services. We provide regular
                updates, patches and performance tuning to ensure your software
                remains secure, reliable and efficient.
              </p>
            </div>
          </motion.div>
          <motion.div
            variants={fadein("down2", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.8 }}
            className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm hover:bg-slate-100"
          >            
          <Image
              src={ComplianceSupport}
              alt=""
              className="object-cover w-full md:md:h-64 h-52"
            />
            <div className="md:p-5 p-2 border border-t-0">
              <p className="text-blackmb-3 md:text-CardHeading text-CardHeading-sm font-semibold tracking-wide ">
                Compliance and Regulatory Support
              </p>
              <p className="mb-2 md:text-Para text-Para-sm text-gray-800">
                Navigate the complexities of IT compliance with our specialized
                support. We help you adhere to industry regulations and
                standards, conduct compliance audits and implement necessary
                controls to protect your business from regulatory risks.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Services;
