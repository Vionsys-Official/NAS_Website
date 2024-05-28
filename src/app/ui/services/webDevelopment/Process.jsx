import React from 'react'
import { PiNumberSquareOne } from "react-icons/pi";
import { PiNumberSquareTwo } from "react-icons/pi";
import { PiNumberSquareThree } from "react-icons/pi";
import { PiNumberSquareFour } from "react-icons/pi";
import { PiNumberSquareFive } from "react-icons/pi";
import { PiNumberSquareSix } from "react-icons/pi";
import { GoDotFill } from "react-icons/go";

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
            <h1 className='text-MainHeading-sm md:text-MainHeading pb-6 font-semibold cursor-pointer'>Our Process</h1>
            <div className='grid grid-cols-3 gap-6'>
                {steps.map((feat)=>{
                    return(
                        <div key={feat.id} className='flex flex-row p-2 border border-gray hover:scale-105 hover:bg-gray-100 ease-out cursor-pointer'>
                            <div className='text-CardHeading-sm md:text-CardHeading font-bold pr-4'><feat.icon/></div>
                            <div>
                                <h2 className='text-CardHeading-sm md:text-CardHeading font-bold'>{feat.title}</h2>
                                <p className='flex flex-row text-Para-sm md:text-Para'><span><GoDotFill/></span>{feat.line1}</p>
                                <p className='flex flex-row text-Para-sm md:text-Para'><span><GoDotFill/></span>{feat.line2}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    </div>
  );
};

export default Process;