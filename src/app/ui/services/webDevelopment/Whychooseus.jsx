"use client"
import React from 'react'
import { RiLightbulbFlashFill } from "react-icons/ri";
import { RiUserStarLine } from "react-icons/ri";
import { FaHandshakeSimple } from "react-icons/fa6";
import { HiShieldCheck } from "react-icons/hi";
import Image from 'next/image';
import wcu from '/public/assets/services/webDev/wcs3.jpg';
import { fadein } from "@/components/ui/variants";
import { motion } from 'framer-motion';

const Whychooseus = () => {

    const items=[
        {
            id:1,
            icon:RiLightbulbFlashFill,
            title:"Innovative Solutions",
            desc:"We deliver cutting-edge solutions tailored to your unique requirements.",
        },
        {
            id:2,
            icon:RiUserStarLine,
            title:"Expertise",
            desc:"Our team comprises skilled professionals with extensive industry experience.",
        },
        {
            id:3,
            icon:FaHandshakeSimple,
            title:"Client-Centric Approach",
            desc:"Your satisfaction is our priority, and we strive to exceed your expectations.",
        },
        {
            id:4,
            icon:HiShieldCheck,
            title:"Reliability",
            desc:"Count on us for reliable support and ongoing maintenance to keep your digital assets running smoothly.",
        },
    ]

  return (
    <div className='flex items-center justify-center'>
    <div className='w-[90%] flex flex-col md:flex-row items-center justify-center py-10 md:py-14 my-4 md:my-8 bg-gradient-to-l from-green-200 to-transparent '>
        <motion.div
            variants={fadein("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.8 }} className='w-full md:w-1/2 shadow-lg shadow-gray-600 md:scale-105'>
            <Image src={wcu} alt=''></Image>
        </motion.div>
        <div className='w-full md:w-1/2 pl-4 mt-6 flex flex-col items-center justify-center'>
        <motion.h2
            variants={fadein("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.8 }}
             className="mb-6 font-sans text-MainHeading-sm md:text-MainHeading md:p-6 font-semibold leading-none tracking-tight text-gray-900 cursor-pointer">
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
                <span className="relative">Why </span>
            </span>{' '}
            Choose Us?
            </motion.h2>
            <div className='flex flex-col gap-2 md:pl-6'>
                {items.map((feat)=>{
                    return(
                        <motion.div
                        variants={fadein("right", 0.2)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: true, amount: 0.8 }}
                        key={feat.id} className='flex flex-col items-start justify-center cursor-pointer'>
                            <div className='flex flex-row gap-2 md:gap-6 items-start justify-center py-2'>
                                <div className='text-MainHeading-sm md:text-MainHeading'><feat.icon/></div>
                                <div>
                                <h2 className='text-CardHeading-sm md:text-CardHeading font-semibold'>{feat.title}</h2>
                                <p className='text-Para-sm md:text-Para'>{feat.desc}</p>
                                </div>
                            </div>
                            
                            
                        </motion.div>
                    );
                })}
            </div>
        </div>
        
    </div>
    </div>
  );
};

export default Whychooseus;