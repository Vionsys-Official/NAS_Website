import React from "react";
import { contactData } from "@/utils/heroSection/data";
import HeroSection from "@/utils/heroSection/HeroSection";
import Image from "next/image";
import Laptop from "@/../public/assets/contact/Laptop.jpg";
import { Button } from "@/components/ui/Button.jsx";

function page() {
  return (
    <>
      {/* Hero Section */}
      <section>
        <HeroSection hero={contactData} />
      </section>

      {/* First Section */}
      <section className="lg:h-[60vh] w-[screen] flex justify-center gap-8 lg:px-6 px-1 py-4 items-center lg:flex-row flex-col ">
        {/* Left side */}
        <div className="shadow-lg p-4 shadow-slate-200 lg:w-[70vw]">
          <h1 className="mb-4 text-2xl text-center font-extrabold text-gray-600 md:text-3xl lg:text-4xl">
            <span className="text-transparent md:text-5xl lg:text-5xl text-3xl block bg-clip-text bg-gradient-to-r to-emerald-600 from-green-500">
              NAS Infotech
            </span>{" "}
            Pvt.Ltd.
          </h1>
          <blockquote className="text-lg  text-center font-normal text-gray-500 lg:text-lg dark:text-gray-400">
            <svg
              className="w-4 h-4 text-gray-400 dark:text-green-500 "
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 18 14"
            >
              <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
            </svg>
            <p className="first-letter:text-2xl">
              At NAS Infotech, we value your inquiries and feedback. Whether you
              need support, have questions about our services, or want to start
              a project, our team is here to help. We are committed to providing
              exceptional service and ensuring a seamless experience.
            </p>
          </blockquote>
        </div>

        {/* Right Side */}
        <div className=" lg:w-[70%] w-[100%]">
          <div className="relative mx-auto border-gray-800  dark:border-gray-800 bg-gray-800 border-[8px] rounded-t-xl h-[172px] max-w-[301px] md:h-[294px] md:max-w-[512px]">
            <div className="rounded-lg overflow-hidden h-[156px] md:h-[278px] bg-white dark:bg-gray-800">
              <Image
                src={Laptop}
                height={1000}
                width={1000}
                className="object-cover"
                alt="Image Not Forund"
              ></Image>
            </div>
          </div>
          <div className="relative mx-auto bg-gray-900 dark:bg-gray-700 rounded-b-xl rounded-t-sm h-[17px] max-w-[351px] md:h-[21px] md:max-w-[597px]">
            <div className="absolute left-1/2 top-0 -translate-x-1/2 rounded-b-xl w-[56px] h-[5px] md:w-[96px] md:h-[8px] bg-gray-800"></div>
          </div>
        </div>
      </section>

      {/* Second Section */}
      <section>
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
            <div className="xl:mx-auto lg:w-[70vw]  ">
              <h2 className="text-3xl font-bold text-center leading-tight text-black sm:text-4xl py-6">
                Get In Touch
              </h2>

              <form className="max-w-[90%] mx-auto">
                <div className="grid md:grid-cols-2 md:gap-6">
                  <div className="relative z-0 w-full group">
                    <input
                      type="text"
                      name="floating_first_name"
                      id="floating_first_name"
                      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                      required
                    />
                    <label
                      htmlFor="floating_first_name"
                      className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      First name
                    </label>
                  </div>
                  <div className="relative z-0 w-full    group">
                    <input
                      type="text"
                      name="floating_last_name"
                      id="floating_last_name"
                      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                      required
                    />
                    <label
                      for="floating_last_name"
                      className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Last name
                    </label>
                  </div>

                  <div className="relative z-0 w-full mb-5 group">
                    <input
                      type="tel"
                      pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                      name="floating_phone"
                      id="floating_phone"
                      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                      required
                    />
                    <label
                      for="floating_phone"
                      className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Phone number
                    </label>
                  </div>

                  <div className="relative z-0 w-full mb-5 group">
                    <input
                      type="email"
                      name="floating_email"
                      id="floating_email"
                      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                      required
                    />
                    <label
                      htmlFor="floating_email"
                      className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Email Address
                    </label>
                  </div>
                </div>

                <div className="relative z-0 w-full mb-5 group">
                  <input
                    type="text"
                    name="floating_subject"
                    id="floating_subject"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=""
                    required
                  />
                  <label
                    for="floating_subject"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Subject
                  </label>
                </div>

                <label
                  htmlFor="questions"
                  classNAme="block text-sm font-medium dark:text-gray-900"
                >
                  Questions?
                </label>
                <select
                  id="questions"
                  className="  border-gray-300 outline-none text-gray-900 border-2 rounded-xl appearance-none text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option>About Service</option>
                  <option>Technical Quesstion</option>
                  <option>Career</option>
                  <option>Other Querries</option>
                </select>

                <div className="py-4">
                  <label
                    htmlFor="message"
                    className="block mb-2 text-sm font-medium text-gray-900  dark:text-gray-900"
                  >
                    Your message
                  </label>
                  <textarea
                    id="message"
                    rows="4"
                    className="block p-2.5 w-full text-sm dark:border-gray-600 text-gray-900 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Leave a comment..."
                  ></textarea>
                </div>

                <div className="flex justify-center items-center">
                <Button/>
                </div>
              </form>

              <div className="mt-3 space-y-3"></div>
            </div>
          </div>
          <div className="h-full w-full">
            <img
              className="mx-auto h-full w-full rounded-md object-cover"
              src="https://images.unsplash.com/photo-1559526324-4b87b5e36e44?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1742&amp;q=80"
              alt=""
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default page;
