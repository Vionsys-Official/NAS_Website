import React from 'react'
import Intro from '@/app/ui/services/webDevelopment/Intro'
import Services from '@/app/ui/services/webDevelopment/Services'
import Whychooseus from '@/app/ui/services/webDevelopment/Whychooseus'
import Process from '@/app/ui/services/webDevelopment/process'
import Faq from '@/app/ui/services/webDevelopment/faq'

const page = () => {
  return (
    <div id='mission' className='overflow-hidden'>
        <Intro/>
        <Services/>
        <Whychooseus/>
        <Process/>
        <Faq/>
    </div>
  )
}

export default page