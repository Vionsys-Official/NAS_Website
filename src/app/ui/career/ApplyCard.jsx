import React from 'react'
import Model from '@/app/ui/career/model';
import { CardData } from '@/utils/CardData';

const ApplyCard = () => {
  
  return (
    <div id="card" className='py-4 md:py-10'>
      <div className='flex flex-col items-center justify-center'>
        <div>
          <h2 className='text-center text-MainHeading-sm md:text-MainHeading font-semibold py-2 md:py-6 cursor-pointer'>Job Opportunities For You</h2>
        </div>
        <div className='w-[90%] grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center gap-2 md:gap-6'>
          {CardData.map((feat)=>{
            return(
              <div key={feat.id} className='p-6 shadow-lg shadow-gray-400 border border-gray-100 rounded-md hover:border-2 hover:border-gray-300 cursor-pointer transition-all hover:scale-[101%] eas'>
                <h2 className='text-gray-800 text-CardHeading-sm md:text-CardHeading font-extrabold md:py-2'>{feat?.title}</h2>
                <div className='flex flex-col items-center justify-center text-start gap-2 h-full md:h-[32rem] lg:h-[40rem] xl:h-[30rem]'>
                  <p className='w-full text-Para-sm md:text-Para font-light'><span className='font-bold '>Roles and Responsibilities: </span>{feat?.responsibility}</p>
                  <div className='w-full text-Para-sm md:text-Para font-light'><span className='font-bold '>Skills Required: </span>{feat?.Skillsrequired}</div>
                  <div className='w-full text-Para-sm md:text-Para font-light'><span className='font-bold '>Department: </span>{feat?.department}</div>
                  <div className='w-full text-Para-sm md:text-Para font-light'><span className='font-bold '>Experience: </span>{feat?.Experience}</div>
                  <div className='w-full text-Para-sm md:text-Para font-light'><span className='font-bold '>Education: </span>{feat?.Education}</div>
                  <div className='w-full text-Para-sm md:text-Para font-light'><span className='font-bold '>Location: </span>{feat?.location}</div>
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