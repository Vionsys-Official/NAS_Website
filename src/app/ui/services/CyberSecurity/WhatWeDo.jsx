"use client";
import React from "react";
import { fadein } from "@/components/ui/variants";
import { motion } from "framer-motion";
import CheckLogo from "/public/assets/services/CyberSecurity/check.png";
import About from "/public/assets/services/CyberSecurity/about3.jpg";
import Image from "next/image";
const WhatWeDo = () => {
  return (
    <div className=" w-full flex  flex-col ">
      <div className="w-full ">
        <motion.p
          variants={fadein("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.8 }}
          className=" md:text-Heading text-Heading-sm text-blue2 font-extrabold text-center capitalize"
        >
          This is 24/7 Cyber Security Operation Center for your problem solution
        </motion.p>
      </div>
      <div className="flex md:flex-row flex-col md:gap-0 gap-6">
        <div className="md:w-1/2 w-full md:px-6 p-2 flex items-center justify-center">
          <Image src={About} alt="" className="w-full h-[80%] " />
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }} //X:100
          whileInView={{ opacity: 1, scale: 1 }} //y:100
          transition={{
            delay: 0.2,
            scale: { type: "spring", stiffness: 30 },
            opacity: { duration: 0.6 },
            ease: "easeInOut",
          }} className="md:w-1/2 w-full flex flex-wrap flex-col md:gap-4 items-center justify-center">
          <div className="flex flex-col gap-4">
            <div className="flex md:flex-row p-2 flex-col md:gap-6 gap-4">
              <div className="md:w-1/2 w-full bg-gray-100 rounded shadow-lg hover:shadow-xl transition duration-300">
                <div className="md:p-6 p-2">
                  <div className="flex items-center md:mb-4 mb-2">
                    <Image src={CheckLogo} alt="" className="w-7 h-7 mr-2" />
                    <div className="font-bold md:text-CardHeading text-CardHeading-sm text-black">
                      Identifying Threats
                    </div>
                  </div>
                  <p className="text-gray-800 md:text-Para text-Para-sm">
                    Our company specializes in identifying threats by employing
                    advanced monitoring techniques and proactive security
                    measures ensuring comprehensive protection for our clients
                    digital assets
                  </p>
                </div>
              </div>
              <div className="md:w-1/2 w-full  bg-gray-100  rounded overflow-hidden shadow-lg hover:shadow-xl transition duration-300">
                <div className="md:p-6 p-2">
                  <div className="flex items-center md:mb-4 mb-2">
                    <Image src={CheckLogo} alt="" className="w-7 h-7 mr-2" />
                    <div className="font-bold md:text-CardHeading text-CardHeading-sm text-black">
                      Security Management
                    </div>
                  </div>
                  <p className="text-gray-800 md:text-Para text-Para-sm">
                    Our company specializes in Security Management offering
                    comprehensive solutions for safeguarding digital assets
                    through proactive monitoring and strategic security measures
                  </p>
                </div>
              </div>
            </div>
            <div className="flex md:flex-row p-2 flex-col md:gap-6 gap-4">
              <div className="md:w-1/2 w-full bg-gray-100 rounded shadow-lg hover:shadow-xl transition duration-300">
                <div className="md:p-6 p-2">
                  <div className="flex items-center md:mb-4 mb-2">
                    <Image src={CheckLogo} alt="" className="w-7 h-7 mr-2" />
                    <div className="font-bold md:text-CardHeading text-CardHeading-sm text-black">
                      Security Services
                    </div>
                  </div>
                  <p className="text-gray-800 md:text-Para text-Para-sm">
                    Our company specializes in Security Management offering
                    comprehensive solutions for safeguarding digital assets
                    through proactive monitoring and strategic security measures
                  </p>
                </div>
              </div>
              <div className="md:w-1/2 w-full  bg-gray-100  rounded overflow-hidden shadow-lg hover:shadow-xl transition duration-300">
                <div className="md:p-6 p-2">
                  <div className="flex items-center md:mb-4 mb-2">
                    <Image src={CheckLogo} alt="" className="w-7 h-7 mr-2" />
                    <div className="font-bold md:text-CardHeading text-CardHeading-sm text-black">
                      Industry Certified
                    </div>
                  </div>
                  <p className="text-gray-800 md:text-Para text-Para-sm">
                    Our company specializes in Security Management offering
                    comprehensive solutions for safeguarding digital assets
                    through proactive monitoring and strategic security measures
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default WhatWeDo;
