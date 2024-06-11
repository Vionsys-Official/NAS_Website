import React from 'react'
import Faq from '@/components/ui/Faq'
const FaqAIV = () => {
    const faq = [
        {
            id: 1,
            ques: "What AI and ML services do you offer?",
            ans: "Our company offers a comprehensive range of AI and ML services tailored to meet the diverse needs of our clients. This includes machine learning model development, natural language processing, computer vision, predictive analytics, anomaly detection and more."
        },
        {
            id: 2,
            ques: "What industries have you worked with?",
            ans: "We have a proven track record of working with clients across various industries including healthcare, finance, retail, manufacturing and telecommunications, among others. Our experience spans diverse sectors, allowing us to bring valuable insights and expertise to each project we undertake.            "
        },
        {
            id: 3,
            ques: "What is your approach to data privacy and security?",
            ans: "Data privacy and security are top priorities for us. We adhere to strict data protection protocols and comply with industry regulations such as GDPR. Our team follows best practices for data encryption, access control and secure data storage to ensure the confidentiality, integrity and availability of our clients' data throughout the project lifecycle."
        },
        {
            id: 4,
            ques: " Vansh How do you handle data security and confidentiality?",
            ans: "We implement encryption, secure coding practices and regular security audits. Our team follows industry standards like GDPR and HIPAA and we sign NDAs with clients to protect sensitive information."
        },
        {
            id: 5,
            ques: "How do you ensure the success of AI and ML projects?",
            ans: "We ensure success by aligning project goals with business objectives, employing Agile methodologies for iterative development and conducting rigorous testing and validation throughout the project lifecycle.            "
        },
    ]
  return (
    <div>
        <Faq faq={faq} />
    </div>
  )
}

export default FaqAIV;