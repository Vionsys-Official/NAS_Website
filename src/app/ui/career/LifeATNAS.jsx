"use client"
import React from 'react';
import inclusion from '/public/assets/career/inclusion.jpg';
import fun from '/public/assets/career/fun.jpg';
import develope from '/public/assets/career/develope.jpg';
import community from '/public/assets/career/community.jpg';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { fadein } from "@/components/ui/variants";

const LifeATNAS = () => {

  return (
    <div className='flex items-center justify-center overflow-hidden'>
    <div className='w-[90%] flex flex-col items-center justify-center font-light'>
        <motion.h1
        variants={fadein("left", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0.8 }}
         className=' text-center text-MainHeading-sm md:text-MainHeading font-semibold pt-6 cursor-pointer font-sans'>Life at NAS Infotech</motion.h1>
        <motion.p 
        variants={fadein("left", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0.8 }}
        className=' text-center text-Para-sm md:text-Para font-medium p-4 md:p-6 cursor-pointer'>At NAS Infotech, we believe that work should be more than just a job – it should be a place where you can thrive, grow, and enjoy every day. Here’s a glimpse into what life is like at our company:</motion.p>
        <section className=' flex flex-col gap-2'>
          <motion.div
          variants={fadein("left", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.8 }}
          className='flex flex-wrap group overflow-hidden bg-opacity-30 bg-blue-500 h-full md:h-[26vh] items-center justify-center cursor-pointer hover:shadow-xl shadow-gray-300'>
            <div className='w-full md:w-1/3 h-[26vh] overflow-hidden'>
            <Image className='w-full h-full object-cover group-hover:scale-105 ease-out' src={inclusion} alt="inclusion" width={1000} height={1000}></Image>
            </div>
            <div className='flex flex-col justify-center w-full md:w-2/3 md:h-[26vh] p-4 lg:p-10'>
              <h3 className='text-CardHeading-sm md:text-CardHeading font-semibold font-sans'>Inclusive Environment</h3>
              <p className='text-Para-sm md:text-Para'>we embrace diversity and foster an inclusive culture where everyone is respected and valued. We believe that a variety of perspectives leads to innovative solutions and a more dynamic workplace.</p>
            </div>
          </motion.div>

          <motion.div
          variants={fadein("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.8 }}
          className='flex flex-wrap hover:shadow-xl shadow-gray-300 group overflow-hidden bg-opacity-30 bg-green-500 h-full md:h-[26vh] items-center justify-center cursor-pointer'>
            <div className='flex flex-col justify-center w-full md:w-2/3 md:h-[26vh] p-4 lg:p-10'>
              <h3 className='text-CardHeading-sm md:text-CardHeading font-semibold font-sans'>Fun & Engaging</h3>
              <p className='text-Para-sm md:text-Para'>we prioritize fun and engagement through regular team-building activities, social events, and hackathons. Whether it’s a casual Friday get-together, a themed office party, or an offsite retreat, we make sure there’s always something to look forward to.</p>
            </div>
            <div className='w-full md:w-1/3 h-[26vh] overflow-hidden'>
            <Image className='w-full h-full object-cover group-hover:scale-105 ease-out' src={fun} alt="inclusion" width={1000} height={1000}></Image>
            </div>
          </motion.div>

          <motion.div
          variants={fadein("left", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.8 }}
          className='flex flex-wrap hover:shadow-xl shadow-gray-300 group overflow-hidden bg-opacity-30 bg-blue-500 h-full md:h-[26vh] items-center justify-center cursor-pointer'>
            <div className='w-full md:w-1/3 h-[26vh] overflow-hidden'>
            <Image className='w-full h-full object-cover group-hover:scale-105 ease-out' src={develope} alt="inclusion" width={1000} height={1000}></Image>
            </div>
            <div className='flex flex-col justify-center w-full md:w-2/3 md:h-[26vh] p-4 lg:p-10'>
              <h3 className='text-CardHeading-sm md:text-CardHeading font-semibold font-sans'>Professional Development</h3>
              <p className='text-Para-sm md:text-Para'>We are committed to the continuous growth and development of our team members.we offer numerous opportunities to enhance your skills and advance your career. </p>
            </div>
          </motion.div>

          <motion.div
          variants={fadein("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.8 }}
          className='flex flex-wrap hover:shadow-xl shadow-gray-300 group overflow-hidden bg-opacity-30 bg-green-500 h-full md:h-[26vh] items-center justify-center cursor-pointer'>
            <div className='flex flex-col justify-center text-start w-full md:w-2/3 md:h-[26vh] p-4 lg:p-10'>
              <h3 className='text-CardHeading-sm md:text-CardHeading font-semibold font-sans'>Community Involvement</h3>
              <p className='text-Para-sm md:text-Para'>We encourage our employees to participate in volunteer opportunities and support charitable initiatives. Whether it’s through company-organized events or individual efforts, we are committed to making a positive impact on the world around us.</p>
            </div>
            <div className='w-full md:w-1/3 h-[26vh] overflow-hidden'>
            <Image className='w-full h-full object-cover group-hover:scale-105 ease-out' src={community} alt="inclusion" width={1000} height={1000}></Image>
            </div>
          </motion.div>
        </section>
        
    </div>
    </div>
  );
};

export default LifeATNAS;