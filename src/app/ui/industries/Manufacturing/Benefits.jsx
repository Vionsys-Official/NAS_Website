'use client'
import React from 'react'
import { fadein } from '@/components/ui/variants';
import { motion } from 'framer-motion';

const Benefits = () => {

    const benefit = [
        {
            id: 1,
            title: "Increased Efficiency",
            para: "By automating routine tasks and optimizing workflows, our IT solutions significantly boost operational efficiency, leading to higher productivity and lower operational costs.",
        },
        {
            id: 2,
            title: "Enhanced Decision-Making",
            para: "With access to real-time data and advanced analytics, manufacturers can make informed decisions quickly, improving overall business performance.",
        },
        {
            id: 3,
            title: "Scalability",
            para: "Our IT solutions are designed to grow with your business. Whether you are a small manufacturer or a large enterprise, our scalable solutions adapt to your changing needs.",
        },
        {
            id: 4,
            title: "Improved Quality Control",
            para: "Advanced monitoring and predictive analytics help in maintaining high-quality standards by identifying potential issues before they become critical problems.",
        },
        {
            id: 5,
            title: "Reduced Downtime",
            para: "Predictive maintenance and real-time monitoring minimize equipment downtime, ensuring continuous production and reducing maintenance costs.",
        },
        {
            id: 6,
            title: "Better Customer Satisfaction",
            para: "Streamlined operations and improved product quality lead to faster delivery times and higher customer satisfaction.",
        }
    ]

    return (
        <div className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 py-6">
            <motion.div
                variants={fadein("up", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: true, amount: 0.8 }}
                className="max-w-xl mb-5 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                <h2 className="max-w-lg mb-6 md:text-Heading text-Heading-sm font-bold leading-none tracking-tight text-blue2 sm:text-4xl md:mx-auto">
                    Benefits of Our IT Solutions
                </h2>
                <p className="text-Para-sm font-semibold text-slate-600 md:text-lg">
                    Discover the key advantages of our innovative IT solutions, designed to boost efficiency, enhance decision-making and improve overall productivity in your manufacturing processes.
                </p>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, scale: 0.7 }} //X:100
                whileInView={{ opacity: 1, scale: 1 }} //y:100
                transition={{
                    delay: 0.2,
                    scale: { type: "spring", stiffness: 30 },
                    opacity: { duration: 0.6 },
                    ease: "easeInOut",
                }}
                viewport={{ once: true, amount: 0.8 }}
                className="grid md:gap-8 gap-4 row-gap-5 mb-8 md:row-gap-8 lg:grid-cols-3 sm:grid-cols-2">
                {benefit.map((item) => (
                    <div key={item.id} className="duration-300 transform bg-white border-l-4 shadow-sm border-blue950 hover:-translate-y-2">
                        <div className="h-full md:p-5 p-2 border border-l-0 rounded-r">
                            <h6 className="mb-2 font-semibold leading-5 text-black">{item.title}</h6>
                            <p className="text-sm text-gray-800">{item.para}</p>
                        </div>
                    </div>
                ))}
            </motion.div>
        </div>
    )
}

export default Benefits