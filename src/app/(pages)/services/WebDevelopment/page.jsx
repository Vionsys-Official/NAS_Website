import React from 'react'
import Intro from '@/app/ui/services/webDevelopment/Intro'
import Services from '@/app/ui/services/webDevelopment/Services'
import Whychooseus from '@/app/ui/services/webDevelopment/Whychooseus'
import Faq from '@/app/ui/services/webDevelopment/faq'
import Cta from '@/app/ui/services/webDevelopment/cta'
import Process from '@/app/ui/services/webDevelopment/Process'

export const metadata = {
  title: "Web Development Services",
};


const page = () => {
  return (
    <div id='mission' className='overflow-hidden font-light'>
        <Intro/>
        <Services/>
        <Whychooseus/>
        <Process/>
        <Faq/>
        <Cta/>
    </div>
  )
}

export default page