"use client"
import Image from 'next/image';
import Link from 'next/link'
import React from 'react'
import Sectwo from '/public/assets/services/digitalMarketing/sectwo.jpg';
import { fadein } from '@/components/ui/variants';
import { motion } from 'framer-motion';

const sectiontwo = () => {
    return (
    <section>
        <div className="px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ">
      <div className="p-8 rounded shadow-2xl bg-white sm:p-16">
        <div className="flex items-center flex-col lg:flex-row">
          <div className="mb-6 lg:mb-0 lg:w-1/2 lg:pr-5">

            <h2 className="font-sans text-3xl font-bold tracking-tight text-blue-900 sm:text-4xl sm:leading-none">
              Welcome to
              <br />
              <span className="text-green-500">N</span><span className='text-stone-400'>AS</span> Infotech{' '}
              <span className="inline-block text-deep-purple-accent-400">
              Pvt. Ltd.
              </span>
            </h2>
          </div>

          <motion.div
           variants={fadein("right", 0.2)}
           initial="hidden"
           whileInView={"show"}
           viewport={{ once: true, amount: 0.8 }}
           className="lg:w-1/2">

            <p className="mb-4 text-xl text-gray-700">
             " We provide top-notch IT services to help your business thrive in the digital age. Located in Pune, we specialize in delivering customized software solutions and a range of IT services tailored to meet your unique business requirements."
            </p>

            <Link
              href={"#Knowmore"}
              aria-label=""
              className="font-semibold text-purple-600 hover:text-purple-800">
                Know more
            </Link>
           </motion.div>

        </div>
      </div>
     </div>
   
     <main className="p-4 w-full lg:px-8">
      <div className="grid gap-10 lg:grid-cols-2 text-center">
        <div className="flex flex-col justify-center items-center">
          
          <h5 className="mb-4 text-3xl font-extrabold text-blue-900 leading-none">
          Reinventing the world for good,  
          that's what technology is for.
          </h5>
          <p className="mb-6 px-2 text-base text-gray-900 md:text-lg">
          We specialize in delivering innovative technology solutions, 
              including Software Development, Cloud Computing, Big Data Analytics, 
              AI and more. Our expert team is committed to providing tailored services 
              that drive efficiency and growth for your business. With a client-centric 
              approach, we ensure your success in the digital age.
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

    </section>
  );
};
export default sectiontwo;