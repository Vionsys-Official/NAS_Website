import React from 'react'
import image from '/public/assets/BIdataAnalytics/sql.png';
import PowerBI from '/public/assets/BIdataAnalytics/microsoftpowerbi.png';
import Tableau from '/public/assets/BIdataAnalytics/tableau2.jpg';
import Bi from '/public/assets/BIdataAnalytics/bi.jpg'
import { LuDatabaseBackup } from "react-icons/lu";
import { BsDatabaseGear } from "react-icons/bs";
import { BsClipboard2Data } from "react-icons/bs";
import { VscGraph } from "react-icons/vsc";
import { BiAnalyse } from "react-icons/bi";
import { GrShieldSecurity } from "react-icons/gr";
import { LiaBusinessTimeSolid } from "react-icons/lia";
import Image from 'next/image';

const page = () => {
  return (
    <div className='h-100 bg-stone-300 '>
    <section1 className=''>
    <h6 className='text-5xl font-bold text-center mt-20 pt-20 mb-10 bg-gradient-to-r from-pink-300 via-stone-400 to-purple-300 h-40 '>BI and Data Analytics<LiaBusinessTimeSolid size={150} color='stone-400'/></h6>
    <div className='flex'>
            <div className='mt-10 w-1/2 pr-5 pl-5'>
                <h3 className='text-6xl mt-10 font-medium text-center '>What is BI and Analytics?</h3>
                <p className='text-xl mb-10 ml-30 mt-3 mr-30 text-center'>Business Intelligence refers to the technologies, processes, and practices used to collect, integrate, analyze, and present an organization’s raw data to create insightful and actionable business information.</p>
                </div>
                <div >
                    <Image
                className=' object-cover mr-8 pr-10 mt-10 '
                        src={Bi}
                        alt=""
                        height={500}
                        width={700}
                    />
                    </div>
                    </div>       
           
                </section1>

    <section2 >
                <div className='bg-gradient-to-r from-slate-200 via-stone-400 to-slate-200  text-center mt-10'>
                    <h6 className='text-3xl font-bold mt-3'>Business Intelligence TOOLS</h6>
                <p className='mb-10 text-xl mt-3'>Below mentioned are few and many more to learn!!!</p></div>
                <div className='flex mb-5' >
                    
                <Image
                        src={image}
                        alt=""
                        height={300}
                        width={300}
                    />
                     <Image
                        src={PowerBI}
                        alt=""
                        height={300}
                        width={300}
                    />
                     <Image
                        src={Tableau}
                        alt=""
                        height={300}
                        width={300}
                    />
                     <Image
                        src={PowerBI}
                        alt=""
                        height={300}
                        width={300}
                    />
                     <Image
                        src={Tableau}
                        alt=""
                        height={300}
                        width={300}
                    />
                   
                </div>
   
                </section2>

    <section3 id="features" class="container mx-auto px-4 py-8 md:py-12 lg:py-20 ">
               <div className="mx-auto mb-10 flex max-w-full flex-col items-center space-y-4 text-center bg-gradient-to-r from-slate-200 via-stone-400 to-slate-200 ">
                    <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-4xl ">Features</h2>
                    <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                    Business Intelligence (BI) and Analytics encompass a range of features designed to help organizations make data-driven decisions. Here are the key features typically found in BI and Analytics platforms:
                    </p>
                </div>
                 
                 <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">

            <div
                className="relative overflow-hidden rounded-lg border bg-white select-none hover:shadow hover:shadow-teal-200 p-2">
                <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
                <LuDatabaseBackup size={40}/>
                    <div className="space-y-2">
                        <h3 className="font-bold">Data Integration</h3>
                        <p className="text-sm text-muted-foreground">Tools to extract data from various sources, transform and load .</p>
                    </div>
                </div>
            </div>

            <div
                className="relative overflow-hidden rounded-lg border bg-white select-none hover:shadow hover:shadow-teal-200 p-2">
                <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
                <BsDatabaseGear size={40}/>
                    <div className="space-y-2">
                        <h3 className="font-bold">Data Management</h3>
                        <p className="text-sm">Tools to ensure the accuracy, completeness, and consistency of data.</p>
                    </div>
                </div>
            </div>

            <div
                className="relative overflow-hidden rounded-lg border bg-white select-none hover:shadow hover:shadow-teal-200 p-2">
                <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
                <BsClipboard2Data size={40}/>
                    <div className="space-y-2">
                        <h3 className="font-bold">Data Modeling</h3>
                        <p className="text-sm text-muted-foreground">Structuring databases in a way that supports efficient querying and analysis.</p>
                    </div>
                </div>
            </div>

            <div
                className="relative overflow-hidden rounded-lg border bg-white select-none hover:shadow hover:shadow-teal-200 p-2">
                <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
                <VscGraph size={40}/>
                    <div className="space-y-2">
                        <h3 className="font-bold">Data Visualization</h3>
                        <p className="text-sm text-muted-foreground"> Interactive displays of key metrics and KPIs.</p>
                    </div>
                </div>
            </div>

            <div
                className="relative overflow-hidden rounded-lg border bg-white select-none hover:shadow hover:shadow-teal-200 p-2">
                <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
                <BiAnalyse size={40}/>
                    <div className="space-y-2">
                        <h3 className="font-bold">Advanced Analytics</h3>
                        <p className="text-sm text-muted-foreground"> Using statistical algorithms and machine learning to predict future outcomes.</p>
                    </div>
                </div>
            </div>

            <div
                className="relative overflow-hidden rounded-lg border bg-white select-none hover:shadow hover:shadow-teal-200 p-2">
                <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
                <GrShieldSecurity size={40}/>
                    <div className="space-y-2">
                        <h3 className="font-bold">Security and Compliance</h3>
                        <p className="text-sm text-muted-foreground">Ensuring that only authorized users can access sensitive data.
</p>
                    </div>
                </div>
            </div>

        </div>


                </section3>
                </div>
       
       
      
    
  )
}

export default page
