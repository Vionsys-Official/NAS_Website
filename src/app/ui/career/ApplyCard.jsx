import React from 'react'
import Model from '@/app/ui/career/model';
import { CardData } from '@/utils/CardData';
import { PiDotOutlineBold } from "react-icons/pi";
import { GoDotFill } from "react-icons/go";

const ApplyCard = () => {
  
  return (
    <div id="card" className='py-4 md:py-10'>
      <div className='pl-24 flex flex-col items-center justify-center'>
        <div>
          <h2 className='text-center text-MainHeading-sm md:text-MainHeading font-semibold py-2 md:py-6 cursor-pointer'>Job Opportunities For You</h2>
        </div>
        <div className='w-[90%] md:w-[84%] grid grid-col-1 md:grid-cols-2 xl:grid-cols-3 items-center justify-center gap-2 md:gap-6'>
          {CardData.map((feat)=>{
            return(
              <div key={feat.id} className='p-6 shadow-lg shadow-gray-400 border border-gray-100 rounded-md hover:border-2 hover:border-gray-300 cursor-pointer transition-all hover:scale-[101%] ease-out'>
                <h2 className='text-gray-800 text-CardHeading-sm md:text-CardHeading font-extrabold md:py-2 h-[3rem] xl:h-full'>{feat?.title}</h2>
                <div className='flex flex-col items-center justify-center text-start gap-2 h-full md:h-[35rem] lg:h-[25rem] xl:h-[30rem]'>
                  <p className='w-full text-Para-sm md:text-Para font-light'>
                    <span className='font-bold flex flex-row'><span className='px-1'><GoDotFill/></span>Roles and Responsibilities: </span>
                    {feat?.responsibility.map((item)=>{
                      return(
                        <div key={item?.id} className='flex flex-row'><span className='px-1'><PiDotOutlineBold/></span>{item?.desc}</div>
                      );
                    })}
                  </p>
                  <div className='w-full text-Para-sm md:text-Para font-light'><span className='font-bold flex flex-row'><span className='px-1'><GoDotFill/></span>Skills Required: </span>{feat?.Skillsrequired}</div>
                  <div className='w-full text-Para-sm md:text-Para font-light'><span className='font-bold flex flex-row'><span className='px-1'><GoDotFill/></span>Experience: </span>{feat?.Experience}</div>
                  <div className='w-full text-Para-sm md:text-Para font-light'><span className='font-bold flex flex-row'><span className='px-1'><GoDotFill/></span>Education: </span>{feat?.Education}</div>
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