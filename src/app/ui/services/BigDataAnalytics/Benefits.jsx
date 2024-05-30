import React from "react";

import DataScience from "/public/assets/services/BigDataAnalytics/data_science.png";
const Benefits = () => {
  return (
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
  );
};

export default Benefits;
