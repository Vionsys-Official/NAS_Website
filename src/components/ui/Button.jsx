import React from "react";

export const Button = () => {
  return (
    <>
      <button
        className="relative px-4 py-1 text-white hover:text-lime-500 rounded-md bg-lime-500  isolation-auto z-10 border-2 border-lime-500
        before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-right-full before:hover:right-0 before:rounded-full  before:bg-white before:-z-10  before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700"
      >
        Contact us
      </button>
    </>
  );
};

export default Button;
