"use client"
import React from 'react'
import { FaCode} from "react-icons/fa";
import { FaLaptopCode } from "react-icons/fa";
import { FaPenToSquare } from "react-icons/fa6";
import { FaChartLine } from "react-icons/fa";
import { FaTools } from "react-icons/fa";
import { motion } from 'framer-motion';
import { fadein } from "@/components/ui/variants";

const Services = () => {

    const items=[
        {id:1,
            icon:FaCode,
            title:"Website Design and Development",
            desc:"We provide comprehensive website design and development services, creating custom, responsive designs that meet your business needs. Our expertise includes implementing content management systems as well as developing seamless e-commerce solutions. We ensure your website is visually appealing, functional, and optimized for performance.",
        },
        {id:2,
            icon:FaLaptopCode,
            title:"Web Application Development",
            desc:"We specialize in web application development, delivering custom web apps tailored to your specific business needs. Our services include creating Progressive Web Apps (PWAs), developing robust APIs, and building dynamic Single Page Applications (SPAs). We ensure our web applications are user-friendly, feature-rich, and provide seamless performance across all devices.",
        },
        {id:3,
            icon:FaPenToSquare,
            title:"UX/UI Design",
            desc:"We offer expert UX/UI design services, focusing on optimizing user experience and creating intuitive user interfaces. Our team specializes in crafting visually appealing designs, developing prototypes, and wireframing to ensure seamless navigation and enhanced user engagement, ultimately delivering a compelling and effective digital experience for your audience.",
        },
        {id:4,
            icon:FaChartLine,
            title:"SEO and Digital Marketing",
            desc:"We provide comprehensive SEO and digital marketing services to boost your online visibility and drive traffic. Our offerings include search engine optimization, content strategy development, social media integration, and detailed analytics and reporting. We aim to enhance your online presence, engage your target audience, and improve your overall digital performance.",
        },
        {id:5,
            icon:FaTools,
            title:"Maintenance and Support",
            desc:"We offer reliable website maintenance and support services to ensure your site runs smoothly and securely. Our services include regular updates, routine backups, technical support, and security enhancements. We are dedicated to keeping your website optimized and protected, allowing you to focus on your core business activities.",
        },

    ]

  return (
    <div className='py-4 overflow-hidden'>
        <div className='flex flex-col items-center justify-center'>
            <motion.h2
            variants={fadein("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.8 }}
              className="mb-6 font-sans text-blue-900 text-MainHeading-sm md:text-MainHeading md:p-6 font-semibold leading-none tracking-tight cursor-pointer">
            <span className="relative inline-block">
                <svg
                viewBox="0 0 52 24"
                fill="currentColor"
                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-50 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                >
                <defs>
                    <pattern
                    id="fdca20a0-aeb4-4caf-ba1b-4351eee42363"
                    x="0"
                    y="0"
                    width=".135"
                    height=".30"
                    >
                    <circle cx="1" cy="1" r=".7" />
                    </pattern>
                </defs>
                <rect
                    fill="url(#fdca20a0-aeb4-4caf-ba1b-4351eee42363)"
                    width="52"
                    height="24"
                />
                </svg>
                <span className="relative">Our</span>
            </span>{' '}
            Offerings
            </motion.h2>
            
            <div className='w-[100%] md:pl-20 flex flex-wrap gap-4 md:gap-10 items-center justify-center'>
                {items.map((feat)=>{
                    return(
                        <motion.div
                        variants={fadein("down2", 0.2)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: true, amount: 0.8 }}
                        key={feat.id} className='w-[90%] rounded-lg md:w-2/5 lg:w-1/4 h-full md:h-[27rem] lg:h-[32rem] xl:h-[26rem] flex flex-col items-center justify-start shadow-md shadow-gray-300 p-2 hover:bg-blue-50 cursor-pointer'>
                            <span className='text-MainHeading-sm md:text-MainHeading font-semibold p-4 rounded-full bg-green-100'><feat.icon/></span>
                            <h2 className='text-blue-950 text-CardHeading-sm md:text-CardHeading pb-2 font-semibold'>{feat.title}</h2>
                            <p className='flex items-center justify-center'>{feat.desc}</p>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    </div>
  );
};

export default Services;