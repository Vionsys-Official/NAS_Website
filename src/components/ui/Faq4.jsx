import React from 'react'

const Faq4 = ({obj}) => {

  return (
    <div className='flex items-center justify-center'>
        <div className="w-[96%] md:w-[70%] my-6 md:my-14 flex flex-col items-center justify-center">
            <h1 className='text-SubHeading-sm md:text-SubHeading pb-4 font-semibold cursor-pointer'>Frequently Asked Questions</h1>
            <div className="flex flex-col gap-2 md:gap-4">
                {obj.map((feat)=>{
                    return(
                        <div key={feat.id} className='hover:bg-green-100 rounded-xl'>
                        <details className=" group px-2 md:px-6 rounded-xl border-y border-blue-400" close>
                            <summary
                                className="flex cursor-pointer list-none items-center justify-between py-2 text-SubHeading-sm md:text-SubHeading font-medium text-secondary-900 group-open:text-primary-500">
                                {feat.question}
                                <div className='hover:font-bold hover:scale-110'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                        stroke="currentColor" class="block h-5 w-5 group-open:hidden">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                        stroke="currentColor" class="hidden h-5 w-5 group-open:block">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15" />
                                    </svg>
                                </div>
                            </summary>
                            <div className="pb-4 text-Para-sm md:text-Para">{feat.ans}</div>
                        </details>
                        </div>
                    );
                })}
                
            </div>
        </div>
    </div>
  );
};

export default Faq4;