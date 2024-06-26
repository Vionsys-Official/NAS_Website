import React from "react";
import Link from "next/link";

export const Linkbutton = () => {
  return (
    <div className="mt-2">
      <Link href={"#card"}>
      <button
        className="relative px-6 py-1 text-white  rounded-lg bg-green-500  isolation-auto z-10
        before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-right-full before:hover:right-0 before:rounded-full  before:bg-green-600 before:-z-10  before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-500"
      >
        Explore Job Opportunities
      </button>
      </Link>
    </div>
  );
};

export default Linkbutton;
