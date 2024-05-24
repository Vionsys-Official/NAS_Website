import React from "react";

const faqData = [
  {
    question: "What types of cyber security solutions do you offer?",
    answer:
      "Network Security,Endpoint Security, Application Security, Cloud Security, Identity and Access Management (IAM)",
  },
  {
    question:
      "How do your cyber security solutions integrate with our existing IT infrastructure?",
    answer:
      "Our solutions are designed to be flexible and compatible with a wide range of IT infrastructures. We conduct a through assessment of your current setup and work with your IT team to ensure seamless integration without disrupting your existing systems.",
  },
  {
    question:
      "What steps do you take to ensure the security of remote workers?",
    answer:
      "We offer specialized solutions for securing remote work environments, including VPNs, multi-factor authentication (MFA), endpoint security, and secure cloud access. These measures help protect remote workers from cyber threats and ensure secure access to organizational resources.",
  },
  {
    question: "How do you handle data privacy and protection in your services?",
    answer:
      "Data privacy and protection are at the core of our cyber security services. We implement strict data handling and encryption protocols to ensure your sensitive information is protected at all times. Our practices comply with all major data protection regulations and standards.",
  },
  {
    question: "What is Zero Trust Architecture and do you implement it?",
    answer:
      "Zero Trust Architecture is a security model that assumes no user or device, whether inside or outside the network, should be trusted by default. We implement Zero Trust principles by continuously verifying the identity and integrity of users and devices, ensuring secure access to resources.",
  },

  {
    question:
      "What is your approach to securing industrial control systems (ICS)?",
    answer:
      "We employ a multi-layered security approach to protect ICS, including network segmentation, real-time monitoring, and strict access controls. Our services are tailored to address the unique challenges and vulnerabilities associated with ICS environments.",
  },
];

const FAQList = () => {
  return (
    <div className=" w-full py-6 ">
      <div className="flex justify-center items-center">
        <h1 className="md:text-3xl text-base font-bold text-black ">
          Frequently Asked Questions
        </h1>
      </div>
      <ul className="max-w-3xl mx-auto my-10 divide-y shadow shadow-blue-600 rounded-xl ">
        {faqData.map((faq, index) => (
          <li key={index}>
            <details className="group">
              <summary className="flex items-center gap-3 px-4 py-3 font-medium marker:content-none hover:cursor-pointer">
                <svg
                  className="w-5 h-5 text-gray-500 transition group-open:rotate-90"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                  />
                </svg>
                <span>{faq.question}</span>
              </summary>
              <article className="px-12 pb-4">
                <p>{faq.answer}</p>
              </article>
            </details>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FAQList;
