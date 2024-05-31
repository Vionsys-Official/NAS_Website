'use client'
import React from 'react'
import { fadein } from '@/components/ui/variants';
import { motion } from 'framer-motion';

const Faq3 = ({ faq }) => {

    return (
        <div className='md:p-8 p-2'>
            <motion.div
            variants={fadein("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.8 }} 
            className="text-center">
                <h3 className="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-blue950">
                    Frequently Asked <span className="text-blue2">Questions</span>
                </h3>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.7 }} //X:100
              whileInView={{ opacity: 1, scale: 1 }} //y:100
              transition={{
                delay: 0.2,
                scale: { type: "spring", stiffness: 30 },
                opacity: { duration: 0.6 },
                ease: "easeInOut",
              }}  className="accordion space-y-2 md:p-5 p-1">
                {faq.map((item) => (
                    <div key={item.id} className="card border border-gray-300 rounded-lg">
                        <input type="checkbox" id={`accordion-toggle-${item.id}`} className="hidden peer" />
                        <label
                            htmlFor={`accordion-toggle-${item.id}`}
                            className="flex justify-between items-center w-full md:text-lg text-base text-left font-bold md:px-4 px-2 md:py-3 py-0 transition-all duration-300 text-black border-b border-gray-400 cursor-pointer peer-checked:border-primary peer-checked:text-primary"
                        >
                            {item.ques}
                            <span className="transform transition-transform duration-300 peer-checked:rotate-180">
                                ⯆
                            </span>
                        </label>
                        <div className="max-h-0 overflow-hidden transition-all duration-300 peer-checked:max-h-96">
                            <div className="card-body md:text-base text-sm p-4">
                                <p className="text-gray-800">{item.ans}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </motion.div>
        </div>
    )
}

export default Faq3