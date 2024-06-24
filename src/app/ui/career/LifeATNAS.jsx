"use client"
import React from 'react';
import inclusion from '/public/assets/career/inclusion.jpg';
import fun from '/public/assets/career/fun.jpg';
import develope from '/public/assets/career/develope.jpg';
import community from '/public/assets/career/community.jpg';
import Image from 'next/image';
import { motion } from 'framer-motion';


const LifeATNAS = () => {

  return (
    <div className='flex items-center justify-center overflow-hidden'>
      <div className='w-[90%] flex flex-col items-center justify-center font-light'>
        <motion.h1
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            delay: 0.2,
            x: { type: "spring", stiffness: 30 },
            opacity: { duration: 0.6 },
            ease: "easeInOut",
          }}
          className='text-blue2 capitalize text-center text-MainHeading-sm md:text-MainHeading font-extrabold'>Life at NAS Infotech</motion.h1>
        <motion.p
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            delay: 0.2,
            x: { type: "spring", stiffness: 30 },
            opacity: { duration: 0.6 },
            ease: "easeInOut",
          }}
          className='text-center text-Para-sm md:text-Para font-medium p-4 md:p-6'>At NAS Infotech, we believe that work should be more than just a job – it should be a place where you can thrive, grow and enjoy every day. Here’s a glimpse into what life is like at our company:</motion.p>
        <section className=' flex flex-col gap-6 my-2'>

          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              delay: 0.2,
              x: { type: "spring", stiffness: 30 },
              opacity: { duration: 0.6 },
              ease: "easeInOut",
            }}
            className='flex flex-wrap group overflow-hidden bg-opacity-40  h-full md:h-[26vh] items-center justify-center shadow-md bg-slate-200 rounded-md shadow-gray-300 border'>
            <div className='w-full md:w-1/3 h-[26vh] overflow-hidden '>
              <Image className='w-full h-full object-cover group-hover:scale-105 transition-all duration-300 ease-linear' src={inclusion} alt="inclusion" width={1000} height={1000}></Image>
            </div>
            <motion.div

              className='flex flex-col justify-center w-full md:w-2/3 md:h-[26vh] p-4'>
              <h3 className=' text-CardHeading-sm md:text-CardHeading font-semibold'>Inclusive Environment</h3>
              <p className='text-Para-sm md:text-Para'>we embrace diversity and foster an inclusive culture where everyone is respected and valued. We believe that a variety of perspectives leads to innovative solutions and a more dynamic workplace.</p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              delay: 0.2,
              x: { type: "spring", stiffness: 30 },
              opacity: { duration: 0.6 },
              ease: "easeInOut",
            }}
            className='flex flex-wrap shadow-md shadow-gray-300 group overflow-hidden bg-opacity-40 h-full md:h-[26vh] items-center bg-slate-200 rounded-md justify-center border'>
            <motion.div

              className='flex flex-col justify-center w-full md:w-2/3 md:h-[26vh] p-4 '>
              <h3 className='text-CardHeading-sm md:text-CardHeading font-semibold'>Fun & Engaging</h3>
              <p className='text-Para-sm md:text-Para'>we prioritize fun and engagement through regular team-building activities, social events and hackathons. Whether it’s a casual Friday get-together, a themed office party or an offsite retreat, we make sure there’s always something to look forward to.</p>
            </motion.div>
            <div className='w-full md:w-1/3 h-[26vh] overflow-hidden'>
              <Image className='w-full h-full object-cover group-hover:scale-105 transition-all duration-300 ease-linear' src={fun} alt="inclusion" width={1000} height={1000}></Image>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              delay: 0.2,
              x: { type: "spring", stiffness: 30 },
              opacity: { duration: 0.6 },
              ease: "easeInOut",
            }}
            className='flex flex-wrap shadow-md shadow-gray-300 group overflow-hidden bg-opacity-40 h-full md:h-[26vh] items-center bg-slate-200 rounded-md justify-center border'>
            <div className='w-full md:w-1/3 h-[26vh] overflow-hidden'>
              <Image className='w-full h-full object-cover group-hover:scale-105 transition-all duration-300 ease-linear' src={develope} alt="inclusion" width={1000} height={1000}></Image>
            </div>
            <motion.div

              className='flex flex-col justify-center w-full md:w-2/3 md:h-[26vh] p-4'>
              <h3 className='text-CardHeading-sm md:text-CardHeading font-semibold'>Professional Development</h3>
              <p className='text-Para-sm md:text-Para'>We are committed to the continuous growth and development of our team members. We offer numerous opportunities to enhance your skills and advance your career. </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              delay: 0.2,
              x: { type: "spring", stiffness: 30 },
              opacity: { duration: 0.6 },
              ease: "easeInOut",
            }}
            className='flex flex-wrap shadow-md shadow-gray-300 group overflow-hidden bg-opacity-40 h-full md:h-[26vh] items-center bg-slate-200 rounded-md justify-center border'>
            <motion.div

              className='flex flex-col justify-center text-start w-full md:w-2/3 md:h-[26vh] p-4'>
              <h3 className='text-CardHeading-sm md:text-CardHeading font-semibold'>Community Involvement</h3>
              <p className='text-Para-sm md:text-Para'>We encourage our employees to participate in volunteer opportunities and support charitable initiatives. Whether it’s through company-organized events or individual efforts, we are committed to making a positive impact on the world around us.</p>
            </motion.div>
            <div className='w-full md:w-1/3 h-[26vh] overflow-hidden'>
              <Image className='w-full h-full object-cover group-hover:scale-105 transition-all duration-300 ease-linear' src={community} alt="inclusion" width={1000} height={1000}></Image>
            </div>
          </motion.div>

        </section>

      </div>
    </div>
  );
};

export default LifeATNAS;