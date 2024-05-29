import React from "react";

const WhyChooseUs = () => {
  return (
    <div className="text-center overflow-x-hidden">
      <h6 className="md:text-HMain text-HMain-sm font-bold mt-5 pt-4 ">
        Why choose us ???
      </h6>

      <div class="flex flex-col grid-cols-9 p-2 mx-auto md:grid">
        <div class="flex md:contents flex-row-reverse">
          <div class="relative p-4 my-6 text-gray-800 bg-blue-400 rounded-xl col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto">
            <h3 class="md:text-HSub text-HSub-sm font-semibold lg:text-xl">
              Industry Expertise
            </h3>
            <p class="mt-2 md:text-Para text-Para-sm leading-6">
              With years of experience in the insurance sector, we understand
              the specific needs and challenges you face.
            </p>
          </div>
          <div class="relative col-start-5 col-end-6 mr-7 md:mx-auto">
            <div class="flex items-center justify-center w-6 h-full">
              <div class="w-1 h-full bg-red-300 rounded-t-full bg-gradient-to-b from- to-red-300"></div>
            </div>
            <div class="absolute w-6 h-6 -mt-3 bg-blue-400 border-4 border-red-500 rounded-full top-1/2"></div>
          </div>
        </div>

        <div class="flex md:contents">
          <div class="relative col-start-5 col-end-6 mr-7 md:mx-auto">
            <div class="flex items-center justify-center w-6 h-full">
              <div class="w-1 h-full bg-red-300"></div>
            </div>
            <div class="absolute w-6 h-6 -mt-3   bg-blue-400 border-4 border-red-500 rounded-full top-1/2"></div>
          </div>
          <div class="relative p-4 my-6 text-gray-800  bg-blue-400 rounded-xl col-start-6 col-end-10 mr-auto">
            <h3 class="md:text-HSub text-HSub-sm font-semibold lg:text-xl">
              Innovative Technology
            </h3>
            <p class="mt-2 md:text-Para text-Para-sm leading-6">
              Our solutions are built using the latest technologies to ensure
              you stay ahead of the competition.
            </p>
          </div>
        </div>

        <div class="flex md:contents flex-row-reverse">
          <div class="relative p-4 my-6 text-gray-800  bg-blue-400 border-red-500 rounded-xl col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto">
            <h3 class="md:text-HSub text-HSub-sm font-semibold lg:text-xl">
              Customer-Centric Approach
            </h3>
            <p class="mt-2 md:text-Para text-Para-sm leading-6">
              We prioritize your success and work closely with you to deliver
              customized solutions that drive results.
            </p>
          </div>
          <div class="relative col-start-5 col-end-6 mr-7 md:mx-auto">
            <div class="flex items-center justify-center w-6 h-full">
              <div class="w-1 h-full bg-red-300 rounded-t-full bg-gradient-to-b from-red-400 to-red-300"></div>
            </div>
            <div class="absolute w-6 h-6 -mt-3  bg-blue-400 border-4 border-red-500 rounded-full top-1/2"></div>
          </div>
        </div>

        <div class="flex md:contents">
          <div class="relative col-start-5 col-end-6 mr-7 md:mx-auto">
            <div class="flex items-center justify-center w-6 h-full">
              <div class="w-1 h-full bg-red-300"></div>
            </div>
            <div class="absolute w-6 h-6 -mt-3  bg-blue-400 border-4 border-red-500 rounded-full top-1/2"></div>
          </div>
          <div class="relative p-4 my-6 text-gray-800  bg-blue-400 rounded-xl col-start-6 col-end-10 mr-auto">
            <h3 class="md:text-HSub text-HSub-sm font-semibold lg:text-xl">
              Exceptional Support
            </h3>
            <p class="mt-2 md:text-Para text-Para-sm leading-6">
              Our dedicated support team is always available to assist you,
              ensuring a smooth and hassle-free experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
