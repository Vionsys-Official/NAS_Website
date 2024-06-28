"use client"
import React from 'react';
import Image from 'next/image';
import innovation from '/public/assets/career/innovation.gif';
import colaboration from '/public/assets/career/colaboration.gif';
import impact from '/public/assets/career/impact.gif';
import growth from '/public/assets/career/growth.gif';
import { motion } from 'framer-motion';


const Culture = () => {
    const culture = [
        { id: 1, icon: innovation, title: "Innovation", desc: "We thrive on innovation and challenging the limits of what's achievable. You'll be motivated to think creatively and contribute your distinctive ideas." },
        { id: 2, icon: colaboration, title: "Collaboration", desc: "In our collaborative setting, you'll work with skilled professionals who are passionate about their craft. We trust in the power of teamwork to accomplish remarkable outcomes." },
        { id: 3, icon: impact, title: "Impact", desc: "Your work here will have a direct impact on our clients and their businesses. We’re committed to delivering solutions that truly make a difference." },
        { id: 4, icon: growth, title: "Growth", desc: "We’re dedicated to your professional and personal development. With continuous learning opportunities, you’ll grow and evolve in your career." },
    ]

    return (
        <div className='flex items-center justify-center overflow-hidden py-6 md:py-10'>
            <div className='w-[90%] md:w-[84%] flex flex-col items-center justify-center font-light'>
                <div className='flex items-center justify-center'>
                    <div className='flex flex-col items-center justify-center'>
                        <motion.h2
                            initial={{ opacity: 0, x: 100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{
                                delay: 0.2,
                                x: { type: "spring", stiffness: 30 },
                                opacity: { duration: 0.6 },
                                ease: "easeInOut",
                            }}
                            className='text-blue2 text-MainHeading-sm md:text-MainHeading font-extrabold'>Our Culture</motion.h2>
                        <motion.h3
                            initial={{ opacity: 0, x: -100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{
                                delay: 0.2,
                                x: { type: "spring", stiffness: 30 },
                                opacity: { duration: 0.6 },
                                ease: "easeInOut",
                            }}
                            className='text-blue-950 text-Para-sm md:text-Para text-center font-medium p-2 md:p-4'>Our culture is built on a foundation of creativity, collaboration and a commitment to excellence. We foster an environment where innovation thrives, teamwork is paramount and every team member&apos;s contributions are valued. Here&apos;s what makes our culture unique</motion.h3>
                    </div>
                </div>
                <div
                    className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-2 md:py-6">
                    {culture.map((feat) => {
                        return (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.6 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{
                                    delay: 0.2,
                                    scale: { type: "spring", stiffness: 30 },
                                    opacity: { duration: 0.6 },
                                    ease: "easeInOut",
                                }}
                                key={feat.id} className="block bg-white rounded-xl border shadow-lg shadow-gray-400 border-gray-300 p-4">
                                <span className="inline-block rounded-lg">
                                    <div className="inline-flex align-middle justify-center items-center select-none">
                                        <Image src={feat.icon} alt="icon" height={100} width={100}></Image>
                                    </div>
                                </span>

                                <h2 className="mt-2 font-semibold text-CardHeading-sm md:text-CardHeading">
                                    {feat.title}
                                </h2>
                                <p className="sm:mt-1 block text-Para-sm md:text-Para font-normal">
                                    {feat.desc}
                                </p>
                            </motion.div>
                        );
                    })}

                </div>
            </div>
        </div>
    );
};

export default Culture;