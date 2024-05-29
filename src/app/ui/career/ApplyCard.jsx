import React from 'react'
import Model from '@/app/ui/career/model';
import { CardData } from '@/utils/CardData';
import { PiDotOutlineBold } from "react-icons/pi";
import { TbPointFilled } from "react-icons/tb";

const ApplyCard = () => {
  
  return (
    <div id="card" className='py-4 md:py-10'>
      <div className=' flex flex-col items-center justify-center'>
        <div className='flex items-start justify-start'>
          <h2 className='text-MainHeading-sm md:text-MainHeading font-semibold py-2 md:py-6 cursor-pointer  font-sans'>Job Opportunities For You</h2>
        </div>
        <div className='w-[90%] md:w-[86%] grid grid-col-1 md:grid-cols-2 xl:grid-cols-3 items-center justify-center gap-2 md:gap-6'>
          {CardData.map((feat)=>{
            return(
              <div key={feat.id} className='overflow-hidden shadow-lg shadow-gray-400 bg-slate-50 group border border-gray-100 rounded-xl hover:border-2 hover:border-gray-300 cursor-pointer transition-all hover:scale-[101%] ease-out'>
                <h2 className='flex justify-center items-center text-gray-800 rounded-xl border-2 border-b-blue-500 text-CardHeading-sm md:text-CardHeading font-extrabold md:py-2 h-[3rem] xl:h-full text-center group-hover:scale-105 ease-linear'>{feat?.title}</h2>
                <div className='p-2 flex flex-col items-center justify-center text-start gap-2 h-full md:h-[24rem] lg:h-[21rem] xl:h-[24rem] font-light'>
                  <div className='w-full text-Para-sm md:text-Para font-light'>
                    <span className='font-bold flex flex-row pl-2'>Roles and Responsibilities: </span>
                    {feat?.responsibility.map((item)=>{
                      return(
                        <div key={item?.id} className='flex flex-row'><span className='px-1'><PiDotOutlineBold/></span>{item?.desc}</div>
                      );
                    })}
                  </div>
                  <div className='w-full text-Para-sm md:text-Para font-light pl-2'>
                    <span className='font-bold'>Skills Required: </span>
                    {feat?.Skillsrequired}
                  </div>
                  <div className='w-full text-Para-sm md:text-Para font-light pl-2'>
                    <span className='font-bold'>Experience: </span>
                    {feat?.Experience}
                  </div>
                  <div className='w-full text-Para-sm md:text-Para font-light pl-2'>
                    <span className='font-bold'>Education: </span>
                    {feat?.Education}
                  </div>
                </div>
                <div className='flex items-center justify-center mt-2'>
                  <Model/>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ApplyCard;