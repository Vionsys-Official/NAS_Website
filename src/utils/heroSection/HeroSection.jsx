"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from "framer-motion";


const HeroSection = ({ obj }) => {
  return (
    <div className='relative w-full h-[60vh] md:h-[90vh] overflow-hidden group bg-black'>
      <Image className='object-cover h-full w-full transition-all group-hover:scale-105 ease-out duration-400 opacity-85' src={obj.content.image} alt="Background Image" height={1000} width={1000}></Image>
      <div className='absolute inset-0 bg-black opacity-45'></div>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{
          delay: 0.2,
          scale: { type: "spring", stiffness: 30 },
          opacity: { duration: 0.6 },
          ease: "easeInOut",
        }}
        className='absolute inset-0 text-white flex flex-col items-center justify-center'>
        <div className='w-[80%] md:w-[70%] backdrop-blur-md bg-gray-950 bg-opacity-20 p-5 text-center rounded-3xl'>
          <h2 className='text-MainHeading-sm md:text-MainHeading text-white font-extrabold capitalize'>{obj.content?.heading}</h2>
          <h1 className='text-white font-sans text-HeroHeading-sm md:text-HeroHeading font-bold'>{obj.content.title}</h1>
          {obj.content?.button}
        </div>
      </motion.div>
    </div>
  );
};

export default HeroSection;