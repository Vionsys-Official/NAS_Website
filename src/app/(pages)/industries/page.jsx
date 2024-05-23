import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import industres1 from "/public/assets/Industries/industres1.jpg"
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

      <div className="p-10 pt-14 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-10 lg:pt-24">
        <div className="grid gap-5 row-gap-8 lg:grid-cols-2">

          <div>
            <Image
              width={600}
              height={600}
              className="m-5 pr-5 object-cover"
              src={industres1}
              alt=""
            />
          </div>

          <div className=" ml-5 flex flex-col justify-center">
            <div className="max-w-xl mb-6">
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                Empowering Industries with
                <br className="hidden md:block" />
                Cutting-Edge {' '}
                <span className="relative inline-block text-blue-700">
                  <div className="absolute inset-x-0 bottom-0 h-2 transform -skew-x-12 bg-orange-500" />
                  <span className="relative inline-flex whitespace-nowrap">
                    Software Solutions
                  </span>
                </span>
              </h2>

              <p className="text-base text-gray-700 md:text-lg">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae. explicabo.
              </p>
            </div>
            <div className="grid gap-5 row-gap-8 sm:grid-cols-2">
              <div className="bg-white border-l-4 shadow-sm border-blue-700">
                <div className="h-full p-5 border border-l-0 rounded-r">
                  <h6 className="mb-2 font-semibold leading-5">
                    I'll be sure to note that in my log
                  </h6>
                  <p className="text-sm text-gray-900">
                    Lookout flogging bilge rat main sheet bilge water nipper fluke
                    to go on account heave down.
                  </p>
                </div>
              </div>
              <div className="bg-white border-l-4 shadow-sm border-blue-700">
                <div className="h-full p-5 border border-l-0 rounded-r">
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
      </div>

      <section className="bg-white p-2">
      <div class="max-w-3xl mx-auto text-center mt-16">
    <h1 class="text-4xl font-bold text-gray-900 leading-tight mb-2 pb-4 relative">
        <span class="bg-clip-text text-transparent bg-gradient-to-r to-orange-700 from-blue-700">Industries</span>
        <span class="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r to-orange-700 from-blue-700"></span>
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