"use client"
import React from 'react'
import Link from 'next/link';
import { motion } from 'framer-motion';
import { fadein } from "@/components/ui/variants";
export default function CTASection() {
  return (
    <div className='flex items-center justify-center'>
        <motion.div
        variants={fadein("down2", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0.8 }}
         id="bg" className='w-[90%]  mt-6 flex flex-col gap-4 items-center justify-center text-center p-4 md:p-10'>
            <h2 className='text-green1 text-MainHeading-sm md:text-MainHeading font-sans'>Don't wait. your future at NAS Infotech starts now!</h2>
            <p className='text-[#f9f9f9] font-semibold text-Para-sm md:text-Para'>We are constantly seeking enthusiastic and skilled professionals to become part of our vibrant team. If you're ready to make an impact and take your career to the next level, explore our open positions and apply today. </p>
            <div className='flex flex-col sm:flex-row gap-2 md:gap-10 font-sans'>
                
                <Link href={"#card"}>
                <button className='relative px-6 py-1 text-white  rounded-lg bg-blue-800 isolation-auto z-10
        before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-right-full before:hover:right-0 before:rounded-full  before:bg-green-500 before:-z-10  before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-500'>Drop Your Resume for Future Opportunities</button>
                </Link>
            </div>
        </motion.div>
    </div>
  );
};
