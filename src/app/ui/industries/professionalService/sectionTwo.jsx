"use client"
import React from 'react'
import Image from 'next/image';
import Sec1 from '/public/assets/industries/professionalService/sec1.jpg';
import Sec2 from '/public/assets/industries/professionalService/sec2.jpg';
import Sec3 from '/public/assets/industries/professionalService/sec3.jpg';
import Sec4 from '/public/assets/industries/professionalService/sec4.jpg';
import { fadein } from '@/components/ui/variants';
import { motion } from 'framer-motion';


const sectionTwo = () => {
  return (
    <section>
          
      <div className="text-center py-4 px-2 md:p-8">
    <div className="font-bold flex justify-center text-2xl sm:text-4xl">
    <motion.h2 
     variants={fadein("up", 0.2)}
     initial="hidden"
     whileInView={"show"}
     viewport={{ once: true, amount: 0.8 }}
    className='w-full md:w-fit p-4 text-blue-900 shadow-xl'>
      Our Professional Services</motion.h2>

    </div>

    <div className="flex flex-wrap items-center bg-rose-900 bg-opacity-20 backdrop-blur rounded-3xl mt-5 md:mt-10">
        <div className="w-full md:w-3/5 lg:w-1/2 ">
            <Image src={Sec1} alt="" className="inline-block rounded-3xl shadow-lg border border-merino-400"/>
        </div>
        <div className="w-full p-4 md:w-2/5 lg:w-1/2 text-left">

            <h3
             className="font-bold text-xl sm:text-2xl">
            IT Consulting and Strategy
            </h3>
            <ul className="sm:text-lg mt-6 px-4 list-disc">
              <motion.li
              variants={fadein("right", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.8 }}
              >
                Develop customized IT strategies aligned with your business goals.</motion.li>
              <motion.li variants={fadein("right", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.8 }}>
                Optimize IT infrastructure for improved efficiency and performance.</motion.li>
              <motion.li variants={fadein("right", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.8 }}>
                Implement innovative technologies to drive business growth.</motion.li>
            </ul>

        </div>
    </div>

    <div className="flex flex-wrap items-center bg-emerald-500 bg-opacity-20 backdrop-blur rounded-3xl mt-5 md:mt-10">
        <div className="w-full md:w-3/5 lg:w-1/2 ">
            <Image src={Sec2} alt="" className="inline-block shadow-lg rounded-3xl border border-merino-400"/>
        </div>
        <div className="w-full p-4 md:w-2/5 lg:w-1/2 md:order-first text-left ">
            <h3 className="font-bold text-xl sm:text-2xl">
            Project Management
            </h3>
            <ul className="sm:text-lg mt-6 px-4 list-disc">
              <motion.li variants={fadein("right", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.8 }}>Provide end-to-end project management services.</motion.li>
              <motion.li variants={fadein("right", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.8 }}>Ensure timely and within-budget project delivery.</motion.li>
              <motion.li variants={fadein("right", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.8 }}>Apply best practices and methodologies for successful project execution.</motion.li>
            </ul>
        </div>
    </div>

    <div className="flex flex-wrap items-center bg-rose-900 bg-opacity-20 backdrop-blur rounded-3xl  mt-5 md:mt-10">
        <div className="w-full md:w-3/5 lg:w-1/2 ">
            <Image src={Sec3} alt="" className="inline-block rounded-3xl shadow-lg border border-merino-400"/>
        </div>
        <div className="w-full p-4 md:w-2/5 lg:w-1/2 text-left">
            <h3 className="font-bold text-xl sm:text-2xl">
            Business Process Optimization
            </h3>
            <ul className="sm:text-lg mt-6 px-4 list-disc">
              <motion.li variants={fadein("right", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.8 }}>Analyze and optimize business processes for enhanced productivity.</motion.li>
              <motion.li variants={fadein("right", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.8 }}>Implement process improvements to reduce costs and increase efficiency.</motion.li>
              <motion.li variants={fadein("right", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.8 }}>Leverage technology to streamline operations and workflows.</motion.li>
            </ul>
        </div>
    </div>

    <div className="flex flex-wrap items-center bg-emerald-500 bg-opacity-20 backdrop-blur rounded-3xl  mt-5 md:mt-10">
        <div className="w-full md:w-3/5 lg:w-1/2 ">
            <Image src={Sec4} alt="" className="inline-block shadow-lg border rounded-3xl border-merino-400"/>
        </div>
        <div className="w-full p-4 md:w-2/5 lg:w-1/2 md:order-first text-left">
            <h3 className="font-bold text-xl sm:text-2xl">
            Data Analytics and Business Intelligence
            </h3>
            <ul className="sm:text-lg mt-6 px-4 list-disc">
              <motion.li variants={fadein("right", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.8 }}>Harness the power of data to gain actionable insights.</motion.li>
              <motion.li variants={fadein("right", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.8 }}>Implement advanced analytics tools and techniques.</motion.li>
              <motion.li variants={fadein("right", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.8 }}>Drive data-driven decision-making and strategic planning</motion.li>
            </ul>
        </div>
    </div>
</div>
       

<div className='pb-10'>
<div className="flex justify-center p-5 items-center shadow-xl bg-gray-200 bg-opacity-10 backdrop-blur  pb-10">
       <p className='w-[80%] text-xl font-bold'>
       At NAS Infotech Pvt Ltd, we are dedicated to providing top-tier professional services that empower your business to achieve its full potential. Contact us today to learn more about how our expertise can help you navigate complex challenges, drive innovation, and achieve sustainable growth. Let us be your trusted partner in success.
       </p>
    </div>

</div>
    </section>
  )
}

export default sectionTwo