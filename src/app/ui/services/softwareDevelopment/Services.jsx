"use client";
import Image from "next/image";
import React from "react";
import { fadein } from "@/components/ui/variants";
import { motion } from "framer-motion";
import SoftDev2 from "/public/assets/services/SoftDev/SoftDev2.jpeg";

const serve = [
  {
    id: 1,
    title: "Custom Software Development",
    para: "Tailored solutions meeting unique business requirements with a focus on robustness, scalability and security.",
  },
  {
    id: 2,
    title: "Mobile App Development",
    para: "Covering iOS, Android and cross-platform development to reach a wide audience.",
  },
  {
    id: 3,
    title: "Software Integration",
    para: "Connecting disparate systems and applications for improved efficiency and data flow.",
  },
  {
    id: 5,
    title: "Enterprise Software Solutions",
    para: "Enhancing business operations through ERP, CRM, supply chain management and business intelligence systems.",
  },
  {
    id: 8,
    title: "Emerging Technologies",
    para: "Staying ahead with AI, ML, blockchain, IoT, AR and VR applications for various industries.",
  },
];

const Services = () => {
  return (
    <section className="py-6">
      <div className="md:px-6 px-2 mx-auto">
        <div className="lg:flex lg:items-center">
          <motion.div
            variants={fadein("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.8 }}
            className="w-full space-y-6 lg:w-1/2 "
          >
            <div>
              <h1 className="md:text-Heading text-Heading-sm font-extrabold text-blue2 capitalize">
                Our Software Development Services
              </h1>

              <div className="">
                <span className="inline-block w-40 h-1 rounded-full bg-blue5"></span>
                <span className="inline-block w-3 h-1 ml-1 rounded-full bg-blue5"></span>
                <span className="inline-block w-1 h-1 ml-1 rounded-full bg-blue5"></span>
              </div>
            </div>

            {serve.map((item) => (
              <div key={item.id} className="md:flex md:items-start">
                <span className="inline-block p-2 rounded-xl md:mx-4 text-white bg-blue2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                    />
                  </svg>
                </span>

                <div className="">
                  <h1 className="md:text-lg text-base font-semibold text-black hover:text-blue2 capitalize">
                    {item.title}
                  </h1>

                  <p className="text-gray-800 md:text-para text-Para-sm">
                    {item.para}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>

          <div className="hidden lg:flex lg:items-center lg:w-1/2 lg:justify-center">
            <Image
              className="w-[34rem] h-[28rem] object-cover xl:w-[36rem] xl:h-[28rem] rounded-full"
              src={SoftDev2}
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
