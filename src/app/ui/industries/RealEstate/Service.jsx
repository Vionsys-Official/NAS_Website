'use client'
import React from 'react'
import { fadein } from '@/components/ui/variants';
import { motion } from 'framer-motion';

const Service = () => {

    const service = [
        {
            id: 1,
            title: "Property Management Systems",
            para: "Efficiently manage property listings, tenants and maintenance with our streamlined software, reducing manual work and keeping data at your fingertips.",
            point1: "Automated Listings: Keep property listings up-to-date across all platforms with minimal effort.",
            point2: "Tenant Portals: Provide tenants easy access to their accounts, payments and maintenance requests.",
            point3: "Maintenance Tracking: Stay on top of maintenance with automated reminders and tracking features.",
        },
        {
            id: 2,
            title: "Customer Relationship Management (CRM)",
            para: "Enhance client interactions with our real estate CRM systems. It helps you to manage leads, track interactions and maintain detailed client histories.",
            point1: "Lead Management: Capture and nurture leads with automated follow-ups and personalized communication.",
            point2: "Client Interaction Logs: Maintain detailed records of client communications.",
            point3: "Analytics & Reporting: Gain insights into customer behavior and sales trends.",
        },
        {
            id: 3,
            title: "Virtual Tours and Augmented Reality",
            para: "Offer immersive experiences with virtual tours and augmented reality (AR) allowing clients to explore properties remotely.",
            point1: "3D Virtual Tours: Create realistic, interactive property tours accessible online.",
            point2: "AR Property Staging: Visualize furniture and decor in vacant properties using smartphones or tablets.",
            point3: "Enhanced Online Listings: Stand out with dynamic and engaging property listings.",
        },
        {
            id: 4,
            title: "Data Analytics and Business Intelligence",
            para: "Leverage data analytics and business intelligence to make informed decisions, understand market trends and optimize strategies.",
            point1: "Market Analysis: Gain insights into local market conditions and trends.",
            point2: "Pricing Optimization: Set competitive and profitable pricing strategies using data.",
            point3: "Operational Metrics: Monitor key performance indicators to improve efficiency and service quality.",
        },
        {
            id: 5,
            title: "Mobile Applications",
            para: "Stay connected and manage your business on-the-go with custom mobile apps designed for real estate professionals.",
            point1: "Agent Apps: Access property information, client details and scheduling tools anytime, anywhere.",
            point2: "Client Apps: Provide with a convenient way to browse listings, schedule viewings and communicate with agents.",
            point3: "Integration with CRM and PMS: Ensure seamless data synchronization across all devices and platforms.",
        },
        {
            id: 6,
            title: "Cybersecurity Solutions",
            para: "Protect sensitive data and ensure compliance with our comprehensive cybersecurity solutions.",
            point1: "Data Encryption: Secure client and business data with advanced encryption technologies.",
            point2: "Threat Monitoring: Stay ahead of potential cyber threats with continuous convenient monitoring.",
            point3: "Compliance Assistance: Ensure IT practices comply with industry regulations and standards.",
        },
    ]

    return (
        <div className="px-4 py-6 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <motion.div
                variants={fadein("up", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.8 }}
                className="max-w-xl mb-4 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                <h2 className="max-w-lg md:mb-6 mb-3 text-center font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                    <span className="relative inline-block">
                        <svg
                            viewBox="0 0 52 24"
                            fill="currentColor"
                            className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                        >
                            <defs>
                                <pattern
                                    id="db164e35-2a0e-4c0f-ab05-f14edc6d4d30"
                                    x="0"
                                    y="0"
                                    width=".135"
                                    height=".30"
                                >
                                    <circle cx="1" cy="1" r=".7" />
                                </pattern>
                            </defs>
                            <rect
                                fill="url(#db164e35-2a0e-4c0f-ab05-f14edc6d4d30)"
                                width="52"
                                height="24"
                            />
                        </svg>
                        <span className="relative md:text-Heading text-Heading-sm text-blue950">Services Provided</span>
                    </span>
                </h2>
                <p className="text-base text-gray-700 md:text-lg">
                    Our services are designed to enhance efficiency, improve customer experiences, and drive business growth for real estate professionals. Here’s how we can help you elevate your real estate business:
                </p>
            </motion.div>
            <div className="grid max-w-sm gap-5 mb-8 lg:grid-cols-3 sm:mx-auto lg:max-w-full">
                {service.map((item) => (
                    <motion.div
                    initial={{ opacity: 0, scale: 0.7 }} //X:100
                    whileInView={{ opacity: 1, scale: 1 }} //y:100
                    transition={{
                      delay: 0.2,
                      scale: { type: "spring", stiffness: 30 },
                      opacity: { duration: 0.6 },
                      ease: "easeInOut",
                    }} key={item.id} className="md:p-5 p-1 text-center border-2 rounded-2xl">
                        <h1 className="inline-block max-w-xs mx-auto mb-3 md:text-CardHeading text-CardHeading-sm font-extrabold leading-7 transition-colors duration-200 text-blue2 hover:text-blue950">
                            {item.title}
                        </h1>
                        <h3 className="inline-flex hover:text-blue2 items-center md:text-Para text-Para-sm font-semibold transition-colors duration-200 mb-2">{item.para}</h3>
                        <p className="max-w-xs mx-auto md:text-Para text-Para-sm mb-2 text-gray-800">{item.point1}</p>
                        <p className="max-w-xs mx-auto md:text-Para text-Para-sm mb-2 text-gray-800">{item.point2}</p>
                        <p className="max-w-xs mx-auto md:text-Para text-Para-sm mb-2 text-gray-800">{item.point3}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}

export default Service