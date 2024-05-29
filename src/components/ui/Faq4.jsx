import React from 'react'

const Faq4 = ({obj}) => {

  return (
    <div className='flex items-center justify-center'>
        <div className="w-[96%] md:w-[70%] my-6 sm:mt-14 flex flex-col items-center justify-center">
        <h2 className="mb-6 font-sans text-MainHeading-sm md:text-MainHeading md:p-6 font-semibold leading-none tracking-tight text-gray-900 cursor-pointer">
            <span className="relative inline-block">
                <svg
                viewBox="0 0 52 24"
                fill="currentColor"
                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-50 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                >
                <defs>
                    <pattern
                    id="fdca20a0-aeb4-4caf-ba1b-4351eee42363"
                    x="0"
                    y="0"
                    width=".135"
                    height=".30"
                    >
                    <circle cx="1" cy="1" r=".7" />
                    </pattern>
                </defs>
                <rect
                    fill="url(#fdca20a0-aeb4-4caf-ba1b-4351eee42363)"
                    width="52"
                    height="24"
                />
                </svg>
                <span className="relative">FAQ's </span>
            </span>{' '}
            </h2>
            <div className="flex flex-col gap-2 md:gap-4">
                {obj.map((feat)=>{
                    return(
                        <div key={feat.id} className='hover:bg-green-100 rounded-xl'>
                        <details className=" group px-2 md:px-6 rounded-xl border-y border-blue-400" close>
                            <summary
                                className="flex cursor-pointer list-none items-center justify-between py-2 text-Para-sm md:text-Para font-semibold">
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