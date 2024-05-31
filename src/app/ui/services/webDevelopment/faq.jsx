import React from 'react'
import Faq4 from '@/components/ui/Faq4';

const faq = () => {

    const faq=[
        {
            id:1,
            question:"How long does it take to design and develop a website?",
            ans:"The duration for website design and development depends on the project's complexity and scope. Generally, it can take anywhere from a few weeks to several months. The timeline is influenced by factors such as the number of pages, desired features, and the extent of revisions required.",
        },
        {
            id:2,
            question:"Can you update or redesign an existing website?",
            ans:"Absolutely! Whether you need minor updates or a complete redesign, we can help breathe new life into your existing website. Our team will work closely with you to understand your goals and make the necessary improvements.",
        },
        {
            id:3,
            question:"Do you provide SEO services to boost website visibility?",
            ans:"Yes, we offer extensive SEO services to increase your website's visibility on search engines such as Google. Our approach includes keyword research, on-page optimization, content creation, link building, and performance monitoring.",
        },
        {
            id:4,
            question:"What kind of support do you provide post-launch?",
            ans:"We offer ongoing support and maintenance services to ensure your website remains functional and up-to-date. This includes regular updates, security patches, backups, and technical assistance whenever you need it.",
        },
        {
            id:5,
            question:"Is the website design responsive and mobile-friendly?",
            ans:"Yes, all our website designs are responsive and optimized for mobile devices. We ensure that your website looks and performs seamlessly across all screen sizes and devices, providing an optimal user experience for your visitors.",
        },
        {
            id:6,
            question:"Are you able to incorporate third-party tools or services into the website?",
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