"use client"
import React from 'react'
import Image from 'next/image';
import industres1 from "/public/assets/industries/CardsIphoto/industres1.jpg";
import { fadein } from '@/components/ui/variants';
import { motion } from 'framer-motion';

const mainPageHeading1 = () => {
  return (
    <section id="industreBg" className="p-10 mx-auto">
    <div className="grid gap-5 row-gap-8 lg:grid-cols-2 ">
      <div>
        <Image
          width={600}
          height={600}
          className=" p-5 mt-10 object-cover"
          src={industres1}
          alt="" />
      </div>

      <motion.div
      variants={fadein("right", 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: true, amount: 0.8 }}

       className="flex flex-col justify-center">
      <div 
      
          className="max-w-xl">

          <h2 className="max-w-lg mb-6 font-sans text-MainHeading font-bold text-gray-900  sm:leading-none">
            Empowering Industries with
            <br className="hidden md:block" />
            Cutting-Edge
            <span className="relative inline-block text-violet-900">
              Software Solutions
            </span>
          </h2>

          <p className="text-Para text-gray-700 md:text-Para mb-2">
          Welcome to NAS Infotech, where we revolutionize industries through innovative software solutions. Our team is dedicated to delivering unparalleled quality and reliability, tailored to meet your unique needs. Let us collaborate with you to bring your vision to life and drive your business forward. Contact us today to embark on your journey to success.
          </p>
        </div>
        <div className="grid gap-5 row-gap-8 sm:grid-cols-2">
          <div className=" border-l-4 shadow-xl border-violet-900">
            <div className="h-full p-5  border-l-0 rounded-r">
              <h6 className="mb-2 font-semibold leading-5">
              We're ready to tackle any challenge.
              </h6>
              <p className="text-Para-sm text-gray-900">
              We stand ready to navigate the complexities of your industry and overcome any obstacle in our pursuit of excellence
              </p>
            </div>
          </div>
          <div className=" border-l-4 shadow-xl border-violet-900">
            <div className="h-full p-5  border-l-0 rounded-r">
              <h6 className="mb-2 font-semibold leading-5">
              We have Strong Technical Expertise.
              </h6>
              <p className="text-Para-sm text-gray-900">
              Harnessing our unparalleled mastery of technology, we engineer groundbreaking solutions that redefine entire industries.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
  )
}

export default mainPageHeading1