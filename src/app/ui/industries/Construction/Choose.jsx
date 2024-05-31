'use client'
import React from 'react'
import { fadein } from '@/components/ui/variants';
import { motion } from 'framer-motion';
import { AiOutlineSolution } from "react-icons/ai";
import { CgTime } from "react-icons/cg";
import { HiOutlineLightBulb } from "react-icons/hi";
import { GrUserExpert } from "react-icons/gr";

const Choose = () => {
    return (
        <section className="text-gray-800">
            <div className="container mx-auto flex flex-col md:p-6 p-2">
                <motion.h2
                variants={fadein("up", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.8 }} 
                className="py-4 md:text-Heading text-Heading-sm font-bold text-center text-blue950">Why Partner with Us?</motion.h2>
                <div className="divide-y divide-gray-700 dark:divide-gray-300">
                    <motion.div
                        variants={fadein("up", 0.2)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.8 }} className="grid justify-center grid-cols-4 md:p-8 p-2 mx-auto space-y-3 lg:space-y-0">
                        <div className="flex items-center justify-center lg:col-span-1 col-span-full">
                            <GrUserExpert className="w-16 h-16" />
                        </div>
                        <div className="flex flex-col justify-center max-w-3xl text-center col-span-full lg:col-span-3 lg:text-left">
                            <span className="font-bold md:text-CardHeading text-CardHeading-sm text-blue2">Industry Expertise:</span>
                            <span className="md:mt-4 mt-2 text-gray-800">Our team understands the unique needs of the construction industry, providing solutions that are not only innovative but also practical and effective.</span>
                        </div>
                    </motion.div>
                    <motion.div
                        variants={fadein("up", 0.2)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.8 }} className="grid justify-center grid-cols-4 md:p-8 p-2 mx-auto space-y-3 lg:space-y-0">
                        <div className="flex items-center justify-center lg:col-span-1 col-span-full">
                            <HiOutlineLightBulb className="w-16 h-16" />
                        </div>
                        <div className="flex flex-col justify-center max-w-3xl text-center col-span-full lg:col-span-3 lg:text-left">
                            <span className="font-bold md:text-CardHeading text-CardHeading-sm text-blue2">Customized Solutions:</span>
                            <span className="md:mt-4 mt-2 text-gray-800">We tailor our IT services to fit your specific project requirements and business objectives ensuring you get the most value from our technology.</span>
                        </div>
                    </motion.div>
                    <motion.div
                        variants={fadein("up", 0.2)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.8 }} className="grid justify-center grid-cols-4 md:p-8 p-2 mx-auto space-y-3 lg:space-y-0">
                        <div className="flex items-center justify-center lg:col-span-1 col-span-full">
                            <AiOutlineSolution className="w-16 h-16" />
                        </div>
                        <div className="flex flex-col justify-center max-w-3xl text-center col-span-full lg:col-span-3 lg:text-left">
                            <span className="font-bold md:text-CardHeading text-CardHeading-sm text-blue2">Proven Track Record:</span>
                            <span className="md:mt-4 mt-2 text-gray-800">With a history of successful projects and satisfied clients, we are a trusted partner for construction companies looking to leverage technology for growth and efficiency.</span>
                        </div>
                    </motion.div>
                    <motion.div
                        variants={fadein("up", 0.2)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.8 }} className="grid justify-center grid-cols-4 md:p-8 p-2 mx-auto space-y-3 lg:space-y-0">
                        <div className="flex items-center justify-center lg:col-span-1 col-span-full">
                            <CgTime className="w-16 h-16" />
                        </div>
                        <div className="flex flex-col justify-center max-w-3xl text-center col-span-full lg:col-span-3 lg:text-left">
                            <span className="font-bold md:text-CardHeading text-CardHeading-sm text-blue2">24/7 Support:</span>
                            <span className="md:mt-4 mt-2 text-gray-800">Our dedicated support team is always available to assist you ensuring that your systems run smoothly and any issues are promptly resolved.</span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default Choose