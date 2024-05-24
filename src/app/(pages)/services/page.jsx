import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Button from '@/components/ui/Button';

const Page = () => {

  const ourServices = [
    {
      title: "Software Development",
      imagesrc: "/assets/services/SoftwareDev.jpg",
      description: "We deliver innovative software tailored to your business needs. Trust us for reliable, high-quality development that ensures your success.",
      href1: "services/softwareDevelopment",
    },
    {
      title: "Artificial Intelligence and Machine Learning",
      imagesrc: "/assets/services/Ai.jpg",
      description: "Harness the power of AI and ML to transform your business operations. Our advanced solutions drive innovation and efficiency, setting you ahead of the competition.",
      href1: "services/softwareDevelopment",
    },
    {
      title: "Salesforce Services",
      imagesrc: "/assets/services/SSalesforce.jpg",
      description: "Optimize your customer relationship management with our expert Salesforce services. We provide tailored solutions to streamline your processes and boost your business efficiency.s",
      href1: "services/softwareDevelopment",
    },
    
    
    {
      title: "Software Testing and Quality Assurance",
      imagesrc: "/assets/services/testing.jpg",
      description: "We guarantee flawless software performance with our rigorous testing and quality assurance services, ensuring a seamless launch for your product.",
      href1: "services/softwareDevelopment",
    },
    {
      title: "Devops",
      imagesrc: "/assets/services/devops1.jpg",
      description: "Streamline your development and operations with our DevOps expertise. We optimize workflows, automate processes, and ensure seamless collaboration for faster, more efficient software delivery.",
      href1: "services/softwareDevelopment",
    },
    {
      title: "Cloud Computing",
      imagesrc: "/assets/services/cloudcomputing.jpg",
      description: "Unlock the power of scalable, flexible infrastructure with our cloud computing solutions. Seamlessly transition to the cloud for enhanced reliability, security, and efficiency in your operations.",
      href1: "services/softwareDevelopment",
    },
    {
      title: "Web Site Development",
      imagesrc: "/assets/services/webdev.jpg",
      description: "Craft captivating online experiences tailored to your brand with our expert website development services. From sleek designs to seamless functionality, we bring your digital vision to life with precision and creativity.",
      href1: "services/softwareDevelopment",
    },
    {
      title: "Digital Marketing",
      imagesrc: "/assets/services/digitalMarket.jpg",
      description: "Boost your online presence with our strategic solutions. From SEO to social media, we optimize your digital strategy for maximum impact and growth.",
      href1: "services/softwareDevelopment",

    },
    {
      title: "BI and Analytics",
      imagesrc: "/assets/services/BIAnalytics.jpg",
      description: "Empower data-driven decisions with our advanced BI and analytics solutions. Gain valuable insights to drive your business forward with confidence and precision.",
      href1: "services/softwareDevelopment",

    },
    {
      title: "Customer Relationship Management",
      imagesrc: "/assets/services/CRM.jpg",
      description: "Optimize interactions and enhance customer satisfaction with our tailored CRM solutions. Streamline processes and nurture relationships for sustained business growth.",
      href1: "services/softwareDevelopment",
    },
    {
      title: "IT Staffing",
      imagesrc: "/assets/services/ItStaff.jpg",
      description: "Unlock your team's full potential with our specialized IT staffing solutions. From top-tier talent acquisition to seamless onboarding, we ensure a perfect fit for your organization's success.",
      href1: "services/softwareDevelopment",

    },
    {
      title: "IT Service Support",
      imagesrc: "/assets/services/IT-Suppjpg.jpg",
      description: "Rely on our expert IT support for seamless operations. From troubleshooting to proactive maintenance, we keep your systems running smoothly, so you can focus on your business.",
      href1: "services/softwareDevelopment",

    },
  ];

  return (
    <main>

      {/* Heading Section */}
      <section id="mission2" className="p-5">
        <div className="m-14 mx-auto max-w-6xl  flex gap-3 lg:flex-justify lg:flex flex-col lg:flex-row">
          <div className="sm:text-center mx-6 my-7 lg:text-left">
            <h1 className="text-3xl tracking-tight font-extrabold text-gray-800">
              <span className="block xl:inline">Top-Quality Software Services</span>
              <span className="block text-violet-900 xl:block">Tailored for You</span>
            </h1>
            <p className="mt-5 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.
            </p>
            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
            <Button />
            </div>
          </div>
          <div className="lg:inset-y-0 lg:right-0 shadow-md lg:w-1/2 ">
            <Image width={550} height={500} className="object-cover" src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80" alt="" />
          </div>
        </div>
      </section>

      {/* cards section */}
      <section className="bg-white p-2 ">
        <div className="max-w-[77rem] mx-auto">
          <h1 className="text-3xl text-center font-semibold text-gray-900 leading-tight mb-2  border-b-2 border-violet-900 py-2 relative">
            Our <span className='text-orange-600'>Services</span>
          </h1>
        
        </div>
  <div className="flex flex-wrap justify-center gap-6 p-5">
  {ourServices.map((service, index) => (
    <div key={index} className="group hover:bg-gray-100 hover:border-gray-300 w-[270px] rounded-md p-4 mx-2 bg-white border shadow-sm hover:shadow-lg transition overflow-hidden flex flex-col justify-between">
      <div>
        <Image
          width={500}
          height={500}
          src={service.imagesrc}
          alt={service.title}
          className="h-[170px] w-full rounded-md object-cover transition-transform duration-300 ease-in-out transform group-hover:scale-105"/>
        <div className="pt-2 px-1">
          <h1 className="text-lg font-semibold">{service.title}</h1>
          <p className="mt-3 text-sm text-gray-600">
            {service.description}
          </p>
        </div>
      </div>
      <Link href={service.href1}>
      <button class="smky-btn3 p-[2px] relative hover:text-gray-100  after:absolute after:h-1 after:hover:h-[250%] after:hover:border-2 after:border-red-600 
              transition-all duration-500 hover:transition-all hover:duration-500 after:transition-all after:duration-500 
              after:hover:transition-all after:hover:duration-500 overflow-hidden z-20 after:z-[-20] after:bg-violet-900 
              after:rounded-t-full after:w-full after:bottom-0 after:left-0 text-gray-800">Read more</button>
      </Link>
    </div>
          ))}
        </div>
      </section>

    </main>
  );
};

export default Page;



