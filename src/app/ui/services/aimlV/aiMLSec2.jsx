"use client"
import React from 'react';
import { MdOnlinePrediction, MdMessage, MdSmartButton } from 'react-icons/md';
import { RiAiGenerate, RiRobot2Fill } from 'react-icons/ri';
import { GiProtectionGlasses } from 'react-icons/gi';
import { motion } from 'framer-motion';
import { fadein } from '@/components/ui/variants';

const mysect2 = [
    {
      id: 1,
      icon: MdOnlinePrediction,
      title: "Predictive Analytics",
      description:
        "Drive informed decision-making and maximize ROI through strategic resource allocation facilitated.",
    },
    {
      id: 2,
      icon: MdMessage,
      title: "Virtual Assistants",
      description:
        "Enhance productivity and efficiency while safeguarding your digital assets with cutting-edge monitoring.",
    },
    {
      id: 3,
      icon: MdSmartButton,
      title: "Machine Learning",
      description:
        "Leverage advanced algorithms and data analysis techniques to establish a scalable foundation.",
    },
    {
      id: 4,
      icon: RiAiGenerate,
      title: "Generative AI",
      description:
        "Ensure operational continuity with secure and configuration management powered by generative AI.",
    },
    {
      id: 5,
      icon: GiProtectionGlasses,
      title: "Computer Vision",
      description:
        "Optimize governance & streamline operations with robust collaboration and communication tools.",
    },
    {
      id: 6,
      icon: RiRobot2Fill,
      title: "AI Robotics",
      description:
        "Transform operations with proactive insights and performance management capabilities enabled.",
    },
  ];
  
const aiMlSec2 = () => {
  return (
    <section className='py-4'>
    {/* section 2 */}
    <motion.div
     variants={fadein("up", 0.1)}
     initial="hidden"
     whileInView={"show"}
     viewport={{ once: true, amount: 0.5 }}
    className="mx-auto py-2 flex max-w-[58rem] flex-col items-center space-y-4 text-center">

      <h2 className="font-extrabold text-Heading-sm text-blue2 leading-[1.1] md:text-Heading">Features</h2>

      <p className="md:max-w-[85%] leading-normal text-lg font-semibold text-slate-600 sm:leading-7">
        Discover the amazing features offered by us to enhance your online presence.
      </p>

    </motion.div>

    <section className="py-4 md:py-2 mt-2 md:mt-0 flex items-center justify-center flex-col">
      <div className="md:w-[90%] w-full grid items-center justify-center gap-4 md:gap-10 sm:grid-cols-2 lg:grid-cols-3 p-2">
        {mysect2.map((feat) => (
          <div
            key={feat.id}
            className="border-2 border-gray-400 relative hover:cursor-pointer hover:scale-105 transition-all overflow-hidden rounded-lg bg-background p-2"
          >
            <div className="flex flex-col justify-center items-center rounded-md p-1">
              <div className='text-Heading p-2 rounded-full bg-gray-200 text-green1'><feat.icon /></div>
              <div className="md:space-y-2 flex flex-col items-center justify-center w-[16rem] sm:w-full">
                <h3 className="text-xl md:text-2xl text-slate-800 font-semibold">{feat.title}</h3>
                <p className="text-sm md:text-md text-center p-2 text-muted-foreground">
                  {feat.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  </section>
  )
}

export default aiMlSec2