"use client";
import { fadein } from "@/components/ui/variants";
import { motion } from "framer-motion";
import React from "react";
const Tools = () => {
  return (
    <div className="px-4 py-3 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 md:py-6">
      <div className="max-w-xl mb-6 md:mx-auto sm:text-center lg:max-w-2xl md:mb-6">
        <motion.h2
          variants={fadein("left", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.8 }}
          className="max-w-lg md:text-Heading text-Heading-sm font-extrabold leading-none tracking-tight text-blue2  md:mx-auto"
        >
          Product Development Tools
        </motion.h2>
      </div>
      <motion.div
              initial={{ opacity: 0, scale: 0.7 }} //X:100
              whileInView={{ opacity: 1, scale: 1 }} //y:100
              transition={{
                delay: 0.2,
                scale: { type: "spring", stiffness: 30 },
                opacity: { duration: 0.6 },
                ease: "easeInOut",
              }} className="grid gap-3 mb-8 md:grid-cols-2 lg:grid-cols-3">
        <div className="p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2 flex flex-col gap-2">
          <h6 className="mb-2 font-semibold leading-5 md:text-CardHeading text-CardHeading-sm">
            Project Management & Collaboration
          </h6>
          <h2 className="md:text-Para text-Para-sm pl-4 text-gray-800">
            1. Jira{" "}
          </h2>
          <h2 className="md:text-Para text-Para-sm pl-4 text-gray-800">
            2. Trello{" "}
          </h2>
          <h2 className="md:text-Para text-Para-sm pl-4 text-gray-800">
            3. Asana{" "}
          </h2>
          <h2 className="md:text-Para text-Para-sm pl-4 text-gray-800">
            4. Microsoft Teams
          </h2>
        </div>
        <div className="p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2 flex flex-col gap-2">
          <h6 className="mb-2 font-semibold leading-5 md:text-CardHeading text-CardHeading-sm">
            Design and Prototyping
          </h6>
          <h2 className="md:text-Para text-Para-sm pl-4 text-gray-800">
            1. Figma{" "}
          </h2>
          <h2 className="md:text-Para text-Para-sm pl-4 text-gray-800">
            2. Sketch{" "}
          </h2>
          <h2 className="md:text-Para text-Para-sm pl-4 text-gray-800">
            3. Adobe XD{" "}
          </h2>
          <h2 className="md:text-Para text-Para-sm pl-4 text-gray-800">
            4. InVision
          </h2>
        </div>
        <div className="p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2 flex flex-col gap-2">
          <h6 className="mb-2 font-semibold leading-5 md:text-CardHeading text-CardHeading-sm">
            Version Control and Code Management
          </h6>
          <h2 className="md:text-Para text-Para-sm pl-4 text-gray-800">
            1. GitHub{" "}
          </h2>
          <h2 className="md:text-Para text-Para-sm pl-4 text-gray-800">
            2. GitLab{" "}
          </h2>
          <h2 className="md:text-Para text-Para-sm pl-4 text-gray-800">
            3. BitBucket{" "}
          </h2>
        </div>
        <div className="p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2 flex flex-col gap-2">
          <h6 className="mb-2 font-semibold leading-5 md:text-CardHeading text-CardHeading-sm">
            Development Environments
          </h6>
          <h2 className="md:text-Para text-Para-sm pl-4 text-gray-800">
            1. Visual Studio Code{" "}
          </h2>
          <h2 className="md:text-Para text-Para-sm pl-4 text-gray-800">
            2. IntelliJ IDEA{" "}
          </h2>
          <h2 className="md:text-Para text-Para-sm pl-4 text-gray-800">
            3. PyCharm{" "}
          </h2>
        </div>
        <div className="p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2 flex flex-col gap-2">
          <h6 className="mb-2 font-semibold leading-5 md:text-CardHeading text-CardHeading-sm">
            Continuous Integration and Continuous Deployment (CI/CD)
          </h6>
          <h2 className="md:text-Para text-Para-sm pl-4 text-gray-800">
            1. Github Actions{" "}
          </h2>
          <h2 className="md:text-Para text-Para-sm pl-4 text-gray-800">
            2. CircleCI{" "}
          </h2>
          <h2 className="md:text-Para text-Para-sm pl-4 text-gray-800">
            3. Travis CI
          </h2>
        </div>
        <div className="p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2 flex flex-col gap-2">
          <h6 className="mb-2 font-semibold leading-5 md:text-CardHeading text-CardHeading-sm">
            Testing and Quality Assurance
          </h6>
          <h2 className="md:text-Para text-Para-sm pl-4 text-gray-800">
            1. Selenium{" "}
          </h2>
          <h2 className="md:text-Para text-Para-sm pl-4 text-gray-800">
            2. JUnit{" "}
          </h2>
          <h2 className="md:text-Para text-Para-sm pl-4 text-gray-800">
            3. Jest
          </h2>
        </div>
      </motion.div>
    </div>
  );
};
export default Tools;
