'use client'
import React from 'react'
import { fadein } from '@/components/ui/variants';
import { motion } from 'framer-motion';
import Pharma3 from '/public/assets/industries/Pharma/Pharma3.jpeg'
import Pharma2 from '/public/assets/industries/Pharma/Pharma2.jpeg'
import Image from 'next/image'

const Service = () => {

    const service1 = [
        {
            id: 1,
            title: "Research and Development (R&D) Support:",
            para1: "Data Management and Analytics: Offering advanced data analytics tools and platforms to accelerate drug discovery and development.",
            para2: "Clinical Trial Management: Solutions for managing clinical trials including EDC, CTMS and remote monitoring tools.",
        },
        {
            id: 2,
            title: "Regulatory Compliance and Quality Assurance:",
            para1: "Compliance Management Systems: Helping adhere to regulatory requirements with comprehensive compliance management solutions.",
            para2: "Quality Management Systems (QMS): Implementing QMS to ensure high-quality standards in production and audit management.",
        },
        {
            id: 3,
            title: "Manufacturing and Supply Chain Management:",
            para1: "ERP and Supply Chain Solutions: Tailored ERP systems to integrate business processes such as procurement, manufacturing and inventory management along with advanced analytics for demand forecasting and logistics management.",
            para2: "Automation and IoT: Leveraging automation and IoT for efficient and consistent manufacturing processes.",
        },
    ]
    const service2 = [
        {
            id: 1,
            title: "Sales and Marketing:",
            para1: "CRM Systems: Managing relationships with healthcare providers and tracking sales activities.",
            para2: "Digital Marketing: Services in social media management, online advertising and content creation.",
        },
        {
            id: 2,
            title: "Cybersecurity and IT Infrastructure:",
            para1: "Data Security: Comprehensive cybersecurity services to protect sensitive data.",
            para2: "IT Infrastructure Management: Managing servers, networks and databases for seamless operations.",
        },
        {
            id: 3,
            title: "Custom Software Development:",
            para1: "Custom Applications: Developing bespoke software solutions such as LIMS and ELN.",
            para2: "Mobile Applications: Creating mobile apps for patient engagement and remote monitoring.",
        },
    ]
    return (
        <section className="text-gray-800">
            <div className="max-w-xl md:p-6 p-2 py-5 mx-auto md:space-y-16 space-y-6 lg:px-8 lg:max-w-7xl">
                <motion.div
                    variants={fadein("up", 0.2)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: true, amount: 0.8 }}>
                    <h2 className="md:text-Heading font-bold tracking-tight text-center text-Heading-sm text-blue950">Our Services</h2>
                    <p className="max-w-3xl mx-auto mt-4 md:text-xl text-lg text-center text-gray-800">We provide comprehensive IT solutions tailored for the pharmaceutical industry. Our services are designed to streamline operations, enhance research and development and ensure regulatory compliance. We specialize in:</p>
                </motion.div>
                <div className="grid md:gap-8 gap-4 lg:grid-cols-2 lg:items-center">
                    <motion.div
                        variants={fadein("left", 0.2)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: true, amount: 0.8 }}>
                        <div className="md:space-y-12 space-y-4">
                            {service1.map((item) => (
                                <div key={item.id} className="flex">
                                    <div className="flex-shrink-0 md:block hidden">
                                        <div className="flex items-center justify-center w-12 h-12 rounded-md bg-blue950 text-gray-50">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="md:ml-4 md:p-0 p-2">
                                        <h4 className="md:text-CardHeading text-CardHeading-sm font-semibold leading-6 text-black">{item.title}</h4>
                                        <p className="mt-2 md:text-Para text-Para-sm text-gray-800">{item.para1}</p>
                                        <p className="mt-2 md:text-Para text-Para-sm text-gray-800">{item.para2}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                    <motion.div
                        variants={fadein("right", 0.2)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: true, amount: 0.8 }} className="md:mt-10 mt-1 md:my-3 my-0 lg:mt-0">
                        <Image src={Pharma3} alt="" className="mx-auto" />
                    </motion.div>
                </div>
                <div>
                    <div className="grid md:gap-8 gap-4 lg:grid-cols-2 lg:items-center">
                        <motion.div
                            variants={fadein("right", 0.2)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: true, amount: 0.8 }} className="lg:col-start-2">
                            <div className="md:space-y-12 space-y-4">
                                {service2.map((item) => (
                                    <div key={item.id} className="flex"><div className="flex-shrink-0  md:block hidden">
                                        <div className="flex items-center justify-center w-12 h-12 rounded-md bg-blue950 text-gray-50">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                        </div>
                                    </div>
                                        <div className="md:ml-4 md:p-0 p-2">
                                            <h4 className="md:text-CardHeading text-CardHeading-sm font-semibold leading-6 text-black">{item.title}</h4>
                                            <p className="mt-2 md:text-Para text-Para-sm text-gray-800">{item.para1}</p>
                                            <p className="mt-2 md:text-Para text-Para-sm text-gray-800">{item.para2}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                        <motion.div
                            variants={fadein("left", 0.2)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: true, amount: 0.8 }} className="lg:mt-0 lg:col-start-1 lg:row-start-1 my-3">
                            <Image src={Pharma2} alt="" className="mx-auto" />
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Service