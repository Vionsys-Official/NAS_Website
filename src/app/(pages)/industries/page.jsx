import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import industres1 from "/public/assets/industries/CardsIphoto/industres1.jpg";
import HeroSection from '@/utils/heroSection/HeroSection';
import {industriesData} from '@/utils/heroSection/data';
import { ourIndustries } from '@/app/(pages)/industries/industriesD';


const page = () => {

  return (
    <main id='mission'>
      <HeroSection obj={industriesData} />
      {/* Hading Section*/}

      <section id="industreBg" className="p-10 mx-auto">
        <div className="mt-10 grid gap-5 row-gap-8 lg:grid-cols-2 ">
          <div>
            <Image
              width={600}
              height={600}
              className=" p-5 object-cover"
              src={industres1}
              alt="" />
          </div>

          <div className="flex flex-col justify-center">
            <div className="max-w-xl">

              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                Empowering Industries with
                <br className="hidden md:block" />
                Cutting-Edge
                <span className="relative inline-block text-violet-900">
                  Software Solutions
                </span>
              </h2>

              <p className="text-base text-gray-700 md:text-lg">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae. explicabo.
              </p>
            </div>
            <div className="grid gap-5 row-gap-8 sm:grid-cols-2">
              <div className=" border-l-4 shadow-sm border-violet-900">
                <div className="h-full p-5  border-l-0 rounded-r">
                  <h6 className="mb-2 font-semibold leading-5">
                    I'll be sure to note that in my log
                  </h6>
                  <p className="text-sm text-gray-900">
                    Lookout flogging bilge rat main sheet bilge water nipper fluke
                    to go on account heave down.
                  </p>
                </div>
              </div>
              <div className=" border-l-4 shadow-sm border-violet-900">
                <div className="h-full p-5  border-l-0 rounded-r">
                  <h6 className="mb-2 font-semibold leading-5">
                    A business big enough that it could be listed
                  </h6>
                  <p className="text-sm text-gray-900">
                    Those options are already baked in with this model shoot me an
                    email clear.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cards Section */}
      <section className='p-5 bg-white'>
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl text-center font-bold text-gray-900 leading-tight mb-2 pb-2 relative">
            <span className="bg-clip-text text-transparent bg-orange-600">Industries</span>
            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-violet-950"></span>
          </h1>
        </div>

        <div className="container mx-auto lg:p-10">
          <div className="flex flex-wrap justify-center gap-10">
            {ourIndustries.map((industres, index) => (
              <Link
                key={index}
                href={industres.href1}
                className="relative shadow-lg flex flex-col rounded-xl hover:bg-gray-200 border-[1px] border-gray-600 backdrop-blur-sm bg-clip-border text-gray-700 no-underline w-full sm:w-[calc(50%-2.5rem)] md:w-[calc(33.3333%-2.5rem)] lg:w-[calc(25%-2.5rem)]"
              >
                <div className='relative mx-4 -mt-6 h-40 overflow-hidden'>
                  <Image
                    width={500}
                    height={500}
                    src={industres.imagesrc}
                    alt={industres.title}
                    className="h-[170px] w-full rounded-md object-cover transition-transform duration-300 ease-in-out transform group-hover:scale-105"
                  />
                </div>
                <div className="p-4 flex-grow">
                  <h5 className="mb-2 block font-sans leading-snug text-black tracking-normal text-lg font-semibold antialiased">
                    {industres.title}
                  </h5>
                  <p className="text-sm text-gray-600">{industres.description}</p>
                </div>
                <div className="p-4 pt-0 mt-auto">
                  <button
                    type="button"
                    className="rounded-md bg-indigo-900 py-1 px-2 text-sm text-white shadow-sm hover:bg-indigo-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                  >
                    Read more
                  </button>
                </div>
              </Link>
            ))}
          </div>
        </div>

      </section>

    </main>
  )
}

export default page;

