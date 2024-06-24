'use client'
import React from 'react'
import { motion } from 'framer-motion';

const Serve = () => {

    const serve = [
        {
            id: 1,
            title: "Healthcare",
        },
        {
            id: 2,
            title: "Finance",
        },
        {
            id: 3,
            title: "Telecommunications",
        },
        {
            id: 4,
            title: "Retail",
        },
        {
            id: 5,
            title: "Manufacturing",
        },
        {
            id: 6,
            title: "Government",
        },
    ]

    return (
        <motion.div
        initial={{ opacity: 0, scale: 0.7 }} //X:100
        whileInView={{ opacity: 1, scale: 1 }} //y:100
        transition={{
          delay: 0.2,
          scale: { type: "spring", stiffness: 30 },
          opacity: { duration: 0.6 },
          ease: "easeInOut",
        }} className="px-4 py-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl lg:px-8 text-gray-800">
            <h2 className="mb-4 md:text-Heading text-Heading-sm text-blue2 font-extrabold leading-none text-center">Industries We Serve</h2>
            <p className="mb-6 text-center text-lg text-slate-600 font-semibold">Our IT staffing services cater to a wide range of industries including but not limited to:</p>
            <ul className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
                {serve.map((item) => (
                    <li key={item.id} className="flex items-center space-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current text-violet-400 dark:text-violet-600">
                        <path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
                        <polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
                    </svg>
                    <span>{item.title}</span>
                </li>
                ))}
            </ul>
        </motion.div>
    )
}

export default Serve