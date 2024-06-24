"use client"
import { fadein } from '@/components/ui/variants'
import { motion } from 'framer-motion'
import React from 'react'


function Bankingchoose() {
  return (
    <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8  sm:py-10">
      <div className="max-w-xl mb-5 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12 sm:py-2">
        <h2 className="max-w-lg mb-6 md:text-Heading font-extrabold leading-none tracking-tight text-blue2 text-Heading-sm md:mx-auto">
          <span className="relative inline-block">
            <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              className="absolute top-0 left-0 z-0 hidden w-32 mt-8 ml-20 text-blue900 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
            >
              <defs>
                <pattern
                  id="07690130-d013-42bc-83f4-90de7ac68f76"
                  x="0"
                  y="0"
                  width=".135"
                  height=".30"
                >
                  <circle cx="1" cy="1" r=".7" />
                </pattern>
              </defs>
              <rect
                fill="url(#07690130-d013-42bc-83f4-90de7ac68f76)"
                width="52"
                height="15"
              />
            </svg>
            <span className="relative">Why</span>
          </span>{' '}
          Choose Us?
        </h2>
        <p className=" font-semibold text-slate-600 md:text-lg text-Para-sm">
          Our major priority is your satisfaction.
        </p>
      </div>
      <div className="grid max-w-screen-lg mx-auto space-y-6 lg:grid-cols-2 lg:space-y-0 lg:divide-x">
        <div className="space-y-6 sm:px-16">
          <div className="flex flex-col max-w-md sm:flex-row">
            <div className="mb-4 mr-4">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-50">
                <svg
                  className="w-8 h-8 text-deep-purple-accent-400 sm:w-10 sm:h-10"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </div>
            </div>
            <motion.div
              variants={fadein("left", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.8 }}>
              <h6 className="mb-3 font-bold leading-5  md:text-lg text-base">
                Expertise and Experience
              </h6>
              <p className=" md:text-Para text-Para-sm text-blue900 ">
                The company should have extensive experience in the financial and banking sectors understanding the unique challenges and requirements of these industries.

              </p>
            </motion.div>
          </div>
          <div className="flex flex-col max-w-md sm:flex-row">
            <div className="mb-4 mr-4">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-50">
                <svg
                  className="w-8 h-8 sm:w-10 sm:h-10"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </div>
            </div>
            <motion.div
              variants={fadein("left", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.8 }}
            >
              <h6 className="mb-3 font-bold leading-5 md:text-lg text-base">
                Innovative Solutions
              </h6>
              <p className="md:text-Para text-Para-sm text-blue900">
                The ability to leverage the latest technological advancements such as AI, blockchain and cloud computing to provide innovative and future-proof solutions.
              </p>
            </motion.div>
          </div>
          <div className="flex flex-col max-w-md sm:flex-row">
            <div className="mb-4 mr-4">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-50">
                <svg
                  className="w-8 h-8 text-deep-purple-accent-400 sm:w-10 sm:h-10"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </div>
            </div>
            <motion.div
              variants={fadein("left", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.8 }}>
              <h6 className="mb-3  font-bold leading-5 md:text-lg text-base">
                Customer-Centric Focus
              </h6>
              <p className="md:text-Para text-Para-sm text-blue900">
                Offering dedicated, responsive customer support to address issues and provide assistance promptly.
              </p>
            </motion.div>
          </div>
        </div>
        <div className="space-y-6 sm:px-16">
          <div className="flex flex-col max-w-md sm:flex-row">
            <div className="mb-4 mr-4">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-50">
                <svg
                  className="w-8 h-8 text-deep-purple-accent-400 sm:w-10 sm:h-10"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </div>
            </div>
            <motion.div
              variants={fadein("left", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.8 }}>
              <h6 className="mb-3 font-bold leading-5 md:text-lg text-base">
                Reliability and Trustworthiness
              </h6>
              <p className="md:text-Para text-Para-sm text-blue900">
                Consistently delivering high-quality services and maintaining reliable system performance.
                Clear and honest communication regarding project timelines, costs and potential challenges.

              </p>
            </motion.div>
          </div>
          <motion.div
            variants={fadein("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.8 }}
            className="flex flex-col max-w-md sm:flex-row">
            <div className="mb-4 mr-4">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-50">
                <svg
                  className="w-8 h-8 text-deep-purple-accent-400 sm:w-10 sm:h-10"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </div>
            </div>
            <motion.div
              variants={fadein("left", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.8 }}>
              <h6 className="mb-3 font-bold leading-5 md:text-lg text-base">
                Cost-Effective Solutions
              </h6>
              <p className=" text-blue900 md:text-Para text-Para-sm">
                Delivering high-quality services and solutions that provide excellent value for your investment. Implementing efficient processes that reduce costs and enhance operational efficiency.
              </p>
            </motion.div>
          </motion.div>
          <div className="flex flex-col max-w-md sm:flex-row">
            <div className="mb-4 mr-4">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-50">
                <svg
                  className="md:w-8 md:h-8 text-deep-purple-accent-400 w-10 h-10"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </div>
            </div>
            <motion.div
              variants={fadein("left", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.8 }}>
              <h6 className="mb-3 font-bold leading-5 md:text-lg text-base">
                Commitment to Continuous Improvement
              </h6>
              <p className=" text-blue900 md:text-Para text-Para-sm">
                Keeping up with technological advancements and industry trends to ensure that solutions remain relevant and effective.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>


  )
}

export default Bankingchoose
