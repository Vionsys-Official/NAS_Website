import React from 'react'
import Hero from '@/app/ui/industries/ECommerce/Hero';
import Service from '@/app/ui/industries/ECommerce/Service';
import Whychooseus from '@/app/ui/industries/ECommerce/Whychooseus';
import Cta from '@/app/ui/industries/ECommerce/cta';

export const metadata = {
  title: "ECommerce",
};

const page = () => {
  return (
    <div id="mission" className='overflow-hidden font-light'>
        <Hero/>
        <Service/>
        <Whychooseus/>
        <Cta/>
    </div>
  )
}

export default page