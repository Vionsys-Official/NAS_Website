"use client";
import { fadein } from "@/components/ui/variants";
import { motion } from "framer-motion";
import React from "react";
import { SiSololearn, SiZend } from "react-icons/si";
import { FaBookBookmark } from "react-icons/fa6";
import { FaLaptopCode } from "react-icons/fa";
import { FaBuildingShield } from "react-icons/fa6";
import { HiAcademicCap } from "react-icons/hi";
import { SiIota } from "react-icons/si";
import Link from "next/link";

const features = [
  {
    icon: <FaBookBookmark />,
    title: "Learning Management System",
    desc: "Our Learning Management System (LMS) is designed to revolutionize the educational experience. With an intuitive interface, it streamlines course creation, content delivery, and student assessment. ",
  },
  {
    icon: <SiSololearn />,
    title: "Virtual Classroom Solutions",
    desc: "Our Virtual Classroom Studios bring the dynamism of in-person learning to the digital space. Equipped with state-of-the-art technology, they offer live, interactive classes where students and teachers can collaborate in real-time.",
  },
  {
    icon: <FaLaptopCode />,
    title: "Educational software development",
    desc: "We specialize in creating custom software solutions that enhance learning experiences and streamline educational processes. From interactive e-learning platforms and mobile apps to comprehensive school management systems.",
  },
  {
    icon: <FaBuildingShield />,
    title: "Infrastructure setup and management",
    desc: "Our expertise ensures that educational facilities are equipped with reliable, high-performance infrastructure, enabling smooth operation and connectivity. By partnering with us, institutions can focus on their core mission of education.",
  },
  {
    icon: <HiAcademicCap />,
    title: "IT training and workshop",
    desc: "Our IT Training and Workshops are designed to empower educators and administrators with the skills they need to excel in a technology-driven world. We offer a range of comprehensive training programs, from basic IT skills to advanced software and system management.",
  },
  {
    icon: <SiIota />,
    title: "IOT Solutions",
    desc: " We enhance the efficiency and effectiveness of educational institutions. Our solutions include smart classrooms, automated attendance systems, and energy management, all designed to create a seamless and interactive learning experience.",
  },
];
const Edusecond = () => {
  return (
    <>
      <div>
        {/* Our expertise */}
        <div className="px-4 md:py-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
          <div className="md:w-[80vw] shadow-md bg-slate-100 sm:text-center sm:mx-auto rounded-md bg-transparent">
            <Link
              href="/"
              aria-label="View"
              className="inline-block mb-5 rounded-full sm:mx-auto"
            ></Link>
            <motion.h2
              variants={fadein("right", 0.1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.5 }}
              className="text-center text-2xl md:text-4xl lg:text-5xl font-bold tracking-tight text-blue-900 sm:leading-tight"
            >
              Our Expertise in Education
            </motion.h2>
            <motion.p
              variants={fadein("left", 0.1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.5 }}
              className="text-base text-gray-700  text-center md:text-lg p-4 sm:px-6 md:px-8"
            >
              We leverage the latest pedagogical research and cutting-edge
              technology to foster an engaging and inclusive environment,
              ensuring every student achieves their fullest potential. Our
              expertise spans a wide range of educational services, from
              personalized tutoring and professional development to
              comprehensive academic programs, all designed to inspire a
              lifelong love of learning.
            </motion.p>
            <hr className="w-full border-gray-300" />
          </div>
        </div>
      </div>

      <section>
        {/* Our comprehensive services section */}
        <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
          <div className="relative max-w-2xl mx-auto sm:text-center">
            <div className="relative z-10">
              <h3 className="text-blue-900 text-3xl font-bold sm:text-4xl text-center">
                Our Comprehensive Educational Services
              </h3>
            </div>
          </div>
          <div className="relative py-5">
            <motion.ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 bg-[rgba(101,227,131,0.5)] p-8 shadow-2xl text-center">
              {features.map((item, idx) => (
                <motion.li
                  whileHover={{ scale: 1.1, delay: 2000 }}
                  onHoverStart={(e) => {}}
                  onHoverEnd={(e) => {}}
                  key={idx}
                  className="bg-white space-y-3 p-4 border-r-4 border-blue-900  rounded-lg"
                >
                  <div className="text-indigo-600 flex justify-center items-center  size-5">
                    {item.icon}
                  </div>
                  <h4 className="text-lg text-gray-800 font-semibold ">
                    {item.title}
                  </h4>
                  <p>{item.desc}</p>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Edusecond;
