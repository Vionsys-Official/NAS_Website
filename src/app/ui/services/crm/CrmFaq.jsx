import Faq3 from '@/components/ui/Faq3'
import React from 'react'

const CrmFaq = () => {

    const faq = [
        {
            id: 1,
            ques: "What are the key features of your CRM solution?",
            ans: "This question helps in understanding the core functionalities of the CRM system being provided such as contact management, lead tracking, sales automation, customer support and reporting capabilities."
        },
        {
          id: 2,
          ques: "How customizable is your CRM platform?",
          ans: "Customizability is crucial for tailoring the CRM to the unique needs and workflows of the IT company. This question explores the extent to which the CRM can be adapted to specific business requirements and processes."
      },
      {
        id: 3,
        ques: "What integration options does your CRM offer?",
        ans: "Integration with existing IT infrastructure and third-party applications (e.g, email clients, project management tools, accounting software) is essential for seamless data flow and operational efficiency. Inquiring about integration capabilities ensures compatibility with the company's ecosystem."
      },
      {
        id: 4,
        ques: "How secure is your CRM solution?",
        ans: "Security is paramount when dealing with sensitive customer data. This question delves into the measures in place to safeguard data integrity, prevent unauthorized access and comply with industry regulations like GDPR or HIPAA."
      },
      {
        id: 5,
        ques: "What kind of customer support and training do you provide?",
        ans: "Effective support and training are crucial for successful CRM implementation and ongoing utilization. Asking about available support channels, documentation, training resources and SLAs helps assess the vendor's commitment to customer satisfaction and post-sales assistance."
      },
    ]
  return (
    <div><Faq3 faq={faq}/></div>
  )
}
export default CrmFaq