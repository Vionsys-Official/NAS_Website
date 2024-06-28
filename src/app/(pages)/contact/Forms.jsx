"use client";
import React, { useState } from "react";
import Form from "@/../public/assets/contact/Form.jpg";
import Image from "next/image";
import { ContactSchema } from "../../../schema/ContactUsSchema"; // Importing the Yup schema
import axios from "axios";
import { Toaster, toast } from "react-hot-toast"; // Importing Toaster and toast
import { motion } from "framer-motion";
const Forms = () => {
  const initialFormData = {
    fname: "",
    lname: "",
    number: "",
    email: "",
    subject: "",
    questions: "",
    message: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({}); // State to hold validation errors
  const [loading, setLoading] = useState(false); // State to handle loading

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading to true when the form is submitted

    try {
      // Validate form data against Yup schema
      await ContactSchema.validate(formData, { abortEarly: false });

      // If validation succeeds, proceed with form submission
      axios
        .post(`/api/sendEmail`, formData)
        .then((res) => {
          toast.success("Form submitted successfully!");
          setFormData(initialFormData); // Reset form data
        })
        .catch((err) => {
          toast.error("Something went wrong!");
        })
        .finally(() => {
          setLoading(false); // Set loading to false after form submission
        });
    } catch (validationErrors) {
      // If validation fails, set the validation errors state
      const errors = {};
      validationErrors.inner.forEach((error) => {
        errors[error.path] = error.message;
      });
      setErrors(errors);
      toast.error("Please fix the errors in the form.");
      setLoading(false); // Set loading to false if validation fails
    }
  };

  return (
    <>
      <Toaster /> {/* Toaster component to display notifications */}
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8">
          <div className="xl:mx-auto lg:w-[50vw] w-full ">
            <motion.h2
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                delay: 0.2,
                x: { type: "spring", stiffness: 30 },
                opacity: { duration: 0.6 },
                ease: "easeInOut"
              }}
              className="md:text-MainHeading text-MainHeading-sm font-extrabold text-blue2 text-center leading-tight py-6">
              Get In Touch
            </motion.h2>

            <motion.form
              initial={{ opacity: 0, scale: 0.6 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                delay: 0.2,
                scale: { type: "spring", stiffness: 30 },
                opacity: { duration: 0.5 },
                ease: "easeInOut"
              }}
              className="max-w-[90%] mx-auto" onSubmit={handleSubmit}>
              {/* FirstName, LastName, Email, Contact No */}
              <div className="grid md:grid-cols-2 md:gap-6">
                {/* First Name */}
                <div className="relative z-0 w-full group pb-4 md:py-0">
                  <input
                    type="text"
                    name="fname"
                    id="floating_first_name"
                    value={formData.fname}
                    onChange={handleChange}
                    className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer ${errors.fname ? "border-red-500" : "" // Add red border for validation error
                      }`}
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="floating_first_name"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    First name
                  </label>
                  {/* Display validation error message */}
                  {errors.fname && (
                    <p className="text-red-500 text-xs mt-1">{errors.fname}</p>
                  )}
                </div>
                {/* Last Name */}
                <div className="relative z-0 w-full  pb-4 md:py-0  group">
                  <input
                    type="text"
                    name="lname"
                    id="floating_last_name"
                    value={formData.lname}
                    onChange={handleChange}
                    className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer ${errors.lname ? "border-red-500" : "" // Add red border for validation error
                      }`}
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="floating_last_name"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Last name
                  </label>
                  {/* Display validation error message */}
                  {errors.lname && (
                    <p className="text-red-500 text-xs mt-1">{errors.lname}</p>
                  )}
                </div>

                {/* Phone Number */}
                <div className="relative z-0 w-full mb-5 group">
                  <input
                    type="tel"
                    name="number"
                    id="floating_phone"
                    value={formData.number}
                    onChange={handleChange}
                    className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer ${errors.number ? "border-red-500" : "" // Add red border for validation error
                      }`}
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="floating_phone"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Phone number
                  </label>
                  {/* Display validation error message */}
                  {errors.number && (
                    <p className="text-red-500 text-xs mt-1">{errors.number}</p>
                  )}
                </div>

                {/* Email */}
                <div className="relative z-0 w-full mb-5 group">
                  <input
                    type="email"
                    name="email"
                    id="floating_email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer ${errors.email ? "border-red-500" : "" // Add red border for validation error
                      }`}
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="floating_email"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Email Address
                  </label>
                  {/* Display validation error message */}
                  {errors.email && (
                    <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                  )}
                </div>
              </div>

              {/* subject, questions,message */}
              <div className="grid grid-cols-1">
                {/* Subject */}
                <div className="relative z-0 w-full mb-5 group">
                  <input
                    type="text"
                    name="subject"
                    id="floating_subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer ${errors.subject ? "border-red-500" : "" // Add red border for validation error
                      }`}
                    placeholder=""
                    required
                  />
                  <label
                    htmlFor="floating_subject"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Subject
                  </label>
                  {/* Display validation error message */}
                  {errors.subject && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.subject}
                    </p>
                  )}
                </div>

                {/* Questions */}
                <div className="relative z-0 w-full mb-5 group">
                  <select
                    id="questions"
                    name="questions"
                    value={formData.questions}
                    onChange={handleChange}
                    className="border-gray-300 outline-none text-gray-900 border-2 rounded-xl appearance-none text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option value="">Select a question type</option>
                    <option value="About Service">About Service</option>
                    <option value="Technical Question">
                      Technical Question
                    </option>
                    <option value="Career">Career</option>
                    <option value="Other Queries">Other Queries</option>
                  </select>
                  {/* Display validation error message */}
                  {errors.questions && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.questions}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div className="pb-4">
                  <label
                    htmlFor="message"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900"
                  >
                    Your message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className={`block p-2.5 w-full text-sm dark:border-gray-600 text-gray-900 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500 ${errors.message ? "border-red-500" : "" // Add red border for validation error
                      }`}
                    placeholder="Leave a comment..."
                    required
                  ></textarea>
                  {/* Display validation error message */}
                  {errors.message && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.message}
                    </p>
                  )}
                </div>
              </div>

              {/* button */}
              <div className="flex justify-center items-center">
                <button
                  type="submit"
                  className="relative px-6 py-2 text-white hover:border-white hover:border rounded-lg bg-green-500 isolation-auto z-10
        before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-right-full before:hover:right-0 before:rounded-full before:bg-blue-950 before:-z-10 before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-500"
                  disabled={loading} // Disable button while loading
                >
                  {loading ? (
                    <div className="flex items-center">
                      <svg
                        className="animate-spin h-5 w-5 mr-3 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8v8H4z"
                        ></path>
                      </svg>
                      Submitting...
                    </div>
                  ) : (
                    "Submit"
                  )}
                </button>
              </div>
            </motion.form>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 1.3 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            delay: 0.2,
            x: { type: "spring", stiffness: 30 },
            opacity: { duration: 0.5 },
            ease: "easeInOut"
          }}
          className="h-full w-full flex justify-center object-cover bg-cover items-center overflow-x-hidden">
          <Image
            src={Form}
            height={3000}
            width={3000}
            className="max-w-full object-cover lg:max-w-lg lg:h-[90vh] lg:w-[30vw] transition-all duration-300 rounded-lg filter grayscale hover:grayscale-0"
            alt="Image not found"
          />
        </motion.div>
      </div>
    </>
  );
};

export default Forms;
