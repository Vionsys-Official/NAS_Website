import React from 'react'
import Button from '@/components/ui/Button';

const sectionlast = () => {
  return (
    <section className='max-w-full pt-4 pb-8 px-10 flex justify-center'>
       <div className='bg-violet-950 text-white w-[90%] flex flex-col md:flex-row justify-between py-4 px-8'>
          <div>
            <h2 className='font-bold text-xl py-2'>
              Discover IT consulting service solutions for your business
            </h2>
            <p className='py-3 text-lg'>
              Achieve digital transformation with Tietoevry IT consulting service offerings
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