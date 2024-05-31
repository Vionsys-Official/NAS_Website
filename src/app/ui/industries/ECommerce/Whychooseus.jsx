"use client"
import { fadein } from "@/components/ui/variants";
import { motion } from 'framer-motion';
import React from 'react'
import EcomWCU from'/public/assets/industries/Ecommerce/EcomWCU.jpg';
import Image from 'next/image';

const Whychooseus = () => {
  return (
    <div>
        <div className='relative flex flex-col items-start justify-center md:h-[50vh] lg:h-[60vh] overflow-hidden'>
            <div className='w-full md:w-3/5 cursor-pointer'>
                <Image className='object-cover h-full w-full' src={EcomWCU} alt=''></Image>
            </div>
            <div className='absolute inset-0 hidden md:flex items-center justify-center w-2/5 bg-white h-[60vh] -rotate-45 translate-x-[110%] rounded-full'></div>
            <div className='md:absolute inset-0 flex flex-col items-end justify-center p-4 md:p-0 sm:pt-12 md:pt-0 md:-translate-x-14 lg:-translate-x-20 cursor-pointer'>
                <motion.h1
                variants={fadein("right", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: true, amount: 0.8 }}  
                className="w-full md:w-2/5 pb-4 font-sans text-MainHeading-sm md:text-MainHeading leading-none tracking-tight text-gray-900 font-semibold">
                Why Choose
                <span className="relative inline-block">
                    <svg
                    viewBox="0 0 52 24"
                    fill="currentColor"
                    className="absolute top-0 right-0 z-0 hidden w-32 -mt-8 -mr-20 text-blue-gray-50 lg:w-32 lg:-mr-28 lg:-mt-10 sm:block"
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
                    <span className="relative"> Us?</span>
                </span>{' '}
                 
                </motion.h1>
                <motion.p
                variants={fadein("right", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: true, amount: 0.8 }}  
                className='w-full md:w-2/5'>
                    At NAS Infotech, we bring E-commerce expertise and a commitment to your success. With innovative, tailored solutions and scalable support, we'll help your business grow and thrive. Trust us for transparent communication, dedicated service, and a long-term partnership focused on your success.
                </motion.p>
            </div>
        </div>
    </div>
  );
};

export default Whychooseus;