"use client";
import React from "react";
import { fadein } from "@/components/ui/variants";
import { motion } from "framer-motion";
const Workflow = () => {
  const sections = [
    {
      id: 1,
      title: "Identify Assets",
      description:
        "Catalog all critical hardware, software, data, and personnel.",
    },
    {
      id: 2,
      title: "Identify Threats",
      description:
        "Recognize potential threats like malware, phishing, and insider attacks.",
    },
    {
      id: 3,
      title: "Assess Vulnerabilities",
      description: "Identify weaknesses that could be exploited by threats.",
    },
    {
      id: 4,
      title: "Analyze Risks",
      description:
        "Evaluate the potential impact and likelihood of threats exploiting vulnerabilities.",
    },
    {
      id: 5,
      title: "Develop Risk Mitigation Strategies",
      description: "Create plans to reduce identified risks.",
    },
    {
      id: 6,
      title: "Establish Security Policies",
      description:
        "Define rules for acceptable use, access controls, and data protection.",
    },
    {
      id: 7,
      title: "Implement Continuous Monitoring",
      description: "Monitor systems in real-time for security events.",
    },
    {
      id: 8,
      title: "Prepare an Incident Response Team",
      description: "Establish a team to respond to security incidents.",
    },
    {
      id: 9,
      title: "Recover Systems and Data",
      description: "Restore affected systems and data to normal operations.",
    },
    {
      id: 10,
      title: "Ensure Regulatory Compliance",
      description: "Meet relevant laws, regulations, and standards.",
    },
  ];
  return (
    <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10">
      <div className="max-w-xl mb-10 md:mx-auto flex flex-col justify-center items-center text-center lg:max-w-2xl md:mb-6">
        <motion.h2
          variants={fadein("up", 0.1)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.8 }}
          className="flex max-w-lg mb-6 font-sans md:text-Heading text-Heading-sm font-bold leading-none tracking-tight text-gray-900 "
        >
          <span className="relative inline-block"></span> Workflow of Cyber
          Security
        </motion.h2>
        <p className=" text-gray-700 md:text-Para text-Para-sm">
          Discover comprehensive Cyber Security Solutions tailored to your
          needs, fortifying your defenses and shielding your organization from
          evolving threats
        </p>
      </div>
      <div className="relative grid gap-8 row-gap-5 mb-8 md:row-gap-8 md:grid-cols-4 sm:grid-cols-2 py-4 px-6">
        <div className="absolute inset-0 flex items-center justify-center sm:hidden lg:flex">
          <div className="w-px h-full bg-gray-300 lg:w-full lg:h-px" />
        </div>
        {sections.map((item) => (
          <div
            key={item.id}
            className="p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2"
          >
            <div className="flex items-center justify-between mb-2">
              <p className="md:text-CardHeading text-CardHeading-sm font-bold leading-5">
                {item.title}
              </p>
            </div>
            <p className="md:text-Para text-Para-sm text-gray-900">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Workflow;
