'use client'
import React from 'react'
import { fadein } from '@/components/ui/variants';
import { motion } from 'framer-motion';
import { MdOutlineInsertChart } from "react-icons/md";


const Services = () => {

    const service = [
        {
            id: 1,
            title: "Enterprise Resource Planning (ERP) Solutions",
            para: "We implement robust ERP systems that integrate all facets of manufacturing operations from supply chain management to production scheduling and quality control. Our ERP solutions provide real-time data analytics, helping manufacturers make informed decisions and streamline their processes."
        },
        {
            id: 2,
            title: "Industrial IoT",
            para: "Leveraging the power of Industrial Internet of Things (IIoT), we enable manufacturers to connect machines, devices and systems across the production floor. Our IIoT solutions facilitate predictive maintenance, improve asset utilization and enhance operational efficiency through real-time monitoring and data analysis."
        },
        {
            id: 3,
            title: "Smart Manufacturing",
            para: "We bring the concept of smart manufacturing to life by integrating advanced technologies such as AI, machine learning and automation into manufacturing processes. This leads to increased flexibility, reduced downtime and higher production quality."
        },
        {
            id: 4,
            title: "Cybersecurity",
            para: "In an era of increasing cyber threats, protecting sensitive manufacturing data is crucial. Our comprehensive cybersecurity services safeguard your digital assets, ensuring the confidentiality, integrity and availability of critical information."
        },
        {
            id: 5,
            title: "Supply Chain Management Solutions",
            para: "Our IT solutions streamline supply chain management, providing end-to-end visibility and control. By integrating logistics, inventory management and procurement processes, we help manufacturers reduce costs and improve supply chain efficiency."
        },
        {
            id: 6,
            title: "Custom Software Development",
            para: "We develop bespoke software solutions tailored to meet the unique needs of each manufacturer. From production management systems to specialized applications, our custom software enhances operational capabilities and supports business growth."
        },
        {
            id: 7,
            title: "Cloud Computing",
            para: "Our cloud computing services offer scalable and flexible IT infrastructure, allowing manufacturers to access powerful computing resources and store vast amounts of data securely. Cloud solutions enable better collaboration, disaster recovery and cost savings."
        }
    ]

    return (
        <section className="p-6 text-gray-800">
            <div className="mx-auto max-w-[90%]">
                <motion.h2
                    variants={fadein("up", 0.2)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: true, amount: 0.8 }}
                    className="md:text-Heading text-Heading-sm font-bold text-center text-blue2">Our Services</motion.h2>

                <div className="grid gap-6 py-8 lg:grid-cols-3">
                    {service.map((item) => (
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
                            key={item.id} className="flex flex-col md:p-8 p-2 md:space-y-4 space-y-2 bg-gray-200 rounded-bl-3xl rounded-tr-3xl">
                            <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 text-xl font-bold rounded-full bg-blue950 text-gray-50"><MdOutlineInsertChart className='w-7 h-7' /></div>
                            <h1 className="text-lg text-black font-semibold md:text-CardHeading text-CardHeading-sm">{item.title}:</h1>
                            <p className='md:text-Para text-Para-sm'>{item.para}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Services