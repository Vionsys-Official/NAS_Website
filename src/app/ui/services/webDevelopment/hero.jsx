"use client"
import React from 'react'
import Image from 'next/image';
import webd from '/public/assets/services/webDev/webd1.jpg';
import { motion } from 'framer-motion';
import { fadein } from "@/components/ui/variants";


const Hero = () => {

  return (
    <div>
        <div className='flex flex-wrap group md:gap-20 h-full md:h-[100vh] items-center justify-end cursor-pointer'>
            <div className='flex md:hidden w-full md:w-2/5 h-[50vh] '>
            <Image className='w-full h-full object-cover md:rounded-full md:rotate-45 group-hover:scale-105' src={webd} alt="web" width={1000} height={1000}></Image>
            </div>

            <div className='md:relative w-full md:w-2/5 md:h-[100vh] p-4'> 
              <div className='hidden md:flex bg-blue7 bg-opacity-35 w-full h-[100vh] rounded-full rotate-45 translate-x-72 group-hover:scale-105 ease-linear'></div>
              <motion.div
              variants={fadein("left", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.8 }}
              className='md:absolute md:inset-0 flex flex-col justify-center md:pr-2'>
                <h3 className='text-blue2 text-HMain-sm md:text-HMain-sm lg:text-HMain font-extrabold py-2 md:py-4 capitalize'>Build Your Online Presence with Our High-Quality Web Development Services</h3>
                <p className='text-gray-900 text-HSub-sm md:text-HSub font-medium md:pr-6 lg:pr-0'>Unlock the full potential of your business with tailored solutions that enhance user experience, drive engagement and boost your digital footprint.</p>
              </motion.div>
            </div>
            
            <div className='hidden md:flex group w-full md:w-2/5 h-[50vh] md:h-[100vh]'>
            <Image className='w-full h-full object-cover md:rounded-full md:rotate-45 group-hover:scale-105 ease-linear' src={webd} alt="web" width={1000} height={1000}></Image>
            </div>
            
          </div>
    </div>
  );
};

export default Hero;