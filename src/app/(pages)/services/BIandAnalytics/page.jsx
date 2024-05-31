"use client"
import React from 'react'
import image from '/public/assets/services/BIdataAnalytics/sql.png';
import PowerBI from '/public/assets/services/BIdataAnalytics/microsoftpowerbi.png';
import Tableau from '/public/assets/services/BIdataAnalytics/tableau2.jpg';
import Bi from '/public/assets/services/BIdataAnalytics/bi.jpg'
import { LuDatabaseBackup } from "react-icons/lu";
import { BsDatabaseGear } from "react-icons/bs";
import { BsClipboard2Data } from "react-icons/bs";
import { VscGraph } from "react-icons/vsc";
import { BiAnalyse } from "react-icons/bi";
import { GrShieldSecurity } from "react-icons/gr";
import Image from 'next/image';
import Bifaq from '@/app/ui/services/BIandAnalytics/Bifaq';
import Bistart from '@/app/ui/services/BIandAnalytics/Bistart';
import Qlikq from '/public/assets/services/BIdataAnalytics/Qlikq.jpg'
import BiHero from '@/app/ui/services/BIandAnalytics/BiHero';
import { motion } from 'framer-motion';
import { fadein } from '@/components/ui/variants';

export const metadata = {
    title: "BI & Analytics Solutions",
  };


