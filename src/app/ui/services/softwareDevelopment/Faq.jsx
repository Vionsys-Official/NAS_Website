import React from 'react'
import Faq from '@/components/ui/Faq'
const FaqSoftDev = () => {
    const faq = [
        {
            id: 1,
            ques: "What types of software development services do you offer?",
            ans: "We offer a comprehensive range of software development services including custom software development, mobile app development (iOS and Android), web application development, enterprise software solutions, software integration and maintenance and support services. "
        },
        {
            id: 2,
            ques: "How do you ensure the quality of your software development projects?",
            ans: "We ensure quality through thorough planning, regular code reviews and comprehensive testing. We follow industry best practices, use the latest tools and continuously gather client feedback to align the project with expectations."
        },
        {
            id: 3,
            ques: "What is your approach to project management and communication?",
            ans: "We use agile methodologies, hold regular meetings and use tools like Jira and Trello to track progress. We maintain clear communication through email, phone calls, video conferences and collaboration platforms like Slack or Microsoft Teams."
        },
        {
            id: 4,
            ques: "How do you handle data security and confidentiality?",
            ans: "We implement encryption, secure coding practices and regular security audits. Our team follows industry standards like GDPR and HIPAA and we sign NDAs with clients to protect sensitive information."
        },
        {
            id: 5,
            ques: "What is the typical timeline and cost for a software development project?",
            ans: "The timeline and cost depend on the project's scope and complexity. After an initial consultation, we provide a detailed proposal with estimates. We offer flexible pricing models to fit different needs and budgets aiming to deliver high-quality software on time and within budget."
        },
    ]
  return (
    <div>
        <Faq faq={faq} />
    </div>
  )
}

export default FaqSoftDev;