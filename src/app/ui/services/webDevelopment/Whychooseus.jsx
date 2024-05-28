import React from 'react'
import { RiLightbulbFlashFill } from "react-icons/ri";
import { RiUserStarLine } from "react-icons/ri";
import { FaHandshakeSimple } from "react-icons/fa6";
import { HiShieldCheck } from "react-icons/hi";
import Image from 'next/image';
import wcu from '/public/assets/services/webDev/wcu2.jpg';

const Whychooseus = () => {
  return (
    <div className='flex items-center justify-center'>
    <div className='w-[90%] flex flex-row items-center justify-center py-20 my-10 bg-gradient-to-l from-blue-200 to-transparent '>
        <div className='w-1/2 shadow-lg shadow-gray-600 scale-105'>
            <Image src={wcu} alt=''></Image>
        </div>
        <div className='w-1/2 pl-4 flex flex-col items-center justify-center'>
            <h1 className='text-MainHeading-sm md:text-MainHeading pb-4 font-semibold cursor-pointer'>Why Choose Us?</h1>
            <div className='flex flex-col'>
                <div className='flex flex-row gap-6 items-center justify-start p-4 cursor-pointer'>
                    <div className='text-MainHeading-sm md:text-MainHeading'><RiLightbulbFlashFill/></div>
                    <div>
                    <h2 className='text-CardHeading-sm md:text-CardHeading font-semibold'>Innovative Solutions</h2>
                    <p className='text-Para-sm md:text-Para'>We deliver cutting-edge solutions tailored to your unique requirements.</p>
                    </div>
                </div>
                <div className='flex flex-row gap-6 items-center justify-start p-4 cursor-pointer'>
                    <span className='text-MainHeading-sm md:text-MainHeading'><RiUserStarLine/></span>
                    <div>
                    <h2 className='text-CardHeading-sm md:text-CardHeading font-semibold'>Expertise</h2>
                    <p className='text-Para-sm md:text-Para'>Our team comprises skilled professionals with extensive industry experience.</p>
                    </div>
                </div>
                <div className='flex flex-row gap-6 items-center justify-start p-4 cursor-pointer'>
                    <span className='text-MainHeading-sm md:text-MainHeading '><FaHandshakeSimple/></span>
                    <div>
                    <h2 className='text-CardHeading-sm md:text-CardHeading font-semibold'>Client-Centric Approach</h2>
                    <p className='text-Para-sm md:text-Para'>Your satisfaction is our priority, and we strive to exceed your expectations.</p>
                    </div>
                </div>
                <div className='flex flex-row gap-6 items-center justify-start p-4 cursor-pointer'>
                    <span className='text-MainHeading-sm md:text-MainHeading'><HiShieldCheck/></span>
                    <div>
                    <h2 className='text-CardHeading-sm md:text-CardHeading font-semibold'>Reliability</h2>
                    <p className='text-Para-sm md:text-Para'>Count on us for reliable support and ongoing maintenance to keep your digital assets running smoothly.</p>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
    </div>
  );
};

export default Whychooseus;