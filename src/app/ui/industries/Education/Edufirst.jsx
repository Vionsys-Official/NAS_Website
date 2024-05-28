import React from "react";
import Link from "next/link";
import Image from "next/image";
import edu1 from "/public/assets/industries/Education/edu1.jpg";
const Edufirst = () => {
  return (
    <div id="mission">
      <section className="h-full w-full">
        <section className="w-full pt-24 ">
          <div className="container grid items-center gap-8 px-4 md:px-6 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl bg-gradient-to-l from-green-400 to-blue-900 bg-clip-text text-transparent">
                Elevate Your Learning Experience
              </h1>
              <p className="max-w-[600px] text-gray-600 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our education service provider offers a comprehensive suite of
                programs and resources to help you achieve your academic and
                professional goals.
              </p>
              <Link
                className="inline-flex h-10 items-center justify-center rounded-md bg-black px-8 text-sm font-medium text-white shadow transition-colors hover:bg-[#0056b3] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#007bff] disabled:pointer-events-none disabled:opacity-50 dark:bg-[#007bff] dark:text-white dark:hover:bg-[#0056b3] dark:focus-visible:ring-[#007bff]"
                href="/contact"
              >
                Contact Us
              </Link>
            </div>
            <Image
              alt="Education Hero"
              className="mx-auto aspect-[3/2] overflow-hidden rounded-xl object-cover object-center sm:w-full"
              height="500"
              src={edu1}
            />
          </div>
        </section>
      </section>
    </div>
  );
};

export default Edufirst;
