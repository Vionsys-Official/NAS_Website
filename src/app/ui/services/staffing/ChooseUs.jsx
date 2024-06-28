'use client'
import React from 'react'
import { fadein } from '@/components/ui/variants';
import { motion } from 'framer-motion';

const ChooseUs = () => {

    const choose = [
        {
            id: 1,
            title: "Access to a Talent",
            para: "We connect you with a vast network of skilled IT professionals ensuring access to the right talent for your projects.",
        },
        {
            id: 2,
            title: "Flexibility",
            para: "Our IT staffing services offer flexible workforce scaling, crucial for navigating the dynamic nature of IT projects.",
        },
        {
            id: 3,
            title: "Cost Efficiency",
            para: "Our IT staffing solutions cut recruitment, training and benefit costs optimizing budget management for efficiency.",
        },
        {
            id: 4,
            title: "Speed",
            para: "Recruitment is speed up through pre-screening, cutting down hiring time and launching your projects faster.",
        },
    ]
    return (
        <section className="m-4 md:m-8 text-gray-800">
            <motion.div
                variants={fadein("up", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: true, amount: 0.8 }} className="mx-auto space-y-2 text-center mb-8">
                <h2 className="md:text-Heading text-Heading-sm font-extrabold text-blue2">Why Choose Our IT Staffing Services?</h2>
                <p className="text-lg text-slate-600 font-semibold">Our IT staffing services provide efficient, flexible and cost-effective solutions for accessing top-tier IT talent ensuring prompt fulfillment of project needs.</p>
            </motion.div>
            <motion.div
                variants={fadein("up", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: true, amount: 0.8 }} className="mx-auto grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {choose.map((item) => (
                    <div key={item.id} className="flex flex-col items-center md:p-6 p-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-8 h-8 text-blue2">
                            <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"></path>
                        </svg>
                        <h3 className="md:my-3 my-0 md:text-CardHeading text-CardHeading-sm font-semibold">{item.title}</h3>
                        <div className="space-y-1 leading-tight md:text-justify text-center">
                            <p>{item.para}</p>
                        </div>
                    </div>
                ))}
            </motion.div>
        </section>
    )
}

export default ChooseUs