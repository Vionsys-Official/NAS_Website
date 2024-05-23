import React from 'react'
import Culture from '@/app/ui/career/Culture'
import ApplyCard from '@/app/ui/career/ApplyCard'
import LifeATNAS from '@/app/ui/career/LifeATNAS'
import HeroSection from '@/utils/heroSection/HeroSection'
import {careerData} from '@/utils/heroSection/data';

function page() {
  return (
    <div>
      <HeroSection obj={careerData}/>
      <Culture/>
      <LifeATNAS/>
      <ApplyCard/>
    </div>
  )
}

export default page