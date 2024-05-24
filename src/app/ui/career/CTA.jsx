import React from 'react'
import Link from 'next/link';

const CTA = () => {
  return (
    <div id="bg" className='flex items-center justify-center'>
        <div className='w-[90%] lg:w-[80%] flex flex-col gap-4 items-center justify-center text-center p-4 md:p-10'>
            <p className='text-slate-100 font-semibold text-Para-sm md:text-Para'>we are always on the lookout for passionate and talented individuals to join our dynamic team. If you're ready to make an impact and take your career to the next level, explore our open positions and apply today. </p>
            <h2 className='text-slate-100 text-MainHeading-sm md:text-MainHeading'>Don't wait—your future at NAS Infotech starts now!</h2>
            <div className='flex flex-col sm:flex-row gap-2 md:gap-10'>
                <Link href={"#card"}>
                <button className='rounded-full bg-gray-100 shadow-md hover:bg-violet-600 hover:text-gray-50 p-2 hover:border border-white'>Explore Opportunities</button>
                </Link>
                <Link href={"#card"}>
                <button className='rounded-full bg-gray-100 shadow-md hover:bg-violet-600 hover:text-gray-50 p-2 hover:border border-white'>Drop Your Resume for Future Opportunities</button>
                </Link>
            </div>
        </div>
    </div>
  );
};

export default CTA;