"use client"
import Image from 'next/image';
import { FaCheck } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import React, { useState } from 'react';
import MySec1Field from '/public/assets/industries/fieldSer/MySec1Field.jpg'
import MySect2I from '/public/assets/industries/fieldSer/MySect2I.jpg'
import LastSect from '/public/assets/industries/fieldSer/LastSect.jpg'

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
    Telecommunications: [
        <p className="text-lg leading-6 text-gray-500">
            In the realm of service provision, the backbone rests upon skilled field technicians who undertake critical tasks such as network installations, upgrades, and maintenance, ensuring seamless connectivity and optimal performance.
        </p>
    ],
    Construction: [
        <p className="text-lg leading-6 text-gray-500">
            Construction companies leverage field service software to streamline project management, ensure equipment maintenance, and conduct thorough on-site inspections, optimizing efficiency and enhancing project outcomes.
        </p>
    ],
    Healthcare: [
        <p className="text-lg leading-6 text-gray-500">
            Field service software plays a pivotal role in the maintenance of medical equipment, coordination of home healthcare services, and management of emergency response teams, providing efficient scheduling and robust tracking capabilities.
        </p>
    ],
    Manufacturing: [
        <p className="text-lg leading-6 text-gray-500">
            In the manufacturing sector, field service is indispensable for the installation, maintenance, and repair of equipment, along with conducting rigorous quality inspections, ensuring operational excellence and product reliability
        </p>
    ],
    Utilities: [
        <p className="text-lg leading-6 text-gray-500">
            Electrical, water, and gas services require field technicians for installation, maintenance, and repair tasks.
        </p>
    ],


};


