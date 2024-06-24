"use client"
import React from 'react'
import Link from 'next/link';
import { motion } from 'framer-motion';
export default function CTASection() {
  return (
    <div className='flex items-center justify-center'>
      <motion.div
        initial={{ opacity: 0, scale: 1.2 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{
          delay: 0.2,
          scale: { type: "spring", stiffness: 30 },
          opacity: { duration: 0.6 },
          ease: "easeInOut",
        }}
        id="bg" className='w-[90%]  mt-6 flex flex-col gap-4 items-center justify-center text-center p-4 md:p-10'>
        <h2 className=' text-MainHeading-sm md:text-MainHeading font-extrabold text-white capitalize'>Don&apos;t wait. your future at NAS Infotech starts now!</h2>
        <p className='text-white font-bold text-Para-sm md:text-Para'>We are constantly seeking enthusiastic and skilled professionals to become part of our vibrant team. If you&apos;re ready to make an impact and take your career to the next level, explore our open positions and apply today. </p>
        <div className='flex flex-col sm:flex-row gap-2 md:gap-10'>

          <Link href={"#card"}>
            <button className='relative px-6 py-1 text-white  rounded-lg bg-blue-800 isolation-auto z-10
        before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-right-full before:hover:right-0 before:rounded-full  before:bg-green-500 before:-z-10  before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-500'>Drop Your Resume for Future Opportunities</button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
};
