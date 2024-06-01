"use client"
import React from 'react'
import { PiNumberSquareOne } from "react-icons/pi";
import { PiNumberSquareTwo } from "react-icons/pi";
import { PiNumberSquareThree } from "react-icons/pi";
import { PiNumberSquareFour } from "react-icons/pi";
import { PiNumberSquareFive } from "react-icons/pi";
import { PiNumberSquareSix } from "react-icons/pi";
import { GoDotFill } from "react-icons/go";
import { motion } from 'framer-motion';
import { fadein } from "@/components/ui/variants";

const Process = () => {

    const steps=[
        {id:1,
            icon:PiNumberSquareOne,
            title:"Discovery",
            line1:"Initial consultation to understand your goals and requirements.",
            line2:"Market and competitor analysis to inform design and development strategies.",
        },
        {id:2,
            icon:PiNumberSquareTwo,
            title:"Design",
            line1:"Create wireframes and mockups for client approval.",
            line2:"Iterate on designs based on feedback to ensure alignment with your vision.",
        },
        {id:3,
            icon:PiNumberSquareThree,
            title:"Development",
            line1:"Code the website or application using modern technologies and best practices.",
            line2:"Integrate necessary functionalities and third-party services.",
        },
        {id:4,
            icon:PiNumberSquareFour,
            title:"Testing",
            line1:"Conduct thorough testing across different devices and browsers.",
            line2:"Perform usability testing to ensure an optimal user experience.",
        },
        {id:5,
            icon:PiNumberSquareFive,
            title:"Launch",
            line1:"Deploy the website or application to the live server.",
            line2:"Monitor the launch to quickly address any issues.",
        },
        {id:6,
            icon:PiNumberSquareSix,
            title:"Post-Launch",
            line1:"Provide ongoing maintenance and updates.",
            line2:"Analyze performance and suggest improvements.",
        }
    ]

  return (
    <div className='flex items-center justify-center'>
        <div className='w-[80%] flex flex-col items-center justify-center'>
            <motion.h1
            variants={fadein("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.8 }}
             className="text-blue-900 mb-6 sm:mt-6 text-MainHeading-sm md:text-MainHeading md:p-6 font-semibold leading-none tracking-tight cursor-pointer">
            <span className="relative inline-block">
                <svg
                viewBox="0 0 52 24"
                fill="currentColor"
                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-50 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                >
                <defs>
                    <pattern
                    id="fdca20a0-aeb4-4caf-ba1b-4351eee42363"
                    x="0"
                    y="0"
                    width=".135"
                    height=".30"
                    >
                    <circle cx="1" cy="1" r=".7" />
                    </pattern>
                </defs>
                <rect
                    fill="url(#fdca20a0-aeb4-4caf-ba1b-4351eee42363)"
                    width="52"
                    height="24"
                />
                </svg>
                <span className="relative">Our </span>
            </span>{' '}
            Process
            </motion.h1>
        
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {steps.map((feat)=>{
                    return(
                        <motion.div
                        variants={fadein("down2", 0.2)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: true, amount: 0.8 }}
                        key={feat.id} className='flex flex-row p-2 border border-gray hover:scale-105 hover:bg-green-50 ease-out cursor-pointer'>
                            <div className='text-blue-950 text-CardHeading-sm md:text-CardHeading font-bold pr-4'><feat.icon/></div>
                            <div>
                                <h2 className='text-blue-950 text-CardHeading-sm md:text-CardHeading font-bold'>{feat.title}</h2>
                                <p className='flex flex-row text-Para-sm md:text-Para'><span className='text-blue-950'><GoDotFill/></span>{feat.line1}</p>
                                <p className='flex flex-row text-Para-sm md:text-Para'><span className='text-blue-950'><GoDotFill/></span>{feat.line2}</p>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    </div>
  );
};

export default Process;