import React from 'react'
import Image from 'next/image';
import webd from '/public/assets/services/webDev/webd.jpg';

const Intro = () => {
  return (
    <div>
        <div className='flex flex-wrap md:gap-20 group h-full md:h-[100vh] items-center justify-end cursor-pointer'>
            <div className='md:relative mt-16 md:mt-0 w-full md:w-2/5 md:h-[100vh] p-4 '>
              <div className='hidden md:flex bg-blue-400 w-full h-[100vh] rounded-full rotate-45 opacity-30 translate-x-72'></div>
              <div className='md:absolute md:inset-0 flex flex-col justify-center'>
              <h3 className='text-CardHeading-sm md:text-MainHeading font-semibold py-4'>At NAS Infotech, we excel in delivering premium web services that facilitate digital transformation and help businesses reach their objectives.</h3>
              <p className='text-SubHeading-sm md:text-SubHeading'>Our skilled team is committed to crafting innovative and customized solutions that address the specific needs of each client. Whether you aim to create a new online presence, improve an existing website, or build a sophisticated web application, we have the expertise to bring your vision to life.</p>
              </div>
            </div>
            <div className='w-full md:w-2/5 md:h-[100vh]'>
            <Image className='w-full h-full object-cover md:rounded-full md:rotate-45' src={webd} alt="web" width={1000} height={1000}></Image>
            </div>
            
          </div>
    </div>
  );
};

export default Intro;