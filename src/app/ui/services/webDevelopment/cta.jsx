import Link from 'next/link';
import React from 'react'

const cta = () => {
  return (
    <div className='flex items-center justify-center'>
        <div className='flex flex-wrap gap-4 items-center justify-center w-[94%] md:w-4/6 p-6 m-10 bg-gradient-to-br from-green-200 to-green-300 rounded-bl-[20%] rounded-tr-[20%] shadow-md shadow-gray-400'>
            <div className='text-Para-sm md:text-Para text-center font-semibold cursor-pointer'>Contact us today to schedule a consultation and take the first step towards a stunning and effective website that stands out from the competition!</div>
            <Link href="#" className=''>
            <button className=' block w-full relative p-1 text-white  rounded-md bg-indigo-500  isolation-auto z-10 border-2 border-blue-300
        before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-right-full before:hover:right-0 before:rounded-full  before:bg-indigo-600 before:-z-10  before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700'>Contact Us</button>
            </Link>
        </div>
    </div>
  );
};

export default cta;