const fildService = () => {

    const handleIndustryChange = (industry) => {
        setSelectedIndustry(industry);
    };
    const [selectedIndustry, setSelectedIndustry] = useState((Object.keys(industryData)[0]));
    

    return (
        <main>
            <section className="relative w-full h-[80vh] min-h-[500px] flex items-center justify-center">
                <div className="absolute inset-0 bg-black">
                    <Image
                        alt="Heroic Figure"
                        className="absolute inset-0 object-cover opacity-40  object-center"
                        layout="fill"
                        objectFit="cover"
                        src={MySec1Field}
                    />
                </div>
                <div className="relative z-10 max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-green-300 drop-shadow-lg">
                        Optimize field service for seamless productivity.
                    </h1>
                    <p className="mt-4 text-lg sm:text-xl lg:text-2xl font-medium text-white drop-shadow-lg">
                        Achieve a holistic digital transformation by streamlining service workflows, eradicating silos, and fine-tuning orchestration among disparate systems through our Field Service Management Software.
                    </p>

                </div>
            </section>

            <section className="flex mx-10 flex-col md:flex-row items-center justify-between gap-8 px-4 md:px-6 py-5 md:py-10 lg:py-12">
                <div className="flex-1 max-w-xl">
                    <h2 className="text-3xl md:text-4xl font-bold text-blue-800 tracking-tighter mb-4">Comprehensive On-Site Services for Optimal Performance</h2>
                    <p className="text-gray-900 dark:text-gray-900 mb-6">Our expert team delivers comprehensive on-site services to ensure your operations run smoothly and efficiently. From routine maintenance and emergency repairs to detailed inspections and performance evaluations, we provide tailored solutions to meet your specific needs. Trust us to enhance your field operations with reliability and excellence.
                    </p>
                    <ul className="space-y-3 text-gray-900 dark:text-gray-900">
                        <li className="flex items-start">
                            <FaCheck className="w-5 h-5 mr-3 text-gray-900 dark:text-gray-50" />
                            <span>Routine maintenance</span>
                        </li>
                        <li className="flex items-start">
                            <FaCheck className="w-5 h-5 mr-3 text-gray-900 dark:text-gray-50" />
                            <span>Emergency repair</span>
                        </li>
                        <li className="flex items-start">
                            <FaCheck className="w-5 h-5 mr-3 text-gray-900 dark:text-gray-50" />
                            <span>Scheduled inspections</span>
                        </li>
                        <li className="flex items-start">
                            <FaCheck className="w-5 h-5 mr-3 text-gray-900 dark:text-gray-50" />
                            <span>Performance evaluations</span>
                        </li>

                    </ul>
                </div>

                <div className="flex-1 w-full md:max-w-[500px] shadow-xl rounded-xl overflow-hidden">
            
                <Image width={500}  height={500} src={MySect2I}/>
        
                </div>
            </section>

            <section>
                {/* Section 4 */}
                <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight text-gray-900">Industry-Wise <span class="text-blue-500 mx-1 font-extrabold text-4xl relative inline-block stroke-current">
                            Field Service
                            <svg class="absolute -bottom-0.5 w-full max-h-1.5" viewBox="0 0 55 5" xmlns="http://www.w3.org/2000/svg"
                                preserveAspectRatio="none">
                                <path d="M0.652466 4.00002C15.8925 2.66668 48.0351 0.400018 54.6853 2.00002" stroke-width="2"></path>
                            </svg>
                        </span> Use Cases</h2>
                        <p className="mt-4 text-base md:text-lg leading-6 text-gray-500">
                            We've segregated AI and ML use cases by industry to simplify your exploration. Explore the possibilities for
                            your industry and get a free 2-hour consultation to discuss tailored AI/ML development services that can
                            unlock even greater potential for your business.
                        </p>
                    </div>

                    <div className="text-sm font-semibold text-center text-gray-500 border-b border-gray-200  mt-8">
                        <ul className="flex flex-wrap mb-px justify-center space-x-4">
                            {Object.keys(industryData).map(industry => (
                                <li key={industry} className="mb-2">
                                    <div

                                        className={`inline-block p-4 cursor-pointer border-b-2 border-transparent rounded-t-lg 
             
            ${selectedIndustry === industry ? 'text-blue-700 underline border-blue-700' : ''}`}
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
                                        <li key={index} className="flex items-start mx-4">
                                            <FaCheckCircle className="flex-shrink-0 h-4 w-4 text-blue-500 mt-1" />
                                            <span className="ml-3 text-lg leading-6 text-gray-500">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </>
                        )}
                    </div>

                </div>
            </section>

            <section className="bg-white dark:bg-gray-900">
                {/* Section 5 */}
                <div className="relative flex">
                    <div className="min-h-screen lg:w-1/3"></div>
                    <div id="MService" className="hidden w-3/4 min-h-screen dark:bg-gray-800 lg:block"></div> {/* ----- */}

                    <div
                        className="container flex flex-col justify-center w-full min-h-[50px] px-6 py-10 mx-auto lg:absolute lg:inset-x-0">
                        <h1 className="text-4xl font-semibold text-gray-800  capitalize lg:text-3xl dark:text-white">
                            Field <span className="text-blue-500">Service</span> <br />Management Software
                        </h1>

                        <div className="mt-5 lg:mt-10 lg:flex lg:items-center">
                            <Image height={500} width={500} className="object-cover object-center mb-12 w-full lg:w-[32rem] rounded-lg h-96"
                             src={LastSect} alt="" />

                            <div className="mt-8 lg:px-10 lg:mt-0">
                                <h1 className="text-4xl font-semibold text-gray-800 dark:text-white lg:w-72">

                                    Softwar's to Power Your Growing Business
                                </h1>

                                <p className="max-w-lg mt-6 text-gray-500 dark:text-gray-400">
                                    NAS's field service management software enables you to drive efficiency,
                                    streamline your processes and optimize your entire service management experience.
                                    Seamlessly integrate your ERPs & accounting systems, provide a great user experience,
                                    and unlock the productivity your company needs to grow.
                                </p>


                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </main>
    )
}

export default fildService