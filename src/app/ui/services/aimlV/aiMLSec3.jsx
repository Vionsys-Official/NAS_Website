"use client"
import React from 'react'
import Image from 'next/image';
import MyRobo from '/public/assets/services/aiML/MyRobo.jpg'
import { motion } from 'framer-motion';

const aiMlSec3 = () => {
  return (
    <section>
        {/* section 3 */}
        <div className="flex flex-wrap py-6">
          <motion.div
             
            className="w-full md:w-8/12 md:mb-10">
            <div className="mx-auto h-full">
              <nav className="flex md:px-4 px-1 flex-col justify-center items-start">
                <div className="font-extrabold text-Heading-sm text-blue2 md:text-Heading items-start">
                  Intelligence...
                </div>

              </nav>
              <header className="md:px-4 px-1 lg:flex md:mt-10 items-center lg:mt-0">
                <div className="w-full">
                  <h1 className="font-extrabold text-Heading-sm text-blue2 md:text-Heading text-center">Discover cutting-edge AI & ML innovations for your space</h1>
                  <div className="w-20 h-2 bg-black my-4"></div>
                  <p className="md:text-SubHeading text-SubHeading-sm text-center text-slate-600 font-semibold py-5">Whether you&apos;re exploring predictive analytics, natural language processing or computer vision, our platform equips you with the tools and insights necessary to thrive in this swiftly evolving domain. Embark on this journey with us as we harness the potential of AI and ML to shape the future.</p>

                </div>
              </header>
            </div>
          </motion.div>
          <Image width={500} height={500} src={MyRobo} alt="Leafs" className="w-full md:h-[70vh] h-[40vh] object-cover sm:w-4/12 px-2 rounded-2xl" />
        </div>
      </section>
  )
}

export default aiMlSec3