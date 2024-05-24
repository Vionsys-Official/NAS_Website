import Faq from '@/components/ui/Faq'
import React from 'react'

const DevOpsFaq = () => {

    const faq = [
        {
            id: 1,
            ques: 'What is DevOps and how can it benefit my organization?',
            ans: 'DevOps aimed at shortening the development lifecycle and providing continuous delivery with high software quality. By adopting DevOps, your organization can benefit from faster deployment times, improved collaboration between teams, increased efficiency and productivity, enhanced customer satisfaction and the ability to quickly respond to market changes or customer feedback.',
        },
        {
            id: 2,
            ques: 'How do you implement DevOps in an existing infrastructure?',
            ans: 'Implementing DevOps in an existing infrastructure involves several steps: Assessing current processes, Selecting suitable tools, Automating tasks, Setting up CI/CD pipelines, Monitoring and feedback, Promoting a collaborative culture.',
        },
        {
            id: 3,
            ques: 'What are the common tools used in a DevOps environment?',
            ans: 'Common tools used in a DevOps environment include: 1)Version Control: Git, GitHub 2)CI/CD: Jenkins, CircleCI 3)Configuration Management: Ansible, Chef 4)Containerization: Docker, Kubernetes 5)Monitoring: Prometheus, Grafana 6)Collaboration: Slack, Jira',
        },
        {
            id: 4,
            ques: 'How does DevOps ensure better security in the development process?',
            ans: 'DevOps incorporates security practices into the development process through DevSecOps, which integrates security from the beginning. This includes: Automated security testing, Infrastructure as Code (IaC), Continuous monitoring, Compliance automation and Security training for teams.',
        },
        {
            id: 5,
            ques: 'How can I measure the success of DevOps implementation in my organization?',
            ans: 'Measuring the success of DevOps implementation can be done using several key performance indicators (KPIs) including: Deployment frequency, Lead time for changes, Change failure rate, Mean time to recovery (MTTR), Automation coverage and Customer satisfaction.',
        },
    ]
  return (
    <div><Faq faq={faq}/></div>
  )
}

export default DevOpsFaq