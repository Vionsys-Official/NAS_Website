'use client'
import React from 'react'
import { motion } from 'framer-motion';

const HowWeBuild = () => {
  const sections = [
    {
      id: 1,
      number: "01",
      title: "Brainstorming and Prioritizing Data Sources :",
      description:
        "We proudly analyze your pain points and goals in order to define which data should be collected for you to make well-informed business decisions.",
    },
    {
      id: 2,
      number: "02",
      title: "Choosing Data Models and Setting Up Analytics:",
      description:
        "For each specific case, we choose the most fitting analytical approaches that help us derive meaningful insights from the data collected.",
    },
  ];
  return (
    <div className="w-full ">
      <div className="flex justify-center items-center md:px-10 px-2 md:py-10 py-4">
        <h1 className="md:text-Heading text-Heading-sm font-extrabold text-blue2 capitalize">
          How we build a Big Data Strategy for your business:
        </h1>
      </div>
      <div className="relative flex md:flex-row flex-col md:gap-8 gap-3 row-gap-5  md:row-gap-8 py-4 md:px-40 px-2">
        <div className="absolute inset-0 flex items-center justify-center sm:hidden lg:flex">
          <div className="md:w-px w-full md:h-full" />
        </div>
        {sections.map((item) => (
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }} //X:100
            whileInView={{ opacity: 1, scale: 1 }} //y:100
            transition={{
              delay: 0.2,
              scale: { type: "spring", stiffness: 30 },
              opacity: { duration: 0.6 },
              ease: "easeInOut",
            }}
            key={item.id}
            className="p-5 duration-300 transform bg-slate-50 border rounded-xl shadow-sm hover:-translate-y-2"
          >
            <div className="flex flex-col items-start  ">
              <p className="md:text-lg text-base ">{item.number}</p>
              <p className="md:text-SubHeading text-SubHeading-sm font-semibold text-black py-4">
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

export default HowWeBuild;
