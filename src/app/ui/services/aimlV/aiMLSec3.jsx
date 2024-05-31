"use client"
import React from 'react'
import Image from 'next/image';
import MyRobo from '/public/assets/services/aiML/MyRobo.jpg'
import { motion } from 'framer-motion';
import { fadein } from '@/components/ui/variants';

const aiMlSec3 = () => {
  return (
    <section>
        {/* section 3 */}
        <div className="flex flex-wrap">
          <motion.div
              variants={fadein("right", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.8 }}
            className="w-full sm:w-8/12 mb-10">
            <div className="container mx-auto h-full sm:p-10">
              <nav className="flex px-4 justify-between items-center">
                <div className="text-MainHeading font-bold">
                  Intelligence<span className="text-blue-900">.</span>
                </div>

              </nav>
              <header className="container px-4 lg:flex mt-10 items-center h-full lg:mt-0">
                <div className="w-full">
                  <h1 className="text-MainHeading lg:text-MainHeading font-bold">Discover cutting-edge   <span className="text-blue-900">AI & ML</span> innovations for your space</h1>
                  <div className="w-20 h-2 bg-blue-900 my-4"></div>
                  <p className="text-SubHeading mb-10">Whether you're exploring predictive analytics, natural language processing, or computer vision, our platform equips you with the tools and insights necessary to thrive in this swiftly evolving domain. Embark on this journey with us as we harness the potential of AI and ML to shape the future.</p>

                </div>
              </header>
            </div>
          </motion.div>
          <Image width={500} height={500} src={MyRobo} alt="Leafs" className="w-full h-48 object-cover sm:h-screen sm:w-4/12" />
        </div>
      </section>
  )
}

export default aiMlSec3