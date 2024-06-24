'use client'
import Image from 'next/image'
import React from 'react'
import { fadein } from '@/components/ui/variants';
import { motion } from 'framer-motion';
import Customization from '/public/assets/services/Crm/Customization.jpg'
import Expertise from '/public/assets/services/Crm/Expertise.jpg'
import Innovation from '/public/assets/services/ItStaffing/Innovation.jpeg'
import Result from '/public/assets/services/Crm/Result.jpeg'


const Benefit = () => {

    return (
        <div className='py-16'>
            <motion.h1
            variants={fadein("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.8 }} className="md:text-Heading text-Heading-sm font-extrabold py-4 text-center text-blue2 capitalize">Benefits of Partnering with Us</motion.h1>
            <div className='flex md:flex-row flex-col items-center md:justify-evenly gap-4 md:py-0 px-2'>
                <motion.div
                    variants={fadein("up", 0.2)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: true, amount: 0.8 }} className="max-w-xs bg-white border rounded-lg shadowborder-gray-700">
                    <Image className="rounded-t-lg" src={Expertise} alt="" width={'400'} height={"400"} />
                    <div className="p-3">
                        <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 md:text-CardHeading text-CardHeading-sm hover:text-blue2">Expertise</h5>
                        <p className="font-normal text-gray-800 md:text-Para text-Para-sm">Our deep industry knowledge and technical expertise enable us to find the best talent for your needs.</p>
                    </div>
                </motion.div>

                <motion.div
                    variants={fadein("up", 0.2)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: true, amount: 0.8 }} className="max-w-xs bg-white border-2 rounded-lg shadowborder-gray-700">
                    <Image className="rounded-t-lg" src={Customization} alt="" width={'400'} height={"400"} />
                    <div className="p-3">
                        <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 md:text-CardHeading text-CardHeading-sm hover:text-blue2">Customization</h5>
                        <p className="font-normal text-gray-800 md:text-Para text-Para-sm">Tailored staffing solutions to fit your specific project and business requirements.</p>
                    </div>
                </motion.div>

                <motion.div
                    variants={fadein("up", 0.2)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: true, amount: 0.8 }} className="max-w-xs bg-white border rounded-lg shadowborder-gray-700">
                    <Image className="rounded-t-lg" src={Result} alt="" width={'400'} height={"400"} />
                    <div className="p-3">
                        <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 md:text-CardHeading text-CardHeading-sm hover:text-blue2">Quality Assurance</h5>
                        <p className="font-normal text-gray-800 md:text-Para text-Para-sm">Commitment to delivering high-quality service and ensuring our client satisfaction.</p>
                    </div>
                </motion.div>

                <motion.div
                    variants={fadein("up", 0.2)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: true, amount: 0.8 }} className="max-w-xs bg-white border rounded-lg shadowborder-gray-700">
                    <Image className="rounded-t-lg" src={Innovation} alt="" width={'400'} height={"400"} />
                    <div className="p-3">
                        <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 md:text-CardHeading text-CardHeading-sm hover:text-blue2">Innovation</h5>
                        <p className="font-normal text-gray-800 md:text-Para text-Para-sm">Continuous adaptation to the latest trends and technologies to provide cutting-edge staffing solutions.</p>
                    </div>
                </motion.div>

            </div>
        </div>
    )
}

export default Benefit