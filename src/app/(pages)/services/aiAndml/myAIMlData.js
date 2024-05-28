import { MdOnlinePrediction, MdMessage, MdSmartButton } from 'react-icons/md';
import { RiAiGenerate, RiRobot2Fill } from 'react-icons/ri';
import { GiProtectionGlasses } from 'react-icons/gi';

// Industry Data
export const industryData = {
  Fintech: [
    'Algorithmic trading',
    'Personalized financial planning',
    'Data Analysis',
    'Chatbots for Customer Service',
    'Credit Scoring',
  ],
  Marketing: [
    'Predictive Marketing',
    'Chatbots for personalized customer service',
    'Dynamic content creation and optimization',
    'Customer Understanding',
    'Behavioral Analysis',
    'Competitor Analysis',
  ],
  Realstate: [
    'Virtual tours and property visualization',
    'Transaction Management',
    'Workspace Management',
    'Automated Property Valuation',
    'Smart Home Integration',
  ],
  Gaming: [
    'AI-powered game characters and environments',
    'Generative game content creation',
    'Real-Time Analytics & Data Mining',
    'Player Sentiment Analysis',
    'Cheat Detection in Multiplayer Games',
  ],
  Manufacturing: [
    'Robot-assisted assembly and quality control',
    'Supply chain optimization and demand forecasting',
    'Inventory management and stock replenishment',
    'Route optimization and logistics planning',
  ],
  Healthcare: [
    'Drug discovery and development',
    'Personalized Treatment',
    'End-to-End Clinical Solutions',
    'Image Analysis Software',
    'Virtual assistants for symptom analysis and triage',
  ],
};

// Industry Paragraphs
export const industryParagraphs = {
  Fintech: [
    <p className="text-lg leading-6 text-gray-800">
      The financial sector is the second largest sector after healthcare to implement AI to secure and safeguard funds and data. Our AI architects have received AI integration orders into the existing systems or a few ones built from scratch, which are as follows.
    </p>
  ],
  Marketing: [
    <p className="text-lg leading-6 text-gray-800">
      We can be your extended helping hand for building customized campaigns, predicting your customer behavior, and recommending products/services. Our AI engineers excel at designing algorithms to target the right audience and deliver the right message to address their pain points.
    </p>
  ],
  Realstate: [
    <p className="text-lg leading-6 text-gray-800">
      Our AI innovators take the challenge of crafting bespoke solutions that redefine every square foot, from buying and selling to experience spaces like never before. Count on us to reshape your real-estate business projects using cutting-edge technologies.
    </p>
  ],
  Gaming: [
    <p className="text-lg leading-6 text-gray-800">
      Gaming is the next big thing to invest in, and implementing AI in gaming means changing the landscape of how users perform, what impact games leave, and how they interact. Our AI programmers implement Artificial Intelligence in your existing gaming project or build a new one from scratch.
    </p>
  ],
  Manufacturing: [
    <p>
      AI and ML are key to the future of smart manufacturing. Our solutions include predictive maintenance, process optimization and quality control through machine vision. We help manufacturers reduce downtime, improve product quality and increase overall efficiency.
    </p>
  ],
  Healthcare: [
    <p className="text-lg leading-6 text-gray-800">
      AI has opened up ample possibilities in the healthcare industry. Below are some AI-backed possibilities we have built so far:
    </p>
  ]
};

// Mysect2 Data
export const mysect2 = [
  {
    id: 1,
    icon: MdOnlinePrediction,
    title: "Predictive Analytics",
    description:
      "Drive informed decision-making and maximize ROI through strategic resource allocation facilitated.",
  },
  {
    id: 2,
    icon: MdMessage,
    title: "Virtual Assistants",
    description:
      "Enhance productivity and efficiency while safeguarding your digital assets with cutting-edge monitoring.",
  },
  {
    id: 3,
    icon: MdSmartButton,
    title: "Machine Learning",
    description:
      "Leverage advanced algorithms and data analysis techniques to establish a scalable foundation.",
  },
  {
    id: 4,
    icon: RiAiGenerate,
    title: "Generative AI",
    description:
      "Ensure operational continuity with secure and configuration management powered by generative AI.",
  },
  {
    id: 5,
    icon: GiProtectionGlasses,
    title: "Computer Vision",
    description:
      "Optimize governance and streamline operations with robust collaboration and communication tools.",
  },
  {
    id: 6,
    icon: RiRobot2Fill,
    title: "AI Robotics",
    description:
      "Transform operations with proactive insights and performance management capabilities enabled.",
  },
];
