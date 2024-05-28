import Faq2 from "@/components/ui/Faq2";
import React from "react";

const FaqService = () => {
  const faq = [
    {
      id: 1,
      ques: "What types of issues are covered by your IT support services?",
      ans: "Our IT support services cover a wide range of technical issues including software troubleshooting, hardware diagnostics, network connectivity problems, email configuration, security concerns, and more. If you're unsure whether your issue is covered, feel free to contact us for clarification.",
    },
    {
      id: 2,
      ques: " How do you prioritize support requests?",
      ans: "Support requests are prioritized based on factors such as severity of the issue, impact on business operations, and urgency. Critical issues affecting multiple users or hindering essential functions are given the highest priority and addressed promptly.",
    },
    {
      id: 3,
      ques: "Do you offer remote assistance for troubleshooting issues?",
      ans: "Yes, we provide remote assistance to quickly diagnose and resolve technical issues. Our support team can securely access your system with your permission to troubleshoot software problems, configure settings, and provide guidance on resolving issues remotely.",
    },
    {
      id: 4,
      ques: "How do you ensure data security and confidentiality when providing IT support?",
      ans: " We take data security and confidentiality seriously. Our support team adheres to strict protocols and follows industry best practices to safeguard your sensitive information. We utilize secure communication channels, encryption technologies, and access controls to protect your data from unauthorized access or breaches.",
    },
    {
      id: 5,
      ques: "Can you assist with setting up and configuring new hardware or software for our organization?",
      ans: "Yes, our IT support team can help with the setup and configuration of new hardware and software solutions tailored to your organization's needs. Whether it's installing operating systems, configuring network devices, or deploying software applications, we're here to ensure a smooth implementation process. Just reach out to us with your requirements, and we'll guide you through the setup process step by step.",
    },
  ];

  return (
    <div>
      <Faq2 faq={faq} />
    </div>
  );
};

export default FaqService;
