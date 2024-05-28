import React from 'react'
import Faq4 from '@/components/ui/Faq4';

const faq = () => {

    const faq=[
        {
            id:1,
            question:"How long does it take to design and develop a website?",
            ans:"The timeline for website design and development varies depending on the complexity and scope of the project. Typically, it can range from a few weeks to several months. Factors such as the number of pages, features, and revisions needed can impact the timeline.",
        },
        {
            id:2,
            question:"Can you update or redesign an existing website?",
            ans:"Absolutely! Whether you need minor updates or a complete redesign, we can help breathe new life into your existing website. Our team will work closely with you to understand your goals and make the necessary improvements.",
        },
        {
            id:3,
            question:"Do you offer SEO services to improve website visibility?",
            ans:"Yes, we provide comprehensive SEO services to enhance your website's visibility on search engines like Google. Our strategies include keyword research, on-page optimization, content creation, link building, and performance tracking.",
        },
        {
            id:4,
            question:"What type of support do you offer after the website is launched?",
            ans:"We offer ongoing support and maintenance services to ensure your website remains functional and up-to-date. This includes regular updates, security patches, backups, and technical assistance whenever you need it.",
        },
        {
            id:5,
            question:"Is the website design responsive and mobile-friendly?",
            ans:"Yes, all our website designs are responsive and optimized for mobile devices. We ensure that your website looks and performs seamlessly across all screen sizes and devices, providing an optimal user experience for your visitors.",
        },
        {
            id:6,
            question:"Can you integrate third-party tools or services into the website?",
            ans:"Yes, we can integrate various third-party tools and services to enhance your website's functionality. Whether it's integrating payment gateways, CRM systems, or analytics tools, we can customize your website to meet your specific needs.",
        },
    ]

  return (
    <div>
        <Faq4 obj={faq} />
    </div>
  );
};

export default faq;