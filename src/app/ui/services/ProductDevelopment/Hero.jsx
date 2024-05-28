import Image from "next/image";
import React from "react";
import ProductImage from "/public/assets/services/ProductDevelopment/product.jpg";
function Hero() {
  return (
    <section>
      <div className="relative w-full">
        <Image src={ProductImage} className="w-full h-auto object-cover " />

        <div className="absolute  inset-y-0 right-20 flex flex-col justify-center items-center w-1/2">
          <div>
            <span>
              <h1 className="text-white md:text-6xl text-xl font-extrabold  py-4">
                Product Development{" "}
              </h1>
              <p className="md:text-xl text-base text-white  pt-2 pb-4 ">
                Unlock innovation with our customized Product Development
                Solutions. Stay ahead in competitive markets with comprehensive
                services, state-of-the-art tools, and expert guidance.
              </p>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
