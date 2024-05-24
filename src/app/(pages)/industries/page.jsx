import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import industres1 from "/public/assets/Industries/industres1.jpg";
import HeroSection from '@/utils/heroSection/HeroSection';



const page = () => {
  const ourServices = [
    
    {
      title: "Banking",
      imagesrc: "/assets/industries/banking.jpg",
      description: "Empower your financial institution with our tailored solutions. From secure transactions to regulatory compliance, we support your banking operations for optimal performance and customer satisfaction.",
    },
    {
      title: "E-commerce",
      imagesrc: "/assets/industries/E-commerce.jpg",
      description: "Drive online success with our customized solutions. From seamless shopping experiences to secure payment processing, we help you navigate the digital marketplace with ease and efficiency.",
    },
    {
      title: "Healthcare",
      imagesrc: "/assets/industries/Madical.jpg",
      description: "Transform patient care with our innovative solutions. From electronic health records to telemedicine platforms, we empower healthcare providers to deliver quality services with efficiency and precision.",
    },
    {
      title: "Education",
      imagesrc: "/assets/industries/Education.jpg",
      description: "Enhance learning experiences with our innovative solutions. From personalized platforms to administrative tools, we support educational institutions for success.",
    },
    {
      title: "Telicommunication",
      imagesrc: "/assets/industries/telicon.jpg",
      description: "Elevate connectivity with our advanced solutions. From network optimization to customer engagement tools, we empower telecom companies for seamless communication experiences.",
    },
    {
      title: "Manufacturing",
      imagesrc: "/assets/industries/manufacturer.jpg",
      description: "Drive efficiency with our customized solutions. From process optimization to supply chain management, we empower manufacturers for streamlined operations.",
    },
    {
      title: "Real Estate",
      imagesrc:"/assets/industries/realEstate.jpg",
      description: "Transform property management with our innovative solutions. From listings management to client portals, we empower real estate professionals for success in a competitive market.",
    },
    {
      title: "Logistics and Transportation",
      imagesrc: "/assets/industries/transport.jpg",
      description: "Optimize logistics with our tailored solutions. From route optimization to fleet management, we empower transportation companies for efficient and reliable operations.",
    },
  ];

  const heroSectionContent = {
    content: {
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      heading: 'Your Heading',
      title: 'Your Title',
    }
  };

  return (
    
    <main>
      {/* Hading Section*/}
      <HeroSection obj={heroSectionContent} />
      <section id="mission3" className="p-10 mx-auto">
        <div className=" mt-10 grid gap-5 row-gap-8 lg:grid-cols-2">
          <div>
            <Image
              width={600}
              height={600}
              className=" p-5 object-cover"
              src={industres1}
              alt=""/>
          </div>

          <div className="flex flex-col justify-center">
            <div className="max-w-xl">
              
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                Empowering Industries with
                <br className="hidden md:block"/>
                Cutting-Edge
                <span className="relative inline-block text-violet-900">
                    Software Solutions
                </span>
              </h2>

              <p className="text-base text-gray-700 md:text-lg">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae. explicabo.
              </p>
            </div>
            <div className="grid gap-5 row-gap-8 sm:grid-cols-2">
              <div className=" border-l-4 shadow-sm border-violet-900">
                <div className="h-full p-5  border-l-0 rounded-r">
                  <h6 className="mb-2 font-semibold leading-5">
                    I'll be sure to note that in my log
                  </h6>
                  <p className="text-sm text-gray-900">
                    Lookout flogging bilge rat main sheet bilge water nipper fluke
                    to go on account heave down.
                  </p>
                </div>
              </div>
              <div className=" border-l-4 shadow-sm border-violet-900">
                <div className="h-full p-5  border-l-0 rounded-r">
                  <h6 className="mb-2 font-semibold leading-5">
                    A business big enough that it could be listed
                  </h6>
                  <p className="text-sm text-gray-900">
                    Those options are already baked in with this model shoot me an
                    email clear.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cards Section */}
      <section className="bg-white p-5 ">
        <div class="max-w-3xl mx-auto text-center">
          <h1 class="text-4xl font-bold text-gray-900 leading-tight mb-2 pb-2 relative">
            <span class="bg-clip-text text-transparent bg-orange-600">Industries</span>
            <span class="absolute bottom-0 left-0 w-full h-[2px] bg-violet-950"></span>
          </h1>
        </div>
        <div className="flex flex-wrap justify-center gap-6 pt-5 px-4">
          {ourServices.map((service, index) => (
            <div key={index} className="group hover:bg-gray-100 hover:border-gray-400 w-[270px] rounded-md p-4 mx-2 bg-white border shadow-sm hover:shadow-lg transition overflow-hidden flex flex-col justify-between">
              <div>
                <Image
                  width={500}
                  height={500}
                  src={service.imagesrc}
                  alt={service.title}
                  className="h-[170px] w-full rounded-md object-cover transition-transform duration-300 ease-in-out transform group-hover:scale-105"
                />
                <div className="pt-2 px-1">
                  <h1 className="text-lg font-semibold">{service.title}</h1>
                  <p className="mt-3 text-sm text-gray-600">
                    {service.description}
                  </p>
                </div>
              </div>
              <div className='p-1'>
              <Link href="/">
              <button class="smky-btn3 p-[2px] relative hover:text-gray-100  after:absolute after:h-1 after:hover:h-[250%] after:hover:border-2 after:border-red-600 
              transition-all duration-500 hover:transition-all hover:duration-500 after:transition-all after:duration-500 
              after:hover:transition-all after:hover:duration-500 overflow-hidden z-20 after:z-[-20] after:bg-violet-900 
              after:rounded-t-full after:w-full after:bottom-0 after:left-0 text-gray-800">Read more</button>
              </Link>
            </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}

export default page;
