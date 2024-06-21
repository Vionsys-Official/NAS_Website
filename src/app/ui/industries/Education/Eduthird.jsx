import Link from "next/link";
import React from "react";
import Button from "@/components/ui/Button";
const Eduthird = () => {
  return (
    <>
      {/* CTA section/Main section */}
      <div className="flex justify-center py-5">
        <section className="py-5 shadow-xl rounded-b-2xl mb-4 w-[90vw] md:w-[80vw] bg-gray-200">
          <div className="max-w-screen-xl mx-auto px-4 md:text-center text-center md:px-8">
            <div className="max-w-xl space-y-3 md:mx-auto">
              <h3 className="text-slate-600 font-semibold">Education services</h3>
              <p className="text-blue2 text-3xl font-bold sm:text-4xl">
                Build the future with us
              </p>
              <p className="text-slate-600 md:text-lg text-Para-sm font-semibold">
                At NAS Infotech, we are dedicated to pioneering innovative
                solutions that transform learning and empower the next
                generation.
              </p>
            </div>
            <div className="mt-4">
              <Button />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Eduthird;
