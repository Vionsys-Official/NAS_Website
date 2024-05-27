import React from 'react'
import Button from '@/components/ui/Button';

const sectionlast = () => {
  return (
    <section className='max-w-full pt-4 pb-8 px-10 flex justify-center'>
       <div className='bg-violet-950 text-white md:w-[90%] flex flex-col md:flex-row justify-between py-4 px-8'>
          <div>
            <h2 className='font-bold text-xl py-2'>
            Discover what we can do for you.
            </h2>
            <p className='py-3 text-lg'>
            Contact us today to discuss how we can help you to achieve your business goals.
            </p>
          </div>
          <div className='flex items-center justify-center'>
          <Button/>
          </div>
       </div>
    </section>
  )
}
export default sectionlast;