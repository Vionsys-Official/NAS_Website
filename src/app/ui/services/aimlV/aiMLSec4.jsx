"use client"
import { FaCheckCircle } from "react-icons/fa";
import React, { useState } from 'react';

const industryData = {
    Fintech: [
      'Algorithmic trading',
      'Personalized financial planning',
      'Data Analysis',
      'Chatbots for Customer Service',
      'Credit Scoring',
    ],
    Marketing: [
      'Predictive Marketing',
      'Chatbots for personalized customer service',
      'Dynamic content creation and optimization',
      'Customer Understanding',
      'Behavioral Analysis',
      'Competitor Analysis',
    ],
    Realstate: [
      'Virtual tours and property visualization',
      'Transaction Management',
      'Workspace Management',
      'Automated Property Valuation',
      'Smart Home Integration',
    ],
    Gaming: [
      'AI-powered game characters and environments',
      'Generative game content creation',
      'Real-Time Analytics & Data Mining',
      'Player Sentiment Analysis',
      'Cheat Detection in Multiplayer Games',
    ],
    Manufacturing: [
      'Robot-assisted assembly and quality control',
      'Supply chain optimization and demand forecasting',
      'Inventory management and stock replenishment',
      'Route optimization and logistics planning',
    ],
    Healthcare: [
      'Drug discovery and development',
      'Personalized Treatment',
      'End-to-End Clinical Solutions',
      'Image Analysis Software',
      'Virtual assistants for symptom analysis and triage',
    ],
  };
  
 const industryParagraphs = {
    Fintech: [
      <p className="text-lg leading-6 text-gray-800">
        The financial sector is the second largest sector after healthcare to implement AI to secure and safeguard funds and data. Our AI architects have received AI integration orders into the existing systems or a few ones built from scratch, which are as follows.
      </p>
    ],
    Marketing: [
      <p className="text-lg leading-6 text-gray-800">
        We can be your extended helping hand for building customized campaigns, predicting your customer behavior, and recommending products/services. Our AI engineers excel at designing algorithms to target the right audience and deliver the right message to address their pain points.
      </p>
    ],
    Realstate: [
      <p className="text-lg leading-6 text-gray-800">
        Our AI innovators take the challenge of crafting bespoke solutions that redefine every square foot, from buying and selling to experience spaces like never before. Count on us to reshape your real-estate business projects using cutting-edge technologies.
      </p>
    ],
    Gaming: [
      <p className="text-lg leading-6 text-gray-800">
        Gaming is the next big thing to invest in, and implementing AI in gaming means changing the landscape of how users perform, what impact games leave, and how they interact. Our AI programmers implement Artificial Intelligence in your existing gaming project or build a new one from scratch.
      </p>
    ],
    Manufacturing: [
      <p>
        AI and ML are key to the future of smart manufacturing. Our solutions include predictive maintenance, process optimization and quality control through machine vision. We help manufacturers reduce downtime, improve product quality and increase overall efficiency.
      </p>
    ],
    Healthcare: [
      <p className="text-lg leading-6 text-gray-800">
        AI has opened up ample possibilities in the healthcare industry. Below are some AI-backed possibilities we have built so far:
      </p>
    ]
  };
  

const aiMLSec4 = () => {
    const handleIndustryChange = (industry) => {
        setSelectedIndustry(industry);
      };
      const [selectedIndustry, setSelectedIndustry] = useState((Object.keys(industryData)[0]));
      
  return (
    <section>
        {/* Section 4 */}
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900">Industry-Wise AI and ML Use Cases</h2>
            <p className="mt-4 text-base md:text-lg leading-6 text-gray-500">
              We've segregated AI and ML use cases by industry to simplify your exploration. Explore the possibilities for
              your industry and get a free 2-hour consjultation to discuss tailored AI/ML development services that can
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

  )
}

export default aiMLSec4