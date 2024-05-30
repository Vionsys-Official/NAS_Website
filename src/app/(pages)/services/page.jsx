import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import MainPageSection1 from '@/app/ui/services/mainPageSection1';
import HeroSection from '@/utils/heroSection/HeroSection';
import { servicesData } from '@/utils/heroSection/data';
import { ourServices } from '@/app/(pages)/services/servicesD'


const Page = () => {
  return (
    <main id='mission'>
      <HeroSection obj={servicesData}/>
      
      {/* Heading Section */}
      
      <MainPageSection1/>
      {/* cards section */}
      <section className="p-2">
        <div className="max-w-[77rem] mx-auto">
          <h1 className="text-3xl text-center font-semibold text-gray-900 leading-tight mb-2 border-b-2 border-violet-900 py-2 relative">
            Our <span className='text-orange-600'>Services</span>
          </h1>
        </div>
        <div className="flex flex-wrap ml-12 gap-6 p-5"> 
          {ourServices.map((service, index) => (
            <Link key={index} href={service.href1} className="group bg-white shadow-lg border-gray-300 hover:bg-gray-100 w-[270px] rounded-md p-4 mx-2 backdrop-blur-sm border hover:shadow-lg transition overflow-hidden flex flex-col justify-between no-underline">
              
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