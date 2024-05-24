import React from "react";
import Image from "next/image";
import ChooseUs from "./images/chooseus1.jpg";
const Chooseus = () => {
  return (
    <section id="chooseus">
      <div className="grid overflow-x-hidden  md:grid-cols-2 px-6 py-4 grid-cols-1  justify-items-center items-center md:h-[80vh]">
        <div className="h-auto">
          <p
            data-aos="fade-right"
            className="font-extrabold text-4xl text-green-500"
          >
            What sets us apart?
          </p>
          <p data-aos="fade-left" className="text-teal-500 font-bold mt-5">
            Safeguard your brand with our comprehensive Devops and IT Solutions.
          </p>
          <p data-aos="fade-up" className="text-paragraph mt-5 mb-5">
            Select us for your IT needs, as we offer cutting-edge solutions, a
            team of highly skilled experts, dependable support, and a commitment
            to customer satisfaction to drive your business to success, We offer
            innovative IT solutions, employ a team of highly skilled experts,
            deliver dependable support, and prioritize customer satisfaction to
            help your business excel.
          </p>
        </div>

        <div className=" md:w-[40vw]">
          <Image className="rounded-3xl" src={ChooseUs} alt="img" />
        </div>
      </div>
    </section>
  );
};

export default Chooseus;
