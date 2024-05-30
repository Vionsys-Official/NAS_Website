import React from "react";
import { FaArrowDownLong } from "react-icons/fa6";
import { FaDiamond } from "react-icons/fa6";
const WhatWeDo = () => {
  return (
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
            according to your requirements and budget. Our experienced analytics
            ensure that your technology fits with your investments in data
            warehouse and BI.
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
                <p className="text-xl">Data mining, analytics and modelling</p>
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
                <p className="text-xl">Stream processing and search indexing</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
