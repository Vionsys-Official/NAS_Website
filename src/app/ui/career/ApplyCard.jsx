"use client";

import React, { useState } from "react";
import { CardData } from "@/utils/CardData";
import { PiDotOutlineBold } from "react-icons/pi";
import { motion } from "framer-motion";
import { fadein } from "@/components/ui/variants";
import JobModal from "@/app/ui/career/model";

const ApplyCard = () => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  return (
    <div id="card" className="py-4 md:py-10 overflow-hidden">
      <div className="flex flex-col items-center justify-center">
        <div className="flex items-start justify-start">
          <motion.h2
            variants={fadein("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.8 }}
            className="text-blue-900 text-MainHeading-sm md:text-MainHeading font-semibold py-2 md:py-6 cursor-pointer font-sans px-6 text-center"
          >
            Job Opportunities For You
          </motion.h2>
        </div>
        <div className="w-[90%] md:w-[86%] grid grid-col-1 md:grid-cols-2 xl:grid-cols-3 items-center gap-2 md:gap-6">
          {CardData.map((feat) => {
            return (
              <motion.div
                variants={fadein("down2", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: true, amount: 0.8 }}
                key={feat.id}
                className="bg-opacity-70 overflow-hidden flex flex-col items-center shadow-lg shadow-gray-400 bg-slate-50 hover:bg-slate-100 group border border-gray-800 rounded-xl cursor-pointer py-2"
              >
                <h2 className="flex items-center text-blue950 hover:text-blue2  rounded-xl tracking-wide text-CardHeading-sm md:text-CardHeading font-extrabold md:py-2 h-[3rem] xl:h-full text-center group-hover:scale-105 ease-linear">
                  {feat?.title}
                </h2>
                <div className="p-2 flex flex-col justify-center items-center text-start gap-2 h-full md:h-[24rem] lg:h-[19rem] xl:h-[23rem] font-light">
                  <div className="w-full h-full text-Para-sm md:text-Para font-light flex flex-col">
                    <span className="font-bold flex flex-row pl-2 text-blue-950">
                      Roles and Responsibilities:{" "}
                    </span>
                    {feat?.responsibility.map((item) => {
                      return (
                        <div key={item?.id} className="flex flex-row">
                          <span className="px-1">
                            <PiDotOutlineBold />
                          </span>
                          {item?.desc}
                        </div>
                      );
                    })}
                  </div>
                  <div className="w-full text-Para-sm md:text-Para font-light pl-2">
                    <span className="font-bold text-blue-950">
                      Skills Required:{" "}
                    </span>
                    {feat?.Skillsrequired}
                  </div>
                  <div className="w-full text-Para-sm md:text-Para font-light pl-2">
                    <span className="font-bold text-blue-950">
                      Experience:{" "}
                    </span>
                    {feat?.Experience}
                  </div>
                  <div className="w-full text-Para-sm md:text-Para font-light pl-2">
                    <span className="font-bold text-blue-950">Education: </span>
                    {feat?.Education}
                  </div>
                  <div>
                    <button
                      onClick={handleShowModal}
                      className="relative w-[10rem] px-4 py-1 text-white rounded-xl bg-blue950 isolation-auto z-10 border-2 border-gray-400 font-medium
                      before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-right-full before:hover:right-0 before:rounded-full before:bg-blue2 before:text-white before:-z-10 before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700"
                    >
                      Apply
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
      <div className="flex items-center justify-center mt-2">
        <JobModal isModalOpen={showModal} setisModalOpen={setShowModal} />
      </div>
    </div>
  );
};

export default ApplyCard;
