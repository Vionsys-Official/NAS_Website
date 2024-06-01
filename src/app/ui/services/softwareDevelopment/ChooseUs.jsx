"use client";
import React from "react";
import { fadein } from "@/components/ui/variants";
import { motion } from "framer-motion";

const ChooseUs = () => {
  const select = [
    {
      id: 1,
      title: "Expertise and Experience",
      para: "Our seasoned developers and IT professionals bring extensive industry knowledge, having successfully delivered numerous software solutions across various sectors.",
    },
    {
      id: 2,
      title: "Custom Solutions Tailored to Your Needs",
      para: "We provide bespoke software solutions tailored to your specific business goals, ensuring maximum value and ROI.",
    },
    {
      id: 3,
      title: "Cutting-Edge Technologies",
      para: "We leverage the latest technologies like AI, machine learning, blockchain and cloud computing to build innovative and efficient solutions.",
    },
    {
      id: 4,
      title: "Agile Development Methodology",
      para: "Our agile process promotes flexibility, transparency and collaboration, delivering high-quality software on time and within budget.",
    },
    {
      id: 5,
      title: "Rigorous Quality Assurance",
      para: " We employ comprehensive testing and QA processes to ensure reliable, secure and seamless software performance.",
    },
    {
      id: 6,
      title: "End-to-End Service",
      para: "We offer a complete range of services from consultation to support, managing all aspects of software development.",
    },
    {
      id: 7,
      title: "Client-Centric Approach",
      para: "We prioritize exceptional customer service and clear communication, focusing on long-term partnerships and client satisfaction.",
    },
    {
      id: 8,
      title: "Scalable and Future-Proof Solutions",
      para: "Our solutions are designed to scale and adapt to evolving business needs, ensuring competitiveness and future growth.",
    },
    {
      id: 9,
      title: "Proven Track Record",
      para: "Our portfolio of successful projects and client testimonials highlights our ability to deliver exceptional results.",
    },
  ];
  return (
    <div className="px-4 md:pt-28 pt-14 pb-7 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <motion.div
        variants={fadein("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0.8 }}
        className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12"
      >
        <h2 className="max-w-lg mb-6 md:text-Heading text-Heading-sm font-bold leading-none tracking-tight text-blue950 sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              className="absolute text-center top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-50 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
            >
              <defs>
                <pattern
                  id="fdca20a0-aeb4-4caf-ba1b-4351eee42363"
                  x="0"
                  y="0"
                  width=".135"
                  height=".30"
                >
                  <circle cx="1" cy="1" r=".7" />
                </pattern>
              </defs>
              <rect
                fill="url(#fdca20a0-aeb4-4caf-ba1b-4351eee42363)"
                width="52"
                height="24"
              />
            </svg>
            <span className="relative">Why</span>
          </span>{" "}
          Choose Us for Your Software Development Needs?
        </h2>
        <p className="text-para-sm text-center md:text-para">
          We understand that choosing the right partner for software development
          is crucial to your business success. Here are compelling reasons:
        </p>
      </motion.div>
      <div className="grid max-w-md md:gap-8 gap-2 row-gap-10 sm:mx-auto lg:max-w-full lg:grid-cols-3 ">
        {select.map((item) => (
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }} //X:100
            whileInView={{ opacity: 1, scale: 1 }} //y:100
            viewport={{ once: true }}
            transition={{
              delay: 0.2,
              scale: { type: "spring", stiffness: 30 },
              opacity: { duration: 0.6 },
              ease: "easeInOut",
            }}
            key={item.id}
            className="flex flex-col items-center sm:flex-row"
          >
            <div className="sm:mr-4">
              <div className="flex items-center justify-center w-10 h-10 md:mb-4 mb-2 rounded-full bg-indigo-50">
                <svg
                  className="w-8 h-8 text-blue950"
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
            </div>
            <div>
              <h6 className="mb-2 md:text-lg text-base text-center font-semibold leading-5">
                {item.title}
              </h6>
              <p className="mb-3 text-center md:text-base text-sm text-gray-900">
                {item.para}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ChooseUs;
