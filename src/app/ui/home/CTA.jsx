import React from "react";
import Link from "next/link";
const CTA = () => {
  return (
    <div>
      <section className="w-full py-8 md:py-24 lg:py-10">
        <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight bg-gradient-to-l from-green-400 to-blue-900 bg-clip-text text-transparent">
              Experience the innovation and efficiency firsthand. Contact us now
              to embark on your journey to excellence.
            </h2>
            <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Empower your team to prioritize feature delivery over
              infrastructure management with our automated solutions. Streamline
              your development process and accelerate your time to market.
            </p>
          </div>
          <div className="mx-auto w-full max-w-sm space-y-2">
            <Link
              className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
              href="/contact"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>{" "}
    </div>
  );
};

export default CTA;
