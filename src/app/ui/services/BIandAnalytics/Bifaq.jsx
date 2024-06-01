import React from 'react'
import Faq4 from '@/components/ui/Faq4';

const Bifaq = () => {

    const Bifaq=[
        {
            id:1,
            question:" Who can benefit from your BI program?",
            ans:"Our Business Intelligence (BI) program is a comprehensive suite of tools and services designed to help businesses collect, analyze and leverage data for informed decision-making. It includes data warehousing, reporting, analytics, dashboards and data visualization solutions.",
        },
        {
            id:2,
            question:"Who can benefit from your BI program?",
            ans:"Our BI program is ideal for businesses of all sizes and industries looking to enhance their data analysis capabilities. It benefits executives, managers, data analysts and any team that relies on data to drive strategic and operational decisions.",
        },
        {
            id:3,
            question:"What sets our BI program apart from others?",
            ans:"Our BI program stands out due to its ease of use, flexibility and powerful analytical capabilities. We offer personalized support, seamless integration with existing systems and a commitment to continuous improvement based on client feedback.",
        },
        {
            id:4,
            question:"What kind of support and training do you offer for the BI program?",
            ans:"We offer comprehensive support and training, including onboarding sessions, user manuals, webinars and ongoing technical support. Our dedicated team is always available to assist you with any questions or issues.",
        },
        {
            id:5,
            question:"How can I get started with your BI program?",
            ans:"Getting started is easy! Simply contact our sales team to schedule a demo or consultation. We’ll discuss your specific needs, provide a detailed overview of our BI program and outline the next steps to get you up and running quickly.",
        },
        {
            id:6,
            question:"What are the pricing options for your BI program?",
            ans:"We offer flexible pricing plans to suit different business sizes and needs. Contact our sales team to get a personalized quote based on your specific requirements and the scope of your BI implementation.",
        },
    ]

  return (
    <div className=''>
        <Faq4 obj={Bifaq} />
    </div>
  );
};

export default Bifaq;