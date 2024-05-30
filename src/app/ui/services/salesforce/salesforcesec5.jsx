import React from 'react'
import { RiQuestionnaireFill } from "react-icons/ri";

const salesforcesec5 = () => {
  return (
    <section>
        <div id="faq" className="mx-auto max-w-2xl divide-y divide-gray-900/10 lg:max-w-7xl p-4 md:p-8 dark:bg-gray-800">
          <h2 className="mt-2 font-header text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center dark:text-white">
            Frequently asked questions ?
          </h2>
          <div className="w-full h-[3px] bg-blue-500 mt-3"></div>

          <dl className="mt-10 space-y-8 divide-y divide-gray-900/10">

            <div className="pt-8 lg:grid lg:grid-cols-12 lg:gap-8">
              <dt className="text-base font-semibold leading-7 text-gray-900 lg:col-span-3 dark:text-gray-300 flex items-start">
                <RiQuestionnaireFill className="mr-2 mt-[5px] w-6 h-6 flex-shrink-0" />
                <span>How can Salesforce integration benefit my business?</span>
              </dt>
              <dd className="mt-4 lg:col-span-9 lg:mt-0">
                <p className="text-base leading-7 text-gray-600 dark:text-gray-400">
                  As a Salesforce service provider, we offer a wide range of services including Salesforce integration, support, implementation, consulting, and customization tailored to meet your specific business needs.
                </p>
              </dd>
            </div>

            <div className="pt-8 lg:grid lg:grid-cols-12 lg:gap-8">
              <dt className="text-base font-semibold leading-7 text-gray-900 lg:col-span-3 dark:text-gray-300 flex items-start">
                <RiQuestionnaireFill className="mr-2 mt-[5px] w-6 h-6 flex-shrink-0" />
                <span>What kind of support do you provide for Salesforce users?</span>
              </dt>
              <dd className="mt-4 lg:col-span-9 lg:mt-0">
                <p className="text-base leading-7 text-gray-600 dark:text-gray-400">
                  Our Salesforce support services encompass troubleshooting, issue resolution, user training, system maintenance, and ongoing technical assistance to ensure that your Salesforce platform operates smoothly and efficiently.
                </p>
              </dd>
            </div>

            <div className="pt-8 lg:grid lg:grid-cols-12 lg:gap-8">
              <dt className="text-base font-semibold leading-7 text-gray-900 lg:col-span-3 dark:text-gray-300 flex items-start">
                <RiQuestionnaireFill className="mr-2 mt-[5px] w-6 h-6 flex-shrink-0" />
                <span>Can you customize Salesforce to fit our unique needs?</span>
              </dt>
              <dd className="mt-4 lg:col-span-9 lg:mt-0">
                <p className="text-base leading-7 text-gray-600 dark:text-gray-400">
                  Yes, we offer Salesforce customization services to tailor the platform to your specific business requirements. Whether it's creating custom fields, workflows, reports, or dashboards, we ensure that Salesforce aligns perfectly with your processes and objectives.
                </p>
              </dd>
            </div>

            <div className="pt-8 lg:grid lg:grid-cols-12 lg:gap-8">
              <dt className="text-base font-semibold leading-7 text-gray-900 lg:col-span-3 dark:text-gray-300 flex items-start">
                <RiQuestionnaireFill className="mr-2 mt-[5px] w-6 h-6 flex-shrink-0" />
                <span>How can your Salesforce consulting services help my business?</span>
              </dt>
              <dd className="mt-4 lg:col-span-9 lg:mt-0">
                <p className="text-base leading-7 text-gray-600 dark:text-gray-400">
                  Our Salesforce consulting services involve working closely with your organization to understand your goals and challenges, providing strategic guidance, best practices, and expert advice to optimize your Salesforce usage and drive business growth.
                </p>
              </dd>
            </div>

          </dl>
        </div>
      </section>

  )
}

export default salesforcesec5