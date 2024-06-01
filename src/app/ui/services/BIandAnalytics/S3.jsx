"use client"
import React from 'react'
import { LuDatabaseBackup } from "react-icons/lu";
import { BsDatabaseGear } from "react-icons/bs";
import { BsClipboard2Data } from "react-icons/bs";
import { VscGraph } from "react-icons/vsc";
import { BiAnalyse } from "react-icons/bi";
import { GrShieldSecurity } from "react-icons/gr";
import { motion } from 'framer-motion';
import { fadein } from '@/components/ui/variants';



function S3() {
  return (
    <section3 id="features" className="container mx-auto px-4 py-8 md:py-12 lg:py-20 ">
               <div className="mx-auto mb-10 flex max-w-full flex-col items-center space-y-4 text-center  ">
                
                    <motion.h2 
                     variants={fadein("left", 0.2)}
                     initial="hidden"
                     whileInView={"show"}
                     viewport={{ once: false, amount: 0.8 }}
                    className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-4xl text-blue900 ">Features</motion.h2>
                    <motion.p
                     variants={fadein("left", 0.2)}
                     initial="hidden"
                     whileInView={"show"}
                     viewport={{ once: false, amount: 0.8 }}
                    className="max-w-[85%] md:text-Para text-blue900 text-Para-sm leading-normal text-muted-foreground sm:text-lg sm:leading-7">
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
                        <p className="md:text-Para text-Para-sm text-muted-foreground">Tools to extract data from various sources, transform and load .</p>
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
                        className="md:text-Para text-Para-sm">Tools to ensure the accuracy, completeness and consistency of data.</motion.p>
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
                        className="md:text-Para text-Para-sm text-muted-foreground">Structuring databases in a way that supports efficient querying and analysis.</motion.p>
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
                         className="md:text-Para text-Para-sm text-muted-foreground"> Interactive displays of key metrics and KPIs.</motion.p>
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
                        className="md:text-Para text-Para-sm text-muted-foreground"> Using statistical algorithms and machine learning to predict future outcomes.</motion.p>
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
                        className="md:text-Para text-Para-sm text-muted-foreground">Ensuring that only authorized users can access sensitive data.
</motion.p>
                    </div>
                </div>
            </div>

        </div>


                </section3>
  )
}

export default S3
