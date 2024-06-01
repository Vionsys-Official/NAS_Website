import React from 'react'
import Culture from '@/app/ui/career/Culture'
import ApplyCard from '@/app/ui/career/ApplyCard'
import LifeATNAS from '@/app/ui/career/LifeATNAS'
import HeroSection from '@/utils/heroSection/HeroSection'
import {careerData} from '@/utils/heroSection/data';
import CTA from '@/app/ui/career/CTA'
import CTASection from '@/app/ui/career/CTA'

export const metadata = {
  title: "Careers",
};

function page() {
  return (
    <div id="mission" className='overflow-hidden'>
      <HeroSection obj={careerData}/>
        <CTASection/>
      <Culture/>
      <LifeATNAS/>
      <ApplyCard />
    </div>
  )
}

export default page