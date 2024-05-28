import React from 'react'
import Sectwo from '/public/assets/services/digitalMarketing/sectwo.jpg';
import Image from 'next/image';

const sectionTwo = () => {
  return (
    <main className="px-4 py-10 w-full lg:px-8 bg-white">
      <div className="grid gap-10 lg:grid-cols-2 text-center">
        <div className="flex flex-col justify-center items-center">
          
          <h5 className="mb-4 text-4xl font-extrabold text-violet-800 leading-none">
          Boost Your Online Presence with 
          <span className="text-green-500"> N</span><span className='text-stone-400'>AS </span> 
          Infotech Pvt Ltd
          </h5>
          <p className="mb-6 px-2 text-gray-900 text-lg">
          At NAS Infotech Pvt Ltd, we specialize in delivering top-notch 
          digital marketing services designed to elevate your brand's online presence. 
          Our expert team leverages the latest strategies and technologies to ensure your 
          business stands out in the competitive digital landscape.
          </p>
          
        </div>
        <div>
          <Image
            className="object-cover w-full h-56 rounded-xl shadow-md shadow-blue-900 sm:h-96"
            src={Sectwo}
            alt=""
          />
        </div>
      </div>
    </main>
  )
}

export default sectionTwo