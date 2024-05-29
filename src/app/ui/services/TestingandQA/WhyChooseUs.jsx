import React from "react";
import Expertise from "/public/assets/services/TestingandQA/expertise.jpg";
import CustomizedSolutions from "/public/assets/services/TestingandQA/customizedsolutions.jpg";

import Image from "next/image";
const WhyChooseUs = () => {
  return (
    <div className="px-4 py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10">
      <div className="flex flex-col mb-6 lg:justify-between lg:flex-row md:mb-8">
        <h2 className="max-w-lg mb-5  font-bold tracking-tight text-gray-900 md:text-Heading  text-Heading-sm sm:leading-none md:mb-6 group">
          <span className="inline-block mb-1 sm:mb-4">
            Why Choose Us for Quality Assurance?
          </span>
          <div className="h-1 ml-auto duration-300 origin-left transform bg-deep-purple-accent-400 scale-x-30 group-hover:scale-x-100" />
        </h2>
        <p className="text-gray-700 md:text-Para text-Para-sm md:max-w-xl">
          Our dedicated team of QA experts thoroughly examines every detail to
          ensure top-notch quality of your software, ensuring it's not just
          error-free, but also optimized for performance, security, and user
          experience. With a focus on continuous improvement and innovation, we
          guarantee that your software will not only meet your expectations but
          also elevate your business to new heights of success in today's
          competitive landscape.
        </p>
      </div>
      <div className="grid gap-6 row-gap-5 mb-8 lg:grid-cols-4 sm:row-gap-6 sm:grid-cols-2">
        <a href="/" aria-label="View Item">
          <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
            <Image
              src={Expertise}
              className="object-cover w-full h-56 md:h-64 xl:h-80"
              alt=""
            />
            <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
              <p className="mb-4 md:text-CardHeading text-CardHeading-sm font-semibold text-gray-100">
                Expertise
              </p>
              <p className="text-sm tracking-wide text-gray-300">
                Our team comprises seasoned professionals with extensive
                experience in testing methodologies, tools, and technologies. We
                bring a wealth of knowledge and skills to every project,
                ensuring thorough and effective testing processes that uncover
                even the most elusive defects.
              </p>
            </div>
          </div>
        </a>
        <a href="/" aria-label="View Item">
          <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
            <img
              className="object-cover w-full h-56 md:h-64 xl:h-80"
              src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
              alt=""
            />
            <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
              <p className="mb-4 text-lg font-bold text-gray-100">
                Comprehensive Approach
              </p>
              <p className="text-sm tracking-wide text-gray-300">
                We take a holistic approach to testing and QA, covering all
                aspects of software quality, including functionality,
                performance, security, and usability. From requirement analysis
                to test execution and beyond, we leave no stone unturned in our
                quest for software excellence.
              </p>
            </div>
          </div>
        </a>
        <a href="/" aria-label="View Item">
          <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
            <Image
              className="object-cover w-full h-56 md:h-64 xl:h-80"
              src={CustomizedSolutions}
              alt=""
            />
            <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
              <p className="mb-4 text-lg font-bold text-gray-100">
                Customized Solutions
              </p>
              <p className="text-sm tracking-wide text-gray-300">
                We understand that every project is unique, which is why we
                tailor our testing and QA strategies to fit your specific needs
                and goals. Whether you require manual or automated testing,
                regression testing, or specialized security testing, we'll craft
                a solution that meets your requirements and exceeds your
                expectations.
              </p>
            </div>
          </div>
        </a>
        <a href="/" aria-label="View Item">
          <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
            <img
              className="object-cover w-full h-56 md:h-64 xl:h-80"
              src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
              alt=""
            />
            <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
              <p className="mb-4 text-lg font-bold text-gray-100">
                Commitment to Quality
              </p>
              <p className="text-sm tracking-wide text-gray-300">
                Quality is at the core of everything we do. We are dedicated to
                delivering software that not only meets but exceeds industry
                standards for reliability, stability, and performance. With our
                rigorous testing processes and unwavering commitment to
                excellence, you can trust us to ensure the highest levels of
                quality for your software products.
              </p>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default WhyChooseUs;
