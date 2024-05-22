import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
const page = () => {
    const ourServices = [
        {
          title: "Banking",
          imagesrc: "https://images.unsplash.com/photo-1583508915901-b5f84c1dcde1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?",
        },
        {
          title: "E-commerce",
          imagesrc: "https://ethosolucoes.com/wp-content/uploads/2023/08/salesforce-blog_capa-2.png.webp",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing or itaque doloribus quam accusantium eum ",
        },
        {
          title: "Healthcare",
          imagesrc: "https://www.skillreactor.io/blog/wp-content/uploads/2024/04/Cybersecurity-Projects.jpeg",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?",
        },
        {
          title: "Education",
          imagesrc: "https://qualizeal.com/wp-content/uploads/2022/05/Software-Testing-Trends-for-the-Next-Decade-1.jpg",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?",
        },
        {
          title: "Telicommunication",
          imagesrc: "https://www.device42.com/blog/wp-content/uploads/2023/03/14_01edge-cloud-computing.jpg",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?",
        },
        {
          title: "Manufacturing",
          imagesrc: "https://everythinginclick.com/wp-content/uploads/2021/04/Why-Do-You-Need-to-Hire-a-Skilled-Web-Developer.png",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?",
        },
        {
          title: "Real Estate",
          imagesrc: "https://www.blink-it.pt/wp-content/uploads/2022/03/103_CRM.jpg",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?",
        },
        {
          title: "Logistics and Transportation", 
          imagesrc: "https://media.licdn.com/dms/image/C4D12AQER1LQYCjtCCA/article-cover_image-shrink_720_1280/0/1643372583060?e=2147483647&v=beta&t=lpCkmPFHR4_-ki2urA68bYVvDc-qFHEfJlfnYBz7zms",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?",
        },
      ];
      return (
        <main>
          <section id="mission2" className="px-4 sm:px-6 lg:px-8">
            <div className="mt-10 mx-auto max-w-6xl px-4 sm:px-6 p-5 flex gap-3 lg:flex-justify lg:flex flex-col lg:flex-row">
              <div className="sm:text-center mx-6 my-7 lg:text-left">
                <h1 className="text-2xl tracking-tight font-extrabold text-gray-800 sm:text-3xl md:text-3xl">
                  <span className="block xl:inline">Innovative Software for</span>
                  <span className="block text-indigo-600 xl:block"> Every Industry</span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <button className="inline-flex text-white bg-orange-500 border-0 py-2 px-6 focus:outline-none hover:bg-orange-600 rounded text-lg">Contact Us</button>
                </div>
              </div>
              <div className="lg:inset-y-0 lg:right-0 lg:w-1/2 my-4">
                <Image width={500} height={500} className="object-cover" src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80" alt="" />
              </div>
            </div>
          </section>
    
          <section className="bg-white p-2">
            <div className="max-w-[77rem] mx-auto mt-10">
              <h1 className="text-3xl text-center font-bold text-orange-600 leading-tight mb-2 border-t-2 border-b-2 border-indigo-600 py-2">
                 Industries
              </h1>
            </div>
    
            <div className="flex flex-wrap justify-center gap-6 pt-5 px-4">
              {ourServices.map((service, index) => (
                <div key={index} className=" hover:bg-gray-200 hover:border-gray-400 w-[270px] rounded-md p-4 mx-2 bg-white border shadow-sm hover:shadow-lg transition overflow-hidden flex flex-col justify-between">
                  <div>
                    <Image
                      width={500}
                      height={500}
                      src={service.imagesrc}
                      alt={service.title}
                      className="h-[170px] w-full rounded-md object-cover"
                    />
                    <div className="pt-2 px-1">
                      <h1 className="text-lg font-semibold">{service.title}</h1>
                      <p className="mt-3 text-sm text-gray-600">
                        {service.description}
                      </p>
                    </div>
                  </div>
                  <Link href="/">
                    <button
                      type="button"
                      className="mt-4 rounded-sm bg-indigo-800 px-2.5 py-1 text-[12px] font-semibold text-white shadow-sm hover:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                      Read more
                    </button>
                  </Link>
                </div>
              ))}
            </div>
          </section>
    
    
        </main>
  )
}

export default page