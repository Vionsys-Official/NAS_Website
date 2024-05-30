'use client'
import React from "react";
import { fadein } from '@/components/ui/variants';
import { motion } from 'framer-motion';
import Image from "next/image";
import customcentric from "./images/customcentric.jpg";
import development from "./images/development.jpg";
import delivery from "./images/delivery.jpg";
import solutions from "./images/solutions.jpg";
import agile from "./images/agile.jpg";
import team from "./images/team.jpg";
import Link from "next/link";
const Grid = () => {
  return (
    <>
      <section className="h-full w-full">
        <div className="px-4 md:py-20 py-6 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-14">
          {/* discover our unique features */}
          <div className="flex flex-col mb-6 lg:justify-evenly lg:flex-row  ">
            <h2 className="max-w-lg mb-5 text-blue-900 font-sans text-SubHeading font-bold tracking-tight  sm:text-4xl sm:leading-none md:mb-6 group text-center">
              <span className="inline-block mb-1 sm:mb-4">
                Discover Our Unique Features
                <br className="hidden md:block" />
                Our features are designed to enhance your productivity and
                streamline your workflow.
              </span>
              <div className="h-1 ml-auto duration-300 origin-left transform bg-deep-purple-accent-400 scale-x-30 group-hover:scale-x-100" />
            </h2>
            <p className="tracking-wide lg:text-Para lg:max-w-xl text-center md:border-l-4 md:pl-8 border-green-400 p-2 text-black ">
              Explore the innovative features that set us apart. Our advanced IT
              solutions are designed to optimize your operations and enhance
              productivity. With cutting-edge technology, seamless integration,
              and robust security measures, our features ensure your business
              stays ahead in a competitive market. Discover how our
              user-friendly interfaces, customizable options.
            </p>
          </div>
          {/* first row */}
          <div className="grid gap-6 row-gap-5  lg:grid-cols-3 sm:row-gap-6 sm:grid-cols-2 md:py-10">
            {/* first */}
            <Link href="/" aria-label="View Item">
              <h1 className="text-center py-2 text-CardHeading border-t-2 border-blue-600 rounded-md text-blue-700 font-extrabold">
                Client-centric approach
              </h1>
              <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
                <Image
                  className="object-cover w-full h-56 md:h-64 xl:h-80"
                  src={customcentric}
                  alt="img"
                />
                <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100 text-center flex justify-center flex-col">
                  <p className="mb-4 text-lg font-bold text-gray-100 ">
                    Client-centric approach
                  </p>
                  <motion.p
                    variants={fadein("right", 0.1)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.5 }}
                    className="text-sm tracking-wide text-gray-300 "
                  >
                    Our company prioritizes a customer-centric approach,
                    ensuring that every solution we develop is tailored to meet
                    the unique needs and preferences of our clients. By actively
                    engaging with customers, gathering their feedback, and
                    adapting to their evolving requirements, we deliver
                    personalized, high-value technology solutions.
                  </motion.p>
                </div>
              </div>
            </Link>
            {/* second */}
            <Link href="/" aria-label="View Item">
              <h1 className="text-center py-2 text-CardHeading border-t-2 border-blue-600 rounded-md text-blue-700 font-extrabold">
                Iterative Development
              </h1>
              <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl text-center ">
                <Image
                  className="object-cover w-full h-56 md:h-64 xl:h-80"
                  src={development}
                  alt="img"
                />
                <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100 flex justify-center flex-col">
                  <p className="mb-4 text-lg font-bold text-gray-100">
                    Iterative Development
                  </p>
                  <p className="text-sm tracking-wide text-gray-300  ">
                    We excel in iterative development, breaking projects into
                    manageable iterations to deliver frequent, high-quality
                    updates. This approach allows us to adapt quickly to
                    feedback, refine our solutions continuously, and ensure that
                    the final product perfectly aligns with our clients'
                    needs.By embracing iterative development, we foster agility,
                    innovation, and a commitment to delivering exceptional value
                    every step of the way.
                  </p>
                </div>
              </div>
            </Link>
            {/* third */}
            <Link href="/" aria-label="View Item">
              <h1 className="text-center py-2 text-CardHeading border-t-2 border-blue-600 rounded-md text-blue-700 font-extrabold">
                Incremental Delivery
              </h1>
              <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl text-center">
                <Image
                  className="object-cover w-full h-56 md:h-64 xl:h-80"
                  src={delivery}
                  alt="img"
                />
                <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100 flex justify-center flex-col">
                  <p className="mb-4 text-lg font-bold text-gray-100">
                    Incremental delivery
                  </p>
                  <p className="text-sm tracking-wide text-gray-300">
                    We championed incremental delivery, consistently providing
                    small, functional increments of the product to ensure
                    ongoing value and adaptability. This method allows for
                    continuous feedback, enabling us to make timely improvements
                    and adjustments. By embracing incremental delivery, we
                    ensure our solutions evolve with our clients' needs,
                    maintaining high quality and relevance throughout the
                    development process.
                  </p>
                </div>
              </div>
            </Link>
          </div>
          {/* second row */}
          <div className="grid gap-6 row-gap-5  lg:grid-cols-3 sm:row-gap-6 sm:grid-cols-2 ">
            {/* first */}
            <Link href="/" aria-label="View Item">
              <h1 className="text-center py-2 text-CardHeading border-t-2 border-blue-600 rounded-md text-blue-700 font-extrabold">
                Innovative Solutions
              </h1>
              <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl text-center">
                <Image
                  className="object-cover w-full h-56 md:h-64 xl:h-80"
                  src={solutions}
                  alt="img"
                />
                <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100 flex justify-center flex-col">
                  <p className="mb-4 text-lg font-bold text-gray-100">
                    Innovative Solutions
                  </p>
                  <p className="text-sm tracking-wide text-gray-300">
                    Company is dedicated to delivering innovative solutions that
                    drive transformation and success for our clients. By
                    leveraging the latest technologies and creative thinking, we
                    develop cutting-edge products tailored to meet unique
                    challenges and opportunities. Our commitment to innovation
                    ensures that we provide exceptional value, helping our
                    clients stay ahead in a rapidly evolving digital landscape.
                  </p>
                </div>
              </div>
            </Link>
            {/* second */}
            <Link href="/" aria-label="View Item">
              <h1 className="text-center py-2 text-CardHeading border-t-2 border-blue-600 rounded-md text-blue-700 font-extrabold">
                Agile Methodology
              </h1>
              <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl text-center">
                <Image
                  className="object-cover w-full h-56 md:h-64 xl:h-80"
                  src={agile}
                  alt="img"
                />
                <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100 text-center flex justify-center flex-col">
                  <p className="mb-4 text-lg font-bold text-gray-100">
                    Agile Methodology
                  </p>
                  <p className="text-sm tracking-wide text-gray-300">
                    Our company thrives on Agile methodology, ensuring
                    flexibility, collaboration, and rapid delivery of
                    high-quality solutions. By embracing iterative cycles,
                    frequent feedback, and adaptive planning, we continuously
                    refine our processes and products to meet our clients'
                    evolving needs. This commitment to Agile principles empowers
                    us to deliver exceptional value efficiently and effectively,
                    fostering innovation and customer satisfaction.
                  </p>
                </div>
              </div>
            </Link>
            {/* third */}
            <Link href="/" aria-label="View Item">
              <h1 className="text-center py-2 text-CardHeading border-t-2 border-blue-600 rounded-md text-blue-700 font-extrabold">
                Cross-functional teams
              </h1>
              <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
                <Image
                  className="object-cover w-full h-56 md:h-64 xl:h-80"
                  src={team}
                  alt="img"
                />
                <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100 text-center flex justify-center flex-col">
                  <p className="mb-4 text-lg font-bold text-gray-100">
                    Cross-functional teams
                  </p>
                  <p className="text-sm tracking-wide text-gray-300">
                    We are bringing together diverse expertise to foster
                    collaboration and innovation. By integrating developers,
                    designers, testers, and business analysts, we ensure a
                    holistic approach to problem-solving and solution
                    development. This synergy of skills and perspectives allows
                    us to deliver comprehensive, high-quality products that meet
                    our clients' complex needs efficiently and effectively.
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Grid;
