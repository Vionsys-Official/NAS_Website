"use client"
import Image from 'next/image';
import Link from 'next/link'
import React from 'react'
import Sectwo from '/public/assets/services/digitalMarketing/sectwo.jpg';
import { motion } from 'framer-motion';

const sectiontwo = () => {
  return (
    <section>
      <div className="px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-28 bg-white">
        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            delay: 0.2,
            opacity: { type: "spring", stiffness: 30 },
            scale: { type: "spring", stiffness: 30 },
            ease: "easeInOut"
          }}
          className="md:p-6 p-2 rounded shadow-md bg-slate-200">
          <div className="flex items-center flex-col lg:flex-row">
            <div className="mb-6 lg:mb-0 lg:w-1/2 lg:pr-5">
              <h2 className="md:text-MainHeading text-MainHeading-sm capitalize font-extrabold tracking-tighter leading-tight text-blue2">
                Welcome to,
                <br />
                NAS Infotech{' '}
                <span className="inline-block">
                  Pvt. Ltd.
                </span>
              </h2>
            </div>

            <div
              className="lg:w-1/2">
              <p className="mb-4 text-Para">
                "We provide top-notch IT services to help your business thrive in the digital age. Located in Pune, we specialize in delivering customized software solutions and a range of IT services tailored to meet your unique <span className="inline-block">business requirements.</span>"
              </p>

              <Link
                href={"#Knowmore"}
                aria-label=""
                className="font-semibold text-blue-600 hover:text-blue-500">
                Know more
              </Link>
            </div>

          </div>
        </motion.div>
      </div>

      <main className="p-4 w-full lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 text-center">
          <div className="flex flex-col justify-center items-center">
            <motion.h5
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                delay: 0.2,
                x: { type: "spring", stiffness: 30 },
                opacity: { duration: 0.6 },
                ease: "easeInOut"
              }}
              className="mb-4 text-start md:text-MainHeading text-MainHeading-sm font-extrabold text-blue2 leading-none">
              Reinventing the world for good,
              that's what technology is for.
            </motion.h5>
            <motion.p
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                delay: 0.2,
                x: { type: "spring", stiffness: 30 },
                opacity: { duration: 0.6 },
                ease: "easeInOut"
              }}
              className="mb-6 px-2 text-start text-Para">
              We specialize in delivering innovative technology solutions,
              including Software Development, Cloud Computing, Big Data Analytics,
              AI and more. Our expert team is committed to providing tailored services
              that drive efficiency and growth for your business. With a client-centric
              approach, we ensure your success in the digital age.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.6 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 0.2,
              scale: { type: "spring", stiffness: 30 },
              opacity: { duration: 0.6 },
              ease: "easeInOut"
            }}
          >
            <Image
              className="object-cover w-full h-56 rounded-xl shadow-md shadow-blue-900 sm:h-96"
              src={Sectwo}
              alt=""
            />
          </motion.div>
        </div>
      </main>
    </section>
  );
};
export default sectiontwo;