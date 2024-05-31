"use client"
import { fadein } from "@/components/ui/variants";
import { motion } from 'framer-motion';
import React from 'react'
import Link from 'next/link';

const cta = () => {
  return (
    <div className='flex items-center justify-center'>
    <div className='w-[80%] flex items-center justify-center py-4 sm:py-10 md:py-20'>
        <motion.div
            variants={fadein("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.8 }}  
            className=' flex flex-col items-center justify-center'>
            <h2 className="text-blue-900 mb-6 font-sans text-MainHeading-sm md:text-MainHeading leading-none tracking-tight cursor-pointer font-semibold">
            <span className="relative inline-block">
                <svg
                viewBox="0 0 52 24"
                fill="currentColor"
                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-50 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
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
                <span className="relative">Are</span>
            </span>{' '}
            you ready to advance your 
            </h2>
            <h2 className="text-blue-900 mb-6 font-sans text-MainHeading-sm md:text-MainHeading leading-none tracking-tight cursor-pointer font-semibold">E-commerce business to new heights?</h2>
            <p className='text-blue-950 text-Para-sm md:text-Para cursor-pointer'>Reach out to us today to find out how our software solutions</p>
            <p className='text-blue-950 text-Para-sm md:text-Para cursor-pointer'>can enhance the growth of your online store.</p>
            <Link href="#" className='mt-4'>
            <button className='cursor-pointer block w-full relative p-1 text-white  rounded-md bg-indigo-500  isolation-auto z-10 border-2 border-blue-300
        before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-right-full before:hover:right-0 before:rounded-full  before:bg-indigo-600 before:-z-10  before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700'>Contact Us</button>
            </Link>
        </motion.div>
    </div>
    </div>
  );
};

export default cta;