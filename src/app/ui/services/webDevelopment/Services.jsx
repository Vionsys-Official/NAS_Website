import React from 'react'
import { FaCode} from "react-icons/fa";
import { FaLaptopCode } from "react-icons/fa";
import { FaPenToSquare } from "react-icons/fa6";
import { FaChartLine } from "react-icons/fa";
import { FaTools } from "react-icons/fa";

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
    <div className='py-10'>
        <div className='flex flex-col items-center justify-center'>
            <h1 className='text-MainHeading-sm md:text-MainHeading pb-2 md:pb-10 font-semibold cursor-pointer'>Our Offerings</h1>
            <div className='w-[100%] md:pl-20 flex flex-wrap gap-4 md:gap-10 items-center justify-center'>
                {items.map((feat)=>{
                    return(
                        <div key={feat.id} className='w-full md:w-1/4 h-[24rem] sm:h-[18rem] flex flex-row items-start justify-center shadow-md shadow-gray-300 p-2 cursor-pointer'>
                            <span className='text-MainHeading-sm md:text-MainHeading font-semibold pr-2 h-[5rem]'><feat.icon/></span>
                            <div>
                                <h2 className='text-CardHeading-sm md:text-CardHeading pb-2 h-[5rem]'>{feat.title}</h2>
                                <p className='flex items-center justify-center'>{feat.desc}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    </div>
  );
};

export default Services;