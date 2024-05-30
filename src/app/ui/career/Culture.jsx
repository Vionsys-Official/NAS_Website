"use client"
import React from 'react';
import Image from 'next/image';
import innovation from '/public/assets/career/innovation.gif';
import colaboration from '/public/assets/career/colaboration.gif';
import impact from '/public/assets/career/impact.gif';
import growth from '/public/assets/career/growth.gif';
import { motion } from 'framer-motion';
import { fadein } from "@/components/ui/variants";

const Culture = () => {
    const culture=[
        {id:1,icon:innovation,title:"Innovation", desc:"We thrive on creativity and pushing the boundaries of what's possible. You'll be encouraged to think outside the box and bring your unique ideas to the table."},
        {id:2,icon:colaboration,title:"Collaboration", desc:" Our team-oriented environment means you'll work alongside talented professionals who are passionate about their work. We believe in the power of teamwork to achieve extraordinary results."},
        {id:3,icon:impact,title:"Impact", desc:"Your work here will have a direct impact on our clients and their businesses. We’re committed to delivering solutions that truly make a difference."},
        {id:4,icon:growth,title:"Growth", desc:"We’re dedicated to your professional and personal development. With continuous learning opportunities, you’ll grow and evolve in your career."},
    ]

  return (
    <div className='flex items-center justify-center overflow-hidden py-6 md:py-10'>
    <div className='w-[90%] md:w-[84%] flex flex-col items-center justify-center font-light'>
        <div className='flex items-center justify-center'>
            <div className='flex flex-col items-center justify-center'>
            <motion.h2
            variants={fadein("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.8 }}
             className='text-MainHeading-sm md:text-MainHeading font-semibold cursor-pointer font-sans'>Our Culture</motion.h2>
            <motion.h3 
            variants={fadein("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.8 }}
            className='text-Para-sm md:text-Para text-center font-medium p-2 md:p-4 cursor-pointer'>Our culture is built on a foundation of creativity, collaboration, and a commitment to excellence. We foster an environment where innovation thrives, teamwork is paramount, and every team member's contributions are valued. Here’s what makes our culture unique</motion.h3>
            </div>
        </div>
        <motion.div
        variants={fadein("down2", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0.8 }}
        className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-2 md:py-6">
            {culture.map((feat)=>{
                return(
                    <div key={feat.id} className="block bg-white rounded-xl border shadow-lg shadow-gray-400 border-gray-300 hover:border-2 p-4 cursor-pointer">
                        <span className="inline-block rounded-lg">
                        <div className="inline-flex align-middle justify-center items-center select-none">
                            <Image src={feat.icon} alt="icon" height={100} width={100}></Image>
                        </div>
                        </span>

                        <h2 className="mt-2 font-semibold text-CardHeading-sm md:text-CardHeading font-sans">
                            {feat.title}
                        </h2>
                        <p className="sm:mt-1 block text-Para-sm md:text-Para font-light"> 
                            {feat.desc}
                        </p>
                    </div>
                );
            })}
            
        </motion.div>
    </div>
    </div>
  );
};

export default Culture;