import React from 'react'
import Image from 'next/image';
import develope from '/public/assets/career/develope.jpg';
import webdev from '/public/assets/services/webDev/webdev.jpg';

const Intro = () => {
  return (
    <div>
        <div className='flex flex-wrap hover:shadow-xl shadow-gray-300 group bg-blue-200 h-full md:h-[80vh] items-center justify-center cursor-pointer'>
            <div className='w-full md:w-2/5 h-[80vh] overflow-hidden'>
            <Image className='w-full h-full object-cover rounded-r-3xl' src={webdev} alt="inclusion" width={1000} height={1000}></Image>
            </div>
            <div className='flex flex-col justify-center w-full md:w-3/5 md:h-[80vh] p-4 lg:p-10'>
              <h3 className='text-MainHeading-sm md:text-MainHeading font-semibold py-10'>At NAS, we excel in delivering premium web services that facilitate digital transformation and help businesses reach their objectives.</h3>
              <p className='text-SubHeading-sm md:text-SubHeading'>Our skilled team is committed to crafting innovative and customized solutions that address the specific needs of each client. Whether you aim to create a new online presence, improve an existing website, or build a sophisticated web application, we have the expertise to bring your vision to life.</p>
            </div>
          </div>
    </div>
  );
};

export default Intro;