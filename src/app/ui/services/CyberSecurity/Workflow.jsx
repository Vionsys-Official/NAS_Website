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
        "Catalog all critical hardware, software, data and personnel.",
    },
    {
      id: 2,
      title: "Assess Vulnerabilities",
      description: "Identify weaknesses that could be exploited by threats.",
    },
    {
      id: 3,
      title: "Identify Threats",
      description:
        "Recognize potential threats like malware, phishing and insider attacks.",
    },
    {
      id: 4,
      title: "Analyze Risks",
      description:
        "Evaluate the potential impact and likelihood of threats exploiting vulnerabilities.",
    },
    {
      id: 5,
      title: "Implement Continuous Monitoring",
      description: "Monitor systems in real-time for security events.",
    },
    {
      id: 6,
      title: "Develop Risk Mitigation Strategies",
      description: "Create plans to reduce identified risks.",
    },
    {
      id: 7,
      title: "Prepare an Incident Response Team",
      description: "Establish a team to respond to security incidents.",
    },
    {
      id: 8,
      title: "Recover Systems & Data",
      description: "Restore affected systems and data to normal operations.",
    },
    {
      id: 9,
      title: "Ensure Regulatory Compliance",
      description: "Meet relevant laws, regulations and standards.",
    },
    {
      id: 10,
      title: "Establish Security Policies",
      description:
        "Define rules for acceptable use, access controls and data protection.",
    },
  ];

  return (
    <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10">
      <motion.div
        variants={fadein("up", 0.1)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0.8 }} className="max-w-xl mb-10 md:mx-auto flex flex-col justify-center items-center text-center lg:max-w-3xl md:mb-6">
        <h2
          className="flex max-w-xl mb-6 md:text-Heading text-Heading-sm font-extrabold leading-none tracking-tight text-blue2 capitalize"
        >
          <span className="relative inline-block"></span> Workflow of Cyber
          Security
        </h2>
        <p className=" text-slate-600 text-lg font-semibold">
          Discover comprehensive Cyber Security Solutions tailored to your
          needs, fortifying your defenses and shielding your organization from
          evolving threats
        </p>
      </motion.div>
      <div className="relative grid gap-8 row-gap-5 mb-8 md:row-gap-8 md:grid-cols-4 sm:grid-cols-2 py-4 px-6">
        <div className="absolute inset-0 flex items-center justify-center sm:hidden lg:flex">
          
        </div>
        {sections.map((item) => (
          <motion.div
            variants={fadein("up", 0.1)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.8 }}
            key={item.id}
            className="p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2"
          >
            <div className="flex items-center justify-between mb-2">
              <p className="md:text-CardHeading text-CardHeading-sm font-bold leading-5">
                {item.title}
              </p>
            </div>
            <p className="md:text-Para text-Para-sm text-gray-800">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Workflow;
