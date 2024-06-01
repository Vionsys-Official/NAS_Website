'use client'
import React from 'react'
import { fadein } from '@/components/ui/variants';
import { motion } from 'framer-motion';

const OurService = () => {

    const service = [
        {
            id: 1,
            title: "Cloud Infrastructure as a Service (IaaS)",
            t1: "Scalable Resources:",
            para1: " Access a range of computing resources on-demand, including virtual machines, storage, and networks.",
            t2: "Cost-Efficiency:",
            para2: " Pay only for what you use with our flexible pricing models.",
            t3: "High Availability:",
            para3: " Ensure business continuity with our reliable and redundant infrastructure.",
        },
        {
            id: 2,
            title: "Platform as a Service (PaaS)",
            t1: "Development Tools:",
            para1: " Utilize our integrated development environment to streamline your application development.",
            t2: "Support for Multiple Languages:",
            para2: " Develop and deploy applications in various programming languages.",
            t3: "Automated Updates:",
            para3: " Focus on innovation while we handle software updates and patches.",
        },
        {
            id: 3,
            title: "Software as a Service (SaaS)",
            t1: "Wide Range of Applications:",
            para1: " From CRM to ERP, access a variety of software applications hosted on our cloud.",
            t2: "Subscription-Based Model:",
            para2: " Benefit from a predictable expense with our subscription-based pricing.",
            t3: "Seamless Access:",
            para3: " Use our applications from any device with internet connectivity.",
            para1: "Wide Range of Applications: From CRM to ERP, access a variety of software application",
        },
        {
            id: 4,
            title: "Hybrid Cloud Solutions",
            t1: "Custom Integration:",
            para1: " Combine private and public cloud solutions tailored to your business needs.",
            t2: "Optimized Workloads:",
            para2: " Balance your workloads between on-premise and cloud environments for optimal performance.",
            t3: "Enhanced Security:",
            para3: " Protect sensitive data with robust security measures across both environments.",
        },
        {
            id: 5,
            title: "Cloud Migration Services",
            t1: "Strategic Planning:",
            para1: " Work with our experts to develop a migration strategy that minimizes disruption.",
            t2: "Data Transfer:",
            para2: " Ensure safe and efficient data transfer to the cloud.",
            t3: "Post-Migration Support:",
            para3: " Receive continuous support and optimization after migration.",
        },
        {
            id: 6,
            title: "Cloud Security Services",
            t1: "Data Encryption:",
            para1: " Protect your data with advanced encryption both at rest and in transit.",
            t2: "Threat Detection:",
            para2: " Utilize our state-of-the-art threat detection systems to safeguard your cloud environment.",
            t3: "Compliance:",
            para3: " Ensure your cloud infrastructure meets industry standards and regulatory requirements.",
        },
    ]

    return (
        <section className="m-4 md:m-8 text-gray-800">
            <motion.div
                variants={fadein("up", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: true, amount: 0.8 }} className="md:p-4 p-1 mx-auto my-6 space-y-1 text-center">
                <span className="text-xs font-semibold tracking-wider uppercase text-blue2">NAS Infotech Pvt. Ltd.</span>
                <h2 className="pb-3 text-Heading-sm font-bold md:text-Heading text-blue950">Our Cloud Computing Services</h2>
                <p>We transform your business operations with cutting-edge cloud computing solutions. Our comprehensive cloud services are designed to meet the diverse needs of modern enterprises, enhancing flexibility, scalability and efficiency.</p>
            </motion.div>
            <div className="container grid justify-center gap-4 mx-auto lg:grid-cols-2 xl:grid-cols-3">
                {service.map((item) => (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.7 }} //X:100
                        whileInView={{ opacity: 1, scale: 1 }} //y:100
                        transition={{
                            delay: 0.2,
                            scale: { type: "spring", stiffness: 30 },
                            opacity: { duration: 0.6 },
                            ease: "easeInOut",
                        }} key={item.id} className="flex flex-col md:px-8 p-2 md:py-6 border-2 border-blue5 rounded-xl">
                        <h2 className="mb-2 md:text-CardHeading text-CardHeading-sm font-semibold sm:text-xl text-gray-800">{item.title}</h2>
                        <ul className="flex-1 md:mb-4 text-Para md:text-Para-sm leading-relaxed text-gray-400">
                            <li className='text-gray-600'><span className='text-black'>{item.t1}</span>{item.para1}</li>
                            <li className='text-gray-600'><span className='text-black'>{item.t2}</span>{item.para2}</li>
                            <li className='text-gray-600'><span className='text-black'>{item.t3}</span>{item.para3}</li>
                        </ul>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}

export default OurService