const page = () => {
  return (
    <div id='mission' className='h-full overflow-x-hidden '>
    <section1 className=''>
        <div>
        <BiHero/>
        </div>
    <div className='flex flex-col md:flex-row'>
            <div className='mt-10 flex flex-col items-center w-full h-full md:w-1/2 pr-3 pl-3'>
                <h3 className='md:text-Heading md:mt-10 mt-5 md:pt-20 pt-2 font-medium sm:font-bold text-center sm:w-full text-Heading-sm text-green-600 '>What is BI and Analytics?</h3>
                <p className='md:text-Para mb-10 ml-30 mt-3 mr-30 text-center sm:text-Para-sm'>Business Intelligence refers to the technologies, processes, and practices used to collect, integrate, analyze, and present an organization’s raw data to create insightful and actionable business information.</p>
                </div>
                <div >
                    <Image
                className=' object-cover md:mr-8 md:pr-10 mt-10 sm:pl-5 '
                        src={Bi}
                        alt=""
                        height={500}
                        width={700}
                    />
                    </div>
                    </div>       
           
                </section1>

    <section2 >
                <div className=' text-center md:mt-10 mt-5'>
                    <h6 className='text-3xl font-bold mt-3'>Business Intelligence TOOLS</h6>
                <p className='mb-10 text-xl mt-3'>Below mentioned are few and many more to learn!!!</p></div>
                <div className='flex mb-5 sm:p-4 flex-col md:flex-row p-2 ' >
                    
                
                <Image
                 className='p-2 '
                        src={image}
                        alt=""
                        height={300}
                        width={350}
                    ></Image>
                    
                         <Image
                     className='p-2'
                        src={Tableau}
                        alt=""
                        height={300}
                        width={350}
                    />
                   
                    
                    
                     <Image
                     className='p-2'
                        src={PowerBI}
                        alt=""
                        height={300}
                        width={350}
                    />

                   
                        <Image
                     className='p-2'
                        src={Qlikq}
                        alt=""
                        height={300}
                        width={350}
                    />
                     
                     
                    
                   
                </div>
   
                </section2>

    <section3 id="features" class="container mx-auto px-4 py-8 md:py-12 lg:py-20 ">
               <div className="mx-auto mb-10 flex max-w-full flex-col items-center space-y-4 text-center  ">
                
                    <motion.h2 
                     variants={fadein("left", 0.2)}
                     initial="hidden"
                     whileInView={"show"}
                     viewport={{ once: false, amount: 0.8 }}
                    className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-4xl ">Features</motion.h2>
                    <motion.p
                     variants={fadein("left", 0.2)}
                     initial="hidden"
                     whileInView={"show"}
                     viewport={{ once: false, amount: 0.8 }}
                    className="max-w-[85%] md:text-Para sm:text-Para-sm leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                    Business Intelligence (BI) and Analytics encompass a range of features designed to help organizations make data-driven decisions. Here are the key features typically found in BI and Analytics platforms:
                    </motion.p>
                </div>
                 
                 <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">

            <div
                className="relative overflow-hidden rounded-lg border bg-white select-none hover:shadow hover:shadow-teal-200 p-2">
                <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
                <LuDatabaseBackup size={40}/>
                    <motion.div
                    variants={fadein("left", 0.2)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.8 }}
                     className="space-y-2">
                        <h3 className="font-bold">Data Integration</h3>
                        <p className="md:text-Para sm:text-Para-sm text-muted-foreground">Tools to extract data from various sources, transform and load .</p>
                    </motion.div>
                </div>
            </div>

            <div
                className="relative overflow-hidden rounded-lg border bg-white select-none hover:shadow hover:shadow-teal-200 p-2">
                <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
                <BsDatabaseGear size={40}/>
                    <div className="space-y-2">
                        <h3 className="font-bold">Data Management</h3>
                        <motion.p 
                        variants={fadein("left", 0.2)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.8 }}
                        className="md:text-Para sm:text-Para-sm">Tools to ensure the accuracy, completeness, and consistency of data.</motion.p>
                    </div>
                </div>
            </div>

            <div
                className="relative overflow-hidden rounded-lg border bg-white select-none hover:shadow hover:shadow-teal-200 p-2">
                <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
                <BsClipboard2Data size={40}/>
                    <div className="space-y-2">
                        <h3 className="font-bold">Data Modeling</h3>
                        <motion.p 
                        variants={fadein("left", 0.2)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.8 }}
                        className="md:text-Para sm:text-Para-sm text-muted-foreground">Structuring databases in a way that supports efficient querying and analysis.</motion.p>
                    </div>
                </div>
            </div>

            <div
                className="relative overflow-hidden rounded-lg border bg-white select-none hover:shadow hover:shadow-teal-200 p-2">
                <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
                <VscGraph size={40}/>
                    <div className="space-y-2">
                        <h3 className="font-bold">Data Visualization</h3>
                        <motion.p
                        variants={fadein("left", 0.2)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.8 }}
                         className="md:text-Para sm:text-Para-sm text-muted-foreground"> Interactive displays of key metrics and KPIs.</motion.p>
                    </div>
                </div>
            </div>

            <div
                className="relative overflow-hidden rounded-lg border bg-white select-none hover:shadow hover:shadow-teal-200 p-2">
                <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
                <BiAnalyse size={40}/>
                    <div className="md:space-y-2 space-y-0 ">
                        <h3 className="font-bold">Advanced Analytics</h3>
                        <motion.p
                        variants={fadein("left", 0.2)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.8 }}
                        className="md:text-Para sm:text-Para-sm text-muted-foreground"> Using statistical algorithms and machine learning to predict future outcomes.</motion.p>
                    </div>
                </div>
            </div>

            <div
                className="relative overflow-hidden rounded-lg border bg-white select-none hover:shadow hover:shadow-teal-200 p-2">
                <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
                <GrShieldSecurity size={40}/>
                    <div className="space-y-2">
                        <h3 className="font-bold">Security and Compliance</h3>
                        <motion.p
                        variants={fadein("left", 0.2)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.8 }}
                        className="md:text-Para sm:text-Para-sm text-muted-foreground">Ensuring that only authorized users can access sensitive data.
