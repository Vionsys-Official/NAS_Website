import React from 'react'
import Image from 'next/image';
import Png from '/public/assets/services/digitalMarketing/browser.gif';
import Traffic from '/public/assets/services/digitalMarketing/traffic.gif';
import Laptop from '/public/assets/services/digitalMarketing/laptop.gif';
import Span from '@/app/ui/services/digitalMarketing/span';
import Monitor from '/public/assets/services/digitalMarketing/monitor.gif';
import View from '/public/assets/services/digitalMarketing/view.gif';
import List from '/public/assets/services/digitalMarketing/list.gif';
import Wireframe from '/public/assets/services/digitalMarketing/wireframe.gif';
import Startup from '/public/assets/services/digitalMarketing/startup.gif';

const sectionThree = () => {
  return (
    <section id='faqs'>
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
                                We optimize your website to secure higher rankings on search engine results pages. Through comprehensive keywords research, on-page optimization and strategic link-building, we propel your brand to the forefront of search engine algorithms. Our dedicated team of experts is committed to delivering the tangible results, driving targeted traffic and maximizing your ROI. With our tailored approach and continuous refinement, we ensure that your online presence remains competitive and adaptable in the ever-evolving landscapes of search engine optimization. Trust us to navigate the complexities of SEO and unlock the full potential of your digital marketing efforts.

                        </p>
                        <div className='flex justify-evenly items-center flex-wrap gap-5 text-white'>
                            <div className='p-4 px-6 flex flex-col gap-4 border rounded-xl'>
                                <div className='flex justify-center'>
                                <Image
                                className='h-20 w-20 rounded-xl'
                                src={Png}
                                alt=''
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
                                src={Traffic}
                                alt=''
                                />
                                </div>
                                <h4>Drive organic traffic to your site</h4>
                            </div>
                            <div className='p-4 px-6 flex flex-col gap-4 border rounded-xl'>
                            <div className='flex justify-center'>
                                <Image
                                className='h-20 w-20 rounded-xl'
                                src={Laptop}
                                alt=''
                                />
                                </div>
                                <h4>Increase search rankings for targeted keywords</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
             <Span/>
        </div>
    </div>
    
</section>


<section className="relative max-w-full z-10 overflow-hidden backdrop-blur pt-16 pb-10 px-8">
    <div className="container">
        <div className="flex flex-wrap items-center">
            <div className="w-full px-4">
                <div className="text-center lg:text-left ">
                    <div className="mb-10 lg:mb-0 ">
                        <h1
                            className="mt-0 mb-3 text-3xl font-bold leading-tight sm:text-4xl sm:leading-tight md:text-[40px] md:leading-tight text-blue-900 ">
                            Pay-Per-Click Advertising (PPC)</h1>
                        <p
                            className="w-full mb-8 text-base font-medium leading-relaxed sm:text-md sm:leading-relaxed text-gray-900">
                               At NAS Infotech Pvt Ltd, we offer comprehensive PPC advertising services designed to maximize your return on investment (ROI) 
                               and drive meaningful results for your business. Our PPC experts are skilled in creating, managing, and optimizing campaigns across
                                various platforms, including Google Ads, Bing Ads, Facebook Ads, Instagram Ads, LinkedIn Ads, and more.
                        </p>
                        <div className='flex justify-evenly items-center flex-wrap gap-5 text-black'>
                            <div className='p-4 px-6 flex flex-col gap-4 border border-black rounded-xl'>
                            <div className='flex justify-center'>
                                <Image
                                className='h-20 w-20 rounded-xl'
                                src={Monitor}
                                alt=''
                                />
                                </div>
                                <h4>Get immediate traffic with Google Ads and Bing Ads
                                </h4>
                            </div>
                            <div className='p-4 px-6 flex flex-col gap-4 border border-black rounded-xl'>
                            <div className='flex justify-center'>
                                <Image
                                className='h-20 w-20 rounded-xl'
                                src={View}
                                alt=''
                                />
                                </div>
                                <h4>Target your audience with precision</h4>
                            </div>
                            <div className='p-4 px-6 flex flex-col gap-4 border border-black rounded-xl'>
                            <div className='flex justify-center'>
                                <Image
                                className='h-20 w-20 rounded-xl'
                                src={List}
                                alt=''
                                />
                                </div>
                                <h4>Optimize ad spend for maximum ROI</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
             
        </div>
    </div>
    <Span/>
</section>

<section className="relative max-w-full z-10 overflow-hidden bg-cyan-700 pt-16 pb-10 px-8">
    <div className="container">
        <div className="flex flex-wrap items-center">
            <div className="w-full px-4">
                <div className="text-center lg:text-left ">
                    <div className="mb-10 lg:mb-0 ">
                        <h1
                            className="mt-0 mb-3 text-3xl font-bold leading-tight sm:text-4xl sm:leading-tight md:text-[40px] md:leading-tight text-white ">
                            Content Marketing</h1>
                        <p
                            className="w-full mb-8 text-base font-medium leading-relaxed sm:text-md sm:leading-relaxed text-gray-200">
                                we captivate your audience and establish your brand as a thought leader in your industry.
                                 With a focus on delivering valuable and relevant content, we aim to educate, 
                                 inspire and engage your audience, driving organic growth and fostering long-term
                                  customer relationships. Trust us to craft tailored content strategies that resonate 
                                  with your audience and elevate your brand's presence in the digital landscape.
                        </p>
                        <div className='flex justify-evenly items-center flex-wrap gap-5 text-white'>
                            <div className='p-4 px-6 flex flex-col gap-4 border rounded-xl'>
                            <div className='flex justify-center'>
                                <Image
                                className='h-20 w-20 rounded-xl'
                                src={Wireframe}
                                alt=''
                                />
                                </div>
                                <h4>Develop high-quality, relevant
                                     content for your audience
                                </h4>
                            </div>
                            <div className='p-4 px-6 flex flex-col gap-4 border rounded-xl'>
                            <div className='flex justify-center'>
                                <Image
                                className='h-20 w-20 rounded-xl'
                                src={Startup}
                                alt=''
                                />
                                </div>
                                <h4>Enhance brand credibility and authority</h4>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
             
        </div>
    </div>
    <Span/>
</section>

    </section>
  )
}

export default sectionThree