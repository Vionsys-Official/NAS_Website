import React from "react";
import CyberSecurity from "/public/assets/services/CyberSecurity/cs2.jpg";

import Image from "next/image";
import Link from "next/link";
function Hero() {
  return (
    <section className="">
      <div className="relative w-full h-[80vh] ">
        <Image
          src={CyberSecurity}
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex md:pt-52 pt-16 md:w-1/2 ">
          <div>
            <span>
              <h1 className="text-white md:text-5xl text-lg font-extrabold  pl-6 md:py-4 py-2">
                Cyber Security Solutions{" "}
              </h1>
              <p className="md:text-lg text-sm text-white pl-6 md:pt-2 pt-0 pb-4">
                Explore a full suite of advanced Cyber Security Solutions
                designed specifically to meet your unique requirements. Our
                comprehensive services strengthen your defenses and provide
                robust protection, ensuring your organization remains secure
                against a constantly evolving landscape of cyber threats.
                Safeguard your critical assets and maintain peace of mind with
                our state-of-the-art security measures and proactive threat
                management strategies.
              </p>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
