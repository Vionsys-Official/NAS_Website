import React from 'react'
import HeaderSection from '@/app/ui/career/HeaderSection'
import Culture from '@/app/ui/career/Culture'
import Benifits from '@/app/ui/career/Benifits'
import ApplyCard from '@/app/ui/career/ApplyCard'
import LifeATNAS from '@/app/ui/career/LifeATNAS'
import HeroSection from '@/app/ui/herosection/HeroSection'
import {careerData} from '@/app/ui/herosection/data/data';

function page() {
  console.log(careerData)
  return (
    <div>
      <HeroSection obj={careerData}/>
      <HeaderSection/>
      <Culture/>
      <Benifits/>
      <LifeATNAS/>
      <ApplyCard/>
    </div>
  )
}

export default page