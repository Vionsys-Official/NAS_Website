import React from "react";
import HelpDeskSupport from "/public/assets/services/ITServiceSupport/helpdesksupport.jpg";
import networkManagement from "/public/assets/services/ITServiceSupport/NetworkManagement.jpg";
import ITConsulting from "/public/assets/services/ITServiceSupport/ITConsulting.jpg";
import ComplianceSupport from "/public/assets/services/ITServiceSupport/Compliance.jpg";
import RemoteWorkSolutions from "/public/assets/services/ITServiceSupport/RemoteWork.jpg";
import SoftwareSupport from "/public/assets/services/ITServiceSupport/SoftwareSupport.jpg";
import Image from "next/image";
const Services = () => {
  return (
    <div className="px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10 flex ">
      <div className="w-full flex flex-col gap-10">
        <div className="w-full flex items-center justify-center">
          <h1 className="text-4xl font-bold text-slate-700">Our Services</h1>
        </div>
        <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
          <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
            <Image
              src={HelpDeskSupport}
              alt=""
              className="object-cover w-full h-64"
            />
            <div className="p-5 border border-t-0">
              <p className="mb-3 text-xl font-bold tracking-wide ">
                24/7 Help Desk Support
              </p>
              <p className="mb-2 text-gray-700">
                Our 24/7 help desk offers immediate assistance for software
                glitches, hardware malfunctions, and connectivity issues. Our
                experienced technicians swiftly resolve problems to ensure
                continuous business operations.
              </p>
            </div>
          </div>
          <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
            <Image
              src={networkManagement}
              alt=""
              className="object-cover w-full h-64"
            />

            <div className="p-5 border border-t-0">
              <p className="mb-3 text-xl font-bold tracking-wide ">
                Network Management
              </p>
              <p className="mb-2 text-gray-700">
                We offer comprehensive network management with real-time
                monitoring, performance optimization, and security enhancements.
                Our proactive approach ensures your IT infrastructure remains
                robust, efficient, scalable, and secure.
              </p>
            </div>
          </div>
          <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
            <Image
              src={ITConsulting}
              alt=""
              className="object-cover w-full h-64"
            />
            <div className="p-5 border border-t-0">
              <p className="mb-3 text-xl font-bold tracking-wide">
                IT Consulting
              </p>
              <p className="mb-2 text-gray-700">
                Transform your IT strategy with our expert consulting services.
                We provide in-depth assessments, strategic planning, and
                technology roadmaps to align your IT initiatives with your
                business goals, ensuring maximum value.
              </p>
            </div>
          </div>
        </div>
        <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
          <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
            <Image
              src={RemoteWorkSolutions}
              alt=""
              className="object-cover w-full h-64"
            />

            <div className="p-5 border border-t-0">
              <p className="mb-3 text-xl font-bold tracking-wide ">
                Remote Workforce Solutions
              </p>
              <p className="mb-2 text-gray-700">
                Empower your remote workforce with our specialized support
                services. We offer secure remote access solutions, advanced
                collaboration tools, and comprehensive remote IT support. Our
                services ensure your team can work efficiently, securely, and
                seamlessly from any location.
              </p>
            </div>
          </div>
          <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
            <Image
              src={SoftwareSupport}
              className="object-cover w-full h-64"
              alt=""
            />
            <div className="p-5 border border-t-0">
              <p className="mb-3 text-xl font-bold tracking-wide">
                {" "}
                Software Support and Maintenance
              </p>
              <p className="mb-2 text-gray-700">
                Keep your software applications running at peak performance with
                our support and maintenance services. We provide regular
                updates, patches, and performance tuning to ensure your software
                remains secure, reliable, and efficient.
              </p>
            </div>
          </div>
          <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
            <Image
              src={ComplianceSupport}
              alt=""
              className="object-cover w-full h-64"
            />
            <div className="p-5 border border-t-0">
              <p className="mb-3 text-xl font-bold tracking-wide ">
                Compliance and Regulatory Support
              </p>
              <p className="mb-2 text-gray-700">
                Navigate the complexities of IT compliance with our specialized
                support. We help you adhere to industry regulations and
                standards, conduct compliance audits, and implement necessary
                controls to protect your business from regulatory risks.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
