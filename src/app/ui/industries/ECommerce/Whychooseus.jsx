import React from 'react'
import EcomWCU from'/public/assets/industries/Ecommerce/EcomWCU.jpg';
import Image from 'next/image';

const Whychooseus = () => {
  return (
    <div>
        <div className='relative flex items-center justify-start h-[60vh] overflow-hidden'>
            <div className='w-3/5'>
                <Image className='object-cover h-full w-full' src={EcomWCU} alt=''></Image>
            </div>
            <div className='absolute inset-0 flex items-center justify-center w-2/5 bg-white h-[60vh] -rotate-45 translate-x-[110%] rounded-full'></div>
            <div className='absolute inset-0 flex flex-col items-end justify-center -translate-x-20'>
                <h2 className="w-2/5 pb-4 font-sans text-MainHeading-sm md:text-MainHeading leading-none tracking-tight text-gray-900 ">
                Why Choose
                <span className="relative inline-block">
                    <svg
                    viewBox="0 0 52 24"
                    fill="currentColor"
                    className="absolute top-0 right-0 z-0 hidden w-32 -mt-8 -mr-20 text-blue-gray-50 lg:w-32 lg:-mr-28 lg:-mt-10 sm:block"
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
                    <span className="relative"> Us?</span>
                </span>{' '}
                 
                </h2>
                <p className='w-2/5'>At [Your Company Name], we bring years of e-commerce expertise and a commitment to your success. With innovative, tailored solutions and scalable support, we'll help your business grow and thrive. Trust us for transparent communication, dedicated service, and a long-term partnership focused on your success.</p>
            </div>
        </div>
    </div>
  );
};

export default Whychooseus;