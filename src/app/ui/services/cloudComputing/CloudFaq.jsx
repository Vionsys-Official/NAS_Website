import Faq3 from '@/components/ui/Faq3'
import React from 'react'

const CloudFaq = () => {
    const faq = [
        {
            id: 1,
            ques: "What is cloud computing, and how can it benefit my business?",
            ans: "Cloud computing delivers IT services like servers, storage, and applications over the internet. It offers cost savings, scalability, flexibility, and improved collaboration for your business. Additionally, it enables access to your data and applications from anywhere, enhancing productivity."
        },
        {
            id: 2,
            ques: "How secure is cloud computing?",
            ans: "Cloud providers implement advanced security measures such as encryption and access controls, and comply with regulations like GDPR and HIPAA. Additionally, businesses can enhance security by following best practices, including using strong passwords and enabling multi-factor authentication."
        },
        {
            id: 3,
            ques: "What types of cloud services do you offer?",
            ans: "We provide Infrastructure as a Service (IaaS) for virtualized resources, Platform as a Service (PaaS) for application development and management, and Software as a Service (SaaS) for online software applications. These services cater to various business needs, from basic infrastructure to complete software solutions."
        },
        {
            id: 4,
            ques: "How do I migrate my existing IT infrastructure to the cloud?",
            ans: "Migrating involves assessing your current setup, creating a detailed migration plan, transferring data and applications, testing functionality in the cloud, and optimizing for performance and cost. We guide you through each step for a smooth transition and minimize downtime during the process."
        },
        {
            id: 5,
            ques: "What support and services do you offer after the migration?",
            ans: "We offer 24/7 technical support, continuous monitoring and maintenance, regular backups and disaster recovery solutions, ongoing security management, and tools for optimizing cloud spending. Our team is dedicated to ensuring your cloud environment runs smoothly and efficiently. Contact us for more details."
        },
    ]
  return (
    <div><Faq3 faq={faq}/></div>
  )
}

export default CloudFaq