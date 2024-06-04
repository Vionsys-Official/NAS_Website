import React, { useState } from "react";
import { Modal, message } from "antd";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import axios from "axios";

// File schema
const fileSchema = z.object({
  filename: z.string(),
  content: z.any(), // zod doesn't work well with instanceof(File) or FileList
});

// Define your form schema using zod
const formSchema = z.object({
  name: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  number: z.string().min(10, {
    message: "Number must be at least 10 characters.",
  }),
  email: z.string().email(),
  position: z.string().min(3, {
    message: "Position must be at least 3 characters.",
  }),
  experience: z.string().min(0, {
    message: "Experience must be at least 1 year.",
  }),
  attachments: z.array(fileSchema),
});

const JobModal = ({ isModalOpen, setisModalOpen }) => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      number: "",
      position: "",
      experience: "",
      attachments: undefined,
    },
  });

  const [isPending, setIsPending] = useState(false);

  const handleClose = () => {
    setisModalOpen(false);
  };

  const onSubmit = async (values) => {

    try {
      setIsPending(true);
      await axios.post("/api/sendCareerEmail", values, {
        headers: {
          "Content-Type": "form-data",
        },
      });

      setIsPending(false);
      message.success("Job Application submitted");
      // toast.success("Job Application submitted");
      form.reset({
        name: "",
        email: "",
        number: "",
        position: "",
        experience: "",
        attachments: undefined,
      }); 
    } catch (error) {
      console.error("Error:", error.response?.data || error.message);
      setIsPending(false);
      message.error(error?.message || "Failed to send Job Application");
    }
    form.reset();
  };

  return (
    <div>
      <Modal
        // title="Job Application"
        visible={isModalOpen}
        onCancel={handleClose}
        footer={null}
      >
        <h2 className='flex flex-col items-center justify-center font-bold text-xl pb-10 pt-2'>Job Application form</h2>
        <div className="w-full">
          <div className="p-2 border border-gray-300 sm:rounded-md">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)}>
                {/* Username and email */}

                  {/* Username field */}

                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter name" {...field} className="w-full bg-gray-100 -ml-15 pl-5 sm:pl-10 pr-1 py-1 sm:pr-3 sm:py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"/>
                          </FormControl>
                          <FormDescription></FormDescription>
                          <FormMessage className="text-red-500" />
                        </FormItem>
                      )}
                    />


                  {/* Email field */}
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email Address</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter your Email" {...field} className="w-full bg-gray-100 -ml-15 pl-5 sm:pl-10 pr-1 py-1 sm:pr-3 sm:py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"/>
                          </FormControl>
                          <FormDescription></FormDescription>
                          <FormMessage className="text-red-500" />
                        </FormItem>
                      )}
                    />


                    {/* Mobile number field */}
                    <FormField
                      control={form.control}
                      name="number"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Mobile number</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter mobile number" {...field} className="w-full bg-gray-100 -ml-15 pl-5 sm:pl-10 pr-1 py-1 sm:pr-3 sm:py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"/>
                          </FormControl>
                          <FormDescription></FormDescription>
                          <FormMessage className="text-red-500" />
                        </FormItem>
                      )}
                    />


                {/* Position and years of experience */}

                  {/* Position field */}
                    <FormField
                      control={form.control}
                      name="position"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Designation</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Enter Designation to apply"
                              {...field} className="w-full bg-gray-100 -ml-15 pl-5 sm:pl-10 pr-1 py-1 sm:pr-3 sm:py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                            />
                          </FormControl>
                          <FormDescription></FormDescription>
                          <FormMessage className="text-red-500" />
                        </FormItem>
                      )}
                    />


                  {/* Experience in years */}
                    <FormField
                      control={form.control}
                      name="experience"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Years of Experience</FormLabel>
                          <FormControl>
                            <Input
                            type='number'
                              placeholder="Years of Experience"
                              {...field} className="w-full bg-gray-100 -ml-15 pl-5 sm:pl-10 pr-1 py-1 sm:pr-3 sm:py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                            />
                          </FormControl>
                          <FormDescription></FormDescription>
                          <FormMessage className="text-red-500" />
                        </FormItem>
                      )}
                    />

                {/* Attachments */}
                <FormField
                  control={form.control}
                  name="attachments"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Your Resume</FormLabel>
                      <FormControl>
                        <Input
                          name="attachments"
                          type="file"
                          className="w-full bg-gray-100 -ml-15 pl-5 sm:pl-10 pr-1 py-1 sm:pr-3 sm:py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                          multiple
                          onChange={(e) => {
                            const files = e.target.files;
                            if (files) {
                              Promise.all(
                                Array.from(files).map(async (file) => ({
                                  filename: file.name,
                                  content: Buffer.from(
                                    await file.arrayBuffer()
                                  ).toString("base64"),
                                }))
                              ).then((filesArray) => {
                                field.onChange(filesArray);
                              });
                            }
                          }}
                        />
                      </FormControl>
                      <FormDescription></FormDescription>
                      <FormMessage className="text-red-500" />
                    </FormItem>
                  )}
                />

                <div className="mb-3 flex flex-col justify-center items-center p-3">
                  {!isPending ? (
                    <button type="submit" className="flex justify-center w-[10rem] rounded-xl px-4 py-2 bg-blue950 text-white font-bold">
                      Apply
                    </button>
                  ) : (
                    <button type="submit" className="flex justify-center w-[15rem] rounded-xl px-4 py-2 bg-blue950 text-white font-bold">
                      <svg
                        aria-hidden="true"
                        role="status"
                        className="inline w-5 h-5 me-3 text-white animate-spin"
                        viewBox="0 0 100 101"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                          fill="#E5E7EB"
                        />
                        <path
                          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                          fill="currentColor"
                        />
                      </svg>
                      Sending..
                    </button>
                  )}
                </div>
              </form>
            </Form>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default JobModal;
