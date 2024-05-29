//http://localhost:3000/industries/fieldService

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FaCheck } from "react-icons/fa";


const fildService = () => {
  return (
<main>
<section className="relative w-full h-[80vh] min-h-[500px] flex items-center justify-center">
  <div className="absolute inset-0 bg-black">
    <Image
      alt="Heroic Figure"
      className="absolute inset-0 object-cover opacity-80  object-center"
      layout="fill"
      objectFit="cover"
      src="https://images.unsplash.com/photo-1560264280-88b68371db39?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    />
  </div>
  <div className="relative z-10 max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black drop-shadow-lg">
      Unleash Your Inner Hero
    </h1>
    <p className="mt-4 text-lg sm:text-xl lg:text-2xl font-semibold text-black drop-shadow-lg">
      Embark on an extraordinary ver the hero within. Lorem ing elit. Voluptate illo corrupti maiores aut! Sequi ut quam, iste suscipit corrupti porro.
    </p>
    <div className="mt-8">
      <Link
        className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        href="#"
      >
        Contact Us
      </Link>
    </div>
  </div>
</section>

<section className="flex mx-10 flex-col md:flex-row items-center justify-between gap-8 px-4 md:px-6 py-12 md:py-24 lg:py-32">
      <div className="flex-1 max-w-xl">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">Unlock the Power of Video</h2>
        <p className="text-gray-500 dark:text-gray-400 mb-6">
          Discover how our video platform can transform your business. With cutting-edge features and seamless
          integration, you'll be able to create, manage, and share videos like never before.
        </p>
        <ul className="space-y-3 text-gray-500 dark:text-gray-400">
          <li className="flex items-start">
            <FaCheck className="w-5 h-5 mr-3 text-gray-900 dark:text-gray-50" />
            <span>Intuitive video editor</span>
          </li>
          <li className="flex items-start">
            <FaCheck className="w-5 h-5 mr-3 text-gray-900 dark:text-gray-50" />
            <span>Powerful analytics and insights</span>
          </li>
          <li className="flex items-start">
            <FaCheck className="w-5 h-5 mr-3 text-gray-900 dark:text-gray-50" />
            <span>Seamless platform integration</span>
          </li>
        </ul>
      </div>
      <div className="flex-1 w-full md:max-w-[500px] rounded-xl overflow-hidden">
        <img
          alt="Video Thumbnail"
          className="w-full h-auto object-cover"
          height={450}
          src="/placeholder.svg"
          style={{
            aspectRatio: "800/450",
            objectFit: "cover",
          }}
          width={800}
        />
      </div>
    </section>

</main>
  )
}

export default fildService