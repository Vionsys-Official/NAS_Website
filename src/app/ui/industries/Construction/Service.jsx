'use client'
import React from 'react'
import { fadein } from '@/components/ui/variants';
import { motion } from 'framer-motion';

const Service = () => {

    const service = [
        {
            id: 1,
            title: "Project Management Software:",
            para1: "Streamline project planning, scheduling and execution.",
            para2: "Enhance resource allocation and tracking.",
            para3: "Integrate seamlessly with existing tools and workflows.",
        },
        {
            id: 2,
            title: "Building Information Modeling (BIM):",
            para1: "Implement advanced 3D modeling for detailed project visualization.",
            para2: "Improve design accuracy and coordination.",
            para3: "Facilitate better decision-making with real-time data.",
        },
        {
            id: 3,
            title: "Cloud-Based Collaboration Tools:",
            para1: "Enable real-time collaboration between on-site and off-site teams.",
            para2: "Securely share documents, plans and updates.",
            para3: "Ensure everyone has access to the latest project information.",
        },
        {
            id: 4,
            title: "IoT and Smart Construction:",
            para1: "Integrate IoT devices to monitor equipment and site conditions.",
            para2: "Enhance safety with real-time data and alerts.",
            para3: "Optimize asset management and maintenance.",
        },
        {
            id: 5,
            title: "Mobile Solutions:",
            para1: "Equip your workforce with mobile apps for on-the-go access to project data.",
            para2: "Simplify the field reporting and inspections.",
            para3: "Improve communication and reduce delays.",
        },
        {
            id: 6,
            title: "Data Analytics and Reporting:",
            para1: "Harness the power of data to gain insights into project performance.",
            para2: "Predict and mitigate risks with advanced analytics.",
            para3: "Generate comprehensive reports for stakeholders.",
        },
        {
            id: 7,
            title: "Cybersecurity Services:",
            para1: "Protect sensitive project data with robust security measures.",
            para2: "Ensure compliance with industry standards and regulations.",
            para3: "Safeguard against cyber threats and data breaches.",
        },
    ]

    return (
        <>
            <section className="m-4 md:m-8 text-gray-800">
                <div className="mx-auto my-6 space-y-1 text-center">
                    <motion.h2 
                     variants={fadein("down", 0.2)}
                     initial="hidden"
                     whileInView={"show"}
                     viewport={{ once: true, amount: 0.8 }}
                     className="text-Heading-sm font-bold md:text-Heading text-blue950">Our IT Solutions for Construction
                    </motion.h2>
                </div>
                <div className="grid justify-center gap-4 mx-auto lg:grid-cols-2 xl:grid-cols-4">
                    {service.map((item) => (
                        <motion.div
                        initial={{ opacity: 0, scale: 0.7 }} //X:100
                        whileInView={{ opacity: 1, scale: 1 }} //y:100
                        transition={{
                            delay: 0.2,
                            scale: { type: "spring", stiffness: 30 },
                            opacity: { duration: 0.6 },
                            ease: "easeInOut",
                        }} key={item.id} className="flex flex-col md:px-5 md:py-3 p-2 border-2 border-blue2 rounded-bl-3xl rounded-tr-3xl">
                        <h2 className="mb-2 text-CardHeading-sm font-semibold md:text-CardHeading title-font text-gray-800 hover:text-blue2">{item.title}</h2>
                        <p className="flex-1 mb-1 md:text-Para text-Para-sm leading-relaxed text-gray-700">{item.para1}</p>
                        <p className="flex-1 mb-1 md:text-Para text-Para-sm leading-relaxed text-gray-700">{item.para2}</p>
                        <p className="flex-1 mb-1 md:text-Para text-Para-sm leading-relaxed text-gray-700">{item.para3}</p>
                    </motion.div>
                    ))}
                    
                </div>
            </section>
        </>

    )
}

export default Service