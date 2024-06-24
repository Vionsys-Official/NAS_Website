'use client'
import Image from 'next/image'
import React from 'react'
import { fadein } from '@/components/ui/variants';
import { motion } from 'framer-motion';
import Staffing1 from '/public/assets/services/ItStaffing/Staffing1.jpg'
import Staffing2 from '/public/assets/services/ItStaffing/Staffing2.jpg'
import Staffing3 from '/public/assets/services/ItStaffing/Staffing3.jpeg'
import Staffing4 from '/public/assets/services/ItStaffing/Staffing4.jpg'

const Solutions = () => {
    return (
        <section className="p-4 lg:p-12 ">
            <motion.h2 
            variants={fadein("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.8 }} className="mb-6 md:text-Heading text-Heading-sm font-extrabold leading-none text-center text-blue2">Our IT Staffing Solutions</motion.h2>
            <div className="mx-auto space-y-6">
                <motion.div
                    variants={fadein("up", 0.2)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: true, amount: 0.8 }} className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
                    <Image src={Staffing1} alt="" width={"570"} height={"600"} className="dark:bg-gray-500 aspect-video" />
                    <div className="flex flex-col justify-center flex-1 md:p-6 p-2 bg-slate-100">
                        <h3 className="md:text-SubHeading text-SubHeading-sm font-bold hover:text-blue2">Contract Staffing</h3>
                        <ul>
                            <li className="md:my-6 my-2 md:text-Para text-Para-sm text-gray-800">Short-Term Assignments: Ideal for addressing temporary spikes in workload or specific project needs.</li>
                            <li className="md:my-6 my-2 md:text-Para text-Para-sm text-gray-800">Long-Term Contracts: Perfect for ongoing projects that require specialized skills over an extended period.</li>
                        </ul>
                    </div>
                </motion.div>

                <motion.div
                    variants={fadein("up", 0.2)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: true, amount: 0.8 }} className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse">
                    <Image src={Staffing2} alt="" width={"570"} height={"600"} className="h-80 dark:bg-gray-500 aspect-video" />
                    <div className="flex flex-col justify-center flex-1 md:p-6 p-2 bg-slate-100">
                        <h3 className="md:text-SubHeading text-SubHeading-sm font-bold hover:text-blue2">Contract-to-Hire Staffing</h3>
                        <ul>
                            <li className="md:my-6 my-2 md:text-Para text-Para-sm text-gray-800">Evaluate Before Committing: This model allows businesses to evaluate a candidate&apos;s performance and cultural fit before making a permanent hiring decision.</li>
                            <li className="md:my-6 my-2 md:text-Para text-Para-sm text-gray-800">Seamless Transition: Facilitates a smooth transition from contract to full-time employment if the candidate meets your expectations.</li>
                        </ul>
                    </div>
                </motion.div>

                <motion.div
                    variants={fadein("up", 0.2)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: true, amount: 0.8 }} className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
                    <Image src={Staffing3} alt="" width={"570"} height={"600"} className="h-80 dark:bg-gray-500 aspect-video" />
                    <div className="flex flex-col justify-center flex-1 md:p-6 p-2 bg-slate-100">
                        <h3 className="md:text-SubHeading text-SubHeading-sm font-bold hover:text-blue2">Direct Hire Staffing</h3>
                        <ul>
                            <li className="md:my-6 my-2 md:text-Para text-Para-sm text-gray-800">Permanent Placement: For organizations seeking to fill full-time positions, direct hire services ensure you get top-tier talent tailored to your long-term business objectives.</li>
                            <li className="md:my-6 my-2 md:text-Para text-Para-sm text-gray-800">Comprehensive Vetting: Rigorous screening and vetting processes to ensure candidates are well-qualified and align with your company&apos;s culture and values.</li>
                        </ul>
                    </div>
                </motion.div>

                <motion.div
                    variants={fadein("up", 0.2)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: true, amount: 0.8 }} className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse">
                    <Image src={Staffing4} alt="" width={"570"} height={"600"} className="h-80 dark:bg-gray-500 aspect-video" />
                    <div className="flex flex-col justify-center flex-1 md:p-6 p-2 bg-slate-100">
                        <h3 className="md:text-SubHeading text-SubHeading-sm font-bold hover:text-blue2">Managed Services</h3>
                        <ul>
                            <li className="md:my-6 my-2 md:text-Para text-Para-sm text-gray-800">End-to-End Solutions: Managed services provide complete project management from initial planning to execution and support utilizing a dedicated team of professionals.</li>
                            <li className="md:my-6 my-2 md:text-Para text-Para-sm text-gray-800">Focus on Core Business: Allows your in-house team to focus on strategic initiatives while we handle the technical aspects of your projects.</li>
                        </ul>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Solutions