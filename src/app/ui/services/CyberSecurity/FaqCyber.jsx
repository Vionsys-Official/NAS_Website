import Faq2 from "@/components/ui/Faq2";
import React from "react";

const FaqCyber = () => {
  const faq = [
    {
      id: 1,
      ques: "What types of cyber security solutions do you offer?",
      ans: "Network Security,Endpoint Security, Application Security, Cloud Security, Identity and Access Management (IAM)",
    },
    {
      id: 2,
      ques: "How do your cyber security solutions integrate with our existing IT infrastructure?",
      ans: "Our solutions are designed to be flexible and compatible with a wide range of IT infrastructures. We conduct a through assessment of your current setup and work with your IT team to ensure seamless integration without disrupting your existing systems.",
    },
    {
      id: 3,
      ques: "What steps do you take to ensure the security of remote workers?",
      ans: "We offer specialized solutions for securing remote work environments including VPNs, multi-factor authentication (MFA), endpoint security and secure cloud access. These measures help protect remote workers from cyber threats and ensure secure access to organizational resources.",
    },
    {
      id: 4,
      ques: "How do you handle data privacy and protection in your services?",
      ans: "Data privacy and protection are at the core of our cyber security services. We implement strict data handling and encryption protocols to ensure your sensitive information is protected at all times. Our practices comply with all major data protection regulations and standards.",
    },
    {
      id: 5,
      ques: "What is Zero Trust Architecture and do you implement it?",
      ans: "Zero Trust Architecture is a security model that assumes no user or device, whether inside or outside the network, should be trusted by default. We implement Zero Trust principles by continuously verifying the identity and integrity of users and devices ensuring secure access to resources.",
    },
  ];

  return (
    <div>
      <Faq2 faq={faq} />
    </div>
  );
};

export default FaqCyber;
