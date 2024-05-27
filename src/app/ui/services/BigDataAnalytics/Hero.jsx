import React from "react";
import BigData from "/public/assets/services/BigDataAnalytics/bigdata.jpg";
import DataScience from "/public/assets/services/BigDataAnalytics/data_science.png";
import Image from "next/image";
import Competitive from "/public/assets/services/BigdataAnalytics/competitive.png";
import Risk from "/public/assets/services/BigDataAnalytics/risk.png";
import BestWay from "/public/assets/services/BigDataAnalytics/BestWay.png";
import { FaArrowDownLong } from "react-icons/fa6";
import { FaDiamond } from "react-icons/fa6";
import { GoDotFill } from "react-icons/go";
import { FaTriangleExclamation } from "react-icons/fa6";
import { CiDollar } from "react-icons/ci";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { FaCheckCircle } from "react-icons/fa";
import WhyUs from "/public/assets/services/BigDataAnalytics/Why_us.png";
function Cards() {
  const sections = [
    {
      id: 1,
      number: "01",
      title: "Brainstorming and Prioritizing Data Sources :",
      description:
        "We proudly analyze your pain points and goals in order to define which data should be collected for you to make well-informed business decisions.",
    },
    {
      id: 2,
      number: "02",
      title: "Choosing Data Models and Setting Up Analytics:",
      description:
        "For each specific case, we choose the most fitting analytical approaches that help us derive meaningful insights from the data collected.",
    },
  ];
  return (
    <section className="bg-white w-full">
      <div className="flex md:flex-row w-full pt-8">
        {/* section1 */}
        <div className="w-[50%] flex flex-col gap-6 pt-40 px-6 ">
          <h1 className="md:text-5xl text-xl font-extrabold text-slate-800">
            Big Data & Analytics Development Services
          </h1>
          <p className="md:text-lg  text-sm">
            We offer comprehensive big data consulting services designed to
            transform vast amounts of scattered information into structured,
            actionable data. Our expertise helps you develop products and
            services that leverage this data, enabling you to make informed
            decisions and enhance user experiences effectively. With our
            consulting services, you can ensure your data-driven initiatives are
            both impactful and efficient.
          </p>
        </div>
        <div className="w-1/2 py-10  flex opacity-95">
          <Image src={BigData} alt="" className="w-full  " />
        </div>
      </div>

      {/* section2 */}
      <div className="w-full flex flex-col py-6">
        <div className="flex flex-col w-full text-center justify-center py-4">
          <h1 className="text-4xl font-extrabold ">What Do We Do?</h1>
        </div>
        <div className=" flex text-center justify-center ">
          <div className="flex flex-col gap-4 text-center justify-center w-2/3">
            <p className="text-2xl font-bold text-yellow-400  ">
              In today’s digital world, data is rapidly growing. Big Data
              Analytics is changing business practices and technology, which in
              turn impacts the way companies do business.
            </p>
            <p className="text-lg text-slate-700">
              We help you establish a strategy and define the right technologies
              according to your requirements and budget. Our experienced
              analytics ensure that your technology fits with your investments
              in data warehouse and BI.
            </p>
          </div>
          <div></div>
        </div>
        <div className="flex justify-center items-center py-16">
          <div className="w-24 h-24 rounded-full bg-yellow-300 flex items-center justify-center">
            <FaArrowDownLong className="h-20 w-6" />
          </div>
        </div>
        <div className="w-full">
          <div className="px-6 flex ">
            <div className="w-1/3">
              <h1 className="text-3xl font-semibold text-start text-slate-800 pt-4">
                When collaborating with companies, we utilize best practices to
                effectively organize and consolidate scattered data:
              </h1>
            </div>
            <div className="flex flex-col py-6 ">
              <div className="flex flex-row-3 ">
                <div className="flex flex-row-2 gap-3 w-[40%]">
                  <h1 className="">
                    <FaDiamond className="w-6 h-6 pt-2 text-yellow-400" />
                  </h1>
                  <p className="text-xl">
                    Data mining, analytics and modelling
                  </p>
                </div>
                <div className="flex flex-row-2 gap-3 w-[30%]">
                  <h1 className="">
                    <FaDiamond className="w-6 h-6 pt-2 text-yellow-400" />
                  </h1>
                  <p className="text-xl">
                    Distributed , relational and analytical database development
                  </p>
                </div>
                <div className="flex flex-row-2 gap-3">
                  <h1 className="">
                    <FaDiamond className="w-6 h-6 pt-2 text-yellow-400" />
                  </h1>
                  <p className="text-xl">
                    Work scheduling , reporting and dashboard development
                  </p>
                </div>
              </div>
              <div className="flex flex-row-2 py-6">
                <div className="flex flex-row-2 gap-3 w-[35%]">
                  <h1 className="">
                    <FaDiamond className="w-6 h-6 pt-2 text-yellow-400" />
                  </h1>
                  <p className="text-xl">
                    Data warehouse and ETL/data management
                  </p>
                </div>
                <div className="flex flex-row-2 gap-3 w-[30%]">
                  <h1 className="">
                    <FaDiamond className="w-6 h-6 pt-2 text-yellow-400" />
                  </h1>
                  <p className="text-xl">
                    Stream processing and search indexing
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* section3 */}
      <div className="w-full flex flex-col  justify-center items-center gap-10 pb-10 ">
        <h1 className=" text-4xl font-extrabold  ">
          Big Data Engineering and Data Science Services
        </h1>
        <p className="text-lg w-[50%] font-semibold text-slate-500">
          Big Data helps to collect and maintain a huge volume of information ,
          while Data Science allows to further analyze and extract the data ,
          dependencies also provides insights into this information
        </p>
      </div>

      {/* section4 */}
      <div className="w-full flex flex-row-2">
        <div className="w-[50%] h-[50%]">
          <Image src={DataScience} alt="" className="w-full h-[80%]" />
        </div>
        <div className="w-[50%]">
          <div className="w-2/3 pl-10 pt-10">
            <div className="pl-6">
              <h1 className="text-3xl text-blue-500 ">
                Who benefits from implementing Big Data?
              </h1>
            </div>
            <div className="w-full pl-6 flex flex-col gap-4 py-6">
              <div className="flex flex-row gap-2">
                <h1 className="pt-1">
                  <GoDotFill className="w-4 h-4" />
                </h1>
                <p className="text-base  text-slate-700">
                  Companies that strive to broaden their customer’s list , thus,
                  so they can produce precisely targeted products.
                </p>
              </div>
              <div className="flex flex-row gap-2">
                <h1 className="pt-1">
                  <GoDotFill className="w-4 h-4" />
                </h1>
                <p className="text-base  text-slate-700">
                  Healthcare and financial companies that require solutions to
                  prevent potential business risks, thoroughly analyze the
                  behavior of their customers and investigate their operational
                  activities.
                </p>
              </div>
              <div className="flex flex-row gap-2">
                <h1 className="pt-1">
                  <GoDotFill className="w-4 h-4" />
                </h1>
                <p className="text-base  text-slate-700">
                  Business that need to update their existed data-driven
                  solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* section5 */}
      <div className="w-full py-5 ">
        <div className="w-full px-36 flex flex-col items-start gap-8">
          <div className="w-full flex flex-col gap-8">
            <h1 className="text-4xl w-full font-semibold ">
              What will you gain?
            </h1>
          </div>
          <div className="w-[60%] ">
            <h2 className="text-xl">
              Implementing Big Data analytics within your organization offers
              numerous benefits that enable you to enhance services and achieve
              your business objectives.{" "}
            </h2>
          </div>
          <div className="w-full flex flex-col gap-8">
            <div className="flex">
              <div className="w-[50%] flex flex-col">
                <div className="w-[90%] flex gap-2">
                  <Image src={Competitive} alt="" className="w-7 h-7 " />
                  <h1 className="text-lg font-bold ">Competitive Advantage</h1>
                </div>
                <div className="w-[70%]">
                  <p className="text-base pl-2">
                    Get ahead with an with a custom app built around your
                    company’s needs and special challenges. Today around 80% of
                    generated information is unstructured and can’t be analyzed
                    by the traditional technologies.
                  </p>
                </div>
              </div>
              <div className="w-[50%] flex flex-col">
                <div className="w-[90%] flex gap-2">
                  <CiDollar className="w-7 h-7 text-black" />
                  <h1 className="text-lg font-bold ">
                    Optimization of business expenditure{" "}
                  </h1>
                </div>
                <div className="w-[70%]">
                  <p className="text-base pl-2">
                    Analysis of your operational data allows you to optimize
                    business expenditure and use your budget effectively.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex">
              <div className="w-[50%] flex flex-col">
                <div className="w-[90%] flex gap-2">
                  <Image src={Risk} alt="" className="w-6 h-6" />
                  <h1 className="text-lg font-bold ">
                    Reducing risks caused by wrong decisions{" "}
                  </h1>
                </div>
                <div className="w-[70%]">
                  <p className="text-base pl-2">
                    Data science helps decrease the surplus of information,
                    while Big Data analysis lets you have structured data, which
                    reduces risks caused by human error.
                  </p>
                </div>
              </div>
              <div className="w-[50%] flex flex-col">
                <div className="w-[90%] flex gap-2">
                  <Image src={BestWay} alt="" className="w-5 h-5" />
                  <h1 className="text-lg font-bold ">
                    The best way to handle large-scale information{" "}
                  </h1>
                </div>
                <div className="w-[70%]">
                  <p className="text-base pl-2">
                    Big Data is the best way to handle large-scale information,
                    especially if you have various types of data including
                    structured, semi-structured or scattered data.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* section6 */}

      <div className="w-full ">
        <div className="flex justify-center items-center px-10 py-10">
          <h1 className="text-4xl font-semibold text-blue-700">
            How we build a Big Data Strategy for your business:
          </h1>
        </div>
        <div className="relative grid gap-8 row-gap-5 mb-8 md:row-gap-8 lg:grid-cols-2 sm:grid-cols-1 py-4 px-40">
          <div className="absolute inset-0 flex items-center justify-center sm:hidden lg:flex">
            <div className="w-px lg:w-full lg:h-full" />
          </div>
          {sections.map((item) => (
            <div
              key={item.id}
              className="p-5 duration-300 transform bg-slate-50 border rounded-xl shadow-sm hover:-translate-y-2"
            >
              <div className="flex flex-col items-start  ">
                <p className="text-lg ">{item.number}</p>
                <p className="text-2xl font-semibold text-blue-600 py-4">
                  {item.title}
                </p>
              </div>
              <p className="text-lg text-gray-900">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* section7 */}
      <div className="w-full flex flex-row py-5">
        <div className="w-[50%]">
          <div className="px-7">
            <div className="py-10 flex flex-col  gap-9">
              <div className="w-full text-5xl font-semibold">Why Us?</div>
              <div className="pr-10 flex flex-col">
                <div className=" flex flex-row gap-4 ">
                  <div className="flex pt-1">
                    <FaCheckCircle className="w-7 h-7" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <h1 className=" text-2xl font-semibold">
                      Big Data Experts:
                    </h1>
                    <p className="text-lg">
                      Our experts profoundly analyze the peculiarities of your
                      business and create a Big Data integration strategy which
                      helps you meet your long-term goals. give alternative text
                      for this text
                    </p>
                  </div>
                </div>
                <div className=" flex flex-row gap-4 py-4 ">
                  <div className="flex pt-1">
                    <FaCheckCircle className="w-7 h-7" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <h1 className=" text-2xl font-semibold">
                      User-Friendly Delivery:
                    </h1>
                    <p className="text-lg">
                      Our UX/UI experts visualize and layout data in an
                      understandable and appealing way , so you can easily make
                      well-informed business decisions.
                    </p>
                  </div>
                </div>
                <div className=" flex flex-row gap-4 ">
                  <div className="flex pt-1">
                    <FaCheckCircle className="w-7 h-7" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <h1 className=" text-2xl font-semibold">
                      Constant Support:
                    </h1>
                    <p className="text-lg">
                      We are always here to offer additional guidance and advice
                      or discuss new priorities you want to focus on.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[50%]">
          <Image src={WhyUs} alt="" className="" />
        </div>
      </div>
    </section>
  );
}

export default Cards;
