
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import HerosectionMain from '@/app/ui/services/herosectionMain';

import { ourServices } from '@/app/(pages)/services/servicesD'

export const metadata = {
  title: "Services",
};

const Page = () => {
  return (
    <main className='overflow-x-hidden'>
    
    <HerosectionMain/>
      
  {/* cards section */}
  <section className="p-3 lg:mx-10">
  <div className="max-w-[77rem] mx-auto">
    <h1 className="text-center font-semibold md:text-MainHeading text-MainHeading-sm text-gray-900  my-3 border-b-4 border-green1 relative">
      <p className='text-blue2 font-extrabold'>Our Services</p>
    </h1>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:p-5 p-1">
    {ourServices.map((service, index) => (
      <Link 
        key={index} 
        href={service.href1} 
        className="group bg-white shadow-lg border-gray-300 hover:bg-gray-100 rounded-md md:p-4 p-2 backdrop-blur-sm border hover:shadow-lg transition overflow-hidden flex flex-col justify-between no-underline"
      >
        <Image
          width={500}
          height={500}
          src={service.imagesrc}
          alt={service.title}
          className="h-[170px] w-full rounded-md object-cover transition-transform duration-300 ease-in-out transform group-hover:scale-105"
        />
        <div className="pt-2 px-1">
          <h5 className="text-CardHeading-sm font-semibold">{service.title}</h5>
          <p className="mt-3 text-Para-sm pb-2 text-gray-600">
            {service.description}
          </p>
        </div>
        <button
          type="button"
          className="rounded-md bg-blue2 py-1 px-2 text-sm text-white shadow-sm hover:bg-blue1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">
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