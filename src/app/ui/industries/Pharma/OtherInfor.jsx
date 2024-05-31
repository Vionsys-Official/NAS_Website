'use client'
import React from 'react'
import { fadein } from '@/components/ui/variants';
import { motion } from 'framer-motion';
import Customization from '/public/assets/industries/Pharma/Customization.png'
import Innovation from '/public/assets/industries/Pharma/Innovation.jpeg'
import Regular from '/public/assets/industries/Pharma/Regular.jpg'
import Image from 'next/image'

const OtherInfor = () => {
    return (
        <div className='py-10'>
            <motion.div
                variants={fadein("down", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.8 }}
                className='py-5'>
                <h2 className="max-w-6xl mx-auto text-center md:text-Heading text-Heading-sm font-bold tracking-tight text-blue950 text-2xl sm:leading-none">Integrated Solutions for Technological Innovation, Regulatory Compliance and Customization in Pharmaceuticals.</h2>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, scale: 0.7 }} //X:100
                whileInView={{ opacity: 1, scale: 1 }} //y:100
                transition={{
                    delay: 0.2,
                    scale: { type: "spring", stiffness: 30 },
                    opacity: { duration: 0.6 },
                    ease: "easeInOut",
                }} className="p-2 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-6">
                <div className="grid gap-5 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
                    <div className="overflow-hidden transition-shadow duration-300 bg-white rounded">
                        <Image
                            src={Innovation}
                            className="object-cover w-full h-64 rounded"
                            alt=""
                        />
                        <div className="md:py-5 py-2">
                            <p className="mb-3 md:text-CardHeading text-CardHeading-sm text-center font-semibold leading-5">Technological Innovation</p>
                            <p className="text-gray-800 md:text-start text-center">
                                At the forefront of technological advancements, we aim to revolutionize the pharmaceutical sector. Our plans include developing predictive analytics for adverse drug reactions, integrating IoT devices for real-time patient monitoring, and leveraging cloud computing for scalable research collaboration.
                            </p>
                        </div>
                    </div>
                    <div className="overflow-hidden transition-shadow duration-300 bg-white rounded">
                        <Image
                            src={Regular}
                            className="object-cover w-full h-64 rounded"
                            alt=""
                        />
                        <div className="md:py-5 py-2">
                            <p className="mb-3 md:text-CardHeading text-CardHeading-sm text-center font-semibold leading-5">Regulatory Compliance</p>
                            <p className="text-gray-800 md:text-start text-center">
                                Our solutions are designed with compliance and security at their core. We employ state-of-the-art encryption, regular security audits and stringent access controls to protect your sensitive data. Our systems are continuously updated to adhere to the latest regulatory standards ensuring your peace of mind.
                            </p>
                        </div>
                    </div>
                    <div className="overflow-hidden transition-shadow duration-300 bg-white rounded">
                        <Image
                            src={Customization}
                            className="object-cover w-full h-64 rounded"
                            alt=""
                        />
                        <div className="md:py-5 py-2">
                            <p className="mb-3 md:text-CardHeading text-CardHeading-sm text-center font-semibold leading-5">
                                Customization in Pharma
                            </p>
                            <p className="text-gray-800 md:text-start text-center">
                                We understand that every pharmaceutical company has unique needs. Our solutions are highly customizable and can be seamlessly integrated with your existing systems and workflows. Whether you need bespoke software development or integration with third-party applications, we have the expertise to deliver.
                            </p>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export default OtherInfor