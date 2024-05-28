import React from 'react'
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
            para1: "ERP and Supply Chain Solutions: Tailored ERP systems to integrate business processes such as procurement, manufacturing and inventory management, along with advanced analytics for demand forecasting and logistics management.",
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
            <div className="max-w-xl p-6 py-5 mx-auto space-y-16 lg:px-8 lg:max-w-7xl">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight text-center sm:text-5xl text-gray-900">Our Services</h2>
                    <p className="max-w-3xl mx-auto mt-4 text-xl text-center text-gray-600">We provide comprehensive IT solutions tailored for the pharmaceutical industry. Our services are designed to streamline operations, enhance research and development and ensure regulatory compliance. We specialize in:</p>
                </div>
                <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
                    <div>
                        <div className="space-y-12">
                            {service1.map((item) => (
                                <div key={item.id} className="flex">
                                    <div className="flex-shrink-0">
                                        <div className="flex items-center justify-center w-12 h-12 rounded-md bg-violet-400 dark:bg-violet-600 text-gray-50">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="ml-4">
                                        <h4 className="text-lg font-medium leading-6 text-gray-900">{item.title}</h4>
                                        <p className="mt-2 text-gray-600">{item.para1}</p>
                                        <p className="mt-2 text-gray-600">{item.para2}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="mt-10 lg:mt-0">
                        <Image src={Pharma3} alt="" className="mx-auto" />
                    </div>
                </div>
                <div>
                    <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
                        <div className="lg:col-start-2">
                            <div className="space-y-12">
                                {service2.map((item) => (
                                    <div key={item.id} className="flex"><div className="flex-shrink-0">
                                        <div className="flex items-center justify-center w-12 h-12 rounded-md bg-violet-400 dark:bg-violet-600 text-gray-50">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                        </div>
                                    </div>
                                        <div className="ml-4">
                                            <h4 className="text-lg font-medium leading-6 text-gray-900">{item.title}</h4>
                                            <p className="mt-2 text-gray-600">{item.para1}</p>
                                        <p className="mt-2 text-gray-600">{item.para2}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="lg:mt-0 lg:col-start-1 lg:row-start-1">
                            <Image src={Pharma2} alt="" className="mx-auto" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Service