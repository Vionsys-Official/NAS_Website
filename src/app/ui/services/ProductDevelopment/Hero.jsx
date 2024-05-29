import Image from "next/image";
import React from "react";
import ProductImage from "/public/assets/services/ProductDevelopment/Productdevop.jpg";
function Hero() {
  return (
    <section>
      <div className="relative w-[100vw] h-[90vh] ">
        <Image src={ProductImage} className="w-full h-full object-cover " />

        <div className="absolute  inset-y-0 md:right-20 right-0 flex justify-center items-center md:w-1/3 w-full">
          <div>
            <span>
              {/* <h1 className="text-white md:text-5xl text-HMain-sm font-bold  py-4">
                Product Development{" "}
              </h1> */}
              <p className="md:text-HSub text-Para-sm text-white  pt-2 pb-4 ">
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
