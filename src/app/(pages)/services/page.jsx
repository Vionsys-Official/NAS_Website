import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import MyServise1 from '/public/assets/services/MyServise1.jpg'
import HeroSection from '@/utils/heroSection/HeroSection';
import { servicesData } from '@/utils/heroSection/data';
import { ourServices } from '@/app/(pages)/services/servicesD'

const Page = () => {
  return (
    <main id='mission'>
      <HeroSection obj={servicesData}/>
      
      {/* Heading Section */}
      <section id="serviceBg" className="p-5 mx-auto">
        <div className="m-14 mx-auto max-w-6xl  flex gap-3 lg:flex-justify lg:flex flex-col lg:flex-row">
          <div className="sm:text-center mx-6 my-7 lg:text-left">
            <h1 className="text-3xl tracking-tight font-extrabold text-gray-800">
              <span className="block xl:inline">Top-Quality Software Services</span>
              <span className="block text-violet-900 xl:block">Tailored for You</span>
            </h1>
            <p className="mt-5 text-gray-700 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
            Unlock your business's potential with our tailored software solutions. Experience innovation, reliability, and excellence with NAS Infotech. Let us bring your ideas to life and propel your success forward. Contact us today to discover how we can transform your software experience.
            </p>
            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
              <Button />
            </div>
          </div>
          <div className="lg:inset-y-0 lg:right-0 shadow-md lg:w-1/2 ">
            <Image width={550} height={500} className="object-cover" src={MyServise1} alt="" />
          </div>
        </div>
      </section>

      {/* cards section */}
      <section className="p-2 bg-white">
        <div className="max-w-[77rem] mx-auto">
          <h1 className="text-3xl text-center font-semibold text-gray-900 leading-tight mb-2 border-b-2 border-violet-900 py-2 relative">
            Our <span className='text-orange-600'>Services</span>
          </h1>
        </div>
        <div className="flex flex-wrap justify-center gap-6 p-5">
          {ourServices.map((service, index) => (
            <Link key={index} href={service.href1} className="group hover:bg-gray-100 hover:border-gray-300 w-[270px] rounded-md p-4 mx-2 backdrop-blur-sm border shadow-sm hover:shadow-lg transition overflow-hidden flex flex-col justify-between no-underline">
              
                <Image
                  width={500}
                  height={500}
                  src={service.imagesrc}
                  alt={service.title}
                  className="h-[170px] w-full rounded-md object-cover transition-transform duration-300 ease-in-out 
                  transform group-hover:scale-105"/>
                <div className="pt-2 px-1">
                  <h5 className="text-lg font-semibold">{service.title}</h5>
                  <p className="mt-3 text-sm pb-2 text-gray-600">
                    {service.description}
                  </p>
                
              </div>
              <button
                type="button"
                className="rounded-md bg-indigo-900 py-1 px-2 text-sm text-white shadow-sm
                 hover:bg-indigo-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2
                  focus-visible:outline-black">
                Read more
              </button>
            </Link>
          ))}
        </div>
      </section>


    </main>
  );
};

export default Page;