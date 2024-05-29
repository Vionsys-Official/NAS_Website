import React from 'react'
import Link from 'next/link';

const cta = () => {
  return (
    <div className='flex items-center justify-center py-20'>
        <div className='w-[80%] flex flex-col items-center justify-center'>
            <h2 className="mb-6 font-sans text-MainHeading-sm md:text-MainHeading leading-none tracking-tight text-gray-900 ">
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
                <span className="relative">Ready</span>
            </span>{' '}
             to Take Your E-Commerce Business to the Next Level?
            </h2>
            <p className='text-Para-sm md:text-Para'>Get in touch with us today to learn more about how our software solutions can help you grow your online store.</p>
            <Link href="#" className=''>
            <button className=' block w-full relative p-1 text-white  rounded-md bg-indigo-500  isolation-auto z-10 border-2 border-blue-300
        before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-right-full before:hover:right-0 before:rounded-full  before:bg-indigo-600 before:-z-10  before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700'>Contact Us</button>
            </Link>
        </div>
    </div>
  );
};

export default cta;