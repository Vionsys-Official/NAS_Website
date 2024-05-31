import SectionOne from '@/app/ui/industries/professionalService/sectionOne';
import SectionTwo from '@/app/ui/industries/professionalService/sectionTwo';
import React from 'react'

export const metadata = {
  title: "Professional Services",
};

const page = () => {
  return (
    <main id='mission' className='overflow-x-hidden'>

      <SectionOne/>
      
      <SectionTwo/>
      
    </main>
  )
}

export default page;