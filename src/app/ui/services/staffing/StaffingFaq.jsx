import Faq from '@/components/ui/Faq'
import React from 'react'

const StaffingFaq = () => {

    const faq = [
        {
            id: 1,
            ques: "What types of IT positions do you staff?",
            ans: "We specialize in staffing a wide range of IT positions, including but not limited to software developers, network engineers, system administrators, cybersecurity experts, data analysts, project managers, and IT support specialists. Our goal is to match you with professionals who have the specific skills and experience your organization needs.",
        },
        {
            id: 2,
            ques: "How do you ensure the quality of candidates?",
            ans: "Our rigorous screening process includes multiple stages of evaluation. This involves initial resume screening, technical assessments, in-depth interviews, and reference checks. We also leverage our extensive industry expertise and network to identify top talent. This comprehensive approach ensures that we provide candidates who not only meet the technical requirements but also fit well with your company culture.",
        },
        {
            id: 3,
            ques: "What is the typical turnaround time for filling a position?",
            ans: "The turnaround time can vary based on the complexity of the role and the specific requirements of your organization. However, we strive to present qualified candidates within a few days to a couple of weeks from the time we receive your staffing request. Our efficient process and extensive talent pool enable us to respond quickly to your needs.",
        },
        {
            id: 4,
            ques: "Can you provide staff for short-term projects?",
            ans: "Yes, we offer flexible staffing solutions to meet the needs of short-term projects. Our temporary and project-based staffing services are ideal for businesses that require additional support during peak periods, for specific projects, or to cover for staff absences. We can provide skilled IT professionals who can hit the ground running and deliver results from day one.",
        },
        {
            id: 5,
            ques: "What are the costs associated with your IT staffing services?",
            ans: "The costs vary depending on the type of staffing solution you require (temporary, permanent, contract-to-hire) and the specifics of the position(s) you need to fill. We offer competitive and transparent pricing, and we will provide a detailed quote after discussing your requirements. Our goal is to offer value by connecting you with highly qualified candidates who can make a significant impact on your organization.",
        },
    ]
  return (
    <div><Faq faq={faq}/></div>
  )
}

export default StaffingFaq