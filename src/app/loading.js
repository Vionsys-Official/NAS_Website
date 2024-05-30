import React from 'react'

const loading = () => {
  return (
    <div className='bg-white w-[100vw] h-[100vh]'>
        <div className="flex justify-center items-center w-18 h-18 border-4 border-dashed rounded-full animate-spin dark:border-violet-950"></div>
    </div>
  )
}

export default loading