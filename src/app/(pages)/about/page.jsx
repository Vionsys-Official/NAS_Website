import React from 'react'
import Mission from '@/app/ui/about/mission'
import Value from '@/app/ui/about/value'
import Vision from '@/app/ui/about/vision'
import Sectiontwo from '@/app/ui/about/sectiontwo'
import  Sectionlast  from '@/app/ui/about/sectionlast'
import Sectionthree from '@/app/ui/about/sectionthree'
import HeroSection from '@/app/ui/about/heroSection'

export const metadata = {
  title: "About Us",
};

function page() {
  return (
    <main className='overflow-x-hidden'>

    <HeroSection/>

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