</motion.p>
                    </div>
                </div>
            </div>

        </div>


                </section3>
 <section4>
 <div className='text-center mt-10 overflow-x-hidden'>
                    <h6 className='text-3xl font-bold mt-5 p-10 '>Why choose us ???</h6>
            
    <div class="flex flex-col grid-cols-9 p-2 mx-auto md:grid">
        <div class="flex md:contents flex-row-reverse">
            <motion.div
             variants={fadein("left", 0.2)}
             initial="hidden"
             whileInView={"show"}
             viewport={{ once: false, amount: 0.8 }}
                class="relative p-4 my-6 text-gray-800 bg-green-200 rounded-xl col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto">
                <h3 class="text-lg font-semibold lg:text-xl">Expert Team</h3>
                <p class="mt-2 md:text-Para sm:text-Para-sm leading-6">Benefit from our certified BI and Data Analytics professionals who bring extensive experience and knowledge to the table..</p>
            </motion.div>
            <div class="relative col-start-5 col-end-6 mr-7 md:mx-auto">
                <div class="flex items-center justify-center w-6 h-full">
                    <div class="w-1 h-full bg-green-300 rounded-t-full bg-gradient-to-r from- to-red-300">
                    </div>
                </div>
                <div class="absolute w-6 h-6 -mt-3 bg-green-400 border-4 border-green-500 rounded-full top-1/2"></div>
            </div>
        </div>

        <div class="flex md:contents">
            <div class="relative col-start-5 col-end-6 mr-7 md:mx-auto">
                <div class="flex items-center justify-center w-6 h-full">
                    <div class="w-1 h-full bg-green-300"></div>
                </div>
                <div class="absolute w-6 h-6 -mt-3   bg-green-400 border-4 border-green-500 rounded-full top-1/2"></div>
            </div>
            <motion.div 
             variants={fadein("left", 0.2)}
             initial="hidden"
             whileInView={"show"}
             viewport={{ once: false, amount: 0.8 }}
            class="relative p-4 my-6 text-gray-800  bg-green-200 rounded-xl col-start-6 col-end-10 mr-auto">
                <h3 class="text-lg font-semibold lg:text-xl">Tailored Solutions</h3>
                <p class="mt-2 md:text-Para sm:text-Para-sm leading-6">Enjoy customized Business solutions designed to meet the specific needs of your business, ensuring optimal performance and efficiency.</p>
            </motion.div>
        </div>

        <div class="flex md:contents flex-row-reverse">
            <motion.div
            variants={fadein("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.8 }}
                class="relative p-4 my-6 text-gray-800  bg-green-200 border-green-500 rounded-xl col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto">
                <h3 class="text-lg font-semibold lg:text-xl">24/7 Support</h3>
                <p class="mt-2 md:text-Para sm:text-Para-sm leading-6">Rest assured with our dedicated support team available round the clock to assist you whenever you need it, ensuring minimal downtime and maximum productivity.</p>
              </motion.div>
            <div class="relative col-start-5 col-end-6 mr-7 md:mx-auto">
                <div class="flex items-center justify-center w-6 h-full">
                    <div class="w-1 h-full bg-green-300 rounded-t-full bg-gradient-to-b from-green-400 to-green-300">
                    </div>
                </div>
                <div class="absolute w-6 h-6 -mt-3  bg-green-400 border-4 border-green-500 rounded-full top-1/2"></div>
            </div>
        </div>

        <div class="flex md:contents">
            <div class="relative col-start-5 col-end-6 mr-7 md:mx-auto">
                <div class="flex items-center justify-center w-6 h-full">
                    <div class="w-1 h-full bg-green-300"></div>
                </div>
                <div class="absolute w-6 h-6 -mt-3  bg-green-400 border-4 border-green-500 rounded-full top-1/2"></div>
            </div>
            <motion.div
             variants={fadein("left", 0.2)}
             initial="hidden"
             whileInView={"show"}
             viewport={{ once: false, amount: 0.8 }}
             class="relative p-4 my-6 text-gray-800  bg-green-200 rounded-xl col-start-6 col-end-10 mr-auto">
                <h3 class="text-lg font-semibold lg:text-xl">Innovative Technology</h3>
                <p class="mt-2 md:text-Para sm:text-Para-sm leading-6">Stay ahead of the curve with our utilization of the latest cloud technologies, guaranteeing that your business remains competitive and adaptable. </p>
               
            </motion.div>
        </div>

    </div>
</div>
    </section4>

  

     <section5>
        <div >
            <Bifaq/>
        </div>
    </section5>  
 

    <section6>
        <div className='sm:pl-6' >
            <Bistart/>
        </div>
    </section6>

    
   
 </div>
    
       
      
    
  )
}

export default page
