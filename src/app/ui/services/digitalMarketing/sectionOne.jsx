import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Hero from '/public/assets/services/digitalMarketing/hero.jpg';

const sectionOne = () => {
  return (
    <section className='md:h-[100vh] h-[60vh] flex items-center'>
      
       <Image
          className="object-cover rounded shadow-lg lg:rounded-none h-full lg:shadow-none w-full md:w-1/2"
          src={Hero}
          alt=""
        />
        <div className="w-full absolute backdrop-blur md:backdrop-blur-none flex justify-center md:justify-end pt-10 lg:px-8 xl:px-6">
            <div className='w-[70%] md:w-[50%]'>
          <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-blue-900 sm:text-5xl sm:leading-none md:text-center">
          Digital Marketing Services
          </h2>
          <p className="mb-5 text-base text-gray-900 md:text-xl md:text-center">
          Boost your online presence with our strategic solutions. From SEO to social media, we optimize your digital strategy for maximum impact and growth.
          </p>
          <div className="text-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-blue-900 hover:text-white hover:bg-blue-900 transition duration-200 hover:scale-110 ease-out rounded shadow-md border md:w-auto focus:shadow-outline focus:outline-none"
            >
              Know more
            </Link>
          </div>
          </div>
         </div>
       </section>
  )
}

export default sectionOne