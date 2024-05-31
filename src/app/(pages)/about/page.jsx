import React from 'react'
import Mission from '@/app/ui/about/mission'
import Value from '@/app/ui/about/value'
import Vision from '@/app/ui/about/vision'
import HeroSection from '@/utils/heroSection/HeroSection'
import { aboutData } from '@/utils/heroSection/data'
import Sectiontwo from '@/app/ui/about/sectiontwo'
import  Sectionlast  from '@/app/ui/about/sectionlast'
import Sectionthree from '@/app/ui/about/sectionthree'

export const metadata = {
  title: "About Us",
};

function page() {
  return (
    <main id='mission'>

    <HeroSection obj={aboutData}/>

    <Sectiontwo/>

    <Sectionthree/>
     
    <section id='Knowmore'>
       <Vision/>
       <Mission/>
       <Value/>
    </section>

    <Sectionlast/>

    </main>
  )
}

export default page;