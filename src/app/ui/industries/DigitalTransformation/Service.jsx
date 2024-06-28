'use client'
import React from 'react'
import { fadein } from '@/components/ui/variants';
import { motion } from 'framer-motion';

const Service = () => {

  const service = [
    {
      id: 1,
      title: "Data Analytics and AI",
      para: "Unlock the power of data with our advanced analytics and AI solutions. Gain valuable insights, make informed decisions and drive business growth with predictive analytics, machine learning and more.",
    },
    {
      id: 2,
      title: "Cybersecurity",
      para: "Protect your digital assets and mitigate cyber risks with our comprehensive cybersecurity solutions. From threat detection and prevention to incident response and compliance, we have you covered.",
    },
    {
      id: 3,
      title: "Digital Workplace",
      para: "Empower your workforce with our digital workplace solutions. Enable remote work, enhance collaboration and improve productivity with tools like virtual desktops, unified communications and collaboration platforms.",
    },
    {
      id: 4,
      title: "Consulting and Strategy",
      para: "We offer strategic consulting services to assess your current IT landscape, identify opportunities for digital transformation and develop a roadmap for success.",
    },
    {
      id: 5,
      title: "Cloud Computing",
      para: "Our cloud experts can help you migrate to the cloud, optimize your infrastructure and leverage cloud services for improved scalability, flexibility and savings.",
    },
  ]

  return (
    <div className="px-4 py-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-16">
      <motion.div
        variants={fadein("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0.8 }} className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <h2 className="max-w-lg mb-6 md:text-Heading text-Heading-sm text-center font-extrabold leading-none tracking-tight text-blue2 sm:text-4xl md:mx-auto">
          Our Digital Transformation Services
        </h2>
      </motion.div>
      <div className="grid md:gap-8 gap-4 row-gap-8 lg:grid-cols-3">
        {service.map((item) => (
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }} //X:100
            whileInView={{ opacity: 1, scale: 1 }} //y:100
            transition={{
              delay: 0.2,
              scale: { type: "spring", stiffness: 30 },
              opacity: { duration: 0.6 },
              ease: "easeInOut",
            }} key={item.id} className="sm:text-center md:p-3 p-2 rounded-xl border-2 border-blue1">
            <h6 className="mb-4 md:text-CardHeading text-CardHeading-sm font-semibold leading-5">{item.title}</h6>
            <p className="max-w-md md:text-Para text-Para-sm text-gray-900 sm:mx-auto">
              {item.para}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Service