import Link from 'next/link'
import React from 'react'

const Button2 = () => {
    return (
        <div>
            <Link href='/contact'>
                <button className="relative transition-all duration-300 ease-in-out shadow-xl px-5 py-2 bg-blue950 rounded-full flex items-center justify-center cursor-pointer text-white gap-2 font-semibold border-3 border-white/30 outline-none overflow-hidden text-sm hover:scale-105 hover:border-white/60 before:absolute before:w-24 before:h-full before:bg-gradient-to-r before:from-transparent before:via-white/80 before:to-transparent before:top-0 before:left-[-100px] before:opacity-60 before:animate-shine">
                    Get Started
                    <svg fill="currentColor" viewBox="0 0 24 24" className="w-7 h-7 transition-transform duration-300 ease-in-out hover:translate-x-1">
                        <path
                            clipRule="evenodd"
                            d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                            fillRule="evenodd"
                        ></path>
                    </svg>
                </button>
            </Link>
        </div>
    )
}

export default Button2