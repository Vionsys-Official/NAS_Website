import Faq4 from '@/components/ui/Faq4'
import React from 'react'


const digitalFaq = () => {
    const faq = [
        {
            id: 1,
            question: "How can digital marketing benefit my business?",
            ans: "Digital marketing can increase brand visibility, drive website traffic, generate leads, and ultimately boost sales and revenue."
        },
        {
            id: 2,
            question: "Why choose NAS Infotech for digital marketing?",
            ans: "We offer tailored strategies, experienced professionals, and a focus on delivering measurable results to help your business succeed online."
        },
        {
            id: 3,
            question: "How do you measure the success of digital marketing campaigns?",
            ans: "We use key performance indicators (KPIs) such as website traffic, conversion rates, engagement metrics, and return on investment (ROI) to measure success."
        },
        {
            id: 4,
            question: "Can you help with social media management?",
            ans: "Yes, our social media marketing services include content creation, account management, and audience engagement to enhance your social media presence."
        }
    ]
  return (
    <div className='backdrop-blur'>
        <Faq4 obj={faq} />
    </div>
  )
}

export default digitalFaq;