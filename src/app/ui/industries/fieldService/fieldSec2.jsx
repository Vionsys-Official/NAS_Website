"use client"
import React from 'react'
import MySect2I from '/public/assets/industries/fieldSer/MySect2I.jpg'
import Image from 'next/image';
import { FaCheck } from "react-icons/fa";
import { motion } from 'framer-motion';
import { fadein } from '@/components/ui/variants';


const fieldSec2 = () => {
    return (
        <section className="w-full">
            <div className='flex flex-col md:flex-row gap-8 py-5 md:px-10 px-4 md:py-10'>
            <div className="flex-1 md:w-[50%] w-full">
                <h2 className="text-Heading-sm md:text-Heading font-extrabold text-blue2 tracking-tighter mb-4">Comprehensive On-Site Services for Optimal Performance</h2>
                <p className="text-slate-600 dark:text-gray-900 text-base md:text-lg font-semibold mb-6">Our expert team delivers comprehensive on-site services to ensure your operations run smoothly and efficiently. From routine maintenance and emergency repairs to detailed inspections and performance evaluations, we provide tailored solutions to meet your specific needs. Trust us to enhance your field operations with reliability and excellence.
                </p>
                <ul className="space-y-3 text-gray-900 dark:text-gray-900">
                    <motion.li

                        variants={fadein("right", 0.2)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: false, amount: 0.8 }}
                        className="flex items-start">
                        <FaCheck className="w-5 h-5 mr-3 text-gray-900 dark:text-gray-50" />
                        <span>Routine maintenance</span>
                    </motion.li>
                    <motion.li
                        variants={fadein("right", 0.2)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: false, amount: 0.8 }}
                        className="flex items-start">
                        <FaCheck className="w-5 h-5 mr-3 text-gray-900 dark:text-gray-50" />
                        <span>Emergency repair</span>
                    </motion.li>
                    <motion.li

                        variants={fadein("right", 0.2)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: false, amount: 0.8 }} className="flex items-start">
                        <FaCheck className="w-5 h-5 mr-3 text-gray-900 dark:text-gray-50" />
                        <span>Scheduled inspections</span>
                    </motion.li>
                    <motion.li
                        variants={fadein("right", 0.2)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: false, amount: 0.8 }}
                        className="flex items-start">
                        <FaCheck className="w-5 h-5 mr-3 text-gray-900 dark:text-gray-50" />
                        <span>Performance evaluations</span>
                    </motion.li>

                </ul>
            </div>

            <div className="flex-1 md:w-[50%] md:h-[60vh] rounded-xl overflow-hidden">

                <Image className='w-full
                ' src={MySect2I} alt='' />

            </div>
            </div>
        </section>
    )
}

export default fieldSec2