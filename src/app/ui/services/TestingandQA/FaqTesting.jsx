import Faq2 from "@/components/ui/Faq2";
import React from "react";

const FaqTesting = () => {
  const faq = [
    {
      id: 1,
      ques: "How do you ensure the confidentiality and security of our product idea during the development process?",
      ans: "We prioritize confidentiality and security by implementing strict non-disclosure agreements (NDAs) and utilizing robust data protection measures. Our secure systems and protocols ensure that your intellectual property remains protected throughout all stages of development.",
    },
    {
      id: 2,
      ques: "Can you provide examples of how you have helped clients navigate the patenting process for their products?",
      ans: "While we do not handle patenting directly, we guide our clients through the process and connect them with trusted legal experts specializing in intellectual property protection. We have successfully assisted clients in preparing documentation and navigating the legal requirements to secure patents for their innovations",
    },
    {
      id: 3,
      ques: "How do you incorporate user feedback into the product development cycle to ensure the final product meets market needs?",
      ans: "We engage end-users throughout the development process via user testing, focus groups, and feedback sessions. By applying user-centered design principles, we ensure that the product is intuitive, functional and aligned with the actual needs and expectations of its target audience.",
    },
    {
      id: 4,
      ques: "What methodologies do you use to manage risks and uncertainties during product development?",
      ans: " We use a combination of agile methodologies, risk assessment tools, and iterative testing to manage risks and uncertainties. This allows us to identify potential issues early, adapt to changes quickly and ensure a smooth development process that minimizes disruptions and maximizes product quality.",
    },
    {
      id: 5,
      ques: "How do you ensure that the products you develop are sustainable and environmentally friendly?",
      ans: "We integrate sustainable design principles into our product development process, focusing on eco-friendly materials, energy efficiency and recyclability. Additionally, we conduct lifecycle assessments to minimize environmental impact and comply with relevant sustainability standards and regulations.",
    },
  ];

  return (
    <div className="overflow-y-hidden">
      <Faq2 faq={faq} />
    </div>
  );
};

export default FaqTesting;
