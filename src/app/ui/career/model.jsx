"use client"
import React from 'react'
import { useState } from 'react';
import { Modal, message } from 'antd';
import { JobSchema } from '@/utils/CardSchema';

const model = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [job, setJob] = useState('');
  const [experience, setExperience] = useState('');
  const [resume, setResume] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [errors, setErrors] = useState({});


  const showModal = () => {
      setIsModalOpen(true);
  };

  const handleOk = () => {
      setIsModalOpen(false);
  };

  const handleCancel = () => {
      setIsModalOpen(false);
  };

  const logInputValue = () => {
    const data = { name, email, phone, job, experience, resume };

    try {
      // Validate form data against schema
      JobSchema.parse(data);
      console.log('Valid data:', data);
      message.success("Applied Successfully!");
      handleCancel();
      setName("");
      setEmail("");
      setPhone("");
      setJob("");
      setExperience("");
      setResume(null);
      setErrors({});
    } catch (error) {
      console.error('Validation error:', error);
      setErrors(error.errors.reduce((acc, curr) => {
        acc[curr.path[0]] = curr.message;
        return acc;
      }, {}));
      message.error("Please fix the errors in the form.");
    }
  };

  const handleResumeChange = (e) => {
    const file = e.target.files[0];
    setResume(file);
  };

  return (
    <div className='flex items-center justify-center'>
        <button onClick={showModal} className="relative px-4 py-1 text-white rounded-md bg-indigo-400  isolation-auto z-10 border-2 border-lime-500
        before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-right-full before:hover:right-0 before:rounded-full  before:bg-indigo-500 before:-z-10  before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700">Apply</button>
        <Modal className='backdrop-blur' footer={null} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <h2 className='flex items-center justify-center font-bold text-xl pb-10 pt-2'>Application form</h2>
        <div className="flex -mx-3">
          <div className="w-full px-3 mb-5">
            <label className="text-xs md:text-sm font-semibold px-1">Full Name<span className='text-red-700'> *</span></label>
            <div className="flex">
              <input type="text" id="Name" className="w-full bg-gray-100 -ml-15 pl-5 sm:pl-10 pr-1 py-1 sm:pr-3 sm:py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="Enter name" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            {errors.name && (
              <div className="text-red-500 text-xs font-thin px-4">
                {errors.name}
              </div>
            )}
          </div>
        </div>
        <div className="flex -mx-3">
          <div className="w-full px-3 mb-5">
            <label className="text-xs md:text-sm font-semibold px-1">Email Address<span className='text-red-700'> *</span></label>
            <div className="flex">
              <input type="email" className="w-full bg-gray-100 -ml-15 pl-5 sm:pl-10 pr-1 py-1 sm:pr-3 sm:py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="Enter email address" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            {errors.email && (
              <div className="text-red-500 text-xs font-thin px-4">
                {errors.email}
              </div>
            )}
          </div>
        </div>
        <div className="flex -mx-3">
          <div className="w-full px-3 mb-5">
            <label className="text-xs md:text-sm font-semibold px-1">Mobile number<span className='text-red-700'> *</span></label>
            <div className="flex">
              <input type="tel" className="w-full bg-gray-100 -ml-15 pl-5 sm:pl-10 pr-1 py-1 sm:pr-3 sm:py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="Enter mobile number" value={phone} onChange={(e) => setPhone(e.target.value)} />
            </div>
            {errors.phone && (
              <div className="text-red-500 text-xs font-thin px-4">
                {errors.phone}
              </div>
            )}
          </div>
        </div>
        <div className="flex -mx-3">
          <div className="w-full px-3 mb-5">
            <label className="text-xs md:text-sm font-semibold px-1">Job Position Applied for<span className='text-red-700'> *</span></label>
            <div className="flex">
              <input type="text" id="job" className="w-full bg-gray-100 -ml-15 pl-5 sm:pl-10 pr-1 py-1 sm:pr-3 sm:py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="Enter position applied for" value={job} onChange={(e) => setJob(e.target.value)} />
            </div>
            {errors.job && (
              <div className="text-red-500 text-xs font-thin px-4">
                {errors.job}
              </div>
            )}
          </div>
        </div>
        <div className="flex -mx-3">
          <div className="w-full px-3 mb-5">
            <label className="text-xs md:text-sm font-semibold px-1">Years of Experience<span className='text-red-700'> *</span></label>
            <div className="flex">
              <select className="w-full bg-gray-100 -ml-15 pl-5 sm:pl-10 pr-1 py-1 sm:pr-3 sm:py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" value={experience} onChange={(e) => setExperience(e.target.value)}>
                <option>Please Select</option>
                <option>less than 1 year</option>
                <option>1-3 years</option>
                <option>3-5 years</option>
                <option>5+ years</option>
              </select>
            </div>
            {errors.experience && (
              <div className="text-red-500 text-xs font-thin px-4">
                {errors.experience}
              </div>
            )}
          </div>
        </div>
        <div className="flex -mx-3">
          <div className="w-full px-3 mb-5">
            <label className="text-xs md:text-sm font-semibold px-1">Resume<span className='text-red-700'> *</span></label>
            <div className="flex">
              <input type="file" className="w-full bg-gray-100 -ml-15 pl-2 md:pl-6 pr-1 py-1 sm:pr-3 sm:py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="Upload resume" onChange={handleResumeChange} />
            </div>
            {errors.resume && (
              <div className="text-red-500 text-xs font-thin px-4">
                {errors.resume}
              </div>
            )}
          </div>
        </div>
        <div className="flex -mx-3">
          <div className="w-full px-3 mb-5">
            <button className="block w-full max-w-xs mx-auto relative px-4 py-1 text-white hover:text-lime-500 rounded-md bg-lime-500  isolation-auto z-10 border-2 border-lime-500
        before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-right-full before:hover:right-0 before:rounded-full  before:bg-white before:-z-10  before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700" onClick={logInputValue}>Submit</button>
          </div>
        </div>                  
        </Modal>
    </div>
  );
};

export default model;