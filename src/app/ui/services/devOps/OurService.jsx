'use client'
import React from 'react'
import { fadein } from '@/components/ui/variants';
import { motion } from 'framer-motion';

const OurService = () => {

  const service = [
    {
      id: 1,
      title: "Continuous Integration/ Continuous Deployment (CI/CD)",
      para: "Automate your build, test and deployment processes to deliver software with greater speed, reliability and efficiency."
    },
    {
      id: 2,
      title: "Infrastructure as Code (IaC)",
      para: "Manage your infrastructure programmatically allowing for greater scalability, consistency and reproducibility."
    }, {
      id: 3,
      title: "Monitoring and Logging",
      para: "Gain insights into your application's performance and health with robust monitoring and logging solutions ensuring proactive issue resolution and optimization."
    }, {
      id: 4,
      title: "Security Automation",
      para: "Integrate security into every stage of the development lifecycle with automated security testing and compliance checks, enhancing your overall security posture."
    },
  ]

  return (
    <div className="px-4 py-3 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <motion.div
        variants={fadein("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.8 }}
        className="max-w-xl mb-2 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <h2 className="max-w-lg mb-4 text-center text-3xl font-bold leading-none tracking-tight text-blue950 sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            Our DevOps Services
          </span>
        </h2>
      </motion.div>
      <div className="grid md:gap-8 gap-4 row-gap-5 mb-8 md:row-gap-8 lg:grid-cols-4 sm:grid-cols-2">
        {service.map((item) => (
          <motion.div
            variants={fadein("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.8 }}
            key={item.id} className="duration-300 transform bg-white border-l-4 border-blue5 hover:-translate-y-6">
            <div className="h-full md:p-5 p-2 border border-l-0 rounded-r shadow-sm">
              <h6 className="mb-2 font-semibold text-center">{item.title}</h6>
              <p className="text-sm text-gray-900  text-center">
                {item.para}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default OurService