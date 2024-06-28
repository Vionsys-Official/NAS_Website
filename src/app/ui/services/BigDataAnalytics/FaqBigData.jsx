import Faq2 from "@/components/ui/Faq2";
import React from "react";

const FaqBigData = () => {
  const faq = [
    {
      id: 1,
      ques: " How do you handle data quality and ensure the accuracy of the insights provided?",
      ans: "We implement robust data cleansing and preprocessing techniques, including validation, deduplication and normalization, to ensure that the data used for analysis is accurate and reliable. Regular audits and quality checks are also conducted to maintain data integrity throughout the analytics process.",
    },
    {
      id: 2,
      ques: "Can your Big Data Analytics services integrate with our existing IT infrastructure and tools?",
      ans: "Yes, our services are designed to seamlessly integrate with a wide range of IT infrastructures and tools including legacy systems, cloud platforms and popular business intelligence tools like Tableau and Power BI. This ensures that you can leverage your existing investments while enhancing your analytics capabilities.",
    },
    {
      id: 3,
      ques: " How do you address data privacy and compliance with regulations such as GDPR and CCPA?",
      ans: "We adhere to strict data privacy protocols and ensure full compliance with regulations like GDPR and CCPA. This includes implementing data anonymization, encryption and access control measures as well as obtaining necessary consents and maintaining transparency in data handling practices.",
    },
    {
      id: 4,
      ques: "What industries have you successfully implemented Big Data Analytics solutions for, and can you provide specific examples or case studies?",
      ans: " We have successfully implemented Big Data Analytics solutions across various industries including healthcare, finance, retail and manufacturing. We can provide anonymized case studies that demonstrate how our services have solved industry-specific challenges and delivered significant value.",
    },
    {
      id: 5,
      ques: "How do you ensure the scalability of your analytics solutions to accommodate growing data volumes and evolving business needs?",
      ans: "Our analytics solutions are built on scalable architectures that can handle increasing data volumes and evolving business requirements. We leverage cloud-based infrastructures and modular design principles to ensure that our solutions can grow seamlessly with your business providing continuous value as your data needs expand.",
    },
  ];

  return (
    <div>
      <Faq2 faq={faq} />
    </div>
  );
};

export default FaqBigData;
