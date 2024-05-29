import React from 'react'
import { RiLightbulbFlashFill } from "react-icons/ri";
import { RiUserStarLine } from "react-icons/ri";
import { FaHandshakeSimple } from "react-icons/fa6";
import { HiShieldCheck } from "react-icons/hi";
import Image from 'next/image';
import wcu from '/public/assets/services/webDev/wcs3.jpg';

const Whychooseus = () => {

    const items=[
        {
            id:1,
            icon:RiLightbulbFlashFill,
            title:"Innovative Solutions",
            desc:"We deliver cutting-edge solutions tailored to your unique requirements.",
        },
        {
            id:2,
            icon:RiUserStarLine,
            title:"Expertise",
            desc:"Our team comprises skilled professionals with extensive industry experience.",
        },
        {
            id:3,
            icon:FaHandshakeSimple,
            title:"Client-Centric Approach",
            desc:"Your satisfaction is our priority, and we strive to exceed your expectations.",
        },
        {
            id:4,
            icon:HiShieldCheck,
            title:"Reliability",
            desc:"Count on us for reliable support and ongoing maintenance to keep your digital assets running smoothly.",
        },
    ]

  return (
    <div className='flex items-center justify-center'>
    <div className='w-[90%] flex flex-col md:flex-row items-center justify-center py-10 md:py-14 my-4 md:my-8 bg-gradient-to-l from-green-200 to-transparent '>
        <div className='w-full md:w-1/2 shadow-lg shadow-gray-600 md:scale-105'>
            <Image src={wcu} alt=''></Image>
        </div>
        <div className='w-full md:w-1/2 pl-4 mt-6 flex flex-col items-center justify-center'>
            <h1 className='text-MainHeading-sm md:text-MainHeading md:pb-4 font-semibold cursor-pointer'>Why Choose Us?</h1>
            <div className='flex flex-col gap-2 md:pl-6'>
                {items.map((feat)=>{
                    return(
                        <div key={feat.id} className='flex flex-col items-start justify-center cursor-pointer'>
                            <div className='flex flex-row gap-2 md:gap-6 items-start justify-center py-2'>
                                <div className='text-MainHeading-sm md:text-MainHeading'><feat.icon/></div>
                                <h2 className='text-CardHeading-sm md:text-CardHeading font-semibold'>{feat.title}</h2>
                            </div>
                            <p className='text-Para-sm md:text-Para'>{feat.desc}</p>
                            
                        </div>
                    );
                })}
            </div>
        </div>
        
    </div>
    </div>
  );
};

export default Whychooseus;