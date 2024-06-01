import React from "react";
import { FaCloud } from "react-icons/fa6";

const salesforcesec4 = () => {
  return (
    <section>
      <div className="md:py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <p className="font-heading mt-2  text-Heading leading-8 font-medium tracking-tight text-gray-900 sm:text-4xl">
              Transform Your Business with Salesforce Cloud
            </p>
          </div>

          <div className="md:mt-16 mt-4">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              <div className="relative duration-300  transform bg-white  hover:-translate-y-2 cursor-pointer">
                <dt>
                  <FaCloud className="absolute top-0 left-0 mt-1 ml-1 text-2xl text-blue-600" />
                  <p className="font-heading ml-16 text-center text-SubHeading leading-6 font-bold text-gray-700">
                    Sales Cloud
                  </p>
                </dt>
                <dd className="mt-2 md:ml-16 text-base text-center px-2 text-gray-800">
                  Transform your sales process with Sales Cloud, a comprehensive
                  sales CRM platform that empowers your team to sell smarter and
                  faster. From lead management to pipeline forecasting, Sales
                  Cloud provides the tools you need to close deals and drive
                  revenue.
                </dd>
              </div>

              <div className="relative duration-300 transform bg-white hover:-translate-y-2 cursor-pointer">
                <dt>
                  <FaCloud className="absolute top-0 left-0 mt-1 ml-1 text-2xl text-blue-600" />
                  <p className="font-heading ml-16 text-center text-SubHeading leading-6 font-bold text-gray-700">
                    Marketing Cloud
                  </p>
                </dt>
                <dd className="mt-2 md:ml-16 text-base text-center px-2 text-gray-800">
                  {" "}
                  Engage customers at every touchpoint with Marketing Cloud.
                  This integrated marketing platform allows you to create
                  personalized, data-driven marketing campaigns, automate
                  customer journeys and measure the impact of your marketing
                  efforts.
                </dd>
              </div>
              <div className="relative duration-300 transform bg-white hover:-translate-y-2 cursor-pointer">
                <dt>
                  <FaCloud className="absolute top-0 left-0 mt-1 ml-1 text-2xl text-blue-600" />
                  <p className="font-heading ml-16 text-SubHeading text-center leading-6 font-bold text-gray-700">
                    Platform and App Cloud
                  </p>
                </dt>
                <dd className="mt-2 md:ml-16 text-base text-center px-2 text-gray-800">
                  {" "}
                  Customize and extend Salesforce to fit your unique business
                  needs with Platform and App Cloud. Build custom applications,
                  integrate with third-party systems and extend the power of
                  Salesforce with low-code development tools.
                </dd>
              </div>
              <div className="relative duration-300 transform bg-white hover:-translate-y-2 cursor-pointer">
                <dt>
                  <FaCloud className="absolute top-0 left-0 mt-1 ml-1 text-2xl text-blue-600" />
                  <p className="font-heading ml-16 text-SubHeading text-center leading-6 font-bold text-gray-700">
                    Service Cloud
                  </p>
                </dt>
                <dd className="mt-2 md:ml-16 text-center px-2 text-base text-gray-800">
                  Empower your customer service team with Service Cloud to
                  deliver unparalleled customer experiences. This robust
                  platform allows you to assist customers through various
                  channels, expedite issue resolution with AI-driven tools and
                  foster enduring customer connections.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
};

export default salesforcesec4;
