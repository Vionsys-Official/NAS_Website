import React from 'react'
import SectionOne from '@/app/ui/services/digitalMarketing/sectionOne'
import SectionTwo from '@/app/ui/services/digitalMarketing/sectionTwo';
import SectionThree from '@/app/ui/services/digitalMarketing/sectionThree';
import DigitalFaq from '@/app/ui/services/digitalMarketing/faqs';
import Sectionlast from '@/app/ui/about/sectionlast';

export const metadata = {
  title: "Digital Marketing Services",
};


const page = () => {
  return (
    <main>
    
    <SectionOne/>

    <SectionTwo/> 

    <SectionThree/>

    <DigitalFaq/>

    <Sectionlast/>
    
    </main>
  )
}

export default page