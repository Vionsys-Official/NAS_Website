import React from 'react'
import Button from '@/components/ui/Button';

const sectionlast = () => {
  return (
    <section className='max-w-full pt-4 pb-8 px-10 flex justify-center'>
       <div className='bg-blue950 text-white md:w-[90%] flex flex-col md:flex-row justify-between py-4 px-8'>
          <div>
            <h2 className='font-bold text-xl py-2'>
            Explore how our expertise can benefit you.
            </h2>
            <p className='py-3 text-lg'>
            Reach out to us today to discuss how we can support you in achieving your business objectives.
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