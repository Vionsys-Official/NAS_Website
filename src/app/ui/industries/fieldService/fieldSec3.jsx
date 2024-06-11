"use client"
import React, { useState } from 'react';
import { FaCheckCircle } from "react-icons/fa";
import { motion } from 'framer-motion';
import { fadein } from '@/components/ui/variants';

const industryData = {
    Telecommunications: [
        'Network Deployment and Configuration',
        'Remote Troubleshooting and Diagnostics',
        'Service Provisioning and Activation',
        'Asset and Inventory Management'

    ],
    Construction: [
        'Project Management and Scheduling',
        'quipment Maintenance and Tracking',
        'Quality Control and Inspections',
        'Safety Compliance and Incident Reporting'
    ],
    Healthcare: [
        'Medical Equipment Installation and Calibration',
        'Remote Monitoring and Telemedicine Solutions',
        'Electronic Health Record (EHR) Implementation and Integration',
        'Medical Device Maintenance and Compliance'
    ],
    Manufacturing: [
        'Equipment Maintenance and Predictive Maintenance',
        'Production Workflow Optimization',
        'Quality Control and Inspection Management',
        'Supply Chain Visibility and Collaboration'
    ],
    Utilities: [
        'Asset Management and Maintenance',
        'Field Service Dispatch and Workforce Management',
        'Smart Grid and Metering Solutions',
        'Customer Engagement and Billing'
    ],

};

// Industry Paragraphs
const industryParagraphs = {
    Telecommunications: (
        <p className="text-lg leading-6 text-gray-500">
            In the realm of service provision, the backbone rests upon skilled field technicians who undertake critical tasks such as network installations, upgrades and maintenance ensuring seamless connectivity and optimal performance.
        </p>
    ),
    Construction: (
        <p className="text-lg leading-6 text-gray-500">
            Construction companies leverage field service software to streamline project management, ensure equipment maintenance and conduct thorough on-site inspections optimizing efficiency and enhancing project outcomes.
        </p>
    ),
    Healthcare: (
        <p className="text-lg leading-6 text-gray-500">
            Field service software plays a pivotal role in the maintenance of medical equipment, coordination of home healthcare services and management of emergency response teams providing efficient scheduling and robust tracking capabilities.
        </p>
    ),
    Manufacturing: (
        <p className="text-lg leading-6 text-gray-500">
            In the manufacturing sector, field service is indispensable for the installation, maintenance and repair of equipment along with conducting rigorous quality inspections ensuring operational excellence and product reliability
        </p>
    ),
    Utilities: (
        <p className="text-lg leading-6 text-gray-500">
            Electrical, water and gas services require field technicians for installation, maintenance and repair tasks.
        </p>
    ),


};

const fieldSec3 = () => {
    const handleIndustryChange = (industry) => {
        setSelectedIndustry(industry);
    };
    const [selectedIndustry, setSelectedIndustry] = useState((Object.keys(industryData)[0]));

    return (
        <section>
            {/* Section 4 */}
            <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                <motion.div
                    variants={fadein("up", 0.2)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.8 }}
                    className="text-center"
                >
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight text-gray-900">
                        Industry-Wise <span className="text-blue-500 mx-1 font-extrabold text-4xl relative inline-block stroke-current">
                            Field Service
                            <svg className="absolute -bottom-0.5 w-full max-h-1.5" viewBox="0 0 55 5" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                                <path d="M0.652466 4.00002C15.8925 2.66668 48.0351 0.400018 54.6853 2.00002" ></path>
                            </svg>
                        </span> Use Cases
                    </h2>
                    <p className="pb-12 pt-5 text-base md:text-lg leading-6 text-gray-500">
                        We've segregated AI and ML use cases by industry to simplify your exploration. Explore the possibilities for
                        your industry and get a free 2-hour consultation to discuss tailored AI/ML development services that can
                        unlock even greater potential for your business.
                    </p>
                </motion.div>

                <div className="text-Para flex items-center justify-center font-semibold text-gray-500 border-y border-gray-400">
            <ul className="flex flex-col w-fit md:flex-row justify-center gap-4">
                {Object.keys(industryData).map(industry => (
                    <li key={industry}>
                        <div
                            className={`p-4 w-fit cursor-pointer border-b-2 border-transparent rounded-t-lg ${selectedIndustry === industry ? 'text-blue-700 border-blue-700' : ''}`}
                            onClick={() => handleIndustryChange(industry)}
                        >
                            {industry}
                        </div>
                    </li>
                ))}
            </ul>
        </div>
                

                <div className="mt-8">
                    {selectedIndustry && (
                        <>
                            {industryParagraphs[selectedIndustry]}
                            <ul className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                                {industryData[selectedIndustry].map((item, index) => (
                                    <motion.li
                                        variants={fadein("right", 0.2)}
                                        initial="hidden"
                                        whileInView="show"
                                        viewport={{ once: false, amount: 0.8 }}
                                        key={index}
                                        className="flex items-start mx-4"
                                    >
                                        <FaCheckCircle className="flex-shrink-0 h-4 w-4 text-blue-500 mt-1" />
                                        <span className="ml-3 text-lg leading-6 text-gray-500">{item}</span>
                                    </motion.li>
                                ))}
                            </ul>
                        </>
                    )}
                </div>
            </div>
        </section>

    )
}

export default fieldSec3;