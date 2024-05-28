import SectionOne from '@/app/ui/services/digitalMarketing/sectionOne'
import React from 'react'
import Image from 'next/image';
import SectionTwo from '@/app/ui/services/digitalMarketing/sectionTwo';
import Png from '/public/assets/services/digitalMarketing/browser.gif';


const page = () => {
  return (
    <main id='mission'>
    
    <SectionOne/>

    <SectionTwo/> 

    <section>
    <section className="relative max-w-full z-10 overflow-hidden bg-emerald-700 pt-16 pb-10 px-8">
    <div className="container">
        <div className="flex flex-wrap items-center">
            <div className="w-full px-4">
                <div className="text-center lg:text-left ">
                    <div className="mb-10 lg:mb-0 ">
                        <h1
                            className="mt-0 mb-3 text-3xl font-bold leading-tight sm:text-4xl sm:leading-tight md:text-[40px] md:leading-tight text-white ">
                            Search Engine Optimization (SEO)</h1>
                        <p
                            className="w-full mb-8 text-base font-medium leading-relaxed sm:text-md sm:leading-relaxed text-gray-200">
                                We optimize your website to secure higher rankings on search engine results pages. 
                                Through comprehensive keyword research, on-page optimization and strategic link-building, 
                                we propel your brand to the forefront of search engine algorithms. Our dedicated team of experts is 
                                committed to delivering tangible results, driving targeted traffic and maximizing your ROI. With our 
                                tailored approach and continuous refinement, we ensure that your online presence remains competitive and 
                                adaptable in the ever-evolving landscape of search engine optimization. Trust us to navigate the complexities 
                                of SEO and unlock the full potential of your digital marketing efforts.

                        </p>
                        <div className='flex justify-evenly items-center flex-wrap gap-5 text-white'>
                            <div className='p-4 px-6 flex flex-col gap-4 border rounded-xl'>
                                <div className='flex justify-center'>
                                <Image
                                className='h-20 w-20 rounded-xl'
                                src={Png}
                                />
                                </div>
                                <h4>Improve your website’s visibility
                                    on search engines
                                </h4>
                            </div>
                            <div className='p-4 px-6 flex flex-col gap-4 border rounded-xl'>
                            <div className='flex justify-center'>
                                <Image
                                className='h-20 w-20 rounded-xl'
                                src={Png}
                                />
                                </div>
                                <h4>Drive organic traffic to your site</h4>
                            </div>
                            <div className='p-4 px-6 flex flex-col gap-4 border rounded-xl'>
                            <div className='flex justify-center'>
                                <Image
                                className='h-20 w-20 rounded-xl'
                                src={Png}
                                />
                                </div>
                                <h4>Increase search rankings for targeted keywords</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
             
        </div>
    </div>
    <span className="absolute top-0 right-0 -z-10">
        <svg width="388" height="250" viewBox="0 0 388 220" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path opacity="0.05" d="M203 -28.5L4.87819e-05 250.5L881.5 250.5L881.5 -28.5002L203 -28.5Z" fill="url(#paint0_linear_971_6910)"></path>
            <defs><linearGradient id="paint0_linear_971_6910" x1="60.5" y1="111" x2="287" y2="111" gradientUnits="userSpaceOnUse"><stop offset="0.520507" stop-color="white"></stop>
            <stop offset="1" stop-color="white" stop-opacity="0"></stop></linearGradient></defs></svg></span><span className="absolute top-0 right-0 -z-10"><svg width="324" height="250" 
            viewBox="0 0 324 220" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.05" d="M203 -28.5L4.87819e-05 250.5L881.5 250.5L881.5 -28.5002L203 -28.5Z" 
            fill="url(#paint0_linear_971_6911)"></path><defs><linearGradient id="paint0_linear_971_6911" x1="60.5" y1="111" x2="287" y2="111" gradientUnits="userSpaceOnUse">
                <stop offset="0.520507" stop-color="white"></stop><stop offset="1" stop-color="white" stop-opacity="0"></stop></linearGradient></defs></svg></span>
                <span className="absolute top-4 left-4 -z-10"><svg width="43" height="56" viewBox="0 0 43 56" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity="0.5">
                    <circle cx="40.9984" cy="1.49626" r="1.49626" transform="rotate(90 40.9984 1.49626)" fill="white"></circle><circle cx="27.8304" cy="1.49626" r="1.49626" transform="rotate(90 27.8304 1.49626)" 
                    fill="white"></circle><circle cx="14.6644" cy="1.49626" r="1.49626" transform="rotate(90 14.6644 1.49626)" fill="white"></circle><circle cx="1.49642" cy="1.49626" r="1.49626" transform="rotate(90 1.49642 1.49626)" 
                    fill="white"></circle><circle cx="40.9984" cy="14.6642" r="1.49626" transform="rotate(90 40.9984 14.6642)" fill="white"></circle><circle cx="27.8304" cy="14.6642" r="1.49626" transform="rotate(90 27.8304 14.6642)" 
                    fill="white"></circle><circle cx="14.6644" cy="14.6642" r="1.49626" transform="rotate(90 14.6644 14.6642)" fill="white"></circle><circle cx="1.49642" cy="14.6642" r="1.49626" transform="rotate(90 1.49642 14.6642)" 
                    fill="white"></circle><circle cx="40.9984" cy="27.8302" r="1.49626" transform="rotate(90 40.9984 27.8302)" fill="white"></circle><circle cx="27.8304" cy="27.8302" r="1.49626" transform="rotate(90 27.8304 27.8302)" 
                    fill="white"></circle><circle cx="14.6644" cy="27.8302" r="1.49626" transform="rotate(90 14.6644 27.8302)" fill="white"></circle><circle cx="1.49642" cy="27.8302" r="1.49626" transform="rotate(90 1.49642 27.8302)" 
                    fill="white"></circle><circle cx="40.9984" cy="40.9982" r="1.49626" transform="rotate(90 40.9984 40.9982)" fill="white"></circle><circle cx="27.8304" cy="40.9963" r="1.49626" transform="rotate(90 27.8304 40.9963)" 
                    fill="white"></circle><circle cx="14.6644" cy="40.9982" r="1.49626" transform="rotate(90 14.6644 40.9982)" fill="white"></circle><circle cx="1.49642" cy="40.9963" r="1.49626" transform="rotate(90 1.49642 40.9963)" 
                    fill="white"></circle><circle cx="40.9984" cy="54.1642" r="1.49626" transform="rotate(90 40.9984 54.1642)" fill="white"></circle><circle cx="27.8304" cy="54.1642" r="1.49626" transform="rotate(90 27.8304 54.1642)" 
                    fill="white"></circle><circle cx="14.6644" cy="54.1642" r="1.49626" transform="rotate(90 14.6644 54.1642)" fill="white"></circle><circle cx="1.49642" cy="54.1642" r="1.49626" transform="rotate(90 1.49642 54.1642)" 
                    fill="white"></circle></g>
        </svg>
    </span>
</section>


<section className="relative max-w-full z-10 overflow-hidden bg-cyan-700 pt-16 pb-10 px-8">
    <div className="container">
        <div className="flex flex-wrap items-center">
            <div className="w-full px-4">
                <div className="text-center lg:text-left ">
                    <div className="mb-10 lg:mb-0 ">
                        <h1
                            className="mt-0 mb-3 text-3xl font-bold leading-tight sm:text-4xl sm:leading-tight md:text-[40px] md:leading-tight text-white ">
                            Pay-Per-Click Advertising (PPC)</h1>
                        <p
                            className="w-full mb-8 text-base font-medium leading-relaxed sm:text-md sm:leading-relaxed text-gray-200">
                               At NAS Infotech Pvt Ltd, we offer comprehensive PPC advertising services designed to maximize your return on investment (ROI) 
                               and drive meaningful results for your business. Our PPC experts are skilled in creating, managing, and optimizing campaigns across
                                various platforms, including Google Ads, Bing Ads, Facebook Ads, Instagram Ads, LinkedIn Ads, and more.
                        </p>
                        <div className='flex justify-evenly items-center flex-wrap gap-5 text-white'>
                            <div className='p-4 px-6 border rounded-xl'>
                                <h4>Get immediate traffic with Google Ads and Bing Ads
                                </h4>
                            </div>
                            <div className='p-4  px-6 border rounded-xl'>
                                <h4>Target your audience with precision</h4>
                            </div>
                            <div className='p-4  px-6 border rounded-xl'>
                                <h4>Optimize ad spend for maximum ROI</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
             
        </div>
    </div>
    <span className="absolute top-0 right-0 -z-10">
        <svg width="388" height="250" viewBox="0 0 388 220" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path opacity="0.05" d="M203 -28.5L4.87819e-05 250.5L881.5 250.5L881.5 -28.5002L203 -28.5Z" fill="url(#paint0_linear_971_6910)"></path>
            <defs><linearGradient id="paint0_linear_971_6910" x1="60.5" y1="111" x2="287" y2="111" gradientUnits="userSpaceOnUse"><stop offset="0.520507" stop-color="white"></stop>
            <stop offset="1" stop-color="white" stop-opacity="0"></stop></linearGradient></defs></svg></span><span className="absolute top-0 right-0 -z-10"><svg width="324" height="250" 
            viewBox="0 0 324 220" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.05" d="M203 -28.5L4.87819e-05 250.5L881.5 250.5L881.5 -28.5002L203 -28.5Z" 
            fill="url(#paint0_linear_971_6911)"></path><defs><linearGradient id="paint0_linear_971_6911" x1="60.5" y1="111" x2="287" y2="111" gradientUnits="userSpaceOnUse">
                <stop offset="0.520507" stop-color="white"></stop><stop offset="1" stop-color="white" stop-opacity="0"></stop></linearGradient></defs></svg></span>
                <span className="absolute top-4 left-4 -z-10"><svg width="43" height="56" viewBox="0 0 43 56" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity="0.5">
                    <circle cx="40.9984" cy="1.49626" r="1.49626" transform="rotate(90 40.9984 1.49626)" fill="white"></circle><circle cx="27.8304" cy="1.49626" r="1.49626" transform="rotate(90 27.8304 1.49626)" 
                    fill="white"></circle><circle cx="14.6644" cy="1.49626" r="1.49626" transform="rotate(90 14.6644 1.49626)" fill="white"></circle><circle cx="1.49642" cy="1.49626" r="1.49626" transform="rotate(90 1.49642 1.49626)" 
                    fill="white"></circle><circle cx="40.9984" cy="14.6642" r="1.49626" transform="rotate(90 40.9984 14.6642)" fill="white"></circle><circle cx="27.8304" cy="14.6642" r="1.49626" transform="rotate(90 27.8304 14.6642)" 
                    fill="white"></circle><circle cx="14.6644" cy="14.6642" r="1.49626" transform="rotate(90 14.6644 14.6642)" fill="white"></circle><circle cx="1.49642" cy="14.6642" r="1.49626" transform="rotate(90 1.49642 14.6642)" 
                    fill="white"></circle><circle cx="40.9984" cy="27.8302" r="1.49626" transform="rotate(90 40.9984 27.8302)" fill="white"></circle><circle cx="27.8304" cy="27.8302" r="1.49626" transform="rotate(90 27.8304 27.8302)" 
                    fill="white"></circle><circle cx="14.6644" cy="27.8302" r="1.49626" transform="rotate(90 14.6644 27.8302)" fill="white"></circle><circle cx="1.49642" cy="27.8302" r="1.49626" transform="rotate(90 1.49642 27.8302)" 
                    fill="white"></circle><circle cx="40.9984" cy="40.9982" r="1.49626" transform="rotate(90 40.9984 40.9982)" fill="white"></circle><circle cx="27.8304" cy="40.9963" r="1.49626" transform="rotate(90 27.8304 40.9963)" 
                    fill="white"></circle><circle cx="14.6644" cy="40.9982" r="1.49626" transform="rotate(90 14.6644 40.9982)" fill="white"></circle><circle cx="1.49642" cy="40.9963" r="1.49626" transform="rotate(90 1.49642 40.9963)" 
                    fill="white"></circle><circle cx="40.9984" cy="54.1642" r="1.49626" transform="rotate(90 40.9984 54.1642)" fill="white"></circle><circle cx="27.8304" cy="54.1642" r="1.49626" transform="rotate(90 27.8304 54.1642)" 
                    fill="white"></circle><circle cx="14.6644" cy="54.1642" r="1.49626" transform="rotate(90 14.6644 54.1642)" fill="white"></circle><circle cx="1.49642" cy="54.1642" r="1.49626" transform="rotate(90 1.49642 54.1642)" 
                    fill="white"></circle></g>
        </svg>
    </span>
</section>
    </section>

    </main>
  )
}

export default page