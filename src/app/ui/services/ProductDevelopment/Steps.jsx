import React from "react";

const Steps = () => {
  return (
    <section className="py-8 dark:bg-gray-100 dark:text-gray-800">
      <div className="container mx-auto">
        <div className="p-4 mx-auto text-center md:px-10 lg:px-32 ">
          <h2 className="text-xl font-bold leading-none sm:text-4xl ">
            Product Development Stages
          </h2>
        </div>
        <div className="grid grid-cols-5 p-4 md:p-8">
          <div className="flex justify-center px-4 col-span-full md:col-span-1 md:flex-col md:justify-start md:items-start">
            <button className="p-2 border-b-2 md:border-l-2 md:border-b-0 md:py-3 dark:border-gray-700 dark:text-gray-600">
              Idea & Concept
            </button>
            <button className="px-2 py-1 border-b-2 md:border-l-2 md:border-b-0 md:py-3 dark:border-gray-700 dark:text-gray-600">
              Validation
            </button>
            <button className="px-2 py-1 border-b-2 md:border-l-2 md:border-b-0 md:py-3 dark:border-gray-700 dark:text-gray-600">
              Market Analysis
            </button>
            <button className="px-2 py-1 border-b-2 md:border-l-2 md:border-b-0 md:py-3 dark:border-gray-700 dark:text-gray-600">
              Protype Iteration
            </button>
            <button className="px-2 py-1 border-b-2 md:border-l-2 md:border-b-0 md:py-3 dark:border-gray-700 dark:text-gray-600">
              Deployment Planning
            </button>
            <button className="px-2 py-1 border-b-2 md:border-l-2 md:border-b-0 md:py-3 dark:border-gray-700 dark:text-gray-600">
              Launch and Scale
            </button>
          </div>
          <div className="grid gap-6 py-4 text-center sm:grid-cols-2 col-span-full md:col-span-4 md:text-left">
            <div className="flex flex-col items-center justify-center space-y-3 md:justify-start md:items-start">
              <svg
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="
                 http://www.w3.org/2000/svg"
                className="w-6 h-6 dark:text-violet-600"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                ></path>
              </svg>
              <h5 className="text-xl font-semibold">Idea and Concept</h5>
              <p>
                This phase is about brainstorming and refining product ideas
                into concrete concepts, ensuring they address market needs and
                have potential for development.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center space-y-3 md:justify-start md:items-start">
              <svg
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="
                http://www.w3.org/2000/svg"
                className="w-6 h-6 dark:text-violet-600"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
                ></path>
              </svg>
              <h5 className="text-xl font-semibold">Validation</h5>
              <p>
                Testing the feasibility and potential of the product concept
                through market research, surveys, and validation with target
                customers.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center space-y-3 md:justify-start md:items-start">
              <svg
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="
                http://www.w3.org/2000/svg"
                className="w-6 h-6 dark:text-violet-600"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
                ></path>
              </svg>
              <h5 className="text-xl font-semibold">Market Analysis</h5>
              <p>
                Assessing market dynamics, competition, trends, and customer
                preferences to refine the product concept and identify market
                opportunities.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center space-y-3 md:justify-start md:items-start">
              <svg
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="
                 http://www.w3.org/2000/svg"
                className="w-6 h-6 dark:text-violet-600"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                ></path>
              </svg>
              <h5 className="text-xl font-semibold">Prototype Iteration</h5>
              <p>
                Creating prototypes of the product to test functionality,
                usability, and gather feedback for iterative improvements.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center space-y-3 md:justify-start md:items-start">
              <svg
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="
                 http://www.w3.org/2000/svg"
                className="w-6 h-6 dark:text-violet-600"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                ></path>
              </svg>
              <h5 className="text-xl font-semibold">Deployment Planning</h5>
              <p>
                Planning the production process, supply chain logistics, and
                marketing strategy for the launch of the product.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center space-y-3 md:justify-start md:items-start">
              <svg
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="
                http://www.w3.org/2000/svg"
                className="w-6 h-6 dark:text-violet-600"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
                ></path>
              </svg>
              <h5 className="text-xl font-semibold">Launch and Scale</h5>
              <p>
                Introducing the product to the market, executing marketing
                campaigns, and scaling production and distribution to meet
                demand while monitoring and adjusting strategies for optimal
                growth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Steps;
