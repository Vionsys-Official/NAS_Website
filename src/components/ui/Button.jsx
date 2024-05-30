import React from "react";

export const Button = () => {
  return (
    <>
      <button
        className="relative px-6 py-2 text-white hover:border-white hover:border  rounded-lg bg-green-500  isolation-auto z-10
        before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-right-full before:hover:right-0 before:rounded-full  before:bg-blue-950 before:-z-10  before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-500"
      >
        Contact Us
      </button>
    </>
  ); 
};

export default Button;
