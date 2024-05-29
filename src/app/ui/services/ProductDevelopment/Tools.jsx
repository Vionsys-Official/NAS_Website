import React from "react";
const Tools = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-6">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <h2 className="max-w-lg mb-6 font-sans md:text-Heading text-Heading-sm font-bold leading-none tracking-tight text-blue-600  md:mx-auto">
          Product Development Tools
        </h2>
      </div>
      <div className="grid gap-3 mb-8 md:grid-cols-2 lg:grid-cols-3">
        <div className="p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2 flex flex-col gap-2">
          <h6 className="mb-2 font-semibold leading-5 md:text-CardHeading text-CardHeading-sm">
            Project Management & Collaboration
          </h6>
          <h2 className="md:text-Para text-Para-sm pl-4">1. Jira </h2>
          <h2 className="md:text-Para text-Para-sm pl-4">2. Trello </h2>
          <h2 className="md:text-Para text-Para-sm pl-4">3. Asana </h2>
          <h2 className="md:text-Para text-Para-sm pl-4">4. Microsoft Teams</h2>
        </div>
        <div className="p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2 flex flex-col gap-2">
          <h6 className="mb-2 font-semibold leading-5 md:text-CardHeading text-CardHeading-sm">
            Design and Prototyping
          </h6>
          <h2 className="md:text-Para text-Para-sm pl-4">1. Figma </h2>
          <h2 className="md:text-Para text-Para-sm pl-4">2. Sketch </h2>
          <h2 className="md:text-Para text-Para-sm pl-4">3. Adobe XD </h2>
          <h2 className="md:text-Para text-Para-sm pl-4">4. InVision</h2>
        </div>
        <div className="p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2 flex flex-col gap-2">
          <h6 className="mb-2 font-semibold leading-5 md:text-CardHeading text-CardHeading-sm">
            Version Control and Code Management
          </h6>
          <h2 className="md:text-Para text-Para-sm pl-4">1. GitHub </h2>
          <h2 className="md:text-Para text-Para-sm pl-4">2. GitLab </h2>
          <h2 className="md:text-Para text-Para-sm pl-4">3. BitBucket </h2>
        </div>
        <div className="p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2 flex flex-col gap-2">
          <h6 className="mb-2 font-semibold leading-5 md:text-CardHeading text-CardHeading-sm">
            Development Environments
          </h6>
          <h2 className="md:text-Para text-Para-sm pl-4">
            1. Visual Studio Code{" "}
          </h2>
          <h2 className="md:text-Para text-Para-sm pl-4">2. IntelliJ IDEA </h2>
          <h2 className="md:text-Para text-Para-sm pl-4">3. PyCharm </h2>
        </div>
        <div className="p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2">
          <h6 className="mb-2 font-semibold leading-5 md:text-CardHeading text-CardHeading-sm">
            Continuous Integration and Continuous Deployment (CI/CD)
          </h6>
          <h2 className="md:text-Para text-Para-sm pl-4">1. Github Actions </h2>
          <h2 className="md:text-Para text-Para-sm pl-4">2. CircleCI </h2>
          <h2 className="md:text-Para text-Para-sm pl-4">3. Travis CI</h2>
        </div>
        <div className="p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2">
          <h6 className="mb-2 font-semibold leading-5 md:text-CardHeading text-CardHeading-sm">
            Testing and Quality Assurance
          </h6>
          <h2 className="md:text-Para text-Para-sm pl-4">1. Selenium </h2>
          <h2 className="md:text-Para text-Para-sm pl-4">2. JUnit </h2>
          <h2 className="md:text-Para text-Para-sm pl-4">3. Jest</h2>
        </div>
      </div>
    </div>
  );
};
export default Tools;
