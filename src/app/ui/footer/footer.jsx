import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import Aboutsec2 from '/public/assets/aboutUs/aboutsec2.jpg'
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';


const Footer = () => {
  return (
    <footer className="bg-violet-950 w-full  text-white ">
      {/* <Image
      className='absolute h-auto object-contain z-0 w-full'
       src={Aboutsec2}/> */}
    <div className="flex flex-wrap relative z-20 px-4 pt-8 items-start justify-evenly gap-8">
      
      <div className='md:w-72 w-auto'>
        <h2 className="text-lg font-semibold mb-4">About Us</h2>
        <p className="text-sm">
          NAS INFOTECH PRIVATE LIMITED provides innovative IT services to help your business succeed in the digital era. From Software Development to AI, we have the expertise to elevate your business.
        </p>

        <h2 className="text-lg font-semibold md:mt-10 mb-4">Follow Us</h2>
        <div className="flex space-x-4">
          <Link href="https://facebook.com">
            <button className="text-white hover:text-blue-500" aria-label="Facebook">
              <FaFacebook size={24} />
            </button>
          </Link>
          <Link href="https://twitter.com">
            <button className="text-white hover:text-blue-400" aria-label="Twitter">
              <FaTwitter size={24} />
            </button>
          </Link>
          <Link href="https://linkedin.com">
            <button className="text-white hover:text-blue-600" aria-label="LinkedIn">
              <FaLinkedin size={24} />
            </button>
          </Link>
          <Link href="https://instagram.com">
            <button className="text-white hover:text-pink-500" aria-label="Instagram">
              <FaInstagram size={24} />
            </button>
          </Link>
          </div>
      </div>

      <div className='md:w-fit w-full'>
        <h2 className="text-lg font-semibold mb-4">Services</h2>
        <ul className="text-sm space-y-2">
          <li><Link href={""}>Software Development</Link></li>
          <li><Link href={""}>Testing and Quality Analysis</Link></li>
          <li><Link href={""}>Cloud Computing</Link></li>
          <li><Link href={""}>Customer Relationship Management</Link></li>
          <li><Link href={""}>DevOps Solution</Link></li>
          <li><Link href={""}>Big Data Analytics</Link></li>
          <li><Link href={""}>Artificial Intelligence</Link></li>
          <li><Link href={""}>Web Development</Link></li>
          <li><Link href={""}>IT Staffing</Link></li>
          <li><Link href={""}>Service Support</Link></li>
        </ul>
      </div>

      <div className='md:w-60 w-full'>
        
        <h2 className="text-lg font-semibold mb-4">Contact Info</h2>
        <p className="text-sm mb-4">
        Phone - +91 70586 06885
        </p>
        <p className="text-sm mb-4">
        Email: hr@nasinfotech.com
        </p>
        <p className="text-sm">
        Office No: 503, 06th Floor, Stellar Spaces, Opposite Zensar Company, Kharadi, Pune - 411014
        </p>
        
      </div>

      <div className='md:w-fit w-full'>
      <h2 className="text-lg font-semibold mb-4">Get to Know Us</h2>
        <div className='flex flex-col text-sm'>
        <Link href={""}>About Us</Link>
        <Link href={""}>Career</Link>
        <Link href={""}>Home</Link>
        <Link href={""}>Contact Us</Link>
        </div>

        
      </div>
      
    </div>
  
    <div className="text-sm h-20 relative px-4 z-20 flex items-center justify-center">
      &copy; NAS INFOTECH PRIVATE LIMITED. All rights reserved.
    </div>
  </footer>
  )
}

export default Footer