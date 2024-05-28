import React from 'react';
import Image from 'next/image';
import slAewave from '/public/assets/services/salesforce/slaewave.png'
import sect1TadyImage from '/public/assets/services/salesforce/sect1TadyImage.png'
import section2Image from '/public/assets/services/salesforce/section2Image.jpg'
import section3Image from '/public/assets/services/salesforce/section3Image.jpg'
import { FaCloud } from "react-icons/fa6";
import { RiQuestionnaireFill } from "react-icons/ri";
import { MdOutlineVerified } from "react-icons/md";
import Link from 'next/link';


const Salesforce = () => {
  return (
    <main >
      {/* 1 section */}
      <section className="relative h-screen p-5">
        <div className="absolute inset-0">
          <Image
            src={slAewave}
            alt="Background vansh"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="flex items-end justify-center md:justify-end mt-14">
          <Image
            src={sect1TadyImage}
            alt="Salesforce Logo"
            width={280}
            height={280} />
        </div>
        <div className="absolute inset-0 flex items-center justify-center bg-opacity-75 ">
          <div className="px-4 py-3 mx-auto text-center text-black">

            <h1 className="text-3xl font-extrabold tracking-tight sm:text-5xl md:text-5xl font-title">
              <span className="block text-black">Elevate Your Business with Our</span>
              <span className="block pt-2 text-blue-600">Salesforce Services </span>
            </h1>

            <p className="max-w-md mx-auto mt-3 text-lg text-gray-700 md:mt-5  md:max-w-3xl">
              Empower your business with our tailored Salesforce services. Streamline operations, boost customer relationships and drive growth in today's dynamic digital landscape.
              <span className='block text-gray-800  mt-5 font-semibold'>Let us be your trusted partner in harnessing the full potential of Salesforce.</span>
            </p>
            <Link class="text-center m-5 inline-block w-40 rounded-full bg-blue-500 bg-opacity-10 px-4 py-2 font-semibold text-blue-800 duration-200 hover:bg-opacity-95 hover:text-white hover:no-underline sm:w-48"
              href="/">Get in tuch</Link>
          </div>
        </div>
      </section>

      {/* 2 section */}
      <section>
        <div className="max-w-screen-xl mx-auto md:py-5 sm-py-6 px-6">

          <div className="mx-auto flex max-w-[58rem] p-5 flex-col items-center space-y-4 text-center">

            <h2 className=" text-4xl sm:text-4xl font-extrabold"><span className="text-black mx-1  relative inline-block stroke-current">
              Features
              <svg className="absolute -bottom-0.5 text-blue-600 w-full max-h-1.5" viewBox="0 0 55 5" xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none">
                <path d="M0.652466 4.00002C15.8925 2.66668 48.0351 0.400018 54.6853 2.00002" stroke-width="2"></path>
              </svg>
            </span></h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              Explore the incredible offerings provided by us to enrich your online visibility.
            </p>
          </div>

          <div className="flex flex-col md:flex-row p-10">

            <div className="mr-0 md:mr-8 my-20 md:mb-0">
              <Image className="mx-auto shadow-xl shadow-gray-300" width={400} height={600} src={section2Image} alt="can_help_banner" />
            </div>


            <div className="flex-1 flex flex-col sm:flex-row flex-wrap -mb-4 -mx-2">
              <div className="w-full sm:w-1/2 mb-4 px-2 py-1">
                <div className="flex gap-4 items-start">
                  <span className="text-blue-600 bg-violet-500/10 p-3 rounded-full">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5"><path d="M0.849976 1.74998C0.849976 1.25292 1.25292 0.849976 1.74998 0.849976H3.24998C3.74703 0.849976 4.14998 1.25292 4.14998 1.74998V2.04998H10.85V1.74998C10.85 1.25292 11.2529 0.849976 11.75 0.849976H13.25C13.747 0.849976 14.15 1.25292 14.15 1.74998V3.24998C14.15 3.74703 13.747 4.14998 13.25 4.14998H12.95V10.85H13.25C13.747 10.85 14.15 11.2529 14.15 11.75V13.25C14.15 13.747 13.747 14.15 13.25 14.15H11.75C11.2529 14.15 10.85 13.747 10.85 13.25V12.95H4.14998V13.25C4.14998 13.747 3.74703 14.15 3.24998 14.15H1.74998C1.25292 14.15 0.849976 13.747 0.849976 13.25V11.75C0.849976 11.2529 1.25292 10.85 1.74998 10.85H2.04998V4.14998H1.74998C1.25292 4.14998 0.849976 3.74703 0.849976 3.24998V1.74998ZM2.94998 4.14998V10.85H3.24998C3.74703 10.85 4.14998 11.2529 4.14998 11.75V12.05H10.85V11.75C10.85 11.2529 11.2529 10.85 11.75 10.85H12.05V4.14998H11.75C11.2529 4.14998 10.85 3.74703 10.85 3.24998V2.94998H4.14998V3.24998C4.14998 3.74703 3.74703 4.14998 3.24998 4.14998H2.94998ZM2.34998 1.74998H1.74998V2.34998V2.64998V3.24998H2.34998H2.64998H3.24998V2.64998V2.34998V1.74998H2.64998H2.34998ZM5.09998 5.99998C5.09998 5.50292 5.50292 5.09998 5.99998 5.09998H6.99998C7.49703 5.09998 7.89998 5.50292 7.89998 5.99998V6.99998C7.89998 7.03591 7.89787 7.07134 7.89378 7.10618C7.92861 7.10208 7.96405 7.09998 7.99998 7.09998H8.99998C9.49703 7.09998 9.89998 7.50292 9.89998 7.99998V8.99998C9.89998 9.49703 9.49703 9.89998 8.99998 9.89998H7.99998C7.50292 9.89998 7.09998 9.49703 7.09998 8.99998V7.99998C7.09998 7.96405 7.10208 7.92861 7.10618 7.89378C7.07134 7.89787 7.03591 7.89998 6.99998 7.89998H5.99998C5.50292 7.89998 5.09998 7.49703 5.09998 6.99998V5.99998ZM6.09998 5.99998H5.99998V6.09998V6.89998V6.99998H6.09998H6.89998H6.99998V6.89998V6.09998V5.99998H6.89998H6.09998ZM7.99998 7.99998H8.09998H8.89998H8.99998V8.09998V8.89998V8.99998H8.89998H8.09998H7.99998V8.89998V8.09998V7.99998ZM2.64998 11.75H2.34998H1.74998V12.35V12.65V13.25H2.34998H2.64998H3.24998V12.65V12.35V11.75H2.64998ZM11.75 1.74998H12.35H12.65H13.25V2.34998V2.64998V3.24998H12.65H12.35H11.75V2.64998V2.34998V1.74998ZM12.65 11.75H12.35H11.75V12.35V12.65V13.25H12.35H12.65H13.25V12.65V12.35V11.75H12.65Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg></span>
                  <div>
                    <h3 className="font-semibold text-xl">Customer Experience</h3>
                    <p className="mt-1 text-gray-500">In an increasingly competitive landscape, prioritizing customer experience can be a key differentiator
                      for businesses. Salesforce's tools for understanding and engaging</p>
                  </div>
                </div>
              </div>
              <div className="w-full sm:w-1/2 mb-4 px-2 py-1 ">
                <div className="flex gap-4 items-start">
                  <span className="text-blue-600 bg-violet-500/10 p-3 rounded-full">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5"><path d="M0.849976 1.74998C0.849976 1.25292 1.25292 0.849976 1.74998 0.849976H3.24998C3.74703 0.849976 4.14998 1.25292 4.14998 1.74998V2.04998H10.85V1.74998C10.85 1.25292 11.2529 0.849976 11.75 0.849976H13.25C13.747 0.849976 14.15 1.25292 14.15 1.74998V3.24998C14.15 3.74703 13.747 4.14998 13.25 4.14998H12.95V10.85H13.25C13.747 10.85 14.15 11.2529 14.15 11.75V13.25C14.15 13.747 13.747 14.15 13.25 14.15H11.75C11.2529 14.15 10.85 13.747 10.85 13.25V12.95H4.14998V13.25C4.14998 13.747 3.74703 14.15 3.24998 14.15H1.74998C1.25292 14.15 0.849976 13.747 0.849976 13.25V11.75C0.849976 11.2529 1.25292 10.85 1.74998 10.85H2.04998V4.14998H1.74998C1.25292 4.14998 0.849976 3.74703 0.849976 3.24998V1.74998ZM2.94998 4.14998V10.85H3.24998C3.74703 10.85 4.14998 11.2529 4.14998 11.75V12.05H10.85V11.75C10.85 11.2529 11.2529 10.85 11.75 10.85H12.05V4.14998H11.75C11.2529 4.14998 10.85 3.74703 10.85 3.24998V2.94998H4.14998V3.24998C4.14998 3.74703 3.74703 4.14998 3.24998 4.14998H2.94998ZM2.34998 1.74998H1.74998V2.34998V2.64998V3.24998H2.34998H2.64998H3.24998V2.64998V2.34998V1.74998H2.64998H2.34998ZM5.09998 5.99998C5.09998 5.50292 5.50292 5.09998 5.99998 5.09998H6.99998C7.49703 5.09998 7.89998 5.50292 7.89998 5.99998V6.99998C7.89998 7.03591 7.89787 7.07134 7.89378 7.10618C7.92861 7.10208 7.96405 7.09998 7.99998 7.09998H8.99998C9.49703 7.09998 9.89998 7.50292 9.89998 7.99998V8.99998C9.89998 9.49703 9.49703 9.89998 8.99998 9.89998H7.99998C7.50292 9.89998 7.09998 9.49703 7.09998 8.99998V7.99998C7.09998 7.96405 7.10208 7.92861 7.10618 7.89378C7.07134 7.89787 7.03591 7.89998 6.99998 7.89998H5.99998C5.50292 7.89998 5.09998 7.49703 5.09998 6.99998V5.99998ZM6.09998 5.99998H5.99998V6.09998V6.89998V6.99998H6.09998H6.89998H6.99998V6.89998V6.09998V5.99998H6.89998H6.09998ZM7.99998 7.99998H8.09998H8.89998H8.99998V8.09998V8.89998V8.99998H8.89998H8.09998H7.99998V8.89998V8.09998V7.99998ZM2.64998 11.75H2.34998H1.74998V12.35V12.65V13.25H2.34998H2.64998H3.24998V12.65V12.35V11.75H2.64998ZM11.75 1.74998H12.35H12.65H13.25V2.34998V2.64998V3.24998H12.65H12.35H11.75V2.64998V2.34998V1.74998ZM12.65 11.75H12.35H11.75V12.35V12.65V13.25H12.35H12.65H13.25V12.65V12.35V11.75H12.65Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg></span>
                  <div>
                    <h3 className="font-semibold text-xl">AI Integration</h3>
                    <p className="mt-1 text-gray-500"> The integration of AI and ML into Salesforce can empower users with predictive analytics
                      and automation capabilities, enabling more informed decision-making and personalized interactions</p>
                  </div>
                </div>
              </div>

              <div className="w-full sm:w-1/2 mb-4 px-2 py-1">
                <div className="flex gap-4 items-start">
                  <span className="text-blue-600 bg-violet-500/10 p-3 rounded-full">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5"><path d="M0.849976 1.74998C0.849976 1.25292 1.25292 0.849976 1.74998 0.849976H3.24998C3.74703 0.849976 4.14998 1.25292 4.14998 1.74998V2.04998H10.85V1.74998C10.85 1.25292 11.2529 0.849976 11.75 0.849976H13.25C13.747 0.849976 14.15 1.25292 14.15 1.74998V3.24998C14.15 3.74703 13.747 4.14998 13.25 4.14998H12.95V10.85H13.25C13.747 10.85 14.15 11.2529 14.15 11.75V13.25C14.15 13.747 13.747 14.15 13.25 14.15H11.75C11.2529 14.15 10.85 13.747 10.85 13.25V12.95H4.14998V13.25C4.14998 13.747 3.74703 14.15 3.24998 14.15H1.74998C1.25292 14.15 0.849976 13.747 0.849976 13.25V11.75C0.849976 11.2529 1.25292 10.85 1.74998 10.85H2.04998V4.14998H1.74998C1.25292 4.14998 0.849976 3.74703 0.849976 3.24998V1.74998ZM2.94998 4.14998V10.85H3.24998C3.74703 10.85 4.14998 11.2529 4.14998 11.75V12.05H10.85V11.75C10.85 11.2529 11.2529 10.85 11.75 10.85H12.05V4.14998H11.75C11.2529 4.14998 10.85 3.74703 10.85 3.24998V2.94998H4.14998V3.24998C4.14998 3.74703 3.74703 4.14998 3.24998 4.14998H2.94998ZM2.34998 1.74998H1.74998V2.34998V2.64998V3.24998H2.34998H2.64998H3.24998V2.64998V2.34998V1.74998H2.64998H2.34998ZM5.09998 5.99998C5.09998 5.50292 5.50292 5.09998 5.99998 5.09998H6.99998C7.49703 5.09998 7.89998 5.50292 7.89998 5.99998V6.99998C7.89998 7.03591 7.89787 7.07134 7.89378 7.10618C7.92861 7.10208 7.96405 7.09998 7.99998 7.09998H8.99998C9.49703 7.09998 9.89998 7.50292 9.89998 7.99998V8.99998C9.89998 9.49703 9.49703 9.89998 8.99998 9.89998H7.99998C7.50292 9.89998 7.09998 9.49703 7.09998 8.99998V7.99998C7.09998 7.96405 7.10208 7.92861 7.10618 7.89378C7.07134 7.89787 7.03591 7.89998 6.99998 7.89998H5.99998C5.50292 7.89998 5.09998 7.49703 5.09998 6.99998V5.99998ZM6.09998 5.99998H5.99998V6.09998V6.89998V6.99998H6.09998H6.89998H6.99998V6.89998V6.09998V5.99998H6.89998H6.09998ZM7.99998 7.99998H8.09998H8.89998H8.99998V8.09998V8.89998V8.99998H8.89998H8.09998H7.99998V8.89998V8.09998V7.99998ZM2.64998 11.75H2.34998H1.74998V12.35V12.65V13.25H2.34998H2.64998H3.24998V12.65V12.35V11.75H2.64998ZM11.75 1.74998H12.35H12.65H13.25V2.34998V2.64998V3.24998H12.65H12.35H11.75V2.64998V2.34998V1.74998ZM12.65 11.75H12.35H11.75V12.35V12.65V13.25H12.35H12.65H13.25V12.65V12.35V11.75H12.65Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg></span>
                  <div>
                    <h3 className="font-semibold text-xl">Integration with Emerging Technologies</h3>
                    <p className="mt-1 text-gray-500">Integrating with emerging technologies like blockchain, IoT and AR can unlock new opportunities for innovation and differentiatio</p>
                  </div>
                </div>
              </div>

              <div className="w-full sm:w-1/2 mb-4 px-2 py-1">
                <div className="flex gap-4 items-start">
                  <span className="text-blue-600 bg-violet-500/10 p-3 rounded-full">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5"><path d="M0.849976 1.74998C0.849976 1.25292 1.25292 0.849976 1.74998 0.849976H3.24998C3.74703 0.849976 4.14998 1.25292 4.14998 1.74998V2.04998H10.85V1.74998C10.85 1.25292 11.2529 0.849976 11.75 0.849976H13.25C13.747 0.849976 14.15 1.25292 14.15 1.74998V3.24998C14.15 3.74703 13.747 4.14998 13.25 4.14998H12.95V10.85H13.25C13.747 10.85 14.15 11.2529 14.15 11.75V13.25C14.15 13.747 13.747 14.15 13.25 14.15H11.75C11.2529 14.15 10.85 13.747 10.85 13.25V12.95H4.14998V13.25C4.14998 13.747 3.74703 14.15 3.24998 14.15H1.74998C1.25292 14.15 0.849976 13.747 0.849976 13.25V11.75C0.849976 11.2529 1.25292 10.85 1.74998 10.85H2.04998V4.14998H1.74998C1.25292 4.14998 0.849976 3.74703 0.849976 3.24998V1.74998ZM2.94998 4.14998V10.85H3.24998C3.74703 10.85 4.14998 11.2529 4.14998 11.75V12.05H10.85V11.75C10.85 11.2529 11.2529 10.85 11.75 10.85H12.05V4.14998H11.75C11.2529 4.14998 10.85 3.74703 10.85 3.24998V2.94998H4.14998V3.24998C4.14998 3.74703 3.74703 4.14998 3.24998 4.14998H2.94998ZM2.34998 1.74998H1.74998V2.34998V2.64998V3.24998H2.34998H2.64998H3.24998V2.64998V2.34998V1.74998H2.64998H2.34998ZM5.09998 5.99998C5.09998 5.50292 5.50292 5.09998 5.99998 5.09998H6.99998C7.49703 5.09998 7.89998 5.50292 7.89998 5.99998V6.99998C7.89998 7.03591 7.89787 7.07134 7.89378 7.10618C7.92861 7.10208 7.96405 7.09998 7.99998 7.09998H8.99998C9.49703 7.09998 9.89998 7.50292 9.89998 7.99998V8.99998C9.89998 9.49703 9.49703 9.89998 8.99998 9.89998H7.99998C7.50292 9.89998 7.09998 9.49703 7.09998 8.99998V7.99998C7.09998 7.96405 7.10208 7.92861 7.10618 7.89378C7.07134 7.89787 7.03591 7.89998 6.99998 7.89998H5.99998C5.50292 7.89998 5.09998 7.49703 5.09998 6.99998V5.99998ZM6.09998 5.99998H5.99998V6.09998V6.89998V6.99998H6.09998H6.89998H6.99998V6.89998V6.09998V5.99998H6.89998H6.09998ZM7.99998 7.99998H8.09998H8.89998H8.99998V8.09998V8.89998V8.99998H8.89998H8.09998H7.99998V8.89998V8.09998V7.99998ZM2.64998 11.75H2.34998H1.74998V12.35V12.65V13.25H2.34998H2.64998H3.24998V12.65V12.35V11.75H2.64998ZM11.75 1.74998H12.35H12.65H13.25V2.34998V2.64998V3.24998H12.65H12.35H11.75V2.64998V2.34998V1.74998ZM12.65 11.75H12.35H11.75V12.35V12.65V13.25H12.35H12.65H13.25V12.65V12.35V11.75H12.65Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg></span>
                  <div>
                    <h3 className="font-semibold text-xl">Data Privacy and Security</h3>
                    <p className="mt-1 text-gray-500"> data privacy regulations becoming more stringent, companies must prioritize security and compliance
                      strategies.Salesforce users need to ensure that they adhere to regulations.</p>
                  </div>
                </div>
              </div>

              <div className="w-full sm:w-1/2 mb-4 px-2 py-1">
                <div className="flex gap-4 items-start">
                  <span className="text-blue-600 bg-violet-500/10 p-3 rounded-full">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5"><path d="M0.849976 1.74998C0.849976 1.25292 1.25292 0.849976 1.74998 0.849976H3.24998C3.74703 0.849976 4.14998 1.25292 4.14998 1.74998V2.04998H10.85V1.74998C10.85 1.25292 11.2529 0.849976 11.75 0.849976H13.25C13.747 0.849976 14.15 1.25292 14.15 1.74998V3.24998C14.15 3.74703 13.747 4.14998 13.25 4.14998H12.95V10.85H13.25C13.747 10.85 14.15 11.2529 14.15 11.75V13.25C14.15 13.747 13.747 14.15 13.25 14.15H11.75C11.2529 14.15 10.85 13.747 10.85 13.25V12.95H4.14998V13.25C4.14998 13.747 3.74703 14.15 3.24998 14.15H1.74998C1.25292 14.15 0.849976 13.747 0.849976 13.25V11.75C0.849976 11.2529 1.25292 10.85 1.74998 10.85H2.04998V4.14998H1.74998C1.25292 4.14998 0.849976 3.74703 0.849976 3.24998V1.74998ZM2.94998 4.14998V10.85H3.24998C3.74703 10.85 4.14998 11.2529 4.14998 11.75V12.05H10.85V11.75C10.85 11.2529 11.2529 10.85 11.75 10.85H12.05V4.14998H11.75C11.2529 4.14998 10.85 3.74703 10.85 3.24998V2.94998H4.14998V3.24998C4.14998 3.74703 3.74703 4.14998 3.24998 4.14998H2.94998ZM2.34998 1.74998H1.74998V2.34998V2.64998V3.24998H2.34998H2.64998H3.24998V2.64998V2.34998V1.74998H2.64998H2.34998ZM5.09998 5.99998C5.09998 5.50292 5.50292 5.09998 5.99998 5.09998H6.99998C7.49703 5.09998 7.89998 5.50292 7.89998 5.99998V6.99998C7.89998 7.03591 7.89787 7.07134 7.89378 7.10618C7.92861 7.10208 7.96405 7.09998 7.99998 7.09998H8.99998C9.49703 7.09998 9.89998 7.50292 9.89998 7.99998V8.99998C9.89998 9.49703 9.49703 9.89998 8.99998 9.89998H7.99998C7.50292 9.89998 7.09998 9.49703 7.09998 8.99998V7.99998C7.09998 7.96405 7.10208 7.92861 7.10618 7.89378C7.07134 7.89787 7.03591 7.89998 6.99998 7.89998H5.99998C5.50292 7.89998 5.09998 7.49703 5.09998 6.99998V5.99998ZM6.09998 5.99998H5.99998V6.09998V6.89998V6.99998H6.09998H6.89998H6.99998V6.89998V6.09998V5.99998H6.89998H6.09998ZM7.99998 7.99998H8.09998H8.89998H8.99998V8.09998V8.89998V8.99998H8.89998H8.09998H7.99998V8.89998V8.09998V7.99998ZM2.64998 11.75H2.34998H1.74998V12.35V12.65V13.25H2.34998H2.64998H3.24998V12.65V12.35V11.75H2.64998ZM11.75 1.74998H12.35H12.65H13.25V2.34998V2.64998V3.24998H12.65H12.35H11.75V2.64998V2.34998V1.74998ZM12.65 11.75H12.35H11.75V12.35V12.65V13.25H12.35H12.65H13.25V12.65V12.35V11.75H12.65Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg></span>
                  <div>
                    <h3 className="font-semibold text-xl">Customization and Flexibility</h3>
                    <p className="mt-1 text-gray-500"> Salesforce's customization capabilities enable companies to tailor the platform to their specific needs and workflows. Investing in customizations and integrations</p>
                  </div>
                </div>
              </div>

              <div className="w-full sm:w-1/2 mb-4 px-2 py-1">
                <div className="flex gap-4 items-start">
                  <span className="text-blue-600 bg-violet-500/10 p-3 rounded-full">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5"><path d="M0.849976 1.74998C0.849976 1.25292 1.25292 0.849976 1.74998 0.849976H3.24998C3.74703 0.849976 4.14998 1.25292 4.14998 1.74998V2.04998H10.85V1.74998C10.85 1.25292 11.2529 0.849976 11.75 0.849976H13.25C13.747 0.849976 14.15 1.25292 14.15 1.74998V3.24998C14.15 3.74703 13.747 4.14998 13.25 4.14998H12.95V10.85H13.25C13.747 10.85 14.15 11.2529 14.15 11.75V13.25C14.15 13.747 13.747 14.15 13.25 14.15H11.75C11.2529 14.15 10.85 13.747 10.85 13.25V12.95H4.14998V13.25C4.14998 13.747 3.74703 14.15 3.24998 14.15H1.74998C1.25292 14.15 0.849976 13.747 0.849976 13.25V11.75C0.849976 11.2529 1.25292 10.85 1.74998 10.85H2.04998V4.14998H1.74998C1.25292 4.14998 0.849976 3.74703 0.849976 3.24998V1.74998ZM2.94998 4.14998V10.85H3.24998C3.74703 10.85 4.14998 11.2529 4.14998 11.75V12.05H10.85V11.75C10.85 11.2529 11.2529 10.85 11.75 10.85H12.05V4.14998H11.75C11.2529 4.14998 10.85 3.74703 10.85 3.24998V2.94998H4.14998V3.24998C4.14998 3.74703 3.74703 4.14998 3.24998 4.14998H2.94998ZM2.34998 1.74998H1.74998V2.34998V2.64998V3.24998H2.34998H2.64998H3.24998V2.64998V2.34998V1.74998H2.64998H2.34998ZM5.09998 5.99998C5.09998 5.50292 5.50292 5.09998 5.99998 5.09998H6.99998C7.49703 5.09998 7.89998 5.50292 7.89998 5.99998V6.99998C7.89998 7.03591 7.89787 7.07134 7.89378 7.10618C7.92861 7.10208 7.96405 7.09998 7.99998 7.09998H8.99998C9.49703 7.09998 9.89998 7.50292 9.89998 7.99998V8.99998C9.89998 9.49703 9.49703 9.89998 8.99998 9.89998H7.99998C7.50292 9.89998 7.09998 9.49703 7.09998 8.99998V7.99998C7.09998 7.96405 7.10208 7.92861 7.10618 7.89378C7.07134 7.89787 7.03591 7.89998 6.99998 7.89998H5.99998C5.50292 7.89998 5.09998 7.49703 5.09998 6.99998V5.99998ZM6.09998 5.99998H5.99998V6.09998V6.89998V6.99998H6.09998H6.89998H6.99998V6.89998V6.09998V5.99998H6.89998H6.09998ZM7.99998 7.99998H8.09998H8.89998H8.99998V8.09998V8.89998V8.99998H8.89998H8.09998H7.99998V8.89998V8.09998V7.99998ZM2.64998 11.75H2.34998H1.74998V12.35V12.65V13.25H2.34998H2.64998H3.24998V12.65V12.35V11.75H2.64998ZM11.75 1.74998H12.35H12.65H13.25V2.34998V2.64998V3.24998H12.65H12.35H11.75V2.64998V2.34998V1.74998ZM12.65 11.75H12.35H11.75V12.35V12.65V13.25H12.35H12.65H13.25V12.65V12.35V11.75H12.65Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg></span>
                  <div>
                    <h3 className="font-semibold text-xl">Continued Growth</h3>
                    <p className="mt-1 text-gray-500"> As cloud-based solutions become more ubiquitous and companies increasingly adopt CRM systems, Salesforce is poised to maintain its growth trajectory</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* 3 section */}
      <section>
        <h2
          className=" text-center font-heading  bg-blue-100 text-blue-800 px-4 py-2 rounded-lg md:w-64 md:mx-auto text-xl font-semibold tracking-widest uppercase title-font">
          Why choose us?
        </h2>
        <div className="container flex flex-col px-6 py-5 mx-auto space-y-6 lg:h-[25rem] lg:py-7 lg:flex-row lg:items-center">
          <div className="w-full lg:w-1/2">
            <div className="lg:max-w-lg">
              <h1 className="text-3xl font-semibold tracking-wide text-gray-800 dark:text-white lg:text-4xl">Comprehensive Services for Your Salesforce Needs</h1>
              <p className="mt-4 text-gray-600 dark:text-gray-300">Experience seamless Salesforce integration and expert support from our dedicated team, ensuring your business thrives with streamlined implementation and strategic consulting services.</p>
              <div className="grid gap-6 mt-8 sm:grid-cols-2">


                <div className="flex items-center text-gray-800 -px-3 dark:text-gray-200">
                  <MdOutlineVerified className='text-xl' />
                  <span className="mx-3">Salesforce Integration</span>
                </div>

                <div className="flex items-center text-gray-800 -px-3 dark:text-gray-200">
                  <MdOutlineVerified className='text-xl' />
                  <span className="mx-3">Salesforce Support</span>
                </div>

                <div className="flex items-center text-gray-800 -px-3 dark:text-gray-200">
                  <MdOutlineVerified className='text-xl' />
                  <span className="mx-3">Salesforce Implementation</span>
                </div>

                <div className="flex items-center text-gray-800 -px-3 dark:text-gray-200">
                  <MdOutlineVerified className='text-xl' />
                  <span className="mx-3">Salesforce Consulting</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center w-full h-96 lg:w-1/2">
            <Image className="object-cover rounded-md shadow-lg" width={500} height={500} src={section3Image} alt="glasses photo" />
          </div>
        </div>

      </section>

      {/* 4 section */}

      <section >
        <div className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <div className="lg:text-center">

              <p className="font-heading mt-2   text-3xl leading-8 font-semibold tracking-tight text-gray-900 sm:text-4xl">
                Transform Your Business with Salesforce Cloud
              </p>

            </div>

            <div className="mt-10">
              <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">

                <div className="relative duration-300 transform bg-white  hover:-translate-y-2 cursor-pointer">
                  <dt>
                    <FaCloud className="absolute top-0 left-0 mt-1 ml-1 text-2xl text-blue-600" />
                    <p className="font-heading ml-16 text-lg leading-6 font-bold text-gray-700">Sales Cloud</p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-800">
                    Transform your sales process with Sales Cloud, a comprehensive sales CRM platform that empowers your team to sell smarter and faster. From lead management to pipeline forecasting, Sales Cloud provides the tools you need to close deals and drive revenue.
                  </dd>
                </div>

                <div className="relative duration-300 transform bg-white hover:-translate-y-2 cursor-pointer">
                  <dt>
                    <FaCloud className="absolute top-0 left-0 mt-1 ml-1 text-2xl text-blue-600" />
                    <p className="font-heading ml-16 text-lg leading-6 font-bold text-gray-700">Marketing Cloud

                    </p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-800"> Engage customers at every touchpoint with Marketing Cloud. This integrated marketing platform allows you to create personalized, data-driven marketing campaigns, automate customer journeys and measure the impact of your marketing efforts.
                  </dd>
                </div>
                <div className="relative duration-300 transform bg-white hover:-translate-y-2 cursor-pointer">
                  <dt>
                    <FaCloud className="absolute top-0 left-0 mt-1 ml-1 text-2xl text-blue-600" />
                    <p className="font-heading ml-16 text-lg leading-6 font-bold text-gray-700">Platform and App Cloud

                    </p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-800"> Customize and extend Salesforce to fit your unique business needs with Platform and App Cloud. Build custom applications, integrate with third-party systems and extend the power of Salesforce with low-code development tools.
                  </dd>
                </div>
                <div className="relative duration-300 transform bg-white hover:-translate-y-2 cursor-pointer">
                  <dt>
                    <FaCloud className="absolute top-0 left-0 mt-1 ml-1 text-2xl text-blue-600" />
                    <p className="font-heading ml-16 text-lg leading-6 font-bold text-gray-700">Service Cloud

                    </p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-800">Empower your customer service team with Service Cloud to deliver unparalleled customer experiences. This robust platform allows you to assist customers through various channels, expedite issue resolution with AI-driven tools and foster enduring customer connections.
                  </dd>
                </div>
              </dl>
            </div>

          </div>
        </div>
      </section>

      {/*  5 section */}
      <section>
        <div id="faq" className="mx-auto max-w-2xl divide-y divide-gray-900/10 lg:max-w-7xl p-4 md:p-8 dark:bg-gray-800">
          <h2 className="mt-2 font-header text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center dark:text-white">
            Frequently asked questions ?
          </h2>
          <div className="w-full h-[3px] bg-blue-500 mt-3"></div>

          <dl className="mt-10 space-y-8 divide-y divide-gray-900/10">

            <div className="pt-8 lg:grid lg:grid-cols-12 lg:gap-8">
              <dt className="text-base font-semibold leading-7 text-gray-900 lg:col-span-3 dark:text-gray-300 flex items-start">
                <RiQuestionnaireFill className="mr-2 mt-[5px] w-6 h-6 flex-shrink-0" />
                <span>How can Salesforce integration benefit my business?</span>
              </dt>
              <dd className="mt-4 lg:col-span-9 lg:mt-0">
                <p className="text-base leading-7 text-gray-600 dark:text-gray-400">
                  As a Salesforce service provider, we offer a wide range of services including Salesforce integration, support, implementation, consulting, and customization tailored to meet your specific business needs.
                </p>
              </dd>
            </div>

            <div className="pt-8 lg:grid lg:grid-cols-12 lg:gap-8">
              <dt className="text-base font-semibold leading-7 text-gray-900 lg:col-span-3 dark:text-gray-300 flex items-start">
                <RiQuestionnaireFill className="mr-2 mt-[5px] w-6 h-6 flex-shrink-0" />
                <span>What kind of support do you provide for Salesforce users?</span>
              </dt>
              <dd className="mt-4 lg:col-span-9 lg:mt-0">
                <p className="text-base leading-7 text-gray-600 dark:text-gray-400">
                  Our Salesforce support services encompass troubleshooting, issue resolution, user training, system maintenance, and ongoing technical assistance to ensure that your Salesforce platform operates smoothly and efficiently.
                </p>
              </dd>
            </div>

            <div className="pt-8 lg:grid lg:grid-cols-12 lg:gap-8">
              <dt className="text-base font-semibold leading-7 text-gray-900 lg:col-span-3 dark:text-gray-300 flex items-start">
                <RiQuestionnaireFill className="mr-2 mt-[5px] w-6 h-6 flex-shrink-0" />
                <span>Can you customize Salesforce to fit our unique needs?</span>
              </dt>
              <dd className="mt-4 lg:col-span-9 lg:mt-0">
                <p className="text-base leading-7 text-gray-600 dark:text-gray-400">
                  Yes, we offer Salesforce customization services to tailor the platform to your specific business requirements. Whether it's creating custom fields, workflows, reports, or dashboards, we ensure that Salesforce aligns perfectly with your processes and objectives.
                </p>
              </dd>
            </div>

            <div className="pt-8 lg:grid lg:grid-cols-12 lg:gap-8">
              <dt className="text-base font-semibold leading-7 text-gray-900 lg:col-span-3 dark:text-gray-300 flex items-start">
                <RiQuestionnaireFill className="mr-2 mt-[5px] w-6 h-6 flex-shrink-0" />
                <span>How can your Salesforce consulting services help my business?</span>
              </dt>
              <dd className="mt-4 lg:col-span-9 lg:mt-0">
                <p className="text-base leading-7 text-gray-600 dark:text-gray-400">
                  Our Salesforce consulting services involve working closely with your organization to understand your goals and challenges, providing strategic guidance, best practices, and expert advice to optimize your Salesforce usage and drive business growth.
                </p>
              </dd>
            </div>

          </dl>
        </div>
      </section>

    </main>
  );
};

export default Salesforce;
