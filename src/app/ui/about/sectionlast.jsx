import React from 'react'
import Button from '@/components/ui/Button';

const sectionlast = () => {
  return (
    <section className='max-w-full pt-4 pb-8 md:px-10 px-2 flex justify-center'>
      <div className='bg-gray-300 w-[90%] flex flex-col md:flex-row justify-between py-4 md:px-8 px-3'>
        <div>
          <h2 className='font-bold text-blue2 text-xl py-2'>
            Explore how our expertise can benefit you.
          </h2>
          <p className='py-3 md:text-lg text-Para-sm text-slate-600 font-semibold'>
            Reach out to us today to discuss how we can support you in achieving your business objectives.
          </p>
        </div>
        <div className='flex items-center justify-center'>
          <Button />
        </div>
      </div>
    </section>
  )
}
export default sectionlast;