import React from "react";
import Image from "next/image";
import Content1 from "@/../public/assets/industries/Finance/Content1.jpg";
import {Button} from "@/components/ui/Button";

const Sections = () => {
  return (
    <>
      {/* Section 1 */}
      <section>
        <div className="relative px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
          <div className="relative">
            <div className="grid gap-12 row-gap-8 lg:grid-cols-2">
              <div className="grid gap-12 row-gap-5 md:grid-cols-2">
                <div className="relative">
                  <h6 className="mb-2 font-semibold leading-5">
                    Software Solutions & CRM Systems
                  </h6>
                  <p className="text-sm text-gray-900">
                    Tailoring software solutions to meet specific business needs
                    and objectives, ensuring scalability, flexibility, and
                    seamless integration with existing systems.
                  </p>
                </div>
                <div>
                  <h6 className="mb-2 font-semibold leading-5">
                    Data Analytics and Business Intelligence
                  </h6>
                  <p className="text-sm text-gray-900">
                    Creating interactive data visualizations and dashboards that
                    enable stakeholders to gain actionable insights from complex
                    datasets, facilitating data-driven decision-making.
                  </p>
                </div>
                <div>
                  <h6 className="mb-2 font-semibold leading-5">
                    Cybersecurity Solutions
                  </h6>
                  <p className="text-sm text-gray-900">
                    Providing rapid incident response services and proactive
                    threat hunting capabilities to identify, mitigate, and
                    neutralize cyber threats before they escalate into breaches
                    or attacks.
                  </p>
                </div>
                <div>
                  <h6 className="mb-2 font-semibold leading-5">
                    Cloud Computing & e-Banking
                  </h6>
                  <p className="text-sm text-gray-900">
                    Assisting businesses in migrating their applications and
                    workloads to the cloud, optimizing cloud infrastructure, and
                    implementing cloud-native solutions to improve agility and
                    cost-efficiency.
                  </p>
                </div>
              </div>
              <div>
                <Image
                  className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
                  src={Content1}
                  alt=""
                  height={1000}
                  width={1000}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section>
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
          <div className="max-w-xl  mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
              How we can help you?
            </h2>
            <p className="text-base text-gray-700 md:text-lg">
              We can assist you in optimizing operations, enhancing security,
              improving compliance, and delivering superior customer
              experiences.
            </p>
          </div>
          <div className="grid max-w-screen-lg mx-auto space-y-6 lg:grid-cols-2 lg:space-y-0 lg:divide-x">
            <div className="space-y-6 sm:px-16">
              <div className="flex flex-col max-w-md sm:flex-row">
                <div className="hover:bg-violet-950 hover:text-white p-2 hover:cursor-pointer">
                  <h6 className="mb-3 text-xl font-bold leading-5">
                    Training and Education
                  </h6>
                  <p className="text-sm hover:text-white">
                    Provide training programs and workshops to educate finance
                    professionals on the latest technologies, trends, and best
                    practices in financial technology (fintech).
                  </p>
                </div>
              </div>
              <div className="flex flex-col max-w-md sm:flex-row">
                <div className="hover:bg-violet-950 hover:text-white p-2 hover:cursor-pointer">
                  <h6 className="mb-3 text-xl font-bold leading-5">
                    Artificial Intelligence and Machine Learning
                  </h6>
                  <p className="text-sm hover:text-white">
                    Develop AI-powered chatbots for customer service and
                    support, enabling clients to access financial information
                    and assistance 24/7.
                  </p>
                </div>
              </div>
              <div className="flex flex-col max-w-md sm:flex-row">
                <div className="hover:bg-violet-950 hover:text-white p-2 hover:cursor-pointer">
                  <h6 className="mb-3 text-xl font-bold leading-5">
                    Customer Experience Enhancement
                  </h6>
                  <p className="text-sm hover:text-white">
                    Develop mobile banking applications and online platforms
                    with intuitive user interfaces for seamless customer
                    interactions.
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-6 sm:px-16">
              <div className="flex flex-col max-w-md sm:flex-row">
                <div className="hover:bg-violet-950 hover:text-white p-2 hover:cursor-pointer">
                  <h6 className="mb-3 text-xl font-bold leading-5">
                    Robotic Process Automation (RPA)
                  </h6>
                  <p className="text-sm hover:text-white">
                    Streamline back-office operations and reduce operational
                    costs by deploying bots for data entry, validation, and
                    reconciliation tasks.
                  </p>
                </div>
              </div>
              <div className="flex flex-col max-w-md sm:flex-row">
                <div className="hover:bg-violet-950 hover:text-white p-2 hover:cursor-pointer">
                  <h6 className="mb-3 text-xl font-bold leading-5">
                    Custom Software Development
                  </h6>
                  <p className="text-sm hover:text-white">
                    Build custom investment management platforms for portfolio
                    analysis, risk assessment, and performance tracking.
                  </p>
                </div>
              </div>
              <div className="flex flex-col max-w-md sm:flex-row">
                <div className="hover:bg-violet-950 hover:text-white p-2 hover:cursor-pointer">
                  <h6 className="mb-3 text-xl font-bold leading-5">
                    Blockchain Technology
                  </h6>
                  <p className="text-sm hover:text-white">
                    Implement blockchain technology for enhancing the security
                    and efficiency of cross-border payments and remittances.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Last Section */}
      <section className="max-w-full pt-4 pb-8 px-10 flex justify-center">
        <div className="bg-violet-950 text-white md:w-[70%] flex flex-col  justify-between py-4 px-8">
          <div>
            <h2 className="font-bold text-xl py-2 text-center">
              Discover what we can do for you.
            </h2>
            <p className="py-3 text-lg text-center">
              Contact us today to discuss how we can help you to achieve your
              business goals.
            </p>
          </div>
          <div className="flex items-center justify-center">
            <Button />
          </div>
        </div>
      </section>
    </>
  );
};

export default Sections;