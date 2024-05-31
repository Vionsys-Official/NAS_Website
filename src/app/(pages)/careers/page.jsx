import React from 'react'
import Culture from '@/app/ui/career/Culture'
import ApplyCard from '@/app/ui/career/ApplyCard'
import LifeATNAS from '@/app/ui/career/LifeATNAS'
import HeroSection from '@/utils/heroSection/HeroSection'
import {careerData} from '@/utils/heroSection/data';
import CTA from '@/app/ui/career/CTA'

function page() {
  return (
    <div id="mission" className='overflow-hidden'>
      <HeroSection obj={careerData}/>
      <CTA/>
      <Culture/>
      <LifeATNAS/>
      <ApplyCard/>
    </div>
  )
}

export default page