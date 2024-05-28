"use client"
import { industryData, industryParagraphs, mysect2 } from '../aiAndml/myAIMlData';
import { FaCheckCircle } from "react-icons/fa";
import React, { useState } from 'react';
import FaqAIV from '@/app/ui/services/aimlV/faqV';
import Image from 'next/image';
import MyRobo from '/public/assets/services/aiML/MyRobo.jpg'


const aiAndml = () => {
  const handleIndustryChange = (industry) => {
    setSelectedIndustry(industry);
  };
  const [selectedIndustry, setSelectedIndustry] = useState((Object.keys(industryData)[0]));


  return (
    <main>

      <section className="relative h-screen flex flex-col items-center justify-center text-center text-white">
        {/* section 1 */}
        <div className="video-docker absolute top-0 left-0 w-full h-full overflow-hidden">
          <video
            className="min-w-full min-h-full absolute object-cover"
            src={require('/public/assets/services/aiML/My.mp4')}
            type="video/mp4"
            autoPlay
            muted
            loop
          ></video>
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30 z-10"></div>
        </div>
        <div className="video-content space-y-2 z-20">
          <h1 class="text-5xl font-extrabold text-gray-100">Discover the Potential of AI and Machine Learning for Your Business</h1>

          <button className="px-6 py-3 border-[1px] border-red-500 text-red-200 rounded-md text-md hover:bg-gray-300 hover:text-black transition duration-300">
            Get in Touch
          </button>
        </div>
      </section>


      <section>
        {/* section 2 */}
        <div className="mx-auto py-10 flex max-w-[58rem] flex-col items-center space-y-4 text-center">

          <h2 className="font-bold text-2xl leading-[1.1] sm:text-2xl md:text-4xl">Features</h2>

          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Discover the amazing features offered by us to enhance your online presence.
          </p>

        </div>
        <section className="py-10 md:py-7 mt-4 md:mt-0 flex items-center justify-center flex-col">

          <div className="w-[90%] grid items-center justify-center gap-4 md:gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {mysect2.map((feat) => (
              <div
                key={feat.id}
                className="border-2 border-gray-400 relative hover:cursor-pointer hover:scale-105 transition-all overflow-hidden rounded-lg bg-background p-2"
              >
                <div className="flex flex-col justify-center items-center rounded-md p-1">
                  <div className='text-4xl p-2 rounded-full bg-gray-200 text-red-600'><feat.icon /></div>
                  <div className="md:space-y-2 flex flex-col items-center justify-center w-[16rem] sm:w-full">
                    <h3 className="text-xl md:text-2xl text-blue-800 font-semibold">{feat.title}</h3>
                    <p className="text-sm md:text-md text-muted-foreground">
                      {feat.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </section>

      <section>
        {/* section 3 */}
        <div className="flex flex-wrap">
          <div className="w-full sm:w-8/12 mb-10">
            <div className="container mx-auto h-full sm:p-10">
              <nav className="flex px-4 justify-between items-center">
                <div className="text-4xl font-bold">
                  Intelligence<span className="text-red-600">.</span>
                </div>

              </nav>
              <header className="container px-4 lg:flex mt-10 items-center h-full lg:mt-0">
                <div className="w-full">
                  <h1 className="text-4xl lg:text-5xl font-bold">Discover cutting-edge   <span className="text-red-600">AI & ML</span> innovations for your space</h1>
                  <div className="w-20 h-2 bg-red-600 my-4"></div>
                  <p className="text-xl mb-10">Whether you're exploring predictive analytics, natural language processing, or computer vision, our platform equips you with the tools and insights necessary to thrive in this swiftly evolving domain. Embark on this journey with us as we harness the potential of AI and ML to shape the future.</p>

                </div>
              </header>
            </div>
          </div>
          <Image width={500} height={500} src={MyRobo} alt="Leafs" className="w-full h-48 object-cover sm:h-screen sm:w-4/12" />
        </div>
      </section>

      <section>
        {/* Section 4 */}
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900">Industry-Wise AI and ML Use Cases</h2>
            <p className="mt-4 text-base md:text-lg leading-6 text-gray-500">
              We've segregated AI and ML use cases by industry to simplify your exploration. Explore the possibilities for
              your industry and get a free 2-hour consultation to discuss tailored AI/ML development services that can
              unlock even greater potential for your business.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap justify-center space-x-4">
            {Object.keys(industryData).map(industry => (
              <div
                key={industry}
                className={`bg-red-600 cursor-pointer text-white px-6 py-3 rounded-md text-sm text-center 
      hover:bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-offset-2 
      focus:ring-red-500 ${selectedIndustry === industry ? 'border-[3px] border-black' : ''}`}
                onClick={() => handleIndustryChange(industry)}
                style={{ width: '150px', minWidth: '120px', marginBottom: '1rem' }}
              >
                {industry}
              </div>
            ))}
          </div>


          <div className="mt-8">
            {selectedIndustry && (
              <>
                {industryParagraphs[selectedIndustry]}
                <ul className="mt-8 space-y-4">
                  {industryData[selectedIndustry].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <FaCheckCircle className="flex-shrink-0 h-6 w-6 text-green-500" />
                      <span className="ml-3 text-lg leading-6 text-gray-900">{item}</span>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </div>
      </section>

            {/* faq */}
      <FaqAIV />

    </main>
  );
};

export default aiAndml;



